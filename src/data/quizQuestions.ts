import type { QuizQuestion } from '@/types'

export const quizQuestions: QuizQuestion[] = [
  // greeting-guests
  {
    id: 'quiz-greeting-guests-1',
    moduleSlug: 'greeting-guests',
    question: {
      ru: 'Гость подошёл к стойке ресепшена, пока вы заняты оформлением другого гостя. Что нужно сделать в первую очередь?',
      uz: 'Mehmon resepshen stoykasiga yaqinlashdi, siz esa boshqa mehmonni ro\'yxatdan o\'tkazish bilan bandsiz. Birinchi navbatda nima qilish kerak?',
      en: "A guest approaches the front desk while you're busy checking in another guest. What should you do first?",
    },
    options: [
      { ru: 'Продолжить работу и не отвлекаться, пока не закончите с текущим гостем', uz: "Joriy mehmon bilan ishni tugatmaguncha davom etish va chalg'imaslik", en: 'Keep working and stay focused until you finish with the current guest' },
      { ru: 'Кратко установить зрительный контакт и сказать, что скоро подойдёте', uz: "Qisqacha ko'z aloqasini o'rnatish va tez orada yordam berishingizni aytish", en: "Briefly make eye contact and let them know you'll be right with them" },
      { ru: 'Позвать коллегу, чтобы он занялся новым гостем, не глядя на него', uz: "Hamkasbingizni chaqirib, unga qaramasdan yangi mehmon bilan shug'ullanishini so'rash", en: 'Call a colleague to handle the new guest without acknowledging them yourself' },
      { ru: 'Проигнорировать гостя, пока он сам не заговорит', uz: "Mehmon o'zi gapirmaguncha uni e'tiborsiz qoldirish", en: 'Ignore the guest until they speak first' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Приветствие в течение 10 секунд, даже кратким кивком и фразой "я скоро к вам подойду", показывает гостю, что его заметили и уважают его время.',
      uz: 'Mehmon 10 soniya ichida, hatto qisqa bosh irg\'itish va "tez orada sizga qarayman" degan ibora bilan salomlashish, unga payqaganingizni va vaqtini hurmat qilishingizni ko\'rsatadi.',
      en: "Acknowledging a guest within 10 seconds — even with a brief nod and \"I'll be right with you\" — shows them they've been noticed and that their time is respected.",
    },
  },
  {
    id: 'quiz-greeting-guests-2',
    moduleSlug: 'greeting-guests',
    question: {
      ru: 'Какая фраза лучше всего отражает профессиональное приветствие гостя на ресепшене?',
      uz: 'Resepshenda mehmonni professional kutib olishni eng yaxshi aks ettiruvchi ibora qaysi?',
      en: 'Which phrase best reflects a professional guest greeting at the front desk?',
    },
    options: [
      { ru: '"Да? Слушаю."', uz: '"Ha? Eshityapman."', en: '"Yes? I\'m listening."' },
      { ru: '"Здравствуйте! Добро пожаловать в отель, меня зовут Алина, чем могу вам помочь?"', uz: '"Assalomu alaykum! Mehmonxonaga xush kelibsiz, mening ismim Alina, sizga qanday yordam bera olaman?"', en: '"Hello! Welcome to the hotel, my name is Alina, how may I help you?"' },
      { ru: '"Что вам нужно?"', uz: '"Sizga nima kerak?"', en: '"What do you need?"' },
      { ru: '"Подождите минуту."', uz: '"Bir daqiqa kuting."', en: '"Wait a minute."' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Профессиональное приветствие включает тёплое обращение, представление по имени и открытый вопрос о том, чем можно помочь.',
      uz: 'Professional kutib olish iliq murojaat, ism bilan tanishtirish va yordam berish haqida ochiq savolni o\'z ichiga oladi.',
      en: 'A professional greeting includes a warm address, introducing yourself by name, and an open question about how you can help.',
    },
  },
  {
    id: 'quiz-greeting-guests-3',
    moduleSlug: 'greeting-guests',
    question: {
      ru: 'Почему важно использовать имя гостя во время разговора на ресепшене?',
      uz: 'Resepshenda suhbat davomida mehmon ismini ishlatish nima uchun muhim?',
      en: "Why is it important to use the guest's name during a front desk conversation?",
    },
    options: [
      { ru: 'Это требование закона о защите данных', uz: "Bu ma'lumotlarni himoya qilish to'g'risidagi qonun talabi", en: "It's a legal data-protection requirement" },
      { ru: 'Это создаёт более персонализированное и уважительное впечатление', uz: 'Bu shaxsiylashtirilgan va hurmatli taassurot yaratadi', en: 'It creates a more personalized and respectful impression' },
      { ru: 'Это позволяет сократить время разговора', uz: 'Bu suhbat vaqtini qisqartirish imkonini beradi', en: 'It shortens the length of the conversation' },
      { ru: 'Это не имеет значения, если гость не представился первым', uz: "Agar mehmon birinchi bo'lib tanishtirmagan bo'lsa, bu ahamiyatsiz", en: "It doesn't matter unless the guest introduces themselves first" },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Использование имени гостя 2-3 раза за разговор создаёт ощущение личного внимания и повышает удовлетворённость гостя обслуживанием.',
      uz: "Suhbat davomida mehmon ismini 2-3 marta ishlatish shaxsiy e'tibor tuyg'usini yaratadi va mehmonning xizmatdan qoniqishini oshiradi.",
      en: "Using the guest's name 2-3 times during a conversation creates a sense of personal attention and increases guest satisfaction with the service.",
    },
  },

  // check-in
  {
    id: 'quiz-check-in-1',
    moduleSlug: 'check-in',
    question: {
      ru: 'Гость приезжает на регистрацию раньше стандартного времени заезда, но номер ещё не готов. Как правильно поступить?',
      uz: 'Mehmon standart kelish vaqtidan oldin ro\'yxatdan o\'tishga keladi, lekin xona hali tayyor emas. To\'g\'ri yo\'l qanday?',
      en: "A guest arrives for check-in before the standard arrival time, but the room isn't ready yet. What's the correct approach?",
    },
    options: [
      { ru: 'Сказать, что номер будет готов только в стандартное время, и больше ничего не предлагать', uz: 'Xona faqat standart vaqtda tayyor bo\'lishini aytib, boshqa hech narsa taklif qilmaslik', en: 'Tell them the room will only be ready at the standard time and offer nothing else' },
      { ru: 'Извиниться, предложить оставить багаж, и сообщить примерное время готовности номера', uz: 'Uzr so\'rash, yukni qoldirishni taklif qilish va xonaning taxminiy tayyor bo\'lish vaqtini aytish', en: 'Apologize, offer to store their luggage, and give an estimated time the room will be ready' },
      { ru: 'Отправить гостя гулять по городу без каких-либо объяснений', uz: 'Mehmonni hech qanday tushuntirishsiz shaharni aylanib kelishga yuborish', en: 'Send the guest to walk around the city with no explanation' },
      { ru: 'Предложить номер, который ещё не убран', uz: 'Hali tozalanmagan xonani taklif qilish', en: "Offer them a room that hasn't been cleaned yet" },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Забота о госте включает извинение, предложение альтернативы (хранение багажа, зона ожидания) и конкретное время, когда номер будет готов.',
      uz: "Mehmonga g'amxo'rlik uzr so'rash, muqobil variant taklif qilish (yukni saqlash, kutish zonasi) va xonaning aniq tayyor bo'lish vaqtini bildirishni o'z ichiga oladi.",
      en: 'Caring for the guest means apologizing, offering an alternative (luggage storage, a waiting area), and giving a specific time the room will be ready.',
    },
  },
  {
    id: 'quiz-check-in-2',
    moduleSlug: 'check-in',
    question: {
      ru: 'Какой документ обязательно нужно попросить у гостя при заезде для регистрации?',
      uz: 'Mehmon kelganda ro\'yxatdan o\'tish uchun undan qanday hujjatni albatta so\'rash kerak?',
      en: 'What document must you always ask a guest for at check-in?',
    },
    options: [
      { ru: 'Только номер кредитной карты', uz: 'Faqat kredit karta raqami', en: 'Only the credit card number' },
      { ru: 'Действительный документ, удостоверяющий личность (паспорт)', uz: 'Amal qiluvchi shaxsni tasdiqlovchi hujjat (pasport)', en: 'A valid form of identification (passport)' },
      { ru: 'Билет на самолёт', uz: 'Samolyot chiptasi', en: 'A plane ticket' },
      { ru: 'Ничего, если бронь уже оплачена онлайн', uz: "Agar bron onlayn to'langan bo'lsa, hech narsa kerak emas", en: 'Nothing, if the booking was already paid online' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Закон и внутренние процедуры отеля требуют регистрации гостя по действительному удостоверению личности независимо от способа оплаты.',
      uz: "Qonun va mehmonxonaning ichki tartiblari to'lov usulidan qat'i nazar, mehmonni amal qiluvchi shaxsni tasdiqlovchi hujjat asosida ro'yxatdan o'tkazishni talab qiladi.",
      en: 'Legal requirements and internal hotel procedures require registering a guest with a valid ID regardless of the payment method used.',
    },
  },
  {
    id: 'quiz-check-in-3',
    moduleSlug: 'check-in',
    question: {
      ru: 'Гость при заезде говорит, что не может вспомнить, включён ли завтрак в его тариф. Как лучше поступить?',
      uz: 'Mehmon kelganda tarifiga nonushta kiritilganmi yoki yo\'qmi eslay olmayotganini aytadi. Eng yaxshi yo\'l qanday?',
      en: "At check-in, a guest says they can't remember whether breakfast is included in their rate. What's the best approach?",
    },
    options: [
      { ru: 'Сказать "не знаю" и продолжить оформление', uz: '"Bilmayman" deb, ro\'yxatdan o\'tishni davom ettirish', en: 'Say "I don\'t know" and continue with check-in' },
      { ru: 'Проверить тип тарифа в системе бронирования и точно ответить гостю', uz: 'Bron tizimida tarif turini tekshirib, mehmonga aniq javob berish', en: 'Check the rate type in the reservation system and give the guest an accurate answer' },
      { ru: 'Предположить, что завтрак не включён', uz: 'Nonushta kiritilmagan deb taxmin qilish', en: 'Assume breakfast is not included' },
      { ru: 'Сказать гостю самому это выяснить', uz: "Mehmonning o'ziga buni aniqlashni aytish", en: 'Tell the guest to figure it out themselves' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Сотрудник ресепшена должен уметь быстро проверить детали бронирования в системе, чтобы дать гостю точный и уверенный ответ.',
      uz: "Resepshen xodimi mehmonga aniq va ishonchli javob berish uchun bron tafsilotlarini tizimda tezda tekshira olishi kerak.",
      en: 'Front desk staff should be able to quickly check reservation details in the system to give the guest a confident, accurate answer.',
    },
  },

  // check-out
  {
    id: 'quiz-check-out-1',
    moduleSlug: 'check-out',
    question: {
      ru: 'Гость выезжает и замечает дополнительную сумму в счёте, которую не понимает. Что делать?',
      uz: 'Mehmon chiqib ketayotganda hisobda tushunmagan qo\'shimcha summani payqaydi. Nima qilish kerak?',
      en: "A guest checking out notices an extra charge on their bill they don't understand. What should you do?",
    },
    options: [
      { ru: 'Сказать, что это стандартная плата и не объяснять подробнее', uz: 'Bu standart to\'lov ekanligini aytib, batafsil tushuntirmaslik', en: "Say it's a standard fee and not explain further" },
      { ru: 'Спокойно объяснить, за что начислена сумма, показав детализацию счёта', uz: 'Xotirjam holda hisobning tafsilotini ko\'rsatib, summa nima uchun yozilganini tushuntirish', en: 'Calmly explain what the charge is for, showing the itemized bill' },
      { ru: 'Убрать сумму из счёта без объяснений, чтобы избежать конфликта', uz: 'Ziddiyatdan qochish uchun summani tushuntirmasdan hisobdan olib tashlash', en: 'Remove the charge without explanation to avoid conflict' },
      { ru: 'Отправить гостя к менеджеру, не пытаясь объяснить самому', uz: "O'zi tushuntirishga urinmasdan mehmonni menejerga yuborish", en: 'Send the guest to the manager without trying to explain it yourself' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Прозрачное и спокойное объяснение каждой строки счёта укрепляет доверие гостя и предотвращает недопонимание.',
      uz: "Hisobning har bir qatorini shaffof va xotirjam tushuntirish mehmonning ishonchini mustahkamlaydi va tushunmovchilikning oldini oladi.",
      en: 'Transparently and calmly explaining every line of the bill builds guest trust and prevents misunderstandings.',
    },
  },
  {
    id: 'quiz-check-out-2',
    moduleSlug: 'check-out',
    question: {
      ru: 'Какой из следующих шагов является частью правильной процедуры выезда гостя?',
      uz: 'Quyidagilardan qaysi biri mehmonning to\'g\'ri chiqish tartibiga kiradi?',
      en: 'Which of the following is part of a correct guest check-out procedure?',
    },
    options: [
      { ru: 'Попросить гостя оставить ключ и подтвердить отсутствие дополнительных расходов в номере', uz: "Mehmondan kalitni qaytarib olish va xonada qo'shimcha xarajat yo'qligini tasdiqlash", en: 'Ask the guest to return the key and confirm there are no additional charges from the room' },
      { ru: 'Не проверять мини-бар и дополнительные услуги', uz: 'Mini-bar va qo\'shimcha xizmatlarni tekshirmaslik', en: 'Skip checking the mini-bar and extra services' },
      { ru: 'Сразу закрыть счёт, не спрашивая гостя о впечатлениях', uz: 'Mehmondan taassurotlarini so\'ramasdan hisobni darhol yopish', en: 'Close the bill immediately without asking the guest about their stay' },
      { ru: 'Отправить гостя без прощания', uz: 'Mehmonni xayrlashmasdan kuzatib qo\'yish', en: 'Let the guest leave without saying goodbye' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Корректный выезд включает возврат ключа, проверку дополнительных расходов (мини-бар, услуги) и тёплое прощание.',
      uz: "To'g'ri chiqish tartibiga kalitni qaytarib olish, qo'shimcha xarajatlarni (mini-bar, xizmatlar) tekshirish va iliq xayrlashish kiradi.",
      en: 'A proper check-out includes collecting the key, verifying additional charges (mini-bar, services), and a warm farewell.',
    },
  },
  {
    id: 'quiz-check-out-3',
    moduleSlug: 'check-out',
    question: {
      ru: 'Гость спрашивает, может ли он выехать позже стандартного времени без предупреждения заранее. Как правильно ответить?',
      uz: 'Mehmon oldindan ogohlantirmasdan standart vaqtdan kechroq chiqishi mumkinligini so\'raydi. To\'g\'ri javob qanday bo\'lishi kerak?',
      en: 'A guest asks if they can check out later than the standard time without prior notice. How should you respond?',
    },
    options: [
      { ru: 'Автоматически отказать без проверки', uz: 'Tekshirmasdan avtomatik rad etish', en: 'Automatically refuse without checking anything' },
      { ru: 'Вежливо уточнить у гостя желаемое время и проверить возможность в зависимости от загрузки отеля', uz: 'Mehmondan xohlagan vaqtini so\'rab, mehmonxona bandligiga qarab imkoniyatni tekshirish', en: "Politely ask for their preferred time and check availability based on the hotel's occupancy" },
      { ru: 'Сказать, что это невозможно ни при каких условиях', uz: 'Bu hech qanday sharoitda mumkin emasligini aytish', en: "Say it's not possible under any circumstances" },
      { ru: 'Разрешить без проверки загрузки отеля', uz: 'Mehmonxona bandligini tekshirmasdan ruxsat berish', en: "Allow it without checking hotel occupancy" },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Прежде чем дать ответ, необходимо уточнить желаемое время и проверить наличие свободных номеров/загрузку, чтобы дать честный и обоснованный ответ.',
      uz: "Javob berishdan oldin xohlagan vaqtni aniqlashtirish va bo'sh xonalar/bandlik holatini tekshirish orqali halol va asosli javob berish kerak.",
      en: "Before answering, you should clarify the desired time and check room availability/occupancy so you can give an honest, well-founded answer.",
    },
  },

  // phone-communication
  {
    id: 'quiz-phone-communication-1',
    moduleSlug: 'phone-communication',
    question: {
      ru: 'Как правильно ответить на входящий звонок в отель?',
      uz: 'Mehmonxonaga kelayotgan qo\'ng\'iroqqa qanday to\'g\'ri javob berish kerak?',
      en: 'How should you correctly answer an incoming call to the hotel?',
    },
    options: [
      { ru: '"Алло?"', uz: '"Алло?"', en: '"Hello?"' },
      { ru: '"Отель Grand, добрый день, меня зовут Алина, чем могу помочь?"', uz: '"Grand mehmonxonasi, assalomu alaykum, mening ismim Alina, sizga qanday yordam bera olaman?"', en: '"Grand Hotel, good afternoon, this is Alina, how may I help you?"' },
      { ru: '"Да, слушаю."', uz: '"Ha, eshityapman."', en: '"Yes, I\'m listening."' },
      { ru: '"Секунду, я занята."', uz: '"Bir soniya, bandman."', en: '"One second, I\'m busy."' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Профессиональный ответ включает название отеля, приветствие, имя сотрудника и вопрос о том, чем можно помочь.',
      uz: "Professional javob mehmonxona nomini, salomlashuvni, xodim ismini va yordam berish haqidagi savolni o'z ichiga oladi.",
      en: 'A professional answer includes the hotel name, a greeting, the staff member\'s name, and a question about how to help.',
    },
  },
  {
    id: 'quiz-phone-communication-2',
    moduleSlug: 'phone-communication',
    question: {
      ru: 'Гость по телефону просит информацию, но линия плохо слышна. Как правильно поступить?',
      uz: 'Mehmon telefon orqali ma\'lumot so\'ramoqda, lekin aloqa yomon eshitilyapti. To\'g\'ri yo\'l qanday?',
      en: 'A guest calls asking for information, but the line has poor reception. What is the correct approach?',
    },
    options: [
      { ru: 'Продолжить говорить тише, надеясь, что гость поймёт', uz: 'Mehmon tushunishiga umid qilib, pastroq ovozda gapirishni davom ettirish', en: 'Keep talking more quietly, hoping the guest understands' },
      { ru: 'Вежливо сообщить, что связь плохая, и попросить гостя повторить или перезвонить', uz: "Aloqa yomon ekanligini muloyimlik bilan aytish va mehmondan takrorlashni yoki qayta qo'ng'iroq qilishni so'rash", en: 'Politely let the guest know the connection is poor and ask them to repeat or call back' },
      { ru: 'Положить трубку без объяснений', uz: "Hech qanday tushuntirishsiz trubkani qo'yish", en: 'Hang up without explanation' },
      { ru: 'Сделать вид, что всё понятно, и дать случайный ответ', uz: "Hammasi tushunarli bo'lgandek ko'rsatib, tasodifiy javob berish", en: 'Pretend to understand and give a random answer' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'При плохой слышимости важно честно сообщить об этом гостю и попросить повторить информацию, а не гадать или придумывать ответ.',
      uz: "Aloqa yomon bo'lganda, buni mehmonga halol aytish va ma'lumotni takrorlashni so'rash kerak, taxmin qilish yoki javobni o'ylab topish emas.",
      en: 'When reception is poor, you should honestly tell the guest and ask them to repeat the information, rather than guessing or making up an answer.',
    },
  },

  // whatsapp-communication
  {
    id: 'quiz-whatsapp-communication-1',
    moduleSlug: 'whatsapp-communication',
    question: {
      ru: 'Гость написал в WhatsApp с вопросом о времени заезда. Каким должен быть ответ сотрудника?',
      uz: 'Mehmon WhatsApp orqali kelish vaqti haqida savol yozdi. Xodimning javobi qanday bo\'lishi kerak?',
      en: "A guest messages on WhatsApp asking about check-in time. What should the staff member's reply look like?",
    },
    options: [
      { ru: 'Ответить через несколько дней, когда будет время', uz: "Vaqt bo'lganda, bir necha kundan keyin javob berish", en: 'Reply in a few days whenever there is time' },
      { ru: 'Ответить оперативно, вежливо и с чёткой информацией о времени заезда', uz: "Tezkor, muloyim va kelish vaqti haqida aniq ma'lumot bilan javob berish", en: 'Reply promptly, politely, and with clear information about check-in time' },
      { ru: 'Отправить только эмодзи без текста', uz: 'Faqat emoji yuborish, matnsiz', en: 'Send only an emoji with no text' },
      { ru: 'Проигнорировать сообщение, если гость уже въехал', uz: "Agar mehmon allaqachon kelgan bo'lsa, xabarni e'tiborsiz qoldirish", en: 'Ignore the message if the guest has already checked in' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Общение через WhatsApp требует оперативных, вежливых и информативных ответов, так как гости ожидают быстрой обратной связи в мессенджерах.',
      uz: "WhatsApp orqali muloqot tezkor, muloyim va ma'lumotli javoblarni talab qiladi, chunki mehmonlar messenjerlarda tez javob kutishadi.",
      en: 'WhatsApp communication requires prompt, polite, and informative responses, since guests expect quick replies through messengers.',
    },
  },
  {
    id: 'quiz-whatsapp-communication-2',
    moduleSlug: 'whatsapp-communication',
    question: {
      ru: 'Какой из следующих текстов является примером профессионального сообщения в WhatsApp для подтверждения бронирования?',
      uz: 'Quyidagi matnlardan qaysi biri WhatsApp orqali bronni tasdiqlash uchun professional xabar namunasi hisoblanadi?',
      en: 'Which of the following texts is an example of a professional WhatsApp message confirming a reservation?',
    },
    options: [
      { ru: '"ок бронь есть"', uz: '"ok bron bor"', en: '"ok booking exists"' },
      { ru: '"Здравствуйте, [Имя]! Ваше бронирование подтверждено: заезд 15.08, выезд 18.08. Ждём вас! 🏨"', uz: '"Assalomu alaykum, [Ism]! Bronlashingiz tasdiqlandi: kelish 15.08, ketish 18.08. Sizni kutamiz! 🏨"', en: '"Hello, [Name]! Your reservation is confirmed: check-in Aug 15, check-out Aug 18. We look forward to welcoming you! 🏨"' },
      { ru: '"Бронь. Подтверждено."', uz: '"Bron. Tasdiqlandi."', en: '"Booking. Confirmed."' },
      { ru: 'Отправка только номера брони без слов', uz: "Faqat bron raqamini so'zsiz yuborish", en: 'Sending only the booking number with no words' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Профессиональное сообщение включает приветствие, имя гостя, чёткие детали бронирования и вежливое завершение.',
      uz: "Professional xabar salomlashish, mehmon ismi, aniq bron tafsilotlari va muloyim yakunlashni o'z ichiga oladi.",
      en: "A professional message includes a greeting, the guest's name, clear reservation details, and a polite closing.",
    },
  },

  // booking-com-guests
  {
    id: 'quiz-booking-com-guests-1',
    moduleSlug: 'booking-com-guests',
    question: {
      ru: 'Гость, забронировавший номер через Booking.com, спрашивает, почему с него просят карту при заезде, хотя оплата уже произведена. Как правильно ответить?',
      uz: 'Booking.com orqali xona bron qilgan mehmon, to\'lov allaqachon amalga oshirilgan bo\'lsa-da, nega kelganda kartasi so\'ralayotganini so\'raydi. To\'g\'ri javob qanday?',
      en: 'A guest who booked through Booking.com asks why they are being asked for a card at check-in even though payment was already made. How should you respond?',
    },
    options: [
      { ru: 'Сказать, что это ошибка системы', uz: 'Bu tizim xatosi ekanligini aytish', en: "Say it's a system error" },
      { ru: 'Объяснить, что карта нужна только для депозита на случай возможного ущерба, а не для повторной оплаты проживания', uz: "Karta faqat ehtimoliy zarar uchun depozit rasmiylashtirish uchun kerakligini, turar joy uchun qayta to'lov emasligini tushuntirish", en: 'Explain that the card is only needed for a damage deposit, not to charge the stay again' },
      { ru: 'Списать деньги повторно "на всякий случай"', uz: '"Ehtiyot shart" deb pulni qayta yechish', en: 'Charge the amount again "just in case"' },
      { ru: 'Отказать в заезде без карты, даже если оплата подтверждена', uz: "To'lov tasdiqlangan bo'lsa ham, kartasiz ro'yxatdan o'tkazishdan bosh tortish", en: 'Refuse check-in without a card even though payment is confirmed' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Карта при заезде обычно нужна только для оформления депозита на случай ущерба, а не для повторного списания уже оплаченной суммы.',
      uz: "Kelganda so'raladigan karta odatda faqat zarar uchun depozit rasmiylashtirish uchun kerak, allaqachon to'langan summani qayta yechish uchun emas.",
      en: 'The card requested at check-in is usually only for placing a damage deposit, not for re-charging an amount already paid.',
    },
  },
  {
    id: 'quiz-booking-com-guests-2',
    moduleSlug: 'booking-com-guests',
    question: {
      ru: 'Гость с бронированием Booking.com хочет отменить проживание за день до заезда. Что должен сделать сотрудник?',
      uz: 'Booking.com orqali bron qilgan mehmon kelishidan bir kun oldin bronni bekor qilmoqchi. Xodim nima qilishi kerak?',
      en: 'A guest with a Booking.com reservation wants to cancel one day before arrival. What should the staff member do?',
    },
    options: [
      { ru: 'Отменить бронь вручную в системе отеля', uz: "Bronni mehmonxona tizimida qo'lda bekor qilish", en: 'Cancel the booking manually in the hotel system' },
      { ru: 'Направить гостя в раздел "Управление бронированием" в приложении Booking.com и объяснить условия отмены по его тарифу', uz: 'Mehmonni Booking.com ilovasidagi "Bronni boshqarish" bo\'limiga yo\'naltirish va uning tarifi bo\'yicha bekor qilish shartlarini tushuntirish', en: 'Direct the guest to the "Manage booking" section in the Booking.com app and explain their rate\'s cancellation terms' },
      { ru: 'Сказать, что отмена невозможна ни при каких условиях', uz: 'Hech qanday sharoitda bekor qilish mumkin emasligini aytish', en: "Say cancellation isn't possible under any circumstances" },
      { ru: 'Молча взять полную сумму без объяснений', uz: "Tushuntirmasdan to'liq summani jimgina yechib olish", en: 'Silently charge the full amount without explanation' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Отмену бронирований с Booking.com гость должен оформлять через платформу, а сотрудник должен объяснить условия тарифа (возвратный/невозвратный).',
      uz: "Booking.com orqali qilingan bronlarni bekor qilishni mehmon platforma orqali amalga oshirishi kerak, xodim esa tarif shartlarini (qaytariladigan/qaytarilmaydigan) tushuntirishi lozim.",
      en: "Cancellations of Booking.com reservations should be handled by the guest through the platform, while staff explain the rate's terms (refundable/non-refundable).",
    },
  },

  // walk-in-guests
  {
    id: 'quiz-walk-in-guests-1',
    moduleSlug: 'walk-in-guests',
    question: {
      ru: 'В отель заходит гость без предварительного бронирования (walk-in) и спрашивает о наличии номеров. Что нужно сделать в первую очередь?',
      uz: 'Mehmonxonaga oldindan bron qilmasdan (walk-in) mehmon keladi va bo\'sh xonalar haqida so\'raydi. Birinchi navbatda nima qilish kerak?',
      en: 'A guest walks into the hotel without a prior reservation and asks about room availability. What should you do first?',
    },
    options: [
      { ru: 'Сказать, что без бронирования номеров нет', uz: "Bronsiz xona yo'qligini aytish", en: 'Say there are no rooms without a reservation' },
      { ru: 'Проверить текущую загрузку отеля и предложить доступные варианты с актуальными ценами', uz: "Mehmonxonaning joriy bandligini tekshirish va mavjud variantlarni dolzarb narxlar bilan taklif qilish", en: "Check the hotel's current occupancy and offer available options at current rates" },
      { ru: 'Отправить гостя искать другой отель', uz: 'Mehmonni boshqa mehmonxona izlashga yuborish', en: 'Send the guest to look for another hotel' },
      { ru: 'Автоматически предложить самый дорогой номер', uz: 'Avtomatik ravishda eng qimmat xonani taklif qilish', en: 'Automatically offer the most expensive room' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Для walk-in гостя важно быстро проверить фактическую загрузку отеля и предложить подходящие варианты по актуальной цене, а не строить предположения.',
      uz: "Walk-in mehmon uchun mehmonxonaning haqiqiy bandligini tezda tekshirish va taxmin qilmasdan mos variantlarni dolzarb narx bilan taklif qilish muhim.",
      en: 'For a walk-in guest, it is important to quickly check actual occupancy and offer suitable options at current prices rather than making assumptions.',
    },
  },
  {
    id: 'quiz-walk-in-guests-2',
    moduleSlug: 'walk-in-guests',
    question: {
      ru: 'Walk-in гость просит скидку, ссылаясь на то, что видел более низкую цену онлайн. Как правильно отреагировать?',
      uz: 'Walk-in mehmon onlaynda pastroq narx ko\'rganini aytib, chegirma so\'raydi. To\'g\'ri reaktsiya qanday bo\'lishi kerak?',
      en: 'A walk-in guest asks for a discount, saying they saw a lower price online. How should you respond?',
    },
    options: [
      { ru: 'Немедленно согласиться на любую цену, которую называет гость', uz: 'Mehmon aytgan istalgan narxga darhol rozi bo\'lish', en: 'Immediately agree to whatever price the guest names' },
      { ru: 'Вежливо объяснить разницу в тарифах (например, отменяемость, включённые услуги) и при возможности предложить сопоставимый вариант', uz: "Tarif farqini (masalan, bekor qilish shartlari, kiritilgan xizmatlar) muloyimlik bilan tushuntirish va imkon bo'lsa, mos variant taklif qilish", en: 'Politely explain the rate difference (e.g., cancellation flexibility, included services) and offer a comparable option if possible' },
      { ru: 'Отказать без объяснений', uz: 'Tushuntirmasdan rad etish', en: 'Refuse without explanation' },
      { ru: 'Сказать, что онлайн-цены — это обман', uz: 'Onlayn narxlar aldov ekanligini aytish', en: 'Say online prices are a scam' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Важно объяснить гостю, из чего складывается цена (гибкость отмены, включённые опции), и при возможности предложить альтернативу, а не просто отказывать или соглашаться бездумно.',
      uz: "Mehmonga narxning nimalardan tashkil topganini (bekor qilish moslashuvchanligi, kiritilgan variantlar) tushuntirish va imkon bo'lsa muqobil taklif qilish muhim, shunchaki rad etish yoki o'ylamasdan rozi bo'lish emas.",
      en: 'It is important to explain to the guest what makes up the price (cancellation flexibility, included options) and offer an alternative if possible, rather than simply refusing or agreeing thoughtlessly.',
    },
  },

  // upselling-rooms
  {
    id: 'quiz-upselling-rooms-1',
    moduleSlug: 'upselling-rooms',
    question: {
      ru: 'Какой из следующих подходов является примером этичного и эффективного апселлинга номера?',
      uz: 'Quyidagi yondashuvlardan qaysi biri xonani odob-axloqli va samarali upsell qilish namunasi hisoblanadi?',
      en: 'Which of the following approaches is an example of ethical, effective room upselling?',
    },
    options: [
      { ru: 'Скрыть цену обновлённого номера, пока гость не согласится', uz: "Mehmon rozi bo'lmaguncha yangilangan xona narxini yashirish", en: 'Hide the price of the upgraded room until the guest agrees' },
      { ru: 'Подчеркнуть конкретные преимущества номера более высокой категории (вид, площадь) и назвать точную разницу в цене', uz: "Yuqori toifadagi xonaning aniq afzalliklarini (manzara, maydon) ta'kidlash va narx farqini aniq aytish", en: 'Highlight specific benefits of the higher-category room (view, size) and state the exact price difference' },
      { ru: 'Настаивать на повышении категории номера, несмотря на явный отказ гостя', uz: "Mehmonning aniq rad javobiga qaramay, xona toifasini oshirishga qat'iy turib olish", en: "Keep insisting on the upgrade despite the guest's clear refusal" },
      { ru: 'Автоматически изменить бронь на более дорогой номер без согласия гостя', uz: "Mehmonning roziligisiz bronni qimmatroq xonaga avtomatik o'zgartirish", en: 'Automatically change the booking to a pricier room without guest consent' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Эффективный и этичный апселлинг основан на понятной презентации выгод и прозрачной цене, при уважении решения гостя.',
      uz: "Samarali va odob-axloqli upsell foydalarni tushunarli taqdim etish va shaffof narxga, shu bilan birga mehmon qaroriga hurmatga asoslanadi.",
      en: "Effective, ethical upselling is based on clearly presenting benefits and a transparent price, while respecting the guest's decision.",
    },
  },
  {
    id: 'quiz-upselling-rooms-2',
    moduleSlug: 'upselling-rooms',
    question: {
      ru: 'Гость на регистрации не уверен, стоит ли доплатить за номер с видом на море. Что стоит сделать сотруднику?',
      uz: 'Ro\'yxatdan o\'tishda mehmon dengizga qaraydigan xona uchun qo\'shimcha to\'lov qilish kerakmi yoki yo\'qligiga ishonchi komil emas. Xodim nima qilishi kerak?',
      en: 'At check-in, a guest is unsure whether to pay extra for a sea-view room. What should the staff member do?',
    },
    options: [
      { ru: 'Сразу отказаться от идеи апселлинга, чтобы не показаться навязчивым', uz: "Bezovta qilib ko'rinmaslik uchun upsell g'oyasidan darhol voz kechish", en: 'Immediately drop the upsell idea to avoid seeming pushy' },
      { ru: 'Кратко и живо описать выгоду обновления (например, "из этого номера открывается потрясающий закат") и назвать конкретную доплату', uz: 'Yangilanishning foydasini qisqa va jonli tasvirlash (masalan, "bu xonadan ajoyib quyosh botishi ko\'rinadi") va aniq qo\'shimcha to\'lovni aytish', en: 'Briefly and vividly describe the benefit of the upgrade (e.g., "this room has a stunning sunset view") and state the exact extra cost' },
      { ru: 'Сказать, что все номера одинаковые', uz: 'Barcha xonalar bir xil ekanligini aytish', en: 'Say all rooms are the same' },
      { ru: 'Давить на гостя, повторяя предложение несколько раз подряд', uz: 'Taklifni ketma-ket bir necha marta takrorlab, mehmonga bosim o\'tkazish', en: 'Pressure the guest by repeating the offer several times in a row' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Хороший апселлинг — это краткое, конкретное и привлекательное описание ценности с понятной ценой, без давления.',
      uz: "Yaxshi upsell — bu qisqa, aniq va jozibali qiymat tavsifi, tushunarli narx bilan, bosimsiz.",
      en: 'Good upselling is a brief, specific, appealing description of value paired with a clear price, without pressure.',
    },
  },

  // late-checkout
  {
    id: 'quiz-late-checkout-1',
    moduleSlug: 'late-checkout',
    question: {
      ru: 'Гость просит поздний выезд, но номер нужен для следующего гостя в тот же день. Как правильно поступить?',
      uz: 'Mehmon kechroq chiqishni so\'raydi, lekin xona o\'sha kuni keyingi mehmon uchun kerak. To\'g\'ri yo\'l qanday?',
      en: 'A guest asks for a late check-out, but the room is needed for the next guest that same day. What is the correct approach?',
    },
    options: [
      { ru: 'Разрешить поздний выезд без учёта следующей брони', uz: 'Keyingi bronni hisobga olmasdan kechroq chiqishga ruxsat berish', en: 'Grant the late check-out without considering the next booking' },
      { ru: 'Вежливо объяснить ограничение и предложить альтернативу, например, хранение багажа после выезда', uz: 'Cheklovni muloyimlik bilan tushuntirish va muqobil variant, masalan, chiqqandan keyin yukni saqlashni taklif qilish', en: 'Politely explain the constraint and offer an alternative, such as luggage storage after check-out' },
      { ru: 'Отказать резко, не объясняя причину', uz: "Sababini tushuntirmasdan keskin rad etish", en: 'Refuse abruptly without explaining why' },
      { ru: 'Промолчать и не отвечать на просьбу', uz: "Jim turib, so'rovga javob bermaslik", en: 'Stay silent and not respond to the request' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Если номер занят следующим гостем, необходимо вежливо объяснить ситуацию и предложить компромисс (хранение багажа, зона отдыха).',
      uz: "Agar xona keyingi mehmon uchun band bo'lsa, vaziyatni muloyimlik bilan tushuntirish va murosaga kelish (yukni saqlash, dam olish zonasi) taklif qilish kerak.",
      en: 'If the room is booked for the next guest, you should politely explain the situation and offer a compromise (luggage storage, a lounge area).',
    },
  },
  {
    id: 'quiz-late-checkout-2',
    moduleSlug: 'late-checkout',
    question: {
      ru: 'Постоянный гость с высоким статусом лояльности просит поздний выезд. Какое действие наиболее уместно?',
      uz: 'Yuqori sodiqlik statusiga ega doimiy mehmon kechroq chiqishni so\'raydi. Qaysi harakat eng maqbul?',
      en: 'A loyal, high-status returning guest asks for a late check-out. What action is most appropriate?',
    },
    options: [
      { ru: 'Автоматически отказать, как и любому другому гостю', uz: 'Boshqa har qanday mehmon kabi avtomatik rad etish', en: 'Automatically refuse, just like with any other guest' },
      { ru: 'Проверить загрузку отеля и, если возможно, предоставить поздний выезд бесплатно как знак признательности за лояльность', uz: "Mehmonxona bandligini tekshirish va imkon bo'lsa, sodiqligini qadrlash belgisi sifatida bepul kechroq chiqishni taqdim etish", en: 'Check hotel occupancy and, if possible, offer the late check-out for free as a token of appreciation for their loyalty' },
      { ru: 'Взимать двойную плату за услугу', uz: "Xizmat uchun ikki barobar to'lov olish", en: 'Charge double for the service' },
      { ru: 'Игнорировать статус лояльности гостя', uz: 'Mehmonning sodiqlik statusini e\'tiborsiz qoldirish', en: "Ignore the guest's loyalty status" },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Гостям с высоким статусом лояльности часто предоставляются привилегии, включая бесплатный поздний выезд при наличии возможности, в знак признания их постоянства.',
      uz: "Yuqori sodiqlik statusiga ega mehmonlarga ko'pincha, imkoniyat mavjud bo'lsa, ularning sodiqligini qadrlash belgisi sifatida bepul kechroq chiqish kabi imtiyozlar beriladi.",
      en: 'High-loyalty-status guests are often granted privileges, including a complimentary late check-out when possible, in recognition of their continued patronage.',
    },
  },

  // early-checkin
  {
    id: 'quiz-early-checkin-1',
    moduleSlug: 'early-checkin',
    question: {
      ru: 'Гость прибывает на несколько часов раньше стандартного времени заезда. Номер ещё не готов. Что правильно предложить?',
      uz: 'Mehmon standart kelish vaqtidan bir necha soat oldin keladi. Xona hali tayyor emas. Nima taklif qilish to\'g\'ri?',
      en: "A guest arrives several hours before the standard check-in time. The room isn't ready yet. What is the correct thing to offer?",
    },
    options: [
      { ru: 'Ничего не предлагать, просто попросить подождать', uz: "Hech narsa taklif qilmasdan, faqat kutishni so'rash", en: 'Offer nothing, just ask them to wait' },
      { ru: 'Предложить хранение багажа, зону ожидания с напитком, и сообщить примерное время готовности номера', uz: 'Yukni saqlashni, ichimlik bilan kutish zonasini taklif qilish va xonaning taxminiy tayyor bo\'lish vaqtini aytish', en: 'Offer luggage storage, a waiting area with a drink, and give an estimated time the room will be ready' },
      { ru: 'Отдать гостю неубранный номер, чтобы не заставлять ждать', uz: 'Kutdirmaslik uchun tozalanmagan xonani berish', en: "Give the guest an uncleaned room so they don't have to wait" },
      { ru: 'Сказать, что ранний заезд запрещён категорически', uz: "Erta kelish qat'iyan taqiqlanganligini aytish", en: 'Say early check-in is strictly forbidden' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'При раннем заезде важно предложить конкретную альтернативу (хранение багажа, зона ожидания) и честно сообщить время готовности номера.',
      uz: "Erta kelishda aniq muqobil variant (yukni saqlash, kutish zonasi) taklif qilish va xonaning tayyor bo'lish vaqtini halol aytish muhim.",
      en: "For an early arrival, it's important to offer a concrete alternative (luggage storage, a waiting area) and honestly communicate when the room will be ready.",
    },
  },
  {
    id: 'quiz-early-checkin-2',
    moduleSlug: 'early-checkin',
    question: {
      ru: 'Гость просит гарантированный ранний заезд к 8 утра из-за раннего рейса. Как правильно ответить?',
      uz: 'Mehmon erta parvozi sababli soat 8:00 gacha kafolatlangan erta kelishni so\'raydi. To\'g\'ri javob qanday?',
      en: 'A guest asks for a guaranteed early check-in by 8 AM due to an early flight. How should you respond?',
    },
    options: [
      { ru: 'Гарантировать без проверки, будет ли номер свободен к этому времени', uz: "Xona o'sha vaqtga bo'sh bo'lishini tekshirmasdan kafolatlash", en: 'Guarantee it without checking whether the room will be free by then' },
      { ru: 'Объяснить, что раннее время зависит от предыдущего выезда и загрузки, и предложить лучший возможный вариант', uz: 'Erta vaqt oldingi chiqish va bandlikka bog\'liqligini tushuntirish va mumkin bo\'lgan eng yaxshi variantni taklif qilish', en: "Explain that early arrival depends on the previous guest's check-out and occupancy, and offer the best possible option" },
      { ru: 'Сказать, что это невозможно ни при каких условиях', uz: 'Bu hech qanday sharoitda mumkin emasligini aytish', en: "Say it's not possible under any circumstances" },
      { ru: 'Согласиться и забыть подготовить номер заранее', uz: "Rozi bo'lib, xonani oldindan tayyorlashni unutish", en: 'Agree and forget to prepare the room in advance' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Гарантировать точное время раннего заезда нельзя без учёта предыдущего выезда — важно честно объяснить зависимость и предложить максимально возможное решение.',
      uz: "Oldingi chiqishni hisobga olmasdan erta kelishning aniq vaqtini kafolatlab bo'lmaydi — bog'liqlikni halol tushuntirish va imkon qadar yaxshi yechim taklif qilish muhim.",
      en: "You cannot guarantee an exact early check-in time without accounting for the prior guest's check-out — it's important to honestly explain the dependency and offer the best possible solution.",
    },
  },

  // complaints
  {
    id: 'quiz-complaints-1',
    moduleSlug: 'complaints',
    question: {
      ru: 'Гость громко жалуется на шум из соседнего номера ночью по телефону. Какая реакция ресепшена наиболее правильна?',
      uz: 'Mehmon kechasi qo\'shni xonadan kelayotgan shovqin haqida telefon orqali baland ovozda shikoyat qiladi. Resepshenning eng to\'g\'ri reaktsiyasi qanday?',
      en: 'A guest calls loudly complaining about noise from the neighboring room at night. What is the most correct front desk response?',
    },
    options: [
      { ru: 'Ответить тем же тоном, что и гость, чтобы показать понимание', uz: 'Tushunishni ko\'rsatish uchun mehmon bilan bir xil ohangda javob berish', en: "Match the guest's tone to show understanding" },
      { ru: 'Спокойно извиниться, пообещать немедленно отправить сотрудника и перезвонить через 10 минут', uz: 'Xotirjam uzr so\'rash, darhol xodim yuborishga va\'da berish va 10 daqiqadan so\'ng qayta qo\'ng\'iroq qilish', en: 'Calmly apologize, promise to send staff immediately, and call back in 10 minutes' },
      { ru: 'Сказать, что шум — обычное дело в отеле', uz: 'Shovqin mehmonxonada odatiy hol ekanligini aytish', en: 'Say noise is normal in a hotel' },
      { ru: 'Попросить гостя самому пойти и попросить соседей утихнуть', uz: "Mehmonni o'zi borib qo'shnilarni jim bo'lishga so'rashini taklif qilish", en: 'Ask the guest to go tell the neighbors to be quiet themselves' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Модель LAST (Listen, Apologize, Solve, Thank) подразумевает спокойный тон, немедленное действие и последующий контроль результата.',
      uz: "LAST modeli (Tinglash, Uzr so'rash, Hal qilish, Rahmat aytish) xotirjam ohang, darhol harakat va natijani keyinchalik nazorat qilishni nazarda tutadi.",
      en: 'The LAST model (Listen, Apologize, Solve, Thank) calls for a calm tone, immediate action, and following up to confirm the result.',
    },
  },
  {
    id: 'quiz-complaints-2',
    moduleSlug: 'complaints',
    question: {
      ru: 'Гость требует полный возврат средств из-за грязного номера. Каким должен быть первый шаг сотрудника?',
      uz: 'Mehmon iflos xona uchun to\'liq pul qaytarishni talab qilmoqda. Xodimning birinchi qadami qanday bo\'lishi kerak?',
      en: 'A guest demands a full refund because of a dirty room. What should the staff member\'s first step be?',
    },
    options: [
      { ru: 'Сразу отказать, сославшись на политику отеля', uz: 'Mehmonxona siyosatiga ishora qilib, darhol rad etish', en: 'Refuse immediately, citing hotel policy' },
      { ru: 'Извиниться и предложить немедленно переселить гостя в подготовленный номер, а вопрос компенсации решить с менеджером', uz: 'Uzr so\'rash va mehmonni darhol tayyorlangan xonaga ko\'chirishni taklif qilish, kompensatsiya masalasini esa menejer bilan hal qilish', en: 'Apologize and offer to move the guest to a freshly prepared room right away, leaving compensation to be discussed with the manager' },
      { ru: 'Сказать, что это вина клининговой службы, а не отеля', uz: 'Bu klining xizmatining aybi, mehmonxonaniki emasligini aytish', en: "Say it's housekeeping's fault, not the hotel's" },
      { ru: 'Игнорировать просьбу и сменить тему', uz: "So'rovni e'tiborsiz qoldirib, mavzuni o'zgartirish", en: 'Ignore the request and change the subject' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Первым шагом всегда является немедленное решение проблемы (новый номер), а денежный вопрос — предмет отдельного разговора с руководством.',
      uz: "Birinchi qadam har doim muammoni darhol hal qilish (yangi xona), pul masalasi esa rahbariyat bilan alohida muhokama qilinadigan masala.",
      en: 'The first step is always immediate resolution of the problem (a new room); the financial question is a separate matter to be resolved with management.',
    },
  },
  {
    id: 'quiz-complaints-3',
    moduleSlug: 'complaints',
    question: {
      ru: 'Какой из следующих подходов НЕ рекомендуется при разрешении жалобы гостя?',
      uz: 'Mehmon shikoyatini hal qilishda quyidagi yondashuvlardan qaysi biri tavsiya etilmaydi?',
      en: 'Which of the following approaches is NOT recommended when resolving a guest complaint?',
    },
    options: [
      { ru: 'Взять на себя ответственность отеля', uz: "Mehmonxona javobgarligini o'z zimmangizga olish", en: "Taking ownership of the hotel's responsibility" },
      { ru: 'Предложить конкретное решение с указанием сроков', uz: "Muddatlari ko'rsatilgan aniq yechim taklif qilish", en: 'Offering a concrete solution with a timeframe' },
      { ru: 'Спорить с гостем, доказывая его неправоту', uz: "Mehmon bilan uning noto'g'ri ekanligini isbotlab bahslashish", en: 'Arguing with the guest to prove they are wrong' },
      { ru: 'Поблагодарить гостя за то, что сообщил о проблеме', uz: 'Muammo haqida xabar bergani uchun mehmonga rahmat aytish', en: 'Thanking the guest for bringing the issue to your attention' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Спор с гостем усиливает конфликт; правильный подход — слушать, извиняться, предлагать решение и благодарить.',
      uz: "Mehmon bilan bahslashish ziddiyatni kuchaytiradi; to'g'ri yondashuv — tinglash, uzr so'rash, yechim taklif qilish va rahmat aytishdir.",
      en: 'Arguing with the guest escalates conflict; the right approach is to listen, apologize, offer a solution, and thank them.',
    },
  },

  // vip-guests
  {
    id: 'quiz-vip-guests-1',
    moduleSlug: 'vip-guests',
    question: {
      ru: 'В отель заезжает VIP-гость. Что из перечисленного является правильной подготовкой?',
      uz: 'Mehmonxonaga VIP-mehmon kelmoqda. Quyidagilardan qaysi biri to\'g\'ri tayyorgarlik hisoblanadi?',
      en: 'A VIP guest is checking into the hotel. Which of the following is correct preparation?',
    },
    options: [
      { ru: 'Ничего особенного не делать, обслуживать как обычного гостя', uz: "Hech narsa qilmasdan, oddiy mehmon sifatida xizmat ko'rsatish", en: 'Do nothing special, treat them like any other guest' },
      { ru: 'Заранее проверить историю предпочтений гостя и подготовить персонализированные штрихи (например, любимый напиток в номере)', uz: "Mehmonning afzalliklari tarixini oldindan tekshirish va shaxsiylashtirilgan detallarni (masalan, xonada sevimli ichimlik) tayyorlash", en: "Review the guest's preference history in advance and prepare personalized touches (e.g., their favorite drink in the room)" },
      { ru: 'Сообщить всем сотрудникам отеля личные данные гостя без ограничений', uz: 'Mehmonning shaxsiy ma\'lumotlarini barcha xodimlarga cheklovsiz e\'lon qilish', en: "Share the guest's personal details with all staff without restriction" },
      { ru: 'Повысить цену номера без предупреждения', uz: 'Ogohlantirmasdan xona narxini oshirish', en: 'Raise the room price without notice' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Для VIP-гостей важно заранее изучить их предпочтения и историю визитов, подготовив персонализированный, но ненавязчивый сервис.',
      uz: "VIP-mehmonlar uchun ularning afzalliklari va tashrif tarixini oldindan o'rganib, shaxsiylashtirilgan, ammo bezovta qilmaydigan xizmatni tayyorlash muhim.",
      en: "For VIP guests, it's important to review their preferences and stay history in advance and prepare personalized but unobtrusive service.",
    },
  },
  {
    id: 'quiz-vip-guests-2',
    moduleSlug: 'vip-guests',
    question: {
      ru: 'VIP-гость просит соблюдать полную конфиденциальность своего пребывания. Как должен поступить персонал?',
      uz: 'VIP-mehmon o\'z tashrifining to\'liq maxfiy saqlanishini so\'raydi. Xodimlar qanday harakat qilishi kerak?',
      en: 'A VIP guest asks that their stay be kept completely confidential. How should staff handle this?',
    },
    options: [
      { ru: 'Обсуждать присутствие гостя с другими гостями по их просьбе', uz: "Boshqa mehmonlarning so'rovi bilan mehmon haqida ma'lumot berish", en: "Discuss the guest's presence with other guests if they ask" },
      { ru: 'Строго ограничить информацию о госте только сотрудниками, которым она необходима по работе', uz: "Mehmon haqidagi ma'lumotni faqat ish yuzasidan zarur bo'lgan xodimlar bilan qat'iy cheklash", en: 'Strictly limit information about the guest to only the staff who need it for their work' },
      { ru: 'Разместить информацию о госте на общей доске в лобби', uz: "Mehmon haqidagi ma'lumotni lobbidagi umumiy taxtaga joylashtirish", en: 'Post information about the guest on the shared board in the lobby' },
      { ru: 'Игнорировать просьбу, если гость не VIP-уровня по документам', uz: 'Agar hujjatlarda VIP darajasi ko\'rsatilmagan bo\'lsa, so\'rovni e\'tiborsiz qoldirish', en: "Ignore the request if the guest isn't officially marked VIP in the documents" },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Конфиденциальность VIP-гостя обеспечивается ограничением доступа к информации только сотрудникам, работающим с ним напрямую (need-to-know принцип).',
      uz: "VIP-mehmonning maxfiyligi faqat u bilan bevosita ishlaydigan xodimlarga ma'lumotni cheklash orqali ta'minlanadi (\"bilishi kerak bo'lganlar\" tamoyili).",
      en: "A VIP guest's confidentiality is protected by limiting information to staff who directly work with them, following the \"need-to-know\" principle.",
    },
  },
  {
    id: 'quiz-vip-guests-3',
    moduleSlug: 'vip-guests',
    question: {
      ru: 'Постоянный VIP-гость снова заезжает в отель. Какой подход демонстрирует высокий уровень сервиса?',
      uz: 'Doimiy VIP-mehmon mehmonxonaga yana tashrif buyuradi. Qaysi yondashuv yuqori xizmat darajasini ko\'rsatadi?',
      en: 'A returning VIP guest checks in again. Which approach demonstrates a high level of service?',
    },
    options: [
      { ru: 'Спросить у гостя все данные заново, как у нового посетителя', uz: 'Mehmondan barcha ma\'lumotlarni yangi mehmondek qaytadan so\'rash', en: 'Ask the guest for all their details again as if they were new' },
      { ru: 'Поприветствовать по имени, упомянуть его предыдущий визит и учесть известные предпочтения (например, номер на высоком этаже)', uz: "Ismi bilan kutib olish, oldingi tashrifini eslatib o'tish va ma'lum afzalliklarini (masalan, yuqori qavatdagi xona) hisobga olish", en: 'Greet them by name, mention their previous visit, and factor in known preferences (e.g., a high-floor room)' },
      { ru: 'Отправить гостя оформляться в общую очередь без исключений', uz: 'Mehmonni istisnosiz umumiy navbatga yuborish', en: 'Send the guest to the general queue with no exceptions' },
      { ru: 'Сообщить, что предпочтения гостя не сохраняются в системе', uz: 'Mehmonning afzalliklari tizimda saqlanmasligini aytish', en: "Tell the guest their preferences aren't saved in the system" },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Высокий уровень сервиса для постоянных VIP-гостей включает распознавание и использование накопленной истории предпочтений без необходимости повторного запроса.',
      uz: "Doimiy VIP-mehmonlar uchun yuqori xizmat darajasi ularni tanish, oldingi ma'lumotlarni qayta so'ramasdan to'plangan afzalliklar tarixidan foydalanishni o'z ichiga oladi.",
      en: 'High-level service for returning VIP guests means recognizing them and using their accumulated preference history without asking them to repeat it.',
    },
  },

  // foreign-guests
  {
    id: 'quiz-foreign-guests-1',
    moduleSlug: 'foreign-guests',
    question: {
      ru: 'Иностранный гость плохо говорит на местном языке и с трудом понимает сотрудника. Что нужно сделать?',
      uz: 'Chet ellik mehmon mahalliy tilda yaxshi gapira olmaydi va xodimni tushunishda qiynaladi. Nima qilish kerak?',
      en: 'A foreign guest speaks the local language poorly and struggles to understand the staff member. What should be done?',
    },
    options: [
      { ru: 'Говорить быстрее и громче, надеясь, что это поможет', uz: 'Yordam berishiga umid qilib, tezroq va balandroq gapirish', en: 'Speak faster and louder, hoping it helps' },
      { ru: 'Говорить медленно, чётко, использовать простые фразы и при необходимости жесты или переводчик', uz: "Sekin, aniq gapirish, sodda iboralarni ishlatish va zarur bo'lsa imo-ishoralar yoki tarjimondan foydalanish", en: 'Speak slowly and clearly, use simple phrases, and use gestures or a translation tool if needed' },
      { ru: 'Прекратить общение и позвать другого гостя, чтобы перевёл', uz: "Muloqotni to'xtatib, boshqa mehmonni tarjima qilishga chaqirish", en: 'Stop communicating and ask another guest to translate' },
      { ru: 'Игнорировать гостя, пока он не выучит язык', uz: 'Mehmon tilni o\'rganguncha uni e\'tiborsiz qoldirish', en: 'Ignore the guest until they learn the language' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'При языковом барьере полезно говорить медленно, чётко, использовать простые слова, письменные материалы, жесты или переводческое приложение.',
      uz: "Til to'sig'i bo'lganda sekin, aniq gapirish, sodda so'zlar, yozma materiallar, imo-ishoralar yoki tarjima ilovasidan foydalanish foydalidir.",
      en: 'With a language barrier, it helps to speak slowly and clearly, use simple words, written materials, gestures, or a translation app.',
    },
  },
  {
    id: 'quiz-foreign-guests-2',
    moduleSlug: 'foreign-guests',
    question: {
      ru: 'Иностранный гость интересуется местными обычаями и правилами поведения. Как лучше ответить?',
      uz: 'Chet ellik mehmon mahalliy urf-odatlar va xulq-atvor qoidalari bilan qiziqmoqda. Eng yaxshi javob qanday?',
      en: 'A foreign guest is curious about local customs and etiquette. What is the best response?',
    },
    options: [
      { ru: 'Сказать, что это не входит в обязанности ресепшена', uz: 'Bu resepshen vazifasiga kirmasligini aytish', en: "Say that's not part of the front desk's job" },
      { ru: 'С удовольствием поделиться базовыми культурными особенностями и дать полезные советы для комфортного пребывания', uz: "Asosiy madaniy xususiyatlarni xursandchilik bilan baham ko'rish va qulay turish uchun foydali maslahatlar berish", en: 'Happily share basic cultural highlights and offer helpful tips for a comfortable stay' },
      { ru: 'Проигнорировать вопрос как неважный', uz: "Savolni muhim emas deb e'tiborsiz qoldirish", en: 'Ignore the question as unimportant' },
      { ru: 'Ответить только на английском языке, даже если гость его не знает', uz: 'Mehmon bilmasa ham, faqat ingliz tilida javob berish', en: "Answer only in English, even if the guest doesn't understand it" },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Хороший сотрудник ресепшена выступает культурным проводником для иностранных гостей, помогая им чувствовать себя увереннее в новой стране.',
      uz: "Yaxshi resepshen xodimi chet ellik mehmonlar uchun madaniy yo'lboshchi vazifasini bajaradi, ularga yangi mamlakatda o'zini ishonchli his qilishga yordam beradi.",
      en: 'A good front desk agent acts as a cultural guide for foreign guests, helping them feel more confident in a new country.',
    },
  },

  // lost-items
  {
    id: 'quiz-lost-items-1',
    moduleSlug: 'lost-items',
    question: {
      ru: 'Гость обнаружил, что забыл личные вещи в номере после выезда. Что должен сделать сотрудник?',
      uz: 'Mehmon chiqib ketgandan so\'ng xonada shaxsiy buyumlarini unutib qoldirganini aniqladi. Xodim nima qilishi kerak?',
      en: 'A guest realizes they left personal belongings in the room after checking out. What should the staff member do?',
    },
    options: [
      { ru: 'Сказать, что отель не несёт ответственности за забытые вещи', uz: 'Mehmonxona unutilgan buyumlar uchun javobgar emasligini aytish', en: "Say the hotel isn't responsible for forgotten items" },
      { ru: 'Зафиксировать заявление, проверить номер и организовать безопасное хранение найденной вещи до возврата гостю', uz: "Arizani qayd etish, xonani tekshirish va topilgan buyumni mehmonga qaytarilguncha xavfsiz saqlashni tashkil qilish", en: 'Log the report, check the room, and arrange safe storage of the found item until it is returned to the guest' },
      { ru: 'Выбросить вещь, если она не была найдена сразу', uz: "Agar buyum darhol topilmagan bo'lsa, uni tashlab yuborish", en: "Throw the item away if it wasn't found immediately" },
      { ru: 'Отдать найденную вещь следующему гостю в номере', uz: 'Topilgan buyumni xonadagi keyingi mehmonga berish', en: 'Give the found item to the next guest in the room' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Правильная процедура включает регистрацию находки, проверку номера и безопасное хранение вещи до момента возврата владельцу.',
      uz: "To'g'ri tartib topilma haqida ariza qayd etish, xonani tekshirish va buyumni egasiga qaytarilguncha xavfsiz saqlashni o'z ichiga oladi.",
      en: 'The correct procedure includes logging the lost-item report, checking the room, and safely storing the item until it can be returned to its owner.',
    },
  },
  {
    id: 'quiz-lost-items-2',
    moduleSlug: 'lost-items',
    question: {
      ru: 'Горничная нашла ценную вещь (например, украшение) в номере после выезда гостя. Каким должен быть следующий шаг?',
      uz: 'Xonaki mehmon chiqib ketgandan keyin xonada qimmatbaho narsa (masalan, taqinchoq) topdi. Keyingi qadam qanday bo\'lishi kerak?',
      en: 'A housekeeper finds a valuable item (e.g., jewelry) in a room after the guest has checked out. What should the next step be?',
    },
    options: [
      { ru: 'Оставить вещь себе, раз хозяин уехал', uz: "Egasi ketgani uchun buyumni o'zida qoldirish", en: 'Keep the item since the owner has left' },
      { ru: 'Немедленно передать находку в службу приёма и зарегистрировать её в журнале находок с описанием и датой', uz: "Topilmani darhol resepshenga topshirish va uni tavsif hamda sana bilan topilmalar jurnaliga qayd etish", en: 'Immediately hand the item over to the front desk and log it in the lost & found register with a description and date' },
      { ru: 'Положить вещь обратно в номер, не сообщая никому', uz: 'Hech kimga aytmasdan buyumni xonaga qaytarib qo\'yish', en: 'Put the item back in the room without telling anyone' },
      { ru: 'Подождать, не заявит ли кто-то права на вещь, прежде чем сообщать руководству', uz: 'Rahbariyatga xabar berishdan oldin kimdir da\'vo qilib qolmasmikan deb kutish', en: 'Wait to see if someone claims it before reporting it to management' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Любая найденная вещь должна быть немедленно передана и зарегистрирована в журнале находок (lost & found) с точным описанием, датой и местом обнаружения.',
      uz: "Har qanday topilgan buyum darhol topshirilishi va aniq tavsif, sana hamda topilgan joyi bilan topilmalar jurnaliga (lost & found) qayd etilishi kerak.",
      en: 'Any found item must be immediately turned in and logged in the lost & found register with an accurate description, date, and location found.',
    },
  },

  // emergency-procedures
  {
    id: 'quiz-emergency-procedures-1',
    moduleSlug: 'emergency-procedures',
    question: {
      ru: 'В отеле сработала пожарная сигнализация. Каким должно быть первое действие сотрудника ресепшена?',
      uz: 'Mehmonxonada yong\'in signalizatsiyasi ishga tushdi. Resepshen xodimining birinchi harakati qanday bo\'lishi kerak?',
      en: "The hotel's fire alarm goes off. What should the front desk staff member's first action be?",
    },
    options: [
      { ru: 'Проигнорировать сигнал, пока не подтвердится реальная угроза', uz: 'Haqiqiy xavf tasdiqlanmaguncha signalni e\'tiborsiz qoldirish', en: 'Ignore the alarm until a real threat is confirmed' },
      { ru: 'Следовать протоколу эвакуации отеля и направлять гостей к ближайшим эвакуационным выходам', uz: 'Mehmonxonaning evakuatsiya protokoliga amal qilish va mehmonlarni eng yaqin evakuatsiya chiqishlariga yo\'naltirish', en: "Follow the hotel's evacuation protocol and direct guests to the nearest emergency exits" },
      { ru: 'Сначала закрыть кассу и собрать личные вещи', uz: 'Avval kassani yopib, shaxsiy buyumlarni yig\'ish', en: 'First close the cash register and gather personal belongings' },
      { ru: 'Позвонить в СМИ, чтобы сообщить о происшествии', uz: "Voqea haqida OAVga qo'ng'iroq qilish", en: 'Call the media to report the incident' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'При срабатывании сигнализации персонал обязан немедленно следовать установленному протоколу эвакуации и обеспечивать безопасность гостей в первую очередь.',
      uz: "Signalizatsiya ishga tushganda, xodimlar darhol belgilangan evakuatsiya protokoliga amal qilishi va birinchi navbatda mehmonlar xavfsizligini ta'minlashi shart.",
      en: 'When an alarm goes off, staff must immediately follow the established evacuation protocol and prioritize guest safety above all else.',
    },
  },
  {
    id: 'quiz-emergency-procedures-2',
    moduleSlug: 'emergency-procedures',
    question: {
      ru: 'Гостю в номере стало плохо со здоровьем, и он звонит на ресепшен. Что должен сделать сотрудник в первую очередь?',
      uz: 'Mehmon xonasida o\'zini yomon his qildi va resepshenga qo\'ng\'iroq qildi. Xodim birinchi navbatda nima qilishi kerak?',
      en: 'A guest in their room feels unwell and calls the front desk. What should the staff member do first?',
    },
    options: [
      { ru: 'Посоветовать гостю самостоятельно доехать до больницы', uz: "Mehmonga kasalxonaga o'zi borishni maslahat berish", en: 'Advise the guest to get to a hospital on their own' },
      { ru: 'Оценить срочность ситуации, при необходимости немедленно вызвать скорую помощь и сообщить дежурному менеджеру', uz: "Vaziyatning shoshilinchligini baholash, zarur bo'lsa darhol tez yordam chaqirish va navbatchi menejerga xabar berish", en: 'Assess the urgency, call an ambulance immediately if needed, and notify the manager on duty' },
      { ru: 'Сказать, что отель не несёт ответственности за здоровье гостей', uz: "Mehmonxona mehmonlar salomatligi uchun javobgar emasligini aytish", en: "Say the hotel isn't responsible for guests' health" },
      { ru: 'Попросить гостя перезвонить позже', uz: "Mehmondan keyinroq qayta qo'ng'iroq qilishni so'rash", en: 'Ask the guest to call back later' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'В экстренной медицинской ситуации сотрудник должен быстро оценить серьёзность, вызвать скорую помощь при необходимости и уведомить руководство отеля.',
      uz: "Shoshilinch tibbiy vaziyatda xodim vaziyat jiddiyligini tezda baholashi, zarur bo'lsa tez yordam chaqirishi va mehmonxona rahbariyatiga xabar berishi kerak.",
      en: 'In a medical emergency, staff must quickly assess severity, call an ambulance if needed, and notify hotel management.',
    },
  },
  {
    id: 'quiz-emergency-procedures-3',
    moduleSlug: 'emergency-procedures',
    question: {
      ru: 'Какая информация должна быть у сотрудника ресепшена под рукой на случай чрезвычайной ситуации?',
      uz: 'Favqulodda vaziyat yuzaga kelganda resepshen xodimida qanday ma\'lumot qo\'l ostida bo\'lishi kerak?',
      en: 'What information should front desk staff have on hand in case of an emergency?',
    },
    options: [
      { ru: 'Только номер личного телефона директора отеля', uz: "Faqat mehmonxona direktorining shaxsiy telefon raqami", en: "Only the hotel director's personal phone number" },
      { ru: 'Контакты экстренных служб, план эвакуации и список гостей, проживающих в отеле', uz: "Favqulodda xizmatlar kontaktlari, evakuatsiya rejasi va mehmonxonada turgan mehmonlar ro'yxati", en: 'Emergency service contacts, the evacuation plan, and the current guest list' },
      { ru: 'Список цен на номера', uz: 'Xonalar narxlari ro\'yxati', en: 'The room price list' },
      { ru: 'Меню ресторана отеля', uz: 'Mehmonxona restorani menyusi', en: 'The hotel restaurant menu' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'В экстренных ситуациях важны немедленный доступ к контактам служб спасения, плану эвакуации и актуальному списку гостей для их учёта при эвакуации.',
      uz: "Favqulodda vaziyatlarda qutqaruv xizmatlari kontaktlariga, evakuatsiya rejasiga va evakuatsiya paytida hisobga olish uchun dolzarb mehmonlar ro'yxatiga darhol kirish imkoniyati muhim.",
      en: 'In emergencies, immediate access to emergency service contacts, the evacuation plan, and an up-to-date guest list is essential for accounting for everyone during evacuation.',
    },
  },
]

export default quizQuestions
