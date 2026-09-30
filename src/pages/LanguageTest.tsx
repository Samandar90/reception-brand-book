import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CircleCheck,
  ClipboardPaste,
  EyeOff,
  Hourglass,
  ListChecks,
  LoaderCircle,
  Lock,
  LogOut,
  PenLine,
  Play,
  RotateCcw,
  Send,
  SkipForward,
  Timer,
  TriangleAlert,
  UserRound,
} from 'lucide-react'
import { toast } from 'sonner'
import type {
  CefrLevel,
  Language,
  LanguageQuestion,
  NewAttemptInput,
  TestAttempt,
  TestGrant,
  TestLanguage,
  WritingSubmission,
} from '@/types'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Progress } from '@/components/ui/progress'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations'
import { useAuth } from '@/contexts/AuthContext'
import { useProgress } from '@/contexts/ProgressContext'
import { clientSignals, errorMessage, fetchAttempts } from '@/lib/api'
import { getLanguageQuestion, getWritingPrompt, languageBank, writingPrompts } from '@/data/languageTests'
import {
  LEVEL_PASS_SCORE,
  LEVEL_SECONDS,
  QUESTIONS_PER_LEVEL,
  WRITING_MIN_LEVEL,
  WRITING_SECONDS,
  buildLevelSet,
  clearAttemptState,
  countWords,
  levelAtLeast,
  loadAttemptState,
  nextLevel,
  optionOrder,
  perLevelScores,
  pickWritingPrompt,
  reachedLevel,
  saveAttemptState,
  type LanguageAnswerRecord,
  type LanguageAttemptState,
  type LevelResult,
  type ReachedLevel,
} from '@/lib/languageTest'

type LangKind = 'english' | 'russian'

const EASE = [0.16, 1, 0.3, 1] as const
const LOCALES: Record<Language, string> = { ru: 'ru-RU', uz: 'uz-UZ', en: 'en-GB' }
const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']
const TICK_MS = 500

/**
 * Local attempt state. Extends the shared shape with a few optional fields; they are written to
 * localStorage together with the rest, so a refresh restores them too.
 */
interface RunState extends LanguageAttemptState {
  /** Question ids used in previous attempts of this kind (preferred to avoid). */
  seenIds?: string[]
  seenWritingIds?: string[]
  /** When the current question was shown (ms). */
  questionStartedAt?: number
  /** Set after a passed level while the "level completed" screen is shown; the next timer starts on Continue. */
  interstitialFrom?: CefrLevel | null
  pasteAttempts?: number
  writingOffered?: boolean
  writingSkipped?: boolean
  writingSubmittedAt?: number | null
  /** Retake permission the run was started under (null when none was open). */
  grantId?: string | null
}

type SaveStatus = 'idle' | 'saving' | 'error' | 'notAllowed'

interface FinishedResult {
  reached: ReachedLevel
  levelResults: LevelResult[]
  writingOffered: boolean
  writingSubmitted: boolean
}

// ─── Pure helpers ────────────────────────────────────────────────────────────

function mmss(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000))
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function formatDate(iso: string, lang: Language): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleDateString(LOCALES[lang], { day: 'numeric', month: 'short', year: 'numeric' })
}

function formatDateTime(iso: string, lang: Language): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleString(LOCALES[lang], { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
}

function median(values: number[]): number | null {
  if (!values.length) return null
  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2)
}

function sameStart(a: string, b: string): boolean {
  return Date.parse(a) === Date.parse(b)
}

/** Deadline of the clock that is running now; null on the intro, interstitial, pre-writing and done screens. */
function runningDeadline(s: RunState | null): number | null {
  if (!s) return null
  if (s.phase === 'level') return !s.interstitialFrom && s.levelDeadlineAt > 0 ? s.levelDeadlineAt : null
  if (s.phase === 'writing') return s.writingDeadlineAt
  return null
}

/**
 * A saved retake run is outdated when it was not started under any currently open retake permission,
 * e.g. an earlier retake that was abandoned or rejected before the administrator granted a new one.
 */
function isOutdatedRun(s: RunState, attemptCount: number, validGrants: TestGrant[]): boolean {
  return attemptCount > 0 && validGrants.length > 0 && !validGrants.some((g) => g.id === s.grantId)
}

/** Picks the 8 questions of a level; the level clock is started separately. */
function prepareLevel(s: RunState, level: CefrLevel, bank: LanguageQuestion[]): RunState {
  const questions = buildLevelSet(bank, level, new Set(s.seenIds ?? []))
  const orders: Record<string, number[]> = { ...s.optionOrders }
  for (const q of questions) orders[q.id] = optionOrder(q)
  return {
    ...s,
    phase: 'level',
    currentLevel: level,
    levelQuestionIds: questions.map((q) => q.id),
    optionOrders: orders,
    position: 0,
    levelCorrect: 0,
    levelStartedAt: 0,
    levelDeadlineAt: 0,
  }
}

function startLevelClock(s: RunState, now: number): RunState {
  return {
    ...s,
    interstitialFrom: null,
    levelStartedAt: now,
    levelDeadlineAt: now + LEVEL_SECONDS * 1000,
    questionStartedAt: now,
  }
}

/** Closes the current level (unanswered questions count as wrong) and moves to the next step. */
function closeLevel(s: RunState, timedOut: boolean, now: number, testLang: TestLanguage): RunState {
  const answers: LanguageAnswerRecord[] = [...s.answers]
  for (let i = s.position; i < s.levelQuestionIds.length; i++) {
    const id = s.levelQuestionIds[i]
    const q = getLanguageQuestion(id)
    answers.push({
      id,
      level: s.currentLevel,
      skill: q?.skill ?? 'grammar',
      selected: null,
      correct: false,
      ms: i === s.position ? Math.max(0, now - (s.questionStartedAt ?? s.levelStartedAt)) : 0,
    })
  }
  const result: LevelResult = {
    level: s.currentLevel,
    score: s.levelCorrect,
    total: QUESTIONS_PER_LEVEL,
    passed: s.levelCorrect >= LEVEL_PASS_SCORE,
    timedOut,
  }
  const levelResults = [...s.levelResults, result]
  const base: RunState = { ...s, answers, levelResults, position: s.levelQuestionIds.length, interstitialFrom: null }

  const next = result.passed ? nextLevel(s.currentLevel) : null
  if (next) return { ...prepareLevel(base, next, languageBank[testLang]), interstitialFrom: s.currentLevel }

  const reached = reachedLevel(levelResults)
  if (reached !== 'A0' && levelAtLeast(reached, WRITING_MIN_LEVEL)) {
    const prompt = pickWritingPrompt(writingPrompts[testLang], reached, new Set(s.seenWritingIds ?? []))
    if (prompt) {
      return {
        ...base,
        phase: 'writing',
        writingOffered: true,
        writingPromptId: prompt.id,
        writingStartedAt: null,
        writingDeadlineAt: null,
      }
    }
  }
  return { ...base, phase: 'done', writingOffered: false, writingSkipped: false }
}

function finishWriting(s: RunState, text: string, skipped: boolean, now: number): RunState {
  return { ...s, phase: 'done', writingText: text, writingSkipped: skipped, writingSubmittedAt: now }
}

function buildAttempt(s: RunState, kind: LangKind): NewAttemptInput {
  const text = s.writingText.trim()
  const writing: WritingSubmission | null =
    s.writingOffered && !s.writingSkipped && s.writingPromptId && text
      ? {
          promptId: s.writingPromptId,
          text,
          wordCount: countWords(text),
          durationSec: s.writingStartedAt
            ? Math.max(0, Math.round(((s.writingSubmittedAt ?? Date.now()) - s.writingStartedAt) / 1000))
            : 0,
          pasteAttempts: s.pasteAttempts ?? 0,
        }
      : null

  return {
    kind,
    score: s.answers.filter((a) => a.correct).length,
    total: s.answers.length,
    level: reachedLevel(s.levelResults),
    startedAt: s.startedAt,
    details: {
      mode: 'placement',
      language: s.language,
      questionIds: s.answers.map((a) => a.id),
      answers: s.answers,
      perLevelScores: perLevelScores(s.levelResults),
      levelResults: s.levelResults,
      timedOut: s.levelResults.some((r) => r.timedOut),
      focusLost: s.focusLost,
      medianMs: median(s.answers.filter((a) => a.selected !== null).map((a) => a.ms)),
      writingOffered: !!s.writingOffered,
      writingSkipped: !!s.writingOffered && writing === null,
      writingPromptId: s.writingPromptId,
      pasteAttempts: s.pasteAttempts ?? 0,
      ...clientSignals(),
    },
    writing,
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function LanguageTest() {
  const { language } = useParams<{ language: string }>()
  const { user } = useAuth()
  if (language !== 'english' && language !== 'russian') return <Navigate to="/tests" replace />
  if (!user) return <CenteredSpinner />
  return (
    <LanguageTestRunner
      key={`${language}:${user.id}`}
      kind={language}
      testLang={language === 'english' ? 'en' : 'ru'}
      userId={user.id}
    />
  )
}

function LanguageTestRunner({ kind, testLang, userId }: { kind: LangKind; testLang: TestLanguage; userId: string }) {
  const { t, tf, tx, lang } = useLanguage()
  const { user, signOut } = useAuth()
  const { attemptsOf, openGrants, recordAttempt, logEvent, reload } = useProgress()

  const [check, setCheck] = useState<'loading' | 'ready' | 'error'>('loading')
  const [checkNonce, setCheckNonce] = useState(0)
  const [run, setRun] = useState<RunState | null>(() => loadAttemptState(testLang, userId))
  const runRef = useRef<RunState | null>(run)
  const [active, setActive] = useState(false)
  const [now, setNow] = useState(() => Date.now())
  // The selection is tied to its question, so a tap on the card that is animating out cannot preselect the next one.
  const [selection, setSelection] = useState<{ qid: string; idx: number } | null>(null)
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle')
  const savingRef = useRef(false)
  const startingRef = useRef(false)
  const [result, setResult] = useState<FinishedResult | null>(null)
  const [text, setText] = useState(() => run?.writingText ?? '')
  const textRef = useRef(text)
  const [pasteNotice, setPasteNotice] = useState(false)
  const [skipOpen, setSkipOpen] = useState(false)
  const [signingOut, setSigningOut] = useState(false)
  const [discardOpen, setDiscardOpen] = useState(false)
  /** The page was hidden while a clock was running; counted when it becomes visible again. */
  const awayRef = useRef(false)

  const commit = useCallback((next: RunState | null) => {
    runRef.current = next
    if (next) saveAttemptState(next)
    setRun(next)
  }, [])

  // Fresh attempts and grants before deciding whether the test may be taken.
  useEffect(() => {
    let cancelled = false
    reload()
      .then(() => {
        if (!cancelled) setCheck('ready')
      })
      .catch(() => {
        if (cancelled) return
        setCheck('error')
        toast.error(t('common.loadFailed'))
      })
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload, checkNonce])

  const finishSuccess = useCallback((s: RunState, attempt: TestAttempt) => {
    clearAttemptState(s.language, s.userId)
    runRef.current = null
    setRun(null)
    setResult({
      reached: reachedLevel(s.levelResults),
      levelResults: s.levelResults,
      writingOffered: !!s.writingOffered,
      writingSubmitted: attempt.writing !== null,
    })
    setSaveStatus('idle')
  }, [])

  /** Looks for an attempt already stored for this run (e.g. the response was lost after a successful insert). */
  const findStored = useCallback(
    async (s: RunState): Promise<TestAttempt | null> => {
      try {
        const list = await fetchAttempts(s.userId)
        return list.find((a) => a.kind === kind && sameStart(a.startedAt, s.startedAt)) ?? null
      } catch {
        return null
      }
    },
    [kind],
  )

  const submit = useCallback(
    async (s: RunState, verifyFirst: boolean) => {
      if (savingRef.current) return
      savingRef.current = true
      setSaveStatus('saving')
      try {
        if (verifyFirst) {
          const stored = await findStored(s)
          if (stored) {
            finishSuccess(s, stored)
            reload().catch(() => undefined)
            return
          }
        }
        const attempt = await recordAttempt(buildAttempt(s, kind))
        if (!attempt) throw new Error('not_signed_in')
        finishSuccess(s, attempt)
      } catch (e) {
        const notAllowed = errorMessage(e).includes('retake_not_allowed')
        if (notAllowed) {
          const stored = await findStored(s)
          if (stored) {
            finishSuccess(s, stored)
            reload().catch(() => undefined)
            return
          }
        }
        setSaveStatus(notAllowed ? 'notAllowed' : 'error')
        toast.error(notAllowed ? t('lang.notAllowedTitle') : t('common.saveFailed'))
      } finally {
        savingRef.current = false
      }
    },
    [findStored, finishSuccess, recordAttempt, reload, kind, t],
  )

  const advance = useCallback(
    (next: RunState) => {
      commit(next)
      if (next.phase === 'done') void submit(next, false)
    },
    [commit, submit],
  )

  const checkDeadlines = useCallback(
    (n: number) => {
      const s = runRef.current
      if (!s) return
      if (s.phase === 'level' && !s.interstitialFrom && s.levelDeadlineAt > 0 && n >= s.levelDeadlineAt) {
        setSelection(null)
        toast.info(tf('lang.levelTimedOut', { level: s.currentLevel }))
        advance(closeLevel(s, true, n, testLang))
      } else if (s.phase === 'writing' && s.writingDeadlineAt !== null && n >= s.writingDeadlineAt) {
        const current = textRef.current
        setSkipOpen(false)
        toast.info(t('lang.writingTimeUp'))
        advance(finishWriting(s, current, current.trim().length === 0, n))
      }
    },
    [advance, testLang, t, tf],
  )

  // Countdown clock: runs while a deadline is set (also on the intro screen, to show the time left).
  const deadline = runningDeadline(run)
  useEffect(() => {
    if (!deadline) return
    const tick = () => {
      const n = Date.now()
      setNow(n)
      if (active) checkDeadlines(n)
    }
    tick()
    const id = window.setInterval(tick, TICK_MS)
    return () => window.clearInterval(id)
  }, [deadline, active, checkDeadlines])

  // Leaving the page (tab switch, app switch, screen off) while a clock is running is recorded for the
  // administrator. It is counted when the page becomes visible again, so a refresh or closing the tab is not
  // counted, and neither is time spent on the untimed screens between the parts.
  const listening = active && run !== null && run.phase !== 'done'
  useEffect(() => {
    if (!listening) return
    const onVisibility = () => {
      const s = runRef.current
      if (!s || s.phase === 'done') {
        awayRef.current = false
        return
      }
      if (document.visibilityState === 'hidden') {
        awayRef.current = runningDeadline(s) !== null
        // Keep the latest text in case the page is closed while hidden.
        if (s.phase === 'writing' && s.writingText !== textRef.current) commit({ ...s, writingText: textRef.current })
        return
      }
      if (!awayRef.current) return
      awayRef.current = false
      commit({ ...s, focusLost: s.focusLost + 1, writingText: s.phase === 'writing' ? textRef.current : s.writingText })
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [listening, commit])

  // While a clock is running, warn before closing the tab or following an in-app link: the clock does not stop.
  const clockRunning = active && deadline !== null
  const leaveMessage = t('lang.leaveConfirm')
  useEffect(() => {
    if (!clockRunning) return
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      // Older Chromium and some in-app WebViews only show the prompt when returnValue is set.
      e.returnValue = ''
    }
    const onClickCapture = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = e.target instanceof Element ? e.target.closest('a[href]') : null
      if (!link || link.getAttribute('target') === '_blank') return
      if (window.confirm(leaveMessage)) return
      e.preventDefault()
      e.stopPropagation()
    }
    window.addEventListener('beforeunload', onBeforeUnload)
    document.addEventListener('click', onClickCapture, true)
    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload)
      document.removeEventListener('click', onClickCapture, true)
    }
  }, [clockRunning, leaveMessage])

  // Autosave of the written answer (debounced).
  useEffect(() => {
    const s = runRef.current
    if (!s || s.phase !== 'writing' || s.writingText === text) return
    const id = window.setTimeout(() => {
      const cur = runRef.current
      if (cur && cur.phase === 'writing') commit({ ...cur, writingText: textRef.current })
    }, 1000)
    return () => window.clearTimeout(id)
  }, [text, commit])

  // ─── Derived ───────────────────────────────────────────────────────────────

  const attempts = attemptsOf(kind)
  const latest = attempts[0] ?? null
  const validGrants = openGrants.filter((g) => g.kind === kind && !g.usedByAttemptId && Date.parse(g.expiresAt) > now)
  const grant = validGrants[0] ?? null
  const eligible = attempts.length === 0 || grant !== null
  const stale = run !== null && attempts.some((a) => sameStart(a.startedAt, run.startedAt))
  // Decided on fresh data only. An outdated unfinished run is dropped, so the new permission starts a clean test;
  // an outdated finished run (e.g. one the server rejected earlier) can still be sent, or replaced by a new test.
  const outdated = check === 'ready' && run !== null && !stale && isOutdatedRun(run, attempts.length, validGrants)
  const dropOutdated = outdated && run?.phase !== 'done'
  const resumable = run !== null && !stale && !dropOutdated

  // A saved state whose attempt is already stored (the response was lost before cleanup) is dropped,
  // and so is an unfinished run that predates the current retake permission.
  useEffect(() => {
    if ((stale || dropOutdated) && !active) clearAttemptState(testLang, userId)
  }, [stale, dropOutdated, active, testLang, userId])
  const title = t(kind === 'english' ? 'lang.title.english' : 'lang.title.russian')

  // ─── Handlers ──────────────────────────────────────────────────────────────

  function handleStart() {
    if (active || startingRef.current || check !== 'ready' || !eligible) return
    startingRef.current = true
    const seen = new Set<string>()
    const seenWriting = new Set<string>()
    for (const a of attempts) {
      const ids = a.details.questionIds
      if (Array.isArray(ids)) for (const id of ids) if (typeof id === 'string') seen.add(id)
      if (a.writing?.promptId) seenWriting.add(a.writing.promptId)
      if (typeof a.details.writingPromptId === 'string') seenWriting.add(a.details.writingPromptId)
    }
    const n = Date.now()
    const base: RunState = {
      version: 1,
      language: testLang,
      userId,
      startedAt: new Date(n).toISOString(),
      phase: 'level',
      currentLevel: 'A1',
      levelQuestionIds: [],
      optionOrders: {},
      position: 0,
      levelStartedAt: 0,
      levelDeadlineAt: 0,
      levelCorrect: 0,
      answers: [],
      levelResults: [],
      focusLost: 0,
      writingPromptId: null,
      writingStartedAt: null,
      writingDeadlineAt: null,
      writingText: '',
      seenIds: [...seen],
      seenWritingIds: [...seenWriting],
      questionStartedAt: n,
      interstitialFrom: null,
      pasteAttempts: 0,
      writingOffered: false,
      writingSkipped: false,
      writingSubmittedAt: null,
      grantId: grant?.id ?? null,
    }
    commit(startLevelClock(prepareLevel(base, 'A1', languageBank[testLang]), n))
    textRef.current = ''
    setText('')
    setSelection(null)
    setSaveStatus('idle')
    setNow(n)
    setActive(true)
    logEvent('test_start', { kind })
  }

  function handleContinue() {
    const s = runRef.current
    if (active || !s) return
    textRef.current = s.writingText
    setText(s.writingText)
    setSelection(null)
    setActive(true)
    const n = Date.now()
    setNow(n)
    if (s.phase === 'done') {
      void submit(s, true)
      return
    }
    checkDeadlines(n)
  }

  function handleNext(questionId: string) {
    const s = runRef.current
    if (!s || s.phase !== 'level' || s.interstitialFrom) return
    // Guards against a double tap recording an answer for the following question.
    if (s.levelQuestionIds[s.position] !== questionId) return
    const n = Date.now()
    if (s.levelDeadlineAt > 0 && n >= s.levelDeadlineAt) {
      checkDeadlines(n)
      return
    }
    const picked = selection && selection.qid === questionId ? selection.idx : null
    const q = getLanguageQuestion(questionId)
    if (q && picked === null) return
    const correct = q !== undefined && picked !== null && picked === q.correctIndex
    const record: LanguageAnswerRecord = {
      id: questionId,
      level: s.currentLevel,
      skill: q?.skill ?? 'grammar',
      selected: q ? picked : null,
      correct,
      ms: Math.max(0, n - (s.questionStartedAt ?? s.levelStartedAt)),
    }
    let next: RunState = {
      ...s,
      answers: [...s.answers, record],
      position: s.position + 1,
      levelCorrect: s.levelCorrect + (correct ? 1 : 0),
      questionStartedAt: n,
    }
    if (next.position >= next.levelQuestionIds.length) next = closeLevel(next, false, n, testLang)
    setSelection(null)
    advance(next)
    if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleNextLevel() {
    const s = runRef.current
    if (!s || s.phase !== 'level' || !s.interstitialFrom) return
    const n = Date.now()
    setSelection(null)
    setNow(n)
    commit(startLevelClock(s, n))
  }

  function handleStartWriting() {
    const s = runRef.current
    if (!s || s.phase !== 'writing' || s.writingStartedAt !== null) return
    const n = Date.now()
    setNow(n)
    commit({ ...s, writingStartedAt: n, writingDeadlineAt: n + WRITING_SECONDS * 1000 })
  }

  function handleFinishWriting(skip: boolean) {
    const s = runRef.current
    if (!s || s.phase !== 'writing') return
    const current = textRef.current
    const prompt = s.writingPromptId ? getWritingPrompt(s.writingPromptId) : undefined
    if (!skip && prompt && countWords(current) < prompt.minWords) return
    setSkipOpen(false)
    advance(finishWriting(s, current, skip || !prompt, Date.now()))
  }

  function handleBlockedInput(e: { preventDefault: () => void }) {
    e.preventDefault()
    setPasteNotice(true)
    const s = runRef.current
    if (s && s.phase === 'writing') commit({ ...s, pasteAttempts: (s.pasteAttempts ?? 0) + 1, writingText: textRef.current })
  }

  function handleRetrySave() {
    const s = runRef.current
    if (!s || s.phase !== 'done') return
    void submit(s, true)
  }

  async function handleSignOut() {
    if (signingOut) return
    setSigningOut(true)
    try {
      await signOut()
    } catch {
      toast.error(t('common.loadFailed'))
      setSigningOut(false)
    }
  }

  // ─── Views ─────────────────────────────────────────────────────────────────

  if (result) {
    return <ResultView result={result} title={title} />
  }

  if (!active || !run) {
    let action: ReactNode
    const showResume = resumable && (check === 'error' || (check === 'ready' && eligible))
    if (check === 'loading') {
      action = (
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <LoaderCircle className="size-4 animate-spin" />
          {t('lang.checking')}
        </p>
      )
    } else if (showResume && run) {
      const runDeadline = runningDeadline(run)
      const remaining = runDeadline !== null ? runDeadline - now : null
      const finished = run.phase === 'done'
      action = (
        <div className="flex flex-col gap-3">
          {outdated && (
            <p className="flex items-start gap-2 rounded-xl bg-amber-500/10 p-3 text-sm text-amber-800 dark:text-amber-200">
              <TriangleAlert className="mt-0.5 size-4 shrink-0" />
              {tf('lang.unsentResult', { date: formatDate(run.startedAt, lang) })}
            </p>
          )}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button size="lg" onClick={handleContinue} className="h-11 w-full gap-2 px-5 sm:w-auto">
              {finished ? <Send className="size-4" /> : <Play className="size-4" />}
              {finished ? t('lang.sendSaved') : t('tests.continueTest')}
            </Button>
            {remaining !== null && (
              <span className="flex items-center gap-1.5 text-sm text-amber-700 tabular-nums dark:text-amber-300">
                <Timer className="size-4" />
                {tf('lang.timeRemaining', { time: mmss(remaining) })}
              </span>
            )}
          </div>
          {outdated && (
            <Button
              variant="outline"
              onClick={() => setDiscardOpen(true)}
              className="h-10 w-full gap-2 sm:w-auto sm:self-start"
            >
              <RotateCcw className="size-4" />
              {t('lang.startNew')}
            </Button>
          )}
        </div>
      )
    } else if (check === 'error') {
      action = (
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2 text-sm text-rose-700 dark:text-rose-300">
            <TriangleAlert className="size-4 shrink-0" />
            {t('common.loadFailed')}
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setCheck('loading')
              setCheckNonce((n) => n + 1)
            }}
            className="h-10 w-full gap-2 sm:w-auto"
          >
            <RotateCcw className="size-4" />
            {t('common.retry')}
          </Button>
        </div>
      )
    } else if (!eligible) {
      action = (
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted">
              <Lock className="size-5 text-muted-foreground" />
            </div>
            <div>
              <p className="font-semibold tracking-tight">{t('lang.alreadyTaken')}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{t('lang.askAdmin')}</p>
            </div>
          </div>
          {latest && (
            <div className="flex items-center gap-4 rounded-xl bg-muted/50 p-4">
              <LevelBadge level={latest.level ?? 'A0'} size="md" />
              <div className="min-w-0 text-sm">
                <p className="text-xs font-medium text-muted-foreground">{t('lang.latestResult')}</p>
                <p className="mt-0.5 leading-snug">{t(cefrKey(latest.level ?? 'A0'))}</p>
                <p className="mt-1 text-xs text-muted-foreground">{formatDate(latest.finishedAt, lang)}</p>
              </div>
            </div>
          )}
          <Button asChild variant="outline" className="h-10 w-full gap-2 sm:w-auto">
            <Link to="/tests">
              <ArrowLeft className="size-4" />
              {t('lang.backToTests')}
            </Link>
          </Button>
        </div>
      )
    } else {
      action = (
        <div className="flex flex-col gap-3">
          {grant && attempts.length > 0 && (
            <p className="flex items-start gap-2 rounded-xl bg-emerald-500/10 p-3 text-sm text-emerald-800 dark:text-emerald-200">
              <CircleCheck className="mt-0.5 size-4 shrink-0" />
              {tf('lang.retakeGranted', { time: formatDateTime(grant.expiresAt, lang) })}
            </p>
          )}
          <Button size="lg" onClick={handleStart} disabled={active} className="h-11 w-full gap-2 px-5 sm:w-auto">
            <Play className="size-4" />
            {t('tests.startTest')}
          </Button>
        </div>
      )
    }

    const rules: string[] = [
      t('lang.ruleStairs'),
      tf('lang.ruleQuestions', { n: QUESTIONS_PER_LEVEL }),
      tf('lang.ruleTime', { min: Math.round(LEVEL_SECONDS / 60) }),
      tf('lang.rulePass', { pass: LEVEL_PASS_SCORE, n: QUESTIONS_PER_LEVEL }),
      t('lang.ruleNoBack'),
      tf('lang.ruleWriting', { min: Math.round(WRITING_SECONDS / 60), level: WRITING_MIN_LEVEL }),
      t('lang.ruleAdmin'),
      t('lang.ruleHonesty'),
    ]

    return (
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-5">
        <motion.header initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE }}>
          <Link
            to="/tests"
            className="mb-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            {t('nav.tests')}
          </Link>
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-2 text-[15px] text-muted-foreground">{t('lang.subtitle')}</p>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: EASE }}
          className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-4 shadow-premium sm:p-5"
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl gradient-accent">
            <UserRound className="size-5 text-white" />
          </div>
          <div className="min-w-0 flex-1 text-sm">
            <p className="text-muted-foreground">{t('lang.youAre')}</p>
            <p className="mt-0.5 break-words font-semibold tracking-tight">
              {user?.fullName}
              <span className="font-normal text-muted-foreground"> ({user?.login})</span>
            </p>
            <p className="mt-1 text-muted-foreground">
              {t('lang.notYou')}{' '}
              <button
                type="button"
                onClick={handleSignOut}
                disabled={signingOut}
                className="inline-flex items-center gap-1 font-medium text-primary underline-offset-4 hover:underline disabled:opacity-50"
              >
                <LogOut className="size-3.5" />
                {t('lang.signOut')}
              </button>
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
          className="rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:p-6"
        >
          <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <ListChecks className="size-5 text-muted-foreground" />
            {t('lang.rulesTitle')}
          </h2>
          <ol className="mt-4 flex flex-col gap-2.5">
            {rules.map((rule, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-semibold tabular-nums">
                  {i + 1}
                </span>
                <span className="pt-0.5">{rule}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 border-t border-border/60 pt-5">{action}</div>
        </motion.section>

        <Dialog open={discardOpen} onOpenChange={setDiscardOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t('lang.discardTitle')}</DialogTitle>
              <DialogDescription>{t('lang.discardBody')}</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDiscardOpen(false)}>
                {t('common.cancel')}
              </Button>
              <Button
                variant="destructive"
                onClick={() => {
                  setDiscardOpen(false)
                  handleStart()
                }}
              >
                {t('lang.discardConfirm')}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  if (run.phase === 'done') {
    return (
      <SaveView
        status={saveStatus}
        onRetry={handleRetrySave}
      />
    )
  }

  if (run.phase === 'writing') {
    const prompt = run.writingPromptId ? getWritingPrompt(run.writingPromptId) : undefined
    if (!prompt) {
      return (
        <CenteredCard icon={PenLine} title={t('lang.writingTitle')}>
          <Button size="lg" onClick={() => handleFinishWriting(true)} className="h-11 w-full gap-2 sm:w-auto">
            {t('common.continue')}
            <ArrowRight className="size-4" />
          </Button>
        </CenteredCard>
      )
    }

    if (run.writingStartedAt === null) {
      return (
        <CenteredCard icon={PenLine} title={t('lang.writingTitle')} body={tf('lang.writingIntro', { min: Math.round(WRITING_SECONDS / 60) })}>
          <Button size="lg" onClick={handleStartWriting} className="h-11 w-full gap-2 px-6 sm:w-auto">
            <Play className="size-4" />
            {t('common.start')}
          </Button>
        </CenteredCard>
      )
    }

    const words = countWords(text)
    const tooLong = words > prompt.maxWords
    const enough = words >= prompt.minWords
    const remaining = (run.writingDeadlineAt ?? now) - now

    return (
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl gradient-accent shadow-premium">
              <PenLine className="size-4 text-white" />
            </span>
            <span className="truncate font-semibold tracking-tight">{t('lang.writingTitle')}</span>
          </div>
          <Countdown ms={remaining} label={t('lang.timeLeft')} />
        </div>
        <Progress value={Math.min(100, Math.max(0, (1 - remaining / (WRITING_SECONDS * 1000)) * 100))} className="h-1.5" />

        {run.focusLost > 0 && <FocusNotice />}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card p-4 shadow-premium sm:p-6"
        >
          <p className="text-sm leading-relaxed">{tx(prompt.instruction)}</p>

          <div>
            <p className="mb-1.5 text-xs font-medium text-muted-foreground">{t('lang.guestMessage')}</p>
            <div
              translate="no"
              lang={testLang}
              className="notranslate whitespace-pre-line rounded-xl border border-border/60 bg-muted/50 p-4 text-[15px] leading-relaxed"
            >
              {prompt.situation}
            </div>
          </div>

          <div>
            <label htmlFor="lang-writing" className="mb-1.5 block text-xs font-medium text-muted-foreground">
              {t('lang.yourReply')}
            </label>
            <Textarea
              id="lang-writing"
              translate="no"
              lang={testLang}
              value={text}
              onChange={(e) => {
                textRef.current = e.target.value
                setText(e.target.value)
              }}
              onPaste={handleBlockedInput}
              onDrop={handleBlockedInput}
              placeholder={t('lang.replyPlaceholder')}
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              maxLength={6000}
              disabled={saveStatus === 'saving'}
              className="notranslate min-h-52 text-base leading-relaxed"
            />
            <div className="mt-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs">
              <span
                className={cn(
                  'font-medium tabular-nums',
                  tooLong
                    ? 'text-amber-700 dark:text-amber-300'
                    : enough
                      ? 'text-emerald-700 dark:text-emerald-300'
                      : 'text-muted-foreground',
                )}
              >
                {tf('lang.words', { n: words })}
                <span className="font-normal text-muted-foreground">
                  {' · '}
                  {tf('lang.wordsRange', { min: prompt.minWords, max: prompt.maxWords })}
                </span>
              </span>
              {pasteNotice && (
                <span className="flex items-center gap-1 text-amber-700 dark:text-amber-300">
                  <ClipboardPaste className="size-3.5" />
                  {t('lang.pasteBlocked')}
                </span>
              )}
            </div>
            {tooLong && <p className="mt-1 text-xs text-amber-700 dark:text-amber-300">{t('lang.tooLong')}</p>}
          </div>

          <div className="flex flex-col gap-2 border-t border-border/60 pt-4 sm:flex-row-reverse sm:items-center sm:justify-between">
            <Button
              size="lg"
              onClick={() => handleFinishWriting(false)}
              disabled={!enough || saveStatus === 'saving'}
              className="h-11 w-full gap-2 px-5 sm:w-auto"
            >
              <Send className="size-4" />
              {t('lang.submitWriting')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => setSkipOpen(true)}
              disabled={saveStatus === 'saving'}
              className="h-10 w-full gap-2 text-muted-foreground sm:w-auto"
            >
              <SkipForward className="size-4" />
              {t('lang.skipWriting')}
            </Button>
          </div>
          {!enough && (
            <p className="-mt-2 text-center text-xs text-muted-foreground sm:text-right">
              {tf('lang.minWordsHint', { min: prompt.minWords })}
            </p>
          )}
        </motion.div>

        <Dialog open={skipOpen} onOpenChange={setSkipOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t('lang.skipTitle')}</DialogTitle>
              <DialogDescription>{t('lang.skipBody')}</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setSkipOpen(false)}>
                {t('common.cancel')}
              </Button>
              <Button variant="destructive" onClick={() => handleFinishWriting(true)}>
                {t('lang.skipConfirm')}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  // phase === 'level'
  if (run.interstitialFrom) {
    return (
      <CenteredCard
        icon={CircleCheck}
        title={tf('lang.levelDone', { level: run.interstitialFrom })}
        body={tf('lang.nextLevelIntro', {
          level: run.currentLevel,
          n: QUESTIONS_PER_LEVEL,
          min: Math.round(LEVEL_SECONDS / 60),
        })}
      >
        <Button size="lg" onClick={handleNextLevel} className="h-11 w-full gap-2 px-6 sm:w-auto">
          {t('common.continue')}
          <ArrowRight className="size-4" />
        </Button>
      </CenteredCard>
    )
  }

  const questionId = run.levelQuestionIds[run.position] ?? ''
  const question = getLanguageQuestion(questionId)
  const order = question ? (run.optionOrders[question.id] ?? question.options.map((_, i) => i)) : []
  const total = run.levelQuestionIds.length || QUESTIONS_PER_LEVEL
  const remaining = run.levelDeadlineAt - now
  const isLast = run.position >= total - 1
  const selected = selection && selection.qid === questionId ? selection.idx : null
  const canNext = question ? selected !== null : true

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="rounded-xl px-3 py-1.5 text-sm font-semibold text-white shadow-premium gradient-accent">
            {run.currentLevel}
          </span>
          <span className="truncate text-sm text-muted-foreground">
            {tf('lang.questionOf', { i: Math.min(run.position + 1, total), n: total })}
          </span>
        </div>
        <Countdown ms={remaining} label={t('lang.timeLeft')} />
      </div>
      <Progress value={(run.position / total) * 100} className="h-1.5" />

      {run.focusLost > 0 && <FocusNotice />}

      <AnimatePresence mode="wait">
        <motion.div
          key={`${run.currentLevel}:${questionId}`}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="rounded-2xl border border-border/60 bg-card p-4 shadow-premium sm:p-6"
        >
          {question && (
            <>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {t(`lang.skill.${question.skill}` as TranslationKey)}
              </p>
              <div translate="no" lang={testLang} className="notranslate mt-3 flex flex-col gap-4">
                {question.context && (
                  <div className="whitespace-pre-line rounded-xl border border-border/60 bg-muted/50 p-4 text-[15px] leading-relaxed">
                    {question.context}
                  </div>
                )}
                <h2 className="whitespace-pre-line text-base font-semibold leading-relaxed tracking-tight sm:text-lg">
                  {question.prompt}
                </h2>
                <div role="radiogroup" className="flex flex-col gap-2.5">
                  {order.map((originalIndex, i) => {
                    const isSelected = selected === originalIndex
                    return (
                      <button
                        key={originalIndex}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => setSelection({ qid: questionId, idx: originalIndex })}
                        className={cn(
                          'flex min-h-12 items-center gap-3 rounded-xl border px-3.5 py-3 text-left text-[15px] leading-snug transition-colors',
                          isSelected
                            ? 'border-primary bg-primary/10 ring-1 ring-primary/40'
                            : 'border-border/60 hover:border-primary/40 hover:bg-muted/50',
                        )}
                      >
                        <span
                          className={cn(
                            'flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-semibold',
                            isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground',
                          )}
                        >
                          {OPTION_LETTERS[i] ?? i + 1}
                        </span>
                        <span className="min-w-0 break-words">{question.options[originalIndex]}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </>
          )}

          <Button size="lg" onClick={() => handleNext(questionId)} disabled={!canNext} className="mt-5 h-11 w-full gap-2">
            {isLast ? t('lang.finishLevel') : t('lang.next')}
            <ArrowRight className="size-4" />
          </Button>
          {!canNext && <p className="mt-2 text-center text-xs text-muted-foreground">{t('lang.pickHint')}</p>}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ─── Small views ─────────────────────────────────────────────────────────────

function cefrKey(level: string): TranslationKey {
  const known = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1']
  return `tests.cefr.${known.includes(level) ? level : 'A0'}` as TranslationKey
}

function CenteredSpinner() {
  return (
    <div className="flex justify-center py-24">
      <LoaderCircle className="size-6 animate-spin text-muted-foreground" />
    </div>
  )
}

function Countdown({ ms, label }: { ms: number; label: string }) {
  const warn = ms < 60_000
  return (
    <div
      role="timer"
      aria-label={label}
      className={cn(
        'flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-semibold tabular-nums transition-colors',
        warn ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300' : 'bg-muted text-foreground',
      )}
    >
      <Timer className="size-4" />
      {mmss(ms)}
    </div>
  )
}

function FocusNotice() {
  const { t } = useLanguage()
  return (
    <p className="flex items-center gap-2 rounded-xl bg-amber-500/10 px-3 py-2 text-xs text-amber-800 dark:text-amber-200">
      <EyeOff className="size-3.5 shrink-0" />
      {t('lang.focusNotice')}
    </p>
  )
}

function LevelBadge({ level, size = 'lg' }: { level: string; size?: 'lg' | 'md' | 'xl' }) {
  const { t } = useLanguage()
  const below = level === 'A0'
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-2xl font-semibold tracking-tight',
        size === 'xl' && 'h-24 min-w-24 px-5',
        size === 'lg' && 'h-16 min-w-16 px-4',
        size === 'md' && 'h-12 min-w-12 px-3',
        size === 'xl' && (below ? 'text-xl' : 'text-5xl'),
        size === 'lg' && (below ? 'text-base' : 'text-3xl'),
        size === 'md' && (below ? 'text-xs' : 'text-lg'),
        below ? 'bg-muted text-muted-foreground' : 'gradient-accent text-white shadow-premium',
      )}
    >
      {below ? t('tests.belowA1') : level}
    </span>
  )
}

function CenteredCard({
  icon: Icon,
  title,
  body,
  children,
}: {
  icon: typeof CircleCheck
  title: string
  body?: string
  children?: ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="mx-auto flex w-full max-w-lg flex-col items-center gap-4 rounded-2xl border border-border/60 bg-card p-6 text-center shadow-premium sm:p-8"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="flex size-14 items-center justify-center rounded-2xl gradient-accent shadow-premium"
      >
        <Icon className="size-7 text-white" />
      </motion.div>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {body && <p className="text-[15px] leading-relaxed text-muted-foreground">{body}</p>}
      {children && <div className="mt-2 flex w-full justify-center">{children}</div>}
    </motion.div>
  )
}

function SaveView({ status, onRetry }: { status: SaveStatus; onRetry: () => void }) {
  const { t } = useLanguage()
  if (status === 'error' || status === 'notAllowed') {
    const notAllowed = status === 'notAllowed'
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="mx-auto flex w-full max-w-lg flex-col items-center gap-4 rounded-2xl border border-border/60 bg-card p-6 text-center shadow-premium sm:p-8"
      >
        <div
          className={cn(
            'flex size-14 items-center justify-center rounded-2xl',
            notAllowed
              ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300'
              : 'bg-rose-500/10 text-rose-600 dark:text-rose-300',
          )}
        >
          {notAllowed ? <Lock className="size-7" /> : <TriangleAlert className="size-7" />}
        </div>
        <h2 className="text-xl font-semibold tracking-tight">
          {notAllowed ? t('lang.notAllowedTitle') : t('lang.saveErrorTitle')}
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {notAllowed ? t('lang.notAllowedBody') : t('lang.saveErrorBody')}
        </p>
        <div className="mt-2 flex w-full flex-col gap-2 sm:flex-row sm:justify-center">
          <Button size="lg" onClick={onRetry} className="h-11 gap-2 px-5">
            <RotateCcw className="size-4" />
            {t('common.retry')}
          </Button>
          {notAllowed && (
            <Button asChild size="lg" variant="outline" className="h-11 gap-2 px-5">
              <Link to="/tests">
                <ArrowLeft className="size-4" />
                {t('lang.backToTests')}
              </Link>
            </Button>
          )}
        </div>
      </motion.div>
    )
  }
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-4 py-20 text-center">
      <LoaderCircle className="size-8 animate-spin text-muted-foreground" />
      <p className="text-sm text-muted-foreground">{t('lang.savingResult')}</p>
    </div>
  )
}

function ResultView({ result, title }: { result: FinishedResult; title: string }) {
  const { t } = useLanguage()
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-5">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="relative flex flex-col items-center gap-3 overflow-hidden rounded-3xl border border-border/60 bg-card p-6 text-center shadow-premium sm:p-8"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 size-64 -translate-x-1/2 rounded-full opacity-[0.12] gradient-accent blur-3xl"
        />
        <p className="relative flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
          <Award className="size-4" />
          {title} · {t('lang.resultTitle')}
        </p>
        <p className="relative text-xs font-medium uppercase tracking-wide text-muted-foreground">{t('lang.yourLevel')}</p>
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        >
          <LevelBadge level={result.reached} size="xl" />
        </motion.div>
        <p className="relative max-w-sm text-[15px] leading-relaxed">{t(cefrKey(result.reached))}</p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08, ease: EASE }}
        className="rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:p-6"
      >
        <h2 className="text-base font-semibold tracking-tight">{t('lang.perLevel')}</h2>
        <ul className="mt-4 flex flex-col gap-3.5">
          {result.levelResults.map((r) => (
            <li key={r.level} className="flex flex-col gap-1.5">
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                <span className="flex items-center gap-2">
                  <span className="inline-flex h-6 min-w-9 items-center justify-center rounded-lg bg-muted px-1.5 text-xs font-semibold">
                    {r.level}
                  </span>
                  <span
                    className={cn(
                      'text-xs font-medium',
                      r.passed ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300',
                    )}
                  >
                    {r.passed ? t('lang.levelPassed') : t('lang.levelFailed')}
                  </span>
                  {r.timedOut && (
                    <span className="inline-flex items-center gap-1 text-xs text-amber-700 dark:text-amber-300">
                      <Hourglass className="size-3" />
                      {t('lang.timedOut')}
                    </span>
                  )}
                </span>
                <span className="font-semibold tabular-nums">
                  {r.score}/{r.total}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.round((r.score / Math.max(1, r.total)) * 100)}%` }}
                  transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                  className={cn('h-full rounded-full', r.passed ? 'bg-emerald-500' : 'bg-rose-500')}
                />
              </div>
            </li>
          ))}
        </ul>
      </motion.section>

      {result.writingOffered && (
        <p
          className={cn(
            'flex items-start gap-2.5 rounded-2xl p-4 text-sm leading-relaxed',
            result.writingSubmitted
              ? 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-200'
              : 'bg-muted text-muted-foreground',
          )}
        >
          {result.writingSubmitted ? (
            <Send className="mt-0.5 size-4 shrink-0" />
          ) : (
            <SkipForward className="mt-0.5 size-4 shrink-0" />
          )}
          {result.writingSubmitted ? t('lang.writingSent') : t('lang.writingSkipped')}
        </p>
      )}

      <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
        <EyeOff className="mt-0.5 size-3.5 shrink-0" />
        {t('lang.answersHidden')}
      </p>

      <Button asChild size="lg" className="h-11 w-full gap-2">
        <Link to="/tests">
          <ArrowLeft className="size-4" />
          {t('lang.backToTests')}
        </Link>
      </Button>
    </div>
  )
}
