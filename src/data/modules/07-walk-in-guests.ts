import type { Module } from '@/types'

const walkInGuests: Module = {
  slug: 'walk-in-guests',
  order: 7,
  icon: 'DoorOpen',
  title: { ru: 'Гости без брони', uz: 'Bronsiz kelgan mehmonlar', en: 'Walk-in Guests' },
  description: {
    ru: 'Гость без брони — это шанс показать гибкость и гостеприимство здесь и сейчас. Научитесь быстро проверять наличие номеров, уверенно предлагать варианты и красиво выходить из ситуации, если мест нет.',
    uz: 'Bronsiz kelgan mehmon — bu hozir va shu yerda moslashuvchanlik va mehmondo\'stlikni ko\'rsatish imkoniyati. Xonalar mavjudligini tezda tekshirishni, variantlarni ishonch bilan taklif qilishni va joy bo\'lmasa vaziyatdan chiroyli chiqishni o\'rganing.',
    en: 'A walk-in guest is a chance to show flexibility and hospitality right here, right now. Learn to check availability quickly, present options with confidence, and handle a sold-out night gracefully.',
  },
  readingTimeMin: 6,
  difficulty: 'intermediate',
  sections: [
    {
      id: 'overview',
      heading: { ru: 'Как работать с гостем без брони', uz: 'Bronsiz mehmon bilan qanday ishlash kerak', en: 'How to handle a guest without a reservation' },
      body: {
        ru: 'Гость, пришедший без брони, часто устал с дороги или ищет ночлег срочно, поэтому скорость и уверенность особенно важны. Сначала быстро проверьте доступность номеров в системе, затем предложите один-два подходящих варианта с чёткой ценой, не заставляя гостя гадать. Если отель полностью занят, никогда не отвечайте просто "мест нет" — вежливо порекомендуйте партнёрский отель поблизости и, если возможно, помогите с звонком туда.',
        uz: 'Bronsiz kelgan mehmon ko\'pincha yo\'ldan charchagan yoki shoshilinch tunash joyi qidiradi, shuning uchun tezlik va ishonch alohida ahamiyatga ega. Avval tizimda xonalar mavjudligini tezda tekshiring, so\'ngra mehmonni taxmin qilishga majbur qilmasdan bir-ikkita mos variantni aniq narx bilan taklif qiling. Agar mehmonxona to\'liq band bo\'lsa, hech qachon shunchaki "joy yo\'q" deb javob bermang — yaqin atrofdagi hamkor mehmonxonani muloyimlik bilan tavsiya qiling va imkon bo\'lsa, u yerga qo\'ng\'iroq qilishga yordam bering.',
        en: 'A guest who arrives without a reservation is often tired from travel or in urgent need of a room, so speed and confidence matter especially here. First, quickly check room availability in the system, then present one or two suitable options with a clear price, without making the guest guess. If the hotel is fully booked, never simply say "no rooms" — politely recommend a nearby partner hotel and, if possible, help make the call there.',
      },
      callouts: [
        {
          type: 'tip',
          title: { ru: 'Уточняйте потребности гостя', uz: 'Mehmonning ehtiyojlarini aniqlashtiring', en: 'Clarify the guest\'s needs' },
          body: {
            ru: 'Прежде чем называть цену, спросите про количество ночей и гостей — это позволит сразу предложить подходящий номер, а не просто самый дешёвый.',
            uz: 'Narxni aytishdan oldin, necha kecha va necha mehmon ekanligini so\'rang — bu shunchaki eng arzon emas, balki mos xonani darhol taklif qilish imkonini beradi.',
            en: 'Before quoting a price, ask about the number of nights and guests — this lets you offer the right room immediately, not just the cheapest one.',
          },
        },
      ],
    },
    {
      id: 'dialogue',
      heading: { ru: 'Примеры диалогов', uz: 'Muloqot namunalari', en: 'Example dialogues' },
      body: {
        ru: 'Сравните уверенное предложение вариантов с растерянным и неуверенным ответом.',
        uz: 'Variantlarni ishonch bilan taklif qilishni sarosimaga tushgan, ishonchsiz javob bilan solishtiring.',
        en: 'Compare a confident presentation of options with a hesitant, unsure response.',
      },
      dialogues: [
        {
          type: 'good',
          lines: [
            {
              speaker: 'guest',
              text: { ru: 'Здравствуйте, у нас нет брони, но нужен номер на одну ночь для двоих.', uz: 'Assalomu alaykum, bizda bron yo\'q, lekin bir kechaga ikki kishilik xona kerak.', en: 'Hi, we don\'t have a reservation, but we need a room for two, for one night.' } },
            {
              speaker: 'receptionist',
              text: {
                ru: 'Добрый день, конечно, посмотрим, что у нас есть! На сегодня свободен Standard номер за 350 000 сум и Superior с видом на двор за 420 000 сум, завтрак включён в оба. Что вам ближе?',
                uz: 'Assalomu alaykum, albatta, nima borligini ko\'ramiz! Bugunga Standard xona 350 000 so\'m va hovliga qaragan Superior xona 420 000 so\'mga bo\'sh, ikkalasida ham nonushta narxga kiritilgan. Qaysi biri sizga yaqinroq?',
                en: 'Good afternoon, of course, let\'s see what we have! For tonight we have a Standard room at 350,000 sum and a Superior room with a courtyard view at 420,000, breakfast included in both. Which sounds better for you?',
              },
            },
            {
              speaker: 'guest',
              text: { ru: 'Возьмём Superior, звучит хорошо.', uz: 'Superior olamiz, yaxshi eshitildi.', en: 'We\'ll take the Superior, that sounds good.' } },
          ],
        },
        {
          type: 'bad',
          lines: [
            { speaker: 'guest', text: { ru: 'У нас нет брони, есть свободный номер?', uz: 'Bizda bron yo\'q, bo\'sh xona bormi?', en: 'We don\'t have a reservation, do you have a free room?' } },
            { speaker: 'receptionist', text: { ru: 'Даже не знаю... сейчас посмотрю, может, что-то и есть.', uz: 'Bilmayman-a... hozir qarayman, balki biror narsa bordir.', en: 'Um, I\'m not sure... let me look, maybe there\'s something.' } },
          ],
          note: {
            ru: 'Неуверенный тон и долгие сомнения заставляют гостя думать, что отель дезорганизован, и он может уйти искать ночлег в другом месте.',
            uz: 'Ishonchsiz ohang va uzoq ikkilanish mehmonni mehmonxona tartibsiz deb o\'ylashiga majbur qiladi va u boshqa joydan tunash joyi qidirib ketishi mumkin.',
            en: 'A hesitant tone and long uncertainty make the guest think the hotel is disorganized, and they may leave to look for a room elsewhere.',
          },
        },
      ],
    },
    {
      id: 'tips',
      heading: { ru: 'Полезные советы', uz: 'Foydali maslahatlar', en: 'Helpful tips' },
      body: {
        ru: 'Как превратить случайного гостя в постоянного.',
        uz: 'Tasodifiy mehmonni doimiy mehmonga qanday aylantirish mumkin.',
        en: 'How to turn a walk-in into a loyal, returning guest.',
      },
      callouts: [
        {
          type: 'golden-rule',
          title: { ru: 'Никогда не говорите просто "мест нет"', uz: 'Hech qachon shunchaki "joy yo\'q" demang', en: 'Never just say "we\'re full"' },
          body: {
            ru: 'Если отель полностью забронирован, всегда предлагайте альтернативу — партнёрский отель поблизости, с которым у вас есть договорённость, и помогите гостю связаться с ним.',
            uz: 'Agar mehmonxona to\'liq band bo\'lsa, har doim muqobil variant taklif qiling — yaqin atrofda kelishuvingiz bo\'lgan hamkor mehmonxona, va mehmonga u bilan bog\'lanishga yordam bering.',
            en: 'If the hotel is fully booked, always offer an alternative — a nearby partner hotel you have an arrangement with — and help the guest get in touch with them.',
          },
        },
        {
          type: 'tip',
          title: { ru: 'Предлагайте программу лояльности', uz: 'Sodiqlik dasturini taklif qiling', en: 'Offer the loyalty program' },
          body: {
            ru: 'После успешного заселения расскажите гостю, что при следующем прямом бронировании через сайт или звонок его ждёт более выгодный тариф — это стимулирует вернуться напрямую.',
            uz: 'Muvaffaqiyatli joylashtirilgandan so\'ng, mehmonga keyingi safar sayt yoki qo\'ng\'iroq orqali to\'g\'ridan-to\'g\'ri bron qilsa, unga qulayroq tarif kutayotganini ayting — bu to\'g\'ridan-to\'g\'ri qaytishga undaydi.',
            en: 'After successfully checking them in, let the guest know that booking directly next time through the website or by phone earns a better rate — this encourages a direct return visit.',
          },
        },
      ],
    },
  ],
  commonMistakes: [
    { ru: 'Отвечать неуверенно, не проверив систему сразу', uz: 'Tizimni darhol tekshirmasdan ishonchsiz javob berish', en: 'Responding hesitantly without checking the system right away' },
    { ru: 'Называть только одну цену без вариантов номеров', uz: 'Xona variantlarisiz faqat bitta narxni aytish', en: 'Quoting only one price with no room options' },
    { ru: 'Резко отказывать без предложения альтернативы при полной загрузке', uz: 'To\'liq band bo\'lganda muqobil taklif qilmasdan keskin rad etish', en: 'Bluntly refusing without offering an alternative when fully booked' },
    { ru: 'Не рассказывать про выгоды прямого бронирования в будущем', uz: 'Kelajakda to\'g\'ridan-to\'g\'ri bron qilish afzalliklari haqida aytmaslik', en: 'Not mentioning the benefits of booking directly in the future' },
  ],
  goldenRules: [
    { ru: 'Проверяйте наличие номеров быстро и уверенно', uz: 'Xonalar mavjudligini tez va ishonch bilan tekshiring', en: 'Check room availability quickly and confidently' },
    { ru: 'Предлагайте один-два конкретных варианта с ценой', uz: 'Narxi bilan bir-ikkita aniq variant taklif qiling', en: 'Offer one or two concrete options with pricing' },
    { ru: 'Уточняйте количество ночей и гостей перед предложением', uz: 'Taklif qilishdan oldin kecha va mehmonlar sonini aniqlashtiring', en: 'Clarify nights and guest count before offering options' },
    { ru: 'При полной загрузке рекомендуйте партнёрский отель', uz: 'To\'liq band bo\'lganda hamkor mehmonxonani tavsiya qiling', en: 'When fully booked, recommend a partner hotel' },
    { ru: 'Приглашайте бронировать напрямую в следующий раз', uz: 'Keyingi safar to\'g\'ridan-to\'g\'ri bron qilishga taklif qiling', en: 'Invite the guest to book directly next time' },
  ],
}

export default walkInGuests
