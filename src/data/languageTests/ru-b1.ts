import type { LanguageQuestion } from '@/types'

export const ruB1: LanguageQuestion[] = [
  // ---------- GRAMMAR ----------
  {
    id: 'ru-b1-01',
    language: 'ru',
    level: 'B1',
    skill: 'grammar',
    prompt: 'Выберите правильный вариант: «Гость перестал ______ на шум после того, как мы ______ ему другой номер.»',
    options: [
      'пожаловаться / предложили',
      'жаловаться / предлагали',
      'жаловаться / предложили',
      'пожаловаться / предлагали',
    ],
    correctIndex: 2,
    explanation: {
      ru: 'После глагола «перестал» используется только несовершенный вид (жаловаться), а «после того, как» указывает на завершённое действие — совершенный вид (предложили).',
      uz: '«Перестал» fe\'lidan keyin faqat tugallanmagan tur (жаловаться) ishlatiladi, «после того, как» esa tugallangan harakatni bildiradi — tugallangan tur (предложили).',
      en: 'After «перестал» (stopped) only the imperfective (жаловаться) is possible, and «после того, как» marks a completed action, so the perfective (предложили) is needed.',
    },
  },
  {
    id: 'ru-b1-02',
    language: 'ru',
    level: 'B1',
    skill: 'grammar',
    prompt: 'Выберите правильный вариант: «Гость попросил, ______ его разбудили в семь утра, и добавил, ______ у него ранний рейс.»',
    options: [
      'чтобы / что',
      'что / чтобы',
      'чтобы / чтобы',
      'что / что',
    ],
    correctIndex: 0,
    explanation: {
      ru: 'После «попросил» просьба вводится союзом «чтобы», а после «добавил» сообщается факт — нужен союз «что».',
      uz: '«Попросил» fe\'lidan keyin iltimos «чтобы» bog\'lovchisi bilan, «добавил» fe\'lidan keyin esa fakt «что» bog\'lovchisi bilan beriladi.',
      en: 'A request after «попросил» is introduced by «чтобы», while «добавил» reports a fact and takes «что».',
    },
  },
  {
    id: 'ru-b1-03',
    language: 'ru',
    level: 'B1',
    skill: 'grammar',
    prompt: 'Выберите правильный вариант: «______ гость приехал на три часа раньше времени заезда, мы смогли сразу заселить его в номер.»',
    options: [
      'Поэтому',
      'Хотя',
      'Однако',
      'Зато',
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Союз «хотя» вводит придаточное уступки: гость приехал раньше времени, и всё же мы сразу его заселили; «однако» и «зато» соединяют самостоятельные предложения, «поэтому» выражает следствие, и ни одно из этих слов не может начинать придаточную часть.',
      uz: '«Хотя» bog\'lovchisi to\'siqsiz ergash gapni kiritadi: mehmon vaqtidan oldin keldi, shunga qaramay biz uni darhol joylashtirdik; «однако» va «зато» mustaqil gaplarni bog\'laydi, «поэтому» natijani bildiradi va bu so\'zlarning hech biri ergash gapni boshlay olmaydi.',
      en: '«Хотя» (although) introduces a concessive clause — the guest arrived early, yet we still checked him in; «однако» and «зато» link independent sentences, «поэтому» expresses a result, and none of them can open a subordinate clause.',
    },
  },

  // ---------- VOCABULARY ----------
  {
    id: 'ru-b1-04',
    language: 'ru',
    level: 'B1',
    skill: 'vocabulary',
    prompt: 'Выберите подходящее слово: «Если гость платит наличными, при заселении мы просим внести ______ на случай повреждения имущества в номере.»',
    options: [
      'предоплату',
      'штраф',
      'сбор',
      'залог',
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Залог — это сумма-гарантия на случай ущерба, которую возвращают при выезде; предоплата идёт в счёт проживания, а штраф и сбор гость обратно не получает.',
      uz: 'Залог — zarar bo\'lib qolsa deb olinadigan kafolat summasi, u chiqishda qaytariladi; предоплата turar joy hisobiga ketadi, штраф va сбор esa mehmonga qaytarilmaydi.',
      en: '«Залог» is a security amount held against possible damage and returned at check-out; «предоплата» counts towards the stay, while «штраф» and «сбор» are never returned.',
    },
  },
  {
    id: 'ru-b1-05',
    language: 'ru',
    level: 'B1',
    skill: 'vocabulary',
    prompt: 'Выберите подходящее слово: «Отель ______ гостям бесплатный трансфер из аэропорта.»',
    options: [
      'представляет',
      'доставляет',
      'предоставляет',
      'поставляет',
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Глагол «предоставлять» означает «давать в пользование, обеспечивать», а «представлять» — «знакомить» или «показывать»; это паронимы с разным значением.',
      uz: '«Предоставлять» fe\'li «foydalanishga berish, ta\'minlash» degan ma\'noni bildiradi, «представлять» esa «tanishtirish» yoki «ko\'rsatish» — bular ma\'nosi turlicha paronimlar.',
      en: '«Предоставлять» means «to provide», while «представлять» means «to introduce» or «to present» — they are paronyms with different meanings.',
    },
  },
  {
    id: 'ru-b1-06',
    language: 'ru',
    level: 'B1',
    skill: 'vocabulary',
    prompt: 'Выберите подходящее слово: «Мы приносим свои ______ за причинённые неудобства и уже решаем этот вопрос.»',
    options: [
      'извинения',
      'сожаления',
      'прощения',
      'оправдания',
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Устойчивое выражение — «приносить извинения»; со словами «сожаления», «прощения» и «оправдания» глагол «приносить» не сочетается.',
      uz: '«Приносить извинения» — turg\'un ibora; «сожаления», «прощения» va «оправдания» so\'zlari «приносить» fe\'li bilan birikmaydi.',
      en: '«Приносить извинения» (to offer apologies) is the fixed expression; «приносить» does not combine with «сожаления», «прощения» or «оправдания».',
    },
  },

  // ---------- DIALOGUE ----------
  {
    id: 'ru-b1-07',
    language: 'ru',
    level: 'B1',
    skill: 'dialogue',
    context: 'Гость: «Здравствуйте! Я бронировал номер на двоих на сегодня, но утром мне пришло письмо, что бронь отменена. Я ничего не отменял!»',
    prompt: 'Выберите наиболее подходящий ответ администратора.',
    options: [
      '«Извините, но такие письма иногда рассылает система автоматически, так что, скорее всего, всё в порядке.»',
      '«Понимаю. К сожалению, отменённую бронь восстановить нельзя, но я могу оформить новую по текущей цене.»',
      '«К сожалению, отмены со стороны сайта бронирования мы не контролируем, Вам лучше обратиться в их поддержку.»',
      '«Прошу прощения за доставленные неудобства. Позвольте, я проверю Вашу бронь по фамилии и разберусь, что произошло.»',
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Правильный ответ содержит извинение за доставленные неудобства и конкретное действие — проверить бронь; остальные варианты вежливы по форме, но либо ничего не делают, либо предлагают новую бронь, не проверив старую, либо перекладывают ответственность на сайт бронирования.',
      uz: 'To\'g\'ri javobda yetkazilgan noqulaylik uchun uzr va aniq harakat — bronni tekshirish bor; qolgan variantlar shaklan xushmuomala, lekin yo hech narsa qilmaydi, yo eskisini tekshirmay yangi bron taklif qiladi, yo mas\'uliyatni bron saytiga yuklaydi.',
      en: 'The correct reply apologises for the inconvenience and takes a concrete step — checking the booking; the others are polite in form but either do nothing, offer a new booking without checking the old one, or shift responsibility to the booking site.',
    },
  },
  {
    id: 'ru-b1-08',
    language: 'ru',
    level: 'B1',
    skill: 'dialogue',
    context: 'Гость: «Здравствуйте! Наш рейс только в одиннадцать вечера. Можно остаться в номере до вечера, а не выезжать в двенадцать?»',
    prompt: 'Выберите наиболее подходящий ответ администратора.',
    options: [
      '«К сожалению, выезд у нас строго в 12:00, это правило отеля, и исключений мы не делаем.»',
      '«Поздний выезд возможен до 18:00 за дополнительную плату. Сейчас проверю, свободен ли номер на это время, и сообщу Вам стоимость.»',
      '«Поздний выезд возможен, оставайтесь до вечера — доплачивать ничего не нужно, я всё оформлю.»',
      '«Вы можете остаться до 18:00, но я не знаю, сколько это будет стоить, уточните у коллег вечером.»',
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Правильный ответ называет условия позднего выезда и обещает проверить номер и сообщить стоимость; остальные варианты либо не предлагают решения, либо обещают то, чего администратор гарантировать не может, либо перекладывают вопрос на коллег.',
      uz: 'To\'g\'ri javob kech chiqish shartlarini aytadi va xonani tekshirib narxni xabar berishga va\'da beradi; qolgan variantlar yo yechim taklif qilmaydi, yo administrator kafolatlay olmaydigan narsani va\'da qiladi, yo masalani hamkasblarga yuklaydi.',
      en: 'The correct reply states the late check-out terms and promises to check the room and confirm the price; the others either offer no solution, promise what the administrator cannot guarantee, or pass the question on to colleagues.',
    },
  },

  // ---------- READING ----------
  {
    id: 'ru-b1-09',
    language: 'ru',
    level: 'B1',
    skill: 'reading',
    context: 'Сообщение от гостя в WhatsApp: «Добрый день! Мы заселились вчера в номер 305. В целом всё хорошо, но вечером и рано утром было очень шумно: за стеной идёт ремонт, и в семь утра рабочие снова начали стучать. У нас маленький ребёнок, и он почти не спал. Мы не хотим никому портить настроение, но ещё одну такую ночь не выдержим. Подскажите, что можно сделать?»',
    prompt: 'Чего гости, скорее всего, ждут от администратора?',
    options: [
      'Что им вернут деньги за первую ночь и они смогут уехать.',
      'Что администратор извинится и объяснит, что ремонт скоро закончится.',
      'Что им предложат другой, более тихий номер.',
      'Что им объяснят, зачем в отеле начали ремонт.',
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Гости пишут, что ещё одну такую ночь не выдержат, и спрашивают, что можно сделать, — то есть ждут решения, а не объяснений или извинений; самое очевидное решение — другой, более тихий номер.',
      uz: 'Mehmonlar yana bir shunday tunga chiday olmasliklarini yozib, nima qilish mumkinligini so\'rashadi — ya\'ni tushuntirish yoki uzr emas, yechim kutishadi; eng aniq yechim esa boshqa, tinchroq xona.',
      en: 'The guests say they cannot bear another night like this and ask what can be done — they expect a solution, not explanations or apologies, and the obvious one is a different, quieter room.',
    },
  },
  {
    id: 'ru-b1-10',
    language: 'ru',
    level: 'B1',
    skill: 'reading',
    context: 'Письмо от гостя: «Здравствуйте! Я жил у вас с 12 по 15 марта в номере 218. При выезде мне выдали счёт, в который включён завтрак за все три дня, хотя я завтракал только один раз — 13 марта. Проживание я оплачивал корпоративной картой, и наша бухгалтерия не принимает документ с ошибкой. Буду признателен, если Вы пришлёте исправленный счёт на эту почту до конца недели. С уважением, Дмитрий Козлов»',
    prompt: 'Почему гостю важно получить именно исправленный счёт?',
    options: [
      'Без него компания не примет отчёт о расходах на поездку.',
      'Он хочет, чтобы ему вернули деньги за два лишних завтрака.',
      'Он считает, что ошибка в цене номера, а не в завтраках.',
      'Он платил личной картой и должен отчитаться перед компанией.',
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Гость платил корпоративной картой, а бухгалтерия не принимает документ с ошибкой, поэтому без исправленного счёта компания не примет его расходы; о возврате денег он не просит, а ошибка в счёте касается завтраков, а не проживания.',
      uz: 'Mehmon korporativ karta bilan to\'lagan, buxgalteriya esa xatoli hujjatni qabul qilmaydi, shuning uchun tuzatilgan hisobsiz kompaniya uning xarajatlarini qabul qilmaydi; u pulni qaytarishni so\'ramaydi, hisobdagi xato esa turar joyga emas, nonushtalarga tegishli.',
      en: 'The guest paid with a corporate card and his company\'s accounting will not accept a document with an error, so without a corrected invoice his expenses will not be accepted; he does not ask for a refund, and the error concerns breakfasts, not the accommodation.',
    },
  },
]
