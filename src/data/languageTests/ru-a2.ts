import type { LanguageQuestion } from '@/types'

export const ruA2: LanguageQuestion[] = [
  // ─── Grammar ───────────────────────────────────────────────────────────────
  {
    id: 'ru-a2-01',
    language: 'ru',
    level: 'A2',
    skill: 'grammar',
    prompt: 'Выберите правильную форму: На эти даты у нас есть три свободных ___.',
    options: ['номер', 'номера', 'номеров', 'номеру'],
    correctIndex: 1,
    explanation: {
      ru: 'После числительных два, три, четыре существительное стоит в родительном падеже единственного числа: три номера.',
      uz: 'Два, три, четыре sonlaridan keyin ot birlikdagi qaratqich kelishigida turadi: три номера.',
      en: 'After the numerals two, three and four the noun takes the genitive singular: три номера.',
    },
  },
  {
    id: 'ru-a2-02',
    language: 'ru',
    level: 'A2',
    skill: 'grammar',
    prompt: 'Выберите правильную форму: Гостья из Германии ___ вчера поздно вечером.',
    options: ['приехал', 'приехали', 'приехала', 'приедет'],
    correctIndex: 2,
    explanation: {
      ru: '«Гостья» — существительное женского рода, поэтому глагол в прошедшем времени получает окончание -а: приехала.',
      uz: '«Гостья» — ayol jinsidagi ot, shuning uchun o\'tgan zamon fe\'li -а qo\'shimchasini oladi: приехала.',
      en: '«Гостья» is a feminine noun, so the past-tense verb takes the ending -а: приехала.',
    },
  },
  {
    id: 'ru-a2-03',
    language: 'ru',
    level: 'A2',
    skill: 'grammar',
    prompt: 'Выберите правильный предлог: Наш гость приехал ___ Самарканда на поезде.',
    options: ['с', 'от', 'из', 'в'],
    correctIndex: 2,
    explanation: {
      ru: 'Когда говорят о городе, откуда человек приехал, используется предлог «из» с родительным падежом: из Самарканда.',
      uz: 'Odam qaysi shahardan kelganini aytganda «из» predlogi qaratqich kelishigi bilan ishlatiladi: из Самарканда.',
      en: 'To say which city someone came from, Russian uses «из» with the genitive: из Самарканда.',
    },
  },

  // ─── Vocabulary ────────────────────────────────────────────────────────────
  {
    id: 'ru-a2-04',
    language: 'ru',
    level: 'A2',
    skill: 'vocabulary',
    prompt: 'Выберите подходящее слово: Завтрак ___ в стоимость номера.',
    options: ['входит', 'заходит', 'выходит', 'приходит'],
    correctIndex: 0,
    explanation: {
      ru: 'Устойчивое выражение «входить в стоимость» означает, что услуга уже включена в цену.',
      uz: '«Входить в стоимость» turg\'un iborasi xizmat narxga allaqachon kiritilganini bildiradi.',
      en: 'The set phrase «входить в стоимость» means the service is already included in the price.',
    },
  },
  {
    id: 'ru-a2-05',
    language: 'ru',
    level: 'A2',
    skill: 'vocabulary',
    prompt: 'Выберите подходящее слово: Пожалуйста, ___ эту анкету и распишитесь внизу.',
    options: ['наполните', 'выполните', 'исполните', 'заполните'],
    correctIndex: 3,
    explanation: {
      ru: 'С анкетой или бланком используется глагол «заполнить»; «наполнить» говорят о жидкости, а «выполнить» — о задании.',
      uz: 'Anketa yoki blank bilan «заполнить» fe\'li ishlatiladi; «наполнить» suyuqlik haqida, «выполнить» esa topshiriq haqida aytiladi.',
      en: 'A form is «заполнить»; «наполнить» is used for liquids and «выполнить» for tasks.',
    },
  },
  {
    id: 'ru-a2-06',
    language: 'ru',
    level: 'A2',
    skill: 'vocabulary',
    prompt: 'Выберите подходящее слово: Горничная сделает ___ в номере после двенадцати часов.',
    options: ['стирку', 'уборку', 'зарядку', 'покупку'],
    correctIndex: 1,
    explanation: {
      ru: 'Горничная убирает номер, поэтому правильно «сделает уборку».',
      uz: 'Xona xizmatchisi xonani tozalaydi, shuning uchun «сделает уборку» to\'g\'ri.',
      en: 'The housekeeper cleans the room, so «сделает уборку» is correct.',
    },
  },

  // ─── Dialogue ──────────────────────────────────────────────────────────────
  {
    id: 'ru-a2-07',
    language: 'ru',
    level: 'A2',
    skill: 'dialogue',
    context: 'Гость: Добрый день! Скажите, пожалуйста, до какого времени работает ресторан?',
    prompt: 'Выберите наиболее подходящий ответ.',
    options: [
      'Ресторан работает до одиннадцати вечера. Хотите забронировать столик?',
      'Ресторан работал до одиннадцати вечера. Хотите забронировать столик?',
      'Ресторан работает до одиннадцать вечера. Хотите забронировать столик?',
      'Слушай, ресторан до одиннадцати, если хочешь, забронируй столик.',
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Этот ответ вежлив, стоит в настоящем времени и содержит верную форму «до одиннадцати»; в остальных вариантах ошибка во времени, в падеже или обращение на «ты».',
      uz: 'Bu javob xushmuomala, hozirgi zamonda va «до одиннадцати» shakli to\'g\'ri; boshqa variantlarda zamon yoki kelishik xatosi bor yoki mehmonga «ты» deb murojaat qilingan.',
      en: 'This reply is polite, in the present tense and uses the correct form «до одиннадцати»; the others have a tense error, a case error or address the guest as «ты».',
    },
  },
  {
    id: 'ru-a2-08',
    language: 'ru',
    level: 'A2',
    skill: 'dialogue',
    context: 'Гость: Извините, в моём номере не работает кондиционер, очень жарко.',
    prompt: 'Выберите наиболее подходящий ответ.',
    options: [
      'Ничего страшного, вечером будет прохладно, кондиционер вам не нужен.',
      'Извините за неудобства. Я сейчас же вызываю мастером в ваш номер.',
      'Ладно, я скажу мастеру, а ты пока подожди в номере.',
      'Извините за неудобства. Я сейчас же отправлю мастера в ваш номер.',
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Правильный ответ содержит извинение, вежливое «Вы» и грамматически верное обещание решить проблему.',
      uz: 'To\'g\'ri javobda uzr so\'rash, xushmuomala «Вы» va muammoni hal qilish haqida grammatik jihatdan to\'g\'ri va\'da bor.',
      en: 'The correct reply apologises, keeps the polite «Вы» and makes a grammatically correct promise to solve the problem.',
    },
  },

  // ─── Reading ───────────────────────────────────────────────────────────────
  {
    id: 'ru-a2-09',
    language: 'ru',
    level: 'A2',
    skill: 'reading',
    context: 'Записка гостя из номера 214: «Здравствуйте! Завтра мне нужно быть в аэропорту в 5:30. Пожалуйста, закажите такси на 5:00 и разбудите меня звонком в 4:30. На завтрак я не успею, поэтому прошу приготовить ланч-бокс. Спасибо!»',
    prompt: 'Что должен сделать администратор в 4:30?',
    options: ['Заказать такси', 'Позвонить гостю в номер', 'Отвезти гостя в аэропорт', 'Приготовить ланч-бокс'],
    correctIndex: 1,
    explanation: {
      ru: 'Гость просит разбудить его звонком в 4:30, то есть позвонить ему в номер.',
      uz: 'Mehmon 4:30 da qo\'ng\'iroq bilan uyg\'otishni so\'raydi, ya\'ni xonaga qo\'ng\'iroq qilish kerak.',
      en: 'The guest asks to be woken by a phone call at 4:30, so the receptionist must call the room.',
    },
  },
  {
    id: 'ru-a2-10',
    language: 'ru',
    level: 'A2',
    skill: 'reading',
    context: 'Сообщение от гостя: «Добрый вечер! Наш рейс задержали, поэтому мы приедем завтра не в 14:00, а около 20:00. Пожалуйста, не отменяйте нашу бронь. И ещё: нам нужен номер с двумя отдельными кроватями, а не с одной большой. Спасибо, Карим»',
    prompt: 'Что просит гость?',
    options: [
      'Отменить бронь, потому что рейс задержали',
      'Перенести заезд на 14:00 и оставить большую кровать',
      'Сохранить бронь и подготовить номер с двумя кроватями',
      'Дать номер с одной большой кроватью к 20:00',
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Гость просит не отменять бронь и подготовить номер с двумя отдельными кроватями.',
      uz: 'Mehmon bronni bekor qilmaslikni va ikkita alohida karavotli xona tayyorlashni so\'raydi.',
      en: 'The guest asks to keep the booking and to prepare a room with two separate beds.',
    },
  },
]
