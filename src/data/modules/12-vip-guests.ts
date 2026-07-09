import type { Module } from '@/types'

const vipGuests: Module = {
  slug: 'vip-guests',
  order: 12,
  icon: 'Crown',
  title: { ru: 'VIP-гости', uz: 'VIP mehmonlar', en: 'VIP Guests' },
  description: {
    ru: 'Постоянные и VIP-гости ожидают, что их узнают и помнят их предпочтения. Научитесь оказывать персональное внимание, сохраняя дискретность.',
    uz: 'Doimiy va VIP mehmonlar ularni tanib, xohish-istaklarini eslab qolishlarini kutishadi. Diskretlikni saqlagan holda shaxsiy e\'tibor ko\'rsatishni o\'rganing.',
    en: 'Repeat and VIP guests expect to be recognized and remembered. Learn to deliver personal attention while maintaining discretion.',
  },
  readingTimeMin: 7,
  difficulty: 'advanced',
  sections: [
    {
      id: 'overview',
      heading: { ru: 'Почему узнавание имеет значение', uz: 'Nega tanib olish muhim', en: 'Why recognition matters' },
      body: {
        ru: 'VIP-гость — это не только знаменитость или крупный клиент, но и постоянный гость, который выбирает ваш отель снова и снова. Перед его приездом изучите профиль гостя: предпочтения по номеру, аллергии, прошлые пожелания, особые даты. Личное приветствие по имени и упоминание деталей из прошлого визита ("Рад видеть вас снова, господин Ли, ваш любимый номер на 8 этаже уже готов") показывает, что отель действительно ценит гостя, а не просто выполняет протокол.',
        uz: 'VIP mehmon nafaqat mashhur shaxs yoki yirik mijoz, balki mehmonxonangizni qayta-qayta tanlaydigan doimiy mehmondir. Uning kelishidan oldin mehmon profilini o\'rganing: xona bo\'yicha xohishlar, allergiyalar, oldingi iltimoslar, maxsus sanalar. Ismi bilan shaxsiy kutib olish va o\'tgan tashrifdagi detallarni eslatish ("Sizni yana ko\'rganimdan xursandman, janob Li, 8-qavatdagi sevimli xonangiz tayyor") mehmonxona mehmonni haqiqatan qadrlashini, shunchaki protokolni bajarmasligini ko\'rsatadi.',
        en: 'A VIP guest is not just a celebrity or a high-spending client — it is also a repeat guest who keeps choosing your hotel. Before arrival, review the guest profile: room preferences, allergies, past requests, special dates. Greeting them personally by name and referencing details from a previous visit ("Wonderful to see you again, Mr. Lee, your favorite room on the 8th floor is already prepared") shows the hotel genuinely values the guest, rather than just following protocol.',
      },
      callouts: [
        {
          type: 'tip',
          title: { ru: 'Готовьтесь заранее', uz: 'Oldindan tayyorlaning', en: 'Prepare in advance' },
          body: {
            ru: 'Перед сменой всегда просматривайте список ожидаемых VIP-гостей и их профили в системе — импровизировать при заезде уже поздно.',
            uz: 'Smena boshlanishidan oldin har doim kutilayotgan VIP mehmonlar ro\'yxati va ularning tizimdagi profillarini ko\'rib chiqing — kirish paytida improvizatsiya qilish kech.',
            en: 'Before every shift, always review the expected VIP arrivals list and their guest profiles — improvising during check-in is too late.',
          },
        },
      ],
    },
    {
      id: 'dialogue',
      heading: { ru: 'Примеры диалогов', uz: 'Muloqot namunalari', en: 'Example dialogues' },
      body: {
        ru: 'Сравните персонализированный приём с обезличенным, шаблонным.',
        uz: 'Shaxsiylashtirilgan qabulni shaxssiz, andozaviy qabuldan farqlang.',
        en: 'Compare a personalized welcome with an impersonal, generic one.',
      },
      dialogues: [
        {
          type: 'good',
          lines: [
            {
              speaker: 'receptionist',
              text: {
                ru: 'Госпожа Ортега, добро пожаловать обратно! Мы подготовили для вас угловой номер с видом на море, который вам понравился в прошлый раз, и, как обычно, гипоаллергенные подушки.',
                uz: 'Xonim Ortega, xush kelibsiz! Sizga o\'tgan safar yoqqan dengiz manzarali burchak xonani, va odatdagidek gipoallergenik yostiqlarni tayyorladik.',
                en: 'Mrs. Ortega, welcome back! We\'ve prepared the corner room with the sea view you enjoyed last time, along with the hypoallergenic pillows you usually request.',
              },
            },
            {
              speaker: 'guest',
              text: { ru: 'Вы запомнили! Это очень приятно.', uz: 'Eslab qolibsiz! Bu juda yoqimli.', en: 'You remembered! That\'s so thoughtful.' },
            },
            {
              speaker: 'receptionist',
              text: {
                ru: 'Конечно, для нас важно, чтобы каждый ваш визит был как дома. Если понадобится что-то ещё, обращайтесь ко мне лично в любое время.',
                uz: 'Albatta, biz uchun har bir tashrifingiz uydek bo\'lishi muhim. Yana biror narsa kerak bo\'lsa, istalgan vaqtda shaxsan menga murojaat qiling.',
                en: 'Of course, it matters to us that every visit feels like home. If you need anything else at all, please reach out to me personally.',
              },
            },
          ],
        },
        {
          type: 'bad',
          lines: [
            { speaker: 'receptionist', text: { ru: 'Паспорт и карту, пожалуйста. Номер 412, завтрак с 7 до 10.', uz: 'Pasport va kartani bering. 412-xona, nonushta 7 dan 10 gacha.', en: 'Passport and card, please. Room 412, breakfast is from 7 to 10.' } },
            { speaker: 'guest', text: { ru: 'Я останавливаюсь у вас уже в пятый раз.', uz: 'Men sizlarda beshinchi marta to\'xtayapman.', en: 'This is my fifth stay here.' } },
            { speaker: 'receptionist', text: { ru: 'Угу. Вот ваш ключ.', uz: 'Ha-ha. Mana kalitingiz.', en: 'Uh-huh. Here\'s your key.' } },
          ],
          note: {
            ru: 'Полное игнорирование истории гостя и шаблонное оформление превращают постоянного клиента в незнакомца.',
            uz: 'Mehmon tarixini butunlay e\'tiborsiz qoldirish va andozaviy ro\'yxatga olish doimiy mijozni notanish odamga aylantiradi.',
            en: 'Completely ignoring the guest\'s history and processing them like a first-timer turns a loyal guest into a stranger.',
          },
        },
      ],
    },
    {
      id: 'tips',
      heading: { ru: 'Практические советы', uz: 'Amaliy maslahatlar', en: 'Practical tips' },
      body: {
        ru: 'Персонализация должна быть заметной для гостя, но незаметной для окружающих.',
        uz: 'Shaxsiylashtirish mehmon uchun sezilarli, lekin atrofdagilar uchun sezilmas bo\'lishi kerak.',
        en: 'Personalization should be visible to the guest but invisible to everyone around them.',
      },
      callouts: [
        {
          type: 'golden-rule',
          title: { ru: 'Дискретность превыше всего', uz: 'Diskretlik hammasidan ustun', en: 'Discretion above all' },
          body: {
            ru: 'Никогда не объявляйте VIP-статус гостя вслух при других гостях в лобби. Обсуждайте детали тихо, за стойкой, или переведите гостя в отдельную зону регистрации.',
            uz: 'Hech qachon mehmonning VIP maqomini boshqa mehmonlar oldida lobbida ovoz chiqarib e\'lon qilmang. Detallarni stoyka orqasida sekin muhokama qiling yoki mehmonni alohida ro\'yxatga olish zonasiga o\'tkazing.',
            en: 'Never announce a guest\'s VIP status aloud in front of other guests in the lobby. Discuss details quietly at the desk, or move the guest to a private check-in area.',
          },
        },
        {
          type: 'tip',
          title: { ru: 'Небольшие персональные жесты', uz: 'Kichik shaxsiy jestlar', en: 'Small personal touches' },
          body: {
            ru: 'Рукописная записка с приветствием, апгрейд номера при наличии свободных, любимый напиток в номере — небольшие детали часто запоминаются лучше, чем дорогие подарки.',
            uz: 'Qo\'lda yozilgan tabrik xati, bo\'sh xona bo\'lsa xonani yaxshilash, xonada sevimli ichimlik — kichik detallar ko\'pincha qimmat sovg\'alardan ko\'ra ko\'proq eslab qolinadi.',
            en: 'A handwritten welcome note, a room upgrade when one is available, a favorite drink waiting in the room — small details are often remembered longer than expensive gifts.',
          },
        },
      ],
    },
  ],
  commonMistakes: [
    { ru: 'Не проверять профиль и историю гостя перед заездом', uz: 'Kirishdan oldin mehmon profili va tarixini tekshirmaslik', en: 'Not reviewing the guest profile and history before arrival' },
    { ru: 'Объявлять VIP-статус гостя вслух при посторонних', uz: 'Mehmonning VIP maqomini begonalar oldida ovoz chiqarib aytish', en: 'Announcing a guest\'s VIP status aloud in front of others' },
    { ru: 'Обещать апгрейд, который невозможно предоставить', uz: 'Berib bo\'lmaydigan xona yaxshilashni va\'da qilish', en: 'Promising an upgrade that cannot actually be provided' },
    { ru: 'Относиться к постоянному гостю так же обезличенно, как к новому', uz: 'Doimiy mehmonga yangi mehmonga qaraganidek shaxssiz munosabatda bo\'lish', en: 'Treating a repeat guest as impersonally as a first-time one' },
  ],
  goldenRules: [
    { ru: 'Изучайте профиль гостя до его приезда', uz: 'Mehmon kelishidan oldin uning profilini o\'rganing', en: 'Review the guest profile before they arrive' },
    { ru: 'Используйте историю предпочтений для персонализации приёма', uz: 'Qabulni shaxsiylashtirish uchun xohishlar tarixidan foydalaning', en: 'Use preference history to personalize the welcome' },
    { ru: 'Сохраняйте дискретность и не афишируйте VIP-статус', uz: 'Diskretlikni saqlang va VIP maqomini oshkor qilmang', en: 'Maintain discretion and never publicize VIP status' },
    { ru: 'Добавляйте небольшие персональные жесты, когда это уместно', uz: 'O\'rinli bo\'lganda kichik shaxsiy jestlar qo\'shing', en: 'Add small personal touches where appropriate' },
  ],
}

export default vipGuests
