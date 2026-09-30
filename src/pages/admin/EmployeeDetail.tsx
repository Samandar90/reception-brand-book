import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  BookOpen,
  BookOpenCheck,
  CircleCheck,
  ClipboardCheck,
  ExternalLink,
  KeyRound,
  LogIn,
  PenLine,
  Play,
  RotateCcw,
  Timer,
  TriangleAlert,
  Trophy,
  UserCheck,
  UserX,
  type LucideIcon,
} from 'lucide-react'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations'
import { useAuth } from '@/contexts/AuthContext'
import {
  fetchEmployeeActivity,
  fetchEmployeeAttempts,
  fetchEmployeeModules,
  fetchGrants,
  fetchProfile,
  grantRetake,
  gradeWriting,
  resetEmployeeModules,
  revokeGrant,
  rubricToScore,
  type WritingRubric,
} from '@/lib/adminApi'
import { QUESTIONS_PER_LEVEL } from '@/lib/languageTest'
import { TOTAL_MODULES } from '@/lib/constants'
import { getModuleBySlug, modules } from '@/data/modules'
import { getWritingPrompt } from '@/data/languageTests'
import { quizQuestions } from '@/data/quizQuestions'
import { CEFR_LEVELS } from '@/types'
import type { ActivityRow, ModuleProgressRow, Profile, TestAttempt, TestGrant, TestKind } from '@/types'
import {
  EASE,
  ErrorState,
  LevelBadge,
  LoadingState,
  ResetPasswordDialog,
  StatusBadge,
  ToggleActiveDialog,
  levelIndex,
  percentTone,
  statusOf,
  useAdminFormat,
} from './adminKit'

// ─── Data ────────────────────────────────────────────────────────────────────

interface DetailData {
  profile: Profile
  modules: ModuleProgressRow[]
  attempts: TestAttempt[]
  activity: ActivityRow[]
  grants: TestGrant[]
  rubrics: Record<string, WritingRubric>
}

/** Activity rows fetched: the timeline shows the latest 100, reading time uses all of them. */
const ACTIVITY_FETCH_LIMIT = 1000
const TIMELINE_LIMIT = 100


// ─── Details parsing (attempt.details is free-form JSON) ─────────────────────

type Obj = Record<string, unknown>
const isObj = (v: unknown): v is Obj => typeof v === 'object' && v !== null && !Array.isArray(v)
const num = (v: unknown): number | null => (typeof v === 'number' && Number.isFinite(v) ? v : null)
const str = (v: unknown): string | null => (typeof v === 'string' ? v : null)

interface LevelScore {
  level: string
  score: number
  total: number
  timedOut: boolean
}

function levelScores(details: Obj): LevelScore[] {
  if (Array.isArray(details.levelResults)) {
    return details.levelResults.filter(isObj).map((r) => ({
      level: str(r.level) ?? '?',
      score: num(r.score) ?? 0,
      total: num(r.total) ?? QUESTIONS_PER_LEVEL,
      timedOut: r.timedOut === true,
    }))
  }
  const pls = details.perLevelScores
  if (isObj(pls)) {
    return CEFR_LEVELS.filter((l) => l in pls).map((l) => {
      const v = pls[l]
      if (isObj(v))
        return { level: l, score: num(v.score) ?? 0, total: num(v.total) ?? QUESTIONS_PER_LEVEL, timedOut: v.timedOut === true }
      return { level: l, score: num(v) ?? 0, total: QUESTIONS_PER_LEVEL, timedOut: false }
    })
  }
  return []
}

interface HonestyFlag {
  labelKey: TranslationKey
  hintKey: TranslationKey
  vars: Record<string, string | number>
}

function honestyFlags(attempt: TestAttempt, previous: TestAttempt | undefined): HonestyFlag[] {
  const d = attempt.details
  const flags: HonestyFlag[] = []
  const median = num(d.medianMs)
  if (median !== null && median < 4000)
    flags.push({ labelKey: 'admin.flag.fast', hintKey: 'admin.flag.fastHint', vars: { s: (median / 1000).toFixed(1) } })
  const focus = num(d.focusLost)
  if (focus !== null && focus >= 3)
    flags.push({ labelKey: 'admin.flag.focus', hintKey: 'admin.flag.focusHint', vars: { n: focus } })
  const cur = levelIndex(attempt.level)
  const prev = levelIndex(previous?.level)
  if (cur !== null && prev !== null && cur - prev >= 2)
    flags.push({
      labelKey: 'admin.flag.jump',
      hintKey: 'admin.flag.jumpHint',
      vars: { from: previous?.level ?? '', to: attempt.level ?? '' },
    })
  if (wasTranslated(d)) flags.push({ labelKey: 'admin.flag.translated', hintKey: 'admin.flag.translatedHint', vars: {} })
  return flags
}

const quizModuleById = new Map(quizQuestions.map((q) => [q.id, q.moduleSlug ?? null]))

/** Browser translation flag — stored at the top level of details or inside a nested signals object. */
function wasTranslated(d: Obj): boolean {
  if (d.translatedDom === true) return true
  return [d.client, d.signals, d.device].some((v) => isObj(v) && v.translatedDom === true)
}

const KIND_KEY: Record<TestKind, TranslationKey> = {
  knowledge: 'test.knowledge',
  english: 'test.english',
  russian: 'test.russian',
  final: 'test.final',
}

type TabValue = 'learning' | 'tests' | 'activity'

// ─── Page ────────────────────────────────────────────────────────────────────

/** Keyed by id so every piece of page state (tab, not-found, dialogs) resets when the employee changes. */
export default function EmployeeDetail() {
  const { id = '' } = useParams<{ id: string }>()
  return <EmployeeDetailPage key={id} id={id} />
}

/** How often `now` is refreshed, so expired retake grants and relative times stay correct on an open page. */
const NOW_REFRESH_MS = 60_000

function EmployeeDetailPage({ id }: { id: string }) {
  const [searchParams] = useSearchParams()
  const { t } = useLanguage()
  const { user } = useAuth()
  const [data, setData] = useState<DetailData | null>(null)
  const [notFound, setNotFound] = useState(false)
  const [error, setError] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)
  const [now, setNow] = useState(() => Date.now())
  const [tab, setTab] = useState<TabValue>(() => {
    const q = searchParams.get('tab')
    return q === 'tests' || q === 'activity' ? q : 'learning'
  })
  const [dialog, setDialog] = useState<'reset' | 'toggle' | null>(null)

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), NOW_REFRESH_MS)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    let cancelled = false
    Promise.all([
      fetchProfile(id),
      fetchEmployeeModules(id),
      fetchEmployeeAttempts(id),
      fetchEmployeeActivity(id, ACTIVITY_FETCH_LIMIT),
      fetchGrants(id),
    ])
      .then(([profile, mods, attempts, activity, grants]) => {
        const rubrics: Record<string, WritingRubric> = {}
        for (const a of attempts) if (a.writingRubric) rubrics[a.id] = a.writingRubric
        if (cancelled) return
        setNow(Date.now())
        setError(false)
        if (!profile) {
          setNotFound(true)
          setData(null)
          return
        }
        setNotFound(false)
        setData({ profile, modules: mods, attempts, activity, grants, rubrics })
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
    return () => {
      cancelled = true
    }
  }, [id, reloadKey])

  function retry() {
    setError(false)
    setData(null)
    setReloadKey((k) => k + 1)
  }

  const update = (fn: (d: DetailData) => DetailData) => setData((prev) => (prev ? fn(prev) : prev))

  const backLink = (
    <Button asChild variant="ghost" size="sm" className="-ml-2 gap-1.5 self-start text-muted-foreground">
      <Link to="/admin">
        <ArrowLeft className="size-4" />
        {t('admin.emp.back')}
      </Link>
    </Button>
  )

  if (error)
    return (
      <div className="flex flex-col gap-4">
        {backLink}
        <ErrorState onRetry={retry} />
      </div>
    )
  if (notFound)
    return (
      <div className="flex flex-col gap-4">
        {backLink}
        <div className="rounded-2xl border border-border/60 bg-card px-6 py-12 text-center shadow-premium">
          <p className="font-medium">{t('admin.emp.notFound')}</p>
        </div>
      </div>
    )
  if (!data || data.profile.id !== id)
    return (
      <div className="flex flex-col gap-4">
        {backLink}
        <LoadingState />
      </div>
    )

  const { profile } = data
  const isSelf = user?.id === profile.id
  const pendingWriting = data.attempts.filter((a) => a.writing && a.writingScore === null).length

  return (
    <div className="flex flex-col gap-6">
      {backLink}
      <EmployeeHeader
        data={data}
        now={now}
        isSelf={isSelf}
        onReset={() => setDialog('reset')}
        onToggle={() => setDialog('toggle')}
      />

      <Tabs value={tab} onValueChange={(v) => setTab(v as TabValue)} className="gap-4">
        <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
          <TabsList className="h-10! min-w-max">
            <TabsTrigger value="learning" className="px-3">
              <BookOpen />
              {t('admin.emp.tabLearning')}
            </TabsTrigger>
            <TabsTrigger value="tests" className="px-3">
              <ClipboardCheck />
              {t('admin.emp.tabTests')}
              {pendingWriting > 0 && (
                <span className="ml-0.5 flex size-5 items-center justify-center rounded-full bg-amber-500 text-[11px] font-semibold text-white">
                  {pendingWriting}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="activity" className="px-3">
              <Timer />
              {t('admin.emp.tabActivity')}
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="learning">
          <LearningTab data={data} onReset={() => update((d) => ({ ...d, modules: [] }))} />
        </TabsContent>
        <TabsContent value="tests">
          <TestsTab
            data={data}
            now={now}
            adminId={user?.id ?? null}
            onAttemptGraded={(attempt, rubric) =>
              update((d) => ({
                ...d,
                attempts: d.attempts.map((a) => (a.id === attempt.id ? attempt : a)),
                rubrics: { ...d.rubrics, [attempt.id]: rubric },
              }))
            }
            onGrantAdded={(g) => update((d) => ({ ...d, grants: [g, ...d.grants] }))}
            onGrantRevoked={(grantId) => update((d) => ({ ...d, grants: d.grants.filter((g) => g.id !== grantId) }))}
          />
        </TabsContent>
        <TabsContent value="activity">
          <ActivityTab activity={data.activity.slice(0, TIMELINE_LIMIT)} />
        </TabsContent>
      </Tabs>

      {dialog === 'reset' && <ResetPasswordDialog account={profile} onClose={() => setDialog(null)} />}
      {dialog === 'toggle' && (
        <ToggleActiveDialog
          account={profile}
          onClose={() => setDialog(null)}
          onDone={(isActive) => update((d) => ({ ...d, profile: { ...d.profile, isActive } }))}
        />
      )}
    </div>
  )
}

// ─── Header ──────────────────────────────────────────────────────────────────

function EmployeeHeader({
  data,
  now,
  isSelf,
  onReset,
  onToggle,
}: {
  data: DetailData
  now: number
  isSelf: boolean
  onReset: () => void
  onToggle: () => void
}) {
  const { t } = useLanguage()
  const fmt = useAdminFormat()
  const { profile, attempts } = data

  const summary = useMemo(() => {
    const knowledge = attempts.filter((a) => a.kind === 'knowledge' && a.details.mode === 'assessment')
    const latest = (kind: TestKind) => attempts.find((a) => a.kind === kind) ?? null
    const knowledgeBest = knowledge.length ? Math.max(...knowledge.map((a) => a.percent)) : null
    const final = latest('final')
    return {
      knowledgeBest,
      english: latest('english')?.level ?? null,
      russian: latest('russian')?.level ?? null,
      final: final ? final.percent : null,
      status: statusOf({
        modulesCompleted: data.modules.length,
        knowledgeBest,
        englishLevel: latest('english')?.level ?? null,
        russianLevel: latest('russian')?.level ?? null,
        finalPercent: final ? final.percent : null,
        hasAttempts: attempts.length > 0,
      }),
    }
  }, [attempts, data.modules.length])

  const lastActive = data.activity[0]?.createdAt ?? null
  const initials = profile.fullName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('')

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:p-6"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex min-w-0 items-start gap-4">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl gradient-accent text-lg font-semibold text-white">
            {initials || '?'}
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-2xl font-semibold tracking-tight">{profile.fullName}</h2>
              {profile.isActive ? (
                <Badge className="rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">{t('admin.active')}</Badge>
              ) : (
                <Badge variant="secondary" className="rounded-full">
                  {t('admin.inactive')}
                </Badge>
              )}
              {profile.role === 'admin' && (
                <Badge variant="outline" className="rounded-full">
                  {t('common.admin')}
                </Badge>
              )}
              <StatusBadge status={summary.status} />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              <span className="font-mono">@{profile.login}</span>
              {profile.position && <> · {profile.position}</>}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {t('admin.emp.created')}: {fmt.date(profile.createdAt)} · {t('admin.emp.lastActive')}:{' '}
              <span title={lastActive ? fmt.dateTime(lastActive) : undefined}>{fmt.relative(lastActive, now)}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={onReset} className="gap-2">
            <KeyRound className="size-4" />
            {t('admin.acc.resetPassword')}
          </Button>
          <Button variant={profile.isActive ? 'destructive' : 'outline'} onClick={onToggle} disabled={isSelf} className="gap-2">
            {profile.isActive ? <UserX className="size-4" /> : <UserCheck className="size-4" />}
            {profile.isActive ? t('admin.acc.deactivate') : t('admin.acc.activate')}
          </Button>
        </div>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
        <MiniStat label={t('admin.ov.colModules')} value={`${data.modules.length}/${TOTAL_MODULES}`} />
        <MiniStat
          label={t('admin.ov.colKnowledge')}
          value={<span className={percentTone(summary.knowledgeBest)}>{fmt.percent(summary.knowledgeBest)}</span>}
        />
        <MiniStat label={t('test.english')} value={<LevelBadge level={summary.english} empty={t('common.notPassed')} />} />
        <MiniStat label={t('test.russian')} value={<LevelBadge level={summary.russian} empty={t('common.notPassed')} />} />
        <MiniStat label={t('test.final')} value={fmt.percent(summary.final)} className="col-span-2 sm:col-span-1" />
      </dl>
    </motion.section>
  )
}

function MiniStat({ label, value, className }: { label: string; value: ReactNode; className?: string }) {
  return (
    <div className={cn('rounded-xl bg-muted/50 px-3 py-2.5', className)}>
      <dt className="truncate text-xs text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-lg font-semibold tabular-nums tracking-tight">{value}</dd>
    </div>
  )
}

function SectionCard({
  title,
  icon: Icon,
  aside,
  children,
  className,
}: {
  title: string
  icon: LucideIcon
  aside?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn('rounded-2xl border border-border/60 bg-card p-5 shadow-premium', className)}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="flex items-center gap-2 font-semibold tracking-tight">
          <Icon className="size-4 text-muted-foreground" />
          {title}
        </h3>
        {aside}
      </div>
      {children}
    </section>
  )
}

function EmptyNote({ children }: { children: ReactNode }) {
  return <p className="rounded-xl bg-muted/40 px-4 py-6 text-center text-sm text-muted-foreground">{children}</p>
}

// ─── Learning ────────────────────────────────────────────────────────────────

function LearningTab({ data, onReset }: { data: DetailData; onReset: () => void }) {
  const { t, tf, tx } = useLanguage()
  const fmt = useAdminFormat()
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [pending, setPending] = useState(false)

  const progress = useMemo(() => new Map(data.modules.map((m) => [m.moduleSlug, m])), [data.modules])
  const readingSec = useMemo(() => {
    const map = new Map<string, number>()
    for (const e of data.activity) {
      if (e.event !== 'lesson_view') continue
      const slug = str(e.meta.module)
      const sec = num(e.meta.durationSec)
      if (slug && sec !== null && sec > 0) map.set(slug, (map.get(slug) ?? 0) + sec)
    }
    return map
  }, [data.activity])

  async function handleReset() {
    if (pending) return
    setPending(true)
    try {
      await resetEmployeeModules(data.profile.id)
      onReset()
      setConfirmOpen(false)
      toast.success(t('admin.emp.resetDone'))
    } catch {
      toast.error(t('common.saveFailed'))
    } finally {
      setPending(false)
    }
  }

  const pct = Math.round((data.modules.length / TOTAL_MODULES) * 100)

  return (
    <SectionCard
      title={tf('admin.emp.modulesTitle', { n: data.modules.length, total: TOTAL_MODULES })}
      icon={BookOpenCheck}
      aside={
        <Button
          variant="outline"
          size="sm"
          onClick={() => setConfirmOpen(true)}
          disabled={data.modules.length === 0}
          className="gap-1.5"
        >
          <RotateCcw className="size-3.5" />
          {t('admin.emp.resetModules')}
        </Button>
      }
    >
      <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full gradient-accent transition-all" style={{ width: `${pct}%` }} />
      </div>
      <p className="mb-3 text-xs text-muted-foreground">{t('admin.emp.readingHint')}</p>
      <ul className="divide-y divide-border/60">
        {modules.map((m) => {
          const row = progress.get(m.slug)
          const sec = readingSec.get(m.slug) ?? 0
          // Completed with (almost) no reading time is the strongest sign of skimming, so 0 s is flagged too.
          const skimmed = !!row && sec < m.readingTimeMin * 60 * 0.3
          const noReading = skimmed && sec === 0
          const check =
            row && row.checkScore !== null && row.checkTotal ? { s: row.checkScore, t: row.checkTotal } : null
          const checkPct = check ? (check.s / check.t) * 100 : null
          return (
            <li key={m.slug} className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                {row ? (
                  <CircleCheck className="size-5 shrink-0 text-emerald-500" />
                ) : (
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-border text-[10px] font-medium text-muted-foreground">
                    {m.order}
                  </span>
                )}
                <div className="min-w-0">
                  <p className={cn('truncate text-sm font-medium', !row && 'text-muted-foreground')}>{tx(m.title)}</p>
                  <p className="text-xs text-muted-foreground">
                    {row ? tf('admin.emp.completedOn', { date: fmt.date(row.completedAt) }) : t('admin.emp.notCompleted')}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 pl-8 text-xs sm:pl-0">
                {check && (
                  <Badge
                    className={cn(
                      'rounded-full tabular-nums',
                      checkPct !== null && checkPct >= 80
                        ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                        : checkPct !== null && checkPct >= 50
                          ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300'
                          : 'bg-rose-500/12 text-rose-700 dark:text-rose-300',
                    )}
                  >
                    {tf('admin.emp.check', { score: check.s, total: check.t })}
                  </Badge>
                )}
                <span
                  className={cn(
                    'inline-flex items-center gap-1 tabular-nums',
                    skimmed ? 'font-medium text-amber-600 dark:text-amber-400' : 'text-muted-foreground',
                  )}
                  title={noReading ? t('admin.emp.noReading') : skimmed ? t('admin.emp.skimmed') : undefined}
                >
                  {skimmed ? <TriangleAlert className="size-3.5" /> : <Timer className="size-3.5" />}
                  {tf('admin.emp.readTime', { spent: sec > 0 ? fmt.duration(sec) : '0', expected: m.readingTimeMin })}
                </span>
              </div>
            </li>
          )
        })}
      </ul>

      <Dialog open={confirmOpen} onOpenChange={(open) => !pending && setConfirmOpen(open)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t('admin.emp.resetModules')}</DialogTitle>
            <DialogDescription>{tf('admin.emp.resetBody', { name: data.profile.fullName })}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmOpen(false)} disabled={pending}>
              {t('common.cancel')}
            </Button>
            <Button variant="destructive" onClick={() => void handleReset()} disabled={pending}>
              {pending ? t('common.saving') : t('admin.emp.resetConfirm')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SectionCard>
  )
}

// ─── Tests ───────────────────────────────────────────────────────────────────

function TestsTab({
  data,
  now,
  adminId,
  onAttemptGraded,
  onGrantAdded,
  onGrantRevoked,
}: {
  data: DetailData
  now: number
  adminId: string | null
  onAttemptGraded: (attempt: TestAttempt, rubric: WritingRubric) => void
  onGrantAdded: (g: TestGrant) => void
  onGrantRevoked: (grantId: string) => void
}) {
  const { t } = useLanguage()
  const knowledge = data.attempts.filter((a) => a.kind === 'knowledge' && a.details.mode === 'assessment')
  const finals = data.attempts.filter((a) => a.kind === 'final')

  return (
    <div className="flex flex-col gap-4">
      <SectionCard title={t('test.knowledge')} icon={ClipboardCheck}>
        {knowledge.length === 0 ? (
          <EmptyNote>{t('admin.emp.noKnowledge')}</EmptyNote>
        ) : (
          <div className="flex flex-col gap-3">
            {knowledge.map((a) => (
              <KnowledgeAttemptCard key={a.id} attempt={a} />
            ))}
          </div>
        )}
      </SectionCard>

      {(['english', 'russian'] as const).map((kind) => (
        <LanguageSection
          key={kind}
          kind={kind}
          data={data}
          now={now}
          adminId={adminId}
          onAttemptGraded={onAttemptGraded}
          onGrantAdded={onGrantAdded}
          onGrantRevoked={onGrantRevoked}
        />
      ))}

      <SectionCard title={t('test.final')} icon={Trophy}>
        {finals.length === 0 ? (
          <EmptyNote>{t('admin.emp.noFinal')}</EmptyNote>
        ) : (
          <ul className="flex flex-col gap-3">
            {finals.map((a) => (
              <FinalAttemptRow key={a.id} attempt={a} />
            ))}
          </ul>
        )}
      </SectionCard>
    </div>
  )
}

function KnowledgeAttemptCard({ attempt }: { attempt: TestAttempt }) {
  const { t, tx } = useLanguage()
  const fmt = useAdminFormat()
  const [showAll, setShowAll] = useState(false)

  const breakdown = useMemo(() => {
    const answers = Array.isArray(attempt.details.answers) ? attempt.details.answers.filter(isObj) : []
    const map = new Map<string, { correct: number; total: number }>()
    for (const a of answers) {
      const qid = str(a.id)
      const slug = str(a.moduleSlug) ?? (qid ? (quizModuleById.get(qid) ?? null) : null)
      if (!slug) continue
      const entry = map.get(slug) ?? { correct: 0, total: 0 }
      entry.total += 1
      if (a.correct === true) entry.correct += 1
      map.set(slug, entry)
    }
    return modules
      .filter((m) => map.has(m.slug))
      .map((m) => {
        const e = map.get(m.slug) ?? { correct: 0, total: 0 }
        return { slug: m.slug, title: tx(m.title), ...e, weak: e.total >= 2 && e.correct / e.total < 0.5 }
      })
  }, [attempt.details.answers, tx])

  const weak = breakdown.filter((b) => b.weak)

  return (
    <div className="rounded-xl border border-border/60 p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-baseline gap-3">
          <span className={cn('text-2xl font-semibold tabular-nums tracking-tight', percentTone(attempt.percent))}>
            {fmt.percent(attempt.percent)}
          </span>
          <span className="text-sm tabular-nums text-muted-foreground">
            {attempt.score}/{attempt.total}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span>{fmt.dateTime(attempt.finishedAt)}</span>
          <span className="inline-flex items-center gap-1">
            <Timer className="size-3.5" />
            {fmt.duration(attempt.durationSec)}
          </span>
        </div>
      </div>

      {weak.length > 0 && (
        <div className="mt-3">
          <p className="mb-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">{t('admin.emp.weakModules')}</p>
          <div className="flex flex-wrap gap-1.5">
            {weak.map((w) => (
              <Badge key={w.slug} className="h-auto rounded-full bg-rose-500/12 py-1 whitespace-normal text-rose-700 dark:text-rose-300">
                {w.title} · {w.correct}/{w.total}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {breakdown.length > 0 && (
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            className="text-xs font-medium text-primary hover:underline"
            aria-expanded={showAll}
          >
            {showAll ? t('admin.emp.hideBreakdown') : t('admin.emp.showBreakdown')}
          </button>
          {showAll && (
            <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {breakdown.map((b) => (
                <li
                  key={b.slug}
                  className={cn(
                    'flex items-center justify-between gap-3 rounded-lg px-3 py-1.5 text-xs',
                    b.weak ? 'bg-rose-500/10 text-rose-700 dark:text-rose-300' : 'bg-muted/50',
                  )}
                >
                  <span className="truncate">{b.title}</span>
                  <span className="shrink-0 tabular-nums">
                    {b.correct}/{b.total}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {breakdown.length === 0 && <p className="mt-2 text-xs text-muted-foreground">{t('admin.emp.noBreakdown')}</p>}
    </div>
  )
}

function LanguageSection({
  kind,
  data,
  now,
  adminId,
  onAttemptGraded,
  onGrantAdded,
  onGrantRevoked,
}: {
  kind: 'english' | 'russian'
  data: DetailData
  now: number
  adminId: string | null
  onAttemptGraded: (attempt: TestAttempt, rubric: WritingRubric) => void
  onGrantAdded: (g: TestGrant) => void
  onGrantRevoked: (grantId: string) => void
}) {
  const { t, tf } = useLanguage()
  const fmt = useAdminFormat()
  const [busy, setBusy] = useState<string | null>(null)
  const attempts = data.attempts.filter((a) => a.kind === kind)
  const openGrants = data.grants.filter(
    (g) => g.kind === kind && !g.usedByAttemptId && Date.parse(g.expiresAt) > now,
  )

  async function handleGrant() {
    if (busy || !adminId) return
    setBusy('grant')
    try {
      const g = await grantRetake(data.profile.id, kind, adminId)
      onGrantAdded(g)
      toast.success(t('admin.grant.added'))
    } catch {
      toast.error(t('common.saveFailed'))
    } finally {
      setBusy(null)
    }
  }

  async function handleRevoke(grantId: string) {
    if (busy) return
    setBusy(grantId)
    try {
      await revokeGrant(grantId)
      onGrantRevoked(grantId)
      toast.success(t('admin.grant.revoked'))
    } catch {
      toast.error(t('common.saveFailed'))
    } finally {
      setBusy(null)
    }
  }

  return (
    <SectionCard
      title={t(KIND_KEY[kind])}
      icon={BookOpen}
      aside={
        attempts.length > 0 ? (
          <span className="text-xs text-muted-foreground">{tf('admin.emp.attempts', { n: attempts.length })}</span>
        ) : undefined
      }
    >
      <div className="mb-4 flex flex-col gap-2 rounded-xl bg-muted/40 p-3">
        {openGrants.map((g) => (
          <div key={g.id} className="flex flex-wrap items-center justify-between gap-2 text-sm">
            <span className="inline-flex items-center gap-2">
              <RotateCcw className="size-4 text-violet-500" />
              {tf('admin.grant.openUntil', { date: fmt.dateTime(g.expiresAt) })}
            </span>
            <Button variant="ghost" size="sm" onClick={() => void handleRevoke(g.id)} disabled={busy !== null}>
              {busy === g.id ? t('common.saving') : t('admin.grant.revoke')}
            </Button>
          </div>
        ))}
        {attempts.length === 0 ? (
          <p className="text-xs text-muted-foreground">{t('admin.grant.firstFree')}</p>
        ) : openGrants.length === 0 ? (
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs text-muted-foreground">{t('admin.grant.hint')}</p>
            <Button variant="outline" size="sm" onClick={() => void handleGrant()} disabled={busy !== null || !adminId} className="gap-1.5">
              <RotateCcw className="size-3.5" />
              {busy === 'grant' ? t('common.saving') : t('admin.grant.allow')}
            </Button>
          </div>
        ) : null}
      </div>

      {attempts.length === 0 ? (
        <EmptyNote>{t('admin.emp.noLanguage')}</EmptyNote>
      ) : (
        <div className="flex flex-col gap-3">
          {attempts.map((a, i) => (
            <LanguageAttemptCard
              key={a.id}
              attempt={a}
              previous={attempts[i + 1]}
              rubric={data.rubrics[a.id]}
              onGraded={onAttemptGraded}
            />
          ))}
        </div>
      )}
    </SectionCard>
  )
}

function LanguageAttemptCard({
  attempt,
  previous,
  rubric,
  onGraded,
}: {
  attempt: TestAttempt
  previous: TestAttempt | undefined
  rubric: WritingRubric | undefined
  onGraded: (attempt: TestAttempt, rubric: WritingRubric) => void
}) {
  const { t, tf } = useLanguage()
  const fmt = useAdminFormat()
  const scores = levelScores(attempt.details)
  const timedOut = attempt.details.timedOut === true || scores.some((s) => s.timedOut)
  const flags = honestyFlags(attempt, previous)

  return (
    <div className="rounded-xl border border-border/60 p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <LevelBadge level={attempt.level} />
          <span className="text-sm tabular-nums text-muted-foreground">
            {attempt.score}/{attempt.total}
          </span>
          {timedOut && (
            <Badge className="rounded-full bg-muted text-muted-foreground">
              <Timer />
              {t('admin.emp.timedOut')}
            </Badge>
          )}
          {flags.length > 0 && (
            <Badge className="rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300">
              <TriangleAlert />
              {t('admin.flag.check')}
            </Badge>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span>{fmt.dateTime(attempt.finishedAt)}</span>
          <span className="inline-flex items-center gap-1">
            <Timer className="size-3.5" />
            {fmt.duration(attempt.durationSec)}
          </span>
        </div>
      </div>

      {scores.length > 0 && (
        <p className="mt-2 text-sm tabular-nums">
          {scores.map((s, i) => (
            <span key={s.level}>
              {i > 0 && <span className="text-muted-foreground"> · </span>}
              <span className="font-medium">{s.level}</span> {s.score}/{s.total}
              {s.timedOut && <Timer className="ml-0.5 inline size-3 text-muted-foreground" />}
            </span>
          ))}
        </p>
      )}

      {flags.length > 0 && (
        <ul className="mt-3 flex flex-col gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/8 p-3">
          {flags.map((f) => (
            <li key={f.labelKey} className="text-xs">
              <span className="font-semibold text-amber-700 dark:text-amber-300">{tf(f.labelKey, f.vars)}</span>
              <span className="text-muted-foreground"> — {t(f.hintKey)}</span>
            </li>
          ))}
        </ul>
      )}

      {attempt.writing && <WritingReview attempt={attempt} rubric={rubric} onGraded={onGraded} />}
    </div>
  )
}

type Criterion = keyof WritingRubric
const CRITERIA: { key: Criterion; labelKey: TranslationKey }[] = [
  { key: 'task', labelKey: 'admin.rubric.task' },
  { key: 'tone', labelKey: 'admin.rubric.tone' },
  { key: 'grammar', labelKey: 'admin.rubric.grammar' },
  { key: 'vocabulary', labelKey: 'admin.rubric.vocabulary' },
]
const RUBRIC_STEPS = [0, 0.5, 1]

function WritingReview({
  attempt,
  rubric,
  onGraded,
}: {
  attempt: TestAttempt
  rubric: WritingRubric | undefined
  onGraded: (attempt: TestAttempt, rubric: WritingRubric) => void
}) {
  const { t, tf, tx } = useLanguage()
  const fmt = useAdminFormat()
  const writing = attempt.writing
  const prompt = writing ? getWritingPrompt(writing.promptId) : undefined
  const [values, setValues] = useState<Record<Criterion, number | null>>(() => ({
    task: rubric?.task ?? null,
    tone: rubric?.tone ?? null,
    grammar: rubric?.grammar ?? null,
    vocabulary: rubric?.vocabulary ?? null,
  }))
  const [comment, setComment] = useState(attempt.writingComment ?? '')
  const [pending, setPending] = useState(false)

  if (!writing) return null

  const complete = CRITERIA.every((c) => values[c.key] !== null)
  const current: WritingRubric | null = complete
    ? { task: values.task ?? 0, tone: values.tone ?? 0, grammar: values.grammar ?? 0, vocabulary: values.vocabulary ?? 0 }
    : null
  const liveScore = current ? rubricToScore(current) : null
  const graded = attempt.writingScore !== null
  const outOfRange = prompt && (writing.wordCount < prompt.minWords || writing.wordCount > prompt.maxWords)

  async function handleSave() {
    if (pending || !current || liveScore === null) return
    setPending(true)
    try {
      const updated = await gradeWriting(attempt.id, { score: liveScore, comment: comment.trim() || null, rubric: current })
      onGraded(updated, current)
      toast.success(t('admin.writing.saved'))
    } catch {
      toast.error(t('common.saveFailed'))
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="mt-4 border-t border-border/60 pt-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h4 className="flex items-center gap-2 text-sm font-semibold">
          <PenLine className="size-4 text-muted-foreground" />
          {t('admin.writing.title')}
          {prompt && <LevelBadge level={prompt.level} />}
        </h4>
        {graded ? (
          <Badge className="rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
            {tf('admin.writing.gradedScore', { score: attempt.writingScore ?? 0 })}
          </Badge>
        ) : (
          <Badge className="rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300">{t('admin.writing.pending')}</Badge>
        )}
      </div>

      {prompt ? (
        <div className="mb-3 rounded-lg bg-muted/40 p-3 text-sm">
          <p className="text-muted-foreground">{tx(prompt.instruction)}</p>
          <p className="mt-2 border-l-2 border-border pl-3 italic">{prompt.situation}</p>
        </div>
      ) : (
        <p className="mb-3 text-xs text-muted-foreground">{tf('admin.writing.unknownPrompt', { id: writing.promptId })}</p>
      )}

      <div className="rounded-lg border border-border/60 bg-background p-3 text-sm leading-relaxed whitespace-pre-wrap break-words">
        {writing.text || <span className="text-muted-foreground">{t('admin.writing.empty')}</span>}
      </div>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span className={cn(outOfRange && 'font-medium text-amber-600 dark:text-amber-400')}>
          {prompt
            ? tf('admin.writing.wordsRange', { n: writing.wordCount, min: prompt.minWords, max: prompt.maxWords })
            : tf('admin.writing.words', { n: writing.wordCount })}
        </span>
        <span>{tf('admin.writing.time', { time: fmt.duration(writing.durationSec) })}</span>
        {(writing.pasteAttempts ?? 0) > 0 && (
          <span className="font-medium text-amber-600 dark:text-amber-400">
            {tf('admin.writing.paste', { n: writing.pasteAttempts ?? 0 })}
          </span>
        )}
      </div>

      {graded && !rubric && (
        <p className="mt-4 rounded-lg bg-muted/50 px-3 py-2 text-xs text-muted-foreground">{t('admin.writing.rubricMissing')}</p>
      )}

      <div className="mt-4 flex flex-col gap-2.5">
        {CRITERIA.map((c) => (
          <div key={c.key} className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <span className="text-sm">{t(c.labelKey)}</span>
            <div className="inline-flex self-start rounded-lg bg-muted p-0.5" role="group" aria-label={t(c.labelKey)}>
              {RUBRIC_STEPS.map((step) => {
                const active = values[c.key] === step
                return (
                  <button
                    key={step}
                    type="button"
                    aria-pressed={active}
                    disabled={pending}
                    onClick={() => setValues((v) => ({ ...v, [c.key]: step }))}
                    className={cn(
                      'min-w-12 rounded-md px-3 py-1.5 text-sm font-medium tabular-nums transition-colors',
                      active ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {step === 0.5 ? '½' : step}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <Label htmlFor={`comment-${attempt.id}`}>{t('admin.writing.comment')}</Label>
        <Textarea
          id={`comment-${attempt.id}`}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength={1000}
          placeholder={t('admin.writing.commentPlaceholder')}
          disabled={pending}
          className="min-h-20"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm">
          {t('admin.writing.score')}:{' '}
          <span className="text-lg font-semibold tabular-nums">{liveScore === null ? '—' : liveScore}</span>
          <span className="text-muted-foreground"> / 5</span>
          {!complete && <span className="ml-2 text-xs text-muted-foreground">{t('admin.writing.rateAll')}</span>}
        </p>
        <Button onClick={() => void handleSave()} disabled={pending || !complete}>
          {pending ? t('common.saving') : graded ? t('admin.writing.update') : t('admin.writing.save')}
        </Button>
      </div>
    </div>
  )
}

function FinalAttemptRow({ attempt }: { attempt: TestAttempt }) {
  const { t, tf } = useLanguage()
  const fmt = useAdminFormat()
  const d = attempt.details
  const points = num(d.points)
  const rank = num(d.rank)
  const title = str(d.title)
  const pending = d.gradingStatus === 'pending'
  const sessionId = attempt.sessionId ?? str(d.sessionId)

  return (
    <li className="flex flex-col gap-3 rounded-xl border border-border/60 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <p className="truncate font-medium">{title || t('test.final')}</p>
        <p className="text-xs text-muted-foreground">{fmt.dateTime(attempt.finishedAt)}</p>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
          <span className={cn('text-lg font-semibold tabular-nums', percentTone(attempt.percent))}>{fmt.percent(attempt.percent)}</span>
          {points !== null && <span className="text-muted-foreground">{tf('admin.final.points', { n: points })}</span>}
          {rank !== null && <span className="text-muted-foreground">{tf('admin.final.rank', { n: rank })}</span>}
          {pending ? (
            <Badge className="rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300">{t('admin.grading')}</Badge>
          ) : (
            <Badge className="rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">{t('admin.final.graded')}</Badge>
          )}
        </div>
      </div>
      {sessionId && (
        <Button asChild variant="outline" size="sm" className="gap-1.5 self-start sm:self-center">
          <Link to={`/admin/final/${sessionId}/results`}>
            <ExternalLink className="size-3.5" />
            {t('admin.final.results')}
          </Link>
        </Button>
      )}
    </li>
  )
}

// ─── Activity ────────────────────────────────────────────────────────────────

const EVENT_ICON: Record<string, { icon: LucideIcon; className: string }> = {
  login: { icon: LogIn, className: 'bg-muted text-foreground' },
  lesson_view: { icon: BookOpen, className: 'bg-sky-500/12 text-sky-600 dark:text-sky-400' },
  lesson_complete: { icon: BookOpenCheck, className: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400' },
  test_start: { icon: Play, className: 'bg-muted text-foreground' },
  test_finish: { icon: ClipboardCheck, className: 'bg-violet-500/12 text-violet-600 dark:text-violet-400' },
  final_join: { icon: Trophy, className: 'bg-amber-500/15 text-amber-600 dark:text-amber-400' },
}

function ActivityTab({ activity }: { activity: ActivityRow[] }) {
  const { t, tf, tx } = useLanguage()
  const fmt = useAdminFormat()

  const groups = useMemo(() => {
    const out: { day: string; label: string; items: ActivityRow[] }[] = []
    for (const e of activity) {
      const d = new Date(e.createdAt)
      const day = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
      const last = out[out.length - 1]
      if (last && last.day === day) last.items.push(e)
      else out.push({ day, label: fmt.day(e.createdAt), items: [e] })
    }
    return out
  }, [activity, fmt])

  function describe(e: ActivityRow): { title: string; detail: string | null } {
    const m = e.meta
    const moduleTitle = () => {
      const slug = str(m.module)
      const mod = slug ? getModuleBySlug(slug) : undefined
      return mod ? tx(mod.title) : (slug ?? '—')
    }
    const kindLabel = () => {
      const k = str(m.kind) as TestKind | null
      return k && k in KIND_KEY ? t(KIND_KEY[k]) : (k ?? '—')
    }
    switch (e.event) {
      case 'login':
        return { title: t('admin.act.login'), detail: null }
      case 'lesson_view': {
        const sec = num(m.durationSec)
        return {
          title: tf('admin.act.lessonView', { module: moduleTitle() }),
          detail: sec !== null ? tf('admin.act.duration', { time: fmt.duration(sec) }) : null,
        }
      }
      case 'lesson_complete': {
        const score = num(m.score)
        const total = num(m.total)
        return {
          title: tf('admin.act.lessonComplete', { module: moduleTitle() }),
          detail: score !== null && total ? tf('admin.emp.check', { score, total }) : null,
        }
      }
      case 'test_start':
        return { title: tf('admin.act.testStart', { test: kindLabel() }), detail: null }
      case 'test_finish': {
        const score = num(m.score)
        const total = num(m.total)
        const level = str(m.level)
        const parts: string[] = []
        if (score !== null && total) parts.push(`${score}/${total} · ${Math.round((score / total) * 100)}%`)
        if (level) parts.push(tf('admin.act.level', { level }))
        return { title: tf('admin.act.testFinish', { test: kindLabel() }), detail: parts.join(' · ') || null }
      }
      case 'final_join':
        return { title: t('admin.act.finalJoin'), detail: str(m.title) }
      default:
        return { title: String(e.event), detail: null }
    }
  }

  if (activity.length === 0)
    return (
      <SectionCard title={t('admin.emp.tabActivity')} icon={Timer}>
        <EmptyNote>{t('admin.emp.noActivity')}</EmptyNote>
      </SectionCard>
    )

  return (
    <SectionCard
      title={t('admin.emp.tabActivity')}
      icon={Timer}
      aside={<span className="text-xs text-muted-foreground">{tf('admin.emp.activityLimit', { n: TIMELINE_LIMIT })}</span>}
    >
      <div className="flex flex-col gap-6">
        {groups.map((g) => (
          <div key={g.day}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{g.label}</p>
            <ol className="relative flex flex-col gap-3 border-l border-border/60 pl-5">
              {g.items.map((e) => {
                const { title, detail } = describe(e)
                const meta = EVENT_ICON[e.event] ?? EVENT_ICON.login
                return (
                  <li key={e.id} className="relative">
                    <span
                      className={cn(
                        'absolute -left-[33px] top-0 flex size-6 items-center justify-center rounded-full ring-4 ring-card',
                        meta.className,
                      )}
                    >
                      <meta.icon className="size-3.5" />
                    </span>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <p className="text-sm">{title}</p>
                      <time className="text-xs tabular-nums text-muted-foreground" dateTime={e.createdAt}>
                        {fmt.time(e.createdAt)}
                      </time>
                    </div>
                    {detail && <p className="text-xs text-muted-foreground">{detail}</p>}
                  </li>
                )
              })}
            </ol>
          </div>
        ))}
      </div>
    </SectionCard>
  )
}
