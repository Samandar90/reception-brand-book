import { parseJson } from './db.ts'

// Row shapes (SQLite) → API shapes. The API shapes are the same camelCase objects
// the React app already uses (src/types/index.ts).

export interface UserRow {
  id: string
  login: string
  full_name: string
  role: 'admin' | 'employee'
  position: string | null
  is_active: number
  password_hash: string
  created_at: string
  created_by: string | null
}

export function toProfile(r: UserRow) {
  return {
    id: r.id,
    login: r.login,
    fullName: r.full_name,
    role: r.role,
    position: r.position,
    isActive: r.is_active === 1,
    createdAt: r.created_at,
  }
}

export interface AttemptRow {
  id: string
  user_id: string
  kind: 'knowledge' | 'english' | 'russian' | 'final'
  score: number
  total: number
  percent: number
  level: string | null
  details: string
  writing: string | null
  writing_rubric: string | null
  writing_score: number | null
  writing_comment: string | null
  graded_by: string | null
  graded_at: string | null
  session_id: string | null
  started_at: string
  finished_at: string
  duration_sec: number | null
}

export function toAttempt(r: AttemptRow) {
  return {
    id: r.id,
    userId: r.user_id,
    kind: r.kind,
    score: r.score,
    total: r.total,
    percent: r.percent,
    level: r.level,
    details: parseJson<Record<string, unknown>>(r.details, {}),
    writing: parseJson<Record<string, unknown> | null>(r.writing, null),
    writingScore: r.writing_score,
    writingComment: r.writing_comment,
    writingRubric: parseJson<Record<string, number> | null>(r.writing_rubric, null),
    sessionId: r.session_id,
    startedAt: r.started_at,
    finishedAt: r.finished_at,
    durationSec: r.duration_sec,
  }
}

export interface GrantRow {
  id: string
  user_id: string
  kind: 'english' | 'russian'
  granted_by: string | null
  created_at: string
  expires_at: string
  used_by_attempt_id: string | null
  used_at: string | null
}

export function toGrant(r: GrantRow) {
  return {
    id: r.id,
    userId: r.user_id,
    kind: r.kind,
    grantedBy: r.granted_by,
    createdAt: r.created_at,
    expiresAt: r.expires_at,
    usedByAttemptId: r.used_by_attempt_id,
    usedAt: r.used_at,
  }
}

export interface ModuleRow {
  module_slug: string
  completed_at: string
  check_score: number | null
  check_total: number | null
}

export function toModule(r: ModuleRow) {
  return { moduleSlug: r.module_slug, completedAt: r.completed_at, checkScore: r.check_score, checkTotal: r.check_total }
}

export interface ActivityDbRow {
  id: number
  event: string
  meta: string
  created_at: string
}

export function toActivity(r: ActivityDbRow) {
  return { id: r.id, event: r.event, meta: parseJson<Record<string, unknown>>(r.meta, {}), createdAt: r.created_at }
}

export interface SessionRow {
  id: string
  title: string
  status: 'lobby' | 'question' | 'reveal' | 'finished' | 'cancelled'
  question_ids: string
  current_index: number
  asked_count: number
  current_question: string | null
  reveal: string | null
  question_started_at: string | null
  question_deadline_at: string | null
  settings: string
  created_by: string | null
  created_at: string
  finished_at: string | null
}

export interface SessionSettings {
  choiceSeconds: number
  openSeconds: number
}

export function sessionSettings(r: SessionRow): SessionSettings {
  const s = parseJson<Partial<SessionSettings>>(r.settings, {})
  return { choiceSeconds: s.choiceSeconds ?? 30, openSeconds: s.openSeconds ?? 120 }
}

export function questionIds(r: SessionRow): string[] {
  return parseJson<string[]>(r.question_ids, [])
}

export function toSession(r: SessionRow) {
  return {
    id: r.id,
    title: r.title,
    status: r.status,
    questionIds: questionIds(r),
    currentIndex: r.current_index,
    askedCount: r.asked_count,
    currentQuestion: parseJson<Record<string, unknown> | null>(r.current_question, null),
    reveal: parseJson<Record<string, unknown> | null>(r.reveal, null),
    questionStartedAt: r.question_started_at,
    questionDeadlineAt: r.question_deadline_at,
    settings: sessionSettings(r),
    createdBy: r.created_by,
    createdAt: r.created_at,
    finishedAt: r.finished_at,
  }
}

export interface ParticipantRow {
  session_id: string
  user_id: string
  display_name: string
  joined_at: string
  last_seen_at: string
  answered_count: number
  score: number
  rank: number | null
}

export function toParticipant(r: ParticipantRow) {
  return {
    sessionId: r.session_id,
    userId: r.user_id,
    displayName: r.display_name,
    joinedAt: r.joined_at,
    lastSeenAt: r.last_seen_at,
    answeredCount: r.answered_count,
    score: r.score,
    rank: r.rank,
  }
}

export interface AnswerRow {
  session_id: string
  user_id: string
  question_id: string
  answer_index: number | null
  answer_text: string | null
  is_correct: number | null
  points: number
  response_ms: number | null
  open_score: number | null
  answered_at: string
}

export function toAnswer(r: AnswerRow) {
  return {
    sessionId: r.session_id,
    userId: r.user_id,
    questionId: r.question_id,
    answerIndex: r.answer_index,
    answerText: r.answer_text,
    isCorrect: r.is_correct === null ? null : r.is_correct === 1,
    points: r.points,
    responseMs: r.response_ms,
    openScore: r.open_score,
    answeredAt: r.answered_at,
  }
}
