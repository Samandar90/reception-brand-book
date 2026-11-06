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
  {
    id: 'quiz-greeting-guests-4',
    moduleSlug: 'greeting-guests',
    question: {
      ru: 'Вы на ресепшене одна и принимаете по телефону бронирование: записываете даты и тип номера. В этот момент к стойке подходит пара с чемоданами. Какой вариант — ЕДИНСТВЕННЫЙ, который соблюдает и правило 10 секунд, и золотые правила приветствия?',
      uz: 'Siz resepshenda yolg\'izsiz va telefon orqali bron qabul qilyapsiz: sanalar va xona turini yozyapsiz. Shu payt stoykaga chamadonli er-xotin yaqinlashadi. Qaysi variant 10 soniya qoidasiga ham, kutib olishning oltin qoidalariga ham rioya qiladigan YAGONA variant?',
      en: 'You are alone at the desk, taking a reservation by phone and writing down the dates and room type. At that moment a couple with suitcases walks up to the desk. Which option is the ONLY one that respects both the 10-second rule and the golden rules of greeting?',
    },
    options: [
      { ru: 'Спокойно закончить звонок (около минуты), затем повернуться к паре, улыбнуться и представиться по имени', uz: 'Qo\'ng\'iroqni xotirjam tugatish (taxminan bir daqiqa), so\'ng er-xotinga o\'girilib, jilmayib, ismingizni aytib tanishish', en: 'Calmly finish the call (about a minute), then turn to the couple, smile and introduce yourself by name' },
      { ru: 'Не отрывая глаз от экрана, бросить «минуту» и продолжить записывать бронь', uz: 'Ekrandan ko\'z uzmasdan «bir daqiqa» deb, bronni yozishni davom ettirish', en: 'Without looking up from the screen, say "one minute" and keep writing down the booking' },
      { ru: 'Встретиться взглядом, улыбнуться, сказать «я сейчас к вам подойду», а после звонка: «Добрый день, добро пожаловать в Grand Hotel, меня зовут Алина, чем могу помочь?»', uz: 'Ko\'z bilan uchrashib, jilmayib, «hozir sizga qarayman» deyish, qo\'ng\'iroqdan so\'ng esa: «Xayrli kun, Grand Hotelga xush kelibsiz, mening ismim Alina, sizga qanday yordam bera olaman?»', en: 'Make eye contact, smile, say "I\'ll be right with you", and after the call: "Good afternoon, welcome to the Grand Hotel, my name is Alina — how may I help you?"' },
      { ru: 'Сразу поставить звонящего на удержание, полностью оформить заезд пары и только потом вернуться к телефону', uz: 'Qo\'ng\'iroq qiluvchini darhol kutish rejimiga qo\'yib, er-xotinni to\'liq ro\'yxatdan o\'tkazish va shundan keyingina telefonga qaytish', en: 'Put the caller on hold at once, complete the couple\'s check-in in full, and only then return to the phone' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Урок требует поприветствовать гостя в первые 10 секунд, даже если вы заняты: достаточно зрительного контакта и фразы «я сейчас к вам подойду», а полное приветствие с именем следует после. Вариант «закончить звонок, потом поздороваться» — это и есть ошибка «заставлять гостя ждать, не замечая его».',
      uz: 'Dars band bo\'lsangiz ham mehmonni dastlabki 10 soniyada kutib olishni talab qiladi: ko\'z aloqasi va «hozir sizga qarayman» iborasi yetarli, ism bilan to\'liq salomlashish esa keyin keladi. «Avval qo\'ng\'iroqni tugatib, keyin salomlashish» varianti aynan «mehmonni payqamasdan kuttirish» xatosidir.',
      en: 'The lesson requires acknowledging the guest within the first 10 seconds even when busy: eye contact and "I\'ll be right with you" is enough, with the full greeting by name afterwards. "Finish the call, then greet" is exactly the mistake of making the guest wait without acknowledging them.',
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
  {
    id: 'quiz-check-in-4',
    moduleSlug: 'check-in',
    question: {
      ru: 'К стойке подходит г-н Ахмедов, за ним очередь из трёх гостей. В PMS дата рождения указана 12.03.1985, а в паспорте — 12.08.1985; имя и номер документа совпадают. Как поступить?',
      uz: 'Stoykaga janob Ahmedov keladi, uning orqasida uch mehmondan iborat navbat bor. PMSda tug\'ilgan sana 12.03.1985 deb ko\'rsatilgan, pasportda esa 12.08.1985; ism va hujjat raqami mos keladi. Qanday yo\'l tutasiz?',
      en: 'Mr. Ahmedov reaches the desk with three guests queuing behind him. The PMS shows his date of birth as 12.03.1985, while his passport says 12.08.1985; the name and document number match. What should you do?',
    },
    options: [
      { ru: 'Вежливо уточнить расхождение у гостя и исправить запись до того, как выдать ключ', uz: 'Farqni mehmondan muloyimlik bilan aniqlashtirish va kalitni berishdan OLDIN yozuvni to\'g\'rilash', en: 'Politely clarify the discrepancy with the guest and correct the record before handing over the key' },
      { ru: 'Выдать ключ от 412-го сейчас, чтобы не задерживать очередь, и исправить дату в PMS, когда гость поднимется в номер', uz: 'Navbatni ushlab qolmaslik uchun 412-xona kalitini hozir berib, mehmon xonaga chiqqach, PMSdagi sanani to\'g\'rilash', en: 'Hand over the key to room 412 now so the queue isn\'t delayed, and fix the date in the PMS once the guest has gone up' },
      { ru: 'Отказать в заселении и попросить гостя принести другой документ, удостоверяющий личность', uz: 'Ro\'yxatdan o\'tkazishni rad etib, mehmondan boshqa shaxsni tasdiqlovchi hujjat olib kelishni so\'rash', en: 'Refuse check-in and ask the guest to bring a different identity document' },
      { ru: 'Не обращать внимания: имя и номер документа совпадают, а дата рождения — второстепенная деталь', uz: 'E\'tibor bermaslik: ism va hujjat raqami mos keladi, tug\'ilgan sana esa ikkinchi darajali tafsilot', en: 'Ignore it: the name and document number match, and the date of birth is a minor detail' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Золотое правило урока: имя, дата рождения и номер документа должны совпадать с бронью, а любое расхождение уточняется вежливо, но всегда ДО выдачи ключа. «Выдать ключ, исправить потом» нарушает порядок, а отказ в заселении уроком не предусмотрен.',
      uz: 'Darsning oltin qoidasi: ism, tug\'ilgan sana va hujjat raqami bron bilan mos kelishi kerak, har qanday farq muloyimlik bilan, lekin doim kalit berishdan OLDIN aniqlashtiriladi. «Kalitni berib, keyin to\'g\'rilash» tartibni buzadi, ro\'yxatdan o\'tkazishni rad etish esa darsda ko\'zda tutilmagan.',
      en: 'The lesson\'s golden rule: name, date of birth and document number must match the reservation, and any discrepancy is clarified politely but always BEFORE the key is handed over. "Give the key, fix it later" breaks that order, and refusing check-in is not what the lesson prescribes.',
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
  {
    id: 'quiz-check-out-4',
    moduleSlug: 'check-out',
    question: {
      ru: 'Гость выезжает в 11:50, на улице ждёт такси. Ваши действия: (1) за 20 минут до выезда вы проверили фолио и увидели ужин в ресторане на 85 000 сум; (2) сказали: «Выезжаете? Приложите карту, пожалуйста»; (3) после оплаты предложили помочь с багажом и такси; (4) поблагодарили по имени и попросили оставить отзыв. Какой шаг нарушает стандарт?',
      uz: 'Mehmon 11:50 da chiqmoqda, tashqarida taksi kutyapti. Harakatlaringiz: (1) chiqishdan 20 daqiqa oldin folioni tekshirib, restorandagi 85 000 so\'mlik kechki ovqatni ko\'rdingiz; (2) «Chiqyapsizmi? Kartangizni tegizing, iltimos» dedingiz; (3) to\'lovdan so\'ng yuk va taksi bilan yordam taklif qildingiz; (4) ismi bilan rahmat aytib, fikr qoldirishni so\'radingiz. Qaysi qadam standartni buzadi?',
      en: 'A guest checks out at 11:50 with a taxi waiting outside. Your steps: (1) 20 minutes before departure you reviewed the folio and saw a restaurant dinner of 85,000 sum; (2) you said "Checking out? Please tap your card"; (3) after payment you offered help with luggage and a taxi; (4) you thanked the guest by name and asked for feedback. Which step violates the standard?',
    },
    options: [
      { ru: 'Шаг 1 — фолио проверяют только когда гость уже стоит у стойки', uz: '1-qadam — folio faqat mehmon stoyka oldida turganda tekshiriladi', en: 'Step 1 — the folio should be reviewed only once the guest is at the desk' },
      { ru: 'Шаг 3 — предлагать такси гостю, у которого оно уже есть, значит тратить его время', uz: '3-qadam — taksisi bor mehmonga taksi taklif qilish uning vaqtini olishdir', en: 'Step 3 — offering a taxi to a guest who already has one wastes their time' },
      { ru: 'Шаг 4 — просить отзыв у спешащего гостя считается ошибкой', uz: '4-qadam — shoshayotgan mehmondan fikr so\'rash xato hisoblanadi', en: 'Step 4 — asking a rushed guest for feedback counts as a mistake' },
      { ru: 'Шаг 2 — оплату запросили, не озвучив вслух, за что именно начислена каждая сумма', uz: '2-qadam — har bir summa nima uchun yozilganini ovoz chiqarib aytmasdan to\'lov so\'raldi', en: 'Step 2 — payment was requested without stating out loud what each charge is for' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Золотое правило выезда: озвучить каждую позицию счёта (две ночи, ужин 85 000 сум) ДО того, как просить подтвердить оплату — это предотвращает споры. Проверка фолио за 15–20 минут до выезда, помощь с багажом/такси и просьба об отзыве — всё это часть стандарта, а не ошибки.',
      uz: 'Chiqishning oltin qoidasi: to\'lovni tasdiqlashni so\'rashdan OLDIN hisobning har bir bandini (ikki kecha, 85 000 so\'mlik kechki ovqat) ovoz chiqarib aytish — bu nizolarning oldini oladi. Folioni 15–20 daqiqa oldin tekshirish, yuk/taksi bilan yordam va fikr so\'rash — bularning bari standartning qismi, xato emas.',
      en: 'The check-out golden rule: state every line of the bill out loud (two nights, the 85,000 sum dinner) BEFORE asking the guest to confirm payment — this prevents disputes. Reviewing the folio 15–20 minutes early, offering luggage/taxi help and asking for feedback are all part of the standard, not mistakes.',
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
  {
    id: 'quiz-phone-communication-3',
    moduleSlug: 'phone-communication',
    question: {
      ru: 'Вы в середине оформления заезда гостя у стойки. Звонит телефон — уже второй гудок. Что соответствует стандарту урока?',
      uz: 'Siz stoykada mehmonni ro\'yxatdan o\'tkazishning o\'rtasidasiz. Telefon jiringlayapti — allaqachon ikkinchi gudok. Dars standartiga nima mos keladi?',
      en: 'You are halfway through a guest\'s check-in at the desk. The phone rings — it is already the second ring. What matches the lesson\'s standard?',
    },
    options: [
      { ru: 'Дать телефону звонить, пока не закончите с гостем: гость у стойки всегда в приоритете', uz: 'Mehmon bilan ishni tugatguncha telefonni jiringlashga qo\'yish: stoykadagi mehmon har doim ustuvor', en: 'Let the phone ring until you finish with the guest: the guest at the desk always comes first' },
      { ru: 'Коротко извиниться перед гостем у стойки и снять трубку не позже третьего гудка: «Grand Hotel, Дильноза, чем могу помочь?»', uz: 'Stoykadagi mehmondan qisqa uzr so\'rab, uchinchi gudokdan kechiktirmay trubkani ko\'tarish: «Grand Hotel, Dilnoza, sizga qanday yordam bera olaman?»', en: 'Briefly apologize to the guest at the desk and pick up by the third ring: "Grand Hotel, Dilnoza speaking, how may I help you?"' },
      { ru: 'Снять трубку на втором гудке, сказать «подождите» и положить её рядом, пока не закончите оформление', uz: 'Ikkinchi gudokda trubkani ko\'tarib, «kuting» deb, ro\'yxatdan o\'tkazish tugaguncha uni yoniga qo\'yib qo\'yish', en: 'Pick up on the second ring, say "hold on", and set the receiver aside until the check-in is done' },
      { ru: 'Снять трубку и тихо сказать «Да, алло?», чтобы не мешать гостю у стойки', uz: 'Trubkani ko\'tarib, stoykadagi mehmonga xalaqit bermaslik uchun sekin «Ha, allo?» deyish', en: 'Pick up and quietly say "Yes, hello?" so as not to disturb the guest at the desk' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Золотое правило: снять трубку не позже третьего гудка, а если вы заняты с гостем — коротко извиниться перед ним и ответить, назвав отель и своё имя. Вариант «снять и оставить на удержании без объяснений» — это ошибка «долгое ожидание на линии», а «да, алло» — ответ без названия отеля и имени.',
      uz: 'Oltin qoida: trubkani uchinchi gudokdan kechiktirmay ko\'tarish, agar mehmon bilan band bo\'lsangiz — undan qisqa uzr so\'rab, mehmonxona nomi va ismingizni aytib javob berish. «Ko\'tarib, tushuntirishsiz kutish rejimida qoldirish» — «liniyada uzoq kuttirish» xatosi, «ha, allo» esa mehmonxona nomi va ismsiz javob.',
      en: 'The golden rule: answer by the third ring, and if you are busy with a guest, apologize to them briefly and answer with the hotel name and your own name. "Pick up and leave them on hold with no explanation" is the mistake of leaving a caller waiting, and "yes, hello?" is an answer without the hotel name or your name.',
    },
  },
  {
    id: 'quiz-phone-communication-4',
    moduleSlug: 'phone-communication',
    question: {
      ru: 'Звонящий забронировал номер на двоих с 15 по 17 августа, вы проверили наличие и согласовали тариф. Как правильно завершить разговор по стандарту урока?',
      uz: 'Qo\'ng\'iroq qiluvchi 15–17 avgustga ikki kishilik xona bron qildi, siz bo\'sh joyni tekshirib, tarifni kelishdingiz. Dars standartiga ko\'ra suhbatni qanday to\'g\'ri yakunlash kerak?',
      en: 'The caller has booked a room for two from 15 to 17 August; you checked availability and agreed the rate. How should you end the call according to the lesson?',
    },
    options: [
      { ru: 'Сказать «хорошо, до свидания» и сразу положить трубку, чтобы освободить линию для следующего звонка', uz: '«Yaxshi, xayr» deb, keyingi qo\'ng\'iroq uchun liniyani bo\'shatish maqsadida trubkani darhol qo\'yish', en: 'Say "okay, goodbye" and hang up right away to free the line for the next caller' },
      { ru: 'Поблагодарить звонящего и первым положить трубку, чтобы не задерживать его на линии', uz: 'Qo\'ng\'iroq qiluvchiga rahmat aytib, uni liniyada ushlab turmaslik uchun birinchi bo\'lib trubkani qo\'yish', en: 'Thank the caller and hang up first so you don\'t keep them on the line' },
      { ru: 'Попросить гостя самого повторить вам детали брони, чтобы убедиться, что он всё правильно понял', uz: 'Mehmondan hamma narsani to\'g\'ri tushunganiga ishonch hosil qilish uchun bron tafsilotlarini o\'zi takrorlashini so\'rash', en: 'Ask the guest to repeat the booking details back to you to make sure they understood everything' },
      { ru: 'Подытожить договорённости (даты, тип номера, число гостей), поблагодарить и дождаться, пока звонящий положит трубку первым', uz: 'Kelishuvlarni jamlash (sanalar, xona turi, mehmonlar soni), rahmat aytish va qo\'ng\'iroq qiluvchi birinchi bo\'lib trubkani qo\'yishini kutish', en: 'Summarize what was agreed (dates, room type, number of guests), thank the caller and wait for them to hang up first' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Урок: подытожьте договорённости, поблагодарите и дождитесь, пока звонящий положит трубку первым — это знак вежливости. Повторять ключевые детали должен сотрудник, а не гость; класть трубку первым — нарушение правила.',
      uz: 'Dars: kelishuvlarni jamlang, rahmat ayting va qo\'ng\'iroq qiluvchi birinchi bo\'lib trubkani qo\'yishini kuting — bu xushmuomalalik belgisi. Asosiy tafsilotlarni mehmon emas, xodim takrorlashi kerak; trubkani birinchi bo\'lib qo\'yish qoidani buzadi.',
      en: 'The lesson: summarize what was agreed, thank the caller and wait for them to hang up first — a sign of courtesy. It is the staff member, not the guest, who repeats the key details back; hanging up first breaks the rule.',
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
  {
    id: 'quiz-whatsapp-communication-3',
    moduleSlug: 'whatsapp-communication',
    question: {
      ru: '10:40, рабочее время. Гость пишет в WhatsApp: «Можно завтра выехать в 14:00?» Чтобы ответить, нужно сверить завтрашние заезды и уточнить у хаускипинга — это займёт около 20 минут. Что делать?',
      uz: 'Soat 10:40, ish vaqti. Mehmon WhatsAppga yozadi: «Ertaga 14:00 da chiqsam bo\'ladimi?» Javob berish uchun ertangi kelishlarni solishtirib, xaus-kipingdan aniqlashtirish kerak — bu taxminan 20 daqiqa oladi. Nima qilasiz?',
      en: 'It is 10:40, working hours. A guest writes on WhatsApp: "Can I check out at 14:00 tomorrow?" To answer, you need to compare tomorrow\'s arrivals and check with housekeeping — about 20 minutes. What do you do?',
    },
    options: [
      { ru: 'В течение пары минут написать, что уточняете и вернётесь с ответом примерно через 15–20 минут, а затем прислать результат письменно', uz: 'Bir-ikki daqiqa ichida aniqlashtirayotganingizni va taxminan 15–20 daqiqadan so\'ng javob berishingizni yozish, so\'ng natijani yozma yuborish', en: 'Within a couple of minutes write that you are checking and will get back in about 15–20 minutes, then send the result in writing' },
      { ru: 'Дождаться точного ответа и только тогда написать одно полное сообщение, чтобы не давать гостю «полуответов»', uz: 'Aniq javobni kutib, mehmonga «yarim javob» bermaslik uchun faqat shundan keyin bitta to\'liq xabar yozish', en: 'Wait until you have the definite answer and only then send one complete message, so the guest doesn\'t get half-answers' },
      { ru: 'Сразу ответить «ок», чтобы гость видел, что сообщение прочитано, а детали прислать к концу смены', uz: 'Mehmon xabar o\'qilganini ko\'rishi uchun darhol «ok» deb javob berib, tafsilotlarni smena oxirida yuborish', en: 'Reply "ok" right away so the guest sees the message was read, and send the details by the end of the shift' },
      { ru: 'Сразу позвонить гостю вместо переписки и не дублировать договорённость письменно, раз всё обсудили голосом', uz: 'Yozishmalar o\'rniga mehmonga darhol qo\'ng\'iroq qilish va hammasi og\'zaki kelishilgani uchun uni yozma takrorlamaslik', en: 'Call the guest right away instead of texting, and don\'t repeat the agreement in writing since it was discussed by voice' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Золотое правило: в мессенджере ждут почти мгновенной реакции — если ответ требует времени, сообщите об этом сразу, а не оставляйте сообщение без ответа. Молчать 20 минут ради «полного ответа» и писать «ок» с деталями через несколько часов — ошибки из урока; договорённости всегда подтверждаются письменно.',
      uz: 'Oltin qoida: messenjerda deyarli bir zumda javob kutiladi — agar javob vaqt talab qilsa, xabarni javobsiz qoldirmay, buni darhol ayting. «To\'liq javob» uchun 20 daqiqa jim turish va «ok» deb yozib, tafsilotlarni soatlab kechiktirish — darsdagi xatolar; kelishuvlar doim yozma tasdiqlanadi.',
      en: 'Golden rule: in a messenger guests expect an almost instant response — if the answer needs time, say so right away instead of leaving the message unanswered. Staying silent for 20 minutes for a "complete answer" and a one-word "ok" with details hours later are mistakes named in the lesson; agreements are always confirmed in writing.',
    },
  },
  {
    id: 'quiz-whatsapp-communication-4',
    moduleSlug: 'whatsapp-communication',
    question: {
      ru: 'После телефонного разговора нужно подтвердить г-ну Киму бронь в WhatsApp. Какое сообщение соблюдает ВСЕ правила урока: тон, эмодзи, длину и письменное подтверждение деталей?',
      uz: 'Telefon suhbatidan so\'ng janob Kimga WhatsAppda bronni tasdiqlash kerak. Qaysi xabar darsning BARCHA qoidalariga — ohang, emoji, uzunlik va tafsilotlarni yozma tasdiqlashga — rioya qiladi?',
      en: 'After a phone call you need to confirm Mr. Kim\'s booking on WhatsApp. Which message follows ALL the lesson\'s rules: tone, emoji, length and written confirmation of the details?',
    },
    options: [
      { ru: '«Уважаемый господин гость! Настоящим подтверждаем получение Вашего обращения и уведомляем, что вышеуказанное бронирование надлежащим образом зарегистрировано в нашей системе на указанный период с соблюдением всех условий тарифа.»', uz: '«Hurmatli mehmon janob! Ushbu xabar orqali murojaatingiz qabul qilinganini tasdiqlaymiz va yuqorida ko\'rsatilgan bron tarifning barcha shartlariga muvofiq ko\'rsatilgan davr uchun tizimimizda tegishli tarzda ro\'yxatga olinganini ma\'lum qilamiz.»', en: '"Dear Esteemed Guest, we hereby acknowledge receipt of your request and inform you that the aforementioned reservation has been duly registered in our system for the indicated period in accordance with all rate conditions."' },
      { ru: '«Привет!!! 😍🎉🏨🥳 Да-да, всё ок, увидимся!! 😘😘»', uz: '«Salom!!! 😍🎉🏨🥳 Ha-ha, hammasi ok, ko\'rishamiz!! 😘😘»', en: '"Hi!!! 😍🎉🏨🥳 Yes yes all good, see u!! 😘😘"' },
      { ru: '«Добрый день, господин Ким! 🙂 Ваша бронь подтверждена: Deluxe, 15–17 августа, 2 гостя, 420 000 сум/ночь, завтрак включён.» и вторым сообщением: «Заезд с 14:00. Ждём вас!»', uz: '«Xayrli kun, janob Kim! 🙂 Broningiz tasdiqlandi: Deluxe, 15–17 avgust, 2 mehmon, kechasiga 420 000 so\'m, nonushta kiritilgan.» va ikkinchi xabar: «Kelish 14:00 dan. Sizni kutamiz!»', en: '"Good afternoon, Mr. Kim! 🙂 Your booking is confirmed: Deluxe, 15–17 August, 2 guests, 420,000 sum per night, breakfast included." followed by a second message: "Check-in from 14:00. See you soon!"' },
      { ru: '«Добрый день! Всё подтверждено, как обсудили по телефону, детали повторять не буду. До встречи 15-го 🙂»', uz: '«Xayrli kun! Telefonda kelishganimizdek hammasi tasdiqlandi, tafsilotlarni takrorlamayman. 15-sanada ko\'rishguncha 🙂»', en: '"Good afternoon! Everything is confirmed as we discussed on the phone, no need to repeat the details. See you on the 15th 🙂"' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Урок требует тёплого, но профессионального тона, 1–2 эмодзи максимум, коротких сообщений по 1–2 предложения и письменного подтверждения дат, цены и условий. Вариант с «как обсудили по телефону» выглядит вежливо, но нарушает главное правило — важные детали после звонка фиксируются письменно.',
      uz: 'Dars iliq, lekin professional ohang, ko\'pi bilan 1–2 ta emoji, 1–2 gaplik qisqa xabarlar va sanalar, narx hamda shartlarni yozma tasdiqlashni talab qiladi. «Telefonda kelishganimizdek» varianti muloyim ko\'rinadi, lekin asosiy qoidani buzadi — qo\'ng\'iroqdan keyingi muhim tafsilotlar yozma qayd etiladi.',
      en: 'The lesson requires a warm but professional tone, at most 1–2 emoji, short 1–2 sentence messages and written confirmation of dates, price and conditions. The "as discussed on the phone" option sounds polite but breaks the key rule — important details must be put in writing after a call.',
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
  {
    id: 'quiz-booking-com-guests-3',
    moduleSlug: 'booking-com-guests',
    question: {
      ru: 'Вторник, 15:00. Приезжает гость с Booking.com. В его ваучере: «невозвратный тариф, завтрак включён, оплачено». В PMS бронь стоит как «без завтрака, оплата в отеле». Гость расхождения не заметил. Что сделать ПЕРВЫМ?',
      uz: 'Seshanba, 15:00. Booking.com orqali bron qilgan mehmon keladi. Uning vaucherida: «qaytarilmaydigan tarif, nonushta kiritilgan, to\'langan». PMSda esa bron «nonushtasiz, to\'lov mehmonxonada» deb turibdi. Mehmon farqni payqamagan. BIRINCHI nima qilasiz?',
      en: 'Tuesday, 15:00. A Booking.com guest arrives. The voucher says "non-refundable rate, breakfast included, prepaid". In the PMS the booking shows "room only, pay at hotel". The guest hasn\'t noticed the discrepancy. What do you do FIRST?',
    },
    options: [
      { ru: 'Заселить по данным PMS и взять оплату в отеле — PMS является основной системой отеля', uz: 'PMS ma\'lumotlari bo\'yicha joylashtirib, to\'lovni mehmonxonada olish — PMS mehmonxonaning asosiy tizimi', en: 'Check the guest in per the PMS and take payment at the hotel — the PMS is the hotel\'s system of record' },
      { ru: 'До завершения заселения сверить бронь в Экстранете Booking.com с PMS, исправить запись и коротко напомнить гостю условия его тарифа', uz: 'Ro\'yxatdan o\'tkazishni yakunlashdan oldin Booking.com Ekstranetidagi bronni PMS bilan solishtirib, yozuvni to\'g\'rilash va mehmonga tarif shartlarini qisqacha eslatish', en: 'Before completing check-in, match the Booking.com Extranet reservation against the PMS, correct the record and briefly remind the guest of their rate conditions' },
      { ru: 'Попросить гостя самому позвонить в Booking.com и разобраться — бронь пришла с их платформы', uz: 'Mehmondan Booking.comga o\'zi qo\'ng\'iroq qilib, hal qilishini so\'rash — bron ularning platformasidan kelgan', en: 'Ask the guest to call Booking.com themselves to sort it out — the booking came from their platform' },
      { ru: 'Заселить молча, а вопрос завтрака и оплаты прояснить завтра утром, чтобы не создавать неловкости у стойки', uz: 'Indamay joylashtirib, nonushta va to\'lov masalasini stoykada noqulaylik yaratmaslik uchun ertaga ertalab aniqlashtirish', en: 'Check the guest in without comment and clear up breakfast and payment tomorrow morning to avoid awkwardness at the desk' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Первый шаг с бронью Booking.com — всегда точная сверка Экстранета и PMS (даты, тип номера, тариф, завтрак, статус оплаты) до заселения, а условия тарифа объясняются спокойно и заранее. Отправить гостя «разбираться с Booking.com» — это тот самый уход от ответственности из плохого диалога урока.',
      uz: 'Booking.com broni bilan birinchi qadam — har doim joylashtirishdan oldin Ekstranet va PMSni aniq solishtirish (sanalar, xona turi, tarif, nonushta, to\'lov holati), tarif shartlari esa xotirjam va oldindan tushuntiriladi. Mehmonni «Booking.com bilan o\'zingiz hal qiling» deb yuborish — darsdagi yomon dialogdagi mas\'uliyatdan qochishning o\'zi.',
      en: 'The first step with a Booking.com reservation is always a precise match of the Extranet against the PMS (dates, room type, rate, breakfast, payment status) before check-in, with rate conditions explained calmly and in advance. Sending the guest to "sort it out with Booking.com" is exactly the deflection shown in the lesson\'s bad dialogue.',
    },
  },
  {
    id: 'quiz-booking-com-guests-4',
    moduleSlug: 'booking-com-guests',
    question: {
      ru: 'Довольный гость с Booking.com выезжает и говорит: «Всё было отлично!» Какая фраза — ЕДИНСТВЕННАЯ, соответствующая правилам урока об отзывах и отношении к платформе?',
      uz: 'Booking.com orqali kelgan mamnun mehmon chiqib ketayotib: «Hammasi zo\'r bo\'ldi!» deydi. Qaysi ibora darsning fikr-mulohaza va platformaga munosabat qoidalariga mos keladigan YAGONA ibora?',
      en: 'A happy Booking.com guest is checking out and says: "Everything was great!" Which phrase is the ONLY one that follows the lesson\'s rules on reviews and on talking about the platform?',
    },
    options: [
      { ru: '«Поставьте нам, пожалуйста, 10 из 10 на Booking.com — всё, что ниже 9, сильно портит наш рейтинг»', uz: '«Iltimos, Booking.comda bizga 10 dan 10 qo\'ying — 9 dan pasti reytingimizni qattiq buzadi»', en: '"Please give us 10 out of 10 on Booking.com — anything below 9 really hurts our rating"' },
      { ru: '«В следующий раз бронируйте напрямую — Booking.com берёт с нас огромную комиссию и завышает цены»', uz: '«Keyingi safar to\'g\'ridan-to\'g\'ri bron qiling — Booking.com bizdan katta komissiya oladi va narxlarni oshiradi»', en: '"Next time book direct — Booking.com takes a huge commission from us and inflates the prices"' },
      { ru: 'Ничего не говорить об отзыве: любая просьба оценить проживание считается давлением на гостя', uz: 'Fikr-mulohaza haqida hech narsa demaslik: baholashni so\'rashning har qanday turi mehmonga bosim hisoblanadi', en: 'Say nothing about a review: any request to rate the stay counts as pressuring the guest' },
      { ru: '«Если вам у нас понравилось, мы будем очень благодарны за отзыв на Booking.com — это помогает нам развиваться»', uz: '«Agar bizda sizga yoqqan bo\'lsa, Booking.comda fikr qoldirsangiz juda minnatdor bo\'lamiz — bu bizga rivojlanishga yordam beradi»', en: '"If you enjoyed your stay, we\'d really appreciate a review on Booking.com — it helps us grow"' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Урок: на выезде пригласите оставить честный отзыв, не прося напрямую высокий балл, и никогда не критикуйте платформу при госте. Молчать тоже неверно — приглашение к отзыву входит в золотые правила.',
      uz: 'Dars: chiqishda to\'g\'ridan-to\'g\'ri yuqori ball so\'ramasdan, halol fikr qoldirishga taklif qiling va mehmon oldida platformani hech qachon tanqid qilmang. Jim turish ham noto\'g\'ri — fikr qoldirishga taklif qilish oltin qoidalarga kiradi.',
      en: 'The lesson: at check-out invite an honest review without asking directly for a high score, and never criticize the platform in front of the guest. Staying silent is also wrong — inviting a review is one of the golden rules.',
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
  {
    id: 'quiz-walk-in-guests-3',
    moduleSlug: 'walk-in-guests',
    question: {
      ru: '21:30. Уставшая пара без брони спрашивает номер на одну ночь. Вы проверили систему: отель полностью занят. Какой ответ — ЕДИНСТВЕННЫЙ правильный?',
      uz: 'Soat 21:30. Bronsiz charchagan er-xotin bir kechaga xona so\'rashadi. Siz tizimni tekshirdingiz: mehmonxona to\'liq band. Qaysi javob YAGONA to\'g\'ri javob?',
      en: 'It is 21:30. A tired couple without a reservation asks for a room for one night. You check the system: the hotel is fully booked. Which answer is the ONLY correct one?',
    },
    options: [
      { ru: 'Извиниться, сообщить, что на сегодня мест нет, порекомендовать партнёрский отель рядом и предложить позвонить туда, чтобы уточнить наличие', uz: 'Uzr so\'rab, bugunga joy yo\'qligini aytish, yaqin atrofdagi hamkor mehmonxonani tavsiya qilish va bo\'sh joyni aniqlash uchun u yerga qo\'ng\'iroq qilishni taklif qilish', en: 'Apologize, say there are no rooms tonight, recommend a nearby partner hotel and offer to call them to check availability' },
      { ru: 'Вежливо сказать: «К сожалению, на сегодня свободных номеров нет», пожелать удачи и не задерживать гостей', uz: 'Muloyimlik bilan: «Afsuski, bugunga bo\'sh xona yo\'q» deb, omad tilab, mehmonlarni ushlab qolmaslik', en: 'Politely say "Unfortunately there are no rooms tonight", wish them luck and not hold them up' },
      { ru: 'Предложить подождать в лобби до ночного аудита — вдруг кто-то не заедет и номер освободится, — не упоминая другие отели', uz: 'Boshqa mehmonxonalarni tilga olmasdan, tungi auditgacha lobbida kutishni taklif qilish — balki kimdir kelmay, xona bo\'shab qolar', en: 'Suggest they wait in the lobby until the night audit in case a no-show frees up a room, without mentioning other hotels' },
      { ru: 'Сначала уточнить количество ночей и гостей, как учит урок, и только потом сообщить, что мест нет', uz: 'Avval darsda o\'rgatilganidek kechalar va mehmonlar sonini aniqlashtirish, keyingina joy yo\'qligini aytish', en: 'First clarify the number of nights and guests, as the lesson teaches, and only then say there are no rooms' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Золотое правило: при полной загрузке никогда не ограничивайтесь «мест нет» — всегда предложите партнёрский отель и помогите связаться с ним. Вопрос о ночах и гостях нужен перед тем, как называть цену, а не как прелюдия к отказу.',
      uz: 'Oltin qoida: to\'liq bandlikda hech qachon «joy yo\'q» bilan cheklanmang — har doim hamkor mehmonxonani taklif qiling va u bilan bog\'lanishga yordam bering. Kechalar va mehmonlar haqidagi savol narx aytishdan oldin kerak, rad etishdan oldingi muqaddima sifatida emas.',
      en: 'Golden rule: when fully booked, never stop at "no rooms" — always recommend a partner hotel and help the guest get in touch with it. The nights-and-guests question belongs before quoting a price, not as a prelude to a refusal.',
    },
  },
  {
    id: 'quiz-walk-in-guests-4',
    moduleSlug: 'walk-in-guests',
    question: {
      ru: 'Гость без брони подходит к стойке: «Сколько у вас стоит номер?» Свободны Standard (350 000 сум) и Superior с видом во двор (420 000 сум), в оба включён завтрак. Какой ПЕРВЫЙ шаг верен по уроку?',
      uz: 'Bronsiz mehmon stoykaga keladi: «Sizda xona qancha turadi?» Standard (350 000 so\'m) va hovliga qaraydigan Superior (420 000 so\'m) bo\'sh, ikkalasiga ham nonushta kiritilgan. Darsga ko\'ra qaysi BIRINCHI qadam to\'g\'ri?',
      en: 'A guest without a reservation comes to the desk: "How much is a room?" A Standard (350,000 sum) and a Superior with a courtyard view (420,000 sum) are free, breakfast included in both. Which FIRST step is correct per the lesson?',
    },
    options: [
      { ru: 'Сразу назвать самый дешёвый вариант — 350 000 сум, чтобы гость быстро получил ответ', uz: 'Mehmon tez javob olishi uchun darhol eng arzon variantni — 350 000 so\'mni aytish', en: 'Quote the cheapest option right away — 350,000 sum — so the guest gets a quick answer' },
      { ru: 'Сразу уверенно назвать оба варианта с ценами и спросить, какой больше нравится', uz: 'Darhol ishonch bilan ikkala variantni narxlari bilan aytib, qaysi biri ko\'proq yoqishini so\'rash', en: 'Confidently quote both options with prices right away and ask which one they prefer' },
      { ru: 'Спросить, на сколько ночей и сколько гостей, и затем предложить один–два подходящих варианта с чёткой ценой', uz: 'Necha kecha va necha mehmon ekanini so\'rab, so\'ng aniq narx bilan bir-ikkita mos variantni taklif qilish', en: 'Ask how many nights and how many guests, then present one or two suitable options with a clear price' },
      { ru: 'Сказать «сейчас посмотрю, может, что-то найдётся» и пойти уточнить у менеджера', uz: '«Hozir qarayman, balki biror narsa topilar» deb, menejerdan aniqlashtirgani ketish', en: 'Say "let me look, maybe there\'s something" and go check with the manager' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Совет урока: прежде чем называть цену, уточните количество ночей и гостей — так вы сразу предложите подходящий номер, а не просто самый дешёвый. Назвать оба варианта — правильное действие, но в неверном порядке; «может, что-то найдётся» — неуверенность, названная в уроке ошибкой.',
      uz: 'Dars maslahati: narx aytishdan oldin kechalar va mehmonlar sonini aniqlashtiring — shunda shunchaki eng arzonini emas, mos xonani darhol taklif qilasiz. Ikkala variantni aytish — to\'g\'ri harakat, lekin noto\'g\'ri tartibda; «balki biror narsa topilar» — darsda xato deb nomlangan ikkilanish.',
      en: 'The lesson\'s tip: before quoting a price, ask about the number of nights and guests — this lets you offer the right room immediately, not just the cheapest one. Quoting both options is the right action in the wrong order; "maybe there\'s something" is the hesitancy the lesson calls a mistake.',
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
  {
    id: 'quiz-upselling-rooms-3',
    moduleSlug: 'upselling-rooms',
    question: {
      ru: '23:00. Заезжает одинокий командированный после 11-часового перелёта, забронирован Standard; говорит: «Я просто хочу спать». Сегодня свободен Deluxe на тихом верхнем этаже (+15 $). Какой вариант соответствует уроку?',
      uz: 'Soat 23:00. 11 soatlik parvozdan so\'ng yolg\'iz xizmat safaridagi mehmon keladi, Standard bron qilingan; «Men shunchaki uxlamoqchiman», deydi. Bugun tinch yuqori qavatda Deluxe bo\'sh (+15 $). Qaysi variant darsga mos keladi?',
      en: 'It is 23:00. A solo business traveller arrives after an 11-hour flight with a Standard room booked and says: "I just want to sleep." A Deluxe on a quiet upper floor is free tonight (+$15). Which option follows the lesson?',
    },
    options: [
      { ru: '«У нас есть Deluxe с видом на бассейн за +15 $, завтрак за 10 $, трансфер обратно в аэропорт за 25 $ и поздний выезд за 50 % тарифа — что выбираете?»', uz: '«Bizda +15 $ ga basseyn manzarali Deluxe, 10 $ ga nonushta, 25 $ ga aeroportga qaytish transferi va tarifning 50 % iga kech chiqish bor — qaysi birini tanlaysiz?»', en: '"We have a Deluxe with a pool view for +$15, breakfast for $10, a transfer back to the airport for $25 and late check-out for 50% of the rate — which would you like?"' },
      { ru: 'Учесть сигнал усталости и коротко предложить одну уместную опцию: «За небольшую разницу могу разместить вас на тихом верхнем этаже подальше от лифта — то, что нужно после перелёта», а при отказе сразу продолжить заселение', uz: 'Charchoq belgisini hisobga olib, qisqacha bitta o\'rinli variantni taklif qilish: «Kichik farq evaziga sizni liftdan uzoqroq, tinch yuqori qavatga joylashtira olaman — parvozdan keyin ayni kerakli narsa», rad etilsa, darhol ro\'yxatdan o\'tkazishni davom ettirish', en: 'Read the fatigue cue and briefly offer one relevant option: "For a small difference I can put you on a quiet upper floor away from the elevator — just what you need after a flight", and if declined, continue check-in at once' },
      { ru: '«Честно говоря, стандартные номера маленькие и шумные — чтобы выспаться, вам точно нужен Deluxe»', uz: '«Ochig\'i, standart xonalar kichkina va shovqinli — yaxshi uxlash uchun sizga aniq Deluxe kerak»', en: '"Honestly, the standard rooms are small and noisy — to get a good night\'s sleep you really need the Deluxe"' },
      { ru: 'Вообще не делать предложения: уставшему гостю никогда ничего не предлагают', uz: 'Umuman taklif qilmaslik: charchagan mehmonga hech qachon hech narsa taklif qilinmaydi', en: 'Make no offer at all: a tired guest should never be offered anything' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Урок учит читать сигналы гостя (усталость после перелёта — один из них), предлагать ОДНУ самую уместную опцию как совет и уважать отказ. Перечислять несколько апселлов сразу и принижать забронированный номер — ошибки из урока; полный отказ от предложения тоже неверен, ведь тихий номер здесь реальная ценность для гостя.',
      uz: 'Dars mehmon signallarini o\'qishni (parvozdan keyingi charchoq — shulardan biri), maslahat sifatida eng o\'rinli BITTA variantni taklif qilishni va rad javobini hurmat qilishni o\'rgatadi. Bir nechta upsellni birdan sanash va bron qilingan xonani kamsitish — darsdagi xatolar; taklifdan butunlay voz kechish ham noto\'g\'ri, chunki tinch xona bu yerda mehmon uchun haqiqiy qadriyat.',
      en: 'The lesson teaches reading the guest\'s cues (fatigue after travel is one), offering ONE most relevant option as advice and respecting a refusal. Listing several upsells at once and talking down the booked room are mistakes from the lesson; making no offer at all is also wrong, since a quiet room is genuine value for this guest.',
    },
  },
  {
    id: 'quiz-upselling-rooms-4',
    moduleSlug: 'upselling-rooms',
    question: {
      ru: 'Вы предложили гостю Deluxe за +15 $ и показали фото. Гость: «Нет, спасибо, меня устраивает то, что я забронировал». Что дальше?',
      uz: 'Siz mehmonga +15 $ ga Deluxe taklif qilib, rasmini ko\'rsatdingiz. Mehmon: «Yo\'q, rahmat, bron qilganim meni qoniqtiradi». Keyin nima qilasiz?',
      en: 'You offered the guest a Deluxe for +$15 and showed a photo. The guest: "No thanks, I\'m fine with what I booked." What next?',
    },
    options: [
      { ru: '«Вы уверены? Deluxe намного просторнее и тише — давайте я покажу ещё одно фото»', uz: '«Ishonchingiz komilmi? Deluxe ancha keng va tinch — yana bitta rasm ko\'rsatay»', en: '"Are you sure? The Deluxe is much more spacious and quieter — let me show you one more photo"' },
      { ru: 'Оставить тему номера, но тут же предложить завтрак и трансфер, чтобы попытка апселлинга не пропала даром', uz: 'Xona mavzusini qoldirib, upsell urinishi bekor ketmasligi uchun darhol nonushta va transfer taklif qilish', en: 'Drop the room topic but immediately offer breakfast and a transfer so the upsell attempt isn\'t wasted' },
      { ru: 'Предложить скидку 5 $ на повышение категории, чтобы гостю было легче согласиться', uz: 'Mehmon rozi bo\'lishi osonroq bo\'lishi uchun toifani oshirishga 5 $ chegirma taklif qilish', en: 'Offer a $5 discount on the upgrade to make it easier for the guest to say yes' },
      { ru: 'Сразу принять решение: «Конечно» — и продолжить заселение, больше не возвращаясь к предложению', uz: 'Qarorni darhol qabul qilish: «Albatta» — va taklifga boshqa qaytmasdan ro\'yxatdan o\'tkazishni davom ettirish', en: 'Accept the decision at once — "Of course" — and continue check-in without returning to the offer' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Золотое правило: если гость один раз сказал «нет», не переформулируйте и не предлагайте снова — уважение к решению важнее упущенной продажи. Переключение на завтрак и трансфер — это та же «повторная попытка» плюс ошибка «несколько апселлов сразу».',
      uz: 'Oltin qoida: mehmon bir marta «yo\'q» desa, qayta ifodalab, yana taklif qilmang — qarorga hurmat o\'tkazib yuborilgan savdodan muhimroq. Nonushta va transferga o\'tish — o\'sha «qayta urinish» va «bir nechta upsell birdan» xatosi.',
      en: 'Golden rule: if the guest says "no" once, do not rephrase and offer again — respecting the decision matters more than a missed sale. Switching to breakfast and a transfer is the same "second attempt" plus the mistake of pitching several upsells at once.',
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
  {
    id: 'quiz-late-checkout-3',
    moduleSlug: 'late-checkout',
    question: {
      ru: '09:00. Гость просит выезд в 15:00. Вы проверили систему: номер на сегодняшний заезд не стоит. По правилам отеля выезд до 15:00 стоит 50 % от стоимости ночи. Какой ответ верен?',
      uz: 'Soat 09:00. Mehmon 15:00 da chiqishni so\'raydi. Siz tizimni tekshirdingiz: xona bugungi kelishga qo\'yilmagan. Mehmonxona qoidalariga ko\'ra 15:00 gacha chiqish bir kecha narxining 50 % ini tashkil qiladi. Qaysi javob to\'g\'ri?',
      en: 'It is 09:00. A guest asks to check out at 15:00. You checked the system: the room is not booked for tonight\'s arrival. By hotel policy, check-out until 15:00 costs 50% of the nightly rate. Which answer is correct?',
    },
    options: [
      { ru: '«Могу продлить до 15:00, это 50 % от стоимости ночи — подтверждаем?» — и после согласия сообщить хаускипингу новое время выезда', uz: '«15:00 gacha uzaytira olaman, bu bir kecha narxining 50 % i — tasdiqlaymizmi?» — rozilikdan so\'ng xaus-kipingga yangi chiqish vaqtini xabar qilish', en: '"I can extend you to 3pm, which comes to 50% of the nightly rate — shall I confirm that?" — and after agreement notify housekeeping of the new check-out time' },
      { ru: '«Да, без проблем, 15:00 подходит» — а 50 % добавить в фолио, чтобы гость увидел сумму в итоговом счёте при выезде', uz: '«Ha, muammo yo\'q, 15:00 bo\'ladi» — 50 % ni esa mehmon summani chiqishdagi yakuniy hisobda ko\'rishi uchun folioga qo\'shish', en: '"Yes, no problem, 3pm is fine" — and add the 50% to the folio so the guest sees it on the final bill at departure' },
      { ru: 'Подтвердить 15:00 и озвучить плату, но хаускипинг не предупреждать — горничные и так увидят, что гость ещё в номере', uz: '15:00 ni tasdiqlab, to\'lovni aytish, lekin xaus-kipingni ogohlantirmaslik — xonaki xodimlar mehmon hali xonada ekanini baribir ko\'rishadi', en: 'Confirm 3pm and state the fee, but don\'t tell housekeeping — the maids will see the guest is still in the room anyway' },
      { ru: 'Отказать: поздний выезд — привилегия только для участников программы лояльности, — и предложить хранение багажа', uz: 'Rad etish: kech chiqish — faqat sodiqlik dasturi a\'zolari uchun imtiyoz, — va yuk saqlashni taklif qilish', en: 'Decline: late check-out is a privilege for loyalty members only — and offer luggage storage' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Урок: если поздний выезд платный, назовите плату заранее и спокойно — никогда не удивляйте гостя суммой потом; а забыть предупредить хаускипинг о новом времени — отдельная ошибка из списка. Номер свободен, поэтому отказ не обоснован.',
      uz: 'Dars: agar kech chiqish pullik bo\'lsa, to\'lovni oldindan va xotirjam ayting — mehmonni keyin summa bilan hech qachon hayron qoldirmang; xaus-kipingni yangi vaqt haqida ogohlantirishni unutish esa ro\'yxatdagi alohida xato. Xona bo\'sh, shuning uchun rad etish asossiz.',
      en: 'The lesson: if the late check-out carries a fee, state it upfront and calmly — never surprise the guest with a charge afterwards; forgetting to notify housekeeping of the changed time is a separate listed mistake. The room is free, so a refusal is unjustified.',
    },
  },
  {
    id: 'quiz-late-checkout-4',
    moduleSlug: 'late-checkout',
    question: {
      ru: 'Гость у стойки: «Можно выехать в 15:00?» Вы знаете, что на сегодня загрузка около 95 %, но карточку именно этого номера ещё не открывали. Какое ПЕРВОЕ действие — единственно верное?',
      uz: 'Mehmon stoykada: «15:00 da chiqsam bo\'ladimi?» Bugunga bandlik taxminan 95 % ekanini bilasiz, lekin aynan shu xonaning kartochkasini hali ochmagansiz. Qaysi BIRINCHI harakat yagona to\'g\'ri?',
      en: 'A guest at the desk: "Can I check out at 3pm?" You know tonight\'s occupancy is around 95%, but you haven\'t opened this particular room\'s record yet. Which FIRST action is the only correct one?',
    },
    options: [
      { ru: 'Сказать «да, конечно, без проблем» — 5 % номеров всё равно свободны, почти наверняка получится', uz: '«Ha, albatta, muammo yo\'q» deyish — baribir 5 % xona bo\'sh, deyarli aniq bo\'ladi', en: 'Say "yes, sure, no problem" — 5% of rooms are free anyway, it will almost certainly work out' },
      { ru: 'Сказать «к сожалению, сегодня почти полная загрузка, не получится» и сразу предложить бесплатное хранение багажа', uz: '«Afsuski, bugun deyarli to\'liq bandlik, iloji yo\'q» deb, darhol bepul yuk saqlashni taklif qilish', en: 'Say "unfortunately we\'re nearly full tonight, it won\'t be possible" and immediately offer free luggage storage' },
      { ru: 'Сказать «одну минуту, проверю доступность вашего номера на сегодняшнюю ночь», проверить статус брони этого номера и только потом ответить', uz: '«Bir daqiqa, xonangizning bugungi kechaga bo\'shligini tekshiray» deb, shu xonaning bron holatini tekshirib, keyingina javob berish', en: 'Say "one moment, let me check the room\'s availability for tonight", check this room\'s booking status and only then answer' },
      { ru: 'Сказать, что уточните у хаускипинга и перезвоните в номер ближе к обеду', uz: 'Xaus-kipingdan aniqlashtirib, tushga yaqin xonaga qo\'ng\'iroq qilishingizni aytish', en: 'Say you will check with housekeeping and call the room back closer to lunchtime' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Поздний выезд зависит от того, заселяется ли именно этот номер сегодня, — проверка статуса делается быстро и незаметно, пока гость ждёт у стойки. Отказ «по общей загрузке» без проверки номера и обещание «почти наверняка» — обе крайности, которые урок запрещает.',
      uz: 'Kech chiqish aynan shu xonaga bugun kelish bor-yo\'qligiga bog\'liq — holat tekshiruvi mehmon stoykada kutayotganda tez va sezdirmay bajariladi. Xonani tekshirmasdan «umumiy bandlik» bo\'yicha rad etish va «deyarli aniq» va\'da — dars taqiqlaydigan ikki chekka.',
      en: 'Late check-out depends on whether this specific room has an arrival tonight — the status check is done quickly and discreetly while the guest waits at the desk. Refusing based on overall occupancy without checking the room, and promising "almost certainly", are both extremes the lesson forbids.',
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
  {
    id: 'quiz-early-checkin-3',
    moduleSlug: 'early-checkin',
    question: {
      ru: '09:00. Пара после ночного рейса просит заселиться пораньше. В системе их номер — «освобождён, не убран», хаускипинг обещает готовность около 12:00. Какой ответ соответствует уроку?',
      uz: 'Soat 09:00. Tungi parvozdan keyin er-xotin ertaroq joylashishni so\'rashadi. Tizimda ularning xonasi — «bo\'shatilgan, tozalanmagan», xaus-kiping taxminan 12:00 ga tayyor bo\'lishini aytadi. Qaysi javob darsga mos keladi?',
      en: 'It is 09:00. A couple off an overnight flight asks to check in early. In the system their room is "vacant dirty"; housekeeping says it will be ready around 12:00. Which answer follows the lesson?',
    },
    options: [
      { ru: '«Может, чуть позже, постараемся — подойдите через какое-то время»', uz: '«Balki birozdan keyin, harakat qilamiz — biroz vaqt o\'tgach keling»', en: '"Maybe a bit later, we\'ll try our best — come back in a while"' },
      { ru: '«Ваш номер будет готов примерно к 12:00, я позвоню вам, как только он освободится. А пока могу принять багаж на хранение, и вы можете позавтракать в нашем лобби-кафе»', uz: '«Xonangiz taxminan 12:00 ga tayyor bo\'ladi, bo\'shashi bilan sizga qo\'ng\'iroq qilaman. Hozircha yukingizni saqlashga olishim mumkin, lobbi-kafemizda nonushta qilishingiz mumkin»', en: '"Your room should be ready around 12:00, and I\'ll call you the moment it\'s available. Meanwhile I can store your luggage, and you\'re welcome to have breakfast in our lobby café"' },
      { ru: 'Выдать ключ прямо сейчас, чтобы уставшие гости отдохнули, — горничные уберут позже, когда гости выйдут', uz: 'Charchagan mehmonlar dam olishi uchun kalitni hozir berish — mehmonlar chiqqanda xonaki xodimlar keyinroq tozalaydi', en: 'Hand over the key right now so the tired guests can rest — housekeeping can clean later when they go out' },
      { ru: 'Предложить хранение багажа и лаунж, сказать, что номер будет готов «где-то после обеда», и попросить подойти узнать', uz: 'Yuk saqlash va launjni taklif qilib, xona «tushlikdan keyin qachondir» tayyor bo\'lishini aytish va bilib ketishni so\'rash', en: 'Offer luggage storage and the lounge, say the room will be ready "sometime after lunch" and ask them to check back' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Урок требует проверить статус номера и назвать конкретное время плюс альтернативу, а также перезвонить гостю, как только номер готов. Вариант с лаунжем выглядит заботливым, но «где-то после обеда» — та самая расплывчатость, которую урок называет ошибкой; выдать неубранный номер недопустимо.',
      uz: 'Dars xona holatini tekshirib, aniq vaqt va muqobil variantni aytishni, shuningdek, xona tayyor bo\'lishi bilan mehmonga qo\'ng\'iroq qilishni talab qiladi. Launjli variant g\'amxo\'r ko\'rinadi, lekin «tushlikdan keyin qachondir» — dars xato deb ataydigan o\'sha noaniqlik; tozalanmagan xonani berish mumkin emas.',
      en: 'The lesson requires checking the room status and giving a specific time plus an alternative, and calling the guest as soon as the room is ready. The lounge option looks caring, but "sometime after lunch" is exactly the vagueness the lesson calls a mistake; handing over an uncleaned room is unacceptable.',
    },
  },
  {
    id: 'quiz-early-checkin-4',
    moduleSlug: 'early-checkin',
    question: {
      ru: 'В 09:00 вы сказали гостям, что номер будет готов примерно к 12:00, и они ждут в лобби-кафе. В 11:30 хаускипинг сообщает: в номере сломан кондиционер, ремонт закончат не раньше 14:00. Что делать?',
      uz: 'Soat 09:00 da mehmonlarga xona taxminan 12:00 ga tayyor bo\'lishini aytdingiz, ular lobbi-kafeda kutishyapti. 11:30 da xaus-kiping xabar beradi: xonada konditsioner buzilgan, ta\'mirlash 14:00 dan oldin tugamaydi. Nima qilasiz?',
      en: 'At 09:00 you told the guests their room would be ready around 12:00, and they are waiting in the lobby café. At 11:30 housekeeping reports the air conditioner in the room is broken and repairs won\'t finish before 14:00. What do you do?',
    },
    options: [
      { ru: 'Дождаться 12:00 и, если гости сами подойдут к стойке, объяснить задержку', uz: '12:00 ni kutib, agar mehmonlar o\'zlari stoykaga kelsa, kechikishni tushuntirish', en: 'Wait until 12:00 and, if the guests come to the desk themselves, explain the delay' },
      { ru: 'Ничего не говорить и в 12:00 всё же выдать номер — неисправный кондиционер мелочь по сравнению с усталостью гостей', uz: 'Hech narsa demay, 12:00 da baribir xonani berish — buzuq konditsioner mehmonlar charchog\'i oldida arzimas narsa', en: 'Say nothing and hand over the room at 12:00 anyway — a broken air conditioner is minor compared to the guests\' tiredness' },
      { ru: 'Позвонить гостям в 14:00, когда номер будет готов, — нет смысла сообщать плохую новость раньше', uz: 'Xona tayyor bo\'lganda, 14:00 da mehmonlarga qo\'ng\'iroq qilish — yomon xabarni ertaroq aytishdan ma\'no yo\'q', en: 'Call the guests at 14:00 once the room is ready — there is no point in giving bad news earlier' },
      { ru: 'Сразу подойти к гостям, извиниться, назвать новое конкретное время (около 14:00) и проверить в системе, нет ли готового номера той же категории, чтобы заселить их раньше', uz: 'Darhol mehmonlar oldiga borib, uzr so\'rash, yangi aniq vaqtni (taxminan 14:00) aytish va ularni ertaroq joylashtirish uchun tizimda o\'sha toifadagi tayyor xona bor-yo\'qligini tekshirish', en: 'Go to the guests at once, apologize, give the new specific time (around 14:00) and check the system for a ready room of the same category to move them in earlier' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Золотое правило раннего заезда: держите гостя в курсе, если что-то меняется, и всегда называйте конкретное время. Молчать до 12:00 или до 14:00 превращает ваше обещание в ту самую «ложную надежду», которую урок запрещает.',
      uz: 'Erta kelishning oltin qoidasi: biror narsa o\'zgarsa, mehmonni xabardor qiling va doim aniq vaqt ayting. 12:00 yoki 14:00 gacha jim turish va\'dangizni dars taqiqlaydigan o\'sha «soxta umid»ga aylantiradi.',
      en: 'The early check-in golden rule: keep the guest updated if anything changes, and always give a specific time. Staying silent until 12:00 or 14:00 turns your promise into exactly the "false hope" the lesson forbids.',
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
  {
    id: 'quiz-complaints-4',
    moduleSlug: 'complaints',
    question: {
      ru: '22:00. Гость с подтверждённой бронью Booking.com стоит у стойки, но свободных номеров нет — овербукинг. Гость повышает голос: «Как это у вас нет номеров?!» Какой ответ соответствует уроку?',
      uz: 'Soat 22:00. Booking.com orqali tasdiqlangan broni bor mehmon stoykada turibdi, lekin bo\'sh xona yo\'q — overbuking. Mehmon ovozini ko\'taradi: «Qanday qilib xonangiz yo\'q?!» Qaysi javob darsga mos keladi?',
      en: 'It is 22:00. A guest with a confirmed Booking.com reservation is at the desk, but there are no rooms left — overbooking. The guest raises his voice: "How can you have no rooms?!" Which answer follows the lesson?',
    },
    options: [
      { ru: 'Тише и медленнее: «Искренне прошу прощения — это полностью наша ответственность. Мы организуем номер такого же или более высокого класса в партнёрском отеле рядом, оплатим транспорт и компенсируем первую ночь у нас»', uz: 'Pastroq va sekinroq ohangda: «Chin dildan uzr so\'rayman — bu to\'liq bizning mas\'uliyatimiz. Yaqin atrofdagi hamkor mehmonxonada shunday yoki yuqoriroq toifadagi xona tashkil qilamiz, transportni to\'laymiz va bizdagi birinchi kechani kompensatsiya qilamiz»', en: 'More quietly and slowly: "I sincerely apologize — this is entirely our responsibility. We\'ll arrange an equal or upgraded room at a partner hotel nearby, cover your transport and compensate your first night with us"' },
      { ru: '«Извините, но Booking.com передал бронь слишком поздно и наша система не синхронизировалась — давайте объясню, как работает менеджер каналов, чтобы вы поняли»', uz: '«Kechirasiz, lekin Booking.com bronni juda kech uzatdi va tizimimiz sinxronlashmadi — tushunishingiz uchun kanal menejeri qanday ishlashini tushuntirib beray»', en: '"I\'m sorry, but Booking.com sent the reservation too late and our system didn\'t sync — let me explain how the channel manager works so you understand"' },
      { ru: '«У нас перебронь. Могу дать номер менеджера — он утром решит вопрос компенсации»', uz: '«Bizda ortiqcha bron. Menejer raqamini bera olaman — u ertalab kompensatsiya masalasini hal qiladi»', en: '"We\'re overbooked. I can give you the manager\'s number — he\'ll decide on compensation in the morning"' },
      { ru: 'Извиниться и предложить подождать в лаунже с напитком до ночного аудита — вдруг кто-то не заедет и номер освободится', uz: 'Uzr so\'rab, tungi auditgacha launjda ichimlik bilan kutishni taklif qilish — balki kimdir kelmay, xona bo\'shab qolar', en: 'Apologize and suggest waiting in the lounge with a drink until the night audit in case a no-show frees up a room' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'При овербукинге урок требует полностью взять ответственность отеля на себя, не винить систему бронирования и сразу предложить конкретное решение: партнёрский отель, транспорт, компенсация. Объяснять гостю работу менеджера каналов — это перекладывание вины, а «ждать аудита» — обещание, которое может не сбыться.',
      uz: 'Overbukingda dars mehmonxona mas\'uliyatini to\'liq o\'z zimmasiga olishni, bron tizimini ayblamaslikni va darhol aniq yechim taklif qilishni talab qiladi: hamkor mehmonxona, transport, kompensatsiya. Mehmonga kanal menejeri ishini tushuntirish — aybni ag\'darish, «auditni kutish» esa bajarilmasligi mumkin bo\'lgan va\'da.',
      en: 'In an overbooking the lesson requires owning the hotel\'s responsibility fully, not blaming the booking system, and offering a concrete solution at once: partner hotel, transport, compensation. Explaining the channel manager to the guest is shifting blame, and "wait for the audit" is a promise that may not be kept.',
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
  {
    id: 'quiz-vip-guests-4',
    moduleSlug: 'vip-guests',
    question: {
      ru: 'Людное лобби, у стойки очередь. Заезжает постоянная гостья г-жа Ортега; в профиле: угловой номер с видом на море и гипоаллергенные подушки. Сегодня ни одного номера с видом на море нет. Какое действие — ЕДИНСТВЕННОЕ верное по уроку?',
      uz: 'Gavjum lobbi, stoykada navbat. Doimiy mehmon xonim Ortega keladi; profilida: dengizga qaraydigan burchak xona va gipoallergen yostiqlar. Bugun dengizga qaraydigan birorta xona yo\'q. Darsga ko\'ra qaysi harakat YAGONA to\'g\'ri?',
      en: 'A crowded lobby with a queue at the desk. Returning guest Mrs. Ortega arrives; her profile notes a sea-view corner room and hypoallergenic pillows. Today no sea-view room is available. Which action is the ONLY correct one per the lesson?',
    },
    options: [
      { ru: 'Громко на всё лобби: «Госпожа Ортега, наша VIP-гостья, с возвращением! Ваш угловой люкс уже ждёт!»', uz: 'Butun lobbiga baland ovozda: «Xonim Ortega, bizning VIP-mehmonimiz, qaytganingiz bilan! Burchak lyuksingiz allaqachon kutmoqda!»', en: 'Loudly across the lobby: "Mrs. Ortega, our VIP guest, welcome back! Your corner suite is waiting!"' },
      { ru: 'Пообещать номер с видом на море «как всегда», чтобы не расстраивать гостью, а потом решать вопрос с хаускипингом', uz: 'Mehmonni xafa qilmaslik uchun «har doimgidek» dengizga qaraydigan xonani va\'da qilib, keyin masalani xaus-kiping bilan hal qilish', en: 'Promise the sea-view room "as always" so as not to upset her, and sort it out with housekeeping later' },
      { ru: 'Тихо у стойки поприветствовать по имени, сказать, что гипоаллергенные подушки уже готовы, честно объяснить, что сегодня номера с видом на море нет, и предложить лучший доступный вариант', uz: 'Stoykada sekin ovozda ismi bilan kutib olish, gipoallergen yostiqlar tayyor ekanini aytish, bugun dengizga qaraydigan xona yo\'qligini halol tushuntirish va eng yaxshi mavjud variantni taklif qilish', en: 'Quietly at the desk greet her by name, say the hypoallergenic pillows are ready, honestly explain that no sea-view room is available today and offer the best available alternative' },
      { ru: 'Ради справедливости обслужить её как всех в очереди и заново спросить о предпочтениях у стойки', uz: 'Adolat uchun uni navbatdagilar kabi xizmat ko\'rsatib, afzalliklarini stoykada qaytadan so\'rash', en: 'To be fair, serve her like everyone else in the queue and ask about her preferences again at the desk' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Урок сочетает два правила: персонализация должна быть видна гостю, но невидима окружающим (никогда не объявлять VIP-статус вслух), и нельзя обещать апгрейд, который невозможно предоставить. Только вариант с тихим приветствием по имени, учтёнными подушками и честным объяснением выполняет оба.',
      uz: 'Dars ikki qoidani birlashtiradi: shaxsiylashtirish mehmonga ko\'rinishi, atrofdagilarga esa ko\'rinmasligi kerak (VIP-statusni hech qachon ovoz chiqarib e\'lon qilmaslik), va berib bo\'lmaydigan apgreydni va\'da qilish mumkin emas. Faqat sekin ovozda ismi bilan kutib olish, hisobga olingan yostiqlar va halol tushuntirish varianti ikkalasini ham bajaradi.',
      en: 'The lesson combines two rules: personalization must be visible to the guest but invisible to everyone around (never announce VIP status aloud), and never promise an upgrade that cannot be provided. Only the option with a quiet greeting by name, the pillows taken care of and an honest explanation satisfies both.',
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
  {
    id: 'quiz-foreign-guests-3',
    moduleSlug: 'foreign-guests',
    question: {
      ru: 'Гость на ломаном английском: «Sorry, my English not good. Room key, problem». Рядом стоят коллеги. Какая реакция соответствует уроку?',
      uz: 'Mehmon buzuq ingliz tilida: «Sorry, my English not good. Room key, problem». Yonida hamkasblar turibdi. Qaysi reaktsiya darsga mos keladi?',
      en: 'A guest in broken English: "Sorry, my English not good. Room key, problem." Colleagues are standing nearby. Which reaction follows the lesson?',
    },
    options: [
      { ru: 'Повторить медленно и ГРОМЧЕ, по слогам: «ВАША… КАРТА… НЕ… РАБОТАЕТ?»', uz: 'Sekin va BALANDROQ, bo\'g\'inlab takrorlash: «SIZNING… KARTA… ISHLAMAYAPTI?»', en: 'Repeat slowly and LOUDER, syllable by syllable: "YOUR... CARD... NOT... WORKING?"' },
      { ru: 'Короткой простой фразой уточнить, показать ключ-карту и жестом — дверь, при необходимости подтвердить через приложение-переводчик и выдать новую карту', uz: 'Qisqa sodda ibora bilan aniqlashtirish, kalit-kartani ko\'rsatib, imo bilan eshikni ko\'rsatish, zarur bo\'lsa tarjimon ilova orqali tasdiqlab, yangi karta berish', en: 'Clarify with a short simple phrase, show the key card and gesture towards the door, confirm via a translation app if needed and issue a new card' },
      { ru: 'Дать гостю телефон с открытым переводчиком и вернуться к компьютеру, пока он не напечатает свою проблему', uz: 'Mehmonga tarjimon ochilgan telefonni berib, u muammosini yozguncha kompyuterga qaytish', en: 'Hand the guest a phone with the translator open and go back to your computer until they have typed out their problem' },
      { ru: 'С улыбкой успокоить: «No worries, it\'s a piece of cake, we\'ll sort it out in a jiffy»', uz: 'Jilmayib tinchlantirish: «No worries, it\'s a piece of cake, we\'ll sort it out in a jiffy»', en: 'Reassure with a smile: "No worries, it\'s a piece of cake, we\'ll sort it out in a jiffy"' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Урок: короткие простые фразы без идиом и сленга, жесты и наглядность, переводчик как инструмент, а не замена живого общения, и никогда не повышать голос. «Piece of cake» и «in a jiffy» звучат дружелюбно, но это идиомы, которые урок прямо называет ошибкой.',
      uz: 'Dars: idioma va slengsiz qisqa sodda iboralar, imo-ishora va ko\'rgazmalilik, tarjimon jonli muloqot o\'rnini bosuvchi emas, vosita sifatida, va hech qachon ovozni ko\'tarmaslik. «Piece of cake» va «in a jiffy» do\'stona eshitiladi, lekin bular dars to\'g\'ridan-to\'g\'ri xato deb ataydigan idiomalar.',
      en: 'The lesson: short simple phrases without idioms or slang, gestures and visual aids, a translation app as a tool rather than a replacement for direct communication, and never raising your voice. "Piece of cake" and "in a jiffy" sound friendly, but they are idioms the lesson explicitly calls a mistake.',
    },
  },
  {
    id: 'quiz-foreign-guests-4',
    moduleSlug: 'foreign-guests',
    question: {
      ru: 'Заезжает семья из другой страны; они говорят по-английски с трудом и спрашивают, где поужинать. Что из перечисленного НЕ входит в стандарт урока по работе с иностранными гостями?',
      uz: 'Boshqa mamlakatdan oila keladi; ular ingliz tilida qiynalib gapirishadi va qayerda kechki ovqat qilish mumkinligini so\'rashadi. Quyidagilardan qaysi biri chet ellik mehmonlar bilan ishlash bo\'yicha dars standartiga KIRMAYDI?',
      en: 'A family from abroad checks in; they speak English with difficulty and ask where to have dinner. Which of the following is NOT part of the lesson\'s standard for working with foreign guests?',
    },
    options: [
      { ru: 'Прежде чем рекомендовать ресторан, уточнить диетические потребности — халяль, вегетарианское меню', uz: 'Restoran tavsiya qilishdan oldin parhez ehtiyojlarini aniqlashtirish — halol, vegetarian menyu', en: 'Before recommending a restaurant, clarify dietary needs — halal, vegetarian' },
      { ru: 'Помнить, что не во всех культурах принято рукопожатие или прямой зрительный контакт', uz: 'Hamma madaniyatlarda ham qo\'l berib ko\'rishish yoki to\'g\'ridan-to\'g\'ri ko\'z aloqasi qabul qilinmaganini yodda tutish', en: 'Keep in mind that not every culture is comfortable with a handshake or direct eye contact' },
      { ru: 'Показать дорогу на карте и написать цены цифрами вместо длинного устного объяснения', uz: 'Uzun og\'zaki tushuntirish o\'rniga yo\'lni xaritada ko\'rsatish va narxlarni raqamlar bilan yozish', en: 'Show the way on a map and write prices in figures instead of a long verbal explanation' },
      { ru: 'Полностью перевести разговор в приложение-переводчик, чтобы исключить любое недопонимание', uz: 'Har qanday tushunmovchilikni istisno qilish uchun suhbatni butunlay tarjimon ilovaga o\'tkazish', en: 'Move the whole conversation into a translation app to rule out any misunderstanding' },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Переводчик в уроке — инструмент, а не повод перестать понимать друг друга напрямую; «полностью полагаться на приложение» — ошибка из списка. Диетические потребности, обычаи приветствия и наглядные средства (карты, цифры) — часть стандарта.',
      uz: 'Darsda tarjimon — vosita, bir-birini bevosita tushunishdan voz kechish uchun bahona emas; «butunlay ilovaga tayanish» — ro\'yxatdagi xato. Parhez ehtiyojlari, salomlashish odatlari va ko\'rgazmali vositalar (xarita, raqamlar) — standartning qismi.',
      en: 'In the lesson a translation app is a tool, not an excuse to stop understanding each other directly; "relying entirely on the app" is a listed mistake. Dietary needs, greeting customs and visual aids (maps, figures) are part of the standard.',
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
  {
    id: 'quiz-lost-items-3',
    moduleSlug: 'lost-items',
    question: {
      ru: '16:00. Звонит гость: «Кажется, я оставил зарядку в 214-м, выехал вчера». Вы открываете журнал находок — по 214-му записей нет. Что делать?',
      uz: 'Soat 16:00. Mehmon qo\'ng\'iroq qiladi: «Shekilli, 214-xonada zaryadlovchini qoldirdim, kecha chiqqanman». Topilmalar jurnalini ochasiz — 214-xona bo\'yicha yozuv yo\'q. Nima qilasiz?',
      en: 'It is 16:00. A guest calls: "I think I left my charger in room 214, I checked out yesterday." You open the lost-and-found register — nothing is logged for 214. What do you do?',
    },
    options: [
      { ru: 'Сказать, что проверите и перезвоните; связаться с хаускипингом, проверить сам номер и общие зоны и только после этого дать ответ', uz: 'Tekshirib, qayta qo\'ng\'iroq qilishingizni aytish; xaus-kiping bilan bog\'lanish, xonaning o\'zini va umumiy zonalarni tekshirish va faqat shundan keyin javob berish', en: 'Say you will check and call back; contact housekeeping, check the room itself and the common areas, and only then give an answer' },
      { ru: 'Ответить: «В журнале ничего нет, значит, ничего не находили» — журнал и есть единственный источник информации', uz: '«Jurnalda hech narsa yo\'q, demak, hech narsa topilmagan» deb javob berish — jurnal yagona ma\'lumot manbai', en: 'Reply "nothing is logged, so nothing was found" — the register is the single source of truth' },
      { ru: 'Сразу пообещать, что зарядку найдут и вышлют, а поиски начать после разговора', uz: 'Zaryadlovchi topilib, yuborilishini darhol va\'da qilib, qidiruvni suhbatdan keyin boshlash', en: 'Promise right away that the charger will be found and shipped, and start searching after the call' },
      { ru: 'Попросить гостя перезвонить завтра, когда хаускипинг закончит уборку всех номеров', uz: 'Mehmondan xaus-kiping barcha xonalarni tozalab bo\'lgach, ertaga qayta qo\'ng\'iroq qilishini so\'rash', en: 'Ask the guest to call back tomorrow once housekeeping has finished all the rooms' },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Урок: прежде чем сказать «не найдено», проверьте журнал, номер, общие зоны и свяжитесь с хаускипингом — пустая запись в журнале сама по себе не ответ, а отписка, которая может оказаться неверной. Обещать находку до поиска — обещание, которое вы можете не выполнить.',
      uz: 'Dars: «topilmadi» deyishdan oldin jurnalni, xonani, umumiy zonalarni tekshiring va xaus-kiping bilan bog\'laning — jurnaldagi bo\'sh yozuvning o\'zi javob emas, noto\'g\'ri bo\'lib chiqishi mumkin bo\'lgan quruq javob. Qidiruvdan oldin topilishini va\'da qilish — bajara olmasligingiz mumkin bo\'lgan va\'da.',
      en: 'The lesson: before saying "not found", check the register, the room, the common areas and contact housekeeping — an empty register entry is not an answer in itself but a brush-off that could simply be wrong. Promising a find before searching is a promise you may not be able to keep.',
    },
  },
  {
    id: 'quiz-lost-items-4',
    moduleSlug: 'lost-items',
    question: {
      ru: '11:20. Горничная приносит на стойку часы, найденные в 305-м; гость выехал в 11:00. У вас в очереди три гостя. Какая последовательность — ЕДИНСТВЕННО верная?',
      uz: 'Soat 11:20. Xonaki xodim 305-xonadan topilgan soatni stoykaga olib keladi; mehmon 11:00 da chiqib ketgan. Navbatingizda uch mehmon bor. Qaysi ketma-ketlik YAGONA to\'g\'ri?',
      en: 'It is 11:20. A housekeeper brings a watch found in room 305 to the desk; the guest checked out at 11:00. You have three guests in the queue. Which sequence is the ONLY correct one?',
    },
    options: [
      { ru: 'Убрать часы в ящик, обслужить очередь, внести запись в журнал в конце смены и ждать звонка гостя', uz: 'Soatni tortmaga solib, navbatni o\'tkazish, smena oxirida jurnalga yozuv kiritish va mehmonning qo\'ng\'irog\'ini kutish', en: 'Put the watch in the drawer, serve the queue, log it at the end of the shift and wait for the guest to call' },
      { ru: 'Сразу записать в журнал (описание, 305-й, время, кто нашёл), затем самим связаться с гостем по контактам из брони и предложить забрать или отправить за его счёт, заранее назвав стоимость и сроки', uz: 'Darhol jurnalga yozish (tavsif, 305-xona, vaqt, kim topgani), so\'ng brondagi kontaktlar orqali mehmon bilan o\'zingiz bog\'lanib, olib ketish yoki uning hisobidan yuborishni taklif qilish, narx va muddatni oldindan aytib', en: 'Log it immediately (description, room 305, time, finder), then contact the guest yourself via the reservation contact details and offer pickup or shipping at their expense, stating the cost and delivery time upfront' },
      { ru: 'Сразу записать в журнал и ждать звонка гостя — звонить первыми неуместно, это как намёк на его рассеянность', uz: 'Darhol jurnalga yozib, mehmonning qo\'ng\'irog\'ini kutish — birinchi bo\'lib qo\'ng\'iroq qilish noo\'rin, bu uning parishonligiga ishoradek', en: 'Log it immediately and wait for the guest to call — calling first is inappropriate, as if hinting that they are careless' },
      { ru: 'Сначала позвонить гостю, ведь гость важнее бумаг, а в журнал внести позже, если он не захочет забирать часы', uz: 'Avval mehmonga qo\'ng\'iroq qilish, chunki mehmon qog\'ozlardan muhimroq, jurnalga esa keyinroq, agar u soatni olishni xohlamasa, yozish', en: 'Call the guest first, since the guest matters more than paperwork, and log it later if they don\'t want the watch back' },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Урок задаёт порядок: запись в журнал — немедленно, даже если вы заняты (отложенная запись часто не делается вовсе); если ценная вещь найдена после выезда — не ждите звонка, свяжитесь первыми; доставку предлагайте с прозрачной стоимостью и сроками. «Записать и ждать» нарушает правило проактивного контакта.',
      uz: 'Dars tartibni belgilaydi: jurnalga yozish — band bo\'lsangiz ham darhol (kechiktirilgan yozuv ko\'pincha umuman qilinmaydi); qimmatbaho buyum chiqishdan keyin topilsa — qo\'ng\'iroqni kutmang, birinchi bo\'lib bog\'laning; yetkazib berishni shaffof narx va muddat bilan taklif qiling. «Yozib, kutish» faol bog\'lanish qoidasini buzadi.',
      en: 'The lesson sets the order: log immediately even when busy (a delayed entry often never happens); if a valuable item is found after departure, don\'t wait for a call — reach out first; offer shipping with transparent cost and timing. "Log and wait" breaks the proactive-contact rule.',
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
  {
    id: 'quiz-emergency-procedures-4',
    moduleSlug: 'emergency-procedures',
    question: {
      ru: '03:10. Сработала пожарная сигнализация. Вы один на ресепшене, гость из лобби спрашивает, что делать; сотрудник охраны будет через две минуты. Какое действие соответствует протоколу урока?',
      uz: 'Soat 03:10. Yong\'in signalizatsiyasi ishga tushdi. Resepshenda yolg\'izsiz, lobbidagi mehmon nima qilishni so\'raydi; qo\'riqlash xodimi ikki daqiqadan keyin keladi. Qaysi harakat dars protokoliga mos keladi?',
      en: 'It is 03:10. The fire alarm goes off. You are alone at the desk, a guest in the lobby asks what to do; the security officer will arrive in two minutes. Which action follows the lesson\'s protocol?',
    },
    options: [
      { ru: 'Направить гостей к лестнице, а самому покинуть стойку и пойти проверять верхние этажи', uz: 'Mehmonlarni zinaga yo\'naltirib, o\'zingiz stoykani tashlab, yuqori qavatlarni tekshirgani ketish', en: 'Direct guests to the stairwell, then leave the desk and go to check the upper floors yourself' },
      { ru: 'Остаться у стойки и сказать гостям спускаться на лифте — с 9-го этажа так быстрее', uz: 'Stoykada qolib, mehmonlarga lift bilan tushishni aytish — 9-qavatdan shunday tezroq', en: 'Stay at the desk and tell guests to take the elevator — it is faster from the 9th floor' },
      { ru: 'Спокойно направить гостей к ближайшему эвакуационному выходу через лестницу (не лифт) и оставаться у стойки как точка контакта для гостей и служб, пока обязанности не переданы по протоколу', uz: 'Mehmonlarni xotirjam ravishda zina orqali eng yaqin evakuatsiya chiqishiga (lift emas) yo\'naltirish va vazifalar protokol bo\'yicha topshirilguncha mehmonlar va xizmatlar uchun aloqa nuqtasi sifatida stoykada qolish', en: 'Calmly direct guests to the nearest evacuation exit via the stairwell (not the elevator) and stay at the desk as the point of contact for guests and emergency services until duties are handed off per protocol' },
      { ru: 'Ждать у стойки, пока охрана не подтвердит, что тревога настоящая, и до этого не давать гостям никаких указаний, чтобы не вызвать панику', uz: 'Qo\'riqlash xodimi tashvish haqiqiy ekanini tasdiqlaguncha stoykada kutish va vahima qo\'zg\'atmaslik uchun ungacha mehmonlarga hech qanday ko\'rsatma bermaslik', en: 'Wait at the desk until security confirms the alarm is real and give guests no instructions until then, so as not to cause panic' },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Урок сочетает два правила: при пожарной тревоге гостей направляют к эвакуационному выходу, никогда не к лифту, а стойка не должна оставаться без сотрудника — обязанности передаются по плану. Уходить проверять этажи — ошибка «оставить стойку без покрытия», а ждать подтверждения — бездействие в критический момент.',
      uz: 'Dars ikki qoidani birlashtiradi: yong\'in tashvishida mehmonlar evakuatsiya chiqishiga yo\'naltiriladi, hech qachon liftga emas, stoyka esa xodimsiz qolmasligi kerak — vazifalar reja bo\'yicha topshiriladi. Qavatlarni tekshirgani ketish — «stoykani qoplamasiz qoldirish» xatosi, tasdiqni kutish esa — eng muhim paytdagi harakatsizlik.',
      en: 'The lesson combines two rules: during a fire alarm guests are directed to the evacuation exit, never the elevator, and the front desk must never be left unstaffed — duties are handed off per the coverage plan. Leaving to check the floors is the "unstaffed desk" mistake, and waiting for confirmation is inaction at the critical moment.',
    },
  },
]

export default quizQuestions
