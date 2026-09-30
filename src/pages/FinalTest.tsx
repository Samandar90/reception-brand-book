import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  Ban,
  Check,
  CircleCheck,
  CircleX,
  FileCheck2,
  Hourglass,
  LayoutDashboard,
  Lightbulb,
  Loader2,
  Medal,
  MonitorPlay,
  Radio,
  RotateCcw,
  Send,
  ShieldCheck,
  Star,
  Target,
  Timer,
  Trophy,
  Users,
  WifiOff,
} from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import { useAuth } from '@/contexts/AuthContext'
import { useProgress } from '@/contexts/ProgressContext'
import {
  fetchActiveSession,
  fetchAnswers,
  fetchParticipants,
  fetchServerOffset,
  fetchSession,
  joinSession,
  submitAnswer,
  subscribeNewSessions,
  subscribeParticipants,
  subscribeSession,
  SubmitError,
  type SubmitFailure,
} from '@/lib/finalApi'
import { getFinalQuestion } from '@/data/final'
import type { FinalAnswer, FinalCurrentQuestion, FinalParticipant, FinalReveal, FinalSession, FinalStatus } from '@/types'

// ─── Constants & helpers ─────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const HEARTBEAT_MS = 25_000
const WAITING_POLL_MS = 20_000
/** Lobby participant-count refresh: at most one re-read per window, however many realtime events arrive. */
const LOBBY_REFRESH_MS = 2_000
const AUTO_SUBMIT_MS = 1_500
/** The server still accepts an answer up to 3 s after the deadline (submit_final_answer). */
const GRACE_MS = 3_000
/** Minimum grace left for the one automatic re-send after a network failure. */
const GRACE_RETRY_MIN_MS = 500
const OPEN_MAX_LENGTH = 2000
const LETTERS = ['A', 'B', 'C', 'D']
/** Submit failures that mean the question no longer accepts answers. */
const LOCKING_FAILURES: SubmitFailure[] = ['time_over', 'not_accepting', 'not_current_question']

type AnswerInput = { answerIndex: number } | { answerText: string }
type JoinState = 'idle' | 'joining' | 'joined' | 'error'
type Tone = 'accent' | 'success' | 'danger' | 'warn' | 'muted'

interface PendingSubmit {
  questionId: string
  answerIndex: number | null
}

interface FailedSubmit {
  questionId: string
  reason: SubmitFailure
  answer: AnswerInput
}

interface Standings {
  count: number
  me: FinalParticipant | null
  place: number | null
}

const STATUS_ORDER: Record<FinalStatus, number> = { lobby: 0, question: 1, reveal: 2, finished: 3, cancelled: 3 }

function isLive(status: FinalStatus): boolean {
  return status === 'lobby' || status === 'question' || status === 'reveal'
}

function isTerminal(status: FinalStatus): boolean {
  return status === 'finished' || status === 'cancelled'
}

/**
 * Picks the row to show. Realtime events and re-fetches can arrive out of order, so a row that
 * would move the session backwards (lower index / earlier status / out of a terminal state) is ignored.
 */
function pickSession(prev: FinalSession | null, next: FinalSession): FinalSession | null {
  if (!prev) return next
  if (prev.id !== next.id) return isTerminal(prev.status) || isLive(next.status) ? next : prev
  if (isTerminal(prev.status)) return isTerminal(next.status) ? next : prev
  if (isTerminal(next.status)) return next
  if (next.currentIndex !== prev.currentIndex) return next.currentIndex > prev.currentIndex ? next : prev
  return STATUS_ORDER[next.status] >= STATUS_ORDER[prev.status] ? next : prev
}

function toFailure(e: unknown): SubmitFailure {
  if (e instanceof SubmitError) return e.reason
  const message = e && typeof e === 'object' && 'message' in e ? String((e as { message: unknown }).message) : ''
  return message.includes('session_not_open') ? 'not_accepting' : 'network'
}

function draftKey(sessionId: string, questionId: string): string {
  return `final:${sessionId}:${questionId}`
}

function readDraft(key: string): string {
  try {
    return localStorage.getItem(key) ?? ''
  } catch {
    return ''
  }
}

function writeDraft(key: string, value: string): void {
  try {
    if (value) localStorage.setItem(key, value)
    else localStorage.removeItem(key)
  } catch {
    /* storage unavailable (private mode) — the draft simply is not persisted */
  }
}

function removeDraft(key: string): void {
  try {
    localStorage.removeItem(key)
  } catch {
    /* ignore */
  }
}

function clearSessionDrafts(sessionId: string): void {
  try {
    const prefix = `final:${sessionId}:`
    const keys: string[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key?.startsWith(prefix)) keys.push(key)
    }
    keys.forEach((key) => localStorage.removeItem(key))
  } catch {
    /* ignore */
  }
}

function countWords(text: string): number {
  const trimmed = text.trim()
  return trimmed ? trimmed.split(/\s+/).length : 0
}

function formatClock(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

function initialsOf(name: string): string {
  return (
    name
      .trim()
      .split(/\s+/)
      .map((p) => p[0] ?? '')
      .join('')
      .slice(0, 2)
      .toUpperCase() || '?'
  )
}

// Screen Wake Lock — typed minimally so we do not depend on the DOM lib version.
interface WakeLockSentinelLike {
  readonly released?: boolean
  release: () => Promise<void>
}
interface WakeLockLike {
  request: (type: 'screen') => Promise<WakeLockSentinelLike>
}
function getWakeLock(): WakeLockLike | undefined {
  return (navigator as unknown as { wakeLock?: WakeLockLike }).wakeLock
}

/** Re-renders every 250 ms while active (drives the countdown). */
function useNow(active: boolean): number {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    if (!active) return
    const kick = window.setTimeout(() => setNow(Date.now()), 0)
    const id = window.setInterval(() => setNow(Date.now()), 250)
    return () => {
      window.clearTimeout(kick)
      window.clearInterval(id)
    }
  }, [active])
  return now
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FinalTest() {
  const { t } = useLanguage()
  const { user, isAdmin, signOut } = useAuth()
  const { logEvent, reload } = useProgress()

  const [session, setSession] = useState<FinalSession | null>(null)
  const [phase, setPhase] = useState<'loading' | 'ready' | 'error'>('loading')
  const [loadNonce, setLoadNonce] = useState(0)
  const [answers, setAnswers] = useState<{
    sessionId: string | null
    userId: string | null
    map: Record<string, FinalAnswer>
  }>({ sessionId: null, userId: null, map: {} })
  const [participants, setParticipants] = useState<{ sessionId: string | null; list: FinalParticipant[] }>({
    sessionId: null,
    list: [],
  })
  const [join, setJoin] = useState<{ sessionId: string | null; state: JoinState }>({ sessionId: null, state: 'idle' })
  const [joinNonce, setJoinNonce] = useState(0)
  const [adminJoined, setAdminJoined] = useState(false)
  const [resyncNonce, setResyncNonce] = useState(0)
  const [offset, setOffset] = useState(0)
  const [clockReady, setClockReady] = useState(false)
  const [online, setOnline] = useState(() => navigator.onLine)
  const [pending, setPending] = useState<PendingSubmit | null>(null)
  const [failed, setFailed] = useState<FailedSubmit | null>(null)
  const [signingOut, setSigningOut] = useState(false)

  const sessionRef = useRef<FinalSession | null>(null)
  const submittingRef = useRef(false)
  const loggedJoinRef = useRef(new Set<string>())
  const reloadedForRef = useRef<string | null>(null)
  const graceRetriedRef = useRef(new Set<string>())
  const logEventRef = useRef(logEvent)
  const reloadRef = useRef(reload)

  useEffect(() => {
    logEventRef.current = logEvent
    reloadRef.current = reload
  }, [logEvent, reload])

  useEffect(() => {
    sessionRef.current = session
  }, [session])

  const userId = user?.id ?? null
  const sessionId = session?.id ?? null
  const status = session?.status ?? null
  const currentIndex = session?.currentIndex ?? -1
  const live = status !== null && isLive(status)
  const shouldJoin = live && (!isAdmin || adminJoined)

  const applySession = useCallback((next: FinalSession) => {
    setSession((prev) => pickSession(prev, next))
  }, [])

  const dropSession = useCallback((id: string) => {
    setSession((prev) => (prev && prev.id === id ? null : prev))
  }, [])

  /** Re-fetches the single source of truth (session row + own answers). */
  const resync = useCallback(() => {
    const current = sessionRef.current
    if (current && isLive(current.status)) {
      const id = current.id
      fetchSession(id)
        .then((row) => (row ? applySession(row) : dropSession(id)))
        .catch(() => undefined)
      setResyncNonce((n) => n + 1)
      return
    }
    fetchActiveSession()
      .then((row) => {
        if (row) applySession(row)
        setPhase((p) => (p === 'error' ? 'ready' : p))
      })
      .catch(() => undefined)
  }, [applySession, dropSession])

  const markJoined = useCallback((id: string) => {
    setJoin({ sessionId: id, state: 'joined' })
    if (loggedJoinRef.current.has(id)) return
    loggedJoinRef.current.add(id)
    const flag = `final-joined:${id}`
    let already = false
    try {
      already = sessionStorage.getItem(flag) === '1'
      if (!already) sessionStorage.setItem(flag, '1')
    } catch {
      /* storage unavailable — the in-memory set still prevents duplicates */
    }
    if (!already) logEventRef.current('final_join', { sessionId: id })
  }, [])

  // Initial load (and retry).
  useEffect(() => {
    let cancelled = false
    fetchActiveSession()
      .then((row) => {
        if (cancelled) return
        if (row) applySession(row)
        setPhase('ready')
      })
      .catch(() => {
        if (!cancelled) setPhase('error')
      })
    return () => {
      cancelled = true
    }
  }, [loadNonce, applySession])

  // A new session created by the host appears without a reload.
  useEffect(() => subscribeNewSessions((row) => applySession(row)), [applySession])

  // Live updates of the current session (the helper also re-fetches on subscribe / reconnect).
  useEffect(() => {
    if (!sessionId || !live) return
    const id = sessionId
    return subscribeSession(id, (row) => (row ? applySession(row) : dropSession(id)))
  }, [sessionId, live, applySession, dropSession])

  // Fallback poll while waiting for a session (also after one ended), in case the realtime insert event is missed.
  const awaitingSession = !session || isTerminal(session.status)
  useEffect(() => {
    if (!awaitingSession || phase !== 'ready') return
    const id = window.setInterval(() => {
      fetchActiveSession()
        .then((row) => {
          if (row) applySession(row)
        })
        .catch(() => undefined)
    }, WAITING_POLL_MS)
    return () => window.clearInterval(id)
  }, [awaitingSession, phase, applySession])

  // Server clock offset, visibility & connectivity.
  useEffect(() => {
    let alive = true
    const refreshOffset = () => {
      fetchServerOffset()
        .then((o) => {
          if (!alive) return
          setOffset(o)
          setClockReady(true)
        })
        .catch(() => {
          if (alive) setClockReady(true)
        })
    }
    const onVisibility = () => {
      if (document.visibilityState !== 'visible') return
      refreshOffset()
      resync()
    }
    const onOnline = () => {
      setOnline(true)
      resync()
    }
    const onOffline = () => setOnline(false)
    refreshOffset()
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('online', onOnline)
    window.addEventListener('offline', onOffline)
    return () => {
      alive = false
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('online', onOnline)
      window.removeEventListener('offline', onOffline)
    }
  }, [resync])

  // Own answers — re-read on every state change. RLS returns only an employee's own rows, but an
  // administrator receives everyone's, so rows are always filtered to the signed-in user.
  useEffect(() => {
    if (!sessionId || !userId) return
    let cancelled = false
    fetchAnswers(sessionId)
      .then((rows) => {
        if (cancelled) return
        setAnswers((prev) => {
          const map = prev.sessionId === sessionId && prev.userId === userId ? { ...prev.map } : {}
          for (const row of rows) if (row.userId === userId) map[row.questionId] = row
          return { sessionId, userId, map }
        })
      })
      .catch(() => undefined)
    return () => {
      cancelled = true
    }
  }, [sessionId, userId, status, currentIndex, resyncNonce])

  // Participants: realtime only in the lobby, where the count changes as people join (throttled —
  // every heartbeat touches the table too). Scores change only while a question runs and are settled
  // by reveal, so reveal / finished rely on the single fresh read per state change below.
  const watchParticipants = status === 'lobby'
  useEffect(() => {
    if (!sessionId || !watchParticipants) return
    const id = sessionId
    let cancelled = false
    let timer: number | null = null
    const load = () => {
      timer = null
      fetchParticipants(id)
        .then((list) => {
          if (!cancelled) setParticipants({ sessionId: id, list })
        })
        .catch(() => undefined)
    }
    const unsubscribe = subscribeParticipants(id, () => {
      if (timer !== null) return
      timer = window.setTimeout(load, LOBBY_REFRESH_MS)
    })
    return () => {
      cancelled = true
      if (timer !== null) window.clearTimeout(timer)
      unsubscribe()
    }
  }, [sessionId, watchParticipants])

  useEffect(() => {
    if (!sessionId || !status || status === 'question' || status === 'cancelled') return
    const id = sessionId
    let cancelled = false
    fetchParticipants(id)
      .then((list) => {
        if (!cancelled) setParticipants({ sessionId: id, list })
      })
      .catch(() => undefined)
    return () => {
      cancelled = true
    }
  }, [sessionId, status, currentIndex, resyncNonce])

  // Join + heartbeat (join_final_session is idempotent) and a safety re-sync while live.
  useEffect(() => {
    if (!sessionId || !live) return
    const id = sessionId
    let cancelled = false
    const attemptJoin = (initial: boolean) => {
      joinSession(id)
        .then(() => {
          if (!cancelled) markJoined(id)
        })
        .catch(() => {
          if (cancelled || !initial) return
          setJoin((prev) => (prev.sessionId === id && prev.state === 'joined' ? prev : { sessionId: id, state: 'error' }))
        })
    }
    if (shouldJoin) {
      setJoin((prev) => (prev.sessionId === id && prev.state === 'joined' ? prev : { sessionId: id, state: 'joining' }))
      attemptJoin(true)
    }
    const timer = window.setInterval(() => {
      if (shouldJoin) attemptJoin(false)
      fetchSession(id)
        .then((row) => {
          if (cancelled) return
          if (row) applySession(row)
          else dropSession(id)
        })
        .catch(() => undefined)
    }, HEARTBEAT_MS)
    return () => {
      cancelled = true
      window.clearInterval(timer)
    }
  }, [sessionId, live, shouldJoin, joinNonce, markJoined, applySession, dropSession])

  // Keep the phone screen awake while the session is live.
  useEffect(() => {
    if (!live) return
    const wakeLock = getWakeLock()
    if (!wakeLock) return
    let disposed = false
    let acquiring = false
    let sentinel: WakeLockSentinelLike | null = null
    const acquire = async () => {
      if (disposed || acquiring || document.visibilityState !== 'visible') return
      if (sentinel && !sentinel.released) return
      acquiring = true
      try {
        const next = await wakeLock.request('screen')
        if (disposed) void next.release().catch(() => undefined)
        else sentinel = next
      } catch {
        /* not allowed (battery saver, unsupported browser) — the test still works */
      } finally {
        acquiring = false
      }
    }
    const onVisibility = () => {
      if (document.visibilityState === 'visible') void acquire()
    }
    void acquire()
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      disposed = true
      document.removeEventListener('visibilitychange', onVisibility)
      if (sentinel) void sentinel.release().catch(() => undefined)
      sentinel = null
    }
  }, [live])

  // Session over: drop leftover drafts and refresh attempts so the Tests page shows the result.
  useEffect(() => {
    if (!sessionId || !status || !isTerminal(status)) return
    clearSessionDrafts(sessionId)
    if (status === 'finished' && reloadedForRef.current !== sessionId) {
      reloadedForRef.current = sessionId
      reloadRef.current().catch(() => undefined)
    }
  }, [sessionId, status])

  // ─── Derived state ──────────────────────────────────────────────────────────

  const myAnswers = useMemo(
    () => (answers.sessionId === sessionId && userId !== null && answers.userId === userId ? answers.map : {}),
    [answers, sessionId, userId],
  )

  const question: FinalCurrentQuestion | null =
    session && (session.status === 'question' || session.status === 'reveal') ? session.currentQuestion : null
  const currentAnswer = question ? (myAnswers[question.id] ?? null) : null

  const deadlineMs =
    session?.status === 'question' && session.questionDeadlineAt ? Date.parse(session.questionDeadlineAt) : null
  const startedMs = session?.questionStartedAt ? Date.parse(session.questionStartedAt) : null
  const now = useNow(deadlineMs !== null)
  const remainingMs = deadlineMs !== null && clockReady ? Math.max(0, deadlineMs - (now + offset)) : null
  const graceLeftMs = deadlineMs !== null && clockReady ? deadlineMs + GRACE_MS - (now + offset) : null
  const totalMs = deadlineMs !== null && startedMs !== null ? Math.max(1, deadlineMs - startedMs) : 0

  const standings = useMemo<Standings>(() => {
    const list = participants.sessionId === sessionId ? participants.list : []
    const index = user ? list.findIndex((p) => p.userId === user.id) : -1
    const me = index >= 0 ? list[index] : null
    // The list is ordered by score desc, joined_at asc — exactly what finish_final_session ranks by
    // (dense_rank over score desc, joined_at asc), so the live place matches the final one.
    return { count: list.length, me, place: me ? (me.rank ?? index + 1) : null }
  }, [participants, sessionId, user])

  const myTotal = useMemo(() => {
    if (standings.me) return standings.me.score
    return Object.values(myAnswers).reduce((sum, a) => sum + a.points, 0)
  }, [standings.me, myAnswers])

  // The server confirmed an open answer — its local draft is no longer needed.
  useEffect(() => {
    if (sessionId && question?.type === 'open' && currentAnswer) removeDraft(draftKey(sessionId, question.id))
  }, [sessionId, question, currentAnswer])

  // ─── Actions ────────────────────────────────────────────────────────────────

  const submit = useCallback(
    async (questionId: string, answer: AnswerInput): Promise<boolean> => {
      const current = sessionRef.current
      if (!current || submittingRef.current) return false
      const id = current.id
      submittingRef.current = true
      setPending({ questionId, answerIndex: 'answerIndex' in answer ? answer.answerIndex : null })
      setFailed(null)
      try {
        let row: FinalAnswer
        try {
          row = await submitAnswer(id, questionId, answer)
        } catch (e) {
          // Joined late or the first join failed: join now and try once more.
          if (!(e instanceof SubmitError) || e.reason !== 'not_participant') throw e
          await joinSession(id)
          markJoined(id)
          setAdminJoined(true)
          row = await submitAnswer(id, questionId, answer)
        }
        setAnswers((prev) => ({
          sessionId: id,
          userId: row.userId,
          map: { ...(prev.sessionId === id && prev.userId === row.userId ? prev.map : {}), [row.questionId]: row },
        }))
        return true
      } catch (e) {
        const reason = toFailure(e)
        if (reason === 'empty_answer') toast.error(t('final.emptyAnswer'))
        else setFailed({ questionId, reason, answer })
        if (LOCKING_FAILURES.includes(reason)) resync()
        return false
      } finally {
        submittingRef.current = false
        setPending(null)
      }
    },
    [markJoined, resync, t],
  )

  // A send that failed on the network right at the deadline is re-sent once inside the server's grace
  // window (open questions use the latest draft) before the screen locks with "Time is up".
  useEffect(() => {
    if (!sessionId || !question || currentAnswer || pending || !failed) return
    if (failed.questionId !== question.id || failed.reason !== 'network') return
    if (remainingMs !== 0 || graceLeftMs === null || graceLeftMs < GRACE_RETRY_MIN_MS) return
    const key = draftKey(sessionId, question.id)
    if (graceRetriedRef.current.has(key)) return
    graceRetriedRef.current.add(key)
    let answer = failed.answer
    if (question.type === 'open') {
      const draft = readDraft(key).trim()
      if (draft) answer = { answerText: draft }
    }
    void submit(question.id, answer)
  }, [sessionId, question, currentAnswer, pending, failed, remainingMs, graceLeftMs, submit])

  const handleSignOut = async () => {
    if (signingOut) return
    setSigningOut(true)
    try {
      await signOut()
    } catch {
      toast.error(t('common.error'))
      setSigningOut(false)
    }
  }

  const retryLoad = () => {
    setPhase('loading')
    setLoadNonce((n) => n + 1)
  }

  // ─── Stage ──────────────────────────────────────────────────────────────────

  const identity = user ? (
    <IdentityCard name={user.fullName || user.login} signingOut={signingOut} onSignOut={() => void handleSignOut()} />
  ) : null

  let stageKey: string
  let stage: ReactNode

  if (!session) {
    if (phase === 'loading') {
      stageKey = 'loading'
      stage = <LoadingStage />
    } else if (phase === 'error') {
      stageKey = 'error'
      stage = <ErrorStage onRetry={retryLoad} />
    } else {
      stageKey = 'waiting'
      stage = <WaitingStage isAdmin={isAdmin} identity={identity} />
    }
  } else if (session.status === 'lobby') {
    const joinState: JoinState = join.sessionId === session.id ? join.state : shouldJoin ? 'joining' : 'idle'
    stageKey = `${session.id}:lobby`
    stage = (
      <LobbyStage
        joinState={joinState}
        count={standings.count}
        identity={identity}
        onRetry={() => setJoinNonce((n) => n + 1)}
      />
    )
  } else if (session.status === 'question') {
    if (!question) {
      stageKey = `${session.id}:question-loading`
      stage = <LoadingStage />
    } else {
      const pendingHere = pending?.questionId === question.id
      const failure = failed?.questionId === question.id ? failed : null
      // After a network failure the answer can still be re-sent until the server's grace window closes.
      const retryable = failure !== null && failure.reason === 'network' && graceLeftMs !== null && graceLeftMs > 0
      const locked =
        !currentAnswer &&
        !pendingHere &&
        ((remainingMs === 0 && !retryable) || (failure !== null && LOCKING_FAILURES.includes(failure.reason)))
      const view = currentAnswer ? 'received' : locked ? 'timeup' : 'answer'
      stageKey = `${session.id}:q:${question.id}`
      stage = (
        <div className={cn('flex flex-col gap-4', view === 'answer' && question.type === 'open' && 'pb-32')}>
          <QuestionHeader
            index={session.currentIndex + 1}
            total={session.questionIds.length}
            remainingMs={remainingMs}
            totalMs={totalMs}
          />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={view}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              {view === 'received' && currentAnswer && <ReceivedView question={question} answer={currentAnswer} />}
              {view === 'timeup' && <TimeUpView />}
              {view === 'answer' && (
                <div className="flex flex-col gap-4">
                  <QuestionPrompt question={question} />
                  {failure && !LOCKING_FAILURES.includes(failure.reason) && (
                    <NetworkBanner
                      pending={pendingHere}
                      onRetry={question.type === 'choice' ? () => void submit(failure.questionId, failure.answer) : undefined}
                    />
                  )}
                  {question.type === 'choice' ? (
                    <ChoiceOptions
                      question={question}
                      pendingIndex={pendingHere ? (pending?.answerIndex ?? null) : null}
                      disabled={pending !== null}
                      onPick={(i) => void submit(question.id, { answerIndex: i })}
                    />
                  ) : (
                    <OpenAnswer
                      key={draftKey(session.id, question.id)}
                      storageKey={draftKey(session.id, question.id)}
                      remainingMs={remainingMs}
                      pending={pendingHere}
                      onSubmit={(text) => void submit(question.id, { answerText: text })}
                    />
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )
    }
  } else if (session.status === 'reveal') {
    stageKey = `${session.id}:r:${session.reveal?.questionId ?? 'none'}`
    stage = session.reveal ? (
      <RevealStage
        index={session.currentIndex + 1}
        total={session.questionIds.length}
        question={question && question.id === session.reveal.questionId ? question : null}
        reveal={session.reveal}
        answer={myAnswers[session.reveal.questionId] ?? null}
        standings={standings}
        score={myTotal}
      />
    ) : (
      <LoadingStage />
    )
  } else if (session.status === 'finished') {
    const asked = session.questionIds.slice(0, Math.max(0, session.askedCount))
    const all = Object.values(myAnswers)
    const askedChoice = asked.filter((id) => getFinalQuestion(id)?.type === 'choice').length
    const answeredChoice = all.filter((a) => a.answerIndex !== null).length
    stageKey = `${session.id}:finished`
    stage = (
      <FinishedStage
        participated={standings.me !== null || all.length > 0}
        score={myTotal}
        place={standings.place}
        count={standings.count}
        correct={all.filter((a) => a.isCorrect === true).length}
        choiceTotal={askedChoice || answeredChoice}
      />
    )
  } else {
    stageKey = `${session.id}:cancelled`
    stage = <CancelledStage />
  }

  const compact = status === 'question' || status === 'reveal'

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-5">
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h1 className={cn('font-semibold tracking-tight', compact ? 'text-xl' : 'text-3xl')}>{t('nav.finalTest')}</h1>
          {!compact && (
            <p className="mt-1.5 text-[15px] text-muted-foreground">
              {session && live && session.title.trim() ? session.title : t('final.subtitle')}
            </p>
          )}
        </div>
        {live && <LivePill />}
      </header>

      <AnimatePresence initial={false}>
        {!online && (
          <motion.div
            key="offline"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="overflow-hidden"
          >
            <div
              role="status"
              className="flex items-center gap-2.5 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm font-medium text-rose-700 dark:text-rose-300"
            >
              <WifiOff className="size-4 shrink-0" />
              {t('final.offline')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isAdmin && session && live && (
        <AdminBanner
          sessionId={session.id}
          canJoin={!adminJoined && session.status === 'lobby'}
          onJoin={() => setAdminJoined(true)}
        />
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={stageKey}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          {stage}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ─── Building blocks ─────────────────────────────────────────────────────────

const TONE_ICON: Record<Tone, string> = {
  accent: 'gradient-accent text-white',
  success: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
  danger: 'bg-rose-500/15 text-rose-600 dark:text-rose-400',
  warn: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
  muted: 'bg-muted text-muted-foreground',
}

function Panel({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('rounded-2xl border border-border/60 bg-card shadow-premium', className)}>{children}</div>
}

function HeroIcon({ icon: Icon, tone }: { icon: LucideIcon; tone: Tone }) {
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
      className={cn('flex size-20 items-center justify-center rounded-full', TONE_ICON[tone])}
    >
      <Icon className="size-10" strokeWidth={2.25} />
    </motion.div>
  )
}

function LetterBadge({ index, className }: { index: number; className?: string }) {
  return (
    <span
      className={cn(
        'flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted text-base font-semibold text-foreground',
        className,
      )}
    >
      {LETTERS[index] ?? '?'}
    </span>
  )
}

function PulseDot({ className }: { className?: string }) {
  return (
    <span className={cn('relative flex size-2.5', className)}>
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-current opacity-60" />
      <span className="relative inline-flex size-2.5 rounded-full bg-current" />
    </span>
  )
}

function LivePill() {
  const { t } = useLanguage()
  return (
    <span className="mt-1 inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
      <PulseDot />
      {t('final.live')}
    </span>
  )
}

function IdentityCard({ name, signingOut, onSignOut }: { name: string; signingOut: boolean; onSignOut: () => void }) {
  const { t } = useLanguage()
  return (
    <Panel className="flex items-center gap-3 p-4">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl gradient-accent text-base font-semibold text-white">
        {initialsOf(name)}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted-foreground">{t('final.youAre')}</p>
        <p className="truncate text-base font-semibold tracking-tight">{name}</p>
      </div>
      <div className="shrink-0 text-right">
        <p className="text-xs text-muted-foreground">{t('final.notYou')}</p>
        <Button
          variant="link"
          size="sm"
          className="h-auto px-0 py-0.5 text-sm"
          onClick={onSignOut}
          disabled={signingOut}
        >
          {signingOut && <Loader2 className="size-3.5 animate-spin" />}
          {t('final.signOut')}
        </Button>
      </div>
    </Panel>
  )
}

function AdminBanner({ sessionId, canJoin, onJoin }: { sessionId: string; canJoin: boolean; onJoin: () => void }) {
  const { t } = useLanguage()
  return (
    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4">
      <div className="flex items-start gap-3">
        <ShieldCheck className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" />
        <p className="text-sm font-medium text-amber-900 dark:text-amber-100">{t('final.adminBanner')}</p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 pl-8">
        <Button asChild size="sm" className="gap-1.5">
          <Link to={`/present/${sessionId}`}>
            <MonitorPlay className="size-4" />
            {t('final.adminOpenHost')}
          </Link>
        </Button>
        {canJoin && (
          <Button size="sm" variant="outline" onClick={onJoin} className="h-auto min-h-7 whitespace-normal py-1 text-left">
            {t('final.adminJoin')}
          </Button>
        )}
      </div>
    </div>
  )
}

// ─── Stages ──────────────────────────────────────────────────────────────────

function LoadingStage() {
  const { t } = useLanguage()
  return (
    <div className="flex min-h-[40svh] items-center justify-center" role="status" aria-label={t('common.loading')}>
      <div className="size-8 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
    </div>
  )
}

function ErrorStage({ onRetry }: { onRetry: () => void }) {
  const { t } = useLanguage()
  return (
    <Panel className="flex flex-col items-center gap-5 px-6 py-10 text-center">
      <HeroIcon icon={WifiOff} tone="danger" />
      <p className="text-lg font-semibold tracking-tight">{t('common.loadFailed')}</p>
      <Button size="lg" className="h-12 gap-2 px-6 text-base" onClick={onRetry}>
        <RotateCcw className="size-4" />
        {t('common.retry')}
      </Button>
    </Panel>
  )
}

function WaitingStage({ isAdmin, identity }: { isAdmin: boolean; identity: ReactNode }) {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col gap-4">
      <Panel className="relative flex flex-col items-center gap-6 overflow-hidden px-6 py-12 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 size-64 -translate-x-1/2 rounded-full gradient-accent opacity-[0.10] blur-3xl"
        />
        <div className="relative flex size-24 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full gradient-accent opacity-20" />
          <span className="absolute inset-3 animate-pulse rounded-full gradient-accent opacity-25" />
          <span className="relative flex size-16 items-center justify-center rounded-2xl gradient-accent shadow-premium">
            <Radio className="size-8 text-white" strokeWidth={2.25} />
          </span>
        </div>
        <div className="relative">
          <h2 className="text-2xl font-semibold tracking-tight">{t('final.waitingTitle')}</h2>
          <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            {t('final.waitingText')}
          </p>
        </div>
      </Panel>
      {isAdmin && (
        <div className="flex flex-col gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-start gap-3">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" />
            <p className="text-sm font-medium text-amber-900 dark:text-amber-100">{t('final.adminNoSession')}</p>
          </div>
          <Button asChild size="sm" className="gap-1.5 self-start sm:self-auto">
            <Link to="/admin/final">
              <LayoutDashboard className="size-4" />
              {t('final.adminGoToPanel')}
            </Link>
          </Button>
        </div>
      )}
      {identity}
    </div>
  )
}

function LobbyStage({
  joinState,
  count,
  identity,
  onRetry,
}: {
  joinState: JoinState
  count: number
  identity: ReactNode
  onRetry: () => void
}) {
  const { t, tf } = useLanguage()
  return (
    <div className="flex flex-col gap-4">
      <Panel className="flex flex-col items-center gap-5 px-6 py-10 text-center">
        {joinState === 'joined' && (
          <>
            <HeroIcon icon={Check} tone="success" />
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">{t('final.joinedTitle')}</h2>
              <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                {t('final.joinedText')}
              </p>
            </div>
          </>
        )}
        {joinState === 'joining' && (
          <>
            <div className="flex size-20 items-center justify-center rounded-full bg-muted">
              <Loader2 className="size-9 animate-spin text-muted-foreground" />
            </div>
            <p className="text-lg font-semibold tracking-tight">{t('final.joining')}</p>
          </>
        )}
        {joinState === 'error' && (
          <>
            <HeroIcon icon={WifiOff} tone="danger" />
            <p className="max-w-sm text-[15px] font-medium leading-relaxed">{t('final.joinFailed')}</p>
            <Button size="lg" className="h-12 gap-2 px-6 text-base" onClick={onRetry}>
              <RotateCcw className="size-4" />
              {t('common.retry')}
            </Button>
          </>
        )}
        {joinState === 'idle' && (
          <>
            <HeroIcon icon={Users} tone="muted" />
            <p className="max-w-sm text-[15px] font-medium leading-relaxed">{t('final.adminNotJoined')}</p>
          </>
        )}
        <motion.div
          key={count}
          initial={{ scale: 0.92, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-semibold tabular-nums"
        >
          <Users className="size-4 text-muted-foreground" />
          {tf('final.participants', { count })}
        </motion.div>
      </Panel>
      {identity}
    </div>
  )
}

function QuestionHeader({
  index,
  total,
  remainingMs,
  totalMs,
}: {
  index: number
  total: number
  remainingMs: number | null
  totalMs: number
}) {
  const { tf } = useLanguage()
  const secs = remainingMs === null ? null : Math.ceil(remainingMs / 1000)
  const tone: 'normal' | 'warn' | 'danger' = secs === null ? 'normal' : secs <= 5 ? 'danger' : secs <= 10 ? 'warn' : 'normal'
  const pct = remainingMs === null || totalMs <= 0 ? 100 : Math.max(0, Math.min(100, (remainingMs / totalMs) * 100))
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-muted-foreground">{tf('final.questionOf', { k: index, n: total })}</span>
        <span
          role="timer"
          aria-label={secs === null ? undefined : tf('final.secondsLeft', { s: secs })}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xl font-semibold tabular-nums tracking-tight transition-colors',
            tone === 'normal' && 'bg-muted text-foreground',
            tone === 'warn' && 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
            tone === 'danger' && 'animate-pulse bg-rose-500/15 text-rose-700 dark:text-rose-300',
          )}
        >
          <Timer className="size-4.5" />
          {secs === null ? '–:––' : formatClock(secs)}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
        <div
          className={cn(
            'h-full rounded-full transition-[width] duration-300 ease-linear',
            tone === 'normal' && 'gradient-accent',
            tone === 'warn' && 'bg-amber-500',
            tone === 'danger' && 'bg-rose-500',
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

function QuestionPrompt({ question }: { question: FinalCurrentQuestion }) {
  const { t, tx } = useLanguage()
  const scenario = (tx(question.scenario) ?? '').trim()
  return (
    <Panel className="p-5">
      {scenario && (
        <>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t('final.scenario')}</p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">{scenario}</p>
        </>
      )}
      <h2 className={cn('text-xl font-semibold leading-snug tracking-tight', scenario && 'mt-4')}>
        {tx(question.question)}
      </h2>
    </Panel>
  )
}

function ChoiceOptions({
  question,
  pendingIndex,
  disabled,
  onPick,
}: {
  question: FinalCurrentQuestion
  pendingIndex: number | null
  disabled: boolean
  onPick: (index: number) => void
}) {
  const { tx } = useLanguage()
  return (
    <div className="flex flex-col gap-3">
      {(question.options ?? []).map((option, i) => {
        const isPending = pendingIndex === i
        return (
          <motion.button
            key={i}
            type="button"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.04 * i, ease: EASE }}
            onClick={() => onPick(i)}
            disabled={disabled}
            aria-busy={isPending}
            className={cn(
              'flex min-h-[56px] w-full items-center gap-3 rounded-2xl border bg-card px-4 py-3 text-left shadow-premium outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.99] disabled:cursor-not-allowed',
              isPending ? 'border-primary/50 ring-2 ring-primary/20' : 'border-border/60 hover:border-primary/40 hover:bg-muted/40',
              disabled && !isPending && 'opacity-50',
            )}
          >
            <LetterBadge index={i} className={cn(isPending && 'gradient-accent text-white')} />
            <span className="flex-1 text-base font-medium leading-snug">{tx(option)}</span>
            {isPending && <Loader2 className="size-5 shrink-0 animate-spin text-muted-foreground" />}
          </motion.button>
        )
      })}
    </div>
  )
}

function OpenAnswer({
  storageKey,
  remainingMs,
  pending,
  onSubmit,
}: {
  storageKey: string
  remainingMs: number | null
  pending: boolean
  onSubmit: (text: string) => void
}) {
  const { t, tf } = useLanguage()
  const [text, setText] = useState(() => readDraft(storageKey))
  const autoSentRef = useRef(false)
  const trimmed = text.trim()
  const words = countWords(text)

  // Send automatically just before the deadline so a written answer is never lost.
  useEffect(() => {
    if (autoSentRef.current || pending || !trimmed || remainingMs === null || remainingMs > AUTO_SUBMIT_MS) return
    autoSentRef.current = true
    onSubmit(trimmed)
  }, [remainingMs, pending, trimmed, onSubmit])

  const handleChange = (value: string) => {
    const next = value.slice(0, OPEN_MAX_LENGTH)
    setText(next)
    writeDraft(storageKey, next)
  }

  return (
    <div className="flex flex-col gap-2">
      <Textarea
        value={text}
        onChange={(e) => handleChange(e.target.value)}
        maxLength={OPEN_MAX_LENGTH}
        rows={8}
        disabled={pending}
        placeholder={t('final.openPlaceholder')}
        aria-label={t('final.yourAnswer')}
        className="min-h-52 rounded-2xl bg-card p-4 text-base leading-relaxed shadow-premium md:text-base"
      />
      <p className="px-1 text-xs leading-relaxed text-muted-foreground">{t('final.autoSubmitHint')}</p>

      {/* Fixed (not sticky): the app shell's overflow-x container would break `position: sticky`.
          Portalled to <body> so the page transition transform does not affect it; 264px = desktop sidebar. */}
      {createPortal(
        <div
          className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/90 backdrop-blur-xl lg:left-[264px]"
          style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
        >
          <div className="mx-auto flex w-full max-w-xl items-center gap-3 px-4 pt-3">
            <div className="min-w-0 shrink-0 text-xs tabular-nums text-muted-foreground">
              <p className="font-semibold text-foreground">{tf('final.words', { count: words })}</p>
              <p>
                {text.length}/{OPEN_MAX_LENGTH}
              </p>
            </div>
            <Button
              size="lg"
              className="h-12 flex-1 gap-2 rounded-xl text-base"
              disabled={!trimmed || pending}
              onClick={() => onSubmit(trimmed)}
            >
              {pending ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5" />}
              {pending ? t('final.sending') : t('final.submit')}
            </Button>
          </div>
        </div>,
        document.body,
      )}
    </div>
  )
}

function NetworkBanner({ pending, onRetry }: { pending: boolean; onRetry?: () => void }) {
  const { t } = useLanguage()
  return (
    <div
      role="alert"
      className="flex flex-col gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 sm:flex-row sm:items-center"
    >
      <div className="flex flex-1 items-start gap-3">
        <WifiOff className="mt-0.5 size-5 shrink-0 text-rose-600 dark:text-rose-400" />
        <div>
          <p className="text-sm font-semibold text-rose-800 dark:text-rose-200">{t('final.noConnection')}</p>
          <p className="mt-0.5 text-sm text-rose-700/90 dark:text-rose-300/90">{t('final.noConnectionText')}</p>
        </div>
      </div>
      {onRetry && (
        <Button size="lg" variant="outline" className="h-11 gap-2 self-stretch sm:self-auto" onClick={onRetry} disabled={pending}>
          {pending ? <Loader2 className="size-4 animate-spin" /> : <RotateCcw className="size-4" />}
          {t('common.retry')}
        </Button>
      )}
    </div>
  )
}

function ReceivedView({ question, answer }: { question: FinalCurrentQuestion; answer: FinalAnswer }) {
  const { t, tx } = useLanguage()
  const option = answer.answerIndex !== null ? question.options?.[answer.answerIndex] : undefined
  return (
    <Panel className="flex flex-col items-center gap-5 px-6 py-10 text-center">
      <HeroIcon icon={Check} tone="success" />
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{t('final.received')}</h2>
        <p className="mt-1.5 inline-flex items-center gap-2 text-[15px] text-muted-foreground">
          <PulseDot className="text-emerald-500" />
          {t('final.receivedText')}
        </p>
      </div>
      <div className="w-full rounded-xl bg-muted/60 p-4 text-left">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t('final.yourAnswer')}</p>
        {answer.answerIndex !== null ? (
          <div className="mt-2.5 flex items-center gap-3">
            <LetterBadge index={answer.answerIndex} className="gradient-accent text-white" />
            <span className="text-base font-medium leading-snug">{option ? tx(option) : ''}</span>
          </div>
        ) : (
          <p className="mt-2 line-clamp-6 whitespace-pre-wrap break-words text-[15px] leading-relaxed">{answer.answerText}</p>
        )}
      </div>
    </Panel>
  )
}

function TimeUpView() {
  const { t } = useLanguage()
  return (
    <Panel className="flex flex-col items-center gap-5 px-6 py-12 text-center">
      <HeroIcon icon={Hourglass} tone="warn" />
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{t('final.timeUp')}</h2>
        <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-muted-foreground">{t('final.timeUpText')}</p>
      </div>
    </Panel>
  )
}

function StatTile({ icon: Icon, label, value, accent }: { icon: LucideIcon; label: string; value: string; accent?: boolean }) {
  return (
    <Panel className="p-4">
      <div className={cn('mb-2.5 flex size-9 items-center justify-center rounded-xl', accent ? 'gradient-accent' : 'bg-muted')}>
        <Icon className={cn('size-4.5', accent ? 'text-white' : 'text-foreground')} />
      </div>
      <p className="whitespace-nowrap text-xl font-semibold tabular-nums tracking-tight sm:text-2xl">{value}</p>
      <p className="mt-0.5 text-sm text-muted-foreground">{label}</p>
    </Panel>
  )
}

function RevealStage({
  index,
  total,
  question,
  reveal,
  answer,
  standings,
  score,
}: {
  index: number
  total: number
  question: FinalCurrentQuestion | null
  reveal: FinalReveal
  answer: FinalAnswer | null
  standings: Standings
  score: number
}) {
  const { t, tf, tx } = useLanguage()
  const isChoice = question ? question.type === 'choice' : reveal.correctIndex !== null
  const options = question?.options ?? []
  const distribution = reveal.distribution ?? []
  const explanation = reveal.explanation ? (tx(reveal.explanation) ?? '').trim() : ''

  let tone: Tone
  let icon: LucideIcon
  let title: string
  if (!isChoice) {
    tone = answer ? 'accent' : 'warn'
    icon = answer ? FileCheck2 : Hourglass
    title = answer ? t('final.openSaved') : t('final.openMissed')
  } else if (!answer) {
    tone = 'warn'
    icon = Hourglass
    title = t('final.noAnswer')
  } else if (answer.isCorrect) {
    tone = 'success'
    icon = CircleCheck
    title = t('final.correct')
  } else {
    tone = 'danger'
    icon = CircleX
    title = t('final.incorrect')
  }
  const Icon = icon

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-semibold text-muted-foreground">{tf('final.questionOf', { k: index, n: total })}</p>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className={cn(
          'flex items-center gap-4 rounded-2xl border p-5',
          tone === 'success' && 'border-emerald-500/30 bg-emerald-500/10',
          tone === 'danger' && 'border-rose-500/30 bg-rose-500/10',
          tone === 'warn' && 'border-amber-500/30 bg-amber-500/10',
          tone === 'accent' && 'border-border/60 bg-card shadow-premium',
        )}
      >
        <span className={cn('flex size-14 shrink-0 items-center justify-center rounded-2xl', TONE_ICON[tone])}>
          <Icon className="size-7" strokeWidth={2.25} />
        </span>
        <div className="min-w-0 flex-1">
          <p className={cn('font-semibold tracking-tight', isChoice ? 'text-2xl' : 'text-base leading-snug')}>{title}</p>
          {isChoice && (
            <p className="mt-0.5 text-lg font-semibold tabular-nums text-muted-foreground">
              +{answer?.points ?? 0} {t('final.pointsUnit')}
            </p>
          )}
        </div>
      </motion.div>

      {question && (
        <Panel className="p-5">
          <p className="text-[15px] font-semibold leading-snug tracking-tight">{tx(question.question)}</p>
          {isChoice && options.length > 0 && (
            <div className="mt-4 flex flex-col gap-2.5">
              {options.map((option, i) => {
                const correct = i === reveal.correctIndex
                const mine = answer?.answerIndex === i
                const votes = distribution[i] ?? 0
                const pct = reveal.answered > 0 ? Math.round((votes / reveal.answered) * 100) : 0
                return (
                  <div
                    key={i}
                    className={cn(
                      'relative overflow-hidden rounded-xl border px-3 py-3',
                      correct && 'border-emerald-500/40 bg-emerald-500/10',
                      mine && !correct && 'border-rose-500/40 bg-rose-500/10',
                      !correct && !mine && 'border-border/60 opacity-60',
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <LetterBadge
                        index={i}
                        className={cn(
                          'size-8 text-sm',
                          correct && 'bg-emerald-500 text-white',
                          mine && !correct && 'bg-rose-500 text-white',
                        )}
                      />
                      <span className="flex-1 text-sm font-medium leading-snug">{tx(option)}</span>
                      {correct && <CircleCheck className="size-5 shrink-0 text-emerald-600 dark:text-emerald-400" />}
                      {mine && !correct && <CircleX className="size-5 shrink-0 text-rose-600 dark:text-rose-400" />}
                      <span className="w-10 shrink-0 text-right text-xs font-semibold tabular-nums text-muted-foreground">
                        {pct}%
                      </span>
                    </div>
                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
                        className={cn(
                          'h-full rounded-full',
                          correct ? 'bg-emerald-500' : mine ? 'bg-rose-500' : 'bg-muted-foreground/40',
                        )}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
          {isChoice && reveal.answered > 0 && (
            <p className="mt-3 text-xs text-muted-foreground">
              {tf('final.teamCorrect', { correct: reveal.correctCount, answered: reveal.answered })}
            </p>
          )}
        </Panel>
      )}

      {explanation && (
        <div className="flex items-start gap-3 rounded-2xl border border-amber-500/25 bg-amber-500/10 p-4">
          <Lightbulb className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-amber-400" />
          <div>
            <p className="text-sm font-semibold text-amber-900 dark:text-amber-100">{t('final.explanation')}</p>
            <p className="mt-1 text-sm leading-relaxed text-amber-900/80 dark:text-amber-100/80">{explanation}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <StatTile icon={Star} label={t('final.yourScore')} value={String(score)} accent />
        <StatTile
          icon={Medal}
          label={t('final.yourPlace')}
          value={standings.place !== null ? tf('final.placeOf', { place: standings.place, total: standings.count }) : '—'}
        />
      </div>

      <p className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-muted-foreground">
        <PulseDot className="text-primary" />
        {t('final.waitNext')}
      </p>
    </div>
  )
}

function FinishedStage({
  participated,
  score,
  place,
  count,
  correct,
  choiceTotal,
}: {
  participated: boolean
  score: number
  place: number | null
  count: number
  correct: number
  choiceTotal: number
}) {
  const { t, tf } = useLanguage()
  const rows: { icon: LucideIcon; label: string; value: string }[] = [
    { icon: Star, label: t('final.totalPoints'), value: String(score) },
    {
      icon: Medal,
      label: t('final.yourPlace'),
      value: place !== null ? tf('final.placeOf', { place, total: count }) : '—',
    },
    {
      icon: Target,
      label: t('final.correctAnswers'),
      value: tf('final.correctOf', { correct, total: choiceTotal }),
    },
  ]
  return (
    <div className="flex flex-col gap-4">
      <Panel className="relative flex flex-col items-center gap-5 overflow-hidden px-6 py-10 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 size-64 -translate-x-1/2 rounded-full gradient-accent opacity-[0.12] blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          className="relative flex size-20 items-center justify-center rounded-2xl gradient-accent shadow-premium"
        >
          <Trophy className="size-10 text-white" strokeWidth={2.25} />
        </motion.div>
        <div className="relative">
          <h2 className="text-3xl font-semibold tracking-tight">{t('final.finishedTitle')}</h2>
          <p className="mt-2 text-[15px] text-muted-foreground">
            {participated ? t('final.finishedText') : t('final.notParticipated')}
          </p>
        </div>
      </Panel>

      {participated && (
        <Panel className="divide-y divide-border/60 px-5">
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.08, ease: EASE }}
              className="flex items-center gap-3 py-4"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                <row.icon className="size-5" />
              </span>
              <span className="min-w-0 flex-1 text-[15px] leading-snug text-muted-foreground">{row.label}</span>
              <span className="shrink-0 whitespace-nowrap text-xl font-semibold tabular-nums tracking-tight sm:text-2xl">
                {row.value}
              </span>
            </motion.div>
          ))}
        </Panel>
      )}

      <p className="px-1 text-center text-sm leading-relaxed text-muted-foreground">{t('final.finishedNote')}</p>
      <Button asChild size="lg" className="h-12 gap-2 text-base">
        <Link to="/tests">{t('final.goToTests')}</Link>
      </Button>
    </div>
  )
}

function CancelledStage() {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col gap-4">
      <Panel className="flex flex-col items-center gap-5 px-6 py-12 text-center">
        <HeroIcon icon={Ban} tone="muted" />
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">{t('final.cancelledTitle')}</h2>
          <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            {t('final.cancelledText')}
          </p>
        </div>
      </Panel>
      <Button asChild size="lg" variant="outline" className="h-12 text-base">
        <Link to="/">{t('final.toDashboard')}</Link>
      </Button>
    </div>
  )
}
