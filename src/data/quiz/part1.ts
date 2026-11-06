import type { QuizQuestion } from '@/types'

/** Knowledge-test questions for modules 1–8 (4 per module). */
export const quizPart1: QuizQuestion[] = [
  // greeting-guests
  {
    id: 'quiz-greeting-guests-1',
    moduleSlug: 'greeting-guests',
    question: {
      ru: 'Вы печатаете регистрационную карту для г-на Ли, и к стойке подходит ещё одна гостья с чемоданом. Что и в какой срок требует правило урока?',
      uz: 'Siz janob Li uchun ro\'yxatga olish kartasini chop etyapsiz, shu payt stoykaga chamadonli yana bir mehmon ayol keladi. Dars qoidasi nimani va qancha vaqt ichida talab qiladi?',
      en: 'You are printing a registration card for Mr. Lee when another guest with a suitcase reaches the desk. What does the lesson\'s rule require, and how quickly?',
    },
    options: [
      { ru: 'За 7 секунд прервать г-на Ли и полностью поприветствовать гостью с представлением', uz: '7 soniya ichida janob Lini to\'xtatib, mehmon ayol bilan ismingizni aytib to\'liq salomlashish', en: 'Within 7 seconds, pause Mr. Lee\'s check-in and greet her in full, giving your name' },
      { ru: 'Спокойно закончить с г-ном Ли (около минуты), затем поприветствовать гостью и представиться', uz: 'Janob Li bilan ishni xotirjam tugatib (bir daqiqacha), so\'ng mehmon ayol bilan salomlashib, ismingizni aytish', en: 'Calmly finish with Mr. Lee (about a minute), then greet her and introduce yourself by name' },
      { ru: 'За 10 секунд коротко сказать ей «я сейчас к вам подойду», а полное приветствие — позже', uz: '10 soniya ichida unga qisqa «hozir sizga qarayman» deyish, to\'liq salomlashish esa keyinroq', en: 'Within 10 seconds, give her a short "I\'ll be right with you"; the full greeting comes later' },
      { ru: 'За 30 секунд кивнуть гостье, а заговорить с ней только после того, как уйдёт г-н Ли', uz: '30 soniya ichida mehmon ayolga bosh irg\'ab, u bilan faqat janob Li ketgandan keyin gaplashish', en: 'Within 30 seconds, nod to her, and only start speaking to her once Mr. Lee has left' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Правило 10 секунд: гостя нужно заметить в течение 10 секунд, даже если вы заняты, — достаточно короткого «я сейчас к вам подойду». 7 секунд — время, за которое складывается первое впечатление, а не срок правила; молча закончить с г-ном Ли — ошибка «заставлять ждать, не замечая».',
      uz: '10 soniya qoidasi: band bo\'lsangiz ham, mehmonni 10 soniya ichida payqash kerak — qisqa «hozir sizga qarayman» yetarli. 7 soniya — birinchi taassurot shakllanadigan vaqt, qoida muddati emas; indamay janob Li bilan ishni tugatish esa «payqamasdan kuttirish» xatosidir.',
      en: 'The 10-second rule: acknowledge the guest within 10 seconds even when busy — a short "I\'ll be right with you" is enough. Seven seconds is how long a first impression takes to form, not the rule\'s limit; silently finishing with Mr. Lee is the mistake of making a guest wait unacknowledged.',
    },
  },
  {
    id: 'quiz-greeting-guests-2',
    moduleSlug: 'greeting-guests',
    question: {
      ru: 'Во время пятиминутного заселения вы узнали, что гостя зовут г-н Ким. Как часто, по уроку, стоит обращаться к нему по имени?',
      uz: 'Besh daqiqalik ro\'yxatdan o\'tkazish davomida mehmonning ismi janob Kim ekanini bildingiz. Dars bo\'yicha unga ismi bilan qanchalik tez-tez murojaat qilish kerak?',
      en: 'During a five-minute check-in you learn the guest is Mr. Kim. According to the lesson, how often should you address him by name?',
    },
    options: [
      { ru: '2–3 раза за разговор: «Спасибо, господин Ким, ваш номер готов»', uz: 'Suhbat davomida 2–3 marta: «Rahmat, janob Kim, xonangiz tayyor»', en: '2–3 times per conversation: "Thank you, Mr. Kim, your room is ready"' },
      { ru: 'Один раз — в начале, чтобы не звучать фамильярно; дальше просто на «вы»', uz: 'Bir marta — boshida, erkin tuyulmaslik uchun; keyin shunchaki «siz» deb', en: 'Once, at the start, to avoid sounding familiar; after that simply "you"' },
      { ru: 'В каждой фразе, чтобы гость всё время чувствовал личное внимание', uz: 'Har bir gapda, mehmon doim shaxsiy e\'tiborni his qilib tursin uchun', en: 'In every sentence, so the guest constantly feels personal attention' },
      { ru: '5–6 раз: чем чаще звучит имя, тем более личным кажется сервис', uz: '5–6 marta: ism qancha ko\'p yangrasa, xizmat shuncha shaxsiy tuyuladi', en: '5–6 times: the more often you use the name, the more personal it feels' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Совет урока: узнав имя, используйте его 2–3 раза за разговор («Спасибо, господин Ким, ваш номер готов»). Одного раза мало для ощущения личного внимания, а имя в каждой фразе звучит заученно и навязчиво.',
      uz: 'Dars maslahati: ismni bilgach, uni suhbat davomida 2–3 marta ishlating («Rahmat, janob Kim, xonangiz tayyor»). Bir marta shaxsiy e\'tibor hissi uchun kam, har gapda ism esa yodlangan va zerikarli eshitiladi.',
      en: 'The lesson\'s tip: once you know the name, use it 2–3 times in the conversation ("Thank you, Mr. Kim, your room is ready"). Once is too little to feel personal, and the name in every sentence sounds scripted and intrusive.',
    },
  },
  {
    id: 'quiz-greeting-guests-3',
    moduleSlug: 'greeting-guests',
    question: {
      ru: 'Стажёр стоит, улыбается, смотрит в глаза и говорит: «Добрый день! Добро пожаловать в Grand Hotel. Чем могу вам помочь?» Какое золотое правило он нарушил?',
      uz: 'Stajyor tik turib, jilmayib, ko\'zga qarab: «Xayrli kun! Grand Hotelga xush kelibsiz. Sizga qanday yordam bera olaman?» deydi. U qaysi oltin qoidani buzdi?',
      en: 'A trainee stands, smiles, makes eye contact and says: "Good afternoon! Welcome to the Grand Hotel. How may I help you?" Which golden rule did he break?',
    },
    options: [
      { ru: 'Не обратился к гостю по имени уже в первой фразе', uz: 'Birinchi gapdayoq mehmonga ismi bilan murojaat qilmadi', en: 'He didn\'t address the guest by name in his first sentence' },
      { ru: 'Не спросил сразу фамилию гостя, чтобы найти бронь', uz: 'Bronni topish uchun mehmon familiyasini darhol so\'ramadi', en: 'He didn\'t ask for the guest\'s last name to find the booking' },
      { ru: 'Задал открытый вопрос вместо вопроса о брони', uz: 'Bron haqida so\'rash o\'rniga ochiq savol berdi', en: 'He asked an open question instead of asking about a booking' },
      { ru: 'Не представился сам — не назвал своё имя', uz: 'O\'zini tanishtirmadi — o\'z ismini aytmadi', en: 'He didn\'t introduce himself by giving his own name' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Золотое правило — всегда представляться по имени: «…Меня зовут Алина, чем могу вам помочь?». Имя гостя используют, когда его узнали, — в первой фразе оно ещё неизвестно, а открытый вопрос о помощи как раз соответствует образцу урока.',
      uz: 'Oltin qoida — har doim o\'z ismingizni aytish: «…Mening ismim Alina, sizga qanday yordam bera olaman?». Mehmon ismi uni bilib olgach ishlatiladi — birinchi gapda u hali noma\'lum, yordam haqidagi ochiq savol esa aynan dars namunasiga mos.',
      en: 'The golden rule is to always introduce yourself by name: "…My name is Alina — how may I help you?". The guest\'s name is used once you learn it — it isn\'t known yet in the first sentence — and the open question about help is exactly the lesson\'s model.',
    },
  },
  {
    id: 'quiz-greeting-guests-4',
    moduleSlug: 'greeting-guests',
    question: {
      ru: 'Вы сидите за стойкой и заполняете журнал смены. Подходит гость. Что, кроме зрительного контакта и улыбки, урок советует сделать невербально?',
      uz: 'Siz stoyka ortida o\'tirib, smena jurnalini to\'ldiryapsiz. Mehmon yaqinlashadi. Ko\'z aloqasi va tabassumdan tashqari, dars og\'zaki bo\'lmagan qanday harakatni maslahat beradi?',
      en: 'You are seated at the desk filling in the shift log when a guest approaches. Besides eye contact and a smile, what nonverbal step does the lesson recommend?',
    },
    options: [
      { ru: 'Выйти из-за стойки навстречу гостю и протянуть руку для рукопожатия', uz: 'Stoyka ortidan mehmonga peshvoz chiqib, qo\'l berib ko\'rishish', en: 'Step out from behind the desk to meet the guest and offer a handshake' },
      { ru: 'Слегка привстать или наклониться навстречу гостю в знак уважения', uz: 'Hurmat belgisi sifatida biroz o\'rningizdan turish yoki mehmonga engashish', en: 'Rise slightly or lean toward the guest as a sign of respect' },
      { ru: 'Остаться сидеть, но отложить ручку и сложить руки на стойке', uz: 'O\'tirgancha qolib, ruchkani qo\'yish va qo\'llarni stoyka ustiga qo\'yish', en: 'Stay seated, but put the pen down and rest your hands on the desk' },
      { ru: 'Дописать строку в журнале, чтобы затем уделить гостю всё внимание', uz: 'Keyin mehmonga to\'liq e\'tibor berish uchun jurnaldagi qatorni yozib tugatish', en: 'Finish the line in the log so you can then give the guest full attention' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Урок: «Встаньте и улыбнитесь» — если позволяет обстановка, слегка привстаньте или наклонитесь к гостю, это невербально выражает уважение. Дописывать журнал — ошибка «не поднимать взгляд», а выход из-за стойки с рукопожатием урок не предлагает.',
      uz: 'Dars: «Turing va tabassum qiling» — sharoit imkon bersa, biroz o\'rningizdan turing yoki mehmonga engashing, bu hurmatni og\'zaki bo\'lmagan tarzda bildiradi. Jurnalni yozib tugatish — «ko\'z ko\'tarmaslik» xatosi, stoykadan chiqib qo\'l berish esa darsda taklif qilinmagan.',
      en: 'The lesson: "Stand and smile" — if the setting allows, rise slightly or lean toward the guest; this signals respect nonverbally. Finishing the log is the mistake of not looking up, and stepping out for a handshake is not what the lesson suggests.',
    },
  },

  // check-in
  {
    id: 'quiz-check-in-1',
    moduleSlug: 'check-in',
    question: {
      ru: 'Г-н Ахмедов приезжает в 14:00, у него бронь Deluxe на три ночи. Какая последовательность соответствует уроку?',
      uz: 'Janob Ahmedov soat 14:00 da keladi, unda uch kechalik Deluxe bron bor. Qaysi ketma-ketlik darsga mos keladi?',
      en: 'Mr. Ahmedov arrives at 14:00 with a Deluxe booked for three nights. Which sequence matches the lesson?',
    },
    options: [
      { ru: 'Приветствие → ключ и инструктаж → паспорт и сверка с бронью → помощь с багажом', uz: 'Salomlashish → kalit va ma\'lumot → pasport va bron bilan solishtirish → yukka yordam', en: 'Greeting → key and briefing → passport check against the booking → luggage help' },
      { ru: 'Бронь открыта заранее → паспорт и сверка → ключ и инструктаж → помощь с багажом', uz: 'Bron oldindan ochilgan → pasport va solishtirish → kalit va ma\'lumot → yukka yordam', en: 'Booking opened in advance → passport check → key and briefing → luggage help' },
      { ru: 'Приветствие → паспорт → ключ и инструктаж → сверка паспорта с бронью в PMS', uz: 'Salomlashish → pasport → kalit va ma\'lumot → pasportni PMSdagi bron bilan solishtirish', en: 'Greeting → passport → key and briefing → matching the passport to the PMS booking' },
      { ru: 'Бронь открыта заранее → помощь с багажом → ключ и инструктаж → паспорт и сверка', uz: 'Bron oldindan ochilgan → yukka yordam → kalit va ma\'lumot → pasport va solishtirish', en: 'Booking opened in advance → luggage help → key and briefing → passport check' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'По уроку бронь готовят до прихода гостя, документ сверяют с бронью до выдачи ключа, затем вручают ключ с коротким инструктажем (завтрак, Wi-Fi, выезд) и предлагают помощь с багажом. Любой порядок, где ключ выдан раньше сверки паспорта, нарушает золотое правило.',
      uz: 'Darsga ko\'ra bron mehmon kelishidan oldin tayyorlanadi, hujjat kalit berilishidan oldin bron bilan solishtiriladi, so\'ng kalit qisqa ma\'lumot (nonushta, Wi-Fi, chiqish) bilan topshiriladi va yukka yordam taklif qilinadi. Kalit pasport solishtirilishidan oldin berilgan har qanday tartib oltin qoidani buzadi.',
      en: 'Per the lesson, the booking is prepared before the guest arrives, the ID is matched to the booking before the key is handed over, then the key comes with a short briefing (breakfast, Wi-Fi, checkout) and an offer to help with luggage. Any order that hands over the key before the passport check breaks the golden rule.',
    },
  },
  {
    id: 'quiz-check-in-2',
    moduleSlug: 'check-in',
    question: {
      ru: 'Вручая ключ от 412-го, стажёр говорит: «Завтрак с 7 до 10 на первом этаже, выезд до 12:00. Помочь с багажом?» Что из обязательного инструктажа он пропустил?',
      uz: '412-xona kalitini berayotib stajyor: «Nonushta 7 dan 10 gacha birinchi qavatda, chiqish 12:00 gacha. Yukka yordam beraymi?» deydi. Majburiy ma\'lumotlardan nimani o\'tkazib yubordi?',
      en: 'Handing over the key to room 412, a trainee says: "Breakfast is 7 to 10 on the first floor, checkout is by 12:00. Can I help with your bags?" Which required briefing item did he skip?',
    },
    options: [
      { ru: 'Цены и порядок оплаты мини-бара в номере', uz: 'Xonadagi minibar narxlari va to\'lov tartibi', en: 'The prices and payment rules of the minibar' },
      { ru: 'Часы работы спа и фитнес-центра отеля', uz: 'Mehmonxona spa va fitnes markazining ish vaqti', en: 'The opening hours of the hotel spa and gym' },
      { ru: 'Стоимость позднего выезда после 12:00', uz: '12:00 dan keyin kech chiqish uchun to\'lov narxi', en: 'The fee for a late check-out after 12:00' },
      { ru: 'Как работает Wi-Fi и где указан пароль', uz: 'Wi-Fi qanday ishlashi va parol qayerda yozilgani', en: 'How the Wi-Fi works and where the password is' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Урок требует кратко рассказать о трёх вещах: завтрак, Wi-Fi и время выезда (в образце — «пароль от Wi-Fi указан на карточке»). Мини-бар, спа и плата за поздний выезд полезны, но в обязательный инструктаж урока не входят.',
      uz: 'Dars uch narsa haqida qisqacha aytishni talab qiladi: nonushta, Wi-Fi va chiqish vaqti (namunada — «Wi-Fi paroli kartochkada ko\'rsatilgan»). Minibar, spa va kech chiqish to\'lovi foydali, lekin darsdagi majburiy ma\'lumotga kirmaydi.',
      en: 'The lesson requires a short briefing on three things: breakfast, Wi-Fi and checkout time (in the model: "the Wi-Fi password is on the card"). The minibar, spa and late check-out fee are useful but are not part of the lesson\'s required briefing.',
    },
  },
  {
    id: 'quiz-check-in-3',
    moduleSlug: 'check-in',
    question: {
      ru: 'Перед выдачей ключа вы сверяете паспорт гостьи с её бронью в PMS. Какие три поля, по золотому правилу урока, обязательно должны совпасть?',
      uz: 'Kalit berishdan oldin mehmon ayolning pasportini PMSdagi broni bilan solishtiryapsiz. Darsning oltin qoidasiga ko\'ra qaysi uchta maydon albatta mos kelishi kerak?',
      en: 'Before handing over the key you compare a guest\'s passport with her PMS booking. Under the lesson\'s golden rule, which three fields must match?',
    },
    options: [
      { ru: 'Имя, дата рождения и номер документа', uz: 'Ism, tug\'ilgan sana va hujjat raqami', en: 'Name, date of birth and document number' },
      { ru: 'Имя, гражданство и номер документа', uz: 'Ism, fuqarolik va hujjat raqami', en: 'Name, nationality and document number' },
      { ru: 'Имя, номер документа и срок его действия', uz: 'Ism, hujjat raqami va amal qilish muddati', en: 'Name, document number and its expiry date' },
      { ru: 'Имя, дата рождения и адрес проживания', uz: 'Ism, tug\'ilgan sana va yashash manzili', en: 'Name, date of birth and home address' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Золотое правило: имя, дата рождения и номер документа должны совпадать с данными брони, а любое расхождение вежливо уточняется до выдачи ключа. Гражданство, срок действия и адрес в этом правиле урока не названы.',
      uz: 'Oltin qoida: ism, tug\'ilgan sana va hujjat raqami bron ma\'lumotlari bilan mos kelishi kerak, har qanday farq esa kalit berishdan oldin muloyimlik bilan aniqlashtiriladi. Fuqarolik, amal qilish muddati va manzil dars qoidasida tilga olinmagan.',
      en: 'The golden rule: name, date of birth and document number must match the booking, and any discrepancy is politely clarified before the key is handed over. Nationality, expiry date and home address are not named in the lesson\'s rule.',
    },
  },
  {
    id: 'quiz-check-in-4',
    moduleSlug: 'check-in',
    question: {
      ru: '13:40, г-жа Каримова ожидается к 14:00. Как советует урок, вы заранее открываете её бронь. Что именно нужно проверить?',
      uz: 'Soat 13:40, Karimova xonim 14:00 ga kutilmoqda. Dars maslahatiga ko\'ra uning bronini oldindan ochasiz. Aynan nimani tekshirish kerak?',
      en: 'It is 13:40 and Ms. Karimova is due at 14:00. As the lesson advises, you open her booking in advance. What exactly should you check?',
    },
    options: [
      { ru: 'Тип номера, статус оплаты и её обратный рейс', uz: 'Xona turi, to\'lov holati va uning qaytish reysi', en: 'Room type, payment status and her return flight' },
      { ru: 'Особые пожелания, статус оплаты и уровень лояльности', uz: 'Alohida istaklar, to\'lov holati va sodiqlik darajasi', en: 'Special requests, payment status and loyalty tier' },
      { ru: 'Тип номера, особые пожелания и статус оплаты', uz: 'Xona turi, alohida istaklar va to\'lov holati', en: 'Room type, special requests and payment status' },
      { ru: 'Тип номера, особые пожелания и её гражданство', uz: 'Xona turi, alohida istaklar va uning fuqaroligi', en: 'Room type, special requests and her nationality' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Совет урока: до приезда откройте бронь и проверьте тип номера, особые пожелания и статус оплаты — это экономит время и позволяет обратиться к гостю по имени ещё до того, как он представится. Рейса, уровня лояльности и гражданства в этом списке нет.',
      uz: 'Dars maslahati: mehmon kelishidan oldin bronni ochib, xona turi, alohida istaklar va to\'lov holatini tekshiring — bu vaqtni tejaydi va mehmon o\'zini tanishtirishidan oldin uni ismi bilan chaqirish imkonini beradi. Reys, sodiqlik darajasi va fuqarolik bu ro\'yxatda yo\'q.',
      en: 'The lesson\'s tip: before arrival, open the booking and check room type, special requests and payment status — it saves time and lets you greet the guest by name before they introduce themselves. Flight, loyalty tier and nationality are not on the lesson\'s list.',
    },
  },

  // check-out
  {
    id: 'quiz-check-out-1',
    moduleSlug: 'check-out',
    question: {
      ru: 'Гость из 305-го собирается выехать в 11:00. Когда, по уроку, нужно просмотреть его фолио и что в нём искать?',
      uz: '305-xonadagi mehmon soat 11:00 da chiqmoqchi. Darsga ko\'ra uning foliosini qachon ko\'rib chiqish va unda nimani qidirish kerak?',
      en: 'The guest in room 305 plans to check out at 11:00. According to the lesson, when should you review his folio, and what are you looking for?',
    },
    options: [
      { ru: 'Накануне вечером — чтобы сразу предложить гостю экспресс-выезд', uz: 'Bir kun oldin kechqurun — mehmonga darhol ekspress chiqishni taklif qilish uchun', en: 'The evening before — so you can offer him express checkout' },
      { ru: 'В 10:00, за час, — чтобы заранее распечатать итоговый счёт', uz: 'Soat 10:00 da, bir soat oldin — yakuniy hisobni oldindan chop etish uchun', en: 'At 10:00, an hour ahead — so the final bill can be printed early' },
      { ru: 'В 11:00, когда он сдаёт ключ, — чтобы увидеть итоговую сумму', uz: 'Soat 11:00 da, kalitni topshirganda — yakuniy summani ko\'rish uchun', en: 'At 11:00, when he returns the key — to see the final total' },
      { ru: 'Около 10:40 — нет ли не внесённых расходов ресторана и мини-бара', uz: 'Taxminan 10:40 da — restoran va minibarning kiritilmagan xarajatlari bormi', en: 'Around 10:40 — for unposted restaurant or minibar charges' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Совет урока: за 15–20 минут до ожидаемого выезда просмотрите фолио на неотражённые расходы ресторана или мини-бара — это ускоряет выезд и исключает сюрпризы у стойки. Экспресс-выезд предлагают накануне вечером, но это отдельный приём, а не проверка счёта.',
      uz: 'Dars maslahati: kutilayotgan chiqishdan 15–20 daqiqa oldin folioni restoran yoki minibarning aks etmagan xarajatlari bor-yo\'qligiga tekshiring — bu chiqishni tezlashtiradi va stoykadagi kutilmagan holatlarning oldini oladi. Ekspress chiqish kechqurun taklif qilinadi, lekin bu hisobni tekshirish emas, alohida usul.',
      en: 'The lesson\'s tip: 15–20 minutes before the expected departure, review the folio for unposted restaurant or minibar charges — it speeds up check-out and avoids surprises at the desk. Express checkout is offered the evening before, but that is a separate practice, not the bill check.',
    },
  },
  {
    id: 'quiz-check-out-2',
    moduleSlug: 'check-out',
    question: {
      ru: 'Гостья улетает завтра в 06:30 и боится опоздать. Как урок описывает экспресс-выезд, который ей стоит предложить?',
      uz: 'Mehmon ayol ertaga soat 06:30 da uchib ketadi va kechikishdan xavotirda. Dars unga taklif qilinadigan ekspress chiqishni qanday tasvirlaydi?',
      en: 'A guest flies out tomorrow at 06:30 and is worried about being late. How does the lesson describe the express checkout you should offer her?',
    },
    options: [
      { ru: 'Утром списать сумму с карты и прислать счёт на e-mail без визита к стойке', uz: 'Ertalab kartadan summani yechib, hisobni stoykaga kelmasdan emailga yuborish', en: 'Charge her card in the morning and email the bill, with no visit to the desk' },
      { ru: 'Вечером накануне подтвердить счёт, а утром просто оставить ключ на стойке', uz: 'Bir kun oldin kechqurun hisobni tasdiqlash, ertalab esa kalitni stoykaga qoldirish', en: 'Confirm the bill the evening before, then just leave the key at the desk' },
      { ru: 'Утром оставить ключ в номере, а счёт подтвердить по WhatsApp из аэропорта', uz: 'Ertalab kalitni xonada qoldirib, hisobni aeroportdan WhatsApp orqali tasdiqlash', en: 'Leave the key in the room and confirm the bill on WhatsApp from the airport' },
      { ru: 'При заезде взять преавторизацию и закрыть счёт автоматически в 12:00', uz: 'Kelganda preavtorizatsiya olib, hisobni soat 12:00 da avtomatik yopish', en: 'Take a pre-authorisation at check-in and close the bill automatically at 12:00' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'В уроке экспресс-выезд предлагают вечером накануне: гость заранее подтверждает счёт и утром просто оставляет ключ на стойке. Списание без подтверждённого счёта или подтверждение «потом из аэропорта» оставляет место для споров, которых урок учит избегать.',
      uz: 'Darsda ekspress chiqish bir kun oldin kechqurun taklif qilinadi: mehmon hisobni oldindan tasdiqlaydi va ertalab kalitni stoykaga qoldiradi. Tasdiqlanmagan hisob bo\'yicha pul yechish yoki «keyin aeroportdan» tasdiqlash dars oldini olishni o\'rgatadigan nizolarga yo\'l ochadi.',
      en: 'In the lesson, express checkout is offered the evening before: the guest confirms the bill in advance and simply leaves the key at the desk in the morning. Charging without a confirmed bill, or confirming "later from the airport", leaves room for the disputes the lesson teaches you to avoid.',
    },
  },
  {
    id: 'quiz-check-out-3',
    moduleSlug: 'check-out',
    question: {
      ru: 'Гость торопится: «Такси уже ждёт, просто спишите с карты». В счёте две ночи и ужин на 85 000 сум. Как поступить по уроку?',
      uz: 'Mehmon shoshyapti: «Taksi kutyapti, kartadan yechib qo\'ya qoling». Hisobda ikki kecha va 85 000 so\'mlik kechki ovqat bor. Darsga ko\'ra qanday yo\'l tutasiz?',
      en: 'A guest is in a rush: "My taxi is waiting, just charge my card." The bill shows two nights and an 85,000 sum dinner. What does the lesson require?',
    },
    options: [
      { ru: 'Списать сразу, а подробную детализацию счёта потом отправить на e-mail', uz: 'Darhol yechib, hisob tafsilotlarini unga emailga yuborish', en: 'Charge right away and email him the itemised bill afterwards' },
      { ru: 'Списать сразу и проговорить статьи, пока проходит оплата', uz: 'Darhol yechib, to\'lov o\'tayotganda bandlarni aytib berish', en: 'Charge right away and read out the items while it goes through' },
      { ru: 'Коротко назвать обе статьи и сумму, потом просить подтвердить оплату', uz: 'Ikkala bandni va summani qisqa aytib, so\'ng to\'lovni tasdiqlashni so\'rash', en: 'Briefly state both items and the total, then ask him to confirm payment' },
      { ru: 'Отдать распечатанный счёт, чтобы он спокойно проверил его уже в такси', uz: 'Chop etilgan hisobni berib, uni taksida tekshirib olishini aytish', en: 'Hand him the printed bill so he can check it in the taxi' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Золотое правило выезда: вслух назвать, за что списываются деньги, ДО того, как просить подтвердить оплату, — даже у спешащего гостя это занимает секунды и предотвращает споры. Проговаривать статьи во время списания — правильное действие в неправильном порядке.',
      uz: 'Chiqishning oltin qoidasi: to\'lovni tasdiqlashni so\'rashdan OLDIN pul nima uchun yechilayotganini ovoz chiqarib aytish — shoshayotgan mehmonda ham bu bir necha soniya oladi va nizolarning oldini oladi. Bandlarni to\'lov paytida aytish — to\'g\'ri harakat, lekin noto\'g\'ri tartibda.',
      en: 'The check-out golden rule: state out loud what each charge is for BEFORE asking the guest to confirm payment — even with a rushed guest it takes seconds and prevents disputes. Reading out the items while the payment goes through is the right action in the wrong order.',
    },
  },
  {
    id: 'quiz-check-out-4',
    moduleSlug: 'check-out',
    question: {
      ru: 'Администратор: «Ваш счёт: две ночи и ужин 85 000 сум — всё верно? … Оплата прошла. Вызвать такси или помочь с багажом? Спасибо, что были у нас, хорошей дороги, г-н Каримов!» Чего не хватает?',
      uz: 'Administrator: «Hisobingiz: ikki kecha va 85 000 so\'mlik kechki ovqat — hammasi to\'g\'rimi? … To\'lov o\'tdi. Taksi chaqiraymi yoki yukka yordam beraymi? Bizda bo\'lganingiz uchun rahmat, yaxshi yo\'l, janob Karimov!» Nima yetishmaydi?',
      en: 'Receptionist: "Your bill: two nights and dinner, 85,000 sum — is that correct? … The payment went through. Shall I call a taxi or help with your bags? Thank you for staying with us — safe travels, Mr. Karimov!" What is missing?',
    },
    options: [
      { ru: 'Искренней просьбы оставить отзыв о пребывании', uz: 'Turar joy haqida fikr qoldirishni samimiy so\'rash', en: 'A sincere request for feedback on the stay' },
      { ru: 'Вопроса, пользовался ли гость мини-баром', uz: 'Mehmon minibardan foydalanganmi, degan savol', en: 'A question about whether he used the minibar' },
      { ru: 'Предложения экспресс-выезда в следующий раз', uz: 'Keyingi safar uchun ekspress chiqish taklifi', en: 'An offer of express checkout for next time' },
      { ru: 'Предложения прислать копию счёта на e-mail', uz: 'Hisob nusxasini emailga yuborish taklifi', en: 'An offer to email him a copy of the bill' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'По уроку на выезде нужно искренне попросить обратную связь о пребывании — «буду благодарна за ваш отзыв»; её отсутствие названо в уроке типичной ошибкой. Вопрос о мини-баре не нужен: расходы проверяют в фолио за 15–20 минут до выезда.',
      uz: 'Darsga ko\'ra chiqishda turar joy haqida samimiy fikr-mulohaza so\'rash kerak — «fikringiz uchun minnatdor bo\'lardim»; buni so\'ramaslik darsda tipik xato deb ko\'rsatilgan. Minibar haqida so\'rash shart emas: xarajatlar chiqishdan 15–20 daqiqa oldin folioda tekshiriladi.',
      en: 'Per the lesson, at check-out you sincerely ask for feedback on the stay — "I\'d appreciate your feedback"; not asking is listed as a common mistake. A minibar question is unnecessary: charges are checked in the folio 15–20 minutes before departure.',
    },
  },

  // phone-communication
  {
    id: 'quiz-phone-communication-1',
    moduleSlug: 'phone-communication',
    question: {
      ru: 'Супервайзер прослушал четыре звонка. Какой из них нарушает стандарт урока?',
      uz: 'Supervayzer to\'rtta qo\'ng\'iroqni tinglab chiqdi. Ulardan qaysi biri dars standartini buzadi?',
      en: 'A supervisor reviewed four calls. Which one breaks the lesson\'s standard?',
    },
    options: [
      { ru: '4-й гудок: «Добрый день, Grand Hotel, меня зовут Азиз, чем могу помочь?»', uz: '4-signal: «Xayrli kun, Grand Hotel, ismim Aziz, qanday yordam bera olaman?»', en: '4th ring: "Good afternoon, Grand Hotel, this is Aziz, how may I help you?"' },
      { ru: '2-й гудок: «Доброе утро, Grand Hotel, меня зовут Малика, чем могу помочь?»', uz: '2-signal: «Xayrli tong, Grand Hotel, ismim Malika, qanday yordam bera olaman?»', en: '2nd ring: "Good morning, Grand Hotel, this is Malika, how may I help you?"' },
      { ru: '3-й гудок, после «извините» гостю у стойки: «Добрый день, Grand Hotel, Тимур, чем могу помочь?»', uz: '3-signal, stoykadagi mehmonga «uzr» deb: «Xayrli kun, Grand Hotel, Timur, qanday yordam beray?»', en: '3rd ring, after "excuse me" to the desk guest: "Hello, Grand Hotel, Timur speaking, how can I help?"' },
      { ru: '1-й гудок, с улыбкой: «Добрый вечер, Grand Hotel, меня зовут Дилноза, чем могу помочь?»', uz: '1-signal, jilmayib: «Xayrli kech, Grand Hotel, ismim Dilnoza, qanday yordam bera olaman?»', en: '1st ring, with a smile: "Good evening, Grand Hotel, this is Dilnoza, how may I help you?"' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Золотое правило: снять трубку не позже третьего гудка и назвать отель и своё имя. Ответ на 4-м гудке нарушает срок, даже если фраза образцовая; ответ на 3-м гудке после короткого извинения перед гостем у стойки — ровно то, что предписывает урок.',
      uz: 'Oltin qoida: trubkani uchinchi signaldan kechiktirmay ko\'tarish va mehmonxona nomi hamda o\'z ismingizni aytish. 4-signaldagi javob, ibora namunali bo\'lsa ham, muddatni buzadi; stoykadagi mehmondan qisqa uzr so\'rab, 3-signalda javob berish esa aynan dars buyurgan narsa.',
      en: 'The golden rule: answer by the third ring and state the hotel name and your own name. Answering on the 4th ring breaks the limit even with a perfect phrase; answering on the 3rd ring after a brief apology to the desk guest is exactly what the lesson prescribes.',
    },
  },
  {
    id: 'quiz-phone-communication-2',
    moduleSlug: 'phone-communication',
    question: {
      ru: 'Звонящий просит номер на 15–17 августа. По уроку, какие ключевые детали вы повторяете ему вслух для подтверждения?',
      uz: 'Qo\'ng\'iroq qiluvchi 15–17 avgustga xona so\'rayapti. Darsga ko\'ra tasdiqlash uchun qaysi asosiy tafsilotlarni ovoz chiqarib takrorlaysiz?',
      en: 'A caller asks for a room for 15–17 August. According to the lesson, which key details do you repeat back out loud to confirm?',
    },
    options: [
      { ru: 'Даты, цену за ночь и фамилию гостя', uz: 'Sanalar, bir kecha narxi va mehmon familiyasi', en: 'The dates, the nightly rate and the surname' },
      { ru: 'Тип номера, цену и телефон звонящего', uz: 'Xona turi, narx va qo\'ng\'iroq qiluvchi telefoni', en: 'The room type, the rate and the phone number' },
      { ru: 'Даты, тип номера и количество гостей', uz: 'Sanalar, xona turi va mehmonlar soni', en: 'The dates, the room type and the guest count' },
      { ru: 'Даты, количество гостей и способ оплаты', uz: 'Sanalar, mehmonlar soni va to\'lov usuli', en: 'The dates, the guest count and how they\'ll pay' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Урок: при бронировании повторяйте вслух даты, тип номера и количество гостей — «две ночи, с 15 по 17 августа, номер на двоих — верно?». Это исключает ошибки и показывает, что вы слушаете; цена, телефон и оплата в этом правиле не названы.',
      uz: 'Dars: bron qilishda sanalar, xona turi va mehmonlar sonini ovoz chiqarib takrorlang — «ikki kecha, 15–17 avgust, ikki kishilik xona — to\'g\'rimi?». Bu xatolarning oldini oladi va tinglayotganingizni ko\'rsatadi; narx, telefon va to\'lov bu qoidada tilga olinmagan.',
      en: 'The lesson: during a booking, repeat back the dates, the room type and the number of guests — "two nights, August 15th to 17th, a room for two — is that right?". This prevents errors and shows you are listening; price, phone number and payment are not named in this rule.',
    },
  },
  {
    id: 'quiz-phone-communication-3',
    moduleSlug: 'phone-communication',
    question: {
      ru: 'Стажёр завершает звонок: «Итак, Deluxe, 15–17 августа, двое гостей. Спасибо за звонок в Grand Hotel, до свидания!» — и сразу кладёт трубку. Что нарушено?',
      uz: 'Stajyor qo\'ng\'iroqni yakunlaydi: «Demak, Deluxe, 15–17 avgust, ikki mehmon. Grand Hotelga qo\'ng\'iroq qilganingiz uchun rahmat, xayr!» — va darhol trubkani qo\'yadi. Nima buzildi?',
      en: 'A trainee ends a call: "So, a Deluxe, 15–17 August, two guests. Thank you for calling the Grand Hotel, goodbye!" — and hangs up at once. What was broken?',
    },
    options: [
      { ru: 'Он подытожил детали до благодарности, а не после', uz: 'U tafsilotlarni rahmatdan keyin emas, oldin jamladi', en: 'He summarised the details before thanking, not after' },
      { ru: 'Он положил трубку первым, не дождавшись звонящего', uz: 'U qo\'ng\'iroq qiluvchini kutmay, birinchi bo\'lib trubkani qo\'ydi', en: 'He hung up first instead of waiting for the caller' },
      { ru: 'Он не попросил гостя самого повторить детали брони', uz: 'U mehmondan bron tafsilotlarini o\'zi takrorlashini so\'ramadi', en: 'He didn\'t ask the guest to repeat the booking details' },
      { ru: 'Он не назвал в конце разговора своё имя ещё раз', uz: 'U suhbat oxirida o\'z ismini yana bir bor aytmadi', en: 'He didn\'t give his own name again at the end' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Совет урока: подытожьте договорённость, поблагодарите и подождите, пока собеседник положит трубку первым, — это признак вежливости. Итог перед благодарностью — как раз образцовый порядок, а повторяет детали сотрудник, а не гость.',
      uz: 'Dars maslahati: kelishuvni jamlang, rahmat ayting va suhbatdosh birinchi bo\'lib trubkani qo\'yguncha kuting — bu xushmuomalalik belgisi. Rahmatdan oldin jamlash — aynan namunali tartib, tafsilotlarni esa mehmon emas, xodim takrorlaydi.',
      en: 'The lesson\'s tip: summarise what was agreed, thank the caller and wait for them to hang up first — a sign of courtesy. Summarising before thanking is exactly the model order, and it is the staff member, not the guest, who repeats the details.',
    },
  },
  {
    id: 'quiz-phone-communication-4',
    moduleSlug: 'phone-communication',
    question: {
      ru: 'Звонящий: «Есть номер на двоих с 15 по 17 августа?» Чтобы проверить наличие, вам нужна примерно минута. Какой ответ соответствует уроку?',
      uz: 'Qo\'ng\'iroq qiluvchi: «15–17 avgustga ikki kishilik xona bormi?» Bo\'sh joyni tekshirish uchun sizga taxminan bir daqiqa kerak. Qaysi javob darsga mos?',
      en: 'A caller: "Do you have a room for two from 15 to 17 August?" Checking availability will take you about a minute. Which reply matches the lesson?',
    },
    options: [
      { ru: '«Мне нужно посмотреть систему — перезвоните, пожалуйста, через 10 минут»', uz: '«Tizimni ko\'rishim kerak — iltimos, 10 daqiqadan keyin qayta qo\'ng\'iroq qiling»', en: '"I need to check the system — please call back in about 10 minutes"' },
      { ru: 'Молча поставить звонок на удержание и вернуться, когда проверите', uz: 'Indamay qo\'ng\'iroqni kutish rejimiga qo\'yib, tekshirgach qaytish', en: 'Put the caller on hold without a word and return once you\'ve checked' },
      { ru: '«Уверена, номера есть, — давайте я сразу оформлю вам бронь»', uz: '«Ishonchim komil, xona bor — keling, hoziroq bron qilib qo\'yaman»', en: '"I\'m sure we have rooms — let me make the booking straight away"' },
      { ru: 'Повторить даты и состав гостей и сказать: «Секунду, проверяю наличие»', uz: 'Sanalar va mehmonlar sonini takrorlab: «Bir soniya, tekshiryapman» deyish', en: 'Repeat the dates and guests, then say: "One moment while I check"' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'В образцовом диалоге сотрудник повторяет детали и говорит: «Секунду, проверяю наличие». Просьба перезвонить без попытки помочь в уроке звучит как отказ от работы, удержание без объяснения — названная ошибка, а бронировать без проверки и уточнения нельзя.',
      uz: 'Namunali dialogda xodim tafsilotlarni takrorlab: «Bir soniya, mavjudligini tekshiraman» deydi. Yordam berishga urinmasdan qayta qo\'ng\'iroq qilishni so\'rash darsda ishdan bosh tortishdek eshitiladi, tushuntirishsiz kutish rejimi — ko\'rsatilgan xato, tekshirmasdan va aniqlashtirmasdan bron qilib bo\'lmaydi.',
      en: 'In the model dialogue the receptionist repeats the details and says: "One moment while I check availability." Asking the caller to call back without trying to help sounds like refusing the job, a hold with no explanation is a listed mistake, and booking without checking or confirming is not acceptable.',
    },
  },

  // whatsapp-communication
  {
    id: 'quiz-whatsapp-communication-1',
    moduleSlug: 'whatsapp-communication',
    question: {
      ru: '14:10, рабочее время, у стойки очередь на заезд. Гостья пишет в WhatsApp вопрос о парковке. По уроку, до какого времени ответ ещё допустим?',
      uz: 'Soat 14:10, ish vaqti, stoykada ro\'yxatdan o\'tish uchun navbat bor. Mehmon ayol WhatsAppga avtoturargoh haqida yozadi. Darsga ko\'ra javob qaysi vaqtgacha hali joiz?',
      en: '14:10, working hours, with a check-in queue at the desk. A guest asks about parking on WhatsApp. According to the lesson, until what time is a reply still acceptable?',
    },
    options: [
      { ru: 'До 14:15 — задержка дольше пяти минут уже считается ошибкой', uz: '14:15 gacha — besh daqiqadan uzoq kechikish allaqachon xato', en: 'Until 14:15 — any delay over five minutes is already a mistake' },
      { ru: 'До 14:40 — в идеале через пару минут, но не позже получаса', uz: '14:40 gacha — ideal holda bir-ikki daqiqada, lekin yarim soatdan kech emas', en: 'Until 14:40 — ideally within minutes, but no later than half an hour' },
      { ru: 'До 15:10 — в течение часа, как для запроса с сайта отеля', uz: '15:10 gacha — bir soat ichida, mehmonxona saytidagi so\'rov kabi', en: 'Until 15:10 — within an hour, as for an enquiry from the website' },
      { ru: 'До 16:10 — в течение двух часов, как принято для e-mail', uz: '16:10 gacha — ikki soat ichida, email uchun odatdagidek', en: 'Until 16:10 — within two hours, as is usual for email' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Урок: в WhatsApp ждут ответа гораздо быстрее, чем на e-mail, — в идеале в течение нескольких минут, максимум в течение получаса в рабочее время. Пять минут — идеал, а не граница, а час и больше — уже ошибка «ответ с большой задержкой».',
      uz: 'Dars: WhatsAppda javob emaildan ancha tezroq kutiladi — ideal holda bir necha daqiqa ichida, ish vaqtida eng ko\'pi bilan yarim soat ichida. Besh daqiqa — chegara emas, ideal; bir soat va undan ko\'p esa «katta kechikish bilan javob» xatosi.',
      en: 'The lesson: on WhatsApp guests expect a reply much faster than by email — ideally within a few minutes, at most within half an hour during working hours. Five minutes is the ideal, not the limit, while an hour or more is already the "long delay" mistake.',
    },
  },
  {
    id: 'quiz-whatsapp-communication-2',
    moduleSlug: 'whatsapp-communication',
    question: {
      ru: 'Нужно ответить гостю в WhatsApp: время заезда, парковка, завтрак и дорога из аэропорта. Как урок советует оформить ответ?',
      uz: 'Mehmonga WhatsAppda javob berish kerak: kelish vaqti, avtoturargoh, nonushta va aeroportdan yo\'l. Dars javobni qanday rasmiylashtirishni maslahat beradi?',
      en: 'You need to answer a guest on WhatsApp about check-in time, parking, breakfast and getting from the airport. How does the lesson advise formatting the reply?',
    },
    options: [
      { ru: 'Одним подробным абзацем, чтобы всё было в одном месте', uz: 'Bitta batafsil abzats bilan, hammasi bir joyda bo\'lsin uchun', en: 'One detailed paragraph, so it\'s all in one place' },
      { ru: 'Голосовым сообщением: так лучше слышен тёплый тон', uz: 'Ovozli xabar bilan: shunda iliq ohang yaxshiroq eshitiladi', en: 'A voice message, so your warm tone comes through' },
      { ru: 'PDF-памяткой для гостей с короткой подписью', uz: 'Qisqa izohli mehmonlar uchun PDF eslatma bilan', en: 'A PDF guest guide with a short caption' },
      { ru: 'Несколькими короткими сообщениями по 1–2 фразы', uz: '1–2 gapdan iborat bir nechta qisqa xabar bilan', en: 'Several short messages of 1–2 sentences each' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Совет урока: избегайте «стены текста» — разбивайте ответ на короткие сообщения по 1–2 предложения, так гостю легче читать с телефона. Одно длинное неструктурированное сообщение прямо названо ошибкой, даже если в нём всё верно.',
      uz: 'Dars maslahati: «matn devori»dan saqlaning — javobni 1–2 gapdan iborat qisqa xabarlarga bo\'ling, shunda mehmonga telefondan o\'qish oson. Bitta uzun tuzilmasiz xabar, hatto hammasi to\'g\'ri bo\'lsa ham, to\'g\'ridan-to\'g\'ri xato deb ko\'rsatilgan.',
      en: 'The lesson\'s tip: avoid walls of text — break the reply into short messages of 1–2 sentences, which are easier to read on a phone. One long, unstructured message is named as a mistake even if everything in it is correct.',
    },
  },
  {
    id: 'quiz-whatsapp-communication-3',
    moduleSlug: 'whatsapp-communication',
    question: {
      ru: 'По телефону вы договорились с г-ном Кимом о брони. Какое сообщение в WhatsApp полностью выполняет правило «фиксируйте договорённости письменно»?',
      uz: 'Telefonda janob Kim bilan bron bo\'yicha kelishdingiz. Qaysi WhatsApp xabari «kelishuvlarni yozma mustahkamlang» qoidasini to\'liq bajaradi?',
      en: 'You agreed a booking with Mr. Kim by phone. Which WhatsApp message fully meets the rule "confirm agreements in writing"?',
    },
    options: [
      { ru: '«Подтверждаем: 15–17 августа, 420 000 сум/ночь, бесплатная отмена до 13.08 🙂»', uz: '«Tasdiqlaymiz: 15–17 avgust, kechasiga 420 000 so\'m, 13.08 gacha bepul bekor qilish 🙂»', en: '"Confirmed: 15–17 August, 420,000 sum/night, free cancellation until 13 Aug 🙂"' },
      { ru: '«Подтверждаем: Deluxe, 15–17 августа, 2 гостя. Ждём вас 15-го, господин Ким 🙂»', uz: '«Tasdiqlaymiz: Deluxe, 15–17 avgust, 2 mehmon. 15-sanada kutamiz, janob Kim 🙂»', en: '"Confirmed: Deluxe, 15–17 August, 2 guests. See you on the 15th, Mr. Kim 🙂"' },
      { ru: '«Подтверждаем: 420 000 сум за ночь, завтрак включён. Ждём вас, господин Ким 🙂»', uz: '«Tasdiqlaymiz: kechasiga 420 000 so\'m, nonushta kiritilgan. Kutamiz, janob Kim 🙂»', en: '"Confirmed: 420,000 sum per night, breakfast included. See you soon, Mr. Kim 🙂"' },
      { ru: '«Подтверждаем бронь № 48213, как обсудили по телефону. До встречи, господин Ким 🙂»', uz: '«48213-raqamli bronni telefonda kelishganimizdek tasdiqlaymiz. Ko\'rishguncha, janob Kim 🙂»', en: '"Confirmed: booking no. 48213, as discussed by phone. See you soon, Mr. Kim 🙂"' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Урок: после звонка отправьте короткое сообщение с итогами — даты, цена, условия. Все три элемента есть только в сообщении с датами, ценой и сроком бесплатной отмены; в остальных не хватает цены и условий, дат или вообще всех деталей.',
      uz: 'Dars: qo\'ng\'iroqdan so\'ng natijalar bilan qisqa xabar yuboring — sanalar, narx, shartlar. Uchala element faqat sanalar, narx va bepul bekor qilish muddati ko\'rsatilgan xabarda bor; qolganlarida narx va shartlar, sanalar yoki umuman barcha tafsilotlar yo\'q.',
      en: 'The lesson: after a call, send a short summary — dates, price, conditions. Only the message with dates, price and the free-cancellation deadline has all three; the others miss the price and conditions, the dates, or every detail.',
    },
  },
  {
    id: 'quiz-whatsapp-communication-4',
    moduleSlug: 'whatsapp-communication',
    question: {
      ru: '16:20. Гость пишет: «Можно трансфер в аэропорт завтра в 05:00?» Чтобы ответить, нужно связаться с водителем — это около 20 минут. Что делаете сразу?',
      uz: 'Soat 16:20. Mehmon yozadi: «Ertaga 05:00 da aeroportga transfer bo\'ladimi?» Javob uchun haydovchi bilan bog\'lanish kerak — taxminan 20 daqiqa. Darhol nima qilasiz?',
      en: '16:20. A guest writes: "Can I get an airport transfer at 05:00 tomorrow?" To answer, you must reach the driver — about 20 minutes. What do you do right away?',
    },
    options: [
      { ru: 'Пока ничего: дождаться водителя и прислать одно полное сообщение', uz: 'Hozircha hech narsa: haydovchini kutib, bitta to\'liq xabar yuborish', en: 'Nothing yet: wait for the driver, then send one complete message' },
      { ru: 'Переслать чат ночной смене, раз трансфер нужен только утром', uz: 'Transfer faqat ertalab kerakligi uchun chatni tungi smenaga o\'tkazish', en: 'Pass the chat to the night shift, since the transfer is in the morning' },
      { ru: 'Написать, что уточняете у водителя и ответите в течение 20 минут', uz: 'Haydovchidan aniqlayotganingizni va 20 daqiqa ichida javob berishingizni yozish', en: 'Write that you\'re checking with the driver and will reply within 20 minutes' },
      { ru: 'Сразу ответить «Да, конечно!», а время согласовать с водителем позже', uz: 'Darhol «Ha, albatta!» deb javob berib, vaqtni haydovchi bilan keyin kelishish', en: 'Reply "Yes, of course!" at once and agree the time with the driver later' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Золотое правило: в мессенджере ждут почти мгновенной реакции — если ответ требует уточнения, сразу напишите об этом и назовите срок, как в образце урока («напишу вам в течение 15 минут»). Молчать ради «полного ответа» — ошибка, а обещать трансфер до проверки нельзя.',
      uz: 'Oltin qoida: messenjerda deyarli darhol javob kutiladi — agar javob aniqlashtirishni talab qilsa, buni darhol yozing va muddatni ayting, dars namunasidagidek («15 daqiqa ichida sizga yozaman»). «To\'liq javob» uchun jim turish — xato, tekshirmasdan transferni va\'da qilish esa mumkin emas.',
      en: 'The golden rule: in a messenger guests expect an almost instant reaction — if the answer needs checking, say so right away and give a time frame, as in the lesson\'s model ("I\'ll get back to you within 15 minutes"). Staying silent for a "complete answer" is a mistake, and promising the transfer before checking is not acceptable.',
    },
  },

  // booking-com-guests
  {
    id: 'quiz-booking-com-guests-1',
    moduleSlug: 'booking-com-guests',
    question: {
      ru: 'Утром вы готовите сегодняшние заезды с Booking.com. Что, по уроку, нужно сделать с каждой такой бронью до прихода гостя?',
      uz: 'Ertalab bugungi Booking.com kelishlarini tayyorlayapsiz. Darsga ko\'ra har bir shunday bron bilan mehmon kelishidan oldin nima qilish kerak?',
      en: 'In the morning you prepare today\'s Booking.com arrivals. According to the lesson, what must you do with each such booking before the guest arrives?',
    },
    options: [
      { ru: 'Позвонить гостю и подтвердить даты, тип номера и время приезда', uz: 'Mehmonga qo\'ng\'iroq qilib, sanalar, xona turi va kelish vaqtini tasdiqlash', en: 'Call the guest to confirm the dates, room type and arrival time' },
      { ru: 'Сверить Экстранет с PMS по датам и типу номера, а тариф оставить платформе', uz: 'Ekstranetni PMS bilan sana va xona turi bo\'yicha solishtirib, tarifni platformaga qoldirish', en: 'Match Extranet to PMS on dates and room type, leaving the rate to the platform' },
      { ru: 'Сверить Экстранет с PMS: даты, номер, тариф, завтрак, оплату и отмену', uz: 'Ekstranetni PMS bilan solishtirish: sanalar, xona, tarif, nonushta, to\'lov, bekor qilish', en: 'Match Extranet to PMS: dates, room, rate, breakfast, payment, cancellation' },
      { ru: 'Сравнить цену в Экстранете с ценой на сайте отеля, чтобы не было вопросов', uz: 'Savol tug\'ilmasligi uchun Ekstranetdagi narxni mehmonxona saytidagi narx bilan solishtirish', en: 'Compare the Extranet price with the hotel website price to avoid questions' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Урок: OTA-бронь приходит из внешней системы, поэтому первым шагом всегда сверяют Экстранет с PMS — даты, тип номера, тариф, включён ли завтрак, статус оплаты и возможность отмены. Оставить тариф «на совести платформы» — та же ошибка, что и отсутствие сверки.',
      uz: 'Dars: OTA broni tashqi tizimdan keladi, shuning uchun birinchi qadam har doim Ekstranetni PMS bilan solishtirish — sanalar, xona turi, tarif, nonushta kiritilganmi, to\'lov holati va bekor qilish imkoniyati. Tarifni «platformaga qoldirish» — solishtirmaslik bilan bir xil xato.',
      en: 'The lesson: an OTA booking comes from an external system, so the first step is always to match the Extranet against the PMS — dates, room type, rate, whether breakfast is included, payment status and cancellability. Leaving the rate "to the platform" is the same mistake as skipping the check.',
    },
  },
  {
    id: 'quiz-booking-com-guests-2',
    moduleSlug: 'booking-com-guests',
    question: {
      ru: 'При заезде гость с Booking.com спрашивает: «Если планы изменятся, я смогу отменить и вернуть деньги?» Его тариф невозвратный. Какой ответ соответствует уроку?',
      uz: 'Ro\'yxatdan o\'tishda Booking.com mehmoni so\'raydi: «Rejalar o\'zgarsa, bekor qilib, pulni qaytarib olamanmi?» Uning tarifi qaytarilmaydigan. Qaysi javob darsga mos?',
      en: 'At check-in a Booking.com guest asks: "If my plans change, can I cancel and get a refund?" His rate is non-refundable. Which reply matches the lesson?',
    },
    options: [
      { ru: '«Тариф невозвратный: он дешевле, но предоплата не вернётся. Показать ваучер?»', uz: '«Tarifingiz qaytarilmaydigan: arzonroq, ammo to\'lov qaytmaydi. Voucherni ko\'rsataymi?»', en: '"It\'s non-refundable: cheaper, but the prepayment isn\'t returned. Shall I show you?"' },
      { ru: '«Отмена оформляется только в приложении Booking.com — напишите, пожалуйста, им»', uz: '«Bekor qilish faqat Booking.com ilovasida qilinadi — iltimos, ularga yozing»', en: '"Cancellations are handled only in the Booking.com app — please contact them"' },
      { ru: '«Я уточню у менеджера, можно ли для вас сделать исключение из правил»', uz: '«Siz uchun qoidadan istisno qilish mumkinmi, menejerdan so\'rab beraman»', en: '"I\'ll ask my manager whether we can make an exception for you"' },
      { ru: '«Да, но отменить нужно через Booking.com не позже чем за сутки»', uz: '«Ha, lekin Booking.com orqali kamida bir kun oldin bekor qilish kerak»', en: '"Yes, but you need to cancel via Booking.com at least a day ahead"' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'В образцовом диалоге урока сотрудник сам объясняет условие: тариф невозвратный, он дешевле, предоплата при отмене не возвращается, — и предлагает показать это в ваучере. Отсылать гостя к Booking.com — уход от ответственности из плохого диалога, а обещать отмену или исключение — вводить гостя в заблуждение.',
      uz: 'Darsning namunali dialogida xodim shartni o\'zi tushuntiradi: tarif qaytarilmaydigan, u arzonroq, bekor qilinganda oldindan to\'lov qaytarilmaydi — va buni voucherda ko\'rsatishni taklif qiladi. Mehmonni Booking.comga yuborish — yomon dialogdagi mas\'uliyatdan qochish, bekor qilish yoki istisno va\'da qilish esa mehmonni chalg\'itish.',
      en: 'In the lesson\'s model dialogue the receptionist explains the condition personally: the rate is non-refundable, it is cheaper, and the prepayment is not returned on cancellation — and offers to show it on the voucher. Referring the guest to Booking.com is the deflection from the bad dialogue, and promising a cancellation or an exception misleads the guest.',
    },
  },
  {
    id: 'quiz-booking-com-guests-3',
    moduleSlug: 'booking-com-guests',
    question: {
      ru: 'Гость с Booking.com: «На вашем сайте этот номер дешевле, чем я заплатил. Почему?» Как, по уроку, правильно ответить?',
      uz: 'Booking.com mehmoni: «Saytingizda bu xona men to\'laganimdan arzonroq. Nega?» Darsga ko\'ra qanday to\'g\'ri javob berish kerak?',
      en: 'A Booking.com guest: "This room is cheaper on your website than what I paid. Why?" According to the lesson, how should you answer?',
    },
    options: [
      { ru: 'Объяснить, что Booking.com берёт комиссию, поэтому напрямую всегда дешевле', uz: 'Booking.com komissiya olishini, shuning uchun to\'g\'ridan-to\'g\'ri doim arzonligini tushuntirish', en: 'Explain that Booking.com takes a commission, so direct is always cheaper' },
      { ru: 'Вернуть разницу на месте, чтобы гость не уехал с плохим впечатлением', uz: 'Mehmon yomon taassurot bilan ketmasligi uchun farqni joyida qaytarish', en: 'Refund the difference on the spot so he doesn\'t leave unhappy' },
      { ru: 'Предложить ему обратиться в поддержку Booking.com за разъяснением цены', uz: 'Narxni tushuntirish uchun Booking.com qo\'llab-quvvatlash xizmatiga murojaat qilishni taklif qilish', en: 'Suggest he contact Booking.com support for an explanation of the price' },
      { ru: 'Спокойно объяснить политику паритета цен, не критикуя платформу', uz: 'Platformani tanqid qilmasdan, narx paritet siyosatini xotirjam tushuntirish', en: 'Calmly explain the rate-parity policy without criticising the platform' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Урок: на вопрос о разнице цен на сайте отеля и на Booking.com объясните политику паритета цен, не критикуя платформу и не смущая гостя. Рассказ о «комиссии Booking.com» — критика платформы при госте, прямо названная ошибкой, а отсылка в поддержку — уход от ответа.',
      uz: 'Dars: mehmonxona sayti va Booking.comdagi narx farqi haqidagi savolga platformani tanqid qilmasdan va mehmonni noqulay ahvolga solmasdan narx paritet siyosatini tushuntiring. «Booking.com komissiyasi» haqida gapirish — mehmon oldida platformani tanqid qilish, bu xato deb ko\'rsatilgan, qo\'llab-quvvatlash xizmatiga yuborish esa javobdan qochish.',
      en: 'The lesson: when asked why the hotel website price differs from Booking.com, explain the rate-parity policy without criticising the platform or embarrassing the guest. Talking about "Booking.com\'s commission" is criticising the platform in front of the guest — a listed mistake — and sending him to support is avoiding the question.',
    },
  },
  {
    id: 'quiz-booking-com-guests-4',
    moduleSlug: 'booking-com-guests',
    question: {
      ru: 'За смену администраторы обслужили четырёх гостей с Booking.com. Какое из их действий урок называет ошибкой?',
      uz: 'Smena davomida administratorlar to\'rtta Booking.com mehmoniga xizmat ko\'rsatdi. Ularning qaysi harakatini dars xato deb ataydi?',
      en: 'During the shift, receptionists served four Booking.com guests. Which of their actions does the lesson call a mistake?',
    },
    options: [
      { ru: 'Уже при заезде напомнить, что тариф невозвратный и предоплаченный', uz: 'Ro\'yxatdan o\'tishdayoq tarif qaytarilmaydigan va oldindan to\'langanini eslatish', en: 'Reminding the guest at check-in that the rate is prepaid and non-refundable' },
      { ru: 'На выезде сказать: «Оценка 9 или 10 на Booking.com нам очень поможет»', uz: 'Chiqishda: «Booking.comdagi 9 yoki 10 baho bizga juda yordam beradi» deyish', en: 'Saying at check-out: "A 9 or 10 on Booking.com would really help us"' },
      { ru: 'Сверить бронь в Экстранете с записью в PMS ещё до приезда гостя', uz: 'Mehmon kelishidan oldin Ekstranetdagi bronni PMSdagi yozuv bilan solishtirish', en: 'Matching the Extranet booking with the PMS record before arrival' },
      { ru: 'На выезде пригласить гостя оставить честный отзыв на Booking.com', uz: 'Chiqishda mehmonni Booking.comda halol sharh qoldirishga taklif qilish', en: 'Inviting the guest to leave an honest Booking.com review at check-out' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Урок прямо запрещает просить высокую оценку: на выезде приглашают оставить честный отзыв («будем благодарны за отзыв — это помогает нам расти»). Напоминание об условиях тарифа при заезде и сверка Экстранета с PMS — золотые правила, а не ошибки.',
      uz: 'Dars yuqori bahoni so\'rashni to\'g\'ridan-to\'g\'ri taqiqlaydi: chiqishda halol sharh qoldirishga taklif qilinadi («sharh qoldirsangiz minnatdor bo\'lardik — bu bizga rivojlanishga yordam beradi»). Ro\'yxatdan o\'tishda tarif shartlarini eslatish va Ekstranetni PMS bilan solishtirish — xato emas, oltin qoidalar.',
      en: 'The lesson explicitly rules out asking for a high score: at check-out you invite an honest review ("we\'d really appreciate a review — it helps us grow"). Reminding the guest of rate conditions at check-in and matching the Extranet with the PMS are golden rules, not mistakes.',
    },
  },

  // walk-in-guests
  {
    id: 'quiz-walk-in-guests-1',
    moduleSlug: 'walk-in-guests',
    question: {
      ru: 'Пара без брони просит номер. Вы уточнили: одна ночь, два гостя. Свободны шесть категорий. Что вы предлагаете по уроку?',
      uz: 'Bronsiz er-xotin xona so\'rayapti. Aniqlashtirdingiz: bir kecha, ikki mehmon. Oltita toifa bo\'sh. Darsga ko\'ra nimani taklif qilasiz?',
      en: 'A couple without a booking asks for a room. You have clarified: one night, two guests. Six categories are free. What do you offer, per the lesson?',
    },
    options: [
      { ru: 'Все шесть категорий с ценами, чтобы гости выбрали сами', uz: 'Mehmonlar o\'zlari tanlashi uchun narxlari bilan oltala toifa', en: 'All six categories with prices so the guests can choose' },
      { ru: 'Только самый дешёвый номер — гости без брони экономят', uz: 'Faqat eng arzon xona — bronsiz mehmonlar tejashni xohlaydi', en: 'Only the cheapest room — walk-in guests want to save' },
      { ru: 'Три варианта — эконом, средний и премиум, — чтобы был выбор', uz: 'Uchta variant — ekonom, o\'rta va premium — tanlov bo\'lsin uchun', en: 'Three options — budget, mid-range and premium — to give a choice' },
      { ru: 'Один-два подходящих варианта, у каждого — чёткая цена', uz: 'Bir-ikkita mos variant, har birining aniq narxi bilan', en: 'One or two suitable options, each with a clear price' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Золотое правило урока: уточнив число ночей и гостей, предложите один-два конкретных варианта с ценой, как в образце (Standard за 350 000 и Superior за 420 000 сум). Длинный список утомляет уставшего гостя, а только самый дешёвый номер — ошибка «одна цена без вариантов».',
      uz: 'Darsning oltin qoidasi: kecha va mehmonlar sonini aniqlagach, narxi bilan bir-ikkita aniq variant taklif qiling, namunadagidek (Standard 350 000 va Superior 420 000 so\'m). Uzun ro\'yxat charchagan mehmonni toliqtiradi, faqat eng arzon xona esa «variantsiz bitta narx» xatosi.',
      en: 'The lesson\'s golden rule: after clarifying nights and guests, offer one or two concrete options with prices, as in the model (Standard at 350,000 and Superior at 420,000 sum). A long list tires a weary guest, and only the cheapest room is the "one price, no options" mistake.',
    },
  },
  {
    id: 'quiz-walk-in-guests-2',
    moduleSlug: 'walk-in-guests',
    question: {
      ru: '22:30, отель полностью занят. Вы извинились перед уставшим гостем без брони. Какой следующий шаг полностью соответствует золотому правилу?',
      uz: 'Soat 22:30, mehmonxona to\'liq band. Siz bronsiz charchagan mehmondan uzr so\'radingiz. Qaysi keyingi qadam oltin qoidaga to\'liq mos keladi?',
      en: '22:30, the hotel is fully booked. You have apologised to a tired walk-in guest. Which next step fully meets the golden rule?',
    },
    options: [
      { ru: 'Посоветовать поискать номер поблизости в приложении Booking.com', uz: 'Yaqin atrofdan Booking.com ilovasida xona qidirishni maslahat berish', en: 'Suggest searching the Booking.com app for a room nearby' },
      { ru: 'Предложить подождать в лобби — вдруг до полуночи кто-то не заедет', uz: 'Lobbida kutishni taklif qilish — balki yarim tungacha kimdir kelmas', en: 'Offer a seat in the lobby in case of a no-show before midnight' },
      { ru: 'Порекомендовать партнёрский отель рядом и помочь туда дозвониться', uz: 'Yaqindagi hamkor mehmonxonani tavsiya qilib, qo\'ng\'iroq qilishga yordam berish', en: 'Recommend a nearby partner hotel and help the guest call them' },
      { ru: 'Назвать два-три отеля поблизости и показать дорогу к ним на карте', uz: 'Yaqindagi ikki-uchta mehmonxonani aytib, xaritada yo\'lni ko\'rsatish', en: 'Name two or three nearby hotels and show the way on a map' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Золотое правило: при полной загрузке никогда не ограничивайтесь «мест нет» — предложите партнёрский отель, с которым есть договорённость, и помогите гостю связаться с ним. Приложение, ожидание no-show или случайные отели на карте не дают гостю надёжной помощи.',
      uz: 'Oltin qoida: to\'liq band bo\'lganda hech qachon «joy yo\'q» bilan cheklanmang — kelishuvingiz bor hamkor mehmonxonani taklif qiling va mehmonga u bilan bog\'lanishga yordam bering. Ilova, no-show kutish yoki xaritadagi tasodifiy mehmonxonalar mehmonga ishonchli yordam bermaydi.',
      en: 'The golden rule: when fully booked, never stop at "we\'re full" — offer a partner hotel you have an arrangement with and help the guest get in touch. An app, waiting for a no-show or random hotels on a map give the guest no reliable help.',
    },
  },
  {
    id: 'quiz-walk-in-guests-3',
    moduleSlug: 'walk-in-guests',
    question: {
      ru: 'Гость без брони заселился в Superior за 420 000 сум. Что, по уроку, стоит сказать ему про следующий визит и в какой момент?',
      uz: 'Bronsiz mehmon 420 000 so\'mlik Superior xonaga joylashdi. Darsga ko\'ra unga keyingi tashrif haqida nima va qaysi paytda aytish kerak?',
      en: 'A walk-in guest has checked into a Superior at 420,000 sum. According to the lesson, what should you tell him about his next visit, and when?',
    },
    options: [
      { ru: 'После заселения: при прямой брони через сайт или звонок тариф выгоднее', uz: 'Joylashgach: sayt yoki qo\'ng\'iroq orqali to\'g\'ridan-to\'g\'ri bronda tarif qulayroq', en: 'After check-in: booking direct by website or phone gets a better rate' },
      { ru: 'До заселения: в следующий раз удобнее бронировать через Booking.com', uz: 'Joylashishdan oldin: keyingi safar Booking.com orqali bron qilish qulayroq', en: 'Before check-in: next time it is easier to book through Booking.com' },
      { ru: 'На выезде: отзыв на Booking.com даст ему скидку в следующий приезд', uz: 'Chiqishda: Booking.comdagi sharh unga keyingi safar chegirma beradi', en: 'At check-out: a Booking.com review earns him a discount next time' },
      { ru: 'При оплате: для гостей без брони сегодняшний тариф всегда самый низкий', uz: 'To\'lovda: bronsiz mehmonlar uchun bugungi tarif doim eng past', en: 'At payment: today\'s walk-in rate is always the lowest available' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Совет урока: после успешного заселения расскажите, что при следующем прямом бронировании через сайт или по телефону гостя ждёт более выгодный тариф, — это стимулирует вернуться напрямую. Промолчать о выгодах прямой брони урок называет ошибкой.',
      uz: 'Dars maslahati: muvaffaqiyatli joylashtirilgandan so\'ng mehmonga keyingi safar sayt yoki telefon orqali to\'g\'ridan-to\'g\'ri bron qilsa, qulayroq tarif kutayotganini ayting — bu to\'g\'ridan-to\'g\'ri qaytishga undaydi. To\'g\'ridan-to\'g\'ri bron afzalliklari haqida aytmaslikni dars xato deb ataydi.',
      en: 'The lesson\'s tip: after a successful check-in, tell the guest that booking directly next time via the website or by phone earns a better rate — this encourages a direct return. Not mentioning direct-booking benefits is listed as a mistake.',
    },
  },
  {
    id: 'quiz-walk-in-guests-4',
    moduleSlug: 'walk-in-guests',
    question: {
      ru: 'Гость без брони: «У вас есть свободный номер на сегодня?» Вы не помните текущую загрузку. Какой ответ соответствует уроку?',
      uz: 'Bronsiz mehmon: «Bugunga bo\'sh xonangiz bormi?» Siz joriy bandlikni eslay olmaysiz. Qaysi javob darsga mos?',
      en: 'A walk-in guest: "Do you have a free room tonight?" You don\'t remember the current occupancy. Which reply matches the lesson?',
    },
    options: [
      { ru: '«Даже не знаю… сейчас посмотрю, может, что-то и найдётся»', uz: '«Bilmadim-a… hozir qarayman, balki biror narsa topilar»', en: '"I\'m not sure… let me look, maybe there\'s something left"' },
      { ru: '«Конечно, посмотрим, что у нас есть!» — и сразу проверить систему', uz: '«Albatta, nima borligini ko\'ramiz!» — va darhol tizimni tekshirish', en: '"Of course, let\'s see what we have!" — and check the system at once' },
      { ru: '«Да, Standard за 350 000 сум», — по памяти, а проверить потом', uz: '«Ha, 350 000 so\'mlik Standard» — yoddan, tekshirish esa keyin', en: '"Yes, a Standard at 350,000 sum" — from memory, checking later' },
      { ru: '«Минуту, уточню у хаускипинга, какие номера уже убраны»', uz: '«Bir daqiqa, xaus-kipingdan qaysi xonalar tozalanganini so\'rayman»', en: '"One moment, I\'ll ask housekeeping which rooms are ready"' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Урок: проверяйте наличие быстро и уверенно — как в образце: «Конечно, посмотрим, что у нас есть!». Неуверенное «может, что-то и найдётся» — ошибка из плохого диалога, а цена «по памяти» до проверки системы может оказаться неверной.',
      uz: 'Dars: mavjudlikni tez va ishonch bilan tekshiring — namunadagidek: «Albatta, nima borligini ko\'ramiz!». Ishonchsiz «balki biror narsa bordir» — yomon dialogdagi xato, tizimni tekshirmasdan «yoddan» aytilgan narx esa noto\'g\'ri chiqishi mumkin.',
      en: 'The lesson: check availability quickly and confidently — as in the model: "Of course, let\'s see what we have!". A hesitant "maybe there\'s something" is the bad-dialogue mistake, and a price "from memory" before checking the system may well be wrong.',
    },
  },

  // upselling-rooms
  {
    id: 'quiz-upselling-rooms-1',
    moduleSlug: 'upselling-rooms',
    question: {
      ru: 'Гость прилетел ночным рейсом, у него Standard. Свободен Deluxe на верхнем этаже с видом на парк, +15 $. Какая фраза соответствует правилу «говорите конкретно»?',
      uz: 'Mehmon tungi reys bilan uchib keldi, unda Standard bron. Yuqori qavatda park manzarali Deluxe bo\'sh, +15 $. Qaysi ibora «aniq gapiring» qoidasiga mos?',
      en: 'A guest arrived on a night flight with a Standard booked. A Deluxe on a high floor with a park view is free for +$15. Which phrase fits the rule "be specific"?',
    },
    options: [
      { ru: '«Всего 15 $ разницы — верхний этаж с видом на парк, удобно после перелёта»', uz: '«Atigi 15 $ farq bilan — park manzarali yuqori qavat, parvozdan keyin qulay»', en: '"For just $15 more — a high floor with a park view, ideal after your flight"' },
      { ru: '«Не хотите ли номер Deluxe за дополнительную плату на эту ночь?»', uz: '«Bu kechaga qo\'shimcha to\'lov evaziga Deluxe xonani xohlamaysizmi?»', en: '"Would you like a Deluxe room tonight for an additional charge?"' },
      { ru: '«Наш Deluxe стоит 95 $ за ночь, и это самый популярный номер у наших гостей»', uz: '«Deluxe xonamiz kechasiga 95 $, bu mehmonlar orasida eng mashhur xona»', en: '"Our Deluxe is $95 a night, and it\'s the most popular room with guests"' },
      { ru: '«Deluxe тише и выше этажом — оформить его для вас прямо сейчас?»', uz: '«Deluxe tinchroq va yuqoriroq qavatda — hoziroq siz uchun rasmiylashtiraymi?»', en: '"The Deluxe is quieter and on a higher floor — shall I arrange it now?"' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Золотое правило: говорите конкретно — цена, разница, преимущество. «За дополнительную плату» — пример из урока, как говорить не нужно; полная цена без разницы и выгоды, как и выгода без цены, правило не выполняют.',
      uz: 'Oltin qoida: aniq gapiring — narx, farq, afzallik. «Qo\'shimcha to\'lov evaziga» — darsdagi qanday gapirmaslik kerakligi misoli; farq va foydasiz to\'liq narx ham, narxsiz foyda ham qoidani bajarmaydi.',
      en: 'The golden rule: be specific — price, difference, benefit. "For an additional charge" is the lesson\'s example of what not to say; a full price without the difference and benefit, or a benefit without a price, does not meet the rule.',
    },
  },
  {
    id: 'quiz-upselling-rooms-2',
    moduleSlug: 'upselling-rooms',
    question: {
      ru: 'Семья с двумя детьми после 9-часового перелёта, бронь Standard. Можно продать: семейный номер, завтрак, трансфер обратно, поздний выезд. Как поступить по уроку?',
      uz: 'Ikki bolali oila 9 soatlik parvozdan keyin, Standard bron. Sotish mumkin: oilaviy xona, nonushta, qaytish transferi, kech chiqish. Darsga ko\'ra qanday yo\'l tutasiz?',
      en: 'A family with two children after a 9-hour flight, booked into a Standard. You could sell a family room, breakfast, a return transfer and late check-out. What does the lesson say to do?',
    },
    options: [
      { ru: 'Коротко перечислить все четыре опции, чтобы семья выбрала нужное', uz: 'Oila keraklisini tanlashi uchun to\'rtala variantni qisqacha sanab o\'tish', en: 'Briefly list all four options so the family can pick what they need' },
      { ru: 'Выбрать одну самую уместную для этой семьи опцию и предложить только её', uz: 'Shu oila uchun eng mos bitta variantni tanlab, faqat uni taklif qilish', en: 'Pick the one option most relevant to this family and offer only that' },
      { ru: 'Предложить две самые уместные опции сразу, чтобы сэкономить время', uz: 'Vaqtni tejash uchun eng mos ikkita variantni birdaniga taklif qilish', en: 'Offer the two most relevant options together to save everyone time' },
      { ru: 'Начать с самой дорогой опции и спускаться ниже, пока семья не согласится', uz: 'Eng qimmat variantdan boshlab, oila rozi bo\'lguncha arzonrog\'iga tushish', en: 'Start with the priciest option and move down until the family agrees' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Совет урока: не перечисляйте сразу номер, завтрак, трансфер и поздний выезд — это утомляет; выберите один самый уместный для этого гостя вариант. Две опции сразу — та же ошибка «несколько допродаж одновременно», а «спускаться» по списку после отказа нарушает правило «один отказ — стоп».',
      uz: 'Dars maslahati: xona, nonushta, transfer va kech chiqishni birdaniga sanab o\'tmang — bu charchatadi; shu mehmon uchun eng mos bitta variantni tanlang. Birdaniga ikkita taklif — o\'sha «bir vaqtda bir nechta qo\'shimcha sotuv» xatosi, rad javobidan keyin ro\'yxat bo\'ylab «pastga tushish» esa «bir rad — to\'xtash» qoidasini buzadi.',
      en: 'The lesson\'s tip: don\'t list the upgrade, breakfast, transfer and late check-out all at once — it is overwhelming; pick the one option most relevant to this guest. Two offers at once is the same "several upsells at once" mistake, and working down the list after a decline breaks the "one decline means stop" rule.',
    },
  },
  {
    id: 'quiz-upselling-rooms-3',
    moduleSlug: 'upselling-rooms',
    question: {
      ru: 'Вечером гость вежливо отказался от Deluxe за +15 $. Утром за завтраком вы узнаёте, что доплата за Deluxe снизилась до +10 $. Как поступить по уроку?',
      uz: 'Kechqurun mehmon +15 $ lik Deluxedan muloyimlik bilan voz kechdi. Ertalab nonushtada Deluxe uchun qo\'shimcha to\'lov +10 $ gacha tushganini bilasiz. Darsga ko\'ra qanday yo\'l tutasiz?',
      en: 'In the evening a guest politely declined a Deluxe for +$15. At breakfast you learn the Deluxe supplement has dropped to +$10. What does the lesson say to do?',
    },
    options: [
      { ru: 'Предложить ещё раз: новая цена — это уже новое предложение', uz: 'Yana taklif qilish: yangi narx — bu allaqachon yangi taklif', en: 'Offer again: a new price makes it a new offer' },
      { ru: 'Предложить ещё раз: утро — это уже новый разговор с гостем', uz: 'Yana taklif qilish: tong — bu mehmon bilan yangi suhbat', en: 'Offer again: the morning is a new conversation' },
      { ru: 'Не предлагать: после одного вежливого отказа к теме не возвращаются', uz: 'Taklif qilmaslik: bir marta muloyim rad etilgach, mavzuga qaytilmaydi', en: 'Don\'t offer: after one polite decline you don\'t go back to it' },
      { ru: 'Не предлагать лично, но оставить в номере буклет с новой, сниженной ценой', uz: 'Shaxsan taklif qilmay, xonada yangi narxli buklet qoldirish', en: 'Don\'t offer in person, but leave a leaflet with the new price' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Золотое правило: если гость один раз сказал «нет», не повторяйте предложение в другой форме — уважение к его решению важнее упущенной допродажи. Новая цена, новое утро или буклет в номере — это всё то же повторное предложение.',
      uz: 'Oltin qoida: agar mehmon bir marta «yo\'q» desa, taklifni boshqa shaklda takrorlamang — uning qaroriga hurmat qo\'shimcha sotuvdan muhimroq. Yangi narx, yangi tong yoki xonadagi buklet — bularning bari o\'sha takroriy taklif.',
      en: 'The golden rule: if the guest says "no" once, do not repeat the offer in another form — respecting the decision matters more than a missed sale. A new price, a new morning or a leaflet in the room is still a repeated offer.',
    },
  },
  {
    id: 'quiz-upselling-rooms-4',
    moduleSlug: 'upselling-rooms',
    question: {
      ru: 'Гость только подошёл к стойке, у него бронь Standard, свободен Deluxe. Что, по уроку, нужно сделать ДО любого предложения апгрейда?',
      uz: 'Mehmon endigina stoykaga keldi, unda Standard bron, Deluxe bo\'sh. Darsga ko\'ra har qanday upgrade taklifidan OLDIN nima qilish kerak?',
      en: 'A guest has just reached the desk with a Standard booked; a Deluxe is free. According to the lesson, what must you do BEFORE making any upgrade offer?',
    },
    options: [
      { ru: 'Взять преавторизацию карты, чтобы доплату можно было сразу списать', uz: 'Qo\'shimcha to\'lovni darhol yechish uchun karta preavtorizatsiyasini olish', en: 'Take a card pre-authorisation so the supplement can be charged at once' },
      { ru: 'Завершить регистрацию и выдать ключ, чтобы гость не ждал', uz: 'Mehmon kutmasligi uchun ro\'yxatdan o\'tkazishni tugatib, kalitni berish', en: 'Finish registration and hand over the key so the guest doesn\'t wait' },
      { ru: 'Проверить, бронировал ли гость напрямую, а не через Booking.com', uz: 'Mehmon Booking.com orqali emas, to\'g\'ridan-to\'g\'ri bron qilganini tekshirish', en: 'Check whether the guest booked direct rather than via Booking.com' },
      { ru: 'Узнать цель поездки и считать сигналы гостя: усталость, дети, праздник', uz: 'Safar maqsadini bilish va mehmon belgilarini o\'qish: charchoq, bolalar, bayram', en: 'Learn the purpose of the trip and read the cues: fatigue, kids, an occasion' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Урок называет ошибкой апселлинг до того, как вы узнали цель поездки, а золотое правило — читать сигналы гостя перед предложением: усталость после перелёта, семья с детьми, годовщина. Остальные шаги урок перед предложением не требует.',
      uz: 'Dars safar maqsadini bilmasdan turib upselling qilishni xato deb ataydi, oltin qoida esa — taklifdan oldin mehmon belgilarini o\'qish: parvozdan keyingi charchoq, bolali oila, yubiley. Qolgan qadamlarni dars taklifdan oldin talab qilmaydi.',
      en: 'The lesson lists upselling before learning the purpose of the trip as a mistake, and its golden rule is to read the guest\'s cues before offering: fatigue after a flight, a family with children, an anniversary. The other steps are not required by the lesson before an offer.',
    },
  },
]
