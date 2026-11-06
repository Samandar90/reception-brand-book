import type { FinalOpenQuestion } from '@/types'

export const finalOpen: FinalOpenQuestion[] = [
  {
    id: 'final-open-01',
    type: 'open',
    moduleSlugs: ['complaints'],
    scenario: {
      ru: '20:15, в лобби несколько гостей. Гость из 507-го громко говорит у стойки: «Кондиционер не работает со вчерашнего дня, я звонил дважды — никто не пришёл! Это худший отель!» В PMS заявки в техслужбу нет; дежурный техник на смене, а такой же номер 509 свободен и убран.',
      uz: 'Soat 20:15, lobbida bir nechta mehmon bor. 507-xonadagi mehmon stoykada baland ovozda gapiradi: «Konditsioner kechadan beri ishlamayapti, ikki marta qo\'ng\'iroq qildim — hech kim kelmadi! Bu eng yomon mehmonxona!» PMS\'da texnik xizmatga ariza yo\'q; navbatchi texnik smenada, xuddi shunday 509-xona esa bo\'sh va yig\'ishtirilgan.',
      en: '20:15, several guests are in the lobby. The guest from 507 says loudly at the desk: "The air conditioning hasn\'t worked since yesterday, I called twice — nobody came! This is the worst hotel!" There is no maintenance request in the PMS; the duty technician is on shift, and an identical room, 509, is free and clean.',
    },
    question: {
      ru: 'Ответьте пунктами или 3–6 предложениями: 1) ваши первые слова гостю; 2) где вы продолжите разговор; 3) какое решение предложите и в какой срок; 4) как проконтролируете результат.',
      uz: 'Bandma-band yoki 3–6 gapda javob bering: 1) mehmonga birinchi so\'zlaringiz; 2) suhbatni qayerda davom ettirasiz; 3) qanday yechim va qaysi muddatda taklif qilasiz; 4) natijani qanday nazorat qilasiz.',
      en: 'Answer in points or 3–6 sentences: 1) your first words to the guest; 2) where you continue the conversation; 3) what solution you offer and by when; 4) how you check the result.',
    },
    rubric: {
      ru:
        '• Даёт гостю договорить, не перебивает и не спорит; первые слова — искреннее извинение и благодарность за то, что сказал лично; говорит тише и медленнее гостя\n' +
        '• Уводит разговор из лобби в спокойное место (лаунж, край стойки), а не решает конфликт на глазах у других гостей\n' +
        '• Предлагает конкретное решение сразу: переезд в готовый 509-й прямо сейчас с помощью с вещами или техник в номер с точным временем (например, через 10 минут)\n' +
        '• Берёт ответственность отеля на себя: не оправдывается и не винит техслужбу или «систему», сам оформляет заявку и звонит технику, не перекладывает это на гостя\n' +
        '• Называет время обратной связи, сам перезванивает или заходит проверить, что всё работает, и благодарит гостя (Thank в модели LAST)',
      uz:
        '• Mehmonga gapini oxirigacha aytishga imkon beradi, gapini bo\'lmaydi va bahslashmaydi; birinchi so\'zlari — samimiy uzr va shaxsan aytgani uchun rahmat; mehmondan pastroq va sekinroq gapiradi\n' +
        '• Suhbatni lobbidan tinch joyga (lounj, stoykaning cheti) olib o\'tadi, nizoni boshqa mehmonlar ko\'z o\'ngida hal qilmaydi\n' +
        '• Darhol aniq yechim taklif qiladi: hoziroq buyumlarga yordam bilan tayyor 509-xonaga ko\'chish yoki aniq vaqtda (masalan, 10 daqiqada) xonaga texnik\n' +
        '• Mehmonxona javobgarligini o\'z zimmasiga oladi: oqlanmaydi, texnik xizmat yoki «tizim»ni ayblamaydi, arizani o\'zi rasmiylashtiradi va texnikka o\'zi qo\'ng\'iroq qiladi, buni mehmonga yuklamaydi\n' +
        '• Qayta aloqa vaqtini aytadi, hammasi ishlayotganini o\'zi qo\'ng\'iroq qilib yoki kirib tekshiradi va mehmonga rahmat aytadi (LAST modelidagi Thank)',
      en:
        '• Lets the guest finish, doesn\'t interrupt or argue; the first words are a sincere apology and thanks for telling staff in person; speaks more quietly and slowly than the guest\n' +
        '• Moves the conversation out of the lobby to a calm spot (lounge, end of the desk) rather than handling the conflict in front of other guests\n' +
        '• Offers a concrete solution at once: a move to the ready room 509 right now with help with belongings, or a technician in the room at an exact time (e.g. in 10 minutes)\n' +
        '• Takes ownership for the hotel: no excuses, doesn\'t blame maintenance or "the system", logs the request and calls the technician personally rather than leaving it to the guest\n' +
        '• Gives a time for follow-up, personally calls or visits to check that everything works, and thanks the guest (the Thank in LAST)',
    },
  },
  {
    id: 'final-open-02',
    type: 'open',
    moduleSlugs: ['upselling-rooms', 'check-in'],
    scenario: {
      ru: '15:00. На заезд прибывает пара с бронью стандартного номера на три ночи без завтрака. Они упоминают, что отмечают годовщину свадьбы и устали после долгого перелёта. Сегодня свободен Deluxe с видом на город (+20 долларов за ночь); также можно добавить завтрак (10 долларов на человека) и платный поздний выезд.',
      uz: 'Soat 15:00. Uch kechaga nonushtasiz standart xona bron qilgan juftlik keladi. Ular to\'y yilligini nishonlayotganlarini va uzoq parvozdan charchaganlarini aytishadi. Bugun shaharga qaraydigan Deluxe bo\'sh (kechasiga +20 dollar); shuningdek nonushta (kishi boshiga 10 dollar) va pullik kech chiqishni qo\'shish mumkin.',
      en: '15:00. A couple arrives with a booking for a standard room for three nights without breakfast. They mention they are celebrating their wedding anniversary and are tired after a long flight. A city-view Deluxe is free today (+20 dollars a night); breakfast (10 dollars per person) and a paid late check-out can also be added.',
    },
    question: {
      ru: 'Ответьте пунктами или 3–6 предложениями: 1) что именно вы предложите и почему; 2) точная фраза предложения; 3) что сделаете, если пара откажется; 4) как завершите заселение.',
      uz: 'Bandma-band yoki 3–6 gapda javob bering: 1) aynan nimani va nega taklif qilasiz; 2) taklifning aniq iborasi; 3) juftlik rad etsa, nima qilasiz; 4) ro\'yxatdan o\'tkazishni qanday yakunlaysiz.',
      en: 'Answer in points or 3–6 sentences: 1) what exactly you offer and why; 2) the exact wording of the offer; 3) what you do if the couple declines; 4) how you complete the check-in.',
    },
    rubric: {
      ru:
        '• Выбирает одно самое уместное предложение по сигналам гостей (годовщина, усталость) — Deluxe; не перечисляет завтрак, поздний выезд и номер одним списком\n' +
        '• Продаёт выгоду, а не номер: тише, просторнее, вид на город, «для особого случая»; не говорит, что забронированный стандарт плохой или тесный\n' +
        '• Называет точную цену и разницу (+20 долларов за ночь, 60 за три ночи) и предлагает показать фото или номер\n' +
        '• После одного вежливого отказа не повторяет и не переформулирует предложение, тепло продолжает заселение без давления\n' +
        '• Завершает заселение по стандарту: паспорт сверен с бронью, краткий инструктаж (завтрак, Wi-Fi, время выезда), предложение помочь с багажом и тёплое напутствие',
      uz:
        '• Mehmonlar signallari (yillik, charchoq) bo\'yicha eng mos bitta taklifni tanlaydi — Deluxe; nonushta, kech chiqish va xonani bitta ro\'yxat qilib sanamaydi\n' +
        '• Xonani emas, foydani sotadi: tinchroq, kengroq, shaharga manzara, «alohida kun uchun»; bron qilingan standart yomon yoki tor deb aytmaydi\n' +
        '• Aniq narx va farqni aytadi (kechasiga +20 dollar, uch kechaga 60) va surat yoki xonani ko\'rsatishni taklif qiladi\n' +
        '• Bitta muloyim rad javobidan keyin taklifni takrorlamaydi va boshqacha aytmaydi, bosimsiz, iliq tarzda ro\'yxatdan o\'tkazishni davom ettiradi\n' +
        '• Ro\'yxatdan o\'tkazishni standart bo\'yicha yakunlaydi: pasport bron bilan solishtirilgan, qisqa yo\'l-yo\'riq (nonushta, Wi-Fi, chiqish vaqti), bagajga yordam taklifi va iliq tilak',
      en:
        '• Chooses one most fitting offer based on the guests\' signals (anniversary, tiredness) — the Deluxe; doesn\'t list breakfast, late check-out and the room together\n' +
        '• Sells the benefit, not the room: quieter, roomier, city view, "for a special occasion"; doesn\'t say the booked standard is bad or cramped\n' +
        '• States the exact price and difference (+20 dollars a night, 60 for three nights) and offers to show photos or the room\n' +
        '• After one polite refusal doesn\'t repeat or rephrase the offer, and warmly continues the check-in without pressure\n' +
        '• Completes the check-in to standard: passport matched with the booking, short briefing (breakfast, Wi-Fi, check-out time), offer of luggage help and a warm send-off',
    },
  },
  {
    id: 'final-open-03',
    type: 'open',
    moduleSlugs: ['phone-communication', 'complaints'],
    scenario: {
      ru: '21:30. Звонит гость: он едет из аэропорта и хочет подтвердить, что номер готов. В PMS у него подтверждённая бронь на две ночи, но отель овербукнут — свободных номеров нет. Партнёрский отель той же категории в 10 минутах подтверждает наличие; дежурный менеджер на телефоне. Гость будет у вас через 30 минут.',
      uz: 'Soat 21:30. Mehmon qo\'ng\'iroq qiladi: u aeroportdan kelyapti va xonasi tayyorligini tasdiqlamoqchi. PMS\'da uning ikki kechaga tasdiqlangan broni bor, ammo mehmonxona ortiqcha band qilingan — bo\'sh xona yo\'q. 10 daqiqalik masofadagi xuddi shu toifadagi hamkor mehmonxona joy borligini tasdiqlaydi; navbatchi menejer telefonda. Mehmon 30 daqiqada sizda bo\'ladi.',
      en: '21:30. A guest calls on his way from the airport to confirm his room is ready. The PMS shows a confirmed two-night booking, but the hotel is overbooked — no rooms are free. A partner hotel of the same category 10 minutes away confirms availability; the duty manager is on the phone. The guest will be with you in 30 minutes.',
    },
    question: {
      ru: 'Ответьте пунктами или 3–6 предложениями: 1) как вы отвечаете на звонок; 2) что и когда сообщаете гостю; 3) какое решение и компенсацию предлагаете; 4) что делаете за 30 минут до его приезда.',
      uz: 'Bandma-band yoki 3–6 gapda javob bering: 1) qo\'ng\'iroqqa qanday javob berasiz; 2) mehmonga nimani va qachon aytasiz; 3) qanday yechim va kompensatsiya taklif qilasiz; 4) u kelguncha 30 daqiqada nima qilasiz.',
      en: 'Answer in points or 3–6 sentences: 1) how you answer the call; 2) what you tell the guest and when; 3) what solution and compensation you offer; 4) what you do in the 30 minutes before he arrives.',
    },
    rubric: {
      ru:
        '• Отвечает по стандарту (название отеля, своё имя, тёплый тон) и повторяет ключевые детали брони — фамилию и даты\n' +
        '• Сообщает об овербукинге сразу, в этом же разговоре, а не когда гость приедет; искренне извиняется и берёт ответственность на отель, не ссылаясь на «систему» или платформу\n' +
        '• Называет решение по стандарту: номер того же или более высокого класса в партнёрском отеле, транспорт за счёт отеля и компенсация — первая ночь у вас на следующий день бесплатно, согласованная с менеджером\n' +
        '• До приезда действует: уведомляет менеджера, бронирует номер в партнёрском отеле, организует такси и присылает гостю письменное подтверждение (адрес, время, контакт)\n' +
        '• Завершает звонок чётко: подытоживает договорённость, благодарит и ждёт, пока гость положит трубку первым',
      uz:
        '• Standart bo\'yicha javob beradi (mehmonxona nomi, o\'z ismi, iliq ohang) va bronning asosiy tafsilotlarini — familiya va sanalarni takrorlaydi\n' +
        '• Overbooking haqida mehmon kelganda emas, darhol, shu suhbatning o\'zida aytadi; samimiy uzr so\'raydi va «tizim» yoki platformani ro\'kach qilmay, javobgarlikni mehmonxona zimmasiga oladi\n' +
        '• Standart bo\'yicha yechimni aytadi: hamkor mehmonxonada xuddi shu yoki yuqoriroq toifadagi xona, mehmonxona hisobidan transport va kompensatsiya — menejer bilan kelishilgan, ertasi kuni sizdagi birinchi kecha bepul\n' +
        '• Kelguncha harakat qiladi: menejerni xabardor qiladi, hamkor mehmonxonada xona bron qiladi, taksi tashkil qiladi va mehmonga yozma tasdiq (manzil, vaqt, aloqa) yuboradi\n' +
        '• Qo\'ng\'iroqni aniq yakunlaydi: kelishuvni xulosa qiladi, rahmat aytadi va mehmon trubkani birinchi qo\'yishini kutadi',
      en:
        '• Answers to standard (hotel name, own name, warm tone) and repeats the key booking details — surname and dates\n' +
        '• Reports the overbooking at once, in this same call, not when the guest arrives; apologises sincerely and takes ownership for the hotel without blaming "the system" or the platform\n' +
        '• States the standard solution: a room of the same or higher class at the partner hotel, transport paid by the hotel, and compensation — the first night back with you the next day free, agreed with the manager\n' +
        '• Acts before arrival: informs the manager, books the partner-hotel room, arranges the taxi and sends the guest written confirmation (address, time, contact)\n' +
        '• Ends the call clearly: summarises the agreement, thanks the guest and waits for him to hang up first',
    },
  },
  {
    id: 'final-open-04',
    type: 'open',
    moduleSlugs: ['whatsapp-communication', 'booking-com-guests'],
    scenario: {
      ru: 'В WhatsApp отеля пишет гость с бронью Booking.com на следующую неделю: «1) Завтрак включён? 2) Можно заехать в 10 утра? 3) Есть трансфер из аэропорта и сколько стоит? 4) Почему на вашем сайте дешевле, чем я заплатил на Booking?» В Extranet и PMS: тариф невозвратный, завтрак не включён (можно добавить за 80 000 сум в день), трансфер — 15 долларов.',
      uz: 'Mehmonxona WhatsApp\'iga keyingi haftaga Booking.com orqali bron qilgan mehmon yozadi: «1) Nonushta kiritilganmi? 2) Ertalab soat 10 da kelsam bo\'ladimi? 3) Aeroportdan transfer bormi va narxi qancha? 4) Nega saytingizda men Booking\'da to\'laganimdan arzonroq?» Extranet va PMS\'da: tarif qaytarilmaydi, nonushta kiritilmagan (kuniga 80 000 so\'mga qo\'shish mumkin), transfer — 15 dollar.',
      en: 'A guest with a Booking.com reservation for next week writes on the hotel WhatsApp: "1) Is breakfast included? 2) Can I check in at 10 am? 3) Is there an airport transfer and how much? 4) Why is your website cheaper than what I paid on Booking?" Extranet and PMS: non-refundable rate, breakfast not included (can be added for 80,000 sum a day), transfer — 15 dollars.',
    },
    question: {
      ru: 'Напишите ответ гостю в WhatsApp несколькими короткими сообщениями: ответьте на все четыре вопроса и укажите, что и когда вы сделаете дальше.',
      uz: 'Mehmonga WhatsApp\'da bir nechta qisqa xabar bilan javob yozing: to\'rttala savolga javob bering va keyin nima va qachon qilishingizni ko\'rsating.',
      en: 'Write your WhatsApp reply to the guest as several short messages: answer all four questions and say what you will do next and when.',
    },
    rubric: {
      ru:
        '• Отвечает быстро, с приветствием и благодарностью; тон тёплый, но профессиональный; короткие сообщения по 1–2 предложения, максимум один-два эмодзи\n' +
        '• Завтрак: честно сообщает, что не включён, спокойно напоминает условия тарифа (невозвратный) и предлагает добавить завтрак за 80 000 сум в день\n' +
        '• Ранний заезд: не отвечает «нет» и не обещает «постараемся» — объясняет, что статус номера проверят в день заезда, называет, когда сообщит ответ, и предлагает хранение багажа\n' +
        '• Трансфер: называет цену 15 долларов и предлагает оформить, запросив номер рейса или время прилёта\n' +
        '• Разница в цене: объясняет спокойно через условия тарифа и дату бронирования, не критикуя Booking.com и не смущая гостя; договорённости (завтрак, трансфер, время) подтверждает письменно',
      uz:
        '• Tez, salom va rahmat bilan javob beradi; ohang iliq, ammo professional; 1–2 gaplik qisqa xabarlar, ko\'pi bilan bir-ikki emoji\n' +
        '• Nonushta: kiritilmaganini halol aytadi, tarif shartlarini (qaytarilmaydi) xotirjam eslatadi va kuniga 80 000 so\'mga nonushta qo\'shishni taklif qiladi\n' +
        '• Erta joylashish: «yo\'q» demaydi va «harakat qilamiz» deb va\'da bermaydi — xona holati kelish kuni tekshirilishini tushuntiradi, javobni qachon aytishini bildiradi va bagaj saqlashni taklif qiladi\n' +
        '• Transfer: 15 dollar narxini aytadi va reys raqami yoki qo\'nish vaqtini so\'rab, rasmiylashtirishni taklif qiladi\n' +
        '• Narx farqi: Booking.com\'ni tanqid qilmay va mehmonni xijolat qilmay, tarif shartlari va bron sanasi orqali xotirjam tushuntiradi; kelishuvlarni (nonushta, transfer, vaqt) yozma tasdiqlaydi',
      en:
        '• Replies quickly, with a greeting and thanks; warm but professional tone; short messages of 1–2 sentences, at most one or two emoji\n' +
        '• Breakfast: says honestly it isn\'t included, calmly reminds the guest of the rate terms (non-refundable) and offers to add breakfast for 80,000 sum a day\n' +
        '• Early check-in: doesn\'t say "no" or promise "we\'ll try" — explains the room status is checked on arrival day, says when the answer will come and offers luggage storage\n' +
        '• Transfer: gives the price of 15 dollars and offers to book it, asking for the flight number or landing time\n' +
        '• Price difference: explains calmly via the rate conditions and booking date, without criticising Booking.com or embarrassing the guest; confirms the agreements (breakfast, transfer, time) in writing',
    },
  },
  {
    id: 'final-open-05',
    type: 'open',
    moduleSlugs: ['emergency-procedures'],
    scenario: {
      ru: '14:00, в лобби около десяти гостей, среди них пожилая пара с чемоданами. Срабатывает пожарная сигнализация. Одна женщина направляется к лифту, чтобы подняться за вещами. Вы одни на стойке, коллега на обеде и доступен по рации, охранник у входа.',
      uz: 'Soat 14:00, lobbida o\'nga yaqin mehmon bor, ular orasida chamadonli keksa juftlik. Yong\'in signalizatsiyasi ishlaydi. Bir ayol buyumlarini olish uchun yuqoriga chiqmoqchi bo\'lib liftga qarab ketadi. Stoykada yolg\'izsiz, hamkasbingiz tushlikda va ratsiya orqali aloqada, qo\'riqchi kirish eshigi oldida.',
      en: '14:00, about ten guests are in the lobby, among them an elderly couple with suitcases. The fire alarm goes off. One woman heads for the lift to go up for her belongings. You are alone at the desk; your colleague is at lunch and reachable by radio, the guard is at the entrance.',
    },
    question: {
      ru: 'Ответьте пунктами или 3–6 предложениями: 1) ваши первые слова гостям; 2) что вы делаете с женщиной у лифта; 3) как помогаете пожилой паре; 4) как обеспечиваете стойку и связь с охраной и менеджером.',
      uz: 'Bandma-band yoki 3–6 gapda javob bering: 1) mehmonlarga birinchi so\'zlaringiz; 2) lift oldidagi ayolga nima qilasiz; 3) keksa juftlikka qanday yordam berasiz; 4) stoyka va qo\'riqchi hamda menejer bilan aloqani qanday ta\'minlaysiz.',
      en: 'Answer in points or 3–6 sentences: 1) your first words to the guests; 2) what you do about the woman at the lift; 3) how you help the elderly couple; 4) how you keep the desk covered and stay in contact with security and the manager.',
    },
    rubric: {
      ru:
        '• Говорит спокойно, уверенно и громко, с конкретным указанием: какой выход, куда идти («к лестнице справа, спускаемся к месту сбора»)\n' +
        '• Немедленно останавливает женщину у лифта: лифтом не пользоваться и за вещами не возвращаться\n' +
        '• Организует помощь пожилой паре (поручает охраннику или другому сотруднику проводить их), чемоданы оставить\n' +
        '• Не оставляет стойку без передачи: по рации вызывает коллегу или охрану и передаёт пост по плану смены; сообщает менеджеру и следует протоколу вызова пожарной службы\n' +
        '• Действует по протоколу, а не импровизирует: не выясняет, «настоящая ли тревога», прежде чем выводить людей, и направляет всех к точке сбора',
      uz:
        '• Xotirjam, ishonchli va baland ovozda, aniq ko\'rsatma bilan gapiradi: qaysi chiqish, qayerga borish («o\'ngdagi zinaga, yig\'ilish joyiga tushamiz»)\n' +
        '• Lift oldidagi ayolni darhol to\'xtatadi: liftdan foydalanmaslik va buyumlar uchun qaytmaslik\n' +
        '• Keksa juftlikka yordamni tashkil qiladi (qo\'riqchi yoki boshqa xodimga ularni kuzatib qo\'yishni topshiradi), chamadonlarni qoldirishni aytadi\n' +
        '• Stoykani topshirmay tashlab ketmaydi: ratsiya orqali hamkasbi yoki qo\'riqchini chaqiradi va postni smena rejasi bo\'yicha topshiradi; menejerga xabar beradi va o\'t o\'chirish xizmatini chaqirish protokoliga amal qiladi\n' +
        '• Improvizatsiya emas, protokol bo\'yicha harakat qiladi: odamlarni olib chiqishdan oldin «signal haqiqiymi» deb aniqlamaydi va hammani yig\'ilish joyiga yo\'naltiradi',
      en:
        '• Speaks calmly, confidently and loudly, with a concrete instruction: which exit and where to go ("to the stairs on the right, down to the assembly point")\n' +
        '• Stops the woman at the lift at once: no lift and no going back for belongings\n' +
        '• Arranges help for the elderly couple (asks the guard or another staff member to escort them), suitcases left behind\n' +
        '• Doesn\'t leave the desk without a handover: radios the colleague or guard and hands over the post per the shift plan; informs the manager and follows the protocol for calling the fire service\n' +
        '• Follows the protocol instead of improvising: doesn\'t check "whether the alarm is real" before evacuating, and sends everyone to the assembly point',
    },
  },
  {
    id: 'final-open-06',
    type: 'open',
    moduleSlugs: ['lost-items', 'check-out'],
    scenario: {
      ru: '11:00. Гость, выехавший в 08:00, звонит из аэропорта: он забыл в номере 318 часы стоимостью около 2 000 долларов, посадка через час. Номер уже убран, в журнале находок записи нет, горничная этого этажа на смене. Гость очень взволнован.',
      uz: 'Soat 11:00. 08:00 da chiqib ketgan mehmon aeroportdan qo\'ng\'iroq qiladi: u 318-xonada taxminan 2 000 dollarlik soatini unutgan, samolyotga chiqishga bir soat qoldi. Xona allaqachon yig\'ishtirilgan, topilmalar jurnalida yozuv yo\'q, shu qavat xizmatchisi smenada. Mehmon juda hayajonda.',
      en: '11:00. A guest who checked out at 08:00 calls from the airport: he left a watch worth about 2,000 dollars in room 318, and boarding is in an hour. The room has already been cleaned, there is no entry in the lost-and-found log, and the floor attendant is on shift. The guest is very anxious.',
    },
    question: {
      ru: 'Ответьте пунктами или 3–6 предложениями: 1) что говорите гостю по телефону; 2) что и в каком порядке проверяете; 3) когда и как связываетесь с ним снова; 4) что предлагаете, если часы найдутся.',
      uz: 'Bandma-band yoki 3–6 gapda javob bering: 1) telefonda mehmonga nima deysiz; 2) nimani va qaysi tartibda tekshirasiz; 3) u bilan qachon va qanday qayta bog\'lanasiz; 4) soat topilsa, nimani taklif qilasiz.',
      en: 'Answer in points or 3–6 sentences: 1) what you tell the guest on the phone; 2) what you check and in what order; 3) when and how you contact him again; 4) what you offer if the watch is found.',
    },
    rubric: {
      ru:
        '• Не говорит «не найдено», опираясь на пустой журнал; успокаивает гостя и берёт поиск под личный контроль\n' +
        '• Записывает описание часов, номер комнаты и контакты; называет конкретный срок обратного звонка, укладывающийся до посадки (например, 15 минут)\n' +
        '• Проверяет всё, что требует модуль: журнал находок, номер 318 (сейф, тумбочки, бельё), хозяйственную службу и горничную, убиравшую номер, зоны общего пользования\n' +
        '• Перезванивает в обещанный срок, даже если поиск не закончен; найденные часы сразу вносит в журнал (описание, место, время, кто нашёл) и убирает в сейф\n' +
        '• Предлагает отправку курьером за счёт гостя, заранее назвав стоимость и сроки, или хранение до его возвращения; выдаёт только владельцу или по его указанию',
      uz:
        '• Bo\'sh jurnalga tayanib «topilmadi» demaydi; mehmonni tinchlantiradi va qidiruvni shaxsiy nazoratiga oladi\n' +
        '• Soat tavsifi, xona raqami va kontaktlarni yozib oladi; samolyotga chiqishgacha sig\'adigan aniq qayta qo\'ng\'iroq muddatini aytadi (masalan, 15 daqiqa)\n' +
        '• Modul talab qilgan hamma narsani tekshiradi: topilmalar jurnali, 318-xona (seyf, tumbochkalar, choyshablar), xo\'jalik xizmati va xonani yig\'ishtirgan xizmatchi, umumiy foydalanish joylari\n' +
        '• Qidiruv tugamagan bo\'lsa ham va\'da qilingan muddatda qayta qo\'ng\'iroq qiladi; topilgan soatni darhol jurnalga kiritadi (tavsif, joy, vaqt, kim topgan) va seyfga qo\'yadi\n' +
        '• Narx va muddatni oldindan aytib, mehmon hisobidan kuryer orqali jo\'natishni yoki qaytib kelguncha saqlashni taklif qiladi; faqat egasiga yoki uning ko\'rsatmasi bilan beradi',
      en:
        '• Doesn\'t say "not found" based on the empty log; reassures the guest and takes personal charge of the search\n' +
        '• Records the watch description, room number and contacts; gives a concrete call-back time that fits before boarding (e.g. 15 minutes)\n' +
        '• Checks everything the module requires: the lost-and-found log, room 318 (safe, drawers, linen), housekeeping and the attendant who cleaned the room, public areas\n' +
        '• Calls back at the promised time even if the search isn\'t finished; logs the found watch at once (description, place, time, finder) and locks it in the safe\n' +
        '• Offers courier delivery at the guest\'s cost with price and timing stated upfront, or storage until he returns; releases it only to the owner or on his instruction',
    },
  },
  {
    id: 'final-open-07',
    type: 'open',
    moduleSlugs: ['vip-guests', 'early-checkin'],
    scenario: {
      ru: '10:30. Приезжает госпожа Ортега — постоянная гостья, шестое проживание; в профиле: угловой номер с видом на море, гипоаллергенные подушки. Заезд по брони с 14:00; её номер освобождён, но ещё не убран, других свободных номеров этой категории нет. В лобби несколько гостей.',
      uz: 'Soat 10:30. Ortega xonim keladi — doimiy mehmon, oltinchi tashrifi; profilida: dengizga qaraydigan burchak xona, gipoallergen yostiqlar. Bron bo\'yicha joylashish 14:00 dan; uning xonasi bo\'shagan, ammo hali yig\'ishtirilmagan, bu toifadagi boshqa bo\'sh xona yo\'q. Lobbida bir nechta mehmon bor.',
      en: '10:30. Ms Ortega arrives — a regular guest on her sixth stay; her profile: corner room with a sea view, hypoallergenic pillows. Her booking starts at 14:00; her room has been vacated but not yet cleaned, and no other room in that category is free. Several guests are in the lobby.',
    },
    question: {
      ru: 'Ответьте пунктами или 3–6 предложениями: 1) как вы её приветствуете; 2) что говорите о номере; 3) что предлагаете на время ожидания; 4) что делаете «за кулисами», пока она ждёт.',
      uz: 'Bandma-band yoki 3–6 gapda javob bering: 1) uni qanday kutib olasiz; 2) xona haqida nima deysiz; 3) kutish vaqtida nimani taklif qilasiz; 4) u kutayotganda «parda ortida» nima qilasiz.',
      en: 'Answer in points or 3–6 sentences: 1) how you greet her; 2) what you say about the room; 3) what you offer while she waits; 4) what you do "behind the scenes" while she waits.',
    },
    rubric: {
      ru:
        '• Приветствует в первые 10 секунд по имени, узнаёт как постоянную гостью и упоминает её предпочтения (угловой номер с видом на море, подушки), а не оформляет как новую\n' +
        '• Проверяет реальный статус уборки и называет конкретное время готовности номера — без «постараемся» и «подождите где-нибудь»\n' +
        '• Предлагает комфортное ожидание: хранение багажа, кофе или завтрак в лаунже, и обещает лично позвонить, как только номер будет готов\n' +
        '• Ставит её номер в приоритет у хозяйственной службы и проверяет подготовку по профилю (гипоаллергенные подушки), а затем действительно звонит\n' +
        '• Соблюдает дискретность: не объявляет VIP-статус при других гостях, говорит тихо; добавляет уместный небольшой личный жест (записка, любимый напиток)',
      uz:
        '• Birinchi 10 soniyada ismi bilan salomlashadi, doimiy mehmon sifatida taniydi va afzalliklarini (dengizga qaraydigan burchak xona, yostiqlar) eslatadi, yangi mehmondek rasmiylashtirmaydi\n' +
        '• Yig\'ishtirishning haqiqiy holatini tekshiradi va xona tayyor bo\'ladigan aniq vaqtni aytadi — «harakat qilamiz» va «biror joyda kutib turing»siz\n' +
        '• Qulay kutishni taklif qiladi: bagaj saqlash, lounjda qahva yoki nonushta, va xona tayyor bo\'lishi bilan shaxsan qo\'ng\'iroq qilishga va\'da beradi\n' +
        '• Xo\'jalik xizmatida uning xonasini birinchi navbatga qo\'yadi va tayyorgarlikni profil bo\'yicha (gipoallergen yostiqlar) tekshiradi, so\'ng haqiqatan qo\'ng\'iroq qiladi\n' +
        '• Maxfiylikni saqlaydi: boshqa mehmonlar oldida VIP maqomini e\'lon qilmaydi, past ovozda gapiradi; o\'rinli kichik shaxsiy e\'tibor belgisini qo\'shadi (yozma tabrik, sevimli ichimlik)',
      en:
        '• Greets her by name within 10 seconds, recognises her as a regular and mentions her preferences (corner sea-view room, pillows) rather than processing her like a new guest\n' +
        '• Checks the real cleaning status and gives a concrete time the room will be ready — no "we\'ll try" or "wait somewhere"\n' +
        '• Offers a comfortable wait: luggage storage, coffee or breakfast in the lounge, and promises to call her personally as soon as the room is ready\n' +
        '• Has housekeeping prioritise her room and checks the set-up against the profile (hypoallergenic pillows), then actually makes the call\n' +
        '• Stays discreet: doesn\'t announce VIP status in front of other guests, speaks quietly; adds a fitting small personal gesture (a note, a favourite drink)',
    },
  },
  {
    id: 'final-open-08',
    type: 'open',
    moduleSlugs: ['foreign-guests', 'greeting-guests'],
    scenario: {
      ru: '18:00. К стойке подходит гость из Китая, который почти не говорит ни по-русски, ни по-английски. Он показывает бронь на телефоне, повторяет «taxi… airport… tomorrow» и показывает на часы, явно волнуясь. Непонятно, во сколько ему нужно выехать, сколько будет пассажиров и нужен ли трансфер отеля или обычное такси.',
      uz: 'Soat 18:00. Stoykaga ruscha ham, inglizcha ham deyarli gapirmaydigan Xitoylik mehmon keladi. U telefonda bronni ko\'rsatadi, «taxi… airport… tomorrow» deb takrorlaydi va hayajon bilan soatga ishora qiladi. Unga qachon jo\'nash kerakligi, necha yo\'lovchi bo\'lishi va mehmonxona transferi yoki oddiy taksi kerakligi tushunarsiz.',
      en: '18:00. A guest from China who speaks almost no Russian or English comes to the desk. He shows his booking on his phone, repeats "taxi… airport… tomorrow" and points at his watch, clearly anxious. It is unclear what time he needs to leave, how many passengers there will be, and whether he wants the hotel transfer or an ordinary taxi.',
    },
    question: {
      ru: 'Ответьте пунктами или 3–6 предложениями: 1) ваши первые слова и поведение; 2) какими способами вы выясняете время, число пассажиров и вид услуги; 3) как подтверждаете договорённость.',
      uz: 'Bandma-band yoki 3–6 gapda javob bering: 1) birinchi so\'zlaringiz va xatti-harakatingiz; 2) vaqt, yo\'lovchilar soni va xizmat turini qanday usullar bilan aniqlaysiz; 3) kelishuvni qanday tasdiqlaysiz.',
      en: 'Answer in points or 3–6 sentences: 1) your first words and manner; 2) how you find out the time, number of passengers and type of service; 3) how you confirm the agreement.',
    },
    rubric: {
      ru:
        '• Встречает в первые 10 секунд с улыбкой и успокаивает («Не волнуйтесь, я помогу»); говорит медленно, короткими простыми фразами, не повышая голос\n' +
        '• Использует визуальные средства: пишет время и цену цифрами, показывает часы, календарь или карту, использует жесты\n' +
        '• Применяет переводчик как опору, но продолжает общаться напрямую, а не «прячется» за телефон\n' +
        '• Уточняет и повторяет каждую деталь — дата, время выезда из отеля, аэропорт, число пассажиров, трансфер или такси, цена — и добивается чёткого «да»\n' +
        '• Фиксирует договорённость письменно (записка или WhatsApp со временем и ценой цифрами) и ни при каких условиях не передразнивает акцент или произношение',
      uz:
        '• Birinchi 10 soniyada tabassum bilan kutib oladi va tinchlantiradi («Xavotir olmang, yordam beraman»); ovozini ko\'tarmay, sekin, qisqa sodda iboralar bilan gapiradi\n' +
        '• Ko\'rgazmali vositalardan foydalanadi: vaqt va narxni raqamlar bilan yozadi, soat, kalendar yoki xaritani ko\'rsatadi, imo-ishoradan foydalanadi\n' +
        '• Tarjimondan tayanch sifatida foydalanadi, ammo telefon ortiga «yashirinmay», to\'g\'ridan-to\'g\'ri muloqotni davom ettiradi\n' +
        '• Har bir tafsilotni — sana, mehmonxonadan jo\'nash vaqti, aeroport, yo\'lovchilar soni, transfer yoki taksi, narx — aniqlaydi va takrorlaydi hamda aniq «ha» javobiga erishadi\n' +
        '• Kelishuvni yozma qayd etadi (vaqt va narx raqamlar bilan yozilgan xat yoki WhatsApp) va hech qanday holatda talaffuz yoki aksentni masxara qilmaydi',
      en:
        '• Greets him within 10 seconds with a smile and reassures him ("Don\'t worry, I\'ll help"); speaks slowly in short, simple phrases without raising the voice\n' +
        '• Uses visual aids: writes the time and price in figures, shows a clock, calendar or map, uses gestures\n' +
        '• Uses a translator as a support but keeps communicating directly rather than "hiding" behind the phone\n' +
        '• Clarifies and repeats each detail — date, departure time from the hotel, airport, number of passengers, transfer or taxi, price — and gets a clear "yes"\n' +
        '• Puts the agreement in writing (a note or WhatsApp with time and price in figures) and never mimics his accent or pronunciation',
    },
  },
  {
    id: 'final-open-09',
    type: 'open',
    moduleSlugs: ['emergency-procedures', 'vip-guests'],
    scenario: {
      ru: '22:40. Звонит VIP-гость (известный певец, в профиле — «конфиденциальность»): у его двери уже 10 минут стоит незнакомец, стучит и требует автограф; гость напуган. У стойки ждут двое заезжающих. Охранник на обходе парковки и доступен по рации, дежурный менеджер — на телефоне.',
      uz: 'Soat 22:40. VIP-mehmon (taniqli xonanda, profilida — «maxfiylik») qo\'ng\'iroq qiladi: eshigi oldida 10 daqiqadan beri notanish odam turibdi, taqillatib, avtograf talab qilyapti; mehmon qo\'rqib ketgan. Stoykada ikki kelgan mehmon kutmoqda. Qo\'riqchi avtoturargohni aylanib yuribdi va ratsiya orqali aloqada, navbatchi menejer telefonda.',
      en: '22:40. A VIP guest (a well-known singer, profile: "confidentiality") calls: a stranger has been standing at his door for 10 minutes, knocking and demanding an autograph; the guest is frightened. Two arriving guests are waiting at the desk. The guard is patrolling the car park and reachable by radio; the duty manager is on the phone.',
    },
    question: {
      ru: 'Ответьте пунктами или 3–6 предложениями: 1) что вы говорите VIP-гостю; 2) кого и в каком порядке вызываете; 3) что делаете сами и чего не делаете; 4) как поступаете с ожидающими гостями и что делаете после инцидента.',
      uz: 'Bandma-band yoki 3–6 gapda javob bering: 1) VIP-mehmonga nima deysiz; 2) kimni va qaysi tartibda chaqirasiz; 3) o\'zingiz nima qilasiz va nima qilmaysiz; 4) kutayotgan mehmonlar bilan qanday yo\'l tutasiz va hodisadan keyin nima qilasiz.',
      en: 'Answer in points or 3–6 sentences: 1) what you tell the VIP guest; 2) whom you call and in what order; 3) what you do yourself and what you don\'t; 4) how you handle the waiting guests and what you do after the incident.',
    },
    rubric: {
      ru:
        '• Говорит гостю спокойно и уверенно: дверь не открывать, охрана уже идёт; обещает перезвонить через несколько минут\n' +
        '• Немедленно вызывает охрану по рации на этаж; если незнакомец не уходит или ведёт себя агрессивно — полиция (102) по протоколу; сообщает дежурному менеджеру\n' +
        '• Сам не вступает в физическую конфронтацию и не оставляет стойку без замены; никому не называет номер гостя и не подтверждает его проживание\n' +
        '• Ожидающих гостей коротко и вежливо просит подождать минуту и обслуживает после; не обсуждает ситуацию и VIP-статус вслух при них\n' +
        '• После инцидента перезванивает гостю, фиксирует случай в журнале смены и вместе с менеджером решает о мерах (смена номера, усиление охраны этажа)',
      uz:
        '• Mehmonga xotirjam va ishonch bilan aytadi: eshikni ochmang, qo\'riqchi yo\'lda; bir necha daqiqada qayta qo\'ng\'iroq qilishga va\'da beradi\n' +
        '• Darhol ratsiya orqali qo\'riqchini qavatga chaqiradi; notanish odam ketmasa yoki tajovuzkor bo\'lsa — protokol bo\'yicha politsiya (102); navbatchi menejerga xabar beradi\n' +
        '• O\'zi jismoniy to\'qnashuvga kirmaydi va stoykani o\'rinbosarsiz qoldirmaydi; hech kimga mehmonning xona raqamini aytmaydi va yashashini tasdiqlamaydi\n' +
        '• Kutayotgan mehmonlardan qisqa va muloyim bir daqiqa kutishni so\'raydi va keyin xizmat qiladi; ular oldida vaziyat va VIP maqomini ovoz chiqarib muhokama qilmaydi\n' +
        '• Hodisadan keyin mehmonga qayta qo\'ng\'iroq qiladi, holatni smena jurnaliga yozadi va menejer bilan birga choralar haqida qaror qiladi (xonani almashtirish, qavat qo\'riqlovini kuchaytirish)',
      en:
        '• Tells the guest calmly and confidently: don\'t open the door, security is on the way; promises to call back in a few minutes\n' +
        '• Radios the guard to the floor at once; if the stranger won\'t leave or turns aggressive — police (102) per protocol; informs the duty manager\n' +
        '• Doesn\'t get into a physical confrontation and doesn\'t leave the desk without cover; gives nobody the guest\'s room number and doesn\'t confirm he is staying\n' +
        '• Briefly and politely asks the waiting guests for a minute and serves them afterwards; doesn\'t discuss the situation or the VIP\'s status aloud in front of them\n' +
        '• After the incident calls the guest back, logs the case in the shift log and decides on measures with the manager (room change, extra security on the floor)',
    },
  },
  {
    id: 'final-open-10',
    type: 'open',
    moduleSlugs: ['booking-com-guests', 'complaints'],
    scenario: {
      ru: '23:00. Пара показывает ваучер Booking.com: «Deluxe с видом на море, две ночи, предоплата». В PMS бронь импортирована как Deluxe с видом на город; номера с видом на море сегодня заняты, завтра один освобождается. Муж говорит: «Вы нас обманули, сейчас же поставлю вам единицу!» Рядом другие гости; дежурный менеджер на телефоне.',
      uz: 'Soat 23:00. Juftlik Booking.com vaucherini ko\'rsatadi: «Dengiz manzarali Deluxe, ikki kecha, oldindan to\'lov». PMS\'da bron shahar manzarali Deluxe deb import qilingan; dengiz manzarali xonalar bugun band, ertaga bittasi bo\'shaydi. Er aytadi: «Bizni aldadingiz, hoziroq sizga bir ball qo\'yaman!» Yonida boshqa mehmonlar bor; navbatchi menejer telefonda.',
      en: '23:00. A couple shows a Booking.com voucher: "Sea-view Deluxe, two nights, prepaid". The PMS imported the booking as a city-view Deluxe; sea-view rooms are all taken tonight, one becomes free tomorrow. The husband says: "You cheated us — I\'m giving you a one right now!" Other guests are nearby; the duty manager is on the phone.',
    },
    question: {
      ru: 'Ответьте пунктами или 3–6 предложениями: 1) ваши первые слова; 2) что проверяете и как говорите о расхождении; 3) какое решение предлагаете на сегодня и на завтра; 4) что делаете после разговора.',
      uz: 'Bandma-band yoki 3–6 gapda javob bering: 1) birinchi so\'zlaringiz; 2) nimani tekshirasiz va farq haqida qanday gapirasiz; 3) bugun va ertaga uchun qanday yechim taklif qilasiz; 4) suhbatdan keyin nima qilasiz.',
      en: 'Answer in points or 3–6 sentences: 1) your first words; 2) what you check and how you talk about the mismatch; 3) what solution you offer for tonight and tomorrow; 4) what you do after the conversation.',
    },
    rubric: {
      ru:
        '• Даёт договорить, искренне извиняется и говорит тише гостя; уводит разговор от других гостей и не спорит об отзыве\n' +
        '• Сверяет ваучер с бронью в Extranet при гостях; не говорит «вы ошиблись» и не винит Booking.com — берёт ответственность на отель\n' +
        '• Предлагает решение сразу: на сегодня — лучший доступный номер, на завтра — переезд в номер с видом на море с помощью с багажом\n' +
        '• Компенсацию за неудобство согласует с дежурным менеджером, а не обещает сам, и называет гостям конкретные условия\n' +
        '• Исправляет бронь в PMS, подтверждает договорённость письменно (WhatsApp или сообщение через Booking.com), предупреждает хозяйственную службу о переезде; на выезде приглашает к честному отзыву, не торгуясь за оценку',
      uz:
        '• Gapini oxirigacha aytishga qo\'yadi, samimiy uzr so\'raydi va mehmondan pastroq gapiradi; suhbatni boshqa mehmonlardan uzoqlashtiradi va sharh haqida bahslashmaydi\n' +
        '• Mehmonlar oldida vaucherni Extranet\'dagi bron bilan solishtiradi; «siz xato qildingiz» demaydi va Booking.com\'ni ayblamaydi — javobgarlikni mehmonxona zimmasiga oladi\n' +
        '• Darhol yechim taklif qiladi: bugunga — mavjud eng yaxshi xona, ertaga — bagajga yordam bilan dengiz manzarali xonaga ko\'chish\n' +
        '• Noqulaylik uchun kompensatsiyani o\'zi va\'da qilmaydi, navbatchi menejer bilan kelishadi va mehmonlarga aniq shartlarni aytadi\n' +
        '• PMS\'da bronni tuzatadi, kelishuvni yozma tasdiqlaydi (WhatsApp yoki Booking.com orqali xabar), xo\'jalik xizmatini ko\'chish haqida ogohlantiradi; chiqishda baho uchun savdolashmay, halol sharhga taklif qiladi',
      en:
        '• Lets them finish, apologises sincerely and speaks more quietly than the guest; moves the conversation away from other guests and doesn\'t argue about the review\n' +
        '• Checks the voucher against the Extranet booking in front of them; doesn\'t say "you made a mistake" or blame Booking.com — takes ownership for the hotel\n' +
        '• Offers a solution at once: the best available room tonight and a move to a sea-view room tomorrow with luggage help\n' +
        '• Agrees compensation for the inconvenience with the duty manager instead of promising it alone, and tells the guests the concrete terms\n' +
        '• Corrects the booking in the PMS, confirms the agreement in writing (WhatsApp or a Booking.com message), tells housekeeping about the move; at check-out invites an honest review without bargaining over the score',
    },
  },
  {
    id: 'final-open-11',
    type: 'open',
    moduleSlugs: ['check-in', 'late-checkout'],
    scenario: {
      ru: '15:40. Заселяется гость из Великобритании: «Hi! I booked a twin room for two nights and asked for a late check-out on Sunday, around 3 pm. My colleague arrives tonight — his name should be on the booking too. And could I print my boarding pass somewhere?» В PMS: бронь на double, поздний выезд не отмечен, второго имени нет. На воскресенье отель заполнен на 100 %; сегодня в той же категории свободен twin.',
      uz: 'Soat 15:40. Buyuk Britaniyadan kelgan mehmon joylashmoqda: «Hi! I booked a twin room for two nights and asked for a late check-out on Sunday, around 3 pm. My colleague arrives tonight — his name should be on the booking too. And could I print my boarding pass somewhere?» PMS\'da: bron double xonaga, kech chiqish belgilanmagan, ikkinchi ism yo\'q. Yakshanbaga mehmonxona 100 % band; bugun xuddi shu toifada twin bo\'sh.',
      en: '15:40. A guest from the UK is checking in: "Hi! I booked a twin room for two nights and asked for a late check-out on Sunday, around 3 pm. My colleague arrives tonight — his name should be on the booking too. And could I print my boarding pass somewhere?" The PMS shows a double, no late check-out noted and no second name. Sunday is 100% booked; a twin in the same category is free today.',
    },
    question: {
      ru: 'ОТВЕТ НАПИШИТЕ НА АНГЛИЙСКОМ ЯЗЫКЕ, 4–6 предложений: что вы скажете гостю о 1) типе номера, 2) коллеге, 3) позднем выезде, 4) посадочном талоне. Ответ на другом языке не оценивается.',
      uz: 'JAVOBNI INGLIZ TILIDA YOZING, 4–6 gap: mehmonga 1) xona turi, 2) hamkasbi, 3) kech chiqish, 4) bortga chiqish taloni haqida nima deysiz. Boshqa tildagi javob baholanmaydi.',
      en: 'WRITE YOUR ANSWER IN ENGLISH, 4–6 sentences: what you tell the guest about 1) the room type, 2) his colleague, 3) the late check-out, 4) the boarding pass. An answer in any other language is not graded.',
    },
    rubric: {
      ru:
        '• Ответ на английском: понятный и вежливый, ошибки не мешают пониманию; приветствие, обращение по имени, фразы вроде «let me check»\n' +
        '• Тип номера: не спорит и не говорит «you booked a double»; сразу предлагает переселение в свободный twin той же категории сегодня\n' +
        '• Коллега: его имя добавят в бронь, а при заезде его паспорт сверят с бронью до выдачи ему ключа\n' +
        '• Поздний выезд: не обещает «we\'ll try» — честно говорит, что в воскресенье отель полон и 15:00 подтвердить нельзя; предлагает бесплатное хранение багажа и лаунж до рейса\n' +
        '• Завершает по стандарту: краткий инструктаж (завтрак, Wi-Fi, время выезда), предлагает распечатать посадочный талон на ресепшен и помочь с багажом',
      uz:
        '• Javob ingliz tilida: tushunarli va muloyim, xatolar tushunishga xalaqit bermaydi; salomlashish, ism bilan murojaat, «let me check» kabi iboralar\n' +
        '• Xona turi: bahslashmaydi va «you booked a double» demaydi; darhol bugun xuddi shu toifadagi bo\'sh twin\'ga ko\'chishni taklif qiladi\n' +
        '• Hamkasbi: uning ismi bronga qo\'shiladi, kelganida esa kalit berishdan oldin pasporti bron bilan solishtiriladi\n' +
        '• Kech chiqish: «we\'ll try» deb va\'da bermaydi — yakshanba kuni mehmonxona to\'la va 15:00 ni tasdiqlab bo\'lmasligini halol aytadi; reysgacha bepul bagaj saqlash va lounjni taklif qiladi\n' +
        '• Standart bo\'yicha yakunlaydi: qisqa yo\'l-yo\'riq (nonushta, Wi-Fi, chiqish vaqti), bortga chiqish talonini resepshenda chop etib berishni va bagajga yordamni taklif qiladi',
      en:
        '• The answer is in English: clear and polite, errors don\'t block understanding; a greeting, use of the guest\'s name, phrases like "let me check"\n' +
        '• Room type: doesn\'t argue or say "you booked a double"; offers a move to the free twin in the same category today\n' +
        '• Colleague: his name will be added to the booking, and on arrival his passport will be checked against it before he gets a key\n' +
        '• Late check-out: no "we\'ll try" promise — says honestly that Sunday is full and 15:00 can\'t be confirmed; offers free luggage storage and the lounge until the flight\n' +
        '• Finishes to standard: short briefing (breakfast, Wi-Fi, check-out time), offers to print the boarding pass at reception and help with luggage',
    },
  },
  {
    id: 'final-open-12',
    type: 'open',
    moduleSlugs: ['whatsapp-communication', 'late-checkout', 'lost-items'],
    scenario: {
      ru: '09:30. Гость из 702-го пишет в WhatsApp: «Здравствуйте! Завтра у нас поезд в 19:40 — можно выехать часа в четыре? И вчера в ресторане мы забыли синюю детскую куртку, официант обещал передать на ресепшен. Она у вас?» В PMS: 702-й на завтра забронирован под заезд в 15:00, уборка занимает около часа; выезд до 14:00 бесплатный, позже — 50 % стоимости ночи. В журнале находок куртки нет, ресторан открывается в 12:00.',
      uz: 'Soat 09:30. 702-xonadagi mehmon WhatsApp\'da yozadi: «Здравствуйте! Завтра у нас поезд в 19:40 — можно выехать часа в четыре? И вчера в ресторане мы забыли синюю детскую куртку, официант обещал передать на ресепшен. Она у вас?» PMS\'da: 702-xona ertaga 15:00 dagi kelishga bron qilingan, yig\'ishtirish bir soatcha oladi; 14:00 gacha chiqish bepul, keyin — kecha narxining 50 % i. Topilmalar jurnalida kurtka yo\'q, restoran 12:00 da ochiladi.',
      en: '09:30. The guest in 702 writes on WhatsApp: "Здравствуйте! Завтра у нас поезд в 19:40 — можно выехать часа в четыре? И вчера в ресторане мы забыли синюю детскую куртку, официант обещал передать на ресепшен. Она у вас?" The PMS shows 702 booked tomorrow for a 15:00 arrival, with cleaning taking about an hour; check-out until 14:00 is free, later costs 50% of the night. The jacket is not in the lost-and-found log, and the restaurant opens at 12:00.',
    },
    question: {
      ru: 'ОТВЕТ НАПИШИТЕ НА РУССКОМ ЯЗЫКЕ: ответ гостю в WhatsApp несколькими короткими сообщениями (4–6 предложений) — о позднем выезде, о куртке и о том, что и когда вы сделаете дальше. Ответ на другом языке не оценивается.',
      uz: 'JAVOBNI RUS TILIDA YOZING: mehmonga WhatsApp\'da bir nechta qisqa xabar bilan javob (4–6 gap) — kech chiqish, kurtka va keyin nima va qachon qilishingiz haqida. Boshqa tildagi javob baholanmaydi.',
      en: 'WRITE YOUR ANSWER IN RUSSIAN: a WhatsApp reply to the guest in several short messages (4–6 sentences) — about the late check-out, the jacket, and what you will do next and when. An answer in any other language is not graded.',
    },
    rubric: {
      ru:
        '• Ответ на русском, грамотный и вежливый, короткими сообщениями по 1–2 предложения; тон тёплый, без канцелярита и без избытка эмодзи\n' +
        '• Поздний выезд: честно объясняет, что до 16:00 нельзя — номер нужен к заезду в 15:00, — и предлагает бесплатный выезд до 14:00, а затем бесплатное хранение багажа и лаунж до поезда\n' +
        '• Куртка: не пишет «не находили» по пустому журналу — обещает проверить ресторан, хозяйственную службу и журнал и называет конкретное время ответа (например, до 12:30)\n' +
        '• Подтверждает договорённости письменно: новое время выезда 14:00, хранение багажа, срок ответа по куртке\n' +
        '• Действует после сообщения: отмечает выезд в PMS и уведомляет хозяйственную службу, проверяет куртку и в обещанный срок присылает результат; найденную вещь регистрирует в журнале',
      uz:
        '• Javob rus tilida, savodli va muloyim, 1–2 gaplik qisqa xabarlar bilan; ohang iliq, rasmiyatchiliksiz va ortiqcha emojisiz\n' +
        '• Kech chiqish: 16:00 gacha mumkin emasligini halol tushuntiradi — xona 15:00 dagi kelishga kerak — va 14:00 gacha bepul chiqishni, so\'ng poyezdgacha bepul bagaj saqlash va lounjni taklif qiladi\n' +
        '• Kurtka: bo\'sh jurnal bo\'yicha «topilmadi» deb yozmaydi — restoran, xo\'jalik xizmati va jurnalni tekshirishga va\'da beradi va aniq javob vaqtini aytadi (masalan, 12:30 gacha)\n' +
        '• Kelishuvlarni yozma tasdiqlaydi: yangi chiqish vaqti 14:00, bagaj saqlash, kurtka bo\'yicha javob muddati\n' +
        '• Xabardan keyin harakat qiladi: PMS\'da chiqishni belgilaydi va xo\'jalik xizmatini xabardor qiladi, kurtkani tekshiradi va va\'da qilingan muddatda natijani yuboradi; topilgan buyumni jurnalga qayd etadi',
      en:
        '• The answer is in Russian, correct and polite, in short messages of 1–2 sentences; warm tone, no bureaucratic language and no excess of emoji\n' +
        '• Late check-out: explains honestly that 16:00 isn\'t possible — the room is needed for a 15:00 arrival — and offers free check-out until 14:00, then free luggage storage and the lounge until the train\n' +
        '• Jacket: doesn\'t write "not found" based on the empty log — promises to check the restaurant, housekeeping and the log, and gives a concrete time for an answer (e.g. by 12:30)\n' +
        '• Confirms the agreements in writing: new check-out time 14:00, luggage storage, the deadline for the jacket answer\n' +
        '• Acts after the message: sets the check-out in the PMS and informs housekeeping, checks for the jacket and sends the result by the promised time; logs the item if found',
    },
  },
]
