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
    minWords: 40,
    maxWords: 80,
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
    minWords: 40,
    maxWords: 80,
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
    minWords: 70,
    maxWords: 120,
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
    minWords: 70,
    maxWords: 120,
  },
  {
    id: 'en-writing-b1-03',
    language: 'en',
    level: 'B1',
    instruction: {
      ru: 'Ответьте гостю в WhatsApp. Ответ должен: 1) вежливо объяснить, что остаться в номере до 19:00 нельзя, и назвать причину; 2) предложить оба варианта позднего выезда с их условиями и хранение багажа; 3) ответить на вопрос о такси (цена и во сколько вы советуете выехать); 4) спросить, какой вариант гость выбирает.',
      uz: 'Mehmonga WhatsApp orqali javob yozing. Javobda: 1) xonada soat 19:00 gacha qolish mumkin emasligini xushmuomalalik bilan tushuntiring va sababini ayting; 2) kech chiqishning ikkala variantini shartlari bilan va yuk saqlashni taklif qiling; 3) taksi haqidagi savolga javob bering (narxi va qachon chiqishni maslahat berasiz); 4) mehmon qaysi variantni tanlashini so\'rang.',
      en: 'Reply to the guest on WhatsApp. Your reply must: 1) politely explain that staying in the room until 7 p.m. is not possible and give the reason; 2) offer both late check-out options with their conditions, plus luggage storage; 3) answer the taxi question (price and what time you recommend leaving); 4) ask which option the guest prefers.',
    },
    situation:
      'WhatsApp, 9:10 a.m., from room 309: "Hi, this is Carlos. Our flight tonight is at 11 p.m. Can we keep the room until 7 p.m.? And can the hotel taxi take us to the airport at 8 p.m. — how much is it? Thanks!" (Note from the manager: the hotel is fully booked tonight; late check-out is possible until 2 p.m. free of charge or until 4 p.m. for 30% of the room rate; the airport taxi costs 150,000 UZS and the journey takes about 40 minutes.)',
    minWords: 70,
    maxWords: 120,
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
    minWords: 100,
    maxWords: 160,
  },
  {
    id: 'en-writing-b2-02',
    language: 'en',
    level: 'B2',
    instruction: {
      ru: 'Напишите ответ по электронной почте. Ответ должен: 1) выразить сочувствие, не ставя под сомнение слова гостьи; 2) чётко и точно объяснить, почему возврат денег невозможен (условия тарифа); 3) предложить конкретную альтернативу с её условиями (перенос дат, срок, доступность, разница в тарифе); 4) сказать, что и до какого срока гостья должна сделать, чтобы воспользоваться предложением. Не обещайте того, чего политика не разрешает.',
      uz: 'Elektron pochta orqali javob yozing. Javobda: 1) mehmonning so\'zlariga shubha bildirmasdan hamdardlik bildiring; 2) pulni qaytarish nega mumkin emasligini (tarif shartlari) aniq va lo\'nda tushuntiring; 3) shartlari bilan aniq muqobil taklif qiling (sanani ko\'chirish, muddat, bo\'sh joy, tarif farqi); 4) taklifdan foydalanish uchun mehmon nima qilishi va qaysi muddatgacha qilishi kerakligini ayting. Siyosat ruxsat bermagan narsani va\'da qilmang.',
      en: 'Write an email reply. Your reply must: 1) express sympathy without questioning the guest\'s account; 2) explain clearly and precisely why a refund is not possible (the rate conditions); 3) offer a concrete alternative with its conditions (date change, time limit, availability, rate difference); 4) state what the guest needs to do and by when to use the offer. Do not promise anything the policy does not allow.',
    },
    situation:
      'Email: "Dear Sir or Madam, I booked two nights (20–22 April, booking BK-77102, paid in full through Booking.com), but I have just been diagnosed with pneumonia and my doctor has forbidden me to travel. I understand the rate was marked non-refundable, but this is a medical emergency, not a change of mind. I would like a full refund to my card. I can send a medical certificate if required. Yours faithfully, Helen Marsh" (Hotel policy: prepaid non-refundable rates are never refunded in money; the manager allows a one-time change of dates within 6 months, subject to availability and to any rate difference, provided the request is made before the original arrival date.)',
    minWords: 100,
    maxWords: 160,
  },
  {
    id: 'en-writing-b2-03',
    language: 'en',
    level: 'B2',
    instruction: {
      ru: 'Напишите публичный ответ на отзыв от имени отеля. Ответ должен: 1) поблагодарить и извиниться конкретно за названные проблемы, без шаблонных фраз; 2) коротко и честно объяснить, что произошло и что уже изменилось (с датами), не оправдываясь; 3) пригласить гостя связаться напрямую с названным сотрудником и указать канал связи; 4) не предлагать компенсацию и не оспаривать слова гостя публично.',
      uz: 'Mehmonxona nomidan sharhga ommaviy javob yozing. Javobda: 1) aytilgan muammolar uchun shablon iboralarsiz aniq minnatdorchilik bildiring va uzr so\'rang; 2) nima bo\'lganini va nima o\'zgarganini (sanalar bilan) o\'zingizni oqlamasdan qisqa va halol tushuntiring; 3) mehmonni ismi aytilgan xodim bilan to\'g\'ridan-to\'g\'ri bog\'lanishga taklif qiling va aloqa kanalini ko\'rsating; 4) kompensatsiya taklif qilmang va mehmonning so\'zlarini ommaviy ravishda rad etmang.',
      en: 'Write a public reply to the review on behalf of the hotel. Your reply must: 1) thank the guest and apologise specifically for the problems named, with no template phrases; 2) explain briefly and honestly what happened and what has already changed (with dates), without making excuses; 3) invite the guest to contact a named member of staff directly and give the channel; 4) offer no compensation and do not dispute the guest\'s account in public.',
    },
    situation:
      'Public review on Google (2 stars), posted yesterday by "Tomasz W.": "Nice building, terrible timing. Nobody warned us that the floor above was being renovated — drilling from 9 a.m. every day of our 4-night stay. Breakfast eggs were cold twice and the coffee machine was broken on Sunday. Reception apologised every time but nothing changed. Would not come back." (Facts: the renovation finished on 28 March; a second coffee machine was installed on 1 April; hotel policy is never to offer compensation in public replies.)',
    minWords: 100,
    maxWords: 160,
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
    minWords: 140,
    maxWords: 220,
  },
  {
    id: 'en-writing-c1-02',
    language: 'en',
    level: 'C1',
    instruction: {
      ru: 'Напишите письмо гостье от имени дежурного менеджера. Письмо должно: 1) выразить искреннее сожаление и заботу о её самочувствии, не признавая юридической вины и не преуменьшая случившееся; 2) точно изложить факты: что произошло, известная причина, что уже сделано с лифтом и как сейчас безопасно передвигаться по отелю; 3) предложить конкретную поддержку (например, врач за счёт отеля, перевод в другой номер, жест внимания) без завышенных обещаний; 4) указать, как и к кому она может обратиться круглосуточно и когда вы свяжетесь с ней снова.',
      uz: 'Navbatchi menejer nomidan mehmonga xat yozing. Xatda: 1) yuridik aybni tan olmasdan va voqeani kichraytirmasdan samimiy afsus va uning ahvoli haqida g\'amxo\'rlik bildiring; 2) faktlarni aniq bayon qiling: nima bo\'lgani, ma\'lum sabab, lift bilan nima qilingani va hozir mehmonxonada qanday xavfsiz harakatlanish mumkinligi; 3) ortiqcha va\'dalarsiz aniq yordam taklif qiling (masalan, mehmonxona hisobidan shifokor, boshqa xonaga ko\'chirish, e\'tibor belgisi); 4) u kecha-yu kunduz kimga va qanday murojaat qilishi mumkinligini va siz u bilan qachon yana bog\'lanishingizni ko\'rsating.',
      en: 'Write the email to the guest on behalf of the duty manager. It must: 1) express genuine regret and concern for her wellbeing without admitting legal liability or playing the incident down; 2) state the facts precisely: what happened, the known cause, what has been done about the lift and how to move around the hotel safely now; 3) offer specific support (e.g. a doctor at the hotel\'s expense, a room move, a gesture of goodwill) without over-promising; 4) say how and whom she can reach around the clock, and when you will follow up.',
    },
    situation:
      'Incident: at 7:50 p.m. Ms Ingrid Falk (room 714, in-house until Thursday) was trapped alone in lift B between the 5th and 6th floors for 26 minutes after a power fluctuation triggered the safety brake. She used the emergency intercom; the duty engineer and the lift company\'s technician released her at 8:16 p.m. She was shaken but declined medical attention. Lift B has been taken out of service pending inspection by the certified contractor tomorrow morning; lift A is operating normally. Write the follow-up email the duty manager sends her at 9:30 p.m. the same evening.',
    minWords: 140,
    maxWords: 220,
  },
  {
    id: 'en-writing-c1-03',
    language: 'en',
    level: 'C1',
    instruction: {
      ru: 'Напишите ответ по электронной почте от имени отеля. Ответ должен: 1) признать неудобство и ответственность отеля за ошибку, не извиняясь чрезмерно и не споря с угрозой; 2) точно и спокойно изложить позицию со ссылкой на условия (явная ошибка в цене) и объяснить, почему тариф 45 USD применён не будет; 3) сделать конкретное предложение строго в рамках полномочий (скидка не более 15% от лучшего доступного тарифа, завтрак включён, без бесплатного повышения категории) с указанием срока ответа и последствий его пропуска; 4) сохранить деловые отношения с агентством, предложив дальнейший контакт. Стиль — официальная деловая переписка, твёрдая, но уважительная.',
      uz: 'Mehmonxona nomidan elektron pochta orqali javob yozing. Javobda: 1) haddan tashqari uzr so\'ramasdan va tahdid bilan bahslashmasdan noqulaylikni va xato uchun mehmonxona mas\'uliyatini tan oling; 2) shartlarga (narxdagi yaqqol xato) havola qilib, pozitsiyani aniq va xotirjam bayon qiling va 45 USD tarifi nega qo\'llanilmasligini tushuntiring; 3) vakolat doirasida aniq taklif qiling (eng yaxshi mavjud tarifdan ko\'pi bilan 15% chegirma, nonushta kiritilgan, bepul toifa oshirish yo\'q), javob muddatini va uni o\'tkazib yuborish oqibatlarini ko\'rsating; 4) keyingi aloqani taklif qilib, agentlik bilan ish munosabatlarini saqlab qoling. Uslub — rasmiy ish yozishmasi, qat\'iy, lekin hurmatli.',
      en: 'Write an email reply on behalf of the hotel. Your reply must: 1) acknowledge the inconvenience and the hotel\'s responsibility for the error without over-apologising or arguing with the threat; 2) state the hotel\'s position precisely and calmly with reference to the terms (manifestly erroneous rate) and explain why the 45 USD rate will not be honoured; 3) make a concrete offer strictly within your authority (no more than 15% off the best available rate, breakfast included, no complimentary upgrade), with a response deadline and what happens if it is missed; 4) preserve the business relationship with the agency by proposing further contact. The style is formal business correspondence: firm but respectful.',
    },
    situation:
      'Email from a travel agency: "Dear Revenue Team, on Tuesday night your website displayed your Executive rooms for Navruz week (18–24 March) at 45 USD per night instead of the usual 450. We booked five rooms for a client group and received instant confirmations (ref. WEB-20931 to WEB-20935). This morning you cancelled all five, citing a \'pricing error\'. Our client has already purchased flights. We consider the confirmations binding and expect the rooms to be honoured at 45 USD. Failing that, we will take this up with the Consumer Protection Agency and our professional association. Regards, Dilnoza Karimova, Silk Journeys" (Your position: clause 9 of the website terms allows the hotel to cancel bookings made at a manifestly erroneous rate; the General Manager authorises you to offer the rooms at the best available rate with a discount of up to 15% and complimentary breakfast, but no free upgrades and no further concessions; the group must confirm within 72 hours or the rooms will be released.)',
    minWords: 140,
    maxWords: 220,
  },
]
