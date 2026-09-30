import type { FinalOpenQuestion } from '@/types'

export const finalOpen: FinalOpenQuestion[] = [
  {
    id: 'final-open-01',
    type: 'open',
    moduleSlugs: ['complaints'],
    scenario: {
      ru: 'Вечер, в лобби несколько гостей. К стойке подходит гость из номера 507 и громко говорит: «Это худший отель, в котором я останавливался! Кондиционер не работает со вчерашнего дня, я звонил дважды, и никто не пришёл!» Он говорит на повышенных тонах, другие гости оборачиваются.',
      uz: 'Kech, lobbida bir nechta mehmon bor. Stoykaga 507-xonadagi mehmon kelib, baland ovozda: «Bu men to\'xtagan eng yomon mehmonxona! Konditsioner kechadan beri ishlamayapti, ikki marta qo\'ng\'iroq qildim, hech kim kelmadi!» deydi. U asabiylashgan, boshqa mehmonlar o\'girilib qarashmoqda.',
      en: 'It is evening and there are several guests in the lobby. A guest from room 507 walks up to the desk and says loudly: "This is the worst hotel I have ever stayed at! The air conditioning hasn\'t worked since yesterday, I called twice and nobody came!" He is raising his voice and other guests are turning to look.',
    },
    question: {
      ru: 'Напишите в 3–6 предложениях, что вы скажете гостю и какие шаги предпримете, чтобы снять напряжение и решить проблему.',
      uz: '3–6 gapda mehmonga nima deyishingizni va taranglikni bartaraf etib, muammoni hal qilish uchun qanday qadamlar qo\'yishingizni yozing.',
      en: 'In 3–6 sentences, write what you would say to the guest and what steps you would take to de-escalate the situation and solve the problem.',
    },
    rubric: {
      ru:
        '• Даёт гостю выговориться до конца, не перебивает и не спорит; отвечает тише и спокойнее, чем гость\n' +
        '• Искренне извиняется и благодарит за то, что гость сообщил лично («Мне очень жаль, спасибо, что сказали мне»), не оправдывается и не винит другие службы\n' +
        '• Берёт ответственность отеля на себя и предлагает конкретное действие немедленно: техник в течение 10–15 минут или переселение в другой номер\n' +
        '• Называет точные сроки и обещает лично проверить результат (перезвонить или зайти в номер)\n' +
        '• Уводит разговор из зоны видимости других гостей и завершает благодарностью (LAST: Listen, Apologize, Solve, Thank)',
      uz:
        '• Mehmonga gapini bo\'lmasdan oxirigacha aytishga imkon beradi, bahslashmaydi; mehmondan pastroq va xotirjamroq ohangda javob beradi\n' +
        '• Chin dildan uzr so\'raydi va shaxsan aytgani uchun rahmat aytadi («Juda afsusdaman, menga aytganingiz uchun rahmat»), oqlanmaydi va boshqa xizmatlarni ayblamaydi\n' +
        '• Mehmonxona javobgarligini o\'z zimmasiga oladi va darhol aniq harakat taklif qiladi: 10–15 daqiqa ichida texnik yoki boshqa xonaga ko\'chirish\n' +
        '• Aniq muddat aytadi va natijani shaxsan tekshirishga va\'da beradi (qayta qo\'ng\'iroq qilish yoki xonaga kirib chiqish)\n' +
        '• Suhbatni boshqa mehmonlar ko\'z o\'ngidan olib chiqadi va rahmat bilan yakunlaydi (LAST: Listen, Apologize, Solve, Thank)',
      en:
        '• Lets the guest finish without interrupting or arguing; responds more quietly and calmly than the guest\n' +
        '• Apologizes sincerely and thanks the guest for telling them directly ("I\'m truly sorry, thank you for letting me know"), without excuses or blaming other departments\n' +
        '• Owns the hotel\'s responsibility and offers a concrete action immediately: a technician within 10–15 minutes or a move to another room\n' +
        '• Gives a specific timeframe and promises to personally check the result (call back or visit the room)\n' +
        '• Moves the conversation away from other guests and closes by thanking the guest (LAST: Listen, Apologize, Solve, Thank)',
    },
  },
  {
    id: 'final-open-02',
    type: 'open',
    moduleSlugs: ['upselling-rooms', 'check-in'],
    scenario: {
      ru: 'На заезд прибывает пара, забронировавшая стандартный номер на три ночи. В разговоре они упоминают, что приехали отметить годовщину свадьбы и что перелёт был долгим. Сегодня свободен делюкс с видом на город — на 20 долларов дороже за ночь.',
      uz: 'Uch kechaga standart xona bron qilgan juftlik kelib turibdi. Suhbatda ular to\'y yilligini nishonlash uchun kelganini va parvoz uzoq bo\'lganini aytishadi. Bugun shahar manzarali delyuks xona bo\'sh — u har kecha uchun 20 dollar qimmatroq.',
      en: 'A couple arrives to check in; they booked a standard room for three nights. During the conversation they mention that they are here to celebrate their wedding anniversary and that the flight was long. A deluxe room with a city view is available tonight for $20 more per night.',
    },
    question: {
      ru: 'Напишите в 3–6 предложениях, как вы предложите этой паре улучшенный номер: что именно скажете и как поступите, если они откажутся.',
      uz: '3–6 gapda bu juftlikka yaxshiroq xonani qanday taklif qilishingizni yozing: aynan nima deysiz va ular rad etsa qanday yo\'l tutasiz.',
      en: 'In 3–6 sentences, write how you would offer this couple the upgraded room: what exactly you would say, and what you would do if they decline.',
    },
    rubric: {
      ru:
        '• Опирается на сигналы гостей (годовщина, усталость после перелёта), а не предлагает апгрейд «вслепую»\n' +
        '• Продаёт выгоду, а не номер: тише, просторнее, вид на город, подходит для особого случая — а не «стандарт маленький и шумный»\n' +
        '• Называет конкретную разницу в цене (20 долларов за ночь) и предлагает показать фото или сам номер\n' +
        '• Звучит как совет коллеги, а не как скрипт: предлагает только один вариант, без списка из завтрака, трансфера и позднего выезда\n' +
        '• После одного вежливого отказа не повторяет предложение и тепло продолжает заселение',
      uz:
        '• Mehmonlarning belgilariga tayanadi (yillik, parvozdan charchaganlik), taklifni «ko\'r-ko\'rona» qilmaydi\n' +
        '• Xonani emas, foydani sotadi: tinchroq, kengroq, shahar manzarasi, maxsus kun uchun mos — «standart kichkina va shovqinli» demaydi\n' +
        '• Aniq narx farqini aytadi (har kecha 20 dollar) va rasm yoki xonaning o\'zini ko\'rsatishni taklif qiladi\n' +
        '• Sotuv skripti emas, hamkasb maslahatidek yangraydi: faqat bitta variant taklif qiladi, nonushta, transfer va kech chiqish ro\'yxatisiz\n' +
        '• Bir marta muloyim rad javobidan keyin taklifni takrorlamaydi va ro\'yxatga olishni iliq davom ettiradi',
      en:
        '• Builds on the guests\' cues (anniversary, tiredness after the flight) instead of offering the upgrade blindly\n' +
        '• Sells the benefit, not the room: quieter, more spacious, city view, fitting for a special occasion — never "the standard is small and noisy"\n' +
        '• States the exact price difference ($20 per night) and offers to show a photo or the room itself\n' +
        '• Sounds like a colleague\'s advice, not a script: offers only one option, with no list of breakfast, transfer and late check-out\n' +
        '• After one polite decline does not repeat the offer and continues the check-in warmly',
    },
  },
  {
    id: 'final-open-03',
    type: 'open',
    moduleSlugs: ['phone-communication', 'complaints'],
    scenario: {
      ru: 'Вечер, 21:30. Звонит гость: он едет из аэропорта и хочет подтвердить, что его номер готов. Вы открываете PMS и видите, что у него подтверждённая бронь на сегодня, но все номера уже заняты — произошёл овербукинг. Гость будет у отеля через 30 минут.',
      uz: 'Kech, soat 21:30. Mehmon qo\'ng\'iroq qilmoqda: u aeroportdan kelyapti va xonasi tayyorligini tasdiqlamoqchi. Siz PMS\'ni ochib, uning bugunga tasdiqlangan broni borligini, lekin barcha xonalar band ekanini ko\'rasiz — ortiqcha bronlash bo\'lgan. Mehmon 30 daqiqadan so\'ng mehmonxonaga yetib keladi.',
      en: 'It is 9:30 pm. A guest calls: he is on his way from the airport and wants to confirm that his room is ready. You open the PMS and see that he has a confirmed booking for tonight, but every room is already occupied — the hotel is overbooked. The guest will reach the hotel in 30 minutes.',
    },
    question: {
      ru: 'Напишите в 3–6 предложениях, как вы ответите на звонок, что скажете гостю и какие шаги предпримете до его приезда.',
      uz: '3–6 gapda qo\'ng\'iroqqa qanday javob berishingizni, mehmonga nima deyishingizni va u kelguncha qanday qadamlar qo\'yishingizni yozing.',
      en: 'In 3–6 sentences, write how you would answer the call, what you would say to the guest, and what steps you would take before he arrives.',
    },
    rubric: {
      ru:
        '• Отвечает по стандарту: название отеля, своё имя, спокойный тёплый тон; повторяет ключевые детали (фамилия, даты), чтобы подтвердить бронь\n' +
        '• Честно сообщает о ситуации сразу, по телефону, а не когда гость уже стоит у стойки; искренне извиняется и берёт ответственность отеля на себя, не ссылаясь на «систему»\n' +
        '• Предлагает конкретное решение: номер той же или более высокой категории в партнёрском отеле рядом, транспорт за счёт отеля, компенсацию (например, бесплатная ночь при следующем визите)\n' +
        '• Действует до приезда гостя: уведомляет менеджера, бронирует партнёрский отель, организует такси, подтверждает договорённость сообщением\n' +
        '• Завершает звонок чётко: подытоживает договорённость, благодарит и ждёт, пока гость положит трубку первым',
      uz:
        '• Standart bo\'yicha javob beradi: mehmonxona nomi, o\'z ismi, xotirjam va iliq ohang; bronni tasdiqlash uchun asosiy tafsilotlarni (familiya, sanalar) takrorlaydi\n' +
        '• Vaziyatni darhol, telefonda halol aytadi, mehmon stoykaga kelganda emas; chin dildan uzr so\'raydi va «tizim»ni ayblamasdan mehmonxona javobgarligini o\'z zimmasiga oladi\n' +
        '• Aniq yechim taklif qiladi: yaqin atrofdagi hamkor mehmonxonada shu yoki yuqoriroq toifadagi xona, mehmonxona hisobidan transport, kompensatsiya (masalan, keyingi tashrifda bepul kecha)\n' +
        '• Mehmon kelguncha harakat qiladi: menejerga xabar beradi, hamkor mehmonxonani bron qiladi, taksi tashkil qiladi, kelishuvni xabar orqali tasdiqlaydi\n' +
        '• Qo\'ng\'iroqni aniq yakunlaydi: kelishuvni xulosalaydi, rahmat aytadi va mehmon birinchi bo\'lib trubkani qo\'yishini kutadi',
      en:
        '• Answers to standard: hotel name, own name, calm warm tone; repeats key details (last name, dates) to confirm the booking\n' +
        '• Tells the guest honestly right away, on the phone, not when he is already standing at the desk; apologizes sincerely and owns the hotel\'s responsibility without blaming "the system"\n' +
        '• Offers a concrete solution: an equal or higher category room at a partner hotel nearby, transport paid by the hotel, compensation (e.g. a free night on the next stay)\n' +
        '• Acts before the guest arrives: informs the manager, books the partner hotel, arranges a taxi, confirms the arrangement by message\n' +
        '• Closes the call clearly: summarizes what was agreed, thanks the guest and waits for him to hang up first',
    },
  },
  {
    id: 'final-open-04',
    type: 'open',
    moduleSlugs: ['whatsapp-communication', 'booking-com-guests'],
    scenario: {
      ru: 'В WhatsApp отеля приходит сообщение от гостя, забронировавшего через Booking.com на следующую неделю: «Здравствуйте! Подскажите: 1) включён ли завтрак в мою бронь, 2) можно ли заехать в 10 утра, 3) есть ли трансфер из аэропорта и сколько стоит, 4) почему на вашем сайте цена ниже, чем я заплатил на Booking?» Вы открываете Extranet и PMS: тариф невозвратный, завтрак не включён, трансфер стоит 15 долларов.',
      uz: 'Mehmonxona WhatsApp\'iga kelasi haftaga Booking.com orqali bron qilgan mehmondan xabar keladi: «Assalomu alaykum! Aytingchi: 1) bronimga nonushta kiritilganmi, 2) ertalab soat 10 da joylashsam bo\'ladimi, 3) aeroportdan transfer bormi va qancha turadi, 4) nega saytingizda narx men Booking\'da to\'laganimdan past?» Siz Extranet va PMS\'ni ochasiz: tarif qaytarilmaydigan, nonushta kiritilmagan, transfer 15 dollar turadi.',
      en: 'A message arrives on the hotel\'s WhatsApp from a guest who booked through Booking.com for next week: "Hello! Could you tell me: 1) is breakfast included in my booking, 2) can I check in at 10 am, 3) do you have an airport transfer and how much is it, 4) why is the price on your website lower than what I paid on Booking?" You open the Extranet and the PMS: the rate is non-refundable, breakfast is not included, the transfer costs $15.',
    },
    question: {
      ru: 'Напишите ответ гостю в WhatsApp (3–6 предложений или несколько коротких сообщений): что вы ответите на каждый вопрос и что сделаете дальше.',
      uz: 'Mehmonga WhatsApp\'da javob yozing (3–6 gap yoki bir nechta qisqa xabar): har bir savolga nima deb javob berasiz va keyin nima qilasiz.',
      en: 'Write your WhatsApp reply to the guest (3–6 sentences or several short messages): what you would answer to each question and what you would do next.',
    },
    rubric: {
      ru:
        '• Отвечает быстро, начинает с приветствия и благодарности за сообщение; тон тёплый, но профессиональный, максимум один-два эмодзи\n' +
        '• Отвечает на все четыре вопроса по порядку, разбивая текст на короткие сообщения, а не одной «стеной»\n' +
        '• Честно объясняет условия тарифа (невозвратный, без завтрака) спокойно и без критики Booking.com; предлагает добавить завтрак и называет цену трансфера (15 долларов)\n' +
        '• Про ранний заезд не отвечает «нет»: обещает уточнить у горничных и написать в конкретный срок, предлагает оставить багаж на стойке\n' +
        '• Про разницу в цене объясняет спокойно, не смущая гостя, и фиксирует договорённости письменно (даты, цену трансфера, условия)',
      uz:
        '• Tez javob beradi, salomlashish va xabar uchun rahmatdan boshlaydi; ohang iliq, lekin professional, ko\'pi bilan bir-ikkita emoji\n' +
        '• Barcha to\'rt savolga tartib bilan javob beradi, matnni bitta «devor» emas, qisqa xabarlarga bo\'ladi\n' +
        '• Tarif shartlarini (qaytarilmaydigan, nonushtasiz) xotirjam va Booking.com\'ni tanqid qilmasdan halol tushuntiradi; nonushta qo\'shishni taklif qiladi va transfer narxini (15 dollar) aytadi\n' +
        '• Erta kirish haqida «yo\'q» demaydi: farroshlardan aniqlab, aniq muddatda yozishga va\'da beradi, yukni stoykada qoldirishni taklif qiladi\n' +
        '• Narx farqini mehmonni noqulay ahvolga solmasdan xotirjam tushuntiradi va kelishuvlarni yozma mustahkamlaydi (sanalar, transfer narxi, shartlar)',
      en:
        '• Replies quickly, opens with a greeting and thanks for the message; tone is warm but professional, at most one or two emoji\n' +
        '• Answers all four questions in order, splitting the text into short messages rather than one wall of text\n' +
        '• Explains the rate conditions honestly (non-refundable, no breakfast) calmly and without criticizing Booking.com; offers to add breakfast and states the transfer price ($15)\n' +
        '• Does not answer "no" to the early check-in: promises to check with housekeeping and reply by a specific time, offers to hold luggage at the desk\n' +
        '• Explains the price difference calmly without embarrassing the guest and confirms agreements in writing (dates, transfer price, conditions)',
    },
  },
  {
    id: 'final-open-05',
    type: 'open',
    moduleSlugs: ['emergency-procedures'],
    scenario: {
      ru: '14:00, в лобби около десяти гостей, среди них пожилая пара с чемоданами. Внезапно срабатывает пожарная сигнализация. Гости растерянно смотрят на вас, одна женщина направляется к лифту, чтобы подняться за вещами. Вы на стойке одни, второй администратор на обеде.',
      uz: 'Soat 14:00, lobbida o\'nga yaqin mehmon bor, ular orasida chamadonli keksa juftlik. To\'satdan yong\'in signalizatsiyasi ishga tushadi. Mehmonlar sarosimada sizga qarashadi, bir ayol narsalarini olish uchun liftga yo\'naladi. Siz stoykada yolg\'izsiz, ikkinchi administrator tushlikda.',
      en: 'It is 2 pm and there are about ten guests in the lobby, including an elderly couple with suitcases. Suddenly the fire alarm goes off. The guests look at you in confusion, and one woman heads for the elevator to go up for her things. You are alone at the desk; the second receptionist is at lunch.',
    },
    question: {
      ru: 'Напишите в 3–6 предложениях, что вы скажете гостям и в каком порядке выполните действия по протоколу.',
      uz: '3–6 gapda mehmonlarga nima deyishingizni va protokol bo\'yicha harakatlarni qanday tartibda bajarishingizni yozing.',
      en: 'In 3–6 sentences, write what you would say to the guests and in what order you would carry out the protocol steps.',
    },
    rubric: {
      ru:
        '• Сохраняет спокойствие и говорит уверенно, громко и чётко — гости ориентируются на реакцию администратора\n' +
        '• Немедленно останавливает женщину у лифта («Пожалуйста, не пользуйтесь лифтом») и направляет всех к ближайшему лестничному выходу, указывая конкретное направление\n' +
        '• Помогает пожилой паре или просит другого гостя помочь; следует протоколу отеля: сообщение в пожарную службу, оповещение менеджера и охраны\n' +
        '• Не бросает стойку без замены: вызывает второго администратора или охрану, передаёт пост по плану и берёт с собой список проживающих гостей\n' +
        '• Не возвращается за вещами сам и не позволяет гостям; направляет к точке сбора и сообщает, что персонал будет на каждом этаже',
      uz:
        '• Xotirjamlikni saqlaydi va ishonchli, baland va aniq gapiradi — mehmonlar administratorning reaksiyasiga qarab yo\'l tutadi\n' +
        '• Liftdagi ayolni darhol to\'xtatadi («Iltimos, liftdan foydalanmang») va hammani eng yaqin zinapoya chiqishiga aniq yo\'nalish ko\'rsatib yo\'naltiradi\n' +
        '• Keksa juftlikka yordam beradi yoki boshqa mehmondan yordam so\'raydi; mehmonxona protokoliga amal qiladi: yong\'in xizmatiga xabar, menejer va xavfsizlikni ogohlantirish\n' +
        '• Stoykani almashtiruvchisiz tashlab ketmaydi: ikkinchi administrator yoki xavfsizlikni chaqiradi, postni reja bo\'yicha topshiradi va joylashgan mehmonlar ro\'yxatini o\'zi bilan oladi\n' +
        '• Narsalar uchun o\'zi qaytmaydi va mehmonlarga ham ruxsat bermaydi; yig\'ilish nuqtasiga yo\'naltiradi va xodimlar har bir qavatda bo\'lishini aytadi',
      en:
        '• Stays calm and speaks confidently, loudly and clearly — the guests take their cue from the receptionist\n' +
        '• Immediately stops the woman at the elevator ("Please do not use the elevator") and directs everyone to the nearest stairwell exit, pointing out the specific direction\n' +
        '• Helps the elderly couple or asks another guest to help; follows the hotel protocol: notifying the fire service, alerting the manager and security\n' +
        '• Does not abandon the desk without coverage: calls the second receptionist or security, hands off the post per the plan and takes the in-house guest list along\n' +
        '• Does not go back for belongings and does not let guests do so; directs them to the assembly point and tells them staff will be on every floor',
    },
  },
  {
    id: 'final-open-06',
    type: 'open',
    moduleSlugs: ['lost-items', 'check-out'],
    scenario: {
      ru: 'Гость выехал утром, а через три часа звонит из аэропорта: он забыл в номере 318 часы стоимостью около 2 000 долларов и через час улетает. Он взволнован и просит немедленно проверить. Горничная уже убрала номер, в журнале находок записи пока нет.',
      uz: 'Mehmon ertalab chiqib ketdi, uch soatdan so\'ng aeroportdan qo\'ng\'iroq qiladi: u 318-xonada taxminan 2 000 dollarlik soatini unutib qoldirgan va bir soatdan keyin uchib ketadi. U xavotirda va darhol tekshirishni so\'raydi. Farrosh xonani allaqachon tozalagan, topilmalar jurnalida hozircha yozuv yo\'q.',
      en: 'A guest checked out in the morning and calls from the airport three hours later: he left a watch worth about $2,000 in room 318 and his flight leaves in an hour. He is anxious and asks you to check immediately. Housekeeping has already cleaned the room; there is no entry in the lost-and-found register yet.',
    },
    question: {
      ru: 'Напишите в 3–6 предложениях, что вы скажете гостю по телефону и какие шаги предпримете для поиска и возврата часов.',
      uz: '3–6 gapda mehmonga telefonda nima deyishingizni va soatni topib qaytarish uchun qanday qadamlar qo\'yishingizni yozing.',
      en: 'In 3–6 sentences, write what you would say to the guest on the phone and what steps you would take to find and return the watch.',
    },
    rubric: {
      ru:
        '• Не говорит «не найдено», опираясь только на пустой журнал; успокаивает гостя и берёт ситуацию под личный контроль\n' +
        '• Записывает описание часов, номер, дату выезда и контакты гостя (телефон, email, адрес), называет конкретный срок обратного звонка (например, 15–20 минут)\n' +
        '• Проверяет всё: связывается с хозяйственной службой и горничной, убиравшей номер 318, осматривает номер, сейф, бельё и зоны общего пользования, подключает охрану или менеджера\n' +
        '• Перезванивает первым в обещанный срок, даже если поиск ещё идёт; при находке сразу регистрирует часы в журнале\n' +
        '• Предлагает безопасную отправку курьером со страховкой или хранение до возвращения гостя, заранее объясняя стоимость и сроки',
      uz:
        '• Faqat bo\'sh jurnalga tayanib «topilmadi» demaydi; mehmonni tinchlantiradi va vaziyatni shaxsan nazoratga oladi\n' +
        '• Soat tavsifini, xona raqamini, chiqish sanasini va mehmon kontaktlarini (telefon, email, manzil) yozib oladi, qayta qo\'ng\'iroq uchun aniq muddat aytadi (masalan, 15–20 daqiqa)\n' +
        '• Hammasini tekshiradi: xo\'jalik xizmati va 318-xonani tozalagan farrosh bilan bog\'lanadi, xona, seyf, choyshab va umumiy zonalarni ko\'zdan kechiradi, xavfsizlik yoki menejerni jalb qiladi\n' +
        '• Qidiruv davom etayotgan bo\'lsa ham, va\'da qilingan muddatda birinchi bo\'lib qayta qo\'ng\'iroq qiladi; topilganda soatni darhol jurnalga qayd etadi\n' +
        '• Sug\'urtalangan kuryer orqali xavfsiz yuborishni yoki mehmon qaytguncha saqlashni taklif qiladi, narx va muddatni oldindan tushuntiradi',
      en:
        '• Does not say "not found" based only on the empty register; reassures the guest and takes personal ownership of the situation\n' +
        '• Records the description of the watch, room number, check-out date and the guest\'s contacts (phone, email, address), gives a specific callback time (e.g. 15–20 minutes)\n' +
        '• Checks everything: contacts housekeeping and the maid who cleaned room 318, inspects the room, safe, linen and common areas, involves security or the manager\n' +
        '• Calls back first within the promised time even if the search is still ongoing; logs the watch in the register immediately once found\n' +
        '• Offers safe insured courier delivery or storage until the guest returns, explaining the cost and timing in advance',
    },
  },
  {
    id: 'final-open-07',
    type: 'open',
    moduleSlugs: ['vip-guests', 'early-checkin'],
    scenario: {
      ru: '10:30 утра. В отель приезжает госпожа Ортега — постоянная гостья, останавливается у вас в шестой раз; в её профиле отмечены угловой номер с видом на море и гипоаллергенные подушки. Заезд по стандарту в 14:00, её номер ещё не убран, а других свободных номеров этой категории нет. В лобби в это время несколько других гостей.',
      uz: 'Ertalab soat 10:30. Mehmonxonaga Ortega xonim keladi — doimiy mehmon, sizda oltinchi marta to\'xtayapti; profilida dengiz manzarali burchak xona va gipoallergenik yostiqlar qayd etilgan. Standart kirish vaqti 14:00, uning xonasi hali tozalanmagan, bu toifadagi boshqa bo\'sh xona yo\'q. Lobbida shu paytda bir nechta boshqa mehmon bor.',
      en: 'It is 10:30 am. Mrs. Ortega arrives at the hotel — a repeat guest on her sixth stay; her profile notes a corner sea-view room and hypoallergenic pillows. Standard check-in is at 2 pm, her room has not been cleaned yet, and there are no other free rooms of this category. Several other guests are in the lobby at the moment.',
    },
    question: {
      ru: 'Напишите в 3–6 предложениях, как вы встретите гостью, что скажете и какие шаги предпримете, пока номер не готов.',
      uz: '3–6 gapda mehmonni qanday kutib olishingizni, nima deyishingizni va xona tayyor bo\'lguncha qanday qadamlar qo\'yishingizni yozing.',
      en: 'In 3–6 sentences, write how you would welcome the guest, what you would say, and what steps you would take while the room is not ready.',
    },
    rubric: {
      ru:
        '• Узнаёт гостью и приветствует по имени тепло и лично («Госпожа Ортега, добро пожаловать обратно!»), упоминает детали из профиля (угловой номер, подушки), не оформляет её как новую\n' +
        '• Извиняется за ожидание и называет конкретное время готовности номера (например, «около 45 минут»), а не «подождите где-нибудь»\n' +
        '• Предлагает альтернативу на время ожидания: кофе или завтрак в лаунже за счёт отеля, хранение багажа, спа или бизнес-зону\n' +
        '• Действует: связывается с хозяйственной службой, чтобы её номер убрали в приоритетном порядке, и обещает лично сообщить, как только он готов\n' +
        '• Соблюдает дискретность: не объявляет VIP-статус вслух при других гостях, обсуждает детали тихо; уместен небольшой персональный жест (записка, любимый напиток в номере)',
      uz:
        '• Mehmonni taniydi va ismi bilan iliq, shaxsiy kutib oladi («Ortega xonim, xush kelibsiz!»), profildagi detallarni (burchak xona, yostiqlar) eslatadi, uni yangi mehmondek rasmiylashtirmaydi\n' +
        '• Kutish uchun uzr so\'raydi va xona tayyor bo\'lishining aniq vaqtini aytadi (masalan, «taxminan 45 daqiqa»), «boshqa joyda kuting» demaydi\n' +
        '• Kutish vaqti uchun muqobil taklif qiladi: mehmonxona hisobidan lounjda qahva yoki nonushta, yukni saqlash, spa yoki biznes-zona\n' +
        '• Harakat qiladi: xo\'jalik xizmati bilan bog\'lanib, uning xonasini birinchi navbatda tozalatadi va tayyor bo\'lishi bilanoq shaxsan xabar berishga va\'da beradi\n' +
        '• Diskretlikni saqlaydi: boshqa mehmonlar oldida VIP maqomini ovoz chiqarib aytmaydi, detallarni sekin muhokama qiladi; kichik shaxsiy jest o\'rinli (xat, xonada sevimli ichimlik)',
      en:
        '• Recognizes the guest and greets her warmly and personally by name ("Mrs. Ortega, welcome back!"), mentions details from her profile (corner room, pillows), does not process her like a first-timer\n' +
        '• Apologizes for the wait and gives a specific time for the room to be ready (e.g. "about 45 minutes"), never "wait somewhere"\n' +
        '• Offers an alternative for the waiting time: coffee or breakfast in the lounge on the house, luggage storage, the spa or business area\n' +
        '• Takes action: contacts housekeeping to have her room cleaned as a priority and promises to personally let her know the moment it is ready\n' +
        '• Keeps discretion: does not announce VIP status aloud in front of other guests, discusses details quietly; a small personal touch is appropriate (a note, her favorite drink in the room)',
    },
  },
  {
    id: 'final-open-08',
    type: 'open',
    moduleSlugs: ['foreign-guests', 'greeting-guests'],
    scenario: {
      ru: 'К стойке подходит гость из Китая, который почти не говорит ни по-русски, ни по-английски. Он показывает телефон с бронью на английском, повторяет «taxi… airport… tomorrow» и показывает на часы, явно волнуясь. Из его жестов непонятно, во сколько ему нужно уехать и нужен ли ему трансфер отеля или просто вызов такси.',
      uz: 'Stoykaga Xitoydan kelgan mehmon yaqinlashadi, u rus va ingliz tillarida deyarli gapirmaydi. U telefonida inglizcha bronni ko\'rsatadi, «taxi… airport… tomorrow» deb takrorlaydi va soatga ishora qilib, aniq xavotirlanadi. Uning imo-ishoralaridan qachon ketishi kerakligi va unga mehmonxona transferi kerakmi yoki shunchaki taksi chaqirish kerakmi — tushunarsiz.',
      en: 'A guest from China approaches the desk; he speaks almost no Russian or English. He shows a booking on his phone in English, repeats "taxi… airport… tomorrow" and points at his watch, clearly worried. From his gestures it is unclear what time he needs to leave and whether he needs the hotel transfer or simply a taxi called.',
    },
    question: {
      ru: 'Напишите в 3–6 предложениях, что вы скажете гостю и какими способами будете выяснять и подтверждать его запрос.',
      uz: '3–6 gapda mehmonga nima deyishingizni va uning so\'rovini qanday usullar bilan aniqlab, tasdiqlashingizni yozing.',
      en: 'In 3–6 sentences, write what you would say to the guest and what methods you would use to clarify and confirm his request.',
    },
    rubric: {
      ru:
        '• Начинает с улыбки и спокойного тона, снимает напряжение («Не переживайте, я помогу»); говорит медленно, короткими простыми фразами без сленга и не повышает голос\n' +
        '• Использует визуальные средства: пишет время и цену на бумаге, показывает часы или календарь, использует жесты\n' +
        '• Применяет приложение-переводчик (в том числе на китайский) как инструмент, но продолжает общаться напрямую, не «прячась» за телефон\n' +
        '• Подтверждает понимание, повторяя детали: дата, время выезда, аэропорт, тип услуги (трансфер отеля или такси), стоимость — и получает чёткое «да» от гостя\n' +
        '• Фиксирует договорённость письменно (записка или сообщение в WhatsApp с временем и ценой) и не передразнивает акцент или произношение гостя',
      uz:
        '• Tabassum va xotirjam ohangdan boshlaydi, taranglikni yumshatadi («Xavotir olmang, yordam beraman»); sekin, qisqa va oddiy iboralar bilan, slengsiz gapiradi, ovozini ko\'tarmaydi\n' +
        '• Ko\'rgazmali vositalardan foydalanadi: vaqt va narxni qog\'ozga yozadi, soat yoki kalendar ko\'rsatadi, imo-ishoralardan foydalanadi\n' +
        '• Tarjimon ilovasini (shu jumladan xitoy tiliga) vosita sifatida ishlatadi, lekin telefon orqasiga «yashirinmasdan» to\'g\'ridan-to\'g\'ri muloqotni davom ettiradi\n' +
        '• Tushunganini tafsilotlarni takrorlab tasdiqlaydi: sana, ketish vaqti, aeroport, xizmat turi (mehmonxona transferi yoki taksi), narx — va mehmondan aniq «ha» oladi\n' +
        '• Kelishuvni yozma mustahkamlaydi (vaqt va narx yozilgan qog\'oz yoki WhatsApp xabari) va mehmonning urg\'usi yoki talaffuziga taqlid qilmaydi',
      en:
        '• Starts with a smile and a calm tone, eases the tension ("Don\'t worry, I will help you"); speaks slowly in short simple phrases without slang and never raises the voice\n' +
        '• Uses visual aids: writes the time and price on paper, shows a clock or calendar, uses gestures\n' +
        '• Uses a translation app (including into Chinese) as a tool but keeps communicating directly, without hiding behind the phone\n' +
        '• Confirms understanding by repeating the details: date, departure time, airport, type of service (hotel transfer or taxi), price — and gets a clear "yes" from the guest\n' +
        '• Confirms the agreement in writing (a note or WhatsApp message with the time and price) and never mimics the guest\'s accent or pronunciation',
    },
  },
]
