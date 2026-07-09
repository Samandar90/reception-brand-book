import { motion } from 'framer-motion'
import { CalendarCheck, CreditCard, CircleHelp, RotateCcw, Ban, Clock4, UserX } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import bookingComGuide from '@/data/bookingComGuide'

const POLICIES = [
  { key: 'refundPolicy', icon: RotateCcw, titleKey: 'refund' } as const,
  { key: 'cancellationPolicy', icon: Ban, titleKey: 'cancellation' } as const,
  { key: 'lateArrivalPolicy', icon: Clock4, titleKey: 'lateArrival' } as const,
  { key: 'noShowPolicy', icon: UserX, titleKey: 'noShow' } as const,
]

const POLICY_LABELS = {
  refund: { ru: 'Возврат средств', uz: 'Pulni qaytarish', en: 'Refunds' },
  cancellation: { ru: 'Отмена бронирования', uz: 'Bronni bekor qilish', en: 'Cancellation' },
  lateArrival: { ru: 'Поздний заезд', uz: 'Kech kelish', en: 'Late arrival' },
  noShow: { ru: 'Неявка гостя', uz: 'Mehmon kelmasligi', en: 'No-show' },
}

export default function BookingCom() {
  const { t, tx } = useLanguage()

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">{t('nav.bookingCom')}</h1>
        <p className="mt-2 max-w-2xl text-[15px] text-muted-foreground">{t('dashboard.subtitle')}</p>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:p-6"
      >
        <div className="mb-3 flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl bg-blue-500/10">
            <CalendarCheck className="size-[18px] text-blue-500" />
          </div>
          <h2 className="font-semibold tracking-tight">
            {tx({ ru: 'Как встречать гостей Booking.com', uz: 'Booking.com mehmonlarini qanday kutib olish', en: 'Welcoming Booking.com guests' })}
          </h2>
        </div>
        <ul className="flex flex-col gap-2.5">
          {bookingComGuide.welcomeTips.map((tip, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-blue-500/60" />
              {tx(tip)}
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:p-6"
      >
        <div className="mb-3 flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl bg-muted">
            <CreditCard className="size-[18px]" />
          </div>
          <h2 className="font-semibold tracking-tight">
            {tx({ ru: 'Объяснение оплаты', uz: 'To\'lovni tushuntirish', en: 'Explaining payment' })}
          </h2>
        </div>
        <p className="text-[15px] leading-relaxed text-muted-foreground">{tx(bookingComGuide.paymentExplanation)}</p>
      </motion.section>

      <section>
        <div className="mb-4 flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl bg-muted">
            <CircleHelp className="size-[18px]" />
          </div>
          <h2 className="text-lg font-semibold tracking-tight">
            {tx({ ru: 'Частые вопросы гостей', uz: 'Mehmonlarning tez-tez so\'raladigan savollari', en: 'Common guest questions' })}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {bookingComGuide.commonQuestions.map((qa, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.35, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-border/60 bg-card p-4 shadow-premium"
            >
              <p className="text-sm font-semibold">{tx(qa.question)}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{tx(qa.answer)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">
          {tx({ ru: 'Особые ситуации', uz: 'Maxsus vaziyatlar', en: 'Special situations' })}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {POLICIES.map(({ key, icon: Icon, titleKey }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.35, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-border/60 bg-card p-5 shadow-premium"
            >
              <div className="mb-2 flex items-center gap-2.5">
                <Icon className="size-[18px] text-muted-foreground" />
                <h3 className="font-semibold tracking-tight">{tx(POLICY_LABELS[titleKey])}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{tx(bookingComGuide[key])}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
