import { useState, type ReactNode } from 'react'
import { Moon, Sun, Laptop, Languages, Type, Sparkles, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations'
import { useSettings, type Theme, type FontSize } from '@/contexts/SettingsContext'
import { useProgress } from '@/contexts/ProgressContext'
import { LANGUAGE_FLAGS, LANGUAGE_LABELS } from '@/i18n/translations'
import type { Language } from '@/types'
import { cn } from '@/lib/utils'

const THEMES: { value: Theme; icon: typeof Sun }[] = [
  { value: 'light', icon: Sun },
  { value: 'dark', icon: Moon },
  { value: 'system', icon: Laptop },
]

const FONT_SIZES: FontSize[] = ['sm', 'md', 'lg']
const LANGS: Language[] = ['en', 'ru', 'uz']

function SettingsRow({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Sun
  title: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-xl bg-muted">
          <Icon className="size-[18px]" />
        </div>
        <p className="font-medium">{title}</p>
      </div>
      {children}
    </div>
  )
}

export default function Settings() {
  const { t, lang, setLang } = useLanguage()
  const { settings, updateSettings } = useSettings()
  const { resetModules } = useProgress()
  const [confirmOpen, setConfirmOpen] = useState(false)

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">{t('settings.title')}</h1>
      </header>

      <div className="flex flex-col gap-4">
        <SettingsRow icon={Sun} title={t('settings.theme')}>
          <div className="flex items-center gap-1 rounded-full border border-border/60 p-1">
            {THEMES.map(({ value, icon: Icon }) => (
              <button
                key={value}
                onClick={() => updateSettings({ theme: value })}
                className={cn(
                  'flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors',
                  settings.theme === value ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted',
                )}
              >
                <Icon className="size-3.5" />
                {t(`settings.${value}` as TranslationKey)}
              </button>
            ))}
          </div>
        </SettingsRow>

        <SettingsRow icon={Languages} title={t('settings.language')}>
          <div className="flex items-center gap-1 rounded-full border border-border/60 p-1">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  'flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors',
                  lang === l ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted',
                )}
              >
                <span>{LANGUAGE_FLAGS[l]}</span>
                {LANGUAGE_LABELS[l]}
              </button>
            ))}
          </div>
        </SettingsRow>

        <SettingsRow icon={Type} title={t('settings.fontSize')}>
          <div className="flex items-center gap-1 rounded-full border border-border/60 p-1">
            {FONT_SIZES.map((size) => (
              <button
                key={size}
                onClick={() => updateSettings({ fontSize: size })}
                className={cn(
                  'rounded-full px-3 py-1.5 text-sm transition-colors',
                  settings.fontSize === size ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted',
                )}
              >
                {t(`settings.${size === 'sm' ? 'small' : size === 'md' ? 'medium' : 'large'}` as TranslationKey)}
              </button>
            ))}
          </div>
        </SettingsRow>

        <SettingsRow icon={Sparkles} title={t('settings.animations')}>
          <div className="flex items-center gap-2.5">
            <span className="text-sm text-muted-foreground">
              {settings.animationsEnabled ? t('settings.on') : t('settings.off')}
            </span>
            <Switch
              checked={settings.animationsEnabled}
              onCheckedChange={(checked) => updateSettings({ animationsEnabled: checked })}
            />
          </div>
        </SettingsRow>

        <SettingsRow icon={RotateCcw} title={t('settings.resetProgress')}>
          <Button variant="destructive" size="sm" onClick={() => setConfirmOpen(true)}>
            {t('settings.resetProgress')}
          </Button>
        </SettingsRow>
      </div>

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('settings.resetConfirmTitle')}</DialogTitle>
            <DialogDescription>{t('settings.resetConfirmBody')}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmOpen(false)}>
              {t('common.cancel')}
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                void resetModules()
                setConfirmOpen(false)
              }}
            >
              {t('settings.resetConfirmAction')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
