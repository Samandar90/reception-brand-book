import type { QuizQuestion } from '@/types'

/** Knowledge-test questions for modules 9–15 (4 per module). */
export const quizPart2: QuizQuestion[] = [
  // late-checkout
  {
    id: 'quiz-late-checkout-1',
    moduleSlug: 'late-checkout',
    question: {
      ru: '10:15. Гость из 508 просит выехать в 15:00 вместо 12:00. В PMS: на 508 сегодня заезда нет, тариф — 900 000 сум за ночь, правило отеля — выезд до 15:00 стоит 50 % ночи. Какой ответ соответствует уроку?',
      uz: 'Soat 10:15. 508-xona mehmoni 12:00 o\'rniga 15:00 da chiqishni so\'raydi. PMS da: bugun 508 ga kelish yo\'q, tarif — kechasi 900 000 so\'m, mehmonxona qoidasi — 15:00 gacha chiqish bir kecha narxining 50 % i. Qaysi javob darsga mos?',
      en: '10:15. The guest in 508 asks to check out at 15:00 instead of 12:00. In the PMS: no arrival in 508 tonight, rate 900,000 UZS per night, hotel rule — check-out until 15:00 costs 50% of a night. Which reply follows the lesson?',
    },
    options: [
      { ru: '«Конечно, 15:00 подойдёт — доплата просто появится в вашем счёте при выезде»', uz: '«Albatta, 15:00 bo\'ladi — qo\'shimcha to\'lov chiqishda hisobingizda ko\'rinadi»', en: '"Of course, 15:00 is fine — the late fee will simply appear on your bill at check-out"' },
      { ru: '«Могу продлить до 15:00, это 900 000 сум — стоимость ночи. Подтверждаем?»', uz: '«15:00 gacha uzaytira olaman, bu 900 000 so\'m — bir kecha narxi. Tasdiqlaymizmi?»', en: '"I can extend you to 15:00; that is 900,000 UZS, the price of a night. Shall I confirm?"' },
      { ru: '«Могу продлить до 15:00, это 450 000 сум — половина ночи. Подтверждаем?»', uz: '«15:00 gacha uzaytira olaman, bu 450 000 so\'m — yarim kecha. Tasdiqlaymizmi?»', en: '"I can extend you to 15:00; that is 450,000 UZS, half the nightly rate. Shall I confirm?"' },
      { ru: '«Выезд продлён до 15:00, и в счёт уже добавлено 450 000 сум — половина ночи»', uz: '«Chiqish 15:00 gacha uzaytirildi, hisobga 450 000 so\'m — yarim kecha qo\'shildi»', en: '"Your check-out is extended to 15:00, and 450,000 UZS, half a night, is already on your bill"' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Урок: о доплате говорят сразу и спокойно, с вопросом «подтвердить?» — 50 % от 900 000 = 450 000 сум. Сумма, которая «появится в счёте при выезде», — ошибка из списка (плата постфактум), а списание без согласия гостя — тот же неприятный сюрприз.',
      uz: 'Dars: qo\'shimcha to\'lov darhol va xotirjam aytiladi va «tasdiqlaymizmi?» deb so\'raladi — 900 000 ning 50 % i 450 000 so\'m. To\'lovning «chiqishda hisobda ko\'rinishi» — ro\'yxatdagi xato, mehmon roziligisiz hisobga qo\'shish esa xuddi shunday kutilmagan holat.',
      en: 'The lesson: state the fee upfront and calmly and ask "shall I confirm?" — 50% of 900,000 is 450,000 UZS. A fee that will "appear on the bill at check-out" is a listed mistake, and charging without the guest\'s consent is the same unpleasant surprise.',
    },
  },
  {
    id: 'quiz-late-checkout-2',
    moduleSlug: 'late-checkout',
    question: {
      ru: '11:00. У стойки очередь, гость из 214 спрашивает: «Можно выехать в 14:00?» Карточку 214 в PMS вы ещё не открывали. Какая последовательность — единственно верная по уроку?',
      uz: 'Soat 11:00. Stoykada navbat bor, 214-xona mehmoni so\'raydi: «14:00 da chiqsam bo\'ladimi?» 214-xona kartochkasini PMS da hali ochmagansiz. Darsga ko\'ra qaysi ketma-ketlik yagona to\'g\'ri?',
      en: '11:00. There is a queue at the desk; the guest in 214 asks: "Can I check out at 14:00?" You have not opened room 214 in the PMS yet. Which sequence is the only correct one per the lesson?',
    },
    options: [
      { ru: '«Одну минуту» → проверить бронь на 214 на сегодня и статус уборки → ответить → сообщить хаускипингу', uz: '«Bir daqiqa» → 214 ning bugungi broni va tozalash holatini tekshirish → javob berish → xaus-kipingga aytish', en: '"One moment" → check tonight\'s booking and turnover status for 214 → answer → inform housekeeping' },
      { ru: 'Сразу согласиться → затем проверить бронь на 214 на сегодня → сообщить хаускипингу новое время выезда', uz: 'Darhol rozi bo\'lish → 214 ning bugungi bronini tekshirish → xaus-kipingga yangi chiqish vaqtini aytish', en: 'Agree straight away → check tonight\'s booking for 214 → tell housekeeping the new check-out time' },
      { ru: 'Проверить бронь на 214 на сегодня → согласиться → хаускипинг сам увидит, что гость ещё в номере', uz: '214 ning bugungi bronini tekshirish → rozi bo\'lish → xaus-kiping mehmon hali xonadaligini o\'zi ko\'radi', en: 'Check tonight\'s booking for 214 → agree → housekeeping will see for itself that the guest is still in' },
      { ru: 'Обещать перезвонить после обеда → обслужить очередь → проверить бронь на 214 → позвонить гостю', uz: 'Tushlikdan keyin qo\'ng\'iroq qilishni va\'da qilish → navbatni o\'tkazish → bronni tekshirish → qo\'ng\'iroq', en: 'Promise to call back after lunch → serve the queue → check tonight\'s booking for 214 → call the guest' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Урок: бронь на сегодняшнюю ночь проверяют до ответа — быстро и незаметно, пока гость ждёт у стойки, а после согласия уведомляют хаускипинг (забыть — ошибка из списка). Согласие до проверки — обещание, которое придётся отменить; «перезвоню после обеда» — уже после времени выезда.',
      uz: 'Dars: bugungi kechaga bron javobdan oldin tekshiriladi — mehmon stoykada kutayotganda tez va sezdirmay, rozilikdan keyin esa xaus-kiping xabardor qilinadi (unutish — ro\'yxatdagi xato). Tekshiruvdan oldin rozi bo\'lish — qaytarib olishga to\'g\'ri keladigan va\'da; «tushlikdan keyin qo\'ng\'iroq qilaman» esa chiqish vaqtidan keyin.',
      en: 'The lesson: check tonight\'s booking before answering — quickly and discreetly while the guest waits at the desk — and notify housekeeping after agreeing (forgetting is a listed mistake). Agreeing before checking is a promise you may have to take back; "I will call after lunch" comes after check-out time.',
    },
  },
  {
    id: 'quiz-late-checkout-3',
    moduleSlug: 'late-checkout',
    question: {
      ru: 'Загрузка 95 %. Гость из 312 просит остаться до 16:00 — вылет в 20:00. Вы проверили: на 312 сегодня заезд гостя с Booking.com, ETA 14:00. Какой ответ соответствует уроку?',
      uz: 'Bandlik 95 %. 312-xona mehmoni 16:00 gacha qolishni so\'raydi — parvozi 20:00 da. Tekshirdingiz: 312 ga bugun Booking.com mehmoni keladi, ETA 14:00. Qaysi javob darsga mos?',
      en: 'Occupancy is 95%. The guest in 312 asks to stay until 16:00 — his flight is at 20:00. You checked: 312 has a Booking.com arrival tonight, ETA 14:00. Which reply follows the lesson?',
    },
    options: [
      { ru: '«К сожалению, сегодня у нас почти полная загрузка, поэтому выезд остаётся в 12:00»', uz: '«Afsuski, bugun deyarli to\'liq bandmiz, shuning uchun chiqish vaqti 12:00 da qoladi»', en: '"Unfortunately we are almost fully booked tonight, so your check-out stays at 12:00"' },
      { ru: '«Постараюсь что-нибудь сделать — подойдите к стойке около 12:00, я скажу точнее»', uz: '«Biror narsa qilishga harakat qilaman — 12:00 atrofida stoykaga keling, aniqroq aytaman»', en: '"I will try to arrange something — come to the desk around 12:00 and I will know more"' },
      { ru: '«Могу оставить вас до 14:00, ровно до заезда следующего гостя, — вам подойдёт?»', uz: '«Sizni 14:00 gacha, keyingi mehmon kelishigacha qoldira olaman — sizga to\'g\'ri keladimi?»', en: '"I can let you stay until 14:00, right up to the next guest\'s arrival — would that suit you?"' },
      { ru: '«Номер на сегодня забронирован, но я бесплатно сохраню ваш багаж до вылета»', uz: '«Xona bugunga bron qilingan, lekin yukingizni parvozgacha bepul saqlab qo\'yaman»', en: '"The room is booked for tonight, but I can store your luggage free until your flight"' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Номер нужен следующему гостю, значит, поздний выезд обещать нельзя, а отказ по уроку всегда сопровождается альтернативой — бесплатным хранением багажа. Отказ без альтернативы — ошибка из списка; «до 14:00» не оставляет времени на уборку к заезду, а «постараюсь» — обещание, которое не выполнить.',
      uz: 'Xona keyingi mehmonga kerak, demak kech chiqishni va\'da qilib bo\'lmaydi, darsga ko\'ra rad javobi esa doim muqobil — bepul yuk saqlash bilan beriladi. Muqobilsiz rad etish — ro\'yxatdagi xato; «14:00 gacha» kelishdan oldin tozalashga vaqt qoldirmaydi, «harakat qilaman» esa bajarib bo\'lmaydigan va\'da.',
      en: 'The room is needed for the next guest, so no late check-out can be promised, and per the lesson a decline always comes with an alternative — free luggage storage. Declining without one is a listed mistake; "until 14:00" leaves no time to clean before the arrival, and "I will try" is a promise you cannot keep.',
    },
  },
  {
    id: 'quiz-late-checkout-4',
    moduleSlug: 'late-checkout',
    question: {
      ru: 'Администратор Азиза проверила: на 410 сегодня заезда нет. Сказала гостю: «До 15:00 — 50 % стоимости ночи, подтвердить?», получила согласие и изменила время выезда в PMS. Какой шаг по уроку ещё не сделан?',
      uz: 'Administrator Aziza 410 ga bugun kelish yo\'qligini tekshirdi, mehmonga «15:00 gacha — kecha narxining 50 % i, tasdiqlaymizmi?» dedi, rozilik oldi va PMS da chiqish vaqtini o\'zgartirdi. Darsga ko\'ra qaysi qadam hali bajarilmagan?',
      en: 'Receptionist Aziza checked that 410 has no arrival tonight, told the guest "until 15:00 — 50% of the nightly rate, shall I confirm?", got a yes and changed the departure time in the PMS. Which step from the lesson is still missing?',
    },
    options: [
      { ru: 'Взять с гостя наличный депозит на сумму доплаты за поздний выезд', uz: 'Mehmondan kech chiqish to\'loviga teng naqd depozit olish', en: 'Take a cash deposit from the guest equal to the late check-out fee' },
      { ru: 'Уведомить хаускипинг о новом времени выезда из 410-го номера', uz: '410-xonaning yangi chiqish vaqtini xaus-kipingga aytish', en: 'Notify housekeeping of the new check-out time for room 410' },
      { ru: 'Получить письменное разрешение дежурного менеджера на продление', uz: 'Uzaytirish uchun navbatchi menejerdan yozma ruxsat olish', en: 'Get written approval for the extension from the duty manager' },
      { ru: 'Предложить бесплатное хранение багажа на случай выезда после 15:00', uz: '15:00 dan keyin ketsa, bepul yuk saqlashni taklif qilish', en: 'Offer free luggage storage in case the guest leaves after 15:00' },
    ],
    correctIndex: 1,
    explanation: {
      ru: '«Забывать уведомить хаускипинг об изменении времени выезда» — отдельная ошибка из списка урока: иначе горничная постучит в 410-й в обычное время. Депозит и письменное разрешение менеджера урок не требует, а хранение багажа — альтернатива на случай отказа, а не шаг после согласия.',
      uz: '«Chiqish vaqti o\'zgarishi haqida xaus-kipingga xabar berishni unutish» — dars ro\'yxatidagi alohida xato: aks holda xonaki xodim 410 ni odatiy vaqtda taqillatadi. Dars depozit yoki menejerning yozma ruxsatini talab qilmaydi, yuk saqlash esa rozilikdan keyingi qadam emas, rad javobiga muqobil.',
      en: '"Forgetting to notify housekeeping of the changed check-out time" is a separate mistake in the lesson\'s list — otherwise a housekeeper will knock on 410 at the usual time. The lesson requires no deposit or written manager approval, and luggage storage is the alternative to a refusal, not a step after a yes.',
    },
  },

  // early-checkin
  {
    id: 'quiz-early-checkin-1',
    moduleSlug: 'early-checkin',
    question: {
      ru: '07:30. Гость после ночного рейса: «Можно заселиться пораньше?» PMS вы ещё не открывали; коллега говорит, что по будням номера обычно готовы к 11:00. Какой ПЕРВЫЙ ответ соответствует уроку?',
      uz: 'Soat 07:30. Tungi parvozdan kelgan mehmon: «Ertaroq joylashsam bo\'ladimi?» PMS ni hali ochmagansiz; hamkasbingiz ish kunlari xonalar odatda 11:00 ga tayyor bo\'lishini aytadi. Darsga ko\'ra BIRINCHI javob qaysi?',
      en: '07:30. A guest off an overnight flight asks: "Can I check in early?" You have not opened the PMS yet; a colleague says rooms are usually ready by 11:00 on weekdays. Which FIRST reply follows the lesson?',
    },
    options: [
      { ru: '«Постараемся — обычно номера готовы к 11:00, подойдите ближе к этому времени»', uz: '«Harakat qilamiz — xonalar odatda 11:00 ga tayyor bo\'ladi, o\'sha vaqtga yaqin keling»', en: '"We will try — rooms are usually ready by 11:00, so please come back around that time"' },
      { ru: '«Сейчас проверю статус вашего номера в системе и сразу скажу точное время или вариант»', uz: '«Hozir tizimda xonangiz holatini tekshirib, darhol aniq vaqt yoki variantni aytaman»', en: '"Let me check your room\'s status in the system now, and I will give you an exact time or option"' },
      { ru: '«Конечно — к 11:00 номер точно будет готов, я попрошу хаускипинг начать с вашего»', uz: '«Albatta — 11:00 ga xona albatta tayyor bo\'ladi, xaus-kipingdan siznikidan boshlashni so\'rayman»', en: '"Of course — your room will surely be ready by 11:00, I will ask housekeeping to start with it"' },
      { ru: '«Заезд по брони — с 14:00, раньше гарантировать не могу: до этого номер недоступен»', uz: '«Bron bo\'yicha kirish 14:00 dan, ertaroqni kafolatlay olmayman — ungacha xona mavjud emas»', en: '"Check-in per your booking is from 14:00; I cannot guarantee earlier — until then it is unavailable"' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Урок: проверьте реальный статус номера в системе в момент вопроса и дайте ясный ответ — конкретное время или честное «нет» с альтернативой. «Обычно к 11:00» без проверки — это и расплывчатое «постараемся», и обещание, которое может не сбыться; отказ без проверки и без альтернативы тоже ошибка.',
      uz: 'Dars: mehmon so\'ragan zahoti tizimda xonaning haqiqiy holatini tekshiring va aniq javob bering — aniq vaqt yoki muqobil bilan halol «yo\'q». Tekshirmasdan «odatda 11:00 ga» — ham noaniq «harakat qilamiz», ham bajarilmasligi mumkin bo\'lgan va\'da; tekshiruvsiz va muqobilsiz rad etish ham xato.',
      en: 'The lesson: check the actual room status in the system the moment the guest asks, then give a clear answer — a specific time or an honest "no" with an alternative. "Usually by 11:00" without checking is both the vague "we will try" and a promise that may not hold; refusing without checking or an alternative is also a mistake.',
    },
  },
  {
    id: 'quiz-early-checkin-2',
    moduleSlug: 'early-checkin',
    question: {
      ru: '09:00. Пара после ночного рейса. В PMS их номер — «освобождён, не убран», хаускипинг называет готовность к 13:00. Какой ответ соответствует образцу из урока?',
      uz: 'Soat 09:00. Tungi parvozdan kelgan er-xotin. PMS da xonasi — «bo\'shatilgan, tozalanmagan», xaus-kiping 13:00 ga tayyor bo\'lishini aytadi. Qaysi javob dars namunasiga mos?',
      en: '09:00. A couple off an overnight flight. In the PMS their room is "vacant dirty"; housekeeping says it will be ready by 13:00. Which reply matches the lesson\'s model?',
    },
    options: [
      { ru: '«Номер будет готов после обеда — подходите к стойке, и мы сразу выдадим вам ключ»', uz: '«Xona tushlikdan keyin tayyor bo\'ladi — stoykaga keling, kalitni darhol beramiz»', en: '"The room will be ready after lunch — come to the desk and we will give you the key"' },
      { ru: '«Номер будет готов к 13:00 — подойдите, пожалуйста, к стойке в 13:00 за ключом»', uz: '«Xonangiz 13:00 ga tayyor bo\'ladi — iltimos, 13:00 da kalit uchun stoykaga keling»', en: '"Your room will be ready by 13:00 — please come to the desk at 13:00 for the key"' },
      { ru: '«Номер будет готов к 10:00 самое позднее — попрошу хаускипинг убрать его первым»', uz: '«Xonangiz eng kechi 10:00 ga tayyor bo\'ladi — xaus-kipingdan birinchi tozalashni so\'rayman»', en: '"Your room will be ready by 10:00 at the latest — I will ask housekeeping to do it first"' },
      { ru: '«Номер будет готов около 13:00, и я позвоню вам, как только он освободится»', uz: '«Xonangiz taxminan 13:00 ga tayyor bo\'ladi, bo\'shashi bilan sizga qo\'ng\'iroq qilaman»', en: '"Your room should be ready around 13:00, and I will call you the moment it is available"' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Образец урока: «Номер будет готов около 13:00, и я позвоню вам, как только он освободится» — конкретное время плюс звонок. «После обеда» — расплывчато, «подойдите в 13:00» перекладывает контроль на гостя (урок называет ошибкой забыть позвонить), а «к 10:00» противоречит оценке хаускипинга.',
      uz: 'Dars namunasi: «Xonangiz taxminan 13:00 ga tayyor bo\'ladi, bo\'shashi bilan sizga qo\'ng\'iroq qilaman» — aniq vaqt va qo\'ng\'iroq. «Tushlikdan keyin» — noaniq, «13:00 da keling» nazoratni mehmonga yuklaydi (dars qo\'ng\'iroq qilishni unutishni xato deydi), «10:00 ga» esa xaus-kiping bahosiga zid.',
      en: 'The lesson\'s model: "Your room should be ready around 13:00, and I will call you the moment it is available" — a specific time plus a call. "After lunch" is vague, "come at 13:00" shifts the follow-up onto the guest (the lesson lists forgetting to call as a mistake), and "by 10:00" contradicts housekeeping\'s estimate.',
    },
  },
  {
    id: 'quiz-early-checkin-3',
    moduleSlug: 'early-checkin',
    question: {
      ru: 'В 09:00 вы пообещали гостям номер «около 12:00, я позвоню». Они ждут в лобби-кафе. В 11:30 хаускипинг сообщает: в номере сломан кондиционер, ремонт продлится до 14:00. Что делать по уроку?',
      uz: 'Soat 09:00 da mehmonlarga xonani «taxminan 12:00 da, qo\'ng\'iroq qilaman» deb va\'da qildingiz. Ular lobbi-kafeda kutishyapti. 11:30 da xaus-kiping konditsioner buzilganini, ta\'mir 14:00 gacha davom etishini aytadi. Dars nimani talab qiladi?',
      en: 'At 09:00 you promised the guests their room "around 12:00, I will call you". They are waiting in the lobby café. At 11:30 housekeeping reports a broken air conditioner; repairs will take until 14:00. What does the lesson require?',
    },
    options: [
      { ru: 'Сразу подойти к гостям, извиниться и назвать новое конкретное время — около 14:00', uz: 'Darhol mehmonlar oldiga borib, uzr so\'rash va yangi aniq vaqtni — taxminan 14:00 ni aytish', en: 'Go to the guests now, apologise and give them the new specific time — around 14:00' },
      { ru: 'Дождаться 12:00 и объяснить задержку, если гости сами подойдут к стойке', uz: '12:00 ni kutib, mehmonlar o\'zlari stoykaga kelsa, kechikishni tushuntirish', en: 'Wait until 12:00 and explain the delay if the guests come to the desk themselves' },
      { ru: 'Позвонить гостям в 14:00, когда номер будет готов, чтобы не расстраивать их раньше', uz: 'Mehmonlarni oldinroq xafa qilmaslik uchun xona tayyor bo\'lganda, 14:00 da qo\'ng\'iroq qilish', en: 'Call the guests at 14:00 when the room is ready, so as not to upset them any earlier' },
      { ru: 'Выдать номер в 12:00, как обещали, и отправить мастера чинить кондиционер при гостях', uz: 'Va\'da qilinganidek 12:00 da xonani berib, ustani mehmonlar borida konditsionerni tuzatishga yuborish', en: 'Give them the room at 12:00 as promised and send the engineer in to fix the unit while they rest' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Золотое правило урока: держите гостя в курсе, если что-то меняется, и называйте конкретное время. Молчание до 12:00 или до 14:00 превращает ваше обещание в ложную надежду, а выдать номер с неисправным кондиционером — значит заселить гостей в неготовый номер.',
      uz: 'Darsning oltin qoidasi: biror narsa o\'zgarsa, mehmonni xabardor qiling va aniq vaqt ayting. 12:00 yoki 14:00 gacha jim turish va\'dangizni soxta umidga aylantiradi, konditsioneri buzuq xonani berish esa mehmonlarni tayyor bo\'lmagan xonaga joylashtirish demakdir.',
      en: 'The lesson\'s golden rule: keep the guest updated if anything changes, and give a specific time. Staying silent until 12:00 or 14:00 turns your promise into false hope, and handing over a room with a broken air conditioner means checking the guests into a room that is not ready.',
    },
  },
  {
    id: 'quiz-early-checkin-4',
    moduleSlug: 'early-checkin',
    question: {
      ru: 'В 09:00 вы сказали гостю: «Около 13:00, я позвоню». Он ответил: «Хорошо, я и так загляну около 13:00» — и ушёл гулять. В 11:40 хаускипинг отмечает номер готовым. Что делать по уроку?',
      uz: 'Soat 09:00 da mehmonga: «Taxminan 13:00 da, qo\'ng\'iroq qilaman» dedingiz. U: «Yaxshi, baribir 13:00 atrofida kelaman» deb sayrga ketdi. 11:40 da xaus-kiping xonani tayyor deb belgiladi. Dars nimani talab qiladi?',
      en: 'At 09:00 you told a guest: "Around 13:00, I will call you." He replied: "Fine, I will drop by around 13:00 anyway" and went out. At 11:40 housekeeping marks the room ready. What does the lesson require?',
    },
    options: [
      { ru: 'Держать ключ готовым на стойке и выдать его, когда гость вернётся около 13:00', uz: 'Kalitni stoykada tayyor tutib, mehmon 13:00 atrofida qaytganda unga berish', en: 'Keep the key ready at the desk and hand it over when the guest is back around 13:00' },
      { ru: 'Попросить консьержа передать гостю новость, если тот зайдёт в лобби', uz: 'Mehmon lobbiga kirib qolsa, yangilikni yetkazishni konsyerjdan so\'rash', en: 'Ask the concierge to pass on the news if the guest happens to walk into the lobby' },
      { ru: 'Сразу позвонить гостю и сказать, что номер готов и багаж можно поднять', uz: 'Darhol qo\'ng\'iroq qilib, xona tayyorligini va yuk chiqarilishini aytish', en: 'Call the guest right away to say the room is ready and his bags can be taken up' },
      { ru: 'Дождаться обещанных 13:00 и тогда отправить гостю сообщение в WhatsApp', uz: 'Va\'da qilingan 13:00 ni kutib, keyin mehmonga WhatsApp orqali xabar yuborish', en: 'Wait for the promised 13:00 and only then send the guest a WhatsApp message' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Урок прямо называет ошибкой «забывать перезвонить гостю, как только номер готов» — даже если он собирался вернуться сам: звонок в 11:40 дарит уставшему гостю больше часа отдыха. Ждать 13:00 или случайной встречи в лобби — значит не выполнить обещание позвонить.',
      uz: 'Dars «xona tayyor bo\'lishi bilan mehmonga qo\'ng\'iroq qilishni unutish»ni to\'g\'ridan-to\'g\'ri xato deydi — u o\'zi qaytmoqchi bo\'lsa ham: 11:40 dagi qo\'ng\'iroq charchagan mehmonga bir soatdan ko\'proq dam beradi. 13:00 ni yoki lobbidagi tasodifiy uchrashuvni kutish — qo\'ng\'iroq qilish va\'dasini bajarmaslikdir.',
      en: 'The lesson explicitly lists "forgetting to call the guest as soon as the room is ready" as a mistake — even if he planned to come back on his own: a call at 11:40 gives a tired guest over an hour of rest. Waiting for 13:00 or a chance meeting in the lobby means breaking your promise to call.',
    },
  },

  // complaints
  {
    id: 'quiz-complaints-1',
    moduleSlug: 'complaints',
    question: {
      ru: '23:40. Гость из 507 звонит: соседний номер шумит уже час, он не может уснуть. Какой ответ полностью соответствует образцу урока?',
      uz: 'Soat 23:40. 507-xona mehmoni qo\'ng\'iroq qiladi: qo\'shni xona bir soatdan beri shovqin qilyapti, u uxlay olmayapti. Qaysi javob dars namunasiga to\'liq mos?',
      en: '23:40. The guest in 507 calls: the room next door has been loud for an hour and he cannot sleep. Which reply fully matches the lesson\'s model?',
    },
    options: [
      { ru: '«Простите за беспокойство, сейчас отправлю сотрудника; если шум не стихнет — позвоните нам»', uz: '«Bezovtalik uchun uzr, hozir xodim yuboraman; shovqin tinmasa, bizga qo\'ng\'iroq qiling»', en: '"Sorry for the disturbance, I will send someone now; if the noise continues, please call us"' },
      { ru: '«Простите за беспокойство, я сейчас позвоню соседям и попрошу их вести себя тише»', uz: '«Bezovtalik uchun uzr, hozir qo\'shni xonaga qo\'ng\'iroq qilib, tinchroq bo\'lishni so\'rayman»', en: '"Sorry for the disturbance, I will phone the room next door now and ask them to keep it down"' },
      { ru: '«Простите за беспокойство, сейчас отправлю сотрудника, а утром перезвоню узнать, как вы спали»', uz: '«Bezovtalik uchun uzr, hozir xodim yuboraman, ertalab qanday uxlaganingizni so\'rab qo\'ng\'iroq qilaman»', en: '"Sorry for the disturbance, I will send someone now and call you in the morning to ask how you slept"' },
      { ru: '«Простите за беспокойство, сейчас отправлю сотрудника и перезвоню вам через 10 минут»', uz: '«Bezovtalik uchun uzr, hozir xodim yuboraman va 10 daqiqadan keyin sizga qo\'ng\'iroq qilaman»', en: '"Sorry for the disturbance, I will send someone now and call you back in 10 minutes to check"' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Образец урока: немедленно отправить сотрудника и перезвонить через 10 минут, чтобы убедиться, что всё в порядке, — обещанный звонок превращает жалобу в доказательство надёжности. «Позвоните нам сами» перекладывает контроль на гостя, а звонок утром уже не поможет ему уснуть.',
      uz: 'Dars namunasi: darhol xodim yuborish va hammasi joyida ekaniga ishonch hosil qilish uchun 10 daqiqadan keyin qayta qo\'ng\'iroq qilish — va\'da qilingan qo\'ng\'iroq shikoyatni ishonchlilik isbotiga aylantiradi. «O\'zingiz qo\'ng\'iroq qiling» nazoratni mehmonga yuklaydi, ertalabki qo\'ng\'iroq esa uxlashga yordam bermaydi.',
      en: 'The lesson\'s model: send someone right away and call back in 10 minutes to make sure everything is fine — the promised callback turns a complaint into proof of reliability. "Call us yourself" shifts the follow-up onto the guest, and a morning call no longer helps him sleep.',
    },
  },
  {
    id: 'quiz-complaints-2',
    moduleSlug: 'complaints',
    question: {
      ru: '20:10. Гость: «Номер грязный, верните мне все деньги!» Возвраты одобряет только менеджер; свободные убранные номера той же категории есть. Какое ПЕРВОЕ предложение соответствует уроку?',
      uz: 'Soat 20:10. Mehmon: «Xona iflos, pulimni to\'liq qaytaring!» Pul qaytarishni faqat menejer tasdiqlaydi; o\'sha toifadagi tozalangan bo\'sh xonalar bor. Darsga ko\'ra BIRINCHI taklif qaysi?',
      en: '20:10. A guest: "The room is dirty, I want all my money back!" Only the manager approves refunds; clean rooms of the same category are available. Which FIRST offer follows the lesson?',
    },
    options: [
      { ru: 'Извиниться, сразу переселить в убранный номер, затем обсудить компенсацию с менеджером', uz: 'Uzr so\'rab, darhol tozalangan xonaga ko\'chirish, keyin kompensatsiyani menejer bilan hal qilish', en: 'Apologise, move him to a freshly prepared room now, then discuss compensation with the manager' },
      { ru: 'Извиниться и объяснить, что возвраты решает менеджер, — он свяжется с гостем завтра утром', uz: 'Uzr so\'rab, pul qaytarishni menejer hal qilishini tushuntirish — u mehmon bilan ertaga bog\'lanadi', en: 'Apologise and explain that refunds are the manager\'s call — he will contact the guest tomorrow' },
      { ru: 'Извиниться и сразу пообещать полный возврат за ночь, раз номер действительно не убран', uz: 'Uzr so\'rab, xona haqiqatan tozalanmagani uchun kecha puli to\'liq qaytishini darhol va\'da qilish', en: 'Apologise and promise a full refund for the night at once, since the room really was not cleaned' },
      { ru: 'Извиниться, вызвать горничную на повторную уборку и пояснить, что возвраты не предусмотрены', uz: 'Uzr so\'rab, xonani qayta tozalashga xodim chaqirish va pul qaytarish ko\'zda tutilmaganini aytish', en: 'Apologise, send housekeeping to re-clean the room and explain that refunds are not hotel policy' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Урок: «нет» никогда не должно быть первым словом — сначала немедленное действие (переселение в подготовленный номер), а денежный вопрос решается через менеджера. Обещать полный возврат без полномочий — обещание, которое нельзя выполнить; «менеджер решит завтра» — отговорка без решения.',
      uz: 'Dars: «yo\'q» hech qachon birinchi so\'z bo\'lmasligi kerak — avval darhol harakat (tayyorlangan xonaga ko\'chirish), pul masalasi esa menejer orqali hal qilinadi. Vakolatsiz to\'liq qaytarishni va\'da qilish — bajarib bo\'lmaydigan va\'da; «menejer ertaga hal qiladi» — yechimsiz bahona.',
      en: 'The lesson: never let "no" be your first word — first take immediate action (a freshly prepared room), and route the money question through the manager. Promising a full refund without authority is a promise you cannot keep; "the manager will decide tomorrow" is a brush-off with no solution.',
    },
  },
  {
    id: 'quiz-complaints-3',
    moduleSlug: 'complaints',
    question: {
      ru: '22:00. У гостя подтверждённая бронь, но из-за овербукинга свободных номеров нет. Какое предложение в точности соответствует образцу урока?',
      uz: 'Soat 22:00. Mehmonning tasdiqlangan broni bor, lekin overbuking sababli bo\'sh xona yo\'q. Qaysi taklif dars namunasiga aynan mos?',
      en: '22:00. A guest has a confirmed reservation, but because of overbooking no rooms are left. Which offer exactly matches the lesson\'s model?',
    },
    options: [
      { ru: 'Номер в партнёрском отеле рядом; такси гость оплачивает сам, а депозит за ночь мы вернём', uz: 'Yaqindagi hamkor mehmonxonada xona; taksini mehmon o\'zi to\'laydi, kecha depozitini qaytaramiz', en: 'A room at a nearby partner hotel; the guest pays for the taxi, and we refund the night\'s deposit' },
      { ru: 'Равный или лучший номер в отеле-партнёре, оплаченное такси и бесплатная первая ночь у нас', uz: 'Hamkor mehmonxonada teng yoki yaxshiroq xona, to\'langan taksi va bizda bepul birinchi kecha', en: 'An equal or better room at a partner hotel, a paid taxi, and a free first night with us' },
      { ru: 'Ожидание в лаунже с напитком до ночного аудита — вдруг кто-то не заедет и номер освободится', uz: 'Tungi auditgacha launjda ichimlik bilan kutish — balki kimdir kelmay, xona bo\'shab qolar', en: 'A drink in the lounge until the night audit, in case a no-show frees up a room for the guest' },
      { ru: 'Номер в партнёрском отеле рядом и скидка 10 % на следующее бронирование напрямую у нас', uz: 'Yaqindagi hamkor mehmonxonada xona va keyingi to\'g\'ridan-to\'g\'ri bronga 10 % chegirma', en: 'A room at a nearby partner hotel and a 10% discount on the next booking made directly with us' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Образец урока при овербукинге — три элемента: номер того же или более высокого класса в партнёрском отеле рядом, оплаченный транспорт и первая ночь у нас бесплатно как компенсация. В остальных вариантах нет хотя бы одного элемента, а «ждать аудита» — обещание, которое может не сбыться.',
      uz: 'Darsdagi overbuking namunasi uch qismdan iborat: yaqindagi hamkor mehmonxonada shu yoki yuqoriroq toifadagi xona, to\'langan transport va kompensatsiya sifatida bizda birinchi kecha bepul. Boshqa variantlarda kamida bitta qism yo\'q, «auditni kutish» esa bajarilmasligi mumkin bo\'lgan va\'da.',
      en: 'The lesson\'s overbooking model has three elements: an equal or upgraded room at a nearby partner hotel, paid transport, and the first night with us free as compensation. Every other option misses at least one element, and "wait for the audit" is a promise that may not come true.',
    },
  },
  {
    id: 'quiz-complaints-4',
    moduleSlug: 'complaints',
    question: {
      ru: '11:50, у стойки очередь из четырёх человек. Карта гостя при выезде дважды отклонена. Гость: «Странно, она только что работала в другом месте». Какая реакция соответствует уроку?',
      uz: 'Soat 11:50, stoykada to\'rt kishilik navbat. Chiqayotgan mehmonning kartasi ikki marta rad etildi. Mehmon: «Qiziq, hozirgina boshqa joyda ishlagan edi». Qaysi munosabat darsga mos?',
      en: '11:50, four people are queuing at the desk. A departing guest\'s card is declined twice. The guest: "Strange, it just worked somewhere else." Which reaction follows the lesson?',
    },
    options: [
      { ru: 'Сказать, что карта не проходит по вине банка, и попросить гостя сначала позвонить в свой банк', uz: 'Karta bank sababli o\'tmayotganini aytib, mehmondan avval bankiga qo\'ng\'iroq qilishni so\'rash', en: 'Say the card fails because of his bank and ask the guest to phone the bank first' },
      { ru: 'Громко уточнить, есть ли другая карта, чтобы очередь видела причину задержки', uz: 'Navbat kechikish sababini ko\'rishi uchun boshqa karta bormi, deb baland ovozda so\'rash', en: 'Ask loudly whether he has another card, so the queue can see the reason for the delay' },
      { ru: 'Тихо, в стороне от очереди: «Такое бывает — попробуем другую карту, наличные или перевод?»', uz: 'Navbatdan chetda, sekin: «Bunday bo\'ladi — boshqa karta, naqd yoki o\'tkazmani sinaymizmi?»', en: 'Quietly, away from the queue: "This happens — shall we try another card, cash or a transfer?"' },
      { ru: 'Провести ту же карту ещё два-три раза, ведь терминал часто сбоит с первых попыток', uz: 'Xuddi shu kartani yana ikki-uch marta o\'tkazish, terminal ko\'pincha birinchi urinishda xato qiladi', en: 'Run the same card two or three more times, as the terminal often fails on the first tries' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Урок: в финансовых вопросах никогда не намекайте на вину гостя и предлагайте альтернативы тихо, вдали от других гостей. «Это проблема вашего банка» — фраза из плохого примера, а громкий разговор при очереди — ошибка «решать конфликт публично».',
      uz: 'Dars: moliyaviy masalalarda hech qachon mehmon aybiga ishora qilmang va muqobillarni sekin, boshqa mehmonlardan chetda taklif qiling. «Bu bankingiz muammosi» — yomon namunadagi ibora, navbat oldida baland gaplashish esa «ziddiyatni hammaning ko\'z o\'ngida hal qilish» xatosi.',
      en: 'The lesson: never imply fault in financial matters, and offer alternatives quietly, away from other guests. "That is a problem with your bank" is the bad example\'s line, and a loud exchange in front of the queue is the "handling the conflict in public view" mistake.',
    },
  },

  // vip-guests
  {
    id: 'quiz-vip-guests-1',
    moduleSlug: 'vip-guests',
    question: {
      ru: 'Ваша смена начинается в 14:00. В списке заездов — три VIP-гостя, первый ожидается в 15:00. Когда и что, по уроку, нужно изучить?',
      uz: 'Smenangiz 14:00 da boshlanadi. Kelishlar ro\'yxatida uchta VIP-mehmon, birinchisi 15:00 da kutilmoqda. Darsga ko\'ra nimani va qachon o\'rganish kerak?',
      en: 'Your shift starts at 14:00. The arrivals list shows three VIP guests, the first expected at 15:00. According to the lesson, what must you review, and when?',
    },
    options: [
      { ru: 'В начале смены — список VIP-заездов и профиль каждого гостя: предпочтения, аллергии, даты', uz: 'Smena boshida — VIP-kelishlar ro\'yxati va har bir profil: afzalliklar, allergiyalar, sanalar', en: 'At shift start — the VIP arrivals list and each profile: preferences, allergies, dates' },
      { ru: 'Когда гость подойдёт к стойке — открыть профиль в этот момент, чтобы детали были свежими', uz: 'Mehmon stoykaga kelganda — tafsilotlar yodda yangi turishi uchun profilni o\'sha paytda ochish', en: 'When each guest reaches the desk — open the profile then, so the details are fresh in mind' },
      { ru: 'Только профили знаменитостей и гостей с высоким чеком — постоянных встречают по стандарту', uz: 'Faqat mashhurlar va ko\'p sarflovchilar profillarini — doimiy mehmonlar standart kutib olinadi', en: 'Only the profiles of celebrities and big spenders — repeat guests get the standard welcome' },
      { ru: 'После заселения — спросить гостя о предпочтениях и сохранить их в профиль на следующий раз', uz: 'Joylashtirgandan keyin — mehmondan afzalliklarini so\'rab, keyingi safar uchun profilga saqlash', en: 'After check-in — ask the guest about preferences and save them to the profile for next time' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Урок: перед каждой сменой изучайте список ожидаемых VIP-заездов и их профили (предпочтения, аллергии, прошлые просьбы, особые даты) — импровизировать во время заселения уже поздно. VIP — это и постоянный гость, а не только знаменитость или гость с высоким чеком.',
      uz: 'Dars: har bir smenadan oldin kutilayotgan VIP-kelishlar ro\'yxati va profillarini (afzalliklar, allergiyalar, oldingi so\'rovlar, maxsus sanalar) o\'rganing — joylashtirish paytida improvizatsiya qilish kech. VIP — faqat mashhur yoki ko\'p sarflovchi emas, doimiy mehmon ham.',
      en: 'The lesson: before every shift review the expected VIP arrivals list and their profiles (preferences, allergies, past requests, special dates) — improvising during check-in is too late. A VIP is also a repeat guest, not only a celebrity or a big spender.',
    },
  },
  {
    id: 'quiz-vip-guests-2',
    moduleSlug: 'vip-guests',
    question: {
      ru: 'Постоянный гость г-н Ли: в профиле — любимый номер 812 на 8-м этаже. Сегодня 812-й занят, но на 8-м этаже свободен похожий номер; люкс, возможно, освободится вечером, если его гость не продлится. Какое приветствие соответствует уроку?',
      uz: 'Doimiy mehmon janob Li: profilida — 8-qavatdagi sevimli 812-xona. Bugun 812 band, lekin 8-qavatda o\'xshash xona bo\'sh; lyuks kechqurun, agar mehmoni uzaytirmasa, bo\'shashi mumkin. Qaysi kutib olish darsga mos?',
      en: 'Repeat guest Mr. Lee: his profile notes favourite room 812 on the 8th floor. Today 812 is occupied, but a similar 8th-floor room is free; a suite may free up tonight if its guest does not extend. Which welcome follows the lesson?',
    },
    options: [
      { ru: '«С возвращением, г-н Ли! 812-й сегодня занят, но вечером я точно переселю вас в люкс»', uz: '«Xush kelibsiz, janob Li! 812 bugun band, lekin kechqurun sizni albatta lyuksga ko\'chiraman»', en: '"Welcome back, Mr. Lee! 812 is taken today, but tonight I will surely move you to a suite"' },
      { ru: '«Добрый день! Ваш паспорт и карту, пожалуйста. Ваш номер — 415, завтрак с 7 до 10»', uz: '«Xayrli kun! Pasport va kartangizni bering, iltimos. Xonangiz — 415, nonushta 7 dan 10 gacha»', en: '"Good afternoon! Your passport and card, please. Your room is 415, breakfast is from 7 to 10"' },
      { ru: '«С возвращением! Какой номер вы хотели бы в этот раз — есть варианты на разных этажах»', uz: '«Xush kelibsiz! Bu safar qanday xona xohlaysiz — turli qavatlarda variantlarimiz bor»', en: '"Welcome back! Which room would you like this time — we have options on several floors"' },
      { ru: '«С возвращением, г-н Ли! 812-й сегодня занят, но готов похожий номер на 8-м этаже»', uz: '«Xush kelibsiz, janob Li! 812 bugun band — 8-qavatda shunga o\'xshash xona tayyorladim»', en: '"Welcome back, Mr. Lee! 812 is taken today — I have prepared a similar room on the 8th floor"' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Урок: используйте историю предпочтений для приветствия, но не обещайте апгрейд, который невозможно гарантировать, — люкс освободится лишь «возможно». Честно сказать про 812-й и предложить похожий номер на любимом этаже — персонализация без ложного обещания; «паспорт и карту» и повторный вопрос о номере игнорируют профиль.',
      uz: 'Dars: kutib olishda afzalliklar tarixidan foydalaning, lekin kafolatlab bo\'lmaydigan apgreydni va\'da qilmang — lyuks faqat «balki» bo\'shaydi. 812 haqida halol aytish va sevimli qavatda o\'xshash xona taklif qilish — soxta va\'dasiz shaxsiylashtirish; «pasport va karta» hamda xonani qayta so\'rash profilni e\'tiborsiz qoldiradi.',
      en: 'The lesson: use the preference history for the welcome, but never promise an upgrade you cannot guarantee — the suite only "may" free up. Being honest about 812 and offering a similar room on his favourite floor is personalisation without a false promise; "passport and card" and asking again which room he wants ignore the profile.',
    },
  },
  {
    id: 'quiz-vip-guests-3',
    moduleSlug: 'vip-guests',
    question: {
      ru: '18:00, в лобби очередь из шести человек. Приезжает известный бизнесмен — VIP-гость отеля. Какой вариант приёма соответствует уроку?',
      uz: 'Soat 18:00, lobbida olti kishilik navbat. Mehmonxonaning VIP-mehmoni — taniqli tadbirkor keladi. Qaysi kutib olish usuli darsga mos?',
      en: '18:00, six people are queuing in the lobby. A well-known businessman — a VIP guest of the hotel — arrives. Which way of receiving him follows the lesson?',
    },
    options: [
      { ru: 'Громко объявить: «Наш VIP-гость!» — чтобы очередь поняла, почему его обслужат первым', uz: '«VIP-mehmonimiz!» deb baland salomlashish — navbat nega uni birinchi xizmat qilishlarini tushunsin', en: 'Greet him aloud as "our VIP guest", so the queue understands why he is being served first' },
      { ru: 'Тихо поприветствовать по имени и спокойно оформить у стойки или в отдельной зоне заселения', uz: 'Ismi bilan sekin salomlashib, rasmiylashtirishni stoykada yoki alohida zonada bajarish', en: 'Greet him quietly by name and check him in calmly at the desk or in a private check-in area' },
      { ru: 'Поставить его в общую очередь без исключений, а о его статусе сообщить менеджеру позже', uz: 'Uni istisnosiz umumiy navbatga qo\'yish, maqomi haqida esa menejerga keyinroq aytish', en: 'Put him in the general queue with no exceptions and tell the manager about his status later' },
      { ru: 'Выдать ему у входа бейдж «VIP», чтобы весь персонал узнавал его в общественных зонах', uz: 'Barcha xodimlar uni umumiy zonalarda tanishi uchun kirishda «VIP» beyjini berish', en: 'Give him a "VIP" badge at the entrance so all staff can recognise him in the public areas' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Урок: персонализация должна быть видна гостю, но невидима окружающим — никогда не объявляйте VIP-статус вслух при других гостях; детали обсуждают тихо у стойки или переводят гостя в отдельную зону заселения. Бейдж и громкое приветствие афишируют статус, а общая очередь — обезличенный приём.',
      uz: 'Dars: shaxsiylashtirish mehmonga ko\'rinishi, atrofdagilarga esa ko\'rinmasligi kerak — boshqa mehmonlar oldida VIP-maqomni hech qachon ovoz chiqarib aytmang; tafsilotlar stoykada sekin muhokama qilinadi yoki mehmon alohida joylashtirish zonasiga olib o\'tiladi. Beyj va baland salom maqomni oshkor qiladi, umumiy navbat esa shaxssiz qabul.',
      en: 'The lesson: personalisation must be visible to the guest but invisible to everyone around — never announce VIP status aloud in front of other guests; discuss details quietly at the desk or move the guest to a private check-in area. A badge and a loud greeting publicise the status, and the general queue is an impersonal welcome.',
    },
  },
  {
    id: 'quiz-vip-guests-4',
    moduleSlug: 'vip-guests',
    question: {
      ru: 'Завтра заезжает постоянная гостья. В профиле: день рождения приходится на день заезда, любит зелёный чай. Какой знак внимания ближе всего к совету урока?',
      uz: 'Ertaga doimiy mehmon ayol keladi. Profilida: tug\'ilgan kuni kelish kuniga to\'g\'ri keladi, ko\'k choyni yaxshi ko\'radi. Qaysi e\'tibor belgisi dars maslahatiga eng yaqin?',
      en: 'A repeat guest arrives tomorrow. Her profile: her birthday falls on the arrival day, and she loves green tea. Which gesture is closest to the lesson\'s advice?',
    },
    options: [
      { ru: 'Дорогое шампанское и большая корзина фруктов — дорогой подарок подчёркивает уровень отеля', uz: 'Qimmat shampan va katta meva savati — qimmat sovg\'a mehmonxona darajasini ko\'rsatadi', en: 'Expensive champagne and a large fruit basket — a costly gift shows the hotel\'s class' },
      { ru: 'Стандартное приветственное письмо от директора, одинаковое для всех гостей этого дня', uz: 'Direktorning o\'sha kuni keladigan barcha mehmonlar uchun bir xil standart xati', en: 'The standard welcome letter from the GM, the same for every guest arriving that day' },
      { ru: 'Написанная от руки поздравительная записка и зелёный чай в номере к её приезду', uz: 'Qo\'lda yozilgan tabrik xati va kelishiga xonada tayyor turgan ko\'k choy', en: 'A handwritten birthday note and green tea waiting in the room when she arrives' },
      { ru: 'Купон на скидку 10 % на следующее проживание, отправленный по e-mail после выезда', uz: 'Chiqib ketgach e-mail orqali yuboriladigan keyingi tashrifga 10 % chegirma kuponi', en: 'A 10% discount voucher for the next stay, sent by e-mail after she checks out' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Урок: маленькие личные детали — записка от руки, любимый напиток в номере, апгрейд при наличии — запоминаются дольше дорогих подарков, а особые даты из профиля и есть повод для них. Шампанское и корзина дороги, но безличны; одинаковое письмо и купон после выезда не используют профиль.',
      uz: 'Dars: kichik shaxsiy detallar — qo\'lda yozilgan xat, xonada sevimli ichimlik, imkon bo\'lsa apgreyd — qimmat sovg\'alardan ko\'ra uzoqroq esda qoladi, profildagi maxsus sanalar esa aynan shunga sabab. Shampan va savat qimmat, ammo shaxssiz; bir xil xat va chiqishdan keyingi kupon profildan foydalanmaydi.',
      en: 'The lesson: small personal details — a handwritten note, a favourite drink in the room, an upgrade when available — are remembered longer than expensive gifts, and special dates in the profile are exactly the occasion. Champagne and a basket are costly but impersonal; a standard letter and a post-stay voucher ignore the profile.',
    },
  },

  // foreign-guests
  {
    id: 'quiz-foreign-guests-1',
    moduleSlug: 'foreign-guests',
    question: {
      ru: 'Гость почти не говорит по-английски и жестами спрашивает, сколько стоит трансфер в аэропорт и как платить. Цена — 250 000 сум. Какой способ соответствует уроку?',
      uz: 'Ingliz tilida deyarli gapirmaydigan mehmon imo-ishora bilan aeroportga transfer narxi va qanday to\'lashni so\'raydi. Narxi — 250 000 so\'m. Qaysi usul darsga mos?',
      en: 'A guest who speaks almost no English asks with gestures how much the airport transfer costs and how to pay. The price is 250,000 UZS. Which approach follows the lesson?',
    },
    options: [
      { ru: 'Подробно объяснить цену и способы оплаты, повторяя громче, если гость не понял', uz: 'Narx va to\'lov usullarini batafsil tushuntirib, mehmon tushunmasa, balandroq takrorlash', en: 'Explain the price and payment options in detail, repeating louder if he looks puzzled' },
      { ru: 'С улыбкой ответить: «It\'s a steal — just settle up at the desk later, no sweat!»', uz: 'Jilmayib javob berish: «It\'s a steal — just settle up at the desk later, no sweat!»', en: 'Reply with a smile: "It\'s a steal — just settle up at the desk later, no sweat!"' },
      { ru: 'Написать «250 000 UZS» на листке, показать на терминал и спросить: «Card or cash?»', uz: 'Qog\'ozga «250 000 UZS» deb yozib, terminalni ko\'rsatish va «Card or cash?» deb so\'rash', en: 'Write "250,000 UZS" on paper, point to the card terminal and ask: "Card or cash?"' },
      { ru: 'Набрать полное объяснение в переводчике, отдать гостю телефон и ждать, пока он прочтёт', uz: 'Tarjimon ilovaga to\'liq tushuntirish yozib, telefonni mehmonga berish va o\'qishini kutish', en: 'Type a full explanation into a translation app, hand him the phone and wait while he reads' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Урок: короткие простые фразы, письменные цифры, жесты и наглядность работают лучше длинных объяснений; громкость не заменяет ясности. «It\'s a steal» и «no sweat» — идиомы и сленг, которые урок называет ошибкой, а переводчик — инструмент, а не замена живого общения.',
      uz: 'Dars: qisqa sodda iboralar, yozma raqamlar, imo-ishora va ko\'rgazmalilik uzun tushuntirishlardan yaxshiroq ishlaydi; ovoz balandligi aniqlik o\'rnini bosmaydi. «It\'s a steal» va «no sweat» — dars xato deb ataydigan idioma va sleng, tarjimon esa jonli muloqot o\'rnini bosuvchi emas, vosita.',
      en: 'The lesson: short simple phrases, written numbers, gestures and visual aids work better than long explanations; volume is no substitute for clarity. "It\'s a steal" and "no sweat" are idioms and slang the lesson calls a mistake, and a translation app is a tool, not a replacement for direct communication.',
    },
  },
  {
    id: 'quiz-foreign-guests-2',
    moduleSlug: 'foreign-guests',
    question: {
      ru: 'Гость на ломаном английском: «Sorry, my English not good. Room key, problem». За ним ждут ещё двое. Какая реакция соответствует образцу урока?',
      uz: 'Mehmon chala inglizchada: «Sorry, my English not good. Room key, problem». Uning ortida yana ikki kishi kutyapti. Qaysi munosabat dars namunasiga mos?',
      en: 'A guest in broken English: "Sorry, my English not good. Room key, problem." Two more guests are waiting behind him. Which reaction matches the lesson\'s model?',
    },
    options: [
      { ru: '«No worries. Key card not opening the door?» — уточнить через переводчик, дать новую карту', uz: '«No worries. Key card not opening the door?» — tarjimon orqali aniqlab, yangi kartani ko\'rsatish', en: '"No worries. Key card not opening the door?" — check via a translation app, give a new card' },
      { ru: 'Повторять «YOUR CARD — NO WORK?» всё громче и медленнее, пока гость наконец не кивнёт в ответ', uz: '«YOUR CARD — NO WORK?» iborasini mehmon bosh irg\'aguncha tobora balandroq va sekinroq takrorlash', en: 'Keep repeating "YOUR CARD — NO WORK?" louder and more slowly until the guest finally nods' },
      { ru: 'Дать гостю телефон с открытым переводчиком и обслуживать очередь, пока он печатает', uz: 'Mehmonga tarjimon ochilgan telefonni berib, u yozayotganda navbatdagilarga xizmat qilish', en: 'Give the guest a phone with the translator open and serve the queue while he types' },
      { ru: 'Подробно объяснить, что телефон размагничивает ключ-карту и как хранить их отдельно', uz: 'Telefon kalit-kartani magnitsizlantirishini va ularni qanday alohida saqlashni batafsil tushuntirish', en: 'Explain in detail that phones demagnetise key cards and how to keep the two apart' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Образец урока: «No worries at all. Is your key card not opening the door?» — короткая простая фраза, переводчик как помощь и новая карта. Повторять громче — ошибка из списка, отдать телефон и уйти к очереди — «полностью полагаться на переводчик», а длинное объяснение гость не поймёт.',
      uz: 'Dars namunasi: «No worries at all. Is your key card not opening the door?» — qisqa sodda ibora, yordamchi sifatida tarjimon va yangi karta. Balandroq takrorlash — ro\'yxatdagi xato, telefonni berib navbatga o\'tish — «tarjimonga to\'liq tayanish», uzun tushuntirishni esa mehmon tushunmaydi.',
      en: 'The lesson\'s model: "No worries at all. Is your key card not opening the door?" — a short simple phrase, a translation app as support and a new card. Repeating louder is a listed mistake, handing over the phone and turning to the queue is "relying entirely on the app", and a long explanation will not be understood.',
    },
  },
  {
    id: 'quiz-foreign-guests-3',
    moduleSlug: 'foreign-guests',
    question: {
      ru: 'Гость с базовым английским сообщает, что в номере не работает душ. Мастер придёт через 15 минут. Какая фраза соответствует уроку?',
      uz: 'Ingliz tilini boshlang\'ich darajada biladigan mehmon xonasida dush ishlamayotganini aytadi. Usta 15 daqiqada keladi. Qaysi ibora darsga mos?',
      en: 'A guest with basic English reports that the shower in his room is not working. The technician will come in 15 minutes. Which phrase follows the lesson?',
    },
    options: [
      { ru: '«No worries, it\'s a piece of cake — our guy will pop up in a jiffy»', uz: '«No worries, it\'s a piece of cake — our guy will pop up in a jiffy»', en: '"No worries, it\'s a piece of cake — our guy will pop up in a jiffy"' },
      { ru: '«Hang on, I\'ll get the ball rolling and have it sorted out ASAP»', uz: '«Hang on, I\'ll get the ball rolling and have it sorted out ASAP»', en: '"Hang on, I\'ll get the ball rolling and have it sorted out ASAP"' },
      { ru: '«Bear with me while I find out who can look into it for you»', uz: '«Bear with me while I find out who can look into it for you»', en: '"Bear with me while I find out who can look into it for you"' },
      { ru: '«A technician will come to your room in 15 minutes. Is that OK?»', uz: '«A technician will come to your room in 15 minutes. Is that OK?»', en: '"A technician will come to your room in 15 minutes. Is that OK?"' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Урок: с гостем, плохо владеющим языком, говорите короткими простыми фразами без сленга и идиом, а цифры называйте прямо. «Piece of cake», «in a jiffy», «get the ball rolling», «bear with me» звучат вежливо и дружелюбно, но это идиомы, которые урок прямо называет ошибкой.',
      uz: 'Dars: tilni yomon biladigan mehmon bilan sleng va idiomalarsiz qisqa sodda iboralarda gapiring, raqamlarni to\'g\'ridan-to\'g\'ri ayting. «Piece of cake», «in a jiffy», «get the ball rolling», «bear with me» muloyim va do\'stona eshitiladi, lekin bular dars to\'g\'ridan-to\'g\'ri xato deb ataydigan idiomalar.',
      en: 'The lesson: with a guest who has little of the language, use short simple phrases without slang or idioms, and state numbers plainly. "Piece of cake", "in a jiffy", "get the ball rolling" and "bear with me" sound polite and friendly, but they are idioms the lesson explicitly calls a mistake.',
    },
  },
  {
    id: 'quiz-foreign-guests-4',
    moduleSlug: 'foreign-guests',
    question: {
      ru: 'Семья иностранных гостей с трудом говорит по-английски и спрашивает: «Restaurant? Near?» Что урок прямо требует уточнить, прежде чем рекомендовать место?',
      uz: 'Chet ellik oila ingliz tilida qiynalib gapiradi va so\'raydi: «Restaurant? Near?» Dars joy tavsiya qilishdan oldin to\'g\'ridan-to\'g\'ri nimani aniqlashtirishni talab qiladi?',
      en: 'A family of foreign guests speaks English with difficulty and asks: "Restaurant? Near?" What does the lesson explicitly require you to clarify before recommending a place?',
    },
    options: [
      { ru: 'Бюджет семьи — чтобы не предложить им слишком дорогой для них ресторан', uz: 'Oila byudjetini — ularga juda qimmat restoran taklif qilmaslik uchun', en: 'The family\'s budget — so as not to suggest a restaurant that is too expensive' },
      { ru: 'Диетические потребности — нужна ли халяльная или вегетарианская еда', uz: 'Ovqatlanish ehtiyojlarini — halol yoki vegetarian taom kerakmi', en: 'Dietary needs — for example, whether they need halal or vegetarian food' },
      { ru: 'Предпочитаемую кухню — местную или привычную для гостей из их страны', uz: 'Afzal ko\'rgan oshxonasini — mahalliy yoki o\'z yurtidagi odatiy taomlar', en: 'Their preferred cuisine — local food or the food they are used to at home' },
      { ru: 'Готовы ли они идти пешком или им нужно заказать такси до ресторана', uz: 'Piyoda borishga tayyormi yoki restorangacha taksi chaqirish kerakmi', en: 'Whether they are ready to walk or need a taxi booked to the restaurant' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Урок прямо говорит: уточняйте диетические потребности (халяль, вегетарианское), а «игнорировать культурные и диетические особенности гостя» — ошибка из списка. Бюджет, кухня и транспорт уроком не названы; маршрут к выбранному месту потом удобнее показать на карте, а не объяснять словами.',
      uz: 'Dars to\'g\'ridan-to\'g\'ri aytadi: ovqatlanish ehtiyojlarini (halol, vegetarian) aniqlashtiring, «mehmonning madaniy va ovqatlanish xususiyatlarini e\'tiborsiz qoldirish» esa ro\'yxatdagi xato. Byudjet, oshxona va transport darsda tilga olinmagan; tanlangan joyga yo\'lni keyin so\'z bilan emas, xaritada ko\'rsatish qulay.',
      en: 'The lesson says it directly: clarify dietary needs (halal, vegetarian), and "ignoring a guest\'s cultural or dietary needs" is a listed mistake. Budget, cuisine and transport are not named by the lesson; the route to the chosen place is then best shown on a map rather than explained in words.',
    },
  },

  // lost-items
  {
    id: 'quiz-lost-items-1',
    moduleSlug: 'lost-items',
    question: {
      ru: '11:20, у стойки очередь из трёх гостей. Горничная Дилноза приносит золотое кольцо, найденное на полке в ванной 305-го. Какая запись в журнале, сделанная сразу, полная по уроку?',
      uz: 'Soat 11:20, stoykada uch mehmon navbatda. Xonaki xodim Dilnoza 305-xona hammomidagi tokchadan topilgan oltin uzukni olib keladi. Darhol kiritilgan qaysi jurnal yozuvi darsga ko\'ra to\'liq?',
      en: '11:20, three guests are queuing at the desk. Housekeeper Dilnoza brings a gold ring found on the bathroom shelf in 305. Which register entry, made right away, is complete per the lesson?',
    },
    options: [
      { ru: '«Кольцо, золотое — 305 — сдал хаускипинг», подробности — в конце смены', uz: '«Uzuk, oltin — 305 — xaus-kiping topshirdi», tafsilotlar — smena oxirida', en: '"Ring, gold — 305 — from housekeeping", details to follow at shift end' },
      { ru: '«Золотое кольцо; 305, полка в ванной; 11:20; нашла Дилноза (HK)»', uz: '«Oltin uzuk; 305, hammom tokchasi; 11:20; Dilnoza (HK) topdi»', en: '"Gold ring; 305, bathroom shelf; 11:20; found by Dilnoza (HK)"' },
      { ru: '«Кольцо; 305; 11:20; сообщить гостю, когда он позвонит о находке»', uz: '«Uzuk; 305; 11:20; mehmon qo\'ng\'iroq qilganda unga xabar berish»', en: '"Ring; 305; 11:20; tell the guest when he calls about the item"' },
      { ru: '«Золотое кольцо с камнем; оценочная стоимость; убрано в сейф № 2»', uz: '«Toshli oltin uzuk; taxminiy qiymati; 2-seyfga qo\'yildi»', en: '"Gold ring with a stone; estimated value; placed in safe no. 2"' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Урок: каждая находка сразу вносится в журнал — описание, точное место и время находки, кто нашёл, номер комнаты или зоны, — даже если у стойки очередь. В других записях не хватает места, времени или нашедшего, а «подробности в конце смены» — отложенная запись, которая часто не делается вовсе.',
      uz: 'Dars: har bir topilma darhol jurnalga kiritiladi — tavsif, topilgan aniq joy va vaqt, kim topgani, xona yoki zona raqami — stoykada navbat bo\'lsa ham. Boshqa yozuvlarda joy, vaqt yoki topgan kishi yo\'q, «tafsilotlar smena oxirida» esa ko\'pincha umuman qilinmaydigan kechiktirilgan yozuv.',
      en: 'The lesson: every found item is logged at once — description, exact location and time found, who found it, room or area number — even with a queue at the desk. The other entries lack the location, time or finder, and "details at shift end" is a delayed entry that often never happens.',
    },
  },
  {
    id: 'quiz-lost-items-2',
    moduleSlug: 'lost-items',
    question: {
      ru: 'Гостья звонит: забыла зарядку в 214-м, выехала вчера. Вы проверили журнал — пусто, связались с хаускипингом — в их отчёте нет, осмотрели 214-й — ничего. Какой проверки по уроку не хватает, прежде чем сказать «не найдено»?',
      uz: 'Mehmon ayol qo\'ng\'iroq qiladi: 214-xonada zaryadlovchini unutgan, kecha chiqqan. Jurnalni tekshirdingiz — bo\'sh, xaus-kiping bilan bog\'landingiz — hisobotida yo\'q, 214 ni ko\'rdingiz — hech narsa. «Topilmadi» deyishdan oldin darsga ko\'ra qaysi tekshiruv yetishmaydi?',
      en: 'A guest calls: she left a charger in 214 and checked out yesterday. You checked the register — empty, contacted housekeeping — not in their report, looked in 214 — nothing. Which check from the lesson is missing before you say "not found"?',
    },
    options: [
      { ru: 'Попросить гостью сначала прислать письменное заявление о пропаже по e-mail', uz: 'Mehmondan yo\'qolgan buyum haqida e-mail orqali yozma ariza so\'rash', en: 'First ask the guest to send in a written lost-item claim by e-mail' },
      { ru: 'Получить подпись дежурного менеджера под ответом «не найдено»', uz: '«Topilmadi» javobiga navbatchi menejerning imzosini olish', en: 'Get the duty manager to sign off the "not found" answer' },
      { ru: 'Просмотреть записи камер в коридоре в момент выезда гостьи', uz: 'Mehmon chiqqan paytdagi koridor kameralari yozuvlarini ko\'rish', en: 'Review the corridor CCTV footage from the time she checked out' },
      { ru: 'Проверить общие зоны — лобби, ресторан и другие места, где она была', uz: 'Umumiy zonalarni — lobbi, restoran va u bo\'lgan joylarni tekshirish', en: 'Check the common areas — lobby, restaurant, other places she used' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Урок перечисляет четыре проверки перед ответом «не найдено»: журнал, номер, общие зоны и связь с хаускипингом. Три уже сделаны — не хватает общих зон. Камеры, заявление по e-mail и подпись менеджера урок не требует; только после полного поиска можно честно сказать «пока не нашлось» и пообещать искать дальше.',
      uz: 'Dars «topilmadi» deyishdan oldin to\'rtta tekshiruvni sanaydi: jurnal, xona, umumiy zonalar va xaus-kiping bilan bog\'lanish. Uchtasi bajarilgan — umumiy zonalar qolgan. Kameralar, e-mail ariza va menejer imzosini dars talab qilmaydi; faqat to\'liq qidiruvdan keyin halol «hozircha topilmadi» deb, qidirishni davom ettirishni va\'da qilish mumkin.',
      en: 'The lesson lists four checks before saying "not found": the register, the room, the common areas and contacting housekeeping. Three are done — the common areas are missing. CCTV, an e-mailed claim and a manager\'s signature are not required by the lesson; only after a full search can you honestly say "not found yet" and promise to keep looking.',
    },
  },
  {
    id: 'quiz-lost-items-3',
    moduleSlug: 'lost-items',
    question: {
      ru: '11:20. В 305-м нашли дорогие часы; гость выехал в 11:00, находка уже записана в журнал. Что делать дальше по уроку?',
      uz: 'Soat 11:20. 305-xonada qimmat soat topildi; mehmon 11:00 da chiqib ketgan, topilma jurnalga yozilgan. Darsga ko\'ra keyin nima qilinadi?',
      en: '11:20. An expensive watch was found in 305; the guest checked out at 11:00, and the item is already logged. What does the lesson say to do next?',
    },
    options: [
      { ru: 'Самим связаться с гостем по контактам из брони и предложить забрать или выслать часы', uz: 'Brondagi kontakt orqali o\'zingiz bog\'lanib, olib ketish yoki yuborishni taklif qilish', en: 'Contact the guest yourself via the reservation details and offer pickup or shipping' },
      { ru: 'Убрать часы в сейф и ждать звонка гостя — звонить первыми навязчиво и неделикатно', uz: 'Soatni seyfga qo\'yib, mehmon qo\'ng\'irog\'ini kutish — birinchi qo\'ng\'iroq qilish noo\'rin', en: 'Put the watch in the safe and wait for the guest to call — calling first seems intrusive' },
      { ru: 'Опубликовать фото часов в соцсетях отеля, чтобы владелец откликнулся быстрее', uz: 'Egasi tezroq javob berishi uchun soat suratini mehmonxona ijtimoiy tarmoqlariga joylash', en: 'Post a photo of the watch on the hotel\'s social media so the owner responds faster' },
      { ru: 'Передать часы менеджеру — через 30 дней он сам решит, нужно ли связываться с гостем', uz: 'Soatni menejerga topshirish — u 30 kundan keyin mehmon bilan bog\'lanish kerakmi, hal qiladi', en: 'Hand the watch to the manager, who will decide in 30 days whether to contact the guest' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Золотое правило урока: если ценная вещь найдена после отъезда, не ждите звонка — свяжитесь с гостем первыми по контактам из брони. Ожидание звонка — ошибка из списка («не связываться проактивно»), а публикация фото в соцсетях раскрывает данные о госте посторонним.',
      uz: 'Darsning oltin qoidasi: qimmatbaho buyum ketgandan keyin topilsa, qo\'ng\'iroqni kutmang — brondagi kontaktlar orqali mehmon bilan birinchi bo\'lib bog\'laning. Qo\'ng\'iroqni kutish — ro\'yxatdagi xato («faol bog\'lanmaslik»), ijtimoiy tarmoqqa surat joylash esa mehmon ma\'lumotlarini begonalarga oshkor qiladi.',
      en: 'The lesson\'s golden rule: if a valuable item is found after departure, do not wait for a call — contact the guest first using the reservation details. Waiting for a call is a listed mistake ("not proactively contacting the guest"), and posting a photo on social media exposes guest information to strangers.',
    },
  },
  {
    id: 'quiz-lost-items-4',
    moduleSlug: 'lost-items',
    question: {
      ru: 'Гость из Самарканда просит отправить ему забытую зарядку. Курьер стоит 60 000 сум, доставка — 2 дня. Какой ответ соответствует уроку?',
      uz: 'Samarqandlik mehmon unutib qoldirgan zaryadlovchisini yuborishni so\'raydi. Kuryer 60 000 so\'m, yetkazish — 2 kun. Qaysi javob darsga mos?',
      en: 'A guest who lives in Samarkand asks you to send him the charger he left behind. A courier costs 60,000 UZS and takes 2 days. Which reply follows the lesson?',
    },
    options: [
      { ru: '«Отправим сегодня за счёт отеля — это наш небольшой жест внимания»', uz: '«Bugun mehmonxona hisobidan yuboramiz — bu bizdan kichik e\'tibor belgisi»', en: '"We will send it today at the hotel\'s expense — a small gesture from us"' },
      { ru: '«Отправим сегодня курьером, а стоимость потом спишем с вашей карты»', uz: '«Bugun kuryer bilan yuboramiz, narxini esa keyin kartangizdan yechamiz»', en: '"We will send it by courier today and charge your card for it afterwards"' },
      { ru: '«Курьером — 60 000 сум за ваш счёт, срок 2 дня. Оформить отправку?»', uz: '«Kuryer orqali — 60 000 so\'m sizning hisobingizdan, 2 kun. Yuboraymi?»', en: '"By courier it is 60,000 UZS at your expense, 2 days. Shall I arrange it?"' },
      { ru: '«Отправку мы не делаем — заберите вещь лично или через знакомых»', uz: '«Biz yubormaymiz — buyumni shaxsan yoki tanishlaringiz orqali oling»', en: '"We do not ship items — please collect it in person or through a friend"' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Урок: предложите отправку курьером или почтой за счёт гостя, заранее и чётко назвав стоимость и срок доставки. Списать деньги «потом» — ошибка «не уточнять стоимость пересылки», отказ от отправки нарушает правило организовать её, а бесплатная отправка противоречит стандарту урока.',
      uz: 'Dars: kuryer yoki pochta orqali mehmon hisobidan yuborishni taklif qiling, narx va yetkazish muddatini oldindan aniq ayting. «Keyin» yechib olish — «pochta narxini aniqlashtirmaslik» xatosi, yuborishdan bosh tortish uni tashkil qilish qoidasini buzadi, bepul yuborish esa dars standartiga zid.',
      en: 'The lesson: offer shipping by courier or post at the guest\'s expense, stating the cost and delivery time clearly upfront. Charging "afterwards" is the "not clarifying shipping cost" mistake, refusing to ship breaks the rule to arrange it, and free shipping contradicts the lesson\'s standard.',
    },
  },

  // emergency-procedures
  {
    id: 'quiz-emergency-procedures-1',
    moduleSlug: 'emergency-procedures',
    question: {
      ru: '14:00. Пожилой гость в лобби побледнел и опустился на диван; он в сознании. Вы у стойки вместе с коллегой. Какая последовательность соответствует уроку?',
      uz: 'Soat 14:00. Lobbidagi keksa mehmonning rangi oqarib, divanga cho\'kdi; u hushida. Siz stoykada hamkasbingiz bilan birgasiz. Qaysi ketma-ketlik darsga mos?',
      en: '14:00. An elderly guest in the lobby turns pale and sinks onto a sofa; he is conscious. You are at the desk with a colleague. Which sequence follows the lesson?',
    },
    options: [
      { ru: 'Принести аптечку, помочь самим и вызвать скорую, если через 10 минут не станет лучше', uz: 'Birinchi yordam qutisini olib kelib, o\'zingiz yordam berish, 10 daqiqada yaxshilanmasa, tez yordam chaqirish', en: 'Bring the first-aid kit, help him yourselves, and call an ambulance if he is no better in 10 minutes' },
      { ru: 'Вызвать скорую и вернуться к стойке, попросив другого гостя побыть с пострадавшим', uz: 'Tez yordam chaqirib, stoykaga qaytish va boshqa mehmondan uning yonida turishni so\'rash', en: 'Call an ambulance and go back to the desk, asking another guest to stay with him meanwhile' },
      { ru: 'Сначала позвонить дежурному менеджеру — пусть он решит, действительно ли нужна скорая', uz: 'Avval navbatchi menejerga qo\'ng\'iroq qilish — tez yordam haqiqatan kerakmi, u hal qilsin', en: 'First call the duty manager and let him decide whether an ambulance is really needed' },
      { ru: 'Сразу вызвать скорую, принести аптечку и оставаться с гостем до приезда медиков', uz: 'Darhol tez yordam chaqirish, birinchi yordam qutisini olib kelish va shifokorlar kelguncha yonida qolish', en: 'Call an ambulance at once, bring the first-aid kit and stay with him until the medics arrive' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Урок: при медицинской ситуации сразу вызовите скорую, принесите аптечку и оставайтесь с гостем до приезда медиков. Ждать 10 минут или решения менеджера — потеря времени, а оставить пострадавшего на постороннего — ошибка «оставлять гостя одного после вызова скорой»; коллега при этом остаётся у стойки.',
      uz: 'Dars: tibbiy vaziyatda darhol tez yordam chaqiring, birinchi yordam qutisini olib keling va shifokorlar kelguncha mehmon yonida qoling. 10 daqiqa yoki menejer qarorini kutish — vaqt yo\'qotish, jabrlanganni begona odamga qoldirish esa «tez yordam chaqirgandan keyin mehmonni yolg\'iz qoldirish» xatosi; bu paytda hamkasbingiz stoykada qoladi.',
      en: 'The lesson: in a medical situation call an ambulance immediately, bring the first-aid kit and stay with the guest until medics arrive. Waiting 10 minutes or for the manager\'s decision loses time, and leaving him with a stranger is the "leaving the guest alone after calling an ambulance" mistake; meanwhile your colleague keeps the desk staffed.',
    },
  },
  {
    id: 'quiz-emergency-procedures-2',
    moduleSlug: 'emergency-procedures',
    question: {
      ru: 'Скорая вызвана, вы рядом с гостем, которому стало плохо в номере; медики будут через 8 минут. Что по уроку нужно делать, пока они едут?',
      uz: 'Tez yordam chaqirildi, siz xonasida o\'zini yomon his qilgan mehmon yonidasiz; shifokorlar 8 daqiqada keladi. Darsga ko\'ra ular kelguncha nima qilish kerak?',
      en: 'The ambulance has been called, and you are with a guest who felt unwell in his room; the medics will arrive in 8 minutes. What does the lesson say to do while they are on their way?',
    },
    options: [
      { ru: 'Спокойно говорить с гостем, узнать об аллергиях и хронических болезнях, сообщить медикам', uz: 'Xotirjam gaplashib, allergiya va surunkali kasalliklarini so\'rash, buni shifokorlarga aytish', en: 'Talk to him calmly, ask about allergies or chronic conditions and pass this on to the medics' },
      { ru: 'Дать ему обезболивающее из аптечки, чтобы до приезда медиков ему стало легче', uz: 'Shifokorlar kelguncha yengil bo\'lishi uchun unga qutidan og\'riq qoldiruvchi dori berish', en: 'Give him a painkiller from the first-aid kit so that he feels better before the medics arrive' },
      { ru: 'Молчать, чтобы не утомлять гостя, и записать только время вызова скорой помощи', uz: 'Mehmonni charchatmaslik uchun jim turish va faqat tez yordam chaqirilgan vaqtni yozib qo\'yish', en: 'Stay silent so as not to tire him, and note down only the time the ambulance was called' },
      { ru: 'Спуститься встретить скорую у входа, чтобы медики не искали номер, и сразу же вернуться к гостю', uz: 'Shifokorlar xonani qidirmasligi uchun kirishda tez yordamni kutib olib, darhol mehmonga qaytish', en: 'Go down to meet the ambulance at the entrance so the medics do not search for the room' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Урок: после вызова помощи не оставляйте гостя одного — спокойно разговаривайте с ним, спросите об аллергиях или хронических заболеваниях и передайте эти сведения медикам по приезде. Спуститься встречать скорую — значит оставить гостя одного, а давать лекарства урок не предписывает.',
      uz: 'Dars: yordam chaqirgandan keyin mehmonni yolg\'iz qoldirmang — u bilan xotirjam gaplashing, allergiya yoki surunkali kasalliklar haqida so\'rang va bu ma\'lumotni shifokorlar kelganda ularga yetkazing. Tez yordamni kutib olgani tushish — mehmonni yolg\'iz qoldirish, dori berishni esa dars buyurmaydi.',
      en: 'The lesson: after calling for help do not leave the guest alone — talk to him calmly, ask about allergies or chronic conditions and pass that information to the paramedics on arrival. Going down to meet the ambulance means leaving the guest alone, and giving medication is not what the lesson prescribes.',
    },
  },
  {
    id: 'quiz-emergency-procedures-3',
    moduleSlug: 'emergency-procedures',
    question: {
      ru: '01:30. Нетрезвый гость кричит в лобби и угрожает другому гостю. Охранник на обходе — по вызову он дойдёт до лобби за 3 минуты. Какое действие соответствует уроку?',
      uz: 'Soat 01:30. Mast mehmon lobbida baqirib, boshqa mehmonga tahdid qilyapti. Qo\'riqchi aylanib yuribdi — chaqirilsa, lobbiga 3 daqiqada yetib keladi. Qaysi harakat darsga mos?',
      en: '01:30. An intoxicated guest is shouting in the lobby and threatening another guest. The security officer is on patrol — once called, he can reach the lobby in 3 minutes. Which action follows the lesson?',
    },
    options: [
      { ru: 'Встать между гостями и самому удерживать агрессивного гостя, пока не подойдёт охранник', uz: 'Mehmonlar orasiga turib, qo\'riqchi kelguncha tajovuzkor mehmonni o\'zingiz ushlab turish', en: 'Step between the guests and hold the aggressive one back until security arrives' },
      { ru: 'Сохранять спокойствие, вызвать охрану по протоколу, не вступая в физический контакт', uz: 'Xotirjam turib, protokol bo\'yicha qo\'riqlovni chaqirish, jismoniy to\'qnashuvga kirmaslik', en: 'Stay calm, call security per protocol and avoid any physical confrontation' },
      { ru: 'Попросить других гостей помочь вывести его из лобби на улицу до прихода охраны', uz: 'Qo\'riqchi kelguncha boshqa mehmonlardan uni lobbidan ko\'chaga chiqarishga yordam so\'rash', en: 'Ask other guests to help you walk him out of the lobby before security arrives' },
      { ru: 'Дождаться, пока он сам уйдёт из лобби, и затем написать отчёт менеджеру', uz: 'U lobbidan o\'zi ketguncha kutib, keyin menejerga hodisa haqida hisobot yozish', en: 'Wait until he leaves the lobby on his own and then write a report for the manager' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Урок: при угрозе безопасности сохраняйте спокойствие, следуйте протоколу вызова охраны или полиции и никогда не вступайте в физическое противостояние — «пытаться самостоятельно разрешить конфликт с угрозой безопасности» есть в списке ошибок. Привлекать гостей опасно, а ждать без вызова — бездействие.',
      uz: 'Dars: xavfsizlik hodisasida xotirjam bo\'ling, qo\'riqlov yoki politsiyani chaqirish protokoliga amal qiling va hech qachon jismoniy to\'qnashuvga kirishmang — «xavfsizlikka tahdid soluvchi to\'qnashuvni mustaqil hal qilishga urinish» xatolar ro\'yxatida bor. Mehmonlarni jalb qilish xavfli, hech kimni chaqirmay kutish esa harakatsizlik.',
      en: 'The lesson: during a security incident stay calm, follow the protocol for calling security or police and never engage in physical confrontation — "trying to personally handle a confrontation that threatens safety" is on the list of mistakes. Involving guests is dangerous, and waiting without calling anyone is inaction.',
    },
  },
  {
    id: 'quiz-emergency-procedures-4',
    moduleSlug: 'emergency-procedures',
    question: {
      ru: '03:10, сработала пожарная сигнализация. Вы один на ресепшене; гость с 9-го этажа звонит и спрашивает, что делать. Охранник будет через две минуты. Какое действие соответствует уроку?',
      uz: 'Soat 03:10, yong\'in signalizatsiyasi ishga tushdi. Resepshenda yolg\'izsiz; 9-qavatdagi mehmon qo\'ng\'iroq qilib, nima qilishni so\'raydi. Qo\'riqchi ikki daqiqada keladi. Qaysi harakat darsga mos?',
      en: '03:10, the fire alarm goes off. You are alone at the front desk; a guest on the 9th floor calls asking what to do. The security officer will arrive in two minutes. Which action follows the lesson?',
    },
    options: [
      { ru: 'Сказать гостю быстро спуститься на лифте — с 9-го этажа так безопаснее и быстрее', uz: 'Mehmonga lift bilan tez tushishni aytish — 9-qavatdan shunday tezroq va xavfsizroq', en: 'Tell the guest to come down quickly by lift — from the 9th floor it is faster and safer' },
      { ru: 'Направить гостя к лестнице, а самому оставить стойку и пойти проверять этажи', uz: 'Mehmonni zinaga yo\'naltirib, o\'zingiz stoykani qoldirib, qavatlarni tekshirgani ketish', en: 'Direct the guest to the stairwell, then leave the desk and go to check the floors' },
      { ru: 'Спокойно направить гостя к выходу по лестнице, не к лифту, и остаться у стойки по плану', uz: 'Mehmonni xotirjam zinaga, liftga emas, yo\'naltirib, reja bo\'yicha stoykada qolish', en: 'Calmly direct the guest to the stairs, not the lift, and stay at the desk per plan' },
      { ru: 'Попросить гостя не выходить из номера, пока охрана не подтвердит, что тревога настоящая', uz: 'Qo\'riqlov tashvish haqiqiy ekanini tasdiqlaguncha mehmondan xonadan chiqmaslikni so\'rash', en: 'Ask the guest to stay in the room until security confirms that the alarm is real' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Урок сочетает два правила: при пожарной тревоге гостей спокойно направляют к эвакуационному выходу и никогда — к лифту, а стойка не должна оставаться без сотрудника: обязанности передают по плану. Уйти проверять этажи — ошибка «оставить стойку без замены», а ждать подтверждения — бездействие в критический момент.',
      uz: 'Dars ikki qoidani birlashtiradi: yong\'in tashvishida mehmonlar xotirjam evakuatsiya yo\'liga, hech qachon liftga emas, yo\'naltiriladi, stoyka esa xodimsiz qolmasligi kerak — vazifalar reja bo\'yicha topshiriladi. Qavatlarni tekshirgani ketish — «stoykani almashtiruvchisiz qoldirish» xatosi, tasdiqni kutish esa hal qiluvchi paytdagi harakatsizlik.',
      en: 'The lesson combines two rules: during a fire alarm guests are calmly directed to the evacuation route and never to the lift, and the desk must never be left unstaffed — duties are handed off per plan. Leaving to check the floors is the "unstaffed desk" mistake, and waiting for confirmation is inaction at the critical moment.',
    },
  },
]
