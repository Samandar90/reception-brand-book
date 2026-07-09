import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/i18n/LanguageContext'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 px-6 text-center">
      <div className="flex size-16 items-center justify-center rounded-2xl gradient-accent shadow-premium">
        <Compass className="size-8 text-white" />
      </div>
      <h1 className="text-2xl font-semibold tracking-tight">404</h1>
      <p className="max-w-sm text-sm text-muted-foreground">
        This page doesn&apos;t exist in the Reception Academy.
      </p>
      <Button asChild>
        <Link to="/">{t('nav.dashboard')}</Link>
      </Button>
    </div>
  )
}
