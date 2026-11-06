import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Award, Download, GraduationCap, Printer, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProgressRing } from '@/components/shared/ProgressRing'
import { useLanguage } from '@/i18n/LanguageContext'
import { useAuth } from '@/contexts/AuthContext'
import { useProgress } from '@/contexts/ProgressContext'
import { generateCertificatePdf } from '@/lib/pdf'
import { bestFinalAttempt, certificateAttempt, isFinalGraded } from '@/lib/certificate'
import { CERTIFICATE_MIN_FINAL_PERCENT, HOTEL_NAME } from '@/lib/constants'

export default function Certificate() {
  const { t, tf, lang } = useLanguage()
  const { user } = useAuth()
  const { attemptsOf, latestAttempt } = useProgress()
  // The certificate is always issued to the account holder; the name cannot be edited.
  const name = user?.fullName ?? ''
  const [generating, setGenerating] = useState(false)
  const certRef = useRef<HTMLDivElement>(null)

  const finals = attemptsOf('final')
  const earned = certificateAttempt(finals)
  const best = bestFinalAttempt(finals)
  const unlocked = earned !== null
  const englishLevel = latestAttempt('english')?.level ?? null
  const russianLevel = latestAttempt('russian')?.level ?? null
  const issuedOn = new Date(earned?.finishedAt ?? Date.now()).toLocaleDateString(
    lang === 'ru' ? 'ru-RU' : lang === 'uz' ? 'uz-UZ' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' },
  )

  async function handleDownload() {
    if (!certRef.current) return
    setGenerating(true)
    try {
      await generateCertificatePdf(certRef.current, `${HOTEL_NAME.replace(/\s+/g, '-')}-Certificate-${name || 'Employee'}.pdf`)
    } finally {
      setGenerating(false)
    }
  }

  if (!unlocked) {
    const bestPct = best ? Math.round(best.percent) : 0
    const pending = best !== null && !isFinalGraded(best)
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-6 py-16 text-center">
        <ProgressRing
          percent={Math.min(100, (bestPct / CERTIFICATE_MIN_FINAL_PERCENT) * 100)}
          size={140}
          label={best ? `${bestPct}%` : '—'}
        />
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{t('certificate.title')}</h1>
          <p className="mt-2 text-[15px] text-muted-foreground">
            {tf('certificate.locked', { min: CERTIFICATE_MIN_FINAL_PERCENT })}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            {t('certificate.finalResult')}:{' '}
            {best ? `${bestPct}%` : t('certificate.finalNone')}
            {pending && ` · ${t('certificate.finalPending')}`}
          </p>
        </div>
        <Button asChild variant="outline" className="gap-2">
          <Link to="/final">
            <Trophy className="size-4" />
            {t('certificate.toFinal')}
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">{t('certificate.title')}</h1>
        <p className="mt-2 max-w-2xl text-[15px] text-muted-foreground">
          {tf('certificate.subtitle', { min: CERTIFICATE_MIN_FINAL_PERCENT })}
        </p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-x-auto"
      >
        <div
          ref={certRef}
          style={{
            background: 'linear-gradient(135deg, #fdfcf9 0%, #f7f3ea 100%)',
            border: '1px solid #e2d9c3',
            color: '#2a2620',
            fontFamily: 'Georgia, "Times New Roman", serif',
          }}
          className="relative mx-auto flex min-w-[720px] flex-col items-center gap-6 rounded-[28px] px-16 py-14 text-center"
        >
          <div
            aria-hidden
            style={{ border: '2px solid #c9a94d' }}
            className="pointer-events-none absolute inset-4 rounded-[20px]"
          />

          <div
            style={{ background: 'linear-gradient(135deg, #6d4fd6, #b34fd6)' }}
            className="flex size-16 items-center justify-center rounded-2xl"
          >
            <GraduationCap className="size-8 text-white" strokeWidth={2} />
          </div>

          <div>
            <p style={{ letterSpacing: '0.2em', color: '#9a8a5f' }} className="text-xs font-semibold uppercase">
              {HOTEL_NAME}
            </p>
            <h1 className="mt-2 text-3xl font-semibold" style={{ color: '#1f1b14' }}>
              {t('certificate.congrats')}
            </h1>
          </div>

          <div>
            <p style={{ color: '#7a7263' }} className="text-sm">
              {t('certificate.presentedTo')}
            </p>
            <p className="mt-2 text-4xl font-semibold" style={{ color: '#1f1b14', fontFamily: 'Georgia, serif' }}>
              {name || t('certificate.employeeName')}
            </p>
          </div>

          <p style={{ color: '#4a4438' }} className="max-w-md text-[15px] leading-relaxed">
            {bookingSuffix(lang)}
          </p>

          <p style={{ color: '#4a4438' }} className="text-sm font-semibold">
            {t('certificate.finalResult')}: {Math.round(earned.percent)}%
          </p>

          {(englishLevel || russianLevel) && (
            <p style={{ color: '#7a7263' }} className="text-sm">
              {t('certificate.levels')}:{' '}
              {[englishLevel && `English ${englishLevel}`, russianLevel && `Русский ${russianLevel}`].filter(Boolean).join(' · ')}
            </p>
          )}

          <div className="mt-2 flex items-center gap-3">
            <Award style={{ color: '#c9a94d' }} className="size-5" />
            <span style={{ color: '#7a7263' }} className="text-sm">
              {t('certificate.date')}: {issuedOn}
            </span>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3">
        <Button onClick={handleDownload} disabled={generating} size="lg" className="gap-2">
          <Download className="size-4" />
          {generating ? t('common.loading') : t('certificate.downloadPdf')}
        </Button>
        <Button onClick={() => window.print()} variant="outline" size="lg" className="gap-2">
          <Printer className="size-4" />
          {t('common.print')}
        </Button>
      </div>
    </div>
  )
}

function bookingSuffix(lang: 'ru' | 'uz' | 'en') {
  const map = {
    ru: 'успешно завершил(а) программу обучения Reception Academy и продемонстрировал(а) владение стандартами гостеприимства.',
    uz: "Reception Academy o'quv dasturini muvaffaqiyatli yakunladi va mehmondo'stlik standartlarini egallaganini ko'rsatdi.",
    en: 'has successfully completed the Reception Academy training program and demonstrated mastery of hospitality standards.',
  }
  return map[lang]
}
