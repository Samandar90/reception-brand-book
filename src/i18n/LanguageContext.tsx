import { createContext, useContext, useMemo, type ReactNode } from 'react'
import type { Language, LocalizedText } from '@/types'
import { translate, type TranslationKey } from './translations'
import { useSettings } from '@/contexts/SettingsContext'

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: TranslationKey) => string
  tx: (text: LocalizedText) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { settings, updateSettings } = useSettings()
  const lang = settings.language

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang: (language: Language) => updateSettings({ language }),
      t: (key: TranslationKey) => translate(key, lang),
      tx: (text: LocalizedText) => text[lang],
    }),
    [lang, updateSettings],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
