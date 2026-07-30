// A0 — Complete Beginner learning content (slide-based)
// Order: Greetings → Introductions → Numbers → Countries → Family → Self-Intro → Sounds
window.A0_CONTENT = [

  // ═══════════════ 1. GREETINGS ═══════════════
  {
    id: 'greetings',
    title: 'Greetings',
    titleRu: 'Приветствия',
    icon: '👋',
    slides: [
      { type: 'title', icon: '👋', title: 'Greetings', titleRu: 'Приветствия', subtitle: 'Say hello and goodbye in English', subtitleRu: 'Здороваемся и прощаемся по-английски' },

      { type: 'concept', title: 'Saying Hello', titleRu: 'Как поздороваться',
        text: 'English greetings change depending on the time of day — but "Hello" and "Hi" work any time!',
        textRu: 'Приветствия зависят от времени суток — но «Hello» и «Hi» подходят всегда!',
        visual: '🌅 → 🌞 → 🌆',
        examples: [
          { icon: '😊', english: 'Hello!', russian: 'Здравствуйте!' },
          { icon: '🙋', english: 'Hi!', russian: 'Привет!' },
        ]
      },

      { type: 'vocab', title: 'Greetings by time of day', titleRu: 'Приветствия по времени суток',
        items: [
          { icon: '😊', english: 'Hello', pronunciation: 'хэ-ЛО́У', russian: 'Здравствуйте', note: 'Any time' },
          { icon: '🙋', english: 'Hi', pronunciation: 'ха́й', russian: 'Привет', note: 'Casual, any time' },
          { icon: '🌅', english: 'Good morning', pronunciation: 'гуд МО́Р-нинг', russian: 'Доброе утро', note: 'until ~12:00' },
          { icon: '☀️', english: 'Good afternoon', pronunciation: 'гуд аф-тэр-НУ́Н', russian: 'Добрый день', note: '12:00 – 18:00' },
          { icon: '🌆', english: 'Good evening', pronunciation: 'гуд И́В-нинг', russian: 'Добрый вечер', note: 'from ~18:00' },
        ]
      },

      { type: 'vocab', title: 'Saying Goodbye', titleRu: 'Как попрощаться',
        items: [
          { icon: '👋', english: 'Goodbye', pronunciation: 'гуд-БА́Й', russian: 'До свидания', note: 'Formal' },
          { icon: '✌️', english: 'Bye!', pronunciation: 'ба́й', russian: 'Пока', note: 'Casual' },
          { icon: '🤗', english: 'See you later', pronunciation: 'си́ ю ЛЭ́Й-тэр', russian: 'Увидимся', note: 'Informal' },
          { icon: '🌙', english: 'Good night', pronunciation: 'гуд на́йт', russian: 'Спокойной ночи', note: 'Before sleep' },
        ]
      },

      { type: 'tip', icon: '⚠️', title: 'Watch out!', titleRu: 'Внимание!',
        text: '"Good night" is NOT a greeting — it means goodbye at bedtime.',
        textRu: '«Good night» — это НЕ приветствие, а прощание перед сном.',
        items: [
          { wrong: 'Good night! (при встрече)', right: 'Good evening! (при встрече вечером)' },
          { wrong: 'Good night! (уходя днём)', right: 'Goodbye! / Bye! (уходя)' },
        ]
      },

      { type: 'tip', icon: '💡', title: '"Hi" is universal', titleRu: '«Hi» — универсальное',
        text: '"Hi" in English is much broader than "Привет" in Russian — you can use it with anyone: your boss, a doctor, a stranger.',
        textRu: '«Hi» в английском используется гораздо шире, чем «Привет» в русском — можно сказать кому угодно: начальнику, врачу, незнакомцу.'
      },

      { type: 'dialogue', title: 'Example: Meeting someone', titleRu: 'Пример: Встреча с кем-то',
        context: 'Two neighbours meet in the morning',
        lines: [
          { speaker: 'A', text: 'Good morning!', pronunciation: 'гуд МО́Р-нинг', russian: 'Доброе утро!' },
          { speaker: 'B', text: 'Hi! How are you?', pronunciation: 'ха́й! ха́у а ю?', russian: 'Привет! Как дела?' },
          { speaker: 'A', text: 'I\'m fine, thanks! And you?', pronunciation: 'айм файн, фэнкс! энд ю?', russian: 'Хорошо, спасибо! А вы?' },
          { speaker: 'B', text: 'Good, thanks! See you later!', pronunciation: 'гуд, фэнкс! си ю лэйтэр!', russian: 'Хорошо, спасибо! Увидимся!' },
        ]
      },

      { type: 'practice', text: 'Practice greetings vocabulary', textRu: 'Практика — приветствия', gameId: 'vocabulary', buttonText: 'Play Vocabulary Game' },
    ],
  },

  // ═══════════════ 2. INTRODUCTIONS ═══════════════
  {
    id: 'introductions',
    title: 'Introductions',
    titleRu: 'Знакомство',
    icon: '🤝',
    slides: [
      { type: 'title', icon: '🤝', title: 'Introductions', titleRu: 'Знакомство', subtitle: 'Introduce yourself and ask someone\'s name', subtitleRu: 'Представьтесь и спросите чужое имя' },

      { type: 'concept', title: 'How to say your name', titleRu: 'Как назвать своё имя',
        text: 'There are two ways to say your name in English. Both are correct!',
        textRu: 'Есть два способа назвать своё имя. Оба правильные!',
        examples: [
          { icon: '1️⃣', english: 'My name is Anna.', russian: 'Меня зовут Анна.' },
          { icon: '2️⃣', english: 'I\'m Anna.', russian: 'Я — Анна. (I\'m = I am)' },
        ]
      },

      { type: 'vocab', title: 'Key phrases', titleRu: 'Ключевые фразы',
        items: [
          { icon: '🗣️', english: 'My name is ___', pronunciation: 'май нэйм из ___', russian: 'Меня зовут ___' },
          { icon: '❓', english: 'What\'s your name?', pronunciation: 'уо́тс ёр нэйм?', russian: 'Как вас зовут?', note: 'What\'s = What is' },
          { icon: '😊', english: 'Nice to meet you', pronunciation: 'найс ту мит ю', russian: 'Приятно познакомиться' },
          { icon: '🤝', english: 'Nice to meet you too', pronunciation: 'найс ту мит ю ту', russian: 'И мне тоже приятно' },
        ]
      },

      { type: 'vocab', title: 'How are you?', titleRu: 'Как дела?',
        intro: 'After introductions, people often ask how you are.',
        introRu: 'После знакомства обычно спрашивают, как дела.',
        items: [
          { icon: '❓', english: 'How are you?', pronunciation: 'ха́у а ю?', russian: 'Как дела?' },
          { icon: '😊', english: 'I\'m fine, thanks', pronunciation: 'айм файн, фэнкс', russian: 'Хорошо, спасибо', note: 'I\'m = I am' },
          { icon: '👍', english: 'Good, thanks. And you?', pronunciation: 'гуд, фэнкс. энд ю?', russian: 'Хорошо, спасибо. А вы?' },
          { icon: '🙂', english: 'Not bad', pronunciation: 'нот бэ́д', russian: 'Неплохо' },
        ]
      },

      { type: 'tip', icon: '💡', title: 'No formality!', titleRu: 'Без формальности!',
        text: '"your" means both «ваш» and «твой» — English has no formality distinction. One word for everyone!',
        textRu: '«your» = и «ваш», и «твой» — в английском нет разницы. Одно слово для всех!'
      },

      { type: 'dialogue', title: 'Example dialogue', titleRu: 'Пример диалога',
        context: 'Two people meeting for the first time',
        lines: [
          { speaker: 'A', text: 'Hello! My name is Anna.', pronunciation: 'хэ-ЛО́У! май нэйм из А́нна.', russian: 'Привет! Меня зовут Анна.' },
          { speaker: 'B', text: 'Hi Anna! I\'m John. Nice to meet you.', pronunciation: 'ха́й А́нна! айм Джон. найс ту мит ю.', russian: 'Привет, Анна! Я Джон. Приятно познакомиться.' },
          { speaker: 'A', text: 'Nice to meet you too! How are you?', pronunciation: 'найс ту мит ю ту! ха́у а ю?', russian: 'И мне тоже! Как дела?' },
          { speaker: 'B', text: 'I\'m good, thanks!', pronunciation: 'айм гуд, фэнкс!', russian: 'Хорошо, спасибо!' },
        ]
      },

      { type: 'practice', text: 'Practice introduction phrases', textRu: 'Практика — фразы для знакомства', gameId: 'vocabulary', buttonText: 'Play Vocabulary Game' },
    ],
  },

  // ═══════════════ 3. NUMBERS 1–20 & AGE ═══════════════
  {
    id: 'numbers',
    title: 'Numbers 1–20 & Age',
    titleRu: 'Числа 1–20 и возраст',
    icon: '🔢',
    slides: [
      { type: 'title', icon: '🔢', title: 'Numbers 1–20', titleRu: 'Числа 1–20', subtitle: 'Count and talk about your age', subtitleRu: 'Считаем и говорим о возрасте' },

      { type: 'number-grid', title: 'Numbers 1–10', titleRu: 'Числа 1–10',
        items: [
          { number: 1, english: 'one', pronunciation: 'уа́н' },
          { number: 2, english: 'two', pronunciation: 'ту́' },
          { number: 3, english: 'three', pronunciation: 'фри́' },
          { number: 4, english: 'four', pronunciation: 'фо́р' },
          { number: 5, english: 'five', pronunciation: 'фа́йв' },
          { number: 6, english: 'six', pronunciation: 'си́кс' },
          { number: 7, english: 'seven', pronunciation: 'СЭ́-вэн' },
          { number: 8, english: 'eight', pronunciation: 'э́йт' },
          { number: 9, english: 'nine', pronunciation: 'на́йн' },
          { number: 10, english: 'ten', pronunciation: 'тэ́н' },
        ]
      },

      { type: 'number-grid', title: 'Numbers 11–20', titleRu: 'Числа 11–20',
        items: [
          { number: 11, english: 'eleven', pronunciation: 'и-ЛЭ́-вэн' },
          { number: 12, english: 'twelve', pronunciation: 'твэ́лв' },
          { number: 13, english: 'thirteen', pronunciation: 'фёр-ТИ́Н' },
          { number: 14, english: 'fourteen', pronunciation: 'фор-ТИ́Н' },
          { number: 15, english: 'fifteen', pronunciation: 'фиф-ТИ́Н' },
          { number: 16, english: 'sixteen', pronunciation: 'сикс-ТИ́Н' },
          { number: 17, english: 'seventeen', pronunciation: 'сэ-вэн-ТИ́Н' },
          { number: 18, english: 'eighteen', pronunciation: 'эй-ТИ́Н' },
          { number: 19, english: 'nineteen', pronunciation: 'найн-ТИ́Н' },
          { number: 20, english: 'twenty', pronunciation: 'ТВЭ́Н-ти' },
        ]
      },

      { type: 'tip', icon: '🎯', title: 'Stress matters!', titleRu: 'Ударение важно!',
        text: '13–19 stress the LAST syllable: thirTEEN. Later you\'ll learn 30, 40, etc. — those stress the FIRST: THIRty. This is how you tell them apart!',
        textRu: '13–19 — ударение на ПОСЛЕДНИЙ слог: thirTEEN. Позже вы выучите 30, 40 — там ударение на ПЕРВЫЙ: THIRty. Так вы их различите!'
      },

      { type: 'concept', title: 'Talking about age', titleRu: 'Говорим о возрасте',
        text: 'In English you "are" an age. In Russian you "have" years — it\'s different!',
        textRu: 'В английском вы «are» (являетесь) каким-то возрастом. В русском — «вам» столько лет. Это отличается!',
        examples: [
          { icon: '🇬🇧', english: 'I am 25 years old.', russian: 'Мне 25 лет.' },
          { icon: '💬', english: 'I am 25.', russian: 'Мне 25. (короткая форма)' },
        ]
      },

      { type: 'vocab', title: 'Age questions & answers', titleRu: 'Вопросы и ответы о возрасте',
        items: [
          { icon: '❓', english: 'How old are you?', pronunciation: 'ха́у о́лд а ю?', russian: 'Сколько вам лет?' },
          { icon: '🗣️', english: 'I am ___ years old.', pronunciation: 'ай эм ___ йирз о́лд', russian: 'Мне ___ лет.' },
          { icon: '👤', english: 'How old is he/she?', pronunciation: 'ха́у о́лд из хи/ши?', russian: 'Сколько ему/ей лет?' },
          { icon: '💬', english: 'She is 30 years old.', pronunciation: 'ши из ТЁ́Р-ти йирз о́лд', russian: 'Ей 30 лет.' },
        ]
      },

      { type: 'tip', icon: '💡', title: 'Short form is fine', titleRu: 'Короткая форма — нормально',
        text: '"years old" can be dropped in casual speech. "I am 30" is perfectly fine!',
        textRu: '«years old» можно опустить: «I am 30» — совершенно нормально!'
      },

      { type: 'practice', text: 'Practice numbers', textRu: 'Практика — числа', gameId: 'vocabulary', buttonText: 'Play Vocabulary Game' },
    ],
  },

  // ═══════════════ 4. COUNTRIES & NATIONALITIES ═══════════════
  {
    id: 'countries',
    title: 'Countries & Nationalities',
    titleRu: 'Страны и национальности',
    icon: '🌍',
    slides: [
      { type: 'title', icon: '🌍', title: 'Countries & Nationalities', titleRu: 'Страны и национальности', subtitle: 'Say where you\'re from', subtitleRu: 'Говорим, откуда мы' },

      { type: 'concept', title: 'Two ways to answer', titleRu: 'Два способа ответить',
        text: 'You can say where you are FROM (country) or what you ARE (nationality).',
        textRu: 'Можно сказать, откуда вы (страна) или кто вы (национальность).',
        examples: [
          { icon: '🇷🇺', english: 'I am from Russia.', russian: 'Я из России.' },
          { icon: '🇷🇺', english: 'I am Russian.', russian: 'Я русский / русская.' },
        ]
      },

      { type: 'vocab', title: 'Key questions', titleRu: 'Ключевые вопросы',
        items: [
          { icon: '🌍', english: 'Where are you from?', pronunciation: 'УЭ́Р а ю фром?', russian: 'Откуда вы?' },
          { icon: '🗣️', english: 'I am from ___', pronunciation: 'ай эм фром ___', russian: 'Я из ___' },
          { icon: '🏠', english: 'Where do you live?', pronunciation: 'уэ́р ду ю лив?', russian: 'Где вы живёте?' },
          { icon: '📍', english: 'I live in ___', pronunciation: 'ай лив ин ___', russian: 'Я живу в ___' },
        ]
      },

      { type: 'table', title: 'Countries → Nationalities', titleRu: 'Страны → Национальности',
        rows: [
          { english: 'Russia → Russian', pronunciation: 'РА́-ша → РА́-шэн', russian: 'Россия → русский' },
          { english: 'The USA → American', pronunciation: 'зэ ю-эс-Э́Й → э-МЭ́-ри-кэн', russian: 'США → американский' },
          { english: 'The UK → British', pronunciation: 'зэ ю-КЭ́Й → БРИ́-тиш', russian: 'Великобритания → британский' },
          { english: 'Germany → German', pronunciation: 'ДЖЁ́Р-мэ-ни → ДЖЁ́Р-мэн', russian: 'Германия → немецкий' },
          { english: 'France → French', pronunciation: 'фрэнс → фрэнч', russian: 'Франция → французский' },
          { english: 'Spain → Spanish', pronunciation: 'спэйн → СПЭ́-ниш', russian: 'Испания → испанский' },
          { english: 'Turkey → Turkish', pronunciation: 'ТЁ́Р-ки → ТЁ́Р-киш', russian: 'Турция → турецкий' },
          { english: 'China → Chinese', pronunciation: 'ЧА́Й-на → чай-НИ́З', russian: 'Китай → китайский' },
          { english: 'Poland → Polish', pronunciation: 'ПО́У-лэнд → ПО́У-лиш', russian: 'Польша → польский' },
          { english: 'Ukraine → Ukrainian', pronunciation: 'ю-КРЭ́ЙН → ю-крэй-НИ-эн', russian: 'Украина → украинский' },
        ]
      },

      { type: 'examples', title: 'Example sentences', titleRu: 'Примеры предложений',
        items: [
          { icon: '🇷🇺', english: 'I am from Russia. I am Russian.', russian: 'Я из России. Я русский.' },
          { icon: '🇩🇪', english: 'She is from Germany. She is German.', russian: 'Она из Германии. Она немка.' },
          { icon: '🇹🇷', english: 'He is from Turkey. He is Turkish.', russian: 'Он из Турции. Он турок.' },
          { icon: '🏙️', english: 'I live in Moscow.', russian: 'Я живу в Москве.' },
        ]
      },

      { type: 'dialogue', title: 'Example dialogue', titleRu: 'Пример диалога',
        context: 'Two people at a language school',
        lines: [
          { speaker: 'A', text: 'Hi! Where are you from?', russian: 'Привет! Откуда вы?' },
          { speaker: 'B', text: 'I\'m from Russia. I live in Moscow. And you?', russian: 'Я из России. Живу в Москве. А вы?' },
          { speaker: 'A', text: 'I\'m from Germany. I live in Berlin.', russian: 'Я из Германии. Живу в Берлине.' },
        ]
      },

      { type: 'practice', text: 'Practice countries & nationalities', textRu: 'Практика — страны и национальности', gameId: 'vocabulary', buttonText: 'Play Vocabulary Game' },
    ],
  },

  // ═══════════════ 5. FAMILY MEMBERS ═══════════════
  {
    id: 'family',
    title: 'Family Members',
    titleRu: 'Члены семьи',
    icon: '👨‍👩‍👧‍👦',
    slides: [
      { type: 'title', icon: '👨‍👩‍👧‍👦', title: 'Family Members', titleRu: 'Члены семьи', subtitle: 'Talk about your family in English', subtitleRu: 'Рассказываем о семье по-английски' },

      { type: 'vocab', title: 'Parents & Grandparents', titleRu: 'Родители и бабушки/дедушки',
        items: [
          { icon: '👩', english: 'mother / mum', pronunciation: 'МА́-зэр / мам', russian: 'мама' },
          { icon: '👨', english: 'father / dad', pronunciation: 'ФА́-зэр / дэд', russian: 'папа' },
          { icon: '👫', english: 'parents', pronunciation: 'ПЭ́-рэнтс', russian: 'родители' },
          { icon: '👵', english: 'grandmother', pronunciation: 'ГРЭ́НД-ма-зэр', russian: 'бабушка' },
          { icon: '👴', english: 'grandfather', pronunciation: 'ГРЭ́НД-фа-зэр', russian: 'дедушка' },
        ]
      },

      { type: 'vocab', title: 'Siblings & Children', titleRu: 'Братья/сёстры и дети',
        items: [
          { icon: '👧', english: 'sister', pronunciation: 'СИ́С-тэр', russian: 'сестра' },
          { icon: '👦', english: 'brother', pronunciation: 'БРА́-зэр', russian: 'брат' },
          { icon: '👧👦', english: 'siblings', pronunciation: 'СИ́-блингз', russian: 'братья и сёстры' },
          { icon: '👦', english: 'son', pronunciation: 'са́н', russian: 'сын' },
          { icon: '👧', english: 'daughter', pronunciation: 'ДО́-тэр', russian: 'дочь' },
          { icon: '👶', english: 'baby', pronunciation: 'БЭ́Й-би', russian: 'малыш' },
          { icon: '🧒🧒', english: 'children / kids', pronunciation: 'ЧИ́Л-дрэн / кидз', russian: 'дети' },
        ]
      },

      { type: 'vocab', title: 'Other family', titleRu: 'Другие родственники',
        items: [
          { icon: '🤵', english: 'husband', pronunciation: 'ХА́З-бэнд', russian: 'муж' },
          { icon: '👰', english: 'wife', pronunciation: 'уа́йф', russian: 'жена' },
          { icon: '👩', english: 'aunt', pronunciation: 'а́нт', russian: 'тётя' },
          { icon: '👨', english: 'uncle', pronunciation: 'А́Н-кэл', russian: 'дядя' },
          { icon: '🧑', english: 'cousin', pronunciation: 'КА́-зн', russian: 'двоюр. брат/сестра' },
        ]
      },

      { type: 'concept', title: 'I have / I don\'t have', titleRu: 'У меня есть / У меня нет',
        text: 'Use "I have" to talk about family. Use "I don\'t have" for the negative.',
        textRu: 'Используйте «I have» чтобы говорить о семье. «I don\'t have» — для отрицания.',
        examples: [
          { icon: '✅', english: 'I have two brothers.', russian: 'У меня два брата.' },
          { icon: '❌', english: 'I don\'t have a sister.', russian: 'У меня нет сестры.' },
        ]
      },

      { type: 'vocab', title: 'Marital status', titleRu: 'Семейное положение',
        items: [
          { icon: '💍', english: 'I am married', pronunciation: 'ай эм МЭ́-рид', russian: 'Я женат / замужем' },
          { icon: '🙂', english: 'I am single', pronunciation: 'ай эм СИ́Н-гл', russian: 'Я не женат / не замужем' },
        ]
      },

      { type: 'examples', title: 'Talking about your family', titleRu: 'Рассказываем о семье',
        intro: 'Read this short text about a family:',
        items: [
          { icon: '👨‍👩‍👧‍👦', english: 'I have a big family.', russian: 'У меня большая семья.' },
          { icon: '👩', english: 'My mother\'s name is Olga. She is 52.', russian: 'Мою маму зовут Ольга. Ей 52.' },
          { icon: '👨', english: 'My father is tall and strong.', russian: 'Мой папа высокий и сильный.' },
          { icon: '👧', english: 'I have one sister. Her name is Anya.', russian: 'У меня одна сестра. Её зовут Аня.' },
          { icon: '🎓', english: 'She is 20 and she is a student.', russian: 'Ей 20 и она студентка.' },
        ]
      },

      { type: 'practice', text: 'Practice family vocabulary', textRu: 'Практика — члены семьи', gameId: 'vocabulary', buttonText: 'Play Vocabulary Game' },
    ],
  },

  // ═══════════════ 6. YOUR SELF-INTRODUCTION ═══════════════
  {
    id: 'self-intro',
    title: 'Your Self-Introduction',
    titleRu: 'Рассказ о себе',
    icon: '🎤',
    slides: [
      { type: 'title', icon: '🎤', title: 'Your Self-Introduction', titleRu: 'Рассказ о себе', subtitle: 'Put it all together!', subtitleRu: 'Соберём всё вместе!' },

      { type: 'concept', title: 'You can do this!', titleRu: 'Вы уже готовы!',
        text: 'You already know greetings, names, numbers, countries, and family words. Now combine them into a full introduction!',
        textRu: 'Вы уже знаете приветствия, имена, числа, страны и слова о семье. Теперь соберём всё вместе!',
        visual: '👋 + 🤝 + 🔢 + 🌍 + 👨‍👩‍👧‍👦 = 🎤'
      },

      { type: 'examples', title: 'Your template', titleRu: 'Ваш шаблон',
        intro: 'Follow this pattern to introduce yourself:',
        items: [
          { icon: '👋', english: 'Hello! My name is ___.', russian: 'Привет! Меня зовут ___.' },
          { icon: '🌍', english: 'I am from ___. I am ___.', russian: 'Я из ___. Я ___. (страна / национальность)' },
          { icon: '🔢', english: 'I am ___ years old.', russian: 'Мне ___ лет.' },
          { icon: '💼', english: 'I am a ___.', russian: 'Я ___. (профессия)' },
          { icon: '💍', english: 'I am married / single.', russian: 'Я женат / не женат.' },
          { icon: '👨‍👩‍👧‍👦', english: 'I have ___.', russian: 'У меня есть ___.' },
          { icon: '🤝', english: 'Nice to meet you!', russian: 'Приятно познакомиться!' },
        ]
      },

      { type: 'dialogue', title: 'Full example', titleRu: 'Полный пример',
        context: 'Anna introduces herself at a language course',
        lines: [
          { speaker: 'You', text: 'Hello! My name is Anna.', russian: 'Привет! Меня зовут Анна.' },
          { speaker: 'You', text: 'I am from Russia. I am Russian.', russian: 'Я из России. Я русская.' },
          { speaker: 'You', text: 'I am 28 years old.', russian: 'Мне 28 лет.' },
          { speaker: 'You', text: 'I am a teacher.', russian: 'Я учитель.' },
          { speaker: 'You', text: 'I am married. I have one daughter.', russian: 'Я замужем. У меня одна дочь.' },
          { speaker: 'You', text: 'Nice to meet you!', russian: 'Приятно познакомиться!' },
        ]
      },

      { type: 'tip', icon: '🎯', title: 'Practice tip', titleRu: 'Совет для практики',
        text: 'Say your self-introduction 3 times: first slowly reading, then faster, then from memory at natural speed.',
        textRu: 'Скажите свой рассказ 3 раза: сначала медленно читая, потом быстрее, потом по памяти в нормальном темпе.'
      },

      { type: 'practice', text: 'You\'ve completed A0 basics! Keep practising with games.', textRu: 'Вы прошли основы A0! Продолжайте практиковаться с играми.', gameId: 'vocabulary', buttonText: 'Play Vocabulary Game' },
    ],
  },

  // ═══════════════ 7. TRICKY ENGLISH SOUNDS ═══════════════
  {
    id: 'sounds',
    title: 'Tricky English Sounds',
    titleRu: 'Трудные английские звуки',
    icon: '🔊',
    slides: [
      { type: 'title', icon: '🔊', title: 'Tricky English Sounds', titleRu: 'Трудные английские звуки', subtitle: 'Sounds that don\'t exist in Russian', subtitleRu: 'Звуки, которых нет в русском' },

      { type: 'concept', title: 'Why this matters', titleRu: 'Почему это важно',
        text: 'Russian doesn\'t have these 4 sounds. If you say them wrong, people may not understand you — but with a little practice, you\'ll get them!',
        textRu: 'В русском нет этих 4 звуков. Если произнести неправильно, вас могут не понять — но с практикой вы их освоите!',
        visual: '🗣️💨'
      },

      { type: 'table', title: 'The 4 tricky sounds', titleRu: '4 трудных звука',
        rows: [
          { english: 'th — thing, three, thanks', pronunciation: 'Tongue between teeth', russian: 'Язык между зубами' },
          { english: 'w — water, what, we', pronunciation: 'Round your lips like "у"', russian: 'Округлите губы как «у»' },
          { english: 'h — hello, how, have', pronunciation: 'Light breath, not hard "х"', russian: 'Лёгкий выдох, не твёрдая «х»' },
          { english: 'r — red, right, run', pronunciation: 'Don\'t roll your tongue', russian: 'Не катите язык' },
        ]
      },

      { type: 'tip', icon: '⚠️', title: 'Common mistake: "w"', titleRu: 'Частая ошибка: «w»',
        text: 'Russians often say "v" instead of "w": "vater" instead of "water". Round your lips first, then say the word!',
        textRu: 'Русские часто говорят «в» вместо «w»: «вотэр» вместо «water». Сначала округлите губы, потом говорите!',
        items: [
          { wrong: 'вотэр (water)', right: 'уо́тэр (water) — lips rounded' },
          { wrong: 'вот (what)', right: 'уо́т (what) — lips rounded' },
        ]
      },

      { type: 'tip', icon: '⚠️', title: 'Common mistake: "h"', titleRu: 'Частая ошибка: «h»',
        text: 'Russians say a hard "х" sound: "ХЭЛЛО". English "h" is just a gentle breath — like fogging up a mirror.',
        textRu: 'Русские говорят твёрдую «х»: «ХЭЛЛО». Английское «h» — мягкий выдох, как будто дышите на зеркало.',
        items: [
          { wrong: 'ХЭ́ЛЛО (hello)', right: 'хэ-ЛО́У (hello) — gentle breath' },
          { wrong: 'ХЭ́В (have)', right: 'хэв (have) — gentle breath' },
        ]
      },

      { type: 'examples', title: 'Practice these words', titleRu: 'Потренируйте эти слова',
        intro: 'Say each word slowly, focusing on the tricky sound:',
        items: [
          { icon: '🦷', english: 'thank you (th)', russian: 'спасибо — язык между зубами' },
          { icon: '💧', english: 'water (w)', russian: 'вода — губы округлены' },
          { icon: '👋', english: 'hello (h)', russian: 'привет — мягкий выдох' },
          { icon: '🔴', english: 'red (r)', russian: 'красный — не катите язык' },
          { icon: '3️⃣', english: 'three (th)', russian: 'три — язык между зубами' },
          { icon: '🌊', english: 'where (w)', russian: 'где — губы округлены' },
        ]
      },
    ],
  },
];
