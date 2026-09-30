import type { LanguageQuestion } from '@/types'

export const enB1: LanguageQuestion[] = [
  // ---------- GRAMMAR ----------
  {
    id: 'en-b1-01',
    language: 'en',
    level: 'B1',
    skill: 'grammar',
    prompt: 'Choose the correct option to complete the sentence: "Mr. Adams ______ at our hotel three times since January, and he ______ in room 412 last month."',
    options: [
      'stayed / has stayed',
      'has stayed / has stayed',
      'has stayed / stayed',
      'stayed / stayed',
    ],
    correctIndex: 2,
    explanation: {
      ru: '«Since January» требует Present Perfect (has stayed), а «last month» — законченное время, поэтому нужен Past Simple (stayed).',
      uz: '«Since January» Present Perfect (has stayed) talab qiladi, «last month» esa tugagan vaqt, shuning uchun Past Simple (stayed) kerak.',
      en: '"Since January" needs the present perfect (has stayed), while "last month" is a finished time, so it takes the past simple (stayed).',
    },
  },
  {
    id: 'en-b1-02',
    language: 'en',
    level: 'B1',
    skill: 'grammar',
    prompt: 'Complete the sentence: "If the guest ______ before 6 p.m., we ______ the late check-out fee."',
    options: [
      'will leave / waive',
      'leaves / will waive',
      'leaves / would waive',
      'left / will waive',
    ],
    correctIndex: 1,
    explanation: {
      ru: 'В первом условном предложении после «if» используется настоящее время (leaves), а в главной части — will (will waive).',
      uz: 'Birinchi shart gapida «if» dan keyin hozirgi zamon (leaves), asosiy qismda esa will (will waive) ishlatiladi.',
      en: 'In the first conditional the if-clause takes the present simple (leaves) and the main clause takes will (will waive).',
    },
  },
  {
    id: 'en-b1-03',
    language: 'en',
    level: 'B1',
    skill: 'grammar',
    prompt: 'Choose the correct sentence.',
    options: [
      'Breakfast serves in the restaurant from 7 to 10 a.m.',
      'Breakfast is serving in the restaurant from 7 to 10 a.m.',
      'Breakfast has served in the restaurant from 7 to 10 a.m.',
      'Breakfast is served in the restaurant from 7 to 10 a.m.',
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Завтрак не подаёт сам себя — нужен пассивный залог: is served (be + причастие прошедшего времени).',
      uz: 'Nonushta o\'zini o\'zi bermaydi — majhul nisbat kerak: is served (be + o\'tgan zamon sifatdoshi).',
      en: 'Breakfast does not serve itself, so the passive is needed: is served (be + past participle).',
    },
  },

  // ---------- VOCABULARY ----------
  {
    id: 'en-b1-04',
    language: 'en',
    level: 'B1',
    skill: 'vocabulary',
    prompt: 'Choose the word that best completes the sentence: "We will need a credit card to hold a ______ of 500,000 UZS; the amount will be released after check-out."',
    options: ['deposit', 'discount', 'receipt', 'voucher'],
    correctIndex: 0,
    explanation: {
      ru: 'Deposit — это залоговая сумма, которая блокируется на карте и возвращается после выезда.',
      uz: 'Deposit — bu kartada bloklanadigan va chiqib ketgandan keyin qaytariladigan garov summasi.',
      en: 'A deposit is a sum held on the card as security and released after check-out.',
    },
  },
  {
    id: 'en-b1-05',
    language: 'en',
    level: 'B1',
    skill: 'vocabulary',
    prompt: 'Complete the sentence: "All our rooms come with standard ______ such as free Wi-Fi, a minibar and a safe."',
    options: ['appliances', 'accessories', 'amenities', 'arrangements'],
    correctIndex: 2,
    explanation: {
      ru: 'Amenities — стандартное слово для удобств в номере (Wi-Fi, мини-бар, сейф); appliances — это бытовая техника.',
      uz: 'Amenities — xonadagi qulayliklar (Wi-Fi, minibar, seyf) uchun standart so\'z; appliances esa maishiy texnika degani.',
      en: 'Amenities is the standard word for in-room comforts such as Wi-Fi, a minibar and a safe; appliances means household machines.',
    },
  },
  {
    id: 'en-b1-06',
    language: 'en',
    level: 'B1',
    skill: 'vocabulary',
    prompt: 'Choose the correct option: "______ the pool is closed for maintenance, guests may still use the gym and the sauna."',
    options: ['However', 'Although', 'Despite', 'Therefore'],
    correctIndex: 1,
    explanation: {
      ru: '«Although» вводит придаточное с подлежащим и сказуемым; «despite» требует существительного, а «however» не соединяет две части одного предложения.',
      uz: '«Although» ega va kesimli ergash gapni boshlaydi; «despite» dan keyin ot keladi, «however» esa bir gapning ikki qismini bog\'lamaydi.',
      en: '"Although" introduces a clause with a subject and verb; "despite" needs a noun, and "however" cannot join two parts of one sentence.',
    },
  },

  // ---------- DIALOGUE ----------
  {
    id: 'en-b1-07',
    language: 'en',
    level: 'B1',
    skill: 'dialogue',
    context: 'Guest: "Our flight isn\'t until 9 p.m. tomorrow. Is there any chance we could keep the room a bit longer?"',
    prompt: 'Choose the most appropriate reply.',
    options: [
      'Of course. Late check-out until 2 p.m. is possible for a small fee — do you wanting me to add it to your booking?',
      'Yeah, no worries, keep the room as long as you like — I\'ll just tell housekeeping to skip you tomorrow.',
      'Check-out is at 12 p.m. This is the rule of the hotel and there are no exceptions for anybody, sorry.',
      'Of course. Late check-out until 2 p.m. is available for a small fee — shall I add it to your booking?',
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Правильный ответ вежлив, грамматически верен и предлагает конкретное решение с условиями; остальные содержат ошибку, слишком неформальны или неуслужливы.',
      uz: 'To\'g\'ri javob xushmuomala, grammatik jihatdan to\'g\'ri va shartlari bilan aniq yechim taklif qiladi; boshqalari xato, haddan tashqari norasmiy yoki yordamsiz.',
      en: 'The correct reply is polite, grammatically correct and offers a concrete solution with its conditions; the others contain an error, are too informal or are unhelpful.',
    },
  },
  {
    id: 'en-b1-08',
    language: 'en',
    level: 'B1',
    skill: 'dialogue',
    context: 'Guest: "Excuse me, I was told the airport shuttle leaves at 8, but nobody has come to pick us up and it\'s already 8:20."',
    prompt: 'Choose the most appropriate reply.',
    options: [
      'I\'m so sorry about this. Let me call the driver right now and find out where he is — please give me one moment.',
      'I\'m so sorry about this. Let me to call the driver right now and find out where is he — please give me one moment.',
      'Well, the shuttle is a different department, so it isn\'t really my fault — you should speak to them about it.',
      'Hmm, that\'s weird, he\'s usually around by now. Hang on a sec, I\'ll see what\'s up with him.',
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Правильный ответ — извинение плюс немедленное действие в вежливой форме; другие варианты содержат грамматические ошибки, перекладывают вину или слишком разговорны.',
      uz: 'To\'g\'ri javob — uzr so\'rash va xushmuomala shaklda darhol harakat qilish; boshqalari grammatik xatolarga ega, aybni boshqaga yuklaydi yoki haddan tashqari so\'zlashuv uslubida.',
      en: 'The correct reply apologises and takes immediate action in a polite register; the others contain grammar mistakes, shift the blame or are too casual.',
    },
  },

  // ---------- READING ----------
  {
    id: 'en-b1-09',
    language: 'en',
    level: 'B1',
    skill: 'reading',
    context: 'Dear Reception,\nI\'m writing about my stay next week (booking no. 58213, 12–15 March). My wife has recently had knee surgery, so stairs are quite difficult for her at the moment. I noticed on your website that the building has three floors. Could you let me know whether it would be possible to arrange something suitable for us? We will arrive quite late on the 12th, probably after 10 p.m.\nKind regards,\nDaniel Reed',
    prompt: 'What is Mr. Reed most likely asking for?',
    options: [
      'A discount because of his wife\'s medical condition',
      'Help carrying their luggage up the stairs',
      'A room on the ground floor or close to the lift',
      'A doctor to visit the room when they arrive',
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Гость пишет, что жене трудно подниматься по лестнице, и упоминает три этажа — значит, он намекает на номер на первом этаже или рядом с лифтом.',
      uz: 'Mehmon xotiniga zinadan chiqish qiyinligini yozadi va uch qavatni eslatadi — demak, u birinchi qavatdagi yoki liftga yaqin xonaga ishora qilmoqda.',
      en: 'The guest says stairs are difficult for his wife and mentions the three floors, so he is hinting at a ground-floor room or one near the lift.',
    },
  },
  {
    id: 'en-b1-10',
    language: 'en',
    level: 'B1',
    skill: 'reading',
    context: 'WhatsApp message: "Hi, this is Sofia from room 207. We had a great time, thank you! Just one thing — when I checked the invoice this morning, there was a charge of 180,000 UZS for the minibar, but we didn\'t open it at all. I\'ll be in the lobby until 11:30, then we have to leave for the station. Could someone have a look before then? Thanks!"',
    prompt: 'Why does Sofia mention 11:30?',
    options: [
      'She wants a taxi to the station booked for that time.',
      'She wants the problem sorted out before she leaves the hotel.',
      'She wants to have breakfast in the lobby at that time.',
      'She wants the minibar refilled before her next visit.',
    ],
    correctIndex: 1,
    explanation: {
      ru: 'София указывает время, до которого она будет в лобби, чтобы вопрос со счётом решили до её отъезда на вокзал.',
      uz: 'Sofiya lobbida qachongacha bo\'lishini aytadi, chunki u vokzalga ketishidan oldin hisob masalasi hal qilinishini xohlaydi.',
      en: 'Sofia gives the time she will still be in the lobby because she wants the invoice problem dealt with before she leaves for the station.',
    },
  },
]
