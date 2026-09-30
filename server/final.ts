// Live final test: state machine, server-side timing and scoring.
// Ported from the Supabase SQL functions; every transition checks the expected state,
// so a double click or a stale presenter tab is a harmless no-op.

import { db, nowIso, addMs, parseJson, round2, uuid } from './db.ts'
import { fail } from './http.ts'
import {
  questionIds,
  sessionSettings,
  toAnswer,
  toParticipant,
  toSession,
  type AnswerRow,
  type ParticipantRow,
  type SessionRow,
  type SessionSettings,
} from './mappers.ts'
import { emitAnswer, emitParticipants, emitSession } from './realtime.ts'
import { getFinalQuestion } from '../src/data/final/index.ts'
import type { FinalQuestion } from '../src/types/index.ts'

export const LIVE = ['lobby', 'question', 'reveal'] as const

const getSessionRow = (id: string) =>
  db.prepare('SELECT * FROM final_sessions WHERE id = ?').get(id) as SessionRow | undefined

function mustSession(id: string): SessionRow {
  const s = getSessionRow(id)
  if (!s) fail(404, 'session_not_found')
  return s as SessionRow
}

function questionOrFail(id: string): FinalQuestion {
  const q = getFinalQuestion(id)
  if (!q) fail(500, 'unknown_question')
  return q as FinalQuestion
}

/** The phone payload — never contains the answer key, explanation or rubric. */
function phonePayload(q: FinalQuestion) {
  return q.type === 'choice'
    ? { id: q.id, type: 'choice', scenario: q.scenario, question: q.question, options: q.options }
    : { id: q.id, type: 'open', scenario: q.scenario, question: q.question }
}

// ─── Reads ───────────────────────────────────────────────────────────────────

export function activeSession() {
  const r = db
    .prepare("SELECT * FROM final_sessions WHERE status IN ('lobby','question','reveal') ORDER BY created_at DESC LIMIT 1")
    .get() as SessionRow | undefined
  return r ? toSession(r) : null
}

export function sessionById(id: string) {
  const r = getSessionRow(id)
  return r ? toSession(r) : null
}

export function listSessions(limit: number) {
  return (db.prepare('SELECT * FROM final_sessions ORDER BY created_at DESC LIMIT ?').all(limit) as SessionRow[]).map(toSession)
}

export function participants(sessionId: string) {
  return (
    db
      .prepare('SELECT * FROM final_participants WHERE session_id = ? ORDER BY score DESC, joined_at ASC')
      .all(sessionId) as ParticipantRow[]
  ).map(toParticipant)
}

export function answers(sessionId: string, onlyUserId?: string) {
  const rows = onlyUserId
    ? (db
        .prepare('SELECT * FROM final_answers WHERE session_id = ? AND user_id = ? ORDER BY answered_at')
        .all(sessionId, onlyUserId) as AnswerRow[])
    : (db.prepare('SELECT * FROM final_answers WHERE session_id = ? ORDER BY answered_at').all(sessionId) as AnswerRow[])
  return rows.map(toAnswer)
}

// ─── Admin: create / transitions ────────────────────────────────────────────

export function createSession(input: { title: string; questionIds: string[]; settings: SessionSettings; createdBy: string }) {
  for (const id of input.questionIds) if (!getFinalQuestion(id)) fail(400, 'unknown_question')
  const create = db.transaction(() => {
    const live = db.prepare("SELECT id FROM final_sessions WHERE status IN ('lobby','question','reveal')").get()
    if (live) fail(409, 'live_session_exists')
    const id = uuid()
    db.prepare(
      `INSERT INTO final_sessions (id, title, status, question_ids, current_index, asked_count, settings, created_by, created_at)
       VALUES (?, ?, 'lobby', ?, -1, 0, ?, ?, ?)`,
    ).run(id, input.title, JSON.stringify(input.questionIds), JSON.stringify(input.settings), input.createdBy, nowIso())
    return mustSession(id)
  })
  const s = toSession(create())
  emitSession('created', s)
  return s
}

/** lobby/reveal → question (next). `questionId` (optional) must match the next question. */
export function openQuestion(sessionId: string, expectedIndex: number, questionId: string | null) {
  const run = db.transaction(() => {
    const s = mustSession(sessionId)
    if ((s.status !== 'lobby' && s.status !== 'reveal') || s.current_index !== expectedIndex) return { s, changed: false }
    const ids = questionIds(s)
    const next = s.current_index + 1
    if (next >= ids.length) return { s, changed: false }
    const qid = ids[next]
    if (questionId && questionId !== qid) fail(409, 'question_mismatch')
    const q = questionOrFail(qid)
    const settings = sessionSettings(s)
    const secs = q.type === 'choice' ? settings.choiceSeconds : settings.openSeconds
    const now = nowIso()
    db.prepare(
      `UPDATE final_sessions
          SET status = 'question', current_index = ?, asked_count = ?, current_question = ?, reveal = NULL,
              question_started_at = ?, question_deadline_at = ?
        WHERE id = ?`,
    ).run(next, next + 1, JSON.stringify(phonePayload(q)), now, addMs(now, secs * 1000), sessionId)
    return { s: mustSession(sessionId), changed: true }
  })
  const { s, changed } = run()
  const out = toSession(s)
  if (changed) emitSession('updated', out)
  return out
}

/** question → reveal: publishes the key, explanation and answer distribution. */
export function revealQuestion(sessionId: string, expectedIndex: number) {
  const run = db.transaction(() => {
    const s = mustSession(sessionId)
    if (s.status !== 'question' || s.current_index !== expectedIndex) return { s, changed: false }
    const qid = questionIds(s)[s.current_index]
    const q = questionOrFail(qid)
    const rows = db
      .prepare('SELECT answer_index, is_correct FROM final_answers WHERE session_id = ? AND question_id = ?')
      .all(sessionId, qid) as { answer_index: number | null; is_correct: number | null }[]
    const distribution = [0, 0, 0, 0]
    for (const r of rows) if (r.answer_index !== null && r.answer_index >= 0 && r.answer_index <= 3) distribution[r.answer_index]++
    const reveal = {
      questionId: qid,
      correctIndex: q.type === 'choice' ? q.correctIndex : null,
      explanation: q.type === 'choice' ? q.explanation : null,
      distribution,
      answered: rows.length,
      correctCount: rows.filter((r) => r.is_correct === 1).length,
    }
    db.prepare("UPDATE final_sessions SET status = 'reveal', reveal = ? WHERE id = ?").run(JSON.stringify(reveal), sessionId)
    return { s: mustSession(sessionId), changed: true }
  })
  const { s, changed } = run()
  const out = toSession(s)
  if (changed) emitSession('updated', out)
  return out
}

export function cancelSession(sessionId: string) {
  const res = db
    .prepare(
      "UPDATE final_sessions SET status = 'cancelled', finished_at = ?, current_question = NULL WHERE id = ? AND status IN ('lobby','question','reveal')",
    )
    .run(nowIso(), sessionId)
  const s = sessionById(sessionId)
  if (res.changes && s) emitSession('updated', s)
}

export function deleteSession(sessionId: string) {
  const s = mustSession(sessionId)
  if (s.status !== 'cancelled') fail(409, 'only_cancelled')
  db.prepare('DELETE FROM final_sessions WHERE id = ?').run(sessionId)
  emitSession('deleted', { id: sessionId })
}

/** Recompute the blended result (70 % choice + 30 % open) once open answers are graded. */
function recompute(sessionId: string, userId: string): void {
  const s = getSessionRow(sessionId)
  if (!s || s.status !== 'finished') return
  const asked = questionIds(s).slice(0, s.asked_count)
  const askedOpen = asked.filter((id) => getFinalQuestion(id)?.type === 'open').length
  const open = db
    .prepare(
      'SELECT open_score FROM final_answers WHERE session_id = ? AND user_id = ? AND answer_text IS NOT NULL',
    )
    .all(sessionId, userId) as { open_score: number | null }[]
  const openPoints = open.reduce((sum, r) => sum + (r.open_score ?? 0), 0)
  const pending = open.filter((r) => r.open_score === null).length
  const openMax = askedOpen * 5
  const gradingStatus = askedOpen === 0 || pending === 0 ? 'graded' : 'pending'
  const attempt = db
    .prepare("SELECT id, percent, details FROM test_attempts WHERE session_id = ? AND user_id = ? AND kind = 'final'")
    .get(sessionId, userId) as { id: string; percent: number; details: string } | undefined
  if (!attempt) return
  const details = parseJson<Record<string, unknown>>(attempt.details, {})
  const mcPct = typeof details.percentMc === 'number' ? details.percentMc : attempt.percent
  const percent = openMax > 0 && gradingStatus === 'graded' ? round2(mcPct * 0.7 + (openPoints / openMax) * 30) : mcPct
  db.prepare('UPDATE test_attempts SET percent = ?, details = ? WHERE id = ?').run(
    percent,
    JSON.stringify({ ...details, openPoints, openMax, gradingStatus }),
    attempt.id,
  )
}

/** Finish (idempotent). Denominator = choice questions actually asked; a missing answer counts as wrong. */
export function finishSession(sessionId: string) {
  const run = db.transaction(() => {
    const s = mustSession(sessionId)
    if (s.status === 'finished' || s.status === 'cancelled') return false
    const now = nowIso()
    if (s.status === 'lobby' || s.asked_count === 0) {
      db.prepare("UPDATE final_sessions SET status = 'cancelled', finished_at = ?, current_question = NULL WHERE id = ?").run(
        now,
        sessionId,
      )
      return true
    }
    const asked = questionIds(s).slice(0, s.asked_count)
    const askedChoice = asked.filter((id) => getFinalQuestion(id)?.type === 'choice').length
    const askedOpen = asked.filter((id) => getFinalQuestion(id)?.type === 'open').length

    const people = db.prepare('SELECT * FROM final_participants WHERE session_id = ?').all(sessionId) as ParticipantRow[]
    const stats = people.map((p) => {
      const rows = db
        .prepare('SELECT * FROM final_answers WHERE session_id = ? AND user_id = ? ORDER BY answered_at')
        .all(sessionId, p.user_id) as AnswerRow[]
      const correct = rows.filter((r) => r.is_correct === 1)
      return { p, rows, correct: correct.length, correctMs: correct.reduce((sum, r) => sum + (r.response_ms ?? 0), 0) }
    })
    // Rank by points; ties go to the faster total time on correct answers, then to who joined first.
    const ordered = [...stats].sort(
      (a, b) => b.p.score - a.p.score || a.correctMs - b.correctMs || a.p.joined_at.localeCompare(b.p.joined_at),
    )
    ordered.forEach((st, i) => {
      const prev = ordered[i - 1]
      const rank =
        i > 0 && prev.p.score === st.p.score && prev.correctMs === st.correctMs && prev.p.joined_at === st.p.joined_at
          ? (prev.p.rank ?? i)
          : i + 1
      st.p.rank = rank
      db.prepare('UPDATE final_participants SET rank = ? WHERE session_id = ? AND user_id = ?').run(rank, sessionId, st.p.user_id)
    })

    for (const st of stats) {
      const percentMc = askedChoice > 0 ? round2((st.correct * 100) / askedChoice) : 0
      const details = {
        sessionId,
        title: s.title,
        points: st.p.score,
        rank: st.p.rank,
        askedChoice,
        askedOpen,
        answered: st.p.answered_count,
        incomplete: st.p.answered_count * 2 < s.asked_count,
        percentMc,
        openPoints: 0,
        openMax: askedOpen * 5,
        gradingStatus: askedOpen === 0 ? 'graded' : 'pending',
        answers: st.rows.map((r) => ({
          questionId: r.question_id,
          answerIndex: r.answer_index,
          answerText: r.answer_text,
          isCorrect: r.is_correct === null ? null : r.is_correct === 1,
          points: r.points,
          responseMs: r.response_ms,
        })),
      }
      db.prepare(
        `INSERT OR IGNORE INTO test_attempts
           (id, user_id, kind, score, total, percent, details, session_id, started_at, finished_at, duration_sec)
         VALUES (?, ?, 'final', ?, ?, ?, ?, ?, ?, ?, ?)`,
      ).run(
        uuid(),
        st.p.user_id,
        st.correct,
        Math.max(askedChoice, 1),
        percentMc,
        JSON.stringify(details),
        sessionId,
        s.created_at,
        now,
        Math.max(0, Math.round((Date.parse(now) - Date.parse(s.created_at)) / 1000)),
      )
    }
    db.prepare("UPDATE final_sessions SET status = 'finished', finished_at = ?, current_question = NULL WHERE id = ?").run(
      now,
      sessionId,
    )
    for (const st of stats) recompute(sessionId, st.p.user_id)
    return true
  })
  if (run()) {
    const s = sessionById(sessionId)
    if (s) emitSession('updated', s)
    emitParticipants(sessionId)
  }
}

/** Admin grades an open answer 0–5 (or clears it with null). */
export function gradeOpenAnswer(sessionId: string, userId: string, questionId: string, openScore: number | null) {
  const res = db
    .prepare(
      'UPDATE final_answers SET open_score = ? WHERE session_id = ? AND user_id = ? AND question_id = ? AND answer_text IS NOT NULL',
    )
    .run(openScore, sessionId, userId, questionId)
  if (!res.changes) fail(404, 'answer_not_found')
  recompute(sessionId, userId)
}

// ─── Employee: join / answer ─────────────────────────────────────────────────

export function joinSession(sessionId: string, user: { id: string; full_name: string }) {
  const s = getSessionRow(sessionId)
  if (!s || !(LIVE as readonly string[]).includes(s.status)) fail(409, 'session_not_open')
  const now = nowIso()
  const existed = db.prepare('SELECT 1 FROM final_participants WHERE session_id = ? AND user_id = ?').get(sessionId, user.id)
  db.prepare(
    `INSERT INTO final_participants (session_id, user_id, display_name, joined_at, last_seen_at)
     VALUES (?, ?, ?, ?, ?)
     ON CONFLICT (session_id, user_id) DO UPDATE SET last_seen_at = excluded.last_seen_at`,
  ).run(sessionId, user.id, user.full_name, now, now)
  if (!existed) emitParticipants(sessionId)
  const row = db
    .prepare('SELECT * FROM final_participants WHERE session_id = ? AND user_id = ?')
    .get(sessionId, user.id) as ParticipantRow
  return toParticipant(row)
}

/** Idempotent: a repeated tap or retry returns the first stored answer. */
export function submitAnswer(
  sessionId: string,
  userId: string,
  questionId: string,
  answerIndex: number | null,
  answerText: string | null,
) {
  const run = db.transaction(() => {
    const existing = db
      .prepare('SELECT * FROM final_answers WHERE session_id = ? AND user_id = ? AND question_id = ?')
      .get(sessionId, userId, questionId) as AnswerRow | undefined
    if (existing) return { row: existing, inserted: false }

    const s = getSessionRow(sessionId)
    if (!s || s.status !== 'question') fail(409, 'not_accepting')
    const session = s as SessionRow
    if (questionIds(session)[session.current_index] !== questionId) fail(409, 'not_current_question')
    const joined = db.prepare('SELECT 1 FROM final_participants WHERE session_id = ? AND user_id = ?').get(sessionId, userId)
    if (!joined) fail(409, 'not_participant')
    const now = nowIso()
    if (!session.question_deadline_at || Date.parse(now) > Date.parse(session.question_deadline_at) + 3000) fail(409, 'time_over')

    const elapsed = Math.max(0, Date.parse(now) - Date.parse(session.question_started_at ?? now))
    const q = questionOrFail(questionId)
    const settings = sessionSettings(session)
    let points = 0
    let isCorrect: number | null = null
    if (q.type === 'choice') {
      if (answerIndex === null) fail(400, 'empty_answer')
      isCorrect = answerIndex === q.correctIndex ? 1 : 0
      points = isCorrect ? 100 + (elapsed < settings.choiceSeconds * 500 ? 20 : 0) : 0
    } else {
      if (!answerText || !answerText.trim()) fail(400, 'empty_answer')
    }
    db.prepare(
      `INSERT INTO final_answers (session_id, user_id, question_id, answer_index, answer_text, is_correct, points, response_ms, answered_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    ).run(
      sessionId,
      userId,
      questionId,
      q.type === 'choice' ? answerIndex : null,
      q.type === 'open' ? (answerText as string).slice(0, 2000) : null,
      isCorrect,
      points,
      elapsed,
      now,
    )
    db.prepare(
      'UPDATE final_participants SET score = score + ?, answered_count = answered_count + 1, last_seen_at = ? WHERE session_id = ? AND user_id = ?',
    ).run(points, now, sessionId, userId)
    const row = db
      .prepare('SELECT * FROM final_answers WHERE session_id = ? AND user_id = ? AND question_id = ?')
      .get(sessionId, userId, questionId) as AnswerRow
    return { row, inserted: true }
  })
  const { row, inserted } = run()
  const answer = toAnswer(row)
  if (inserted) {
    emitAnswer(answer)
    emitParticipants(sessionId)
  }
  return answer
}
