import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { CopyButton } from '@/components/shared/CopyButton'
import { useLanguage } from '@/i18n/LanguageContext'
import { whatsappTemplates } from '@/data/whatsappTemplates'
import { LANGUAGE_FLAGS } from '@/i18n/translations'

export default function WhatsApp() {
  const { t, tx } = useLanguage()

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">{t('nav.whatsapp')}</h1>
        <p className="mt-2 max-w-2xl text-[15px] text-muted-foreground">{t('dashboard.subtitle')}</p>
      </header>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {whatsappTemplates.map((template, i) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-border/60 bg-card p-5 shadow-premium"
          >
            <div className="mb-3 flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10">
                <MessageCircle className="size-4 text-emerald-500" />
              </div>
              <h2 className="font-semibold tracking-tight">{tx(template.title)}</h2>
            </div>
            <div className="flex flex-col gap-3">
              {(['ru', 'uz', 'en'] as const).map((lang) => (
                <div key={lang} className="flex items-start justify-between gap-2 rounded-xl bg-muted/50 p-3">
                  <div className="min-w-0">
                    <span className="text-xs text-muted-foreground">{LANGUAGE_FLAGS[lang]}</span>
                    <p className="mt-0.5 whitespace-pre-line text-sm leading-relaxed">{template[lang]}</p>
                  </div>
                  <CopyButton text={template[lang]} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
