import type { FinalChoiceQuestion } from '@/types'

export const finalChoice1: FinalChoiceQuestion[] = [
  {
    id: 'final-mc-01',
    type: 'choice',
    moduleSlugs: ['phone-communication', 'greeting-guests'],
    scenario: {
      ru: '14:10. Вы у стойки оформляете заселение гостя: он только что передал вам паспорт, вы сверяете данные с бронью. В этот момент звонит городской телефон — идёт уже второй гудок. Коллега на обеде, и, кроме вас, на ресепшене никого нет.',
      uz: 'Soat 14:10. Siz stoykada mehmonni ro\'yxatdan o\'tkazyapsiz: u hozirgina pasportini berdi, siz ma\'lumotlarni bron bilan solishtiryapsiz. Shu payt shahar telefoni jiringlaydi — ikkinchi signal ketmoqda. Hamkasbingiz tushlikka chiqqan, resepshenda o\'zingiz yolg\'izsiz.',
      en: 'It\'s 14:10. You are checking in a guest at the desk: he has just handed you his passport and you are matching it against the reservation. At that moment the hotel phone rings — it\'s already the second ring. Your colleague is at lunch and you are alone at reception.',
    },
    question: {
      ru: 'Что нужно сделать в первую очередь?',
      uz: 'Birinchi navbatda nima qilish kerak?',
      en: 'What should you do first?',
    },
    options: [
      {
        ru: 'Не отвлекаться: дооформить паспорт и выдать ключ за две-три минуты, а затем перезвонить на номер, который определился на телефоне.',
        uz: 'Chalg\'imaslik: pasportni rasmiylashtirib, ikki-uch daqiqada kalitni berish, so\'ngra telefonda aniqlangan raqamga qayta qo\'ng\'iroq qilish.',
        en: 'Stay focused: finish the passport and hand over the key within two or three minutes, then call back the number shown on the caller ID.',
      },
      {
        ru: 'Снять трубку и сказать: «Секунду, подождите», не называя отель и себя, и сразу вернуться к паспорту гостя.',
        uz: 'Trubkani ko\'tarib, mehmonxona nomi va o\'z ismingizni aytmasdan «Bir soniya, kuting» deb, darhol mehmonning pasportiga qaytish.',
        en: 'Pick up and say "One second, please hold" without giving the hotel name or yours, then go straight back to the guest\'s passport.',
      },
      {
        ru: 'Ответить по стандарту — с названием отеля и своим именем — и сначала полностью решить вопрос звонящего: он ведь не видит, что вы заняты.',
        uz: 'Standart bo\'yicha — mehmonxona nomi va o\'z ismingiz bilan — javob berib, avval qo\'ng\'iroq qiluvchining masalasini to\'liq hal qilish: axir u bandligingizni ko\'rmaydi.',
        en: 'Answer by the standard with the hotel name and your name, and resolve the caller\'s request fully first, since he can\'t see that you are busy.',
      },
      {
        ru: 'Коротко извиниться перед гостем у стойки, ответить до третьего гудка, назвав отель и своё имя, и попросить звонящего подождать минуту.',
        uz: 'Stoykadagi mehmondan qisqa uzr so\'rab, uchinchi signalgacha mehmonxona nomi va ismingizni aytib javob berish va qo\'ng\'iroq qiluvchidan bir daqiqa kutishni so\'rash.',
        en: 'Apologise briefly to the guest at the desk, answer by the third ring with the hotel and your name, and ask the caller to hold for a minute.',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Модуль о телефоне требует коротко извиниться перед гостем у стойки и снять трубку не позже третьего гудка, назвав отель и своё имя; затем нужно кратко объяснить ситуацию и попросить звонящего подождать (или предложить перезвонить), а не оставлять кого-либо из гостей ждать без объяснений.',
      uz: 'Telefon moduli stoykadagi mehmondan qisqacha uzr so\'rab, uchinchi signaldan kechikmasdan mehmonxona nomi va o\'z ismingizni aytib trubkani ko\'tarishni talab qiladi; so\'ngra vaziyatni qisqacha tushuntirib, qo\'ng\'iroq qiluvchidan kutishni so\'rash (yoki qayta qo\'ng\'iroq qilishni taklif qilish) kerak, mehmonlardan birini tushuntirishsiz kutdirib qo\'ymaslik lozim.',
      en: 'The phone module says to apologise briefly to the guest at the desk and pick up by the third ring with the hotel and your name; then briefly explain and ask the caller to hold (or offer a call-back) rather than leaving either guest waiting without explanation.',
    },
  },
  {
    id: 'final-mc-02',
    type: 'choice',
    moduleSlugs: ['booking-com-guests', 'check-in'],
    scenario: {
      ru: '19:30, вечер пятницы. К стойке подходит уставший гость с бронью через Booking.com на три ночи. В его ваучере на телефоне указано: «Завтрак включён, невозвратный тариф». В PMS та же бронь на те же даты, но с пометкой «без завтрака». Гость уже нетерпеливо смотрит на часы.',
      uz: 'Juma kuni, soat 19:30. Stoykaga Booking.com orqali uch kechaga bron qilgan charchagan mehmon keladi. Telefonidagi voucherda: «Nonushta kiritilgan, qaytarilmaydigan tarif» deb yozilgan. PMS\'da o\'sha sanalarga o\'sha bron bor, lekin «nonushtasiz» belgisi bilan. Mehmon allaqachon sabrsizlik bilan soatiga qarayapti.',
      en: 'Friday, 19:30. A tired guest with a three-night Booking.com reservation comes to the desk. The voucher on his phone says "Breakfast included, non-refundable rate". The PMS shows the same booking for the same dates, but marked "room only". The guest is already glancing impatiently at his watch.',
    },
    question: {
      ru: 'Как правильнее всего поступить?',
      uz: 'Eng to\'g\'ri yo\'l qaysi?',
      en: 'What is the best course of action?',
    },
    options: [
      {
        ru: 'Извиниться за ожидание, сверить бронь в Extranet с ваучером гостя и до выдачи ключа исправить запись в PMS по подтверждённым условиям.',
        uz: 'Kutish uchun uzr so\'rab, Extranet\'dagi bronni mehmon voucheri bilan solishtirish va kalit berishdan oldin PMS\'dagi yozuvni tasdiqlangan shartlarga ko\'ra to\'g\'rilash.',
        en: 'Apologise for the wait, check the booking in the Extranet against his voucher, and correct the PMS record to the confirmed terms before issuing the key.',
      },
      {
        ru: 'Заселить гостя по данным PMS, чтобы не задерживать его, и пообещать «разобраться с завтраком завтра утром», когда на стойке будет спокойнее.',
        uz: 'Mehmonni ushlab qolmaslik uchun PMS ma\'lumotlari bo\'yicha joylashtirish va «nonushta masalasini ertaga ertalab, stoyka tinchroq bo\'lganda hal qilamiz» deb va\'da berish.',
        en: 'Check him in according to the PMS so he isn\'t held up, and promise to "sort out the breakfast tomorrow morning" when the desk is quieter.',
      },
      {
        ru: 'Объяснить, что PMS — основная система отеля и она точнее ваучера, и предложить гостю завтрак в ресторане со скидкой 20 % для проживающих.',
        uz: 'PMS mehmonxonaning asosiy tizimi va u voucherdan aniqroq ekanini tushuntirib, mehmonga restoranda yashovchilar uchun 20 % chegirma bilan nonushta taklif qilish.',
        en: 'Explain that the PMS is the hotel\'s master record and more accurate than the voucher, and offer him breakfast in the restaurant at a 20% resident discount.',
      },
      {
        ru: 'Сказать, что расхождение возникло на стороне Booking.com, дать гостю номер их круглосуточной поддержки и попросить исправить бронь до завтрашнего завтрака.',
        uz: 'Farq Booking.com tomonida yuzaga kelganini aytib, mehmonga ularning kechayu kunduz ishlaydigan qo\'llab-quvvatlash raqamini berish va bronni ertangi nonushtagacha to\'g\'rilatishni so\'rash.',
        en: 'Say the mismatch comes from Booking.com, give him their 24-hour support number and ask him to get the booking corrected before tomorrow\'s breakfast.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Первый шаг с OTA-бронью — точная сверка с PMS (даты, тип номера, тариф, оплата) до заселения, а расхождения устраняются до выдачи ключа. Откладывать вопрос, отмахиваться от ваучера или перекладывать ответственность на платформу — типичные ошибки из модуля.',
      uz: 'OTA broni bilan birinchi qadam — ro\'yxatdan o\'tkazishdan oldin PMS bilan aniq solishtirish (sanalar, xona turi, tarif, to\'lov), farqlar esa kalit berishdan oldin bartaraf etiladi. Masalani kechiktirish, voucherni e\'tiborsiz qoldirish yoki javobgarlikni platformaga yuklash — moduldagi tipik xatolar.',
      en: 'The first step with an OTA booking is a precise match against the PMS (dates, room type, rate, payment) before check-in, and any discrepancy is resolved before the key is issued. Postponing the issue, brushing off the voucher or deflecting to the platform are the module\'s typical mistakes.',
    },
  },
  {
    id: 'final-mc-03',
    type: 'choice',
    moduleSlugs: ['check-out', 'complaints'],
    scenario: {
      ru: '11:40, пик выезда: у стойки очередь из трёх гостей. Гость перед вами торопится в аэропорт, видит в счёте строку «минибар — 120 000 сум» и резко говорит, что ничего из минибара не брал. Тон повышается, остальные гости прислушиваются.',
      uz: 'Soat 11:40, chiqishning eng gavjum payti: stoykada uch mehmondan iborat navbat. Sizning oldingizdagi mehmon aeroportga shoshilmoqda, hisobda «minibar — 120 000 so\'m» qatorini ko\'rib, minibardan hech narsa olmaganini keskin aytadi. Ohang ko\'tarilmoqda, boshqa mehmonlar quloq solmoqda.',
      en: '11:40, peak check-out: three guests are queuing at the desk. The guest in front of you is rushing to the airport, sees the line "minibar — 120,000 sum" on his bill and says sharply that he never touched the minibar. His voice is rising and the other guests are listening.',
    },
    question: {
      ru: 'Что нужно сделать в первую очередь?',
      uz: 'Birinchi navbatda nima qilish kerak?',
      en: 'What should you do first?',
    },
    options: [
      {
        ru: 'Спокойно объяснить, что минибар вносит горничная при проверке номера, поэтому ошибка практически исключена, и показать гостю время начисления в системе.',
        uz: 'Minibarni xonani tekshirishda farrosh kiritishini, shuning uchun xato deyarli istisno ekanini xotirjam tushuntirib, mehmonga tizimdagi hisoblash vaqtini ko\'rsatish.',
        en: 'Calmly explain that the housekeeper enters minibar charges during the room check, so an error is practically impossible, and show him the posting time.',
      },
      {
        ru: 'Попросить гостя отойти в лаунж-зону, чтобы другие не слышали, обслужить двух гостей за ним и уже потом спокойно разобрать его счёт.',
        uz: 'Boshqalar eshitmasligi uchun mehmondan launj-zonaga o\'tishni so\'rash, undan keyingi ikki mehmonga xizmat ko\'rsatib, so\'ngra uning hisobini xotirjam ko\'rib chiqish.',
        en: 'Ask him to step over to the lounge so the others don\'t hear, serve the two guests behind him, and then go through his bill calmly.',
      },
      {
        ru: 'Спокойно и тише обычного извиниться, назвать, что именно и когда начислено, сразу попросить хаускипинг проверить минибар и поблагодарить за терпение.',
        uz: 'Xotirjam, past ovozda uzr so\'rab, nima va qachon hisoblanganini aytish, darhol xo\'jalik xizmatidan minibarni tekshirishni so\'rash va sabri uchun rahmat aytish.',
        en: 'Apologise calmly and quietly, name exactly what was charged and when, ask housekeeping to check the minibar at once, and thank him for his patience.',
      },
      {
        ru: 'Попросить оплатить счёт целиком сейчас, чтобы очередь двигалась, и дать e-mail бухгалтерии: если начисление ошибочное, деньги вернут за 3 рабочих дня.',
        uz: 'Navbat yurishi uchun hisobni hozir to\'liq to\'lashni so\'rash va buxgalteriya e-mailini berish: agar hisoblash xato bo\'lsa, pul 3 ish kunida qaytariladi.',
        en: 'Ask him to pay the full bill now so the queue keeps moving, and give him the accounts e-mail: if the charge is wrong, it will be refunded within 3 working days.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Золотое правило выезда — озвучивать сумму и статьи расходов и разбирать спорную позицию здесь и сейчас, а модуль о жалобах добавляет LAST (выслушать, извиниться, решить, поблагодарить) и правило отвечать на повышенный тон тише и медленнее. Отстаивать «безошибочность» системы, заставлять спешащего гостя ждать или просить оплатить и разбираться потом — прямой путь к жалобе и плохому отзыву.',
      uz: 'Chiqishning oltin qoidasi — summa va xarajat moddalarini ovoz chiqarib aytish va bahsli moddani shu yerning o\'zida hal qilish, shikoyatlar moduli esa LAST (tinglash, uzr so\'rash, hal qilish, rahmat aytish) va baland ohangga pastroq va sekinroq javob berish qoidasini qo\'shadi. Tizimning «xatosizligi»ni himoya qilish, shoshayotgan mehmonni kutdirish yoki to\'lab, keyin hal qilishni so\'rash — shikoyat va yomon sharhga to\'g\'ri yo\'l.',
      en: 'The check-out golden rule is to state the amount and each charge and resolve a disputed item here and now, and the complaints module adds LAST (Listen, Apologize, Solve, Thank) and the rule to answer a raised voice more quietly and slowly. Defending the system as "error-free", making a rushed guest wait or asking him to pay and sort it out later is a direct route to a complaint and a bad review.',
    },
  },
  {
    id: 'final-mc-04',
    type: 'choice',
    moduleSlugs: ['whatsapp-communication', 'early-checkin'],
    scenario: {
      ru: '09:15. Гость, который заезжает сегодня, пишет в WhatsApp: «Приземляемся в 10:00. Можно заселиться в 11:00? И есть ли трансфер из аэропорта?» Чтобы ответить, вам нужно уточнить готовность номера у горничных и свободен ли водитель — это займёт около 20 минут.',
      uz: 'Soat 09:15. Bugun keladigan mehmon WhatsApp\'ga yozadi: «Soat 10:00 da qo\'namiz. 11:00 da joylashsak bo\'ladimi? Aeroportdan transfer bormi?» Javob berish uchun xona tayyorligini farroshlardan va haydovchi bo\'shligini aniqlashingiz kerak — bu taxminan 20 daqiqa oladi.',
      en: '09:15. A guest arriving today writes on WhatsApp: "Landing at 10:00. Could we check in at 11:00? And is there an airport transfer?" To answer, you need to check room readiness with housekeeping and whether the driver is free — that will take about 20 minutes.',
    },
    question: {
      ru: 'Какой ответ будет правильным?',
      uz: 'Qaysi javob to\'g\'ri bo\'ladi?',
      en: 'Which reply is correct?',
    },
    options: [
      {
        ru: 'Дождаться ответа горничных и водителя и примерно в 09:35 отправить одно полное и точное сообщение, чтобы гость получил всё сразу.',
        uz: 'Farroshlar va haydovchidan javob kutib, taxminan 09:35 da bitta to\'liq va aniq xabar yuborish, shunda mehmon hammasini birdaniga oladi.',
        en: 'Wait for housekeeping and the driver, then send one complete, accurate message at about 09:35 so the guest gets everything at once.',
      },
      {
        ru: 'Сразу ответить, что сообщение получено, вы уточняете номер и водителя и вернётесь с ответом в течение 20 минут.',
        uz: 'Darhol xabar olinganini, xona va haydovchini aniqlashtirayotganingizni va 20 daqiqa ichida javob bilan qaytishingizni yozish.',
        en: 'Reply at once that you have his message, are checking the room and the driver, and will get back to him within 20 minutes.',
      },
      {
        ru: 'Сразу честно ответить: «Ранний заезд не гарантирован, стандартное заселение с 14:00», чтобы гость не рассчитывал зря.',
        uz: 'Darhol halol javob berish: «Erta joylashish kafolatlanmagan, standart joylashish 14:00 dan», shunda mehmon bekorga umid qilmaydi.',
        en: 'Reply honestly right away: "Early check-in is not guaranteed, standard check-in is from 14:00", so the guest doesn\'t count on it.',
      },
      {
        ru: 'Сразу отправить подробное сообщение со всеми категориями номеров, ценами на трансфер, временем завтрака и правилами отмены.',
        uz: 'Darhol barcha xona toifalari, transfer narxlari, nonushta vaqti va bekor qilish qoidalari bilan batafsil xabar yuborish.',
        en: 'Immediately send a detailed message with all room categories, transfer prices, breakfast hours and the cancellation policy.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'В мессенджере гость ждёт почти мгновенной реакции: если ответ требует уточнения, нужно сразу написать об этом и назвать срок, а не оставлять сообщение без ответа. Односложный отказ без альтернативы и «стена текста» — ошибки из модуля WhatsApp.',
      uz: 'Messenjerda mehmon deyarli zudlik bilan javob kutadi: agar javob aniqlashtirishni talab qilsa, buni darhol yozib, muddatni aytish kerak, xabarni javobsiz qoldirish emas. Muqobilsiz bir so\'zli rad javobi va «matn devori» — WhatsApp modulidagi xatolar.',
      en: 'In a messenger the guest expects an almost instant reaction: if the answer needs checking, say so right away and give a time frame instead of leaving the message unanswered. A one-line refusal with no alternative and a "wall of text" are mistakes from the WhatsApp module.',
    },
  },
  {
    id: 'final-mc-05',
    type: 'choice',
    moduleSlugs: ['walk-in-guests', 'upselling-rooms'],
    scenario: {
      ru: '22:30. В отель без брони заходит пара — уставшие, с одним чемоданом; в разговоре упоминают, что сегодня у них годовщина. В системе на эту ночь свободны только Superior за 480 000 сум и один Junior Suite за 650 000 сум, завтрак включён в оба. Стандартные номера распроданы.',
      uz: 'Soat 22:30. Mehmonxonaga bronsiz bir juftlik kiradi — charchagan, bitta chamadon bilan; suhbatda bugun ularning to\'y yilligi ekanini aytishadi. Tizimda bu kechaga faqat 480 000 so\'mlik Superior va 650 000 so\'mlik bitta Junior Suite bo\'sh, ikkalasida ham nonushta kiritilgan. Standart xonalar sotilib bo\'lgan.',
      en: '22:30. A couple walks in without a reservation — tired, with one suitcase; in conversation they mention it\'s their anniversary today. For tonight the system shows only Superior rooms at 480,000 sum and one Junior Suite at 650,000 sum, breakfast included in both. Standard rooms are sold out.',
    },
    question: {
      ru: 'Как лучше всего представить варианты?',
      uz: 'Variantlarni qanday taqdim etgan ma\'qul?',
      en: 'What is the best way to present the options?',
    },
    options: [
      {
        ru: 'Уточнить ночи и число гостей, предложить Superior за 480 000 сум с завтраком, а ради годовщины упомянуть Junior Suite: на 170 000 дороже и чем он лучше.',
        uz: 'Kecha va mehmonlar sonini aniqlab, nonushta bilan 480 000 so\'mlik Superior\'ni taklif qilish, to\'y yilligi uchun esa Junior Suite\'ni eslatish: 170 000 qimmatroq va nimasi yaxshiroq.',
        en: 'Confirm nights and guests, offer the Superior at 480,000 sum with breakfast, and for the anniversary mention the Junior Suite: 170,000 more and why it\'s worth it.',
      },
      {
        ru: 'Извиниться, что «остались только дорогие номера», назвать Superior за 480 000 сум с завтраком и не упоминать Junior Suite, чтобы не смущать пару ещё большей суммой.',
        uz: '«Faqat qimmat xonalar qolgani» uchun uzr so\'rab, nonushta bilan 480 000 so\'mlik Superior\'ni aytish va juftlikni yanada katta summa bilan noqulay ahvolga solmaslik uchun Junior Suite\'ni eslatmaslik.',
        en: 'Apologise that "only the expensive rooms are left", quote the Superior at 480,000 sum with breakfast and leave out the Junior Suite so as not to embarrass them with a higher price.',
      },
      {
        ru: 'Раз у них годовщина, предложить только Junior Suite за 650 000 сум с завтраком и поздним выездом и не говорить о Superior, чтобы пара не выбрала номер дешевле.',
        uz: 'To\'y yilligi bo\'lgani uchun faqat nonushta va kech chiqish bilan 650 000 so\'mlik Junior Suite\'ni taklif qilish va juftlik arzonroq xonani tanlamasligi uchun Superior haqida gapirmaslik.',
        en: 'Since it\'s their anniversary, offer only the Junior Suite at 650,000 sum with breakfast and late check-out, and don\'t mention the Superior so they don\'t pick the cheaper room.',
      },
      {
        ru: 'Перечислить все категории номеров, доплату за завтрак, поздний выезд и спа-пакеты, чтобы у гостей сразу была полная картина.',
        uz: 'Mehmonlar darhol to\'liq tasavvurga ega bo\'lishi uchun barcha xona toifalari, nonushta uchun qo\'shimcha to\'lov, kech chiqish va spa-paketlarni sanab o\'tish.',
        en: 'List every room category, the breakfast supplement, late check-out and spa packages so the guests have the full picture straight away.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Гостю без брони предлагают один-два конкретных варианта с чёткой ценой, уточнив ночи и гостей, а апселлинг строится на сигналах гостя (годовщина) и звучит как совет: цена, разница, преимущество. Скрывать вариант, извиняться за цену или вываливать список допродаж — ошибки из обоих модулей.',
      uz: 'Bronsiz mehmonga kecha va mehmonlar sonini aniqlab, aniq narx bilan bir-ikkita variant taklif qilinadi, upselling esa mehmon belgilariga (to\'y yilligi) asoslanadi va maslahatdek yangraydi: narx, farq, afzallik. Variantni yashirish, narx uchun uzr so\'rash yoki qo\'shimcha sotuvlar ro\'yxatini to\'kib solish — ikkala moduldagi xatolar.',
      en: 'A walk-in guest is offered one or two concrete options with a clear price after confirming nights and guests, and an upsell builds on the guest\'s cues (the anniversary) and sounds like advice: price, difference, benefit. Hiding an option, apologising for the price or dumping a list of add-ons are mistakes from both modules.',
    },
  },
  {
    id: 'final-mc-06',
    type: 'choice',
    moduleSlugs: ['booking-com-guests', 'check-in'],
    scenario: {
      ru: 'При заселении гость с бронью через Booking.com показывает на телефоне сайт отеля: сегодня тот же тип номера на те же даты стоит на 10 % дешевле, чем он заплатил. Он не скандалит, но явно смущён и спрашивает: «Получается, меня обманули?» Его тариф — невозвратный, оплачен месяц назад.',
      uz: 'Ro\'yxatdan o\'tkazishda Booking.com orqali bron qilgan mehmon telefonida mehmonxona saytini ko\'rsatadi: bugun o\'sha xona turi o\'sha sanalarga u to\'laganidan 10 % arzon turibdi. U janjal qilmaydi, lekin aniq noqulay his qilib so\'raydi: «Demak, meni aldashdimi?» Uning tarifi — qaytarilmaydigan, bir oy oldin to\'langan.',
      en: 'At check-in, a Booking.com guest shows you the hotel\'s own website on his phone: today the same room type for the same dates is 10% cheaper than what he paid. He isn\'t making a scene, but he is clearly embarrassed and asks: "So I got ripped off?" His rate is non-refundable, paid a month ago.',
    },
    question: {
      ru: 'Какой ответ будет правильным?',
      uz: 'Qaysi javob to\'g\'ri bo\'ladi?',
      en: 'Which answer is correct?',
    },
    options: [
      {
        ru: 'Объяснить, что Booking.com добавляет сверху свою комиссию 15–18 %, поэтому там всегда дороже, чем на сайте отеля, и посоветовать в следующий раз бронировать напрямую.',
        uz: 'Booking.com o\'zining 15–18 % komissiyasini ustiga qo\'shishini, shuning uchun u yerda doim mehmonxona saytidan qimmatroq ekanini tushuntirib, keyingi safar to\'g\'ridan-to\'g\'ri bron qilishni maslahat berish.',
        en: 'Explain that Booking.com adds a 15–18% commission on top, so its price is always higher than the hotel website\'s, and advise him to book directly with the hotel next time.',
      },
      {
        ru: 'Извиниться за разницу и сразу предложить сегодня же вернуть 10 % на карту гостя, чтобы он не уехал с ощущением обмана и не оставил негативный отзыв.',
        uz: 'Farq uchun uzr so\'rab, mehmon aldangandek his qilib ketmasligi va salbiy sharh qoldirmasligi uchun darhol bugunoq 10 % ni kartasiga qaytarishni taklif qilish.',
        en: 'Apologise for the difference and offer to refund the 10% to his card today, so he doesn\'t leave feeling cheated or post a negative review.',
      },
      {
        ru: 'Спокойно объяснить, что цены зависят от даты бронирования и спроса, заверить, что его тариф оформлен корректно, и упомянуть, что напрямую условия лучше.',
        uz: 'Narxlar bron qilingan sana va talabga bog\'liqligini xotirjam tushuntirib, tarifi to\'g\'ri rasmiylashtirilganiga ishontirish va to\'g\'ridan-to\'g\'ri bronda shartlar yaxshiroq ekanini eslatish.',
        en: 'Calmly explain that prices move with booking date and demand, assure him his rate was set correctly when he booked, and mention that booking direct gets the best terms.',
      },
      {
        ru: 'Сказать, что цены устанавливает отдел продаж, а не ресепшен, и дать гостю номер поддержки Booking.com, чтобы он выяснил, почему там было дороже.',
        uz: 'Narxlarni resepshen emas, sotuv bo\'limi belgilashini aytib, mehmonga u yerda nega qimmatroq bo\'lganini aniqlashi uchun Booking.com qo\'llab-quvvatlash raqamini berish.',
        en: 'Say that prices are set by the revenue team, not by reception, and give him the Booking.com support number so he can ask them why he paid more on their platform.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Модуль требует объяснять разницу в цене (паритет тарифов) спокойно, не критикуя платформу и не смущая гостя: цены динамичны, а его тариф и условия зафиксированы в момент бронирования; приглашение бронировать напрямую в следующий раз — стандартный способ превратить OTA-гостя в прямого. Критика Booking.com, необоснованный возврат и перекладывание вопроса на платформу — ошибки.',
      uz: 'Modul narx farqini (tarif paritetini) platformani tanqid qilmasdan va mehmonni noqulay ahvolga solmasdan xotirjam tushuntirishni talab qiladi: narxlar dinamik, uning tarifi va shartlari esa bron qilingan paytda qayd etilgan; keyingi safar to\'g\'ridan-to\'g\'ri bron qilishga taklif — OTA mehmonini to\'g\'ridan-to\'g\'ri mehmonga aylantirishning standart usuli. Booking.com\'ni tanqid qilish, asossiz qaytarish va masalani platformaga yuklash — xatolar.',
      en: 'The module requires explaining a price difference (rate parity) calmly, without criticising the platform or embarrassing the guest: prices are dynamic, and his rate and conditions were fixed when he booked; inviting a direct booking next time is the standard way to turn an OTA guest into a direct one. Criticising Booking.com, an unjustified refund and deflecting to the platform are all mistakes.',
    },
  },
  {
    id: 'final-mc-07',
    type: 'choice',
    moduleSlugs: ['lost-items', 'whatsapp-communication'],
    scenario: {
      ru: '13:00. Гостья, выехавшая в 10:00 и уже находящаяся в аэропорту, пишет в WhatsApp: «Кажется, я оставила в номере 507 зарядку и папку с документами. Помогите, пожалуйста!» Номер уже убран, горничная на другом этаже, хаускипинг пока ничего не передавал на ресепшен.',
      uz: 'Soat 13:00. Soat 10:00 da chiqib ketgan va allaqachon aeroportda bo\'lgan mehmon ayol WhatsApp\'ga yozadi: «Aftidan, 507-xonada zaryadlovchi va hujjatlar solingan papkani qoldiribman. Iltimos, yordam bering!» Xona allaqachon tozalangan, farrosh boshqa qavatda, xo\'jalik xizmati hozircha resepshenga hech narsa topshirmagan.',
      en: '13:00. A guest who checked out at 10:00 and is already at the airport writes on WhatsApp: "I think I left my charger and a folder of documents in room 507. Please help!" The room has already been cleaned, the housekeeper is on another floor, and housekeeping has not handed anything in to reception yet.',
    },
    question: {
      ru: 'Какой первый шаг будет правильным?',
      uz: 'Qaysi birinchi qadam to\'g\'ri bo\'ladi?',
      en: 'Which first step is correct?',
    },
    options: [
      {
        ru: 'Ответить, что хаускипинг ничего не передавал, значит, вещей в отеле, скорее всего, нет, и посоветовать проверить ручную кладь и карманы сумки.',
        uz: 'Xo\'jalik xizmati hech narsa topshirmaganini, demak, buyumlar mehmonxonada bo\'lmasa kerakligini yozib, qo\'l yuki va sumka cho\'ntaklarini tekshirishni maslahat berish.',
        en: 'Reply that housekeeping has handed nothing in, so the items are most likely not in the hotel, and suggest she checks her hand luggage and bag pockets.',
      },
      {
        ru: 'Сначала лично подняться в номер 507 и осмотреть его, а затем примерно через 30 минут ответить гостье с полной и проверенной информацией.',
        uz: 'Avval shaxsan 507-xonaga ko\'tarilib, uni ko\'zdan kechirish, so\'ngra taxminan 30 daqiqadan keyin mehmonga to\'liq va tekshirilgan ma\'lumot bilan javob berish.',
        en: 'Go up to room 507 yourself first and search it, then reply to the guest in about 30 minutes with complete, verified information.',
      },
      {
        ru: 'Попросить гостью позвонить на ресепшен или заполнить форму по e-mail, так как заявки о забытых вещах через WhatsApp официально не регистрируются.',
        uz: 'Unutilgan buyumlar haqidagi so\'rovlar WhatsApp orqali rasman ro\'yxatga olinmagani uchun mehmondan resepshenga qo\'ng\'iroq qilishni yoki e-mail orqali shakl to\'ldirishni so\'rash.',
        en: 'Ask her to phone reception or fill in the e-mail form, since lost-item requests are not officially registered via WhatsApp.',
      },
      {
        ru: 'Сразу ответить, что сообщение получено и вы уже уточняете у хаускипинга, зафиксировать заявку и спросить, как ей удобнее получить вещи.',
        uz: 'Darhol xabar olinganini va xo\'jalik xizmatidan aniqlashtirayotganingizni yozish, so\'rovni qayd qilish va buyumlarni qanday olish qulayligini so\'rash.',
        en: 'Reply at once that you got her message and are checking with housekeeping now, log the request, and ask how she\'d like the items returned.',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Стандарт WhatsApp — мгновенно подтвердить получение и назвать следующий шаг, а стандарт работы с забытыми вещами — зафиксировать заявку, проверить номер и хаускипинг и хранить вещи до возврата владельцу. Молчание «пока проверяешь» или отказ по формальным причинам оставляют гостью без помощи.',
      uz: 'WhatsApp standarti — olinganini zudlik bilan tasdiqlash va keyingi qadamni aytish, unutilgan buyumlar bilan ishlash standarti esa — so\'rovni qayd qilish, xona va xo\'jalik xizmatini tekshirish hamda egasiga qaytarilguncha saqlash. «Tekshirayotganda» jim turish yoki rasmiy sabab bilan rad etish mehmonni yordamsiz qoldiradi.',
      en: 'The WhatsApp standard is to confirm receipt instantly and name the next step, and the lost-items standard is to log the request, check the room and housekeeping, and store the items until they are returned to the owner. Staying silent "while you check" or refusing on formal grounds leaves the guest without help.',
    },
  },
  {
    id: 'final-mc-08',
    type: 'choice',
    moduleSlugs: ['greeting-guests', 'vip-guests', 'foreign-guests'],
    scenario: {
      ru: '15:00. К стойке подходит господин Танака — постоянный VIP-гость, четвёртый визит; в его профиле отмечено: предпочитает тихий номер на высоком этаже, в прошлый раз жаловался на шум. По-английски говорит с трудом, по-русски не говорит. Вы как раз дописываете заметку в системе.',
      uz: 'Soat 15:00. Stoykaga janob Tanaka keladi — doimiy VIP mehmon, to\'rtinchi tashrifi; profilida: yuqori qavatdagi tinch xonani afzal ko\'radi, o\'tgan safar shovqindan shikoyat qilgan. Inglizchada qiynalib gapiradi, ruschani bilmaydi. Siz ayni paytda tizimda eslatmani yozib tugatyapsiz.',
      en: '15:00. Mr. Tanaka approaches the desk — a regular VIP guest on his fourth visit; his profile notes that he prefers a quiet room on a high floor and complained about noise last time. His English is limited and he speaks no Russian. You are just finishing a note in the system.',
    },
    question: {
      ru: 'Какое приветствие будет правильным?',
      uz: 'Qaysi kutib olish to\'g\'ri bo\'ladi?',
      en: 'Which greeting is correct?',
    },
    options: [
      {
        ru: 'Сначала дописать заметку — это займёт секунд 30, зато в VIP-профиле не будет ошибки, — затем поднять глаза, улыбнуться и спросить: «Да, чем могу помочь?»',
        uz: 'Avval eslatmani yozib tugatish — bu 30 soniyacha oladi, lekin VIP-profilda xato bo\'lmaydi, — so\'ngra ko\'z ko\'tarib, tabassum qilib: «Ha, qanday yordam bera olaman?» deb so\'rash.',
        en: 'Finish the note first so there\'s no mistake in his VIP profile — it takes about 30 seconds — then look up, smile and ask: "Yes, how can I help?"',
      },
      {
        ru: 'Сразу поднять глаза, улыбнуться, поприветствовать гостя по имени, представиться и медленно, простыми словами подтвердить, что тихий номер на высоком этаже готов.',
        uz: 'Darhol ko\'z ko\'tarib, tabassum qilib, mehmonni ismi bilan kutib olish, o\'zingizni tanishtirish va sekin, sodda so\'zlar bilan yuqori qavatdagi tinch xona tayyorligini tasdiqlash.',
        en: 'Look up at once, smile, welcome him back by name and introduce yourself, then, slowly and simply, confirm that his quiet high-floor room is ready.',
      },
      {
        ru: 'Тепло сказать «С возвращением!» и сразу подробно рассказать про Wi-Fi, завтрак, часы работы спа и то, что прошлую проблему с шумом устранили, чтобы гость не переживал.',
        uz: 'Iliq «Yana xush kelibsiz!» deb, mehmon xavotirlanmasligi uchun darhol Wi-Fi, nonushta, spa ish vaqti va o\'tgan safargi shovqin muammosi bartaraf etilgani haqida batafsil gapirib berish.',
        en: 'Say a warm "Welcome back!" and at once explain in detail the Wi-Fi, breakfast, spa hours and that last visit\'s noise problem is fixed, so he doesn\'t worry.',
      },
      {
        ru: 'Позвать к стойке коллегу, который немного говорит по-японски, и отойти, чтобы VIP-гостю было комфортнее общаться на родном языке.',
        uz: 'Stoykaga biroz yaponcha biladigan hamkasbni chaqirib, VIP mehmon ona tilida bemalol gaplashishi uchun chetga o\'tish.',
        en: 'Call a colleague who speaks some Japanese to the desk and step aside, so the VIP guest can communicate comfortably in his own language.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Стандарт приветствия: поднять взгляд и поприветствовать в первые 10 секунд, представиться и использовать имя гостя, а постоянного VIP-гостя — узнать и опереться на историю его предпочтений (тихий номер на высоком этаже). Модуль об иностранных гостях добавляет: говорить медленно и просто, а не перекладывать гостя на коллегу без приветствия.',
      uz: 'Kutib olish standarti: birinchi 10 soniyada ko\'z ko\'tarib salomlashish, o\'zini tanishtirish va mehmon ismini ishlatish, doimiy VIP mehmonni esa tanib, afzalliklar tarixiga (yuqori qavatdagi tinch xona) tayanish. Chet ellik mehmonlar moduli qo\'shimcha qiladi: sekin va sodda gapirish, mehmonni salomlashmasdan hamkasbga o\'tkazib yubormaslik.',
      en: 'The greeting standard: look up and greet within the first 10 seconds, introduce yourself and use the guest\'s name, and for a returning VIP recognise him and draw on his preference history (a quiet high-floor room). The foreign-guests module adds: speak slowly and simply rather than handing him to a colleague without a greeting.',
    },
  },
  {
    id: 'final-mc-09',
    type: 'choice',
    moduleSlugs: ['upselling-rooms', 'late-checkout'],
    scenario: {
      ru: 'При заселении гость с бронью стандартного номера на две ночи. Вы предложили делюкс с видом на бассейн за 15 долларов доплаты — он вежливо отказался: «Спасибо, стандарта достаточно». Пока вы выдаёте ключ, он упоминает, что обратный рейс в день выезда только в 23:00, а выезд из отеля — до 12:00.',
      uz: 'Ro\'yxatdan o\'tkazishda ikki kechaga standart xona bron qilgan mehmon. Siz 15 dollar qo\'shimcha to\'lov bilan basseyn manzarali delyuksni taklif qildingiz — u muloyimlik bilan rad etdi: «Rahmat, standart yetarli». Kalitni berayotganingizda u chiqish kuni qaytish reysi faqat 23:00 da ekanini, mehmonxonadan chiqish esa 12:00 gacha ekanini aytadi.',
      en: 'At check-in, a guest with a two-night standard room booking. You offered a pool-view deluxe for $15 more — he politely declined: "Thanks, standard is fine." As you hand over the key he mentions that his return flight on departure day isn\'t until 23:00, while hotel check-out is by 12:00.',
    },
    question: {
      ru: 'Как правильно поступить дальше?',
      uz: 'Keyin qanday yo\'l tutish to\'g\'ri?',
      en: 'What is the right thing to do next?',
    },
    options: [
      {
        ru: 'Учитывая поздний рейс, один раз предложить поздний выезд: проверить загрузку, заранее назвать доплату и упомянуть бесплатное хранение багажа как запасной вариант.',
        uz: 'Kech reysni hisobga olib, kech chiqishni bir marta taklif qilish: bandlikni tekshirish, to\'lovni oldindan aytish va zaxira sifatida bepul yuk saqlashni eslatish.',
        en: 'Given his late flight, offer late check-out once: check occupancy for that day, state the fee upfront, and mention free luggage storage as a fallback.',
      },
      {
        ru: 'Ещё раз вернуться к делюксу и объяснить, что всего за 15 долларов в просторном номере с видом на бассейн будет гораздо удобнее провести долгий последний день.',
        uz: 'Delyuksga yana bir bor qaytib, atigi 15 dollarga basseyn manzarali keng xonada uzun oxirgi kunni o\'tkazish ancha qulayroq bo\'lishini tushuntirish.',
        en: 'Return to the deluxe once more and explain that for just $15 a spacious pool-view room will make the long last day before his night flight far more comfortable.',
      },
      {
        ru: 'Больше ничего не предлагать: гость уже отказался один раз, и любое новое предложение при заселении покажется навязчивым и испортит ему первое впечатление от отеля.',
        uz: 'Boshqa hech narsa taklif qilmaslik: mehmon allaqachon bir marta rad etdi, endi har qanday yangi taklif majburlashdek (qistovdek) tuyuladi va birinchi taassurotni buzadi.',
        en: 'Offer nothing more: he has already declined once, and after a refusal any new offer at check-in will look pushy and may spoil his first impression.',
      },
      {
        ru: 'Предложить сразу поздний выезд, трансфер в аэропорт и апгрейд завтрака с ценами, чтобы гость сам выбрал, что больше подходит к его позднему рейсу.',
        uz: 'Mehmon kech reysiga nima ko\'proq mos kelishini o\'zi tanlashi uchun kech chiqish, aeroportga transfer va nonushta apgreydini narxlari bilan birdaniga taklif qilish.',
        en: 'Offer late check-out, an airport transfer and a breakfast upgrade all at once, with prices, so he can pick whatever best suits his late flight.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Правило «один вежливый отказ — стоп» касается отклонённого предложения: делюкс больше не упоминают, но поздний рейс делает поздний выезд уместным советом, и предлагают его один, а не списком. Модуль о позднем выезде требует сначала проверить загрузку, честно и заранее назвать доплату и, если продлить нельзя, предложить бесплатное хранение багажа — никогда не обещая того, что можно не выполнить.',
      uz: '«Bir marta muloyim rad — to\'xtash» qoidasi rad etilgan taklifga tegishli: delyuks boshqa eslatilmaydi, lekin kech reys kech chiqishni o\'rinli maslahatga aylantiradi va u ro\'yxat qilib emas, yakka holda taklif qilinadi. Kech chiqish moduli avval bandlikni tekshirish, qo\'shimcha to\'lovni halol va oldindan aytish va uzaytirib bo\'lmasa, bepul yuk saqlashni taklif qilishni talab qiladi — bajarolmasligingiz mumkin bo\'lgan va\'dani hech qachon bermang.',
      en: 'The rule "one polite decline means stop" applies to the declined offer: the deluxe is not mentioned again, but a late flight makes late check-out relevant advice, offered on its own rather than as a list. The late-checkout module requires checking occupancy first, stating any fee honestly and upfront, and offering free luggage storage if the stay cannot be extended — never promising what you might not be able to deliver.',
    },
  },
  {
    id: 'final-mc-10',
    type: 'choice',
    moduleSlugs: ['phone-communication', 'walk-in-guests'],
    scenario: {
      ru: '21:00, отель полностью занят на сегодня. Звонит телефон: женщина с вокзала взволнованно спрашивает, есть ли у вас номер на эту ночь для неё и ребёнка. Вы ответили по стандарту — назвали отель и своё имя.',
      uz: 'Soat 21:00, mehmonxona bugunga to\'liq band. Telefon jiringlaydi: vokzaldan bir ayol hayajon bilan o\'zi va bolasi uchun bu kechaga xona bor-yo\'qligini so\'raydi. Siz standart bo\'yicha javob berdingiz — mehmonxona nomi va o\'z ismingizni aytdingiz.',
      en: '21:00, the hotel is fully booked for tonight. The phone rings: a woman at the railway station anxiously asks whether you have a room for her and her child for tonight. You answered by the standard — hotel name and your own name.',
    },
    question: {
      ru: 'Как правильно продолжить разговор?',
      uz: 'Suhbatni qanday davom ettirish to\'g\'ri?',
      en: 'How should you continue the call?',
    },
    options: [
      {
        ru: 'Вежливо сказать: «К сожалению, на сегодня мест нет», извиниться, пожелать хорошего вечера и, как требует этикет, дождаться, пока она положит трубку первой.',
        uz: 'Muloyimlik bilan: «Afsuski, bugunga joy yo\'q» deb, uzr so\'rash, xayrli kech tilash va odob talab qilganidek, u birinchi bo\'lib trubkani qo\'yguncha kutish.',
        en: 'Politely say "Unfortunately we are full tonight", apologise, wish her a good evening and, as phone etiquette requires, wait for her to hang up first.',
      },
      {
        ru: 'Записать её имя и телефон и пообещать перезвонить до 23:00, если кто-то из гостей отменит бронь или не приедет, чтобы у неё был шанс получить номер.',
        uz: 'Uning ismi va telefonini yozib olib, biror mehmon bronini bekor qilsa yoki kelmasa, joy olish imkoni bo\'lishi uchun soat 23:00 gacha qayta qo\'ng\'iroq qilishga va\'da berish.',
        en: 'Take her name and number and promise to call back by 23:00 if any guest cancels or doesn\'t show up, so she still has a chance of a room here.',
      },
      {
        ru: 'Уточнить детали (эта ночь, двое гостей), извиниться, что мест нет, и предложить лично позвонить в партнёрский отель рядом, а затем дать ей его номер.',
        uz: 'Tafsilotlarni aniqlab (bu kecha, ikki mehmon), joy yo\'qligi uchun uzr so\'rash, yaqindagi hamkor mehmonxonaga o\'zingiz qo\'ng\'iroq qilishni taklif qilish va uning raqamini berish.',
        en: 'Confirm the details (tonight, two guests), apologise that you are full, offer to call the partner hotel nearby for her, then give her its number.',
      },
      {
        ru: 'Посоветовать поискать варианты поблизости на Booking.com — наличие там обновляется в реальном времени — и сказать, что она может перезвонить, если будут вопросы.',
        uz: 'Yaqin atrofdagi variantlarni Booking.com\'dan qidirishni maslahat berish — u yerda mavjudlik real vaqtda yangilanadi — va savollar bo\'lsa, qayta qo\'ng\'iroq qilishi mumkinligini aytish.',
        en: 'Advise her to search nearby on Booking.com — availability there updates in real time — and say she is welcome to call back if she has any questions.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Правило модуля о гостях без брони: никогда не говорить просто «мест нет» — предложить партнёрский отель и помочь связаться с ним. По телефону это дополняется повторением ключевых деталей и чётким завершением разговора с конкретным решением, а не обещанием «перезвонить, если что».',
      uz: 'Bronsiz mehmonlar modulining qoidasi: hech qachon shunchaki «joy yo\'q» demang — hamkor mehmonxonani taklif qiling va u bilan bog\'lanishga yordam bering. Telefonda bunga asosiy tafsilotlarni takrorlash va suhbatni «biror narsa bo\'lsa, qo\'ng\'iroq qilaman» degan va\'da bilan emas, aniq yechim bilan yakunlash qo\'shiladi.',
      en: 'The walk-in module\'s rule: never just say "we\'re full" — recommend a partner hotel and help the guest get in touch with them. On the phone this is combined with repeating the key details and closing the call clearly with a concrete solution, not a promise to "call back if something comes up".',
    },
  },
  {
    id: 'final-mc-11',
    type: 'choice',
    moduleSlugs: ['check-in', 'check-out'],
    scenario: {
      ru: '22:00. Гостья заселяется на одну ночь и сразу говорит, что у неё рейс в 06:00 и выйти из отеля нужно в 04:30. Ночной портье будет на месте, но с 03:00 до 04:00 проводится ночной аудит, и касса в это время работает с ограничениями.',
      uz: 'Soat 22:00. Mehmon ayol bir kechaga joylashmoqda va darhol reysi 06:00 da ekanini, mehmonxonadan 04:30 da chiqishi kerakligini aytadi. Tungi portye joyida bo\'ladi, lekin 03:00 dan 04:00 gacha tungi audit o\'tkaziladi va kassa bu vaqtda cheklovlar bilan ishlaydi.',
      en: '22:00. A guest is checking in for one night and says straight away that her flight is at 06:00 and she needs to leave the hotel at 04:30. The night porter will be on duty, but the night audit runs from 03:00 to 04:00 and the cash desk operates with restrictions during that time.',
    },
    question: {
      ru: 'Как правильно провести заселение в этой ситуации?',
      uz: 'Bu vaziyatda ro\'yxatdan o\'tkazishni qanday o\'tkazish to\'g\'ri?',
      en: 'How should you handle the check-in in this situation?',
    },
    options: [
      {
        ru: 'Провести стандартное заселение и сказать, что в 04:30 ночной портье подготовит счёт и примет оплату, а такси гостья закажет сама утром.',
        uz: 'Standart ro\'yxatdan o\'tkazishni o\'tkazib, soat 04:30 da tungi portye hisobni tayyorlab, to\'lovni qabul qilishini, taksini esa mehmon ertalab o\'zi chaqirishini aytish.',
        en: 'Run a standard check-in and say the night porter will prepare the bill and take payment at 04:30, leaving her to order a taxi herself in the morning.',
      },
      {
        ru: 'Провести краткий инструктаж и предложить экспресс-выезд: закрыть счёт сегодня, чтобы в 04:30 просто оставить ключ, и предложить заказать такси.',
        uz: 'Qisqa ma\'lumot berib, ekspress chiqishni taklif qilish: hisobni bugun yopish, shunda 04:30 da shunchaki kalitni qoldiradi, va taksi buyurtma qilishni taklif qilish.',
        en: 'Give the short briefing and offer express check-out: settle the bill tonight so she can just leave the key at 04:30, and offer to book a taxi.',
      },
      {
        ru: 'Пропустить рассказ про завтрак и Wi-Fi — она всё равно ими не воспользуется, — быстро выдать ключ и попросить ночного портье разбудить её в 04:00.',
        uz: 'Nonushta va Wi-Fi haqida gapirmaslik — u baribir ulardan foydalanmaydi, — kalitni tez berib, tungi portyedan uni soat 04:00 da uyg\'otishni so\'rash.',
        en: 'Skip the breakfast and Wi-Fi briefing as she won\'t use them, hand over the key quickly so she can rest, and ask the night porter to wake her at 04:00.',
      },
      {
        ru: 'Попросить гостью подписать пустой слип для карты, чтобы ночная смена могла списать минибар и прочее после её отъезда и не задерживать её в 04:30.',
        uz: 'Tungi smena u ketganidan keyin minibar va boshqalarni yechib olishi va uni 04:30 da ushlab qolmasligi uchun mehmondan bo\'sh karta slipiga imzo qo\'yishni so\'rash.',
        en: 'Ask her to sign a blank card slip so the night shift can charge the minibar and any extras after she leaves, saving her time at 04:30.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Модуль выезда рекомендует заранее предлагать экспресс-выезд (подтвердить счёт накануне и утром просто оставить ключ) и предлагать помощь с такси, а модуль заселения требует краткого инструктажа (завтрак, Wi-Fi, время выезда) и помощи с багажом. Откладывать всё на ночную смену или брать «пустой» слип — небезопасно и непрофессионально.',
      uz: 'Chiqish moduli ekspress chiqishni oldindan taklif qilishni (hisobni bir kun oldin tasdiqlab, ertalab shunchaki kalitni qoldirish) va taksi bilan yordam taklif qilishni tavsiya qiladi, ro\'yxatdan o\'tkazish moduli esa qisqa ma\'lumot (nonushta, Wi-Fi, chiqish vaqti) berish va yuk bilan yordamni talab qiladi. Hammasini tungi smenaga qoldirish yoki «bo\'sh» slip olish — xavfsiz emas va noprofessional.',
      en: 'The check-out module recommends offering express check-out in advance (confirm the bill the evening before and simply leave the key in the morning) and adds offering a taxi, while the check-in module requires a short briefing (breakfast, Wi-Fi, check-out time) and help with luggage. Leaving everything to the night shift or taking a "blank" slip is unsafe and unprofessional.',
    },
  },
  {
    id: 'final-mc-12',
    type: 'choice',
    moduleSlugs: ['check-out', 'booking-com-guests'],
    scenario: {
      ru: 'Утро, выезд. Гость с бронью через Booking.com спокоен, но заметно расстроен: на вторую ночь в его номере шумел кондиционер, он сообщил об этом, и проблему устранили только на следующее утро. Счёт корректен, доплат нет.',
      uz: 'Ertalab, chiqish. Booking.com orqali bron qilgan mehmon xotirjam, lekin sezilarli darajada xafa: ikkinchi kecha uning xonasida konditsioner shovqin qilgan, u bu haqda xabar bergan va muammo faqat ertasi kuni ertalab bartaraf etilgan. Hisob to\'g\'ri, qo\'shimcha to\'lovlar yo\'q.',
      en: 'Morning, check-out. A Booking.com guest is calm but visibly disappointed: on the second night the air conditioner in his room was noisy, he reported it, and the problem was fixed only the next morning. The bill is correct, with no extra charges.',
    },
    question: {
      ru: 'Как правильно завершить выезд?',
      uz: 'Chiqishni qanday yakunlash to\'g\'ri?',
      en: 'How should you close the check-out correctly?',
    },
    options: [
      {
        ru: 'Быстро провести оплату и не возвращаться к теме кондиционера, чтобы не напоминать о неприятном, а затем поблагодарить и пожелать хорошей дороги.',
        uz: 'To\'lovni tez o\'tkazib, noxush holatni eslatmaslik uchun konditsioner mavzusiga qaytmaslik, so\'ngra rahmat aytib, oq yo\'l tilash.',
        en: 'Process the payment quickly and don\'t raise the air conditioner again, so as not to remind him of it, then thank him and wish him a good trip.',
      },
      {
        ru: 'Поблагодарить за терпение и попросить поставить 10 из 10 на Booking.com, ведь о проблеме сообщили и к утру её устранили.',
        uz: 'Sabri uchun rahmat aytib, Booking.com\'da 10 dan 10 baho qo\'yishni so\'rash, axir muammo haqida xabar berilgan va ertalabgacha bartaraf etilgan.',
        en: 'Thank him for his patience and ask him to give 10 out of 10 on Booking.com, since the problem was reported and fixed by the next morning.',
      },
      {
        ru: 'По своей инициативе снять 50 % со счёта в качестве компенсации за шумную ночь, чтобы гость наверняка оставил хороший отзыв на Booking.com.',
        uz: 'Shovqinli kecha uchun kompensatsiya sifatida o\'z tashabbusingiz bilan hisobdan 50 % chegirma qilish, shunda mehmon Booking.com\'da albatta yaxshi sharh qoldiradi.',
        en: 'On your own initiative take 50% off the bill as compensation for the noisy night, so he is sure to leave a good review on Booking.com.',
      },
      {
        ru: 'Ещё раз извиниться за кондиционер, спросить, как прошло остальное пребывание, поблагодарить и пригласить оставить честный отзыв на Booking.com.',
        uz: 'Konditsioner uchun yana bir bor uzr so\'rash, qolgan vaqt qanday o\'tganini so\'rash, rahmat aytish va Booking.com\'da halol sharh qoldirishga taklif qilish.',
        en: 'Apologise once more for the air conditioner, ask how the rest of the stay was, thank him and invite an honest review on Booking.com.',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'На выезде обратную связь спрашивают искренне, а гостя с Booking.com приглашают оставить честный отзыв, не требуя высокой оценки. Замалчивать проблему, торговаться за оценку или «покупать» отзыв скидкой без полномочий — ошибки из модулей выезда и OTA-гостей.',
      uz: 'Chiqishda fikr-mulohaza samimiy so\'raladi, Booking.com mehmoni esa yuqori bahoni talab qilmasdan halol sharh qoldirishga taklif qilinadi. Muammoni yashirish, baho uchun savdolashish yoki vakolatsiz chegirma bilan sharhni «sotib olish» — chiqish va OTA mehmonlari modullaridagi xatolar.',
      en: 'At check-out, feedback is requested sincerely, and a Booking.com guest is invited to leave an honest review without demanding a high score. Hiding the problem, bargaining for a score or "buying" a review with an unauthorised discount are mistakes from the check-out and OTA-guest modules.',
    },
  },
  {
    id: 'final-mc-13',
    type: 'choice',
    moduleSlugs: ['emergency-procedures', 'phone-communication'],
    scenario: {
      ru: '02:30, ночная смена, и, кроме вас, на ресепшене никого нет (дежурный менеджер и охранник — в другой части здания). Звонит внутренний телефон: гостья из номера 318 испуганно говорит, что у мужа боль в груди и ему трудно дышать. В эту же минуту в лобби заходит человек с чемоданом и направляется к стойке.',
      uz: 'Soat 02:30, tungi smena; resepshenda o\'zingiz yolg\'izsiz (navbatchi menejer va qo\'riqchi binoning boshqa qismida). Ichki telefon jiringlaydi: 318-xonadagi mehmon ayol qo\'rqib, erining ko\'kragi og\'riyotganini va nafas olishi qiyinlashganini aytadi. Shu daqiqada lobbiga chamadonli bir kishi kirib, stoykaga yo\'naladi.',
      en: '02:30, night shift; you are the only one at reception (the duty manager and security are elsewhere in the building). The internal phone rings: a frightened guest in room 318 says her husband has chest pain and is struggling to breathe. At the same moment a man with a suitcase walks into the lobby and heads for the desk.',
    },
    question: {
      ru: 'Что нужно сделать в первую очередь?',
      uz: 'Birinchi navbatda nima qilish kerak?',
      en: 'What should you do first?',
    },
    options: [
      {
        ru: 'Вызвать скорую (103), сообщить дежурному менеджеру и отправить его или охрану в 318 с аптечкой, не оставляя стойку, а вошедшему гостю сказать, что скоро подойдёте.',
        uz: 'Tez yordam (103) chaqirish, navbatchi menejerga xabar berib, stoykani tashlab ketmasdan uni yoki qo\'riqchini birinchi yordam qutisi bilan 318-xonaga yuborish, kirgan mehmonga esa hozir qarashingizni aytish.',
        en: 'Call 103 at once, alert the duty manager and send them or security to room 318 with the first-aid kit while you hold the desk; tell the new guest you\'ll be right with him.',
      },
      {
        ru: 'Попросить вошедшего гостя подождать, записать симптомы мужа и пообещать, что врач отеля перезвонит в номер рано утром, когда выйдет на смену.',
        uz: 'Kirgan mehmondan kutishni so\'rash, erining alomatlarini yozib olish va mehmonxona shifokori ertalab smenaga kelganda xonaga qo\'ng\'iroq qilishiga va\'da berish.',
        en: 'Ask the arriving guest to wait, note down the husband\'s symptoms and promise that the hotel doctor will call the room early in the morning when on duty.',
      },
      {
        ru: 'Взять аптечку и лично подняться в номер 318, чтобы оценить состояние гостя на месте, и только потом решить, действительно ли нужна скорая.',
        uz: 'Birinchi yordam qutisini olib, mehmonning ahvolini joyida baholash uchun shaxsan 318-xonaga ko\'tarilish va shundan keyingina tez yordam haqiqatan kerakligini hal qilish.',
        en: 'Take the first-aid kit and go up to room 318 yourself to assess the husband\'s condition in person, and only then decide whether an ambulance is needed.',
      },
      {
        ru: 'Посоветовать гостье самой набрать 103 — так быстрее, чем через ресепшен, — и заняться вошедшим гостем, чтобы лобби ночью не оставалось без присмотра.',
        uz: 'Mehmon ayolga 103 ni o\'zi terishni maslahat berish — bu resepshen orqali qilgandan tezroq, — va tunda lobbi nazoratsiz qolmasligi uchun kirgan mehmon bilan shug\'ullanish.',
        en: 'Advise the caller to dial 103 herself — it\'s faster than going through reception — and deal with the arriving guest so the lobby isn\'t left unattended.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Модуль о чрезвычайных ситуациях требует при медицинском случае немедленно вызвать скорую, принести аптечку и оставаться с гостем до приезда медиков, но при этом никогда не оставлять стойку без сотрудника — поэтому помощь с аптечкой отправляют в номер, а вы держите стойку. Правило 10 секунд для вошедшего гостя соблюдается коротким «я скоро подойду», а не игнорированием.',
      uz: 'Favqulodda vaziyatlar moduli tibbiy holatda darhol tez yordam chaqirish, birinchi yordam qutisini olib borish va shifokorlar kelguncha mehmon yonida qolishni talab qiladi, lekin stoykani hech qachon xodimsiz qoldirmaslik kerak — shuning uchun yordam qutisi bilan xonaga boshqa xodim yuboriladi, siz esa stoykada qolasiz. Kirgan mehmon uchun 10 soniya qoidasi e\'tiborsiz qoldirish bilan emas, qisqa «hozir sizga qarayman» bilan bajariladi.',
      en: 'The emergency module says that in a medical situation you call an ambulance immediately, bring the first-aid kit and stay with the guest until medics arrive, yet never leave the front desk unstaffed — so help with the kit is sent to the room while you hold the desk. The 10-second rule for the arriving guest is met with a brief "I\'ll be right with you", not by ignoring him.',
    },
  },
  {
    id: 'final-mc-14',
    type: 'choice',
    moduleSlugs: ['whatsapp-communication', 'phone-communication'],
    scenario: {
      ru: 'Гость с бронью через Booking.com на две ночи звонит и просит продлить проживание ещё на одну ночь. Вы проверили наличие и устно договорились: третья ночь напрямую через отель, 400 000 сум с завтраком, гибкие условия отмены. Гость доволен и кладёт трубку.',
      uz: 'Booking.com orqali ikki kechaga bron qilgan mehmon qo\'ng\'iroq qilib, turar joyni yana bir kechaga uzaytirishni so\'raydi. Siz mavjudligini tekshirib, og\'zaki kelishdingiz: uchinchi kecha to\'g\'ridan-to\'g\'ri mehmonxona orqali, nonushta bilan 400 000 so\'m, moslashuvchan bekor qilish shartlari. Mehmon mamnun va trubkani qo\'yadi.',
      en: 'A guest with a two-night Booking.com reservation calls and asks to extend his stay by one more night. You checked availability and agreed verbally: the third night directly with the hotel, 400,000 sum with breakfast, flexible cancellation. The guest is happy and hangs up.',
    },
    question: {
      ru: 'Что нужно сделать сразу после звонка?',
      uz: 'Qo\'ng\'iroqdan so\'ng darhol nima qilish kerak?',
      en: 'What should you do right after the call?',
    },
    options: [
      {
        ru: 'Обновить бронь в PMS, добавить заметку об устной договорённости и считать вопрос закрытым — гость повторил и подтвердил все детали.',
        uz: 'PMS\'da bronni yangilab, og\'zaki kelishuv haqida eslatma qo\'shish va masalani yopilgan deb hisoblash — mehmon barcha tafsilotlarni takrorlab tasdiqladi.',
        en: 'Update the booking in the PMS, add a note on the verbal agreement and consider it closed — the guest repeated back and confirmed every detail.',
      },
      {
        ru: 'Обновить бронь в PMS и отправить гостю короткое сообщение в WhatsApp: даты, цена третьей ночи, завтрак и условия отмены.',
        uz: 'PMS\'da bronni yangilab, mehmonga WhatsApp orqali qisqa xabar yuborish: sanalar, uchinchi kecha narxi, nonushta va bekor qilish shartlari.',
        en: 'Update the booking in the PMS and send him a short WhatsApp summary: dates, third-night price, breakfast and cancellation terms.',
      },
      {
        ru: 'Попросить гостя самому добронировать третью ночь на Booking.com по тому же тарифу, чтобы данные в PMS и Extranet полностью совпадали.',
        uz: 'PMS va Extranet\'dagi ma\'lumotlar to\'liq mos kelishi uchun mehmondan uchinchi kechani Booking.com\'da o\'sha tarif bo\'yicha o\'zi qo\'shimcha bron qilishni so\'rash.',
        en: 'Ask the guest to book the third night himself on Booking.com at the same rate, so that the data in the PMS and the Extranet match completely.',
      },
      {
        ru: 'Отправить гостю в WhatsApp полные правила проживания и политику отмены отеля PDF-файлами, чтобы продление было оформлено официально.',
        uz: 'Uzaytirish rasmiy rasmiylashtirilishi uchun mehmonga WhatsApp orqali mehmonxonaning to\'liq turar joy qoidalari va bekor qilish siyosatini PDF-fayllar sifatida yuborish.',
        en: 'Send him the hotel\'s full house rules and cancellation policy as PDF files on WhatsApp, so the extension is formally documented.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Модуль WhatsApp требует после телефонного звонка или устной договорённости отправить короткое сообщение с итогами — даты, цена, условия, — чтобы защитить и гостя, и отель от недопонимания. Полагаться на устное «всё понятно» или отправлять гостю целые регламенты — ошибки.',
      uz: 'WhatsApp moduli telefon qo\'ng\'irog\'i yoki og\'zaki kelishuvdan so\'ng natijalar — sanalar, narx, shartlar — bilan qisqa xabar yuborishni talab qiladi, bu mehmonni ham, mehmonxonani ham tushunmovchilikdan himoya qiladi. Og\'zaki «hammasi tushunarli»ga tayanish yoki mehmonga butun reglamentlarni yuborish — xatolar.',
      en: 'The WhatsApp module requires that after a phone call or verbal agreement you send a short message with the outcome — dates, price, conditions — to protect both the guest and the hotel from misunderstandings. Relying on a verbal "all clear" or sending the guest entire policy documents are mistakes.',
    },
  },
  {
    id: 'final-mc-15',
    type: 'choice',
    moduleSlugs: ['check-in', 'foreign-guests'],
    scenario: {
      ru: '16:00. Заселяется гость из Италии, по-английски говорит плохо, по-русски — нет. В брони имя записано как «Jovanni Rosi», а в паспорте — «Giovanni Rossi»; дата рождения и остальные данные совпадают. Гость устал после перелёта и не понимает ваш вопрос о расхождении.',
      uz: 'Soat 16:00. Italiyadan kelgan mehmon joylashmoqda, inglizchada yomon gapiradi, ruschani bilmaydi. Bronda ismi «Jovanni Rosi» deb yozilgan, pasportida esa — «Giovanni Rossi»; tug\'ilgan sana va boshqa ma\'lumotlar mos keladi. Mehmon parvozdan keyin charchagan va farq haqidagi savolingizni tushunmayapti.',
      en: '16:00. A guest from Italy is checking in; his English is poor and he speaks no Russian. The reservation is under "Jovanni Rosi", while his passport says "Giovanni Rossi"; the date of birth and all other details match. The guest is tired after his flight and doesn\'t understand your question about the discrepancy.',
    },
    question: {
      ru: 'Как правильно поступить?',
      uz: 'Qanday yo\'l tutish to\'g\'ri?',
      en: 'What is the right thing to do?',
    },
    options: [
      {
        ru: 'Выдать ключ, раз дата рождения и остальные данные совпадают, а написание имени исправить в PMS позже вечером, когда на стойке станет спокойнее.',
        uz: 'Tug\'ilgan sana va boshqa ma\'lumotlar mos kelgani uchun kalitni berish, ism yozilishini esa PMS\'da keyinroq, kechqurun stoyka tinchroq bo\'lganda to\'g\'rilash.',
        en: 'Hand over the key, since the date of birth and all other details match, and correct the name spelling in the PMS later tonight when the desk is quieter.',
      },
      {
        ru: 'Вежливо отказать в заселении, пока гость не предъявит документ с именем точно как в брони, ведь регистрационная карта должна совпадать.',
        uz: 'Ro\'yxatdan o\'tish kartasi mos kelishi kerakligi sababli, mehmon ismi brondagidek aynan yozilgan hujjatni ko\'rsatmaguncha joylashtirishni muloyimlik bilan rad etish.',
        en: 'Politely refuse check-in until he shows a document with the name spelled exactly as in the booking, since the registration card must match.',
      },
      {
        ru: 'Говорить медленно, использовать переводчик в телефоне, показать бронь рядом с паспортом, подтвердить, что это он, и исправить имя в PMS до выдачи ключа.',
        uz: 'Sekin gapirish, telefondagi tarjimondan foydalanish, bronni pasport yonida ko\'rsatib, bu u ekanini tasdiqlash va kalit berishdan oldin PMS\'da ismni to\'g\'rilash.',
        en: 'Speak slowly, use a phone translator, show him the booking beside his passport to confirm it\'s him, and fix the name in the PMS before giving the key.',
      },
      {
        ru: 'Попросить гостя подождать в лобби с приветственным напитком, пока вы пишете тому, кто оформлял бронь, и получаете письменное подтверждение написания имени.',
        uz: 'Bronni rasmiylashtirgan kishiga yozib, ism yozilishining yozma tasdig\'ini olguningizcha mehmondan lobbida salqin ichimlik bilan kutib turishni so\'rash.',
        en: 'Ask him to wait in the lobby with a welcome drink while you e-mail whoever made the booking and get written confirmation of the correct spelling.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Золотое правило заселения: имя, дата рождения и номер документа сверяются с бронью, а расхождения уточняются вежливо, но обязательно до выдачи ключа. С иностранным гостем при языковом барьере говорят медленно, простыми словами, используя переводчик и наглядные материалы, а не отказывают и не заставляют ждать.',
      uz: 'Ro\'yxatdan o\'tkazishning oltin qoidasi: ism, tug\'ilgan sana va hujjat raqami bron bilan solishtiriladi, farqlar esa muloyimlik bilan, lekin albatta kalit berishdan oldin aniqlashtiriladi. Til to\'sig\'i bo\'lgan chet ellik mehmon bilan sekin, sodda so\'zlar bilan, tarjimon va ko\'rgazmali materiallardan foydalanib gapiriladi, rad etilmaydi va kutishga majbur qilinmaydi.',
      en: 'The check-in golden rule: name, date of birth and document number are matched against the reservation, and discrepancies are clarified politely but always before the key is handed over. With a foreign guest facing a language barrier you speak slowly, in simple words, using a translator and visual aids — you don\'t refuse or make him wait.',
    },
  },
]
