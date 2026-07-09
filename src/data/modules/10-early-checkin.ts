import type { Module } from '@/types'

const earlyCheckin: Module = {
  slug: 'early-checkin',
  order: 10,
  icon: 'Sunrise',
  title: { ru: 'Ранний заезд', uz: 'Erta kirish', en: 'Early Check-in' },
  description: {
    ru: 'Гости после ночного перелёта часто приезжают задолго до стандартного времени заезда. Научитесь честно управлять ожиданиями и предлагать удобные альтернативы.',
    uz: 'Tungi parvozdan keyin mehmonlar ko\'pincha standart kirish vaqtidan ancha oldin yetib kelishadi. Kutishlarni halol boshqarish va qulay muqobil variantlarni taklif qilishni o\'rganing.',
    en: 'Guests arriving after an overnight flight often show up long before the standard check-in time. Learn to manage expectations honestly and offer comfortable alternatives.',
  },
  readingTimeMin: 5,
  difficulty: 'beginner',
  sections: [
    {
      id: 'overview',
      heading: { ru: 'Честность важнее удобного ответа', uz: 'Halollik qulay javobdan muhimroq', en: 'Honesty matters more than a convenient answer' },
      body: {
        ru: 'Ранний заезд зависит от того, освободился ли номер и завершила ли уборка свою работу. Никогда не говорите "возможно, попробуем" — это создаёт ложную надежду. Проверьте статус номера в системе сразу при обращении гостя и дайте чёткий ответ: либо конкретное время готовности, либо честное "нет" с альтернативой. Гость, уставший после перелёта, ценит ясность больше, чем вежливую неопределённость.',
        uz: 'Erta kirish xona bo\'shab, tozalash tugallanganiga bog\'liq. Hech qachon "balki, harakat qilamiz" demang — bu yolg\'on umid yaratadi. Mehmon murojaat qilganda darhol tizimda xona holatini tekshiring va aniq javob bering: yoki aniq tayyor bo\'lish vaqti, yoki muqobil variant bilan halol "yo\'q". Parvozdan charchagan mehmon muloyim noaniqlikdan ko\'ra aniqlikni qadrlaydi.',
        en: 'Early check-in depends on whether a room has actually been vacated and cleaned. Never say "maybe, we\'ll try" — that creates false hope. Check the room status in the system the moment the guest asks, and give a clear answer: either a specific ready time or an honest "no" paired with an alternative. A guest exhausted from travel values clarity far more than polite vagueness.',
      },
      callouts: [
        {
          type: 'tip',
          title: { ru: 'Дайте конкретное время', uz: 'Aniq vaqt bering', en: 'Give a specific time' },
          body: {
            ru: 'Вместо "может быть, чуть позже" скажите: "Ваш номер будет готов примерно к 13:00, я вам позвоню, как только он освободится".',
            uz: '"Balki, birozdan keyin" o\'rniga: "Xonangiz taxminan soat 13:00 ga tayyor bo\'ladi, u bo\'shashi bilanoq sizga qo\'ng\'iroq qilaman" deng.',
            en: 'Instead of "maybe a bit later," say: "Your room should be ready around 1pm, and I\'ll call you the moment it\'s available."',
          },
        },
      ],
    },
    {
      id: 'dialogue',
      heading: { ru: 'Примеры диалогов', uz: 'Muloqot namunalari', en: 'Example dialogues' },
      body: {
        ru: 'Сравните честный, заботливый ответ с расплывчатой отговоркой.',
        uz: 'Halol, g\'amxo\'r javobni noaniq bahonadan farqlang.',
        en: 'Compare an honest, caring response with a vague brush-off.',
      },
      dialogues: [
        {
          type: 'good',
          lines: [
            {
              speaker: 'guest',
              text: { ru: 'Мы прилетели ночным рейсом, сейчас только 9 утра — можно заселиться раньше?', uz: 'Biz tungi reys bilan uchib keldik, hozir atigi ertalab soat 9 — erta kirishimiz mumkinmi?', en: 'We just landed on a red-eye, it\'s only 9am — is there any chance we could check in early?' },
            },
            {
              speaker: 'receptionist',
              text: {
                ru: 'Понимаю, долгий перелёт утомляет. Дайте проверю в системе... Ваш номер освободится примерно к полудню. А пока я с удовольствием сохраню ваш багаж, и вы сможете позавтракать у нас в лобби-кафе.',
                uz: 'Tushunaman, uzoq parvoz charchatadi. Tizimda tekshirib ko\'ray... Xonangiz taxminan peshingacha bo\'shaydi. Shu vaqtgacha men xursandchilik bilan yukingizni saqlab qo\'yaman, va siz lobbi-kafeda nonushta qilishingiz mumkin.',
                en: 'I understand, a long flight is exhausting. Let me check our system... Your room should be free by around noon. In the meantime, I\'d be happy to store your luggage, and you\'re welcome to have breakfast in our lobby café.',
              },
            },
            {
              speaker: 'guest',
              text: { ru: 'Спасибо, это очень поможет.', uz: 'Rahmat, bu juda yordam beradi.', en: 'Thank you, that really helps.' },
            },
          ],
        },
        {
          type: 'bad',
          lines: [
            { speaker: 'guest', text: { ru: 'Можно заселиться пораньше? Мы очень устали.', uz: 'Erta kirsak bo\'ladimi? Biz juda charchadik.', en: 'Can we check in early? We\'re really tired.' } },
            { speaker: 'receptionist', text: { ru: 'Не знаю, может быть, подождите где-нибудь.', uz: 'Bilmayman, biror joyda kutib turing.', en: 'I don\'t know, just wait around somewhere.' } },
          ],
          note: {
            ru: 'Отсутствие проверки статуса номера и конкретного плана оставляет уставшего гостя без ориентиров и заботы.',
            uz: 'Xona holatini tekshirmaslik va aniq reja bermaslik charchagan mehmonni g\'amxo\'rliksiz va yo\'nalishsiz qoldiradi.',
            en: 'Failing to check room status or offer a concrete plan leaves an exhausted guest with no direction and no sense that anyone cares.',
          },
        },
      ],
    },
    {
      id: 'tips',
      heading: { ru: 'Практические советы', uz: 'Amaliy maslahatlar', en: 'Practical tips' },
      body: {
        ru: 'Даже без готового номера можно сделать ожидание комфортным.',
        uz: 'Xona tayyor bo\'lmasa ham, kutishni qulay qilish mumkin.',
        en: 'Even without a ready room, you can make the wait comfortable.',
      },
      callouts: [
        {
          type: 'golden-rule',
          title: { ru: 'Не давайте расплывчатых обещаний', uz: 'Noaniq va\'da bermang', en: 'Never give a vague promise' },
          body: {
            ru: 'Фразы вроде "постараемся" без реальной проверки статуса номера подрывают доверие, когда гость возвращается и слышит отказ.',
            uz: 'Xona holatini real tekshirmasdan aytilgan "harakat qilamiz" kabi iboralar mehmon qaytib kelib rad javobini eshitganda ishonchni yo\'qqa chiqaradi.',
            en: 'Phrases like "we\'ll try" without actually checking room status backfire badly when the guest returns and hears a decline.',
          },
        },
        {
          type: 'tip',
          title: { ru: 'Предложите способ провести время', uz: 'Vaqt o\'tkazish usulini taklif qiling', en: 'Offer a way to spend the wait' },
          body: {
            ru: 'Предложите хранение багажа, завтрак, лаунж-зону или короткий список интересных мест поблизости — это превращает ожидание в приятную часть визита.',
            uz: 'Yuk saqlash, nonushta, lounge zonasi yoki yaqin atrofdagi qiziqarli joylar ro\'yxatini taklif qiling — bu kutishni tashrifning yoqimli qismiga aylantiradi.',
            en: 'Offer luggage storage, breakfast, the lounge area, or a short list of nearby attractions — this turns the wait into a pleasant part of the visit.',
          },
        },
      ],
    },
  ],
  commonMistakes: [
    { ru: 'Обещать раннее заселение, не проверив статус уборки номера', uz: 'Xona tozalash holatini tekshirmasdan erta kirishni va\'da qilish', en: 'Promising early check-in without checking the room-cleaning status' },
    { ru: 'Давать расплывчатый ответ вроде "может быть, попробуем"', uz: '"Balki, harakat qilamiz" kabi noaniq javob berish', en: 'Giving a vague answer like "maybe, we\'ll try"' },
    { ru: 'Не предлагать хранение багажа или зону ожидания', uz: 'Yuk saqlash yoki kutish zonasini taklif qilmaslik', en: 'Not offering luggage storage or a waiting area' },
    { ru: 'Забывать перезвонить гостю, как только номер готов', uz: 'Xona tayyor bo\'lishi bilan mehmonga qo\'ng\'iroq qilishni unutish', en: 'Forgetting to call the guest as soon as the room is ready' },
  ],
  goldenRules: [
    { ru: 'Всегда проверяйте реальный статус номера в системе', uz: 'Tizimda xonaning haqiqiy holatini har doim tekshiring', en: 'Always check the actual room status in the system' },
    { ru: 'Называйте конкретное время, а не расплывчатые обещания', uz: 'Noaniq va\'da emas, aniq vaqtni ayting', en: 'State a specific time, not a vague promise' },
    { ru: 'Предлагайте хранение багажа и комфортное ожидание', uz: 'Yuk saqlash va qulay kutishni taklif qiling', en: 'Offer luggage storage and a comfortable wait' },
    { ru: 'Держите гостя в курсе, если что-то меняется', uz: 'Biror narsa o\'zgarsa, mehmonni xabardor qiling', en: 'Keep the guest updated if anything changes' },
  ],
}

export default earlyCheckin
