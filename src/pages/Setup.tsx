import { useEffect, useState, type FormEvent } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { KeyRound, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/contexts/AuthContext'
import { useLanguage } from '@/i18n/LanguageContext'
import { bootstrapAdmin, fetchSetupStatus } from '@/lib/setupApi'
import type { TranslationKey } from '@/i18n/translations'

const LOGIN_RE = /^[a-z0-9][a-z0-9._-]{2,31}$/

const ERROR_KEY: Record<string, TranslationKey> = {
  forbidden: 'setup.errorKey',
  admin_exists: 'setup.errorExists',
  invalid_login: 'setup.errorLogin',
  weak_password: 'setup.errorPassword',
  invalid_name: 'setup.errorName',
}

/** First launch: creates the owner (administrator) account with the bootstrap key. */
export default function Setup() {
  const { t } = useLanguage()
  const { status, signIn, configured } = useAuth()
  const navigate = useNavigate()
  const [hasAdmin, setHasAdmin] = useState<boolean | null>(null)
  const [key, setKey] = useState('')
  const [fullName, setFullName] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!configured) return
    fetchSetupStatus()
      .then((s) => setHasAdmin(s.hasAdmin))
      .catch(() => setHasAdmin(null))
  }, [configured])

  if (status === 'signedIn') return <Navigate to="/" replace />

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const normalized = login.trim().toLowerCase()
    if (!fullName.trim()) return setError(t('setup.errorName'))
    if (!LOGIN_RE.test(normalized)) return setError(t('setup.errorLogin'))
    if (password.length < 6) return setError(t('setup.errorPassword'))
    setSubmitting(true)
    setError(null)
    try {
      const res = await bootstrapAdmin({ key: key.trim(), login: normalized, password, fullName: fullName.trim() })
      if (!res.ok) {
        setError(t(ERROR_KEY[res.error] ?? 'login.networkError'))
        return
      }
      const signed = await signIn(normalized, password, true)
      navigate(signed.ok ? '/admin/accounts' : '/login', { replace: true })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-background px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[440px]"
      >
        <Card className="border-border/60 py-8 shadow-premium">
          <CardContent className="flex flex-col gap-6 px-6 sm:px-8">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex size-14 items-center justify-center rounded-2xl gradient-accent shadow-premium">
                <ShieldCheck className="size-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold tracking-tight">{t('setup.title')}</h1>
                <p className="mt-1 text-sm text-muted-foreground">{t('setup.subtitle')}</p>
              </div>
            </div>

            {hasAdmin ? (
              <div className="flex flex-col gap-4 text-center">
                <p className="rounded-xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">
                  {t('setup.alreadyDone')}
                </p>
                <Button asChild>
                  <Link to="/login">{t('login.signIn')}</Link>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="setup-key" className="text-xs text-muted-foreground">
                    {t('setup.keyLabel')}
                  </Label>
                  <div className="relative">
                    <KeyRound className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="setup-key" value={key} onChange={(e) => setKey(e.target.value)} className="pl-9" autoComplete="off" />
                  </div>
                  <p className="text-xs text-muted-foreground">{t('setup.keyHint')}</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="setup-name" className="text-xs text-muted-foreground">
                    {t('setup.nameLabel')}
                  </Label>
                  <Input id="setup-name" value={fullName} onChange={(e) => setFullName(e.target.value)} autoComplete="name" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="setup-login" className="text-xs text-muted-foreground">
                    {t('login.loginLabel')}
                  </Label>
                  <Input
                    id="setup-login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    autoCapitalize="none"
                    spellCheck={false}
                    autoComplete="username"
                  />
                  <p className="text-xs text-muted-foreground">{t('setup.loginHint')}</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="setup-password" className="text-xs text-muted-foreground">
                    {t('login.passwordLabel')}
                  </Label>
                  <Input
                    id="setup-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                </div>
                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}
                <Button type="submit" size="lg" className="h-11" disabled={submitting || !configured}>
                  {submitting ? t('common.saving') : t('setup.submit')}
                </Button>
                <Link to="/login" className="text-center text-xs text-muted-foreground hover:text-foreground">
                  {t('common.back')}
                </Link>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
