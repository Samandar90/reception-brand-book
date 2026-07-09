import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Callout } from '@/components/shared/Callout'
import { useLanguage } from '@/i18n/LanguageContext'
import type { LocalizedText, CalloutData } from '@/types'

interface StandardSection {
  heading: LocalizedText
  body: LocalizedText
  callout?: CalloutData
}

const SECTIONS: StandardSection[] = [
  {
    heading: { ru: 'Внешний вид и опрятность', uz: 'Tashqi ko\'rinish va ozodalik', en: 'Appearance & grooming' },
    body: {
      ru: 'Ресепшен — лицо отеля. Форма всегда чистая и выглаженная, бейдж с именем виден, причёска и макияж сдержанные. Опрятность сотрудника формирует у гостя доверие к качеству всего отеля ещё до первого слова.',
      uz: 'Resepshen — mehmonxonaning yuzi. Forma har doim toza va dazmollangan, ism yorlig\'i ko\'rinib turadi, soch turmagi va makiyaj vazmin bo\'ladi. Xodimning ozodaligi mehmonda birinchi so\'zdan oldinoq mehmonxona sifatiga ishonch uyg\'otadi.',
      en: 'The front desk is the face of the hotel. Uniforms are always clean and pressed, name badges visible, hair and makeup understated. A staff member\'s tidiness builds a guest\'s trust in the whole hotel before a single word is spoken.',
    },
  },
  {
    heading: { ru: 'Тон голоса и язык тела', uz: 'Ovoz ohangi va tana tili', en: 'Tone of voice & body language' },
    body: {
      ru: 'Говорите чуть медленнее и ниже, чем в обычной жизни — это звучит увереннее. Держите открытую позу, не скрещивайте руки, поддерживайте зрительный контакт 60–70% времени разговора.',
      uz: 'Odatdagidan biroz sekinroq va pastroq ohangda gapiring — bu ishonchliroq eshitiladi. Ochiq turing, qo\'llaringizni ko\'ksingizga bog\'lamang, suhbat davomida vaqtning 60-70 foizida ko\'z aloqasini saqlang.',
      en: 'Speak slightly slower and lower than in casual conversation — it reads as more confident. Keep an open posture, avoid crossed arms, and hold eye contact for 60–70% of the conversation.',
    },
    callout: {
      type: 'tip',
      title: { ru: 'Улыбка слышна в голосе', uz: 'Tabassum ovozda eshitiladi', en: 'A smile is audible' },
      body: {
        ru: 'Даже по телефону улыбка меняет тон голоса на более тёплый и дружелюбный — гость это чувствует, даже не видя вас.',
        uz: 'Hatto telefon orqali ham tabassum ovoz ohangini iliqroq va do\'stonaroq qiladi — mehmon buni sizni ko\'rmasa ham his qiladi.',
        en: 'Even on the phone, smiling changes your tone to something warmer and friendlier — guests can feel it without seeing you.',
      },
    },
  },
  {
    heading: { ru: 'Пунктуальность и надёжность', uz: 'Vaqtga rioya qilish va ishonchlilik', en: 'Punctuality & reliability' },
    body: {
      ru: 'Приходите на смену на 10 минут раньше, чтобы получить информацию от предыдущей смены. Никогда не оставляйте стойку без присмотра — если нужно отойти, предупредите коллегу.',
      uz: 'Oldingi smenadan ma\'lumot olish uchun smenangizga 10 daqiqa oldin keling. Stoykani hech qachon nazoratsiz qoldirmang — chetga chiqish kerak bo\'lsa, hamkasbingizni ogohlantiring.',
      en: 'Arrive 10 minutes before your shift to get a handover briefing. Never leave the desk unattended — if you must step away, tell a colleague first.',
    },
  },
  {
    heading: { ru: 'Философия "моментов истины"', uz: '"Haqiqat lahzalari" falsafasi', en: 'The "moments of truth" philosophy' },
    body: {
      ru: 'Каждое взаимодействие с гостем — от звонка до прощания — это "момент истины", который формирует итоговое впечатление о пребывании. Относитесь к каждому из них как к единственному шансу произвести хорошее впечатление.',
      uz: 'Qo\'ng\'iroqdan xayrlashuvgacha bo\'lgan har bir mehmon bilan aloqa — bu turar joy haqidagi umumiy taassurotni shakllantiruvchi "haqiqat lahzasi". Har biriga yaxshi taassurot qoldirishning yagona imkoniyati sifatida qarang.',
      en: 'Every interaction with a guest — from the first phone call to the final goodbye — is a "moment of truth" that shapes their overall impression of the stay. Treat each one as your only chance to make it count.',
    },
    callout: {
      type: 'golden-rule',
      title: { ru: 'Гостеприимство — это забота, а не сценарий', uz: 'Mehmondo\'stlik — bu ssenariy emas, g\'amxo\'rlik', en: 'Hospitality is care, not a script' },
      body: {
        ru: 'Заученные фразы важны, но искренняя забота о комфорте гостя всегда чувствуется и ценится больше, чем идеально произнесённый текст.',
        uz: 'Yodlangan iboralar muhim, lekin mehmon qulayligiga bo\'lgan samimiy g\'amxo\'rlik har doim mukammal aytilgan matndan ko\'ra ko\'proq his qilinadi va qadrlanadi.',
        en: 'Memorized phrases matter, but genuine care for the guest\'s comfort is always felt — and valued — more than a perfectly delivered script.',
      },
    },
  },
]

export default function ReceptionStandards() {
  const { t, tx } = useLanguage()

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">{t('nav.receptionStandards')}</h1>
        <p className="mt-2 max-w-2xl text-[15px] text-muted-foreground">
          {t('appName')} — {t('appSubtitle')}
        </p>
      </header>

      <div className="flex flex-col gap-8">
        {SECTIONS.map((section, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xl font-semibold tracking-tight">{tx(section.heading)}</h2>
            <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">{tx(section.body)}</p>
            {section.callout && (
              <div className="mt-4">
                <Callout callout={section.callout} />
              </div>
            )}
          </motion.section>
        ))}
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/[0.04] p-5 dark:bg-violet-500/[0.06]">
        <Sparkles className="size-5 shrink-0 text-violet-500" />
        <p className="text-sm text-muted-foreground">
          {tx({
            ru: 'Эти стандарты — фундамент для всех 15 модулей академии. Начните с раздела "Учебные модули" в меню.',
            uz: 'Bu standartlar akademiyaning barcha 15 moduli uchun poydevordir. Menyudagi "O\'quv modullari" bo\'limidan boshlang.',
            en: 'These standards are the foundation for all 15 academy modules. Start with the "Modules" section in the sidebar.',
          })}
        </p>
      </div>
    </div>
  )
}
