import type { Module } from '@/types'

const checkIn: Module = {
  slug: 'check-in',
  order: 2,
  icon: 'LogIn',
  title: { ru: 'Процесс заселения', uz: 'Ro\'yxatdan o\'tkazish jarayoni', en: 'Check-in Process' },
  description: {
    ru: 'Заселение — момент, когда гость окончательно расслабляется после дороги. Научитесь проводить его быстро, точно и без единой заминки.',
    uz: 'Ro\'yxatdan o\'tkazish — mehmon yo\'ldan keyin nihoyat tinchlanadigan payt. Buni tez, aniq va bironta ham to\'siqsiz o\'tkazishni o\'rganing.',
    en: 'Check-in is the moment a guest finally relaxes after travel. Learn to make it fast, accurate, and completely smooth.',
  },
  readingTimeMin: 7,
  difficulty: 'beginner',
  sections: [
    {
      id: 'overview',
      heading: { ru: 'Из чего складывается хорошее заселение', uz: 'Yaxshi ro\'yxatdan o\'tkazish nimalardan iborat', en: 'What makes a great check-in' },
      body: {
        ru: 'Заселение — это не просто выдача ключа. Это проверка документа гостя, сверка брони, заполнение регистрационной карты и краткий, но полезный инструктаж: где завтрак, как работает Wi-Fi, во сколько выезд. Каждый шаг должен выполняться уверенно и без лишних пауз, чтобы гость чувствовал, что о нём позаботились с первой минуты.',
        uz: 'Ro\'yxatdan o\'tkazish shunchaki kalit berish emas. Bu mehmon hujjatini tekshirish, bronni solishtirish, ro\'yxatga olish kartasini to\'ldirish va qisqa, lekin foydali ma\'lumot berish: nonushta qayerda, Wi-Fi qanday ishlaydi, chiqish soati qachon. Har bir qadam ishonch bilan va ortiqcha pauzalarsiz bajarilishi kerak, shunda mehmon birinchi daqiqadan g\'amxo\'rlik qilinganini his qiladi.',
        en: 'Check-in is not just handing over a key. It means checking the guest\'s ID, matching it to the reservation, completing the registration card, and giving a short, useful briefing: where breakfast is, how Wi-Fi works, what time checkout is. Every step should be handled confidently and without unnecessary pauses, so the guest feels cared for from the very first minute.',
      },
      callouts: [
        {
          type: 'tip',
          title: { ru: 'Готовьтесь заранее', uz: 'Oldindan tayyorlaning', en: 'Prepare in advance' },
          body: {
            ru: 'Перед приездом гостя откройте его бронь заранее: проверьте тип номера, особые пожелания и статус оплаты. Это экономит время и позволяет обращаться к гостю по имени ещё до того, как он представится.',
            uz: 'Mehmon kelishidan oldin uning bronini oldindan oching: xona turini, alohida istaklarni va to\'lov holatini tekshiring. Bu vaqtni tejaydi va mehmon o\'zini tanishtirishidan oldin uni ism bilan chaqirish imkonini beradi.',
            en: 'Open the guest\'s reservation ahead of arrival: check room type, special requests, and payment status. This saves time and lets you address the guest by name before they even introduce themselves.',
          },
        },
      ],
    },
    {
      id: 'dialogue',
      heading: { ru: 'Примеры диалогов', uz: 'Muloqot namunalari', en: 'Example dialogues' },
      body: {
        ru: 'Посмотрите, как отличается заселение при внимательном и при небрежном подходе.',
        uz: 'E\'tiborli va beparvo yondashuvda ro\'yxatdan o\'tkazish qanday farq qilishini ko\'ring.',
        en: 'See how check-in differs between an attentive approach and a careless one.',
      },
      dialogues: [
        {
          type: 'good',
          lines: [
            {
              speaker: 'receptionist',
              text: {
                ru: 'Добро пожаловать, господин Ahmedov! Вижу, у вас забронирован Deluxe номер на три ночи. Могу я взглянуть на ваш паспорт, чтобы завершить регистрацию?',
                uz: 'Xush kelibsiz, Ahmedov janob! Ko\'rib turibman, sizda uch kechalik Deluxe xona bron qilingan. Ro\'yxatdan o\'tishni yakunlash uchun pasportingizni ko\'rsam bo\'ladimi?',
                en: 'Welcome, Mr. Ahmedov! I see you have a Deluxe room booked for three nights. May I see your passport to complete your registration?',
              },
            },
            {
              speaker: 'guest',
              text: { ru: 'Да, конечно, вот, пожалуйста.', uz: 'Ha, albatta, mana, marhamat.', en: 'Yes, of course, here you go.' },
            },
            {
              speaker: 'receptionist',
              text: {
                ru: 'Спасибо. Вот ваш ключ от номера 412. Завтрак с 7 до 10 в ресторане на первом этаже, пароль от Wi-Fi указан на карточке, а выезд — до 12:00. Проводить вас до номера или помочь с багажом?',
                uz: 'Rahmat. Mana 412-xonaning kaliti. Nonushta soat 7 dan 10 gacha birinchi qavatdagi restoranda, Wi-Fi paroli kartochkada ko\'rsatilgan, chiqish esa 12:00 gacha. Xonaga kuzatib qo\'yaymi yoki yukingizga yordam beraymi?',
                en: 'Thank you. Here is your key to room 412. Breakfast is from 7 to 10 in the restaurant on the first floor, the Wi-Fi password is on the card, and checkout is until 12:00. Shall I walk you to your room or help with your luggage?',
              },
            },
          ],
        },
        {
          type: 'bad',
          lines: [
            { speaker: 'receptionist', text: { ru: 'Паспорт.', uz: 'Pasport.', en: 'Passport.' } },
            { speaker: 'guest', text: { ru: 'Вот, пожалуйста.', uz: 'Mana, marhamat.', en: 'Here it is.' } },
            { speaker: 'receptionist', text: { ru: 'Номер 412, ключ вот, распишитесь тут.', uz: '412-xona, kalit mana, shu yerga imzo qo\'ying.', en: 'Room 412, here\'s the key, sign here.' } },
          ],
          note: {
            ru: 'Нет приветствия, нет объяснений про завтрак, Wi-Fi и время выезда — гость остаётся без важной информации и без ощущения заботы.',
            uz: 'Salomlashish yo\'q, nonushta, Wi-Fi va chiqish vaqti haqida tushuntirish yo\'q — mehmon muhim ma\'lumotsiz va g\'amxo\'rlik hissiz qoladi.',
            en: 'No greeting, no explanation of breakfast, Wi-Fi, or checkout time — the guest is left without key information and without any sense of care.',
          },
        },
      ],
    },
    {
      id: 'tips',
      heading: { ru: 'Полезные советы', uz: 'Foydali maslahatlar', en: 'Helpful tips' },
      body: {
        ru: 'Небольшие привычки, которые делают заселение профессиональным.',
        uz: 'Ro\'yxatdan o\'tkazishni professional qiladigan kichik odatlar.',
        en: 'Small habits that make check-in feel professional.',
      },
      callouts: [
        {
          type: 'golden-rule',
          title: { ru: 'Всегда сверяйте документ с бронью', uz: 'Har doim hujjatni bron bilan solishtiring', en: 'Always match the ID to the reservation' },
          body: {
            ru: 'Имя, дата рождения и номер документа должны совпадать с данными брони. Расхождения уточняйте вежливо, но обязательно, до выдачи ключа.',
            uz: 'Ism, tug\'ilgan sana va hujjat raqami bron ma\'lumotlari bilan mos kelishi kerak. Farqlarni kalit berishdan oldin muloyimlik bilan, lekin albatta aniqlashtiring.',
            en: 'The name, date of birth, and document number must match the reservation details. Clarify any discrepancy politely, but always before handing over the key.',
          },
        },
        {
          type: 'tip',
          title: { ru: 'Предложите помощь с багажом', uz: 'Yukka yordam taklif qiling', en: 'Offer help with luggage' },
          body: {
            ru: 'Даже если носильщика нет рядом, спросите: "Помочь донести чемоданы до номера?" Это мелочь, которая запоминается.',
            uz: 'Hatto yukchi yaqinda bo\'lmasa ham, so\'rang: "Chamadonlaringizni xonagacha olib borishga yordam beraymi?" Bu kichik narsa, lekin yodda qoladi.',
            en: 'Even if a porter isn\'t nearby, ask: "Can I help carry your bags to the room?" It\'s a small gesture that guests remember.',
          },
        },
      ],
    },
  ],
  commonMistakes: [
    { ru: 'Не сверять паспорт с данными брони', uz: 'Pasportni bron ma\'lumotlari bilan solishtirmaslik', en: 'Not matching the passport to the reservation details' },
    { ru: 'Забывать рассказать про завтрак, Wi-Fi и время выезда', uz: 'Nonushta, Wi-Fi va chiqish vaqti haqida aytishni unutish', en: 'Forgetting to explain breakfast, Wi-Fi, and checkout time' },
    { ru: 'Заставлять гостя ждать, пока оформляется карта, без объяснений', uz: 'Karta rasmiylashtirilayotganda mehmonni tushuntirmasdan kutishga majbur qilish', en: 'Making the guest wait while paperwork is done, without explanation' },
    { ru: 'Не предлагать помощь с багажом', uz: 'Yukka yordam taklif qilmaslik', en: 'Not offering help with luggage' },
  ],
  goldenRules: [
    { ru: 'Готовьте бронь заранее, до прихода гостя', uz: 'Mehmon kelishidan oldin bronni tayyorlab qo\'ying', en: 'Prepare the reservation before the guest arrives' },
    { ru: 'Всегда сверяйте документ с данными брони', uz: 'Har doim hujjatni bron ma\'lumotlari bilan solishtiring', en: 'Always match the ID to the reservation details' },
    { ru: 'Кратко расскажите про завтрак, Wi-Fi и время выезда', uz: 'Nonushta, Wi-Fi va chiqish vaqti haqida qisqacha ayting', en: 'Briefly explain breakfast, Wi-Fi, and checkout time' },
    { ru: 'Предлагайте помощь с багажом', uz: 'Yukka yordam taklif qiling', en: 'Offer help with luggage' },
    { ru: 'Провожайте гостя тёплым напутствием перед номером', uz: 'Mehmonni xona oldida iliq so\'zlar bilan kuzatib qo\'ying', en: 'Send the guest off with a warm word before they reach their room' },
  ],
}

export default checkIn
