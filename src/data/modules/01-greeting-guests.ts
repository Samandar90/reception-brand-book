import type { Module } from '@/types'

const greetingGuests: Module = {
  slug: 'greeting-guests',
  order: 1,
  icon: 'Handshake',
  title: { ru: 'Приветствие гостей', uz: 'Mehmonlarni kutib olish', en: 'Greeting Guests' },
  description: {
    ru: 'Первое впечатление формируется за 7 секунд. Научитесь встречать гостей тепло, профессионально и уверенно.',
    uz: 'Birinchi taassurot 7 soniyada shakllanadi. Mehmonlarni iliq, professional va ishonchli kutib olishni o\'rganing.',
    en: 'First impressions form in 7 seconds. Learn to welcome guests warmly, professionally, and with confidence.',
  },
  readingTimeMin: 6,
  difficulty: 'beginner',
  sections: [
    {
      id: 'overview',
      heading: { ru: 'Почему приветствие важно', uz: 'Nega kutib olish muhim', en: 'Why the greeting matters' },
      body: {
        ru: 'Приветствие — это первая точка контакта гостя с отелем. Оно задаёт тон всему пребыванию. Тёплая улыбка, зрительный контакт и искреннее внимание значат больше, чем заученные фразы.',
        uz: 'Kutib olish — mehmonning mehmonxona bilan birinchi aloqa nuqtasi. U butun turar joy uchun ohangni belgilaydi. Iliq tabassum, ko\'z aloqasi va samimiy e\'tibor yodlangan iboralardan ko\'ra muhimroqdir.',
        en: 'The greeting is the guest\'s first point of contact with the hotel. It sets the tone for the entire stay. A warm smile, eye contact, and genuine attention matter more than memorized phrases.',
      },
      callouts: [
        {
          type: 'tip',
          title: { ru: 'Правило 10 секунд', uz: '10 soniya qoidasi', en: 'The 10-second rule' },
          body: {
            ru: 'Поприветствуйте гостя в течение 10 секунд после того, как он подошёл к стойке, даже если вы заняты — коротким "Здравствуйте, я скоро освобожусь" (I\'ll be right with you).',
            uz: 'Mehmon stoykaga yaqinlashgandan so\'ng 10 soniya ichida uni kutib oling, hatto band bo\'lsangiz ham — qisqacha "Assalomu alaykum, hozir sizga qarayman" deb ayting.',
            en: 'Greet the guest within 10 seconds of them reaching the desk, even if you\'re busy — a quick "I\'ll be right with you" is enough.',
          },
        },
      ],
    },
    {
      id: 'dialogue',
      heading: { ru: 'Примеры диалогов', uz: 'Muloqot namunalari', en: 'Example dialogues' },
      body: {
        ru: 'Сравните два подхода к приветствию одного и того же гостя.',
        uz: 'Bir xil mehmonni kutib olishning ikki xil yondashuvini solishtiring.',
        en: 'Compare two approaches to greeting the same guest.',
      },
      dialogues: [
        {
          type: 'good',
          lines: [
            {
              speaker: 'receptionist',
              text: {
                ru: 'Добрый день! Добро пожаловать в Grand Hotel. Меня зовут Алина, чем могу вам помочь?',
                uz: 'Assalomu alaykum! Grand Hotelga xush kelibsiz. Mening ismim Alina, sizga qanday yordam bera olaman?',
                en: 'Good afternoon! Welcome to the Grand Hotel. My name is Alina — how may I help you today?',
              },
            },
            {
              speaker: 'guest',
              text: { ru: 'Здравствуйте, у меня бронь на сегодня.', uz: 'Assalomu alaykum, bugungi kunga bronim bor.', en: 'Hi, I have a reservation for tonight.' },
            },
            {
              speaker: 'receptionist',
              text: {
                ru: 'Прекрасно, с радостью проверю. Могу узнать вашу фамилию?',
                uz: 'Ajoyib, xursandchilik bilan tekshiraman. Familiyangizni bilsam bo\'ladimi?',
                en: 'Wonderful, I\'d be happy to check that. May I have your last name, please?',
              },
            },
          ],
        },
        {
          type: 'bad',
          lines: [
            { speaker: 'receptionist', text: { ru: 'Да?', uz: 'Ha?', en: 'Yes?' } },
            { speaker: 'guest', text: { ru: 'У меня бронь.', uz: 'Bronim bor.', en: 'I have a reservation.' } },
            { speaker: 'receptionist', text: { ru: 'Фамилия.', uz: 'Familiya.', en: 'Last name.' } },
          ],
          note: {
            ru: 'Отсутствие приветствия, имени и улыбки создаёт холодное и небрежное впечатление.',
            uz: 'Salomlashish, ism va tabassumning yo\'qligi sovuq va beparvo taassurot qoldiradi.',
            en: 'No greeting, no name, no warmth — this creates a cold, careless impression.',
          },
        },
      ],
    },
    {
      id: 'tips',
      heading: { ru: 'Полезные советы', uz: 'Foydali maslahatlar', en: 'Helpful tips' },
      body: {
        ru: 'Небольшие детали, которые делают приветствие незабываемым.',
        uz: 'Kutib olishni unutilmas qiladigan kichik detallar.',
        en: 'Small details that make a greeting memorable.',
      },
      callouts: [
        {
          type: 'golden-rule',
          title: { ru: 'Встаньте и улыбнитесь', uz: 'Turing va tabassum qiling', en: 'Stand and smile' },
          body: {
            ru: 'Если позволяет обстановка, слегка привстаньте или наклонитесь навстречу гостю — это невербально показывает уважение.',
            uz: 'Sharoit imkon bersa, mehmonga qarab biroz o\'rningizdan turing yoki engashing — bu og\'zaki bo\'lmagan hurmatni bildiradi.',
            en: 'If the setting allows, rise slightly or lean toward the guest — this nonverbally signals respect.',
          },
        },
        {
          type: 'tip',
          title: { ru: 'Используйте имя гостя', uz: 'Mehmon ismini ishlating', en: 'Use the guest\'s name' },
          body: {
            ru: 'Как только узнали имя, используйте его 2–3 раза за разговор: "Спасибо, господин Ким, ваш номер готов."',
            uz: 'Ismini bilib olganingizdan so\'ng, suhbat davomida uni 2-3 marta ishlating: "Rahmat, janob Kim, xonangiz tayyor."',
            en: 'Once you learn the guest\'s name, use it 2–3 times in the conversation: "Thank you, Mr. Kim, your room is ready."',
          },
        },
      ],
    },
  ],
  commonMistakes: [
    { ru: 'Не поднимать взгляд от компьютера при подходе гостя', uz: 'Mehmon yaqinlashganda kompyuterdan ko\'z ko\'tarmaslik', en: 'Not looking up from the computer when a guest approaches' },
    { ru: 'Здороваться без улыбки, монотонным голосом', uz: 'Tabassumsiz, bir xil ohangda salomlashish', en: 'Greeting in a flat tone without a smile' },
    { ru: 'Забывать представиться по имени', uz: 'Ismingizni aytishni unutish', en: 'Forgetting to introduce yourself by name' },
    { ru: 'Заставлять гостя ждать без объяснения причины', uz: 'Sababini tushuntirmasdan mehmonni kutishga majbur qilish', en: 'Making the guest wait without acknowledging them' },
  ],
  goldenRules: [
    { ru: 'Приветствуйте гостя в первые 10 секунд', uz: 'Mehmonni birinchi 10 soniyada kutib oling', en: 'Greet the guest within the first 10 seconds' },
    { ru: 'Всегда представляйтесь по имени', uz: 'Har doim ismingizni ayting', en: 'Always introduce yourself by name' },
    { ru: 'Поддерживайте зрительный контакт и улыбку', uz: 'Ko\'z aloqasi va tabassumni saqlang', en: 'Maintain eye contact and a genuine smile' },
    { ru: 'Используйте имя гостя во время разговора', uz: 'Suhbat davomida mehmon ismini ishlating', en: 'Use the guest\'s name during the conversation' },
    { ru: 'Говорите тепло, но профессионально', uz: 'Iliq, lekin professional gapiring', en: 'Speak warmly, but stay professional' },
  ],
}

export default greetingGuests
