import { apiDelete, apiGet, apiPatch, apiPost, ApiError } from '@/lib/http'
import type {
  FinalAnswer,
  FinalCurrentQuestion,
  FinalParticipant,
  FinalQuestion,
  FinalSession,
  FinalSessionSettings,
  FinalStatus,
  LocalizedText,
  TestAttempt,
} from '@/types'

export const DEFAULT_FINAL_SETTINGS: FinalSessionSettings = { choiceSeconds: 30, openSeconds: 120 }

export const LIVE_STATUSES: FinalStatus[] = ['lobby', 'question', 'reveal']

// ─── Server time ─────────────────────────────────────────────────────────────

/** Returns serverNow - Date.now() in ms; add it to Date.now() to get server time. */
export async function fetchServerOffset(): Promise<number> {
  const before = Date.now()
  try {
    const { now } = await apiGet<{ now: string }>('/time')
    const after = Date.now()
    return Date.parse(now) - (before + after) / 2
  } catch {
    return 0
  }
}

// ─── Sessions ────────────────────────────────────────────────────────────────

export async function fetchActiveSession(): Promise<FinalSession | null> {
  const { session } = await apiGet<{ session: FinalSession | null }>('/final/active')
  return session
}

export async function fetchSession(id: string): Promise<FinalSession | null> {
  try {
    return await apiGet<FinalSession>(`/final/sessions/${id}`)
  } catch (e) {
    if (e instanceof ApiError && e.status === 404) return null
    throw e
  }
}

export async function fetchSessions(limit = 50): Promise<FinalSession[]> {
  return apiGet<FinalSession[]>(`/final/sessions?limit=${limit}`)
}

/** Throws ApiError with code 'live_session_exists' when another session is still live. */
export async function createSession(input: {
  title: string
  questionIds: string[]
  settings: FinalSessionSettings
  createdBy: string
}): Promise<FinalSession> {
  return apiPost<FinalSession>('/final/sessions', {
    title: input.title,
    questionIds: input.questionIds,
    settings: input.settings,
  })
}

export function toCurrentQuestion(q: FinalQuestion): FinalCurrentQuestion {
  return q.type === 'choice'
    ? { id: q.id, type: 'choice', scenario: q.scenario, question: q.question, options: q.options }
    : { id: q.id, type: 'open', scenario: q.scenario, question: q.question }
}

/** lobby/reveal → question. `expectedIndex` is the session's current index as the presenter sees it. */
export async function openQuestion(sessionId: string, expectedIndex: number, question: FinalQuestion): Promise<FinalSession> {
  return apiPost<FinalSession>(`/final/sessions/${sessionId}/open`, { expectedIndex, questionId: question.id })
}

/** question → reveal. The server takes the key and explanation from its own question bank. */
export async function revealQuestion(
  sessionId: string,
  expectedIndex: number,
  _explanation: LocalizedText | null,
): Promise<FinalSession> {
  return apiPost<FinalSession>(`/final/sessions/${sessionId}/reveal`, { expectedIndex })
}

export async function finishSession(sessionId: string): Promise<void> {
  await apiPost(`/final/sessions/${sessionId}/finish`)
}

export async function cancelSession(sessionId: string): Promise<void> {
  await apiPost(`/final/sessions/${sessionId}/cancel`)
}

export async function deleteSession(sessionId: string): Promise<void> {
  await apiDelete(`/final/sessions/${sessionId}`)
}

/** Final-test results of one session (administrators). */
export async function fetchFinalAttempts(sessionId: string): Promise<TestAttempt[]> {
  return apiGet<TestAttempt[]>(`/admin/final/${sessionId}/attempts`)
}

// ─── Participants & answers ──────────────────────────────────────────────────

/** Idempotent join; also used as a heartbeat (updates last_seen_at). */
export async function joinSession(sessionId: string): Promise<FinalParticipant> {
  return apiPost<FinalParticipant>(`/final/sessions/${sessionId}/join`)
}

export async function fetchParticipants(sessionId: string): Promise<FinalParticipant[]> {
  return apiGet<FinalParticipant[]>(`/final/sessions/${sessionId}/participants`)
}

/** All answers of a session (admins) or only your own (employees). */
export async function fetchAnswers(sessionId: string): Promise<FinalAnswer[]> {
  return apiGet<FinalAnswer[]>(`/final/sessions/${sessionId}/answers`)
}

export type SubmitFailure = 'not_accepting' | 'not_current_question' | 'time_over' | 'not_participant' | 'empty_answer' | 'network'

export class SubmitError extends Error {
  reason: SubmitFailure
  constructor(reason: SubmitFailure, message?: string) {
    super(message ?? reason)
    this.reason = reason
  }
}

const KNOWN_FAILURES: SubmitFailure[] = ['not_accepting', 'not_current_question', 'time_over', 'not_participant', 'empty_answer']

/**
 * Submits an answer. Idempotent on the server, so it retries transient network errors
 * (up to 3 tries) without risking a double submission.
 */
export async function submitAnswer(
  sessionId: string,
  questionId: string,
  answer: { answerIndex: number } | { answerText: string },
): Promise<FinalAnswer> {
  let last: unknown = null
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      return await apiPost<FinalAnswer>(`/final/sessions/${sessionId}/answers`, {
        questionId,
        answerIndex: 'answerIndex' in answer ? answer.answerIndex : null,
        answerText: 'answerText' in answer ? answer.answerText : null,
      })
    } catch (e) {
      last = e
      if (e instanceof ApiError) {
        const known = KNOWN_FAILURES.find((k) => k === e.code)
        if (known) throw new SubmitError(known)
        if (e.status !== 0 && e.status < 500) break
      }
      await new Promise((r) => setTimeout(r, 400 * (attempt + 1)))
    }
  }
  throw new SubmitError('network', last instanceof Error ? last.message : 'network')
}

export async function gradeOpenAnswer(
  sessionId: string,
  userId: string,
  questionId: string,
  openScore: number | null,
): Promise<void> {
  await apiPatch(`/final/sessions/${sessionId}/answers/grade`, { userId, questionId, openScore })
}

// ─── Realtime (one Server-Sent Events stream per tab) ────────────────────────

export type Unsubscribe = () => void

interface Listener {
  onEvent: (event: 'session' | 'participants' | 'answer', data: unknown) => void
  /** Called on (re)connect so the subscriber can re-read state it may have missed. */
  onOpen?: () => void
}

const listeners = new Set<Listener>()
let source: EventSource | null = null
let reconnectTimer: ReturnType<typeof setTimeout> | null = null

function connect(): void {
  if (source || typeof EventSource === 'undefined') return
  const es = new EventSource('/api/final/stream')
  source = es
  es.addEventListener('open', () => {
    for (const l of listeners) l.onOpen?.()
  })
  for (const name of ['session', 'participants', 'answer'] as const) {
    es.addEventListener(name, (msg) => {
      let data: unknown = null
      try {
        data = JSON.parse((msg as MessageEvent<string>).data)
      } catch {
        return
      }
      for (const l of listeners) l.onEvent(name, data)
    })
  }
  es.onerror = () => {
    // The browser retries by itself unless the server refused the stream (e.g. signed out).
    if (es.readyState === EventSource.CLOSED) {
      source = null
      if (listeners.size && !reconnectTimer) {
        reconnectTimer = setTimeout(() => {
          reconnectTimer = null
          if (listeners.size) connect()
        }, 5000)
      }
    }
  }
}

function listen(listener: Listener): Unsubscribe {
  listeners.add(listener)
  if (source && source.readyState === EventSource.OPEN) queueMicrotask(() => listener.onOpen?.())
  connect()
  return () => {
    listeners.delete(listener)
    if (!listeners.size) {
      source?.close()
      source = null
      if (reconnectTimer) {
        clearTimeout(reconnectTimer)
        reconnectTimer = null
      }
    }
  }
}

interface SessionEvent {
  type: 'created' | 'updated' | 'deleted'
  session: FinalSession | { id: string }
}

/** Fires on every change of one session and on (re)connect with a fresh copy from the server. */
export function subscribeSession(sessionId: string, onChange: (row: FinalSession | null) => void): Unsubscribe {
  return listen({
    onEvent(event, data) {
      if (event !== 'session') return
      const e = data as SessionEvent
      if (e.session.id !== sessionId) return
      onChange(e.type === 'deleted' ? null : (e.session as FinalSession))
    },
    onOpen() {
      void fetchSession(sessionId)
        .then(onChange)
        .catch(() => undefined)
    },
  })
}

/** Fires when a new session is created (waiting screen before the presenter starts one). */
export function subscribeNewSessions(onInsert: (row: FinalSession) => void): Unsubscribe {
  return listen({
    onEvent(event, data) {
      if (event !== 'session') return
      const e = data as SessionEvent
      if (e.type === 'created') onInsert(e.session as FinalSession)
    },
  })
}

/** Participants joined or scores changed (also fires on (re)connect). */
export function subscribeParticipants(sessionId: string, onChange: () => void): Unsubscribe {
  return listen({
    onEvent(event, data) {
      if (event === 'participants' && (data as { sessionId?: string }).sessionId === sessionId) onChange()
    },
    onOpen: onChange,
  })
}

/** New answers of a session — delivered to administrators only. */
export function subscribeAnswers(sessionId: string, onInsert: (row: FinalAnswer) => void): Unsubscribe {
  return listen({
    onEvent(event, data) {
      if (event === 'answer' && (data as FinalAnswer).sessionId === sessionId) onInsert(data as FinalAnswer)
    },
  })
}
