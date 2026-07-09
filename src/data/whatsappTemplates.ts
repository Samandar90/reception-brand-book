import type { MessageTemplate } from '@/types'

export const whatsappTemplates: MessageTemplate[] = [
  {
    id: 'reservation-confirmation',
    title: { ru: 'Подтверждение бронирования', uz: 'Bronni tasdiqlash', en: 'Reservation Confirmation' },
    ru: 'Здравствуйте, [Имя]! ✅ Ваше бронирование в отеле Grand подтверждено: заезд 15.08, выезд 18.08, номер Superior. Ждём вас! Если возникнут вопросы, пишите нам в любое время. 🏨',
    uz: "Assalomu alaykum, [Ism]! ✅ Grand mehmonxonasidagi bronlashingiz tasdiqlandi: kelish 15.08, ketish 18.08, Superior xona. Sizni kutamiz! Savollaringiz bo'lsa, istalgan vaqtda yozing. 🏨",
    en: 'Hello, [Name]! ✅ Your reservation at Grand Hotel is confirmed: check-in Aug 15, check-out Aug 18, Superior room. We look forward to welcoming you! Feel free to message us anytime with questions. 🏨',
  },
  {
    id: 'payment-reminder',
    title: { ru: 'Напоминание об оплате', uz: "To'lov haqida eslatma", en: 'Payment Reminder' },
    ru: 'Здравствуйте, [Имя]! Напоминаем, что оплата за ваше бронирование (сумма: [сумма]) должна быть произведена до [дата]. Ссылка для оплаты: [ссылка]. Спасибо! 💳',
    uz: "Assalomu alaykum, [Ism]! Bronlashingiz uchun to'lov ([summa]) [sana] gacha amalga oshirilishi kerakligini eslatib o'tamiz. To'lov havolasi: [havola]. Rahmat! 💳",
    en: 'Hello, [Name]! This is a reminder that payment for your reservation ([amount]) is due by [date]. Payment link: [link]. Thank you! 💳',
  },
  {
    id: 'directions',
    title: { ru: 'Как добраться до отеля', uz: 'Mehmonxonaga qanday yetib borish', en: 'Directions to the Hotel' },
    ru: 'Здравствуйте! Вот как добраться до отеля Grand: от аэропорта на такси — около 25 минут (примерно 120 000 сум). 📍 Наш адрес: ул. Амира Темура, 45. Вот точка на карте: [ссылка]. Также мы можем организовать трансфер, просто дайте знать!',
    uz: "Assalomu alaykum! Grand mehmonxonasiga qanday yetib kelish mumkinligi: aeroportdan taksida taxminan 25 daqiqa (taxminan 120 000 so'm). 📍 Manzilimiz: Amir Temur ko'chasi, 45-uy. Xaritadagi nuqta: [havola]. Shuningdek, transfer tashkil qilib berishimiz mumkin, faqat xabar bering!",
    en: "Hello! Here's how to reach Grand Hotel: about 25 minutes by taxi from the airport (roughly 120,000 UZS). 📍 Our address: 45 Amir Temur Street. Map location: [link]. We can also arrange an airport transfer for you, just let us know!",
  },
  {
    id: 'checkin-instructions',
    title: { ru: 'Инструкции по заезду', uz: "Kelish bo'yicha ko'rsatmalar", en: 'Check-in Instructions' },
    ru: 'Здравствуйте, [Имя]! Перед заездом, пожалуйста, имейте при себе паспорт для регистрации. Заезд возможен с 14:00. Если планируете приехать раньше, сообщите нам — постараемся подготовить номер пораньше. До встречи! 🔑',
    uz: "Assalomu alaykum, [Ism]! Kelishdan oldin, iltimos, ro'yxatdan o'tish uchun pasportingizni olib keling. Kelish soat 14:00 dan mumkin. Agar undan oldinroq kelmoqchi bo'lsangiz, bizga xabar bering — xonani ertaroq tayyorlashga harakat qilamiz. Ko'rishguncha! 🔑",
    en: "Hello, [Name]! Before you arrive, please bring your passport for check-in registration. Check-in is available from 2 PM. If you plan to arrive earlier, let us know — we'll try to have your room ready sooner. See you soon! 🔑",
  },
  {
    id: 'thank-you',
    title: { ru: 'Благодарность за пребывание', uz: "Turgani uchun minnatdorchilik", en: 'Thank You for Staying' },
    ru: 'Здравствуйте, [Имя]! Спасибо, что выбрали отель Grand для вашего пребывания. Надеемся, вам всё понравилось. Будем рады видеть вас снова! 🙏',
    uz: "Assalomu alaykum, [Ism]! Turar joyingiz uchun Grand mehmonxonasini tanlaganingiz uchun rahmat. Umid qilamizki, hammasi yoqdi. Sizni yana ko'rishdan xursand bo'lamiz! 🙏",
    en: 'Hello, [Name]! Thank you for choosing Grand Hotel for your stay. We hope you enjoyed everything. We\'d love to welcome you back again! 🙏',
  },
  {
    id: 'review-request',
    title: { ru: 'Просьба оставить отзыв', uz: "Fikr-mulohaza qoldirishni so'rash", en: 'Review Request' },
    ru: 'Здравствуйте, [Имя]! Нам было приятно принимать вас у себя. Если у вас есть минутка, будем очень благодарны за ваш отзыв на Booking.com или Google — это очень помогает нам становиться лучше. ⭐ Ссылка: [ссылка]',
    uz: "Assalomu alaykum, [Ism]! Sizni mehmon sifatida kutib olganimizdan xursandmiz. Agar bir daqiqangiz bo'lsa, Booking.com yoki Google'da fikr-mulohaza qoldirsangiz, biz uchun juda muhim — bu bizga yaxshilanishga yordam beradi. ⭐ Havola: [havola]",
    en: "Hello, [Name]! It was a pleasure having you stay with us. If you have a moment, we'd really appreciate a review on Booking.com or Google — it helps us keep improving. ⭐ Link: [link]",
  },
  {
    id: 'booking-confirmation',
    title: { ru: 'Подтверждение брони с Booking.com', uz: "Booking.com bronini tasdiqlash", en: 'Booking.com Reservation Confirmation' },
    ru: 'Здравствуйте, [Имя]! Подтверждаем получение вашего бронирования через Booking.com (номер брони: [номер]). Заезд: [дата], выезд: [дата], тип оплаты: [предоплачено/оплата в отеле]. Если у вас есть особые пожелания, дайте нам знать заранее. Ждём вас! 🏨',
    uz: "Assalomu alaykum, [Ism]! Booking.com orqali bronlashingiz qabul qilinganini tasdiqlaymiz (bron raqami: [raqam]). Kelish: [sana], ketish: [sana], to'lov turi: [oldindan to'langan/mehmonxonada to'lash]. Alohida istaklaringiz bo'lsa, oldindan bizga xabar bering. Sizni kutamiz! 🏨",
    en: 'Hello, [Name]! We confirm receipt of your Booking.com reservation (booking number: [number]). Check-in: [date], check-out: [date], payment type: [prepaid/pay at hotel]. If you have any special requests, please let us know in advance. We look forward to your stay! 🏨',
  },
]

export default whatsappTemplates
