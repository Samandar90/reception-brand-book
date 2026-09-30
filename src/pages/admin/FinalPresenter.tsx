import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Ban,
  ChartColumn,
  CircleCheck,
  Crown,
  Flag,
  Keyboard,
  ListChecks,
  LoaderCircle,
  LogOut,
  PenLine,
  Play,
  RefreshCw,
  SearchX,
  Smartphone,
  Trophy,
  Users,
} from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import {
  fetchAnswers,
  fetchParticipants,
  fetchServerOffset,
  fetchSession,
  finishSession,
  openQuestion,
  revealQuestion,
  subscribeAnswers,
  subscribeParticipants,
  subscribeSession,
  toCurrentQuestion,
} from '@/lib/finalApi'
import { getFinalQuestion } from '@/data/final'
import type { FinalCurrentQuestion, FinalParticipant, FinalQuestion, FinalReveal, FinalSession, FinalStatus, Language } from '@/types'

const EASE = [0.16, 1, 0.3, 1] as const
/** A participant counts as "present" if the phone checked in within this window. */
const ACTIVE_WINDOW_MS = 120_000
/** Small grace after the deadline so last-second answers still in flight are accepted before the reveal. */
const AUTO_REVEAL_GRACE_MS = 1500
const LETTERS = ['A', 'B', 'C', 'D'] as const
const LANGS: Language[] = ['ru', 'uz', 'en']

const STATUS_ORDER: Record<FinalStatus, number> = { lobby: 0, question: 1, reveal: 2, finished: 0, cancelled: 0 }

/** Sessions only move forward; used to ignore out-of-order snapshots (RPC result vs realtime vs resync). */
function progressOf(s: FinalSession): number {
  if (s.status === 'finished' || s.status === 'cancelled') return Number.MAX_SAFE_INTEGER
  return (s.currentIndex + 1) * 3 + STATUS_ORDER[s.status]
}

function answerKey(questionId: string, userId: string): string {
  return `${questionId}|${userId}`
}

function byScore(a: FinalParticipant, b: FinalParticipant): number {
  return b.score - a.score || Date.parse(a.joinedAt) - Date.parse(b.joinedAt)
}

function byRank(a: FinalParticipant, b: FinalParticipant): number {
  const ra = a.rank ?? Number.MAX_SAFE_INTEGER
  const rb = b.rank ?? Number.MAX_SAFE_INTEGER
  return ra - rb || byScore(a, b)
}

const MEDAL_STYLES = [
  'bg-amber-400 text-amber-950',
  'bg-zinc-300 text-zinc-900 dark:bg-zinc-400',
  'bg-orange-300 text-orange-950 dark:bg-orange-400',
] as const

// ─── Small pieces ────────────────────────────────────────────────────────────

function Chip({ children, className, title }: { children: ReactNode; className?: string; title?: string }) {
  return (
    <span
      title={title}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card px-3 py-1 text-sm font-semibold tabular-nums whitespace-nowrap sm:text-base',
        className,
      )}
    >
      {children}
    </span>
  )
}

/** Auto-reveal waits at most this long for the server clock offset. */
const OFFSET_FALLBACK_MS = 4000

function isKeyboardFocused(el: HTMLElement): boolean {
  try {
    return el.matches(':focus-visible')
  } catch {
    return true
  }
}

function LangToggle() {
  const { t, lang, setLang } = useLanguage()
  return (
    <div role="group" aria-label={t('finalAdmin.p.language')} className="flex rounded-xl border border-border/60 bg-card p-0.5">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          aria-pressed={lang === l}
          onClick={(e) => {
            setLang(l)
            if (e.detail > 0) e.currentTarget.blur() // pointer click: give Space back to the presenter
          }}
          className={cn(
            'rounded-lg px-2.5 py-1 text-sm font-semibold transition-colors',
            lang === l ? 'gradient-accent text-white' : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

function KeyboardHint() {
  const { t } = useLanguage()
  return (
    <p className="hidden items-center gap-2 text-sm text-muted-foreground lg:flex">
      <Keyboard className="size-4" />
      {t('finalAdmin.p.keyboardHint')}
    </p>
  )
}

function TypeChip({ type }: { type: 'choice' | 'open' }) {
  const { t } = useLanguage()
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground sm:text-base">
      {type === 'choice' ? <ListChecks className="size-4" /> : <PenLine className="size-4" />}
      {type === 'choice' ? t('finalAdmin.p.choice') : t('finalAdmin.p.open')}
    </span>
  )
}

function RankBadge({ index, rank, large }: { index: number; rank?: number; large?: boolean }) {
  return (
    <span
      className={cn(
        'flex shrink-0 items-center justify-center rounded-xl font-bold tabular-nums',
        large ? 'size-10 text-lg' : 'size-9 text-base',
        MEDAL_STYLES[index] ?? 'bg-muted text-muted-foreground',
      )}
    >
      {rank ?? index + 1}
    </span>
  )
}

function CountdownRing({ remainingMs, totalMs }: { remainingMs: number; totalMs: number }) {
  const { t } = useLanguage()
  const secs = Math.ceil(remainingMs / 1000)
  const fraction = Math.max(0, Math.min(1, remainingMs / totalMs))
  const r = 44
  const c = 2 * Math.PI * r
  const tone = secs <= 5 ? 'text-rose-500' : secs <= 10 ? 'text-amber-500' : ''
  return (
    <div className="relative size-32 shrink-0 sm:size-40 xl:size-52" role="timer" aria-label={`${secs} ${t('finalAdmin.p.secondsLeft')}`}>
      <svg viewBox="0 0 100 100" className="size-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" strokeWidth="8" stroke="currentColor" className="text-muted" />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          stroke="currentColor"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - fraction)}
          strokeOpacity={fraction > 0 ? 1 : 0}
          className={cn('transition-[stroke-dashoffset] duration-300 ease-linear', tone)}
          style={tone ? undefined : { color: 'var(--accent-start)' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {secs > 0 ? (
          <>
            <span className={cn('text-5xl font-bold tabular-nums tracking-tight sm:text-6xl xl:text-7xl', tone)}>{secs}</span>
            <span className="text-xs text-muted-foreground sm:text-sm">{t('finalAdmin.p.secondsLeft')}</span>
          </>
        ) : (
          <span className="px-3 text-center text-lg font-semibold text-rose-600 dark:text-rose-400 sm:text-xl">
            {t('finalAdmin.p.timeUp')}
          </span>
        )}
      </div>
    </div>
  )
}

function PrimaryButton({
  onClick,
  busy,
  icon,
  children,
  className,
}: {
  onClick: () => void
  busy: boolean
  icon: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <Button
      onClick={onClick}
      disabled={busy}
      className={cn(
        'h-14 gap-3 rounded-2xl border-0 px-7 text-lg gradient-accent text-white shadow-premium hover:opacity-90 sm:h-16 sm:px-9 sm:text-xl [&_svg:not([class*=size-])]:size-6',
        className,
      )}
    >
      {busy ? <LoaderCircle className="animate-spin" /> : icon}
      {children}
    </Button>
  )
}

function Leaderboard({ participants }: { participants: FinalParticipant[] }) {
  const { t } = useLanguage()
  const top = useMemo(() => [...participants].sort(byScore).slice(0, 5), [participants])
  return (
    <aside className="flex flex-col rounded-3xl border border-border/60 bg-card p-5 shadow-premium sm:p-6">
      <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
        <Crown className="size-6 text-amber-500" />
        {t('finalAdmin.p.leaderboard')}
      </h2>
      {top.length === 0 || top[0].score === 0 ? (
        <p className="mt-4 text-base text-muted-foreground">{t('finalAdmin.p.nobodyYet')}</p>
      ) : (
        <ol className="mt-4 flex flex-col gap-2">
          {top.map((p, i) => (
            <motion.li
              key={p.userId}
              layout
              transition={{ duration: 0.4, ease: EASE }}
              className="flex items-center gap-3 rounded-2xl bg-muted/50 px-3 py-2.5 sm:px-4 sm:py-3"
            >
              <RankBadge index={i} />
              <span className="min-w-0 flex-1 truncate text-lg font-medium sm:text-xl">{p.displayName || '—'}</span>
              <span className="text-xl font-bold tabular-nums sm:text-2xl">{p.score}</span>
            </motion.li>
          ))}
        </ol>
      )}
    </aside>
  )
}

function CenterMessage({
  icon,
  title,
  body,
  children,
}: {
  icon: ReactNode
  title: string
  body?: string
  children?: ReactNode
}) {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="flex max-w-xl flex-col items-center gap-4 text-center"
      >
        <div className="flex size-16 items-center justify-center rounded-2xl bg-muted [&_svg]:size-8">{icon}</div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
        {body && <p className="text-lg text-muted-foreground">{body}</p>}
        {children && <div className="mt-2 flex flex-wrap justify-center gap-3">{children}</div>}
      </motion.div>
    </div>
  )
}

function BackToSessions({ variant = 'outline' }: { variant?: 'outline' | 'default' }) {
  const { t } = useLanguage()
  return (
    <Button asChild variant={variant} size="lg" className="h-11 gap-2 px-5">
      <Link to="/admin/final">{t('finalAdmin.p.backToSessions')}</Link>
    </Button>
  )
}

// ─── Views ───────────────────────────────────────────────────────────────────

function LobbyView({
  participants,
  busy,
  onStart,
}: {
  participants: FinalParticipant[]
  busy: boolean
  onStart: () => void
}) {
  const { t, tf } = useLanguage()
  const address = useMemo(
    () => `${window.location.origin}${window.location.pathname}`.replace(/^https?:\/\//, '').replace(/\/+$/, ''),
    [],
  )
  const joined = useMemo(
    () => [...participants].sort((a, b) => Date.parse(a.joinedAt) - Date.parse(b.joinedAt)),
    [participants],
  )

  return (
    <div className="mx-auto grid w-full max-w-[1600px] flex-1 gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-10">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-premium sm:p-10 xl:p-14"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full opacity-[0.14] gradient-accent blur-3xl"
        />
        <h1 className="relative text-3xl font-semibold tracking-tight sm:text-5xl xl:text-6xl">{t('finalAdmin.p.joinTitle')}</h1>
        <ol className="relative mt-8 flex flex-col gap-8 xl:mt-12 xl:gap-10">
          <li className="flex gap-4 sm:gap-6">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl gradient-accent text-2xl font-bold text-white sm:size-14">
              1
            </span>
            <div className="min-w-0">
              <p className="flex items-center gap-2 text-lg text-muted-foreground sm:text-2xl">
                <Smartphone className="size-5 sm:size-6" />
                {t('finalAdmin.p.joinStep1')}
              </p>
              <p className="mt-1 break-all text-3xl font-bold tracking-tight gradient-text sm:text-5xl xl:text-6xl">{address}</p>
            </div>
          </li>
          <li className="flex gap-4 sm:gap-6">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl gradient-accent text-2xl font-bold text-white sm:size-14">
              2
            </span>
            <div className="min-w-0">
              <p className="text-lg text-muted-foreground sm:text-2xl">{t('finalAdmin.p.joinStep2')}</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight sm:text-4xl xl:text-5xl">
                {tf('finalAdmin.p.joinPath', { item: t('nav.finalTest') })}
              </p>
            </div>
          </li>
        </ol>
        <div className="relative mt-10 flex flex-col gap-4 sm:flex-row sm:items-center xl:mt-14">
          <PrimaryButton onClick={onStart} busy={busy} icon={<Play />}>
            {t('finalAdmin.p.start')}
          </PrimaryButton>
          <KeyboardHint />
        </div>
        {participants.length === 0 && (
          <p className="relative mt-4 max-w-xl text-base text-amber-700 dark:text-amber-300">{t('finalAdmin.p.startHint')}</p>
        )}
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.06, ease: EASE }}
        className="flex min-h-72 flex-col rounded-3xl border border-border/60 bg-card p-6 shadow-premium sm:p-8"
      >
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-3xl">
            <Users className="size-6 sm:size-7" />
            {t('finalAdmin.p.joined')}
          </h2>
          <span className="text-5xl font-bold tabular-nums tracking-tight sm:text-6xl">{participants.length}</span>
        </div>
        {joined.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 py-10 text-center">
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="size-3 rounded-full gradient-accent"
                  animate={{ opacity: [0.25, 1, 0.25] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
            <p className="text-lg text-muted-foreground sm:text-xl">{t('finalAdmin.p.waiting')}</p>
          </div>
        ) : (
          <ul className="mt-6 flex flex-wrap content-start gap-2.5 sm:gap-3">
            <AnimatePresence initial={false}>
              {joined.map((p) => (
                <motion.li
                  key={p.userId}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="rounded-2xl border border-border/60 bg-muted/50 px-4 py-2 text-lg font-medium sm:text-2xl"
                >
                  {p.displayName || '—'}
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </motion.section>
    </div>
  )
}

function QuestionText({ question, compact }: { question: FinalCurrentQuestion; compact?: boolean }) {
  const { tx } = useLanguage()
  return (
    <>
      <TypeChip type={question.type} />
      <p
        className={cn(
          'mt-4 leading-relaxed text-muted-foreground',
          compact ? 'text-base sm:text-lg xl:text-xl' : 'text-lg sm:text-xl xl:text-2xl',
        )}
      >
        {tx(question.scenario)}
      </p>
      <h1
        className={cn(
          'mt-3 font-semibold leading-tight tracking-tight',
          compact ? 'text-xl sm:text-2xl xl:text-3xl' : 'text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl',
        )}
      >
        {tx(question.question)}
      </h1>
    </>
  )
}

function QuestionView({
  question,
  remainingMs,
  totalMs,
  answeredCount,
  expectedCount,
  busy,
  onReveal,
}: {
  question: FinalCurrentQuestion
  remainingMs: number
  totalMs: number
  answeredCount: number
  expectedCount: number
  busy: boolean
  onReveal: () => void
}) {
  const { t, tx } = useLanguage()
  const pct = expectedCount > 0 ? Math.min(100, (answeredCount / expectedCount) * 100) : 0
  return (
    <div className="mx-auto grid w-full max-w-[1600px] flex-1 content-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_380px]">
      <motion.section
        key={question.id}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="min-w-0"
      >
        <QuestionText question={question} />
        {question.type === 'choice' && question.options ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-8 lg:gap-4">
            {question.options.map((opt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: EASE }}
                className="flex items-center gap-4 rounded-2xl border-2 border-border/60 bg-card p-4 shadow-premium sm:p-5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-foreground text-xl font-bold text-background sm:size-14 sm:text-2xl">
                  {LETTERS[i]}
                </span>
                <span className="text-lg font-medium leading-snug sm:text-xl xl:text-2xl">{tx(opt)}</span>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-6 flex items-center gap-4 rounded-2xl border-2 border-dashed border-border p-5 lg:mt-8 sm:p-6">
            <Smartphone className="size-8 shrink-0 text-muted-foreground" />
            <p className="text-lg font-medium sm:text-2xl">{t('finalAdmin.p.openHint')}</p>
          </div>
        )}
      </motion.section>

      <aside className="flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-card p-5 shadow-premium sm:flex-row sm:justify-between sm:p-6 lg:flex-col lg:justify-center">
        <CountdownRing remainingMs={remainingMs} totalMs={totalMs} />
        <div className="flex w-full max-w-64 flex-col items-center gap-3 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{t('finalAdmin.p.answered')}</p>
          <p className="text-5xl font-bold tabular-nums tracking-tight xl:text-6xl">
            {answeredCount}
            <span className="text-muted-foreground"> / {expectedCount}</span>
          </p>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full rounded-full gradient-accent"
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.4, ease: EASE }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button
            variant="outline"
            size="lg"
            disabled={busy}
            onClick={onReveal}
            className="h-12 gap-2 rounded-xl px-6 text-base"
          >
            {busy ? <LoaderCircle className="size-5 animate-spin" /> : <ChartColumn className="size-5" />}
            {t('finalAdmin.p.revealNow')}
          </Button>
          <KeyboardHint />
        </div>
      </aside>
    </div>
  )
}

function RevealView({
  question,
  bankQuestion,
  reveal,
  participants,
  isLast,
  busy,
  onNext,
  onFinish,
  onFinishEarly,
}: {
  question: FinalCurrentQuestion
  bankQuestion: FinalQuestion | undefined
  reveal: FinalReveal | null
  participants: FinalParticipant[]
  isLast: boolean
  busy: boolean
  onNext: () => void
  onFinish: () => void
  onFinishEarly: () => void
}) {
  const { t, tf, tx } = useLanguage()
  const isChoice = question.type === 'choice'
  const correctIndex = reveal?.correctIndex ?? (bankQuestion?.type === 'choice' ? bankQuestion.correctIndex : null)
  const distribution = reveal?.distribution ?? [0, 0, 0, 0]
  const totalAnswers = reveal?.answered ?? distribution.reduce((a, b) => a + b, 0)
  const explanation = reveal?.explanation ?? (bankQuestion?.type === 'choice' ? bankQuestion.explanation : null)
  const rubric = bankQuestion?.type === 'open' ? bankQuestion.rubric : null

  return (
    <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col gap-6">
      <div className="grid flex-1 content-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_400px]">
        <motion.section
          key={`reveal-${question.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="min-w-0"
        >
          <QuestionText question={question} compact />

          {isChoice && question.options ? (
            <>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:gap-4">
                {question.options.map((opt, i) => {
                  const count = distribution[i] ?? 0
                  const pct = totalAnswers > 0 ? Math.round((count / totalAnswers) * 100) : 0
                  const correct = i === correctIndex
                  return (
                    <div
                      key={i}
                      className={cn(
                        'flex flex-col gap-3 rounded-2xl border-2 p-4 transition-opacity sm:p-5',
                        correct
                          ? 'border-emerald-500/60 bg-emerald-500/10 shadow-premium'
                          : 'border-border/60 bg-card opacity-70',
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={cn(
                            'flex size-11 shrink-0 items-center justify-center rounded-xl text-xl font-bold sm:size-12 sm:text-2xl',
                            correct ? 'bg-emerald-500 text-white' : 'bg-muted text-muted-foreground',
                          )}
                        >
                          {correct ? <CircleCheck className="size-6" /> : LETTERS[i]}
                        </span>
                        <span className="min-w-0 flex-1 text-lg font-medium leading-snug sm:text-xl xl:text-2xl">{tx(opt)}</span>
                        <span className="shrink-0 text-right">
                          <span className="block text-2xl font-bold tabular-nums sm:text-3xl">{count}</span>
                          <span className="block text-sm text-muted-foreground tabular-nums">{pct}%</span>
                        </span>
                      </div>
                      <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.8, delay: 0.15 + i * 0.05, ease: EASE }}
                          className={cn('h-full rounded-full', correct ? 'bg-emerald-500' : 'bg-muted-foreground/40')}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
              {explanation && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35, ease: EASE }}
                  className="mt-5 flex gap-4 rounded-2xl bg-emerald-500/10 p-5 sm:p-6"
                >
                  <CircleCheck className="mt-1 size-6 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <div className="min-w-0">
                    <p className="text-base font-semibold text-emerald-700 dark:text-emerald-300 sm:text-lg">
                      {t('finalAdmin.p.correctAnswer')}
                      {correctIndex !== null && correctIndex >= 0 ? `: ${LETTERS[correctIndex] ?? ''}` : ''}
                      {' · '}
                      {tf('finalAdmin.p.responses', { count: totalAnswers })}
                    </p>
                    <p className="mt-1.5 text-lg leading-relaxed sm:text-xl">{tx(explanation)}</p>
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            <div className="mt-6 flex flex-col gap-5">
              <div className="flex flex-col gap-2 rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:flex-row sm:items-center sm:gap-6 sm:p-6">
                <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {tf('finalAdmin.p.openCollected', { count: reveal?.answered ?? 0 })}
                </p>
                <p className="text-base text-muted-foreground sm:text-lg">{t('finalAdmin.p.openGradeLater')}</p>
              </div>
              {rubric && (
                <div className="rounded-2xl bg-muted/60 p-5 sm:p-6">
                  <p className="text-base font-semibold sm:text-lg">{t('finalAdmin.p.rubric')}</p>
                  <p className="mt-2 whitespace-pre-line text-lg leading-relaxed sm:text-xl">{tx(rubric)}</p>
                </div>
              )}
            </div>
          )}
        </motion.section>

        <Leaderboard participants={participants} />
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-border/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <KeyboardHint />
        <div className="flex flex-col-reverse gap-3 sm:ml-auto sm:flex-row sm:items-center">
          {!isLast && (
            <Button variant="outline" size="lg" disabled={busy} onClick={onFinishEarly} className="h-12 gap-2 rounded-xl px-5 text-base">
              <Flag className="size-5" />
              {t('finalAdmin.p.finishEarly')}
            </Button>
          )}
          {isLast ? (
            <PrimaryButton onClick={onFinish} busy={busy} icon={<Flag />}>
              {t('finalAdmin.p.finish')}
            </PrimaryButton>
          ) : (
            <PrimaryButton onClick={onNext} busy={busy} icon={<ArrowRight />}>
              {t('finalAdmin.p.next')}
            </PrimaryButton>
          )}
        </div>
      </div>
    </div>
  )
}

function FinishedView({ sessionId, participants }: { sessionId: string; participants: FinalParticipant[] }) {
  const { t, tf } = useLanguage()
  const ranking = useMemo(() => [...participants].sort(byRank), [participants])
  const podium = ranking.slice(0, 3)
  // Visual order: 2nd, 1st, 3rd.
  const podiumOrder = [1, 0, 2].filter((i) => podium[i])
  const heights = ['h-36 sm:h-44', 'h-24 sm:h-32', 'h-16 sm:h-24']

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="flex flex-col items-center gap-3 text-center"
      >
        <motion.div
          initial={{ scale: 0.6, rotate: -8 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex size-16 items-center justify-center rounded-2xl gradient-accent shadow-premium sm:size-20"
        >
          <Trophy className="size-8 text-white sm:size-10" />
        </motion.div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{t('finalAdmin.p.finishedTitle')}</h1>
        {podium.length > 0 && <p className="text-lg text-muted-foreground sm:text-2xl">{t('finalAdmin.p.finishedSubtitle')}</p>}
      </motion.header>

      {podium.length === 0 ? (
        <p className="text-center text-lg text-muted-foreground">{t('finalAdmin.p.noParticipants')}</p>
      ) : (
        <div className="flex items-end justify-center gap-3 sm:gap-5">
          {podiumOrder.map((i) => {
            const p = podium[i]
            return (
              <motion.div
                key={p.userId}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (2 - i) * 0.25, ease: EASE }}
                className="flex w-24 flex-col items-center gap-2 sm:w-52"
              >
                {i === 0 && <Crown className="size-8 text-amber-500 sm:size-10" />}
                <p className="line-clamp-2 text-center text-base font-semibold leading-tight sm:text-2xl">{p.displayName || '—'}</p>
                <p className="text-sm text-muted-foreground tabular-nums sm:text-lg">
                  {tf('finalAdmin.p.pointsValue', { points: p.score })}
                </p>
                <div
                  className={cn(
                    'flex w-full items-start justify-center rounded-t-2xl pt-3 shadow-premium',
                    heights[i],
                    i === 0 ? 'gradient-accent' : 'bg-muted',
                  )}
                >
                  <span
                    className={cn(
                      'flex size-10 items-center justify-center rounded-full text-xl font-bold sm:size-12 sm:text-2xl',
                      MEDAL_STYLES[i],
                    )}
                  >
                    {p.rank ?? i + 1}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      )}

      {ranking.length > 0 && (
        <section className="rounded-3xl border border-border/60 bg-card p-5 shadow-premium sm:p-6">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{t('finalAdmin.p.ranking')}</h2>
          <div className="mt-4 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span>{t('finalAdmin.col.rank')}</span>
            <span>{t('finalAdmin.col.name')}</span>
            <span className="text-right">{t('finalAdmin.col.points')}</span>
          </div>
          <ol className="mt-2 flex flex-col gap-1.5">
            {ranking.map((p, i) => (
              <li
                key={p.userId}
                className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-xl px-1 py-1.5 even:bg-muted/40"
              >
                <RankBadge index={(p.rank ?? i + 1) - 1} rank={p.rank ?? i + 1} />
                <span className="truncate text-lg font-medium sm:text-xl">{p.displayName || '—'}</span>
                <span className="pr-2 text-right text-lg font-bold tabular-nums sm:text-xl">{p.score}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      <div className="flex flex-col justify-center gap-3 pb-4 sm:flex-row">
        <Button asChild size="lg" className="h-12 gap-2 rounded-xl border-0 px-6 text-base gradient-accent text-white hover:opacity-90">
          <Link to={`/admin/final/${sessionId}/results`}>
            <ChartColumn className="size-5" />
            {t('finalAdmin.p.openResults')}
          </Link>
        </Button>
        <BackToSessions />
      </div>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FinalPresenter() {
  const { id = '' } = useParams<{ id: string }>()
  const { t, tf } = useLanguage()

  const [session, setSession] = useState<FinalSession | null | undefined>(undefined)
  const [loadError, setLoadError] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)
  const [offset, setOffset] = useState(0)
  const [offsetReady, setOffsetReady] = useState(false)
  const [participants, setParticipants] = useState<FinalParticipant[]>([])
  const [answerKeys, setAnswerKeys] = useState<ReadonlySet<string>>(() => new Set())
  const [now, setNow] = useState(() => Date.now())
  const [busy, setBusy] = useState(false)
  const [confirm, setConfirm] = useState<'finish' | 'finishEarly'>('finish')
  const [confirmOpen, setConfirmOpen] = useState(false)
  const pendingRef = useRef(false)
  const autoRevealRef = useRef(new Set<string>())

  const applySession = useCallback((next: FinalSession | null) => {
    setSession((prev) => {
      if (!next) return null
      if (!prev || prev.id !== next.id) return next
      return progressOf(next) >= progressOf(prev) ? next : prev
    })
  }, [])

  // Session row: initial load + realtime (the subscription also resyncs on (re)connect).
  useEffect(() => {
    if (!id) return
    let active = true
    fetchSession(id)
      .then((s) => {
        if (!active) return
        applySession(s)
        setLoadError(false)
      })
      .catch(() => {
        if (active) setLoadError(true)
      })
    const unsubscribe = subscribeSession(id, (row) => {
      if (active) applySession(row)
    })
    return () => {
      active = false
      unsubscribe()
    }
  }, [id, reloadKey, applySession])

  // Server clock offset for countdowns. Auto-reveal waits for it (a local clock running ahead
  // would otherwise reveal early after a refresh); fall back to the local clock after a few seconds.
  useEffect(() => {
    let active = true
    const fallback = setTimeout(() => {
      if (active) setOffsetReady(true)
    }, OFFSET_FALLBACK_MS)
    fetchServerOffset()
      .then((o) => {
        if (active) setOffset(o)
      })
      .catch(() => undefined)
      .finally(() => {
        if (!active) return
        clearTimeout(fallback)
        setOffsetReady(true)
      })
    return () => {
      active = false
      clearTimeout(fallback)
    }
  }, [])

  // Participants: realtime (debounced — every answer touches the row) + a 20 s refresh for "last seen".
  useEffect(() => {
    if (!id) return
    let active = true
    let timer: ReturnType<typeof setTimeout> | null = null
    const load = () => {
      fetchParticipants(id)
        .then((rows) => {
          if (active) setParticipants(rows)
        })
        .catch(() => undefined)
    }
    const schedule = () => {
      if (timer) return
      timer = setTimeout(() => {
        timer = null
        load()
      }, 400)
    }
    load()
    const unsubscribe = subscribeParticipants(id, schedule)
    const interval = setInterval(load, 20_000)
    return () => {
      active = false
      if (timer) clearTimeout(timer)
      clearInterval(interval)
      unsubscribe()
    }
  }, [id])

  // Answers stream (admin sees every row).
  useEffect(() => {
    if (!id) return
    return subscribeAnswers(id, (row) => {
      setAnswerKeys((prev) => {
        const key = answerKey(row.questionId, row.userId)
        if (prev.has(key)) return prev
        const next = new Set(prev)
        next.add(key)
        return next
      })
    })
  }, [id])

  const status = session?.status
  const currentIndex = session?.currentIndex ?? -1
  const currentQid = session && currentIndex >= 0 ? (session.questionIds[currentIndex] ?? null) : null

  // On entering a question: load answers already given (refresh / reconnect), then poll lightly as a safety net.
  useEffect(() => {
    if (!id || !currentQid || status !== 'question') return
    let active = true
    const load = () => {
      fetchAnswers(id)
        .then((rows) => {
          if (!active) return
          setAnswerKeys((prev) => {
            let changed = false
            const next = new Set(prev)
            for (const a of rows) {
              const key = answerKey(a.questionId, a.userId)
              if (!next.has(key)) {
                next.add(key)
                changed = true
              }
            }
            return changed ? next : prev
          })
        })
        .catch(() => undefined)
    }
    load()
    const interval = setInterval(load, 5000)
    return () => {
      active = false
      clearInterval(interval)
    }
  }, [id, currentQid, status])

  // Fresh scores for the reveal leaderboard, and final ranks written by finish_final_session —
  // fetched directly so they never depend on the participants realtime channel being alive.
  useEffect(() => {
    if (!id || (status !== 'reveal' && status !== 'finished')) return
    let active = true
    fetchParticipants(id)
      .then((rows) => {
        if (active) setParticipants(rows)
      })
      .catch(() => undefined)
    return () => {
      active = false
    }
  }, [id, status, currentIndex])

  // Safety nets that never touch the realtime channels (re-subscribing a topic that is still
  // leaving yields a dead channel in realtime-js): poll the session while it is live, and the
  // participant list a bit faster in the lobby so names appear promptly even without realtime.
  const isLiveStatus = status === 'lobby' || status === 'question' || status === 'reveal'
  useEffect(() => {
    if (!id || !isLiveStatus) return
    let active = true
    const interval = setInterval(() => {
      fetchSession(id)
        .then((s) => {
          if (active) applySession(s)
        })
        .catch(() => undefined)
    }, 10_000)
    return () => {
      active = false
      clearInterval(interval)
    }
  }, [id, isLiveStatus, applySession])

  useEffect(() => {
    if (!id || status !== 'lobby') return
    let active = true
    const interval = setInterval(() => {
      fetchParticipants(id)
        .then((rows) => {
          if (active) setParticipants(rows)
        })
        .catch(() => undefined)
    }, 5000)
    return () => {
      active = false
      clearInterval(interval)
    }
  }, [id, status])

  // Clock: fast while a question is running (countdown), slow otherwise.
  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), status === 'question' ? 250 : 5000)
    return () => clearInterval(interval)
  }, [status])

  const serverNow = now + offset
  const activeParticipants = participants.filter((p) => serverNow - Date.parse(p.lastSeenAt) <= ACTIVE_WINDOW_MS)
  const answeredIds = useMemo(() => {
    const ids = new Set<string>()
    if (!currentQid) return ids
    const prefix = `${currentQid}|`
    for (const key of answerKeys) if (key.startsWith(prefix)) ids.add(key.slice(prefix.length))
    return ids
  }, [answerKeys, currentQid])
  const answeredCount = answeredIds.size
  const expectedCount = Math.max(activeParticipants.length, answeredCount)
  const everyoneAnswered = activeParticipants.length > 0 && activeParticipants.every((p) => answeredIds.has(p.userId))

  const deadlineMs = session?.questionDeadlineAt ? Date.parse(session.questionDeadlineAt) : null
  const startedMs = session?.questionStartedAt ? Date.parse(session.questionStartedAt) : null
  const totalMs = deadlineMs !== null && startedMs !== null ? Math.max(1000, deadlineMs - startedMs) : 1000
  const remainingMs = deadlineMs !== null ? Math.max(0, deadlineMs - serverNow) : 0
  const autoRevealDue =
    offsetReady &&
    status === 'question' &&
    ((deadlineMs !== null && serverNow >= deadlineMs + AUTO_REVEAL_GRACE_MS) || everyoneAnswered)

  const runTransition = useCallback(
    async (fn: () => Promise<FinalSession | null>): Promise<boolean> => {
      if (pendingRef.current) return false
      pendingRef.current = true
      setBusy(true)
      try {
        const result = await fn()
        if (result) applySession(result)
        return true
      } catch {
        toast.error(t('common.saveFailed'))
        return false
      } finally {
        pendingRef.current = false
        setBusy(false)
      }
    },
    [applySession, t],
  )

  const reveal = useCallback(
    (s: FinalSession) => {
      const q = getFinalQuestion(s.questionIds[s.currentIndex] ?? '')
      return runTransition(() => revealQuestion(s.id, s.currentIndex, q?.type === 'choice' ? q.explanation : null))
    },
    [runTransition],
  )

  /** lobby → first question, or reveal → next question. `expectedIndex` = index as this screen sees it. */
  const openNext = useCallback(
    (s: FinalSession, expectedIndex: number) => {
      const q = getFinalQuestion(s.questionIds[expectedIndex + 1] ?? '')
      if (!q) {
        toast.error(t('finalAdmin.p.questionMissing'))
        return
      }
      void runTransition(() => openQuestion(s.id, expectedIndex, q))
    },
    [runTransition, t],
  )

  const finish = useCallback(async () => {
    if (!session) return
    const sid = session.id
    const ok = await runTransition(async () => {
      await finishSession(sid)
      return fetchSession(sid)
    })
    if (ok) setConfirmOpen(false)
  }, [session, runTransition])

  // Auto-reveal once per question: deadline passed or every present participant answered.
  useEffect(() => {
    if (!autoRevealDue || !session || session.status !== 'question') return
    const key = `${session.id}:${session.currentIndex}`
    if (autoRevealRef.current.has(key) || pendingRef.current) return
    autoRevealRef.current.add(key)
    void reveal(session)
  }, [autoRevealDue, session, reveal])

  const isLast = session ? session.currentIndex >= session.questionIds.length - 1 : false

  const askConfirm = (kind: 'finish' | 'finishEarly') => {
    setConfirm(kind)
    setConfirmOpen(true)
  }

  // Keyboard: Space / ArrowRight = primary action of the current step.
  const primaryRef = useRef<() => void>(() => undefined)
  const confirmOpenRef = useRef(false)
  useEffect(() => {
    confirmOpenRef.current = confirmOpen
    primaryRef.current = () => {
      if (!session || pendingRef.current) return
      if (session.status === 'lobby') openNext(session, -1)
      else if (session.status === 'question') void reveal(session)
      else if (session.status === 'reveal') {
        if (isLast) askConfirm('finish')
        else openNext(session, session.currentIndex)
      }
    }
  })
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.repeat || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return
      if (e.key !== ' ' && e.key !== 'ArrowRight') return
      if (confirmOpenRef.current) return
      const el = e.target instanceof HTMLElement ? e.target : null
      if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName))) return
      if (e.key === ' ' && el && el.tagName === 'BUTTON') {
        // A button focused via keyboard handles Space natively; one left focused by a mouse click
        // (language toggle, "Reveal now", a closed dialog's trigger) must not swallow the primary action.
        if (isKeyboardFocused(el)) return
        el.blur()
      }
      e.preventDefault()
      primaryRef.current()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // ─── Render ──────────────────────────────────────────────────────────────

  let body: ReactNode
  if (!id || session === null) {
    body = (
      <CenterMessage icon={<SearchX className="text-muted-foreground" />} title={t('finalAdmin.p.notFound')} body={t('finalAdmin.p.notFoundBody')}>
        <BackToSessions variant="default" />
      </CenterMessage>
    )
  } else if (session === undefined) {
    body = loadError ? (
      <CenterMessage icon={<RefreshCw className="text-muted-foreground" />} title={t('common.loadFailed')}>
        <Button
          size="lg"
          className="h-11 gap-2 px-5"
          onClick={() => {
            setLoadError(false)
            setReloadKey((k) => k + 1)
          }}
        >
          <RefreshCw className="size-4" />
          {t('common.retry')}
        </Button>
        <BackToSessions />
      </CenterMessage>
    ) : (
      <div className="flex flex-1 items-center justify-center">
        <div className="size-10 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
      </div>
    )
  } else if (session.status === 'cancelled') {
    body = (
      <CenterMessage
        icon={<Ban className="text-muted-foreground" />}
        title={t('finalAdmin.p.cancelledTitle')}
        body={t('finalAdmin.p.cancelledBody')}
      >
        <BackToSessions variant="default" />
      </CenterMessage>
    )
  } else if (session.status === 'finished') {
    body = <FinishedView sessionId={session.id} participants={participants} />
  } else if (session.status === 'lobby') {
    body = <LobbyView participants={participants} busy={busy} onStart={() => openNext(session, -1)} />
  } else {
    const bankQuestion = currentQid ? getFinalQuestion(currentQid) : undefined
    const payload = session.currentQuestion ?? (bankQuestion ? toCurrentQuestion(bankQuestion) : null)
    if (!payload) {
      body = (
        <CenterMessage icon={<SearchX className="text-muted-foreground" />} title={t('finalAdmin.p.questionMissing')}>
          <Button size="lg" className="h-11 gap-2 px-5" disabled={busy} onClick={() => askConfirm('finishEarly')}>
            <Flag className="size-4" />
            {t('finalAdmin.p.finishEarly')}
          </Button>
        </CenterMessage>
      )
    } else if (session.status === 'question') {
      body = (
        <QuestionView
          question={payload}
          remainingMs={remainingMs}
          totalMs={totalMs}
          answeredCount={answeredCount}
          expectedCount={expectedCount}
          busy={busy}
          onReveal={() => void reveal(session)}
        />
      )
    } else {
      body = (
        <RevealView
          question={payload}
          bankQuestion={bankQuestion}
          reveal={session.reveal && session.reveal.questionId === payload.id ? session.reveal : null}
          participants={participants}
          isLast={isLast}
          busy={busy}
          onNext={() => openNext(session, session.currentIndex)}
          onFinish={() => askConfirm('finish')}
          onFinishEarly={() => askConfirm('finishEarly')}
        />
      )
    }
  }

  const inQuestion = session && (session.status === 'question' || session.status === 'reveal')

  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 sm:px-8">
          <div className="flex min-w-0 flex-1 basis-56 items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl gradient-accent">
              <Trophy className="size-5 text-white" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-base font-semibold tracking-tight sm:text-xl">{session?.title || t('test.final')}</p>
              <p className="truncate text-xs text-muted-foreground sm:text-sm">
                {t('appName')} · {t('test.final')}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {session && inQuestion && (
              <Chip>
                {tf('finalAdmin.p.questionOf', { current: session.currentIndex + 1, total: session.questionIds.length })}
              </Chip>
            )}
            {session && session.status === 'lobby' && (
              <Chip>{tf('finalAdmin.p.questionsTotal', { count: session.questionIds.length })}</Chip>
            )}
            <Chip title={t('finalAdmin.p.participants')}>
              <Users className="size-4" />
              <span className="sr-only">{t('finalAdmin.p.participants')}:</span>
              {participants.length}
            </Chip>
            <LangToggle />
            <Button asChild variant="ghost" size="sm" className="gap-1.5 text-muted-foreground">
              <Link to="/admin/final">
                <LogOut className="size-4" />
                {t('finalAdmin.p.exit')}
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col px-4 py-6 sm:px-8 lg:py-10">{body}</main>

      <Dialog
        open={confirmOpen}
        onOpenChange={(o) => {
          if (!o && !busy) setConfirmOpen(false)
        }}
      >
        <DialogContent showCloseButton={!busy}>
          <DialogHeader>
            <DialogTitle>{t('finalAdmin.p.finishTitle')}</DialogTitle>
            <DialogDescription>
              {confirm === 'finishEarly' && session
                ? tf('finalAdmin.p.finishEarlyBody', { asked: session.askedCount, total: session.questionIds.length })
                : t('finalAdmin.p.finishBody')}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" disabled={busy} onClick={() => setConfirmOpen(false)}>
              {t('common.cancel')}
            </Button>
            <Button disabled={busy} onClick={() => void finish()} className="gap-1.5">
              {busy ? <LoaderCircle className="animate-spin" /> : <Flag />}
              {t('finalAdmin.p.finish')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
