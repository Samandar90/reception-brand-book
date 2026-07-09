import { useState } from 'react'
import { Menu, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useLanguage } from '@/i18n/LanguageContext'
import { SidebarNav } from './Sidebar'

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={t('nav.dashboard')}>
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] p-0">
        <SheetHeader className="px-5 pt-6 pb-2">
          <SheetTitle className="flex items-center gap-2.5 text-left">
            <span className="flex size-9 items-center justify-center rounded-xl gradient-accent shadow-premium">
              <GraduationCap className="size-5 text-white" strokeWidth={2.25} />
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-semibold tracking-tight">{t('appName')}</span>
              <span className="block text-xs font-normal text-muted-foreground">{t('appSubtitle')}</span>
            </span>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-2 overflow-y-auto pb-6">
          <SidebarNav onNavigate={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  )
}
