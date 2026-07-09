import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/i18n/LanguageContext'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  className?: string
}

export function SearchInput({ value, onChange, className }: SearchInputProps) {
  const { t } = useLanguage()

  return (
    <div className={className}>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={t('common.search')}
          className="h-11 pl-10"
        />
      </div>
    </div>
  )
}
