import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  BookOpenCheck,
  ListTodo,
  Clock3,
  ArrowRight,
  LayoutGrid,
  Award,
  ChevronRight,
  ClipboardCheck,
  GraduationCap,
  Languages,
  Radio,
  Trophy,
  type LucideIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StatCard } from '@/components/shared/StatCard'
import { ProgressRing } from '@/components/shared/ProgressRing'
import { useLanguage } from '@/i18n/LanguageContext'
import { useAuth } from '@/contexts/AuthContext'
import { useProgress } from '@/contexts/ProgressContext'
import { modules } from '@/data/modules'
import { cn } from '@/lib/utils'
import { CERTIFICATE_MIN_KNOWLEDGE_PERCENT, TOTAL_MODULES } from '@/lib/constants'
import type { TestAttempt } from '@/types'

const EASE = [0.16, 1, 0.3, 1] as const

type Tone = 'good' | 'warn' | 'muted'

const TONE_CLASS: Record<Tone, string> = {
  good: 'text-emerald-600 dark:text-emerald-400',
  warn: 'text-amber-600 dark:text-amber-400',
  muted: 'text-muted-foreground',
}

interface TestCardData {
  to: string
  icon: LucideIcon
  label: string
  value: string
  note: string
  tone: Tone
}

function TestCard({ data, loading, index }: { data: TestCardData; loading: boolean; index: number }) {
  const Icon = data.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: EASE }}
      whileHover={{ y: -4 }}
    >
      <Link
        to={data.to}
        className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-4 shadow-premium transition-colors hover:border-primary/30 sm:p-5"
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex size-9 items-center justify-center rounded-xl bg-muted">
            <Icon className="size-[18px]" strokeWidth={2} />
          </div>
          <ChevronRight className="size-4 text-muted-foreground" />
        </div>
        <p className="mt-3 line-clamp-1 text-xs font-medium text-muted-foreground">{data.label}</p>
        {loading ? (
          <>
            <div className="mt-1.5 h-7 w-14 animate-pulse rounded-md bg-muted" />
            <div className="mt-1.5 h-3 w-20 animate-pulse rounded bg-muted" />
          </>
        ) : (
          <>
            <p className="mt-0.5 text-2xl font-semibold tracking-tight">{data.value}</p>
            <p className={cn('mt-0.5 line-clamp-2 text-xs font-medium', TONE_CLASS[data.tone])}>{data.note}</p>
          </>
        )}
      </Link>
    </motion.div>
  )
}

export default function Dashboard() {
  const { t, tf, tx } = useLanguage()
  const { user } = useAuth()
  const employeeName = user?.fullName ?? ''
  const {
    loaded,
    loadError,
    reload,
    progressPercent,
    completedCount,
    remainingCount,
    estimatedRemainingMinutes,
    isModuleComplete,
    attemptsOf,
    latestAttempt,
  } = useProgress()

  const nextModule = modules.find((m) => !isModuleComplete(m.slug)) ?? modules[0]
  const firstName = employeeName.trim().split(' ')[0] || employeeName

  // Only assessment-mode attempts count (same rule as the admin overview).
  const knowledgeAttempts = attemptsOf('knowledge').filter((a) => a.details.mode === 'assessment')
  const knowledgeBest = knowledgeAttempts.length ? Math.max(...knowledgeAttempts.map((a) => a.percent)) : null
  const knowledgeOk = knowledgeBest !== null && knowledgeBest >= CERTIFICATE_MIN_KNOWLEDGE_PERCENT
  const modulesOk = completedCount >= TOTAL_MODULES
  const certificateReady = modulesOk && knowledgeOk
  const missing: string[] = []
  if (!modulesOk) missing.push(tf('learn.dash.certModules', { done: completedCount, total: TOTAL_MODULES }))
  if (!knowledgeOk) missing.push(tf('learn.dash.certKnowledge', { min: CERTIFICATE_MIN_KNOWLEDGE_PERCENT }))

  const languageCard = (to: string, label: string, attempt: TestAttempt | null): TestCardData => {
    if (!attempt) return { to, icon: Languages, label, value: '—', note: t('learn.dash.notTaken'), tone: 'muted' }
    const belowA1 = attempt.level === 'A0'
    const writingPending = attempt.writing !== null && attempt.writingScore === null
    return {
      to,
      icon: Languages,
      label,
      value: belowA1 ? '< A1' : (attempt.level ?? '—'),
      note: writingPending ? t('learn.dash.writingReview') : belowA1 ? t('learn.dash.belowA1') : t('common.level'),
      tone: writingPending || belowA1 ? 'warn' : 'good',
    }
  }

  const finalAttempt = latestAttempt('final')
  const finalPending = finalAttempt?.details.gradingStatus === 'pending'

  const testCards: TestCardData[] = [
    {
      to: '/quiz',
      icon: GraduationCap,
      label: t('test.knowledge'),
      value: knowledgeBest !== null ? `${Math.round(knowledgeBest)}%` : '—',
      note:
        knowledgeBest === null
          ? t('learn.dash.notTaken')
          : knowledgeOk
            ? t('learn.dash.passed')
            : tf('learn.dash.needMin', { min: CERTIFICATE_MIN_KNOWLEDGE_PERCENT }),
      tone: knowledgeBest === null ? 'muted' : knowledgeOk ? 'good' : 'warn',
    },
    languageCard('/tests/english', t('test.english'), latestAttempt('english')),
    languageCard('/tests/russian', t('test.russian'), latestAttempt('russian')),
    {
      to: '/final',
      icon: Trophy,
      label: t('test.final'),
      value: finalAttempt ? `${Math.round(finalAttempt.percent)}%` : '—',
      note: !finalAttempt ? t('learn.dash.notTaken') : finalPending ? t('learn.dash.grading') : t('learn.dash.latestResult'),
      tone: !finalAttempt ? 'muted' : finalPending ? 'warn' : 'good',
    },
  ]

  return (
    <div className="flex flex-col gap-8">
      {loadError && (
        <div
          role="alert"
          className="flex flex-col gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-700 sm:flex-row sm:items-center sm:justify-between dark:text-rose-300"
        >
          <span>{t('common.loadFailed')}</span>
          <Button size="sm" variant="outline" onClick={() => void reload().catch(() => undefined)}>
            {t('common.retry')}
          </Button>
        </div>
      )}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-premium sm:p-8"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full opacity-[0.12] gradient-accent blur-3xl"
        />
        <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{t('dashboard.welcome')}</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">{firstName || t('appName')}</h1>
            <p className="mt-2 max-w-md text-[15px] text-muted-foreground">{t('dashboard.subtitle')}</p>
            <Button asChild size="lg" className="mt-5 gap-2">
              <Link to={`/modules/${nextModule.slug}`}>
                {t('dashboard.continueLearning')}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <ProgressRing percent={progressPercent} size={140} label={t('dashboard.todayProgress')} />
        </div>
      </motion.section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard icon={BookOpenCheck} label={t('dashboard.completedLessons')} value={completedCount} accent="gradient" />
        <StatCard icon={ListTodo} label={t('dashboard.remainingLessons')} value={remainingCount} />
        <StatCard
          icon={Clock3}
          label={t('dashboard.estimatedTime')}
          value={`${estimatedRemainingMinutes} ${t('common.minutes')}`}
        />
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight">{t('learn.dash.testsTitle')}</h2>
          <Button asChild variant="ghost" size="sm" className="gap-1.5 text-muted-foreground">
            <Link to="/tests">
              <ClipboardCheck className="size-4" />
              {t('learn.dash.allTests')}
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {testCards.map((card, i) => (
            <TestCard key={card.to} data={card} loading={!loaded} index={i} />
          ))}
        </div>

        {loaded ? (
          <Link
            to="/certificate"
            className={cn(
              'flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors',
              certificateReady
                ? 'border-emerald-500/25 bg-emerald-500/10 font-medium text-emerald-700 hover:bg-emerald-500/15 dark:text-emerald-300'
                : 'border-border/60 bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground',
            )}
          >
            <Award className={cn('size-4 shrink-0', !certificateReady && 'text-amber-500')} />
            <span className="min-w-0 flex-1">
              {certificateReady ? t('learn.dash.certReady') : tf('learn.dash.certMissing', { items: missing.join(', ') })}
            </span>
            <ChevronRight className="size-4 shrink-0" />
          </Link>
        ) : (
          <div className="h-11 animate-pulse rounded-xl bg-muted" />
        )}

        <div className="flex flex-col gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/[0.04] p-4 sm:flex-row sm:items-center dark:bg-violet-500/[0.06]">
          <div className="flex min-w-0 flex-1 items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-600 dark:text-violet-400">
              <Radio className="size-[18px]" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold">{t('learn.dash.finalCalloutTitle')}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{t('learn.dash.finalCalloutBody')}</p>
            </div>
          </div>
          <Button asChild variant="outline" className="gap-1.5">
            <Link to="/final">
              {t('nav.finalTest')}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight">{t('modules.title')}</h2>
          <Button asChild variant="ghost" size="sm" className="gap-1.5 text-muted-foreground">
            <Link to="/modules">
              <LayoutGrid className="size-4" />
              {t('dashboard.viewAllModules')}
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.slice(0, 6).map((module, i) => {
            const complete = isModuleComplete(module.slug)
            return (
              <motion.div
                key={module.slug}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: EASE }}
                whileHover={{ y: -4 }}
              >
                <Link
                  to={`/modules/${module.slug}`}
                  className="block h-full rounded-2xl border border-border/60 bg-card p-5 shadow-premium transition-colors hover:border-primary/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">
                      {t('modules.title')} {module.order}
                    </span>
                    {complete && <span className="size-2 rounded-full bg-emerald-500" />}
                  </div>
                  <h3 className="mt-2 font-semibold tracking-tight">{tx(module.title)}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{tx(module.description)}</p>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
