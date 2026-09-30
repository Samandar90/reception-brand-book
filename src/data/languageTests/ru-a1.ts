import type { LanguageQuestion } from '@/types'

export const ruA1: LanguageQuestion[] = [
  // ─── Grammar ────────────────────────────────────────────────────────────────
  {
    id: 'ru-a1-01',
    language: 'ru',
    level: 'A1',
    skill: 'grammar',
    prompt: 'Выберите правильное слово: «Извините, это ___ сумка?»',
    options: ['ваш', 'ваша', 'ваше', 'ваши'],
    correctIndex: 1,
    explanation: {
      ru: '«Сумка» — существительное женского рода, поэтому нужна форма «ваша».',
      uz: '«Сумка» so\'zi rus tilida ayol jinsida, shuning uchun «ваша» shakli kerak.',
      en: '«Сумка» (bag) is a feminine noun, so the possessive must be «ваша».',
    },
  },
  {
    id: 'ru-a1-02',
    language: 'ru',
    level: 'A1',
    skill: 'grammar',
    prompt: 'Выберите правильный предлог: «___ вас есть паспорт?»',
    options: ['В', 'На', 'У', 'К'],
    correctIndex: 2,
    explanation: {
      ru: 'Владение по-русски выражается конструкцией «у + кого есть»: «у вас есть».',
      uz: 'Rus tilida egalik «у + kimda + есть» qurilmasi bilan ifodalanadi: «у вас есть».',
      en: 'Possession in Russian is expressed with «у + genitive + есть»: «у вас есть».',
    },
  },
  {
    id: 'ru-a1-03',
    language: 'ru',
    level: 'A1',
    skill: 'grammar',
    prompt: 'Выберите правильную форму глагола: «Гость ___ в номере 205.»',
    options: ['живёт', 'живу', 'живёшь', 'живём'],
    correctIndex: 0,
    explanation: {
      ru: '«Гость» — это «он», третье лицо единственного числа, поэтому глагол стоит в форме «живёт».',
      uz: '«Гость» — bu «u», uchinchi shaxs birlik, shuning uchun fe\'l «живёт» shaklida bo\'ladi.',
      en: '«Гость» is «he», third person singular, so the verb takes the form «живёт».',
    },
  },

  // ─── Vocabulary ─────────────────────────────────────────────────────────────
  {
    id: 'ru-a1-04',
    language: 'ru',
    level: 'A1',
    skill: 'vocabulary',
    prompt: 'Выберите подходящее слово: «Вот ваш ___ от номера 210.»',
    options: ['счёт', 'этаж', 'завтрак', 'ключ'],
    correctIndex: 3,
    explanation: {
      ru: 'Дверь номера открывают ключом, поэтому гостю дают «ключ от номера».',
      uz: 'Xona eshigi kalit bilan ochiladi, shuning uchun mehmonga «ключ от номера» beriladi.',
      en: 'A room door is opened with a key, so the guest receives the «ключ от номера» (room key).',
    },
  },
  {
    id: 'ru-a1-05',
    language: 'ru',
    level: 'A1',
    skill: 'vocabulary',
    prompt: 'Выберите подходящее слово: «Сегодня понедельник, а завтра — ___.»',
    options: ['среда', 'вторник', 'воскресенье', 'пятница'],
    correctIndex: 1,
    explanation: {
      ru: 'После понедельника идёт вторник.',
      uz: 'Dushanbadan («понедельник») keyin seshanba («вторник») keladi.',
      en: 'The day after Monday («понедельник») is Tuesday («вторник»).',
    },
  },
  {
    id: 'ru-a1-06',
    language: 'ru',
    level: 'A1',
    skill: 'vocabulary',
    prompt: 'Выберите подходящее слово: «Утром гости идут в ресторан на ___.»',
    options: ['обед', 'ужин', 'завтрак', 'полдник'],
    correctIndex: 2,
    explanation: {
      ru: 'Утренний приём пищи называется «завтрак»; обед — днём, ужин — вечером.',
      uz: 'Ertalabki ovqat «завтрак» deyiladi; «обед» — tushlik, «ужин» — kechki ovqat.',
      en: 'The morning meal is «завтрак» (breakfast); «обед» is lunch and «ужин» is dinner.',
    },
  },

  // ─── Dialogue ───────────────────────────────────────────────────────────────
  {
    id: 'ru-a1-07',
    language: 'ru',
    level: 'A1',
    skill: 'dialogue',
    context: 'Гость: «Здравствуйте! У меня бронь на фамилию Каримов.»',
    prompt: 'Выберите наиболее подходящий ответ администратора.',
    options: [
      'Здравствуйте! Одну минуту, я проверю. Ваш паспорт, пожалуйста.',
      'Привет! Сейчас посмотрю. Давай свой паспорт.',
      'Здравствуйте! Я проверять бронь. Паспорт давать, пожалуйста.',
      'Здравствуйте! Спасибо, что были у нас. До свидания!',
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Только этот ответ вежливый, на «Вы» и грамматически правильный: администратор проверяет бронь и просит паспорт.',
      uz: 'Faqat shu javob xushmuomala, «Вы» shaklida va grammatik jihatdan to\'g\'ri: administrator bronni tekshiradi va pasport so\'raydi.',
      en: 'Only this reply is polite, uses the formal «Вы» and is grammatically correct: the receptionist checks the booking and asks for the passport.',
    },
  },
  {
    id: 'ru-a1-08',
    language: 'ru',
    level: 'A1',
    skill: 'dialogue',
    context: 'Гость: «Скажите, пожалуйста, во сколько завтрак?»',
    prompt: 'Выберите наиболее подходящий ответ администратора.',
    options: [
      'Завтрак быть с семь до десять, в ресторан.',
      'Не знаю, спроси утром в ресторане.',
      'Завтрак очень вкусный, вам обязательно понравится!',
      'Завтрак с семи до десяти, в ресторане на первом этаже.',
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Этот ответ прямо отвечает на вопрос — время и место завтрака — и построен грамматически правильно.',
      uz: 'Bu javob savolga to\'g\'ridan-to\'g\'ri javob beradi — nonushta vaqti va joyi — va grammatik jihatdan to\'g\'ri tuzilgan.',
      en: 'This reply directly answers the question — the time and place of breakfast — and is grammatically correct.',
    },
  },

  // ─── Reading ────────────────────────────────────────────────────────────────
  {
    id: 'ru-a1-09',
    language: 'ru',
    level: 'A1',
    skill: 'reading',
    context: 'Здравствуйте! Меня зовут Анна. У меня бронь на два дня: среда и четверг. Я приеду в 15:00.',
    prompt: 'Когда приезжает Анна?',
    options: ['В понедельник', 'В четверг', 'В среду', 'В пятницу'],
    correctIndex: 2,
    explanation: {
      ru: 'Бронь на среду и четверг, значит Анна приезжает в первый день — в среду.',
      uz: 'Bron chorshanba va payshanbaga, demak Anna birinchi kun — chorshanba («среда») kuni keladi.',
      en: 'The booking is for Wednesday and Thursday, so Anna arrives on the first day — Wednesday («среда»).',
    },
  },
  {
    id: 'ru-a1-10',
    language: 'ru',
    level: 'A1',
    skill: 'reading',
    context: 'Заметка для ресепшн: гость из номера 21 уезжает завтра в 6 утра. Ему нужно такси в аэропорт. Завтрак он не хочет.',
    prompt: 'Что нужно гостю?',
    options: ['Завтрак в номер', 'Такси в аэропорт', 'Новый ключ', 'Ещё одна ночь'],
    correctIndex: 1,
    explanation: {
      ru: 'В заметке сказано: «Ему нужно такси в аэропорт», а от завтрака гость отказался.',
      uz: 'Eslatmada «Ему нужно такси в аэропорт» deyilgan, nonushtadan esa mehmon voz kechgan.',
      en: 'The note says «Ему нужно такси в аэропорт» (he needs a taxi to the airport), and the guest does not want breakfast.',
    },
  },
]
