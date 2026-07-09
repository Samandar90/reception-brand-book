import type { Module } from '@/types'

const lostItems: Module = {
  slug: 'lost-items',
  order: 14,
  icon: 'Search',
  title: { ru: 'Забытые вещи', uz: 'Yo\'qolgan buyumlar', en: 'Lost Items' },
  description: {
    ru: 'Гости часто забывают личные вещи в номере или лобби. Научитесь вести учёт находок и возвращать вещи владельцам профессионально.',
    uz: 'Mehmonlar ko\'pincha xona yoki lobbida shaxsiy buyumlarini unutib qoldiradi. Topilmalarni hisobga olish va buyumlarni egalariga professional tarzda qaytarishni o\'rganing.',
    en: 'Guests frequently leave personal belongings behind in the room or lobby. Learn to log found items properly and return them to their owners professionally.',
  },
  readingTimeMin: 6,
  difficulty: 'intermediate',
  sections: [
    {
      id: 'overview',
      heading: { ru: 'Порядок работы с находками', uz: 'Topilmalar bilan ishlash tartibi', en: 'The lost-and-found procedure' },
      body: {
        ru: 'Каждая найденная вещь должна быть немедленно зарегистрирована в журнале находок: описание предмета, точное место и время обнаружения, кто нашёл, номер комнаты или зоны. Без чёткой записи вещь легко потерять во второй раз — уже в самом отеле. Прежде чем сообщить гостю, что вещь не найдена, всегда проверьте: журнал находок, номер, где он проживал, зоны общего пользования и связывались ли с хозяйственной службой. Только после полной проверки можно честно сказать, что предмет пока не обнаружен, с обещанием продолжить поиск.',
        uz: 'Har bir topilgan buyum darhol topilmalar jurnaliga qayd etilishi kerak: buyum tavsifi, aniq topilgan joy va vaqt, kim topgani, xona yoki hudud raqami. Aniq yozuvsiz buyumni ikkinchi marta — mehmonxonaning o\'zida — yo\'qotish oson. Mehmonga buyum topilmadi deb aytishdan oldin har doim tekshiring: topilmalar jurnali, u yashagan xona, umumiy foydalanish zonalari va xo\'jalik xizmati bilan bog\'lanilganmi. Faqat to\'liq tekshiruvdan so\'ng, buyum hozircha topilmagani haqida qidiruvni davom ettirish va\'dasi bilan halol aytish mumkin.',
        en: 'Every found item must be logged immediately in the lost-and-found register: a description of the item, the exact location and time it was found, who found it, and the room or area number. Without a careful record, an item is easily lost a second time — inside the hotel itself. Before telling a guest an item wasn\'t found, always check: the register, the room they stayed in, common areas, and whether housekeeping has been contacted. Only after a thorough search can you honestly say the item hasn\'t turned up yet, along with a promise to keep looking.',
      },
      callouts: [
        {
          type: 'tip',
          title: { ru: 'Записывайте сразу, не откладывайте', uz: 'Darhol yozing, kechiktirmang', en: 'Log it immediately, don\'t delay' },
          body: {
            ru: 'Как только вещь передана на стойку, сразу внесите запись в журнал — даже если сейчас много работы. Отложенная запись часто вообще не появляется.',
            uz: 'Buyum stoykaga topshirilgan zahoti darhol jurnalga yozuv kiriting — hozir ish ko\'p bo\'lsa ham. Kechiktirilgan yozuv ko\'pincha umuman paydo bo\'lmaydi.',
            en: 'The moment an item is handed to the desk, log it right away — even if you\'re busy. A delayed entry often never happens at all.',
          },
        },
      ],
    },
    {
      id: 'dialogue',
      heading: { ru: 'Примеры диалогов', uz: 'Muloqot namunalari', en: 'Example dialogues' },
      body: {
        ru: 'Сравните тщательный поиск с быстрым отказом.',
        uz: 'Puxta qidiruvni tezkor rad javobi bilan solishtiring.',
        en: 'Compare a thorough search with a quick brush-off.',
      },
      dialogues: [
        {
          type: 'good',
          lines: [
            {
              speaker: 'guest',
              text: { ru: 'Здравствуйте, кажется, я забыла зарядное устройство в номере 214, я выехала вчера.', uz: 'Assalomu alaykum, chamasi 214-xonada zaryadlovchi qurilmani unutib qoldirganman, kecha chiqib ketgandim.', en: 'Hi, I think I left my phone charger in room 214, I checked out yesterday.' },
            },
            {
              speaker: 'receptionist',
              text: {
                ru: 'Понимаю, сейчас проверю. Дайте мне пару минут — я свяжусь с хозяйственной службой и посмотрю журнал находок за вчерашний день.',
                uz: 'Tushunaman, hozir tekshiraman. Bir necha daqiqa bering — xo\'jalik xizmati bilan bog\'lanaman va kechagi kun uchun topilmalar jurnalini ko\'rib chiqaman.',
                en: 'I understand, let me check right away. Give me a couple of minutes — I\'ll contact housekeeping and check yesterday\'s lost-and-found log.',
              },
            },
            {
              speaker: 'receptionist',
              text: {
                ru: 'Хорошие новости, зарядное устройство нашли и уже зарегистрировали. Хотите забрать сами или мне отправить его вам почтой?',
                uz: 'Yaxshi xabar, zaryadlovchi qurilma topilgan va allaqachon ro\'yxatga olingan. O\'zingiz olib ketasizmi yoki pochta orqali yuboraymi?',
                en: 'Good news — the charger was found and it\'s already logged. Would you like to pick it up, or should I arrange to ship it to you?',
              },
            },
          ],
        },
        {
          type: 'bad',
          lines: [
            { speaker: 'guest', text: { ru: 'Я забыла зарядку в номере 214.', uz: 'Men 214-xonada zaryadlovchini unutib qoldirdim.', en: 'I left a charger in room 214.' } },
            { speaker: 'receptionist', text: { ru: 'У нас ничего не записано, значит, ничего не нашли.', uz: 'Bizda hech narsa yozilmagan, demak, hech narsa topilmagan.', en: 'We have nothing logged, so nothing was found.' } },
          ],
          note: {
            ru: 'Отказ без реальной проверки номера, зон уборки и хозяйственной службы — это не ответ, а отговорка, которая может быть попросту неверной.',
            uz: 'Xona, tozalash zonalari va xo\'jalik xizmatini haqiqiy tekshirmasdan rad javobi — bu javob emas, balki oddiygina noto\'g\'ri bo\'lishi mumkin bo\'lgan bahona.',
            en: 'Declining without actually checking the room, cleaning areas, and housekeeping isn\'t an answer — it\'s a brush-off that could simply be wrong.',
          },
        },
      ],
    },
    {
      id: 'tips',
      heading: { ru: 'Практические советы', uz: 'Amaliy maslahatlar', en: 'Practical tips' },
      body: {
        ru: 'Забота о найденных вещах продолжается и после первого разговора с гостем.',
        uz: 'Topilgan buyumlarga g\'amxo\'rlik mehmon bilan birinchi suhbatdan keyin ham davom etadi.',
        en: 'Care for found items continues even after the first conversation with the guest.',
      },
      callouts: [
        {
          type: 'golden-rule',
          title: { ru: 'Проактивно сообщайте о находке', uz: 'Topilma haqida faol xabar bering', en: 'Follow up proactively' },
          body: {
            ru: 'Если ценная вещь найдена после отъезда гостя, не ждите, пока он сам позвонит — свяжитесь с ним первым, используя контакты из брони.',
            uz: 'Agar qimmatli buyum mehmon ketganidan keyin topilsa, uning o\'zi qo\'ng\'iroq qilishini kutmang — bron ma\'lumotlaridan foydalanib birinchi bo\'lib bog\'laning.',
            en: 'If a valuable item is found after the guest has departed, don\'t wait for them to call — reach out first using the contact details from their reservation.',
          },
        },
        {
          type: 'tip',
          title: { ru: 'Организуйте отправку почтой', uz: 'Pochta orqali yuborishni tashkil qiling', en: 'Arrange shipping' },
          body: {
            ru: 'Предложите отправить найденную вещь курьером или почтой за счёт гостя, чётко объяснив стоимость и сроки доставки заранее.',
            uz: 'Topilgan buyumni mehmon hisobidan kuryer yoki pochta orqali yuborishni taklif qiling, narxi va yetkazib berish muddatini oldindan aniq tushuntiring.',
            en: 'Offer to ship the found item by courier or post at the guest\'s expense, clearly explaining the cost and delivery time upfront.',
          },
        },
      ],
    },
  ],
  commonMistakes: [
    { ru: 'Не регистрировать находку сразу в журнале', uz: 'Topilmani jurnalga darhol qayd etmaslik', en: 'Not logging the found item right away' },
    { ru: 'Говорить "не найдено", не проверив все зоны и службы', uz: 'Barcha zonalar va xizmatlarni tekshirmasdan "topilmadi" deyish', en: 'Saying "not found" without checking all areas and departments' },
    { ru: 'Не связываться с гостем проактивно после находки ценной вещи', uz: 'Qimmatli buyum topilgandan keyin mehmon bilan faol bog\'lanmaslik', en: 'Not proactively contacting the guest after finding a valuable item' },
    { ru: 'Не уточнять детали доставки и стоимости пересылки', uz: 'Yetkazib berish tafsilotlari va pochta narxini aniqlashtirmaslik', en: 'Not clarifying shipping details and cost' },
  ],
  goldenRules: [
    { ru: 'Регистрируйте каждую находку немедленно и подробно', uz: 'Har bir topilmani darhol va batafsil qayd eting', en: 'Log every found item immediately and in detail' },
    { ru: 'Проверяйте тщательно, прежде чем сказать "не найдено"', uz: '"Topilmadi" deyishdan oldin puxta tekshiring', en: 'Search thoroughly before saying "not found"' },
    { ru: 'Связывайтесь с гостем первым, если вещь найдена после отъезда', uz: 'Buyum ketgandan keyin topilsa, mehmon bilan birinchi bo\'lib bog\'laning', en: 'Contact the guest first if the item is found after departure' },
    { ru: 'Организуйте безопасную и понятную отправку найденных вещей', uz: 'Topilgan buyumlarni xavfsiz va tushunarli tarzda yuborishni tashkil qiling', en: 'Arrange safe, transparent shipping for found items' },
  ],
}

export default lostItems
