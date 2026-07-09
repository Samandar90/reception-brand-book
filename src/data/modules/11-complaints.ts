import type { Module, LessonSection } from '@/types'

function scenario(
  id: string,
  heading: LessonSection['heading'],
  intro: LessonSection['body'],
  bad: { r: LessonSection['heading']; g: LessonSection['heading'] },
  good: { r: LessonSection['heading']; g: LessonSection['heading']; g2?: LessonSection['heading'] },
  psychology: LessonSection['body'],
): LessonSection {
  return {
    id,
    heading,
    body: intro,
    dialogues: [
      { type: 'bad', lines: [{ speaker: 'guest', text: bad.g }, { speaker: 'receptionist', text: bad.r }] },
      {
        type: 'good',
        lines: [
          { speaker: 'guest', text: good.g },
          { speaker: 'receptionist', text: good.r },
          ...(good.g2 ? [{ speaker: 'receptionist' as const, text: good.g2 }] : []),
        ],
      },
    ],
    callouts: [
      {
        type: 'tip',
        title: { ru: 'Психология', uz: 'Psixologiya', en: 'Psychology tip' },
        body: psychology,
      },
    ],
  }
}

const complaints: Module = {
  slug: 'complaints',
  order: 11,
  icon: 'ShieldAlert',
  title: { ru: 'Жалобы и конфликтные ситуации', uz: 'Shikoyatlar va ziddiyatli vaziyatlar', en: 'Complaints & Conflict Situations' },
  description: {
    ru: 'Как сохранять спокойствие и профессионализм в восьми самых частых конфликтных ситуациях на ресепшене.',
    uz: 'Resepshenda eng ko\'p uchraydigan sakkizta ziddiyatli vaziyatda xotirjamlik va professionallikni qanday saqlash.',
    en: 'How to stay calm and professional through the eight most common front-desk conflict situations.',
  },
  readingTimeMin: 12,
  difficulty: 'advanced',
  sections: [
    {
      id: 'overview',
      heading: { ru: 'Золотое правило работы с жалобами', uz: 'Shikoyatlar bilan ishlashning oltin qoidasi', en: 'The golden rule of handling complaints' },
      body: {
        ru: 'LAST: Listen (выслушайте), Apologize (извинитесь), Solve (решите), Thank (поблагодарите). Гость редко злится на вас лично — он злится на ситуацию. Не спорьте, не оправдывайтесь, не перебивайте.',
        uz: 'LAST: Listen (tinglang), Apologize (uzr so\'rang), Solve (hal qiling), Thank (rahmat ayting). Mehmon shaxsan sizga emas, vaziyatga jahli chiqadi. Bahslashmang, oqlanmang, gapini bo\'lmang.',
        en: 'LAST: Listen, Apologize, Solve, Thank. The guest is rarely angry at you personally — they\'re angry at the situation. Never argue, never get defensive, never interrupt.',
      },
      callouts: [
        {
          type: 'golden-rule',
          title: { ru: 'Понизьте голос, а не поднимайте', uz: 'Ovozni ko\'tarmang, pasaytiring', en: 'Lower your voice, don\'t raise it' },
          body: {
            ru: 'Когда гость говорит громче, отвечайте тише и медленнее — это естественным образом снижает напряжение разговора.',
            uz: 'Mehmon baland ovozda gapirganda, siz sekinroq va bosiqroq javob bering — bu suhbat keskinligini tabiiy ravishda pasaytiradi.',
            en: 'When a guest raises their voice, respond more quietly and slowly — it naturally de-escalates the tension.',
          },
        },
      ],
    },
    scenario(
      'angry-guest',
      { ru: '1. Разгневанный гость', uz: '1. G\'azablangan mehmon', en: '1. The angry guest' },
      { ru: 'Гость эмоционально жалуется на общее качество обслуживания.', uz: 'Mehmon xizmat sifatidan umumiy hissiy tarzda shikoyat qilmoqda.', en: 'The guest is emotionally upset about the overall service quality.' },
      {
        r: { ru: 'Сэр, я вас понимаю, но кричать необязательно.', uz: 'Janob, tushunaman, lekin qichqirish shart emas.', en: 'Sir, I understand, but there\'s no need to shout.' },
        g: { ru: 'Это худший отель, в котором я когда-либо останавливался!', uz: 'Bu men to\'xtagan eng yomon mehmonxona!', en: 'This is the worst hotel I have ever stayed at!' },
      },
      {
        r: { ru: 'Мне очень жаль это слышать, и я благодарен, что вы рассказали мне об этом лично. Давайте разберёмся вместе — расскажите, что произошло?', uz: 'Buni eshitganimdan afsusdaman, va shaxsan menga aytganingiz uchun rahmat. Keling, birgalikda hal qilamiz — nima bo\'lganini aytib bering?', en: 'I\'m truly sorry to hear that, and thank you for telling me directly. Let\'s work through this together — can you tell me what happened?' },
        g: { ru: 'Это худший отель, в котором я когда-либо останавливался!', uz: 'Bu men to\'xtagan eng yomon mehmonxona!', en: 'This is the worst hotel I have ever stayed at!' },
      },
      {
        ru: 'Дайте гостю выговориться до конца, не перебивая — большинство людей успокаиваются, как только чувствуют, что их услышали.',
        uz: 'Mehmonga gapini bo\'lmasdan oxirigacha aytib berishga imkon bering — ko\'pchilik odamlar eshitilganini his qilishi bilanoq tinchlanadi.',
        en: 'Let the guest fully vent without interruption — most people calm down the moment they feel heard.',
      },
    ),
    scenario(
      'room-not-ready',
      { ru: '2. Номер не готов', uz: '2. Xona tayyor emas', en: '2. Room isn\'t ready' },
      { ru: 'Гость приехал вовремя, но уборка номера ещё не завершена.', uz: 'Mehmon vaqtida keldi, lekin xona tozalash hali tugamagan.', en: 'The guest arrived on time but housekeeping hasn\'t finished the room.' },
      {
        r: { ru: 'Номер ещё не готов, подождите где-нибудь.', uz: 'Xona hali tayyor emas, boshqa joyda kuting.', en: 'The room isn\'t ready, wait somewhere else.' },
        g: { ru: 'Я же бронировал заезд на 14:00, почему номер не готов?', uz: 'Men 14:00 ga bron qilgan edim, xona nega tayyor emas?', en: 'I booked a 2pm check-in, why isn\'t my room ready?' },
      },
      {
        r: { ru: 'Приношу извинения за задержку — уборка номера завершится примерно через 20 минут. Позвольте предложить вам кофе в лаунже и сохранить ваш багаж здесь, а я лично сообщу, как только номер будет готов.', uz: 'Kechikish uchun uzr so\'rayman — xona tozalanishi taxminan 20 daqiqada tugaydi. Sizga lounjda qahva taklif qilsam va yukingizni shu yerda saqlab tursam, xona tayyor bo\'lishi bilanoq shaxsan xabar beraman.', en: 'I apologize for the delay — housekeeping will finish in about 20 minutes. May I offer you a coffee in the lounge and store your luggage here? I\'ll personally let you know the moment it\'s ready.' },
        g: { ru: 'Я же бронировал заезд на 14:00, почему номер не готов?', uz: 'Men 14:00 ga bron qilgan edim, xona nega tayyor emas?', en: 'I booked a 2pm check-in, why isn\'t my room ready?' },
      },
      {
        ru: 'Всегда давайте конкретное время ожидания и альтернативу — неопределённость раздражает гостей больше, чем сама задержка.',
        uz: 'Har doim aniq kutish vaqtini va alternativa taklif qiling — noaniqlik mehmonlarni kechikishning o\'zidan ko\'ra ko\'proq bezovta qiladi.',
        en: 'Always give a specific wait time and an alternative — uncertainty frustrates guests more than the delay itself.',
      },
    ),
    scenario(
      'wrong-booking',
      { ru: '3. Ошибка в бронировании', uz: '3. Bronlashda xatolik', en: '3. Wrong booking' },
      { ru: 'Тип номера или даты в системе не совпадают с ожиданиями гостя.', uz: 'Tizimdagi xona turi yoki sanalar mehmon kutgan narsaga mos kelmayapti.', en: 'The room type or dates in the system don\'t match what the guest expected.' },
      {
        r: { ru: 'В нашей системе указано другое, значит вы ошиблись.', uz: 'Bizning tizimda boshqacha yozilgan, demak siz xato qilgansiz.', en: 'Our system shows something different, so you must be mistaken.' },
        g: { ru: 'Я бронировал номер с видом на море, а не стандартный!', uz: 'Men dengizga qaraydigan xonani bron qilgan edim, standartini emas!', en: 'I booked a sea-view room, not a standard one!' },
      },
      {
        r: { ru: 'Понимаю ваше разочарование, давайте вместе проверим бронь. У вас есть номер подтверждения или письмо? Пока проверяю, я уже смотрю, какой номер с видом на море мы можем предложить сейчас.', uz: 'Xafagarchiligingizni tushunaman, keling, bronni birgalikda tekshiramiz. Tasdiqlash raqami yoki xatingiz bormi? Tekshirar ekanman, hozir qanday dengiz manzarali xona taklif qila olishimizni ham ko\'rib chiqyapman.', en: 'I understand your frustration — let\'s check the booking together. Do you have a confirmation number or email? While I check, I\'m already looking at what sea-view rooms we can offer right now.' },
        g: { ru: 'Я бронировал номер с видом на море, а не стандартный!', uz: 'Men dengizga qaraydigan xonani bron qilgan edim, standartini emas!', en: 'I booked a sea-view room, not a standard one!' },
      },
      {
        ru: 'Никогда не подразумевайте, что гость ошибся — даже если это правда. Формулируйте решение проблемы, а не поиск виноватого.',
        uz: 'Hech qachon mehmon xato qilgan deb tuyulmang — bu rost bo\'lsa ham. Aybdorni emas, yechimni birinchi o\'ringa qo\'ying.',
        en: 'Never imply the guest is wrong — even if they are. Frame everything around the solution, not the blame.',
      },
    ),
    scenario(
      'noise-complaint',
      { ru: '4. Жалоба на шум', uz: '4. Shovqin haqida shikoyat', en: '4. Noise complaint' },
      { ru: 'Гость звонит на ресепшен ночью из-за шумных соседей.', uz: 'Mehmon kechasi shovqinli qo\'shnilar haqida resepshenga qo\'ng\'iroq qiladi.', en: 'The guest calls the front desk at night about noisy neighbors.' },
      {
        r: { ru: 'Ну, отель большой, шум бывает.', uz: 'Xo\'sh, mehmonxona katta, shovqin bo\'lib turadi.', en: 'Well, it\'s a big hotel, some noise is normal.' },
        g: { ru: 'Соседний номер шумит уже час, я не могу уснуть!', uz: 'Qo\'shni xona bir soatdan beri shovqin qilyapti, uxlay olmayapman!', en: 'The room next door has been loud for an hour, I can\'t sleep!' },
      },
      {
        r: { ru: 'Прошу прощения за неудобство, я немедленно отправлю сотрудника, чтобы вежливо попросить снизить шум. Я перезвоню вам через 10 минут, чтобы убедиться, что всё в порядке.', uz: 'Noqulaylik uchun uzr so\'rayman, hoziroq xodimni yuboraman, shovqinni pasaytirishni muloyimlik bilan so\'raydi. 10 daqiqadan so\'ng hammasi joyida ekanligiga ishonch hosil qilish uchun sizga qayta qo\'ng\'iroq qilaman.', en: 'I\'m so sorry for the disturbance — I\'ll send someone right away to politely ask them to lower the noise. I\'ll call you back in 10 minutes to make sure everything is fine.' },
        g: { ru: 'Соседний номер шумит уже час, я не могу уснуть!', uz: 'Qo\'shni xona bir soatdan beri shovqin qilyapti, uxlay olmayapman!', en: 'The room next door has been loud for an hour, I can\'t sleep!' },
      },
      {
        ru: 'Всегда обещайте перезвонить и выполняйте обещание — это превращает жалобу в доказательство надёжности отеля.',
        uz: 'Har doim qayta qo\'ng\'iroq qilishga va\'da bering va uni bajaring — bu shikoyatni mehmonxona ishonchliligining isbotiga aylantiradi.',
        en: 'Always promise a callback and follow through — it turns a complaint into proof of the hotel\'s reliability.',
      },
    ),
    scenario(
      'refund-request',
      { ru: '5. Запрос на возврат средств', uz: '5. Pul qaytarishni so\'rash', en: '5. Refund request' },
      { ru: 'Гость требует полный возврат средств из-за неудовлетворённости номером.', uz: 'Mehmon xonadan norozi bo\'lgani uchun to\'liq pul qaytarishni talab qilmoqda.', en: 'The guest demands a full refund because they\'re unhappy with the room.' },
      {
        r: { ru: 'Возвраты не предусмотрены политикой отеля.', uz: 'Pul qaytarish mehmonxona siyosatida ko\'zda tutilmagan.', en: 'Refunds aren\'t part of our hotel policy.' },
        g: { ru: 'Номер грязный, я хочу вернуть свои деньги полностью.', uz: 'Xona iflos, men pulimni to\'liq qaytarib olmoqchiman.', en: 'The room is dirty, I want a full refund.' },
      },
      {
        r: { ru: 'Мне очень жаль, что номер не соответствовал нашим стандартам — это недопустимо. Позвольте мне сначала предложить пересилить вас в подготовленный номер прямо сейчас, а затем обсудить компенсацию с менеджером.', uz: 'Xona bizning standartlarimizga mos kelmagani uchun juda afsusdaman — bu yo\'l qo\'yib bo\'lmaydigan holat. Avval sizni hoziroq tayyorlangan boshqa xonaga ko\'chirishni taklif qilay, keyin menejer bilan kompensatsiyani muhokama qilamiz.', en: 'I\'m very sorry the room didn\'t meet our standards — that\'s not acceptable. Let me first move you to a freshly prepared room right now, and then discuss compensation with my manager.' },
        g: { ru: 'Номер грязный, я хочу вернуть свои деньги полностью.', uz: 'Xona iflos, men pulimni to\'liq qaytarib olmoqchiman.', en: 'The room is dirty, I want a full refund.' },
      },
      {
        ru: 'Никогда не говорите "нет" первым словом. Предложите действие немедленно, а денежный вопрос решайте вместе с руководством.',
        uz: 'Hech qachon birinchi so\'z sifatida "yo\'q" demang. Darhol harakatni taklif qiling, pul masalasini rahbariyat bilan birga hal qiling.',
        en: 'Never let "no" be your first word. Offer immediate action, and route the financial decision through your manager.',
      },
    ),
    scenario(
      'overbooking',
      { ru: '6. Овербукинг', uz: '6. Ortiqcha bronlash', en: '6. Overbooking' },
      { ru: 'У гостя подтверждённая бронь, но свободных номеров нет.', uz: 'Mehmonning tasdiqlangan bronі bor, lekin bo\'sh xona yo\'q.', en: 'The guest has a confirmed booking, but there are no rooms available.' },
      {
        r: { ru: 'У нас перебронь, ничем помочь не можем.', uz: 'Bizda ortiqcha bron bor, hech qanday yordam bera olmaymiz.', en: 'We\'re overbooked, there\'s nothing we can do.' },
        g: { ru: 'У меня подтверждённая бронь, как это у вас нет номеров?', uz: 'Mening tasdiqlangan bronim bor, xona yo\'qligi qanday bo\'lishi mumkin?', en: 'I have a confirmed reservation — how can you have no rooms?' },
      },
      {
        r: { ru: 'Я искренне извиняюсь за эту ситуацию — это полностью наша ответственность, а не ваша. Мы организуем для вас номер аналогичного или более высокого класса в партнёрском отеле рядом, оплатим транспорт, и первую ночь у нас на следующий день предоставим бесплатно как компенсацию.', uz: 'Bu vaziyat uchun chin dildan uzr so\'rayman — bu to\'liq bizning javobgarligimiz, sizniki emas. Sizga yaqin atrofdagi hamkor mehmonxonada shu turdagi yoki yuqoriroq darajadagi xona tashkil qilamiz, transportni to\'laymiz va kompensatsiya sifatida keyingi kuni bizda birinchi kechani bepul taqdim etamiz.', en: 'I sincerely apologize — this is entirely our responsibility, not yours. We\'ll arrange an equal or upgraded room at a partner hotel nearby, cover your transport, and offer your first night with us free as compensation when a room opens up.' },
        g: { ru: 'У меня подтверждённая бронь, как это у вас нет номеров?', uz: 'Mening tasdiqlangan bronim bor, xona yo\'qligi qanday bo\'lishi mumkin?', en: 'I have a confirmed reservation — how can you have no rooms?' },
      },
      {
        ru: 'Возьмите на себя полную ответственность отеля, не перекладывая вину на систему бронирования — гость не должен разбираться во внутренних процессах.',
        uz: 'Aybni bron qilish tizimiga o\'tkazmasdan, mehmonxonaning to\'liq javobgarligini o\'z zimmangizga oling — mehmon ichki jarayonlar bilan shug\'ullanishi shart emas.',
        en: 'Own the hotel\'s responsibility fully — don\'t blame the booking system. The guest shouldn\'t have to understand internal processes.',
      },
    ),
    scenario(
      'payment-issue',
      { ru: '7. Проблема с оплатой', uz: '7. To\'lov muammosi', en: '7. Payment issue' },
      { ru: 'Карта гостя не проходит, а нужно закрыть счёт при выезде.', uz: 'Mehmonning kartasi o\'tmayapti, lekin chiqishda hisobni yopish kerak.', en: 'The guest\'s card is declined, but the bill needs to be settled at check-out.' },
      {
        r: { ru: 'Карта не работает, у вас проблема с банком.', uz: 'Karta ishlamayapti, bankingizda muammo bor.', en: 'Your card isn\'t working, that\'s a problem with your bank.' },
        g: { ru: 'Странно, карта только что работала в другом месте.', uz: 'Qizig\'i, karta hozirgina boshqa joyda ishlagan edi.', en: 'That\'s strange, this card just worked somewhere else.' },
      },
      {
        r: { ru: 'Не переживайте, такое случается — иногда терминал или банк временно блокирует операцию. Может, попробуем другую карту, или у вас есть возможность оплатить наличными или переводом?', uz: 'Xavotir olmang, bunday holatlar bo\'lib turadi — ba\'zan terminal yoki bank operatsiyani vaqtincha bloklaydi. Boshqa kartani sinab ko\'ramizmi, yoki naqd pul yoki o\'tkazma orqali to\'lash imkoniyati bormi?', en: 'No worries, this happens sometimes — the terminal or bank may be blocking it temporarily. Would you like to try another card, or would cash or a transfer work for you?' },
        g: { ru: 'Странно, карта только что работала в другом месте.', uz: 'Qizig\'i, karta hozirgina boshqa joyda ishlagan edi.', en: 'That\'s strange, this card just worked somewhere else.' },
      },
      {
        ru: 'Никогда не намекайте на вину гостя в финансовых вопросах — предложите альтернативы тихо и без посторонних глаз.',
        uz: 'Moliyaviy masalalarda hech qachon mehmonni aybdor deb ishora qilmang — muqobil variantlarni sekin va boshqalarning ko\'zidan uzoqda taklif qiling.',
        en: 'Never imply fault in financial matters — offer alternatives quietly and away from other guests.',
      },
    ),
    scenario(
      'lost-luggage',
      { ru: '8. Потерянный багаж', uz: '8. Yo\'qolgan yuk', en: '8. Lost luggage' },
      { ru: 'Носильщик отеля не может найти сумку гостя.', uz: 'Mehmonxona hammoli mehmonning sumkasini topa olmayapti.', en: 'The hotel porter cannot locate the guest\'s bag.' },
      {
        r: { ru: 'Может, вы сами потеряли её.', uz: 'Balki uni o\'zingiz yo\'qotgandirsiz.', en: 'Maybe you lost it yourself.' },
        g: { ru: 'Где моя сумка? Носильщик её взял час назад!', uz: 'Sumkam qayerda? Hammol uni bir soat oldin olib ketgan edi!', en: 'Where is my bag? The porter took it an hour ago!' },
      },
      {
        r: { ru: 'Приношу извинения за беспокойство — это наша ответственность, и я лично прослежу за поиском. Давайте я запишу описание сумки и подключу службу безопасности прямо сейчас, а вы можете подождать в лаунже с напитком за счёт отеля.', uz: 'Noqulaylik uchun uzr so\'rayman — bu bizning javobgarligimiz, va men shaxsan qidiruvni nazorat qilaman. Keling, sumka tavsifini yozib olay va hoziroq xavfsizlik xizmatini jalb qilay, siz esa mehmonxona hisobidan ichimlik bilan lounjda kutib turishingiz mumkin.', en: 'I\'m so sorry for the trouble — this is our responsibility, and I\'ll personally oversee the search. Let me note down a description of the bag and involve security right now, while you wait in the lounge with a drink on us.' },
        g: { ru: 'Где моя сумка? Носильщик её взял час назад!', uz: 'Sumkam qayerda? Hammol uni bir soat oldin olib ketgan edi!', en: 'Where is my bag? The porter took it an hour ago!' },
      },
      {
        ru: 'Действуйте немедленно и видимо — гостю важно видеть, что решение проблемы уже началось, а не обещание "потом".',
        uz: 'Darhol va ko\'rinarli tarzda harakat qiling — mehmon uchun muammoni hal qilish allaqachon boshlanganini ko\'rish, "keyinroq" degan va\'dadan ko\'ra muhimroq.',
        en: 'Act immediately and visibly — the guest needs to see the resolution already in motion, not a promise for "later."',
      },
    ),
  ],
  commonMistakes: [
    { ru: 'Спорить с гостем или оправдывать сотрудников отеля', uz: 'Mehmon bilan bahslashish yoki mehmonxona xodimlarini oqlash', en: 'Arguing with the guest or defending hotel staff' },
    { ru: 'Говорить "это не в моей компетенции" без предложения решения', uz: '"Bu mening vakolatimda emas" deb, yechim taklif qilmaslik', en: 'Saying "that\'s not my department" without offering a solution' },
    { ru: 'Повышать голос в ответ на повышенный тон гостя', uz: 'Mehmonning baland ovoziga javoban ovozni ko\'tarish', en: 'Raising your voice in response to a raised voice' },
    { ru: 'Давать обещания, которые нельзя выполнить', uz: 'Bajarib bo\'lmaydigan va\'dalar berish', en: 'Making promises you cannot keep' },
    { ru: 'Решать конфликт публично, у всех на виду', uz: 'Ziddiyatni hammaning ko\'z o\'ngida hal qilish', en: 'Handling the conflict in public view of other guests' },
  ],
  goldenRules: [
    { ru: 'Слушайте, извинитесь, решите, поблагодарите (LAST)', uz: 'Tinglang, uzr so\'rang, hal qiling, rahmat ayting (LAST)', en: 'Listen, Apologize, Solve, Thank (LAST)' },
    { ru: 'Берите ответственность отеля на себя, не ищите виноватого', uz: 'Mehmonxona javobgarligini o\'z zimmangizga oling, aybdor qidirmang', en: 'Own the hotel\'s responsibility — don\'t hunt for blame' },
    { ru: 'Предлагайте конкретное решение и сроки', uz: 'Aniq yechim va muddatlarni taklif qiling', en: 'Offer a concrete solution and a timeframe' },
    { ru: 'Всегда доводите обещанное до конца', uz: 'Har doim va\'da qilgan narsangizni oxirigacha bajaring', en: 'Always follow through on what you promised' },
    { ru: 'Переводите эмоциональный разговор в спокойный тон первым', uz: 'Hissiy suhbatni birinchi bo\'lib xotirjam ohangga o\'tkazing', en: 'Be the first to shift the tone from emotional to calm' },
  ],
}

export default complaints
