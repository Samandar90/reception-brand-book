import type { FinalChoiceQuestion } from '@/types'

export const finalChoice1: FinalChoiceQuestion[] = [
  {
    id: 'final-mc-01',
    type: 'choice',
    moduleSlugs: ['phone-communication', 'greeting-guests'],
    scenario: {
      ru: '14:10, вы одни на стойке и сверяете паспорт заезжающего гостя с бронью — осталось около минуты работы. Звонит городской телефон, идёт второй гудок. Гость у стойки спокойно ждёт.',
      uz: 'Soat 14:10, stoykada yolg\'izsiz va kelgan mehmonning pasportini bron bilan solishtiryapsiz — taxminan bir daqiqalik ish qoldi. Shahar telefoni jiringlaydi, ikkinchi signal ketmoqda. Stoykadagi mehmon xotirjam kutib turibdi.',
      en: 'It\'s 14:10, you are alone at the desk matching an arriving guest\'s passport against the booking — about a minute of work is left. The hotel phone rings; it is on the second ring. The guest at the desk is waiting calmly.',
    },
    question: {
      ru: 'Как действовать по стандарту?',
      uz: 'Standart bo\'yicha qanday harakat qilasiz?',
      en: 'What does the standard require?',
    },
    options: [
      {
        ru: 'Сначала закончить сверку паспорта — это всего минута, — а затем сразу снять трубку и ответить с названием отеля и своим именем.',
        uz: 'Avval pasportni solishtirishni tugatish — bor-yo\'g\'i bir daqiqa — so\'ng darhol trubkani ko\'tarib, mehmonxona nomi va o\'z ismingiz bilan javob berish.',
        en: 'Finish matching the passport first — it\'s only a minute — then pick up straight away and answer with the hotel name and your own name.',
      },
      {
        ru: 'Снять трубку до третьего гудка, сказать «Минуточку, пожалуйста» и поставить линию на удержание, пока не закончите сверку.',
        uz: 'Uchinchi signalgacha trubkani ko\'tarib, «Bir daqiqa, iltimos» deyish va solishtirishni tugatguncha liniyani kutish rejimiga qo\'yish.',
        en: 'Pick up before the third ring, say "One moment, please" and put the line on hold until you have finished checking the passport.',
      },
      {
        ru: 'Извиниться перед гостем, ответить до третьего гудка с названием отеля и своим именем и попросить звонящего подождать минуту.',
        uz: 'Mehmondan uzr so\'rab, uchinchi signalgacha mehmonxona nomi va ismingiz bilan javob berish va qo\'ng\'iroq qiluvchidan bir daqiqa kutishni so\'rash.',
        en: 'Apologise to the guest, answer before the third ring with the hotel name and your name, and ask the caller to hold for a minute.',
      },
      {
        ru: 'Кивнуть гостю, ответить до третьего гудка с названием отеля и своим именем и сразу, не откладывая, полностью решить вопрос звонящего.',
        uz: 'Mehmonga bosh irg\'ab, uchinchi signalgacha mehmonxona nomi va ismingiz bilan javob berish va qo\'ng\'iroq qiluvchining masalasini darhol to\'liq hal qilish.',
        en: 'Nod to the guest, answer before the third ring with the hotel name and your name, and resolve the caller\'s request fully right away, without delay.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Стандарт: трубку снимают не позже третьего гудка, называя отель и своё имя, а занятый у стойки сотрудник сначала коротко извиняется перед гостем. Затем звонящего вежливо просят подождать — ни один из гостей не ждёт без объяснения. «Минуточку» без названия отеля и полное решение звонка при ожидающем госте нарушают это правило.',
      uz: 'Standart: trubka uchinchi signaldan kechiktirmay ko\'tariladi, mehmonxona nomi va ism aytiladi, stoykada band xodim esa avval mehmondan qisqa uzr so\'raydi. Keyin qo\'ng\'iroq qiluvchidan muloyimlik bilan kutish so\'raladi — hech bir mehmon izohsiz kutmaydi. Mehmonxona nomisiz «bir daqiqa» va stoykada mehmon kutib turganda qo\'ng\'iroqni to\'liq hal qilish bu qoidani buzadi.',
      en: 'The standard: pick up no later than the third ring, giving the hotel name and your name; if you are busy at the desk, briefly apologise to the guest first. Then politely ask the caller to hold, so nobody waits without an explanation. "One moment" without the hotel name, or handling the whole call while the desk guest waits, breaks the rule.',
    },
  },
  {
    id: 'final-mc-02',
    type: 'choice',
    moduleSlugs: ['booking-com-guests', 'check-in'],
    scenario: {
      ru: '13:00. Вечером ожидается шесть заездов с Booking.com, первый — около 15:00. Коллега предлагает: «Сверим каждую бронь, когда гость подойдёт к стойке, — так надёжнее, ваучер будет перед глазами». На стойке сейчас спокойно.',
      uz: 'Soat 13:00. Kechqurun Booking.com orqali oltita kelish kutilmoqda, birinchisi — taxminan 15:00 da. Hamkasbingiz taklif qiladi: «Har bir bronni mehmon stoykaga kelganda solishtiramiz — ishonchliroq, vaucher ko\'z oldimizda bo\'ladi». Hozir stoykada tinch.',
      en: '13:00. Six Booking.com arrivals are expected this evening, the first around 15:00. A colleague suggests: "Let\'s check each booking when the guest is at the desk — it\'s safer, the voucher will be right in front of us." The desk is quiet right now.',
    },
    question: {
      ru: 'Как поступить по стандарту работы с OTA-бронями?',
      uz: 'OTA-bronlar bilan ishlash standarti bo\'yicha qanday yo\'l tutasiz?',
      en: 'What does the OTA booking standard require?',
    },
    options: [
      {
        ru: 'Сейчас, до приезда гостей, сверить каждую бронь в Extranet с PMS: тариф, завтрак, возвратность и статус оплаты.',
        uz: 'Hozir, mehmonlar kelguncha, har bir bronni Extranet va PMS\'da solishtirish: tarif, nonushta, qaytarilishi va to\'lov holati.',
        en: 'Now, before arrivals, match each booking in the Extranet with the PMS: rate, breakfast, refundability, payment status.',
      },
      {
        ru: 'Сверять бронь у стойки по ваучеру гостя: он показывает именно те условия, которые гость видел при оплате своей брони.',
        uz: 'Bronni stoykada mehmonning vaucheri bo\'yicha solishtirish: unda mehmon to\'lov paytida ko\'rgan shartlar aynan ko\'rsatilgan.',
        en: 'Check each booking at the desk against the guest\'s voucher: it shows exactly the conditions the guest saw when paying.',
      },
      {
        ru: 'Сейчас обзвонить всех шестерых гостей, уточнить время прибытия и тип номера и внести ответы в PMS.',
        uz: 'Hozir oltala mehmonga qo\'ng\'iroq qilib, kelish vaqti va xona turini aniqlash va javoblarni PMS\'ga kiritish.',
        en: 'Call all six guests now, confirm their arrival time and room type, and enter their answers into the PMS.',
      },
      {
        ru: 'Распечатать ваучеры из Extranet и при заезде дать гостю подписать их вместе с регистрационной картой.',
        uz: 'Vaucherlarni Extranet\'dan chop etib, kelganda mehmonga ro\'yxatdan o\'tish kartasi bilan birga imzolatish.',
        en: 'Print the vouchers from the Extranet and have each guest sign theirs together with the registration card.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Модуль Booking.com требует сверять OTA-бронь с PMS до прихода гостя — тариф, завтрак, отменяемость, оплату, — тогда спор на стойке не возникает. Сверка «по ваучеру у стойки» — привычка, которая переносит расхождение в момент заселения, а звонки и подписи не заменяют сверку систем.',
      uz: 'Booking.com moduli OTA-bronni PMS bilan mehmon kelishidan oldin solishtirishni talab qiladi — tarif, nonushta, bekor qilish shartlari, to\'lov — shunda stoykada bahs chiqmaydi. «Stoykada vaucher bo\'yicha» solishtirish farqni ro\'yxatdan o\'tish paytiga ko\'chiradigan odat, qo\'ng\'iroqlar va imzolar esa tizimlarni solishtirish o\'rnini bosmaydi.',
      en: 'The Booking.com module requires matching the OTA booking against the PMS before the guest arrives — rate, breakfast, cancellation terms, payment — so no dispute starts at the desk. Checking "against the voucher at the desk" is a habit that moves the discrepancy into the check-in moment, and calls or signatures do not replace reconciling the systems.',
    },
  },
  {
    id: 'final-mc-03',
    type: 'choice',
    moduleSlugs: ['check-out'],
    scenario: {
      ru: 'В 10:40 гость из 412-го звонит: спустится на выезд в 11:00. Ровно в 11:00 вы предлагаете помощь с багажом и такси, проводите оплату по общей сумме счёта, благодарите гостя по имени и спрашиваете, как прошло пребывание. Через минуту он замечает в чеке минибар и возвращается спорить.',
      uz: '10:40 da 412-xonadagi mehmon qo\'ng\'iroq qiladi: 11:00 da chiqib ketish uchun tushadi. Roppa-rosa 11:00 da siz bagaj va taksi bilan yordam taklif qilasiz, hisobning umumiy summasi bo\'yicha to\'lovni o\'tkazasiz, mehmonga ismi bilan rahmat aytasiz va qolishi qanday o\'tganini so\'raysiz. Bir daqiqadan so\'ng u chekda minibarni ko\'rib, bahslashish uchun qaytib keladi.',
      en: 'At 10:40 the guest in 412 calls: he will come down to check out at 11:00. At 11:00 sharp you offer help with luggage and a taxi, take payment for the bill total, thank the guest by name and ask how his stay was. A minute later he spots the minibar on the receipt and comes back to argue.',
    },
    question: {
      ru: 'Какой обязательный шаг стандарта выезда был пропущен?',
      uz: 'Chiqib ketish standartining qaysi majburiy qadami o\'tkazib yuborilgan?',
      en: 'Which mandatory check-out step was skipped?',
    },
    options: [
      {
        ru: 'Попросить гостя расписаться в распечатке счёта напротив каждой позиции перед оплатой.',
        uz: 'To\'lovdan oldin mehmondan hisob nusxasida har bir pozitsiya qarshisiga imzo qo\'yishni so\'rash.',
        en: 'Asking the guest to sign next to each line of the printed bill before taking the payment.',
      },
      {
        ru: 'Попросить честный отзыв на сайте бронирования ещё до оплаты, пока гость в хорошем настроении.',
        uz: 'Mehmon kayfiyati yaxshi paytda, to\'lovdan oldin bron saytida halol sharh qoldirishni so\'rash.',
        en: 'Asking for an honest review on the booking site before payment, while the guest is in a good mood.',
      },
      {
        ru: 'Уточнить способ оплаты и предложить разделить счёт на проживание и дополнительные услуги.',
        uz: 'To\'lov usulini aniqlash va hisobni yashash hamda qo\'shimcha xizmatlarga bo\'lishni taklif qilish.',
        en: 'Confirming the payment method and offering to split the bill into accommodation and extras.',
      },
      {
        ru: 'Проверить счёт заранее и до оплаты проговорить вслух каждую статью расходов, включая минибар.',
        uz: 'Hisobni oldindan tekshirish va to\'lovdan oldin har bir xarajat bandini, jumladan minibarni, ovoz chiqarib aytish.',
        en: 'Reviewing the bill in advance and reading every charge aloud, minibar included, before payment.',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Золотое правило выезда — озвучивать сумму и каждую статью расходов до того, как просить подтвердить оплату, а счёт проверять за 15–20 минут до выезда; именно это предотвращает спор о минибаре. Подписи напротив позиций и деление счёта стандарт не требует, а отзыв просят в конце и искренне.',
      uz: 'Chiqib ketishning oltin qoidasi — to\'lovni tasdiqlashni so\'rashdan oldin summa va har bir xarajat bandini aytish, hisobni esa chiqishdan 15–20 daqiqa oldin tekshirish; aynan shu minibar bo\'yicha bahsning oldini oladi. Pozitsiyalar qarshisiga imzo va hisobni bo\'lish standartda talab qilinmaydi, sharh esa oxirida va samimiy so\'raladi.',
      en: 'The check-out golden rule is to state the total and every charge before asking the guest to confirm payment, and to review the bill 15–20 minutes before departure — exactly what prevents a minibar dispute. Signing each line or splitting the bill is not required, and the review is requested at the end, sincerely.',
    },
  },
  {
    id: 'final-mc-04',
    type: 'choice',
    moduleSlugs: ['whatsapp-communication', 'early-checkin'],
    scenario: {
      ru: '09:15. Гость, заезжающий сегодня, пишет в WhatsApp: «Прилетаем в 10:00, можно заселиться в 11:00?» Чтобы ответить точно, нужно узнать у горничных статус номера — это займёт около 20 минут. На стойке очередь из двух гостей.',
      uz: 'Soat 09:15. Bugun keladigan mehmon WhatsApp\'da yozadi: «10:00 da qo\'namiz, 11:00 da joylashsak bo\'ladimi?» Aniq javob berish uchun xona holatini xona xizmatchilaridan bilish kerak — bu taxminan 20 daqiqa oladi. Stoykada ikki mehmondan iborat navbat bor.',
      en: '09:15. A guest arriving today writes on WhatsApp: "We land at 10:00 — can we check in at 11:00?" To answer accurately you need the room status from housekeeping, which will take about 20 minutes. Two guests are queuing at the desk.',
    },
    question: {
      ru: 'Какой вариант соответствует стандарту WhatsApp?',
      uz: 'Qaysi variant WhatsApp standartiga mos keladi?',
      en: 'Which option meets the WhatsApp standard?',
    },
    options: [
      {
        ru: 'Обслужить очередь, узнать статус у горничных и в течение получаса отправить одно подробное сообщение с точным ответом.',
        uz: 'Navbatga xizmat ko\'rsatib, xona xizmatchilaridan holatni bilib, yarim soat ichida aniq javob bilan bitta batafsil xabar yuborish.',
        en: 'Serve the queue, get the status from housekeeping and, within half an hour, send one detailed message with the exact answer.',
      },
      {
        ru: 'Сразу коротко ответить, что уточняете готовность номера и напишете в течение 20 минут, а затем прислать ответ.',
        uz: 'Darhol qisqa javob berib, xona tayyorligini aniqlayotganingizni va 20 daqiqa ichida yozishingizni aytish, so\'ng javobni yuborish.',
        en: 'Reply at once, briefly, that you are checking the room and will write within 20 minutes, then send the answer.',
      },
      {
        ru: 'Сразу ответить: «Стандартный заезд с 14:00, ранний — по возможности», а после проверки сообщить, если номер освободится.',
        uz: 'Darhol javob berish: «Standart joylashish 14:00 dan, erta joylashish — imkon qadar», tekshiruvdan keyin xona bo\'shasa, xabar berish.',
        en: 'Reply at once: "Standard check-in is from 14:00, early check-in if possible," and let the guest know later if the room frees up.',
      },
      {
        ru: 'Сразу позвонить гостю по номеру из WhatsApp, обсудить ранний заезд голосом и не тратить время на переписку.',
        uz: 'Darhol mehmonga WhatsApp raqami orqali qo\'ng\'iroq qilib, erta joylashishni ovozli muhokama qilish va yozishmaga vaqt sarflamaslik.',
        en: 'Call the guest straight away on the WhatsApp number, discuss early check-in by voice and skip the messaging.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Золотое правило WhatsApp: если ответ требует уточнения, сразу написать об этом и назвать срок, а не молчать до конца проверки — «в пределах получаса» — это крайний срок, а не цель. «Ранний — по возможности» — расплывчатое обещание, которое модуль раннего заезда запрещает, а звонок вместо переписки не фиксирует договорённость письменно.',
      uz: 'WhatsApp oltin qoidasi: javob aniqlashtirishni talab qilsa, darhol shu haqda yozib, muddatni aytish, tekshiruv tugaguncha jim turmaslik — «yarim soat ichida» maqsad emas, eng oxirgi muddat. «Erta joylashish — imkon qadar» erta joylashish moduli taqiqlaydigan noaniq va\'da, yozishma o\'rniga qo\'ng\'iroq esa kelishuvni yozma qayd etmaydi.',
      en: 'The WhatsApp golden rule: if the answer needs checking, say so at once and give a time instead of staying silent until you know — "within half an hour" is the outer limit, not the target. "Early check-in if possible" is the vague promise the early check-in module forbids, and a call instead of a message leaves nothing in writing.',
    },
  },
  {
    id: 'final-mc-05',
    type: 'choice',
    moduleSlugs: ['walk-in-guests', 'upselling-rooms'],
    scenario: {
      ru: '22:30. В отель без брони заходит пара с чемоданом: «Есть свободный номер?» В системе свободны Standard за 400 000 сум и Junior Suite за 650 000 сум, завтрак включён в оба. Пара выглядит уставшей.',
      uz: 'Soat 22:30. Mehmonxonaga bronsiz bir juftlik chamadon bilan kiradi: «Bo\'sh xona bormi?» Tizimda Standard 400 000 so\'m va Junior Suite 650 000 so\'mdan bo\'sh, ikkalasida ham nonushta kiritilgan. Juftlik charchagan ko\'rinadi.',
      en: '22:30. A couple walks in without a booking, pulling a suitcase: "Do you have a room?" The system shows a Standard at 400,000 sum and a Junior Suite at 650,000 sum available, both with breakfast. The couple look tired.',
    },
    question: {
      ru: 'Что вы делаете сразу после приветствия?',
      uz: 'Salomlashgandan keyin darhol nima qilasiz?',
      en: 'What do you do right after greeting them?',
    },
    options: [
      {
        ru: 'Называете оба варианта с ценами — Standard за 400 000 и Junior Suite за 650 000 сум — и спрашиваете, что им ближе.',
        uz: 'Ikkala variantni narxi bilan aytasiz — Standard 400 000 va Junior Suite 650 000 so\'m — va qaysi biri ma\'qulligini so\'raysiz.',
        en: 'Name both options with prices — Standard at 400,000 and Junior Suite at 650,000 sum — and ask which suits them better.',
      },
      {
        ru: 'Спрашиваете, на сколько ночей и для скольких гостей нужен номер, и только потом предлагаете один-два варианта с ценой.',
        uz: 'Xona necha kecha va necha mehmon uchun kerakligini so\'raysiz va shundan keyingina narxi bilan bir-ikki variant taklif qilasiz.',
        en: 'Ask how many nights and how many guests the room is for, and only then offer one or two options with a price.',
      },
      {
        ru: 'Сразу называете Standard за 400 000 сум с завтраком: уставшим гостям важнее быстро получить самый доступный номер.',
        uz: 'Darhol nonushtali Standard\'ni 400 000 so\'mga aytasiz: charchagan mehmonlar uchun eng arzon xonani tez olish muhimroq.',
        en: 'Quote the Standard at 400,000 sum with breakfast straight away: tired guests care most about getting the cheapest room fast.',
      },
      {
        ru: 'Сразу предлагаете Junior Suite за 650 000 сум как лучший вариант для отдыха, а Standard называете, только если откажутся.',
        uz: 'Darhol dam olish uchun eng yaxshi variant sifatida Junior Suite\'ni 650 000 so\'mga taklif qilasiz, rad etsalargina Standard\'ni aytasiz.',
        en: 'Offer the Junior Suite at 650,000 sum first as the best option to rest, and mention the Standard only if they decline.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Модуль о гостях без брони: прежде чем называть цену, уточните число ночей и гостей — тогда предложение будет точным, а не просто самым дешёвым или самым дорогим. Перечислить оба варианта с ценой — хороший второй шаг, но без уточнения потребностей он идёт раньше времени.',
      uz: 'Bronsiz mehmonlar moduli: narxni aytishdan oldin kechalar va mehmonlar sonini aniqlang — shunda taklif shunchaki eng arzon yoki eng qimmat emas, aniq bo\'ladi. Ikkala variantni narxi bilan aytish yaxshi ikkinchi qadam, ammo ehtiyojni aniqlamasdan u vaqtidan oldin keladi.',
      en: 'The walk-in module: before quoting a price, ask how many nights and guests — then the offer fits, rather than simply being the cheapest or the dearest. Listing both options with prices is a good second step, but without checking the guests\' needs it comes too early.',
    },
  },
  {
    id: 'final-mc-06',
    type: 'choice',
    moduleSlugs: ['booking-com-guests', 'check-in'],
    scenario: {
      ru: '15:00. Вы сверили паспорт гостя с бронью Booking.com, приготовили ключ и рассказали про завтрак, Wi-Fi и выезд. Бронь — три ночи, предоплата по невозвратному тарифу. Забирая ключ, гость роняет: «Может, уедем на день раньше — посмотрим по погоде».',
      uz: 'Soat 15:00. Siz mehmonning pasportini Booking.com broni bilan solishtirdingiz, kalitni tayyorladingiz va nonushta, Wi-Fi va chiqib ketish haqida aytdingiz. Bron — uch kecha, qaytarilmaydigan tarif bo\'yicha oldindan to\'langan. Kalitni olayotib, mehmon aytib qo\'yadi: «Balki bir kun oldin ketarmiz — ob-havoga qarab».',
      en: '15:00. You have matched the guest\'s passport with his Booking.com reservation, prepared the key and covered breakfast, Wi-Fi and check-out. The booking is three nights, prepaid on a non-refundable rate. Taking the key, the guest remarks: "We might leave a day early — depends on the weather."',
    },
    question: {
      ru: 'Что вы отвечаете по стандарту?',
      uz: 'Standart bo\'yicha nima deb javob berasiz?',
      en: 'What do you reply, per the standard?',
    },
    options: [
      {
        ru: 'Пообещать вернуть деньги за неиспользованную ночь, если гость предупредит об отъезде хотя бы за сутки.',
        uz: 'Agar mehmon ketishini bir kun oldin aytsa, foydalanilmagan kecha uchun pulni qaytarishga va\'da berish.',
        en: 'Promise to refund the unused night as long as he tells you at least a day in advance that he is leaving.',
      },
      {
        ru: 'Посоветовать уточнить условия досрочного выезда в поддержке Booking.com, раз бронь сделана через эту платформу.',
        uz: 'Bron platforma orqali qilingani uchun muddatidan oldin ketish shartlarini Booking.com yordam xizmatidan so\'rashni maslahat berish.',
        en: 'Advise him to ask Booking.com support about early departure terms, since the booking was made on the platform.',
      },
      {
        ru: 'Предложить прямо сейчас переоформить бронь на гибкий тариф отеля, чтобы он мог уехать на день раньше без всяких потерь.',
        uz: 'Mehmon zararsiz oldinroq keta olishi uchun bronni hoziroq mehmonxonaning moslashuvchan tarifiga qayta rasmiylashtirishni taklif qilish.',
        en: 'Offer to rebook him on the hotel\'s flexible rate right now so he can leave early without losing any of his money.',
      },
      {
        ru: 'Спокойно напомнить уже сейчас: тариф невозвратный, оплата за пропущенные ночи не вернётся, — показав это в ваучере.',
        uz: 'Hozir xotirjam eslatish: tarif qaytarilmaydi, foydalanilmagan kechalar uchun to\'lov qaytarilmaydi, — va buni vaucherda ko\'rsatish.',
        en: 'Calmly remind him now: the rate is non-refundable, unused prepaid nights are not returned — show it on the voucher.',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Золотое правило модуля Booking.com — объяснять условия тарифа спокойно и заранее, до спора: невозвратная предоплата не возвращается, и это видно в ваучере. Обещать возврат или переоформление без полномочий — давать обещание, которое отель не выполнит, а отсылать гостя к платформе — ошибка «это вопрос к Booking.com».',
      uz: 'Booking.com modulining oltin qoidasi — tarif shartlarini bahsdan oldin, xotirjam va oldindan tushuntirish: qaytarilmaydigan oldindan to\'lov qaytarilmaydi va bu vaucherda ko\'rinadi. Vakolatsiz pul qaytarish yoki qayta rasmiylashtirishni va\'da qilish — mehmonxona bajarmaydigan va\'da, mehmonni platformaga yuborish esa «bu Booking.com masalasi» xatosi.',
      en: 'The Booking.com golden rule is to explain rate conditions calmly and in advance, before any dispute: a non-refundable prepayment is not returned, and the voucher shows it. Promising a refund or a rebooking without authority is a promise the hotel won\'t keep, and sending the guest to the platform is the "ask Booking.com" mistake.',
    },
  },
  {
    id: 'final-mc-07',
    type: 'choice',
    moduleSlugs: ['lost-items', 'whatsapp-communication'],
    scenario: {
      ru: '13:00. Гостья, выехавшая вчера из 214-го, пишет в WhatsApp, что забыла там зарядное устройство. Вы уже проверили журнал находок — записей нет, осмотрели сам номер и полку забытых вещей в лобби и ресторане — пусто. Гостья ждёт ответа.',
      uz: 'Soat 13:00. Kecha 214-xonadan chiqib ketgan mehmon WhatsApp\'da u yerda zaryadlovchi qurilmani unutganini yozadi. Siz topilmalar jurnalini tekshirdingiz — yozuv yo\'q, xonaning o\'zini hamda lobbi va restorandagi unutilgan buyumlar javonini ko\'zdan kechirdingiz — bo\'sh. Mehmon javob kutmoqda.',
      en: '13:00. A guest who checked out of room 214 yesterday writes on WhatsApp that she left her charger there. You have checked the lost-and-found log — no entry — and looked in the room itself and on the lost-items shelf in the lobby and restaurant — nothing. The guest is waiting for an answer.',
    },
    question: {
      ru: 'Что ещё обязательно проверить, прежде чем написать «пока не нашли»?',
      uz: '«Hozircha topilmadi» deb yozishdan oldin yana nimani albatta tekshirish kerak?',
      en: 'What else must you check before writing "not found yet"?',
    },
    options: [
      {
        ru: 'Связаться с хозяйственной службой и горничной, которая убирала 214-й после выезда гостьи.',
        uz: 'Xo\'jalik xizmati va mehmon chiqqandan keyin 214-xonani yig\'ishtirgan xona xizmatchisi bilan bog\'lanish.',
        en: 'Contact housekeeping and the room attendant who cleaned room 214 after the guest left.',
      },
      {
        ru: 'Ещё раз проверить журнал находок за последние три дня, а не только за вчерашний день.',
        uz: 'Topilmalar jurnalini faqat kechagi emas, so\'nggi uch kunlik yozuvlar bo\'yicha yana bir bor tekshirish.',
        en: 'Recheck the lost-and-found log for the last three days, not just yesterday\'s entries.',
      },
      {
        ru: 'Попросить гостью прислать фото зарядки, чтобы горничные знали, что именно искать.',
        uz: 'Xona xizmatchilari nimani qidirishni bilishi uchun mehmondan zaryadlovchining suratini yuborishni so\'rash.',
        en: 'Ask the guest to send a photo of the charger so the attendants know what to look for.',
      },
      {
        ru: 'Посмотреть записи камер в коридоре этажа: не выносили ли что-нибудь из номера после выезда.',
        uz: 'Xonadan biror narsa olib chiqilganmi-yo\'qligini bilish uchun qavat yo\'lagidagi kamera yozuvlarini ko\'rish.',
        en: 'Review the corridor camera footage to see whether anything was carried out of the room.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Модуль находок перечисляет четыре проверки перед ответом «не найдено»: журнал, номер, зоны общего пользования и хозяйственная служба. Здесь пропущена последняя — горничная могла забрать вещь при уборке и ещё не сдать её. Повторный просмотр журнала, фото и камеры не заменяют разговора с хозяйственной службой.',
      uz: 'Topilmalar moduli «topilmadi» deyishdan oldin to\'rtta tekshiruvni sanaydi: jurnal, xona, umumiy foydalanish joylari va xo\'jalik xizmati. Bu yerda oxirgisi o\'tkazib yuborilgan — xona xizmatchisi buyumni yig\'ishtirish paytida olib, hali topshirmagan bo\'lishi mumkin. Jurnalni qayta ko\'rish, surat va kameralar xo\'jalik xizmati bilan gaplashish o\'rnini bosmaydi.',
      en: 'The lost-items module lists four checks before saying "not found": the log, the room, public areas and housekeeping. The last one is missing here — the attendant may have picked the item up while cleaning and not handed it in yet. Rechecking the log, a photo or cameras do not replace talking to housekeeping.',
    },
  },
  {
    id: 'final-mc-08',
    type: 'choice',
    moduleSlugs: ['greeting-guests', 'vip-guests', 'foreign-guests'],
    scenario: {
      ru: '15:00. К стойке подходит господин Танака из Японии — постоянный гость, четвёртый визит; по-английски он говорит медленно. Вы дописываете заметку в PMS, на это нужно ещё секунд 30. Его номер уже готов.',
      uz: 'Soat 15:00. Stoykaga Yaponiyadan janob Tanaka keladi — doimiy mehmon, to\'rtinchi tashrifi; inglizcha sekin gapiradi. Siz PMS\'da eslatmani yozib tugatyapsiz, bunga yana 30 soniyacha kerak. Uning xonasi allaqachon tayyor.',
      en: '15:00. Mr Tanaka from Japan walks up to the desk — a regular guest on his fourth stay who speaks English slowly. You are finishing a note in the PMS, which needs about 30 more seconds. His room is already ready.',
    },
    question: {
      ru: 'Какое приветствие соответствует стандартам?',
      uz: 'Qaysi salomlashish standartlarga mos keladi?',
      en: 'Which greeting meets the standards?',
    },
    options: [
      {
        ru: 'Дописать заметку за 30 секунд, чтобы не ошибиться, затем поднять глаза, улыбнуться и поприветствовать его по имени.',
        uz: 'Xato qilmaslik uchun eslatmani 30 soniyada yozib tugatish, so\'ng boshni ko\'tarib, jilmayib, uni ismi bilan qutlash.',
        en: 'Finish the note — 30 seconds — so the profile is correct, then look up, smile and greet him by name.',
      },
      {
        ru: 'Сразу поднять глаза, протянуть руку для крепкого рукопожатия, смотреть прямо в глаза и назвать его по имени.',
        uz: 'Darhol boshni ko\'tarib, qattiq qo\'l siqish uchun qo\'l uzatish, to\'g\'ri ko\'ziga qarab, uni ismi bilan qutlash.',
        en: 'Look up at once, offer your hand for a firm handshake, hold direct eye contact and greet him by name.',
      },
      {
        ru: 'В первые 10 секунд поднять глаза, улыбнуться, назвать его по имени и представиться; руку подать, только если он начнёт.',
        uz: 'Birinchi 10 soniyada boshni ko\'tarib, jilmayib, ismi bilan qutlash va o\'zini tanishtirish; qo\'lni faqat u boshlasa uzatish.',
        en: 'Within 10 seconds look up, smile, greet him by name, introduce yourself; shake hands only if he offers.',
      },
      {
        ru: 'Сразу поприветствовать и говорить «господин Танака» в каждой фразе, чтобы он чувствовал, что его узнали как постоянного.',
        uz: 'Darhol salomlashib, doimiy mehmon sifatida tanilganini his qilishi uchun har bir gapda «janob Tanaka» deb murojaat qilish.',
        en: 'Greet him at once and use "Mr Tanaka" in every sentence you say so he feels recognised as a regular.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Стандарт приветствия: в первые 10 секунд, с улыбкой, представившись; имя гостя используют 2–3 раза за разговор, а не в каждой фразе. Модуль об иностранных гостях напоминает, что не все культуры комфортно воспринимают рукопожатие и прямой зрительный контакт, поэтому инициативу оставляют гостю. Дописывание заметки нарушает правило 10 секунд.',
      uz: 'Salomlashish standarti: birinchi 10 soniyada, tabassum bilan, o\'zini tanishtirib; mehmon ismi suhbatda har gapda emas, 2–3 marta ishlatiladi. Chet ellik mehmonlar moduli hamma madaniyatlarda ham qo\'l siqish va to\'g\'ridan-to\'g\'ri ko\'zga qarash qulay qabul qilinmasligini eslatadi, shuning uchun tashabbus mehmonga qoldiriladi. Eslatmani yozib tugatish 10 soniya qoidasini buzadi.',
      en: 'The greeting standard: within the first 10 seconds, with a smile, introducing yourself; the guest\'s name is used 2–3 times in the conversation, not in every sentence. The foreign-guests module notes that not every culture is comfortable with handshakes or direct eye contact, so you let the guest lead. Finishing the note breaks the 10-second rule.',
    },
  },
  {
    id: 'final-mc-09',
    type: 'choice',
    moduleSlugs: ['upselling-rooms'],
    scenario: {
      ru: '14:30. Гость с бронью стандартного номера на две ночи прилетел ночным рейсом и говорит, что завтра у него важная встреча и нужно выспаться. Свободен делюкс этажом выше: вид на парк, дальше от лифта, доплата 15 долларов в сутки. Вы решаете предложить его.',
      uz: 'Soat 14:30. Ikki kechaga standart xona bron qilgan mehmon tungi reys bilan uchib keldi va ertaga muhim uchrashuvi borligini, yaxshi uxlab olishi kerakligini aytadi. Bir qavat yuqorida deluks bo\'sh: parkka qaraydi, liftdan uzoqroq, qo\'shimcha to\'lov sutkasiga 15 dollar. Siz uni taklif qilishga qaror qilasiz.',
      en: '14:30. A guest booked into a standard room for two nights arrives off a night flight and says he has an important meeting tomorrow and needs to sleep well. A deluxe one floor up is free: park view, further from the lift, 15 dollars more per night. You decide to offer it.',
    },
    question: {
      ru: 'Какая формулировка соответствует стандарту апселлинга?',
      uz: 'Qaysi ifoda apselling standartiga mos keladi?',
      en: 'Which wording meets the upselling standard?',
    },
    options: [
      {
        ru: '«Сегодня есть делюкс с доплатой 15 долларов в сутки — оформить его вместо вашего стандарта?»',
        uz: '«Bugun sutkasiga 15 dollar qo\'shimcha to\'lov bilan deluks bor — standartingiz o\'rniga rasmiylashtiraymi?»',
        en: '"We have a deluxe today for 15 dollars more per night — shall I book it instead of your standard?"',
      },
      {
        ru: '«Ваш стандарт довольно тесный и у лифта, а делюкс просторнее — всего 15 долларов в сутки».',
        uz: '«Standartingiz ancha tor va liftning yonida, deluks esa kengroq — sutkasiga bor-yo\'g\'i 15 dollar».',
        en: '"Your standard is rather cramped and next to the lift; the deluxe is roomier — only 15 dollars a night."',
      },
      {
        ru: '«Могу добавить делюкс, завтрак и поздний выезд — пакетом выйдет всего 40 долларов в сутки».',
        uz: '«Deluks, nonushta va kech chiqishni qo\'shishim mumkin — paket holida sutkasiga bor-yo\'g\'i 40 dollar».',
        en: '"I can add a deluxe, breakfast and late check-out — as a package it\'s only 40 dollars a night."',
      },
      {
        ru: '«За 15 долларов в сутки — делюкс выше, вдали от лифта: выспитесь перед встречей. Показать фото?»',
        uz: '«Sutkasiga 15 dollarga — yuqoriroqda, liftdan uzoq deluks: uchrashuv oldidan yaxshi uxlaysiz. Suratini ko\'rsataymi?»',
        en: '"15 dollars a night gets you a deluxe away from the lift — a good sleep before your meeting. See photos?"',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Апселлинг продаёт выгоду для этого гостя (тишина и сон перед встречей) и звучит конкретно: цена, разница, преимущество. Просто назвать доплату — продавать номер, а не выгоду; принижать забронированный номер и предлагать несколько допродаж разом — прямые ошибки из модуля.',
      uz: 'Apselling aynan shu mehmon uchun foydani (uchrashuv oldidan tinchlik va uyqu) sotadi va aniq yangraydi: narx, farq, afzallik. Faqat qo\'shimcha to\'lovni aytish — foydani emas, xonani sotish; bron qilingan xonani kamsitish va bir nechta qo\'shimcha sotuvni birdaniga taklif qilish — moduldagi to\'g\'ridan-to\'g\'ri xatolar.',
      en: 'Upselling sells the benefit for this particular guest (quiet and sleep before the meeting) and is concrete: price, difference, advantage. Just quoting the surcharge sells the room, not the benefit; running down the booked room and offering several extras at once are explicit mistakes in the module.',
    },
  },
  {
    id: 'final-mc-10',
    type: 'choice',
    moduleSlugs: ['phone-communication', 'walk-in-guests'],
    scenario: {
      ru: '21:00, отель на эту ночь заполнен полностью. Звонит женщина с вокзала: ей с ребёнком нужен номер на сегодня. Ниже — четыре фразы разных администраторов из такого звонка.',
      uz: 'Soat 21:00, mehmonxona bu kecha to\'liq band. Vokzaldan bir ayol qo\'ng\'iroq qiladi: unga farzandi bilan bugunga xona kerak. Quyida turli administratorlarning shunday qo\'ng\'iroqdagi to\'rtta iborasi.',
      en: '21:00, the hotel is completely full tonight. A woman calls from the station: she and her child need a room for tonight. Below are four lines from different receptionists on such a call.',
    },
    question: {
      ru: 'Какая фраза НАРУШАЕТ стандарт?',
      uz: 'Qaysi ibora standartni BUZADI?',
      en: 'Which line BREAKS the standard?',
    },
    options: [
      {
        ru: '«К сожалению, на эту ночь мест нет. Перезвоните, пожалуйста, завтра утром — возможно, будут отмены».',
        uz: '«Afsuski, bu kechaga joy yo\'q. Iltimos, ertaga ertalab qo\'ng\'iroq qiling — balki bekor qilishlar bo\'lar».',
        en: '"I\'m sorry, we have no rooms tonight. Please call us back tomorrow morning — there may be cancellations."',
      },
      {
        ru: '«Мест нет, но рядом наш партнёрский отель — я сама позвоню им и перезвоню вам через пять минут».',
        uz: '«Joy yo\'q, lekin yaqinda hamkor mehmonxonamiz bor — o\'zim ularga qo\'ng\'iroq qilib, besh daqiqada sizga qaytaman».',
        en: '"We\'re full, but our partner hotel is nearby — I\'ll call them myself and ring you back in five minutes."',
      },
      {
        ru: '«Правильно понимаю: сегодня, одна ночь, вы и ребёнок? Мы заполнены, но я помогу с партнёрским отелем».',
        uz: '«To\'g\'ri tushundimmi: bugun, bir kecha, siz va farzandingiz? Bizda joy qolmagan, lekin hamkor mehmonxona bilan yordam beraman».',
        en: '"Just to confirm: tonight, one night, you and your child? We\'re full, but I\'ll help you with our partner hotel."',
      },
      {
        ru: '«Итак: номер в партнёрском отеле на сегодня за вами, адрес пришлю в WhatsApp. Спасибо за звонок!»',
        uz: '«Demak: hamkor mehmonxonada bugunga xona sizniki, manzilni WhatsApp\'da yuboraman. Qo\'ng\'iroq uchun rahmat!»',
        en: '"So: the room at our partner hotel is yours for tonight; I\'ll send the address on WhatsApp. Thank you for calling!"',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Модуль о гостях без брони запрещает просто «мест нет» — при полной загрузке предлагают партнёрский отель и помогают связаться с ним, а «перезвоните позже» модуль о телефоне называет отказом от работы. Остальные фразы выполняют стандарт: повтор деталей, помощь со звонком, итог и благодарность.',
      uz: 'Bronsiz mehmonlar moduli shunchaki «joy yo\'q» deyishni taqiqlaydi — to\'liq bandlikda hamkor mehmonxona taklif qilinadi va u bilan bog\'lanishga yordam beriladi, «keyinroq qo\'ng\'iroq qiling»ni esa telefon moduli ishdan bosh tortish deb ataydi. Qolgan iboralar standartni bajaradi: tafsilotlarni takrorlash, qo\'ng\'iroqqa yordam, xulosa va minnatdorchilik.',
      en: 'The walk-in module forbids a bare "no rooms" — when full, you offer the partner hotel and help the guest reach it, and the phone module calls "call back later" a refusal to work. The other lines follow the standard: repeating details, helping with the call, summarising and thanking.',
    },
  },
  {
    id: 'final-mc-11',
    type: 'choice',
    moduleSlugs: ['check-out'],
    scenario: {
      ru: '21:00. Гость из 309-го, проживающий у вас три ночи, проходит мимо стойки: завтра в 05:00 он уезжает в аэропорт. В его счёте — проживание, ужин в ресторане и минибар. Ночью на стойке будет один ночной администратор.',
      uz: 'Soat 21:00. Uch kecha yashayotgan 309-xonadagi mehmon stoyka yonidan o\'tib ketmoqda: ertaga 05:00 da u aeroportga jo\'naydi. Uning hisobida — yashash, restorandagi kechki ovqat va minibar. Kechasi stoykada bitta tungi administrator bo\'ladi.',
      en: '21:00. The guest in 309, on a three-night stay, walks past the desk: tomorrow at 05:00 he leaves for the airport. His bill has the room, a restaurant dinner and the minibar. Overnight there will be one night receptionist on the desk.',
    },
    question: {
      ru: 'Что вы предлагаете гостю сейчас?',
      uz: 'Hozir mehmonga nimani taklif qilasiz?',
      en: 'What do you offer the guest now?',
    },
    options: [
      {
        ru: 'Пожелать доброго вечера и попросить ночного администратора подготовить счёт к 05:00, чтобы гость сразу оплатил.',
        uz: 'Xayrli kech tilab, tungi administratordan mehmon darhol to\'lashi uchun hisobni 05:00 ga tayyorlashni so\'rash.',
        en: 'Wish him a good evening and ask the night receptionist to have the bill printed and ready at 05:00 so he can pay straight away.',
      },
      {
        ru: 'Взять карту гостя и заранее списать сумму за проживание, а минибар дописать утром после проверки номера.',
        uz: 'Mehmonning kartasini olib, yashash summasini oldindan yechib olish, minibarni esa ertalab xonani tekshirgach qo\'shish.',
        en: 'Take his card and pre-charge the room now, then add the minibar in the morning after the room is checked.',
      },
      {
        ru: 'Предложить экспресс-выезд: сейчас вместе проверить и подтвердить счёт, а утром он просто оставит ключ на стойке.',
        uz: 'Ekspress-chiqishni taklif qilish: hozir birga hisobni tekshirib tasdiqlash, ertalab esa u kalitni stoykada qoldiradi, xolos.',
        en: 'Offer express check-out: review and confirm the bill together now, and in the morning he simply leaves the key at the desk.',
      },
      {
        ru: 'Предложить заказать такси на 04:30 и напомнить, что выезд — до 12:00, а счёт подготовят утром к его выходу.',
        uz: '04:30 ga taksi buyurtma qilishni taklif qilish va chiqish 12:00 gacha ekanini, hisob ertalab chiqishiga tayyorlanishini eslatish.',
        en: 'Offer to book a taxi for 04:30 and remind him check-out is before 12:00 and the bill will be ready when he leaves.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Модуль выезда советует вечером накануне предложить экспресс-выезд: подтвердить счёт заранее и утром просто оставить ключ. Подготовить счёт к 05:00 — значит заставить гостя разбираться со статьями в спешке, а списывать сумму по счёту, который гость не проверил и не подтвердил, нельзя.',
      uz: 'Chiqib ketish moduli ketishdan oldingi kechqurun ekspress-chiqishni taklif qilishni maslahat beradi: hisobni oldindan tasdiqlash va ertalab kalitni qoldirish. Hisobni 05:00 ga tayyorlash mehmonni shoshilinchda bandlar bilan ovora qiladi, mehmon tekshirmagan va tasdiqlamagan hisob bo\'yicha summani yechib bo\'lmaydi.',
      en: 'The check-out module advises offering express check-out the evening before: confirm the bill in advance and simply leave the key in the morning. Having the bill ready at 05:00 makes the guest go through charges in a rush, and you cannot charge a card for a bill the guest has not reviewed and confirmed.',
    },
  },
  {
    id: 'final-mc-12',
    type: 'choice',
    moduleSlugs: ['check-out', 'booking-com-guests'],
    scenario: {
      ru: '10:15, выезд гостя с бронью Booking.com. Пребывание прошло хорошо, счёт закрыт, вы помогли вызвать такси. Осталось попрощаться и сказать про отзыв.',
      uz: 'Soat 10:15, Booking.com orqali bron qilgan mehmon chiqib ketmoqda. Qolish yaxshi o\'tdi, hisob yopildi, siz taksi chaqirishga yordam berdingiz. Xayrlashish va sharh haqida aytish qoldi.',
      en: '10:15, a Booking.com guest is checking out. The stay went well, the bill is settled and you have helped call a taxi. All that is left is to say goodbye and mention a review.',
    },
    question: {
      ru: 'Какая фраза соответствует стандарту?',
      uz: 'Qaysi ibora standartga mos keladi?',
      en: 'Which line meets the standard?',
    },
    options: [
      {
        ru: '«Спасибо, господин Ли! Если всё понравилось, поставьте нам, пожалуйста, 10 баллов из 10 — для нас это правда очень важно».',
        uz: '«Rahmat, janob Li! Hammasi yoqqan bo\'lsa, iltimos, bizga 10 ball qo\'ying — bu biz uchun juda muhim».',
        en: '"Thank you, Mr Lee! If you enjoyed everything, please give us a 10 — it really matters to us."',
      },
      {
        ru: '«Спасибо, господин Ли! Если вам у нас понравилось, будем благодарны за отзыв на Booking.com — это помогает нам расти».',
        uz: '«Rahmat, janob Li! Bizda yoqqan bo\'lsa, Booking.com\'dagi sharhingiz uchun minnatdor bo\'lamiz — bu o\'sishimizga yordam beradi».',
        en: '"Thank you, Mr Lee! If you enjoyed your stay, we\'d be grateful for a review on Booking.com — it helps us grow."',
      },
      {
        ru: '«Спасибо, господин Ли! Оставьте отзыв на Booking.com, а в следующий визит покажите его — дадим скидку 10 %».',
        uz: '«Rahmat, janob Li! Booking.com\'da sharh qoldiring, keyingi tashrifda uni ko\'rsating — 10 % chegirma beramiz».',
        en: '"Thank you, Mr Lee! Leave a review on Booking.com and show it on your next visit — you\'ll get 10% off."',
      },
      {
        ru: '«Спасибо, господин Ли! Отзыв лучше оставить на нашем сайте, а не на Booking.com — там его увидят быстрее».',
        uz: '«Rahmat, janob Li! Sharhni Booking.com\'da emas, bizning saytda qoldirgan ma\'qul — u yerda tezroq ko\'rishadi».',
        en: '"Thank you, Mr Lee! It\'s better to leave your review on our own website, not Booking.com — it\'s seen faster there."',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Модуль Booking.com: на выезде приглашают оставить честный отзыв на Booking.com естественно и без давления — «будем благодарны за отзыв». Просить конкретную оценку, обещать скидку за отзыв или уводить отзыв с платформы — давление и критика платформы, которые модуль называет ошибками.',
      uz: 'Booking.com moduli: chiqib ketishda Booking.com\'da halol sharh qoldirishga tabiiy va bosimsiz taklif qilinadi — «sharh uchun minnatdor bo\'lamiz». Muayyan baho so\'rash, sharh uchun chegirma va\'da qilish yoki sharhni platformadan olib ketish — modul xato deb ataydigan bosim va platformani tanqid qilish.',
      en: 'The Booking.com module: at check-out you invite an honest review on Booking.com naturally and without pressure — "we\'d be grateful for a review". Asking for a specific score, promising a discount for a review or steering the review off the platform is pressure and criticism of the platform, which the module calls mistakes.',
    },
  },
  {
    id: 'final-mc-13',
    type: 'choice',
    moduleSlugs: ['emergency-procedures', 'phone-communication'],
    scenario: {
      ru: '02:30, вы одни на стойке; охранник на обходе и доступен по рации. Звонит внутренний телефон: гостья из 318-го говорит, что у мужа сильная боль в груди и ему трудно дышать. В лобби никого нет.',
      uz: 'Soat 02:30, stoykada yolg\'izsiz; qo\'riqchi aylanib yuribdi va ratsiya orqali aloqada. Ichki telefon jiringlaydi: 318-xonadagi mehmon ayol erining ko\'kragi qattiq og\'riyotganini va nafas olishi qiyinligini aytadi. Lobbida hech kim yo\'q.',
      en: '02:30, you are alone at the desk; the security guard is on rounds and reachable by radio. The internal phone rings: the guest in 318 says her husband has severe chest pain and is struggling to breathe. The lobby is empty.',
    },
    question: {
      ru: 'Какая последовательность действий верна?',
      uz: 'Qaysi harakatlar ketma-ketligi to\'g\'ri?',
      en: 'Which sequence of actions is correct?',
    },
    options: [
      {
        ru: 'Сразу вызвать скорую, назвав адрес и номер 318, затем по рации передать стойку охраннику и идти в номер с аптечкой.',
        uz: 'Darhol manzil va 318-xonani aytib tez yordam chaqirish, so\'ng ratsiya orqali stoykani qo\'riqchiga topshirib, dori qutisi bilan xonaga borish.',
        en: 'Call an ambulance at once (address, room 318), then radio the desk over to the guard and go up with the first-aid kit.',
      },
      {
        ru: 'Сначала по рации вызвать охранника на стойку, чтобы не оставлять её пустой, а когда он подойдёт — вызвать скорую и идти в номер.',
        uz: 'Stoykani bo\'sh qoldirmaslik uchun avval ratsiya orqali qo\'riqchini chaqirish, u kelgach tez yordam chaqirib, xonaga borish.',
        en: 'First radio the guard to the desk so it isn\'t left empty; when he arrives, call an ambulance and go up to the room.',
      },
      {
        ru: 'Сначала расспросить по телефону о симптомах, возрасте и лекарствах мужа, чтобы передать скорой точные данные, затем вызвать её.',
        uz: 'Tez yordamga aniq ma\'lumot berish uchun avval telefonda erining belgilari, yoshi va dorilarini so\'rab olish, so\'ng uni chaqirish.',
        en: 'First ask on the phone about the husband\'s symptoms, age and medication so you can brief the ambulance, then call it.',
      },
      {
        ru: 'Сразу взять аптечку и подняться в 318-й, а скорую вызвать из номера, когда своими глазами увидите состояние гостя.',
        uz: 'Darhol dori qutisini olib, 318-xonaga ko\'tarilish, tez yordamni esa mehmon holatini o\'z ko\'zingiz bilan ko\'rgach, xonadan chaqirish.',
        en: 'Take the first-aid kit straight up to 318 and call the ambulance from the room once you have seen his condition yourself.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Модуль ЧС: при медицинской ситуации скорую вызывают немедленно, затем приносят аптечку и остаются с гостем, а стойку передают по плану, не оставляя пустой. Ждать охранника, расспрашивать о симптомах или «сначала посмотреть самому» — значит терять минуты до вызова; сведения об аллергиях и лекарствах собирают уже рядом с гостем, для медиков.',
      uz: 'Favqulodda vaziyatlar moduli: tibbiy holatda tez yordam darhol chaqiriladi, so\'ng dori qutisi olib kelinadi va mehmon yonida qolinadi, stoyka esa bo\'sh qoldirilmay, reja bo\'yicha topshiriladi. Qo\'riqchini kutish, belgilarni so\'rash yoki «avval o\'zim ko\'raman» deyish — chaqiruvgacha daqiqalarni yo\'qotish; allergiya va dorilar haqidagi ma\'lumot mehmon yonida, shifokorlar uchun to\'planadi.',
      en: 'The emergency module: in a medical situation the ambulance is called immediately, then you bring the first-aid kit and stay with the guest, and the desk is handed over per plan rather than left empty. Waiting for the guard, questioning about symptoms or "seeing for yourself first" all lose minutes before the call; allergies and medication are gathered beside the guest, for the paramedics.',
    },
  },
  {
    id: 'final-mc-14',
    type: 'choice',
    moduleSlugs: ['whatsapp-communication', 'phone-communication'],
    scenario: {
      ru: 'Гость звонит из номера и просит продлить проживание ещё на одну ночь. Вы проверили наличие, устно договорились — 400 000 сум с завтраком, отмена без штрафа до 12:00 — и повторили детали. Затем обновили бронь в PMS и предупредили хозяйственную службу.',
      uz: 'Mehmon xonadan qo\'ng\'iroq qilib, yana bir kechaga qolishni so\'raydi. Siz bo\'sh joyni tekshirdingiz, og\'zaki kelishdingiz — nonushta bilan 400 000 so\'m, 12:00 gacha jarimasiz bekor qilish — va tafsilotlarni takrorladingiz. So\'ng PMS\'da bronni yangiladingiz va xo\'jalik xizmatini ogohlantirdingiz.',
      en: 'A guest calls from his room asking to extend his stay by one night. You checked availability, agreed verbally — 400,000 sum with breakfast, free cancellation until 12:00 — and repeated the details. Then you updated the booking in the PMS and told housekeeping.',
    },
    question: {
      ru: 'Какой шаг стандарта ещё не выполнен?',
      uz: 'Standartning qaysi qadami hali bajarilmagan?',
      en: 'Which step of the standard is still missing?',
    },
    options: [
      {
        ru: 'Попросить гостя подойти к стойке и подписать дополнение к регистрационной карте.',
        uz: 'Mehmondan stoykaga kelib, ro\'yxatdan o\'tish kartasiga qo\'shimchani imzolashni so\'rash.',
        en: 'Asking the guest to come to the desk and sign an addendum to his registration card.',
      },
      {
        ru: 'Взять с карты гостя предоплату за дополнительную ночь, чтобы бронь считалась гарантированной.',
        uz: 'Bron kafolatlangan hisoblanishi uchun mehmon kartasidan qo\'shimcha kecha uchun oldindan to\'lov olish.',
        en: 'Taking a prepayment for the extra night from his card so the booking counts as guaranteed.',
      },
      {
        ru: 'Перезвонить гостю через час и ещё раз устно подтвердить дату и цену продления.',
        uz: 'Bir soatdan keyin mehmonga qayta qo\'ng\'iroq qilib, uzaytirish sanasi va narxini yana og\'zaki tasdiqlash.',
        en: 'Calling the guest back in an hour to confirm the date and price of the extension verbally again.',
      },
      {
        ru: 'Отправить гостю короткое сообщение в WhatsApp с итогами: дата, цена, завтрак, условия отмены.',
        uz: 'Mehmonga WhatsApp\'da xulosa bilan qisqa xabar yuborish: sana, narx, nonushta, bekor qilish shartlari.',
        en: 'Sending the guest a short WhatsApp summary: date, price, breakfast and cancellation terms.',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Модуль WhatsApp: после телефонного звонка или устной договорённости отправляют короткое сообщение с итогами — даты, цена, условия; это защищает и гостя, и отель от недоразумений. Повторный устный звонок ничего не фиксирует, а подпись и предоплата — не часть этого стандарта.',
      uz: 'WhatsApp moduli: telefon qo\'ng\'irog\'i yoki og\'zaki kelishuvdan keyin xulosa bilan qisqa xabar yuboriladi — sanalar, narx, shartlar; bu mehmonni ham, mehmonxonani ham tushunmovchilikdan himoya qiladi. Takroriy og\'zaki qo\'ng\'iroq hech narsani qayd etmaydi, imzo va oldindan to\'lov esa bu standartning qismi emas.',
      en: 'The WhatsApp module: after a phone call or a verbal agreement, send a short message with the outcome — dates, price, conditions; it protects both the guest and the hotel from misunderstandings. A second verbal call records nothing, and a signature or prepayment is not part of this standard.',
    },
  },
  {
    id: 'final-mc-15',
    type: 'choice',
    moduleSlugs: ['check-in', 'foreign-guests'],
    scenario: {
      ru: '16:00. Заселяется гость из Италии, по-английски говорит плохо. В брони — «Jovanni Rosi», в паспорте — «Giovanni Rossi»; дата рождения и номер документа совпадают с бронью. Гость устал после перелёта и не понимает вопроса о расхождении.',
      uz: 'Soat 16:00. Italiyadan kelgan mehmon joylashmoqda, inglizchani yomon biladi. Bronda — «Jovanni Rosi», pasportda — «Giovanni Rossi»; tug\'ilgan sana va hujjat raqami bron bilan mos. Mehmon parvozdan charchagan va farq haqidagi savolni tushunmayapti.',
      en: '16:00. A guest from Italy is checking in; his English is poor. The booking says "Jovanni Rosi", the passport "Giovanni Rossi"; date of birth and document number match the booking. The guest is tired after his flight and doesn\'t understand your question about the difference.',
    },
    question: {
      ru: 'Как поступить по стандарту?',
      uz: 'Standart bo\'yicha qanday yo\'l tutasiz?',
      en: 'What does the standard require?',
    },
    options: [
      {
        ru: 'Выдать ключ, раз дата рождения и номер паспорта совпадают, а написание имени исправить в PMS вечером, когда станет спокойнее.',
        uz: 'Tug\'ilgan sana va pasport raqami mos kelgani uchun kalitni berish, ism yozilishini esa kechqurun, tinchroq bo\'lganda PMS\'da tuzatish.',
        en: 'Hand over the key since date of birth and passport number match, and fix the spelling in the PMS this evening when it\'s quieter.',
      },
      {
        ru: 'Показать гостю бронь рядом с паспортом, через переводчик подтвердить, что это он, и исправить имя в PMS до выдачи ключа.',
        uz: 'Mehmonga bronni pasport yonida ko\'rsatib, tarjimon orqali bu u ekanini tasdiqlash va kalit berishdan oldin PMS\'da ismni tuzatish.',
        en: 'Show him the booking beside his passport, confirm via a translator it\'s him, and fix the name in the PMS before the key.',
      },
      {
        ru: 'Попросить гостя подождать в лобби, пока агентство, оформившее бронь, письменно подтвердит правильное написание имени.',
        uz: 'Bronni rasmiylashtirgan agentlik ism yozilishini yozma tasdiqlaguncha mehmondan lobbida kutib turishni so\'rash.',
        en: 'Ask him to wait in the lobby until the agency that made the booking confirms the correct spelling in writing.',
      },
      {
        ru: 'Попросить гостя самому исправить имя в приложении бронирования и выдать ключ, когда изменение подтвердится.',
        uz: 'Mehmondan bron ilovasida ismni o\'zi tuzatishini so\'rash va o\'zgarish tasdiqlangach kalitni berish.',
        en: 'Ask him to correct the name himself in his booking app and give him the key once the change is confirmed.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Золотое правило заселения: имя, дата рождения и номер документа сверяются с бронью, а расхождения уточняются вежливо, но обязательно до выдачи ключа. С иностранным гостем помогают визуальные опоры и переводчик; откладывать исправление «на вечер» — нарушение, а ждать агентство или поручать правку самому гостю — лишняя задержка, раз остальные данные совпадают.',
      uz: 'Ro\'yxatdan o\'tkazishning oltin qoidasi: ism, tug\'ilgan sana va hujjat raqami bron bilan solishtiriladi, farqlar esa muloyimlik bilan, lekin albatta kalit berishdan oldin aniqlashtiriladi. Chet ellik mehmon bilan ko\'rgazmali vositalar va tarjimon yordam beradi; tuzatishni «kechga» qoldirish — qoidabuzarlik, qolgan ma\'lumotlar mos kelganda agentlikni kutish yoki tuzatishni mehmonning o\'ziga topshirish esa ortiqcha kechikish.',
      en: 'The check-in golden rule: name, date of birth and document number are matched against the booking, and discrepancies are clarified politely but always before the key is handed over. With a foreign guest, visual aids and a translator help; putting the fix off "until this evening" breaks the rule, while waiting for the agency or making the guest edit it himself is needless delay when the other data match.',
    },
  },
]
