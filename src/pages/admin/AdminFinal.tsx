import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ChartColumn,
  Ban,
  Check,
  LoaderCircle,
  Minus,
  MonitorPlay,
  Play,
  Plus,
  Radio,
  RefreshCw,
  Smartphone,
  Sparkles,
  Trash2,
  Tv,
  Users,
  ClipboardCheck,
} from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import { useAuth } from '@/contexts/AuthContext'
import { LIVE_STATUSES, cancelSession, createSession, deleteSession, fetchSessions } from '@/lib/finalApi'
import { finalChoiceQuestions, finalOpenQuestions } from '@/data/final'
import { getModuleBySlug } from '@/data/modules'
import { sample, shuffle } from '@/lib/shuffle'
import type { FinalChoiceQuestion, FinalSession, FinalStatus, Language } from '@/types'

const EASE = [0.16, 1, 0.3, 1] as const
const CHOICE_MIN = 5
const CHOICE_MAX = Math.min(30, finalChoiceQuestions.length)
const OPEN_MAX = Math.min(8, finalOpenQuestions.length)
const CHOICE_SECONDS = [15, 20, 30, 45, 60] as const
const OPEN_SECONDS = [60, 90, 120, 180] as const
const TITLE_MAX = 120

const LOCALES: Record<Language, string> = { ru: 'ru-RU', uz: 'uz-Latn-UZ', en: 'en-GB' }

function formatDate(iso: string, lang: Language, withTime = true): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  try {
    return d.toLocaleString(LOCALES[lang], withTime ? { dateStyle: 'medium', timeStyle: 'short' } : { dateStyle: 'long' })
  } catch {
    return d.toLocaleString()
  }
}

function isLive(status: FinalStatus): boolean {
  return LIVE_STATUSES.includes(status)
}

function errorCode(e: unknown): string | undefined {
  return e && typeof e === 'object' && 'code' in e ? String((e as { code: unknown }).code) : undefined
}

/** Round-robin across modules (grouped by first module slug) so the test covers the whole course, then shuffle. */
function pickChoiceQuestions(count: number): string[] {
  const groups = new Map<string, FinalChoiceQuestion[]>()
  for (const q of finalChoiceQuestions) {
    const key = q.moduleSlugs[0] ?? '_'
    const list = groups.get(key)
    if (list) list.push(q)
    else groups.set(key, [q])
  }
  const queues = shuffle([...groups.values()]).map((g) => shuffle(g))
  const target = Math.min(count, finalChoiceQuestions.length)
  const picked: string[] = []
  while (picked.length < target) {
    let progressed = false
    for (const queue of queues) {
      if (picked.length >= target) break
      const q = queue.shift()
      if (!q) continue
      picked.push(q.id)
      progressed = true
    }
    if (!progressed) break
  }
  return shuffle(picked)
}

// ─── Small building blocks ───────────────────────────────────────────────────

function StatusBadge({ status }: { status: FinalStatus }) {
  const { t } = useLanguage()
  const live = status === 'question' || status === 'reveal'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap',
        status === 'lobby' && 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
        live && 'gradient-accent text-white',
        status === 'finished' && 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
        status === 'cancelled' && 'bg-muted text-muted-foreground',
      )}
    >
      {(live || status === 'lobby') && (
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-current opacity-60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-current" />
        </span>
      )}
      {status === 'lobby'
        ? t('finalAdmin.status.lobby')
        : live
          ? t('finalAdmin.status.live')
          : status === 'finished'
            ? t('finalAdmin.status.finished')
            : t('finalAdmin.status.cancelled')}
    </span>
  )
}

function Stepper({
  value,
  min,
  max,
  onChange,
  disabled,
  id,
}: {
  value: number
  min: number
  max: number
  onChange: (v: number) => void
  disabled?: boolean
  id: string
}) {
  const { t } = useLanguage()
  return (
    <div className="flex items-center gap-2">
      <Button
        type="button"
        variant="outline"
        size="icon-lg"
        aria-label={t('finalAdmin.new.decrease')}
        disabled={disabled || value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <Minus />
      </Button>
      <output
        id={id}
        aria-live="polite"
        className="min-w-12 text-center text-2xl font-semibold tabular-nums tracking-tight"
      >
        {value}
      </output>
      <Button
        type="button"
        variant="outline"
        size="icon-lg"
        aria-label={t('finalAdmin.new.increase')}
        disabled={disabled || value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        <Plus />
      </Button>
    </div>
  )
}

function Segmented({
  options,
  value,
  onChange,
  suffix,
  label,
}: {
  options: readonly number[]
  value: number
  onChange: (v: number) => void
  suffix: string
  label: string
}) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-1.5">
      {options.map((opt) => {
        const active = opt === value
        return (
          <button
            key={opt}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(opt)}
            className={cn(
              'h-9 min-w-14 rounded-lg border px-2.5 text-sm font-medium tabular-nums transition-colors',
              active
                ? 'gradient-accent border-transparent text-white shadow-premium'
                : 'border-border/60 bg-background text-muted-foreground hover:border-primary/30 hover:text-foreground dark:bg-input/30',
            )}
          >
            {opt} {suffix}
          </button>
        )
      })}
    </div>
  )
}

function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel,
  cancelLabel,
  onConfirm,
  pending,
  destructive,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description: ReactNode
  confirmLabel: string
  cancelLabel: string
  onConfirm: () => void
  pending: boolean
  destructive?: boolean
}) {
  return (
    <Dialog open={open} onOpenChange={(o) => !pending && onOpenChange(o)}>
      <DialogContent showCloseButton={!pending}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" disabled={pending} onClick={() => onOpenChange(false)}>
            {cancelLabel}
          </Button>
          <Button variant={destructive ? 'destructive' : 'default'} disabled={pending} onClick={onConfirm} className="gap-1.5">
            {pending && <LoaderCircle className="animate-spin" />}
            {confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

type ConfirmState = { kind: 'cancel'; session: FinalSession } | { kind: 'delete'; session: FinalSession } | null

export default function AdminFinal() {
  const { t, tf, tx, lang } = useLanguage()
  const { user } = useAuth()
  const navigate = useNavigate()

  const [sessions, setSessions] = useState<FinalSession[] | null>(null)
  const [loadError, setLoadError] = useState(false)
  const [loading, setLoading] = useState(true)
  const loadSeq = useRef(0)

  // form
  const [title, setTitle] = useState<string | null>(null)
  const [choiceCount, setChoiceCount] = useState(Math.min(20, CHOICE_MAX))
  const [openCount, setOpenCount] = useState(Math.min(2, OPEN_MAX))
  const [manualPick, setManualPick] = useState(false)
  const [picked, setPicked] = useState<string[]>([])
  const [choiceSeconds, setChoiceSeconds] = useState<number>(30)
  const [openSeconds, setOpenSeconds] = useState<number>(120)
  const [creating, setCreating] = useState(false)

  const [confirm, setConfirm] = useState<ConfirmState>(null)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [actionPending, setActionPending] = useState(false)

  /** `silent` refreshes in the background without the loading indicator (used by the live poll). */
  const load = useCallback(async (silent = false) => {
    const seq = ++loadSeq.current
    if (!silent) setLoading(true)
    try {
      const rows = await fetchSessions()
      if (seq !== loadSeq.current) return
      setSessions(rows)
      setLoadError(false)
    } catch {
      if (seq !== loadSeq.current || silent) return
      setLoadError(true)
    } finally {
      if (seq === loadSeq.current) setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  const liveSession = useMemo(() => sessions?.find((s) => isLive(s.status)) ?? null, [sessions])
  const liveId = liveSession?.id ?? null

  // Keep the live card in sync with the host screen (question number, finish, cancel).
  // Polling on purpose: a realtime channel here would share its topic with the host screen's
  // subscription and could break it when the owner jumps straight to /present/:id.
  useEffect(() => {
    if (!liveId) return
    const interval = setInterval(() => void load(true), 10_000)
    return () => clearInterval(interval)
  }, [liveId, load])

  const defaultTitle = `${t('test.final')} — ${formatDate(new Date().toISOString(), lang, false)}`
  const effectiveOpenCount = manualPick ? picked.length : openCount
  const totalQuestions = choiceCount + effectiveOpenCount
  const estimatedMinutes = Math.max(
    1,
    Math.round((choiceCount * (choiceSeconds + 25) + effectiveOpenCount * (openSeconds + 45)) / 60),
  )

  function togglePicked(id: string) {
    setPicked((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id)
      if (prev.length >= OPEN_MAX) return prev
      return [...prev, id]
    })
  }

  async function handleCreate() {
    if (!user || creating || liveSession) return
    const finalTitle = ((title ?? defaultTitle).trim() || defaultTitle).slice(0, TITLE_MAX)
    const choiceIds = pickChoiceQuestions(choiceCount)
    const openIds = manualPick
      ? finalOpenQuestions.filter((q) => picked.includes(q.id)).map((q) => q.id)
      : sample(finalOpenQuestions, openCount).map((q) => q.id)
    const questionIds = [...choiceIds, ...openIds]
    if (questionIds.length === 0) return

    setCreating(true)
    try {
      const session = await createSession({
        title: finalTitle,
        questionIds,
        settings: { choiceSeconds, openSeconds },
        createdBy: user.id,
      })
      navigate(`/present/${session.id}`)
    } catch (e) {
      if (errorCode(e) === '23505') {
        toast.error(t('finalAdmin.new.liveExists'))
        void load()
      } else {
        toast.error(t('common.saveFailed'))
      }
      setCreating(false)
    }
  }

  function openConfirm(next: NonNullable<ConfirmState>) {
    setConfirm(next)
    setConfirmOpen(true)
  }

  async function handleConfirm() {
    if (!confirm || !confirmOpen || actionPending) return
    const { kind, session } = confirm
    setActionPending(true)
    try {
      if (kind === 'cancel') {
        await cancelSession(session.id)
        setSessions((prev) =>
          prev?.map((s) => (s.id === session.id ? { ...s, status: 'cancelled', currentQuestion: null } : s)) ?? prev,
        )
        toast.success(t('finalAdmin.live.cancelled'))
      } else {
        await deleteSession(session.id)
        setSessions((prev) => prev?.filter((s) => s.id !== session.id) ?? prev)
        toast.success(t('finalAdmin.history.deleted'))
      }
      setConfirmOpen(false)
    } catch {
      toast.error(t('common.saveFailed'))
    } finally {
      setActionPending(false)
    }
  }

  const steps = [
    { icon: Users, title: t('finalAdmin.how.step1.title'), body: t('finalAdmin.how.step1.body') },
    { icon: Tv, title: t('finalAdmin.how.step2.title'), body: t('finalAdmin.how.step2.body') },
    { icon: Smartphone, title: t('finalAdmin.how.step3.title'), body: t('finalAdmin.how.step3.body') },
    { icon: Play, title: t('finalAdmin.how.step4.title'), body: t('finalAdmin.how.step4.body') },
    { icon: ClipboardCheck, title: t('finalAdmin.how.step5.title'), body: t('finalAdmin.how.step5.body') },
  ]

  const createDisabled = creating || !user || !!liveSession || loading || totalQuestions === 0

  return (
    <div className="flex flex-col gap-8">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <h1 className="text-3xl font-semibold tracking-tight">{t('finalAdmin.title')}</h1>
        <p className="mt-2 max-w-2xl text-[15px] text-muted-foreground">{t('finalAdmin.subtitle')}</p>
      </motion.header>

      {/* Live session */}
      {liveSession && (
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="gradient-accent rounded-2xl p-[2px] shadow-premium"
        >
          <div className="relative overflow-hidden rounded-[calc(1rem-2px)] bg-card p-5 sm:p-6">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full opacity-[0.14] gradient-accent blur-3xl"
            />
            <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex min-w-0 items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl gradient-accent">
                  <Radio className="size-6 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium text-muted-foreground">{t('finalAdmin.live.title')}</p>
                    <StatusBadge status={liveSession.status} />
                  </div>
                  <h2 className="mt-1 truncate text-xl font-semibold tracking-tight">
                    {liveSession.title || t('finalAdmin.untitled')}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {liveSession.status === 'lobby'
                      ? t('finalAdmin.live.lobby')
                      : tf('finalAdmin.live.questionOf', {
                          current: liveSession.currentIndex + 1,
                          total: liveSession.questionIds.length,
                        })}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button asChild size="lg" className="h-11 gap-2 border-0 px-5 gradient-accent text-white hover:opacity-90">
                  <Link to={`/present/${liveSession.id}`}>
                    <MonitorPlay className="size-4" />
                    {t('finalAdmin.live.openHost')}
                  </Link>
                </Button>
                <Button
                  variant="destructive"
                  size="lg"
                  className="h-11 gap-2 px-5"
                  onClick={() => openConfirm({ kind: 'cancel', session: liveSession })}
                >
                  <Ban className="size-4" />
                  {t('finalAdmin.live.cancel')}
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* How it works */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.04, ease: EASE }}
        className="rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:p-6"
      >
        <h2 className="text-lg font-semibold tracking-tight">{t('finalAdmin.how.title')}</h2>
        <ol className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3 lg:flex-col">
              <div className="relative flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                <step.icon className="size-5 text-foreground" />
                <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full gradient-accent text-[11px] font-semibold text-white">
                  {i + 1}
                </span>
              </div>
              <div className="min-w-0">
                <p className="font-medium tracking-tight">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </motion.section>

      {/* New session */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08, ease: EASE }}
        className="rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:p-6"
      >
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl gradient-accent">
            <Sparkles className="size-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold tracking-tight">{t('finalAdmin.new.title')}</h2>
            <p className="mt-0.5 text-sm text-muted-foreground">{t('finalAdmin.new.subtitle')}</p>
          </div>
        </div>

        <form
          className="mt-6 flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault()
            void handleCreate()
          }}
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="final-title">{t('finalAdmin.new.sessionTitle')}</Label>
            <Input
              id="final-title"
              value={title ?? defaultTitle}
              maxLength={TITLE_MAX}
              onChange={(e) => setTitle(e.target.value)}
              className="h-10"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-xl border border-border/60 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <Label htmlFor="final-choice-count">{t('finalAdmin.new.choiceCount')}</Label>
                  <p className="mt-1 text-xs text-muted-foreground">{t('finalAdmin.new.choiceHint')}</p>
                </div>
                <Stepper
                  id="final-choice-count"
                  value={choiceCount}
                  min={CHOICE_MIN}
                  max={CHOICE_MAX}
                  onChange={setChoiceCount}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">{t('finalAdmin.new.choiceSeconds')}</p>
                <Segmented
                  label={t('finalAdmin.new.choiceSeconds')}
                  options={CHOICE_SECONDS}
                  value={choiceSeconds}
                  onChange={setChoiceSeconds}
                  suffix={t('common.seconds')}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-xl border border-border/60 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <Label htmlFor="final-open-count">{t('finalAdmin.new.openCount')}</Label>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {manualPick ? tf('finalAdmin.new.pickedCount', { count: picked.length }) : t('finalAdmin.new.openHint')}
                  </p>
                </div>
                <Stepper
                  id="final-open-count"
                  value={effectiveOpenCount}
                  min={0}
                  max={OPEN_MAX}
                  onChange={setOpenCount}
                  disabled={manualPick}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">{t('finalAdmin.new.openSeconds')}</p>
                <Segmented
                  label={t('finalAdmin.new.openSeconds')}
                  options={OPEN_SECONDS}
                  value={openSeconds}
                  onChange={setOpenSeconds}
                  suffix={t('common.seconds')}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <Switch id="final-manual" checked={manualPick} onCheckedChange={setManualPick} className="mt-0.5" />
              <div>
                <Label htmlFor="final-manual">{t('finalAdmin.new.manualPick')}</Label>
                <p className="mt-1 text-xs text-muted-foreground">{t('finalAdmin.new.manualHint')}</p>
              </div>
            </div>

            {manualPick && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.25, ease: EASE }}
                className="grid gap-2 overflow-hidden md:grid-cols-2"
              >
                {finalOpenQuestions.map((q) => {
                  const checked = picked.includes(q.id)
                  const mod = q.moduleSlugs[0] ? getModuleBySlug(q.moduleSlugs[0]) : undefined
                  return (
                    <li key={q.id}>
                      <label
                        className={cn(
                          'flex h-full cursor-pointer items-start gap-3 rounded-xl border p-3 text-sm transition-colors',
                          checked
                            ? 'border-primary/40 bg-muted/60'
                            : 'border-border/60 hover:border-primary/30 hover:bg-muted/40',
                        )}
                      >
                        <input
                          type="checkbox"
                          className="peer sr-only"
                          checked={checked}
                          onChange={() => togglePicked(q.id)}
                        />
                        <span
                          aria-hidden
                          className={cn(
                            'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors peer-focus-visible:ring-3 peer-focus-visible:ring-ring/50',
                            checked ? 'gradient-accent border-transparent text-white' : 'border-input bg-background',
                          )}
                        >
                          {checked && <Check className="size-3.5" strokeWidth={3} />}
                        </span>
                        <span className="min-w-0">
                          <span className="line-clamp-3 leading-relaxed">{tx(q.question)}</span>
                          {mod && (
                            <span className="mt-1.5 inline-block rounded-md bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                              {tx(mod.title)}
                            </span>
                          )}
                        </span>
                      </label>
                    </li>
                  )
                })}
              </motion.ul>
            )}
          </div>

          <div className="flex flex-col gap-3 border-t border-border/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-muted-foreground">
              <p>{tf('finalAdmin.new.summary', { total: totalQuestions, minutes: estimatedMinutes })}</p>
              {liveSession && <p className="mt-1 text-amber-700 dark:text-amber-300">{t('finalAdmin.live.blocksNew')}</p>}
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={createDisabled}
              className="h-11 gap-2 border-0 px-5 gradient-accent text-white hover:opacity-90"
            >
              {creating ? <LoaderCircle className="size-4 animate-spin" /> : <MonitorPlay className="size-4" />}
              {creating ? t('finalAdmin.new.creating') : t('finalAdmin.new.create')}
            </Button>
          </div>
        </form>
      </motion.section>

      {/* History */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.12, ease: EASE }}
        className="rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:p-6"
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold tracking-tight">{t('finalAdmin.history.title')}</h2>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 text-muted-foreground"
            disabled={loading}
            onClick={() => void load()}
          >
            <RefreshCw className={cn('size-3.5', loading && 'animate-spin')} />
            {t('finalAdmin.history.refresh')}
          </Button>
        </div>

        {sessions === null && loading ? (
          <div className="flex flex-col gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-12 animate-pulse rounded-xl bg-muted/60" />
            ))}
          </div>
        ) : sessions === null || loadError ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <p className="text-sm text-muted-foreground">{t('common.loadFailed')}</p>
            <Button variant="outline" size="sm" onClick={() => void load()} disabled={loading} className="gap-1.5">
              <RefreshCw className="size-3.5" />
              {t('common.retry')}
            </Button>
          </div>
        ) : sessions.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-muted">
              <ChartColumn className="size-6 text-muted-foreground" />
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">{t('finalAdmin.history.empty')}</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>{t('finalAdmin.history.colTitle')}</TableHead>
                <TableHead>{t('common.date')}</TableHead>
                <TableHead>{t('common.status')}</TableHead>
                <TableHead className="text-right">{t('finalAdmin.history.colQuestions')}</TableHead>
                <TableHead className="text-right">{t('common.actions')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sessions.map((s) => (
                <TableRow key={s.id}>
                  <TableCell className="max-w-[16rem] truncate font-medium">{s.title || t('finalAdmin.untitled')}</TableCell>
                  <TableCell className="text-muted-foreground">{formatDate(s.createdAt, lang)}</TableCell>
                  <TableCell>
                    <StatusBadge status={s.status} />
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {s.status === 'finished' && s.askedCount < s.questionIds.length
                      ? `${s.askedCount} / ${s.questionIds.length}`
                      : s.questionIds.length}
                  </TableCell>
                  <TableCell className="text-right">
                    {s.status === 'finished' && (
                      <Button asChild variant="outline" size="sm" className="gap-1.5">
                        <Link to={`/admin/final/${s.id}/results`}>
                          <ChartColumn className="size-3.5" />
                          {t('finalAdmin.history.results')}
                        </Link>
                      </Button>
                    )}
                    {isLive(s.status) && (
                      <Button asChild variant="outline" size="sm" className="gap-1.5">
                        <Link to={`/present/${s.id}`}>
                          <MonitorPlay className="size-3.5" />
                          {t('finalAdmin.history.hostScreen')}
                        </Link>
                      </Button>
                    )}
                    {s.status === 'cancelled' && (
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        aria-label={t('common.delete')}
                        className="text-muted-foreground hover:text-destructive"
                        onClick={() => openConfirm({ kind: 'delete', session: s })}
                      >
                        <Trash2 />
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </motion.section>

      <ConfirmDialog
        open={confirmOpen}
        onOpenChange={(o) => {
          if (!o) setConfirmOpen(false)
        }}
        pending={actionPending}
        destructive
        title={confirm?.kind === 'delete' ? t('finalAdmin.history.deleteTitle') : t('finalAdmin.live.cancelTitle')}
        description={
          confirm?.kind === 'delete'
            ? tf('finalAdmin.history.deleteBody', { title: confirm.session.title || t('finalAdmin.untitled') })
            : t('finalAdmin.live.cancelBody')
        }
        confirmLabel={confirm?.kind === 'delete' ? t('common.delete') : t('finalAdmin.live.cancel')}
        cancelLabel={confirm?.kind === 'delete' ? t('common.cancel') : t('finalAdmin.live.keep')}
        onConfirm={() => void handleConfirm()}
      />
    </div>
  )
}
