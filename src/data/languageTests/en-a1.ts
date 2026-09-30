import type { LanguageQuestion } from '@/types'

export const enA1: LanguageQuestion[] = [
  // ─── Grammar ───────────────────────────────────────────────────────────────
  {
    id: 'en-a1-01',
    language: 'en',
    level: 'A1',
    skill: 'grammar',
    prompt: 'Choose the correct word: The towels ___ in the bathroom.',
    options: ['are', 'is', 'am', 'be'],
    correctIndex: 0,
    explanation: {
      ru: 'Подлежащее «the towels» стоит во множественном числе, поэтому нужна форма «are».',
      uz: '"The towels" ko\'plikda, shuning uchun "are" shakli kerak.',
      en: '"The towels" is plural, so we use "are".',
    },
  },
  {
    id: 'en-a1-02',
    language: 'en',
    level: 'A1',
    skill: 'grammar',
    prompt: 'Choose the correct word: Your room is ___ the second floor.',
    options: ['in', 'at', 'on', 'to'],
    correctIndex: 2,
    explanation: {
      ru: 'С этажами используется предлог «on»: on the second floor.',
      uz: 'Qavatlar bilan "on" predlogi ishlatiladi: on the second floor.',
      en: 'Floors take the preposition "on": on the second floor.',
    },
  },
  {
    id: 'en-a1-03',
    language: 'en',
    level: 'A1',
    skill: 'grammar',
    prompt: 'Choose the correct word: ___ you have a reservation?',
    options: ['Do', 'Does', 'Are', 'Is'],
    correctIndex: 0,
    explanation: {
      ru: 'Вопрос с «you» и глаголом «have» в Present Simple начинается с «Do».',
      uz: '"You" va "have" fe\'li bilan Present Simple savoli "Do" bilan boshlanadi.',
      en: 'A present simple question with "you" and the verb "have" starts with "Do".',
    },
  },

  // ─── Vocabulary ────────────────────────────────────────────────────────────
  {
    id: 'en-a1-04',
    language: 'en',
    level: 'A1',
    skill: 'vocabulary',
    prompt: 'Choose the correct word: Dinner is from 7 to 10 in the ___.',
    options: ['morning', 'evening', 'afternoon', 'night'],
    correctIndex: 1,
    explanation: {
      ru: 'Ужин подают с 7 до 10 часов вечера, поэтому правильно «evening».',
      uz: 'Kechki ovqat kechqurun soat 7 dan 10 gacha beriladi, shuning uchun "evening" to\'g\'ri.',
      en: 'Dinner is served from 7 to 10 p.m., which is the evening, so "evening" is correct.',
    },
  },
  {
    id: 'en-a1-05',
    language: 'en',
    level: 'A1',
    skill: 'vocabulary',
    prompt: 'Choose the correct word: Here is your ___. Your room number is 305.',
    options: ['bed', 'key', 'towel', 'menu'],
    correctIndex: 1,
    explanation: {
      ru: 'При заселении гостю дают ключ от номера, поэтому подходит слово «key».',
      uz: 'Joylashtirishda mehmonga xona kaliti beriladi, shuning uchun "key" so\'zi mos keladi.',
      en: 'At check-in the guest receives the room key, so "key" fits the sentence.',
    },
  },
  {
    id: 'en-a1-06',
    language: 'en',
    level: 'A1',
    skill: 'vocabulary',
    prompt: 'Choose the correct word: Today is Monday. Tomorrow is ___.',
    options: ['Tuesday', 'Sunday', 'Wednesday', 'Friday'],
    correctIndex: 0,
    explanation: {
      ru: 'День после понедельника — вторник, по-английски «Tuesday».',
      uz: 'Dushanbadan keyingi kun — seshanba, inglizcha "Tuesday".',
      en: 'The day after Monday is Tuesday.',
    },
  },

  // ─── Dialogue ──────────────────────────────────────────────────────────────
  {
    id: 'en-a1-07',
    language: 'en',
    level: 'A1',
    skill: 'dialogue',
    context: 'Guest: Hello. I have a reservation. My name is Anna Schmidt.',
    prompt: 'Choose the most appropriate reply.',
    options: [
      'Hi. What you want?',
      'Good afternoon. Are you has a reservation?',
      'Good afternoon, Ms Schmidt. One moment, please.',
      'Hey, Anna! Sit down there.',
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Этот ответ вежлив, обращается к гостье по фамилии и грамматически верен; остальные грубы или содержат ошибки.',
      uz: 'Bu javob xushmuomala, mehmonga familiyasi bilan murojaat qiladi va grammatik jihatdan to\'g\'ri; qolganlari qo\'pol yoki xatoli.',
      en: 'This reply is polite, uses the guest\'s surname and is grammatically correct; the others are rude or contain mistakes.',
    },
  },
  {
    id: 'en-a1-08',
    language: 'en',
    level: 'A1',
    skill: 'dialogue',
    context: 'Guest: Excuse me, where is the lift?',
    prompt: 'Choose the most appropriate reply.',
    options: [
      'Sorry, the lift is very small.',
      'Yes, I like the lift very much.',
      'No, you can\'t go there now.',
      'It\'s over there, next to the stairs.',
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Гость спрашивает, где лифт, поэтому верный ответ — полное предложение с указанием места.',
      uz: 'Mehmon lift qayerdaligini so\'raydi, shuning uchun to\'g\'ri javob — joyni ko\'rsatuvchi to\'liq gap.',
      en: 'The guest asks where the lift is, so the correct reply gives the place in a full, correct sentence.',
    },
  },

  // ─── Reading ───────────────────────────────────────────────────────────────
  {
    id: 'en-a1-09',
    language: 'en',
    level: 'A1',
    skill: 'reading',
    context: 'Breakfast is from 7:00 to 10:30 in the Silk Road Restaurant. The swimming pool is open from 8:00 to 20:00. The gym is open all day.',
    prompt: 'What time does breakfast finish?',
    options: ['At 7:00', 'At 10:30', 'At 8:00', 'At 20:00'],
    correctIndex: 1,
    explanation: {
      ru: 'В тексте сказано, что завтрак с 7:00 до 10:30, значит, он заканчивается в 10:30.',
      uz: 'Matnda nonushta 7:00 dan 10:30 gacha deyilgan, demak u 10:30 da tugaydi.',
      en: 'The text says breakfast is from 7:00 to 10:30, so it finishes at 10:30.',
    },
  },
  {
    id: 'en-a1-10',
    language: 'en',
    level: 'A1',
    skill: 'reading',
    context: 'Dear guest, welcome to the Silk Road Hotel! Your room number is 412. Wi-Fi is free. The password is on your key card.',
    prompt: 'Where is the Wi-Fi password?',
    options: ['On the key card', 'In room 412', 'In the restaurant', 'On the door'],
    correctIndex: 0,
    explanation: {
      ru: 'В записке сказано, что пароль от Wi-Fi напечатан на карте-ключе.',
      uz: 'Xatda Wi-Fi paroli kalit-kartada yozilgan deyilgan.',
      en: 'The note says the Wi-Fi password is on the key card.',
    },
  },
]
