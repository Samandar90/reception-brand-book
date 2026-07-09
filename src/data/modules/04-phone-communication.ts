import type { Module } from '@/types'

const phoneCommunication: Module = {
  slug: 'phone-communication',
  order: 4,
  icon: 'Phone',
  title: { ru: 'Общение по телефону', uz: 'Telefon orqali muloqot', en: 'Phone Communication' },
  description: {
    ru: 'По телефону гость слышит только ваш голос — он заменяет и улыбку, и взгляд. Научитесь звучать профессионально, тепло и уверенно с первой секунды звонка.',
    uz: 'Telefonda mehmon faqat sizning ovozingizni eshitadi — u tabassum va nigohning o\'rnini bosadi. Qo\'ng\'iroqning birinchi soniyasidan boshlab professional, iliq va ishonchli tarzda gapirishni o\'rganing.',
    en: 'On the phone, the guest hears only your voice — it stands in for both your smile and your eyes. Learn to sound professional, warm, and confident from the very first second of the call.',
  },
  readingTimeMin: 7,
  difficulty: 'intermediate',
  sections: [
    {
      id: 'overview',
      heading: { ru: 'Почему телефонный этикет так важен', uz: 'Nega telefon odobi shunchalik muhim', en: 'Why phone etiquette matters so much' },
      body: {
        ru: 'Звонящий гость не видит вашего лица, поэтому голос, темп речи и интонация становятся всем впечатлением о вас и об отеле. Отвечайте не позже третьего гудка, называйте отель и своё имя, а затем внимательно слушайте. При бронировании или запросе повторяйте вслух ключевые детали — даты, тип номера, количество гостей — чтобы исключить ошибки и показать, что вы действительно слушаете.',
        uz: 'Qo\'ng\'iroq qilayotgan mehmon sizning yuzingizni ko\'rmaydi, shuning uchun ovoz, gapirish tezligi va ohang siz va mehmonxona haqidagi butun taassurotga aylanadi. Uchinchi signaldan kechikmasdan javob bering, mehmonxona nomi va o\'z ismingizni ayting, so\'ngra diqqat bilan tinglang. Bron qilish yoki so\'rov paytida asosiy tafsilotlarni — sanalar, xona turi, mehmonlar soni — ovoz chiqarib takrorlang, bu xatolarning oldini oladi va haqiqatan ham tinglayotganingizni ko\'rsatadi.',
        en: 'A caller can\'t see your face, so your voice, pace, and tone become the entire impression of you and the hotel. Answer no later than the third ring, state the hotel name and your own name, then listen carefully. During a booking or a request, repeat key details out loud — dates, room type, number of guests — to prevent errors and show that you\'re genuinely listening.',
      },
      callouts: [
        {
          type: 'tip',
          title: { ru: 'Улыбка слышна в голосе', uz: 'Tabassum ovozda eshitiladi', en: 'A smile can be heard in your voice' },
          body: {
            ru: 'Прежде чем поднять трубку, улыбнитесь — это физически меняет тембр голоса и делает его теплее, даже если собеседник вас не видит.',
            uz: 'Trubkani ko\'tarishdan oldin tabassum qiling — bu ovoz ohangini jismonan o\'zgartiradi va uni iliqroq qiladi, hatto suhbatdosh sizni ko\'rmasa ham.',
            en: 'Smile before you pick up the receiver — it physically changes the tone of your voice and makes it warmer, even though the caller can\'t see you.',
          },
        },
      ],
    },
    {
      id: 'dialogue',
      heading: { ru: 'Примеры диалогов', uz: 'Muloqot namunalari', en: 'Example dialogues' },
      body: {
        ru: 'Сравните образцовый и небрежный ответ на один и тот же звонок.',
        uz: 'Bir xil qo\'ng\'iroqqa namunali va beparvo javobni solishtiring.',
        en: 'Compare an exemplary and a careless response to the same call.',
      },
      dialogues: [
        {
          type: 'good',
          lines: [
            {
              speaker: 'receptionist',
              text: {
                ru: 'Добрый день, отель Grand Hotel, меня зовут Дилноза, чем могу помочь?',
                uz: 'Assalomu alaykum, Grand Hotel mehmonxonasi, mening ismim Dilnoza, sizga qanday yordam bera olaman?',
                en: 'Good afternoon, Grand Hotel, this is Dilnoza speaking, how may I help you?',
              },
            },
            {
              speaker: 'guest',
              text: { ru: 'Здравствуйте, хочу узнать про наличие номеров на 15–17 августа для двоих.', uz: 'Assalomu alaykum, 15-17 avgust kunlari ikki kishilik xona bormi, bilmoqchi edim.', en: 'Hi, I\'d like to check availability for two guests on August 15th to 17th.' } },
            {
              speaker: 'receptionist',
              text: {
                ru: 'Конечно, уточню. То есть, две ночи, с 15 по 17 августа, номер на двоих — верно? Секунду, проверяю наличие.',
                uz: 'Albatta, aniqlashtirib olay. Demak, ikki kecha, 15-17 avgust, ikki kishilik xona — to\'g\'rimi? Bir soniya, mavjudligini tekshiraman.',
                en: 'Of course, let me confirm. So that\'s two nights, August 15th to 17th, a room for two — is that right? One moment while I check availability.',
              },
            },
          ],
        },
        {
          type: 'bad',
          lines: [
            { speaker: 'receptionist', text: { ru: 'Алло.', uz: 'Alo.', en: 'Yeah.' } },
            { speaker: 'guest', text: { ru: 'Здравствуйте, есть номера на 15 августа?', uz: 'Assalomu alaykum, 15 avgustga xona bormi?', en: 'Hi, do you have rooms available on August 15th?' } },
            { speaker: 'receptionist', text: { ru: 'Не знаю, надо смотреть, перезвоните позже.', uz: 'Bilmayman, qarash kerak, keyinroq qo\'ng\'iroq qiling.', en: 'I don\'t know, need to check, call back later.' } },
          ],
          note: {
            ru: 'Нет названия отеля и имени сотрудника, нет уточнения деталей, а просьба перезвонить без попытки помочь звучит как отказ от работы.',
            uz: 'Mehmonxona nomi va xodim ismi yo\'q, tafsilotlarni aniqlashtirish yo\'q, yordam berishga urinmasdan qayta qo\'ng\'iroq qilishni so\'rash esa ishdan bosh tortishdek eshitiladi.',
            en: 'No hotel name or staff name, no clarifying questions, and asking the caller to call back without even trying to help sounds like a refusal to do the job.',
          },
        },
      ],
    },
    {
      id: 'tips',
      heading: { ru: 'Полезные советы', uz: 'Foydali maslahatlar', en: 'Helpful tips' },
      body: {
        ru: 'Приёмы, которые делают телефонные разговоры чёткими и приятными.',
        uz: 'Telefon suhbatlarini aniq va yoqimli qiladigan usullar.',
        en: 'Techniques that make phone calls clear and pleasant.',
      },
      callouts: [
        {
          type: 'golden-rule',
          title: { ru: 'Отвечайте не позже третьего гудка', uz: 'Uchinchi signaldan kechikmasdan javob bering', en: 'Answer by the third ring' },
          body: {
            ru: 'Долгое ожидание раздражает звонящего ещё до начала разговора. Если вы заняты с гостем у стойки, коротко извинитесь перед ним и снимите трубку.',
            uz: 'Uzoq kutish suhbat boshlanishidan oldin qo\'ng\'iroq qilayotgan kishini asabiylashtiradi. Agar stoykada mehmon bilan band bo\'lsangiz, undan qisqacha uzr so\'rang va trubkani ko\'taring.',
            en: 'A long wait irritates the caller before the conversation even begins. If you\'re busy with a guest at the desk, apologize briefly to them and pick up the phone.',
          },
        },
        {
          type: 'tip',
          title: { ru: 'Завершайте звонок чётко', uz: 'Qo\'ng\'iroqni aniq yakunlang', en: 'Close the call clearly' },
          body: {
            ru: 'Подытожьте договорённость, поблагодарите за звонок и подождите, пока собеседник положит трубку первым — это признак вежливости.',
            uz: 'Kelishuvni yakunlang, qo\'ng\'iroq uchun rahmat ayting va suhbatdosh birinchi bo\'lib trubkani qo\'yguncha kuting — bu xushmuomalalik belgisidir.',
            en: 'Summarize what was agreed, thank the caller, and wait for them to hang up first — this is a sign of courtesy.',
          },
        },
      ],
    },
  ],
  commonMistakes: [
    { ru: 'Отвечать без названия отеля и своего имени', uz: 'Mehmonxona nomi va o\'z ismisiz javob berish', en: 'Answering without stating the hotel name and your own name' },
    { ru: 'Говорить монотонно или слишком быстро', uz: 'Bir xil ohangda yoki juda tez gapirish', en: 'Speaking in a flat tone or too quickly' },
    { ru: 'Не повторять ключевые детали запроса', uz: 'So\'rovning asosiy tafsilotlarini takrorlamaslik', en: 'Not repeating back key details of the request' },
    { ru: 'Заставлять гостя долго ждать на линии без объяснения', uz: 'Mehmonni tushuntirmasdan liniyada uzoq kutishga majbur qilish', en: 'Leaving the guest on hold for long periods without explanation' },
  ],
  goldenRules: [
    { ru: 'Отвечайте на звонок не позже третьего гудка', uz: 'Qo\'ng\'iroqqa uchinchi signaldan kechikmasdan javob bering', en: 'Answer the call by the third ring' },
    { ru: 'Называйте отель и своё имя при ответе', uz: 'Javob berishda mehmonxona nomi va ismingizni ayting', en: 'State the hotel name and your own name when answering' },
    { ru: 'Слушайте активно и не перебивайте', uz: 'Faol tinglang va gapni bo\'lmang', en: 'Listen actively and don\'t interrupt' },
    { ru: 'Повторяйте ключевые детали для подтверждения', uz: 'Tasdiqlash uchun asosiy tafsilotlarni takrorlang', en: 'Repeat back key details to confirm' },
    { ru: 'Завершайте разговор вежливо и чётко', uz: 'Suhbatni xushmuomalalik bilan va aniq yakunlang', en: 'End the call politely and clearly' },
  ],
}

export default phoneCommunication
