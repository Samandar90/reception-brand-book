import type { Module } from '@/types'

const bookingComGuests: Module = {
  slug: 'booking-com-guests',
  order: 6,
  icon: 'CalendarCheck',
  title: { ru: 'Гости с Booking.com', uz: 'Booking.com mehmonlari', en: 'Booking.com Guests' },
  description: {
    ru: 'Гости с онлайн-площадок приезжают с ожиданиями, сформированными онлайн-тарифом. Научитесь точно сверять бронь, объяснять условия и мягко приглашать оставить отзыв.',
    uz: 'Onlayn platformalardan kelgan mehmonlar onlayn tarif asosida shakllangan kutishlar bilan keladi. Bronni aniq solishtirishni, shartlarni tushuntirishni va sharh qoldirishga muloyimlik bilan taklif qilishni o\'rganing.',
    en: 'Guests from online platforms arrive with expectations shaped by the online rate they booked. Learn to match the reservation precisely, explain the conditions, and gently invite a review.',
  },
  readingTimeMin: 7,
  difficulty: 'intermediate',
  sections: [
    {
      id: 'overview',
      heading: { ru: 'Особенности работы с OTA-бронями', uz: 'OTA bronlari bilan ishlashning o\'ziga xosligi', en: 'What\'s different about OTA bookings' },
      body: {
        ru: 'Бронь с Booking.com приходит из внешней системы, поэтому первым шагом всегда должна быть точная сверка с PMS: даты, тип номера, тариф и статус оплаты. Многие тарифы на Booking.com являются предоплаченными и невозвратными — это нужно объяснять спокойно и заранее, до заселения, а не в момент конфликта. Гости также иногда спрашивают, почему цена на сайте отеля отличается от цены на Booking.com — здесь важно объяснить политику паритета цен, не критикуя платформу и не смущая гостя.',
        uz: 'Booking.com\'dan kelgan bron tashqi tizimdan keladi, shuning uchun birinchi qadam har doim PMS bilan aniq solishtirish bo\'lishi kerak: sanalar, xona turi, tarif va to\'lov holati. Booking.com\'dagi ko\'pgina tariflar oldindan to\'langan va qaytarilmaydigan bo\'ladi — buni ziddiyat paytida emas, balki tinch va oldindan, ro\'yxatdan o\'tishdan oldin tushuntirish kerak. Mehmonlar ba\'zan mehmonxona saytidagi narx nega Booking.com\'dagidan farq qilishini so\'rashadi — bu yerda platformani tanqid qilmasdan va mehmonni noqulay ahvolga solmasdan narx paritet siyosatini tushuntirish muhim.',
        en: 'A Booking.com reservation comes from an external system, so the first step is always to precisely match it against the PMS: dates, room type, rate, and payment status. Many Booking.com rates are prepaid and non-refundable — this should be explained calmly and in advance, before check-in, not in the middle of a conflict. Guests also sometimes ask why the hotel\'s own website price differs from the Booking.com price — here it\'s important to explain rate-parity policy without criticizing the platform or embarrassing the guest.',
      },
      callouts: [
        {
          type: 'tip',
          title: { ru: 'Сверяйте бронь до прихода гостя', uz: 'Mehmon kelishidan oldin bronni solishtiring', en: 'Match the reservation before the guest arrives' },
          body: {
            ru: 'Заранее сравните бронь из Booking.com Extranet с записью в PMS: тариф, включён ли завтрак, отменяемая бронь или нет. Это исключит спор на стойке.',
            uz: 'Booking.com Extranet\'dagi bronni PMS\'dagi yozuv bilan oldindan solishtiring: tarif, nonushta kiritilganmi, bron bekor qilinadigan yoki yo\'q. Bu stoykadagi bahsning oldini oladi.',
            en: 'Compare the Booking.com Extranet reservation against the PMS record in advance: rate, whether breakfast is included, whether it\'s cancellable. This prevents disputes at the desk.',
          },
        },
      ],
    },
    {
      id: 'dialogue',
      heading: { ru: 'Примеры диалогов', uz: 'Muloqot namunalari', en: 'Example dialogues' },
      body: {
        ru: 'Сравните грамотное объяснение невозвратного тарифа с уклончивым и небрежным ответом.',
        uz: 'Qaytarilmaydigan tarifning to\'g\'ri tushuntirilishini bosh tortuvchi va beparvo javob bilan solishtiring.',
        en: 'Compare a clear explanation of a non-refundable rate with an evasive, careless response.',
      },
      dialogues: [
        {
          type: 'good',
          lines: [
            {
              speaker: 'guest',
              text: { ru: 'Я бронировал через Booking.com. Могу я отменить бронь и вернуть деньги, если планы изменятся?', uz: 'Men Booking.com orqali bron qilgandim. Rejalar o\'zgarsa, bronni bekor qilib, pulni qaytarib olsam bo\'ladimi?', en: 'I booked through Booking.com. Can I cancel and get a refund if my plans change?' } },
            {
              speaker: 'receptionist',
              text: {
                ru: 'Хороший вопрос. Ваш тариф — "невозвратный", это указано в подтверждении от Booking.com: он немного дешевле, но предоплата не возвращается при отмене. Хотите, я покажу это в вашем ваучере?',
                uz: 'Yaxshi savol. Sizning tarifingiz — "qaytarilmaydigan", bu Booking.com tasdiqnomasida ko\'rsatilgan: u biroz arzonroq, lekin bekor qilinganda oldindan to\'lov qaytarilmaydi. Xohlasangiz, buni voucheringizda ko\'rsataman.',
                en: 'Good question. Your rate is "non-refundable" — it\'s noted on your Booking.com confirmation: it\'s a bit cheaper, but the prepayment isn\'t returned upon cancellation. Would you like me to show you that on your voucher?',
              },
            },
            {
              speaker: 'guest',
              text: { ru: 'А, точно, теперь вспомнил. Спасибо, что уточнили.', uz: 'Ha, to\'g\'ri, endi eslab qoldim. Aniqlashtirganingiz uchun rahmat.', en: 'Oh right, I remember now. Thanks for clarifying.' } },
          ],
        },
        {
          type: 'bad',
          lines: [
            { speaker: 'guest', text: { ru: 'Могу я отменить бронь и получить деньги обратно?', uz: 'Bronni bekor qilib, pulimni qaytarib ola olamanmi?', en: 'Can I cancel and get my money back?' } },
            { speaker: 'receptionist', text: { ru: 'Это вопрос к Booking.com, мы тут ни при чём.', uz: 'Bu Booking.com\'ga tegishli savol, bizga aloqasi yo\'q.', en: 'That\'s a Booking.com question, nothing to do with us.' } },
          ],
          note: {
            ru: 'Перекладывание ответственности на платформу без объяснения условий тарифа заставляет гостя чувствовать себя брошенным без помощи.',
            uz: 'Tarif shartlarini tushuntirmasdan javobgarlikni platformaga yuklash mehmonni yordamsiz tashlab qo\'yilgandek his qildiradi.',
            en: 'Deflecting responsibility to the platform without explaining the rate conditions leaves the guest feeling abandoned without help.',
          },
        },
      ],
    },
    {
      id: 'tips',
      heading: { ru: 'Полезные советы', uz: 'Foydali maslahatlar', en: 'Helpful tips' },
      body: {
        ru: 'Как превратить гостя с OTA в довольного гостя, который вернётся напрямую.',
        uz: 'OTA orqali kelgan mehmonni to\'g\'ridan-to\'g\'ri qaytadigan mamnun mehmonga qanday aylantirish mumkin.',
        en: 'How to turn an OTA guest into a happy guest who returns directly.',
      },
      callouts: [
        {
          type: 'golden-rule',
          title: { ru: 'Объясняйте условия тарифа заранее', uz: 'Tarif shartlarini oldindan tushuntiring', en: 'Explain rate conditions up front' },
          body: {
            ru: 'При заселении кратко напомните гостю про условия его тарифа — предоплата, отмена, включённые услуги — прежде чем возникнет вопрос или спор.',
            uz: 'Ro\'yxatdan o\'tishda mehmonga tarif shartlarini — oldindan to\'lov, bekor qilish, kiritilgan xizmatlar — savol yoki bahs tug\'ilishidan oldin qisqacha eslatib qo\'ying.',
            en: 'At check-in, briefly remind the guest of their rate conditions — prepayment, cancellation, included services — before a question or dispute arises.',
          },
        },
        {
          type: 'tip',
          title: { ru: 'Приглашайте оставить отзыв естественно', uz: 'Sharh qoldirishga tabiiy tarzda taklif qiling', en: 'Invite a review naturally' },
          body: {
            ru: 'На выезде скажите: "Если вам понравилось у нас, будем очень благодарны за отзыв на Booking.com — это помогает нам расти." Не просите высокую оценку напрямую, только честное мнение.',
            uz: '"Agar bizda yoqqan bo\'lsa, Booking.com\'da sharh qoldirsangiz juda minnatdor bo\'lardik — bu bizga rivojlanishga yordam beradi" deb ayting. To\'g\'ridan-to\'g\'ri yuqori baho so\'ramang, faqat halol fikr so\'rang.',
            en: 'At check-out, say: "If you enjoyed your stay, we\'d really appreciate a review on Booking.com — it helps us grow." Don\'t ask directly for a high score, just for honest feedback.',
          },
        },
      ],
    },
  ],
  commonMistakes: [
    { ru: 'Не сверять данные брони с PMS перед заселением', uz: 'Ro\'yxatdan o\'tishdan oldin bron ma\'lumotlarini PMS bilan solishtirmaslik', en: 'Not matching reservation data with the PMS before check-in' },
    { ru: 'Объяснять условия невозвратного тарифа только после жалобы', uz: 'Qaytarilmaydigan tarif shartlarini faqat shikoyatdan keyin tushuntirish', en: 'Explaining non-refundable rate conditions only after a complaint' },
    { ru: 'Критиковать платформу Booking.com в разговоре с гостем', uz: 'Mehmon bilan suhbatda Booking.com platformasini tanqid qilish', en: 'Criticizing the Booking.com platform when talking to the guest' },
    { ru: 'Навязчиво требовать высокую оценку в отзыве', uz: 'Sharhda yuqori bahoni zo\'rlab talab qilish', en: 'Pushing aggressively for a high review score' },
  ],
  goldenRules: [
    { ru: 'Всегда сверяйте OTA-бронь с PMS до заселения', uz: 'OTA bronini har doim ro\'yxatdan o\'tishdan oldin PMS bilan solishtiring', en: 'Always match the OTA reservation with the PMS before check-in' },
    { ru: 'Объясняйте условия тарифа спокойно и заранее', uz: 'Tarif shartlarini tinch va oldindan tushuntiring', en: 'Explain rate conditions calmly and in advance' },
    { ru: 'Не критикуйте платформу бронирования при госте', uz: 'Mehmon oldida bron platformasini tanqid qilmang', en: 'Never criticize the booking platform in front of the guest' },
    { ru: 'Приглашайте оставить честный отзыв на выезде', uz: 'Chiqishda halol sharh qoldirishga taklif qiling', en: 'Invite an honest review at check-out' },
    { ru: 'Оставайтесь дружелюбны независимо от источника брони', uz: 'Bron manbasidan qat\'i nazar do\'stona munosabatda bo\'ling', en: 'Stay equally friendly regardless of the booking source' },
  ],
}

export default bookingComGuests
