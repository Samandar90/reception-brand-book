import type { PhraseCategory } from '@/types'

export const communicationPhrases: PhraseCategory[] = [
  {
    id: 'greeting',
    label: { ru: 'Приветствие', uz: 'Salomlashish', en: 'Greeting' },
    icon: 'Hand',
    phrases: [
      { id: 'greeting-1', category: 'greeting', ru: 'Здравствуйте! Добро пожаловать в наш отель.', uz: "Assalomu alaykum! Mehmonxonamizga xush kelibsiz.", en: 'Hello! Welcome to our hotel.' },
      { id: 'greeting-2', category: 'greeting', ru: 'Доброе утро! Как прошла ваша поездка?', uz: 'Xayrli tong! Sayohatingiz qanday o\'tdi?', en: 'Good morning! How was your trip?' },
      { id: 'greeting-3', category: 'greeting', ru: 'Рад видеть вас снова, добро пожаловать обратно!', uz: "Sizni yana ko'rganimdan xursandman, xush kelibsiz!", en: 'Great to see you again, welcome back!' },
      { id: 'greeting-4', category: 'greeting', ru: 'Добрый вечер, чем могу быть полезен?', uz: 'Xayrli kech, sizga qanday yordam bera olaman?', en: 'Good evening, how may I assist you?' },
      { id: 'greeting-5', category: 'greeting', ru: 'Здравствуйте, вы у нас впервые?', uz: 'Assalomu alaykum, bizga birinchi marta kelyapsizmi?', en: 'Hello, is this your first time staying with us?' },
    ],
  },
  {
    id: 'offering-help',
    label: { ru: 'Предложение помощи', uz: 'Yordam taklif qilish', en: 'Offering Help' },
    icon: 'HelpCircle',
    phrases: [
      { id: 'offering-help-1', category: 'offering-help', ru: 'Позвольте, я помогу вам с багажом.', uz: 'Ijozat bering, yukingizga yordam beraman.', en: 'Allow me to help you with your luggage.' },
      { id: 'offering-help-2', category: 'offering-help', ru: 'Чем я могу вам помочь сегодня?', uz: 'Bugun sizga qanday yordam bera olaman?', en: 'How may I help you today?' },
      { id: 'offering-help-3', category: 'offering-help', ru: 'Если у вас возникнут вопросы, пожалуйста, обращайтесь ко мне.', uz: "Savollaringiz bo'lsa, iltimos, menga murojaat qiling.", en: "If you have any questions, please don't hesitate to ask me." },
      { id: 'offering-help-4', category: 'offering-help', ru: 'Я провожу вас до номера, следуйте за мной, пожалуйста.', uz: 'Sizni xonangizgacha kuzataman, mendan keyin yuring.', en: "I'll walk you to your room, please follow me." },
      { id: 'offering-help-5', category: 'offering-help', ru: 'Могу я предложить вам помощь с бронированием столика?', uz: "Stol band qilishda yordam bersam maylimi?", en: 'May I offer to help you book a table?' },
    ],
  },
  {
    id: 'asking-passport',
    label: { ru: 'Запрос паспорта', uz: 'Pasport so\'rash', en: 'Asking for Passport' },
    icon: 'IdCard',
    phrases: [
      { id: 'asking-passport-1', category: 'asking-passport', ru: 'Могу я взглянуть на ваш паспорт для регистрации?', uz: "Ro'yxatdan o'tish uchun pasportingizni ko'rsam bo'ladimi?", en: 'May I see your passport for check-in registration?' },
      { id: 'asking-passport-2', category: 'asking-passport', ru: 'Пожалуйста, предоставьте документ, удостоверяющий личность.', uz: 'Iltimos, shaxsingizni tasdiqlovchi hujjatni taqdim eting.', en: 'Please provide a valid form of identification.' },
      { id: 'asking-passport-3', category: 'asking-passport', ru: 'Мне нужно снять копию вашего паспорта, это займёт всего минуту.', uz: 'Pasportingizdan nusxa olishim kerak, bu bir daqiqa vaqt oladi.', en: "I need to make a copy of your passport, it will only take a minute." },
      { id: 'asking-passport-4', category: 'asking-passport', ru: 'Не могли бы вы показать паспорт того, кто будет проживать в номере?', uz: "Xonada turadigan barcha mehmonlarning pasportini ko'rsatib yuborasizmi?", en: 'Could you show me the passports of everyone staying in the room?' },
      { id: 'asking-passport-5', category: 'asking-passport', ru: 'Благодарю, паспорт я вам верну через несколько минут.', uz: "Rahmat, pasportingizni bir necha daqiqadan so'ng qaytarib beraman.", en: "Thank you, I'll return your passport in just a few minutes." },
    ],
  },
  {
    id: 'explaining-breakfast',
    label: { ru: 'О завтраке', uz: 'Nonushta haqida', en: 'Explaining Breakfast' },
    icon: 'Coffee',
    phrases: [
      { id: 'explaining-breakfast-1', category: 'explaining-breakfast', ru: 'Завтрак подаётся с 7 до 10 утра в ресторане на первом этаже.', uz: 'Nonushta ertalab soat 7 dan 10 gacha birinchi qavatdagi restoranda beriladi.', en: 'Breakfast is served from 7 to 10 AM in the restaurant on the first floor.' },
      { id: 'explaining-breakfast-2', category: 'explaining-breakfast', ru: 'Завтрак включён в стоимость вашего проживания.', uz: "Nonushta turar joyingiz narxiga kiritilgan.", en: 'Breakfast is included in the price of your stay.' },
      { id: 'explaining-breakfast-3', category: 'explaining-breakfast', ru: 'У нас предусмотрен шведский стол с широким выбором блюд.', uz: "Bizda keng taomlar tanlovi bilan bufet tizimi mavjud.", en: 'We offer a buffet with a wide selection of dishes.' },
      { id: 'explaining-breakfast-4', category: 'explaining-breakfast', ru: 'Если у вас есть пищевые ограничения, пожалуйста, сообщите нам заранее.', uz: 'Ovqatlanishda cheklovlaringiz bo\'lsa, iltimos, oldindan xabar bering.', en: 'If you have any dietary restrictions, please let us know in advance.' },
      { id: 'explaining-breakfast-5', category: 'explaining-breakfast', ru: 'Ресторан находится сразу за лифтами, направо.', uz: "Restoran liftlardan keyin, o'ng tomonda joylashgan.", en: 'The restaurant is located just past the elevators, on the right.' },
    ],
  },
  {
    id: 'wifi',
    label: { ru: 'Wi-Fi', uz: 'Wi-Fi', en: 'Wi-Fi' },
    icon: 'Wifi',
    phrases: [
      { id: 'wifi-1', category: 'wifi', ru: 'Пароль от Wi-Fi указан на карточке в вашем номере.', uz: 'Wi-Fi paroli xonangizdagi kartochkada ko\'rsatilgan.', en: 'The Wi-Fi password is printed on the card in your room.' },
      { id: 'wifi-2', category: 'wifi', ru: 'Wi-Fi бесплатный и доступен на всей территории отеля.', uz: 'Wi-Fi bepul bo\'lib, mehmonxonaning butun hududida mavjud.', en: 'Wi-Fi is free and available throughout the entire hotel.' },
      { id: 'wifi-3', category: 'wifi', ru: 'Название сети — "GrandHotel_Guest", пароль вам выдадут на стойке.', uz: 'Tarmoq nomi — "GrandHotel_Guest", parolni stoykada beramiz.', en: 'The network name is "GrandHotel_Guest," the password is given at the front desk.' },
      { id: 'wifi-4', category: 'wifi', ru: 'Если Wi-Fi не подключается, пожалуйста, позвоните на ресепшен.', uz: "Wi-Fi ulanmasa, iltimos, resepshenga qo'ng'iroq qiling.", en: "If the Wi-Fi won't connect, please call the front desk." },
      { id: 'wifi-5', category: 'wifi', ru: 'В номере скорость интернета выше, чем в лобби.', uz: 'Xonada internet tezligi lobbidagidan yuqoriroq.', en: 'The internet speed in the room is faster than in the lobby.' },
    ],
  },
  {
    id: 'parking',
    label: { ru: 'Парковка', uz: 'Avtoturargoh', en: 'Parking' },
    icon: 'Car',
    phrases: [
      { id: 'parking-1', category: 'parking', ru: 'У нас есть охраняемая парковка на территории отеля.', uz: 'Bizda mehmonxona hududida qo\'riqlanadigan avtoturargoh mavjud.', en: 'We have secure parking on the hotel premises.' },
      { id: 'parking-2', category: 'parking', ru: 'Парковка для гостей отеля бесплатная.', uz: 'Mehmonxona mehmonlari uchun avtoturargoh bepul.', en: 'Parking is free for hotel guests.' },
      { id: 'parking-3', category: 'parking', ru: 'Пожалуйста, оставьте ключи от машины у консьержа, если хотите воспользоваться парковщиком.', uz: 'Agar valet xizmatidan foydalanmoqchi bo\'lsangiz, mashina kalitini konsyerjga qoldiring.', en: "Please leave your car keys with the concierge if you'd like to use valet service." },
      { id: 'parking-4', category: 'parking', ru: 'Въезд на парковку находится со стороны заднего двора.', uz: 'Avtoturargohga kirish orqa hovli tomonidan.', en: 'The parking entrance is at the back of the building.' },
      { id: 'parking-5', category: 'parking', ru: 'К сожалению, свободных мест на парковке сейчас нет, но рядом есть городская стоянка.', uz: "Afsuski, hozircha avtoturargohda bo'sh joy yo'q, lekin yaqin atrofda shahar to'xtash joyi bor.", en: "Unfortunately there's no parking space available right now, but there's a public lot nearby." },
    ],
  },
  {
    id: 'late-checkout',
    label: { ru: 'Поздний выезд', uz: 'Kechroq chiqish', en: 'Late Checkout' },
    icon: 'Clock4',
    phrases: [
      { id: 'late-checkout-1', category: 'late-checkout', ru: 'Поздний выезд возможен до 14:00 при наличии свободных номеров.', uz: "Kechroq chiqish bo'sh xonalar mavjud bo'lsa, soat 14:00 gacha mumkin.", en: 'Late check-out until 2 PM is possible, subject to room availability.' },
      { id: 'late-checkout-2', category: 'late-checkout', ru: 'Поздний выезд после 14:00 оплачивается дополнительно.', uz: "Soat 14:00 dan keyingi kechroq chiqish qo'shimcha to'lov bilan amalga oshiriladi.", en: 'Late check-out after 2 PM is subject to an additional fee.' },
      { id: 'late-checkout-3', category: 'late-checkout', ru: 'Я уточню у менеджера, сможем ли мы предоставить вам поздний выезд бесплатно.', uz: "Menejerdan so'rab ko'raman, kechroq chiqishni bepul taqdim eta olamizmi.", en: 'Let me check with the manager whether we can offer you a complimentary late check-out.' },
      { id: 'late-checkout-4', category: 'late-checkout', ru: 'К сожалению, номер должен быть готов для следующего гостя, поэтому позднего выезда сегодня нет.', uz: 'Afsuski, xona keyingi mehmon uchun tayyor bo\'lishi kerak, shuning uchun bugun kechroq chiqish imkoni yo\'q.', en: "Unfortunately the room needs to be ready for the next guest, so late check-out isn't available today." },
      { id: 'late-checkout-5', category: 'late-checkout', ru: 'Ваш поздний выезд подтверждён до 15:00.', uz: 'Kechroq chiqishingiz soat 15:00 gacha tasdiqlandi.', en: 'Your late check-out is confirmed until 3 PM.' },
    ],
  },
  {
    id: 'laundry',
    label: { ru: 'Прачечная', uz: 'Kir yuvish xizmati', en: 'Laundry' },
    icon: 'Shirt',
    phrases: [
      { id: 'laundry-1', category: 'laundry', ru: 'Мы предлагаем услуги прачечной с ежедневной стиркой и глажкой.', uz: 'Bizda kir yuvish va dazmollash xizmati har kuni mavjud.', en: 'We offer daily laundry and pressing services.' },
      { id: 'laundry-2', category: 'laundry', ru: 'Пожалуйста, положите вещи в мешок для прачечной и заполните бланк заказа.', uz: "Iltimos, kiyimlaringizni kir yuvish qopiga solib, buyurtma blankasini to'ldiring.", en: 'Please place your items in the laundry bag and fill out the order form.' },
      { id: 'laundry-3', category: 'laundry', ru: 'Стирка, сданная до 9 утра, будет готова в тот же вечер.', uz: "Ertalab soat 9 gacha topshirilgan kirlar o'sha kuni kechqurun tayyor bo'ladi.", en: 'Laundry submitted before 9 AM will be ready that same evening.' },
      { id: 'laundry-4', category: 'laundry', ru: 'Срочная химчистка выполняется за дополнительную плату в течение 4 часов.', uz: "Shoshilinch kimyoviy tozalash qo'shimcha to'lov evaziga 4 soat ichida bajariladi.", en: 'Express dry cleaning is available for an extra fee within 4 hours.' },
      { id: 'laundry-5', category: 'laundry', ru: 'Список услуг и цены на прачечную вы найдёте в папке в номере.', uz: "Kir yuvish xizmatlari va narxlar ro'yxatini xonangizdagi papkadan topasiz.", en: "You'll find the laundry price list in the folder in your room." },
    ],
  },
  {
    id: 'taxi',
    label: { ru: 'Такси', uz: 'Taksi', en: 'Taxi' },
    icon: 'CarTaxiFront',
    phrases: [
      { id: 'taxi-1', category: 'taxi', ru: 'Хотите, я закажу для вас такси?', uz: 'Sizga taksi chaqirib beraymi?', en: 'Would you like me to call a taxi for you?' },
      { id: 'taxi-2', category: 'taxi', ru: 'Такси прибудет к главному входу через 10 минут.', uz: 'Taksi 10 daqiqadan so\'ng asosiy kirish qismiga yetib keladi.', en: 'The taxi will arrive at the main entrance in 10 minutes.' },
      { id: 'taxi-3', category: 'taxi', ru: 'Стоимость поездки до аэропорта составляет примерно 150 000 сум.', uz: "Aeroportgacha bo'lgan yo'l narxi taxminan 150 000 so'm.", en: 'The fare to the airport is approximately 150,000 UZS.' },
      { id: 'taxi-4', category: 'taxi', ru: 'Наш партнёр по такси надёжен и работает круглосуточно.', uz: 'Bizning hamkor taksi xizmatimiz ishonchli va kecha-kunduz ishlaydi.', en: 'Our partner taxi service is reliable and operates around the clock.' },
      { id: 'taxi-5', category: 'taxi', ru: 'Пожалуйста, дождитесь такси в лобби, я сообщу, когда машина подъедет.', uz: 'Iltimos, taksini lobbida kuting, mashina kelganida sizga xabar beraman.', en: "Please wait for the taxi in the lobby, I'll let you know when it arrives." },
    ],
  },
  {
    id: 'airport-transfer',
    label: { ru: 'Трансфер в аэропорт', uz: 'Aeroport transferi', en: 'Airport Transfer' },
    icon: 'Plane',
    phrases: [
      { id: 'airport-transfer-1', category: 'airport-transfer', ru: 'Мы можем организовать трансфер до аэропорта, сообщите время вашего рейса.', uz: 'Aeroportgacha transfer tashkil qilib bera olamiz, parvozingiz vaqtini ayting.', en: 'We can arrange an airport transfer — could you tell me your flight time?' },
      { id: 'airport-transfer-2', category: 'airport-transfer', ru: 'Водитель будет ждать вас в лобби за 3 часа до вылета.', uz: 'Haydovchi parvozdan 3 soat oldin sizni lobbida kutadi.', en: 'The driver will be waiting in the lobby 3 hours before departure.' },
      { id: 'airport-transfer-3', category: 'airport-transfer', ru: 'Трансфер до аэропорта включён в стоимость вашего тарифа.', uz: 'Aeroportgacha transfer sizning tarifingiz narxiga kiritilgan.', en: 'The airport transfer is included in your rate.' },
      { id: 'airport-transfer-4', category: 'airport-transfer', ru: 'Пожалуйста, подтвердите точное время отправления трансфера накануне вечером.', uz: 'Iltimos, transfer jo\'nash vaqtini kechqurun oldindan tasdiqlang.', en: 'Please confirm the exact transfer departure time the evening before.' },
      { id: 'airport-transfer-5', category: 'airport-transfer', ru: 'Наш водитель встретит вас с табличкой с вашим именем у выхода из терминала.', uz: 'Haydovchimiz terminal chiqishida ismingiz yozilgan taxta bilan sizni kutib oladi.', en: "Our driver will meet you at the terminal exit holding a sign with your name." },
    ],
  },
  {
    id: 'complaints',
    label: { ru: 'Работа с жалобами', uz: 'Shikoyatlar bilan ishlash', en: 'Handling Complaints' },
    icon: 'MessageSquareWarning',
    phrases: [
      { id: 'complaints-1', category: 'complaints', ru: 'Мне очень жаль, что так получилось, давайте я разберусь с этим немедленно.', uz: 'Shunday bo\'lgani uchun juda afsusdaman, keling, buni hoziroq hal qilaman.', en: "I'm very sorry this happened, let me take care of it right away." },
      { id: 'complaints-2', category: 'complaints', ru: 'Спасибо, что сообщили мне об этом лично.', uz: 'Buni menga shaxsan aytganingiz uchun rahmat.', en: 'Thank you for bringing this to my attention personally.' },
      { id: 'complaints-3', category: 'complaints', ru: 'Я полностью понимаю ваше недовольство, и мы это исправим.', uz: 'Norozilligingizni to\'liq tushunaman, va biz buni albatta tuzatamiz.', en: 'I completely understand your frustration, and we will make this right.' },
      { id: 'complaints-4', category: 'complaints', ru: 'Позвольте мне предложить вам компенсацию за причинённые неудобства.', uz: 'Yetkazilgan noqulaylik uchun kompensatsiya taklif qilishga ijozat bering.', en: 'Please allow me to offer you compensation for the inconvenience caused.' },
      { id: 'complaints-5', category: 'complaints', ru: 'Я лично прослежу, чтобы ситуация была решена в кратчайшие сроки.', uz: "Vaziyat eng qisqa muddatda hal qilinishini shaxsan nazorat qilaman.", en: 'I will personally make sure this is resolved as quickly as possible.' },
    ],
  },
  {
    id: 'thanking-guest',
    label: { ru: 'Благодарность гостю', uz: 'Mehmonga minnatdorchilik', en: 'Thanking the Guest' },
    icon: 'Heart',
    phrases: [
      { id: 'thanking-guest-1', category: 'thanking-guest', ru: 'Спасибо большое, что выбрали наш отель.', uz: 'Mehmonxonamizni tanlaganingiz uchun katta rahmat.', en: 'Thank you so much for choosing our hotel.' },
      { id: 'thanking-guest-2', category: 'thanking-guest', ru: 'Благодарю вас за терпение, пока мы решали этот вопрос.', uz: 'Masalani hal qilayotganimizda sabr-toqat qilganingiz uchun rahmat.', en: 'Thank you for your patience while we resolved this matter.' },
      { id: 'thanking-guest-3', category: 'thanking-guest', ru: 'Спасибо, что оставались с нами верными гостями на протяжении многих лет.', uz: "Ko'p yillar davomida bizga sodiq mehmon bo'lganingiz uchun rahmat.", en: 'Thank you for being a loyal guest of ours for so many years.' },
      { id: 'thanking-guest-4', category: 'thanking-guest', ru: 'Мы очень признательны за ваш отзыв, он поможет нам стать лучше.', uz: 'Fikr-mulohazangiz uchun minnatdormiz, u bizga yaxshilanishga yordam beradi.', en: 'We truly appreciate your feedback, it helps us improve.' },
      { id: 'thanking-guest-5', category: 'thanking-guest', ru: 'Спасибо, что доверили нам организацию вашего пребывания.', uz: 'Turar joyingizni tashkil qilishni bizga ishonganingiz uchun rahmat.', en: 'Thank you for trusting us to take care of your stay.' },
    ],
  },
  {
    id: 'goodbye',
    label: { ru: 'Прощание', uz: 'Xayrlashish', en: 'Goodbye' },
    icon: 'DoorOpen',
    phrases: [
      { id: 'goodbye-1', category: 'goodbye', ru: 'До свидания, надеемся увидеть вас снова!', uz: "Xayr, sizni yana ko'rishni umid qilamiz!", en: 'Goodbye, we hope to see you again soon!' },
      { id: 'goodbye-2', category: 'goodbye', ru: 'Счастливого пути, будем рады принять вас снова.', uz: "Yo'lingiz behatar bo'lsin, sizni yana kutib olishdan xursand bo'lamiz.", en: "Safe travels, we'd be delighted to welcome you back." },
      { id: 'goodbye-3', category: 'goodbye', ru: 'Спасибо, что остановились у нас, хорошего дня!', uz: 'Bizda to\'xtaganingiz uchun rahmat, kuningiz xayrli o\'tsin!', en: 'Thank you for staying with us, have a wonderful day!' },
      { id: 'goodbye-4', category: 'goodbye', ru: 'Если вам что-то понадобится в будущем, пожалуйста, обращайтесь к нам напрямую.', uz: "Kelajakda biror narsa kerak bo'lsa, iltimos, to'g'ridan-to'g'ri biz bilan bog'laning.", en: 'If you need anything in the future, please feel free to contact us directly.' },
      { id: 'goodbye-5', category: 'goodbye', ru: 'Всего доброго, желаем приятного продолжения поездки.', uz: 'Xayrli sayohat tilaymiz, sayohatingizning davomi yaxshi o\'tsin.', en: 'Take care, and we wish you a pleasant continuation of your trip.' },
    ],
  },
]

export default communicationPhrases
