import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpenCheck, ListTodo, Clock3, ArrowRight, LayoutGrid } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StatCard } from '@/components/shared/StatCard'
import { ProgressRing } from '@/components/shared/ProgressRing'
import { useLanguage } from '@/i18n/LanguageContext'
import { useAuth } from '@/contexts/AuthContext'
import { useProgress } from '@/contexts/ProgressContext'
import { modules } from '@/data/modules'

export default function Dashboard() {
  const { t, tx } = useLanguage()
  const { employeeName } = useAuth()
  const { progressPercent, completedCount, remainingCount, estimatedRemainingMinutes, isModuleComplete } =
    useProgress()

  const nextModule = modules.find((m) => !isModuleComplete(m.slug)) ?? modules[0]
  const firstName = employeeName.trim().split(' ')[0] || employeeName

  return (
    <div className="flex flex-col gap-8">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-premium sm:p-8"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full opacity-[0.12] gradient-accent blur-3xl"
        />
        <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{t('dashboard.welcome')}</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">{firstName || t('appName')}</h1>
            <p className="mt-2 max-w-md text-[15px] text-muted-foreground">{t('dashboard.subtitle')}</p>
            <Button asChild size="lg" className="mt-5 gap-2">
              <Link to={`/modules/${nextModule.slug}`}>
                {t('dashboard.continueLearning')}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <ProgressRing percent={progressPercent} size={140} label={t('dashboard.todayProgress')} />
        </div>
      </motion.section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard icon={BookOpenCheck} label={t('dashboard.completedLessons')} value={completedCount} accent="gradient" />
        <StatCard icon={ListTodo} label={t('dashboard.remainingLessons')} value={remainingCount} />
        <StatCard
          icon={Clock3}
          label={t('dashboard.estimatedTime')}
          value={`${estimatedRemainingMinutes} ${t('common.minutes')}`}
        />
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight">{t('modules.title')}</h2>
          <Button asChild variant="ghost" size="sm" className="gap-1.5 text-muted-foreground">
            <Link to="/modules">
              <LayoutGrid className="size-4" />
              {t('dashboard.viewAllModules')}
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.slice(0, 6).map((module, i) => {
            const complete = isModuleComplete(module.slug)
            return (
              <motion.div
                key={module.slug}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
              >
                <Link
                  to={`/modules/${module.slug}`}
                  className="block h-full rounded-2xl border border-border/60 bg-card p-5 shadow-premium transition-colors hover:border-primary/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground">
                      {t('modules.title')} {module.order}
                    </span>
                    {complete && <span className="size-2 rounded-full bg-emerald-500" />}
                  </div>
                  <h3 className="mt-2 font-semibold tracking-tight">{tx(module.title)}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{tx(module.description)}</p>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
