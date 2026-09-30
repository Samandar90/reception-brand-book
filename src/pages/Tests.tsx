import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BookOpenCheck,
  Clock3,
  GraduationCap,
  Hourglass,
  Languages,
  Lock,
  MessageSquareText,
  Play,
  RotateCcw,
  Send,
  TriangleAlert,
  Trophy,
} from 'lucide-react'
import { toast } from 'sonner'
import type { Language, TestAttempt, TestGrant } from '@/types'
import { CEFR_LEVELS } from '@/types'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations'
import { useAuth } from '@/contexts/AuthContext'
import { useProgress } from '@/contexts/ProgressContext'
import { CERTIFICATE_MIN_KNOWLEDGE_PERCENT } from '@/lib/constants'
import { loadAttemptState, type LanguageAttemptState } from '@/lib/languageTest'

const EASE = [0.16, 1, 0.3, 1] as const
const LOCALES: Record<Language, string> = { ru: 'ru-RU', uz: 'uz-UZ', en: 'en-GB' }

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

function pct(value: number): string {
  return `${Math.round(value)}%`
}

function numberOrNull(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) ? value : null
}

/** Saved run as the language test page stores it (it adds the retake permission it was started under). */
type SavedRun = LanguageAttemptState & { grantId?: string | null }

/** A saved in-progress state is stale when an attempt with the same start time is already stored. */
function isStale(state: SavedRun, attempts: TestAttempt[]): boolean {
  const started = Date.parse(state.startedAt)
  return attempts.some((a) => Date.parse(a.startedAt) === started)
}

/**
 * An unfinished retake run that was not started under any open retake permission is dropped by the test page
 * (same rule as in LanguageTest.tsx), so the hub offers a fresh retake instead of "Continue".
 */
function isOutdatedUnfinished(state: SavedRun, attempts: TestAttempt[], validGrants: TestGrant[]): boolean {
  return (
    state.phase !== 'done' &&
    attempts.length > 0 &&
    validGrants.length > 0 &&
    !validGrants.some((g) => g.id === state.grantId)
  )
}

type LanguageKind = 'english' | 'russian'

export default function TestsHub() {
  const { t } = useLanguage()
  const { user } = useAuth()
  const { reload } = useProgress()
  const [refresh, setRefresh] = useState<'loading' | 'ok' | 'error'>('loading')
  // The context marks itself loaded even when its own first fetch failed, so cards are built only after this
  // page has fetched fresh data at least once; otherwise they could show "not taken yet" for taken tests.
  const [synced, setSynced] = useState(false)
  const [nonce, setNonce] = useState(0)

  // Fresh data on every visit: the administrator may have granted a retake or graded a writing task.
  useEffect(() => {
    let cancelled = false
    reload()
      .then(() => {
        if (cancelled) return
        setSynced(true)
        setRefresh('ok')
      })
      .catch(() => {
        if (cancelled) return
        setRefresh('error')
        toast.error(t('common.loadFailed'))
      })
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload, nonce])

  function retry() {
    setRefresh('loading')
    setNonce((n) => n + 1)
  }

  const userId = user?.id ?? null
  const saved = useMemo<{ english: SavedRun | null; russian: SavedRun | null }>(
    () => ({
      english: userId ? loadAttemptState('en', userId) : null,
      russian: userId ? loadAttemptState('ru', userId) : null,
    }),
    [userId],
  )

  const showSkeleton = !synced && refresh === 'loading'
  const showFatal = !synced && refresh === 'error'

  return (
    <div className="flex flex-col gap-8">
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <h1 className="text-3xl font-semibold tracking-tight">{t('nav.tests')}</h1>
        <p className="mt-2 max-w-2xl text-[15px] text-muted-foreground">{t('tests.subtitle')}</p>
      </motion.header>

      {refresh === 'error' && synced && (
        <div className="flex flex-col gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-800 sm:flex-row sm:items-center sm:justify-between dark:text-amber-200">
          <span className="flex items-center gap-2">
            <TriangleAlert className="size-4 shrink-0" />
            {t('common.loadFailed')}
          </span>
          <Button size="sm" variant="outline" onClick={retry} className="gap-1.5 self-start sm:self-auto">
            <RotateCcw className="size-3.5" />
            {t('common.retry')}
          </Button>
        </div>
      )}

      {showSkeleton ? (
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-64 animate-pulse rounded-2xl border border-border/60 bg-card shadow-premium" />
          ))}
        </section>
      ) : showFatal ? (
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-card p-8 text-center shadow-premium">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-300">
            <TriangleAlert className="size-6" />
          </div>
          <p className="text-sm text-muted-foreground">{t('common.loadFailed')}</p>
          <Button onClick={retry} className="gap-2">
            <RotateCcw className="size-4" />
            {t('common.retry')}
          </Button>
        </div>
      ) : (
        <>
          <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <KnowledgeCard index={0} />
            <LanguageCard index={1} kind="english" saved={saved.english} />
            <LanguageCard index={2} kind="russian" saved={saved.russian} />
            <FinalCard index={3} />
          </section>
          <CefrExplainer />
        </>
      )}
    </div>
  )
}

// ─── Building blocks ─────────────────────────────────────────────────────────

function HubCard({
  index,
  icon: Icon,
  title,
  description,
  badge,
  children,
  footer,
}: {
  index: number
  icon: LucideIcon
  title: string
  description: string
  badge?: ReactNode
  children: ReactNode
  footer: ReactNode
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: EASE }}
      className="flex flex-col gap-5 rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:p-6"
    >
      <div className="flex items-start gap-3.5">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl gradient-accent shadow-premium">
          <Icon className="size-5 text-white" strokeWidth={2} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
            {badge}
          </div>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4">{children}</div>
      <div className="border-t border-border/60 pt-4">{footer}</div>
    </motion.article>
  )
}

function Stat({
  label,
  value,
  hint,
  tone,
  compact,
}: {
  label: string
  value: string
  hint?: string
  tone?: 'good' | 'bad'
  /** Narrow tiles (three in a row): smaller padding and value on phones. */
  compact?: boolean
}) {
  return (
    <div className={cn('min-w-0 rounded-xl bg-muted/50', compact ? 'px-2.5 py-2.5 sm:px-3.5 sm:py-3' : 'px-3.5 py-3')}>
      <p className="break-words text-xs font-medium leading-tight text-muted-foreground">{label}</p>
      <p
        className={cn(
          'mt-0.5 truncate font-semibold tracking-tight tabular-nums',
          compact ? 'text-lg sm:text-xl' : 'text-xl',
          tone === 'good' && 'text-emerald-600 dark:text-emerald-400',
          tone === 'bad' && 'text-rose-600 dark:text-rose-400',
        )}
      >
        {value}
      </p>
      {hint && <p className="mt-0.5 truncate text-xs text-muted-foreground">{hint}</p>}
    </div>
  )
}

function StatusPill({ tone, children }: { tone: 'good' | 'warn' | 'muted'; children: ReactNode }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium',
        tone === 'good' && 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
        tone === 'warn' && 'bg-amber-500/10 text-amber-700 dark:text-amber-300',
        tone === 'muted' && 'bg-muted text-muted-foreground',
      )}
    >
      {children}
    </span>
  )
}

function ActionLink({ to, icon: Icon, children, variant = 'default' }: { to: string; icon: LucideIcon; children: ReactNode; variant?: 'default' | 'outline' }) {
  return (
    <Button asChild size="lg" variant={variant} className="h-10 w-full gap-2 px-4 sm:w-auto">
      <Link to={to}>
        <Icon className="size-4" />
        {children}
        <ArrowRight className="size-4" />
      </Link>
    </Button>
  )
}

// ─── Knowledge test ──────────────────────────────────────────────────────────

function KnowledgeCard({ index }: { index: number }) {
  const { t, tf, lang } = useLanguage()
  const { attemptsOf, bestPercent } = useProgress()
  const attempts = attemptsOf('knowledge')
  const best = bestPercent('knowledge')
  const last = attempts[0] ?? null
  const passed = best !== null && best >= CERTIFICATE_MIN_KNOWLEDGE_PERCENT

  return (
    <HubCard
      index={index}
      icon={BookOpenCheck}
      title={t('test.knowledge')}
      description={t('tests.knowledgeDesc')}
      badge={
        attempts.length > 0 ? (
          <StatusPill tone={passed ? 'good' : 'warn'}>{passed ? t('tests.passed') : t('tests.notPassedYet')}</StatusPill>
        ) : null
      }
      footer={
        <ActionLink to="/quiz" icon={attempts.length ? RotateCcw : Play}>
          {attempts.length ? t('tests.takeAgain') : t('tests.startTest')}
        </ActionLink>
      }
    >
      {attempts.length === 0 ? (
        <p className="text-sm text-muted-foreground">{t('tests.neverTaken')}</p>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <Stat
            label={t('tests.best')}
            value={best !== null ? pct(best) : '—'}
            tone={passed ? 'good' : undefined}
          />
          <Stat
            label={t('tests.last')}
            value={last ? pct(last.percent) : '—'}
            hint={last ? formatDate(last.finishedAt, lang) : undefined}
          />
        </div>
      )}
      <p className="text-xs text-muted-foreground">{tf('tests.passMark', { pct: CERTIFICATE_MIN_KNOWLEDGE_PERCENT })}</p>
    </HubCard>
  )
}

// ─── Language tests ──────────────────────────────────────────────────────────

function LevelBadge({ level, size = 'lg' }: { level: string | null; size?: 'lg' | 'md' }) {
  const { t } = useLanguage()
  const reached = level !== null && level !== 'A0'
  const label = level === null ? '—' : level === 'A0' ? t('tests.belowA1') : level
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-2xl font-semibold tracking-tight',
        size === 'lg' ? 'h-16 min-w-16 px-4' : 'h-11 min-w-11 px-3',
        size === 'lg' ? (level === 'A0' ? 'text-base' : 'text-3xl') : level === 'A0' ? 'text-xs' : 'text-lg',
        reached ? 'gradient-accent text-white shadow-premium' : 'bg-muted text-muted-foreground',
      )}
    >
      {label}
    </span>
  )
}

function WritingStatus({ attempt }: { attempt: TestAttempt }) {
  const { t, tf } = useLanguage()
  let tone: 'good' | 'warn' | 'muted'
  let text: string
  if (!attempt.writing) {
    tone = 'muted'
    text = t('tests.writingNone')
  } else if (attempt.writingScore === null) {
    tone = 'warn'
    text = t('tests.writingPending')
  } else {
    tone = 'good'
    text = tf('tests.writingGraded', { score: attempt.writingScore })
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="text-muted-foreground">{t('tests.writing')}:</span>
        <StatusPill tone={tone}>{text}</StatusPill>
      </div>
      {attempt.writingScore !== null && attempt.writingComment && (
        <div className="flex gap-2.5 rounded-xl bg-muted/50 p-3 text-sm">
          <MessageSquareText className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
          <div className="min-w-0">
            <p className="text-xs font-medium text-muted-foreground">{t('tests.adminComment')}</p>
            <p className="mt-0.5 whitespace-pre-line break-words leading-relaxed">{attempt.writingComment}</p>
          </div>
        </div>
      )}
    </div>
  )
}

function LanguageCard({ index, kind, saved }: { index: number; kind: LanguageKind; saved: SavedRun | null }) {
  const { t, tf, lang } = useLanguage()
  const { attemptsOf, openGrants } = useProgress()
  const attempts = attemptsOf(kind)
  const latest = attempts[0] ?? null
  const nowMs = Date.now()
  const validGrants = openGrants.filter((g) => g.kind === kind && !g.usedByAttemptId && Date.parse(g.expiresAt) > nowMs)
  const grant: TestGrant | null = validGrants[0] ?? null
  const eligible = attempts.length === 0 || grant !== null
  const inProgress =
    saved !== null && eligible && !isStale(saved, attempts) && !isOutdatedUnfinished(saved, attempts, validGrants)
  const unsent = inProgress && saved?.phase === 'done'
  const to = `/tests/${kind}`

  let footer: ReactNode
  if (inProgress) {
    footer = (
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <ActionLink to={to} icon={unsent ? Send : Play}>
          {unsent ? t('tests.sendResult') : t('tests.continueTest')}
        </ActionLink>
        <span className="flex items-center gap-1.5 text-xs text-amber-700 dark:text-amber-300">
          <Hourglass className="size-3.5 shrink-0" />
          {unsent ? t('tests.resultNotSaved') : t('tests.inProgress')}
        </span>
      </div>
    )
  } else if (attempts.length === 0) {
    footer = (
      <ActionLink to={to} icon={Play}>
        {t('tests.startTest')}
      </ActionLink>
    )
  } else if (grant) {
    footer = (
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <ActionLink to={to} icon={RotateCcw}>
          {t('tests.retake')}
        </ActionLink>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock3 className="size-3.5" />
          {tf('tests.retakeUntil', { time: formatDateTime(grant.expiresAt, lang) })}
        </span>
      </div>
    )
  } else {
    footer = (
      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <Lock className="size-4 shrink-0" />
        {t('tests.retakeLocked')}
      </p>
    )
  }

  return (
    <HubCard
      index={index}
      icon={Languages}
      title={t(kind === 'english' ? 'test.english' : 'test.russian')}
      description={t('tests.langDesc')}
      footer={footer}
    >
      {latest ? (
        <>
          <div className="flex items-center gap-4">
            <LevelBadge level={latest.level ?? 'A0'} />
            <div className="min-w-0 text-sm">
              <p className="text-xs font-medium text-muted-foreground">{t('tests.currentLevel')}</p>
              <p className="mt-0.5 font-medium">{formatDate(latest.finishedAt, lang)}</p>
              <p className="text-muted-foreground">{tf('tests.attemptsCount', { n: attempts.length })}</p>
            </div>
          </div>
          <WritingStatus attempt={latest} />
        </>
      ) : (
        <div className="flex items-center gap-4">
          <LevelBadge level={null} />
          <p className="text-sm text-muted-foreground">{t('tests.neverTaken')}</p>
        </div>
      )}
    </HubCard>
  )
}

// ─── Final test ──────────────────────────────────────────────────────────────

function FinalCard({ index }: { index: number }) {
  const { t, lang } = useLanguage()
  const { latestAttempt } = useProgress()
  const latest = latestAttempt('final')
  const points = latest ? numberOrNull(latest.details.points) : null
  const rank = latest ? numberOrNull(latest.details.rank) : null
  const pending = latest?.details.gradingStatus === 'pending'
  const title = latest && typeof latest.details.title === 'string' ? latest.details.title : null

  return (
    <HubCard
      index={index}
      icon={Trophy}
      title={t('test.final')}
      description={t('tests.finalDesc')}
      footer={
        <ActionLink to="/final" icon={GraduationCap} variant={latest ? 'outline' : 'default'}>
          {t('tests.openFinal')}
        </ActionLink>
      }
    >
      {latest ? (
        <>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <Stat compact label={t('common.result')} value={pct(latest.percent)} />
            <Stat compact label={t('tests.points')} value={points !== null ? String(points) : '—'} />
            <Stat compact label={t('tests.rank')} value={rank !== null ? `#${rank}` : '—'} />
          </div>
          <p className="truncate text-xs text-muted-foreground">
            {title ? `${title} · ` : ''}
            {formatDate(latest.finishedAt, lang)}
          </p>
          {pending && (
            <p className="flex items-start gap-2 rounded-xl bg-amber-500/10 p-3 text-sm text-amber-800 dark:text-amber-200">
              <Hourglass className="mt-0.5 size-4 shrink-0" />
              {t('tests.finalPending')}
            </p>
          )}
        </>
      ) : (
        <p className="text-sm text-muted-foreground">{t('tests.finalNone')}</p>
      )}
    </HubCard>
  )
}

// ─── CEFR explainer ──────────────────────────────────────────────────────────

function CefrExplainer() {
  const { t } = useLanguage()
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
      className="rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight">{t('tests.cefrTitle')}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{t('tests.cefrSubtitle')}</p>
      <ul className="mt-4 flex flex-col divide-y divide-border/60">
        {CEFR_LEVELS.map((level) => (
          <li key={level} className="flex items-start gap-3 py-2.5 first:pt-0 last:pb-0">
            <span className="mt-px inline-flex h-6 min-w-9 shrink-0 items-center justify-center rounded-lg bg-muted px-1.5 text-xs font-semibold">
              {level}
            </span>
            <span className="text-sm leading-relaxed">{t(`tests.cefr.${level}` as TranslationKey)}</span>
          </li>
        ))}
      </ul>
    </motion.section>
  )
}
