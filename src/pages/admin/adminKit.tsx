import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Check, Copy, Eye, EyeOff, LoaderCircle, RefreshCw, TriangleAlert, WandSparkles } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations'
import { AdminUsersFailure, resetPassword, setAccountActive } from '@/lib/adminApi'
import { CERTIFICATE_MIN_KNOWLEDGE_PERCENT, TOTAL_MODULES } from '@/lib/constants'
import type { EmployeeOverview, Language } from '@/types'

/**
 * Shared building blocks of the admin pages (status rules, formatting, account dialogs).
 * Kept out of the route files so each page stays a component-only module (fast refresh).
 */

export const EASE = [0.16, 1, 0.3, 1] as const

export const INACTIVE_DAYS = 14
export const LEVELS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1'] as const

/** 0 (A0) … 5 (C1); null when the test was not taken or the level is unknown. */
export function levelIndex(level: string | null | undefined): number | null {
  if (!level) return null
  const i = (LEVELS as readonly string[]).indexOf(level)
  return i >= 0 ? i : null
}

export function daysSince(iso: string | null, now: number): number | null {
  if (!iso) return null
  const ts = Date.parse(iso)
  if (Number.isNaN(ts)) return null
  return Math.max(0, Math.floor((now - ts) / 86_400_000))
}

export type EmployeeStatus = 'notStarted' | 'learning' | 'testsDone' | 'certified'

export const STATUS_ORDER: Record<EmployeeStatus, number> = { notStarted: 0, learning: 1, testsDone: 2, certified: 3 }

export const STATUS_KEY: Record<EmployeeStatus, TranslationKey> = {
  notStarted: 'admin.status.notStarted',
  learning: 'admin.status.learning',
  testsDone: 'admin.status.testsDone',
  certified: 'admin.status.certified',
}

const STATUS_CLASS: Record<EmployeeStatus, string> = {
  notStarted: 'bg-muted text-muted-foreground',
  learning: 'bg-sky-500/12 text-sky-700 dark:text-sky-300',
  testsDone: 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
  certified: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
}

export interface StatusInput {
  modulesCompleted: number
  knowledgeBest: number | null
  englishLevel: string | null
  russianLevel: string | null
  finalPercent: number | null
  hasAttempts: boolean
}

/**
 * not started = no modules and no attempts; certified = all modules, knowledge best ≥ 80,
 * both language levels and a final result; tests done = modules + knowledge done but a language
 * level or the final is missing; learning = everything else.
 */
export function statusOf(s: StatusInput): EmployeeStatus {
  const modulesDone = s.modulesCompleted >= TOTAL_MODULES
  const knowledgeOk = s.knowledgeBest !== null && s.knowledgeBest >= CERTIFICATE_MIN_KNOWLEDGE_PERCENT
  if (modulesDone && knowledgeOk && s.englishLevel && s.russianLevel && s.finalPercent !== null) return 'certified'
  if (modulesDone && knowledgeOk) return 'testsDone'
  if (s.modulesCompleted === 0 && !s.hasAttempts) return 'notStarted'
  return 'learning'
}

export function employeeStatus(r: EmployeeOverview): EmployeeStatus {
  return statusOf({
    modulesCompleted: r.modulesCompleted,
    knowledgeBest: r.knowledgeBest,
    englishLevel: r.englishLevel,
    russianLevel: r.russianLevel,
    finalPercent: r.finalPercent,
    hasAttempts: r.knowledgeAt !== null || r.englishAttempts > 0 || r.russianAttempts > 0 || r.finalAt !== null,
  })
}

export function StatusBadge({ status, className }: { status: EmployeeStatus; className?: string }) {
  const { t } = useLanguage()
  return <Badge className={cn('rounded-full', STATUS_CLASS[status], className)}>{t(STATUS_KEY[status])}</Badge>
}

export const LEVEL_BAR_CLASS: Record<string, string> = {
  A0: 'bg-rose-500',
  A1: 'bg-amber-500',
  A2: 'bg-amber-400',
  B1: 'bg-sky-500',
  B2: 'bg-sky-600',
  C1: 'bg-emerald-500',
}

const LEVEL_BADGE_CLASS: Record<string, string> = {
  A0: 'bg-rose-500/12 text-rose-700 dark:text-rose-300',
  A1: 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
  A2: 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
  B1: 'bg-sky-500/12 text-sky-700 dark:text-sky-300',
  B2: 'bg-sky-500/12 text-sky-700 dark:text-sky-300',
  C1: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
}

export function LevelBadge({ level, empty = '—' }: { level: string | null; empty?: ReactNode }) {
  if (!level) return <span className="text-muted-foreground">{empty}</span>
  return (
    <Badge className={cn('rounded-full font-semibold tabular-nums', LEVEL_BADGE_CLASS[level] ?? 'bg-muted text-foreground')}>
      {level}
    </Badge>
  )
}

/** Text colour for a knowledge percentage. */
export function percentTone(p: number | null): string {
  if (p === null) return 'text-muted-foreground'
  if (p >= CERTIFICATE_MIN_KNOWLEDGE_PERCENT) return 'text-emerald-600 dark:text-emerald-400'
  if (p < 60) return 'text-rose-600 dark:text-rose-400'
  return 'text-foreground'
}

// ─── Formatting ──────────────────────────────────────────────────────────────

const LOCALES: Record<Language, string> = { ru: 'ru-RU', uz: 'uz-Latn-UZ', en: 'en-GB' }

export type AdminFormat = ReturnType<typeof useAdminFormat>

export function useAdminFormat() {
  const { lang, t, tf } = useLanguage()
  return useMemo(() => {
    const locale = LOCALES[lang]
    const dateFmt = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric' })
    const dateTimeFmt = new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
    const timeFmt = new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit' })
    const dayFmt = new Intl.DateTimeFormat(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    const valid = (iso: string | null | undefined): iso is string => !!iso && !Number.isNaN(Date.parse(iso))

    const duration = (sec: number | null | undefined): string => {
      if (sec === null || sec === undefined || !Number.isFinite(sec)) return '—'
      const s = Math.max(0, Math.round(sec))
      if (s < 60) return tf('admin.dur.sec', { n: s })
      const totalMin = Math.round(s / 60)
      if (totalMin < 60) return tf('admin.dur.min', { n: totalMin })
      return tf('admin.dur.hmin', { h: Math.floor(totalMin / 60), m: totalMin % 60 })
    }

    const relative = (iso: string | null | undefined, now: number): string => {
      if (!valid(iso)) return t('admin.rel.never')
      const diff = Math.max(0, now - Date.parse(iso))
      const min = Math.floor(diff / 60_000)
      if (min < 1) return t('admin.rel.justNow')
      if (min < 60) return tf('admin.rel.minutes', { n: min })
      const h = Math.floor(min / 60)
      if (h < 24) return tf('admin.rel.hours', { n: h })
      const d = Math.floor(h / 24)
      if (d < 60) return tf('admin.rel.days', { n: d })
      return dateFmt.format(new Date(iso))
    }

    return {
      date: (iso: string | null | undefined) => (valid(iso) ? dateFmt.format(new Date(iso)) : '—'),
      dateTime: (iso: string | null | undefined) => (valid(iso) ? dateTimeFmt.format(new Date(iso)) : '—'),
      time: (iso: string | null | undefined) => (valid(iso) ? timeFmt.format(new Date(iso)) : '—'),
      day: (iso: string | null | undefined) => (valid(iso) ? dayFmt.format(new Date(iso)) : '—'),
      percent: (p: number | null | undefined) => (p === null || p === undefined ? '—' : `${Math.round(p)}%`),
      duration,
      relative,
    }
  }, [lang, t, tf])
}

// ─── States ──────────────────────────────────────────────────────────────────

export function LoadingState({ className }: { className?: string }) {
  const { t } = useLanguage()
  return (
    <div className={cn('flex min-h-[30svh] items-center justify-center', className)} role="status">
      <LoaderCircle className="size-7 animate-spin text-muted-foreground" />
      <span className="sr-only">{t('common.loading')}</span>
    </div>
  )
}

export function ErrorState({ onRetry, className }: { onRetry: () => void; className?: string }) {
  const { t } = useLanguage()
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-card px-6 py-12 text-center shadow-premium',
        className,
      )}
    >
      <div className="flex size-11 items-center justify-center rounded-xl bg-rose-500/10">
        <TriangleAlert className="size-5 text-rose-600 dark:text-rose-400" />
      </div>
      <p className="font-medium">{t('common.loadFailed')}</p>
      <p className="max-w-sm text-sm text-muted-foreground">{t('admin.loadFailedHint')}</p>
      <Button variant="outline" onClick={onRetry} className="mt-1 gap-2">
        <RefreshCw className="size-4" />
        {t('common.retry')}
      </Button>
    </div>
  )
}

// ─── Accounts: passwords, errors, credentials ────────────────────────────────

const CONSONANTS = 'bdfghkmnprstvz'
const VOWELS = 'aeu'
const DIGITS = '23456789'

function randomIndex(n: number): number {
  const buf = new Uint32Array(1)
  crypto.getRandomValues(buf)
  return buf[0] % n
}

/** 8 characters that are easy to dictate: two lowercase syllables + 4 digits, no 0/O/1/l/I. */
export function generatePassword(): string {
  const pick = (s: string) => s[randomIndex(s.length)]
  const syllables = pick(CONSONANTS) + pick(VOWELS) + pick(CONSONANTS) + pick(VOWELS)
  let digits = ''
  for (let i = 0; i < 4; i++) digits += pick(DIGITS)
  return syllables + digits
}

export const LOGIN_RE = /^[a-z0-9][a-z0-9._-]{2,31}$/
export const MIN_PASSWORD = 6

export function normalizeLogin(value: string): string {
  return value.toLowerCase().replace(/\s+/g, '')
}

export function accountErrorKey(e: unknown): TranslationKey {
  if (e instanceof AdminUsersFailure) {
    switch (e.code) {
      case 'login_taken':
        return 'admin.err.loginTaken'
      case 'invalid_login':
        return 'admin.err.invalidLogin'
      case 'weak_password':
        return 'admin.err.weakPassword'
      case 'invalid_name':
        return 'admin.err.invalidName'
      case 'last_admin':
        return 'admin.err.lastAdmin'
      case 'cannot_change_self':
      case 'cannot_delete_self':
        return 'admin.err.self'
      case 'forbidden':
        return 'admin.err.forbidden'
      case 'unauthorized':
        return 'admin.err.unauthorized'
      case 'network':
        return 'admin.err.network'
      default:
        return 'admin.err.unknown'
    }
  }
  return 'common.saveFailed'
}

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    try {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.setAttribute('readonly', '')
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      const ok = document.execCommand('copy')
      ta.remove()
      return ok
    } catch {
      return false
    }
  }
}

/** Copies text and shows a short "Copied" state; the timer is cleared on unmount. */
export function useCopy() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState<string | null>(null)
  const timer = useRef<number | undefined>(undefined)
  useEffect(() => () => window.clearTimeout(timer.current), [])
  const copy = useCallback(
    async (text: string, id = 'default') => {
      const ok = await copyText(text)
      if (!ok) {
        toast.error(t('admin.copyFailed'))
        return
      }
      setCopied(id)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(null), 1800)
    },
    [t],
  )
  return { copied, copy }
}

export function siteAddress(): string {
  return window.location.origin + window.location.pathname
}

/** The login details the owner hands to an employee: site, login, password + "Copy all". */
export function CredentialsBlock({ fullName, login, password }: { fullName: string; login: string; password: string }) {
  const { t, tf } = useLanguage()
  const { copied, copy } = useCopy()
  const site = siteAddress()
  const rows = [
    { id: 'site', label: t('admin.cred.site'), value: site },
    { id: 'login', label: t('login.loginLabel'), value: login },
    { id: 'password', label: t('login.passwordLabel'), value: password },
  ]
  const all = [
    tf('admin.cred.heading', { name: fullName }),
    `${t('admin.cred.site')}: ${site}`,
    `${t('login.loginLabel')}: ${login}`,
    `${t('login.passwordLabel')}: ${password}`,
  ].join('\n')

  return (
    <div className="flex flex-col gap-3">
      <dl className="divide-y divide-border/60 overflow-hidden rounded-xl border border-border/60 bg-muted/30">
        {rows.map((row) => (
          <div key={row.id} className="flex items-center gap-3 px-3 py-2.5">
            <div className="min-w-0 flex-1">
              <dt className="text-xs text-muted-foreground">{row.label}</dt>
              <dd className={cn('break-all text-sm font-medium', row.id !== 'site' && 'font-mono text-base')}>{row.value}</dd>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => void copy(row.value, row.id)}
              aria-label={copied === row.id ? t('common.copied') : t('common.copy')}
              className="shrink-0 text-muted-foreground hover:text-foreground"
            >
              {copied === row.id ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />}
            </Button>
          </div>
        ))}
      </dl>
      <Button type="button" onClick={() => void copy(all, 'all')} className="gap-2">
        {copied === 'all' ? <Check className="size-4" /> : <Copy className="size-4" />}
        {copied === 'all' ? t('common.copied') : t('admin.cred.copyAll')}
      </Button>
    </div>
  )
}

export function PasswordField({
  id,
  value,
  onChange,
  invalid,
  disabled,
}: {
  id: string
  value: string
  onChange: (value: string) => void
  invalid?: boolean
  disabled?: boolean
}) {
  const { t } = useLanguage()
  const [show, setShow] = useState(false)
  return (
    <div className="flex gap-2">
      <div className="relative min-w-0 flex-1">
        <Input
          id={id}
          type={show ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete="new-password"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          aria-invalid={invalid || undefined}
          disabled={disabled}
          placeholder={t('admin.acc.passwordPlaceholder')}
          className="h-10 pr-10 font-mono"
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-1 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground hover:text-foreground"
          aria-label={show ? t('admin.acc.hidePassword') : t('admin.acc.showPassword')}
        >
          {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
      <Button
        type="button"
        variant="outline"
        className="h-10 gap-1.5"
        disabled={disabled}
        onClick={() => {
          onChange(generatePassword())
          setShow(true)
        }}
      >
        <WandSparkles className="size-4" />
        {t('admin.acc.generate')}
      </Button>
    </div>
  )
}

export interface AccountRef {
  id: string
  fullName: string
  login: string
  isActive: boolean
}

/** Mounted only while open (state resets each time). */
export function ResetPasswordDialog({ account, onClose }: { account: AccountRef; onClose: () => void }) {
  const { t, tf } = useLanguage()
  const [password, setPassword] = useState(generatePassword)
  const [pending, setPending] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (pending) return
    if (password.length < MIN_PASSWORD) {
      setError(t('admin.err.weakPassword'))
      return
    }
    setError(null)
    setPending(true)
    try {
      await resetPassword(account.id, password)
      setDone(true)
      toast.success(t('admin.acc.passwordChanged'))
    } catch (err) {
      const key = accountErrorKey(err)
      if (key === 'admin.err.weakPassword') setError(t(key))
      else toast.error(t(key))
    } finally {
      setPending(false)
    }
  }

  return (
    <Dialog open onOpenChange={(open) => !open && !pending && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('admin.acc.resetPassword')}</DialogTitle>
          <DialogDescription>
            {done ? t('admin.acc.resetDoneHint') : tf('admin.acc.resetHint', { name: account.fullName })}
          </DialogDescription>
        </DialogHeader>
        {done ? (
          <>
            <CredentialsBlock fullName={account.fullName} login={account.login} password={password} />
            <DialogFooter>
              <Button variant="outline" onClick={onClose}>
                {t('common.close')}
              </Button>
            </DialogFooter>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="reset-password">{t('admin.acc.newPassword')}</Label>
              <PasswordField
                id="reset-password"
                value={password}
                onChange={(v) => {
                  setPassword(v)
                  setError(null)
                }}
                invalid={!!error}
                disabled={pending}
              />
              {error ? (
                <p className="text-xs text-rose-600 dark:text-rose-400">{error}</p>
              ) : (
                <p className="text-xs text-muted-foreground">{t('admin.acc.passwordHint')}</p>
              )}
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose} disabled={pending}>
                {t('common.cancel')}
              </Button>
              <Button type="submit" disabled={pending}>
                {pending ? t('common.saving') : t('admin.acc.setPassword')}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

/** Confirm deactivation / activation. Mounted only while open. */
export function ToggleActiveDialog({
  account,
  onClose,
  onDone,
}: {
  account: AccountRef
  onClose: () => void
  onDone: (isActive: boolean) => void
}) {
  const { t, tf } = useLanguage()
  const [pending, setPending] = useState(false)
  const next = !account.isActive

  async function handleConfirm() {
    if (pending) return
    setPending(true)
    try {
      await setAccountActive(account.id, next)
      toast.success(next ? t('admin.acc.activated') : t('admin.acc.deactivated'))
      onDone(next)
      onClose()
    } catch (err) {
      toast.error(t(accountErrorKey(err)))
    } finally {
      setPending(false)
    }
  }

  return (
    <Dialog open onOpenChange={(open) => !open && !pending && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{next ? t('admin.acc.activateTitle') : t('admin.acc.deactivateTitle')}</DialogTitle>
          <DialogDescription>
            {tf(next ? 'admin.acc.activateBody' : 'admin.acc.deactivateBody', { name: account.fullName })}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={pending}>
            {t('common.cancel')}
          </Button>
          <Button variant={next ? 'default' : 'destructive'} onClick={() => void handleConfirm()} disabled={pending}>
            {pending ? t('common.saving') : next ? t('admin.acc.activate') : t('admin.acc.deactivate')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
