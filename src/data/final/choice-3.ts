import type { FinalChoiceQuestion } from '@/types'

export const finalChoice3: FinalChoiceQuestion[] = [
  {
    id: 'final-mc-31',
    type: 'choice',
    moduleSlugs: ['emergency-procedures', 'vip-guests'],
    scenario: {
      ru: '16:05, пятница. К стойке подходит VIP-гость (шестое проживание, в профиле отмечено «ценит скорость и приватность»), его багаж уже выгружают из такси. В этот момент срабатывает пожарная сигнализация. Инженер по рации говорит, что плановая проверка сигнализации назначена на 16:30 и «возможно, она началась раньше», но подтвердить этого не может. В лобби около десяти гостей, дежурный менеджер на пятом этаже.',
      uz: '16:05, juma. Stoykaga VIP mehmon (oltinchi tashrif, profilida «tezlik va maxfiylikni qadrlaydi» deb belgilangan) keladi, yuklari taksidan tushirilmoqda. Shu paytda yong\'in signalizatsiyasi ishga tushadi. Muhandis ratsiya orqali rejali tekshiruv 16:30 ga belgilanganini va «balki u ertaroq boshlangandir» deydi, lekin buni tasdiqlay olmaydi. Lobbida o\'nga yaqin mehmon bor, navbatchi menejer beshinchi qavatda.',
      en: '16:05, Friday. A VIP guest (sixth stay; profile note: "values speed and privacy") reaches the desk while his luggage is being unloaded from the taxi. At that moment the fire alarm goes off. Engineering says over the radio that the scheduled alarm test is set for 16:30 and "maybe it started early", but cannot confirm it. There are about ten guests in the lobby; the duty manager is on the fifth floor.',
    },
    question: {
      ru: 'Как действовать правильно?',
      uz: 'Qanday harakat qilish to\'g\'ri?',
      en: 'What is the correct way to act?',
    },
    options: [
      {
        ru: 'Быстро проводить VIP-гостя на лифте в уже подготовленный номер, чтобы он не стоял в шуме и толпе, а затем вернуться на стойку и вместе с инженером разобраться с сигнализацией.',
        uz: 'VIP mehmonni shovqin va olomon ichida turmasligi uchun liftda allaqachon tayyorlangan xonaga tez kuzatib qo\'yish, so\'ng stoykaga qaytib, muhandis bilan birga signalizatsiyani aniqlashtirish.',
        en: 'Quickly take the VIP up in the lift to his already prepared room so he is not left standing in the noise and crowd, then return to the desk and sort out the alarm together with engineering.',
      },
      {
        ru: 'Начать заселение VIP-гостя, тихо объяснив ему, что это, скорее всего, плановая проверка, и дождаться по рации подтверждения инженера, прежде чем кого-либо выводить из лобби.',
        uz: 'VIP mehmonni ro\'yxatdan o\'tkazishni boshlash, bu katta ehtimol bilan rejali tekshiruv ekanini unga sekin tushuntirish va lobbidan kimnidir olib chiqishdan oldin ratsiya orqali muhandisning tasdig\'ini kutish.',
        en: 'Start the VIP\'s check-in, quietly telling him it is most likely the scheduled test, and wait for engineering to confirm over the radio before moving anyone out of the lobby.',
      },
      {
        ru: 'Считать тревогу настоящей: спокойно направить VIP-гостя и всех в лобби к ближайшему эвакуационному выходу (не к лифту), передать стойку по плану покрытия и завершить заселение после отбоя.',
        uz: 'Signalni haqiqiy deb hisoblash: VIP mehmon va lobbidagi barchani xotirjam eng yaqin evakuatsiya chiqishiga (liftga emas) yo\'naltirish, stoykani qoplash rejasi bo\'yicha topshirish va ro\'yxatdan o\'tkazishni xavf o\'tgach yakunlash.',
        en: 'Treat the alarm as real: calmly direct the VIP and everyone in the lobby to the nearest evacuation exit (not the lift), hand the desk over per the coverage plan and finish his check-in after the all-clear.',
      },
      {
        ru: 'Направить гостей лобби к эвакуационному выходу, а самому лично проводить VIP-гостя до места сбора и оставаться с ним там, чтобы он чувствовал персональное внимание даже в такой ситуации.',
        uz: 'Lobbidagi mehmonlarni evakuatsiya chiqishiga yo\'naltirish, VIP mehmonni esa yig\'ilish joyigacha shaxsan kuzatib borish va bunday vaziyatda ham shaxsiy e\'tiborni his qilishi uchun u bilan o\'sha yerda qolish.',
        en: 'Direct the lobby guests to the evacuation exit, then personally escort the VIP to the assembly point and stay there with him so that he feels personal attention even in this situation.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'По протоколу любая тревога считается настоящей до отбоя: гостей спокойно направляют к ближайшему выходу, лифт не используют, а стойка никогда не остаётся без покрытия — её передают по плану. VIP-статус этого не меняет; персональное внимание возобновляется после отбоя. Самый сильный дистрактор — лично сопровождать VIP-гостя: он оставляет стойку пустой, а ожидание подтверждения держит людей в опасности.',
      uz: 'Protokol bo\'yicha har qanday signal xavf o\'tguncha haqiqiy hisoblanadi: mehmonlar xotirjam eng yaqin chiqishga yo\'naltiriladi, lift ishlatilmaydi, stoyka esa hech qachon qoplanmasdan qolmaydi — u reja bo\'yicha topshiriladi. VIP maqomi buni o\'zgartirmaydi; shaxsiy e\'tibor xavf o\'tgach davom etadi. Eng kuchli chalg\'ituvchi — VIP mehmonni shaxsan kuzatish: u stoykani bo\'sh qoldiradi, tasdiqni kutish esa odamlarni xavfda ushlab turadi.',
      en: 'Under the protocol every alarm is treated as real until the all-clear: guests are calmly directed to the nearest exit, the lift is never used, and the desk is never left uncovered — it is handed over per the plan. VIP status changes none of this; personal attention resumes after the all-clear. The strongest distractor, escorting the VIP yourself, leaves the desk empty, and waiting for confirmation keeps people in danger.',
    },
  },
  {
    id: 'final-mc-32',
    type: 'choice',
    moduleSlugs: ['booking-com-guests', 'walk-in-guests'],
    scenario: {
      ru: '22:40. В отеле остался один свободный номер, и он закреплён за бронью Booking.com: предоплаченный невозвратный тариф, в комментарии гостя указано прибытие в 18:00, телефон не отвечает, сообщений в Extranet нет. По правилам отеля бронь считается незаездом только после ночного аудита в 00:00. К стойке подходит пара без брони с чемоданами и просит именно этот номер: «Мы же видим, что он свободен».',
      uz: '22:40. Mehmonxonada bitta bo\'sh xona qolgan va u Booking.com broniga biriktirilgan: oldindan to\'langan qaytarilmaydigan tarif, mehmon izohida kelish vaqti 18:00, telefon javob bermaydi, Extranet\'da xabar yo\'q. Mehmonxona qoidalariga ko\'ra bron faqat 00:00 dagi tungi audit o\'tgach kelmagan hisoblanadi. Stoykaga bronsiz, chamadonli juftlik kelib, aynan shu xonani so\'raydi: «Uning bo\'shligini ko\'rib turibmiz-ku».',
      en: '22:40. One room is left and it is held for a Booking.com reservation: prepaid non-refundable rate, the guest\'s comment says arrival at 18:00, the phone goes unanswered and there are no messages in the Extranet. Under hotel policy a booking counts as a no-show only after the night audit at 00:00. A couple without a reservation comes to the desk with suitcases and asks for exactly that room: "We can see it is free."',
    },
    question: {
      ru: 'Какое решение верно?',
      uz: 'Qaysi yechim to\'g\'ri?',
      en: 'Which decision is correct?',
    },
    options: [
      {
        ru: 'Честно сказать паре, что на сегодня свободных номеров нет, так как последний закреплён за подтверждённой бронью, порекомендовать партнёрский отель рядом и помочь позвонить туда, а гостю Booking.com продолжать дозваниваться.',
        uz: 'Juftlikka bugun bo\'sh xona yo\'qligini, oxirgisi tasdiqlangan bronga biriktirilganini halol aytish, yaqin hamkor mehmonxonani tavsiya qilib, u yerga qo\'ng\'iroq qilishda yordam berish, Booking.com mehmoniga esa qo\'ng\'iroq qilishda davom etish.',
        en: 'Tell the couple honestly that no rooms are free tonight because the last one is held for a confirmed booking, recommend a partner hotel nearby and help them call it, while continuing to try to reach the Booking.com guest.',
      },
      {
        ru: 'Продать номер паре: гость опоздал почти на пять часов, предоплату по невозвратному тарифу он всё равно не получит обратно, так что отель ничего не теряет, а бронь Booking.com закрыть как незаезд прямо сейчас.',
        uz: 'Xonani juftlikka sotish: mehmon deyarli besh soatga kechikdi, qaytarilmaydigan tarif bo\'yicha oldindan to\'lovni baribir qaytarib olmaydi, demak mehmonxona hech narsa yo\'qotmaydi, Booking.com bronini esa hozirning o\'zida kelmagan deb yopish.',
        en: 'Sell the room to the couple: the guest is almost five hours late and will not get his non-refundable prepayment back anyway, so the hotel loses nothing, and close the Booking.com reservation as a no-show right now.',
      },
      {
        ru: 'Заселить пару, продолжая звонить гостю Booking.com, а если он всё же приедет ночью — извиниться и за счёт отеля отправить его в партнёрский отель, как это делается при обычном овербукинге.',
        uz: 'Juftlikni joylashtirish, Booking.com mehmoniga qo\'ng\'iroq qilishda davom etish, agar u baribir kechasi kelsa — uzr so\'rab, oddiy ortiqcha bron holatidagidek mehmonxona hisobidan hamkor mehmonxonaga jo\'natish.',
        en: 'Check the couple in while still calling the Booking.com guest, and if he does arrive during the night, apologise and send him to a partner hotel at the hotel\'s expense, as in any ordinary overbooking.',
      },
      {
        ru: 'Предложить паре подождать в лобби до 00:00: если гость Booking.com не появится до ночного аудита, номер освободится и его можно будет продать им, а пока угостить их чаем за счёт отеля.',
        uz: 'Juftlikka lobbida 00:00 gacha kutishni taklif qilish: agar Booking.com mehmoni tungi auditgacha kelmasa, xona bo\'shaydi va uni ularga sotish mumkin bo\'ladi, hozircha esa mehmonxona hisobidan choy bilan siylash.',
        en: 'Offer the couple to wait in the lobby until 00:00: if the Booking.com guest does not appear before the night audit, the room is released and can be sold to them, and meanwhile treat them to tea on the house.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Подтверждённая предоплаченная бронь удерживается, пока правило отеля о незаезде её не снимет; продать этот номер — значит сознательно создать овербукинг, за который, по модулю жалоб, отвечает целиком отель. Стандарт walk-in при полной загрузке: не просто «мест нет», а партнёрский отель и помощь со звонком. Ожидание «а вдруг» оставляет уставших людей в неопределённости, а вариант с заселением и последующим «извинимся» — это запланированный овербукинг.',
      uz: 'Tasdiqlangan, oldindan to\'langan bron mehmonxonaning kelmaganlik qoidasi uni bekor qilguncha ushlab turiladi; bu xonani sotish — ortiqcha bronni ataylab yaratish, shikoyatlar moduliga ko\'ra bunga to\'liq mehmonxona javob beradi. To\'liq bandlikda walk-in standarti: shunchaki «joy yo\'q» emas, hamkor mehmonxona va qo\'ng\'iroqda yordam. «Balki» deb kutish charchagan odamlarni noaniqlikda qoldiradi, joylashtirib keyin «uzr so\'raymiz» varianti esa rejalashtirilgan ortiqcha bron.',
      en: 'A confirmed prepaid booking is held until the hotel\'s no-show rule releases it; selling that room means knowingly creating an overbooking, which the complaints module says is entirely the hotel\'s responsibility. The walk-in standard when full is never a bare "no rooms" but a partner hotel plus help with the call. Waiting "just in case" leaves tired people in limbo, and checking them in to apologise later is a planned overbooking.',
    },
  },
  {
    id: 'final-mc-33',
    type: 'choice',
    moduleSlugs: ['late-checkout', 'early-checkin'],
    scenario: {
      ru: '10:30, воскресенье, отель заполнен на 100%. Гость из номера 604 просит остаться до 15:00: по правилам выезд до 14:00 бесплатный, позже — 50% стоимости ночи. В PMS: номер 604 закреплён за заезжающим гостем, которому вчера в WhatsApp письменно подтвердили ранний заезд в 13:00; другие номера этой категории освобождаются только после 12:00, и к 13:00 их не уберут. Уборка номера занимает около часа.',
      uz: '10:30, yakshanba, mehmonxona 100% band. 604-xona mehmoni 15:00 gacha qolishni so\'raydi: qoidalarga ko\'ra 14:00 gacha chiqish bepul, keyin — kecha narxining 50 foizi. PMS\'da: 604-xona kelayotgan mehmonga biriktirilgan, unga kecha WhatsApp orqali 13:00 dagi erta kirish yozma tasdiqlangan; shu toifadagi boshqa xonalar faqat 12:00 dan keyin bo\'shaydi va 13:00 gacha tozalanmaydi. Xonani tozalash taxminan bir soat oladi.',
      en: '10:30, Sunday, the hotel is 100% full. The guest in room 604 asks to stay until 15:00: by policy check-out until 14:00 is free, later costs 50% of the nightly rate. The PMS shows room 604 is pre-assigned to an arriving guest who was given written confirmation on WhatsApp yesterday of a 13:00 early check-in; other rooms of this category are vacated only after 12:00 and cannot be cleaned by 13:00. Cleaning a room takes about an hour.',
    },
    question: {
      ru: 'Какой ответ гостю из 604-го соответствует стандарту?',
      uz: '604-xona mehmoniga qaysi javob standartga mos keladi?',
      en: 'Which answer to the guest in 604 meets the standard?',
    },
    options: [
      {
        ru: 'Согласиться на 15:00 с оплатой 50%, раз правила это допускают, а заезжающему гостю написать в WhatsApp, что ранний заезд, к сожалению, не получится и номер будет готов к стандартным 14:00.',
        uz: 'Qoidalar bunga yo\'l qo\'ygani uchun 50% to\'lov bilan 15:00 ga rozi bo\'lish, kelayotgan mehmonga esa WhatsApp orqali erta kirish, afsuski, bo\'lmasligini va xona standart 14:00 ga tayyor bo\'lishini yozish.',
        en: 'Agree to 15:00 with the 50% fee, since policy allows it, and message the arriving guest on WhatsApp that the early check-in unfortunately cannot happen and the room will be ready at the standard 14:00.',
      },
      {
        ru: 'Сказать гостю: «Постараемся, подойдите к 12:00 — посмотрим, как пойдёт уборка на этаже», чтобы не отказывать сразу, и решить вопрос уже на месте в зависимости от ситуации.',
        uz: 'Darhol rad etmaslik uchun mehmonga: «Harakat qilamiz, 12:00 ga keling — qavatda tozalash qanday ketayotganini ko\'ramiz» deyish va masalani vaziyatga qarab o\'sha paytda hal qilish.',
        en: 'Tell the guest "we\'ll try — come back at 12:00 and we\'ll see how the cleaning on the floor is going", so as not to refuse outright, and decide on the spot depending on the situation.',
      },
      {
        ru: 'Вежливо отказать, сославшись на полную загрузку отеля и стандартное время выезда 12:00, и попросить гостя освободить номер вовремя, чтобы хозяйственная служба успела подготовить его к заезду.',
        uz: 'Mehmonxonaning to\'liq bandligi va standart 12:00 chiqish vaqtiga ishora qilib, muloyimlik bilan rad etish va xo\'jalik xizmati xonani kelishga tayyorlab ulgurishi uchun mehmondan xonani o\'z vaqtida bo\'shatishni so\'rash.',
        en: 'Politely decline, citing full occupancy and the standard 12:00 check-out, and ask the guest to vacate on time so that housekeeping can prepare the room for the arrival.',
      },
      {
        ru: 'Честно объяснить, что номер обещан заезжающему гостю к 13:00 и продлить его нельзя, предложить бесплатное хранение багажа и лаунж до вечера и проследить, чтобы хозяйственная служба взяла 604-й в уборку сразу после выезда.',
        uz: 'Xona kelayotgan mehmonga 13:00 ga va\'da qilinganini va uzaytirib bo\'lmasligini halol tushuntirish, kechgacha bepul yuk saqlash va lounge zonasini taklif qilish hamda xo\'jalik xizmati 604-xonani chiqishdan keyin darhol tozalashga olishini kuzatish.',
        en: 'Explain honestly that the room is promised to an arriving guest at 13:00 and cannot be extended, offer free luggage storage and the lounge until the evening, and make sure housekeeping takes 604 for cleaning right after he leaves.',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Поздний выезд зависит от того, нужен ли номер заезжающему гостю, — здесь он письменно обещан к 13:00, и ранний заезд нельзя тихо отозвать: модуль раннего заезда прямо называет ложные надежды и невыполненные обещания главной ошибкой. Отказ обязателен вместе с альтернативой — вариант со ссылкой на 12:00 без хранения багажа повторяет ошибку из списка, а «постараемся, посмотрим» — расплывчатое обещание, которое оба модуля запрещают.',
      uz: 'Kech chiqish xona kelayotgan mehmonga kerakmi-yo\'qligiga bog\'liq — bu yerda u 13:00 ga yozma va\'da qilingan va erta kirishni indamay qaytarib olib bo\'lmaydi: erta kirish moduli yolg\'on umid va bajarilmagan va\'dalarni asosiy xato deb ataydi. Rad etish muqobil variant bilan birga bo\'lishi shart — 12:00 ga ishora qilib, yuk saqlashsiz rad etish ro\'yxatdagi xatoni takrorlaydi, «harakat qilamiz, ko\'ramiz» esa ikkala modul taqiqlaydigan noaniq va\'da.',
      en: 'Late check-out depends on whether the room is needed for an arrival — here it is promised in writing for 13:00, and an early check-in cannot be quietly withdrawn: the early check-in module names false hope and broken promises as the main mistake. A refusal must come with an alternative — citing 12:00 without luggage storage repeats a listed mistake, and "we\'ll try, let\'s see" is the vague promise both modules forbid.',
    },
  },
  {
    id: 'final-mc-34',
    type: 'choice',
    moduleSlugs: ['lost-items', 'phone-communication'],
    scenario: {
      ru: '14:20. Горничная принесла паспорт, найденный в номере 218: гость выехал утром; паспорт уже внесён в журнал находок и убран в сейф, но дозвониться до гостя вы ещё не успели. В 15:00 звонит мужчина: представляется братом гостя, называет его имя и номер комнаты, просит подтвердить, что паспорт у вас, и отдать его курьеру, которого он пришлёт через час. Дату рождения и номер паспорта он назвать не может.',
      uz: '14:20. Xizmatchi 218-xonada topilgan pasportni olib keldi: mehmon ertalab chiqib ketgan; pasport allaqachon topilmalar jurnaliga kiritilgan va seyfga qo\'yilgan, lekin mehmonga qo\'ng\'iroq qilib ulgurmadingiz. 15:00 da bir erkak qo\'ng\'iroq qiladi: o\'zini mehmonning akasi deb tanishtiradi, uning ismi va xona raqamini aytadi, pasport sizda ekanini tasdiqlashni va bir soatdan keyin yuboradigan kuryerga berishni so\'raydi. Tug\'ilgan sana va pasport raqamini ayta olmaydi.',
      en: '14:20. A housekeeper brought a passport found in room 218: the guest checked out this morning; the passport is already logged in the register and locked in the safe, but you have not yet managed to reach the guest. At 15:00 a man calls: he introduces himself as the guest\'s brother, gives the guest\'s name and room number, asks you to confirm that the passport is with you and to hand it to a courier he will send in an hour. He cannot give the date of birth or passport number.',
    },
    question: {
      ru: 'Как правильно построить этот разговор и что сделать дальше?',
      uz: 'Bu suhbatni qanday olib borish va keyin nima qilish to\'g\'ri?',
      en: 'How should you handle this call and what should you do next?',
    },
    options: [
      {
        ru: 'Поскольку звонящий знает имя гостя и номер комнаты, подтвердить, что паспорт найден, и выдать его курьеру под подпись в журнале находок, записав паспортные данные курьера, время передачи и номер телефона звонившего.',
        uz: 'Qo\'ng\'iroq qiluvchi mehmonning ismi va xona raqamini bilgani uchun pasport topilganini tasdiqlash va uni topilmalar jurnalida imzo bilan kuryerga berish, kuryerning pasport ma\'lumotlari, topshirish vaqti va qo\'ng\'iroq qiluvchining telefon raqamini yozib olgan holda.',
        en: 'Since the caller knows the guest\'s name and room number, confirm that the passport was found and release it to the courier against a signature in the register, recording the courier\'s ID details, the handover time and the caller\'s phone number.',
      },
      {
        ru: 'Не подтверждать по телефону ни находку, ни данные гостя, записать имя и номер звонящего и пообещать перезвонить; затем самому связаться с гостем по контактам из брони и выдать паспорт только ему или по его письменному указанию.',
        uz: 'Telefonda na topilmani, na mehmon ma\'lumotlarini tasdiqlamaslik, qo\'ng\'iroq qiluvchining ismi va raqamini yozib, qayta qo\'ng\'iroq qilishga va\'da berish; so\'ng brondagi kontaktlar orqali mehmon bilan o\'zingiz bog\'lanib, pasportni faqat unga yoki uning yozma ko\'rsatmasi bo\'yicha berish.',
        en: 'Confirm neither the find nor any guest details over the phone, take the caller\'s name and number and promise a call back; then contact the guest yourself via the booking details and release the passport only to him or on his written instruction.',
      },
      {
        ru: 'Попросить звонящего назвать полное имя гостя и дату его рождения и, если они совпадут с паспортом, передать документ курьеру под подпись, сделав подробную запись в журнале находок с данными курьера и временем выдачи.',
        uz: 'Qo\'ng\'iroq qiluvchidan mehmonning to\'liq ismi va tug\'ilgan sanasini aytishni so\'rash va ular pasportga mos kelsa, hujjatni imzo bilan kuryerga berib, topilmalar jurnaliga kuryer ma\'lumotlari va berilgan vaqt bilan batafsil yozuv qilish.',
        en: 'Ask the caller for the guest\'s full name and date of birth and, if they match the passport, hand the document to the courier against a signature, making a detailed register entry with the courier\'s details and the time of release.',
      },
      {
        ru: 'Сказать, что ничего не находили, чтобы не рисковать документом, вежливо завершить разговор и дождаться, пока сам гость позвонит и спросит о паспорте, — тогда проверить его данные и договориться о выдаче.',
        uz: 'Hujjatni xavf ostiga qo\'ymaslik uchun hech narsa topilmaganini aytish, suhbatni muloyimlik bilan tugatish va mehmonning o\'zi qo\'ng\'iroq qilib pasport haqida so\'rashini kutish — o\'shanda uning ma\'lumotlarini tekshirib, berish haqida kelishish.',
        en: 'Say nothing was found, so as not to put the document at risk, politely end the call and wait until the guest himself calls to ask about the passport — then verify his details and arrange the handover.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'По модулю находок отель первым связывается с гостем по контактам из брони, а документ выдаётся только владельцу: имя и номер комнаты знает любой, кто ехал с ним, а «проверка» по дате рождения — выдуманная процедура, которая всё равно отдаёт паспорт третьему лицу. Телефонный стандарт — вежливость, запись данных и обещание перезвонить; ответ «ничего не находили» — ложь, к тому же отменяющая обязательный звонок гостю.',
      uz: 'Topilmalar moduliga ko\'ra mehmonxona brondagi kontaktlar orqali mehmon bilan birinchi bo\'lib bog\'lanadi, hujjat esa faqat egasiga beriladi: ism va xona raqamini u bilan birga sayohat qilgan har kim biladi, tug\'ilgan sana bo\'yicha «tekshiruv» esa o\'ylab topilgan tartib bo\'lib, pasportni baribir uchinchi shaxsga beradi. Telefon standarti — muloyimlik, ma\'lumotlarni yozib olish va qayta qo\'ng\'iroq va\'dasi; «hech narsa topilmagan» javobi — yolg\'on, ustiga-ustak mehmonga majburiy qo\'ng\'iroqni bekor qiladi.',
      en: 'Under the lost-items module the hotel contacts the guest first via the booking details, and a document is released only to its owner: anyone who travelled with him knows his name and room number, and a "check" by date of birth is an invented procedure that still hands the passport to a third party. The phone standard is courtesy, taking details and promising a callback; "nothing was found" is a lie that also cancels the mandatory call to the guest.',
    },
  },
  {
    id: 'final-mc-35',
    type: 'choice',
    moduleSlugs: ['complaints', 'phone-communication'],
    scenario: {
      ru: '02:05, ночная смена, вы одни на стойке. Ночной аудит в самом разгаре: вы сверяете отчёты, и если прерваться, сверку придётся начинать заново. Звонит внутренний телефон из номера 415: гостья говорит, что в 417-м уже больше часа громкая музыка, она не может уснуть, «и это уже третий раз за неделю». Охранник на обходе, доступен по рации.',
      uz: '02:05, tungi smena, stoykada yolg\'izsiz. Tungi audit avjida: hisobotlarni solishtiryapsiz, to\'xtasangiz, solishtirishni qaytadan boshlashga to\'g\'ri keladi. 415-xonadan ichki telefon jiringlaydi: mehmon ayol 417-xonada bir soatdan ortiq baland musiqa ekanini, uxlay olmayotganini aytadi, «bu haftada uchinchi marta». Qo\'riqchi aylanib yuribdi, ratsiya orqali bog\'lanish mumkin.',
      en: '02:05, night shift, you are alone at the desk. The night audit is in full swing: you are reconciling reports, and if you stop, the reconciliation has to start over. The internal phone rings from room 415: the guest says there has been loud music in 417 for over an hour, she cannot sleep, "and this is the third time this week". The security guard is on his rounds, reachable by radio.',
    },
    question: {
      ru: 'Какая последовательность действий соответствует стандарту?',
      uz: 'Qaysi harakatlar ketma-ketligi standartga mos keladi?',
      en: 'Which sequence of actions meets the standard?',
    },
    options: [
      {
        ru: 'Дать телефону дозвонить, пока вы не закончите текущую сверку (две-три минуты), чтобы не начинать её заново, затем перезвонить в 415-й, извиниться и отправить охрану к шумному номеру.',
        uz: 'Qaytadan boshlamaslik uchun joriy solishtirishni tugatguncha (ikki-uch daqiqa) telefonni jiringlatib qo\'yish, so\'ng 415-xonaga qayta qo\'ng\'iroq qilib, uzr so\'rash va qo\'riqchini shovqinli xonaga yuborish.',
        en: 'Let the phone ring until you finish the current reconciliation (two or three minutes) so you do not have to restart it, then call 415 back, apologise and send security to the noisy room.',
      },
      {
        ru: 'Ответить до третьего гудка, извиниться и объяснить, что ночью в большом отеле шум случается, предложить беруши с ресепшен, а охрану отправить, если шум не прекратится в течение получаса.',
        uz: 'Uchinchi jiringlashgacha javob berish, uzr so\'rab, katta mehmonxonada kechasi shovqin bo\'lib turishini tushuntirish, resepshendan quloq tiqinlarini taklif qilish, shovqin yarim soat ichida to\'xtamasa, qo\'riqchini yuborish.',
        en: 'Answer by the third ring, apologise and explain that some noise happens at night in a big hotel, offer earplugs from reception, and send security if the noise does not stop within half an hour.',
      },
      {
        ru: 'Ответить до третьего гудка с названием отеля и своим именем, извиниться, сразу по рации отправить охрану в 417-й, пообещать гостье перезвонить через 10 минут и действительно перезвонить, а аудит продолжить после.',
        uz: 'Uchinchi jiringlashgacha mehmonxona nomi va o\'z ismingiz bilan javob berish, uzr so\'rash, darhol ratsiya orqali qo\'riqchini 417-xonaga yuborish, mehmonga 10 daqiqadan keyin qayta qo\'ng\'iroq qilishga va\'da berib, haqiqatan qo\'ng\'iroq qilish, auditni esa keyin davom ettirish.',
        en: 'Answer by the third ring with the hotel name and your own name, apologise, send security to 417 by radio at once, promise the guest a call back in 10 minutes and actually call back, and continue the audit afterwards.',
      },
      {
        ru: 'Ответить до третьего гудка, извиниться, по рации отправить охрану в 417-й и заверить гостью, что вопрос решён, а затем вернуться к аудиту, чтобы не терять время, — охрана справится сама.',
        uz: 'Uchinchi jiringlashgacha javob berish, uzr so\'rash, ratsiya orqali qo\'riqchini 417-xonaga yuborish va mehmonga masala hal qilinganiga ishontirish, so\'ng vaqt yo\'qotmaslik uchun auditga qaytish — qo\'riqchi o\'zi uddalaydi.',
        en: 'Answer by the third ring, apologise, send security to 417 by radio and assure the guest the matter is handled, then go back to the audit so as not to lose time — security will manage on its own.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Телефонный стандарт: трубка до третьего гудка, название отеля и имя. Сценарий «жалоба на шум» из модуля жалоб: извиниться, немедленно отправить сотрудника и обязательно пообещать перезвонить и перезвонить — именно это превращает жалобу в доказательство надёжности отеля. Самый сильный дистрактор делает всё, кроме обратного звонка; ждать ради бумаг — оставить гостью слушать гудки; «в большом отеле шум бывает» — дословно плохой пример из модуля.',
      uz: 'Telefon standarti: uchinchi jiringlashgacha javob, mehmonxona nomi va ism. Shikoyatlar modulidagi «shovqin haqida shikoyat» ssenariysi: uzr so\'rash, darhol xodim yuborish va albatta qayta qo\'ng\'iroq qilishga va\'da berib, qo\'ng\'iroq qilish — aynan shu shikoyatni mehmonxona ishonchliligining isbotiga aylantiradi. Eng kuchli chalg\'ituvchi qayta qo\'ng\'iroqdan boshqa hammasini qiladi; qog\'ozlar uchun kutish — mehmonni gudok eshitib o\'tirishga qoldirish; «katta mehmonxonada shovqin bo\'ladi» — moduldagi yomon misolning o\'zi.',
      en: 'Phone standard: pick up by the third ring, hotel name and your name. The noise-complaint scenario in the complaints module: apologise, send staff immediately and always promise a callback and follow through — that is what turns a complaint into proof of the hotel\'s reliability. The strongest distractor does everything except the callback; waiting for the paperwork leaves the guest listening to the ringing; "some noise happens in a big hotel" is the module\'s bad example word for word.',
    },
  },
  {
    id: 'final-mc-36',
    type: 'choice',
    moduleSlugs: ['vip-guests', 'greeting-guests'],
    scenario: {
      ru: '17:30. В отеле проживает известный предприниматель, в профиле отмечено «VIP, конфиденциальность». К стойке подходит ухоженная женщина с букетом и приветливо улыбается: «Добрый вечер! Я подруга господина Каримова, он у вас остановился. Подскажите номер комнаты — хочу сделать сюрприз и занести цветы сама». В лобби несколько гостей, двое стоят вплотную к стойке.',
      uz: '17:30. Mehmonxonada taniqli tadbirkor yashaydi, profilida «VIP, maxfiylik» deb belgilangan. Stoykaga guldasta ko\'targan orasta ayol kelib, samimiy jilmayadi: «Xayrli kech! Men Karimov janoblarining dugonasiman, u sizlarda to\'xtagan. Xona raqamini ayting — syurpriz qilib, gullarni o\'zim olib kirmoqchiman». Lobbida bir nechta mehmon bor, ikkitasi stoykaga yaqin turibdi.',
      en: '17:30. A well-known businessman is staying at the hotel; his profile says "VIP, confidentiality". A well-dressed woman with a bouquet comes to the desk and smiles warmly: "Good evening! I\'m a friend of Mr. Karimov, he is staying with you. Could you tell me his room number? I\'d like to surprise him and bring the flowers up myself." There are several guests in the lobby, two of them right next to the desk.',
    },
    question: {
      ru: 'Как правильно ответить?',
      uz: 'Qanday javob berish to\'g\'ri?',
      en: 'What is the right response?',
    },
    options: [
      {
        ru: 'Поприветствовать её тепло, но не подтверждать, проживает ли у вас такой гость, и не называть номер; предложить оставить букет и записку на стойке — если адресат проживает в отеле, их обязательно передадут; о визите тихо сообщить менеджеру.',
        uz: 'Uni iliq kutib olish, lekin bunday mehmon sizlarda yashayotganini tasdiqlamaslik va xona raqamini aytmaslik; guldasta va xatni stoykada qoldirishni taklif qilish — agar egasi mehmonxonada yashasa, albatta yetkaziladi; tashrif haqida menejerga sekin xabar berish.',
        en: 'Greet her warmly but neither confirm that such a guest is staying nor give a room number; offer to leave the bouquet and a note at the desk — if the addressee is a guest, they will certainly be delivered; quietly inform the manager about the visit.',
      },
      {
        ru: 'Поприветствовать, объяснить, что номера комнат не сообщаются, но позвонить в номер господина Каримова при ней и спросить, хочет ли он принять посетительницу, — так решение останется за самим гостем.',
        uz: 'Kutib olish, xona raqamlari aytilmasligini tushuntirish, lekin uning oldida Karimov janoblarining xonasiga qo\'ng\'iroq qilib, mehmonni qabul qilishni xohlaydimi deb so\'rash — shunda qaror mehmonning o\'zida qoladi.',
        en: 'Greet her, explain that room numbers are not disclosed, but call Mr. Karimov\'s room in front of her and ask whether he wishes to receive the visitor — that way the decision stays with the guest himself.',
      },
      {
        ru: 'Поприветствовать и сказать с улыбкой: «Господин Каримов — наш VIP-гость, я обязательно передам ему, что вы приходили», взять букет и попросить её оставить номер телефона для обратной связи.',
        uz: 'Kutib olib, jilmayib: «Karimov janoblari — bizning VIP mehmonimiz, kelganingizni unga albatta aytaman» deyish, guldastani olish va aloqa uchun telefon raqamini qoldirishni so\'rash.',
        en: 'Greet her and say with a smile, "Mr. Karimov is our VIP guest, I will certainly let him know you came by", take the bouquet and ask her to leave a phone number so he can get back to her.',
      },
      {
        ru: 'Поприветствовать, номер не называть, но, чтобы не портить сюрприз и не обидеть её, подсказать этаж и предложить подняться вместе с ней — так она не узнает номер, а цветы попадут к гостю лично.',
        uz: 'Kutib olish, xona raqamini aytmaslik, lekin syurprizni buzmaslik va uni xafa qilmaslik uchun qavatni aytib, u bilan birga chiqishni taklif qilish — shunda u xona raqamini bilmaydi, gullar esa mehmonga shaxsan yetadi.',
        en: 'Greet her, withhold the room number, but to keep the surprise and not offend her, tell her the floor and offer to go up with her — that way she does not learn the number and the flowers reach the guest in person.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Модуль VIP: персонализация видна гостю, но невидима окружающим, а детали никогда не обсуждаются вслух в лобби. Посетитель не получает о госте никаких сведений — даже подтверждения, что он проживает. Звонок в номер при ней уже подтверждает и проживание, и этаж по вашим действиям; фраза «наш VIP-гость» — объявление статуса вслух, прямая ошибка из списка; подсказка этажа — раскрытие информации. Приветствие остаётся тёплым: отказ подаётся как услуга — «мы с радостью передадим».',
      uz: 'VIP moduli: shaxsiylashtirish mehmonga ko\'rinadi, atrofdagilarga esa ko\'rinmaydi, tafsilotlar hech qachon lobbida ovoz chiqarib muhokama qilinmaydi. Tashrif buyuruvchi mehmon haqida hech qanday ma\'lumot olmaydi — hatto u yashayotganini tasdiqlashni ham. Uning oldida xonaga qo\'ng\'iroq qilish yashashni ham, harakatlaringiz orqali qavatni ham tasdiqlaydi; «bizning VIP mehmonimiz» iborasi — maqomni ovoz chiqarib e\'lon qilish, ro\'yxatdagi bevosita xato; qavatni aytish — ma\'lumotni oshkor qilish. Kutib olish iliq qoladi: rad javobi xizmat sifatida beriladi — «mamnuniyat bilan yetkazamiz».',
      en: 'VIP module: personalisation is visible to the guest but invisible to everyone around, and details are never discussed aloud in the lobby. A visitor gets no information about a guest — not even confirmation that he is in house. Calling the room in front of her already confirms his stay and, through your actions, the floor; "our VIP guest" announces status aloud, a listed mistake; hinting at the floor discloses information. The greeting stays warm: the refusal is framed as a service — "we will gladly pass them on".',
    },
  },
  {
    id: 'final-mc-37',
    type: 'choice',
    moduleSlugs: ['whatsapp-communication', 'foreign-guests'],
    scenario: {
      ru: '11:15. На рабочий WhatsApp отеля с незнакомого номера приходит сообщение на турецком языке с логотипом Booking.com. Через переводчик вы понимаете: «оплата по брони гостя Йылмаза не прошла, оплатите по ссылке в течение 30 минут, иначе бронь будет отменена». Ссылка ведёт на сайт booking-secure-pay.xyz. Гость Йылмаз действительно заселился вчера по предоплаченной брони Booking.com. У стойки в это время очередь из трёх человек.',
      uz: '11:15. Mehmonxonaning ish WhatsApp\'iga notanish raqamdan Booking.com logotipi bilan turk tilida xabar keladi. Tarjimon orqali tushunasiz: «mehmon Yilmazning broni bo\'yicha to\'lov o\'tmadi, 30 daqiqa ichida havola orqali to\'lang, aks holda bron bekor qilinadi». Havola booking-secure-pay.xyz saytiga olib boradi. Mehmon Yilmaz haqiqatan kecha Booking.com orqali oldindan to\'langan bron bilan joylashgan. Shu paytda stoyka oldida uch kishilik navbat bor.',
      en: '11:15. A message in Turkish with a Booking.com logo arrives on the hotel\'s work WhatsApp from an unknown number. Through a translation app you understand: "the payment for guest Yilmaz\'s booking failed, pay via the link within 30 minutes or the booking will be cancelled". The link leads to booking-secure-pay.xyz. Guest Yilmaz did in fact check in yesterday on a prepaid Booking.com reservation. There is a queue of three at the desk.',
    },
    question: {
      ru: 'Как поступить правильно?',
      uz: 'Qanday yo\'l tutish to\'g\'ri?',
      en: 'What is the right thing to do?',
    },
    options: [
      {
        ru: 'Открыть ссылку, чтобы проверить, похожа ли страница на настоящую форму Booking.com, и, если она выглядит правдоподобно, переслать сообщение гостю Йылмазу — платить или нет, решать ему самому.',
        uz: 'Sahifa haqiqiy Booking.com shakliga o\'xshaydimi, tekshirish uchun havolani ochish va u ishonarli ko\'rinsa, xabarni mehmon Yilmazga yuborish — to\'lash yoki to\'lamaslikni o\'zi hal qilsin.',
        en: 'Open the link to check whether the page looks like a genuine Booking.com form and, if it looks plausible, forward the message to guest Yilmaz — whether to pay is his own decision.',
      },
      {
        ru: 'Не отвечать: сообщение на незнакомом языке с неизвестного номера, а у стойки очередь; если отправителю действительно что-то нужно, он напишет по-английски или позвонит, и тогда можно будет разобраться.',
        uz: 'Javob bermaslik: xabar notanish tilda, noma\'lum raqamdan, stoyka oldida esa navbat; agar jo\'natuvchiga haqiqatan nimadir kerak bo\'lsa, inglizcha yozadi yoki qo\'ng\'iroq qiladi, o\'shanda aniqlashtirish mumkin.',
        en: 'Do not reply: the message is in an unfamiliar language from an unknown number and there is a queue at the desk; if the sender really needs something, they will write in English or call, and it can be sorted out then.',
      },
      {
        ru: 'Переслать сообщение гостю Йылмазу в WhatsApp с припиской «это пришло по вашей брони», чтобы он сам разобрался со своей оплатой на Booking.com, и сразу вернуться к очереди у стойки.',
        uz: 'Xabarni mehmon Yilmazga WhatsApp orqali «bu sizning broningiz bo\'yicha keldi» degan izoh bilan yuborish, toki u Booking.com\'dagi to\'lovini o\'zi hal qilsin, va darhol stoykadagi navbatga qaytish.',
        en: 'Forward the message to guest Yilmaz on WhatsApp with the note "this came regarding your booking" so he can sort out his own Booking.com payment, and go straight back to the queue at the desk.',
      },
      {
        ru: 'Не открывать ссылку; проверить бронь в PMS и Extranet (оплата прошла), коротко ответить простым английским, что отель не проводит оплату по ссылкам, сообщить менеджеру и лично предупредить гостя Йылмаза о таком сообщении.',
        uz: 'Havolani ochmaslik; bronni PMS va Extranet\'da tekshirish (to\'lov o\'tgan), sodda inglizchada qisqa javob yozib, mehmonxona havola orqali to\'lov qabul qilmasligini aytish, menejerga xabar berish va mehmon Yilmazni bunday xabar haqida shaxsan ogohlantirish.',
        en: 'Do not open the link; check the booking in the PMS and the Extranet (payment went through), reply briefly in simple English that the hotel does not take payments via links, inform the manager and personally warn guest Yilmaz about such a message.',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Источник правды об оплате — Extranet и PMS, сверенные заранее, а не ссылка из сообщения. Стандарт WhatsApp: сообщение не остаётся без ответа — короткий ответ даётся сразу, а переводчик используется как инструмент понимания; незнакомый язык не повод игнорировать. Два дистрактора продвигают подозрительную ссылку к гостю, а «не отвечать» нарушает правило отклика и оставляет возможное мошенничество без внимания менеджера.',
      uz: 'To\'lov haqidagi haqiqat manbai — oldindan solishtirilgan Extranet va PMS, xabardagi havola emas. WhatsApp standarti: xabar javobsiz qolmaydi — qisqa javob darhol beriladi, tarjimon esa tushunish vositasi sifatida ishlatiladi; notanish til e\'tiborsiz qoldirish uchun sabab emas. Ikki chalg\'ituvchi shubhali havolani mehmonga yetkazadi, «javob bermaslik» esa javob berish qoidasini buzadi va ehtimoliy firibgarlikni menejer e\'tiboridan chetda qoldiradi.',
      en: 'The source of truth about payment is the Extranet and the PMS, matched in advance — not a link in a message. WhatsApp standard: a message is never left unanswered — a short reply goes out at once, and a translator is a tool for understanding; an unfamiliar language is no reason to ignore it. Two distractors push a suspicious link towards the guest, and "do not reply" breaks the response rule and keeps a possible fraud from the manager.',
    },
  },
  {
    id: 'final-mc-38',
    type: 'choice',
    moduleSlugs: ['check-in', 'booking-com-guests'],
    scenario: {
      ru: '14:30. Заселяется гость с ваучером Booking.com на телефоне: «Стандарт, завтрак включён, оплата в отеле». В PMS бронь импортирована как «Стандарт, без завтрака, предоплата». Гость настаивает на завтраке, за ним стоят ещё двое заезжающих. Паспорт он уже положил на стойку, и имя в нём написано иначе, чем в брони (Aleksandr / Alexander).',
      uz: '14:30. Telefonida Booking.com vaucheri bo\'lgan mehmon joylashmoqda: «Standart, nonushta kiritilgan, to\'lov mehmonxonada». PMS\'da bron «Standart, nonushtasiz, oldindan to\'langan» deb import qilingan. Mehmon nonushtani talab qilmoqda, orqasida yana ikki kelayotgan mehmon turibdi. U pasportini stoykaga qo\'ygan, undagi ism brondagidan boshqacha yozilgan (Aleksandr / Alexander).',
      en: '14:30. A guest is checking in with a Booking.com voucher on his phone: "Standard, breakfast included, pay at the property". In the PMS the booking was imported as "Standard, room only, prepaid". The guest insists on breakfast; two more arrivals are waiting behind him. He has already put his passport on the desk, and the name in it is spelled differently from the booking (Aleksandr / Alexander).',
    },
    question: {
      ru: 'Какой порядок действий верен?',
      uz: 'Qaysi harakatlar tartibi to\'g\'ri?',
      en: 'Which order of actions is correct?',
    },
    options: [
      {
        ru: 'Объяснить, что отель работает по данным PMS, а расхождение, видимо, ошибка Booking.com, дать гостю номер их поддержки и выдать ключ, чтобы не задерживать очередь; вопрос с завтраком решить после ответа платформы.',
        uz: 'Mehmonxona PMS ma\'lumotlari bo\'yicha ishlashini, farq esa, ehtimol, Booking.com xatosi ekanini tushuntirish, mehmonga ularning qo\'llab-quvvatlash raqamini berib, navbatni ushlab qolmaslik uchun kalitni berish; nonushta masalasini platforma javobidan keyin hal qilish.',
        en: 'Explain that the hotel goes by the PMS and the discrepancy is probably a Booking.com error, give him their support number and hand over the key so as not to hold up the queue; settle the breakfast question after the platform replies.',
      },
      {
        ru: 'Открыть бронь в Extranet вместе с гостем и сверить тариф с ваучером: если завтрак включён — исправить PMS и подтвердить его; расхождение в написании имени уточнить до выдачи ключа и провести стандартный инструктаж (завтрак, Wi-Fi, выезд).',
        uz: 'Bronni Extranet\'da mehmon bilan birga ochib, tarifni vaucher bilan solishtirish: nonushta kiritilgan bo\'lsa — PMS\'ni to\'g\'rilab, uni tasdiqlash; ism yozilishidagi farqni kalit berishdan oldin aniqlashtirish va standart yo\'riqnoma berish (nonushta, Wi-Fi, chiqish).',
        en: 'Open the booking in the Extranet with the guest and match the rate against the voucher: if breakfast is included, correct the PMS and confirm it; clarify the name spelling before handing over the key and give the standard briefing (breakfast, Wi-Fi, check-out).',
      },
      {
        ru: 'Чтобы не спорить при очереди, добавить завтрак в бронь как жест доброй воли, не сверяя Extranet, быстро выдать ключ и объяснить, что разницу в написании имени система «подтянет» автоматически.',
        uz: 'Navbat oldida bahslashmaslik uchun Extranet\'ni solishtirmasdan nonushtani bronga xayrixohlik belgisi sifatida qo\'shish, kalitni tez berish va ism yozilishidagi farqni tizim avtomatik «to\'g\'rilashini» tushuntirish.',
        en: 'To avoid arguing in front of the queue, add breakfast to the booking as a goodwill gesture without checking the Extranet, hand over the key quickly and explain that the system will "pick up" the name spelling automatically.',
      },
      {
        ru: 'Сказать, что Booking.com нередко показывает гостям не те условия, предложить добавить завтрак за доплату по тарифу отеля и выдать ключ, попросив гостя потом самостоятельно сверить всё с платформой.',
        uz: 'Booking.com mehmonlarga ko\'pincha noto\'g\'ri shartlarni ko\'rsatishini aytish, nonushtani mehmonxona tarifi bo\'yicha qo\'shimcha to\'lov bilan qo\'shishni taklif qilish va kalitni berib, mehmondan keyin hammasini platforma bilan o\'zi solishtirishni so\'rash.',
        en: 'Say that Booking.com often shows guests the wrong conditions, offer to add breakfast at the hotel\'s rate for a surcharge and hand over the key, asking the guest to check everything with the platform himself later.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Модуль Booking.com: первый шаг — спокойно сверить бронь в Extranet с PMS, не критикуя платформу и не отсылая гостя к ней. Модуль заселения: имя и данные документа должны совпадать с бронью, расхождение уточняется до выдачи ключа, а инструктаж о завтраке, Wi-Fi и выезде обязателен. «Жест доброй воли» без проверки пропускает и сверку, и сверку документа; два других варианта перекладывают проблему на платформу.',
      uz: 'Booking.com moduli: birinchi qadam — bronni Extranet\'da PMS bilan xotirjam solishtirish, platformani tanqid qilmasdan va mehmonni unga yubormasdan. Ro\'yxatdan o\'tkazish moduli: ism va hujjat ma\'lumotlari bronga mos kelishi kerak, farq kalit berishdan oldin aniqlashtiriladi, nonushta, Wi-Fi va chiqish haqida yo\'riqnoma esa majburiy. Tekshiruvsiz «xayrixohlik belgisi» ham solishtirishni, ham hujjat tekshiruvini o\'tkazib yuboradi; qolgan ikki variant muammoni platformaga ag\'daradi.',
      en: 'Booking.com module: the first step is to calmly match the Extranet booking against the PMS, without criticising the platform or sending the guest to it. Check-in module: the name and document details must match the booking, a discrepancy is clarified before the key is handed over, and the briefing on breakfast, Wi-Fi and check-out is mandatory. The "goodwill gesture" without checking skips both the rate match and the ID match; the other two options shift the problem onto the platform.',
    },
  },
  {
    id: 'final-mc-39',
    type: 'choice',
    moduleSlugs: ['check-out', 'complaints'],
    scenario: {
      ru: '08:50, очередь на выезд из четырёх человек. Гость из 311-го закрывает счёт: две ночи и ужин в ресторане. Его карта отклоняется дважды, терминал пишет «отказ банка»; гость заметно смущён, у подъезда его ждёт такси в аэропорт. Стоящие позади гости слышат каждое слово.',
      uz: '08:50, chiqish uchun to\'rt kishilik navbat. 311-xona mehmoni hisobini yopmoqda: ikki kecha va restorandagi kechki ovqat. Uning kartasi ikki marta rad etiladi, terminal «bank rad etdi» deb yozadi; mehmon sezilarli xijolatda, kiraverishda uni aeroportga taksi kutmoqda. Orqada turgan mehmonlar har bir so\'zni eshitadi.',
      en: '08:50, a check-out queue of four. The guest from 311 is settling his bill: two nights and dinner at the restaurant. His card is declined twice, the terminal shows "declined by bank"; the guest is visibly embarrassed and a taxi to the airport is waiting outside. The guests behind him can hear every word.',
    },
    question: {
      ru: 'Какая реакция соответствует стандарту?',
      uz: 'Qaysi javob standartga mos keladi?',
      en: 'Which response meets the standard?',
    },
    options: [
      {
        ru: 'Громко сообщить: «Карта не проходит, похоже, проблемы с вашим банком», попробовать карту в третий раз и, если снова отказ, попросить его позвонить в банк и подойти, когда вопрос решится, а пока обслужить очередь.',
        uz: 'Baland ovozda: «Karta o\'tmayapti, bankingizda muammo bor shekilli» deyish, kartani uchinchi marta urinib ko\'rish, yana rad etilsa, bankka qo\'ng\'iroq qilib, masala hal bo\'lganda kelishini so\'rash, hozircha navbatga xizmat ko\'rsatish.',
        en: 'Announce "The card is declined, looks like a problem with your bank", try the card a third time and, if declined again, ask him to call his bank and come back when it is sorted, serving the queue meanwhile.',
      },
      {
        ru: 'Чтобы он не опоздал на рейс, отпустить гостя, записав номер телефона и e-mail, и выслать ему счёт на оплату письмом уже после выезда — тогда остальным гостям не придётся ждать.',
        uz: 'Parvozga kechikmasligi uchun telefon raqami va e-mailini yozib olib, mehmonni qo\'yib yuborish va to\'lov hisobini chiqib ketganidan keyin xat bilan yuborish — shunda boshqa mehmonlar kutmaydi.',
        en: 'So that he does not miss his flight, let the guest go after noting his phone number and e-mail, and send him the bill for payment by e-mail after departure — then the other guests will not have to wait.',
      },
      {
        ru: 'Тихо и без намёка на вину гостя сказать, что такое бывает с терминалами и банками, ещё раз чётко назвать позиции счёта и предложить альтернативы — другую карту, наличные или перевод, — а затем поблагодарить и помочь с багажом и такси.',
        uz: 'Mehmonning aybiga ishora qilmasdan sekin, terminal va banklar bilan shunday bo\'lib turishini aytish, hisob bandlarini yana bir bor aniq sanab, muqobillarni taklif qilish — boshqa karta, naqd pul yoki o\'tkazma, — so\'ng rahmat aytib, yuk va taksi bilan yordam berish.',
        en: 'Quietly, with no hint of blame, say that this happens with terminals and banks, clearly name the bill items once more and offer alternatives — another card, cash or a transfer — then thank him and help with the luggage and the taxi.',
      },
      {
        ru: 'Извиниться, предложить гостю отойти в сторону и спокойно разобраться со своим банком, пока вы обслуживаете очередь, а когда карта заработает — вернуться к стойке и закрыть счёт.',
        uz: 'Uzr so\'rab, mehmonga chetga o\'tib, siz navbatga xizmat ko\'rsatayotganingizda banki bilan xotirjam aniqlashishni taklif qilish, karta ishlaganda esa stoykaga qaytib, hisobni yopish.',
        en: 'Apologise, suggest the guest step aside and calmly sort things out with his bank while you serve the queue, and once the card works, come back to the desk and close the bill.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Сценарий «проблема с оплатой» из модуля жалоб: никогда не намекать на вину гостя в финансовых вопросах и тихо предлагать альтернативы — другую карту, наличные, перевод. Модуль выезда: каждая позиция счёта называется вслух, затем помощь с багажом и такси. Самый сильный дистрактор — «отойдите и решите с банком» — вежлив, но пропускает сами альтернативы и оставляет гостя наедине с проблемой; счёт при наличии трёх способов оплаты не отпускают «вдогонку».',
      uz: 'Shikoyatlar modulidagi «to\'lov muammosi» ssenariysi: moliyaviy masalalarda hech qachon mehmonning aybiga ishora qilmaslik va muqobillarni sekin taklif qilish — boshqa karta, naqd pul, o\'tkazma. Chiqish moduli: hisobning har bir bandi ovoz chiqarib aytiladi, so\'ng yuk va taksi bilan yordam. Eng kuchli chalg\'ituvchi — «chetga o\'tib, bank bilan hal qiling» — muloyim, lekin muqobillarning o\'zini o\'tkazib yuboradi va mehmonni muammo bilan yolg\'iz qoldiradi; uchta to\'lov usuli bo\'lganda hisob «keyin» deb qo\'yib yuborilmaydi.',
      en: 'The payment-issue scenario in the complaints module: never imply the guest is at fault in financial matters, and offer alternatives quietly — another card, cash, a transfer. Check-out module: every bill item is named aloud, then help with luggage and the taxi. The strongest distractor, "step aside and sort it out with your bank", is polite but skips the alternatives themselves and leaves the guest alone with the problem; with three payment options at hand, the bill is not sent "after him".',
    },
  },
  {
    id: 'final-mc-40',
    type: 'choice',
    moduleSlugs: ['upselling-rooms', 'complaints'],
    scenario: {
      ru: '23:10. Гость из стандартного номера 215 спускается к стойке: над его номером гудит лифтовая машинная установка, уснуть невозможно, а завтра у него важная встреча. Все стандартные номера заняты; свободен только Deluxe этажом выше, доплата за него по прейскуранту — 30 долларов за ночь. Дежурный менеджер доступен по телефону.',
      uz: '23:10. 215-standart xona mehmoni stoykaga tushadi: xonasi tepasida lift mashina xonasi g\'uvillamoqda, uxlab bo\'lmaydi, ertaga esa muhim uchrashuvi bor. Barcha standart xonalar band; faqat bir qavat yuqoridagi Deluxe bo\'sh, narxnoma bo\'yicha unga qo\'shimcha to\'lov — kechasiga 30 dollar. Navbatchi menejer telefon orqali mavjud.',
      en: '23:10. The guest from Standard room 215 comes down to the desk: the lift machinery above his room is humming, sleep is impossible and he has an important meeting tomorrow. All Standard rooms are occupied; only a Deluxe one floor up is free, with a list-price surcharge of 30 dollars per night. The duty manager is reachable by phone.',
    },
    question: {
      ru: 'Как поступить правильно?',
      uz: 'Qanday yo\'l tutish to\'g\'ri?',
      en: 'What is the right course of action?',
    },
    options: [
      {
        ru: 'Извиниться, сразу предложить переехать в Deluxe сегодня же, вызвать коридорного помочь с вещами и, пока гость собирается, согласовать с дежурным менеджером, что доплата не взимается, — апселлинг во время жалобы неуместен.',
        uz: 'Uzr so\'rab, bugunoq Deluxe xonaga ko\'chishni darhol taklif qilish, narsalariga yordam uchun xizmatchini chaqirish va mehmon yig\'inayotganda navbatchi menejer bilan qo\'shimcha to\'lov olinmasligini kelishish — shikoyat paytida sotuvni oshirish o\'rinsiz.',
        en: 'Apologise, offer a move to the Deluxe tonight straight away, call a porter to help with his things and, while the guest packs, agree with the duty manager that the surcharge is waived — upselling during a complaint is out of place.',
      },
      {
        ru: 'Извиниться и предложить Deluxe как апгрейд: «Он тише и с видом на город, всего 30 долларов за ночь» — гость получает решение проблемы, а отель не теряет выручку от свободного номера.',
        uz: 'Uzr so\'rab, Deluxe\'ni yaxshilash sifatida taklif qilish: «U tinchroq va shahar manzarali, kechasiga atigi 30 dollar» — mehmon muammosiga yechim oladi, mehmonxona esa bo\'sh xonadan tushumni yo\'qotmaydi.',
        en: 'Apologise and offer the Deluxe as an upgrade: "It is quieter and has a city view, only 30 dollars per night" — the guest gets a solution and the hotel does not lose the revenue from a free room.',
      },
      {
        ru: 'Извиниться, сказать, что свободен только Deluxe, и в качестве жеста доброй воли самостоятельно снизить доплату до 15 долларов, не беспокоя дежурного менеджера в такое позднее время.',
        uz: 'Uzr so\'rab, faqat Deluxe bo\'sh ekanini aytish va xayrixohlik belgisi sifatida shunchalik kech paytda navbatchi menejerni bezovta qilmasdan qo\'shimcha to\'lovni o\'zingiz 15 dollargacha tushirish.',
        en: 'Apologise, say that only the Deluxe is free and, as a goodwill gesture, reduce the surcharge to 15 dollars on your own authority without disturbing the duty manager at such a late hour.',
      },
      {
        ru: 'Извиниться, отправить техника проверить источник шума и предложить беруши на ночь, а переезд в стандартный номер гарантировать завтра, как только кто-то из гостей выедет.',
        uz: 'Uzr so\'rab, shovqin manbasini tekshirish uchun texnikni yuborish va tunga quloq tiqinlarini taklif qilish, standart xonaga ko\'chishni esa ertaga, mehmonlardan biri chiqishi bilan kafolatlash.',
        en: 'Apologise, send a technician to check the source of the noise and offer earplugs for the night, and guarantee a move to a Standard room tomorrow as soon as another guest checks out.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Модуль жалоб: «нет» не бывает первым словом, решение показывают немедленно и зримо, а финансовое решение проводят через менеджера. Модуль апселлинга: предложение — это забота в правильный момент, а не способ взять деньги; обоснованная проблема гостя — не сигнал к продаже. Самый сильный дистрактор продаёт исправление ошибки отеля как апгрейд; скидка «от себя» — самовольное финансовое решение; беруши и «завтра» — обещание на потом вместо действия сейчас.',
      uz: 'Shikoyatlar moduli: «yo\'q» hech qachon birinchi so\'z bo\'lmaydi, yechim darhol va ko\'rinarli ko\'rsatiladi, moliyaviy qaror esa menejer orqali o\'tkaziladi. Sotuvni oshirish moduli: taklif — to\'g\'ri paytdagi g\'amxo\'rlik, pul olish usuli emas; mehmonning asosli muammosi sotuv signali emas. Eng kuchli chalg\'ituvchi mehmonxona xatosini tuzatishni yaxshilash sifatida sotadi; «o\'zidan» chegirma — o\'zboshimcha moliyaviy qaror; quloq tiqinlari va «ertaga» — hozirgi harakat o\'rniga keyinga va\'da.',
      en: 'Complaints module: "no" is never the first word, the solution is shown immediately and visibly, and the financial decision goes through the manager. Upselling module: an offer is care at the right moment, not a way to take money; a guest\'s legitimate problem is not a sales cue. The strongest distractor sells the fix for the hotel\'s own fault as an upgrade; a discount "on your own" is an unauthorised financial decision; earplugs and "tomorrow" are a promise for later instead of action now.',
    },
  },
  {
    id: 'final-mc-41',
    type: 'choice',
    moduleSlugs: ['greeting-guests', 'walk-in-guests'],
    scenario: {
      ru: '13:05. Вы одни на стойке: коллега на обеде. Вы говорите по телефону с гостем, подтверждающим бронь на следующую неделю, и как раз повторяете ему даты и тип номера. В этот момент в лобби входит пара с чемоданами без брони, подходит к стойке и выжидающе смотрит на вас.',
      uz: '13:05. Stoykada yolg\'izsiz: hamkasbingiz tushlikda. Kelasi haftaga bronni tasdiqlayotgan mehmon bilan telefonda gaplashyapsiz va aynan sanalar hamda xona turini unga qaytarib aytyapsiz. Shu paytda lobbiga bronsiz, chamadonli juftlik kirib, stoykaga yaqinlashadi va sizga kutib qaraydi.',
      en: '13:05. You are alone at the desk; your colleague is at lunch. You are on the phone with a guest confirming a booking for next week and are just repeating the dates and room type back to him. At that moment a couple with suitcases and no reservation walks in, comes up to the desk and looks at you expectantly.',
    },
    question: {
      ru: 'Как правильно действовать?',
      uz: 'Qanday harakat qilish to\'g\'ri?',
      en: 'What is the right way to act?',
    },
    options: [
      {
        ru: 'Не отвлекаться от звонка, чтобы не ошибиться в датах брони, довести разговор до конца со всеми подтверждениями и лишь затем поднять глаза, поприветствовать пару и представиться: несколько минут ожидания у стойки — это нормально.',
        uz: 'Bron sanalarida xato qilmaslik uchun qo\'ng\'iroqdan chalg\'imaslik, suhbatni barcha tasdiqlar bilan oxiriga yetkazish va faqat shundan keyin boshni ko\'tarib, juftlikni kutib olish va o\'zingizni tanishtirish: stoyka oldida bir necha daqiqa kutish — normal holat.',
        en: 'Do not break away from the call so as not to get the booking dates wrong, finish the conversation with all the confirmations and only then look up, greet the couple and introduce yourself: a few minutes of waiting at the desk is normal.',
      },
      {
        ru: 'Сразу взглядом, улыбкой и фразой «Я сейчас к вам подойду» показать паре, что её заметили; коротко подытожить и завершить звонок, поприветствовать пару, представиться, уточнить число ночей и гостей и предложить один-два варианта с ценой.',
        uz: 'Darhol nigoh, tabassum va «Hozir sizlarga xizmat qilaman» iborasi bilan juftlikka ularni ko\'rganingizni bildirish; qo\'ng\'iroqni qisqacha xulosalab yakunlash, juftlikni kutib olish, o\'zingizni tanishtirish, kechalar va mehmonlar sonini aniqlab, narxi bilan bir-ikki variant taklif qilish.',
        en: 'Show the couple at once, with a look, a smile and "I\'ll be right with you", that they have been noticed; briefly summarise and close the call, greet them, introduce yourself, clarify the number of nights and guests and offer one or two options with prices.',
      },
      {
        ru: 'Сказать звонящему «минуточку», отложить трубку, не объясняя, насколько это затянется, поприветствовать пару, подробно выяснить их пожелания, показать варианты с ценами, а звонок закончить, когда они определятся с номером.',
        uz: 'Qo\'ng\'iroq qiluvchiga «bir daqiqa» deb, qancha cho\'zilishini tushuntirmasdan trubkani qo\'yib turish, juftlikni kutib olish, xohishlarini batafsil aniqlab, narxlari bilan variantlarni ko\'rsatish, qo\'ng\'iroqni esa ular xonani tanlaganda tugatish.',
        en: 'Tell the caller "one moment", put the receiver down without saying how long it will take, greet the couple, find out their wishes in detail and show options with prices, and finish the call once they have settled on a room.',
      },
      {
        ru: 'Кивнуть паре, завершить звонок, поприветствовать их, представиться и, чтобы не терять времени, сразу назвать цену самого дешёвого свободного номера; число ночей и гостей уточнить уже при оформлении регистрационной карты.',
        uz: 'Juftlikka bosh irg\'ab, qo\'ng\'iroqni tugatish, ularni kutib olish, o\'zingizni tanishtirish va vaqt yo\'qotmaslik uchun darhol eng arzon bo\'sh xona narxini aytish; kechalar va mehmonlar sonini ro\'yxatga olish kartasini to\'ldirishda aniqlashtirish.',
        en: 'Nod to the couple, finish the call, greet them, introduce yourself and, to save time, immediately quote the price of the cheapest available room; clarify the number of nights and guests while filling in the registration card.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Модуль приветствия: гостя замечают в первые 10 секунд, даже если вы заняты, — достаточно взгляда и «я сейчас подойду». Телефонный стандарт: звонящего не бросают на удержании без объяснений, разговор завершают подведением итога. Модуль walk-in: сначала число ночей и гостей, затем один-два варианта с ценой; называть только самую дешёвую цену — ошибка из списка. Самый сильный дистрактор пропускает именно уточняющие вопросы.',
      uz: 'Kutib olish moduli: mehmon dastlabki 10 soniyada payqaladi, band bo\'lsangiz ham — nigoh va «hozir xizmat qilaman» yetarli. Telefon standarti: qo\'ng\'iroq qiluvchi tushuntirishsiz kutishda tashlab qo\'yilmaydi, suhbat xulosa bilan yakunlanadi. Walk-in moduli: avval kechalar va mehmonlar soni, keyin narxi bilan bir-ikki variant; faqat eng arzon narxni aytish — ro\'yxatdagi xato. Eng kuchli chalg\'ituvchi aynan aniqlashtiruvchi savollarni o\'tkazib yuboradi.',
      en: 'Greeting module: a guest is acknowledged within the first 10 seconds even when you are busy — a look and "I\'ll be right with you" is enough. Phone standard: a caller is not left on hold without explanation, and the call ends with a summary. Walk-in module: nights and guests first, then one or two options with prices; quoting only the cheapest price is a listed mistake. The strongest distractor skips exactly those clarifying questions.',
    },
  },
  {
    id: 'final-mc-42',
    type: 'choice',
    moduleSlugs: ['emergency-procedures', 'foreign-guests'],
    scenario: {
      ru: '23:30. Вы одни на стойке, охранник на обходе и доступен по рации. К стойке подбегает иностранный гость, по-английски почти не говорит, показывает на потолок и повторяет: «Wife… room 512… no breathe… please!» Лицо у него испуганное; в лобби никого нет.',
      uz: '23:30. Stoykada yolg\'izsiz, qo\'riqchi aylanib yuribdi va ratsiya orqali bog\'lanish mumkin. Stoykaga xorijiy mehmon yugurib keladi, inglizchani deyarli bilmaydi, shiftga ishora qilib takrorlaydi: «Wife… room 512… no breathe… please!» Yuzi qo\'rquvda; lobbida hech kim yo\'q.',
      en: '23:30. You are alone at the desk; the security guard is on his rounds and reachable by radio. A foreign guest runs up to the desk, speaking almost no English, points at the ceiling and repeats: "Wife… room 512… no breathe… please!" He looks terrified; the lobby is empty.',
    },
    question: {
      ru: 'Какая последовательность действий верна?',
      uz: 'Qaysi harakatlar ketma-ketligi to\'g\'ri?',
      en: 'Which sequence of actions is correct?',
    },
    options: [
      {
        ru: 'Открыть переводчик и за минуту точно выяснить, что произошло, какие у жены симптомы и когда они начались, чтобы не вызвать скорую напрасно, а затем уже звонить в службу спасения и по рации охраннику.',
        uz: 'Tarjimonni ochib, tez yordamni bekorga chaqirmaslik uchun bir daqiqada nima bo\'lganini, ayolida qanday belgilar borligini va qachon boshlanganini aniq bilib olish, shundan keyingina qutqaruv xizmatiga qo\'ng\'iroq qilish va ratsiya orqali qo\'riqchini chaqirish.',
        en: 'Open the translation app and take a minute to establish exactly what happened, what symptoms his wife has and when they started, so as not to call an ambulance for nothing, and only then call emergency services and the guard by radio.',
      },
      {
        ru: 'Схватить аптечку и бежать с гостем в 512-й: минуты решают; скорую вызвать уже из номера, когда своими глазами оцените состояние и будете точно знать, что сообщить, а стойка несколько минут подождёт — лобби всё равно пустое.',
        uz: 'Aptechkani olib, mehmon bilan 512-xonaga yugurish: daqiqalar hal qiladi; tez yordamni ahvolni o\'z ko\'zingiz bilan baholab, nima deyishni aniq bilgach, xonadan chaqirish, stoyka esa bir necha daqiqa kutib turadi — lobbi baribir bo\'sh, hech kim kelmaydi.',
        en: 'Grab the first-aid kit and run to 512 with the guest — minutes count; call the ambulance from the room once you have seen her condition and know exactly what to report, and the desk can wait a few minutes since the lobby is empty anyway.',
      },
      {
        ru: 'Немедленно вызвать скорую, назвав адрес и номер комнаты, попросить гостя подняться к жене и ждать там, а самому остаться на стойке, чтобы встретить медиков и показать дорогу, и по рации попросить охранника подойти в лобби проводить их наверх.',
        uz: 'Darhol manzil va xona raqamini aytib tez yordam chaqirish, mehmondan ayolining oldiga chiqib, u yerda kutishni so\'rash, o\'zingiz esa tibbiyot xodimlarini kutib olib, yo\'l ko\'rsatish uchun stoykada qolish va ratsiya orqali qo\'riqchidan lobbiga kelib, ularni yuqoriga kuzatishni so\'rash.',
        en: 'Call an ambulance immediately with the address and room number, ask the guest to go back up to his wife and wait there, stay at the desk yourself to meet the paramedics and show them the way, and ask the guard by radio to come to the lobby to escort them upstairs.',
      },
      {
        ru: 'Немедленно вызвать скорую (адрес, этаж, номер 512), по рации передать стойку охраннику по плану покрытия, взять аптечку и подняться с гостем; простыми словами и через переводчик выяснить аллергии и хронические болезни для медиков и оставаться с пострадавшей до их приезда.',
        uz: 'Darhol tez yordam chaqirish (manzil, qavat, 512-xona), ratsiya orqali stoykani qoplash rejasi bo\'yicha qo\'riqchiga topshirish, aptechkani olib, mehmon bilan chiqish; sodda so\'zlar va tarjimon orqali tibbiyot xodimlari uchun allergiya va surunkali kasalliklarni aniqlash va ular kelguncha jabrlanuvchi bilan qolish.',
        en: 'Call an ambulance immediately (address, floor, room 512), radio the guard to take the desk per the coverage plan, take the first-aid kit and go up with the guest; in simple words and via a translator find out allergies and chronic conditions for the paramedics and stay with the patient until they arrive.',
      },
    ],
    correctIndex: 3,
    explanation: {
      ru: 'Модуль ЧС: при медицинском случае сначала скорая, затем аптечка и присутствие рядом с пострадавшим до приезда медиков, а стойка передаётся по плану покрытия — не бросается и не становится поводом оставить человека без помощи. Модуль иностранных гостей: простые слова и переводчик как инструмент, чтобы собрать сведения об аллергиях для медиков. Самый сильный дистрактор сохраняет стойку, но оставляет пострадавшую без сотрудника и аптечки; выяснять подробности до звонка — терять минуты; бежать без вызова — терять и минуты, и стойку.',
      uz: 'Favqulodda holatlar moduli: tibbiy holatda avval tez yordam, keyin aptechka va tibbiyot xodimlari kelguncha jabrlanuvchi yonida bo\'lish, stoyka esa qoplash rejasi bo\'yicha topshiriladi — tashlab ketilmaydi va odamni yordamsiz qoldirish uchun bahona bo\'lmaydi. Xorijiy mehmonlar moduli: tibbiyot xodimlari uchun allergiya haqida ma\'lumot yig\'ishda sodda so\'zlar va vosita sifatida tarjimon. Eng kuchli chalg\'ituvchi stoykani saqlaydi, lekin jabrlanuvchini xodim va aptechkasiz qoldiradi; qo\'ng\'iroqdan oldin tafsilotlarni aniqlash — daqiqalarni yo\'qotish; chaqiruvsiz yugurish — ham daqiqalarni, ham stoykani yo\'qotish.',
      en: 'Emergency module: in a medical case the ambulance comes first, then the first-aid kit and staying with the patient until the medics arrive, while the desk is handed over per the coverage plan — neither abandoned nor used as a reason to leave a person without help. Foreign-guests module: simple words and a translator as a tool to collect allergy information for the paramedics. The strongest distractor keeps the desk but leaves the patient without a staff member or first-aid kit; finding out details before the call loses minutes; running without calling loses both the minutes and the desk.',
    },
  },
  {
    id: 'final-mc-43',
    type: 'choice',
    moduleSlugs: ['lost-items', 'booking-com-guests'],
    scenario: {
      ru: '15:30. Гость, только что заселившийся в 309-й, приносит на стойку золотые часы: нашёл их в ящике тумбочки. Предыдущий гость этого номера выехал в 11:00 и бронировал через Booking.com; в PMS из контактов — только служебный адрес платформы вида «…@guest.booking.com», телефона нет. У стойки ждут трое заезжающих.',
      uz: '15:30. 309-xonaga endigina joylashgan mehmon stoykaga tilla soat olib keladi: uni tumbochka tortmasidan topgan. Bu xonaning oldingi mehmoni 11:00 da chiqib ketgan va Booking.com orqali bron qilgan; PMS\'dagi kontaktlardan faqat platformaning «…@guest.booking.com» ko\'rinishidagi xizmat manzili bor, telefon yo\'q. Stoyka oldida uch kelayotgan mehmon kutmoqda.',
      en: '15:30. A guest who has just checked into 309 brings a gold watch to the desk: he found it in the bedside drawer. The previous guest of that room checked out at 11:00 and had booked through Booking.com; the only contact in the PMS is the platform\'s relay address of the form "…@guest.booking.com", no phone number. Three arrivals are waiting at the desk.',
    },
    question: {
      ru: 'Какая последовательность действий верна?',
      uz: 'Qaysi harakatlar ketma-ketligi to\'g\'ri?',
      en: 'Which sequence of actions is correct?',
    },
    options: [
      {
        ru: 'Поблагодарить гостя и попросить его пока подержать часы в сейфе своего номера, чтобы не терять время при очереди, а запись в журнале и поиск владельца сделать после заселения всех прибывших.',
        uz: 'Mehmonga rahmat aytib, navbat paytida vaqt yo\'qotmaslik uchun soatni hozircha o\'z xonasining seyfida saqlab turishni so\'rash, jurnalga yozuv va egasini qidirishni esa barcha kelganlar joylashgandan keyin qilish.',
        en: 'Thank the guest and ask him to keep the watch in his own room safe for now so as not to lose time with the queue, and do the register entry and the search for the owner once all the arrivals are checked in.',
      },
      {
        ru: 'Сразу внести часы в журнал находок со всеми деталями, убрать в сейф ресепшен и ждать: владелец дорогой вещи наверняка хватится и свяжется сам — тогда и договориться о получении.',
        uz: 'Soatni darhol barcha tafsilotlari bilan topilmalar jurnaliga kiritish, resepshen seyfiga qo\'yish va kutish: qimmat buyumning egasi albatta payqab, o\'zi bog\'lanadi — o\'shanda olish haqida kelishish.',
        en: 'Log the watch in the register with all the details at once, lock it in the reception safe and wait: the owner of a valuable item is sure to notice and get in touch himself — then arrange the collection.',
      },
      {
        ru: 'Сразу внести часы в журнал находок (описание, место, время, кто нашёл, номер), убрать в сейф, затем первым связаться с выехавшим гостем через адрес платформы и сообщения в Extranet и предложить отправку курьером за его счёт, назвав стоимость и сроки.',
        uz: 'Soatni darhol topilmalar jurnaliga kiritish (tavsif, joy, vaqt, kim topgan, xona), seyfga qo\'yish, so\'ng chiqib ketgan mehmon bilan platforma manzili va Extranet orqali birinchi bo\'lib bog\'lanib, narxi va muddatini aytib, uning hisobidan kuryer orqali yuborishni taklif qilish.',
        en: 'Log the watch in the register at once (description, place, time, who found it, room), lock it in the safe, then be the first to contact the departed guest via the platform address and Extranet messaging and offer courier delivery at his expense, stating the cost and timing.',
      },
      {
        ru: 'Не откладывая, написать выехавшему гостю через Extranet, что часы найдены, и бесплатно отправить их курьером по адресу из брони в качестве извинения за недосмотр горничной, а запись в журнале сделать уже после отправки.',
        uz: 'Kechiktirmasdan, chiqib ketgan mehmonga Extranet orqali soat topilganini yozish va xizmatchining e\'tiborsizligi uchun uzr sifatida uni brondagi manzilga mehmonxona hisobidan bepul kuryer orqali yuborish, jurnalga yozuvni esa yuborilgandan keyin, tinchroq paytda qilish.',
        en: 'Without delay, message the departed guest via the Extranet that the watch has been found and send it free of charge by courier to the address in the booking as an apology for housekeeping\'s oversight, making the register entry after dispatch.',
      },
    ],
    correctIndex: 2,
    explanation: {
      ru: 'Модуль находок: вещь регистрируется сразу, даже если вы заняты, — отложенная запись часто не делается вовсе; о ценной находке отель связывается с гостем первым по контактам из брони (для брони Booking.com это адрес платформы и сообщения в Extranet); доставку предлагают за счёт гостя, заранее назвав стоимость и сроки. Самый сильный дистрактор регистрирует вещь, но ждёт звонка владельца — ошибка из списка; «бесплатно и без записи» пропускает регистрацию и выдумывает условия доставки.',
      uz: 'Topilmalar moduli: buyum band bo\'lsangiz ham darhol ro\'yxatga olinadi — kechiktirilgan yozuv ko\'pincha umuman qilinmaydi; qimmatli topilma haqida mehmonxona brondagi kontaktlar orqali mehmon bilan birinchi bo\'lib bog\'lanadi (Booking.com broni uchun bu platforma manzili va Extranet xabarlari); yetkazib berish narxi va muddatini oldindan aytib, mehmon hisobidan taklif qilinadi. Eng kuchli chalg\'ituvchi buyumni ro\'yxatga oladi, lekin egasining qo\'ng\'irog\'ini kutadi — ro\'yxatdagi xato; «bepul va yozuvsiz» ro\'yxatga olishni o\'tkazib yuboradi va yetkazish shartlarini o\'ylab topadi.',
      en: 'Lost-items module: an item is logged immediately even when you are busy — a delayed entry often never happens; for a valuable find the hotel contacts the guest first via the booking contacts (for a Booking.com reservation that is the platform address and Extranet messaging); delivery is offered at the guest\'s expense with cost and timing stated upfront. The strongest distractor logs the item but waits for the owner to call — a listed mistake; "free and unlogged" skips the register and invents delivery terms.',
    },
  },
  {
    id: 'final-mc-44',
    type: 'choice',
    moduleSlugs: ['upselling-rooms', 'phone-communication'],
    scenario: {
      ru: 'Звонок в 12:10: женщина хочет забронировать две ночи на выходные для семьи — двое взрослых и дети 6 и 9 лет — и сразу спрашивает «самый дешёвый вариант». В системе свободны стандарт (две кровати, детям можно поставить одну раскладушку, 350 000 сум) и семейный номер с отдельной детской зоной (450 000 сум). Линия шумит, звонящая явно спешит.',
      uz: '12:10 dagi qo\'ng\'iroq: ayol dam olish kunlariga oila uchun ikki kecha bron qilmoqchi — ikki kattalar va 6 hamda 9 yoshli bolalar — va darhol «eng arzon variantni» so\'raydi. Tizimda standart xona (ikki karavot, bolalar uchun bitta qo\'shimcha yig\'ma karavot qo\'yish mumkin, 350 000 so\'m) va alohida bolalar zonasi bor oilaviy xona (450 000 so\'m) bo\'sh. Aloqa shovqinli, qo\'ng\'iroq qiluvchi aniq shoshilmoqda.',
      en: 'A call at 12:10: a woman wants to book two weekend nights for her family — two adults and children aged 6 and 9 — and immediately asks for "the cheapest option". The system shows a Standard (two beds, one folding bed can be added for the children, 350,000 sum) and a Family room with a separate children\'s area (450,000 sum). The line is noisy and the caller is clearly in a hurry.',
    },
    question: {
      ru: 'Какой ответ соответствует стандартам обоих модулей?',
      uz: 'Qaysi javob ikkala modul standartlariga mos keladi?',
      en: 'Which answer meets the standards of both modules?',
    },
    options: [
      {
        ru: 'Повторить детали (даты, двое взрослых и двое детей), назвать стандарт за 350 000 и как совет добавить: «Для двоих детей удобнее семейный — отдельная детская зона, разница 100 000 за ночь», дать выбрать и не повторять при отказе; подытожить и дать ей положить трубку первой.',
        uz: 'Tafsilotlarni qaytarib aytish (sanalar, ikki kattalar va ikki bola), 350 000 ga standartni aytish va maslahat sifatida qo\'shish: «Ikki bola uchun oilaviy xona qulayroq — alohida bolalar zonasi, farqi kechasiga 100 000», tanlovni unga qoldirish va rad etsa takrorlamaslik; xulosalab, trubkani birinchi bo\'lib qo\'yishiga imkon berish.',
        en: 'Repeat the details (dates, two adults and two children), quote the Standard at 350,000 and add as advice: "For two children the Family room is more comfortable — a separate children\'s area, 100,000 more per night", let her choose and do not repeat if she declines; summarise and let her hang up first.',
      },
      {
        ru: 'Повторить детали и, раз она просит самое дешёвое, предложить только стандарт за 350 000 с раскладушкой, подытожить бронь, а о семейном номере рассказать уже на заезде, когда семья увидит стандарт вживую и сама решит, нужен ли ей номер побольше.',
        uz: 'Tafsilotlarni qaytarib aytish va u eng arzonini so\'ragani uchun faqat yig\'ma karavotli standartni 350 000 ga taklif qilish, bronni xulosalash, oilaviy xona haqida esa kelganda, oila standartni o\'z ko\'zi bilan ko\'rib, kattaroq xona kerakmi, o\'zi hal qilganda aytish.',
        en: 'Repeat the details and, since she asks for the cheapest, offer only the Standard at 350,000 with the folding bed, summarise the booking, and mention the Family room at check-in, when the family sees the Standard for themselves and decides whether they need a bigger room.',
      },
      {
        ru: 'Повторить детали и, чтобы она сразу увидела все возможности, предложить семейный номер, завтрак для детей, трансфер из аэропорта и поздний выезд одним пакетом, назвать общую сумму за два дня и спросить, что из этого оформить.',
        uz: 'Tafsilotlarni qaytarib aytish va u barcha imkoniyatlarni darhol ko\'rishi uchun oilaviy xona, bolalar uchun nonushta, aeroportdan transfer va kech chiqishni bitta paket qilib taklif qilish, ikki kun uchun umumiy summani aytib, qaysi birini rasmiylashtirishni so\'rash.',
        en: 'Repeat the details and, so that she sees all the possibilities at once, offer the Family room, breakfast for the children, an airport transfer and a late check-out as one package, quote the total for the two days and ask which of these to book.',
      },
      {
        ru: 'Повторить детали и объяснить, что стандарт для четверых слишком тесный и шумный, он у лифта, поэтому семье нужен именно семейный номер за 450 000; сразу перейти к оформлению брони на него, подытожить и попрощаться.',
        uz: 'Tafsilotlarni qaytarib aytish va standart xona to\'rt kishiga juda tor va shovqinli, lift yonida ekanini, shuning uchun oilaga aynan 450 000 lik oilaviy xona kerakligini tushuntirish; darhol unga bron rasmiylashtirishga o\'tish, xulosalab xayrlashish.',
        en: 'Repeat the details and explain that the Standard is too cramped and noisy for four and is next to the lift, so the family needs the Family room at 450,000; move straight on to booking it, summarise and say goodbye.',
      },
    ],
    correctIndex: 0,
    explanation: {
      ru: 'Модуль апселлинга: одна самая уместная опция, конкретные цена, разница и выгода, тон совета, уважение к отказу — и ни принижения забронированного варианта, ни «пакета» из нескольких допродаж. Телефонный стандарт: повторить детали, подвести итог и дать звонящему положить трубку первым. Самый сильный дистрактор скрывает релевантный вариант до заезда — тогда предложение теряет смысл и выглядит как давление; «стандарт тесный и шумный» — дословно плохой пример из модуля.',
      uz: 'Sotuvni oshirish moduli: bitta eng o\'rinli variant, aniq narx, farq va foyda, maslahat ohangi, rad etishga hurmat — bron qilingan variantni kamsitish ham, bir nechta qo\'shimcha sotuvdan «paket» ham yo\'q. Telefon standarti: tafsilotlarni qaytarish, xulosa qilish va qo\'ng\'iroq qiluvchi trubkani birinchi bo\'lib qo\'yishiga imkon berish. Eng kuchli chalg\'ituvchi mos variantni kelguncha yashiradi — o\'shanda taklif ma\'nosini yo\'qotib, bosimdek ko\'rinadi; «standart tor va shovqinli» — moduldagi yomon misolning o\'zi.',
      en: 'Upselling module: one most relevant option, a specific price, difference and benefit, the tone of advice, respect for a refusal — and neither talking down the booked option nor a "package" of several add-ons. Phone standard: repeat the details, summarise and let the caller hang up first. The strongest distractor hides the relevant option until arrival, when the offer loses its point and looks like pressure; "the Standard is cramped and noisy" is the module\'s bad example word for word.',
    },
  },
  {
    id: 'final-mc-45',
    type: 'choice',
    moduleSlugs: ['booking-com-guests', 'check-out'],
    scenario: {
      ru: '10:20, выезд. Гость, бронировавший через Booking.com, увидел на сайте отеля цену на 10% ниже той, что заплатил, и говорит: «Либо вы делаете мне скидку, либо я ставлю вам тройку на Booking». Его счёт: две ночи по предоплате и минибар. У стойки рядом стоят другие выезжающие гости.',
      uz: '10:20, chiqish. Booking.com orqali bron qilgan mehmon mehmonxona saytida o\'zi to\'laganidan 10% past narxni ko\'rib: «Yo menga chegirma qilasiz, yo Booking\'da sizga uch qo\'yaman» deydi. Uning hisobi: oldindan to\'langan ikki kecha va minibar. Stoyka yonida boshqa chiqayotgan mehmonlar turibdi.',
      en: '10:20, check-out. A guest who booked through Booking.com has seen a price on the hotel\'s website 10% lower than what he paid and says: "Either you give me a discount, or I give you a three on Booking." His bill: two prepaid nights and the minibar. Other departing guests are standing nearby at the desk.',
    },
    question: {
      ru: 'Какой ответ правильный?',
      uz: 'Qaysi javob to\'g\'ri?',
      en: 'Which answer is correct?',
    },
    options: [
      {
        ru: 'Извиниться, объяснить, что скидку на уже оплаченную бронь дать не можете, и предложить бесплатный завтрак при следующем визите в обмен на оценку не ниже девяти — так отель сохранит рейтинг, а гость уедет довольным.',
        uz: 'Uzr so\'rab, allaqachon to\'langan bronga chegirma bera olmasligingizni tushuntirish va to\'qqizdan past bo\'lmagan baho evaziga keyingi tashrifda bepul nonushta taklif qilish — shunda mehmonxona reytingini saqlaydi, mehmon esa mamnun ketadi.',
        en: 'Apologise, explain that you cannot discount a booking that has already been paid, and offer a free breakfast on his next stay in exchange for a score of at least nine — that way the hotel protects its rating and the guest leaves happy.',
      },
      {
        ru: 'Спокойно и негромко объяснить, что цена зависит от условий тарифа (невозвратный, дата бронирования), показать условия его брони, не критикуя платформу; озвучить позиции счёта, пригласить оставить честный отзыв и сообщить менеджеру о претензии.',
        uz: 'Xotirjam va past ovozda narx tarif shartlariga (qaytarilmaydigan, bron sanasi) bog\'liqligini tushuntirish, platformani tanqid qilmasdan bron shartlarini ko\'rsatish; hisob bandlarini aytish, halol sharh qoldirishga taklif qilish va e\'tiroz haqida menejerga xabar berish.',
        en: 'Calmly and quietly explain that the price depends on the rate conditions (non-refundable, booking date), show him his booking conditions without criticising the platform; name the bill items, invite an honest review and inform the manager of the complaint.',
      },
      {
        ru: 'Согласиться, что через Booking.com всегда дороже из-за их комиссии, посоветовать в следующий раз бронировать напрямую через сайт, чтобы не переплачивать, озвучить позиции счёта и закрыть его со стандартным напоминанием об отзыве.',
        uz: 'Booking.com orqali ularning komissiyasi tufayli doim qimmatroq ekaniga rozi bo\'lish, ortiqcha to\'lamaslik uchun keyingi safar sayt orqali to\'g\'ridan-to\'g\'ri bron qilishni maslahat berish, hisob bandlarini aytib, sharh haqidagi standart eslatma bilan yopish.',
        en: 'Agree that Booking.com is always more expensive because of its commission, advise him to book directly through the website next time so he does not overpay, name the bill items and close with the standard reminder about a review.',
      },
      {
        ru: 'Сказать, что ценообразование — не компетенция ресепшен, а отзывы на оценку отеля почти не влияют, озвучить позиции счёта, закрыть его и попрощаться, не возвращаясь к теме отзыва и не беспокоя менеджера.',
        uz: 'Narx belgilash resepshen vakolatida emasligini, sharhlar esa mehmonxona bahosiga deyarli ta\'sir qilmasligini aytish, hisob bandlarini aytib yopish va sharh mavzusiga qaytmasdan hamda menejerni bezovta qilmasdan xayrlashish.',
        en: 'Say that pricing is not reception\'s remit and reviews hardly affect the hotel\'s rating anyway, name the bill items, close the bill and say goodbye without returning to the subject of the review or bothering the manager.',
      },
    ],
    correctIndex: 1,
    explanation: {
      ru: 'Модуль Booking.com: разницу в цене объясняют через условия тарифа спокойно и без критики платформы, а отзыв приглашают честный — не торгуются за оценку. Модуль выезда: позиции счёта озвучиваются, прощание тёплое. Финансовые решения — через менеджера, а не покупка балла на стойке. Самый сильный дистрактор критикует платформу (прямой запрет модуля); «не моя компетенция» — ошибка из модуля жалоб; обмен завтрака на «девятку» — давление ради оценки.',
      uz: 'Booking.com moduli: narx farqi tarif shartlari orqali xotirjam va platformani tanqid qilmasdan tushuntiriladi, sharh esa halol bo\'lishga taklif qilinadi — baho uchun savdolashilmaydi. Chiqish moduli: hisob bandlari aytiladi, xayrlashuv iliq bo\'ladi. Moliyaviy qarorlar — menejer orqali, stoykada ball sotib olish emas. Eng kuchli chalg\'ituvchi platformani tanqid qiladi (modulning bevosita taqiqi); «mening vakolatim emas» — shikoyatlar modulidagi xato; nonushtani «to\'qqiz»ga almashtirish — baho uchun bosim.',
      en: 'Booking.com module: a price difference is explained through the rate conditions, calmly and without criticising the platform, and the review invited is an honest one — no bargaining for a score. Check-out module: the bill items are named and the farewell is warm. Financial decisions go through the manager rather than buying a point at the desk. The strongest distractor criticises the platform (an explicit ban in the module); "not my remit" is a mistake from the complaints module; trading breakfast for a nine is pressure for a score.',
    },
  },
]
