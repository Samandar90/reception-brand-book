import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  Award,
  Download,
  GraduationCap,
  Moon,
  PenLine,
  RotateCcw,
  TrendingDown,
  UserPlus,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { SearchInput } from '@/components/shared/SearchInput'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations'
import { fetchEmployeeOverview } from '@/lib/adminApi'
import { TOTAL_MODULES } from '@/lib/constants'
import type { EmployeeOverview } from '@/types'
import {
  EASE,
  ErrorState,
  INACTIVE_DAYS,
  LEVEL_BAR_CLASS,
  LEVELS,
  LevelBadge,
  LoadingState,
  STATUS_KEY,
  STATUS_ORDER,
  StatusBadge,
  daysSince,
  employeeStatus,
  levelIndex,
  percentTone,
  useAdminFormat,
  type AdminFormat,
  type EmployeeStatus,
} from './adminKit'

type SortKey = 'name' | 'status' | 'modules' | 'knowledge' | 'english' | 'russian' | 'final' | 'lastActive'
type SortDir = 'asc' | 'desc'
type StatusFilter = 'all' | EmployeeStatus

type FlagId = 'idle' | 'writing' | 'lowKnowledge' | 'grant'

interface Flag {
  id: FlagId
  vars?: Record<string, string | number>
}

interface Row {
  r: EmployeeOverview
  status: EmployeeStatus
  idleDays: number | null
  flags: Flag[]
}

const STATUSES: EmployeeStatus[] = ['notStarted', 'learning', 'testsDone', 'certified']

const FLAG_DEFS: Record<FlagId, { icon: LucideIcon; className: string; labelKey: TranslationKey; legendKey: TranslationKey }> = {
  idle: { icon: Moon, className: 'text-amber-500', labelKey: 'admin.ov.flagIdle', legendKey: 'admin.ov.legendIdle' },
  writing: { icon: PenLine, className: 'text-sky-500', labelKey: 'admin.ov.flagWriting', legendKey: 'admin.ov.legendWriting' },
  lowKnowledge: {
    icon: TrendingDown,
    className: 'text-rose-500',
    labelKey: 'admin.ov.flagLowKnowledge',
    legendKey: 'admin.ov.legendLowKnowledge',
  },
  grant: { icon: RotateCcw, className: 'text-violet-500', labelKey: 'admin.ov.flagGrant', legendKey: 'admin.ov.legendGrant' },
}
const FLAG_IDS = Object.keys(FLAG_DEFS) as FlagId[]

function flagsOf(r: EmployeeOverview, idleDays: number | null): Flag[] {
  const flags: Flag[] = []
  if (r.isActive && idleDays !== null && idleDays >= INACTIVE_DAYS) flags.push({ id: 'idle', vars: { n: idleDays } })
  if (r.ungradedWriting > 0) flags.push({ id: 'writing', vars: { n: r.ungradedWriting } })
  if (r.knowledgeBest !== null && r.knowledgeBest < 60)
    flags.push({ id: 'lowKnowledge', vars: { n: Math.round(r.knowledgeBest) } })
  if (r.openGrants > 0) flags.push({ id: 'grant' })
  return flags
}

function sortValue(row: Row, key: SortKey): number | string | null {
  const r = row.r
  switch (key) {
    case 'name':
      return r.fullName.toLocaleLowerCase()
    case 'status':
      return STATUS_ORDER[row.status]
    case 'modules':
      return r.modulesCompleted
    case 'knowledge':
      return r.knowledgeBest
    case 'english':
      return levelIndex(r.englishLevel)
    case 'russian':
      return levelIndex(r.russianLevel)
    case 'final':
      return r.finalPercent
    case 'lastActive':
      return r.lastActiveAt ? Date.parse(r.lastActiveAt) : null
  }
}

function compareRows(a: Row, b: Row, key: SortKey, dir: SortDir): number {
  const va = sortValue(a, key)
  const vb = sortValue(b, key)
  // Empty values always go last, whatever the direction.
  if (va === null && vb === null) return a.r.fullName.localeCompare(b.r.fullName)
  if (va === null) return 1
  if (vb === null) return -1
  const cmp = typeof va === 'string' && typeof vb === 'string' ? va.localeCompare(vb) : Number(va) - Number(vb)
  if (cmp === 0) return a.r.fullName.localeCompare(b.r.fullName)
  return dir === 'asc' ? cmp : -cmp
}

export default function AdminOverview() {
  const { t, tf } = useLanguage()
  const fmt = useAdminFormat()
  const navigate = useNavigate()
  const [rows, setRows] = useState<EmployeeOverview[] | null>(null)
  const [error, setError] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)
  const [now, setNow] = useState(() => Date.now())
  const [showAll, setShowAll] = useState(false)
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [sort, setSort] = useState<{ key: SortKey; dir: SortDir }>({ key: 'name', dir: 'asc' })

  useEffect(() => {
    let cancelled = false
    fetchEmployeeOverview()
      .then((data) => {
        if (cancelled) return
        setRows(data)
        setNow(Date.now())
        setError(false)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
    return () => {
      cancelled = true
    }
  }, [reloadKey])

  function retry() {
    setError(false)
    setRows(null)
    setReloadKey((k) => k + 1)
  }

  const all = useMemo<Row[]>(
    () =>
      (rows ?? []).map((r) => {
        const idleDays = daysSince(r.lastActiveAt ?? r.createdAt, now)
        return { r, status: employeeStatus(r), idleDays, flags: flagsOf(r, idleDays) }
      }),
    [rows, now],
  )

  const activeEmployees = useMemo(() => all.filter((x) => x.r.role === 'employee' && x.r.isActive), [all])
  const hasEmployees = useMemo(() => all.some((x) => x.r.role === 'employee'), [all])

  const kpi = useMemo(() => {
    const tested = activeEmployees.filter((x) => x.r.knowledgeBest !== null)
    const avg = tested.length
      ? tested.reduce((sum, x) => sum + (x.r.knowledgeBest ?? 0), 0) / tested.length
      : null
    const toGrade = all.filter((x) => x.r.ungradedWriting > 0)
    return {
      active: activeEmployees.length,
      certified: activeEmployees.filter((x) => x.status === 'certified').length,
      avgKnowledge: avg,
      tested: tested.length,
      ungraded: toGrade.reduce((sum, x) => sum + x.r.ungradedWriting, 0),
      firstToGrade: toGrade[0]?.r.id ?? null,
      idle: activeEmployees.filter((x) => x.idleDays !== null && x.idleDays >= INACTIVE_DAYS).length,
    }
  }, [all, activeEmployees])

  const distribution = useMemo(() => {
    const count = (pick: (r: EmployeeOverview) => string | null) => {
      const counts: Record<string, number> = { none: 0 }
      for (const l of LEVELS) counts[l] = 0
      for (const x of activeEmployees) {
        const level = pick(x.r)
        if (level && level in counts) counts[level] += 1
        else counts.none += 1
      }
      return counts
    }
    return { en: count((r) => r.englishLevel), ru: count((r) => r.russianLevel) }
  }, [activeEmployees])

  const visible = useMemo(() => {
    const q = query.trim().toLocaleLowerCase()
    return all
      .filter((x) => showAll || (x.r.role === 'employee' && x.r.isActive))
      .filter((x) => statusFilter === 'all' || x.status === statusFilter)
      .filter(
        (x) =>
          !q ||
          x.r.fullName.toLocaleLowerCase().includes(q) ||
          x.r.login.toLocaleLowerCase().includes(q) ||
          (x.r.position ?? '').toLocaleLowerCase().includes(q),
      )
      .sort((a, b) => compareRows(a, b, sort.key, sort.dir))
  }, [all, showAll, statusFilter, query, sort])

  // Tooltips need hover, so the icons are also explained in a legend (phones have no hover).
  const legend = useMemo(() => FLAG_IDS.filter((id) => visible.some((x) => x.flags.some((f) => f.id === id))), [visible])

  function toggleSort(key: SortKey) {
    setSort((prev) =>
      prev.key === key ? { key, dir: prev.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: key === 'name' ? 'asc' : 'desc' },
    )
  }

  function exportCsv() {
    const header = [
      t('admin.csv.name'),
      t('login.loginLabel'),
      t('admin.csv.position'),
      t('admin.csv.role'),
      t('admin.csv.active'),
      t('common.status'),
      t('admin.csv.modules'),
      t('admin.csv.knowledgeBest'),
      t('admin.csv.knowledgeLast'),
      t('test.english'),
      t('test.russian'),
      t('admin.csv.final'),
      t('admin.csv.finalGrading'),
      t('admin.csv.lastActive'),
      t('admin.csv.writingToGrade'),
      t('admin.csv.openGrants'),
    ]
    const round = (v: number | null) => (v === null ? '' : Math.round(v))
    const lines = visible.map(({ r, status }) => [
      r.fullName,
      r.login,
      r.position ?? '',
      r.role === 'admin' ? t('common.admin') : t('common.employee'),
      r.isActive ? t('common.yes') : t('common.no'),
      t(STATUS_KEY[status]),
      `${r.modulesCompleted}/${TOTAL_MODULES}`,
      round(r.knowledgeBest),
      round(r.knowledgeLast),
      r.englishLevel ?? '',
      r.russianLevel ?? '',
      round(r.finalPercent),
      r.finalGradingStatus === 'pending' ? t('admin.grading') : '',
      r.lastActiveAt ? fmt.dateTime(r.lastActiveAt) : '',
      r.ungradedWriting,
      r.openGrants,
    ])
    const cell = (v: string | number) => {
      let s = String(v)
      // Neutralise spreadsheet formulas (including the tab / CR prefixes some apps also treat as formulas).
      if (typeof v === 'string' && /^[=+\-@\t\r]/.test(s)) s = `'${s}`
      return /[";\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
    }
    // ';' is the list separator Excel expects with Russian/Uzbek regional settings.
    const csv = '﻿' + [header, ...lines].map((line) => line.map(cell).join(';')).join('\r\n')
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
    const a = document.createElement('a')
    a.href = url
    a.download = `hotel-academy-employees-${new Date().toISOString().slice(0, 10)}.csv`
    document.body.appendChild(a)
    a.click()
    a.remove()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  if (error) return <ErrorState onRetry={retry} />
  if (!rows) return <LoadingState />

  if (!hasEmployees) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-card px-6 py-14 text-center shadow-premium"
      >
        <div className="flex size-12 items-center justify-center rounded-2xl gradient-accent">
          <Users className="size-6 text-white" />
        </div>
        <h2 className="text-lg font-semibold tracking-tight">{t('admin.ov.emptyTitle')}</h2>
        <p className="max-w-md text-sm text-muted-foreground">{t('admin.ov.emptyBody')}</p>
        <Button asChild className="mt-2 gap-2">
          <Link to="/admin/accounts">
            <UserPlus className="size-4" />
            {t('admin.ov.createAccounts')}
          </Link>
        </Button>
      </motion.div>
    )
  }

  const total = activeEmployees.length

  return (
    <div className="flex flex-col gap-6">
      <section className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
        <Kpi icon={Users} label={t('admin.ov.kpiActive')} value={kpi.active} accent index={0} />
        <Kpi
          icon={Award}
          label={t('admin.ov.kpiCertified')}
          value={kpi.certified}
          hint={total ? `${Math.round((kpi.certified / total) * 100)}%` : undefined}
          tone="emerald"
          index={1}
        />
        <Kpi
          icon={GraduationCap}
          label={t('admin.ov.kpiKnowledge')}
          value={fmt.percent(kpi.avgKnowledge)}
          hint={tf('admin.ov.kpiKnowledgeHint', { n: kpi.tested })}
          index={2}
        />
        <Kpi
          icon={PenLine}
          label={t('admin.ov.kpiWriting')}
          value={kpi.ungraded}
          hint={kpi.firstToGrade ? t('admin.ov.kpiWritingOpen') : undefined}
          to={kpi.firstToGrade ? `/admin/employees/${kpi.firstToGrade}?tab=tests` : undefined}
          tone={kpi.ungraded > 0 ? 'amber' : undefined}
          index={3}
        />
        <Kpi
          icon={Moon}
          label={tf('admin.ov.kpiIdle', { n: INACTIVE_DAYS })}
          value={kpi.idle}
          tone={kpi.idle > 0 ? 'rose' : undefined}
          index={4}
          className="col-span-2 lg:col-span-1"
        />
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <LevelDistribution title={t('test.english')} counts={distribution.en} total={total} />
        <LevelDistribution title={t('test.russian')} counts={distribution.ru} total={total} />
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-lg font-semibold tracking-tight">{t('admin.ov.employees')}</h2>
          <Button
            variant="outline"
            onClick={exportCsv}
            disabled={visible.length === 0}
            title={t('admin.ov.exportCsvHint')}
            className="gap-2 self-start"
          >
            <Download className="size-4" />
            {t('admin.ov.exportCsv')}
          </Button>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <SearchInput value={query} onChange={setQuery} className="sm:w-72" />
          <Select value={statusFilter} onValueChange={(v) => setStatusFilter(v as StatusFilter)}>
            <SelectTrigger className="h-11 w-full sm:w-52" aria-label={t('common.status')}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="all">{t('admin.ov.allStatuses')}</SelectItem>
              {STATUSES.map((s) => (
                <SelectItem key={s} value={s}>
                  {t(STATUS_KEY[s])}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center gap-2.5 sm:ml-auto">
            <Switch id="ov-show-all" checked={showAll} onCheckedChange={setShowAll} />
            <Label htmlFor="ov-show-all" className="cursor-pointer font-normal text-muted-foreground">
              {t('admin.ov.showAll')}
            </Label>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-premium">
          {visible.length === 0 ? (
            <p className="px-6 py-12 text-center text-sm text-muted-foreground">{t('common.noResults')}</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <SortHead k="name" label={t('admin.ov.colName')} sort={sort} onSort={toggleSort} />
                  <SortHead k="status" label={t('common.status')} sort={sort} onSort={toggleSort} />
                  <SortHead k="modules" label={t('admin.ov.colModules')} sort={sort} onSort={toggleSort} />
                  <SortHead k="knowledge" label={t('admin.ov.colKnowledge')} sort={sort} onSort={toggleSort} />
                  <SortHead k="english" label="EN" sort={sort} onSort={toggleSort} />
                  <SortHead k="russian" label="RU" sort={sort} onSort={toggleSort} />
                  <SortHead k="final" label={t('admin.ov.colFinal')} sort={sort} onSort={toggleSort} />
                  <SortHead k="lastActive" label={t('admin.ov.colLastActive')} sort={sort} onSort={toggleSort} />
                  <TableHead>
                    <span className="sr-only">{t('admin.ov.colAttention')}</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {visible.map((row) => (
                  <EmployeeRow
                    key={row.r.id}
                    row={row}
                    now={now}
                    fmt={fmt}
                    onOpen={() => navigate(`/admin/employees/${row.r.id}`)}
                  />
                ))}
              </TableBody>
            </Table>
          )}
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          {legend.length > 0 && (
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
              <li className="font-medium text-foreground">{t('admin.ov.colAttention')}:</li>
              {legend.map((id) => {
                const def = FLAG_DEFS[id]
                return (
                  <li key={id} className="inline-flex items-center gap-1.5">
                    <def.icon className={cn('size-3.5 shrink-0', def.className)} aria-hidden />
                    {tf(def.legendKey, { n: INACTIVE_DAYS })}
                  </li>
                )
              })}
            </ul>
          )}
          <p className="shrink-0 text-xs text-muted-foreground sm:ml-auto">{tf('admin.ov.shown', { n: visible.length })}</p>
        </div>
      </section>
    </div>
  )
}

// ─── Pieces ──────────────────────────────────────────────────────────────────

const TONE_CLASS = {
  emerald: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400',
  amber: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
  rose: 'bg-rose-500/12 text-rose-600 dark:text-rose-400',
} as const

function Kpi({
  icon: Icon,
  label,
  value,
  hint,
  to,
  tone,
  accent,
  index,
  className,
}: {
  icon: LucideIcon
  label: string
  value: ReactNode
  hint?: string
  to?: string
  tone?: keyof typeof TONE_CLASS
  accent?: boolean
  index: number
  className?: string
}) {
  const body = (
    <>
      <div
        className={cn(
          'mb-3 flex size-10 items-center justify-center rounded-xl',
          accent ? 'gradient-accent' : tone ? TONE_CLASS[tone] : 'bg-muted',
        )}
      >
        <Icon className={cn('size-5', accent ? 'text-white' : !tone && 'text-foreground')} strokeWidth={2} />
      </div>
      <p className="text-2xl font-semibold tracking-tight tabular-nums">{value}</p>
      <p className="mt-0.5 text-sm leading-snug text-muted-foreground">{label}</p>
      {hint && <p className={cn('mt-1 text-xs', to ? 'font-medium text-primary' : 'text-muted-foreground')}>{hint}</p>}
    </>
  )
  const cls = 'block h-full rounded-2xl border border-border/60 bg-card p-4 shadow-premium sm:p-5'
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: EASE }}
      className={className}
    >
      {to ? (
        <Link to={to} className={cn(cls, 'transition-colors hover:border-primary/30')}>
          {body}
        </Link>
      ) : (
        <div className={cls}>{body}</div>
      )}
    </motion.div>
  )
}

function LevelDistribution({ title, counts, total }: { title: string; counts: Record<string, number>; total: number }) {
  const { t } = useLanguage()
  const items: { key: string; label: string; bar: string }[] = [
    ...LEVELS.map((l) => ({ key: l, label: l, bar: LEVEL_BAR_CLASS[l] })),
    { key: 'none', label: t('admin.ov.notTaken'), bar: 'bg-muted-foreground/40' },
  ]
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-premium">
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h3 className="font-semibold tracking-tight">{title}</h3>
        <span className="text-xs text-muted-foreground">{t('admin.ov.levelsHint')}</span>
      </div>
      <ul className="flex flex-col gap-2">
        {items.map((item) => {
          const n = counts[item.key] ?? 0
          const pct = total ? (n / total) * 100 : 0
          return (
            <li key={item.key} className="grid grid-cols-[6.5rem_1fr_2rem] items-center gap-3 text-sm">
              <span className={cn('truncate', item.key === 'none' ? 'text-muted-foreground' : 'font-medium tabular-nums')}>
                {item.label}
              </span>
              <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                <motion.div
                  className={cn('h-full rounded-full', item.bar)}
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.6, ease: EASE }}
                />
              </div>
              <span className="text-right tabular-nums text-muted-foreground">{n}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function SortHead({
  k,
  label,
  sort,
  onSort,
}: {
  k: SortKey
  label: string
  sort: { key: SortKey; dir: SortDir }
  onSort: (k: SortKey) => void
}) {
  const active = sort.key === k
  const Icon = !active ? ArrowUpDown : sort.dir === 'asc' ? ArrowUp : ArrowDown
  return (
    <TableHead aria-sort={active ? (sort.dir === 'asc' ? 'ascending' : 'descending') : 'none'}>
      <button
        type="button"
        onClick={() => onSort(k)}
        className={cn(
          'inline-flex items-center gap-1 uppercase tracking-wide transition-colors hover:text-foreground',
          active && 'text-foreground',
        )}
      >
        {label}
        <Icon className={cn('size-3', !active && 'opacity-40')} />
      </button>
    </TableHead>
  )
}

function EmployeeRow({ row, now, fmt, onOpen }: { row: Row; now: number; fmt: AdminFormat; onOpen: () => void }) {
  const { t, tf } = useLanguage()
  const { r, status, flags } = row

  const modulesPct = Math.min(100, (r.modulesCompleted / TOTAL_MODULES) * 100)

  return (
    <TableRow
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen()
        }
      }}
      className="cursor-pointer focus-visible:bg-muted/60 focus-visible:outline-none"
    >
      <TableCell>
        <div className="min-w-44 max-w-64">
          <div className="flex items-center gap-2">
            <span className="min-w-0 truncate font-medium">{r.fullName}</span>
            {!r.isActive && (
              <Badge variant="secondary" className="rounded-full text-[11px]">
                {t('admin.inactive')}
              </Badge>
            )}
            {r.role === 'admin' && (
              <Badge variant="outline" className="rounded-full text-[11px]">
                {t('common.admin')}
              </Badge>
            )}
          </div>
          <p className="truncate text-xs text-muted-foreground">{r.position || `@${r.login}`}</p>
        </div>
      </TableCell>
      <TableCell>
        <StatusBadge status={status} />
      </TableCell>
      <TableCell>
        <div className="flex w-24 flex-col gap-1">
          <span className="text-sm tabular-nums">
            {r.modulesCompleted}/{TOTAL_MODULES}
          </span>
          <div className="h-1 overflow-hidden rounded-full bg-muted">
            <div
              className={cn('h-full rounded-full', modulesPct >= 100 ? 'bg-emerald-500' : 'gradient-accent')}
              style={{ width: `${modulesPct}%` }}
            />
          </div>
        </div>
      </TableCell>
      <TableCell className={cn('font-medium tabular-nums', percentTone(r.knowledgeBest))}>
        {fmt.percent(r.knowledgeBest)}
      </TableCell>
      <TableCell>
        <LevelBadge level={r.englishLevel} />
      </TableCell>
      <TableCell>
        <LevelBadge level={r.russianLevel} />
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-1.5">
          <span className="tabular-nums">{fmt.percent(r.finalPercent)}</span>
          {r.finalGradingStatus === 'pending' && (
            <Badge className="rounded-full bg-amber-500/15 text-[11px] text-amber-700 dark:text-amber-300">
              {t('admin.grading')}
            </Badge>
          )}
        </div>
      </TableCell>
      <TableCell className="text-muted-foreground">
        <span title={r.lastActiveAt ? fmt.dateTime(r.lastActiveAt) : undefined}>{fmt.relative(r.lastActiveAt, now)}</span>
      </TableCell>
      <TableCell>
        <div className="flex min-w-16 items-center gap-1.5">
          {flags.map((f) => {
            const def = FLAG_DEFS[f.id]
            const label = f.vars ? tf(def.labelKey, f.vars) : t(def.labelKey)
            return (
              <Tooltip key={f.id}>
                <TooltipTrigger asChild>
                  <span className="inline-flex" aria-label={label} role="img">
                    <def.icon className={cn('size-4', def.className)} />
                  </span>
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            )
          })}
        </div>
      </TableCell>
    </TableRow>
  )
}
