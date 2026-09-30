import { useEffect, useState, type FormEvent } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, Moon, Sun, Lock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent } from '@/components/ui/card'
import { useAuth, type SignInFailure } from '@/contexts/AuthContext'
import { useSettings } from '@/contexts/SettingsContext'
import { useLanguage } from '@/i18n/LanguageContext'
import { LANGUAGE_FLAGS, LANGUAGE_LABELS, type TranslationKey } from '@/i18n/translations'
import type { Language } from '@/types'
import { fetchSetupStatus } from '@/lib/setupApi'

const LANGS: Language[] = ['en', 'ru', 'uz']

const FAILURE_KEY: Record<SignInFailure, TranslationKey> = {
  invalid: 'login.invalidCredentials',
  disabled: 'login.accountDisabled',
  network: 'login.networkError',
  not_configured: 'login.notConfigured',
  rate_limited: 'login.tooMany',
}

export default function Login() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const { status, signIn, configured } = useAuth()
  const { settings, updateSettings } = useSettings()
  const { lang, setLang, t } = useLanguage()
  const navigate = useNavigate()
  const [needsSetup, setNeedsSetup] = useState(false)

  useEffect(() => {
    if (!configured) return
    fetchSetupStatus()
      .then((s) => setNeedsSetup(!s.hasAdmin))
      .catch(() => setNeedsSetup(false))
  }, [configured])

  if (status === 'signedIn') return <Navigate to="/" replace />

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!login.trim() || !password) {
      setError(t('login.required'))
      return
    }
    setSubmitting(true)
    setError(null)
    try {
      const result = await signIn(login, password, remember)
      if (!result.ok) {
        setError(t(FAILURE_KEY[result.reason]))
        return
      }
      navigate('/', { replace: true })
    } finally {
      setSubmitting(false)
    }
  }

  const isDark = settings.theme === 'dark'

  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden bg-background px-4">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 size-[420px] rounded-full opacity-30 blur-[100px] gradient-accent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 size-[420px] rounded-full opacity-20 blur-[100px] gradient-accent"
      />

      <div className="absolute right-4 top-4 flex items-center gap-1.5 sm:right-6 sm:top-6">
        <div className="flex items-center overflow-hidden rounded-full border border-border/60 bg-card/60 backdrop-blur">
          {LANGS.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-2.5 py-1.5 text-sm transition-colors ${
                l === lang ? 'bg-primary/10' : 'hover:bg-muted'
              }`}
              aria-label={LANGUAGE_LABELS[l]}
              type="button"
            >
              {LANGUAGE_FLAGS[l]}
            </button>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => updateSettings({ theme: isDark ? 'light' : 'dark' })}
          type="button"
        >
          {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[400px]"
      >
        <Card className="shadow-premium border-border/60 py-8">
          <CardContent className="flex flex-col items-center gap-6 px-6 sm:px-8">
            <div className="flex flex-col items-center gap-3">
              <div className="flex size-14 items-center justify-center rounded-2xl gradient-accent shadow-premium">
                <GraduationCap className="size-7 text-white" strokeWidth={2.25} />
              </div>
              <div className="text-center">
                <h1 className="text-xl font-semibold tracking-tight">{t('appName')}</h1>
                <p className="mt-1 text-sm text-muted-foreground">{t('appSubtitle')}</p>
              </div>
            </div>

            {!configured && (
              <p className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-xs text-amber-700 dark:text-amber-300">
                {t('login.notConfigured')}
              </p>
            )}

            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="login" className="text-xs text-muted-foreground">
                  {t('login.loginLabel')}
                </Label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="login"
                    value={login}
                    onChange={(e) => {
                      setLogin(e.target.value)
                      setError(null)
                    }}
                    placeholder={t('login.loginPlaceholder')}
                    className="pl-9"
                    autoComplete="username"
                    autoCapitalize="none"
                    spellCheck={false}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="password" className="text-xs text-muted-foreground">
                  {t('login.passwordLabel')}
                </Label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      setError(null)
                    }}
                    placeholder={t('login.passwordPlaceholder')}
                    className="pl-9"
                    autoComplete="current-password"
                  />
                </div>
              </div>

              {error && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-sm text-destructive"
                  role="alert"
                >
                  {error}
                </motion.p>
              )}

              <div className="flex items-center justify-between rounded-xl border border-border/60 px-3 py-2.5">
                <Label htmlFor="remember" className="text-sm font-normal">
                  {t('login.rememberDevice')}
                </Label>
                <Switch id="remember" checked={remember} onCheckedChange={setRemember} />
              </div>

              <Button
                type="submit"
                className="mt-1 h-11 w-full text-[15px] font-medium"
                size="lg"
                disabled={submitting || !configured}
              >
                {submitting ? t('login.signingIn') : t('login.signIn')}
              </Button>
              <p className="text-center text-xs text-muted-foreground">{t('login.hint')}</p>
              {needsSetup && (
                <Link
                  to="/setup"
                  className="rounded-xl border border-dashed border-primary/40 px-3 py-2.5 text-center text-sm font-medium text-primary hover:bg-primary/5"
                >
                  {t('login.firstLaunch')}
                </Link>
              )}
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
