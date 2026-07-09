import { motion } from 'framer-motion'
import { BedDouble, Check } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { roomTypes } from '@/data/roomTypes'

export default function RoomTypes() {
  const { t, tx } = useLanguage()

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">{t('nav.roomTypes')}</h1>
        <p className="mt-2 max-w-2xl text-[15px] text-muted-foreground">{t('dashboard.subtitle')}</p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {roomTypes.map((room, i) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col rounded-2xl border border-border/60 bg-card p-5 shadow-premium"
          >
            <div className="mb-3 flex size-10 items-center justify-center rounded-xl gradient-accent">
              <BedDouble className="size-5 text-white" strokeWidth={2} />
            </div>
            <h2 className="font-semibold tracking-tight">{tx(room.name)}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{tx(room.description)}</p>
            <ul className="mt-3 flex flex-col gap-1.5 border-t border-border/60 pt-3">
              {room.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                  <span className="text-muted-foreground">{tx(feature)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
