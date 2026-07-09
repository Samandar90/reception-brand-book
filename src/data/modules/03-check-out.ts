import type { Module } from '@/types'

const checkOut: Module = {
  slug: 'check-out',
  order: 3,
  icon: 'LogOut',
  title: { ru: 'Процесс выезда', uz: 'Chiqish jarayoni', en: 'Check-out Process' },
  description: {
    ru: 'Выезд — последнее впечатление, которое гость увозит с собой. Научитесь закрывать счёт без сюрпризов и прощаться так, чтобы гость захотел вернуться.',
    uz: 'Chiqish — mehmon o\'zi bilan olib ketadigan oxirgi taassurot. Hisobni kutilmagan holatlarsiz yopishni va mehmon qaytib kelishni xohlaydigan tarzda xayrlashishni o\'rganing.',
    en: 'Check-out is the last impression a guest takes with them. Learn to close the bill without surprises and say goodbye in a way that makes them want to return.',
  },
  readingTimeMin: 6,
  difficulty: 'beginner',
  sections: [
    {
      id: 'overview',
      heading: { ru: 'Почему выезд решает всё', uz: 'Nega chiqish hal qiluvchi ahamiyatga ega', en: 'Why check-out matters so much' },
      body: {
        ru: 'Гости часто помнят отель по тому, как прошёл выезд, а не по тому, как прошло заселение. На выезде важно спокойно и понятно провести гостя по счёту — объяснить, за что списаны средства, включая минибар и дополнительные услуги, — предложить помощь с багажом и такси, и поблагодарить за визит. Быстрый и прозрачный процесс снимает напряжение даже у спешащего гостя.',
        uz: 'Mehmonlar ko\'pincha mehmonxonani ro\'yxatdan o\'tish emas, balki chiqish qanday o\'tganiga qarab eslab qolishadi. Chiqishda mehmonni hisob bo\'yicha xotirjam va tushunarli tarzda olib o\'tish muhim — minibar va qo\'shimcha xizmatlar uchun qancha yechilganini tushuntirish, yuk va taksiga yordam taklif qilish hamda tashrif uchun rahmat aytish kerak. Tez va shaffof jarayon shoshilayotgan mehmonning ham xavotirini yo\'qotadi.',
        en: 'Guests often remember a hotel by how the check-out went, not by how the check-in went. At check-out, it matters to walk the guest calmly and clearly through the bill — explaining any charges, including minibar and extra services — offer help with luggage and a taxi, and thank them for staying. A fast, transparent process eases tension even for a rushed guest.',
      },
      callouts: [
        {
          type: 'tip',
          title: { ru: 'Проверяйте счёт заранее', uz: 'Hisobni oldindan tekshiring', en: 'Check the bill in advance' },
          body: {
            ru: 'За 15–20 минут до ожидаемого времени выезда просмотрите папку гостя: нет ли неотражённых расходов из ресторана или мини-бара. Это ускорит выезд и избавит от неприятных сюрпризов у стойки.',
            uz: 'Kutilayotgan chiqish vaqtidan 15-20 daqiqa oldin mehmon papkasini ko\'rib chiqing: restoran yoki minibardan aks etmagan xarajatlar bormi. Bu chiqishni tezlashtiradi va stoykada yoqimsiz kutilmagan holatlarning oldini oladi.',
            en: 'About 15–20 minutes before the expected checkout time, review the guest\'s folio for any unposted restaurant or minibar charges. This speeds up check-out and avoids unpleasant surprises at the desk.',
          },
        },
      ],
    },
    {
      id: 'dialogue',
      heading: { ru: 'Примеры диалогов', uz: 'Muloqot namunalari', en: 'Example dialogues' },
      body: {
        ru: 'Сравните внимательный выезд с торопливым и безучастным.',
        uz: 'E\'tiborli chiqishni shoshqaloq va befarq chiqish bilan solishtiring.',
        en: 'Compare an attentive check-out with a rushed, indifferent one.',
      },
      dialogues: [
        {
          type: 'good',
          lines: [
            {
              speaker: 'receptionist',
              text: {
                ru: 'Доброе утро! Готовы выезжать? Сейчас покажу ваш счёт: проживание за две ночи и ужин в ресторане вчера вечером на 85 000 сум. Всё верно?',
                uz: 'Xayrli tong! Chiqishga tayyormisiz? Hozir hisobingizni ko\'rsataman: ikki kechalik turar joy va kecha kechqurun restorandagi kechki ovqat 85 000 so\'m. Hammasi to\'g\'rimi?',
                en: 'Good morning! Ready to check out? Let me show you your bill: two nights\' stay and last night\'s dinner at the restaurant, 85,000 sum. Does that all look correct?',
              },
            },
            {
              speaker: 'guest',
              text: { ru: 'Да, всё верно, спасибо.', uz: 'Ha, hammasi to\'g\'ri, rahmat.', en: 'Yes, that\'s all correct, thank you.' },
            },
            {
              speaker: 'receptionist',
              text: {
                ru: 'Отлично, оплата прошла успешно. Помочь вызвать такси или донести чемоданы? И, если будет минутка, буду благодарна за ваш отзыв о пребывании — до свидания и хорошей дороги!',
                uz: 'Ajoyib, to\'lov muvaffaqiyatli o\'tdi. Taksi chaqirishga yoki chamadonlarni olib chiqishga yordam beraymi? Va agar vaqtingiz bo\'lsa, turar joyingiz haqida fikringiz uchun minnatdor bo\'lardim — xayr va yaxshi yo\'l!',
                en: 'Wonderful, the payment went through. Can I help call a taxi or carry your bags down? And if you have a moment, I\'d appreciate your feedback on your stay — goodbye and safe travels!',
              },
            },
          ],
        },
        {
          type: 'bad',
          lines: [
            { speaker: 'receptionist', text: { ru: 'Выезжаете? Карту давайте.', uz: 'Chiqyapsizmi? Kartani bering.', en: 'Checking out? Card, please.' } },
            { speaker: 'guest', text: { ru: 'А что за дополнительная сумма в счёте?', uz: 'Hisobdagi qo\'shimcha summa nima uchun?', en: 'What\'s this extra charge on the bill?' } },
            { speaker: 'receptionist', text: { ru: 'Не знаю, наверное, минибар. Следующий, пожалуйста.', uz: 'Bilmadim, ehtimol minibardir. Keyingi, marhamat.', en: 'I don\'t know, probably minibar. Next, please.' } },
          ],
          note: {
            ru: 'Отсутствие объяснения по счёту и грубое переключение на следующего гостя разрушают доверие и оставляют неприятный осадок.',
            uz: 'Hisob bo\'yicha tushuntirish yo\'qligi va keyingi mehmonga qo\'pol o\'tish ishonchni buzadi va yoqimsiz taassurot qoldiradi.',
            en: 'No explanation of the charge and an abrupt switch to the next guest breaks trust and leaves a bad final impression.',
          },
        },
      ],
    },
    {
      id: 'tips',
      heading: { ru: 'Полезные советы', uz: 'Foydali maslahatlar', en: 'Helpful tips' },
      body: {
        ru: 'Детали, которые превращают выезд в приятное завершение визита.',
        uz: 'Chiqishni tashrifning yoqimli yakuniga aylantiradigan detallar.',
        en: 'Details that turn check-out into a pleasant end to the stay.',
      },
      callouts: [
        {
          type: 'golden-rule',
          title: { ru: 'Всегда озвучивайте сумму и статьи расходов', uz: 'Har doim summa va xarajat moddalarini ayting', en: 'Always state the amount and each charge' },
          body: {
            ru: 'Проговаривайте вслух, за что именно списаны средства, прежде чем просить подтверждение оплаты. Это предотвращает споры и жалобы позже.',
            uz: 'To\'lovni tasdiqlashni so\'rashdan oldin, aynan nima uchun mablag\' yechilganini ovoz chiqarib ayting. Bu keyinchalik nizolar va shikoyatlarning oldini oladi.',
            en: 'State out loud exactly what each charge is for before asking the guest to confirm payment. This prevents disputes and complaints later.',
          },
        },
        {
          type: 'tip',
          title: { ru: 'Предложите экспресс-выезд заранее', uz: 'Ekspress chiqishni oldindan taklif qiling', en: 'Offer express checkout in advance' },
          body: {
            ru: 'Вечером накануне выезда спросите гостя, не хочет ли он оформить экспресс-выезд: подтвердить счёт заранее и оставить ключ на стойке утром, чтобы не терять время.',
            uz: 'Chiqishdan bir kun oldin kechqurun mehmondan ekspress chiqishni xohlaydimi deb so\'rang: hisobni oldindan tasdiqlash va ertalab vaqtni yo\'qotmaslik uchun kalitni stoykaga qoldirish.',
            en: 'The evening before departure, ask the guest if they\'d like express checkout: confirm the bill in advance and simply leave the key at the desk in the morning to save time.',
          },
        },
      ],
    },
  ],
  commonMistakes: [
    { ru: 'Не объяснять статьи расходов в счёте', uz: 'Hisobdagi xarajat moddalarini tushuntirmaslik', en: 'Not explaining the charges on the bill' },
    { ru: 'Торопить гостя, не предложив помощь с багажом или такси', uz: 'Yuk yoki taksiga yordam taklif qilmasdan mehmonni shoshiltirish', en: 'Rushing the guest without offering help with luggage or a taxi' },
    { ru: 'Забывать поблагодарить гостя и попрощаться тепло', uz: 'Mehmonga rahmat aytish va iliq xayrlashishni unutish', en: 'Forgetting to thank the guest and say a warm goodbye' },
    { ru: 'Не спрашивать обратную связь о пребывании', uz: 'Turar joy haqida fikr-mulohaza so\'ramaslik', en: 'Not asking for feedback about the stay' },
  ],
  goldenRules: [
    { ru: 'Проверяйте счёт заранее, до подхода гостя к стойке', uz: 'Mehmon stoykaga kelishidan oldin hisobni tekshiring', en: 'Check the bill before the guest reaches the desk' },
    { ru: 'Проговаривайте каждую статью расходов вслух', uz: 'Har bir xarajat moddasini ovoz chiqarib ayting', en: 'State every charge out loud' },
    { ru: 'Предлагайте помощь с багажом и такси', uz: 'Yuk va taksiga yordam taklif qiling', en: 'Offer help with luggage and a taxi' },
    { ru: 'Спрашивайте обратную связь искренне, а не формально', uz: 'Fikr-mulohazani rasmiy emas, samimiy so\'rang', en: 'Ask for feedback sincerely, not as a formality' },
    { ru: 'Прощайтесь тепло и называйте гостя по имени', uz: 'Mehmon bilan iliq xayrlashing va uni ismi bilan chaqiring', en: 'Say goodbye warmly and use the guest\'s name' },
  ],
}

export default checkOut
