import type { FinalChoiceQuestion } from '@/types'

export const finalChoice3: FinalChoiceQuestion[] = [
  {
    id: 'final-mc-31',
    type: 'choice',
    moduleSlugs: ['emergency-procedures', 'vip-guests'],
    scenario: {
      ru: '19:10, лобби. VIP-гость (восьмое проживание; в профиле — гипертония, аллергия на пенициллин) потерял сознание у стойки. Скорая уже вызвана, стойку вы по плану передали коллеге и стоите рядом с гостем с аптечкой; с ним супруга. Медики будут минут через десять.',
      uz: 'Soat 19:10, lobbi. VIP-mehmon (sakkizinchi tashrifi; profilida — gipertoniya, penitsillinga allergiya) stoyka yonida hushini yo\'qotdi. Tez yordam chaqirilgan, stoykani reja bo\'yicha hamkasbingizga topshirdingiz va dori qutisi bilan mehmon yonidasiz; u bilan rafiqasi bor. Shifokorlar taxminan o\'n daqiqada keladi.',
      en: '19:10, the lobby. A VIP guest (eighth stay; profile: hypertension, penicillin allergy) has fainted at the desk. The ambulance has been called, you have handed the desk to a colleague per plan and are beside the guest with the first-aid kit; his wife is with him. Paramedics are about ten minutes away.',
    },
    question: {
      ru: 'Что вы делаете, пока ждёте скорую?',
      uz: 'Tez yordamni kutayotib nima qilasiz?',
      en: 'What do you do while you wait for the ambulance?',
    },
    options: [
      {
        ru: 'Дать гостю таблетку от давления из аптечки — в профиле отмечена гипертония, — чтобы не терять время до приезда медиков.',
        uz: 'Profilida gipertoniya belgilangani uchun shifokorlar kelguncha vaqt yo\'qotmaslik maqsadida dori qutisidan qon bosimi tabletkasini berish.',
        en: 'Give him a blood-pressure tablet from the kit — his profile shows hypertension — so no time is lost before the paramedics.',
      },
      {
        ru: 'Спросить супругу об аллергиях и хронических болезнях, спокойно говорить с гостем и передать эти сведения медикам.',
        uz: 'Rafiqasidan allergiya va surunkali kasalliklarni so\'rash, mehmon bilan xotirjam gaplashish va bu ma\'lumotni shifokorlarga yetkazish.',
        en: 'Ask his wife about allergies and chronic illnesses, talk calmly to the guest and pass this information to the paramedics.',
      },
      {
        ru: 'Оставить гостя с супругой и вернуться к стойке встречать скорую и показывать дорогу — в лобби это меньше минуты.',
        uz: 'Mehmonni rafiqasi bilan qoldirib, tez yordamni kutib olish va yo\'l ko\'rsatish uchun stoykaga qaytish — lobbida bu bir daqiqa ham olmaydi.',
        en: 'Leave him with his wife and go back to the desk to meet the paramedics and show the way — in the lobby it takes under a minute.',
      },
      {
        ru: 'Попросить зевак отойти и не снимать, а затем объявить, что это VIP-гость и персонал всё держит под контролем.',
        uz: 'Tomoshabinlardan uzoqlashish va suratga olmaslikni so\'rab, so\'ng bu VIP-mehmon ekanini va xodimlar hammasini nazorat qilayotganini e\'lon qilish.',
        en: 'Ask onlookers to step back and stop filming, then announce that this is a VIP guest and staff have it under control.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Модуль ЧС: после вызова скорой пострадавшего не оставляют одного, спокойно говорят с ним, выясняют аллергии и хронические болезни и передают их медикам. Давать лекарства «по профилю» — лечение без медиков, уходить встречать скорую — оставить гостя, а объявлять статус вслух нарушает дискретность VIP.',
      uz: 'Favqulodda vaziyatlar moduli: tez yordam chaqirilgandan keyin jabrlanuvchi yolg\'iz qoldirilmaydi, u bilan xotirjam gaplashiladi, allergiya va surunkali kasalliklar aniqlanib, shifokorlarga yetkaziladi. «Profil bo\'yicha» dori berish — shifokorsiz davolash, tez yordamni kutib olishga ketish — mehmonni tashlab ketish, maqomni ovoz chiqarib e\'lon qilish esa VIP maxfiyligini buzadi.',
      en: 'The emergency module: once the ambulance is called you don\'t leave the casualty alone, you talk to him calmly, find out about allergies and chronic illnesses and pass them to the paramedics. Giving medicine "from the profile" is treatment without medics, going to meet the ambulance leaves the guest, and announcing his status aloud breaks VIP discretion.',
    },
  },
  {
    id: 'final-mc-32',
    type: 'choice',
    moduleSlugs: ['booking-com-guests', 'walk-in-guests'],
    scenario: {
      ru: '22:40. Последний свободный номер закреплён за предоплаченной бронью Booking.com: гость обещал приехать к 18:00, телефон не отвечает. По правилам отеля незаезд оформляют только после ночного аудита в 00:00. К стойке подходит пара без брони и просит именно этот номер.',
      uz: 'Soat 22:40. Oxirgi bo\'sh xona Booking.com orqali oldindan to\'langan bronga biriktirilgan: mehmon 18:00 ga kelishini aytgan, telefoni javob bermayapti. Mehmonxona qoidasiga ko\'ra kelmaslik faqat 00:00 dagi tungi auditdan keyin rasmiylashtiriladi. Stoykaga bronsiz juftlik kelib, aynan shu xonani so\'raydi.',
      en: '22:40. The last free room is held for a prepaid Booking.com reservation: the guest said he\'d arrive by 18:00, and his phone doesn\'t answer. Hotel rules allow a no-show to be recorded only after the night audit at 00:00. A couple without a booking comes to the desk and asks for exactly that room.',
    },
    question: {
      ru: 'Какое решение верно?',
      uz: 'Qaysi yechim to\'g\'ri?',
      en: 'Which decision is correct?',
    },
    options: [
      {
        ru: 'Продать номер паре: гость опаздывает уже на пять часов, а предоплату по невозвратному тарифу он всё равно не вернёт.',
        uz: 'Xonani juftlikka sotish: mehmon besh soatdan beri kechikmoqda, qaytarilmaydigan tarif bo\'yicha oldindan to\'lovni baribir qaytarib olmaydi.',
        en: 'Sell the room to the couple: the guest is five hours late and won\'t get his non-refundable prepayment back anyway.',
      },
      {
        ru: 'Предложить паре подождать в лобби до 00:00: если гость Booking.com не приедет к аудиту, номер можно будет продать им.',
        uz: 'Juftlikka 00:00 gacha lobbida kutishni taklif qilish: Booking.com mehmoni auditgacha kelmasa, xonani ularga sotish mumkin.',
        en: 'Ask the couple to wait in the lobby until 00:00: if the Booking.com guest doesn\'t arrive by the audit, the room can be sold to them.',
      },
      {
        ru: 'Честно сказать паре, что свободных номеров нет, рекомендовать партнёрский отель рядом и помочь позвонить туда.',
        uz: 'Juftlikka bo\'sh xona yo\'qligini halol aytish, yaqindagi hamkor mehmonxonani tavsiya qilish va u yerga qo\'ng\'iroq qilishga yordam berish.',
        en: 'Tell the couple honestly there are no free rooms, recommend the partner hotel nearby and help them call it.',
      },
      {
        ru: 'Заселить пару, а если гость Booking.com всё же приедет — за счёт отеля отправить его в партнёрский отель, как при овербукинге.',
        uz: 'Juftlikni joylashtirish, Booking.com mehmoni baribir kelsa — overbookingdagidek uni mehmonxona hisobidan hamkor mehmonxonaga yuborish.',
        en: 'Check the couple in, and if the Booking.com guest does arrive, send him to the partner hotel at the hotel\'s cost, as with overbooking.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Подтверждённая предоплаченная бронь удерживается, пока её не снимет правило о незаезде; продать номер — значит сознательно создать овербукинг, за который полностью отвечает отель. Стандарт walk-in при полной загрузке: не просто «мест нет», а партнёрский отель и помощь со звонком; ожидание «а вдруг» до полуночи оставляет уставших людей в неопределённости.',
      uz: 'Tasdiqlangan va oldindan to\'langan bron kelmaslik qoidasi uni bekor qilmaguncha saqlanadi; xonani sotish — mehmonxona to\'liq javob beradigan overbookingni ataylab yaratish. To\'liq bandlikda walk-in standarti: shunchaki «joy yo\'q» emas, hamkor mehmonxona va qo\'ng\'iroqqa yordam; yarim tungacha «balki» deb kutish charchagan odamlarni noaniqlikda qoldiradi.',
      en: 'A confirmed prepaid booking is held until the no-show rule releases it; selling the room means knowingly creating an overbooking for which the hotel is fully responsible. The walk-in standard when full: not a bare "no rooms" but the partner hotel and help with the call; waiting "just in case" until midnight leaves tired people in limbo.',
    },
  },
  {
    id: 'final-mc-33',
    type: 'choice',
    moduleSlugs: ['late-checkout', 'early-checkin'],
    scenario: {
      ru: '10:30, воскресенье, отель заполнен. Гость из 604-го просит остаться до 15:00: выезд до 14:00 бесплатный, позже — 50 % стоимости ночи. Но 604-й закреплён за гостем, которому вчера в WhatsApp письменно подтвердили ранний заезд в 13:00, а других номеров этой категории к 13:00 не будет.',
      uz: 'Soat 10:30, yakshanba, mehmonxona to\'la. 604-xonadagi mehmon 15:00 gacha qolishni so\'raydi: 14:00 gacha chiqish bepul, keyin — kecha narxining 50 % i. Ammo 604-xona kecha WhatsApp\'da 13:00 da erta joylashish yozma tasdiqlangan mehmonga biriktirilgan, bu toifadagi boshqa xonalar esa 13:00 ga tayyor bo\'lmaydi.',
      en: '10:30, Sunday, the hotel is full. The guest in 604 asks to stay until 15:00: check-out until 14:00 is free, later costs 50% of the night. But 604 is assigned to a guest whose early check-in at 13:00 was confirmed in writing on WhatsApp yesterday, and no other room in that category will be ready by 13:00.',
    },
    question: {
      ru: 'Какой ответ гостю из 604-го соответствует стандарту?',
      uz: '604-xona mehmoniga qaysi javob standartga mos keladi?',
      en: 'Which reply to the guest in 604 meets the standard?',
    },
    options: [
      {
        ru: 'Объяснить, что к 13:00 номер обещан другому гостю, предложить бесплатное хранение багажа и лаунж и сразу отдать 604-й в уборку.',
        uz: 'Xona 13:00 ga boshqa mehmonga va\'da qilinganini tushuntirib, bepul bagaj saqlash va lounjni taklif qilish va 604-xonani chiqishi bilan yig\'ishtirishga berish.',
        en: 'Explain the room is promised to another guest at 13:00, offer free luggage storage and the lounge, and have 604 cleaned right after.',
      },
      {
        ru: 'Согласиться на 15:00 с доплатой 50 %, раз правила это допускают, а заезжающему гостю написать, что ранний заезд, увы, отменяется.',
        uz: 'Qoidalar ruxsat bergani uchun 50 % to\'lov bilan 15:00 ga rozi bo\'lish, keladigan mehmonga esa erta joylashish afsuski bekor qilinganini yozish.',
        en: 'Agree to 15:00 with the 50% fee, since the rules allow it, and message the arriving guest that the early check-in is sadly cancelled.',
      },
      {
        ru: 'Сказать: «Постараемся, подойдите к 12:00 — посмотрим, как пойдёт уборка на этаже», чтобы не отказывать гостю сразу и не расстраивать его.',
        uz: 'Darhol rad etmaslik uchun: «Harakat qilamiz, 12:00 da keling — qavatdagi yig\'ishtirish qanday ketishiga qaraymiz» deyish.',
        en: 'Say "We\'ll try — come by at 12:00 and we\'ll see how cleaning on the floor is going," so as not to refuse him straight away.',
      },
      {
        ru: 'Вежливо отказать, сославшись на стандартный выезд в 12:00, и попросить гостя освободить номер вовремя, чтобы успеть его убрать.',
        uz: 'Standart 12:00 dagi chiqishni ro\'kach qilib, muloyimlik bilan rad etish va xonani yig\'ishtirishga ulgurish uchun o\'z vaqtida bo\'shatishni so\'rash.',
        en: 'Politely refuse, citing the standard 12:00 check-out, and ask him to vacate on time so the room can be cleaned for the next guest.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Поздний выезд зависит от того, нужен ли номер следующему гостю, а письменно подтверждённый ранний заезд нельзя тихо отозвать — невыполненное обещание модуль раннего заезда называет главной ошибкой. Отказ даётся вместе с альтернативой (хранение багажа); «постараемся» — расплывчатое обещание, а отказ без альтернативы — ошибка из списка позднего выезда.',
      uz: 'Kech chiqish xona keyingi mehmonga kerakmi-yo\'qligiga bog\'liq, yozma tasdiqlangan erta joylashishni esa jimgina qaytarib olib bo\'lmaydi — erta joylashish moduli bajarilmagan va\'dani asosiy xato deb ataydi. Rad javobi muqobil (bagaj saqlash) bilan beriladi; «harakat qilamiz» — noaniq va\'da, muqobilsiz rad etish esa kech chiqish ro\'yxatidagi xato.',
      en: 'Late check-out depends on whether the next guest needs the room, and an early check-in confirmed in writing cannot be quietly withdrawn — the early check-in module calls a broken promise the main mistake. A refusal comes with an alternative (luggage storage); "we\'ll try" is a vague promise, and a refusal without an alternative is a mistake on the late check-out list.',
    },
  },
  {
    id: 'final-mc-34',
    type: 'choice',
    moduleSlugs: ['lost-items', 'phone-communication'],
    scenario: {
      ru: '14:20. В сейфе лежит паспорт из 218-го, уже внесённый в журнал находок; гость выехал утром, дозвониться до него вы ещё не успели. Звонит мужчина: представляется братом гостя, называет его имя и номер комнаты и просит отдать паспорт курьеру через час. Дату рождения и номер паспорта он не знает.',
      uz: 'Soat 14:20. Seyfda 218-xonadan topilgan, topilmalar jurnaliga allaqachon kiritilgan pasport yotibdi; mehmon ertalab chiqib ketgan, unga hali qo\'ng\'iroq qilib ulgurmadingiz. Bir erkak qo\'ng\'iroq qiladi: o\'zini mehmonning akasi deb tanishtiradi, uning ismi va xona raqamini aytadi va pasportni bir soatdan keyin kuryerga berishni so\'raydi. Tug\'ilgan sana va pasport raqamini u bilmaydi.',
      en: '14:20. The safe holds a passport from room 218, already logged in the lost-and-found book; the guest checked out this morning and you haven\'t reached him yet. A man calls, says he is the guest\'s brother, gives his name and room number and asks you to hand the passport to a courier in an hour. He doesn\'t know the date of birth or passport number.',
    },
    question: {
      ru: 'Как поступить по стандарту?',
      uz: 'Standart bo\'yicha qanday yo\'l tutasiz?',
      en: 'What does the standard require?',
    },
    options: [
      {
        ru: 'Раз звонящий знает имя гостя и номер комнаты, подтвердить находку и выдать паспорт курьеру под подпись в журнале находок.',
        uz: 'Qo\'ng\'iroq qiluvchi mehmon ismi va xona raqamini bilgani uchun topilmani tasdiqlash va pasportni jurnalga imzo bilan kuryerga berish.',
        en: 'Since the caller knows the guest\'s name and room number, confirm the find and release the passport to the courier against a signature in the log.',
      },
      {
        ru: 'Попросить назвать дату рождения гостя и, если она совпадёт с паспортом, передать документ курьеру под подпись в журнале.',
        uz: 'Mehmonning tug\'ilgan sanasini aytishni so\'rash va pasport bilan mos kelsa, hujjatni jurnalga imzo qo\'ydirib kuryerga topshirish.',
        en: 'Ask for the guest\'s date of birth and, if it matches the passport, release the document to the courier against a signature in the log.',
      },
      {
        ru: 'Сказать, что ничего не находили, чтобы не рисковать документом, и спокойно подождать, пока сам гость позвонит и спросит о паспорте.',
        uz: 'Hujjatni xavf ostiga qo\'ymaslik uchun hech narsa topilmaganini aytish va mehmonning o\'zi qo\'ng\'iroq qilib, pasport haqida so\'rashini kutish.',
        en: 'Say nothing has been found so the document isn\'t put at risk, and wait for the guest himself to call and ask about his passport.',
      },
      {
        ru: 'Ничего не подтверждать, записать номер звонящего, самому связаться с гостем по контактам из брони и действовать по его указанию.',
        uz: 'Hech narsani tasdiqlamaslik, qo\'ng\'iroq qiluvchining ismi va raqamini yozib olish, brondagi kontaktlar orqali mehmonning o\'zi bilan bog\'lanish va pasportni uning ko\'rsatmasi bilan berish.',
        en: 'Confirm nothing, note the caller\'s number, contact the guest yourself via the booking details and act only on his instruction.',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Модуль находок: отель сам первым связывается с гостем по контактам из брони, а ценную вещь — тем более документ — выдают владельцу или по его указанию. Имя и номер комнаты знает любой попутчик, «проверка» датой рождения всё равно отдаёт паспорт третьему лицу, а ответ «ничего не находили» — неправда, отменяющая обязательный звонок гостю.',
      uz: 'Topilmalar moduli: mehmonxona brondagi kontaktlar orqali mehmonga o\'zi birinchi bo\'lib bog\'lanadi, qimmatli buyum — ayniqsa hujjat — egasiga yoki uning ko\'rsatmasi bilan beriladi. Ism va xona raqamini har qanday hamroh biladi, tug\'ilgan sana bilan «tekshirish» baribir pasportni uchinchi shaxsga beradi, «hech narsa topilmadi» javobi esa mehmonga majburiy qo\'ng\'iroqni bekor qiladigan yolg\'on.',
      en: 'The lost-items module: the hotel contacts the guest first via the booking details, and a valuable item — a document above all — goes to the owner or on his instruction. Any travel companion knows the name and room number, a date-of-birth "check" still hands the passport to a third party, and "nothing was found" is untrue and cancels the mandatory call to the guest.',
    },
  },
  {
    id: 'final-mc-35',
    type: 'choice',
    moduleSlugs: ['complaints', 'phone-communication'],
    scenario: {
      ru: '02:05, вы одни на стойке и проводите ночной аудит: если прерваться, сверку придётся начинать заново. Звонит внутренний телефон из 415-го: в 417-м больше часа громкая музыка, «и это уже третий раз за неделю». Охранник на обходе, доступен по рации.',
      uz: 'Soat 02:05, stoykada yolg\'izsiz va tungi audit o\'tkazyapsiz: to\'xtasangiz, solishtirishni qaytadan boshlash kerak bo\'ladi. 415-xonadan ichki telefon jiringlaydi: 417-xonada bir soatdan beri baland musiqa, «bu hafta bu allaqachon uchinchi marta». Qo\'riqchi aylanib yuribdi, ratsiya orqali aloqada.',
      en: '02:05, you are alone at the desk running the night audit: if you stop, the reconciliation has to start over. The internal phone rings from 415: loud music has been coming from 417 for over an hour, "and it\'s the third time this week". The security guard is on rounds, reachable by radio.',
    },
    question: {
      ru: 'Какой порядок действий соответствует стандарту?',
      uz: 'Qaysi harakatlar tartibi standartga mos keladi?',
      en: 'Which order of actions meets the standard?',
    },
    options: [
      {
        ru: 'Дать телефону дозвонить, пока не закончится сверка (2–3 минуты), затем перезвонить в 415-й и отправить охрану к шумному номеру.',
        uz: 'Solishtirish tugaguncha (2–3 daqiqa) telefonni jiringlashiga qo\'yib berish, so\'ng 415-xonaga qayta qo\'ng\'iroq qilib, shovqinli xonaga qo\'riqchini yuborish.',
        en: 'Let the phone ring until the reconciliation is done (2–3 minutes), then call 415 back and send security to the noisy room.',
      },
      {
        ru: 'Ответить до третьего гудка, извиниться, сразу по рации отправить охрану в 417-й, пообещать перезвонить через 10 минут и перезвонить.',
        uz: 'Uchinchi signalgacha javob berish, uzr so\'rash, darhol ratsiya orqali qo\'riqchini 417-xonaga yuborish, 10 daqiqadan keyin qo\'ng\'iroq qilishga va\'da berib, qo\'ng\'iroq qilish.',
        en: 'Answer before the third ring, apologise, radio security to 417 at once, promise to call back in 10 minutes — and call back.',
      },
      {
        ru: 'Ответить до третьего гудка, извиниться, предложить беруши, а охрану отправить, если шум не прекратится в течение получаса.',
        uz: 'Uchinchi signalgacha javob berish, uzr so\'rash, quloq tiqinlarini taklif qilish va shovqin yarim soat ichida to\'xtamasa, qo\'riqchini yuborish.',
        en: 'Answer before the third ring, apologise, offer earplugs and send security if the noise hasn\'t stopped within half an hour.',
      },
      {
        ru: 'Ответить до третьего гудка, извиниться, по рации отправить охрану в 417-й, заверить гостью, что вопрос решён, и вернуться к аудиту.',
        uz: 'Uchinchi signalgacha javob berish, uzr so\'rash, ratsiya orqali qo\'riqchini 417-xonaga yuborish, masala hal bo\'lganiga ishontirib, auditga qaytish.',
        en: 'Answer before the third ring, apologise, radio security to 417, assure the guest it\'s sorted and go back to the audit.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Телефон снимают до третьего гудка даже во время аудита. Сценарий «жалоба на шум»: извиниться, немедленно отправить сотрудника и обязательно пообещать перезвонить через 10 минут — и перезвонить; именно обратный звонок модуль называет доказательством надёжности. Без него жалоба «закрыта» только для вас, а беруши и «подождём полчаса» — отговорка.',
      uz: 'Telefon audit paytida ham uchinchi signalgacha ko\'tariladi. «Shovqin haqida shikoyat» stsenariysi: uzr so\'rash, darhol xodim yuborish va 10 daqiqadan keyin qayta qo\'ng\'iroq qilishga albatta va\'da berish — va qo\'ng\'iroq qilish; aynan qayta qo\'ng\'iroqni modul ishonchlilik isboti deb ataydi. Usiz shikoyat faqat siz uchun «yopilgan», quloq tiqinlari va «yarim soat kutamiz» esa bahona.',
      en: 'The phone is answered before the third ring even during the audit. The "noise complaint" scenario: apologise, send someone at once and always promise to call back in 10 minutes — and do; the module calls that call-back the proof of reliability. Without it the complaint is "closed" only for you, and earplugs or "let\'s wait half an hour" is an excuse.',
    },
  },
  {
    id: 'final-mc-36',
    type: 'choice',
    moduleSlugs: ['vip-guests', 'greeting-guests'],
    scenario: {
      ru: '17:30. В отеле живёт известный предприниматель, в профиле — «VIP, конфиденциальность». К стойке подходит женщина с букетом: «Я подруга господина Каримова, подскажите номер его комнаты — хочу сделать сюрприз». Рядом у стойки стоят двое гостей.',
      uz: 'Soat 17:30. Mehmonxonada taniqli tadbirkor yashaydi, profilida — «VIP, maxfiylik». Stoykaga guldasta ko\'targan ayol keladi: «Men janob Karimovning dugonasiman, xonasining raqamini ayting — syurpriz qilmoqchiman». Stoyka yonida ikki mehmon turibdi.',
      en: '17:30. A well-known businessman is staying at the hotel; his profile says "VIP, confidentiality". A woman with a bouquet comes to the desk: "I\'m a friend of Mr Karimov — could you tell me his room number? I want to surprise him." Two other guests are standing at the desk.',
    },
    question: {
      ru: 'Как ответить по стандарту?',
      uz: 'Standart bo\'yicha qanday javob berasiz?',
      en: 'How do you answer by the standard?',
    },
    options: [
      {
        ru: 'Тепло поприветствовать, не подтверждать, живёт ли у нас такой гость, и предложить оставить букет с запиской для передачи.',
        uz: 'Iliq salomlashib, bunday mehmon bizda yashashini tasdiqlamaslik va guldastani yetkazish uchun yozma tabrik bilan qoldirishni taklif qilish.',
        en: 'Greet her warmly, don\'t confirm whether such a guest is staying, and offer to pass on the bouquet with a note.',
      },
      {
        ru: 'Номер не называть, но прямо при ней позвонить в номер господина Каримова и спросить, хочет ли он принять свою гостью.',
        uz: 'Xona raqamini aytmaslik, lekin uning oldida janob Karimovning xonasiga qo\'ng\'iroq qilib, mehmonni qabul qilishni xohlaydimi, deb so\'rash.',
        en: 'Don\'t give the number, but call Mr Karimov\'s room in front of her and ask whether he wishes to receive his visitor now.',
      },
      {
        ru: 'Взять букет и с улыбкой сказать: «Господин Каримов — наш VIP-гость, я обязательно передам ему, что вы приходили».',
        uz: 'Guldastani olib, tabassum bilan: «Janob Karimov — bizning VIP-mehmonimiz, kelganingizni albatta yetkazaman» deyish.',
        en: 'Take the bouquet and say with a smile: "Mr Karimov is our VIP guest — I\'ll be sure to tell him you came by."',
      },
      {
        ru: 'Номер не называть, но подсказать этаж и предложить подняться туда вместе с ней, чтобы цветы и сюрприз попали к гостю лично.',
        uz: 'Xona raqamini aytmaslik, lekin gullar mehmonga shaxsan yetishi uchun qavatni aytib, u bilan birga ko\'tarilishni taklif qilish.',
        en: 'Don\'t give the number, but tell her the floor and offer to go up with her so the flowers and surprise reach him in person.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Модуль VIP: персонализация видна гостю, но не окружающим, а посторонним о госте не сообщают ничего — даже факт проживания. Звонок в номер при ней подтверждает проживание, фраза «наш VIP-гость» объявляет статус вслух, а подсказка этажа раскрывает данные; отказ подаётся тепло, как услуга: «с радостью передадим».',
      uz: 'VIP moduli: shaxsiylashtirish mehmonga ko\'rinadi, ammo atrofdagilarga emas, begonalarga mehmon haqida hech narsa — hatto yashash fakti ham — aytilmaydi. Uning oldida xonaga qo\'ng\'iroq qilish yashashni tasdiqlaydi, «bizning VIP-mehmonimiz» iborasi maqomni ovoz chiqarib e\'lon qiladi, qavatni aytish esa ma\'lumotni oshkor qiladi; rad javobi iliq, xizmat sifatida beriladi: «mamnuniyat bilan yetkazamiz».',
      en: 'The VIP module: personalisation is visible to the guest but not to others, and outsiders are told nothing about a guest — not even that he is staying. Calling the room in front of her confirms his stay, "our VIP guest" announces his status aloud, and naming the floor discloses data; the refusal is given warmly, as a service: "we\'ll gladly pass it on".',
    },
  },
  {
    id: 'final-mc-37',
    type: 'choice',
    moduleSlugs: ['whatsapp-communication', 'foreign-guests'],
    scenario: {
      ru: '11:15. На WhatsApp отеля с незнакомого номера приходит сообщение на турецком с логотипом Booking.com. Переводчик показывает: «Оплата брони гостя Йылмаза не прошла, оплатите по ссылке за 30 минут, иначе бронь отменят». Ссылка ведёт на booking-secure-pay.xyz; гость Йылмаз заселился вчера по предоплаченной брони.',
      uz: 'Soat 11:15. Mehmonxonaning WhatsApp\'iga notanish raqamdan Booking.com logotipi bilan turkcha xabar keladi. Tarjimon ko\'rsatadi: «Yilmaz mehmonning bron to\'lovi o\'tmadi, 30 daqiqada havola orqali to\'lang, aks holda bron bekor qilinadi». Havola booking-secure-pay.xyz saytiga olib boradi; Yilmaz kecha oldindan to\'langan bron bilan joylashgan.',
      en: '11:15. The hotel WhatsApp receives a message in Turkish from an unknown number, with a Booking.com logo. The translator shows: "Payment for guest Yilmaz\'s booking failed; pay via the link within 30 minutes or the booking will be cancelled." The link goes to booking-secure-pay.xyz; Mr Yilmaz checked in yesterday on a prepaid booking.',
    },
    question: {
      ru: 'Как поступить правильно?',
      uz: 'Qanday to\'g\'ri yo\'l tutasiz?',
      en: 'What is the right course of action?',
    },
    options: [
      {
        ru: 'Открыть ссылку и проверить, похожа ли страница на настоящую форму Booking.com, а если похожа — переслать сообщение гостю Йылмазу.',
        uz: 'Havolani ochib, sahifa Booking.com shakliga o\'xshaydimi, tekshirish, o\'xshasa — xabarni Yilmaz mehmonga yuborish.',
        en: 'Open the link to see whether the page looks like a Booking.com form and, if it does, forward the message to Mr Yilmaz.',
      },
      {
        ru: 'Не отвечать: номер незнакомый, язык непонятный, а у стойки очередь; если это важно, отправитель напишет снова.',
        uz: 'Javob bermaslik: raqam notanish, til tushunarsiz, stoykada esa navbat; muhim bo\'lsa, yuboruvchi yana yozadi.',
        en: 'Don\'t reply: the number is unknown, the language unfamiliar and there\'s a queue; if it matters, the sender will write again.',
      },
      {
        ru: 'Ссылку не открывать, проверить оплату в Extranet и PMS, сообщить менеджеру и предупредить гостя Йылмаза о таком сообщении.',
        uz: 'Havolani ochmaslik, to\'lovni Extranet va PMS\'da tekshirish, menejerga xabar berish va Yilmaz mehmonni bunday xabar haqida ogohlantirish.',
        en: 'Don\'t open the link; check the payment in the Extranet and PMS, inform the manager and warn Mr Yilmaz about the message.',
      },
      {
        ru: 'Переслать сообщение гостю Йылмазу с припиской «это пришло по вашей брони», чтобы он сам разобрался с оплатой.',
        uz: 'Xabarni Yilmaz mehmonga «bu sizning broningiz bo\'yicha keldi» degan izoh bilan yuborish, to\'lov bilan o\'zi shug\'ullansin.',
        en: 'Forward the message to Mr Yilmaz noting "this came about your booking", so he can sort out the payment himself.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Источник правды об оплате — Extranet и PMS, а не ссылка из сообщения: подозрительную ссылку не открывают и не пересылают гостю. Переводчик — инструмент, чтобы понять сообщение, а не повод его игнорировать; о возможном мошенничестве сообщают менеджеру и предупреждают гостя, чьё имя использовали.',
      uz: 'To\'lov bo\'yicha haqiqat manbai — xabardagi havola emas, Extranet va PMS: shubhali havola ochilmaydi va mehmonga yuborilmaydi. Tarjimon — xabarni tushunish vositasi, uni e\'tiborsiz qoldirish bahonasi emas; ehtimoliy firibgarlik haqida menejerga xabar beriladi va ismi ishlatilgan mehmon ogohlantiriladi.',
      en: 'The source of truth about payment is the Extranet and PMS, not a link in a message: a suspicious link is neither opened nor forwarded to the guest. The translator is a tool for understanding the message, not an excuse to ignore it; possible fraud is reported to the manager and the guest whose name was used is warned.',
    },
  },
  {
    id: 'final-mc-38',
    type: 'choice',
    moduleSlugs: ['check-in', 'booking-com-guests'],
    scenario: {
      ru: '14:30. Гость показывает ваучер Booking.com: «Стандарт, завтрак включён, оплата в отеле». В PMS бронь импортирована как «без завтрака, предоплата», а имя в паспорте написано иначе, чем в брони (Aleksandr / Alexander). За ним ждут ещё двое.',
      uz: 'Soat 14:30. Mehmon Booking.com vaucherini ko\'rsatadi: «Standart, nonushta kiritilgan, to\'lov mehmonxonada». PMS\'da bron «nonushtasiz, oldindan to\'lov» deb import qilingan, pasportdagi ism esa brondagidan boshqacha yozilgan (Aleksandr / Alexander). Uning orqasida yana ikki kishi kutmoqda.',
      en: '14:30. A guest shows his Booking.com voucher: "Standard, breakfast included, pay at hotel". The PMS imported the booking as "no breakfast, prepaid", and the name in the passport is spelled differently from the booking (Aleksandr / Alexander). Two more guests are waiting behind him.',
    },
    question: {
      ru: 'Как действовать по стандарту?',
      uz: 'Standart bo\'yicha qanday harakat qilasiz?',
      en: 'How do you act by the standard?',
    },
    options: [
      {
        ru: 'Чтобы не спорить при очереди, добавить завтрак в бронь как жест доброй воли, а затем уточнить написание имени.',
        uz: 'Navbatda bahslashmaslik uchun xayrixohlik belgisi sifatida bronga nonushta qo\'shish, so\'ng ism yozilishini aniqlashtirish.',
        en: 'Add breakfast to the booking as a goodwill gesture to avoid arguing in front of the queue, then clarify the name.',
      },
      {
        ru: 'Объяснить, что отель работает по данным PMS, а расхождение — вопрос к Booking.com, и выдать ключ, не задерживая очередь.',
        uz: 'Mehmonxona PMS ma\'lumotlari bo\'yicha ishlashini, farq esa Booking.com masalasi ekanini tushuntirib, navbatni ushlab turmay kalitni berish.',
        en: 'Explain that the hotel works from the PMS data and the mismatch is a matter for Booking.com, and hand over the key.',
      },
      {
        ru: 'Предложить завтрак за доплату по тарифу отеля, а гостя попросить потом самому сверить условия с платформой.',
        uz: 'Mehmonxona tarifi bo\'yicha pullik nonushta taklif qilish, mehmondan esa shartlarni keyin platforma bilan o\'zi solishtirishni so\'rash.',
        en: 'Offer breakfast for a fee at the hotel rate, and ask the guest to check the conditions with the platform himself later.',
      },
      {
        ru: 'Сверить бронь в Extranet с ваучером, исправить PMS по подтверждённым условиям и до выдачи ключа уточнить имя.',
        uz: 'Extranet\'dagi bronni vaucher bilan solishtirish, PMS\'ni tasdiqlangan shartlar bo\'yicha tuzatish va kalit berishdan oldin ismni aniqlashtirish.',
        en: 'Match the Extranet booking with the voucher, fix the PMS to the confirmed terms and clear up the name before the key.',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Модуль Booking.com: при расхождении первый шаг — спокойно сверить бронь в Extranet и PMS, не критикуя платформу и не отсылая к ней гостя; модуль заселения: расхождение в имени уточняют до выдачи ключа. «Жест доброй воли» без проверки и платный завтрак по умолчанию подменяют сверку догадкой.',
      uz: 'Booking.com moduli: farq bo\'lsa, birinchi qadam — platformani tanqid qilmay va mehmonni unga yubormay, bronni Extranet va PMS\'da xotirjam solishtirish; ro\'yxatdan o\'tkazish moduli: ismdagi farq kalit berishdan oldin aniqlanadi. Tekshiruvsiz «xayrixohlik belgisi» va sukut bo\'yicha pullik nonushta solishtirishni taxmin bilan almashtiradi.',
      en: 'The Booking.com module: when details differ, the first step is to calmly match the booking in the Extranet and PMS, without criticising the platform or sending the guest to it; the check-in module: a name discrepancy is cleared before the key is handed over. An unchecked "goodwill gesture" or a paid breakfast by default replaces the reconciliation with a guess.',
    },
  },
  {
    id: 'final-mc-39',
    type: 'choice',
    moduleSlugs: ['check-out', 'complaints'],
    scenario: {
      ru: '08:50, очередь на выезд из четырёх человек. Карта гостя из 311-го дважды отклонена с ответом «отказ банка»; гость смущён, у входа ждёт такси в аэропорт. Стоящие позади слышат каждое слово.',
      uz: 'Soat 08:50, chiqish uchun to\'rt kishilik navbat. 311-xonadagi mehmonning kartasi ikki marta «bank rad etdi» javobi bilan o\'tmadi; mehmon xijolat, kirish oldida aeroportga taksi kutmoqda. Orqada turganlar har bir so\'zni eshitadi.',
      en: '08:50, four people are queuing to check out. The card of the guest in 311 has been declined twice with "bank refusal"; he is embarrassed, and a taxi to the airport is waiting outside. The people behind him hear every word.',
    },
    question: {
      ru: 'Какая реакция соответствует стандарту?',
      uz: 'Qaysi munosabat standartga mos keladi?',
      en: 'Which response meets the standard?',
    },
    options: [
      {
        ru: 'Сказать: «Карта не проходит — видимо, вопрос к вашему банку», попробовать её в третий раз, а при отказе попросить позвонить в банк.',
        uz: '«Karta o\'tmayapti — chamasi, bankingizga savol», deb kartani uchinchi marta sinash, yana rad etilsa, bankka qo\'ng\'iroq qilishni so\'rash.',
        en: 'Say "The card isn\'t going through — looks like a question for your bank," try it a third time and, if refused, ask him to call his bank.',
      },
      {
        ru: 'Тихо сказать, что такое бывает с терминалами и банками, предложить другую карту, наличные или перевод, затем помочь с такси.',
        uz: 'Bu terminal va banklarda bo\'lib turishini past ovozda aytib, boshqa karta, naqd pul yoki o\'tkazmani taklif qilish, so\'ng taksi bilan yordam berish.',
        en: 'Say quietly that this happens with terminals and banks, offer another card, cash or a transfer, then help him with the taxi.',
      },
      {
        ru: 'Отпустить гостя, чтобы он не опоздал на рейс, записать телефон и e-mail и выслать ему счёт на оплату письмом после выезда.',
        uz: 'Reysga kechikmasligi uchun mehmonni qo\'yib yuborish, telefon va e-mailini yozib olish va hisobni chiqqandan keyin xat bilan yuborish.',
        en: 'Let him go so he doesn\'t miss his flight, take his phone and e-mail and send him the bill for payment after check-out.',
      },
      {
        ru: 'Извиниться и предложить гостю отойти в сторону и спокойно разобраться со своим банком, пока вы обслуживаете очередь.',
        uz: 'Uzr so\'rab, siz navbatga xizmat ko\'rsatayotganingizda mehmonga chetga chiqib, bank bilan xotirjam hal qilishni taklif qilish.',
        en: 'Apologise and suggest he step aside and sort it out calmly with his bank while you serve the rest of the queue.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Сценарий «проблема с оплатой» модуля жалоб: никогда не намекать на вину гостя в финансовых вопросах и тихо предлагать альтернативы — другую карту, наличные, перевод. «Отойдите и решите с банком» вежливо, но оставляет гостя одного с проблемой, а отпускать неоплаченный счёт при доступных способах оплаты — самовольное финансовое решение.',
      uz: 'Shikoyatlar modulining «to\'lov muammosi» stsenariysi: moliyaviy masalalarda hech qachon mehmon aybiga ishora qilmaslik va muqobillarni — boshqa karta, naqd pul, o\'tkazmani — past ovozda taklif qilish. «Chetga chiqib, bank bilan hal qiling» muloyim, ammo mehmonni muammo bilan yolg\'iz qoldiradi, to\'lov usullari mavjud bo\'lganda to\'lanmagan hisobni qo\'yib yuborish esa o\'zboshimcha moliyaviy qaror.',
      en: 'The complaints module\'s "payment problem" scenario: never hint that the guest is at fault in money matters, and quietly offer alternatives — another card, cash, a transfer. "Step aside and sort it out with your bank" is polite but leaves the guest alone with the problem, and letting an unpaid bill go when payment options exist is an unauthorised financial decision.',
    },
  },
  {
    id: 'final-mc-40',
    type: 'choice',
    moduleSlugs: ['upselling-rooms', 'complaints'],
    scenario: {
      ru: '23:10. Гость из стандартного 215-го спускается к стойке: над номером гудит машинное отделение лифта, уснуть невозможно, а утром у него важная встреча. Стандартные номера заняты, свободен только Deluxe этажом выше — по прейскуранту доплата 30 долларов в сутки. Дежурный менеджер на связи.',
      uz: 'Soat 23:10. Standart 215-xonadagi mehmon stoykaga tushadi: xona ustida liftning mashina bo\'limi g\'uvillayapti, uxlab bo\'lmaydi, ertalab esa uning muhim uchrashuvi bor. Standart xonalar band, faqat bir qavat yuqoridagi Deluxe bo\'sh — preyskurant bo\'yicha qo\'shimcha to\'lov sutkasiga 30 dollar. Navbatchi menejer aloqada.',
      en: '23:10. The guest from standard room 215 comes down to the desk: the lift machine room above is humming, he cannot sleep, and he has an important meeting in the morning. All standard rooms are taken; only a Deluxe one floor up is free, normally 30 dollars a night extra. The duty manager is reachable.',
    },
    question: {
      ru: 'Как поступить по стандарту?',
      uz: 'Standart bo\'yicha qanday yo\'l tutasiz?',
      en: 'What does the standard require?',
    },
    options: [
      {
        ru: 'Извиниться, сразу предложить переезд в Deluxe сегодня и, пока гость собирается, согласовать с менеджером отмену доплаты.',
        uz: 'Uzr so\'rab, darhol bugunoq Deluxe\'ga ko\'chishni taklif qilish, mehmon yig\'inayotganda esa qo\'shimcha to\'lovdan voz kechishni navbatchi menejer bilan kelishish.',
        en: 'Apologise, offer a move to the Deluxe tonight and, while he packs, clear the waived surcharge with the duty manager.',
      },
      {
        ru: 'Извиниться и предложить Deluxe как апгрейд: «Тише, с видом на город — всего 30 долларов в сутки», чтобы отель не терял выручку.',
        uz: 'Uzr so\'rab, Deluxe\'ni apgreyd sifatida taklif qilish: «Tinchroq, shaharga qaraydi — sutkasiga bor-yo\'g\'i 30 dollar», daromadni yo\'qotmaslik uchun.',
        en: 'Apologise and offer the Deluxe as an upgrade: "Quieter, with a city view — only 30 dollars a night," so no revenue is lost.',
      },
      {
        ru: 'Извиниться и в знак доброй воли самому снизить доплату за Deluxe до 15 долларов, чтобы не беспокоить менеджера ночью.',
        uz: 'Uzr so\'rab, xayrixohlik belgisi sifatida tunda menejerni bezovta qilmay, Deluxe uchun to\'lovni o\'zi 15 dollarga tushirish.',
        en: 'Apologise and, as a goodwill gesture, cut the Deluxe surcharge to 15 dollars yourself rather than disturb the manager at night.',
      },
      {
        ru: 'Извиниться, отправить техника к источнику шума, предложить беруши, а переезд в стандарт гарантировать завтра после выездов.',
        uz: 'Uzr so\'rab, shovqin manbaiga texnikni yuborish, quloq tiqinlarini taklif qilish, standart xonaga ko\'chishni esa ertaga chiqishlardan keyin kafolatlash.',
        en: 'Apologise, send a technician to the noise source, offer earplugs and guarantee a move to a standard room tomorrow after check-outs.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Модуль жалоб: решение показывают сразу, а финансовые вопросы решают вместе с менеджером; модуль апселлинга: допродажа — забота в правильный момент, а не способ взять деньги за проблему отеля. Продать исправление как апгрейд, дать скидку «от себя» или отложить решение до завтра — каждое нарушает один из этих принципов.',
      uz: 'Shikoyatlar moduli: yechim darhol ko\'rsatiladi, moliyaviy masalalar esa menejer bilan birga hal qilinadi; apselling moduli: qo\'shimcha sotuv — to\'g\'ri paytdagi g\'amxo\'rlik, mehmonxona muammosi uchun pul olish usuli emas. Tuzatishni apgreyd sifatida sotish, «o\'zidan» chegirma berish yoki yechimni ertaga qoldirish — har biri shu tamoyillardan birini buzadi.',
      en: 'The complaints module: the solution is shown at once and money matters are decided with the manager; the upselling module: an upsell is care at the right moment, not a way to charge for the hotel\'s own problem. Selling the fix as an upgrade, giving a discount "on your own", or putting the solution off until tomorrow each breaks one of these principles.',
    },
  },
  {
    id: 'final-mc-41',
    type: 'choice',
    moduleSlugs: ['greeting-guests', 'walk-in-guests'],
    scenario: {
      ru: '13:05, вы одни на стойке. По телефону гость подтверждает бронь на следующую неделю, и вы как раз повторяете ему даты и тип номера. В лобби входит пара с чемоданами без брони, подходит к стойке и выжидающе смотрит на вас.',
      uz: 'Soat 13:05, stoykada yolg\'izsiz. Telefonda mehmon keyingi haftaga bronni tasdiqlayapti, siz esa unga sanalar va xona turini takrorlayapsiz. Lobbiga bronsiz, chamadonli juftlik kirib, stoykaga keladi va sizga kutib qaraydi.',
      en: '13:05, you are alone at the desk. On the phone a guest is confirming a booking for next week, and you are just repeating the dates and room type to him. A couple with suitcases and no booking walks in, comes to the desk and looks at you expectantly.',
    },
    question: {
      ru: 'Как действовать по стандарту?',
      uz: 'Standart bo\'yicha qanday harakat qilasiz?',
      en: 'How do you act by the standard?',
    },
    options: [
      {
        ru: 'Не отвлекаться от звонка, чтобы не ошибиться в датах, довести его до конца и лишь затем поднять глаза и поприветствовать пару.',
        uz: 'Sanalarda xato qilmaslik uchun qo\'ng\'iroqdan chalg\'imaslik, uni oxirigacha yetkazish va shundan keyingina boshni ko\'tarib, juftlik bilan salomlashish.',
        en: 'Stay focused on the call so the dates aren\'t wrong, finish it fully and only then look up and greet the couple.',
      },
      {
        ru: 'Сказать звонящему «минуточку», отложить трубку без объяснений и сразу заняться парой, а звонок закончить, когда они выберут номер.',
        uz: 'Qo\'ng\'iroq qiluvchiga «bir daqiqa» deb, izohsiz trubkani qo\'yib, darhol juftlik bilan shug\'ullanish, qo\'ng\'iroqni esa ular xona tanlaganda tugatish.',
        en: 'Tell the caller "one moment", put the phone down without explanation and serve the couple, finishing the call once they\'ve chosen a room.',
      },
      {
        ru: 'Взглядом и фразой «Я сейчас к вам подойду» показать паре, что их заметили, подытожить и завершить звонок, затем спросить о ночах и гостях.',
        uz: 'Nigoh va «Hozir oldingizga kelaman» iborasi bilan juftlikka ular sezilganini ko\'rsatish, xulosa qilib qo\'ng\'iroqni tugatish, so\'ng kecha va mehmonlar sonini so\'rash.',
        en: 'Show the couple with a look and "I\'ll be right with you" that they\'ve been seen, sum up and end the call, then ask about nights and guests.',
      },
      {
        ru: 'Кивнуть паре, завершить звонок, поприветствовать их и сразу назвать цену самого дешёвого номера, а ночи и гостей уточнить при оформлении.',
        uz: 'Juftlikka bosh irg\'ab, qo\'ng\'iroqni tugatish, salomlashib, darhol eng arzon xona narxini aytish, kecha va mehmonlar sonini esa rasmiylashtirishda aniqlash.',
        en: 'Nod to the couple, end the call, greet them and quote the cheapest room straight away, asking about nights and guests during registration.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Правило 10 секунд: гостя замечают сразу, даже если вы заняты, — достаточно взгляда и «я сейчас подойду». Звонящего не бросают на удержании без объяснений, а разговор завершают итогом; гостю без брони сначала задают вопросы о ночах и гостях и только потом называют варианты с ценой.',
      uz: '10 soniya qoidasi: mehmon band bo\'lsangiz ham darhol seziladi — nigoh va «hozir kelaman» yetarli. Qo\'ng\'iroq qiluvchi izohsiz kutish rejimida tashlab qo\'yilmaydi, suhbat xulosa bilan yakunlanadi; bronsiz mehmondan avval kechalar va mehmonlar soni so\'raladi, shundan keyingina narxi bilan variantlar aytiladi.',
      en: 'The 10-second rule: a guest is acknowledged at once even if you are busy — a look and "I\'ll be right with you" are enough. A caller is never left on hold without explanation, and the call ends with a summary; a walk-in is first asked about nights and guests, and only then offered options with prices.',
    },
  },
  {
    id: 'final-mc-42',
    type: 'choice',
    moduleSlugs: ['emergency-procedures', 'foreign-guests'],
    scenario: {
      ru: '14:20. Срабатывает пожарная сигнализация. В лобби группа туристов из Кореи: по-русски и по-английски почти не понимают, растерянно оглядываются, двое направляются к лифту. Гид группы — у себя в номере на 5-м этаже. Стойку вы уже передали коллеге по плану.',
      uz: 'Soat 14:20. Yong\'in signalizatsiyasi ishlaydi. Lobbida Koreyadan kelgan sayyohlar guruhi: ruscha va inglizchani deyarli tushunmaydi, sarosimada atrofga qarashadi, ikki kishi liftga qarab ketmoqda. Guruh gidi 5-qavatdagi xonasida. Stoykani reja bo\'yicha hamkasbingizga allaqachon topshirdingiz.',
      en: '14:20. The fire alarm goes off. A tour group from Korea is in the lobby: they understand almost no Russian or English, look around in confusion, and two of them head for the lift. The group\'s guide is in his room on the 5th floor. You have already handed the desk to a colleague per plan.',
    },
    question: {
      ru: 'Как вывести группу по стандарту?',
      uz: 'Guruhni standart bo\'yicha qanday olib chiqasiz?',
      en: 'How do you get the group out by the standard?',
    },
    options: [
      {
        ru: 'Громко и чётко повторять по-английски «Fire alarm! Please go to the exit!», пока группа не поймёт, что нужно выходить.',
        uz: 'Guruh chiqish kerakligini tushunmaguncha inglizcha baland va aniq takrorlash: «Fire alarm! Please go to the exit!».',
        en: 'Keep repeating loudly and clearly in English, "Fire alarm! Please go to the exit!", until the group understands they must leave.',
      },
      {
        ru: 'Сначала набрать в переводчике текст объявления на корейском и показать его группе, чтобы все точно поняли, что происходит.',
        uz: 'Hamma nima bo\'layotganini aniq tushunishi uchun avval tarjimonda e\'lonning koreyscha matnini terib, guruhga ko\'rsatish.',
        en: 'First type the announcement into a translator in Korean and show it to the group so everyone understands exactly what\'s happening.',
      },
      {
        ru: 'Попросить группу подождать в лобби, пока гид спустится и объяснит ситуацию на родном языке, — так всем будет спокойнее.',
        uz: 'Gid tushib, vaziyatni ona tilida tushuntirguncha guruhdan lobbida kutishni so\'rash — shunda hammaga xotirjamroq bo\'ladi.',
        en: 'Ask the group to wait in the lobby until their guide comes down and explains in their language — calmer for everyone.',
      },
      {
        ru: 'Жестом остановить идущих к лифту, показать на знак выхода и повести группу к лестнице: «Exit. No lift. Follow me».',
        uz: 'Liftga ketayotganlarni imo bilan to\'xtatish, chiqish belgisini ko\'rsatib, guruhni sodda so\'zlar bilan zinaga boshlash: «Exit. No lift. Follow me».',
        en: 'Stop the two at the lift with a gesture, point to the exit sign and lead everyone to the stairs: "Exit. No lift. Follow me."',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'При пожарной тревоге гостей спокойно и уверенно ведут к ближайшему эвакуационному выходу, никогда не к лифту. Модуль об иностранных гостях: говорить проще, а не громче, и опираться на жесты и визуальные знаки; набор текста в переводчике и ожидание гида тратят минуты, которых при эвакуации нет.',
      uz: 'Yong\'in signalida mehmonlar xotirjam va ishonch bilan hech qachon liftga emas, eng yaqin evakuatsiya chiqishiga olib boriladi. Chet ellik mehmonlar moduli: balandroq emas, soddaroq gapirish va imo-ishora hamda ko\'rgazmali belgilarga tayanish; tarjimonda matn terish va gidni kutish evakuatsiyada mavjud bo\'lmagan daqiqalarni sarflaydi.',
      en: 'In a fire alarm guests are led calmly and confidently to the nearest emergency exit, never to the lift. The foreign-guests module: speak more simply, not louder, and rely on gestures and visual signs; typing into a translator or waiting for the guide spends minutes an evacuation doesn\'t have.',
    },
  },
  {
    id: 'final-mc-43',
    type: 'choice',
    moduleSlugs: ['lost-items', 'booking-com-guests'],
    scenario: {
      ru: '15:30. Гость, только что заселившийся в 309-й, приносит золотые часы из ящика тумбочки. Предыдущий гость выехал в 11:00 и бронировал через Booking.com; в PMS только служебный адрес платформы, телефона нет. У стойки ждут трое заезжающих.',
      uz: 'Soat 15:30. 309-xonaga hozirgina joylashgan mehmon tumbochka tortmasidan topgan oltin soatni olib keladi. Oldingi mehmon 11:00 da chiqib ketgan va Booking.com orqali bron qilgan; PMS\'da faqat platformaning xizmat manzili bor, telefon yo\'q. Stoykada uchta kelgan mehmon kutmoqda.',
      en: '15:30. A guest who has just checked into 309 brings in a gold watch from the bedside drawer. The previous guest left at 11:00 and booked via Booking.com; the PMS holds only the platform\'s relay address, no phone. Three arriving guests are waiting at the desk.',
    },
    question: {
      ru: 'Какая последовательность верна?',
      uz: 'Qaysi ketma-ketlik to\'g\'ri?',
      en: 'Which sequence is correct?',
    },
    options: [
      {
        ru: 'Попросить нашедшего гостя пока подержать часы в сейфе своего номера, а запись в журнале и поиск владельца сделать после очереди.',
        uz: 'Topgan mehmondan soatni hozircha o\'z xonasidagi seyfda saqlashni so\'rash, jurnalga yozuv va egasini qidirishni esa navbatdan keyin qilish.',
        en: 'Ask the finder to keep the watch in his room safe for now, and do the log entry and the owner search after the queue.',
      },
      {
        ru: 'Записать часы в журнал, убрать в сейф и первым написать владельцу через Extranet, предложив отправку за его счёт с ценой и сроками.',
        uz: 'Soatni jurnalga yozish, seyfga qo\'yish va egasiga birinchi bo\'lib Extranet orqali yozib, narx va muddatni aytib, uning hisobidan jo\'natishni taklif qilish.',
        en: 'Log the watch, lock it in the safe and message the owner first via the Extranet, offering delivery at his cost with price and timing.',
      },
      {
        ru: 'Сразу внести часы в журнал и убрать в сейф ресепшен, а затем ждать: владелец дорогой вещи наверняка сам хватится и свяжется.',
        uz: 'Soatni darhol jurnalga kiritib, resepshen seyfiga qo\'yish va kutish: qimmat buyum egasi albatta o\'zi payqab, bog\'lanadi.',
        en: 'Log the watch at once, lock it in the desk safe and wait: the owner of something so valuable will surely miss it and get in touch.',
      },
      {
        ru: 'Сразу написать владельцу через Extranet и бесплатно отправить часы курьером в знак извинения, а запись в журнал сделать после отправки.',
        uz: 'Darhol egasiga Extranet orqali yozib, uzr belgisi sifatida soatni kuryer orqali bepul jo\'natish, jurnalga yozuvni esa jo\'natgandan keyin qilish.',
        en: 'Message the owner via the Extranet at once and courier the watch free as an apology, making the log entry after it is sent.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Модуль находок: вещь регистрируют сразу, даже при очереди, а о ценной находке отель сообщает первым по контактам из брони — для Booking.com это сообщения через Extranet; доставку предлагают за счёт гостя, заранее назвав стоимость и сроки. Ждать звонка владельца — ошибка из списка, а «бесплатно и без записи» пропускает регистрацию и выдумывает условия.',
      uz: 'Topilmalar moduli: buyum navbat bo\'lsa ham darhol qayd etiladi, qimmatli topilma haqida mehmonxona brondagi kontaktlar orqali birinchi bo\'lib xabar beradi — Booking.com uchun bu Extranet orqali xabarlar; yetkazib berish mehmon hisobidan, narx va muddat oldindan aytilib taklif qilinadi. Egasining qo\'ng\'irog\'ini kutish — ro\'yxatdagi xato, «bepul va yozuvsiz» esa qayd etishni o\'tkazib yuboradi va shartlarni o\'ylab topadi.',
      en: 'The lost-items module: an item is logged at once even with a queue, and for a valuable find the hotel makes first contact via the booking details — for Booking.com that means messages through the Extranet; delivery is offered at the guest\'s cost with price and timing stated upfront. Waiting for the owner to call is a listed mistake, and "free and unlogged" skips registration and invents terms.',
    },
  },
  {
    id: 'final-mc-44',
    type: 'choice',
    moduleSlugs: ['upselling-rooms', 'phone-communication'],
    scenario: {
      ru: '12:10. Звонит женщина: хочет забронировать две ночи на выходные — двое взрослых и дети 6 и 9 лет — и просит «самый дешёвый вариант». Свободны стандарт (раскладушка для детей, 350 000 сум за ночь) и семейный номер с отдельной детской зоной (450 000 сум). Звонящая явно спешит.',
      uz: 'Soat 12:10. Bir ayol qo\'ng\'iroq qiladi: dam olish kunlariga ikki kecha bron qilmoqchi — ikki katta va 6 hamda 9 yoshli bolalar — va «eng arzon variant»ni so\'raydi. Standart (bolalar uchun yig\'ma karavot, kechasiga 350 000 so\'m) va alohida bolalar zonasi bo\'lgan oilaviy xona (450 000 so\'m) bo\'sh. Qo\'ng\'iroq qiluvchi shoshayotgani sezilib turibdi.',
      en: '12:10. A woman calls to book two weekend nights for two adults and children aged 6 and 9, asking for "the cheapest option". Free are a standard room (rollaway bed for the kids, 350,000 sum a night) and a family room with a separate children\'s area (450,000 sum). The caller is clearly in a hurry.',
    },
    question: {
      ru: 'Какой ответ соответствует стандартам?',
      uz: 'Qaysi javob standartlarga mos keladi?',
      en: 'Which reply meets the standards?',
    },
    options: [
      {
        ru: 'Повторить детали, назвать стандарт за 350 000 и как совет упомянуть семейный номер: «детская зона, +100 000 за ночь»; при отказе не настаивать.',
        uz: 'Tafsilotlarni takrorlab, standartni 350 000 ga aytish va maslahat sifatida oilaviy xonani eslatish: «bolalar zonasi, kechasiga +100 000»; rad etsa, turib olmaslik.',
        en: 'Repeat the details, quote the standard at 350,000 and mention the family room as advice — "kids\' area, +100,000 a night"; don\'t push if she declines.',
      },
      {
        ru: 'Повторить детали и предложить только стандарт за 350 000 с раскладушкой, а о семейном номере рассказать на заезде, когда семья увидит стандарт.',
        uz: 'Tafsilotlarni takrorlab, faqat yig\'ma karavotli standartni 350 000 ga taklif qilish, oilaviy xona haqida esa oila standartni ko\'rgach, kelganda aytish.',
        en: 'Repeat the details and offer only the standard at 350,000 with a rollaway, mentioning the family room at arrival once they\'ve seen the standard.',
      },
      {
        ru: 'Повторить детали и сразу предложить пакетом семейный номер, завтрак для детей и поздний выезд, назвав общую сумму за две ночи.',
        uz: 'Tafsilotlarni takrorlab, darhol oilaviy xona, bolalar nonushtasi va kech chiqishni paket sifatida taklif qilish va ikki kecha uchun umumiy summani aytish.',
        en: 'Repeat the details and offer the family room, children\'s breakfast and late check-out as a package, quoting the total for both nights.',
      },
      {
        ru: 'Повторить детали и объяснить, что стандарт для четверых тесный и шумный, поэтому семье нужен именно семейный номер за 450 000.',
        uz: 'Tafsilotlarni takrorlab, standart to\'rt kishi uchun tor va shovqinli ekanini, shuning uchun oilaga aynan 450 000 lik oilaviy xona kerakligini tushuntirish.',
        en: 'Repeat the details and explain that a standard is cramped and noisy for four, so the family really needs the family room at 450,000.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Апселлинг: одна самая уместная опция по сигналам гостя (двое детей), конкретно — цена, разница, выгода, тоном совета и с уважением к отказу. Принижать запрошенный вариант и предлагать пакет допродаж — ошибки модуля, а скрывать уместный вариант до заезда — лишить гостя выбора, пока он ещё может его сделать.',
      uz: 'Apselling: mehmon signallari (ikki bola) bo\'yicha eng mos bitta variant, aniq — narx, farq, foyda, maslahat ohangida va rad javobiga hurmat bilan. So\'ralgan variantni kamsitish va qo\'shimcha sotuvlar paketini taklif qilish — modul xatolari, mos variantni kelguncha yashirish esa mehmonni hali tanlay oladigan paytda tanlovdan mahrum qilish.',
      en: 'Upselling: one most relevant option based on the guest\'s signals (two children), stated concretely — price, difference, benefit — as advice and with respect for a refusal. Running down the requested option or offering a bundle of extras are module mistakes, and hiding the relevant option until arrival takes the choice away while she can still make it.',
    },
  },
  {
    id: 'final-mc-45',
    type: 'choice',
    moduleSlugs: ['booking-com-guests', 'check-out'],
    scenario: {
      ru: '10:20, выезд. Гость, бронировавший через Booking.com, увидел на сайте отеля цену на 10 % ниже и говорит: «Либо скидка, либо ставлю вам тройку на Booking». Его тариф — невозвратный, оплачен два месяца назад. Рядом стоят другие выезжающие гости.',
      uz: 'Soat 10:20, chiqib ketish. Booking.com orqali bron qilgan mehmon mehmonxona saytida narx 10 % arzonroq ekanini ko\'rib aytadi: «Yo chegirma, yo Booking\'da sizga uch qo\'yaman». Uning tarifi qaytarilmaydi, ikki oy oldin to\'langan. Yonida chiqib ketayotgan boshqa mehmonlar turibdi.',
      en: '10:20, check-out. A guest who booked via Booking.com has seen a price 10% lower on the hotel website and says: "Either a discount, or I give you a 3 on Booking." His rate is non-refundable, paid two months ago. Other departing guests are standing nearby.',
    },
    question: {
      ru: 'Какой ответ соответствует стандарту?',
      uz: 'Qaysi javob standartga mos keladi?',
      en: 'Which reply meets the standard?',
    },
    options: [
      {
        ru: 'Извиниться и предложить бесплатный завтрак при следующем визите в обмен на оценку не ниже девяти — так рейтинг отеля сохранится.',
        uz: 'Uzr so\'rab, kamida to\'qqiz baho evaziga keyingi tashrifda bepul nonushta taklif qilish — shunda mehmonxona reytingi saqlanadi.',
        en: 'Apologise and offer free breakfast on his next visit in exchange for a score of at least nine, so the hotel\'s rating is protected.',
      },
      {
        ru: 'Согласиться, что через Booking.com всегда дороже из-за комиссии, и посоветовать в следующий раз бронировать напрямую через сайт.',
        uz: 'Booking.com orqali komissiya sababli doim qimmatroq ekaniga rozi bo\'lib, keyingi safar to\'g\'ridan-to\'g\'ri sayt orqali bron qilishni maslahat berish.',
        en: 'Agree that Booking.com is always dearer because of its commission and advise him to book directly on the website next time.',
      },
      {
        ru: 'Спокойно объяснить, что цена зависит от тарифа и даты бронирования, не критикуя платформу, и пригласить оставить честный отзыв.',
        uz: 'Narx tarif shartlari va bron sanasiga bog\'liqligini platformani tanqid qilmay, xotirjam tushuntirish va halol sharh qoldirishga taklif qilish.',
        en: 'Calmly explain that the price depends on the rate and booking date, without criticising the platform, and invite an honest review.',
      },
      {
        ru: 'Сказать, что цены — не компетенция ресепшен, а отзывы почти не влияют на рейтинг, и закрыть счёт, не возвращаясь к этой теме.',
        uz: 'Narxlar resepshen vakolatiga kirmasligini, sharhlar reytingga deyarli ta\'sir qilmasligini aytib, mavzuga qaytmay hisobni yopish.',
        en: 'Say that pricing is not reception\'s responsibility and reviews barely affect the rating, and close the bill without returning to it.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Модуль Booking.com: разницу в цене объясняют спокойно, через условия тарифа (паритет цен), не критикуя платформу и не смущая гостя, а отзыв приглашают честный — за оценку не торгуются. «Не моя компетенция» — ошибка модуля жалоб, а обмен подарка на «девятку» — давление ради оценки.',
      uz: 'Booking.com moduli: narx farqi platformani tanqid qilmay va mehmonni xijolat qilmay, tarif shartlari (narx pariteti) orqali xotirjam tushuntiriladi, sharh esa halol so\'raladi — baho uchun savdolashilmaydi. «Mening vakolatim emas» — shikoyatlar moduli xatosi, sovg\'ani «to\'qqiz»ga almashtirish esa baho uchun bosim.',
      en: 'The Booking.com module: a price difference is explained calmly through the rate conditions (rate parity), without criticising the platform or embarrassing the guest, and the review invited is an honest one — you don\'t bargain over the score. "Not my responsibility" is a complaints-module mistake, and trading a gift for a "nine" is pressure for a score.',
    },
  },
]
