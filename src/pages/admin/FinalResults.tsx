import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Ban,
  CalendarDays,
  ClipboardCheck,
  Download,
  ListChecks,
  LoaderCircle,
  MonitorPlay,
  PenLine,
  RefreshCw,
  SearchX,
  Target,
  TriangleAlert,
  Users,
} from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { StatCard } from '@/components/shared/StatCard'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import { supabase } from '@/lib/supabase'
import { ATTEMPT_COLUMNS, mapAttempt, type TestAttemptRow } from '@/lib/api'
import { LIVE_STATUSES, fetchAnswers, fetchParticipants, fetchSession, gradeOpenAnswer } from '@/lib/finalApi'
import { getFinalQuestion } from '@/data/final'
import { getModuleBySlug } from '@/data/modules'
import type {
  FinalAnswer,
  FinalChoiceQuestion,
  FinalOpenQuestion,
  FinalParticipant,
  FinalSession,
  Language,
  TestAttempt,
} from '@/types'

const EASE = [0.16, 1, 0.3, 1] as const
const LETTERS = ['A', 'B', 'C', 'D'] as const
const SCORES = [0, 1, 2, 3, 4, 5] as const
const LOCALES: Record<Language, string> = { ru: 'ru-RU', uz: 'uz-Latn-UZ', en: 'en-GB' }

function formatDate(iso: string | null, lang: Language): string {
  if (!iso) return '—'
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  try {
    return d.toLocaleString(LOCALES[lang], { dateStyle: 'medium', timeStyle: 'short' })
  } catch {
    return d.toLocaleString()
  }
}

async function fetchFinalAttempts(sessionId: string): Promise<TestAttempt[]> {
  const { data, error } = await supabase
    .from('test_attempts')
    .select(ATTEMPT_COLUMNS)
    .eq('session_id', sessionId)
    .eq('kind', 'final')
  if (error) throw error
  return (data as TestAttemptRow[]).map(mapAttempt)
}

type GradingStatus = 'graded' | 'pending' | 'none'

interface ResultRow {
  userId: string
  name: string
  rank: number
  points: number
  correct: number
  askedChoice: number
  percent: number
  grading: GradingStatus
  incomplete: boolean
}

function num(v: unknown, fallback = 0): number {
  const n = typeof v === 'number' ? v : typeof v === 'string' ? Number(v) : NaN
  return Number.isFinite(n) ? n : fallback
}

function toResultRow(a: TestAttempt, names: Map<string, string>): ResultRow {
  const d = a.details
  const askedOpen = num(d.askedOpen)
  return {
    userId: a.userId,
    name: names.get(a.userId) ?? '—',
    rank: num(d.rank, Number.MAX_SAFE_INTEGER),
    points: num(d.points),
    correct: a.score,
    askedChoice: num(d.askedChoice, a.total),
    percent: a.percent,
    grading: askedOpen === 0 ? 'none' : d.gradingStatus === 'graded' ? 'graded' : 'pending',
    incomplete: d.incomplete === true,
  }
}

/** Quote a CSV cell; neutralise spreadsheet formulas in free text. */
function csvCell(value: string | number): string {
  let s = String(value)
  if (typeof value === 'string' && /^[=+\-@\t\r]/.test(s)) s = `'${s}`
  return /[";\r\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

function pctTone(pct: number): string {
  if (pct >= 75) return 'text-emerald-600 dark:text-emerald-400'
  if (pct >= 50) return 'text-amber-600 dark:text-amber-400'
  return 'text-rose-600 dark:text-rose-400'
}

function barTone(pct: number): string {
  if (pct >= 75) return 'bg-emerald-500'
  if (pct >= 50) return 'bg-amber-500'
  return 'bg-rose-500'
}

// ─── Pieces ──────────────────────────────────────────────────────────────────

function Section({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: EASE }}
      className={cn('rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:p-6', className)}
    >
      {children}
    </motion.section>
  )
}

function GradingBadge({ status }: { status: GradingStatus }) {
  const { t } = useLanguage()
  if (status === 'none') return <span className="text-xs text-muted-foreground">{t('finalAdmin.r.notRequired')}</span>
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        status === 'graded'
          ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
          : 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
      )}
    >
      {status === 'graded' ? t('finalAdmin.r.graded') : t('finalAdmin.r.pending')}
    </span>
  )
}

function ScoreControl({
  label,
  value,
  saving,
  onChange,
}: {
  label: string
  value: number | null
  saving: boolean
  onChange: (score: number) => void
}) {
  const { tf } = useLanguage()
  return (
    <div role="radiogroup" aria-label={label} aria-busy={saving} className="flex items-center gap-1.5">
      {SCORES.map((s) => {
        const active = value === s
        return (
          <button
            key={s}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={tf('finalAdmin.r.scoreAria', { score: s })}
            disabled={saving}
            onClick={() => onChange(s)}
            className={cn(
              'flex size-9 items-center justify-center rounded-lg border text-sm font-semibold tabular-nums transition-colors disabled:cursor-wait',
              active
                ? 'gradient-accent border-transparent text-white shadow-premium'
                : 'border-border/60 bg-background text-muted-foreground hover:border-primary/30 hover:text-foreground dark:bg-input/30',
              saving && !active && 'opacity-50',
            )}
          >
            {s}
          </button>
        )
      })}
      <span className="flex size-5 items-center justify-center">
        {saving && <LoaderCircle className="size-4 animate-spin text-muted-foreground" />}
      </span>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FinalResults() {
  const { id = '' } = useParams<{ id: string }>()
  const { t, tf, tx, lang } = useLanguage()

  const [state, setState] = useState<'loading' | 'ready' | 'error' | 'notFound'>('loading')
  const [reloadKey, setReloadKey] = useState(0)
  const [session, setSession] = useState<FinalSession | null>(null)
  const [participants, setParticipants] = useState<FinalParticipant[]>([])
  const [answers, setAnswers] = useState<FinalAnswer[]>([])
  const [attempts, setAttempts] = useState<TestAttempt[]>([])
  const [saving, setSaving] = useState<ReadonlySet<string>>(() => new Set())
  const savingRef = useRef(new Set<string>())
  const attemptsSeq = useRef(0)

  useEffect(() => {
    if (!id) {
      setState('notFound')
      return
    }
    let active = true
    setState('loading')
    Promise.all([fetchSession(id), fetchParticipants(id), fetchAnswers(id), fetchFinalAttempts(id)])
      .then(([s, p, a, at]) => {
        if (!active) return
        if (!s) {
          setState('notFound')
          return
        }
        setSession(s)
        setParticipants(p)
        setAnswers(a)
        setAttempts(at)
        setState('ready')
      })
      .catch(() => {
        if (active) setState('error')
      })
    return () => {
      active = false
    }
  }, [id, reloadKey])

  const refreshAttempts = useCallback(async () => {
    const seq = ++attemptsSeq.current
    try {
      const rows = await fetchFinalAttempts(id)
      if (seq === attemptsSeq.current) setAttempts(rows)
    } catch {
      // the grade itself is saved; percentages will refresh on the next load
    }
  }, [id])

  const names = useMemo(() => new Map(participants.map((p) => [p.userId, p.displayName || '—'])), [participants])

  const rows = useMemo(
    () =>
      attempts
        .map((a) => toResultRow(a, names))
        .sort((a, b) => a.rank - b.rank || b.points - a.points || a.name.localeCompare(b.name)),
    [attempts, names],
  )

  const askedIds = useMemo(() => (session ? session.questionIds.slice(0, session.askedCount) : []), [session])

  const openAsked = useMemo(
    () =>
      askedIds
        .map((qid) => getFinalQuestion(qid))
        .filter((q): q is FinalOpenQuestion => q?.type === 'open'),
    [askedIds],
  )

  const answersByKey = useMemo(() => {
    const map = new Map<string, FinalAnswer>()
    for (const a of answers) map.set(`${a.questionId}|${a.userId}`, a)
    return map
  }, [answers])

  const sortedParticipants = useMemo(
    () => [...participants].sort((a, b) => (a.displayName || '').localeCompare(b.displayName || '')),
    [participants],
  )

  const choiceStats = useMemo(() => {
    const list = askedIds
      .map((qid) => getFinalQuestion(qid))
      .filter((q): q is FinalChoiceQuestion => q?.type === 'choice')
      .map((q) => {
        const qa = answers.filter((a) => a.questionId === q.id && a.answerIndex !== null)
        const correct = qa.filter((a) => a.isCorrect === true).length
        const wrongCounts = [0, 0, 0, 0]
        for (const a of qa) {
          if (a.isCorrect !== true && a.answerIndex !== null && a.answerIndex >= 0 && a.answerIndex < 4) {
            wrongCounts[a.answerIndex]++
          }
        }
        let topWrong = -1
        for (let i = 0; i < 4; i++) {
          if (i === q.correctIndex || wrongCounts[i] === 0) continue
          if (topWrong === -1 || wrongCounts[i] > wrongCounts[topWrong]) topWrong = i
        }
        return {
          question: q,
          answered: qa.length,
          correct,
          pct: qa.length > 0 ? Math.round((correct / qa.length) * 100) : null,
          topWrong,
          topWrongCount: topWrong >= 0 ? wrongCounts[topWrong] : 0,
        }
      })
    return list.sort((a, b) => (a.pct ?? 101) - (b.pct ?? 101))
  }, [askedIds, answers])

  const averagePercent = rows.length > 0 ? Math.round(rows.reduce((s, r) => s + r.percent, 0) / rows.length) : null

  async function grade(userId: string, questionId: string, score: number) {
    const key = `${questionId}|${userId}`
    if (savingRef.current.has(key)) return
    const previous = answersByKey.get(key)
    if (!previous || previous.openScore === score) return

    savingRef.current.add(key)
    setSaving(new Set(savingRef.current))
    setAnswers((list) =>
      list.map((a) => (a.userId === userId && a.questionId === questionId ? { ...a, openScore: score } : a)),
    )
    try {
      await gradeOpenAnswer(id, userId, questionId, score)
      void refreshAttempts()
    } catch {
      setAnswers((list) =>
        list.map((a) =>
          a.userId === userId && a.questionId === questionId ? { ...a, openScore: previous.openScore } : a,
        ),
      )
      toast.error(t('common.saveFailed'))
    } finally {
      savingRef.current.delete(key)
      setSaving(new Set(savingRef.current))
    }
  }

  function exportCsv() {
    if (!session) return
    const header = [
      t('finalAdmin.col.rank'),
      t('finalAdmin.col.name'),
      t('finalAdmin.col.points'),
      t('finalAdmin.r.correct'),
      t('finalAdmin.r.askedShort'),
      t('finalAdmin.r.percent'),
      t('finalAdmin.r.grading'),
    ]
    const gradingLabel = (g: GradingStatus) =>
      g === 'graded' ? t('finalAdmin.r.graded') : g === 'pending' ? t('finalAdmin.r.pending') : t('finalAdmin.r.notRequired')
    const lines = rows.map((r, i) => [
      r.rank === Number.MAX_SAFE_INTEGER ? i + 1 : r.rank,
      r.name,
      r.points,
      r.correct,
      r.askedChoice,
      Math.round(r.percent),
      gradingLabel(r.grading),
    ])
    const csv = '﻿' + [header, ...lines].map((cols) => cols.map(csvCell).join(';')).join('\r\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    const date = (session.finishedAt ?? session.createdAt).slice(0, 10)
    link.href = url
    link.download = `final-results-${date}.csv`
    document.body.appendChild(link)
    link.click()
    link.remove()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  const backLink = (
    <Button asChild variant="ghost" size="sm" className="-ml-2 w-fit gap-1.5 text-muted-foreground">
      <Link to="/admin/final">
        <ArrowLeft className="size-4" />
        {t('finalAdmin.p.backToSessions')}
      </Link>
    </Button>
  )

  if (state === 'loading') {
    return (
      <div className="flex flex-col gap-6">
        {backLink}
        <div className="h-9 w-64 animate-pulse rounded-xl bg-muted/60" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-28 animate-pulse rounded-2xl bg-muted/60" />
          ))}
        </div>
        <div className="h-64 animate-pulse rounded-2xl bg-muted/60" />
      </div>
    )
  }

  if (state === 'error' || state === 'notFound' || !session) {
    const notFound = state === 'notFound'
    return (
      <div className="flex flex-col gap-6">
        {backLink}
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-card p-10 text-center shadow-premium">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-muted">
            {notFound ? <SearchX className="size-6 text-muted-foreground" /> : <RefreshCw className="size-6 text-muted-foreground" />}
          </div>
          <p className="text-lg font-semibold tracking-tight">{notFound ? t('finalAdmin.p.notFound') : t('common.loadFailed')}</p>
          {!notFound && (
            <Button variant="outline" onClick={() => setReloadKey((k) => k + 1)} className="gap-1.5">
              <RefreshCw className="size-4" />
              {t('common.retry')}
            </Button>
          )}
        </div>
      </div>
    )
  }

  const isLiveSession = LIVE_STATUSES.includes(session.status)
  const pendingCount = rows.filter((r) => r.grading === 'pending').length

  return (
    <div className="flex flex-col gap-8">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="flex flex-col gap-3"
      >
        {backLink}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-medium text-muted-foreground">{t('finalAdmin.r.title')}</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight break-words">{session.title || t('finalAdmin.untitled')}</h1>
          </div>
          {rows.length > 0 && (
            <Button variant="outline" onClick={exportCsv} className="h-10 gap-2 px-4">
              <Download className="size-4" />
              {t('finalAdmin.r.exportCsv')}
            </Button>
          )}
        </div>
      </motion.header>

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={CalendarDays} label={t('common.date')} value={formatDate(session.finishedAt ?? session.createdAt, lang)} className="[&>p:first-of-type]:text-lg" />
        <StatCard
          icon={ListChecks}
          label={t('finalAdmin.r.asked')}
          value={session.askedCount < session.questionIds.length ? `${session.askedCount} / ${session.questionIds.length}` : session.askedCount}
        />
        <StatCard icon={Users} label={t('finalAdmin.r.participants')} value={participants.length} />
        <StatCard
          icon={Target}
          label={t('finalAdmin.r.average')}
          value={averagePercent === null ? '—' : `${averagePercent}%`}
          accent="gradient"
        />
      </section>

      {isLiveSession && (
        <Section className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold tracking-tight">{t('finalAdmin.r.notFinishedTitle')}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t('finalAdmin.r.notFinishedBody')}</p>
          </div>
          <Button asChild className="gap-2 border-0 gradient-accent text-white hover:opacity-90">
            <Link to={`/present/${session.id}`}>
              <MonitorPlay className="size-4" />
              {t('finalAdmin.live.openHost')}
            </Link>
          </Button>
        </Section>
      )}

      {session.status === 'cancelled' && (
        <Section className="flex items-center gap-3">
          <Ban className="size-5 shrink-0 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">{t('finalAdmin.p.cancelledBody')}</p>
        </Section>
      )}

      {session.status === 'finished' && (
        <>
          {/* Standings */}
          <Section delay={0.04}>
            <div className="mb-4 flex flex-col gap-1">
              <h2 className="text-lg font-semibold tracking-tight">{t('finalAdmin.r.results')}</h2>
              {pendingCount > 0 && <p className="text-sm text-muted-foreground">{t('finalAdmin.r.pendingHint')}</p>}
            </div>
            {rows.length === 0 ? (
              <p className="py-8 text-center text-sm text-muted-foreground">{t('finalAdmin.r.empty')}</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-12">{t('finalAdmin.col.rank')}</TableHead>
                    <TableHead>{t('finalAdmin.col.name')}</TableHead>
                    <TableHead className="text-right">{t('finalAdmin.col.points')}</TableHead>
                    <TableHead className="text-right">{t('finalAdmin.r.correct')}</TableHead>
                    <TableHead className="text-right">{t('finalAdmin.r.percent')}</TableHead>
                    <TableHead>{t('finalAdmin.r.grading')}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((r, i) => {
                    const rank = r.rank === Number.MAX_SAFE_INTEGER ? i + 1 : r.rank
                    return (
                      <TableRow key={r.userId}>
                        <TableCell>
                          <span
                            className={cn(
                              'flex size-7 items-center justify-center rounded-lg text-xs font-bold tabular-nums',
                              rank === 1
                                ? 'bg-amber-400 text-amber-950'
                                : rank === 2
                                  ? 'bg-zinc-300 text-zinc-900 dark:bg-zinc-400'
                                  : rank === 3
                                    ? 'bg-orange-300 text-orange-950 dark:bg-orange-400'
                                    : 'bg-muted text-muted-foreground',
                            )}
                          >
                            {rank}
                          </span>
                        </TableCell>
                        <TableCell className="font-medium">
                          <span className="inline-flex items-center gap-1.5">
                            {r.name}
                            {r.incomplete && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span tabIndex={0} aria-label={t('finalAdmin.r.incomplete')} className="inline-flex">
                                    <TriangleAlert className="size-3.5 text-amber-500" />
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent>{t('finalAdmin.r.incomplete')}</TooltipContent>
                              </Tooltip>
                            )}
                          </span>
                        </TableCell>
                        <TableCell className="text-right tabular-nums">{r.points}</TableCell>
                        <TableCell className="text-right tabular-nums text-muted-foreground">
                          {r.correct} / {r.askedChoice}
                        </TableCell>
                        <TableCell className={cn('text-right font-semibold tabular-nums', pctTone(r.percent))}>
                          {Math.round(r.percent)}%
                        </TableCell>
                        <TableCell>
                          <GradingBadge status={r.grading} />
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            )}
          </Section>

          {/* Grading */}
          <Section delay={0.08}>
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl gradient-accent">
                <ClipboardCheck className="size-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold tracking-tight">{t('finalAdmin.r.gradeTitle')}</h2>
                {openAsked.length > 0 && (
                  <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">{t('finalAdmin.r.gradeSubtitle')}</p>
                )}
              </div>
            </div>

            {openAsked.length === 0 ? (
              <p className="mt-4 text-sm text-muted-foreground">{t('finalAdmin.r.noOpen')}</p>
            ) : (
              <div className="mt-6 flex flex-col gap-6">
                {openAsked.map((q, qi) => {
                  const given = sortedParticipants.filter((p) => answersByKey.get(`${q.id}|${p.userId}`)?.answerText)
                  const gradedCount = given.filter((p) => answersByKey.get(`${q.id}|${p.userId}`)?.openScore != null).length
                  const mod = q.moduleSlugs[0] ? getModuleBySlug(q.moduleSlugs[0]) : undefined
                  return (
                    <article key={q.id} className="rounded-2xl border border-border/60 p-4 sm:p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
                            <PenLine className="size-3.5" />
                            {tf('finalAdmin.r.task', { n: qi + 1 })}
                          </span>
                          {mod && <span className="text-xs text-muted-foreground">{tx(mod.title)}</span>}
                        </div>
                        <span
                          className={cn(
                            'text-xs font-medium',
                            given.length > 0 && gradedCount === given.length
                              ? 'text-emerald-600 dark:text-emerald-400'
                              : 'text-muted-foreground',
                          )}
                        >
                          {tf('finalAdmin.r.gradedOf', { graded: gradedCount, total: given.length })}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tx(q.scenario)}</p>
                      <p className="mt-2 font-medium leading-relaxed">{tx(q.question)}</p>
                      <div className="mt-3 rounded-xl bg-muted/60 p-3.5 sm:p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {t('finalAdmin.p.rubric')}
                        </p>
                        <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed">{tx(q.rubric)}</p>
                      </div>

                      <ul className="mt-4 flex flex-col divide-y divide-border/60">
                        {sortedParticipants.map((p) => {
                          const key = `${q.id}|${p.userId}`
                          const answer = answersByKey.get(key)
                          const text = answer?.answerText?.trim()
                          return (
                            <li key={p.userId} className="flex flex-col gap-2.5 py-3.5 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:gap-4">
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-semibold">{p.displayName || '—'}</p>
                                {text ? (
                                  <p className="mt-1 whitespace-pre-wrap break-words text-sm leading-relaxed">{text}</p>
                                ) : (
                                  <p className="mt-1 text-sm italic text-muted-foreground">{t('finalAdmin.r.noAnswer')}</p>
                                )}
                              </div>
                              {text && answer && (
                                <ScoreControl
                                  label={`${p.displayName || '—'} — ${tf('finalAdmin.r.task', { n: qi + 1 })}`}
                                  value={answer.openScore}
                                  saving={saving.has(key)}
                                  onChange={(s) => void grade(p.userId, q.id, s)}
                                />
                              )}
                            </li>
                          )
                        })}
                        {sortedParticipants.length === 0 && (
                          <li className="py-3 text-sm text-muted-foreground">{t('finalAdmin.r.empty')}</li>
                        )}
                      </ul>
                    </article>
                  )
                })}
              </div>
            )}
          </Section>

          {/* Per-question statistics */}
          <Section delay={0.12}>
            <h2 className="text-lg font-semibold tracking-tight">{t('finalAdmin.r.statsTitle')}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t('finalAdmin.r.statsSubtitle')}</p>
            {choiceStats.length === 0 ? (
              <p className="mt-4 text-sm text-muted-foreground">{t('finalAdmin.r.noChoice')}</p>
            ) : (
              <ul className="mt-5 flex flex-col gap-3">
                {choiceStats.map((s) => {
                  const mod = s.question.moduleSlugs[0] ? getModuleBySlug(s.question.moduleSlugs[0]) : undefined
                  return (
                    <li key={s.question.id} className="rounded-xl border border-border/60 p-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <p className="text-sm font-medium leading-relaxed">{tx(s.question.question)}</p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {mod ? `${tx(mod.title)} · ` : ''}
                            {tf('finalAdmin.r.answeredCount', { count: s.answered })}
                          </p>
                        </div>
                        <p
                          className={cn(
                            'shrink-0 text-lg font-semibold tabular-nums',
                            s.pct === null ? 'text-muted-foreground' : pctTone(s.pct),
                          )}
                        >
                          {s.pct === null ? t('finalAdmin.r.noAnswers') : tf('finalAdmin.r.correctPct', { pct: s.pct })}
                        </p>
                      </div>
                      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${s.pct ?? 0}%` }}
                          transition={{ duration: 0.6, ease: EASE }}
                          className={cn('h-full rounded-full', barTone(s.pct ?? 0))}
                        />
                      </div>
                      {s.answered > 0 && (
                        <p className="mt-2.5 text-xs text-muted-foreground">
                          {s.topWrong >= 0 ? (
                            <>
                              <span className="font-medium text-rose-600 dark:text-rose-400">{t('finalAdmin.r.commonMistake')}:</span>{' '}
                              {LETTERS[s.topWrong]} — {tx(s.question.options[s.topWrong])} ({s.topWrongCount})
                            </>
                          ) : (
                            <span className="text-emerald-600 dark:text-emerald-400">{t('finalAdmin.r.noMistakes')}</span>
                          )}
                        </p>
                      )}
                    </li>
                  )
                })}
              </ul>
            )}
          </Section>
        </>
      )}
    </div>
  )
}
