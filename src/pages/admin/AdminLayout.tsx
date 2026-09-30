import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChartColumn, LayoutDashboard, Trophy, Users, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations'
import { EASE } from './adminKit'

interface AdminTab {
  to: string
  labelKey: TranslationKey
  icon: LucideIcon
  end?: boolean
}

const TABS: AdminTab[] = [
  { to: '/admin', labelKey: 'admin.tab.overview', icon: LayoutDashboard, end: true },
  { to: '/admin/accounts', labelKey: 'admin.tab.accounts', icon: Users },
  { to: '/admin/final', labelKey: 'admin.tab.final', icon: Trophy },
  { to: '/admin/questions', labelKey: 'admin.tab.questions', icon: ChartColumn },
]

export default function AdminLayout() {
  const { t } = useLanguage()
  const { pathname } = useLocation()
  // Employee pages are opened from the overview, so keep that tab highlighted.
  const onEmployeePage = pathname.startsWith('/admin/employees')

  return (
    <div className="flex flex-col gap-6">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <h1 className="text-3xl font-semibold tracking-tight">{t('admin.title')}</h1>
        <p className="mt-2 text-[15px] text-muted-foreground">{t('admin.subtitle')}</p>
      </motion.header>

      <nav
        aria-label={t('admin.title')}
        className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        <div className="inline-flex min-w-max gap-1 rounded-2xl border border-border/60 bg-card p-1">
          {TABS.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2 text-sm font-medium transition-colors',
                  isActive || (tab.end && onEmployeePage)
                    ? 'gradient-accent text-white shadow-sm'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                )
              }
            >
              <tab.icon className="size-4" />
              {t(tab.labelKey)}
            </NavLink>
          ))}
        </div>
      </nav>

      <Outlet />
    </div>
  )
}
