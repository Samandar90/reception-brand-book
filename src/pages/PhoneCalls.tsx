import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { phoneScripts } from '@/data/phoneScripts'
import type { CallScript } from '@/types'
import { cn } from '@/lib/utils'

function ScriptCard({ script, index }: { script: CallScript; index: number }) {
  const { tx, t } = useLanguage()

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:p-6"
    >
      <div className="mb-4 flex items-start gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted">
          <Phone className="size-[18px]" strokeWidth={2} />
        </div>
        <div>
          <h2 className="font-semibold tracking-tight">{tx(script.title)}</h2>
          <p className="mt-0.5 text-sm text-muted-foreground">{tx(script.description)}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        {script.lines.map((line, i) => {
          const isReceptionist = line.speaker === 'receptionist'
          return (
            <div key={i} className={cn('flex flex-col gap-1', isReceptionist ? 'items-start' : 'items-end')}>
              <span className="px-1 text-[11px] font-medium text-muted-foreground">
                {isReceptionist ? t('lesson.receptionist') : t('lesson.guest')}
              </span>
              <div
                className={cn(
                  'max-w-[90%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed sm:max-w-[80%]',
                  isReceptionist
                    ? 'rounded-tl-sm border border-border/60 bg-background'
                    : 'rounded-tr-sm bg-primary text-primary-foreground',
                )}
              >
                {tx(line.text)}
              </div>
            </div>
          )
        })}
      </div>
    </motion.section>
  )
}

export default function PhoneCalls() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">{t('nav.phoneCalls')}</h1>
        <p className="mt-2 max-w-2xl text-[15px] text-muted-foreground">{t('dashboard.subtitle')}</p>
      </header>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {phoneScripts.map((script, i) => (
          <ScriptCard key={script.id} script={script} index={i} />
        ))}
      </div>
    </div>
  )
}
