import type { FinalChoiceQuestion } from '@/types'

export const finalChoice2: FinalChoiceQuestion[] = [
  {
    id: 'final-mc-16',
    type: 'choice',
    moduleSlugs: ['late-checkout', 'vip-guests'],
    scenario: {
      ru: 'Суббота, 11:40, лобби полное. Постоянный гость со статусом VIP (пятое проживание) просит выезд в 16:00: у него поздний рейс. По правилам выезд до 14:00 бесплатный, позже — 50 % стоимости ночи. Загрузку на сегодня вы ещё не смотрели.',
      uz: 'Shanba, 11:40, lobbi gavjum. VIP maqomidagi doimiy mehmon (beshinchi tashrifi) 16:00 da chiqishni so\'raydi: uning reysi kech. Qoidaga ko\'ra 14:00 gacha chiqish bepul, keyin — bir kecha narxining 50 %. Bugungi bandlikni hali ko\'rmagansiz.',
      en: 'Saturday, 11:40, the lobby is packed. A regular VIP guest (fifth stay) asks to check out at 16:00 because of a late flight. Under hotel rules check-out until 14:00 is free, later costs 50% of the nightly rate. You have not looked at today\'s occupancy yet.',
    },
    question: {
      ru: 'Что вы делаете в первую очередь?',
      uz: 'Birinchi navbatda nima qilasiz?',
      en: 'What do you do first?',
    },
    options: [
      {
        ru: 'Сразу согласиться — постоянному VIP-гостю не отказывают, — а затем попросить хозяйственную службу перенести уборку номера.',
        uz: 'Darhol rozi bo\'lish — doimiy VIP-mehmonga rad javobi berilmaydi — so\'ng xo\'jalik xizmatidan xonani yig\'ishtirishni keyinga surishni so\'rash.',
        en: 'Agree at once — a regular VIP is never refused — then ask housekeeping to reschedule the cleaning of his room.',
      },
      {
        ru: 'Сразу назвать доплату за выезд после 14:00 — 50 % стоимости ночи, — чтобы гость не узнал о ней постфактум.',
        uz: 'Mehmon keyin bilib qolmasligi uchun 14:00 dan keyingi chiqish uchun qo\'shimcha to\'lovni — kecha narxining 50 % ini — darhol aytish.',
        en: 'Quote the fee for check-out after 14:00 — 50% of the night — straight away, so he doesn\'t learn about it afterwards.',
      },
      {
        ru: 'Тихо сказать «Одну минуту, проверю» и посмотреть в PMS, забронирован ли его номер на сегодняшнюю ночь.',
        uz: 'Sekin «Bir daqiqa, tekshirib ko\'raman» deb, PMS\'da uning xonasi bugungi kechaga bron qilinganmi-yo\'qligini ko\'rish.',
        en: 'Say quietly "One moment, let me check" and see in the PMS whether his room is booked for tonight.',
      },
      {
        ru: 'Сразу предложить бесплатное хранение багажа и лаунж до рейса, раз по субботам отель обычно заполнен.',
        uz: 'Shanba kunlari mehmonxona odatda to\'la bo\'lgani uchun darhol reysgacha bepul bagaj saqlash va lounjni taklif qilish.',
        en: 'Offer free luggage storage and the lounge until his flight right away, since on Saturdays the hotel is usually full.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Поздний выезд — услуга, зависящая от загрузки: прежде чем ответить «да», «нет» или назвать цену, проверяют, забронирован ли номер на эту ночь, — тихо, фразой «одну минуту, проверю». VIP-статус этого не отменяет; доплату озвучивают и альтернативу предлагают уже после проверки.',
      uz: 'Kech chiqish — bandlikka bog\'liq xizmat: «ha», «yo\'q» deyishdan yoki narxni aytishdan oldin xona bu kechaga bron qilinganmi-yo\'qligi tekshiriladi — sekin, «bir daqiqa, tekshiraman» degan ibora bilan. VIP maqomi buni bekor qilmaydi; qo\'shimcha to\'lov aytiladi va muqobil taklif qilinadi — faqat tekshiruvdan keyin.',
      en: 'Late check-out is a service that depends on occupancy: before saying yes, no or quoting a price, you check whether the room is booked for tonight — quietly, with "one moment, let me check". VIP status doesn\'t change that; the fee is stated and an alternative offered only after the check.',
    },
  },
  {
    id: 'final-mc-17',
    type: 'choice',
    moduleSlugs: ['early-checkin', 'upselling-rooms'],
    scenario: {
      ru: '08:30. Семья с двумя детьми после ночного перелёта, заезд по брони с 14:00. В PMS: их стандартный номер освободится в 12:00, уборка — ещё около часа. Номер Deluxe уже убран и свободен, доплата — 40 долларов в сутки.',
      uz: 'Soat 08:30. Tungi parvozdan keyin ikki bolali oila keldi, bron bo\'yicha joylashish 14:00 dan. PMS\'da: ularning standart xonasi 12:00 da bo\'shaydi, yig\'ishtirish yana bir soatcha. Deluxe xona allaqachon yig\'ishtirilgan va bo\'sh, qo\'shimcha to\'lov — sutkasiga 40 dollar.',
      en: '08:30. A family with two children arrives off a night flight; their booking starts at 14:00. The PMS shows their standard room is vacated at 12:00, with about an hour of cleaning after that. A Deluxe is already clean and free, at 40 dollars more per night.',
    },
    question: {
      ru: 'Какой ответ соответствует стандартам?',
      uz: 'Qaysi javob standartlarga mos keladi?',
      en: 'Which reply meets the standards?',
    },
    options: [
      {
        ru: '«Ваш номер будет готов около 13:00 — позвоню, как только освободится. Багаж сохраним, а если хотите сразу — готов Deluxe за +40 долларов в сутки».',
        uz: '«Xonangiz taxminan 13:00 da tayyor bo\'ladi — bo\'shashi bilan qo\'ng\'iroq qilaman. Hozircha bagajni saqlaymiz, darhol xohlasangiz, sutkasiga +40 dollarga Deluxe tayyor».',
        en: '"Your room will be ready around 13:00 — I\'ll call you the moment it is. We\'ll keep your bags; if you\'d like a room now, a Deluxe is ready for +40 dollars a night."',
      },
      {
        ru: '«Постараемся подготовить ваш номер пораньше, а багаж пока оставьте у нас. Если хотите сразу — готов Deluxe за +40 долларов в сутки».',
        uz: '«Xonani ertaroq tayyorlashga harakat qilamiz, hozircha bagajni bizda qoldiring. Darhol xohlasangiz, sutkasiga +40 dollarga Deluxe tayyor».',
        en: '"We\'ll try to get your room ready earlier; meanwhile leave your bags with us. If you\'d like a room now, a Deluxe is ready for +40 dollars a night."',
      },
      {
        ru: '«Ваш номер будет готов около 13:00 — позвоню, как только он освободится. Детям тяжело, так что сразу оформлю Deluxe, доплату обсудим при выезде».',
        uz: '«Xonangiz taxminan 13:00 da tayyor bo\'ladi — bo\'shashi bilan qo\'ng\'iroq qilaman. Bolalarga og\'ir, shuning uchun darhol Deluxe beraman, to\'lovni chiqishda gaplashamiz».',
        en: '"Your room will be ready around 13:00 — I\'ll call you the moment it is. The kids are tired, so I\'ll put you in the Deluxe now; we\'ll settle the extra at check-out."',
      },
      {
        ru: '«Заезд у нас с 14:00, раньше гарантировать не могу. Багаж оставьте у нас, а Deluxe за +40 долларов в сутки готов прямо сейчас, если хотите сразу».',
        uz: '«Bizda joylashish 14:00 dan, ertaroq kafolat berolmayman. Bagajni bizda qoldiring, sutkasiga +40 dollarga Deluxe esa xohlasangiz, hozirning o\'zida tayyor».',
        en: '"Check-in is from 14:00 and I can\'t guarantee earlier. Leave your bags with us — and a Deluxe is ready right now for +40 dollars a night if you wish."',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Стандарт раннего заезда — конкретное время по реальному статусу номера в PMS, звонок, как только номер готов, и комфортное ожидание; стандарт апселлинга — прозрачная цена и выбор за гостем. «Постараемся» — расплывчатое обещание, доплата, о которой узнают при выезде, — сюрприз, а стандартные «14:00» вместо реального статуса не дают проверенного времени.',
      uz: 'Erta joylashish standarti — PMS\'dagi haqiqiy holat bo\'yicha aniq vaqt, xona tayyor bo\'lishi bilan qo\'ng\'iroq va qulay kutish; apselling standarti — shaffof narx va tanlov mehmonda. «Harakat qilamiz» — noaniq va\'da, chiqishda ma\'lum bo\'ladigan to\'lov — kutilmagan to\'lov, haqiqiy holat o\'rniga standart 14:00 ni aytish esa tekshirilgan aniq vaqtni bermaydi.',
      en: 'The early check-in standard: a concrete time based on the real status in the PMS, a call as soon as the room is ready, and a comfortable wait; the upselling standard: a transparent price and the guest\'s choice. "We\'ll try" is a vague promise, an extra revealed at check-out is a surprise fee, and quoting the standard 14:00 instead of the real status gives no checked time.',
    },
  },
  {
    id: 'final-mc-18',
    type: 'choice',
    moduleSlugs: ['complaints', 'check-in'],
    scenario: {
      ru: '15:10. Гость приехал к подтверждённому заезду в 14:00, но уборка отстаёт, и он ждёт больше часа. Он громко, на всё лобби, говорит: «Это худший отель, в котором я останавливался!» По данным хозяйственной службы, номер будет готов через 20 минут.',
      uz: 'Soat 15:10. Mehmon tasdiqlangan 14:00 dagi joylashishga keldi, ammo yig\'ishtirish kechikmoqda va u bir soatdan beri kutyapti. U butun lobbiga baland ovozda: «Bu men to\'xtagan eng yomon mehmonxona!» deydi. Xo\'jalik xizmati ma\'lumotiga ko\'ra, xona 20 daqiqada tayyor bo\'ladi.',
      en: '15:10. A guest arrived for his confirmed 14:00 check-in, but cleaning is running late and he has been waiting over an hour. He says loudly, for the whole lobby to hear: "This is the worst hotel I\'ve ever stayed at!" Housekeeping says the room will be ready in 20 minutes.',
    },
    question: {
      ru: 'Какая последовательность соответствует модели LAST?',
      uz: 'Qaysi ketma-ketlik LAST modeliga mos keladi?',
      en: 'Which sequence follows the LAST model?',
    },
    options: [
      {
        ru: 'Извиниться → объяснить, почему задержалась уборка → назвать время (20 минут) → поблагодарить за терпение.',
        uz: 'Uzr so\'rash → yig\'ishtirish nega kechikkanini tushuntirish → vaqtni aytish (20 daqiqa) → sabri uchun rahmat aytish.',
        en: 'Apologise → explain why cleaning is late → give the time (20 minutes) → thank him for his patience.',
      },
      {
        ru: 'Сразу назвать время (20 минут), чтобы успокоить → извиниться → выслушать претензию → поблагодарить.',
        uz: 'Tinchlantirish uchun darhol vaqtni aytish (20 daqiqa) → uzr so\'rash → e\'tirozni tinglash → rahmat aytish.',
        en: 'Give the time (20 minutes) at once to calm him → apologise → hear out the complaint → thank him.',
      },
      {
        ru: 'Выслушать → назвать время (20 минут) и предложить лаунж → поблагодарить за терпение → извиниться.',
        uz: 'Tinglash → vaqtni aytish (20 daqiqa) va lounjni taklif qilish → sabri uchun rahmat aytish → uzr so\'rash.',
        en: 'Listen → give the time (20 minutes) and offer the lounge → thank him for his patience → apologise.',
      },
      {
        ru: 'Дать договорить → извиниться → назвать время (20 минут) и предложить кофе в лаунже → поблагодарить.',
        uz: 'Gapini oxirigacha aytishiga qo\'yish → uzr so\'rash → vaqtni aytish (20 daqiqa) va lounjda qahva taklif qilish → rahmat aytish.',
        en: 'Let him finish → apologise → give the time (20 minutes) and offer coffee in the lounge → thank him.',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'LAST — Listen, Apologize, Solve, Thank: сначала дать гостю выговориться, не перебивая, затем извиниться, предложить решение с конкретным временем и альтернативой и поблагодарить. Объяснение причин звучит как оправдание, а решение до того, как гостя выслушали, перебивает его — оба порядка модуль называет ошибкой.',
      uz: 'LAST — Listen, Apologize, Solve, Thank: avval mehmonga gapini bo\'lmasdan aytib olishiga imkon berish, so\'ng uzr so\'rash, aniq vaqt va muqobil bilan yechim taklif qilish va rahmat aytish. Sabablarni tushuntirish oqlanishdek eshitiladi, mehmonni tinglamasdan yechim aytish esa gapini bo\'ladi — modul ikkala tartibni ham xato deb ataydi.',
      en: 'LAST is Listen, Apologize, Solve, Thank: first let the guest speak without interrupting, then apologise, offer a solution with a concrete time and an alternative, and thank him. Explaining causes sounds like an excuse, and offering a solution before hearing him out interrupts him — the module calls both orders mistakes.',
    },
  },
  {
    id: 'final-mc-19',
    type: 'choice',
    moduleSlugs: ['complaints', 'booking-com-guests'],
    scenario: {
      ru: '22:30. У гостя подтверждённая предоплаченная бронь Booking.com на три ночи, а отель овербукнут — свободных номеров нет. Партнёрский отель той же категории в десяти минутах подтверждает наличие. Дежурный менеджер на связи.',
      uz: 'Soat 22:30. Mehmonning uch kechaga Booking.com orqali tasdiqlangan va oldindan to\'langan broni bor, mehmonxona esa ortiqcha band qilingan — bo\'sh xona yo\'q. O\'n daqiqalik masofadagi xuddi shu toifadagi hamkor mehmonxona joy borligini tasdiqlaydi. Navbatchi menejer aloqada.',
      en: '22:30. A guest has a confirmed, prepaid three-night Booking.com reservation, but the hotel is overbooked — no rooms are free. A partner hotel of the same category ten minutes away confirms availability. The duty manager is reachable.',
    },
    question: {
      ru: 'Какое решение соответствует стандарту модуля жалоб?',
      uz: 'Qaysi yechim shikoyatlar moduli standartiga mos keladi?',
      en: 'Which solution matches the complaints module standard?',
    },
    options: [
      {
        ru: 'Номер в партнёрском отеле той же категории, такси за счёт отеля и возврат 50 % стоимости первой ночи.',
        uz: 'Hamkor mehmonxonada xuddi shu toifadagi xona, mehmonxona hisobidan taksi va birinchi kecha narxining 50 % ini qaytarish.',
        en: 'A same-category room at the partner hotel, a taxi paid by the hotel and a refund of 50% of the first night.',
      },
      {
        ru: 'Номер не ниже классом в партнёрском отеле, оплаченный транспорт и следующая ночь у вас — бесплатно, как компенсация.',
        uz: 'Hamkor mehmonxonada pastroq bo\'lmagan toifadagi xona, to\'langan transport va kompensatsiya sifatida keyingi kecha sizda — bepul.',
        en: 'A room of equal or higher class at the partner hotel, paid transport and the next night with you free as compensation.',
      },
      {
        ru: 'Номер в партнёрском отеле той же категории, такси за счёт отеля и бесплатный завтрак на всё оставшееся проживание у вас.',
        uz: 'Hamkor mehmonxonada xuddi shu toifadagi xona, mehmonxona hisobidan taksi va sizda qolgan butun muddat uchun bepul nonushta.',
        en: 'A same-category room at the partner hotel, a taxi paid by the hotel and free breakfast for the rest of the stay with you.',
      },
      {
        ru: 'Помощь с поиском номера в партнёрском отеле, а по его чекам — возврат разницы в цене и оплата такси.',
        uz: 'Hamkor mehmonxonadan xona topishga yordam, uning cheklari bo\'yicha esa narx farqini qaytarish va taksi haqini to\'lash.',
        en: 'Help finding a room at the partner hotel, then refund the price difference and the taxi on his receipts.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Модуль жалоб, сценарий «Овербукинг»: отель берёт ответственность полностью — номер аналогичного или более высокого класса в партнёрском отеле, оплаченный транспорт и в качестве компенсации первая ночь у вас на следующий день бесплатно. Частичный возврат или завтрак — не та компенсация, а «по чекам потом» перекладывает организацию на гостя.',
      uz: 'Shikoyatlar moduli, «Overbooking» stsenariysi: mehmonxona javobgarlikni to\'liq oladi — hamkor mehmonxonada shunday yoki yuqoriroq toifadagi xona, to\'langan transport va kompensatsiya sifatida ertasi kuni sizdagi birinchi kecha bepul. Qisman qaytarish yoki nonushta — bu kompensatsiya emas, «keyin cheklar bo\'yicha» esa tashkil qilishni mehmonga yuklaydi.',
      en: 'The complaints module, "Overbooking": the hotel takes full responsibility — a room of equal or higher class at a partner hotel, paid transport and, as compensation, the first night back with you the next day free. A partial refund or breakfast is not that compensation, and "on receipts later" shifts the organising onto the guest.',
    },
  },
  {
    id: 'final-mc-20',
    type: 'choice',
    moduleSlugs: ['foreign-guests', 'phone-communication'],
    scenario: {
      ru: '22:00. Звонит гость из 707-го: английский очень ограниченный, сильный акцент. Вы разбираете только «tomorrow», «airport» и «taxi». Время и число пассажиров он пока не назвал.',
      uz: 'Soat 22:00. 707-xonadagi mehmon qo\'ng\'iroq qiladi: inglizchasi juda cheklangan, talaffuzi kuchli. Siz faqat «tomorrow», «airport» va «taxi» so\'zlarini ajratasiz. Vaqt va yo\'lovchilar sonini u hali aytmadi.',
      en: '22:00. The guest in 707 calls: his English is very limited and his accent strong. You can make out only "tomorrow", "airport" and "taxi". He hasn\'t given a time or the number of passengers yet.',
    },
    question: {
      ru: 'Как построить разговор по стандарту?',
      uz: 'Suhbatni standart bo\'yicha qanday qurasiz?',
      en: 'How do you handle the call by the standard?',
    },
    options: [
      {
        ru: 'Сразу включить переводчик на громкой связи и вести весь разговор только через него, чтобы ничего не напутать в деталях.',
        uz: 'Darhol tarjimonni baland ovozli rejimda yoqib, hech narsani chalkashtirmaslik uchun butun suhbatni faqat u orqali olib borish.',
        en: 'Switch a translator app to speaker at once and run the whole call only through it so nothing gets mixed up.',
      },
      {
        ru: 'Повторить его слова громче и чётче — «TAXI? AIRPORT? TOMORROW?», — чтобы он точно расслышал на плохой линии.',
        uz: 'Yomon liniyada aniq eshitishi uchun uning so\'zlarini balandroq va dona-dona takrorlash: «TAXI? AIRPORT? TOMORROW?».',
        en: 'Repeat his words louder and more distinctly — "TAXI? AIRPORT? TOMORROW?" — so he hears you on a bad line.',
      },
      {
        ru: 'Говорить медленно и просто, подтверждать по одной детали («Taxi. Tomorrow. What time?»), итог прислать в WhatsApp.',
        uz: 'Sekin va sodda gapirib, har bir tafsilotni alohida tasdiqlash («Taxi. Tomorrow. What time?») va xulosani WhatsApp\'da raqamlar bilan yuborish.',
        en: 'Speak slowly and simply, confirm one detail at a time ("Taxi. Tomorrow. What time?"), then text a WhatsApp summary.',
      },
      {
        ru: 'Попросить его спуститься к стойке, где можно объясниться жестами и картой, и не обсуждать детали по телефону.',
        uz: 'Imo-ishora va xarita bilan tushuntirish mumkin bo\'lgan stoykaga tushishini so\'rash va tafsilotlarni telefonda muhokama qilmaslik.',
        en: 'Ask him to come down to the desk, where you can use gestures and a map, rather than discuss the details on the phone.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Стандарт для иностранных гостей: говорить медленнее, а не громче, простыми словами, и пробовать понять друг друга напрямую — переводчик служит опорой, а не заменой; письменные цифры снимают ошибки. По телефону детали подтверждают повтором, а договорённость фиксируют письменно; отправить гостя к стойке — отказ от попытки помочь сейчас.',
      uz: 'Chet ellik mehmonlar standarti: balandroq emas, sekinroq va sodda so\'zlar bilan gapirish, bir-birini to\'g\'ridan-to\'g\'ri tushunishga harakat qilish — tarjimon o\'rinbosar emas, tayanch; yozma raqamlar xatolarni yo\'qotadi. Telefonda tafsilotlar takrorlash orqali tasdiqlanadi, kelishuv esa yozma qayd etiladi; mehmonni stoykaga yuborish — hozir yordam berishga urinishdan voz kechish.',
      en: 'The foreign-guests standard: speak slower, not louder, in simple words, and try to understand each other directly — a translator is a support, not a replacement; written figures prevent errors. On the phone, details are confirmed by repetition and the agreement is put in writing; sending the guest to the desk gives up on helping him now.',
    },
  },
  {
    id: 'final-mc-21',
    type: 'choice',
    moduleSlugs: ['lost-items', 'check-out'],
    scenario: {
      ru: '09:05. Горничная приносит на стойку паспорт, найденный в 305-м: гость выехал двадцать минут назад и уехал на такси в аэропорт. У стойки очередь из трёх гостей на выезд.',
      uz: 'Soat 09:05. Xona xizmatchisi stoykaga 305-xonada topilgan pasportni olib keladi: mehmon yigirma daqiqa oldin chiqib, taksida aeroportga jo\'nagan. Stoykada chiqib ketayotgan uch mehmondan iborat navbat bor.',
      en: '09:05. A room attendant brings to the desk a passport found in room 305: the guest checked out twenty minutes ago and took a taxi to the airport. Three guests are queuing to check out.',
    },
    question: {
      ru: 'Какая последовательность верна?',
      uz: 'Qaysi ketma-ketlik to\'g\'ri?',
      en: 'Which sequence is correct?',
    },
    options: [
      {
        ru: 'Попросить очередь подождать минуту, записать паспорт в журнал, убрать в сейф и сразу позвонить гостю по номеру из брони.',
        uz: 'Navbatdan bir daqiqa kutishni so\'rab, pasportni topilmalar jurnaliga kiritish, seyfga qo\'yish va darhol bron raqami bo\'yicha mehmonga qo\'ng\'iroq qilish.',
        en: 'Ask the queue to wait a minute, log the passport, lock it in the safe and call the guest on the booking number.',
      },
      {
        ru: 'Убрать паспорт в сейф, обслужить очередь, затем внести его в журнал со всеми деталями и позвонить гостю по номеру из брони.',
        uz: 'Pasportni seyfga qo\'yib, navbatga xizmat ko\'rsatish, so\'ng uni barcha tafsilotlar bilan jurnalga kiritib, bron raqami bo\'yicha mehmonga qo\'ng\'iroq qilish.',
        en: 'Lock the passport in the safe, serve the queue, then log it with full details and call the guest on the booking number.',
      },
      {
        ru: 'Сразу позвонить гостю по номеру из брони, пока он не улетел, а запись в журнал находок сделать, когда очередь закончится.',
        uz: 'Mehmon uchib ketmasidan darhol bron raqami bo\'yicha qo\'ng\'iroq qilish, topilmalar jurnaliga yozuvni esa navbat tugagach qilish.',
        en: 'Call the guest on the booking number at once before he flies, and make the log entry once the queue is cleared.',
      },
      {
        ru: 'Внести паспорт в журнал, убрать в сейф и отправить гостю письмо на e-mail из брони, чтобы не отходить от очереди.',
        uz: 'Pasportni jurnalga kiritib, seyfga qo\'yish va navbatdan chalg\'imaslik uchun mehmonga brondagi e-mail orqali xat yuborish.',
        en: 'Log the passport, lock it in the safe and e-mail the guest at the booking address so you don\'t leave the queue.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Модуль находок: вещь регистрируется в журнале сразу, даже если много работы, — отложенная запись часто не появляется вовсе; о ценной находке отель сообщает гостю первым по контактам из брони. Для паспорта по дороге в аэропорт нужен звонок, а не письмо, и его нельзя откладывать до конца очереди.',
      uz: 'Topilmalar moduli: buyum ish ko\'p bo\'lsa ham darhol jurnalga qayd etiladi — keyinga qoldirilgan yozuv ko\'pincha umuman paydo bo\'lmaydi; qimmatli topilma haqida mehmonxona mehmonga brondagi kontaktlar orqali birinchi bo\'lib xabar beradi. Aeroportga ketayotgan pasport egasiga xat emas, qo\'ng\'iroq kerak va uni navbat oxirigacha qoldirib bo\'lmaydi.',
      en: 'The lost-items module: an item is logged immediately even when it is busy — a postponed entry often never gets made; for a valuable find the hotel contacts the guest first using the booking details. A passport heading to the airport needs a call, not an e-mail, and it cannot wait until the queue is done.',
    },
  },
  {
    id: 'final-mc-22',
    type: 'choice',
    moduleSlugs: ['emergency-procedures', 'check-in'],
    scenario: {
      ru: '21:40. Вы одни на стойке и заселяете пару. В лобби входит нетрезвый мужчина, кричит, что здесь живёт его жена, требует номер её комнаты и бьёт кулаком по стойке. Пара испуганно отступает.',
      uz: 'Soat 21:40. Stoykada yolg\'izsiz va bir juftlikni joylashtiryapsiz. Lobbiga mast erkak kirib, bu yerda xotini yashayotganini baqirib aytadi, uning xona raqamini talab qiladi va stoykaga musht uradi. Juftlik qo\'rqib orqaga chekinadi.',
      en: '21:40. You are alone at the desk checking in a couple. A drunk man walks into the lobby, shouts that his wife is staying here, demands her room number and bangs his fist on the desk. The couple step back, frightened.',
    },
    question: {
      ru: 'Как действовать по протоколу?',
      uz: 'Protokol bo\'yicha qanday harakat qilasiz?',
      en: 'How do you act under the protocol?',
    },
    options: [
      {
        ru: 'Сказать, что номера комнат не сообщаются, но предложить позвонить жене в номер и передать, что он ждёт в лобби.',
        uz: 'Xona raqamlari aytilmasligini bildirib, xotinining xonasiga qo\'ng\'iroq qilib, u lobbida kutayotganini yetkazishni taklif qilish.',
        en: 'Say room numbers are not given out, but offer to call his wife\'s room and tell her he is waiting in the lobby.',
      },
      {
        ru: 'Выйти из-за стойки и спокойно, но твёрдо проводить его к выходу, пока дело не дошло до драки с гостями.',
        uz: 'Mushtlashuvgacha bormasligi uchun stoykadan chiqib, xotirjam, lekin qat\'iy uni eshikkacha kuzatib qo\'yish.',
        en: 'Step out from behind the desk and calmly but firmly walk him to the exit before it turns into a fight.',
      },
      {
        ru: 'Быстро закончить заселение пары, а охрану вызвать, только если мужчина перейдёт к угрозам или насилию.',
        uz: 'Juftlikni tezda joylashtirib bo\'lish, qo\'riqchini esa erkak tahdid yoki zo\'ravonlikka o\'tsa chaqirish.',
        en: 'Quickly finish the couple\'s check-in and call security if the man moves on to threats or violence.',
      },
      {
        ru: 'Говорить спокойно, не подтверждать, проживает ли такая гостья, оставаться за стойкой и сразу вызвать охрану.',
        uz: 'Xotirjam gapirib, bunday mehmon yashashini tasdiqlamaslik, stoyka ortida qolish va darhol protokol bo\'yicha qo\'riqchini chaqirish.',
        en: 'Speak calmly, don\'t confirm whether such a guest is staying, stay behind the desk and call security at once.',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'При инциденте безопасности протокол — спокойный тон, вызов охраны или полиции без промедления и никакого физического противостояния. О гостях не сообщают ничего, даже косвенно: звонок «жене» подтверждает, что она проживает. Ждать угроз или насилия — значит подвергать риску людей у стойки.',
      uz: 'Xavfsizlik hodisasida protokol — xotirjam ohang, qo\'riqchi yoki politsiyani kechiktirmay chaqirish va hech qanday jismoniy to\'qnashuvsiz. Mehmonlar haqida hech narsa, hatto bilvosita ham aytilmaydi: «xotiniga» qo\'ng\'iroq uning yashashini tasdiqlaydi. Tahdid yoki zo\'ravonlikni kutish stoyka yonidagi odamlarni xavf ostiga qo\'yadi.',
      en: 'In a security incident the protocol is a calm tone, calling security or the police without delay and no physical confrontation. Nothing is disclosed about guests, even indirectly: calling "his wife" confirms that she is staying. Waiting for threats or violence puts the people at the desk at risk.',
    },
  },
  {
    id: 'final-mc-23',
    type: 'choice',
    moduleSlugs: ['vip-guests', 'greeting-guests'],
    scenario: {
      ru: '15:00, вы принимаете смену. В списке VIP-заездов — постоянный гость (восьмое проживание), прибытие в 16:00. В профиле: аллергия на перо, предпочитает высокий этаж, просит газированную воду. Система автоматически назначила ему номер на втором этаже с перьевыми подушками.',
      uz: 'Soat 15:00, smenani qabul qilyapsiz. VIP-kelishlar ro\'yxatida — doimiy mehmon (sakkizinchi tashrifi), 16:00 da keladi. Profilida: patga allergiya, yuqori qavatni afzal ko\'radi, gazli suv so\'raydi. Tizim unga avtomatik ravishda ikkinchi qavatdagi pat yostiqli xonani belgilagan.',
      en: '15:00, you are taking over the shift. The VIP arrivals list shows a regular guest (eighth stay) due at 16:00. His profile: feather allergy, prefers a high floor, asks for sparkling water. The system has automatically assigned him a second-floor room with feather pillows.',
    },
    question: {
      ru: 'Что нужно сделать по стандарту?',
      uz: 'Standart bo\'yicha nima qilish kerak?',
      en: 'What does the standard require?',
    },
    options: [
      {
        ru: 'При заезде поприветствовать его по имени и уточнить, актуальны ли предпочтения, — с прошлого визита они могли измениться.',
        uz: 'Kelganida ismi bilan salomlashib, afzalliklari hali ham dolzarbligini aniqlash — o\'tgan tashrifdan beri ular o\'zgargan bo\'lishi mumkin.',
        en: 'At arrival, greet him by name and check whether his preferences still apply — they may have changed since his last visit.',
      },
      {
        ru: 'До приезда переназначить номер на высокий этаж, заказать гипоаллергенные подушки и воду и подготовить приветствие по имени.',
        uz: 'U kelmasdan oldin xonani yuqori qavatga qayta belgilash, gipoallergen yostiq va suv buyurtma qilish va ismi bilan salomlashishga tayyorlanish.',
        en: 'Before he arrives, reassign him to a high floor, order hypoallergenic pillows and the water, and prepare to greet him by name.',
      },
      {
        ru: 'До приезда заказать гипоаллергенные подушки, а номер на втором этаже оставить: ручная смена назначения может сбить систему.',
        uz: 'Kelishidan oldin gipoallergen yostiq buyurtma qilish, ikkinchi qavatdagi xonani esa qoldirish: qo\'lda qayta belgilash tizimni buzishi mumkin.',
        en: 'Before he arrives, order hypoallergenic pillows but keep the second-floor room: manual reassignment can confuse the system.',
      },
      {
        ru: 'Оставить назначенный номер, а при заезде предложить гостю апгрейд в люкс в знак признательности, если тот окажется свободен.',
        uz: 'Belgilangan xonani qoldirib, kelganida minnatdorchilik belgisi sifatida, agar bo\'sh bo\'lib chiqsa, lyuksga apgreyd taklif qilish.',
        en: 'Keep the assigned room and, at arrival, offer him a suite upgrade as a thank-you if one turns out to be free.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Модуль VIP: список ожидаемых VIP-гостей и их профили просматривают перед сменой и готовят номер заранее — импровизировать или спрашивать о предпочтениях на заезде уже поздно. Подготовка «наполовину» игнорирует часть профиля, а апгрейд «если окажется свободен» — обещание, которое можно не выполнить.',
      uz: 'VIP moduli: kutilayotgan VIP-mehmonlar ro\'yxati va profillari smenadan oldin ko\'rib chiqiladi va xona oldindan tayyorlanadi — kelganda improvizatsiya qilish yoki afzalliklar haqida so\'rash allaqachon kech. «Yarim» tayyorgarlik profilning bir qismini e\'tiborsiz qoldiradi, «bo\'sh bo\'lib chiqsa» apgreyd esa bajarilmasligi mumkin bo\'lgan va\'da.',
      en: 'The VIP module: the list of expected VIP guests and their profiles are reviewed before the shift and the room is prepared in advance — improvising or asking about preferences at arrival is too late. Half-preparation ignores part of the profile, and an upgrade "if one turns out to be free" is a promise that may not be kept.',
    },
  },
  {
    id: 'final-mc-24',
    type: 'choice',
    moduleSlugs: ['late-checkout', 'check-out'],
    scenario: {
      ru: '11:50. Гость звонит из номера: рейс в 21:00, просит остаться до 17:00. Вы проверили — на эту ночь номер не забронирован; по правилам выезд после 14:00 стоит 50 % стоимости ночи. Вы назвали доплату, гость согласился, вы отметили время выезда в PMS и добавили сумму в счёт.',
      uz: 'Soat 11:50. Mehmon xonadan qo\'ng\'iroq qiladi: reysi 21:00 da, 17:00 gacha qolishni so\'raydi. Siz tekshirdingiz — bu kechaga xona bron qilinmagan; qoidaga ko\'ra 14:00 dan keyingi chiqish bir kecha narxining 50 % i. Siz qo\'shimcha to\'lovni aytdingiz, mehmon rozi bo\'ldi, siz PMS\'da chiqish vaqtini belgilab, summani hisobga qo\'shdingiz.',
      en: '11:50. A guest calls from his room: his flight is at 21:00 and he asks to stay until 17:00. You checked — the room is not booked tonight; under hotel rules check-out after 14:00 costs 50% of the nightly rate. You quoted the fee, the guest agreed, you set the new check-out time in the PMS and added the charge to the bill.',
    },
    question: {
      ru: 'Какой шаг стандарта ещё не выполнен?',
      uz: 'Standartning qaysi qadami hali bajarilmagan?',
      en: 'Which step of the standard is still missing?',
    },
    options: [
      {
        ru: 'Сообщить хозяйственной службе, что гость из этого номера выезжает в 17:00, а не в 12:00.',
        uz: 'Xo\'jalik xizmatiga bu xonadagi mehmon 12:00 da emas, 17:00 da chiqishini xabar qilish.',
        en: 'Telling housekeeping that the guest in this room leaves at 17:00, not at 12:00.',
      },
      {
        ru: 'Взять с карты гостя предоплату за поздний выезд сразу после звонка, не дожидаясь 17:00.',
        uz: 'Qo\'ng\'iroqdan so\'ng darhol, 17:00 ni kutmasdan mehmon kartasidan kech chiqish uchun oldindan to\'lov olish.',
        en: 'Taking a late check-out prepayment from his card right after the call.',
      },
      {
        ru: 'Попросить гостя спуститься к стойке и подтвердить поздний выезд своей подписью.',
        uz: 'Mehmondan pastga tushib, kech chiqishni stoykada imzo bilan tasdiqlashni so\'rash.',
        en: 'Asking the guest to come down and confirm the late check-out with a signature at the desk.',
      },
      {
        ru: 'Согласовать с дежурным менеджером доплату 50 % за поздний выезд, прежде чем вносить её в счёт.',
        uz: 'Hisobga kiritishdan oldin 50 % qo\'shimcha to\'lovni navbatchi menejer bilan kelishish.',
        en: 'Clearing the 50% late check-out fee with the duty manager before adding it to the bill.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Модуль позднего выезда прямо называет ошибкой «забывать уведомить хозяйственную службу об изменении времени выезда» — иначе горничная придёт убирать занятый номер. Доплата по утверждённым правилам не требует менеджера, а предоплата и подпись в стандарт не входят.',
      uz: 'Kech chiqish moduli «chiqish vaqti o\'zgargani haqida xo\'jalik xizmatini xabardor qilishni unutish»ni ochiq xato deb ataydi — aks holda xona xizmatchisi band xonani yig\'ishtirishga keladi. Tasdiqlangan qoidalar bo\'yicha qo\'shimcha to\'lov menejerni talab qilmaydi, oldindan to\'lov va imzo esa standartga kirmaydi.',
      en: 'The late check-out module explicitly lists "forgetting to tell housekeeping about the changed check-out time" as a mistake — otherwise an attendant will come to clean an occupied room. A fee under approved rules needs no manager, and a prepayment or signature is not part of the standard.',
    },
  },
  {
    id: 'final-mc-25',
    type: 'choice',
    moduleSlugs: ['foreign-guests', 'check-in'],
    scenario: {
      ru: 'Заселяется семья из Малайзии: по-русски не говорят, по-английски — с трудом. Через переводчик в телефоне они спрашивают, халяльный ли завтрак. Свинину в ресторане не подают, но кухня использует общие сковороды, а в меню есть блюда с вином. У стойки ждут ещё двое гостей.',
      uz: 'Malayziyadan kelgan oila joylashmoqda: ruscha gapirmaydi, inglizchani qiyinchilik bilan biladi. Telefondagi tarjimon orqali ular nonushta halolmi, deb so\'rashadi. Restoranda cho\'chqa go\'shti berilmaydi, ammo oshxona umumiy tovalardan foydalanadi, menyuda esa sharobli taomlar bor. Stoykada yana ikki mehmon kutmoqda.',
      en: 'A family from Malaysia is checking in: they speak no Russian and little English. Through a translator app they ask whether breakfast is halal. The restaurant serves no pork, but the kitchen uses shared pans and some dishes contain wine. Two more guests are waiting at the desk.',
    },
    question: {
      ru: 'Как ответить по стандарту?',
      uz: 'Standart bo\'yicha qanday javob berasiz?',
      en: 'How do you answer by the standard?',
    },
    options: [
      {
        ru: 'Через переводчик сказать, что завтрак интернациональный и они наверняка что-нибудь найдут, и выдать ключ с картой Wi-Fi.',
        uz: 'Tarjimon orqali nonushta xalqaro ekanini va ular albatta biror narsa topishlarini aytib, kalitni Wi-Fi kartasi bilan berish.',
        en: 'Say via the translator that breakfast is international and they\'ll surely find something, and hand over the key and Wi-Fi card.',
      },
      {
        ru: 'Заверить через переводчик, что весь завтрак халяльный, раз свинину не подают, и выдать ключ с картой Wi-Fi.',
        uz: 'Cho\'chqa go\'shti berilmagani uchun butun nonushta halol ekaniga tarjimon orqali ishontirib, kalitni Wi-Fi kartasi bilan berish.',
        en: 'Assure them via the translator that the whole breakfast is halal since no pork is served, and hand over the key and Wi-Fi card.',
      },
      {
        ru: 'Через переводчик назвать халяльные блюда, при сомнении уточнив у кухни, и записать время завтрака и выезда цифрами.',
        uz: 'Tarjimon orqali halol taomlarni aytish, shubha bo\'lsa oshxonadan aniqlash va nonushta hamda chiqish vaqtini raqamlar bilan yozib berish.',
        en: 'Name the halal dishes via the translator, checking with the kitchen if unsure, and write breakfast and check-out times in figures.',
      },
      {
        ru: 'Подробно описать по-английски всё меню завтрака и способы приготовления, чтобы семья сама решила, что ей подходит.',
        uz: 'Oila o\'zi nima mosligini hal qilishi uchun nonushtaning butun menyusini va pishirish usullarini inglizcha batafsil tasvirlab berish.',
        en: 'Describe the whole breakfast menu and cooking methods in detail in English so the family can decide what suits them.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Модуль об иностранных гостях: диетические ограничения уточняют, а не угадывают — «без свинины» ещё не значит «халяль», особенно при общих сковородах и вине в блюдах. Помогают простые фразы и визуальные опоры, например время, написанное цифрами; длинный рассказ на английском гостю, которому трудно с языком, не поможет.',
      uz: 'Chet ellik mehmonlar moduli: parhez cheklovlari taxmin qilinmaydi, aniqlanadi — «cho\'chqa go\'shtisiz» hali «halol» degani emas, ayniqsa umumiy tovalar va taomlardagi sharob bo\'lsa. Sodda iboralar va ko\'rgazmali vositalar, masalan, raqamlar bilan yozilgan vaqt yordam beradi; tilni qiyin biladigan mehmonga inglizcha uzun hikoya yordam bermaydi.',
      en: 'The foreign-guests module: dietary restrictions are checked, not guessed — "no pork" doesn\'t yet mean "halal", especially with shared pans and wine in dishes. Simple phrases and visual aids such as times written in figures help; a long explanation in English won\'t help a guest who struggles with the language.',
    },
  },
  {
    id: 'final-mc-26',
    type: 'choice',
    moduleSlugs: ['lost-items', 'complaints'],
    scenario: {
      ru: '19:30. Гость из 512-го, который проживает ещё две ночи, раздражённо сообщает: после уборки пропали беспроводные наушники, оставленные на тумбочке, — «горничная наверняка их взяла». В журнале находок записей нет; горничная этого этажа ещё на смене.',
      uz: 'Soat 19:30. Yana ikki kecha yashaydigan 512-xonadagi mehmon jahl bilan aytadi: yig\'ishtirishdan keyin tumbochkada qoldirilgan simsiz quloqchinlar yo\'qolgan — «xona xizmatchisi olgan bo\'lsa kerak». Topilmalar jurnalida yozuv yo\'q; shu qavat xizmatchisi hali smenada.',
      en: '19:30. A guest in 512, staying two more nights, says irritably that after cleaning his wireless earphones left on the bedside table are gone — "the attendant must have taken them". There is no entry in the lost-and-found log; the floor\'s attendant is still on shift.',
    },
    question: {
      ru: 'Какая реакция соответствует стандартам?',
      uz: 'Qaysi munosabat standartlarga mos keladi?',
      en: 'Which response meets the standards?',
    },
    options: [
      {
        ru: 'Извиниться, проверить журнал находок и, раз записей нет, сообщить, что в номере ничего не находили, и предложить поискать в сейфе.',
        uz: 'Uzr so\'rab, topilmalar jurnalini tekshirish va yozuv yo\'qligi uchun xonada hech narsa topilmaganini aytib, seyfda qidirib ko\'rishni taklif qilish.',
        en: 'Apologise, check the lost-and-found log and, as there\'s no entry, say nothing was found in the room and suggest checking the safe.',
      },
      {
        ru: 'Извиниться, записать описание и заверить гостя, что персонал отеля тщательно проверяется и не мог взять чужую вещь.',
        uz: 'Uzr so\'rab, tavsifni yozib olish va mehmonni mehmonxona xodimlari puxta tekshirilishiga, birovning narsasini ololmasligiga ishontirish.',
        en: 'Apologise, write down a description and assure the guest that hotel staff are carefully vetted and could not take anything.',
      },
      {
        ru: 'Извиниться и, чтобы жалоба не дошла до менеджера, сразу предложить купить за счёт отеля такие же наушники.',
        uz: 'Uzr so\'rab, shikoyat menejergacha yetib bormasligi uchun darhol mehmonxona hisobidan xuddi shunday quloqchin sotib olishni taklif qilish.',
        en: 'Apologise and, to keep the complaint from reaching the manager, offer at once to buy identical earphones at the hotel\'s cost.',
      },
      {
        ru: 'Не споря, извиниться, записать описание, сразу связаться с горничной и хозяйственной службой и назвать время ответа.',
        uz: 'Bahslashmasdan uzr so\'rash, tavsifni yozib olish, darhol xona xizmatchisi va xo\'jalik xizmati bilan bog\'lanish va javob vaqtini aytish.',
        en: 'Without arguing, apologise, note a description, contact the attendant and housekeeping at once and give a time for an answer.',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Модуль жалоб запрещает спорить с гостем и оправдывать сотрудников, а модуль находок — говорить «не найдено», не проверив хозяйственную службу. Нужны немедленное видимое действие и конкретный срок ответа; «откупиться» значит пропустить и поиск, и менеджера, которому передают финансовые решения.',
      uz: 'Shikoyatlar moduli mehmon bilan bahslashish va xodimlarni oqlashni, topilmalar moduli esa xo\'jalik xizmatini tekshirmay «topilmadi» deyishni taqiqlaydi. Darhol ko\'rinadigan harakat va aniq javob muddati kerak; «pul bilan qutulish» qidiruvni ham, moliyaviy qarorlar topshiriladigan menejerni ham chetlab o\'tadi.',
      en: 'The complaints module forbids arguing with the guest or defending staff, and the lost-items module forbids saying "not found" without checking housekeeping. What\'s needed is immediate visible action and a concrete time for an answer; "buying him off" skips both the search and the manager, who handles financial decisions.',
    },
  },
  {
    id: 'final-mc-27',
    type: 'choice',
    moduleSlugs: ['emergency-procedures', 'check-out'],
    scenario: {
      ru: '07:45. Срабатывает пожарная сигнализация. В ресторане идёт завтрак, а у стойки гость с чемоданами просит закрыть счёт — такси уже ждёт у входа. За его спиной — двери лифта; кроме вас, на стойке никого.',
      uz: 'Soat 07:45. Yong\'in signalizatsiyasi ishlaydi. Restoranda nonushta bo\'lyapti, stoykada esa chamadonli mehmon hisobni yopishni so\'raydi — taksi kirish oldida kutib turibdi. Uning orqasida — lift eshiklari; stoykada sizdan boshqa hech kim yo\'q.',
      en: '07:45. The fire alarm goes off. Breakfast is being served in the restaurant, and at the desk a guest with suitcases asks you to close his bill — his taxi is waiting outside. Behind him are the lift doors; you are the only one on the desk.',
    },
    question: {
      ru: 'Как действовать по протоколу?',
      uz: 'Protokol bo\'yicha qanday harakat qilasiz?',
      en: 'How do you act under the protocol?',
    },
    options: [
      {
        ru: 'Быстро закрыть счёт — это минута, а такси ждёт, — затем направить гостя и всех в лобби к ближайшему выходу, не к лифту.',
        uz: 'Hisobni tez yopish — bu bir daqiqa, taksi kutyapti, — so\'ng mehmonni va lobbidagi hammani liftga emas, eng yaqin chiqishga yo\'naltirish.',
        en: 'Close the bill quickly — it\'s a minute and the taxi is waiting — then direct him and everyone in the lobby to the nearest exit, not the lift.',
      },
      {
        ru: 'Прервать операцию, спокойно направить гостя и всех в лобби к ближайшему эвакуационному выходу, не к лифту, стойку передать по плану.',
        uz: 'Amalni to\'xtatib, mehmonni va lobbidagi hammani xotirjam liftga emas, eng yaqin evakuatsiya chiqishiga yo\'naltirish, stoykani reja bo\'yicha topshirish.',
        en: 'Stop the transaction, calmly direct him and everyone in the lobby to the nearest emergency exit, not the lift, and hand the desk over per plan.',
      },
      {
        ru: 'Направить всех в лобби к ближайшему выходу, не к лифту, а самому сразу подняться по этажам и постучать в двери номеров.',
        uz: 'Lobbidagi hammani liftga emas, eng yaqin chiqishga yo\'naltirib, o\'zi esa xonalar eshigini taqillatish uchun darhol qavatlarga ko\'tarilish.',
        en: 'Direct everyone in the lobby to the nearest exit, not the lift, and go straight up the floors yourself to knock on room doors.',
      },
      {
        ru: 'Сначала позвонить на пост охраны и выяснить, настоящая ли тревога, а гостей в лобби и ресторане попросить пока спокойно оставаться на местах.',
        uz: 'Avval qo\'riqlash postiga qo\'ng\'iroq qilib, signal haqiqiymi-yo\'qligini bilish, mehmonlardan esa hozircha joylarida xotirjam turishni so\'rash.',
        en: 'First call the security post to find out whether the alarm is real, and ask guests in the lobby and restaurant to stay calmly where they are for now.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Протокол пожарной тревоги: спокойно направить всех к ближайшему эвакуационному выходу, никогда не к лифту, а стойку не бросать — передать её по плану смены. Счёт закрывают после отбоя; выяснять, «настоящая ли тревога», пока люди сидят на местах, протокол не допускает, а обход этажей без передачи стойки оставляет лобби без точки контакта.',
      uz: 'Yong\'in signali protokoli: hammani xotirjam eng yaqin evakuatsiya chiqishiga, hech qachon liftga emas, yo\'naltirish, stoykani tashlab ketmaslik — smena rejasi bo\'yicha topshirish. Hisob signal bekor qilingandan keyin yopiladi; odamlar joyida o\'tirganda «signal haqiqiymi» deb aniqlashni protokol yo\'l qo\'ymaydi, stoykani topshirmay qavatlarni aylanish esa lobbini aloqa nuqtasisiz qoldiradi.',
      en: 'The fire alarm protocol: calmly direct everyone to the nearest emergency exit, never to the lift, and don\'t abandon the desk — hand it over per the shift plan. The bill is closed after the all-clear; checking "whether the alarm is real" while people stay put is not allowed, and touring the floors without handing over the desk leaves the lobby with no point of contact.',
    },
  },
  {
    id: 'final-mc-28',
    type: 'choice',
    moduleSlugs: ['vip-guests', 'upselling-rooms'],
    scenario: {
      ru: '16:20. Заезжает постоянный гость; в брони отмечено, что сегодня у него день рождения, в профиле — любимый напиток. Его стандартный номер готов, свободен Executive на верхнем этаже; менеджер разрешил постоянным гостям один бесплатный апгрейд при наличии. В лобби несколько гостей.',
      uz: 'Soat 16:20. Doimiy mehmon kelmoqda; bronda bugun uning tug\'ilgan kuni ekani, profilida — sevimli ichimligi belgilangan. Uning standart xonasi tayyor, yuqori qavatda Executive bo\'sh; menejer doimiy mehmonlarga bo\'sh bo\'lsa bitta bepul apgreydga ruxsat bergan. Lobbida bir nechta mehmon bor.',
      en: '16:20. A regular guest is checking in; the booking notes it is his birthday today, and his profile lists a favourite drink. His standard room is ready, an Executive room on the top floor is free, and the manager allows regulars one free upgrade when available. Several guests are in the lobby.',
    },
    question: {
      ru: 'Какой вариант соответствует стандарту VIP?',
      uz: 'Qaysi variant VIP standartiga mos keladi?',
      en: 'Which option meets the VIP standard?',
    },
    options: [
      {
        ru: 'Поздравить по имени и оформить стандартный номер, как в брони: бесплатный апгрейд оставить для тех, кто попросит о нём сам.',
        uz: 'Ismi bilan tabriklab, bronda bo\'lganidek standart xonani rasmiylashtirish: bepul apgreydni o\'zi so\'raganlarga qoldirish.',
        en: 'Wish him happy birthday by name and check him into the standard room as booked: free upgrades are for those who ask.',
      },
      {
        ru: 'Поздравить и предложить Executive как платный апгрейд со скидкой: отдать номер бесплатно — значит упустить выручку.',
        uz: 'Tabriklab, Executive\'ni chegirmali pullik apgreyd sifatida taklif qilish: xonani bepul berish — daromadni boy berish.',
        en: 'Wish him happy birthday and offer the Executive as a paid upgrade at a discount: giving it away is lost revenue.',
      },
      {
        ru: 'Негромко поздравить по имени, предложить Executive в подарок от отеля и организовать в номере любимый напиток с запиской.',
        uz: 'Ismi bilan past ovozda tabriklash, Executive\'ni mehmonxonadan sovg\'a sifatida taklif qilish va xonaga sevimli ichimligini yozma tabrik bilan qo\'yish.',
        en: 'Quietly wish him happy birthday by name, offer the Executive as a gift from the hotel and arrange his favourite drink with a note.',
      },
      {
        ru: 'Поздравить его вместе с коллегами на всё лобби и объявить о подарке — Executive, чтобы праздник почувствовали все вокруг.',
        uz: 'Atrofdagilar bayramni his qilishi uchun hamkasblar bilan butun lobbiga eshittirib tabriklash va sovg\'a — Executive\'ni e\'lon qilish.',
        en: 'Celebrate him with colleagues loud enough for the whole lobby and announce the gift — the Executive — so everyone shares the moment.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Стандарт VIP — персонализация по профилю, небольшие личные жесты (записка, любимый напиток, апгрейд при наличии) и дискретность: статус и подарки не объявляют на всё лобби. Оформить «как в брони» — обезличенный приём, а продавать то, что разрешено подарить, — упустить момент заботы.',
      uz: 'VIP standarti — profil bo\'yicha shaxsiylashtirish, kichik shaxsiy e\'tibor belgilari (yozma tabrik, sevimli ichimlik, bo\'sh bo\'lsa apgreyd) va maxfiylik: maqom va sovg\'alar butun lobbiga e\'lon qilinmaydi. «Bronda bo\'lganidek» rasmiylashtirish — shaxssiz qabul, sovg\'a qilishga ruxsat berilgan narsani sotish esa g\'amxo\'rlik lahzasini boy berish.',
      en: 'The VIP standard is personalisation from the profile, small personal gestures (a note, a favourite drink, an upgrade when available) and discretion: status and gifts are not announced to the whole lobby. Checking him in "as booked" is an impersonal welcome, and selling what you may give as a gift misses the moment of care.',
    },
  },
  {
    id: 'final-mc-29',
    type: 'choice',
    moduleSlugs: ['early-checkin', 'whatsapp-communication'],
    scenario: {
      ru: '17:40. Гость с бронью с завтрашнего дня пишет в WhatsApp: «Наш поезд прибывает в 6:30, сможем заселиться в 7?» Отель на сегодня заполнен, выезд у всех до 12:00, первые убранные номера обычно готовы к 12:30–13:00.',
      uz: 'Soat 17:40. Ertadan bron qilgan mehmon WhatsApp\'da yozadi: «Poyezdimiz 6:30 da keladi, 7 da joylasha olamizmi?» Mehmonxona bugun to\'la, hamma 12:00 gacha chiqadi, birinchi yig\'ishtirilgan xonalar odatda 12:30–13:00 ga tayyor bo\'ladi.',
      en: '17:40. A guest booked from tomorrow writes on WhatsApp: "Our train arrives at 6:30 — can we check in at 7?" The hotel is full tonight, everyone checks out by 12:00, and the first cleaned rooms are usually ready by 12:30–13:00.',
    },
    question: {
      ru: 'Какой ответ соответствует стандартам?',
      uz: 'Qaysi javob standartlarga mos keladi?',
      en: 'Which reply meets the standards?',
    },
    options: [
      {
        ru: 'Ответить сразу: к 7:00 не получится, отель полон; номер, вероятно, будет готов к 12:30–13:00, до этого — хранение багажа и завтрак.',
        uz: 'Darhol javob berish: 7:00 da bo\'lmaydi, mehmonxona to\'la; xona taxminan 12:30–13:00 ga tayyor bo\'ladi, unga qadar — bagaj saqlash va nonushta.',
        en: 'Reply at once: not at 7:00, the hotel is full; the room will likely be ready by 12:30–13:00, with luggage storage and breakfast until then.',
      },
      {
        ru: 'Ответить сразу и тепло: «Постараемся подготовить для вас номер к 7:00, ждём вас!» — и попросить утреннюю смену сделать всё возможное.',
        uz: 'Darhol iliq javob berish: «Xonani 7:00 ga tayyorlashga harakat qilamiz, kutamiz!» — va ertalabki smenadan qo\'lidan kelganini qilishni so\'rash.',
        en: 'Reply at once and warmly: "We\'ll try to have your room ready by 7:00 — see you!" and ask the morning shift to do what they can.',
      },
      {
        ru: 'Ответить завтра около 7:00, когда утренняя смена увидит выезды и график уборки, — чтобы дать точный ответ, а не предположение.',
        uz: 'Aniq javob berish uchun ertalabki smena chiqishlar va yig\'ishtirish jadvalini ko\'radigan ertangi 7:00 atrofida javob berish.',
        en: 'Reply tomorrow around 7:00, once the morning shift sees departures and the cleaning plan, to give an exact answer rather than a guess.',
      },
      {
        ru: 'Ответить сразу и честно: «Заезд строго с 14:00, ранний заезд завтра невозможен», чтобы гости не приехали с ложными ожиданиями.',
        uz: 'Mehmonlar soxta umid bilan kelmasligi uchun darhol halol javob berish: «Joylashish qat\'iy 14:00 dan, ertaga erta joylashish mumkin emas».',
        en: 'Reply at once and honestly: "Check-in is strictly from 14:00; early check-in tomorrow is not possible," so they don\'t arrive with false hopes.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'В мессенджере отвечают быстро, а стандарт раннего заезда требует честного реалистичного времени и альтернативы на время ожидания. «Постараемся» — ложная надежда, ответ «завтра утром» нарушает скорость отклика, а сухое «с 14:00» оставляет гостя без плана, хотя реальное время известно.',
      uz: 'Messenjerda tez javob beriladi, erta joylashish standarti esa halol va real vaqtni hamda kutish uchun muqobilni talab qiladi. «Harakat qilamiz» — soxta umid, «ertaga ertalab» javob berish javob tezligini buzadi, quruq «14:00 dan» esa real vaqt ma\'lum bo\'lsa ham mehmonni rejasiz qoldiradi.',
      en: 'On a messenger you reply quickly, and the early check-in standard requires an honest, realistic time plus an alternative for the wait. "We\'ll try" is false hope, replying "tomorrow morning" breaks response speed, and a bare "from 14:00" leaves the guest without a plan even though the real time is known.',
    },
  },
  {
    id: 'final-mc-30',
    type: 'choice',
    moduleSlugs: ['check-in', 'foreign-guests'],
    scenario: {
      ru: '17:30. Заселяется гость из Китая с пожилой мамой, немного говорит по-английски. Когда вы называете номер 414, он заметно смущается и через переводчик просит другой номер. Номер 507 той же категории готов.',
      uz: 'Soat 17:30. Xitoydan kelgan mehmon keksa onasi bilan joylashmoqda, inglizcha biroz gapiradi. Siz 414-xonani aytganingizda u sezilarli darajada xijolat bo\'ladi va tarjimon orqali boshqa xona so\'raydi. Xuddi shu toifadagi 507-xona tayyor.',
      en: '17:30. A guest from China is checking in with his elderly mother; he speaks a little English. When you name room 414 he looks visibly uneasy and, through a translator, asks for another room. Room 507 in the same category is ready.',
    },
    question: {
      ru: 'Как продолжить заселение по стандарту?',
      uz: 'Ro\'yxatdan o\'tkazishni standart bo\'yicha qanday davom ettirasiz?',
      en: 'How do you continue the check-in by the standard?',
    },
    options: [
      {
        ru: 'Объяснить, что 414-й — один из самых тихих номеров, а цифры в отеле ничего не значат, и спокойно закончить заселение.',
        uz: '414-xona qavatdagi eng tinch xonalardan biri ekanini, raqamlar hech narsani anglatmasligini tushuntirib, ro\'yxatdan o\'tkazishni xotirjam yakunlash.',
        en: 'Explain that 414 is one of the quietest rooms on the floor and numbers mean nothing in the hotel, and calmly finish the check-in.',
      },
      {
        ru: 'Переселить в 507-й, но попросить подождать в лобби, пока вы перекодируете ключи и перепечатаете карту, не уточняя, сколько это займёт.',
        uz: '507-xonaga ko\'chirish, lekin kalitlarni qayta kodlab, kartani qayta chop etguningizcha, qancha vaqt olishini aytmay, lobbida kutishni so\'rash.',
        en: 'Move them to 507 but ask them to wait in the lobby while you recode keys and reprint the card, without saying how long it will take.',
      },
      {
        ru: 'Предложить 507-й с доплатой за смену номера: 414-й уже подготовлен для них, и отказ от него — их собственный выбор.',
        uz: '414-xona ular uchun allaqachon tayyorlangani va undan voz kechish o\'z tanlovi bo\'lgani uchun 507-xonani xona almashtirish to\'lovi bilan taklif qilish.',
        en: 'Offer 507 with a room-change fee, since 414 was already prepared for them and turning it down is their own choice.',
      },
      {
        ru: 'Без расспросов и споров переселить в 507-й, отметить пожелание в профиле и провести краткий инструктаж, записав время цифрами.',
        uz: 'So\'roq va bahssiz 507-xonaga ko\'chirish, istakni profilga belgilash va vaqtni raqamlar bilan yozib, qisqa yo\'l-yo\'riq berish.',
        en: 'Move them to 507 without questions or argument, note the preference in the profile and give a short briefing with times in figures.',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Модуль об иностранных гостях: уважать культурные традиции, а не спорить с ними — в китайском языке цифра 4 созвучна слову «смерть». Просьбу выполняют сразу, отмечают в профиле на будущее и дают инструктаж с визуальными опорами; ожидание без объяснения и доплата за уважение к обычаю нарушают стандарт.',
      uz: 'Chet ellik mehmonlar moduli: madaniy an\'analarni hurmat qilish, ular bilan bahslashmaslik — xitoy tilida 4 raqami «o\'lim» so\'ziga ohangdosh. Iltimos darhol bajariladi, kelajak uchun profilga belgilanadi va ko\'rgazmali vositalar bilan yo\'l-yo\'riq beriladi; izohsiz kutish va odatni hurmat qilgani uchun to\'lov standartni buzadi.',
      en: 'The foreign-guests module: respect cultural traditions instead of arguing with them — in Chinese the number 4 sounds like the word for "death". The request is granted at once, noted in the profile for the future, and the briefing uses visual aids; an unexplained wait or a fee for respecting a custom breaks the standard.',
    },
  },
]
