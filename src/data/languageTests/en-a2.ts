import type { LanguageQuestion } from '@/types'

export const enA2: LanguageQuestion[] = [
  // ── Grammar ────────────────────────────────────────────────────────────────
  {
    id: 'en-a2-01',
    language: 'en',
    level: 'A2',
    skill: 'grammar',
    prompt: 'Last night the guest ___ his key in the room, so I opened the door for him.',
    options: ['leave', 'left', 'leaved', 'leaves'],
    correctIndex: 1,
    explanation: {
      ru: 'Слова «last night» указывают на прошедшее время, а leave — неправильный глагол, его форма прошедшего времени — left.',
      uz: '«Last night» o\'tgan zamonni bildiradi, leave esa noto\'g\'ri fe\'l — uning o\'tgan zamon shakli left.',
      en: '"Last night" signals the past simple, and leave is an irregular verb whose past form is left.',
    },
  },
  {
    id: 'en-a2-02',
    language: 'en',
    level: 'A2',
    skill: 'grammar',
    prompt: 'The suite is ___ than the standard room, so it costs more.',
    options: ['more big', 'biggest', 'bigger', 'more bigger'],
    correctIndex: 2,
    explanation: {
      ru: 'Big — короткое прилагательное, поэтому сравнительная степень образуется с помощью -er (bigger), а слово «than» подтверждает сравнение.',
      uz: 'Big — qisqa sifat, shuning uchun qiyosiy daraja -er qo\'shimchasi bilan yasaladi (bigger), «than» so\'zi esa qiyoslashni ko\'rsatadi.',
      en: 'Big is a short adjective, so its comparative is formed with -er (bigger), and "than" confirms a comparison.',
    },
  },
  {
    id: 'en-a2-03',
    language: 'en',
    level: 'A2',
    skill: 'grammar',
    prompt: 'How ___ luggage do you have? I can ask the porter to help you.',
    options: ['many', 'few', 'lot', 'much'],
    correctIndex: 3,
    explanation: {
      ru: 'Luggage — неисчисляемое существительное, поэтому с ним используется much, а не many.',
      uz: 'Luggage — sanalmaydigan ot, shuning uchun u bilan many emas, much ishlatiladi.',
      en: 'Luggage is an uncountable noun, so it takes much rather than many.',
    },
  },

  // ── Vocabulary ─────────────────────────────────────────────────────────────
  {
    id: 'en-a2-04',
    language: 'en',
    level: 'A2',
    skill: 'vocabulary',
    prompt: 'I\'m sorry, the restaurant is ___ at the moment. It opens again at 6 p.m.',
    options: ['closed', 'full', 'busy', 'late'],
    correctIndex: 0,
    explanation: {
      ru: 'Фраза «It opens again at 6 p.m.» показывает, что сейчас ресторан не работает, поэтому подходит только closed.',
      uz: '«It opens again at 6 p.m.» iborasi restoran hozir ishlamayotganini bildiradi, shuning uchun faqat closed mos keladi.',
      en: '"It opens again at 6 p.m." shows the restaurant is not open now, so only closed fits.',
    },
  },
  {
    id: 'en-a2-05',
    language: 'en',
    level: 'A2',
    skill: 'vocabulary',
    prompt: 'Could you please ___ this form before I give you the key?',
    options: ['take off', 'fill in', 'look for', 'put on'],
    correctIndex: 1,
    explanation: {
      ru: 'Fill in означает «заполнить (бланк, форму)»; остальные фразовые глаголы не сочетаются со словом form.',
      uz: 'Fill in — «(anketa yoki blankni) to\'ldirish» degani; boshqa iboralar form so\'zi bilan qo\'llanilmaydi.',
      en: 'Fill in means to complete a form; the other phrasal verbs do not go with the word form.',
    },
  },
  {
    id: 'en-a2-06',
    language: 'en',
    level: 'A2',
    skill: 'vocabulary',
    prompt: 'You can take the ___ to the fourth floor. It\'s on your left, next to the stairs.',
    options: ['balcony', 'corridor', 'lift', 'entrance'],
    correctIndex: 2,
    explanation: {
      ru: 'На другой этаж поднимаются на лифте (lift); слова balcony, corridor и entrance с глаголом take в этом значении не используются.',
      uz: 'Boshqa qavatga lift bilan chiqiladi; balcony, corridor va entrance so\'zlari take fe\'li bilan bu ma\'noda ishlatilmaydi.',
      en: 'You take a lift to reach another floor; balcony, corridor and entrance do not work with take in this sense.',
    },
  },

  // ── Dialogue ───────────────────────────────────────────────────────────────
  {
    id: 'en-a2-07',
    language: 'en',
    level: 'A2',
    skill: 'dialogue',
    context: 'Guest: "Good evening. I have a reservation. My name is Anna Müller."',
    prompt: 'Choose the most appropriate reply.',
    options: [
      'Good evening, Ms Müller. Welcome! Could I see your passport, please?',
      'Good evening, Ms Müller. Welcome! Give me your passport now.',
      'Good evening, Ms Müller. Welcome! Can I to see your passport, please?',
      'Good evening, Ms Müller. Welcome! Do you got your passport with you?',
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Только вариант с «Could I see your passport, please?» одновременно грамматически правильный и вежливый; остальные либо звучат грубо, либо содержат ошибки.',
      uz: 'Faqat «Could I see your passport, please?» varianti ham grammatik jihatdan to\'g\'ri, ham xushmuomala; qolganlari yo qo\'pol, yo xatoli.',
      en: 'Only "Could I see your passport, please?" is both grammatically correct and polite; the others are either rude or contain errors.',
    },
  },
  {
    id: 'en-a2-08',
    language: 'en',
    level: 'A2',
    skill: 'dialogue',
    context: 'Guest: "Excuse me, is breakfast included in the price?"',
    prompt: 'Choose the most appropriate reply.',
    options: [
      'Yes, it does. Breakfast is served from 7 to 10 in the restaurant on the ground floor.',
      'Yes, it is. Breakfast serve from 7 to 10 in the restaurant on the ground floor.',
      'Yeah, sure. Go eat from 7 to 10 in the restaurant on the ground floor.',
      'Yes, it is. Breakfast is served from 7 to 10 in the restaurant on the ground floor.',
    ],
    correctIndex: 3,
    explanation: {
      ru: 'На вопрос с «is» отвечают «Yes, it is», а «breakfast is served» — правильная форма; вариант «Yeah, sure. Go eat» слишком фамильярен для стойки регистрации.',
      uz: '«Is» bilan berilgan savolga «Yes, it is» deb javob beriladi, «breakfast is served» esa to\'g\'ri shakl; «Yeah, sure. Go eat» varianti resepshn uchun juda erkin ohangda.',
      en: 'A question with "is" is answered "Yes, it is", and "breakfast is served" is the correct form; "Yeah, sure. Go eat" is too casual for the front desk.',
    },
  },

  // ── Reading ────────────────────────────────────────────────────────────────
  {
    id: 'en-a2-09',
    language: 'en',
    level: 'A2',
    skill: 'reading',
    context: 'Note from a guest: "Hello, this is Mr Lee from room 305. I\'m going to check out tomorrow at 6 a.m., before breakfast. Could you please prepare my bill this evening? I also need a taxi to the airport at 6:15."',
    prompt: 'What does Mr Lee ask the receptionist to do?',
    options: [
      'Bring breakfast to his room early',
      'Change his room to a quieter one',
      'Prepare his bill this evening',
      'Book a later check-out time',
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Гость прямо просит: «Could you please prepare my bill this evening?» — остальные варианты в записке не упоминаются.',
      uz: 'Mehmon to\'g\'ridan-to\'g\'ri «Could you please prepare my bill this evening?» deb so\'raydi; boshqa variantlar xatda umuman yo\'q.',
      en: 'The guest asks directly, "Could you please prepare my bill this evening?"; the other options are not mentioned in the note.',
    },
  },
  {
    id: 'en-a2-10',
    language: 'en',
    level: 'A2',
    skill: 'reading',
    context: 'Notice for guests: "The swimming pool will be closed on Tuesday because we are cleaning it. You can use the gym on the second floor from 7 a.m. to 10 p.m. instead. We are sorry for the inconvenience. The pool will open again on Wednesday morning."',
    prompt: 'When can guests use the pool again?',
    options: [
      'On Tuesday morning',
      'On Wednesday morning',
      'On Tuesday evening',
      'On Wednesday evening',
    ],
    correctIndex: 1,
    explanation: {
      ru: 'В последнем предложении сказано: «The pool will open again on Wednesday morning», то есть бассейн снова откроется в среду утром.',
      uz: 'Oxirgi gapda «The pool will open again on Wednesday morning» deyilgan, ya\'ni basseyn chorshanba kuni ertalab qayta ochiladi.',
      en: 'The last sentence says "The pool will open again on Wednesday morning", so that is when guests can swim again.',
    },
  },
]
