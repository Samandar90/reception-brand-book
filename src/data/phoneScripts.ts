import type { CallScript } from '@/types'

export const phoneScripts: CallScript[] = [
  {
    id: 'incoming-call',
    title: { ru: 'Входящий звонок', uz: 'Kiruvchi qo\'ng\'iroq', en: 'Incoming Call' },
    description: {
      ru: 'Общий сценарий приёма входящего звонка в отель.',
      uz: "Mehmonxonaga kiruvchi qo'ng'iroqni qabul qilishning umumiy stsenariysi.",
      en: 'A general script for answering an incoming call to the hotel.',
    },
    lines: [
      { speaker: 'receptionist', text: { ru: 'Добрый день, отель Grand, меня зовут Алина, чем могу помочь?', uz: "Xayrli kun, Grand mehmonxonasi, mening ismim Alina, sizga qanday yordam bera olaman?", en: "Good afternoon, Grand Hotel, this is Alina speaking, how may I help you?" } },
      { speaker: 'guest', text: { ru: 'Здравствуйте, я хотел бы узнать о наличии свободных номеров на завтра.', uz: "Assalomu alaykum, ertaga uchun bo'sh xonalar bor-yo'qligini bilmoqchi edim.", en: "Hello, I'd like to find out if you have any rooms available for tomorrow." } },
      { speaker: 'receptionist', text: { ru: 'Конечно, позвольте мне проверить наличие номеров, один момент, пожалуйста.', uz: "Albatta, xonalar mavjudligini tekshirib ko'raman, bir daqiqa kuting.", en: 'Of course, let me check room availability, one moment please.' } },
      { speaker: 'guest', text: { ru: 'Спасибо, я подожду.', uz: 'Rahmat, kutib turaman.', en: "Thank you, I'll wait." } },
      { speaker: 'receptionist', text: { ru: 'Спасибо за ожидание, у нас есть свободный номер категории делюкс на завтра.', uz: 'Kutganingiz uchun rahmat, ertaga uchun delyuks toifadagi bo\'sh xonamiz bor.', en: 'Thank you for waiting, we do have a deluxe room available for tomorrow.' } },
      { speaker: 'guest', text: { ru: 'Отлично, я хотел бы его забронировать.', uz: "Ajoyib, men uni bron qilmoqchiman.", en: "Great, I'd like to book it." } },
    ],
  },
  {
    id: 'outgoing-call',
    title: { ru: 'Исходящий звонок', uz: "Chiquvchi qo'ng'iroq", en: 'Outgoing Call' },
    description: {
      ru: 'Сотрудник ресепшена звонит гостю, чтобы подтвердить детали предстоящего заезда.',
      uz: "Resepshen xodimi mehmonga qo'ng'iroq qilib, yaqinlashib kelayotgan kelish tafsilotlarini tasdiqlaydi.",
      en: "A front desk agent calls a guest to confirm details of their upcoming arrival.",
    },
    lines: [
      { speaker: 'receptionist', text: { ru: 'Добрый день, это Алина из отеля Grand, могу я поговорить с господином Ивановым?', uz: "Assalomu alaykum, bu Grand mehmonxonasidan Alina, janob Ivanov bilan gaplasha olamanmi?", en: 'Good afternoon, this is Alina from the Grand Hotel, may I speak with Mr. Ivanov?' } },
      { speaker: 'guest', text: { ru: 'Да, это я, слушаю вас.', uz: 'Ha, bu men, quloq solyapman.', en: "Yes, this is him, go ahead." } },
      { speaker: 'receptionist', text: { ru: 'Я звоню, чтобы подтвердить ваше бронирование на послезавтра, заезд в 14:00, верно?', uz: "Sizga indinga bo'lgan bronlashingizni tasdiqlash uchun qo'ng'iroq qilyapman, kelish soat 14:00 da, to'g'rimi?", en: "I'm calling to confirm your reservation for the day after tomorrow, check-in at 2 PM, is that correct?" } },
      { speaker: 'guest', text: { ru: 'Да, всё верно.', uz: "Ha, hammasi to'g'ri.", en: "Yes, that's correct." } },
      { speaker: 'receptionist', text: { ru: 'Прекрасно, будем рады встретить вас, если у вас появятся вопросы, звоните нам в любое время.', uz: "Ajoyib, sizni kutib olishdan xursand bo'lamiz, savollaringiz bo'lsa, istalgan vaqtda bizga qo'ng'iroq qiling.", en: "Wonderful, we look forward to welcoming you. If any questions come up, feel free to call us anytime." } },
      { speaker: 'guest', text: { ru: 'Спасибо, до встречи.', uz: "Rahmat, ko'rishguncha.", en: 'Thank you, see you then.' } },
    ],
  },
  {
    id: 'reservation-call',
    title: { ru: 'Звонок для бронирования', uz: 'Bron qilish uchun qo\'ng\'iroq', en: 'Reservation Call' },
    description: {
      ru: 'Гость звонит в отель, чтобы забронировать номер по телефону.',
      uz: "Mehmon xonani telefon orqali bron qilish uchun mehmonxonaga qo'ng'iroq qiladi.",
      en: 'A guest calls the hotel to make a reservation over the phone.',
    },
    lines: [
      { speaker: 'receptionist', text: { ru: 'Добрый вечер, отель Grand, меня зовут Алина, чем могу помочь?', uz: 'Xayrli kech, Grand mehmonxonasi, mening ismim Alina, sizga qanday yordam bera olaman?', en: 'Good evening, Grand Hotel, this is Alina, how may I help you?' } },
      { speaker: 'guest', text: { ru: 'Здравствуйте, я хотел бы забронировать номер на двоих с 15 по 18 августа.', uz: "Assalomu alaykum, 15 avgustdan 18 avgustgacha ikki kishilik xona bron qilmoqchi edim.", en: "Hello, I'd like to book a room for two from August 15th to 18th." } },
      { speaker: 'receptionist', text: { ru: 'Конечно, позвольте уточнить — вам нужен номер с одной большой кроватью или двумя отдельными?', uz: "Albatta, aniqlashtirib olsam — sizga bitta katta krovatli xona kerakmi yoki ikkita alohida krovatli?", en: "Of course, let me clarify — would you prefer a room with one large bed or two separate beds?" } },
      { speaker: 'guest', text: { ru: 'С одной большой кроватью, пожалуйста.', uz: "Bitta katta krovatli bo'lsin, iltimos.", en: 'One large bed, please.' } },
      { speaker: 'receptionist', text: { ru: 'Хорошо, у нас есть свободный номер категории superior на эти даты, стоимость составит 450 000 сум за ночь. Оформляем бронирование?', uz: "Yaxshi, bu sanalar uchun superior toifadagi bo'sh xonamiz bor, narxi kechasiga 450 000 so'm bo'ladi. Bronni rasmiylashtiraylikmi?", en: 'Great, we have a superior room available for those dates, the rate is 450,000 UZS per night. Shall I go ahead and book it?' } },
      { speaker: 'guest', text: { ru: 'Да, пожалуйста, оформите.', uz: 'Ha, iltimos, rasmiylashtiring.', en: 'Yes, please go ahead.' } },
    ],
  },
  {
    id: 'complaint-call',
    title: { ru: 'Звонок с жалобой', uz: 'Shikoyat bilan qo\'ng\'iroq', en: 'Complaint Call' },
    description: {
      ru: 'Гость звонит на ресепшен из номера с жалобой на неисправный кондиционер.',
      uz: "Mehmon xonasidan konditsioner ishlamayotgani haqida shikoyat bilan resepshenga qo'ng'iroq qiladi.",
      en: 'A guest calls the front desk from their room to complain about a broken air conditioner.',
    },
    lines: [
      { speaker: 'receptionist', text: { ru: 'Добрый вечер, ресепшен слушает, чем могу помочь?', uz: 'Xayrli kech, resepshen eshityapti, sizga qanday yordam bera olaman?', en: 'Good evening, front desk speaking, how may I help you?' } },
      { speaker: 'guest', text: { ru: 'Здравствуйте, у меня в номере не работает кондиционер, очень душно.', uz: 'Assalomu alaykum, xonamda konditsioner ishlamayapti, juda dim.', en: "Hello, the air conditioner in my room isn't working, it's very stuffy." } },
      { speaker: 'receptionist', text: { ru: 'Мне очень жаль это слышать, приношу извинения за неудобство. Я немедленно отправлю технического специалиста к вам в номер.', uz: "Buni eshitganimdan afsusdaman, noqulaylik uchun uzr so'rayman. Hoziroq texnik mutaxassisni xonangizga yuboraman.", en: "I'm sorry to hear that, and I apologize for the inconvenience. I'll send a technician to your room right away." } },
      { speaker: 'guest', text: { ru: 'Спасибо, буду ждать.', uz: 'Rahmat, kutib turaman.', en: "Thank you, I'll wait." } },
      { speaker: 'receptionist', text: { ru: 'Специалист будет у вас в течение 10 минут, если проблему не удастся решить быстро, мы предложим вам другой номер.', uz: "Mutaxassis 10 daqiqa ichida sizning oldingizda bo'ladi, agar muammoni tezda hal qilib bo'lmasa, sizga boshqa xona taklif qilamiz.", en: "The technician will be with you within 10 minutes. If the issue can't be resolved quickly, we'll offer you a different room." } },
      { speaker: 'guest', text: { ru: 'Хорошо, спасибо за оперативность.', uz: "Yaxshi, tezkorligingiz uchun rahmat.", en: 'All right, thank you for the quick response.' } },
    ],
  },
  {
    id: 'wake-up-call',
    title: { ru: 'Побудочный звонок', uz: "Uyg'otish qo'ng'irog'i", en: 'Wake-Up Call' },
    description: {
      ru: 'Сотрудник ресепшена совершает заранее заказанный побудочный звонок гостю.',
      uz: "Resepshen xodimi mehmon tomonidan oldindan buyurtma qilingan uyg'otish qo'ng'irog'ini amalga oshiradi.",
      en: 'A front desk agent delivers a wake-up call the guest scheduled in advance.',
    },
    lines: [
      { speaker: 'receptionist', text: { ru: 'Доброе утро, это ваш заказанный побудочный звонок, сейчас 7 часов утра.', uz: "Xayrli tong, bu sizning buyurtma qilgan uyg'otish qo'ng'irog'ingiz, hozir ertalab soat 7.", en: 'Good morning, this is your scheduled wake-up call, it is now 7 AM.' } },
      { speaker: 'guest', text: { ru: 'Спасибо большое, я уже проснулся.', uz: "Katta rahmat, men allaqachon uyg'onganman.", en: "Thank you so much, I'm already awake." } },
      { speaker: 'receptionist', text: { ru: 'Хорошего вам дня, если понадобится что-то ещё, звоните на ресепшен.', uz: "Kuningiz xayrli o'tsin, yana biror narsa kerak bo'lsa, resepshenga qo'ng'iroq qiling.", en: 'Have a great day, if you need anything else, please call the front desk.' } },
      { speaker: 'guest', text: { ru: 'Обязательно, спасибо!', uz: "Albatta, rahmat!", en: 'Absolutely, thank you!' } },
    ],
  },
]

export default phoneScripts
