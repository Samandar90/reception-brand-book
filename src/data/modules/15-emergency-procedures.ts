import type { Module } from '@/types'

const emergencyProcedures: Module = {
  slug: 'emergency-procedures',
  order: 15,
  icon: 'Siren',
  title: { ru: 'Действия в чрезвычайных ситуациях', uz: 'Favqulodda vaziyatlarda harakatlar', en: 'Emergency Procedures' },
  description: {
    ru: 'В чрезвычайной ситуации от администратора стойки регистрации зависит безопасность гостей. Изучите чёткие протоколы действий при пожаре, медицинской и охранной тревоге.',
    uz: 'Favqulodda vaziyatda qabul bo\'limi xodimidan mehmonlar xavfsizligi bog\'liq bo\'ladi. Yong\'in, tibbiy va xavfsizlik ogohlantirishlarida aniq harakat protokollarini o\'rganing.',
    en: 'In an emergency, guest safety depends on the front desk agent. Learn clear response protocols for fire, medical, and security alerts.',
  },
  readingTimeMin: 8,
  difficulty: 'advanced',
  sections: [
    {
      id: 'overview',
      heading: { ru: 'Спокойствие спасает жизни', uz: 'Xotirjamlik hayotni saqlaydi', en: 'Calm saves lives' },
      body: {
        ru: 'В чрезвычайной ситуации гости ориентируются на реакцию персонала стойки регистрации: если вы паникуете, паникуют и они. При пожарной тревоге ваша задача — спокойно и уверенно направлять гостей к ближайшему эвакуационному выходу, никогда не пользуясь лифтом. При медицинской ситуации немедленно вызывайте скорую помощь, приносите аптечку первой помощи и оставайтесь с гостем до прибытия медиков. При инциденте безопасности сохраняйте спокойствие, следуйте протоколу вызова охраны или полиции и не вступайте в физическую конфронтацию. Стойка регистрации никогда не должна оставаться без сотрудника во время эвакуации — всегда действуйте по установленному плану смены дежурного.',
        uz: 'Favqulodda vaziyatda mehmonlar qabul xodimining reaksiyasiga qarab yo\'l tutishadi: agar siz vahima qilsangiz, ular ham vahimaga tushadi. Yong\'in signali chalinganda vazifangiz — mehmonlarni xotirjam va ishonch bilan eng yaqin evakuatsiya chiqishiga yo\'naltirish, hech qachon liftdan foydalanmaslik. Tibbiy vaziyatda darhol tez yordam chaqiring, birinchi yordam qutisini olib keling va shifokorlar yetib kelguncha mehmon yonida qoling. Xavfsizlik hodisasida xotirjamlikni saqlang, xavfsizlik xizmati yoki politsiyani chaqirish protokoliga amal qiling va jismoniy to\'qnashuvga kirishmang. Evakuatsiya paytida qabul bo\'limi hech qachon xodimsiz qolmasligi kerak — har doim smena almashtirish uchun belgilangan rejaga amal qiling.',
        en: 'In an emergency, guests take their cue from how the front desk reacts: if you panic, they panic too. During a fire alarm, your job is to calmly and confidently direct guests to the nearest evacuation route, never using the elevator. In a medical situation, call an ambulance immediately, bring the first-aid kit, and stay with the guest until medics arrive. During a security incident, stay calm, follow the protocol for calling security or police, and never engage in physical confrontation. The front desk must never be left unstaffed during an evacuation — always follow the established coverage plan for handing off the desk.',
      },
      callouts: [
        {
          type: 'tip',
          title: { ru: 'Знайте план заранее', uz: 'Rejani oldindan biling', en: 'Know the plan in advance' },
          body: {
            ru: 'Изучите расположение всех эвакуационных выходов, аптечки первой помощи и телефоны экстренных служб до того, как случится чрезвычайная ситуация, а не во время неё.',
            uz: 'Barcha evakuatsiya chiqishlari, birinchi yordam qutisi joylashuvi va favqulodda xizmatlar telefonlarini favqulodda vaziyat sodir bo\'lishidan oldin, uning davomida emas, o\'rganib qo\'ying.',
            en: 'Learn the location of every evacuation route, the first-aid kit, and emergency service phone numbers before an emergency happens, not during one.',
          },
        },
      ],
    },
    {
      id: 'dialogue',
      heading: { ru: 'Примеры диалогов', uz: 'Muloqot namunalari', en: 'Example dialogues' },
      body: {
        ru: 'Сравните уверенное руководство эвакуацией с растерянностью.',
        uz: 'Ishonchli evakuatsiya boshqaruvini sarosimadan farqlang.',
        en: 'Compare confident evacuation guidance with confusion.',
      },
      dialogues: [
        {
          type: 'good',
          lines: [
            {
              speaker: 'guest',
              text: { ru: 'Сработала пожарная сигнализация, что нам делать?', uz: 'Yong\'in signalizatsiyasi ishladi, nima qilishimiz kerak?', en: 'The fire alarm just went off, what should we do?' },
            },
            {
              speaker: 'receptionist',
              text: {
                ru: 'Пожалуйста, сохраняйте спокойствие. Идите к лестничному выходу справа от лифтов и спускайтесь на первый этаж — не пользуйтесь лифтом. Сотрудники будут направлять вас на каждом этаже.',
                uz: 'Iltimos, xotirjam bo\'ling. Liftlarning o\'ng tomonidagi zinapoya chiqishiga boring va birinchi qavatga tushing — liftdan foydalanmang. Xodimlar har bir qavatda sizga yo\'l ko\'rsatib turadi.',
                en: 'Please stay calm. Head to the stairwell exit to the right of the elevators and go down to the ground floor — do not use the elevator. Staff will be guiding you on every floor.',
              },
            },
            {
              speaker: 'guest',
              text: { ru: 'Хорошо, спасибо, мы идём.', uz: 'Yaxshi, rahmat, biz boryapmiz.', en: 'Okay, thank you, we\'re heading down now.' },
            },
          ],
        },
        {
          type: 'bad',
          lines: [
            { speaker: 'guest', text: { ru: 'Сигнализация сработала, что делать?', uz: 'Signalizatsiya ishladi, nima qilaman?', en: 'The alarm is going off, what do I do?' } },
            { speaker: 'receptionist', text: { ru: 'Я не знаю, подождите, я сейчас узнаю...', uz: 'Bilmayman, kuting, hozir bilib olaman...', en: 'I don\'t know, wait, let me find out...' } },
            { speaker: 'receptionist', text: { ru: '(покидает стойку без замены, оставляя лобби без сотрудника)', uz: '(almashtiruvchisiz stoykani tark etib, lobbini xodimsiz qoldiradi)', en: '(leaves the desk with no coverage, leaving the lobby unstaffed)' } },
          ],
          note: {
            ru: 'Растерянность и уход со стойки без замены оставляют других гостей без указаний в критический момент.',
            uz: 'Sarosima va stoykani almashtiruvchisiz tark etish boshqa mehmonlarni muhim daqiqada yo\'l-yo\'riqsiz qoldiradi.',
            en: 'Confusion and abandoning the desk without coverage leaves other guests without guidance at the most critical moment.',
          },
        },
      ],
    },
    {
      id: 'tips',
      heading: { ru: 'Практические советы', uz: 'Amaliy maslahatlar', en: 'Practical tips' },
      body: {
        ru: 'Готовность и чёткий протокол превращают хаос в управляемую ситуацию.',
        uz: 'Tayyorgarlik va aniq protokol tartibsizlikni boshqariladigan vaziyatga aylantiradi.',
        en: 'Preparedness and a clear protocol turn chaos into a manageable situation.',
      },
      callouts: [
        {
          type: 'golden-rule',
          title: { ru: 'Стойка не должна пустовать во время эвакуации', uz: 'Evakuatsiya paytida stoyka bo\'sh qolmasligi kerak', en: 'The desk must never be unstaffed during an evacuation' },
          body: {
            ru: 'Даже во время эвакуации кто-то должен оставаться на посту или назначить чёткую передачу обязанностей согласно протоколу отеля — гости и экстренные службы должны иметь точку контакта.',
            uz: 'Evakuatsiya paytida ham kimdir postda qolishi yoki mehmonxona protokoliga muvofiq vazifalarni aniq topshirishi kerak — mehmonlar va favqulodda xizmatlar aloqa nuqtasiga ega bo\'lishi lozim.',
            en: 'Even during an evacuation, someone must remain at the post or hand off responsibilities clearly per hotel protocol — guests and emergency services need a point of contact.',
          },
        },
        {
          type: 'tip',
          title: { ru: 'Оставайтесь с пострадавшим гостем', uz: 'Jabrlangan mehmon yonida qoling', en: 'Stay with the affected guest' },
          body: {
            ru: 'При медицинской ситуации не оставляйте гостя одного после вызова скорой — говорите с ним спокойно, узнайте, есть ли аллергии или хронические заболевания, и передайте эту информацию медикам по прибытии.',
            uz: 'Tibbiy vaziyatda tez yordam chaqirgandan so\'ng mehmonni yolg\'iz qoldirmang — u bilan xotirjam gaplashing, allergiya yoki surunkali kasalliklar bor-yo\'qligini bilib oling va yetib kelgan tibbiyot xodimlariga bu ma\'lumotni yetkazing.',
            en: 'In a medical situation, don\'t leave the guest alone after calling for help — talk to them calmly, ask about allergies or chronic conditions, and pass that information to the paramedics on arrival.',
          },
        },
      ],
    },
  ],
  commonMistakes: [
    { ru: 'Направлять гостей к лифту во время пожарной эвакуации', uz: 'Yong\'in evakuatsiyasi paytida mehmonlarni liftga yo\'naltirish', en: 'Directing guests to the elevator during a fire evacuation' },
    { ru: 'Покидать стойку регистрации без замены во время инцидента', uz: 'Hodisa paytida qabul stoykasini almashtiruvchisiz tark etish', en: 'Leaving the front desk unstaffed during an incident' },
    { ru: 'Оставлять пострадавшего гостя одного после вызова скорой', uz: 'Tez yordam chaqirgandan keyin jabrlangan mehmonni yolg\'iz qoldirish', en: 'Leaving the affected guest alone after calling an ambulance' },
    { ru: 'Пытаться самостоятельно разрешить конфликт с угрозой безопасности', uz: 'Xavfsizlikka tahdid soluvchi to\'qnashuvni mustaqil hal qilishga urinish', en: 'Trying to personally handle a confrontation that threatens safety' },
    { ru: 'Не знать расположение аптечки и эвакуационных выходов заранее', uz: 'Birinchi yordam qutisi va evakuatsiya chiqishlari joylashuvini oldindan bilmaslik', en: 'Not knowing the location of the first-aid kit and evacuation routes in advance' },
  ],
  goldenRules: [
    { ru: 'Сохраняйте спокойствие — гости следуют вашему примеру', uz: 'Xotirjamlikni saqlang — mehmonlar sizning namunangizga ergashadi', en: 'Stay calm — guests follow your example' },
    { ru: 'Никогда не пользуйтесь лифтом во время пожарной эвакуации', uz: 'Yong\'in evakuatsiyasi paytida hech qachon liftdan foydalanmang', en: 'Never use the elevator during a fire evacuation' },
    { ru: 'При медицинской ситуации сразу вызывайте скорую и оставайтесь с гостем', uz: 'Tibbiy vaziyatda darhol tez yordam chaqiring va mehmon yonida qoling', en: 'In a medical situation, call an ambulance immediately and stay with the guest' },
    { ru: 'Стойка регистрации никогда не должна оставаться без сотрудника', uz: 'Qabul stoykasi hech qachon xodimsiz qolmasligi kerak', en: 'The front desk must never be left unstaffed' },
    { ru: 'Всегда следуйте установленному протоколу отеля, а не импровизации', uz: 'Har doim improvizatsiya emas, mehmonxonaning belgilangan protokoliga amal qiling', en: 'Always follow the hotel\'s established protocol, not improvisation' },
  ],
}

export default emergencyProcedures
