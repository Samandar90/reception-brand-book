import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CircleCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/i18n/LanguageContext'
import { useProgress } from '@/contexts/ProgressContext'
import { modules } from '@/data/modules'
import { getIcon } from '@/lib/icons'
import type { TranslationKey } from '@/i18n/translations'
import type { Module } from '@/types'

const DIFFICULTY_KEY: Record<Module['difficulty'], TranslationKey> = {
  beginner: 'lesson.difficulty.beginner',
  intermediate: 'lesson.difficulty.intermediate',
  advanced: 'lesson.difficulty.advanced',
}

export default function ModulesIndex() {
  const { t, tx } = useLanguage()
  const { isModuleComplete } = useProgress()

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">{t('modules.title')}</h1>
        <p className="mt-2 text-[15px] text-muted-foreground">{t('modules.subtitle')}</p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, i) => {
          const complete = isModuleComplete(module.slug)
          const Icon = getIcon(module.icon)

          return (
            <motion.div
              key={module.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              <Link
                to={`/modules/${module.slug}`}
                className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-5 shadow-premium transition-colors hover:border-primary/30"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-muted">
                    <Icon className="size-5" strokeWidth={2} />
                  </div>
                  {complete ? (
                    <CircleCheck className="size-5 text-emerald-500" />
                  ) : (
                    <span className="flex size-6 items-center justify-center rounded-full border border-border text-[11px] font-medium text-muted-foreground">
                      {module.order}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-semibold tracking-tight">{tx(module.title)}</h3>
                <p className="mt-1.5 line-clamp-2 flex-1 text-sm text-muted-foreground">{tx(module.description)}</p>
                <div className="mt-3 flex items-center gap-2">
                  <Badge variant="secondary" className="rounded-full text-[11px]">
                    {module.readingTimeMin} {t('common.minutes')}
                  </Badge>
                  <Badge variant="secondary" className="rounded-full text-[11px]">
                    {t(DIFFICULTY_KEY[module.difficulty])}
                  </Badge>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
