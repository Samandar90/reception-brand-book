import type { FinalChoiceQuestion } from '@/types'

export const finalChoice2: FinalChoiceQuestion[] = [
  {
    id: 'final-mc-16',
    type: 'choice',
    moduleSlugs: ['late-checkout', 'vip-guests'],
    scenario: {
      ru: 'Суббота, 11:40. В переполненном лобби к стойке подходит постоянный гость (в профиле — пятое проживание, статус VIP) и просит выезд в 16:00: у него поздний рейс. В системе вы видите, что его номер забронирован на сегодняшнюю ночь, заезд нового гостя ожидается в 14:00, а отель на эту ночь заполнен полностью.',
      uz: 'Shanba, 11:40. Odam gavjum lobbida stoykaga doimiy mehmon (profilida — beshinchi tashrif, VIP maqomi) yaqinlashib, soat 16:00 da chiqishni so\'raydi: parvozi kech. Tizimda uning xonasi bugungi kechaga bron qilinganini, yangi mehmon soat 14:00 da kelishini va mehmonxona bu kechaga to\'liq band ekanini ko\'rasiz.',
      en: 'Saturday, 11:40. In a crowded lobby, a repeat guest (profile: fifth stay, VIP status) comes to the desk and asks to check out at 16:00 because of a late flight. In the system you see that his room is booked for tonight, with the new arrival expected at 14:00, and the hotel is fully booked tonight.',
    },
    question: {
      ru: 'Как правильно поступить?',
      uz: 'Qanday yo\'l tutish to\'g\'ri?',
      en: 'What is the right course of action?',
    },
    options: [
      {
        ru: 'Сразу согласиться на 16:00, ведь постоянный VIP-гость не должен слышать «нет», и попросить хозяйственную службу подготовить для гостя, заезжающего в 14:00, другой номер той же категории.',
        uz: 'Darhol 16:00 ga rozi bo\'lish, chunki doimiy VIP mehmon «yo\'q» so\'zini eshitmasligi kerak, va xo\'jalik xizmatidan 14:00 da keladigan mehmon uchun shu toifadagi boshqa xonani tayyorlashni so\'rash.',
        en: 'Agree to 16:00 right away, since a loyal VIP guest should never hear "no", and ask housekeeping to prepare another room of the same category for the 14:00 arrival.',
      },
      {
        ru: 'Радушно сказать: «Для нашего VIP-гостя — всё что угодно!», чтобы он почувствовал заботу, затем проверить систему и, если 16:00 невозможно, предложить хранение багажа и лаунж.',
        uz: 'Mehmon g\'amxo\'rlikni his qilishi uchun samimiy: «Bizning VIP mehmonimiz uchun — hamma narsa!» deyish, so\'ng tizimni tekshirib, 16:00 imkonsiz bo\'lsa, yuk saqlash va lounge zonasini taklif qilish.',
        en: 'Warmly say "Anything for our VIP guest!" so he feels valued, then check the system and, if 16:00 turns out to be impossible, offer luggage storage and the lounge instead.',
      },
      {
        ru: 'Вежливо отказать, сославшись на стандартное время выезда 12:00, и попросить гостя подойти после 13:00, когда в лобби станет тише, чтобы обсудить, что ещё может предложить отель.',
        uz: 'Standart chiqish vaqti 12:00 ga ishora qilib, muloyimlik bilan rad etish va mehmonxona yana nima taklif qila olishini muhokama qilish uchun lobbi tinchiganda, 13:00 dan keyin kelishini so\'rash.',
        en: 'Politely decline, citing the standard 12:00 check-out, and ask him to come back after 13:00, when the lobby is quieter, to discuss what else the hotel might offer.',
      },
      {
        ru: 'Дискретно сказать «одну минуту, проверю», затем честно объяснить, что номер нужен с 14:00, и предложить бесплатное хранение багажа и лаунж до рейса.',
        uz: 'Diskret tarzda «bir daqiqa, tekshirib ko\'ray» deb, so\'ng xona 14:00 dan kerakligini halol tushuntirish va parvozgacha bepul yuk saqlash hamda lounge zonasini taklif qilish.',
        en: 'Discreetly say "one moment, let me check", then explain honestly that the room is needed from 14:00 and offer free luggage storage and the lounge until his flight.',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'VIP-статус не отменяет правило «сначала проверь бронь на ночь, потом отвечай»: обещание, которое придётся отозвать, подрывает доверие сильнее, чем честное «нет» с альтернативой. Детали обсуждаются дискретно, а не на всё лобби, и альтернатива предлагается сразу, а не «потом».',
      uz: 'VIP maqomi «avval kechaga bronni tekshir, keyin javob ber» qoidasini bekor qilmaydi: keyin qaytarib olinadigan va\'da muqobil variantli halol «yo\'q»dan ko\'ra ishonchni ko\'proq yo\'qotadi. Tafsilotlar butun lobbiga emas, diskret muhokama qilinadi, muqobil variant esa «keyin» emas, darhol taklif qilinadi.',
      en: 'VIP status does not cancel the rule "check tonight\'s booking first, then answer": a promise you have to take back damages trust more than an honest "no" with an alternative. Details are discussed discreetly, not for the whole lobby to hear, and the alternative is offered at once, not "later".',
    },
  },
  {
    id: 'final-mc-17',
    type: 'choice',
    moduleSlugs: ['early-checkin', 'upselling-rooms'],
    scenario: {
      ru: '08:30. Семья с двумя детьми после ночного перелёта подходит к стойке: у них забронирован стандартный номер, заезд с 14:00. В системе: предыдущий гость выезжает в 12:00, уборка займёт ещё около часа. При этом номер категории Deluxe уже убран и свободен — доплата за него 40 долларов за ночь.',
      uz: '08:30. Tungi parvozdan keyin ikki bolali oila stoykaga keladi: ular standart xona bron qilgan, kirish 14:00 dan. Tizimda: oldingi mehmon 12:00 da chiqadi, tozalash yana taxminan bir soat oladi. Shu bilan birga Deluxe toifasidagi xona allaqachon tozalangan va bo\'sh — uning uchun qo\'shimcha to\'lov kechasiga 40 dollar.',
      en: '08:30. A family with two children arrives after an overnight flight: they have a Standard room booked, check-in from 14:00. The system shows the previous guest leaves at 12:00 and cleaning will take about another hour. Meanwhile a Deluxe room is already cleaned and free — the surcharge is 40 dollars per night.',
    },
    question: {
      ru: 'Какой ответ будет лучшим?',
      uz: 'Eng yaxshi javob qaysi?',
      en: 'Which response is best?',
    },
    options: [
      {
        ru: 'Сказать, что номер будет готов около 13:00, предложить пока хранение багажа и завтрак и упомянуть готовый Deluxe за 40 долларов за ночь — выбор за гостями.',
        uz: 'Xona taxminan 13:00 ga tayyor bo\'lishini aytish, hozircha yuk saqlash va nonushtani taklif qilish hamda kechasiga 40 dollarga tayyor Deluxe xonani eslatish — tanlov mehmonlarda.',
        en: 'Say the room will be ready around 13:00, offer luggage storage and breakfast meanwhile, and mention the ready Deluxe at 40 dollars per night — the choice is theirs.',
      },
      {
        ru: 'Раз дети вымотаны, сразу заселить семью в Deluxe в знак заботы, добавить доплату 40 долларов за ночь в счёт и спокойно объяснить её гостям уже при выезде.',
        uz: 'Bolalar holdan toygani uchun g\'amxo\'rlik belgisi sifatida oilani darhol Deluxe xonaga joylashtirish, kechasiga 40 dollar qo\'shimcha to\'lovni hisobga qo\'shib, chiqishda xotirjam tushuntirish.',
        en: 'Since the children are exhausted, move the family into the Deluxe right away as a caring gesture, add the 40-dollar-per-night surcharge to the bill and explain it calmly at check-out.',
      },
      {
        ru: 'Сказать: «Постараемся подготовить номер пораньше», предложить хранение багажа и столик на завтраке и попросить подойти к стойке примерно через час.',
        uz: '«Xonani ertaroq tayyorlashga harakat qilamiz» deyish, yuk saqlash va nonushtada stol taklif qilish hamda taxminan bir soatdan keyin stoykaga kelishni so\'rash.',
        en: 'Say "we\'ll try to get the room ready sooner", offer luggage storage and a table at breakfast, and ask them to check back at the desk in about an hour.',
      },
      {
        ru: 'Объяснить, что заезд начинается в 14:00, принять багаж на хранение и порекомендовать семейное кафе поблизости, где дети смогут отдохнуть и позавтракать.',
        uz: 'Kirish 14:00 dan boshlanishini tushuntirish, yukni saqlashga olish va bolalar dam olib, nonushta qilishi mumkin bo\'lgan yaqin atrofdagi oilaviy kafeni tavsiya qilish.',
        en: 'Explain that check-in starts at 14:00, take their luggage into storage and recommend a family café nearby where the children can rest and have breakfast.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Стандарт раннего заезда — конкретное время плюс комфортное ожидание, а стандарт апселлинга — прозрачная цена и уважение к выбору гостя. Доплата, о которой узнают при выезде, расплывчатое «постараемся» и умолчание о доступном варианте нарушают эти правила.',
      uz: 'Erta kirish standarti — aniq vaqt va qulay kutish, sotuvni oshirish standarti — shaffof narx va mehmon tanloviga hurmat. Chiqishda ma\'lum bo\'ladigan qo\'shimcha to\'lov, noaniq «harakat qilamiz» va mavjud variant haqida jim turish bu qoidalarni buzadi.',
      en: 'The early check-in standard is a specific time plus a comfortable wait; the upselling standard is a transparent price and respect for the guest\'s choice. A surcharge discovered at check-out, a vague "we\'ll try" and keeping quiet about an available option all break these rules.',
    },
  },
  {
    id: 'final-mc-18',
    type: 'choice',
    moduleSlugs: ['complaints', 'check-in'],
    scenario: {
      ru: '15:10. Гость приехал ровно к 14:00, заезд был подтверждён на это время, но уборка отстаёт, и он ждёт уже больше часа. Теперь он громко, на всё лобби, заявляет: «Это худший отель, в котором я останавливался!» Рядом стоят другие гости.',
      uz: '15:10. Mehmon roppa-rosa 14:00 ga keldi, kirish shu vaqtga tasdiqlangan edi, lekin tozalash kechikmoqda va u bir soatdan ortiq kutmoqda. Endi u butun lobbiga eshitiladigan qilib: «Bu men to\'xtagan eng yomon mehmonxona!» deydi. Yonida boshqa mehmonlar turibdi.',
      en: '15:10. A guest arrived exactly at 14:00 for a confirmed 14:00 check-in, but housekeeping is behind and he has been waiting for over an hour. Now he declares loudly, for the whole lobby to hear: "This is the worst hotel I have ever stayed at!" Other guests are standing nearby.',
    },
    question: {
      ru: 'Что следует сделать в первую очередь?',
      uz: 'Birinchi navbatda nima qilish kerak?',
      en: 'What should you do first?',
    },
    options: [
      {
        ru: 'Извиниться, а затем спокойно объяснить, что сегодня не хватает горничных и ресепшен в задержке не виноват, чтобы гость понял настоящую причину и перестал винить стойку.',
        uz: 'Uzr so\'rab, so\'ng bugun xizmatchilar yetishmayotganini va kechikishda resepshen aybdor emasligini xotirjam tushuntirish, toki mehmon haqiqiy sababni tushunib, stoykani ayblashni to\'xtatsin.',
        en: 'Apologise, then calmly explain that housekeeping is short-staffed today and the delay is not the reception\'s fault, so he understands the real reason and stops blaming the desk.',
      },
      {
        ru: 'Извиниться и твёрдо, но вежливо сказать: «Я вас понимаю, но, пожалуйста, говорите тише», а затем пообещать номер через 15 минут, чтобы быстрее его успокоить.',
        uz: 'Uzr so\'rab, qat\'iy, lekin muloyim: «Sizni tushunaman, lekin iltimos, ovozingizni pasaytiring» deyish, so\'ng uni tezroq tinchlantirish uchun 15 daqiqada xona berishni va\'da qilish.',
        en: 'Apologise and say firmly but politely, "I understand, but please keep your voice down", then promise him the room within 15 minutes to calm him down quickly.',
      },
      {
        ru: 'Дать гостю договорить, искренне извиниться, пригласить его в лаунж на кофе и лично узнать у хозяйственной службы точное время готовности номера.',
        uz: 'Mehmonga gapini tugatishga imkon berish, chin dildan uzr so\'rash, uni lounge zonasiga qahvaga taklif qilish va xo\'jalik xizmatidan xonaning aniq tayyor bo\'lish vaqtini shaxsan bilish.',
        en: 'Let him finish, apologise sincerely, invite him to the lounge for a coffee and personally get an exact ready time from housekeeping to bring back to him.',
      },
      {
        ru: 'Извиниться и сразу предложить бесплатную ночь в качестве компенсации, чтобы быстрее прекратить сцену на глазах у других гостей, а менеджеру сообщить уже после.',
        uz: 'Uzr so\'rab, boshqa mehmonlar ko\'z o\'ngidagi janjalni tezroq to\'xtatish uchun darhol kompensatsiya sifatida bepul kechani taklif qilish, menejerga esa keyin xabar berish.',
        en: 'Apologise and immediately offer a free night as compensation to end the scene in front of the other guests quickly, and inform the manager afterwards.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'По модели LAST сначала слушают и извиняются, а конфликт уводят из публичной зоны; затем даются конкретное время и альтернатива. Оправдание персонала, замечание гостю, непроверенное обещание и компенсация без менеджера — типичные ошибки.',
      uz: 'LAST modeli bo\'yicha avval tinglanadi va uzr so\'raladi, ziddiyat ommaviy joydan olib chiqiladi; keyin aniq vaqt va muqobil variant beriladi. Xodimlarni oqlash, mehmonga tanbeh berish, tekshirilmagan va\'da va menejersiz kompensatsiya — odatiy xatolar.',
      en: 'Under the LAST model you listen and apologise first and move the conflict out of public view; then you give a specific time and an alternative. Defending staff, reprimanding the guest, an unverified promise and compensation without the manager are classic mistakes.',
    },
  },
  {
    id: 'final-mc-19',
    type: 'choice',
    moduleSlugs: ['complaints', 'booking-com-guests'],
    scenario: {
      ru: '22:30, последний заезд за день. Гость показывает подтверждение Booking.com с предоплатой по невозвратному тарифу, но отель овербукнут: свободных номеров нет. Гость устал с дороги и начинает раздражаться.',
      uz: '22:30, kunning oxirgi kelishi. Mehmon Booking.com orqali qaytarilmaydigan tarif bo\'yicha oldindan to\'langan tasdiqnomani ko\'rsatadi, lekin mehmonxonada ortiqcha bron bo\'lgan: bo\'sh xona yo\'q. Mehmon yo\'ldan charchagan va asabiylasha boshlaydi.',
      en: '22:30, the last arrival of the day. The guest shows a Booking.com confirmation, prepaid on a non-refundable rate, but the hotel is overbooked: there are no rooms left. The guest is tired from travelling and starting to get irritated.',
    },
    question: {
      ru: 'Какое решение соответствует стандарту?',
      uz: 'Qaysi yechim standartga mos keladi?',
      en: 'Which course of action meets the standard?',
    },
    options: [
      {
        ru: 'Извиниться, объяснить, что Booking.com иногда присылает брони, когда отель уже заполнен, и помочь гостю запросить через платформу полный возврат и новую бронь.',
        uz: 'Uzr so\'rab, Booking.com ba\'zan mehmonxona to\'lganidan keyin ham bron yuborishini tushuntirish va mehmonga platforma orqali to\'liq pulni qaytarish hamda yangi bron so\'rashda yordam berish.',
        en: 'Apologise, explain that Booking.com sometimes sends reservations after the hotel is already full, and help him request a full refund and a new booking through the platform.',
      },
      {
        ru: 'Извиниться от имени отеля, организовать номер не ниже классом в партнёрском отеле рядом с оплаченным трансфером, уведомить менеджера и объяснить компенсацию.',
        uz: 'Mehmonxona nomidan uzr so\'rash, yaqin hamkor mehmonxonada teng yoki yuqori toifadagi xonani to\'langan transfer bilan tashkil qilish, menejerga xabar berib, kompensatsiyani tushuntirish.',
        en: 'Apologise on behalf of the hotel, arrange an equal or better room at a partner hotel nearby with a paid transfer, notify the manager and explain the compensation policy.',
      },
      {
        ru: 'Извиниться, угостить гостя напитком в лобби-баре и попросить подождать до полуночи, когда снимаются неподтверждённые брони и номер, скорее всего, освободится.',
        uz: 'Uzr so\'rab, mehmonni lobbi-barda ichimlik bilan siylash va tasdiqlanmagan bronlar bekor qilinadigan yarim tungacha kutishni so\'rash — ehtimol, xona bo\'shaydi.',
        en: 'Apologise, offer him a drink in the lobby bar and ask him to wait until midnight, when unconfirmed bookings are released and a room will probably come free.',
      },
      {
        ru: 'Извиниться, дать гостю список ближайших отелей со свободными номерами и пообещать, что отель вернёт стоимость ночи, как только он пришлёт чек.',
        uz: 'Uzr so\'rab, mehmonga bo\'sh xonalari bor yaqin mehmonxonalar ro\'yxatini berish va u chekni yuborishi bilan mehmonxona kecha narxini qaytarishini va\'da qilish.',
        en: 'Apologise, give him a list of nearby hotels with free rooms and promise that the hotel will refund the cost of the night as soon as he sends the receipt.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'При овербукинге отель берёт ответственность полностью: партнёрский отель равного или лучшего уровня, оплаченный транспорт и компенсация. Перекладывать вину на платформу, держать гостя в ожидании «а вдруг» или оставлять поиск ночлега ему самому недопустимо.',
      uz: 'Ortiqcha bronda mehmonxona javobgarlikni to\'liq o\'z zimmasiga oladi: teng yoki yaxshiroq darajadagi hamkor mehmonxona, to\'langan transport va kompensatsiya. Aybni platformaga to\'nkash, mehmonni «balki» deb kuttirish yoki tunash joyini o\'zi topishga qoldirish mumkin emas.',
      en: 'In an overbooking the hotel takes full responsibility: an equal or better partner hotel, paid transport and compensation. Shifting the blame to the platform, keeping the guest waiting on a chance or leaving him to find a bed himself is unacceptable.',
    },
  },
  {
    id: 'final-mc-20',
    type: 'choice',
    moduleSlugs: ['foreign-guests', 'phone-communication'],
    scenario: {
      ru: '22:00, тихая смена. Звонит гость из номера 707: он говорит на очень ограниченном английском с сильным акцентом. Вы разбираете только слова «tomorrow», «airport» и «taxi».',
      uz: '22:00, tinch smena. 707-xonadan mehmon qo\'ng\'iroq qiladi: u kuchli urg\'u bilan juda cheklangan inglizchada gapiradi. Siz faqat «tomorrow», «airport» va «taxi» so\'zlarini tushunasiz.',
      en: '22:00, a quiet shift. A guest calls from room 707: he speaks very limited English with a strong accent. You can only make out the words "tomorrow", "airport" and "taxi".',
    },
    question: {
      ru: 'Как правильно построить разговор?',
      uz: 'Suhbatni qanday olib borish to\'g\'ri?',
      en: 'How should you handle the call?',
    },
    options: [
      {
        ru: 'Говорить медленно и простыми словами, повторять каждую деталь для подтверждения («Taxi. Airport. Tomorrow. What time?») и предложить подтверждение в WhatsApp.',
        uz: 'Sekin va sodda so\'zlar bilan gapirish, har bir tafsilotni tasdiq uchun qaytarib aytish («Taxi. Airport. Tomorrow. What time?») va WhatsApp orqali tasdiq yuborishni taklif qilish.',
        en: 'Slow down, use short simple words, repeat each detail back to confirm it ("Taxi. Airport. Tomorrow. What time?") and offer to send a confirmation via WhatsApp.',
      },
      {
        ru: 'Не затягивать разговор: сказать «OK, taxi, airport, tomorrow», заказать машину на 06:00, как обычно выбирают гости, и подсунуть под дверь записку со временем.',
        uz: 'Suhbatni cho\'zmaslik: «OK, taxi, airport, tomorrow» deb, mashinani mehmonlar odatda tanlaydigan 06:00 ga buyurtma qilish va vaqt yozilgan xatni eshik tagidan qo\'yish.',
        en: 'Keep the call short: say "OK, taxi, airport, tomorrow", book the car for 06:00 as most guests choose, and slide a note with the time under his door.',
      },
      {
        ru: 'Весь разговор вести только через переводчик на громкой связи, зачитывая его и свои фразы, чтобы ничего не потерять и не пытаться разбирать его английский.',
        uz: 'Butun suhbatni faqat baland ovozli aloqadagi tarjimon orqali olib borish, uning va o\'z iboralaringizni o\'qib berib, hech narsa yo\'qolmasligi va uning inglizchasini tushunishga urinmaslik uchun.',
        en: 'Run the whole call through a translation app on speaker, reading out his words and yours, so nothing is lost and you do not have to work out his English.',
      },
      {
        ru: 'Вежливо сказать, что вы не понимаете, и попросить перезвонить утром, когда на смене будет коллега, знающий его язык и способный всё правильно оформить.',
        uz: 'Tushunmayotganingizni muloyimlik bilan aytib, ertalab uning tilini biladigan va hammasini to\'g\'ri rasmiylashtira oladigan hamkasb smenada bo\'lganda qayta qo\'ng\'iroq qilishni so\'rash.',
        en: 'Politely say you do not understand and ask him to call back in the morning, when a colleague who speaks his language is on duty and can arrange everything properly.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'С иностранным гостем говорят проще и медленнее, пробуя понять друг друга напрямую, а переводчик и письменные сообщения служат опорой, а не заменой. По телефону нельзя угадывать: детали подтверждаются повтором, а не домыслами.',
      uz: 'Xorijiy mehmon bilan soddaroq va sekinroq, bevosita tushunishga harakat qilib gapiriladi, tarjimon va yozma xabarlar esa o\'rinbosar emas, tayanch bo\'ladi. Telefonda taxmin qilib bo\'lmaydi: tafsilotlar taxmin bilan emas, qaytarib aytish orqali tasdiqlanadi.',
      en: 'With a foreign guest you speak more simply and slowly and try to understand each other directly, using a translation app and written messages as support, not a substitute. On the phone you never guess: details are confirmed by repeating them back, not by assumption.',
    },
  },
  {
    id: 'final-mc-21',
    type: 'choice',
    moduleSlugs: ['lost-items', 'check-out'],
    scenario: {
      ru: '09:05. Горничная приносит на стойку паспорт, найденный в номере 305: гость выехал двадцать минут назад и уехал на такси в аэропорт. У стойки в это время очередь из трёх гостей на выезд.',
      uz: '09:05. Xizmatchi 305-xonada topilgan pasportni stoykaga olib keladi: mehmon yigirma daqiqa oldin chiqib, taksida aeroportga ketgan. Shu paytda stoyka oldida chiqish uchun uch mehmon navbatda turibdi.',
      en: '09:05. A housekeeper brings a passport found in room 305 to the desk: the guest checked out twenty minutes ago and left for the airport by taxi. Meanwhile three guests are queuing at the desk to check out.',
    },
    question: {
      ru: 'Какая последовательность действий верна?',
      uz: 'Qaysi harakatlar ketma-ketligi to\'g\'ri?',
      en: 'Which sequence of actions is correct?',
    },
    options: [
      {
        ru: 'Убрать паспорт в сейф, быстро обслужить очередь, затем внести его в журнал находок со всеми деталями и позвонить гостю по номеру из брони.',
        uz: 'Pasportni seyfga qo\'yib, navbatni tez o\'tkazish, so\'ng uni barcha tafsilotlari bilan topilmalar jurnaliga kiritib, brondagi raqam orqali mehmonga qo\'ng\'iroq qilish.',
        en: 'Put the passport in the safe, serve the queue quickly, then log it in the register with all the details and call the guest on the number in the booking.',
      },
      {
        ru: 'Сразу внести паспорт в журнал находок со всеми деталями, отправить письмо об этом на e-mail из брони и продолжить обслуживать очередь.',
        uz: 'Pasportni darhol barcha tafsilotlari bilan topilmalar jurnaliga kiritish, bu haqda bronda ko\'rsatilgan e-mailga xat yuborish va navbatga xizmat ko\'rsatishni davom ettirish.',
        en: 'Log the passport straight away with all the details, send an e-mail about it to the address in the booking, and carry on serving the queue.',
      },
      {
        ru: 'Отдать паспорт обратно горничной на хранение до звонка гостя, чтобы стойка была свободна для очереди, и записать его в журнал, когда наплыв спадёт.',
        uz: 'Stoyka navbat uchun bo\'sh qolishi uchun pasportni mehmon qo\'ng\'iroq qilguncha saqlab turishga xizmatchiga qaytarib berish va gavjumlik pasayganda jurnalga yozish.',
        en: 'Give the passport back to the housekeeper to keep until the guest calls, so the desk stays free for the queue, and log it once the rush is over.',
      },
      {
        ru: 'Попросить очередь подождать минуту, внести паспорт в журнал и сразу позвонить гостю по номеру из брони, пока он не доехал до аэропорта.',
        uz: 'Navbatdan bir daqiqa kutishni so\'rab, pasportni jurnalga kiritish va mehmon aeroportga yetmasdan brondagi raqamga darhol qo\'ng\'iroq qilish.',
        en: 'Ask the queue for one minute, log the passport in the register and call the guest at once on the booking number, before he reaches the airport.',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Находка регистрируется сразу, а не «когда будет время», и о ценной вещи отель связывается с гостем первым по контактам из брони. Паспорт по дороге в аэропорт — случай, где минуты решают, поэтому нужен звонок, а не письмо, и его нельзя откладывать до конца очереди.',
      uz: 'Topilma «vaqt bo\'lganda» emas, darhol ro\'yxatga olinadi, qimmatli buyum haqida mehmonxona brondagi kontaktlar orqali mehmon bilan birinchi bo\'lib bog\'lanadi. Aeroportga yo\'ldagi pasport — daqiqalar hal qiluvchi holat, shuning uchun xat emas, qo\'ng\'iroq kerak va uni navbat tugaguncha kechiktirib bo\'lmaydi.',
      en: 'A found item is logged immediately, not "when there is time", and for a valuable item the hotel contacts the guest first using the booking details. A passport on the way to the airport is a case where minutes matter, so it calls for a phone call rather than an e-mail, and the call cannot wait until the queue is done.',
    },
  },
  {
    id: 'final-mc-22',
    type: 'choice',
    moduleSlugs: ['emergency-procedures', 'check-in'],
    scenario: {
      ru: '21:40. Вы одни на стойке и заселяете пару. В лобби входит заметно нетрезвый мужчина, который не проживает в отеле: он кричит, что здесь остановилась его жена, требует сказать, в каком она номере, и бьёт кулаком по стойке. Пара испуганно отступает.',
      uz: '21:40. Siz stoykada yolg\'izsiz va bir juftlikni ro\'yxatdan o\'tkazyapsiz. Lobbiga mehmonxonada yashamaydigan, ko\'rinib turibdiki mast erkak kiradi: u shu yerda xotini to\'xtaganini baqirib aytib, uning qaysi xonada ekanini aytishni talab qiladi va stoykaga musht uradi. Juftlik qo\'rqib, orqaga chekinadi.',
      en: '21:40. You are alone at the desk, checking in a couple. A visibly drunk man who is not staying at the hotel walks in: he shouts that his wife is staying here, demands to know her room number and bangs his fist on the counter. The couple step back in alarm.',
    },
    question: {
      ru: 'Как правильно действовать?',
      uz: 'Qanday harakat qilish to\'g\'ri?',
      en: 'What is the right way to act?',
    },
    options: [
      {
        ru: 'Спокойно сказать, что номера комнат не сообщаются, но предложить позвонить его жене в номер и передать, что он ждёт в лобби, — чтобы он успокоился.',
        uz: 'Xona raqamlari aytilmasligini xotirjam tushuntirish, lekin u tinchlanishi uchun xotinining xonasiga qo\'ng\'iroq qilib, u lobbida kutayotganini aytishni taklif qilish.',
        en: 'Calmly say room numbers are not given out, but offer to call his wife\'s room and tell her he is waiting in the lobby, so that he calms down.',
      },
      {
        ru: 'Выйти из-за стойки, крепко взять мужчину под руку и самому вывести его к выходу, чтобы пара могла спокойно закончить заселение, не дожидаясь охраны.',
        uz: 'Stoyka ortidan chiqib, erkakni qo\'lidan mahkam ushlab, o\'zingiz eshikka olib chiqish, toki juftlik xavfsizlik xizmatini kutmasdan ro\'yxatdan o\'tishni xotirjam tugatsin.',
        en: 'Step out from behind the desk, take the man firmly by the arm and walk him to the exit yourself, so the couple can finish check-in without waiting for security.',
      },
      {
        ru: 'Говорить спокойно и вежливо, не давать никаких сведений о гостях, вызвать охрану по протоколу (полицию, 102, если он не успокоится) и держаться за стойкой.',
        uz: 'Xotirjam va muloyim gapirish, mehmonlar haqida ma\'lumot bermaslik, protokol bo\'yicha xavfsizlik xizmatini (u tinchlanmasa — politsiyani, 102) chaqirish va stoyka ortida qolish.',
        en: 'Stay calm and polite, give out no guest details, call security per protocol (police on 102 if he escalates) and keep a safe distance behind the desk.',
      },
      {
        ru: 'Сначала быстро закончить заселение пары, чтобы они поднялись в номер, а затем заняться мужчиной; охрану вызвать, только если он действительно перейдёт к насилию.',
        uz: 'Avval juftlikni tezda ro\'yxatdan o\'tkazib, xonaga chiqarib yuborish, so\'ng erkak bilan shug\'ullanish; xavfsizlik xizmatini faqat u haqiqatan zo\'ravonlikka o\'tsa chaqirish.',
        en: 'First finish the couple\'s check-in quickly so they can go up to their room, then deal with the man; call security only if he actually turns violent.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'При инциденте безопасности протокол — спокойный тон, никакого физического противостояния и немедленный вызов охраны или полиции; агрессор не получает никаких сведений о гостях, даже косвенно. Пытаться справиться самому, ждать насилия или «помогать» ему связаться с гостьей — значит подвергать людей риску.',
      uz: 'Xavfsizlik hodisasida protokol — xotirjam ohang, hech qanday jismoniy to\'qnashuvsiz va darhol xavfsizlik xizmati yoki politsiyani chaqirish; tajovuzkor mehmonlar haqida bilvosita ham hech qanday ma\'lumot olmaydi. O\'zingiz hal qilishga urinish, zo\'ravonlikni kutish yoki unga mehmon bilan bog\'lanishda «yordam berish» odamlarni xavf ostiga qo\'yadi.',
      en: 'In a security incident the protocol is a calm tone, no physical confrontation and an immediate call to security or the police; the aggressor gets no information about any guest, not even indirectly. Handling him alone, waiting for violence or "helping" him reach the guest puts people at risk.',
    },
  },
  {
    id: 'final-mc-23',
    type: 'choice',
    moduleSlugs: ['vip-guests', 'greeting-guests'],
    scenario: {
      ru: '15:00, вы принимаете вечернюю смену. В списке VIP-заездов — постоянный гость (восьмое проживание), прибытие в 16:00. В профиле: аллергия на перо, предпочитает высокий этаж, в номере всегда просит газированную воду. Система автоматически назначила ему номер на втором этаже со стандартными перьевыми подушками.',
      uz: '15:00, siz kechki smenani qabul qilyapsiz. VIP kelishlar ro\'yxatida — doimiy mehmon (sakkizinchi tashrif), kelish 16:00 da. Profilida: patga allergiya, yuqori qavatni afzal ko\'radi, xonada doim gazli suv so\'raydi. Tizim unga avtomatik ravishda ikkinchi qavatdagi, standart pat yostiqli xonani biriktirgan.',
      en: '15:00, you are taking over the evening shift. The VIP arrivals list shows a repeat guest (eighth stay) arriving at 16:00. Profile: feather allergy, prefers a high floor, always asks for sparkling water in the room. The system has automatically assigned him a second-floor room with standard feather pillows.',
    },
    question: {
      ru: 'Как поступить правильно?',
      uz: 'Qanday yo\'l tutish to\'g\'ri?',
      en: 'What is the right thing to do?',
    },
    options: [
      {
        ru: 'Пока оставить назначенный номер, а при встрече поприветствовать гостя по имени и уточнить, актуальны ли его предпочтения: с прошлого визита они могли измениться.',
        uz: 'Hozircha biriktirilgan xonani qoldirish, kelganda esa mehmonni ismi bilan kutib olib, xohishlari hali ham dolzarbmi deb aniqlashtirish: oxirgi tashrifidan beri ular o\'zgargan bo\'lishi mumkin.',
        en: 'Keep the assigned room for now, then greet him by name on arrival and check whether his preferences still apply, since they may have changed since his last visit.',
      },
      {
        ru: 'До приезда переселить его на высокий этаж, попросить хозяйственную службу положить гипоаллергенные подушки и газированную воду и подготовиться приветствовать его по имени.',
        uz: 'Kelishidan oldin uni yuqori qavatga o\'tkazish, xo\'jalik xizmatidan gipoallergenik yostiqlar va gazli suv qo\'yishni so\'rash hamda uni ismi bilan kutib olishga tayyorlanish.',
        en: 'Before he arrives, move him to a high floor, have housekeeping put in hypoallergenic pillows and sparkling water, and prepare to greet him by name.',
      },
      {
        ru: 'Попросить хозяйственную службу заменить подушки на гипоаллергенные, но оставить номер на втором этаже: ручная смена автоматического назначения может вызвать ошибки в системе.',
        uz: 'Xo\'jalik xizmatidan yostiqlarni gipoallergenik yostiqlarga almashtirishni so\'rash, lekin ikkinchi qavatdagi xonani qoldirish: avtomatik biriktirishni qo\'lda o\'zgartirish tizimda xatolarga olib kelishi mumkin.',
        en: 'Ask housekeeping to swap the pillows for hypoallergenic ones but keep the second-floor room, since changing an automatic assignment by hand can cause errors in the system.',
      },
      {
        ru: 'Оставить назначенный номер, а при встрече пообещать гостю апгрейд до люкса в знак признательности, не проверяя, свободен ли люкс сегодня.',
        uz: 'Biriktirilgan xonani qoldirish, kelganda esa mehmonga minnatdorchilik belgisi sifatida lyuksga yaxshilashni va\'da qilish, bugun lyuks bo\'sh yoki yo\'qligini tekshirmasdan.',
        en: 'Keep the assigned room and, when he arrives, promise him a suite upgrade as a thank-you for his loyalty, without checking whether a suite is free tonight.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Профиль VIP-гостя изучают до приезда и готовят номер под все известные предпочтения — спрашивать о них на заселении уже поздно. Подготовка «наполовину» и обещание непроверенного апгрейда — типичные ошибки из модуля.',
      uz: 'VIP mehmon profili kelishidan oldin o\'rganiladi va xona barcha ma\'lum xohishlarga moslab tayyorlanadi — ular haqida ro\'yxatdan o\'tkazishda so\'rash kech. «Yarimta» tayyorgarlik va tekshirilmagan yaxshilashni va\'da qilish — moduldagi odatiy xatolar.',
      en: 'A VIP profile is reviewed before arrival and the room is prepared to all the known preferences — asking about them at check-in is too late. Half-done preparation and promising an unverified upgrade are classic mistakes from the module.',
    },
  },
  {
    id: 'final-mc-24',
    type: 'choice',
    moduleSlugs: ['late-checkout', 'check-out'],
    scenario: {
      ru: '11:50. Гость звонит из номера: его рейс в 21:00, он просит остаться до 17:00. В системе номер на сегодняшнюю ночь не забронирован. По правилам отеля выезд до 14:00 бесплатный, а позднее 14:00 стоит 50% от стоимости ночи.',
      uz: '11:50. Mehmon xonadan qo\'ng\'iroq qiladi: parvozi 21:00 da, u 17:00 gacha qolishni so\'raydi. Tizimda xona bugungi kechaga bron qilinmagan. Mehmonxona qoidalariga ko\'ra 14:00 gacha chiqish bepul, 14:00 dan keyin esa bir kechalik narxning 50 foizini tashkil qiladi.',
      en: '11:50. A guest calls from his room: his flight is at 21:00 and he asks to stay until 17:00. The system shows the room is not booked for tonight. Under hotel policy, check-out until 14:00 is free, and later than 14:00 costs 50% of the nightly rate.',
    },
    question: {
      ru: 'Какой ответ соответствует стандарту?',
      uz: 'Qaysi javob standartga mos keladi?',
      en: 'Which answer meets the standard?',
    },
    options: [
      {
        ru: 'Назвать условия: до 14:00 — бесплатно, до 17:00 — 50% стоимости ночи; спросить, что он выбирает, затем отметить это в системе и уведомить хозяйственную службу.',
        uz: 'Shartlarni aytish: 14:00 gacha — bepul, 17:00 gacha — kecha narxining 50 foizi; qaysi birini tanlashini so\'rash, so\'ng buni tizimda qayd etib, xo\'jalik xizmatini xabardor qilish.',
        en: 'State the terms: until 14:00 is free, until 17:00 is 50% of the nightly rate; ask which he prefers, then record it in the system and notify housekeeping.',
      },
      {
        ru: 'Чётко объяснить, что выезд в 17:00 стоит 50% стоимости ночи, подтвердить после согласия гостя и добавить сумму в счёт — номер сегодня свободен, так что больше никого предупреждать не нужно.',
        uz: '17:00 da chiqish kecha narxining 50 foizi ekanini aniq tushuntirish, mehmon rozi bo\'lgach tasdiqlash va summani hisobga qo\'shish — xona bugun bo\'sh, shuning uchun boshqa hech kimni ogohlantirish shart emas.',
        en: 'Clearly explain that staying until 17:00 costs 50% of the nightly rate, confirm once he agrees and add it to his bill — the room is free tonight, so nobody else needs to be told.',
      },
      {
        ru: 'Напомнить, что стандартный выезд в 12:00, предложить бесплатное хранение багажа до вечернего рейса и рассказать о лаунже в лобби, где можно удобно подождать.',
        uz: 'Standart chiqish 12:00 da ekanini eslatish, kechki parvozgacha bepul yuk saqlashni taklif qilish va qulay kutish mumkin bo\'lgan lobbidagi lounge zonasi haqida aytish.',
        en: 'Remind him that standard check-out is at 12:00, offer free luggage storage until his evening flight and mention the lobby lounge where he can wait comfortably.',
      },
      {
        ru: 'Разрешить остаться до 17:00 бесплатно, раз номер сегодня всё равно пустует, и отметить исключение в системе, чтобы хозяйственная служба не пришла на уборку раньше.',
        uz: 'Xona bugun baribir bo\'sh turgani uchun 17:00 gacha bepul qolishga ruxsat berish va xo\'jalik xizmati tozalashga erta kelmasligi uchun istisnoni tizimda qayd etish.',
        en: 'Let him stay until 17:00 free of charge, as the room is empty tonight anyway, and note the exception in the system so housekeeping does not come to clean too early.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Плата за поздний выезд озвучивается заранее и спокойно, с выбором для гостя, а новое время выезда обязательно передаётся хозяйственной службе. Отказ при свободном номере лишает гостя услуги, а бесплатное продление вопреки правилам — самовольное решение вне вашей компетенции.',
      uz: 'Kech chiqish uchun to\'lov oldindan va xotirjam, mehmonga tanlov berilgan holda aytiladi, yangi chiqish vaqti esa albatta xo\'jalik xizmatiga yetkaziladi. Xona bo\'sh bo\'lganda rad etish mehmonni xizmatdan mahrum qiladi, qoidalarga zid bepul uzaytirish esa vakolatingizdan tashqari o\'zboshimcha qaror.',
      en: 'A late check-out fee is stated upfront and calmly, giving the guest a choice, and the new check-out time is always passed on to housekeeping. Declining when the room is free deprives the guest of a service, and a free extension against policy is an unauthorised decision outside your remit.',
    },
  },
  {
    id: 'final-mc-25',
    type: 'choice',
    moduleSlugs: ['foreign-guests', 'check-in'],
    scenario: {
      ru: 'Заселяется семья из Малайзии; по-русски они не говорят, по-английски — с трудом. С помощью жестов и переводчика в телефоне они спрашивают, халяльный ли завтрак, и просят карту города. У стойки в это время ждут ещё двое гостей.',
      uz: 'Malayziyadan kelgan oila ro\'yxatdan o\'tmoqda; ular ruscha gapirmaydi, inglizchada — zo\'rg\'a. Imo-ishora va telefondagi tarjimon yordamida nonushta halolmi deb so\'rab, shahar xaritasini ham iltimos qilishadi. Shu paytda stoyka oldida yana ikki mehmon kutmoqda.',
      en: 'A family from Malaysia is checking in; they speak no Russian and only a little English. Using gestures and a translation app on their phone, they ask whether breakfast is halal and request a city map. Two more guests are waiting at the desk.',
    },
    question: {
      ru: 'Как правильно провести заселение?',
      uz: 'Ro\'yxatdan o\'tkazishni qanday tashkil qilish to\'g\'ri?',
      en: 'How should you handle this check-in?',
    },
    options: [
      {
        ru: 'Сказать, что завтрак интернациональный и они наверняка что-нибудь найдут, выдать ключ с карточкой Wi-Fi и дать карту города, чтобы не задерживать ожидающих гостей.',
        uz: 'Nonushta xalqaro ekanini va ular albatta biror narsa topishini aytish, kalitni Wi-Fi kartochkasi bilan berish va kutayotgan mehmonlarni ushlab qolmaslik uchun shahar xaritasini berish.',
        en: 'Say breakfast is international so they will surely find something, hand over the key with the Wi-Fi card and give them a city map, so as not to hold up the waiting guests.',
      },
      {
        ru: 'Заверить через переводчик, что весь завтрак халяльный, раз свинину в отеле не подают, затем отметить отель на карте и написать время завтрака и выезда на конверте для ключ-карты.',
        uz: 'Mehmonxonada cho\'chqa go\'shti berilmagani uchun tarjimon orqali butun nonushta halol ekaniga ishontirish, so\'ng xaritada mehmonxonani belgilab, nonushta va chiqish vaqtini kalit-karta konvertiga yozish.',
        en: 'Assure them through the app that the whole breakfast is halal since the hotel serves no pork, then mark the hotel on a map and write breakfast and check-out times on the key-card sleeve.',
      },
      {
        ru: 'Подробно, на английском, описать всё меню завтрака, включая местные блюда и способы их приготовления, чтобы семья сама решила, какие блюда ей подходят.',
        uz: 'Oila o\'ziga qaysi taomlar mos kelishini o\'zi hal qilishi uchun nonushta menyusini, jumladan mahalliy taomlar va ularning tayyorlanish usullarini inglizchada batafsil tasvirlab berish.',
        en: 'Describe the whole breakfast menu in detail in English, including local dishes and how they are made, so the family can decide for themselves which dishes suit them.',
      },
      {
        ru: 'Через переводчик назвать халяльные блюда завтрака (при сомнении уточнив у кухни), отметить халяльные кафе на карте и написать время завтрака, Wi-Fi и выезд на конверте для ключ-карты.',
        uz: 'Tarjimon orqali nonushtaning halol taomlarini aytish (shubha bo\'lsa, oshxonadan aniqlab), xaritada halol kafelarni belgilash va nonushta vaqti, Wi-Fi hamda chiqishni kalit-karta konvertiga yozish.',
        en: 'Via the translation app, say which breakfast dishes are halal (asking the kitchen if unsure), mark halal cafés on a map and write breakfast, Wi-Fi and check-out on the key-card sleeve.',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Стандарт для иностранных гостей — простые фразы, визуальные опоры (карта, цифры) и уважение к диетическим ограничениям, которые проверяют, а не угадывают: «без свинины» ещё не значит «халяль». Заселение при этом включает обязательный инструктаж о завтраке, Wi-Fi и выезде.',
      uz: 'Xorijiy mehmonlar uchun standart — sodda iboralar, ko\'rgazmali tayanchlar (xarita, raqamlar) va ovqatlanish cheklovlariga hurmat, ular taxmin qilinmaydi, tekshiriladi: «cho\'chqa go\'shtisiz» hali «halol» degani emas. Ro\'yxatdan o\'tkazish esa nonushta, Wi-Fi va chiqish haqida majburiy ma\'lumot berishni o\'z ichiga oladi.',
      en: 'The standard for foreign guests is simple phrases, visual aids (a map, numbers) and respect for dietary needs, which are checked rather than guessed: "no pork" does not yet mean halal. Check-in still includes the mandatory briefing on breakfast, Wi-Fi and check-out.',
    },
  },
  {
    id: 'final-mc-26',
    type: 'choice',
    moduleSlugs: ['lost-items', 'complaints'],
    scenario: {
      ru: '19:30. К стойке подходит раздражённый гость из номера 512, который проживает ещё две ночи: после уборки он не может найти беспроводные наушники, оставленные на тумбочке, и заявляет, что «горничная наверняка их взяла». В журнале находок записей нет, горничная этого этажа ещё на смене.',
      uz: '19:30. Stoykaga mehmonxonada yana ikki kecha qoladigan 512-xonadagi asabiy mehmon keladi: tozalashdan keyin u tumbochkada qoldirgan simsiz quloqchinlarini topa olmayapti va «xizmatchi ularni olgan bo\'lsa kerak» deydi. Topilmalar jurnalida yozuv yo\'q, shu qavat xizmatchisi hali smenada.',
      en: '19:30. An irritated guest from room 512, who is staying two more nights, comes to the desk: after his room was cleaned he cannot find the wireless headphones he left on the bedside table, and claims "the housekeeper must have taken them". There is no entry in the lost-and-found register, and the room attendant for his floor is still on shift.',
    },
    question: {
      ru: 'Какая реакция правильная?',
      uz: 'Qaysi javob to\'g\'ri?',
      en: 'Which response is correct?',
    },
    options: [
      {
        ru: 'Извиниться, проверить журнал находок и, раз записей нет, сообщить, что в номере ничего не находили, и предложить ещё раз поискать в сумках и сейфе.',
        uz: 'Uzr so\'rab, topilmalar jurnalini tekshirish va yozuv yo\'qligi sababli xonada hech narsa topilmaganini aytib, sumkalar va seyfda yana bir bor qidirishni taklif qilish.',
        en: 'Apologise, check the register and, since nothing has been logged, tell him nothing was found in the room and suggest he looks again in his bags and the safe.',
      },
      {
        ru: 'Извиниться, записать описание наушников и пообещать разобраться, но твёрдо заверить гостя, что персонал отеля тщательно проверяется и никогда ничего не берёт.',
        uz: 'Uzr so\'rab, quloqchinlar tavsifini yozib olish va aniqlashga va\'da berish, lekin mehmonni xodimlar puxta tekshirilgani va hech qachon hech narsa olmasligiga qat\'iy ishontirish.',
        en: 'Apologise, note a description of the headphones and promise to look into it, but assure him firmly that hotel staff are carefully vetted and never take anything.',
      },
      {
        ru: 'Не споря, спокойно извиниться за беспокойство, записать описание, сразу связаться с горничной и хозяйственной службой и назвать время ответа.',
        uz: 'Bahslashmasdan, tashvish uchun xotirjam uzr so\'rash, tavsifni yozib olish, darhol xizmatchi va xo\'jalik xizmati bilan bog\'lanish hamda javob bilan qaytadigan vaqtni aytish.',
        en: 'Apologise calmly without arguing, note a description, contact the room attendant and housekeeping at once, and name a specific time to come back with an answer.',
      },
      {
        ru: 'Извиниться и, раз гость обвиняет персонал в краже, сразу предложить оплатить новые наушники, чтобы жалоба не дошла до менеджера.',
        uz: 'Uzr so\'rab, mehmon xodimlarni o\'g\'irlikda ayblayotgan ekan, shikoyat menejergacha yetib bormasligi uchun darhol yangi quloqchinlar pulini to\'lashni taklif qilish.',
        en: 'Apologise and, since he is accusing staff of theft, offer straight away to pay for new headphones so that the complaint never reaches the manager.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Сказать «не найдено» можно только после проверки у горничной и хозяйственной службы, а спорить с гостем или оправдывать персонал — ошибка по модели LAST. Конкретное время ответа превращает жалобу в доказательство надёжности отеля, а «откупиться» от гостя значит пропустить и поиск, и менеджера.',
      uz: '«Topilmadi» deyish faqat xizmatchi va xo\'jalik xizmati bilan tekshirilgandan keyingina mumkin, mehmon bilan bahslashish yoki xodimlarni oqlash esa LAST modeli bo\'yicha xato. Javobning aniq vaqti shikoyatni mehmonxona ishonchliligining isbotiga aylantiradi, mehmonga pul berib «qutulish» esa qidiruvni ham, menejerni ham chetlab o\'tadi.',
      en: 'You may only say "not found" after checking with the room attendant and housekeeping, and arguing with the guest or defending staff is a mistake under the LAST model. A specific time to report back turns the complaint into proof of the hotel\'s reliability, while buying the guest off skips both the search and the manager.',
    },
  },
  {
    id: 'final-mc-27',
    type: 'choice',
    moduleSlugs: ['emergency-procedures', 'check-out'],
    scenario: {
      ru: '07:45. Срабатывает пожарная сигнализация. В ресторане идёт завтрак, а у стойки гость с чемоданами настаивает, чтобы вы закрыли его счёт — такси уже ждёт. Прямо за ним — двери лифта.',
      uz: '07:45. Yong\'in signalizatsiyasi ishga tushadi. Restoranda nonushta bo\'lmoqda, stoyka oldida esa chamadonli mehmon hisobini yopishingizni talab qilmoqda — taksi allaqachon kutmoqda. Uning orqasida — lift eshiklari.',
      en: '07:45. The fire alarm goes off. Breakfast is under way in the restaurant, and at the desk a guest with suitcases insists that you close his bill — his taxi is already waiting. Right behind him are the lift doors.',
    },
    question: {
      ru: 'Как действовать правильно?',
      uz: 'Qanday harakat qilish to\'g\'ri?',
      en: 'What is the correct way to act?',
    },
    options: [
      {
        ru: 'Быстро закрыть счёт — это минута, а такси уже ждёт, — затем направить гостя и посетителей ресторана к ближайшему эвакуационному выходу, но не к лифту.',
        uz: 'Hisobni tez yopish — bu bir daqiqa, taksi esa kutib turibdi, — so\'ng mehmon va restorandagilarni liftga emas, eng yaqin evakuatsiya chiqishiga yo\'naltirish.',
        en: 'Close the bill quickly — it takes a minute and the taxi is waiting — then direct him and the restaurant guests to the nearest evacuation exit, never the lift.',
      },
      {
        ru: 'Спокойно прервать операцию, направить гостя и всех в лобби к ближайшему эвакуационному выходу и месту сбора (не к лифту), стойку обеспечить по протоколу.',
        uz: 'Operatsiyani xotirjam to\'xtatib, mehmon va lobbidagi barchani eng yaqin evakuatsiya chiqishi va yig\'ilish joyiga (liftga emas) yo\'naltirish, stoykani protokol bo\'yicha ta\'minlash.',
        en: 'Calmly stop the transaction, send him and everyone in the lobby to the nearest evacuation exit and assembly point (not the lift), and keep the desk covered per protocol.',
      },
      {
        ru: 'Направить гостей в лобби к ближайшему выходу, а затем оставить стойку и бежать по этажам стучать в двери номеров, чтобы никто из гостей не остался внутри.',
        uz: 'Lobbidagi mehmonlarni eng yaqin chiqishga yo\'naltirib, so\'ng stoykani tashlab, hech kim ichkarida qolmasligi uchun qavatlar bo\'ylab xonalar eshigini taqillatib yugurish.',
        en: 'Direct the lobby guests to the nearest exit, then leave the desk and run through the floors knocking on room doors so that no guest is left inside the building.',
      },
      {
        ru: 'Сначала позвонить на пост охраны и выяснить, настоящая ли тревога, а гостей в лобби и ресторане тем временем попросить спокойно оставаться на своих местах до ответа.',
        uz: 'Avval xavfsizlik postiga qo\'ng\'iroq qilib, signal haqiqiymi yoki yo\'qmi aniqlash, shu orada lobbi va restorandagi mehmonlardan javob kelguncha joylarida xotirjam o\'tirishni so\'rash.',
        en: 'First phone the security post to find out whether the alarm is real, and meanwhile ask the guests in the lobby and restaurant to stay calmly in their seats until you know.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'При пожарной тревоге приоритет — безопасность: гостей уверенно направляют к ближайшему эвакуационному выходу и месту сбора, лифт не используется, стойка не остаётся без сотрудника, а счёт закрывают после отбоя. Выяснять, «настоящая ли тревога», пока гости сидят на местах, протокол не допускает.',
      uz: 'Yong\'in signalida ustuvorlik — xavfsizlik: mehmonlar ishonch bilan eng yaqin evakuatsiya chiqishi va yig\'ilish joyiga yo\'naltiriladi, lift ishlatilmaydi, stoyka xodimsiz qolmaydi, hisob esa xavf o\'tgach yopiladi. Mehmonlar joyida o\'tirganda signal «haqiqiymi» deb aniqlashga protokol yo\'l qo\'ymaydi.',
      en: 'During a fire alarm safety comes first: guests are confidently directed to the nearest evacuation exit and assembly point, the lift is not used, the desk is not left unstaffed, and the bill is closed after the all-clear. The protocol does not allow checking "whether the alarm is real" while guests stay seated.',
    },
  },
  {
    id: 'final-mc-28',
    type: 'choice',
    moduleSlugs: ['vip-guests', 'upselling-rooms'],
    scenario: {
      ru: '16:20. Заезжает постоянный гость — в примечании к брони указано, что сегодня у него день рождения, а в профиле — любимый напиток. Его стандартный номер готов; на эту ночь свободен номер Executive на верхнем этаже, и менеджер разрешил один бесплатный апгрейд для постоянных гостей при наличии.',
      uz: '16:20. Doimiy mehmon kelmoqda — bron izohida bugun uning tug\'ilgan kuni ekani, profilida esa sevimli ichimligi ko\'rsatilgan. Uning standart xonasi tayyor; bu kechaga yuqori qavatdagi Executive xona bo\'sh va menejer bo\'sh xona bo\'lsa, doimiy mehmonlar uchun bitta bepul yaxshilashga ruxsat bergan.',
      en: '16:20. A repeat guest is arriving — the booking note says today is his birthday, and his profile lists a favourite drink. His Standard room is ready; an Executive room on the top floor is free tonight, and the manager has authorised one complimentary upgrade for repeat guests when available.',
    },
    question: {
      ru: 'Какой вариант демонстрирует стандарт работы с VIP-гостем?',
      uz: 'Qaysi variant VIP mehmon bilan ishlash standartini ko\'rsatadi?',
      en: 'Which option demonstrates the VIP service standard?',
    },
    options: [
      {
        ru: 'Негромко поприветствовать гостя по имени, поздравить с днём рождения, предложить Executive в подарок от отеля и организовать в номере любимый напиток с запиской.',
        uz: 'Mehmonni ismi bilan past ovozda kutib olish, tug\'ilgan kuni bilan tabriklash, mehmonxona sovg\'asi sifatida Executive xonani taklif qilish va xonada xat bilan sevimli ichimligini tashkil qilish.',
        en: 'Discreetly greet him by name, wish him a happy birthday, offer the Executive room as a gift from the hotel and arrange his favourite drink with a handwritten note.',
      },
      {
        ru: 'Поприветствовать по имени и поздравить с днём рождения, но оформить стандартный номер, как забронировано: бесплатные апгрейды оставляют для тех, кто просит о них сам.',
        uz: 'Ismi bilan kutib olib, tug\'ilgan kuni bilan tabriklash, lekin bron qilinganidek standart xonani rasmiylashtirish: bepul yaxshilash o\'zi so\'ragan mehmonlar uchun qoldiriladi.',
        en: 'Greet him by name and wish him a happy birthday, but check him into the Standard room as booked: complimentary upgrades are kept for guests who ask for one themselves.',
      },
      {
        ru: 'Громко, на всё лобби, поздравить его с днём рождения и объявить о бесплатном Executive, чтобы другие гости видели, как отель ценит постоянных клиентов.',
        uz: 'Butun lobbiga eshitiladigan qilib uni tug\'ilgan kuni bilan tabriklash va bepul Executive xona haqida e\'lon qilish, boshqa mehmonlar mehmonxona doimiy mijozlarni qanday qadrlashini ko\'rishi uchun.',
        en: 'Wish him a happy birthday loudly, for the whole lobby to hear, and announce the free Executive room, so that other guests see how the hotel values its regulars.',
      },
      {
        ru: 'Поприветствовать по имени, поздравить и предложить Executive как платный апгрейд со специальной скидкой: бесплатно отданный номер — это упущенный доход.',
        uz: 'Ismi bilan kutib olib, tabriklash va Executive xonani maxsus chegirmali pullik yaxshilash sifatida taklif qilish: bepul berilgan xona — boy berilgan daromad.',
        en: 'Greet him by name, wish him a happy birthday and offer the Executive room as a paid upgrade at a special discount, since a room given away is lost revenue.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Стандарт VIP-сервиса — персонализация на основе профиля, небольшие личные жесты (записка, любимый напиток, апгрейд при наличии) и полная дискретность. Обезличенное оформление или продажа там, где разрешён подарок, упускают момент, а публичное объявление нарушает правило дискретности.',
      uz: 'VIP xizmat standarti — profil asosidagi shaxsiylashtirish, kichik shaxsiy jestlar (xat, sevimli ichimlik, imkon bo\'lsa yaxshilash) va to\'liq diskretlik. Sovg\'aga ruxsat berilganda shaxssiz rasmiylashtirish yoki sotish imkoniyatni boy beradi, ommaviy e\'lon esa diskretlik qoidasini buzadi.',
      en: 'The VIP standard is personalisation based on the profile, small personal touches (a note, a favourite drink, an upgrade when available) and full discretion. Impersonal processing or selling when a gift is authorised misses the moment, and a public announcement breaks the discretion rule.',
    },
  },
  {
    id: 'final-mc-29',
    type: 'choice',
    moduleSlugs: ['early-checkin', 'whatsapp-communication'],
    scenario: {
      ru: '17:40. Гость с бронью с завтрашнего дня пишет в WhatsApp отеля: «Наш поезд прибывает завтра в 6:30, сможем заселиться в 7?» Отель сегодня заполнен полностью, выезд у всех до 12:00, а первые убранные номера обычно готовы к 12:30–13:00.',
      uz: '17:40. Ertadan broni bor mehmon mehmonxonaning WhatsApp raqamiga yozadi: «Poyezdimiz ertaga 6:30 da keladi, 7 da joylasha olamizmi?» Mehmonxona bugun to\'liq band, hammaning chiqishi 12:00 gacha, birinchi tozalangan xonalar odatda 12:30–13:00 ga tayyor bo\'ladi.',
      en: '17:40. A guest booked from tomorrow writes to the hotel\'s WhatsApp: "Our train arrives at 6:30 tomorrow, can we check in at 7?" The hotel is completely full tonight, everyone checks out by 12:00, and the first cleaned rooms are usually ready by 12:30–13:00.',
    },
    question: {
      ru: 'Какой ответ правильный?',
      uz: 'Qaysi javob to\'g\'ri?',
      en: 'Which reply is correct?',
    },
    options: [
      {
        ru: 'Сразу тепло ответить: «Постараемся подготовить для вас номер к 7, ждём вас завтра!» — и попросить утреннюю смену посмотреть, что можно сделать.',
        uz: 'Darhol samimiy javob berish: «Xonani 7 ga tayyorlashga harakat qilamiz, ertaga kutamiz!» — va ertalabki smenadan nima qilish mumkinligini ko\'rishni so\'rash.',
        en: 'Reply warmly at once: "We\'ll do our best to have a room ready for you at 7, see you tomorrow!" — and ask the morning shift to see what can be done.',
      },
      {
        ru: 'Ответить сразу: отель сегодня полон, заселение в 7:00 невозможно; номер, скорее всего, будет готов к 12:30–13:00, а до этого — хранение багажа и завтрак.',
        uz: 'Darhol javob berish: mehmonxona bugun to\'la, 7:00 da joylashish imkonsiz; xona, ehtimol, 12:30–13:00 ga tayyor bo\'ladi, ungacha — yuk saqlash va nonushta.',
        en: 'Reply now: the hotel is full tonight, so 7:00 is not possible; the room will most likely be ready by 12:30–13:00, with luggage storage and breakfast until then.',
      },
      {
        ru: 'Ответить завтра утром, когда утренняя смена увидит список выездов и график уборки, чтобы гости получили точный ответ, а не предположение ночного администратора.',
        uz: 'Ertaga ertalab, ertalabki smena chiqishlar ro\'yxati va tozalash jadvalini ko\'rganda javob berish, toki mehmonlar tungi administratorning taxminini emas, aniq javob olsin.',
        en: 'Reply tomorrow morning, once the morning shift can see the departures list and the cleaning schedule, so that the guests get an accurate answer rather than a guess.',
      },
      {
        ru: 'Сразу ответить коротко: «Заезд с 14:00, ранний заезд завтра невозможен», чтобы гости не приехали с ложными ожиданиями.',
        uz: 'Mehmonlar yolg\'on umid bilan kelmasligi uchun darhol qisqa javob berish: «Kirish 14:00 dan, ertaga erta kirish imkonsiz».',
        en: 'Reply briefly at once: "Check-in is from 14:00, early check-in is not possible tomorrow", so the guests do not arrive with false expectations.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'В мессенджере гость ждёт быстрый, вежливый и информативный ответ, а стандарт раннего заезда требует честного реалистичного времени вместо «постараемся» и альтернативы на время ожидания. Ответ «утром» или сухое «с 14:00» оставляют гостя без плана.',
      uz: 'Messenjerda mehmon tez, muloyim va mazmunli javob kutadi, erta kirish standarti esa «harakat qilamiz» o\'rniga halol, real vaqtni va kutish davri uchun muqobil variantni talab qiladi. «Ertalab» beriladigan javob yoki quruq «14:00 dan» mehmonni rejasiz qoldiradi.',
      en: 'On a messenger the guest expects a fast, polite and informative reply, and the early check-in standard requires an honest, realistic time instead of "we\'ll try", plus an alternative for the wait. A reply "in the morning" or a bare "from 14:00" leaves the guest without a plan.',
    },
  },
  {
    id: 'final-mc-30',
    type: 'choice',
    moduleSlugs: ['check-in', 'foreign-guests'],
    scenario: {
      ru: '17:30. Заселяется гость из Китая с пожилой мамой; он немного говорит по-английски. Система назначила им номер 414. Когда вы называете номер, гость заметно смущается и через переводчик в телефоне спрашивает, можно ли другой номер. Номер 507 той же категории готов.',
      uz: '17:30. Xitoylik mehmon keksa onasi bilan ro\'yxatdan o\'tmoqda; u biroz inglizcha gapiradi. Tizim ularga 414-xonani biriktirgan. Siz xona raqamini aytganingizda mehmon sezilarli darajada xijolat bo\'ladi va telefondagi tarjimon orqali boshqa xona mumkinmi deb so\'raydi. Shu toifadagi 507-xona tayyor.',
      en: '17:30. A guest from China is checking in with his elderly mother; he speaks a little English. The system has assigned them room 414. When you say the number, he looks uneasy and asks through a translation app whether a different room is possible. Room 507, same category, is ready.',
    },
    question: {
      ru: 'Как правильно продолжить заселение?',
      uz: 'Ro\'yxatdan o\'tkazishni qanday davom ettirish to\'g\'ri?',
      en: 'How should you continue the check-in?',
    },
    options: [
      {
        ru: 'Доброжелательно объяснить, что 414 — один из самых тихих номеров на этаже, а цифры в отеле ничего не значат, и закончить заселение, написав время завтрака и выезда цифрами.',
        uz: '414 qavatdagi eng tinch xonalardan biri ekanini va mehmonxonada raqamlar hech narsani anglatmasligini xayrixohlik bilan tushuntirish, so\'ng nonushta va chiqish vaqtini raqamlar bilan yozib, ro\'yxatdan o\'tkazishni tugatish.',
        en: 'Kindly explain that 414 is one of the quietest rooms on the floor and that numbers mean nothing in a hotel, then finish check-in, writing breakfast and check-out times in numbers.',
      },
      {
        ru: 'Без расспросов переселить их в 507 и зарегистрировать только паспорт сына: бронь оформлена на него, а маме после дороги тяжело ждать у стойки.',
        uz: 'Savol-javobsiz ularni 507-xonaga o\'tkazish va faqat o\'g\'lining pasportini ro\'yxatga olish: bron uning nomiga rasmiylashtirilgan, onasiga esa yo\'ldan keyin stoyka oldida kutish og\'ir.',
        en: 'Switch them to 507 without asking why and register only the son\'s passport, since the booking is in his name and his mother is tired after the journey.',
      },
      {
        ru: 'Без расспросов переселить их в 507, сверить оба паспорта с бронью, отметить пожелание в профиле гостя и провести короткий инструктаж, написав время цифрами.',
        uz: 'Savol-javobsiz ularni 507-xonaga o\'tkazish, ikkala pasportni bron bilan solishtirish, mehmon profiliga istagini qayd etish va vaqtlarni raqamlar bilan yozib, qisqa ma\'lumot berish.',
        en: 'Switch them to 507 without asking why, check both passports against the booking, note the preference in his profile and give a short briefing with the times in numbers.',
      },
      {
        ru: 'Переселить их в 507, а затем попросить подождать в лобби, пока вы перекодируете ключ-карты и перепечатаете регистрационные карты, не уточняя, сколько это займёт.',
        uz: 'Ularni 507-xonaga o\'tkazish, so\'ng kalit-kartalarni qayta kodlab, ro\'yxatga olish kartalarini qayta chop etguningizcha, qancha vaqt ketishini aytmasdan, lobbida kutishni so\'rash.',
        en: 'Switch them to 507, then ask them to wait in the lobby while you re-code the key cards and reprint the registration cards, without saying how long it will take.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Стандарт заселения — сверить документ каждого взрослого гостя с бронью и дать ключевую информацию, а стандарт работы с иностранными гостями добавляет уважение к обычаям: в китайском языке цифра 4 созвучна слову «смерть», поэтому просьбу выполняют без споров. Спорить с поверьем, пропускать паспорт или оставлять гостей ждать без объяснений одинаково нарушает стандарт.',
      uz: 'Ro\'yxatdan o\'tkazish standarti — har bir katta yoshli mehmonning hujjatini bron bilan solishtirish va asosiy ma\'lumotni berish, xorijiy mehmonlar standarti esa urf-odatlarga hurmatni qo\'shadi: xitoy tilida 4 raqami «o\'lim» so\'ziga ohangdosh, shuning uchun iltimos bahssiz bajariladi. Bu irim bilan bahslashish, pasportni o\'tkazib yuborish yoki mehmonlarni tushuntirishsiz kuttirish standartni birdek buzadi.',
      en: 'The check-in standard is to match every adult guest\'s document to the booking and give the key information, and the foreign-guests standard adds respect for customs: in Chinese the number 4 sounds like the word for "death", so the request is granted without debate. Arguing with the belief, skipping a passport or leaving guests waiting without explanation each break the standard.',
    },
  },
]
