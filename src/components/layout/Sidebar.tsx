import { NavLink } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import { useAuth } from '@/contexts/AuthContext'
import { NAV_ITEMS } from './navConfig'

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useLanguage()
  const { isAdmin } = useAuth()
  const items = NAV_ITEMS.filter((item) => !item.adminOnly || isAdmin)

  return (
    <nav className="flex flex-col gap-1 px-3">
      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === '/'}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              'group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
              isActive
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground',
            )
          }
        >
          <item.icon className="size-[18px] shrink-0" strokeWidth={2} />
          <span className="truncate">{t(item.labelKey)}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export function Sidebar() {
  const { t } = useLanguage()

  return (
    <aside className="hidden lg:flex lg:w-[264px] lg:shrink-0 lg:flex-col border-r border-border/60 bg-sidebar">
      <div className="flex items-center gap-2.5 px-5 py-6">
        <div className="flex size-9 items-center justify-center rounded-xl gradient-accent shadow-premium">
          <GraduationCap className="size-5 text-white" strokeWidth={2.25} />
        </div>
        <div className="leading-tight">
          <p className="text-[15px] font-semibold tracking-tight">{t('appName')}</p>
          <p className="text-xs text-muted-foreground">{t('appSubtitle')}</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto pb-6">
        <SidebarNav />
      </div>
    </aside>
  )
}
