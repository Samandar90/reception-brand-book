import type { WritingPrompt } from '@/types'

export const enWriting: WritingPrompt[] = [
  // ── A2 ─────────────────────────────────────────────────────────────────────
  {
    id: 'en-writing-a2-01',
    language: 'en',
    level: 'A2',
    instruction: {
      ru: 'Ответьте гостю в WhatsApp. Поздоровайтесь, подтвердите, что ждёте его, и объясните, что делать по приезде. Пишите просто и вежливо.',
      uz: 'Mehmonga WhatsApp orqali javob yozing. Salomlashing, uni kutayotganingizni tasdiqlang va kelganda nima qilish kerakligini tushuntiring. Sodda va xushmuomala yozing.',
      en: 'Reply to the guest on WhatsApp. Say hello, confirm that you are expecting them and explain what to do on arrival. Keep it simple and polite.',
    },
    situation:
      'WhatsApp, 22:40. "Hello, this is Mr. Tanaka, I have a booking for tonight. My flight is delayed and I will arrive at the hotel at about 2 a.m. Is that OK? Will someone be at the reception?"',
    minWords: 30,
    maxWords: 60,
  },
  {
    id: 'en-writing-a2-02',
    language: 'en',
    level: 'A2',
    instruction: {
      ru: 'Ответьте на сообщение гостя. Ответьте на оба вопроса: во сколько завтрак и где он проходит. Добавьте одно вежливое предложение в конце.',
      uz: 'Mehmonning xabariga javob yozing. Ikkala savolga javob bering: nonushta soat nechada va qayerda bo\'ladi. Oxirida bitta xushmuomala jumla qo\'shing.',
      en: 'Reply to the guest\'s message. Answer both questions: what time breakfast is and where it is served. Add one polite sentence at the end.',
    },
    situation:
      'Booking.com chat. "Hi! We are checking in tomorrow with two small children. What time is breakfast? And where do we go for it — is it in the hotel or somewhere else?"',
    minWords: 30,
    maxWords: 60,
  },

  // ── B1 ─────────────────────────────────────────────────────────────────────
  {
    id: 'en-writing-b1-01',
    language: 'en',
    level: 'B1',
    instruction: {
      ru: 'Напишите ответ по электронной почте. Объясните, возможен ли ранний заезд, что вы можете предложить, если номер ещё не готов, и попросите нужные детали. Будьте вежливы и конкретны.',
      uz: 'Elektron pochta orqali javob yozing. Erta joylashish mumkinmi, xona hali tayyor bo\'lmasa nima taklif qila olasiz va qanday ma\'lumotlar kerakligini tushuntiring. Xushmuomala va aniq bo\'ling.',
      en: 'Write an email reply. Explain whether early check-in is possible, what you can offer if the room is not ready yet, and ask for any details you need. Be polite and specific.',
    },
    situation:
      'Email from a guest: "Dear Reception, our train from Samarkand arrives at 6:30 in the morning on Friday. Is it possible to check in early? We would like to rest before our meeting at 11. If this costs extra, please let us know. Kind regards, Laura and David Meyer."',
    minWords: 50,
    maxWords: 90,
  },
  {
    id: 'en-writing-b1-02',
    language: 'en',
    level: 'B1',
    instruction: {
      ru: 'Ответьте гостю в WhatsApp. Извинитесь за неудобство, объясните, что вы сделаете прямо сейчас, и предложите решение на случай, если шум не прекратится. Не спорьте и не оправдывайтесь.',
      uz: 'Mehmonga WhatsApp orqali javob yozing. Noqulaylik uchun uzr so\'rang, hozir nima qilishingizni tushuntiring va shovqin to\'xtamasa, yechim taklif qiling. Bahslashmang va o\'zingizni oqlamang.',
      en: 'Reply to the guest on WhatsApp. Apologise for the inconvenience, explain what you will do right now and offer a solution in case the noise continues. Do not argue or make excuses.',
    },
    situation:
      'WhatsApp, 23:15, from room 407: "I\'m sorry to write so late, but the people in the room next to us are playing loud music and shouting. I have an early flight tomorrow and I can\'t sleep. Can you do something about this?"',
    minWords: 50,
    maxWords: 90,
  },

  // ── B2 ─────────────────────────────────────────────────────────────────────
  {
    id: 'en-writing-b2-01',
    language: 'en',
    level: 'B2',
    instruction: {
      ru: 'Напишите ответ по электронной почте. Проявите сочувствие, объясните, как проходит поиск забытых вещей, и опишите варианты возврата предмета гостю (самовывоз, курьер, доверенное лицо). Попросите данные, которые нужны для проверки. Тон — тёплый, но профессиональный.',
      uz: 'Elektron pochta orqali javob yozing. Hamdardlik bildiring, unutilgan buyumlar qanday qidirilishini tushuntiring va buyumni mehmonga qaytarish variantlarini (o\'zi olib ketish, kuryer, ishonchli shaxs) yozing. Tekshirish uchun kerakli ma\'lumotlarni so\'rang. Ohang — iliq, lekin professional.',
      en: 'Write an email reply. Show empathy, explain how lost items are searched for and describe the options for returning the item to the guest (collection, courier, a trusted person). Ask for the details you need to verify the claim. Keep the tone warm but professional.',
    },
    situation:
      'Email: "Hello, I stayed in room 512 from 14 to 17 March and checked out this morning in a hurry. I think I left a silver bracelet on the bathroom shelf — it was a gift from my late mother, so it means a lot to me. I have already flown back to Istanbul. Is there any way to check and send it to me? Thank you so much, Elif Demir."',
    minWords: 70,
    maxWords: 120,
  },

  // ── C1 ─────────────────────────────────────────────────────────────────────
  {
    id: 'en-writing-c1-01',
    language: 'en',
    level: 'C1',
    instruction: {
      ru: 'Напишите ответ по электронной почте от имени отеля. Гость одновременно просит скидку, ссылается на ошибку отеля и ожидает бесплатного повышения категории номера. Признайте ошибку, вежливо разграничьте, что вы можете и чего не можете сделать, предложите конкретное решение с условиями и сохраните лояльность гостя, не создавая прецедента. Стиль — уверенный, дипломатичный, без канцеляризмов.',
      uz: 'Mehmonxona nomidan elektron pochta orqali javob yozing. Mehmon bir vaqtning o\'zida chegirma so\'rayapti, mehmonxona xatosiga ishora qilyapti va xona toifasini bepul oshirishni kutyapti. Xatoni tan oling, nima qila olishingiz va nima qila olmasligingizni xushmuomalalik bilan ajrating, shartlari bilan aniq yechim taklif qiling va pretsedent yaratmasdan mehmonning sadoqatini saqlab qoling. Uslub — ishonchli, diplomatik, rasmiyatchiliksiz.',
      en: 'Write an email reply on behalf of the hotel. The guest is asking for a discount, referring to a mistake the hotel made and expecting a free room upgrade all at once. Acknowledge the mistake, politely separate what you can and cannot do, propose a concrete solution with its conditions and keep the guest\'s loyalty without setting a precedent. The style should be confident and diplomatic, without bureaucratic phrasing.',
    },
    situation:
      'Email: "Dear Manager, I have stayed with you six times over the past two years, always in a Deluxe room. For my wife\'s 40th birthday next month I booked a Junior Suite, but your colleague on the phone confirmed the wrong dates and I only noticed it in the confirmation email today. The correct dates now show a higher rate on your website. Given my history with the hotel and the fact that the error was not mine, I expect the original rate to be honoured and, frankly, I think a complimentary upgrade to the Executive Suite would be appropriate for the occasion. Please advise. Regards, Jonathan Reid."',
    minWords: 90,
    maxWords: 150,
  },
]
