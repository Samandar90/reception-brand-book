import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Language } from '@/types'
import { readStorage, writeStorage } from '@/lib/storage'
import { SETTINGS_STORAGE_KEY } from '@/lib/constants'

export type Theme = 'light' | 'dark' | 'system'
export type FontSize = 'sm' | 'md' | 'lg'

export interface Settings {
  theme: Theme
  language: Language
  fontSize: FontSize
  animationsEnabled: boolean
}

const DEFAULT_SETTINGS: Settings = {
  theme: 'system',
  language: 'en',
  fontSize: 'md',
  animationsEnabled: true,
}

interface SettingsContextValue {
  settings: Settings
  updateSettings: (patch: Partial<Settings>) => void
}

const SettingsContext = createContext<SettingsContextValue | null>(null)

function resolveIsDark(theme: Theme): boolean {
  if (theme === 'dark') return true
  if (theme === 'light') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(() => readStorage(SETTINGS_STORAGE_KEY, DEFAULT_SETTINGS))

  useEffect(() => {
    writeStorage(SETTINGS_STORAGE_KEY, settings)

    const root = document.documentElement
    root.classList.toggle('dark', resolveIsDark(settings.theme))

    root.dataset.fontSize = settings.fontSize
    root.classList.toggle('motion-reduce-app', !settings.animationsEnabled)
  }, [settings])

  useEffect(() => {
    if (settings.theme !== 'system') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => document.documentElement.classList.toggle('dark', media.matches)
    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [settings.theme])

  const updateSettings = useCallback((patch: Partial<Settings>) => {
    setSettings((prev) => ({ ...prev, ...patch }))
  }, [])

  const value = useMemo(() => ({ settings, updateSettings }), [settings, updateSettings])

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}

export function useSettings(): SettingsContextValue {
  const ctx = useContext(SettingsContext)
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider')
  return ctx
}
