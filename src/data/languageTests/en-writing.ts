import type { WritingPrompt } from '@/types'

export const enWriting: WritingPrompt[] = [
  // ── A2 ─────────────────────────────────────────────────────────────────────
  {
    id: 'en-writing-a2-01',
    language: 'en',
    level: 'A2',
    instruction: {
      ru: 'Ответьте гостю в WhatsApp. Ответ должен: 1) обратиться к г-ну Танаке по имени и сказать, что номер за ним сохранён; 2) сказать, что ресепшн работает круглосуточно и кто встретит его ночью; 3) сказать, что нужно показать на стойке по приезде; 4) попросить новое время прибытия или номер рейса. Используйте факты об отеле в скобках.',
      uz: 'Mehmonga WhatsApp orqali javob yozing. Javobda: 1) janob Tanakaga ismi bilan murojaat qiling va xonasi uning uchun saqlanganini ayting; 2) qabulxona kecha-yu kunduz ishlashini va bugun tunda uni kim kutib olishini ayting; 3) kelganda stoykada nimani ko\'rsatish kerakligini ayting; 4) yangi kelish vaqti yoki reys raqamini so\'rang. Qavs ichidagi mehmonxona faktlaridan foydalaning.',
      en: 'Reply to the guest on WhatsApp. Your reply must: 1) greet Mr Tanaka by name and tell him his room is kept for him; 2) say that reception is open 24 hours and who will meet him tonight; 3) tell him what to show at the desk on arrival; 4) ask for his new arrival time or flight number. Use the hotel facts in brackets.',
    },
    situation:
      'WhatsApp, 22:40. "Hello, this is Mr Tanaka, I have a booking for tonight. My flight is delayed and I will arrive at the hotel at about 2 a.m. Is that OK? Will someone be at the reception?" (Hotel facts: the booking is guaranteed by card, so the room is kept all night; reception is open 24/7; tonight\'s night receptionist is Aziz; at check-in guests show their passport and the booking confirmation.)',
    minWords: 40,
    maxWords: 80,
  },
  {
    id: 'en-writing-a2-02',
    language: 'en',
    level: 'A2',
    instruction: {
      ru: 'Ответьте на сообщение гостьи. Ответ должен: 1) назвать время завтрака в их первое утро (проверьте день недели!); 2) сказать, где проходит завтрак и как туда пройти; 3) ответить, что есть для детей и сколько платят дети этого возраста; 4) сказать, что показать на входе в ресторан, и закончить одной вежливой фразой.',
      uz: 'Mehmonning xabariga javob yozing. Javobda: 1) ularning birinchi ertalabki nonushta vaqtini ayting (hafta kunini tekshiring!); 2) nonushta qayerda bo\'lishini va u yerga qanday borishni ayting; 3) bolalar uchun nima borligini va shu yoshdagi bolalar qancha to\'lashini ayting; 4) restoran kirishida nimani ko\'rsatish kerakligini ayting va bitta xushmuomala jumla bilan yakunlang.',
      en: 'Reply to the guest\'s message. Your reply must: 1) give the breakfast time for their first morning (check the day of the week!); 2) say where breakfast is served and how to get there; 3) say what there is for the children and how much children of these ages pay; 4) tell them what to show at the restaurant entrance and end with one polite sentence.',
    },
    situation:
      'Booking.com chat, Friday. "Hi! We are checking in tomorrow with our two children (3 and 7 years old). What time is breakfast? And where do we go for it — is it in the hotel or somewhere else? Is there anything for kids?" (Hotel facts: breakfast is 7:00–10:30 Monday to Friday and 7:30–11:00 on Saturday and Sunday, in the Bahor restaurant on the ground floor, next to the lifts; children under 6 eat free, children 6–12 pay 50%; high chairs and a kids\' corner are available; guests show their room key card at the entrance.)',
    minWords: 40,
    maxWords: 80,
  },

  // ── B1 ─────────────────────────────────────────────────────────────────────
  {
    id: 'en-writing-b1-01',
    language: 'en',
    level: 'B1',
    instruction: {
      ru: 'Напишите ответ по электронной почте. Ответ должен: 1) чётко сказать, можно ли гарантировать заселение около 7:00 и сколько стоит гарантированный номер; 2) объяснить бесплатный вариант и что именно в нём не гарантируется; 3) предложить два способа провести время, пока номер не готов (используйте факты); 4) попросить гостей выбрать вариант и указать, до какого срока ответить. Будьте вежливы и конкретны.',
      uz: 'Elektron pochta orqali javob yozing. Javobda: 1) soat 7:00 atrofida joylashishni kafolatlash mumkinmi va kafolatlangan xona qancha turishini aniq ayting; 2) bepul variantni va unda aynan nima kafolatlanmasligini tushuntiring; 3) xona tayyor bo\'lguncha vaqtni o\'tkazishning ikki usulini taklif qiling (faktlardan foydalaning); 4) mehmonlardan variantni tanlashni so\'rang va qaysi muddatgacha javob berish kerakligini ayting. Xushmuomala va aniq bo\'ling.',
      en: 'Write an email reply. Your reply must: 1) say clearly whether a check-in at about 7 a.m. can be guaranteed and how much a guaranteed room costs; 2) explain the free option and exactly what is not guaranteed about it; 3) offer two ways to spend the time until the room is ready (use the facts); 4) ask the guests to choose an option and say by when they must reply. Be polite and specific.',
    },
    situation:
      'Email from a guest: "Dear Reception, our train from Samarkand arrives at 6:30 in the morning on Friday. Is it possible to check in early? We would like to rest before our meeting at 11. If this costs extra, please let us know. Kind regards, Laura and David Meyer." (Hotel facts: standard check-in is from 2 p.m.; a room from 6 a.m. can only be guaranteed by also booking Thursday night at 50% of the rate — 400,000 UZS; without this, early check-in is free if a room happens to be ready, but this cannot be promised; arriving guests can store their luggage, use the shower in the fitness centre and have breakfast for 120,000 UZS per person; the Thursday option must be booked by Wednesday at 6 p.m.)',
    minWords: 70,
    maxWords: 120,
  },
  {
    id: 'en-writing-b1-02',
    language: 'en',
    level: 'B1',
    instruction: {
      ru: 'Ответьте гостю в WhatsApp. Ответ должен: 1) извиниться и сказать, что именно вы делаете прямо сейчас; 2) предложить переезд в другой номер сегодня с деталями (какой номер, почему там тише, помощь с багажом); 3) предложить помощь с ранним вылетом: звонок-будильник и время такси (рассчитайте по фактам); 4) оставаться нейтральным в отношении соседей: не называть их имён и номера, не спорить и не оправдываться.',
      uz: 'Mehmonga WhatsApp orqali javob yozing. Javobda: 1) uzr so\'rang va hozir aynan nima qilayotganingizni ayting; 2) bugun boshqa xonaga ko\'chishni tafsilotlari bilan taklif qiling (qaysi xona, nega u yer tinchroq, yuk bilan yordam); 3) erta reys bilan yordam taklif qiling: uyg\'otish qo\'ng\'irog\'i va taksi vaqti (faktlar bo\'yicha hisoblang); 4) qo\'shnilar haqida betaraf qoling: ularning ismi va xona raqamini aytmang, bahslashmang va o\'zingizni oqlamang.',
      en: 'Reply to the guest on WhatsApp. Your reply must: 1) apologise and say exactly what you are doing right now; 2) offer a room move tonight with the details (which room, why it is quieter, help with luggage); 3) offer help with the early flight: a wake-up call and a taxi time (work it out from the facts); 4) stay neutral about the neighbours: do not give their names or room number, and do not argue or make excuses.',
    },
    situation:
      'WhatsApp, 23:15, from room 407: "I\'m sorry to write so late, but the people in the room next to us are playing loud music and shouting. I have a flight at 7:10 tomorrow morning and I can\'t sleep. Can you do something about this?" (Facts: security can reach the 4th floor in about 5 minutes; room 615 on the 6th floor faces the garden and is free tonight; the porter can help with luggage; the airport taxi takes about 40 minutes and costs 150,000 UZS; guests should be at the airport two hours before an international flight.)',
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
      ru: 'Напишите ответ по электронной почте. Ответ должен: 1) выразить сочувствие и честно сообщить, что найдено, не описывая вещь подробно; 2) объяснить, как гостья может подтвердить, что браслет её, прежде чем его выдадут; 3) описать оба способа возврата — стоимость, сроки и кто платит; 4) точно сказать, что ей нужно прислать дальше и сколько времени вещь будет храниться. Тон — тёплый, но профессиональный.',
      uz: 'Elektron pochta orqali javob yozing. Javobda: 1) hamdardlik bildiring va nima topilganini buyumni batafsil tasvirlamasdan halol ayting; 2) bilaguzuk unga tegishli ekanini, u berilishidan oldin, qanday tasdiqlashi mumkinligini tushuntiring; 3) qaytarishning ikkala usulini — narxi, muddati va kim to\'lashini yozing; 4) keyin sizga aynan nima yuborishi kerakligini va buyum qancha vaqt saqlanishini ayting. Ohang — iliq, lekin professional.',
      en: 'Write an email reply. Your reply must: 1) show empathy and tell the guest honestly what has been found, without describing the item in detail; 2) explain how she can prove the bracelet is hers before it is released; 3) describe both ways of returning it, with cost, timing and who pays; 4) say exactly what she should send you next and how long the item will be kept. Keep the tone warm but professional.',
    },
    situation:
      'Email: "Hello, I stayed in room 512 from 14 to 17 March and checked out this morning in a hurry. I think I left a silver bracelet on the bathroom shelf — it was a gift from my late mother, so it means a lot to me. I have already flown back to Istanbul. Is there any way to check and send it to me? Thank you so much, Elif Demir." (Facts: housekeeping found a silver bracelet in room 512 this morning; it is logged in the lost-and-found book as LF-0318; items are released only after the owner describes them correctly; DHL to Istanbul costs about 45 USD, paid by the guest in advance, 3–5 working days, insured; a friend can collect it with a letter signed by the owner and a copy of her passport; items are kept for 90 days.)',
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
      ru: 'Напишите ответ по электронной почте от имени отеля. Ответ должен: 1) чётко признать ошибку отеля, не заискивая и не обвиняя коллегу; 2) подтвердить, что именно отель сохранит, с точными условиями (используйте факты); 3) тактично отказать в бесплатном Executive Suite, не намекая, что просьба была необоснованной, и изложить две альтернативы, которые вам разрешено предложить; 4) указать, что г-н Рид должен сделать и до какого срока, и завершить письмо так, чтобы отметить его лояльность, не создавая прецедента. Стиль — уверенный, дипломатичный, без канцеляризмов.',
      uz: 'Mehmonxona nomidan elektron pochta orqali javob yozing. Javobda: 1) mehmonxona xatosini laganbardorlik qilmasdan va hamkasbni ayblamasdan aniq tan oling; 2) mehmonxona aynan nimani saqlab qolishini aniq shartlari bilan tasdiqlang (faktlardan foydalaning); 3) bepul Executive Suite\'ni so\'rov asossiz bo\'lgandek ko\'rsatmasdan xushmuomalalik bilan rad eting va sizga taklif qilishga ruxsat berilgan ikki muqobilni bayon qiling; 4) janob Rid nima qilishi va qaysi muddatgacha qilishi kerakligini ko\'rsating va xatni pretsedent yaratmasdan uning sadoqatini e\'tirof etadigan tarzda yakunlang. Uslub — ishonchli, diplomatik, rasmiyatchiliksiz.',
      en: 'Write an email reply on behalf of the hotel. Your reply must: 1) acknowledge the hotel\'s mistake clearly, without grovelling or blaming the colleague; 2) confirm exactly what the hotel will honour and on what terms (use the facts); 3) decline the complimentary Executive Suite tactfully, without suggesting the request was unreasonable, and present the two alternatives you are authorised to offer; 4) state what Mr Reid must do and by when, and close in a way that recognises his loyalty without creating a precedent. The style should be confident and diplomatic, without bureaucratic phrasing.',
    },
    situation:
      'Email: "Dear Manager, I have stayed with you six times over the past two years, always in a Deluxe room. For my wife\'s 40th birthday next month I booked a Junior Suite for 14–16 May, but your colleague on the phone confirmed the wrong dates and I only noticed it in the confirmation email today. The correct dates now show a higher rate on your website. Given my history with the hotel and the fact that the error was not mine, I expect the original rate to be honoured and, frankly, I think a complimentary upgrade to the Executive Suite would be appropriate for the occasion. Please advise. Regards, Jonathan Reid." (Your authority: the General Manager agrees to honour the original Junior Suite rate of 280 USD per night for 14–16 May; a free upgrade is not possible because the hotel is almost full that weekend; you may offer either the Executive Suite at 390 USD per night instead of 520 USD, or the Junior Suite with a birthday cake, a bottle of champagne and late check-out until 2 p.m. at no charge; the corrected booking must be confirmed by Friday, otherwise the Junior Suite will be released.)',
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
