import type { RealtimeChannel } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import type {
  FinalAnswer,
  FinalCurrentQuestion,
  FinalParticipant,
  FinalQuestion,
  FinalSession,
  FinalSessionSettings,
  FinalStatus,
  LocalizedText,
} from '@/types'

// ─── Row mapping ─────────────────────────────────────────────────────────────

interface SessionRow {
  id: string
  title: string
  status: FinalStatus
  question_ids: string[]
  current_index: number
  asked_count: number
  current_question: FinalCurrentQuestion | null
  reveal: FinalSession['reveal']
  question_started_at: string | null
  question_deadline_at: string | null
  settings: Partial<FinalSessionSettings> | null
  created_by: string | null
  created_at: string
  finished_at: string | null
}

interface ParticipantRow {
  session_id: string
  user_id: string
  display_name: string
  joined_at: string
  last_seen_at: string
  answered_count: number
  score: number
  rank: number | null
}

interface AnswerRow {
  session_id: string
  user_id: string
  question_id: string
  answer_index: number | null
  answer_text: string | null
  is_correct: boolean | null
  points: number
  response_ms: number | null
  open_score: number | null
  answered_at: string
}

export const DEFAULT_FINAL_SETTINGS: FinalSessionSettings = { choiceSeconds: 30, openSeconds: 120 }

export function mapSession(row: SessionRow): FinalSession {
  return {
    id: row.id,
    title: row.title,
    status: row.status,
    questionIds: Array.isArray(row.question_ids) ? row.question_ids : [],
    currentIndex: row.current_index,
    askedCount: row.asked_count,
    currentQuestion: row.current_question,
    reveal: row.reveal,
    questionStartedAt: row.question_started_at,
    questionDeadlineAt: row.question_deadline_at,
    settings: { ...DEFAULT_FINAL_SETTINGS, ...(row.settings ?? {}) },
    createdBy: row.created_by,
    createdAt: row.created_at,
    finishedAt: row.finished_at,
  }
}

export function mapParticipant(row: ParticipantRow): FinalParticipant {
  return {
    sessionId: row.session_id,
    userId: row.user_id,
    displayName: row.display_name,
    joinedAt: row.joined_at,
    lastSeenAt: row.last_seen_at,
    answeredCount: row.answered_count,
    score: row.score,
    rank: row.rank,
  }
}

export function mapAnswer(row: AnswerRow): FinalAnswer {
  return {
    sessionId: row.session_id,
    userId: row.user_id,
    questionId: row.question_id,
    answerIndex: row.answer_index,
    answerText: row.answer_text,
    isCorrect: row.is_correct,
    points: row.points,
    responseMs: row.response_ms,
    openScore: row.open_score,
    answeredAt: row.answered_at,
  }
}

const SESSION_COLUMNS =
  'id, title, status, question_ids, current_index, asked_count, current_question, reveal, question_started_at, question_deadline_at, settings, created_by, created_at, finished_at'
const PARTICIPANT_COLUMNS = 'session_id, user_id, display_name, joined_at, last_seen_at, answered_count, score, rank'
const ANSWER_COLUMNS =
  'session_id, user_id, question_id, answer_index, answer_text, is_correct, points, response_ms, open_score, answered_at'

export const LIVE_STATUSES: FinalStatus[] = ['lobby', 'question', 'reveal']

// ─── Server time ─────────────────────────────────────────────────────────────

/** Returns serverNow - Date.now() in ms; add it to Date.now() to get server time. */
export async function fetchServerOffset(): Promise<number> {
  const before = Date.now()
  const { data, error } = await supabase.rpc('server_now')
  const after = Date.now()
  if (error || !data) return 0
  const serverMs = Date.parse(data as string)
  return serverMs - (before + after) / 2
}

// ─── Sessions ────────────────────────────────────────────────────────────────

export async function fetchActiveSession(): Promise<FinalSession | null> {
  const { data, error } = await supabase
    .from('final_sessions')
    .select(SESSION_COLUMNS)
    .in('status', LIVE_STATUSES)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()
  if (error) throw error
  return data ? mapSession(data as SessionRow) : null
}

export async function fetchSession(id: string): Promise<FinalSession | null> {
  const { data, error } = await supabase.from('final_sessions').select(SESSION_COLUMNS).eq('id', id).maybeSingle()
  if (error) throw error
  return data ? mapSession(data as SessionRow) : null
}

export async function fetchSessions(limit = 50): Promise<FinalSession[]> {
  const { data, error } = await supabase
    .from('final_sessions')
    .select(SESSION_COLUMNS)
    .order('created_at', { ascending: false })
    .limit(limit)
  if (error) throw error
  return (data as SessionRow[]).map(mapSession)
}

export async function createSession(input: {
  title: string
  questionIds: string[]
  settings: FinalSessionSettings
  createdBy: string
}): Promise<FinalSession> {
  const { data, error } = await supabase
    .from('final_sessions')
    .insert({
      title: input.title,
      question_ids: input.questionIds,
      settings: input.settings,
      created_by: input.createdBy,
    })
    .select(SESSION_COLUMNS)
    .single()
  if (error) throw error
  return mapSession(data as SessionRow)
}

export function toCurrentQuestion(q: FinalQuestion): FinalCurrentQuestion {
  return q.type === 'choice'
    ? { id: q.id, type: 'choice', scenario: q.scenario, question: q.question, options: q.options }
    : { id: q.id, type: 'open', scenario: q.scenario, question: q.question }
}

/** lobby/reveal → question. `expectedIndex` is the session's current index as the presenter sees it. */
export async function openQuestion(sessionId: string, expectedIndex: number, question: FinalQuestion): Promise<FinalSession> {
  const { data, error } = await supabase.rpc('open_final_question', {
    p_session_id: sessionId,
    p_expected_index: expectedIndex,
    p_question: toCurrentQuestion(question),
    p_correct_index: question.type === 'choice' ? question.correctIndex : null,
  })
  if (error) throw error
  return mapSession(data as SessionRow)
}

/** question → reveal. */
export async function revealQuestion(
  sessionId: string,
  expectedIndex: number,
  explanation: LocalizedText | null,
): Promise<FinalSession> {
  const { data, error } = await supabase.rpc('reveal_final_question', {
    p_session_id: sessionId,
    p_expected_index: expectedIndex,
    p_explanation: explanation,
  })
  if (error) throw error
  return mapSession(data as SessionRow)
}

export async function finishSession(sessionId: string): Promise<void> {
  const { error } = await supabase.rpc('finish_final_session', { p_session_id: sessionId })
  if (error) throw error
}

export async function cancelSession(sessionId: string): Promise<void> {
  const { error } = await supabase.rpc('cancel_final_session', { p_session_id: sessionId })
  if (error) throw error
}

export async function deleteSession(sessionId: string): Promise<void> {
  const { error } = await supabase.from('final_sessions').delete().eq('id', sessionId)
  if (error) throw error
}

// ─── Participants & answers ──────────────────────────────────────────────────

/** Idempotent join; also used as a heartbeat (updates last_seen_at). */
export async function joinSession(sessionId: string): Promise<FinalParticipant> {
  const { data, error } = await supabase.rpc('join_final_session', { p_session_id: sessionId })
  if (error) throw error
  return mapParticipant(data as ParticipantRow)
}

export async function fetchParticipants(sessionId: string): Promise<FinalParticipant[]> {
  const { data, error } = await supabase
    .from('final_participants')
    .select(PARTICIPANT_COLUMNS)
    .eq('session_id', sessionId)
    .order('score', { ascending: false })
    .order('joined_at', { ascending: true })
  if (error) throw error
  return (data as ParticipantRow[]).map(mapParticipant)
}

/** All answers of a session (admins) or only your own (employees — RLS). */
export async function fetchAnswers(sessionId: string): Promise<FinalAnswer[]> {
  const { data, error } = await supabase
    .from('final_answers')
    .select(ANSWER_COLUMNS)
    .eq('session_id', sessionId)
    .order('answered_at', { ascending: true })
  if (error) throw error
  return (data as AnswerRow[]).map(mapAnswer)
}

export type SubmitFailure = 'not_accepting' | 'not_current_question' | 'time_over' | 'not_participant' | 'empty_answer' | 'network'

export class SubmitError extends Error {
  reason: SubmitFailure
  constructor(reason: SubmitFailure, message?: string) {
    super(message ?? reason)
    this.reason = reason
  }
}

function isNetworkError(e: unknown): boolean {
  const msg = e && typeof e === 'object' && 'message' in e ? String((e as { message: unknown }).message) : String(e)
  return /fetch|network|Failed to fetch|timeout|ECONN/i.test(msg)
}

/**
 * Submits an answer. Idempotent on the server, so it retries transient network errors
 * (up to 3 tries) without risking a double submission.
 */
export async function submitAnswer(
  sessionId: string,
  questionId: string,
  answer: { answerIndex: number } | { answerText: string },
): Promise<FinalAnswer> {
  let lastError: unknown = null
  for (let attempt = 0; attempt < 3; attempt++) {
    const { data, error } = await supabase.rpc('submit_final_answer', {
      p_session_id: sessionId,
      p_question_id: questionId,
      p_answer_index: 'answerIndex' in answer ? answer.answerIndex : null,
      p_answer_text: 'answerText' in answer ? answer.answerText : null,
    })
    if (!error) return mapAnswer(data as AnswerRow)
    const known: SubmitFailure[] = ['not_accepting', 'not_current_question', 'time_over', 'not_participant', 'empty_answer']
    const reason = known.find((k) => error.message.includes(k))
    if (reason) throw new SubmitError(reason, error.message)
    lastError = error
    if (!isNetworkError(error)) break
    await new Promise((r) => setTimeout(r, 400 * (attempt + 1)))
  }
  throw new SubmitError('network', lastError ? String((lastError as { message?: string }).message ?? lastError) : 'network')
}

export async function gradeOpenAnswer(
  sessionId: string,
  userId: string,
  questionId: string,
  openScore: number | null,
): Promise<void> {
  const { error } = await supabase
    .from('final_answers')
    .update({ open_score: openScore })
    .eq('session_id', sessionId)
    .eq('user_id', userId)
    .eq('question_id', questionId)
  if (error) throw error
}

// ─── Realtime ────────────────────────────────────────────────────────────────

export type Unsubscribe = () => void

let channelSeq = 0

/**
 * realtime-js returns the EXISTING channel for a topic that is still in its list (including one that is
 * still leaving after removeChannel), and subscribing to it silently does nothing. A unique topic per
 * subscription avoids that on fast remounts (StrictMode, /final → /present hand-off).
 */
function channel(name: string): RealtimeChannel {
  channelSeq += 1
  return supabase.channel(`${name}-${channelSeq}-${Math.random().toString(36).slice(2, 8)}`)
}

/** Fires on every change of one session row (and on subscribe/reconnect so callers can refetch). */
export function subscribeSession(sessionId: string, onChange: (row: FinalSession | null) => void): Unsubscribe {
  const ch = channel(`final-session-${sessionId}`)
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'final_sessions', filter: `id=eq.${sessionId}` },
      (payload) => {
        if (payload.eventType === 'DELETE') onChange(null)
        else onChange(mapSession(payload.new as SessionRow))
      },
    )
    .subscribe((status) => {
      if (status === 'SUBSCRIBED' || status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
        // Let the caller re-sync from the database (state may have moved while offline).
        void fetchSession(sessionId).then(onChange).catch(() => undefined)
      }
    })
  return () => {
    void supabase.removeChannel(ch)
  }
}

/** Fires when a new session row appears (waiting screen before the presenter creates one). */
export function subscribeNewSessions(onInsert: (row: FinalSession) => void): Unsubscribe {
  const ch = channel('final-sessions-inserts')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'final_sessions' }, (payload) => {
      onInsert(mapSession(payload.new as SessionRow))
    })
    .subscribe()
  return () => {
    void supabase.removeChannel(ch)
  }
}

export function subscribeParticipants(sessionId: string, onChange: () => void): Unsubscribe {
  const ch = channel(`final-participants-${sessionId}`)
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'final_participants', filter: `session_id=eq.${sessionId}` },
      () => onChange(),
    )
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') onChange()
    })
  return () => {
    void supabase.removeChannel(ch)
  }
}

/** Presenter only (employees receive just their own rows through RLS). */
export function subscribeAnswers(sessionId: string, onInsert: (row: FinalAnswer) => void): Unsubscribe {
  const ch = channel(`final-answers-${sessionId}`)
    .on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'final_answers', filter: `session_id=eq.${sessionId}` },
      (payload) => onInsert(mapAnswer(payload.new as AnswerRow)),
    )
    .subscribe()
  return () => {
    void supabase.removeChannel(ch)
  }
}
