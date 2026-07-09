import type { Module } from '@/types'

const foreignGuests: Module = {
  slug: 'foreign-guests',
  order: 13,
  icon: 'Globe',
  title: { ru: 'Иностранные гости', uz: 'Xorijiy mehmonlar', en: 'Foreign Guests' },
  description: {
    ru: 'Языковой барьер и культурные различия требуют терпения и находчивости. Научитесь общаться ясно и уважительно с гостями со всего мира.',
    uz: 'Til to\'sig\'i va madaniy farqlar sabr va topqirlikni talab qiladi. Dunyoning turli burchaklaridan kelgan mehmonlar bilan aniq va hurmat bilan muloqot qilishni o\'rganing.',
    en: 'Language barriers and cultural differences call for patience and resourcefulness. Learn to communicate clearly and respectfully with guests from around the world.',
  },
  readingTimeMin: 6,
  difficulty: 'intermediate',
  sections: [
    {
      id: 'overview',
      heading: { ru: 'Терпение — ваш главный инструмент', uz: 'Sabr — asosiy qurolingiz', en: 'Patience is your main tool' },
      body: {
        ru: 'Гость, который не говорит на вашем языке свободно, чувствует себя уязвимым уже до того, как подошёл к стойке. Ваша задача — снять это напряжение, а не усилить его. Говорите простыми короткими фразами без сленга и идиом, используйте приложения-переводчики как инструмент, а не как повод не стараться понять друг друга самим. Жесты, письменные цифры и карты часто работают лучше, чем долгие объяснения. Никогда не повышайте голос, полагая, что громкость заменяет понятность.',
        uz: 'Tilingizda erkin gapirmaydigan mehmon stoykaga yaqinlashishdan oldinoq o\'zini himoyasiz his qiladi. Sizning vazifangiz bu taranglikni kuchaytirish emas, balki yumshatishdir. Sleng va idiomasiz oddiy, qisqa iboralar bilan gapiring, tarjimon ilovalaridan vosita sifatida foydalaning, bir-birimizni tushunishga harakat qilmaslik bahonasi sifatida emas. Imo-ishoralar, yozma raqamlar va xaritalar ko\'pincha uzoq tushuntirishlardan yaxshiroq ishlaydi. Ovoz balandligi tushunarlilikni almashtiradi deb hisoblab, hech qachon ovozingizni ko\'tarmang.',
        en: 'A guest who does not speak your language fluently often feels vulnerable before they even reach the desk. Your job is to ease that tension, not add to it. Speak in short, simple phrases without slang or idioms, use translation apps as a tool rather than an excuse to stop trying to understand each other directly. Gestures, written numbers, and maps often work better than lengthy explanations. Never raise your voice, assuming volume can substitute for clarity.',
      },
      callouts: [
        {
          type: 'tip',
          title: { ru: 'Говорите медленнее, а не громче', uz: 'Balandroq emas, sekinroq gapiring', en: 'Speak slower, not louder' },
          body: {
            ru: 'Если гость не понимает, замедлите темп речи и упростите слова, вместо того чтобы повторять то же самое громче.',
            uz: 'Agar mehmon tushunmasa, xuddi shu gapni balandroq takrorlash o\'rniga nutq tezligini pasaytiring va so\'zlarni soddalashtiring.',
            en: 'If a guest doesn\'t understand, slow your pace and simplify your words rather than repeating the same thing louder.',
          },
        },
      ],
    },
    {
      id: 'dialogue',
      heading: { ru: 'Примеры диалогов', uz: 'Muloqot namunalari', en: 'Example dialogues' },
      body: {
        ru: 'Сравните терпеливое общение с раздражённым.',
        uz: 'Sabrli muloqotni asabiy muloqotdan farqlang.',
        en: 'Compare patient communication with an impatient one.',
      },
      dialogues: [
        {
          type: 'good',
          lines: [
            {
              speaker: 'guest',
              text: { ru: '(на ломаном английском) Sorry, my English not good. Room key, problem.', uz: '(chalasan inglizchada) Sorry, my English not good. Room key, problem.', en: '(in broken English) Sorry, my English not good. Room key, problem.' },
            },
            {
              speaker: 'receptionist',
              text: {
                ru: 'Не переживайте, никаких проблем. Ваша карта не открывает дверь? Давайте я проверю в приложении-переводчике и покажу вам новую карту.',
                uz: 'Xavotir olmang, hech qanday muammo yo\'q. Kartangiz eshikni ochmayaptimi? Keling, tarjimon ilovasida tekshirib, sizga yangi karta ko\'rsataman.',
                en: 'No worries at all. Is your key card not opening the door? Let me check with a translation app and show you a new card.',
              },
            },
            {
              speaker: 'guest',
              text: { ru: 'Yes, yes, thank you.', uz: 'Yes, yes, thank you.', en: 'Yes, yes, thank you.' },
            },
          ],
        },
        {
          type: 'bad',
          lines: [
            { speaker: 'guest', text: { ru: 'Sorry, my English not good.', uz: 'Sorry, my English not good.', en: 'Sorry, my English not good.' } },
            { speaker: 'receptionist', text: { ru: '(громко и медленно, утрируя акцент) YOUR... CARD... NO... WORK... UNDERSTAND?', uz: '(baland ovozda va urg\'uni kulguli qilib) YOUR... CARD... NO... WORK... UNDERSTAND?', en: '(loudly, mocking the guest\'s accent) YOUR... CARD... NO... WORK... UNDERSTAND?' } },
          ],
          note: {
            ru: 'Передразнивание акцента и повышение голоса унижают гостя и не решают проблему коммуникации.',
            uz: 'Urg\'uni masxaralash va ovoz ko\'tarish mehmonni kamsitadi va muloqot muammosini hal qilmaydi.',
            en: 'Mocking the accent and raising your voice humiliates the guest and does nothing to solve the actual communication problem.',
          },
        },
      ],
    },
    {
      id: 'tips',
      heading: { ru: 'Практические советы', uz: 'Amaliy maslahatlar', en: 'Practical tips' },
      body: {
        ru: 'Небольшая культурная осведомлённость сильно улучшает опыт иностранного гостя.',
        uz: 'Kichik madaniy xabardorlik xorijiy mehmon tajribasini sezilarli yaxshilaydi.',
        en: 'A little cultural awareness greatly improves the experience for foreign guests.',
      },
      callouts: [
        {
          type: 'golden-rule',
          title: { ru: 'Никогда не передразнивайте акцент', uz: 'Hech qachon urg\'uni masxaralamang', en: 'Never mock or mimic an accent' },
          body: {
            ru: 'Ни при каких обстоятельствах не имитируйте акцент гостя и не смейтесь над его произношением, даже в шутку между коллегами.',
            uz: 'Hech qanday holatda mehmonning urg\'usiga taqlid qilmang va uning talaffuzi ustidan kulmang, hatto hamkasblar bilan hazil sifatida ham.',
            en: 'Under no circumstances imitate a guest\'s accent or laugh at their pronunciation, even as a joke between colleagues.',
          },
        },
        {
          type: 'tip',
          title: { ru: 'Учитывайте культурные особенности', uz: 'Madaniy xususiyatlarni hisobga oling', en: 'Account for cultural differences' },
          body: {
            ru: 'Уточняйте диетические ограничения (халяль, вегетарианская пища) и будьте внимательны к традициям приветствия — например, не все культуры комфортно относятся к рукопожатию или прямому зрительному контакту.',
            uz: 'Ovqatlanish cheklovlarini aniqlashtiring (halol, vegetarian taom) va salomlashish an\'analariga e\'tiborli bo\'ling — masalan, barcha madaniyatlarda qo\'l siqish yoki to\'g\'ridan-to\'g\'ri ko\'z aloqasi qulay emas.',
            en: 'Clarify dietary needs (halal, vegetarian) and be mindful of greeting customs — for example, not every culture is comfortable with a handshake or direct eye contact.',
          },
        },
      ],
    },
  ],
  commonMistakes: [
    { ru: 'Повышать голос вместо того, чтобы говорить проще', uz: 'Soddaroq gapirish o\'rniga ovozni ko\'tarish', en: 'Raising your voice instead of simplifying your speech' },
    { ru: 'Передразнивать или высмеивать акцент гостя', uz: 'Mehmonning urg\'usiga taqlid qilish yoki masxaralash', en: 'Mimicking or mocking a guest\'s accent' },
    { ru: 'Использовать сложные идиомы и сленг', uz: 'Murakkab idioma va slenglardan foydalanish', en: 'Using complex idioms and slang' },
    { ru: 'Игнорировать культурные и диетические особенности гостя', uz: 'Mehmonning madaniy va ovqatlanish xususiyatlarini e\'tiborsiz qoldirish', en: 'Ignoring a guest\'s cultural or dietary needs' },
    { ru: 'Полностью полагаться на переводчик, не пытаясь общаться напрямую', uz: 'To\'g\'ridan-to\'g\'ri muloqot qilishga harakat qilmasdan tarjimonga to\'liq tayanish', en: 'Relying entirely on a translation app without attempting direct communication' },
  ],
  goldenRules: [
    { ru: 'Говорите просто, медленно и без сленга', uz: 'Sodda, sekin va slengsiz gapiring', en: 'Speak simply, slowly, and without slang' },
    { ru: 'Используйте визуальные средства: карты, письменные цифры, жесты', uz: 'Ko\'rgazmali vositalardan foydalaning: xaritalar, yozma raqamlar, imo-ishoralar', en: 'Use visual aids: maps, written numbers, gestures' },
    { ru: 'Проявляйте терпение при каждом взаимодействии', uz: 'Har bir muloqotda sabr ko\'rsating', en: 'Show patience in every interaction' },
    { ru: 'Уважайте культурные традиции и диетические потребности', uz: 'Madaniy an\'analar va ovqatlanish ehtiyojlarini hurmat qiling', en: 'Respect cultural customs and dietary needs' },
    { ru: 'Никогда не передразнивайте и не высмеивайте гостя', uz: 'Hech qachon mehmonga taqlid qilmang yoki uni masxaralamang', en: 'Never mock or mimic a guest' },
  ],
}

export default foreignGuests
