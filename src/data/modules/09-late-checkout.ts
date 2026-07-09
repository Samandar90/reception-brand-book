import type { Module } from '@/types'

const lateCheckout: Module = {
  slug: 'late-checkout',
  order: 9,
  icon: 'Clock',
  title: { ru: 'Поздний выезд', uz: 'Kech chiqish', en: 'Late Check-out' },
  description: {
    ru: 'Гости часто просят задержаться в номере дольше стандартного времени выезда. Научитесь отвечать честно и предлагать альтернативы.',
    uz: 'Mehmonlar ko\'pincha standart chiqish vaqtidan ko\'ra ko\'proq xonada qolishni so\'raydi. Halol javob berish va muqobil variantlarni taklif qilishni o\'rganing.',
    en: 'Guests frequently ask to stay in their room past standard check-out time. Learn to respond honestly and offer alternatives.',
  },
  readingTimeMin: 5,
  difficulty: 'beginner',
  sections: [
    {
      id: 'overview',
      heading: { ru: 'Прежде чем обещать', uz: 'Va\'da berishdan oldin', en: 'Before you promise anything' },
      body: {
        ru: 'Поздний выезд — это не право гостя, а услуга, зависящая от загрузки отеля. Прежде чем сказать "да" или "нет", всегда проверьте статус уборки номера и наличие бронирования на этот номер на сегодняшнюю ночь. Если номер нужен следующему гостю, обещать позднее выселение нельзя — это подведёт и текущего, и будущего гостя. Проверка должна происходить быстро и незаметно для гостя, пока он ждёт у стойки.',
        uz: 'Kech chiqish mehmonning huquqi emas, balki mehmonxona bandligiga bog\'liq xizmat. "Ha" yoki "yo\'q" deyishdan oldin har doim xonaning tozalash holatini va shu xonaga bugungi kechaga bron borligini tekshiring. Agar xona keyingi mehmonga kerak bo\'lsa, kech chiqishni va\'da qilib bo\'lmaydi — bu ham hozirgi, ham kelajakdagi mehmonni xafa qiladi. Tekshiruv mehmon stoyka oldida kutayotganda tez va sezilmasdan bo\'lishi kerak.',
        en: 'Late check-out is not a guest right — it is a service that depends on hotel occupancy. Before saying "yes" or "no," always check the room-turnover status and whether the room is booked for tonight\'s arrival. If the room is needed for the next guest, you cannot promise a late check-out — doing so would fail both the current guest and the incoming one. This check should happen quickly and discreetly while the guest waits at the desk.',
      },
      callouts: [
        {
          type: 'tip',
          title: { ru: 'Проверяйте перед ответом', uz: 'Javob berishdan oldin tekshiring', en: 'Check before you answer' },
          body: {
            ru: 'Скажите: "Одну минуту, я проверю доступность номера на вечер" — вместо того чтобы сразу отказывать или обещать не глядя в систему.',
            uz: '"Bir daqiqa, kechga xonaning bandligini tekshiraman" deng — tizimga qaramasdan darhol rad etish yoki va\'da berish o\'rniga.',
            en: 'Say "One moment, let me check the room\'s availability for tonight" — instead of refusing or promising without checking the system.',
          },
        },
      ],
    },
    {
      id: 'dialogue',
      heading: { ru: 'Примеры диалогов', uz: 'Muloqot namunalari', en: 'Example dialogues' },
      body: {
        ru: 'Сравните проверенный ответ с поспешным обещанием.',
        uz: 'Tekshirilgan javobni shoshilinch va\'da bilan solishtiring.',
        en: 'Compare a checked response with a hasty promise.',
      },
      dialogues: [
        {
          type: 'good',
          lines: [
            {
              speaker: 'guest',
              text: { ru: 'Можно мне выехать в 3 часа дня вместо полудня?', uz: 'Peshindan o\'rniga soat 3 da chiqsam bo\'ladimi?', en: 'Could I check out at 3pm instead of noon?' },
            },
            {
              speaker: 'receptionist',
              text: {
                ru: 'Конечно, дайте мне минуту проверить, свободен ли ваш номер на сегодняшнюю ночь... Отлично, номер свободен, так что я могу оформить выезд на 15:00 без доплаты.',
                uz: 'Albatta, xonangiz bugungi kechaga bo\'sh ekanligini bir daqiqada tekshiray... Ajoyib, xona bo\'sh, shuning uchun soat 15:00 gacha chiqishni qo\'shimcha to\'lovsiz rasmiylashtira olaman.',
                en: 'Of course, let me just check if your room is open for tonight... Great news, it\'s free, so I can arrange a 3pm check-out for you at no extra charge.',
              },
            },
            {
              speaker: 'guest',
              text: { ru: 'Отлично, спасибо большое!', uz: 'Ajoyib, katta rahmat!', en: 'That\'s great, thank you so much!' },
            },
          ],
        },
        {
          type: 'bad',
          lines: [
            { speaker: 'guest', text: { ru: 'Можно выехать в 3 часа дня?', uz: 'Soat 3 da chiqsam bo\'ladimi?', en: 'Can I check out at 3pm?' } },
            { speaker: 'receptionist', text: { ru: 'Да, конечно, без проблем.', uz: 'Ha, albatta, muammo yo\'q.', en: 'Yes, sure, no problem.' } },
            { speaker: 'receptionist', text: { ru: '(Через час) Извините, оказывается номер нужен новому гостю в 2 часа, вам придётся выехать раньше.', uz: '(Bir soatdan keyin) Kechirasiz, xona yangi mehmonga soat 2 da kerak ekan, sizga erta chiqishga to\'g\'ri keladi.', en: '(An hour later) I\'m sorry, it turns out the room is needed by a new guest at 2pm, you\'ll need to leave earlier after all.' } },
          ],
          note: {
            ru: 'Обещание без проверки системы вынуждает потом отменять слово, что подрывает доверие гостя.',
            uz: 'Tizimni tekshirmasdan berilgan va\'da keyinchalik so\'zdan qaytishga majbur qiladi, bu mehmon ishonchini yo\'qqa chiqaradi.',
            en: 'Promising without checking the system forces you to go back on your word later, which destroys the guest\'s trust.',
          },
        },
      ],
    },
    {
      id: 'tips',
      heading: { ru: 'Практические советы', uz: 'Amaliy maslahatlar', en: 'Practical tips' },
      body: {
        ru: 'Даже если поздний выезд невозможен, у вас всегда есть достойная альтернатива.',
        uz: 'Kech chiqish imkonsiz bo\'lsa ham, sizda doim munosib muqobil variant bor.',
        en: 'Even when a late check-out is not possible, you always have a decent alternative.',
      },
      callouts: [
        {
          type: 'golden-rule',
          title: { ru: 'Объясняйте доплату заранее и мягко', uz: 'Qo\'shimcha to\'lovni oldindan va yumshoq tushuntiring', en: 'Explain any fee upfront and gently' },
          body: {
            ru: 'Если поздний выезд платный, скажите об этом сразу и спокойно: "Я могу продлить до 15:00, это будет стоить 50% от стоимости ночи — подтвердить?" Не удивляйте гостя платой постфактум.',
            uz: 'Agar kech chiqish pullik bo\'lsa, buni darhol va xotirjam ayting: "15:00 gacha uzaytira olaman, bu bir kechalik narxning 50 foizini tashkil qiladi — tasdiqlaymanmi?" Mehmonni keyinchalik to\'lov bilan hayron qoldirmang.',
            en: 'If the late check-out carries a fee, state it upfront and calmly: "I can extend you to 3pm, which comes to 50% of the nightly rate — shall I confirm that?" Never surprise the guest with a charge afterward.',
          },
        },
        {
          type: 'tip',
          title: { ru: 'Предлагайте хранение багажа', uz: 'Yuk saqlashni taklif qiling', en: 'Offer luggage storage' },
          body: {
            ru: 'Если продлить пребывание нельзя, предложите: "К сожалению, номер занят следующим гостем, но я с радостью бесплатно сохраню ваш багаж, и вы сможете гулять по городу до вылета."',
            uz: 'Agar turar joyni uzaytirib bo\'lmasa, taklif qiling: "Afsuski, xona keyingi mehmon uchun band, lekin men xursandchilik bilan yukingizni bepul saqlab qo\'yaman, va siz parvozgacha shahar bo\'ylab sayr qilishingiz mumkin."',
            en: 'If you cannot extend the stay, offer: "Unfortunately the room is booked for an incoming guest, but I\'d be happy to store your luggage free of charge so you can explore the city until your flight."',
          },
        },
      ],
    },
  ],
  commonMistakes: [
    { ru: 'Обещать поздний выезд, не проверив загрузку отеля', uz: 'Mehmonxona bandligini tekshirmasdan kech chiqishni va\'da qilish', en: 'Promising a late check-out without checking hotel occupancy' },
    { ru: 'Сообщать о доплате только в момент выезда', uz: 'Qo\'shimcha to\'lov haqida faqat chiqish paytida aytish', en: 'Mentioning the fee only at the moment of departure' },
    { ru: 'Отказывать без предложения альтернативы вроде хранения багажа', uz: 'Yuk saqlash kabi muqobil variant taklif qilmasdan rad etish', en: 'Declining without offering an alternative like luggage storage' },
    { ru: 'Забывать уведомить хозяйственную службу об изменении времени выезда', uz: 'Chiqish vaqti o\'zgarishi haqida xo\'jalik xizmatiga xabar berishni unutish', en: 'Forgetting to notify housekeeping of the changed check-out time' },
  ],
  goldenRules: [
    { ru: 'Всегда проверяйте наличие брони на текущую ночь перед ответом', uz: 'Javob berishdan oldin har doim shu kechaga bronni tekshiring', en: 'Always check tonight\'s booking status before responding' },
    { ru: 'Озвучивайте доплату честно и заранее', uz: 'Qo\'shimcha to\'lovni halol va oldindan ayting', en: 'State any fee honestly and upfront' },
    { ru: 'Если выезд продлить нельзя, предложите бесплатное хранение багажа', uz: 'Agar chiqishni uzaytirib bo\'lmasa, bepul yuk saqlashni taklif qiling', en: 'If you cannot extend check-out, offer free luggage storage' },
    { ru: 'Никогда не давайте обещание, которое можете не сдержать', uz: 'Hech qachon bajarolmasligingiz mumkin bo\'lgan va\'da bermang', en: 'Never make a promise you might not be able to keep' },
  ],
}

export default lateCheckout
