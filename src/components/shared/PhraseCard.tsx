import { motion } from 'framer-motion'
import { CopyButton } from './CopyButton'
import { LANGUAGE_FLAGS } from '@/i18n/translations'
import type { Phrase } from '@/types'

export function PhraseCard({ phrase }: { phrase: Phrase }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-border/60 bg-card p-4 shadow-premium"
    >
      <div className="flex flex-col gap-2.5">
        <Row flag={LANGUAGE_FLAGS.ru} text={phrase.ru} />
        <Row flag={LANGUAGE_FLAGS.uz} text={phrase.uz} />
        <Row flag={LANGUAGE_FLAGS.en} text={phrase.en} />
      </div>
    </motion.div>
  )
}

function Row({ flag, text }: { flag: string; text: string }) {
  return (
    <div className="flex items-start justify-between gap-2">
      <div className="flex min-w-0 items-start gap-2">
        <span className="mt-0.5 text-sm leading-none">{flag}</span>
        <p className="text-sm leading-relaxed">{text}</p>
      </div>
      <CopyButton text={text} />
    </div>
  )
}
