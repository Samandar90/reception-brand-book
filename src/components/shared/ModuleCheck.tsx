import { useMemo, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  CircleCheck,
  CircleX,
  ClipboardCheck,
  GraduationCap,
  PartyPopper,
  RotateCcw,
  TriangleAlert,
} from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import { useProgress } from '@/contexts/ProgressContext'
import { quizQuestions } from '@/data/quizQuestions'
import { getAdjacentModules } from '@/data/modules'
import { shuffle } from '@/lib/shuffle'
import type { Language, Module, QuizQuestion } from '@/types'

const EASE = [0.16, 1, 0.3, 1] as const

const DATE_LOCALE: Record<Language, string> = { ru: 'ru-RU', uz: 'uz-Latn-UZ', en: 'en-GB' }

interface CheckItem {
  question: QuizQuestion
  /** Display order: indexes into question.options. */
  order: number[]
}

type Phase = 'idle' | 'running' | 'result'

function buildItems(questions: QuizQuestion[]): CheckItem[] {
  return shuffle(questions).map((question) => ({ question, order: shuffle(question.options.map((_, i) => i)) }))
}

function formatDate(iso: string, lang: Language): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString(DATE_LOCALE[lang], { day: '2-digit', month: '2-digit', year: 'numeric' })
}

/** "Check yourself" mini-quiz shown at the end of a lesson; passing it marks the module complete. */
export function ModuleCheck({ module }: { module: Module }) {
  const { t, tf, tx, lang } = useLanguage()
  const { loaded, isModuleComplete, moduleProgress, markModuleComplete, markModuleIncomplete, reload } = useProgress()

  const questions = useMemo(() => quizQuestions.filter((q) => q.moduleSlug === module.slug), [module.slug])
  const total = questions.length
  const passMark = Math.ceil((total * 2) / 3)
  const complete = isModuleComplete(module.slug)
  const progressRow = moduleProgress.find((m) => m.moduleSlug === module.slug) ?? null
  const { next } = getAdjacentModules(module.slug)

  const [phase, setPhase] = useState<Phase>('idle')
  const [items, setItems] = useState<CheckItem[]>([])
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [saving, setSaving] = useState(false)
  const [saveFailed, setSaveFailed] = useState(false)

  const item = items[index] as CheckItem | undefined
  const isLast = index === items.length - 1
  const passed = score >= passMark

  function start() {
    setItems(buildItems(questions))
    setIndex(0)
    setPicked(null)
    setScore(0)
    setSaveFailed(false)
    setPhase('running')
  }

  function pick(original: number) {
    if (!item || picked !== null) return
    setPicked(original)
    if (original === item.question.correctIndex) setScore((s) => s + 1)
  }

  async function saveCompletion(finalScore: number) {
    if (saving) return
    setSaving(true)
    setSaveFailed(false)
    try {
      await markModuleComplete(module.slug, { score: finalScore, total })
      toast.success(tf('learn.check.passedToast', { title: tx(module.title) }))
    } catch {
      setSaveFailed(true)
      toast.error(t('common.saveFailed'))
    } finally {
      setSaving(false)
    }
  }

  function goNext() {
    if (picked === null) return
    if (!isLast) {
      setIndex(index + 1)
      setPicked(null)
      return
    }
    setPhase('result')
    if (score >= passMark) void saveCompletion(score)
  }

  async function markPlain() {
    if (saving) return
    setSaving(true)
    try {
      await markModuleComplete(module.slug)
      toast.success(tf('learn.check.passedToast', { title: tx(module.title) }))
    } catch {
      toast.error(t('common.saveFailed'))
    } finally {
      setSaving(false)
    }
  }

  async function unmark() {
    if (saving) return
    setSaving(true)
    try {
      await markModuleIncomplete(module.slug)
      setPhase('idle')
    } catch {
      toast.error(t('common.saveFailed'))
      reload().catch(() => undefined)
    } finally {
      setSaving(false)
    }
  }

  function rereadLesson() {
    const firstId = module.sections[0]?.id
    const target = firstId ? document.getElementById(firstId) : null
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const completedText = (() => {
    if (!progressRow) return t('common.completed')
    const date = formatDate(progressRow.completedAt, lang)
    if (progressRow.checkScore !== null && progressRow.checkTotal !== null) {
      return tf('learn.check.completedWithScore', { score: progressRow.checkScore, total: progressRow.checkTotal, date })
    }
    return tf('learn.check.completedOn', { date })
  })()

  const completedBanner = (
    <div className="flex items-start gap-2.5 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-700 dark:text-emerald-300">
      <CircleCheck className="mt-0.5 size-4 shrink-0" />
      <span className="min-w-0">{completedText}</span>
    </div>
  )

  const unmarkLink = (
    <button
      type="button"
      onClick={() => void unmark()}
      disabled={saving}
      className="self-start text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline disabled:pointer-events-none disabled:opacity-50"
    >
      {t('learn.check.markIncomplete')}
    </button>
  )

  let body: ReactNode

  if (!loaded && phase === 'idle') {
    // Wait for progress so a completed module does not flash the "Start the check" state first.
    body = (
      <div aria-busy="true" className="flex flex-col gap-3">
        <div className="h-11 w-full animate-pulse rounded-xl bg-muted sm:w-56" />
        <div className="h-3 w-32 animate-pulse rounded bg-muted" />
      </div>
    )
  } else if (total === 0) {
    body = complete ? (
      <div className="flex flex-col gap-3">
        {completedBanner}
        {unmarkLink}
      </div>
    ) : (
      <Button onClick={() => void markPlain()} disabled={saving} size="lg" className="w-full gap-2 sm:w-auto">
        <CircleCheck className="size-4" />
        {saving ? t('common.saving') : t('common.markComplete')}
      </Button>
    )
  } else if (phase === 'running' && item) {
    const answered = picked !== null
    const pickedCorrect = answered && picked === item.question.correctIndex
    body = (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3 text-xs font-medium text-muted-foreground">
          <span>{tf('learn.quiz.counter', { n: index + 1, total: items.length })}</span>
          <div className="flex w-24 gap-1">
            {items.map((it, i) => (
              <span
                key={it.question.id}
                className={cn(
                  'h-1.5 flex-1 rounded-full transition-colors',
                  i < index || (i === index && answered) ? 'bg-primary' : 'bg-muted',
                )}
              />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={item.question.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="flex flex-col gap-4"
          >
            <p className="text-[15px] font-semibold leading-relaxed">{tx(item.question.question)}</p>
            <div className="flex flex-col gap-2.5">
              {item.order.map((original, displayIndex) => {
                const option = item.question.options[original]
                const isCorrect = original === item.question.correctIndex
                const isPicked = original === picked
                return (
                  <button
                    key={original}
                    type="button"
                    onClick={() => pick(original)}
                    disabled={answered}
                    aria-pressed={isPicked}
                    className={cn(
                      'flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors',
                      !answered && 'border-border/60 hover:border-primary/40 hover:bg-muted/50',
                      answered && isCorrect && 'border-emerald-500/40 bg-emerald-500/10',
                      answered && isPicked && !isCorrect && 'border-rose-500/40 bg-rose-500/10',
                      answered && !isPicked && !isCorrect && 'border-border/40 opacity-50',
                    )}
                  >
                    <span className="flex min-w-0 items-start gap-3">
                      <span className="mt-px flex size-5 shrink-0 items-center justify-center rounded-full border border-border text-[11px] font-medium text-muted-foreground">
                        {String.fromCharCode(65 + displayIndex)}
                      </span>
                      <span className="min-w-0">{tx(option)}</span>
                    </span>
                    {answered && isCorrect && <CircleCheck className="size-4 shrink-0 text-emerald-500" />}
                    {answered && isPicked && !isCorrect && <CircleX className="size-4 shrink-0 text-rose-500" />}
                  </button>
                )
              })}
            </div>

            <p aria-live="polite" className="sr-only">
              {answered && (
                <>
                  <span>{pickedCorrect ? t('quiz.correct') : t('quiz.incorrect')}</span>{' '}
                  <span>{tx(item.question.explanation)}</span>
                </>
              )}
            </p>

            {answered && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="flex flex-col gap-4"
              >
                <div
                  className={cn(
                    'flex items-start gap-2.5 rounded-xl p-4 text-sm leading-relaxed',
                    pickedCorrect
                      ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                      : 'bg-rose-500/10 text-rose-700 dark:text-rose-300',
                  )}
                >
                  {pickedCorrect ? (
                    <CircleCheck className="mt-0.5 size-4 shrink-0" />
                  ) : (
                    <CircleX className="mt-0.5 size-4 shrink-0" />
                  )}
                  <div className="min-w-0">
                    <p className="font-semibold">{pickedCorrect ? t('quiz.correct') : t('quiz.incorrect')}</p>
                    <p className="mt-1 text-muted-foreground">{tx(item.question.explanation)}</p>
                  </div>
                </div>
                <Button onClick={goNext} className="w-full gap-2 sm:w-auto sm:self-end">
                  {isLast ? t('learn.check.seeResult') : t('quiz.nextQuestion')}
                  <ArrowRight className="size-4" />
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    )
  } else if (phase === 'result') {
    body = passed ? (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="flex flex-col gap-4"
      >
        {saveFailed ? (
          <div className="flex items-start gap-2.5 rounded-xl border border-rose-500/25 bg-rose-500/10 p-4 text-sm text-rose-700 dark:text-rose-300">
            <TriangleAlert className="mt-0.5 size-4 shrink-0" />
            <div className="min-w-0">
              <p className="font-semibold">{t('common.saveFailed')}</p>
              <p className="mt-1 text-muted-foreground">{tf('learn.check.score', { score, total: items.length })}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-start gap-3 rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <PartyPopper className="size-5" />
            </div>
            <div className="min-w-0 text-sm">
              <p className="font-semibold text-emerald-700 dark:text-emerald-300">{t('learn.check.passedTitle')}</p>
              <p className="mt-0.5 text-muted-foreground">
                {saving ? t('common.saving') : tf('learn.check.score', { score, total: items.length })}
              </p>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          {saveFailed ? (
            <Button onClick={() => void saveCompletion(score)} disabled={saving} className="gap-2">
              <RotateCcw className="size-4" />
              {saving ? t('common.saving') : t('common.retry')}
            </Button>
          ) : next ? (
            <Button asChild className="gap-2">
              <Link to={`/modules/${next.slug}`}>
                {t('lesson.nextModule')}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild className="gap-2">
              <Link to="/quiz">
                <GraduationCap className="size-4" />
                {t('learn.check.toKnowledgeTest')}
              </Link>
            </Button>
          )}
        </div>
      </motion.div>
    ) : (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="flex flex-col gap-4"
      >
        <div className="flex items-start gap-3 rounded-xl border border-amber-500/25 bg-amber-500/10 p-4">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
            <BookOpen className="size-5" />
          </div>
          <div className="min-w-0 text-sm">
            <p className="font-semibold text-amber-700 dark:text-amber-300">{t('learn.check.failedTitle')}</p>
            <p className="mt-0.5 leading-relaxed text-muted-foreground">
              {tf('learn.check.failedBody', { score, total: items.length, pass: passMark })}
            </p>
            {complete && <p className="mt-1 text-muted-foreground">{t('learn.check.stillComplete')}</p>}
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button onClick={start} className="gap-2">
            <RotateCcw className="size-4" />
            {t('learn.check.tryAgain')}
          </Button>
          <Button variant="outline" onClick={rereadLesson} className="gap-2">
            <BookOpen className="size-4" />
            {t('learn.check.reread')}
          </Button>
        </div>
      </motion.div>
    )
  } else if (complete) {
    body = (
      <div className="flex flex-col gap-3">
        {completedBanner}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button variant="outline" onClick={start} disabled={saving} className="gap-2">
            <RotateCcw className="size-4" />
            {t('learn.check.retake')}
          </Button>
          {unmarkLink}
        </div>
      </div>
    )
  } else {
    body = (
      <Button onClick={start} size="lg" className="w-full gap-2 sm:w-auto">
        {t('learn.check.start')}
        <ArrowRight className="size-4" />
      </Button>
    )
  }

  return (
    <motion.section
      id="module-check"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, ease: EASE }}
      className="scroll-mt-24 rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:p-6"
    >
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl gradient-accent">
          <ClipboardCheck className="size-5 text-white" />
        </div>
        <div className="min-w-0">
          <h2 className="text-lg font-semibold tracking-tight">{t('learn.check.title')}</h2>
          <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
            {total > 0 ? tf('learn.check.intro', { count: total, pass: passMark }) : t('learn.check.noQuestions')}
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-col">{body}</div>
    </motion.section>
  )
}
