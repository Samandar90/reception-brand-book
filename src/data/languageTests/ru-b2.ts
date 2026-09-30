import type { LanguageQuestion } from '@/types'

export const ruB2: LanguageQuestion[] = [
  // ─── Grammar ────────────────────────────────────────────────────────────────
  {
    id: 'ru-b2-01',
    language: 'ru',
    level: 'B2',
    skill: 'grammar',
    prompt: 'Выберите правильную форму: «Отель находится в ___ километрах от аэропорта.»',
    options: ['двадцать пять', 'двадцати пяти', 'двадцать пяти', 'двадцати пять'],
    correctIndex: 1,
    explanation: {
      ru: 'После предлога «в» расстояние стоит в предложном падеже, и склоняются обе части составного числительного: «в двадцати пяти километрах».',
      uz: '«В» predlogidan keyin masofa o\'rin-payt (predlojniy) kelishigida turadi va murakkab sonning ikkala qismi ham turlanadi: «в двадцати пяти километрах».',
      en: 'After «в» the distance takes the prepositional case, and both parts of the compound numeral decline: «в двадцати пяти километрах».',
    },
  },
  {
    id: 'ru-b2-02',
    language: 'ru',
    level: 'B2',
    skill: 'grammar',
    prompt: 'Выберите правильную форму: «___ оплату, администратор сразу же выдал гостю ключ-карту.»',
    options: ['Приняв', 'Принимая', 'Принять', 'Принятый'],
    correctIndex: 0,
    explanation: {
      ru: 'Оплата была принята до выдачи ключа, поэтому нужно деепричастие совершенного вида «приняв»: «принимая» обозначало бы одновременное действие, а инфинитив и причастие такой оборот не образуют.',
      uz: 'To\'lov kalit berilishidan oldin qabul qilingan, shuning uchun tugallangan tur ravishdoshi «приняв» kerak: «принимая» bir vaqtdagi harakatni bildirgan bo\'lardi, infinitiv va sifatdosh esa bunday oborot hosil qilmaydi.',
      en: 'The payment was taken before the key was issued, so the perfective gerund «приняв» is needed: «принимая» would mean a simultaneous action, and the infinitive and participle cannot form this phrase.',
    },
  },
  {
    id: 'ru-b2-03',
    language: 'ru',
    level: 'B2',
    skill: 'grammar',
    prompt: 'Выберите правильный вариант: «___, ремонт лифта завершили раньше срока, и все этажи снова доступны гостям.»',
    options: ['Вопреки ожиданий', 'Вопреки ожидания', 'Вопреки ожиданиям', 'Вопреки ожиданиями'],
    correctIndex: 2,
    explanation: {
      ru: 'Предлог «вопреки», как и «согласно» и «благодаря», требует дательного падежа: «вопреки ожиданиям», а родительный «вопреки ожиданий» — распространённая ошибка.',
      uz: '«Вопреки» predlogi, xuddi «согласно» va «благодаря» kabi, jo\'nalish kelishigini talab qiladi: «вопреки ожиданиям», qaratqich kelishigidagi «вопреки ожиданий» esa keng tarqalgan xatodir.',
      en: '«Вопреки», like «согласно» and «благодаря», governs the dative — «вопреки ожиданиям»; the genitive «вопреки ожиданий» is a common mistake.',
    },
  },

  // ─── Vocabulary ─────────────────────────────────────────────────────────────
  {
    id: 'ru-b2-04',
    language: 'ru',
    level: 'B2',
    skill: 'vocabulary',
    prompt: 'Выберите предложение, в котором нет ошибки.',
    options: [
      'Вы можете оплатить за проживание картой при заезде.',
      'Вы можете заплатить проживание картой при заезде.',
      'Вы можете уплатить проживание картой при заезде.',
      'Вы можете оплатить проживание картой при заезде.',
    ],
    correctIndex: 3,
    explanation: {
      ru: '«Оплатить» — переходный глагол: оплатить что (проживание), а «заплатить» и «уплатить» в этом значении требуют предлога «за»: заплатить или уплатить за проживание (без предлога они сочетаются только с суммой или видом платежа: заплатить сто долларов, уплатить налог).',
      uz: '«Оплатить» — o\'timli fe\'l: оплатить что (проживание), «заплатить» va «уплатить» esa bu ma\'noda «за» predlogini talab qiladi: заплатить yoki уплатить за проживание (predlogsiz ular faqat summa yoki to\'lov turi bilan birikadi: заплатить сто долларов, уплатить налог).',
      en: '«Оплатить» is transitive — оплатить что (проживание) — while «заплатить» and «уплатить» in this sense require «за»: заплатить or уплатить за проживание (without a preposition they combine only with a sum or a type of payment: заплатить сто долларов, уплатить налог).',
    },
  },
  {
    id: 'ru-b2-05',
    language: 'ru',
    level: 'B2',
    skill: 'vocabulary',
    prompt: 'Выберите подходящее слово: «От имени отеля ___ вам искренние извинения за доставленные неудобства.»',
    options: ['даём', 'приносим', 'делаем', 'говорим'],
    correctIndex: 1,
    explanation: {
      ru: 'В официальной речи устойчивое сочетание — «приносить извинения»; варианты «давать», «делать» или «говорить извинения» по-русски не употребляются.',
      uz: 'Rasmiy nutqda turg\'un birikma «приносить извинения» bo\'lib, «давать», «делать» yoki «говорить извинения» rus tilida ishlatilmaydi.',
      en: 'The fixed formal collocation is «приносить извинения»; «давать», «делать» or «говорить извинения» are not used in Russian.',
    },
  },
  {
    id: 'ru-b2-06',
    language: 'ru',
    level: 'B2',
    skill: 'vocabulary',
    prompt: 'Выберите подходящее слово: «___ за пользование сейфом в номере не взимается.»',
    options: ['Оплата', 'Уплата', 'Выплата', 'Плата'],
    correctIndex: 3,
    explanation: {
      ru: '«Плата» — это сумма, которую взимают за услугу, поэтому правильно «плата не взимается»; «оплата за» — плеоназм (оплачивают что, а не за что), «уплата» требует родительного падежа без предлога («уплата налога»), а «выплата» — это деньги, которые выплачивают кому-то, а не взимают.',
      uz: '«Плата» — xizmat uchun undiriladigan summa, shuning uchun «плата не взимается» to\'g\'ri; «оплата за» — pleonazm (оплачивают что, за что emas), «уплата» predlogsiz qaratqich kelishigini talab qiladi («уплата налога»), «выплата» esa kimgadir to\'lab beriladigan pul bo\'lib, undirilmaydi.',
      en: '«Плата» is the amount charged for a service, so «плата не взимается» is correct; «оплата за» is a pleonasm (оплачивают что, not за что), «уплата» takes the genitive without a preposition («уплата налога»), and «выплата» is money paid out to someone, not collected.',
    },
  },

  // ─── Dialogue ───────────────────────────────────────────────────────────────
  {
    id: 'ru-b2-07',
    language: 'ru',
    level: 'B2',
    skill: 'dialogue',
    context: 'Гость (раздражённо): «Я специально бронировал номер с видом на море, а мне дали окна на парковку! Это неприемлемо, я требую объяснений».',
    prompt: 'Выберите наиболее подходящий ответ администратора.',
    options: [
      'Извиняюсь за неудобство. Позвольте проверить бронирование: если номер с видом на море свободен, я сразу поменяю вас в него.',
      'Понимаю ваше недовольство, но при бронировании вид из окна не гарантируется, это указано в условиях тарифа.',
      'Понимаю ваше недовольство. Позвольте мне проверить бронирование: если номер с видом на море свободен, я немедленно вас переселю.',
      'Ничего не могу поделать, свободных номеров нет, так что придётся пожить как есть.',
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Этот ответ признаёт недовольство гостя и сразу предлагает конкретное действие, тогда как в похожем варианте разговорное «извиняюсь» неуместно в деловой речи, а «поменяю вас в него» — неверное сочетание (нужно «переселю вас»), ответ со ссылкой на условия тарифа оправдывается и не предлагает решения, а вариант «Ничего не могу поделать…» звучит грубо.',
      uz: 'Bu javob mehmonning noroziligini tan oladi va darhol aniq harakat taklif qiladi, o\'xshash variantda esa so\'zlashuvga xos «извиняюсь» ish nutqida o\'rinsiz, «поменяю вас в него» esa noto\'g\'ri birikma (to\'g\'risi «переселю вас»), tarif shartlariga ishora qiluvchi javob o\'zini oqlaydi va yechim taklif qilmaydi, «Ничего не могу поделать…» varianti esa qo\'pol eshitiladi.',
      en: 'This reply acknowledges the guest\'s frustration and immediately offers a concrete action, whereas the similar option uses the colloquial «извиняюсь», which is out of place in professional speech, and the incorrect «поменяю вас в него» (it should be «переселю вас»), the option citing the rate conditions is defensive and offers no solution, and «Ничего не могу поделать…» sounds rude.',
    },
  },
  {
    id: 'ru-b2-08',
    language: 'ru',
    level: 'B2',
    skill: 'dialogue',
    context: 'Гость: «Скажите, могу ли я оставить у вас багаж после выезда? Мой рейс только вечером, а ходить по городу с чемоданами совсем не хочется».',
    prompt: 'Какая реплика администратора построена правильно и уместна в деловом общении?',
    options: [
      'Конечно. Мы представляем бесплатное хранение багажа в течение всего дня: я выдам вам бирку, и вечером вы заберёте вещи по ней.',
      'Оставив багаж в камере хранения, вам выдадут бирку, и вечером вы сможете забрать по ней свои вещи без доплаты.',
      'Да не вопрос, закидывайте чемоданы к нам в камеру хранения, а вечерком заскочите и спокойно их заберёте.',
      'Конечно. Мы бесплатно храним багаж в течение всего дня: я выдам вам багажную бирку, и вечером вы сможете забрать вещи по ней.',
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Этот ответ грамотен и вежливо объясняет порядок хранения, тогда как в других вариантах «представляем» ошибочно употреблено вместо «предоставляем», деепричастный оборот «оставив багаж» не согласован с подлежащим (багаж оставляет гость, а бирку выдают сотрудники), а «не вопрос», «закидывайте» и «вечерком» — разговорные слова, неуместные в деловом общении.',
      uz: 'Bu javob savodli va yuk saqlash tartibini xushmuomalalik bilan tushuntiradi, boshqa variantlarda esa «предоставляем» o\'rniga xato ravishda «представляем» ishlatilgan, «оставив багаж» ravishdosh oboroti ega bilan moslashmagan (yukni mehmon qoldiradi, birkani esa xodimlar beradi), «не вопрос», «закидывайте» va «вечерком» esa ish muloqotida o\'rinsiz so\'zlashuv so\'zlaridir.',
      en: 'This reply is correct and politely explains how storage works, whereas the other options misuse «представляем» for «предоставляем», contain a dangling gerund «оставив багаж» (the guest leaves the luggage but the staff issue the tag), or rely on colloquialisms such as «не вопрос», «закидывайте» and «вечерком» that are out of place in business communication.',
    },
  },

  // ─── Reading ────────────────────────────────────────────────────────────────
  {
    id: 'ru-b2-09',
    language: 'ru',
    level: 'B2',
    skill: 'reading',
    context: 'Здравствуйте. Пишу по поводу моего проживания в номере 418 с 12 по 15 марта. Должен признать, что персонал был неизменно вежлив, а завтраки оказались выше всяких похвал. Однако две ночи подряд из соседнего номера почти до трёх часов доносилась громкая музыка. Я дважды звонил на ресепшен, и оба раза мне обещали разобраться, но ничего не изменилось. В итоге на важные переговоры я пришёл совершенно невыспавшимся. Я не собираюсь писать разгромные отзывы, но и делать вид, что всё было в порядке, тоже не могу. Надеюсь, вы сами понимаете, каким должен быть следующий шаг с вашей стороны.',
    prompt: 'Что автор письма подразумевает последним предложением?',
    options: [
      'Он предупреждает, что опубликует негативный отзыв, если отель не ответит в ближайшее время.',
      'Он требует уволить сотрудника, который дважды не отреагировал на его звонки.',
      'Он ожидает, что отель сам предложит компенсацию, не дожидаясь прямого требования.',
      'Он хочет, чтобы отель принёс официальные извинения его деловым партнёрам.',
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Гость прямо не требует компенсации, но фраза «вы сами понимаете, каким должен быть следующий шаг» даёт понять, что он ждёт инициативы от отеля.',
      uz: 'Mehmon kompensatsiyani ochiq talab qilmaydi, ammo «вы сами понимаете, каким должен быть следующий шаг» iborasi u mehmonxonadan tashabbus kutayotganini bildiradi.',
      en: 'The guest does not demand compensation outright, but «вы сами понимаете, каким должен быть следующий шаг» makes it clear he expects the hotel to take the initiative.',
    },
  },
  {
    id: 'ru-b2-10',
    language: 'ru',
    level: 'B2',
    skill: 'reading',
    context: 'Выдержка из правил отеля. Бронирование по невозвратному тарифу оплачивается полностью в момент подтверждения. При отмене или незаезде внесённая сумма не возвращается, однако гость вправе один раз перенести даты проживания при условии, что уведомление поступило не позднее чем за 72 часа до заезда. Перенос возможен только в пределах шести месяцев с даты первоначального заезда и при наличии свободных номеров той же категории. Если стоимость проживания в новые даты выше, разница доплачивается гостем; если ниже — разница не возвращается. Бронирования, оформленные через сторонние сайты, переносятся исключительно через эти сайты. Отель оставляет за собой право отказать в переносе в период проведения крупных мероприятий в городе.',
    prompt: 'Гость, забронировавший номер по невозвратному тарифу напрямую в отеле, за неделю до заезда просит перенести проживание на два месяца вперёд; новые даты дешевле первоначальных. Что следует из правил?',
    options: [
      'Перенос возможен, и отель обязан вернуть гостю разницу в стоимости.',
      'Перенос возможен при наличии номеров той же категории, но разницу в цене гостю не вернут.',
      'Перенос невозможен, поскольку невозвратный тариф не предусматривает изменения дат.',
      'Перенос возможен только через сторонний сайт, на котором оформлялось бронирование.',
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Уведомление за неделю укладывается в срок 72 часа, бронь сделана напрямую, а по правилам при более низкой цене разница гостю не возвращается.',
      uz: 'Bir hafta oldin xabar berish 72 soatlik muddat talabiga javob beradi, bron to\'g\'ridan-to\'g\'ri qilingan, qoidalarga ko\'ra esa narx pastroq bo\'lsa, farq mehmonga qaytarilmaydi.',
      en: 'A week\'s notice meets the 72-hour deadline, the booking was made directly, and the rules state that if the new dates are cheaper the difference is not refunded.',
    },
  },
]
