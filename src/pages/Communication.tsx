import { useMemo, useState } from 'react'
import { SearchInput } from '@/components/shared/SearchInput'
import { PhraseCard } from '@/components/shared/PhraseCard'
import { useLanguage } from '@/i18n/LanguageContext'
import { communicationPhrases } from '@/data/communicationPhrases'
import { getIcon } from '@/lib/icons'

export default function Communication() {
  const { t, tx } = useLanguage()
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return communicationPhrases
    return communicationPhrases
      .map((category) => ({
        ...category,
        phrases: category.phrases.filter(
          (p) => p.ru.toLowerCase().includes(q) || p.uz.toLowerCase().includes(q) || p.en.toLowerCase().includes(q),
        ),
      }))
      .filter((category) => category.phrases.length > 0)
  }, [query])

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">{t('nav.communication')}</h1>
        <p className="mt-2 max-w-2xl text-[15px] text-muted-foreground">{t('dashboard.subtitle')}</p>
      </header>

      <SearchInput value={query} onChange={setQuery} className="max-w-md" />

      {filtered.length === 0 && (
        <p className="py-12 text-center text-sm text-muted-foreground">{t('common.noResults')}</p>
      )}

      <div className="flex flex-col gap-10">
        {filtered.map((category) => {
          const Icon = getIcon(category.icon)
          return (
            <section key={category.id}>
              <div className="mb-4 flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-xl bg-muted">
                  <Icon className="size-[18px]" strokeWidth={2} />
                </div>
                <h2 className="text-lg font-semibold tracking-tight">{tx(category.label)}</h2>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.phrases.map((phrase) => (
                  <PhraseCard key={phrase.id} phrase={phrase} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
