import { Moon, Sun, LogOut, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useLanguage } from '@/i18n/LanguageContext'
import { useSettings } from '@/contexts/SettingsContext'
import { useAuth } from '@/contexts/AuthContext'
import { LANGUAGE_LABELS, LANGUAGE_FLAGS } from '@/i18n/translations'
import type { Language } from '@/types'
import { MobileNav } from './MobileNav'

const LANGS: Language[] = ['en', 'ru', 'uz']

export function Topbar() {
  const { lang, setLang, t } = useLanguage()
  const { settings, updateSettings } = useSettings()
  const { employeeName, logout } = useAuth()

  const isDark = settings.theme === 'dark'
  const initials = employeeName
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b border-border/60 bg-background/80 px-4 backdrop-blur-xl sm:px-6">
      <div className="flex items-center gap-2">
        <MobileNav />
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-1.5 px-2.5">
              <span className="text-base leading-none">{LANGUAGE_FLAGS[lang]}</span>
              <span className="hidden text-sm font-medium sm:inline">{LANGUAGE_LABELS[lang]}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {LANGS.map((l) => (
              <DropdownMenuItem key={l} onClick={() => setLang(l)} className="gap-2">
                <span className="text-base leading-none">{LANGUAGE_FLAGS[l]}</span>
                <span className="flex-1">{LANGUAGE_LABELS[l]}</span>
                {l === lang && <Check className="size-4 text-primary" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="ghost"
          size="icon"
          aria-label={t('settings.theme')}
          onClick={() => updateSettings({ theme: isDark ? 'light' : 'dark' })}
        >
          {isDark ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-9 gap-2 rounded-full px-1.5 sm:px-2.5">
              <Avatar className="size-7">
                <AvatarFallback className="gradient-accent text-xs font-semibold text-white">
                  {initials || 'HA'}
                </AvatarFallback>
              </Avatar>
              <span className="hidden max-w-[120px] truncate text-sm font-medium sm:inline">
                {employeeName || t('appName')}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="truncate">{employeeName}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout} className="gap-2 text-destructive focus:text-destructive">
              <LogOut className="size-4" />
              {t('settings.logout')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
