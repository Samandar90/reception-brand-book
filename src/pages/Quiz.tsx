import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AppWindow,
  ArrowRight,
  Award,
  ChevronRight,
  CircleAlert,
  EyeOff,
  Home,
  ListChecks,
  LogOut,
  RotateCcw,
  ShieldCheck,
  Target,
  Trophy,
  type LucideIcon,
} from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import { useAuth } from '@/contexts/AuthContext'
import { useProgress } from '@/contexts/ProgressContext'
import { quizQuestions } from '@/data/quizQuestions'
import { modules } from '@/data/modules'
import { shuffle } from '@/lib/shuffle'
import { clientSignals } from '@/lib/api'
import { CERTIFICATE_MIN_KNOWLEDGE_PERCENT, TOTAL_MODULES } from '@/lib/constants'
import type { Module, NewAttemptInput, QuizQuestion } from '@/types'

const EASE = [0.16, 1, 0.3, 1] as const

interface TestItem {
  question: QuizQuestion
  /** Display order: indexes into question.options (scoring uses the original index). */
  order: number[]
}

interface AnswerRecord {
  id: string
  moduleSlug: string | null
  /** Original option index. */
  selected: number
  correct: boolean
  ms: number
}

interface TestResult {
  score: number
  total: number
  percent: number
  answers: AnswerRecord[]
}

interface ModuleScore {
  module: Module
  correct: number
  total: number
}

type Phase = 'intro' | 'running' | 'submitting' | 'failed' | 'result'

function buildItems(): TestItem[] {
  return shuffle(quizQuestions).map((question) => ({ question, order: shuffle(question.options.map((_, i) => i)) }))
}

function toneOf(ratio: number): { bar: string; text: string } {
  if (ratio >= 1) return { bar: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400' }
  if (ratio >= 0.5) return { bar: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400' }
  return { bar: 'bg-rose-500', text: 'text-rose-600 dark:text-rose-400' }
}

export default function Quiz() {
  const { t, tf, tx } = useLanguage()
  const { user, signOut } = useAuth()
  const { recordAttempt, logEvent, attemptsOf } = useProgress()

  const [phase, setPhase] = useState<Phase>('intro')
  const [items, setItems] = useState<TestItem[]>([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [result, setResult] = useState<TestResult | null>(null)
  const [signingOut, setSigningOut] = useState(false)

  // Synchronous mirrors of phase/items/index: clicks on cards that are still animating out hold stale
  // closures, so every handler re-checks against these refs before acting.
  const phaseRef = useRef<Phase>('intro')
  const itemsRef = useRef<TestItem[]>([])
  const indexRef = useRef(0)
  const answersRef = useRef<AnswerRecord[]>([])
  const startedAtRef = useRef('')
  const shownAtRef = useRef(0)
  const focusLostRef = useRef(0)
  const pendingRef = useRef<NewAttemptInput | null>(null)
  const busyRef = useRef(false)
  const topRef = useRef<HTMLDivElement>(null)

  const assessmentAttempts = attemptsOf('knowledge').filter((a) => a.details.mode === 'assessment')
  const bestSoFar = assessmentAttempts.length ? Math.max(...assessmentAttempts.map((a) => a.percent)) : null

  // Per-question timer + keep the question in view on phones.
  useEffect(() => {
    if (phase === 'running') shownAtRef.current = Date.now()
    const el = topRef.current
    if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [phase, index])

  // Focus losses while answering.
  useEffect(() => {
    if (phase !== 'running') return
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') focusLostRef.current += 1
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [phase])

  // Warn before closing the tab while answers are not saved yet.
  useEffect(() => {
    if (phase !== 'running' && phase !== 'submitting' && phase !== 'failed') return
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      // Older Chromium and some in-app WebViews only show the prompt when returnValue is set.
      e.returnValue = ''
    }
    window.addEventListener('beforeunload', onBeforeUnload)
    return () => window.removeEventListener('beforeunload', onBeforeUnload)
  }, [phase])

  // Confirm before an in-app link (sidebar, header) throws away unsaved answers.
  const leaveMessage = t('learn.quiz.leaveConfirm')
  useEffect(() => {
    if (phase !== 'running' && phase !== 'failed') return
    const onClickCapture = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = e.target instanceof Element ? e.target.closest('a[href]') : null
      if (!link || link.getAttribute('target') === '_blank') return
      if (window.confirm(leaveMessage)) return
      e.preventDefault()
      e.stopPropagation()
    }
    document.addEventListener('click', onClickCapture, true)
    return () => document.removeEventListener('click', onClickCapture, true)
  }, [phase, leaveMessage])

  const breakdown = useMemo<ModuleScore[]>(() => {
    if (!result) return []
    const byModule = new Map<string, { correct: number; total: number }>()
    for (const a of result.answers) {
      if (!a.moduleSlug) continue
      const entry = byModule.get(a.moduleSlug) ?? { correct: 0, total: 0 }
      entry.total += 1
      if (a.correct) entry.correct += 1
      byModule.set(a.moduleSlug, entry)
    }
    return modules
      .filter((m) => byModule.has(m.slug))
      .map((m) => ({ module: m, ...(byModule.get(m.slug) as { correct: number; total: number }) }))
      .sort((a, b) => a.correct / a.total - b.correct / b.total || a.module.order - b.module.order)
  }, [result])

  function go(next: Phase) {
    phaseRef.current = next
    setPhase(next)
  }

  function start() {
    const current = phaseRef.current
    if (busyRef.current || current === 'running' || current === 'submitting' || current === 'failed') return
    const nextItems = buildItems()
    itemsRef.current = nextItems
    indexRef.current = 0
    setItems(nextItems)
    setIndex(0)
    setSelected(null)
    setResult(null)
    answersRef.current = []
    focusLostRef.current = 0
    pendingRef.current = null
    startedAtRef.current = new Date().toISOString()
    go('running')
    logEvent('test_start', { kind: 'knowledge' })
  }

  async function submit(payload: NewAttemptInput, answers: AnswerRecord[]) {
    if (busyRef.current) return
    busyRef.current = true
    go('submitting')
    try {
      const attempt = await recordAttempt(payload)
      if (!attempt) throw new Error('not_signed_in')
      pendingRef.current = null
      const fallbackPercent = payload.total ? Math.round((payload.score / payload.total) * 100) : 0
      setResult({
        score: payload.score,
        total: payload.total,
        percent: Number.isFinite(attempt.percent) ? attempt.percent : fallbackPercent,
        answers,
      })
      go('result')
    } catch {
      toast.error(t('common.saveFailed'))
      go('failed')
    } finally {
      busyRef.current = false
    }
  }

  /** True only for the question currently on screen (not a card that is animating out). */
  function isCurrent(questionId: string): boolean {
    return phaseRef.current === 'running' && itemsRef.current[indexRef.current]?.question.id === questionId
  }

  function pick(questionId: string, original: number) {
    if (isCurrent(questionId)) setSelected(original)
  }

  function confirmAnswer(questionId: string) {
    if (selected === null || !isCurrent(questionId)) return
    const i = indexRef.current
    const list = itemsRef.current
    const item = list[i]
    if (!item) return
    const record: AnswerRecord = {
      id: item.question.id,
      moduleSlug: item.question.moduleSlug ?? null,
      selected,
      correct: selected === item.question.correctIndex,
      ms: Math.max(0, Date.now() - shownAtRef.current),
    }
    answersRef.current = [...answersRef.current.slice(0, i), record]

    if (i < list.length - 1) {
      indexRef.current = i + 1
      setIndex(i + 1)
      setSelected(null)
      return
    }

    const answers = answersRef.current
    const score = answers.filter((a) => a.correct).length
    const payload: NewAttemptInput = {
      kind: 'knowledge',
      score,
      total: list.length,
      startedAt: startedAtRef.current,
      details: {
        mode: 'assessment',
        answers,
        focusLost: focusLostRef.current,
        ...clientSignals(),
      },
    }
    pendingRef.current = payload
    void submit(payload, answers)
  }

  function retrySave() {
    if (phaseRef.current !== 'failed') return
    const payload = pendingRef.current
    if (payload) void submit(payload, answersRef.current)
  }

  async function handleSignOut() {
    if (signingOut) return
    setSigningOut(true)
    try {
      await signOut()
    } catch {
      toast.error(t('common.error'))
      setSigningOut(false)
    }
  }

  // ─── Views ─────────────────────────────────────────────────────────────────

  let content: ReactNode = null

  if (phase === 'intro') {
    const rules: { icon: LucideIcon; text: string }[] = [
      { icon: ListChecks, text: tf('learn.quiz.ruleQuestions', { count: quizQuestions.length, modules: TOTAL_MODULES }) },
      { icon: EyeOff, text: t('learn.quiz.ruleNoHints') },
      { icon: ShieldCheck, text: t('learn.quiz.ruleRecorded') },
      { icon: AppWindow, text: t('learn.quiz.ruleFocus') },
      { icon: Award, text: tf('learn.quiz.ruleCertificate', { min: CERTIFICATE_MIN_KNOWLEDGE_PERCENT }) },
    ]
    const initials =
      (user?.fullName ?? '')
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((w) => w[0] ?? '')
        .join('')
        .toUpperCase() || '?'

    content = (
      <motion.div
        key="intro"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="flex flex-col gap-5"
      >
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">{t('quiz.title')}</h1>
          <p className="mt-2 text-[15px] text-muted-foreground">{t('learn.quiz.subtitle')}</p>
        </header>

        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border/60 bg-card p-4 shadow-premium">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl gradient-accent text-sm font-semibold text-white">
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground">{t('learn.quiz.youAre')}</p>
            <p className="truncate font-semibold tracking-tight">
              {user?.fullName ?? '—'}{' '}
              <span className="font-normal text-muted-foreground">({user?.login ?? '—'})</span>
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{t('learn.quiz.notYou')}</span>
            <Button variant="outline" size="sm" onClick={() => void handleSignOut()} disabled={signingOut} className="gap-1.5">
              <LogOut className="size-3.5" />
              {t('learn.quiz.signOut')}
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:p-6">
          <h2 className="text-lg font-semibold tracking-tight">{t('learn.quiz.rulesTitle')}</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {rules.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm leading-relaxed">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <Icon className="size-4" />
                </span>
                <span className="pt-1.5">{text}</span>
              </li>
            ))}
          </ul>
          {bestSoFar !== null && (
            <p className="mt-5 flex items-center gap-2 rounded-xl bg-muted/60 px-3 py-2 text-sm text-muted-foreground">
              <Trophy className="size-4 shrink-0" />
              {tf('learn.quiz.bestSoFar', { percent: Math.round(bestSoFar), count: assessmentAttempts.length })}
            </p>
          )}
          <Button size="lg" onClick={start} className="mt-6 w-full gap-2 sm:w-auto">
            {t('learn.quiz.start')}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </motion.div>
    )
  } else if (phase === 'running' && items[index]) {
    const item = items[index]
    const total = items.length
    const isLast = index === total - 1
    content = (
      <motion.div
        key="running"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: EASE }}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t('quiz.title')}</p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{tf('learn.quiz.counter', { n: index + 1, total })}</span>
            <span>{Math.round((index / total) * 100)}%</span>
          </div>
          <Progress value={(index / total) * 100} className="h-1.5" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={item.question.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:p-6"
          >
            <h2 className="text-lg font-semibold leading-relaxed tracking-tight">{tx(item.question.question)}</h2>
            <div role="radiogroup" className="mt-5 flex flex-col gap-2.5">
              {item.order.map((original, displayIndex) => {
                const isSelected = selected === original
                return (
                  <button
                    key={original}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => pick(item.question.id, original)}
                    className={cn(
                      'flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors',
                      isSelected
                        ? 'border-primary bg-primary/5 ring-1 ring-primary/30'
                        : 'border-border/60 hover:border-primary/40 hover:bg-muted/50',
                    )}
                  >
                    <span
                      className={cn(
                        'mt-px flex size-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-medium transition-colors',
                        isSelected ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground',
                      )}
                    >
                      {String.fromCharCode(65 + displayIndex)}
                    </span>
                    <span className="min-w-0">{tx(item.question.options[original])}</span>
                  </button>
                )
              })}
            </div>

            <div className="mt-5 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-center text-xs text-muted-foreground sm:text-left">
                {selected === null ? t('learn.quiz.chooseHint') : ' '}
              </p>
              <Button onClick={() => confirmAnswer(item.question.id)} disabled={selected === null} size="lg" className="gap-2">
                {isLast ? t('quiz.finish') : t('learn.quiz.next')}
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  } else if (phase === 'submitting') {
    content = (
      <motion.div
        key="submitting"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex min-h-[40svh] flex-col items-center justify-center gap-4 text-muted-foreground"
      >
        <div className="size-8 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
        <p className="text-sm">{t('common.saving')}</p>
      </motion.div>
    )
  } else if (phase === 'failed') {
    content = (
      <motion.div
        key="failed"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="mx-auto flex w-full max-w-md flex-col items-center gap-4 rounded-2xl border border-rose-500/25 bg-rose-500/[0.06] p-6 text-center dark:bg-rose-500/[0.08]"
      >
        <div className="flex size-12 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-600 dark:text-rose-400">
          <CircleAlert className="size-6" />
        </div>
        <div>
          <p className="text-lg font-semibold tracking-tight">{t('learn.quiz.saveFailedTitle')}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t('learn.quiz.saveFailedBody')}</p>
        </div>
        <Button onClick={retrySave} size="lg" className="w-full gap-2 sm:w-auto">
          <RotateCcw className="size-4" />
          {t('common.retry')}
        </Button>
      </motion.div>
    )
  } else if (phase === 'result' && result) {
    const passed = result.percent >= CERTIFICATE_MIN_KNOWLEDGE_PERCENT
    const ResultIcon = passed ? Trophy : Target
    content = (
      <motion.div
        key="result"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="flex flex-col gap-6"
      >
        <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-6 text-center shadow-premium sm:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 size-64 -translate-x-1/2 rounded-full opacity-[0.12] gradient-accent blur-3xl"
          />
          <div className="relative flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: EASE }}
              className={cn(
                'flex size-16 items-center justify-center rounded-2xl shadow-premium',
                passed ? 'gradient-accent' : 'bg-amber-500/15',
              )}
            >
              <ResultIcon className={cn('size-8', passed ? 'text-white' : 'text-amber-600 dark:text-amber-400')} />
            </motion.div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{t('quiz.yourScore')}</p>
              <p className="mt-1 text-4xl font-semibold tracking-tight">{Math.round(result.percent)}%</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {result.score}/{result.total}
              </p>
            </div>
            <Badge
              className={cn(
                'h-auto rounded-full px-3 py-1 text-xs',
                passed
                  ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                  : 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
              )}
            >
              {passed ? t('learn.quiz.passed') : t('learn.quiz.notPassed')}
            </Badge>
            <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
              {passed
                ? t('learn.quiz.passedBody')
                : tf('learn.quiz.failedBody', { min: CERTIFICATE_MIN_KNOWLEDGE_PERCENT })}
            </p>
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <Button onClick={start} size="lg" className="gap-2">
                <RotateCcw className="size-4" />
                {t('quiz.retake')}
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/">
                  <Home className="size-4" />
                  {t('learn.quiz.toDashboard')}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {breakdown.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold tracking-tight">{t('learn.quiz.byModule')}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t('learn.quiz.byModuleHint')}</p>
            <div className="mt-4 flex flex-col gap-2">
              {breakdown.map(({ module, correct, total }, i) => {
                const ratio = total ? correct / total : 0
                const tone = toneOf(ratio)
                return (
                  <motion.div
                    key={module.slug}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.4), ease: EASE }}
                  >
                    <Link
                      to={`/modules/${module.slug}`}
                      className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card px-4 py-3 shadow-premium transition-colors hover:border-primary/30"
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-[11px] font-medium text-muted-foreground">
                        {module.order}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{tx(module.title)}</p>
                        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                          <div className={cn('h-full rounded-full', tone.bar)} style={{ width: `${Math.round(ratio * 100)}%` }} />
                        </div>
                      </div>
                      <span className={cn('shrink-0 text-sm font-semibold tabular-nums', tone.text)}>
                        {correct}/{total}
                      </span>
                      <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </section>
        )}
      </motion.div>
    )
  }

  return (
    <div ref={topRef} className="mx-auto flex max-w-2xl scroll-mt-24 flex-col">
      <AnimatePresence mode="wait">{content}</AnimatePresence>
    </div>
  )
}
