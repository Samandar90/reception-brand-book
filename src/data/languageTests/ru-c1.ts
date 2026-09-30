import type { LanguageQuestion } from '@/types'

export const ruC1: LanguageQuestion[] = [
  // ─── Grammar ────────────────────────────────────────────────────────────────
  {
    id: 'ru-c1-01',
    language: 'ru',
    level: 'C1',
    skill: 'grammar',
    prompt: 'Выберите предложение, построенное грамматически правильно.',
    options: [
      'Ознакомившись с правилами проживания, у гостя не осталось вопросов о сроках возврата депозита.',
      'Ознакомившись с правилами проживания, гостю стало понятно, почему депозит не возвращается в день выезда.',
      'Ознакомившись с правилами проживания, гость понял, почему депозит не возвращается в день выезда.',
      'Ознакомившись с правилами проживания, вопрос о сроках возврата депозита был снят гостем.',
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Деепричастный оборот должен относиться к подлежащему главного предложения, и только в этом варианте действие «ознакомившись» выполняет то же лицо, что и «понял», — гость.',
      uz: 'Ravishdosh oboroti bosh gapning egasiga tegishli bo\'lishi kerak, va faqat shu variantda «ознакомившись» harakatini «понял» bilan bir shaxs — mehmon bajaradi.',
      en: 'A gerund phrase must refer to the subject of the main clause, and only here is the same person — the guest — the one who both «ознакомившись» (having read) and «понял» (understood).',
    },
  },
  {
    id: 'ru-c1-02',
    language: 'ru',
    level: 'C1',
    skill: 'grammar',
    prompt: 'Выберите предложение, в котором формы после предлогов употреблены правильно.',
    options: [
      'Согласно правил отеля, заселение возможно по приезду после 14:00.',
      'Согласно правилам отеля, заселение возможно по приезду после 14:00.',
      'Согласно правил отеля, заселение возможно по приезде после 14:00.',
      'Согласно правилам отеля, заселение возможно по приезде после 14:00.',
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Предлог «согласно» требует дательного падежа («правилам»), а в значении «после приезда» нормативна форма предложного падежа «по приезде».',
      uz: '«Согласно» predlogi jo\'nalish kelishigini talab qiladi («правилам»), «kelgandan keyin» ma\'nosida esa o\'rin-payt kelishigi shakli «по приезде» me\'yoriy hisoblanadi.',
      en: 'The preposition «согласно» takes the dative («правилам»), and in the sense of «upon arrival» the standard form is the prepositional «по приезде».',
    },
  },
  {
    id: 'ru-c1-03',
    language: 'ru',
    level: 'C1',
    skill: 'grammar',
    prompt: 'Выберите правильную форму причастия: «Претензия, ___ в настоящее время руководством отеля, получит официальный ответ в течение трёх рабочих дней.»',
    options: ['рассматриваемая', 'рассмотренная', 'рассматривающая', 'рассмотревшая'],
    correctIndex: 0,
    explanation: {
      ru: 'Претензию рассматривают прямо сейчас, значит нужно страдательное причастие настоящего времени «рассматриваемая»; «рассмотренная» означает уже завершённое действие, а «рассматривающая» и «рассмотревшая» — действительные причастия, которые обозначают того, кто сам рассматривает.',
      uz: 'Shikoyat hozir ko\'rib chiqilmoqda, demak hozirgi zamon majhul sifatdoshi «рассматриваемая» kerak; «рассмотренная» tugallangan harakatni bildiradi, «рассматривающая» va «рассмотревшая» esa o\'zi ko\'rib chiqayotgan shaxsni bildiruvchi aniq sifatdoshlardir.',
      en: 'The complaint is being reviewed right now, so the present passive participle «рассматриваемая» is needed; «рассмотренная» means already completed, while «рассматривающая» and «рассмотревшая» are active participles describing the one who reviews.',
    },
  },

  // ─── Vocabulary ─────────────────────────────────────────────────────────────
  {
    id: 'ru-c1-04',
    language: 'ru',
    level: 'C1',
    skill: 'vocabulary',
    prompt: 'Выберите вариант, подходящий по смыслу: «___, шум из соседнего номера так и не был устранён.»',
    options: [
      'В ответ на неоднократные обращения гостя',
      'Ввиду неоднократных обращений гостя',
      'Несмотря на неоднократные обращения гостя',
      'Благодаря неоднократным обращениям гостя',
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Вторая часть сообщает о результате, противоречащем ожиданиям («так и не был устранён»), поэтому нужен уступительный оборот «несмотря на обращения»; «ввиду» и «благодаря» выражают причину, а «в ответ на» — ответное действие, что противоречит смыслу предложения.',
      uz: 'Gapning ikkinchi qismi kutilganga zid natijani bildiradi («так и не был устранён»), shuning uchun «несмотря на обращения» to\'siqsizlik oboroti kerak; «ввиду» va «благодаря» sababni, «в ответ на» esa javob harakatini bildiradi, bu esa gap mazmuniga zid.',
      en: 'The second half reports an outcome contrary to expectation («так и не был устранён»), so the concessive «несмотря на обращения» is needed; «ввиду» and «благодаря» express cause and «в ответ на» a response, which contradicts the meaning of the sentence.',
    },
  },
  {
    id: 'ru-c1-05',
    language: 'ru',
    level: 'C1',
    skill: 'vocabulary',
    prompt: 'Выберите правильное слово: «Для ___ сотрудников компаний-партнёров действует корпоративный тариф с завтраком.»',
    options: ['командировавших', 'командующих', 'командирующих', 'командированных'],
    correctIndex: 3,
    explanation: {
      ru: 'О человеке, которого направили в командировку, говорят «командированный» (страдательное причастие); «командирующих» и «командировавших» — действительные причастия, обозначающие тех, кто сам направляет в командировку, а «командующих» значит «руководящих, отдающих приказы».',
      uz: 'Xizmat safariga yuborilgan odam haqida «командированный» (majhul sifatdosh) deyiladi; «командирующих» va «командировавших» — safarga o\'zi yuboruvchilarni bildiruvchi aniq sifatdoshlar, «командующих» esa «boshqaruvchi, buyruq beruvchi» degan ma\'noni anglatadi.',
      en: 'A person sent on a business trip is «командированный» (a passive participle); «командирующих» and «командировавших» are active participles for those who do the sending, and «командующих» means «commanding, giving orders».',
    },
  },
  {
    id: 'ru-c1-06',
    language: 'ru',
    level: 'C1',
    skill: 'vocabulary',
    prompt: 'Выберите устойчивое выражение: «Хотя по правилам поздний выезд оплачивается отдельно, администратор решил ___ гостю и не брать доплату.»',
    options: ['пойти на попятную', 'пойти навстречу', 'пойти на поводу', 'пойти вразрез'],
    correctIndex: 1,
    explanation: {
      ru: '«Пойти навстречу кому-либо» означает сделать уступку, и только это выражение сочетается с дательным падежом «гостю»; «пойти на попятную» — отказаться от своих слов, «пойти на поводу у кого-либо» — слепо подчиниться, «пойти вразрез с чем-либо» — противоречить.',
      uz: '«Пойти навстречу кому-либо» — yon berish degani, va faqat shu ibora «гостю» jo\'nalish kelishigi bilan qo\'llanadi; «пойти на попятную» — so\'zidan qaytish, «пойти на поводу у кого-либо» — ko\'r-ko\'rona bo\'ysunish, «пойти вразрез с чем-либо» — zid kelish.',
      en: '«Пойти навстречу кому-либо» means to accommodate someone, and it is the only expression that takes the dative «гостю»; «пойти на попятную» is to back down, «пойти на поводу у кого-либо» is to be led blindly, «пойти вразрез с чем-либо» is to contradict.',
    },
  },

  // ─── Dialogue ───────────────────────────────────────────────────────────────
  {
    id: 'ru-c1-07',
    language: 'ru',
    level: 'C1',
    skill: 'dialogue',
    context: 'Гость: «Я третий раз за неделю прошу заменить сломанный кондиционер, и каждый раз мне обещают "разобраться". Скажите честно: мне продолжать ждать или сразу писать отзыв?»',
    prompt: 'Выберите наиболее подходящий ответ администратора.',
    options: [
      'Приносим искренние извинения за доставленные неудобства. Ваше обращение уже зарегистрировано, передано в инженерную службу и будет рассмотрено в установленном порядке в ближайшее время.',
      'Я вас понимаю, но вы же сами видите, сколько у нас сейчас гостей. Как только освободится техник, он сразу подойдёт к вам.',
      'Понимаю ваше возмущение и приношу извинения за то, что вопрос до сих пор не решён. Я лично проконтролирую замену сегодня до 18:00 и перезвоню вам, как только всё будет готово.',
      'Не переживайте, такое бывает: техники сейчас загружены заявками, придётся немного подождать. Отзыв вы, конечно, можете написать — это ваше полное право, мы его обязательно прочитаем.',
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Только этот ответ признаёт вину, берёт личную ответственность и называет конкретный срок; канцелярская отписка, ссылка на занятость и снисходительное «не переживайте» лишь усиливают раздражение гостя.',
      uz: 'Faqat shu javob aybni tan oladi, shaxsiy mas\'uliyatni o\'z zimmasiga oladi va aniq muddatni aytadi; rasmiyatchilik jumlasi, bandlikka ishora va kamsituvchi «не переживайте» mehmonning g\'azabini kuchaytiradi xolos.',
      en: 'Only this reply admits fault, takes personal ownership and names a concrete deadline; a bureaucratic brush-off, an excuse about being busy and a patronising «не переживайте» would only make the guest angrier.',
    },
  },
  {
    id: 'ru-c1-08',
    language: 'ru',
    level: 'C1',
    skill: 'dialogue',
    context: 'Гость: «Спасибо, конечно, что поселили нас прямо над рестораном — живая музыка до двух ночи, я так понимаю, входит в стоимость номера?»',
    prompt: 'Выберите наиболее подходящий ответ администратора.',
    options: [
      'Да, живая музыка по вечерам — одна из особенностей нашего отеля: гости обычно её очень ценят, а для вас в ресторане всегда найдётся свободный столик.',
      'Приносим извинения, если музыка вам мешает, однако при бронировании вы не указали пожеланий по расположению номера, поэтому система разместила вас в первом свободном номере этой категории.',
      'Ой, а вам мешает? Ресторан закрывается в два, потерпите чуть-чуть, а завтра что-нибудь придумаем.',
      'Приношу извинения — шум из ресторана явно не входит в то, за что вы платили. Позвольте предложить переезд в тихий номер той же категории на верхнем этаже: я подготовлю его в течение часа.',
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Гость говорит с иронией, и только этот ответ считывает её, извиняется без оправданий и сразу предлагает решение; первый вариант понимает фразу буквально, второй перекладывает вину на гостя, а третий недопустимо фамильярен.',
      uz: 'Mehmon kinoya bilan gapiryapti, va faqat shu javob buni tushunadi, bahonasiz uzr so\'raydi va darhol yechim taklif qiladi; birinchi variant gapni so\'zma-so\'z tushunadi, ikkinchisi aybni mehmonga yuklaydi, uchinchisi esa yo\'l qo\'yib bo\'lmas darajada o\'ta erkin (familyar).',
      en: 'The guest is being ironic, and only this reply picks up on it, apologises without excuses and immediately offers a solution; the first takes the remark literally, the second shifts blame onto the guest, and the third is unacceptably familiar.',
    },
  },

  // ─── Reading ────────────────────────────────────────────────────────────────
  {
    id: 'ru-c1-09',
    language: 'ru',
    level: 'C1',
    skill: 'reading',
    context: 'Уважаемая администрация! Пишу не для того, чтобы требовать компенсацию, — хотя, признаться, мысль такая была. За четыре дня проживания я трижды обращался на ресепшен по поводу неработающего сейфа, и каждый раз меня заверяли, что «мастер уже вызван». Мастер, по-видимому, так и не нашёл дорогу в наш номер. Отдельно отмечу, что горничная Мадина — единственная, кто предложил хоть какое-то решение: хранить ценные вещи в сейфе на ресепшене. Не сомневаюсь, что у вас прекрасный отель, — судя по ценам, иначе и быть не может. Надеюсь, это письмо дойдёт до кого-то, кто в состоянии не только извиниться, но и что-то изменить.',
    prompt: 'Какое утверждение точнее всего передаёт позицию автора письма?',
    options: [
      'Автор требует денежную компенсацию за неисправный сейф и угрожает отзывом.',
      'Автор недоволен не столько поломкой, сколько тем, что его обращения остались без реальных действий.',
      'Автор считает, что весь персонал отеля, включая горничную, работает некомпетентно.',
      'Автор доволен уровнем отеля и ценами, но просит побыстрее починить сейф.',
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Автор прямо говорит, что не требует компенсации, хвалит горничную и иронизирует над ценами, а главный упрёк — обещания без действий, о чём говорит последняя фраза про «не только извиниться, но и что-то изменить».',
      uz: 'Muallif kompensatsiya talab qilmasligini ochiq aytadi, xona xizmatchisi (горничная) Madinani maqtaydi va narxlar ustidan kinoya qiladi, asosiy tanbeh esa — harakatsiz va\'dalar, buni «не только извиниться, но и что-то изменить» degan oxirgi jumla ko\'rsatadi.',
      en: 'The writer explicitly says he is not demanding compensation, praises the maid and is ironic about the prices; his real grievance is promises without action, as the closing line about «not only apologising but changing something» shows.',
    },
  },
  {
    id: 'ru-c1-10',
    language: 'ru',
    level: 'C1',
    skill: 'reading',
    context: 'Правила отмены бронирования. Бесплатная отмена возможна не позднее чем за 48 часов до времени заезда (14:00 по местному времени). При отмене в более поздний срок, а равно при незаезде, удерживается стоимость первых суток проживания, за исключением случаев, когда бронирование оформлено по невозвратному тарифу: в этом случае удерживается полная стоимость. Изменение дат заезда приравнивается к отмене, если новые даты не входят в первоначально забронированный период. Просьбы о переносе, поступившие менее чем за 48 часов до заезда, рассматриваются в индивидуальном порядке, однако отель оставляет за собой право отказать без объяснения причин. Возврат удержанных сумм в порядке исключения возможен только при предъявлении документов, подтверждающих форс-мажорные обстоятельства.',
    prompt: 'Гость с бронированием по стандартному тарифу (заезд в пятницу) написал в четверг в 15:00 с просьбой перенести заезд на следующую неделю. Что следует из правил?',
    options: [
      'Просьба приравнивается к отмене; отель может рассмотреть её индивидуально, но вправе отказать и удержать стоимость первых суток.',
      'Перенос будет оформлен бесплатно: гость обратился до времени заезда.',
      'Отель обязан перенести даты, но вправе удержать стоимость первых суток.',
      'С гостя будет удержана полная стоимость, так как перенос на другие даты равносилен незаезду по невозвратному тарифу.',
    ],
    correctIndex: 0,
    explanation: {
      ru: 'От четверга 15:00 до времени заезда в пятницу (14:00) остаётся меньше 48 часов, а новые даты не входят в забронированный период, поэтому просьба приравнивается к поздней отмене с удержанием первых суток, и рассмотреть её отель может, но не обязан.',
      uz: 'Payshanba 15:00 dan juma kungi joylashish vaqtigacha (14:00) 48 soatdan kam qoladi, yangi sanalar esa bron qilingan davrga kirmaydi, shuning uchun so\'rov birinchi sutka ushlab qolinadigan kech bekor qilishga tenglashtiriladi, mehmonxona esa uni ko\'rib chiqishi mumkin, lekin majbur emas.',
      en: 'Thursday 15:00 is less than 48 hours before Friday\'s check-in time (14:00) and the new dates fall outside the booked period, so the request counts as a late cancellation with the first night withheld, and the hotel may consider it but is not obliged to.',
    },
  },
]
