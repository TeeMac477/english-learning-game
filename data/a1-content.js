// A1 — Elementary learning content (slide-based)
// Order: To Be → This/That → Everyday Phrases → Jobs → Possessives → Object Pronouns → Present Simple → Frequency → Daily Routine & Time → Questions → Have Got → Some/Any → Countable/Uncountable → There Is/Are → Prepositions of Place → Prepositions of Time → Can → Appearance
window.A1_CONTENT = [

  // ═══════════════ 1. THE VERB "TO BE" ═══════════════
  {
    id: 'to-be',
    title: 'The Verb "to be"',
    titleRu: 'Глагол «to be»',
    icon: '🔤',
    slides: [
      { type: 'title', icon: '🔤', title: 'The Verb "to be"', titleRu: 'Глагол «to be»', subtitle: 'The most important verb in English', subtitleRu: 'Самый важный глагол в английском' },

      { type: 'examples', title: 'Discover the pattern', titleRu: 'Найдите закономерность',
        intro: 'Read these sentences. Can you see when we use am, is, and are?',
        items: [
          { icon: '👤', english: 'I am a student.', russian: 'Я студент.' },
          { icon: '👤', english: 'I am happy.', russian: 'Я счастлив.' },
          { icon: '👩', english: 'She is a doctor.', russian: 'Она врач.' },
          { icon: '👨', english: 'He is tall.', russian: 'Он высокий.' },
          { icon: '🐱', english: 'It is cold.', russian: 'Холодно.' },
          { icon: '👥', english: 'You are smart.', russian: 'Ты умный.' },
          { icon: '👫', english: 'We are friends.', russian: 'Мы друзья.' },
          { icon: '👥', english: 'They are Russian.', russian: 'Они русские.' },
        ]
      },

      { type: 'concept', title: 'Why "to be" matters', titleRu: 'Почему «to be» так важен',
        text: 'In Russian, you skip "быть" in present tense: "Я врач." In English, you MUST say it: "I am a doctor." Never skip it!',
        textRu: 'В русском «быть» пропускают: «Я врач.» В английском ОБЯЗАТЕЛЬНО: «I am a doctor.» Никогда не пропускайте!',
        examples: [
          { icon: '🇷🇺', english: 'Я студент. (no verb)', russian: 'В русском — без глагола' },
          { icon: '🇬🇧', english: 'I am a student.', russian: 'В английском — глагол обязателен' },
        ]
      },

      { type: 'rule', title: 'am / is / are', titleRu: 'am / is / are',
        formula: 'I → am · You/We/They → are · He/She/It → is',
        explanation: 'Each pronoun has its own form of "to be":',
        explanationRu: 'У каждого местоимения своя форма «to be»:',
        rows: [
          { subject: 'I', verb: 'am', example: 'I am a teacher. (I\'m)' },
          { subject: 'You', verb: 'are', example: 'You are smart. (You\'re)' },
          { subject: 'He / She', verb: 'is', example: 'She is from Russia. (She\'s)' },
          { subject: 'It', verb: 'is', example: 'It is cold. (It\'s)' },
          { subject: 'We', verb: 'are', example: 'We are students. (We\'re)' },
          { subject: 'They', verb: 'are', example: 'They are Russian. (They\'re)' },
        ]
      },

      { type: 'structure', title: 'All three forms (+/−/?)', titleRu: 'Все три формы (+/−/?)',
        forms: [
          { type: '+', label: 'Positive', labelRu: 'Утверждение', formula: 'S + am/is/are + ...', examples: ['I am happy.', 'She is a doctor.', 'We are friends.'] },
          { type: '-', label: 'Negative', labelRu: 'Отрицание', formula: 'S + am/is/are + not', examples: ['I am not late. (I\'m not)', 'She is not here. (isn\'t)', 'We are not ready. (aren\'t)'] },
          { type: '?', label: 'Question', labelRu: 'Вопрос', formula: 'Am/Is/Are + S + ...?', examples: ['Am I late?', 'Is she a nurse?', 'Are you from Spain?'] },
        ]
      },

      { type: 'tip', icon: '⚠️', title: '"to be" is special!', titleRu: '«to be» — особый!',
        text: '"to be" does NOT use do/does. Never say "Do you are?" — say "Are you?"',
        textRu: '«to be» НЕ использует do/does. Никогда не говорите «Do you are?» — говорите «Are you?»',
        items: [
          { wrong: 'Do you are a student?', right: 'Are you a student?' },
          { wrong: 'She don\'t is here.', right: 'She isn\'t here.' },
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: 'She ___ a teacher.',
        options: ['am', 'is', 'are'],
        answer: 'is'
      },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: 'We ___ from Russia.',
        options: ['am', 'is', 'are'],
        answer: 'are'
      },

      { type: 'error-correction', title: 'Find and fix the mistakes', titleRu: 'Найдите и исправьте ошибки',
        instruction: 'Each sentence has one mistake. Find the wrong word and correct it.',
        instructionRu: 'В каждом предложении одна ошибка. Найдите неправильное слово и исправьте.',
        items: [
          { sentence: 'I are a student.', errorWord: 'are', correction: 'am' },
          { sentence: 'They is happy.', errorWord: 'is', correction: 'are' },
          { sentence: 'He am from Moscow.', errorWord: 'am', correction: 'is' },
        ]
      },

      { type: 'practice', text: 'Practice "to be" in games', textRu: 'Практика — глагол «to be»', gameId: 'grammar-quiz', topic: 'to-be', buttonText: 'Play Grammar Quiz' },
    ],
  },

  // ═══════════════ 2. THIS / THAT / THESE / THOSE ═══════════════
  {
    id: 'demonstratives',
    title: 'This / That / These / Those',
    titleRu: 'Указательные местоимения',
    icon: '👆',
    slides: [
      { type: 'title', icon: '👆', title: 'This / That / These / Those', titleRu: 'Указательные местоимения', subtitle: 'Point to things near and far', subtitleRu: 'Указываем на предметы рядом и далеко' },

      { type: 'examples', title: 'Discover the pattern', titleRu: 'Найдите закономерность',
        intro: 'Look at these pairs. What is the difference?',
        items: [
          { icon: '👈', english: 'This is my book. (one thing, near me)', russian: 'Это моя книга. (один предмет, рядом)' },
          { icon: '👉', english: 'That is your book. (one thing, far away)', russian: 'То — твоя книга. (один предмет, далеко)' },
          { icon: '👈', english: 'These are my keys. (many things, near me)', russian: 'Это мои ключи. (много предметов, рядом)' },
          { icon: '👉', english: 'Those are your keys. (many things, far away)', russian: 'То — твои ключи. (много предметов, далеко)' },
        ]
      },

      { type: 'concept', title: 'Near vs Far, One vs Many', titleRu: 'Близко vs Далеко, Один vs Много',
        text: 'English has 4 words where Russian mostly uses "это/то". Choose by distance and number.',
        textRu: 'В английском 4 слова там, где в русском обычно «это» или «то». Выбирайте по расстоянию и количеству.',
        visual: '👈 NEAR: this / these · 👉 FAR: that / those'
      },

      { type: 'table', title: 'The 4 demonstratives', titleRu: '4 указательных местоимения',
        rows: [
          { english: 'this', pronunciation: 'ЗИС', russian: 'этот / эта / это (ед.ч., рядом)', note: 'near + singular' },
          { english: 'that', pronunciation: 'ЗЭТ', russian: 'тот / та / то (ед.ч., далеко)', note: 'far + singular' },
          { english: 'these', pronunciation: 'ЗИ́З', russian: 'эти (мн.ч., рядом)', note: 'near + plural' },
          { english: 'those', pronunciation: 'ЗО́УЗ', russian: 'те (мн.ч., далеко)', note: 'far + plural' },
        ]
      },

      { type: 'examples', title: 'In everyday life', titleRu: 'В повседневной жизни',
        intro: 'Notice the verb changes too: this/that IS, these/those ARE.',
        items: [
          { icon: '📱', english: 'This is my phone.', russian: 'Это мой телефон.' },
          { icon: '🏠', english: 'That is my house over there.', russian: 'Вон тот дом — мой.' },
          { icon: '👟', english: 'These shoes are comfortable.', russian: 'Эти туфли удобные.' },
          { icon: '📚', english: 'Those books are expensive.', russian: 'Те книги дорогие.' },
          { icon: '🛒', english: 'How much is this?', russian: 'Сколько это стоит?' },
          { icon: '🛒', english: 'How much are those?', russian: 'Сколько стоят те?' },
        ]
      },

      { type: 'tip', icon: '💡', title: 'On the phone', titleRu: 'По телефону',
        text: 'On the phone, we say "This is Anna" (not "I am Anna"). Use "this" for yourself, "that" for the other person.',
        textRu: 'По телефону говорят «This is Anna» (не «I am Anna»). «This» — для себя, «that» — для собеседника.'
      },

      { type: 'fill-gap', title: 'Choose the correct word', titleRu: 'Выберите правильное слово',
        sentence: '___ is my bag here.',
        options: ['This', 'That', 'These', 'Those'],
        answer: 'This'
      },

      { type: 'fill-gap', title: 'Choose the correct word', titleRu: 'Выберите правильное слово',
        sentence: '___ are my children over there.',
        options: ['This', 'That', 'These', 'Those'],
        answer: 'Those'
      },

      { type: 'practice', text: 'Practice demonstratives', textRu: 'Практика — указательные местоимения', gameId: 'grammar-quiz', topic: 'demonstratives', buttonText: 'Play Grammar Quiz' },
    ],
  },

  // ═══════════════ 3. EVERYDAY PHRASES ═══════════════
  {
    id: 'everyday-phrases',
    title: 'Everyday Phrases',
    titleRu: 'Фразы на каждый день',
    icon: '💬',
    slides: [
      { type: 'title', icon: '💬', title: 'Everyday Phrases', titleRu: 'Фразы на каждый день', subtitle: 'Survive any situation!', subtitleRu: 'Выживите в любой ситуации!' },

      { type: 'concept', title: 'Learn these by heart', titleRu: 'Выучите наизусть',
        text: 'These 8 phrases will save you in almost any situation. If you learn nothing else today — learn these!',
        textRu: 'Эти 8 фраз спасут вас почти в любой ситуации. Если сегодня выучите только одно — выучите их!',
        visual: '🆘 → 💬 → 😊'
      },

      { type: 'vocab', title: 'When you don\'t understand', titleRu: 'Когда не понимаете',
        items: [
          { icon: '🤷', english: 'I don\'t understand.', pronunciation: 'ай до́унт ан-дэр-СТЭ́НД', russian: 'Я не понимаю.' },
          { icon: '🔄', english: 'Can you repeat, please?', pronunciation: 'кэн ю ри-ПИ́Т, плиз?', russian: 'Повторите, пожалуйста.' },
          { icon: '🐢', english: 'Can you speak slowly?', pronunciation: 'кэн ю спик СЛО́У-ли?', russian: 'Говорите медленнее.' },
          { icon: '🇬🇧', english: 'How do you say ___ in English?', pronunciation: 'ха́у ду ю сэй ___ ин И́Н-глиш?', russian: 'Как сказать ___ по-английски?' },
          { icon: '📖', english: 'What does ___ mean?', pronunciation: 'уо́т даз ___ мин?', russian: 'Что значит ___?' },
        ]
      },

      { type: 'vocab', title: 'Polite phrases', titleRu: 'Вежливые фразы',
        items: [
          { icon: '😅', english: 'Sorry, I\'m late.', pronunciation: 'СО́-ри, айм лэйт', russian: 'Простите, я опоздал(а).' },
          { icon: '☀️', english: 'Have a good day!', pronunciation: 'хэв э гуд дэй!', russian: 'Хорошего дня!' },
          { icon: '💰', english: 'How much does it cost?', pronunciation: 'ха́у мач даз ит кост?', russian: 'Сколько это стоит?' },
        ]
      },

      { type: 'dialogue', title: 'Using these phrases', titleRu: 'Используем фразы',
        context: 'At a shop',
        lines: [
          { speaker: 'Shop', text: 'Can I help you?', russian: 'Могу я вам помочь?' },
          { speaker: 'You', text: 'How much does it cost?', russian: 'Сколько это стоит?' },
          { speaker: 'Shop', text: 'It\'s fifteen pounds.', russian: 'Пятнадцать фунтов.' },
          { speaker: 'You', text: 'Sorry, can you repeat, please?', russian: 'Извините, повторите, пожалуйста?' },
          { speaker: 'Shop', text: 'Fifteen pounds.', russian: 'Пятнадцать фунтов.' },
          { speaker: 'You', text: 'Thank you!', russian: 'Спасибо!' },
        ]
      },

      { type: 'fill-gap', title: 'Choose the right phrase', titleRu: 'Выберите правильную фразу',
        sentence: 'You don\'t understand someone. You say: "___"',
        options: ['I don\'t understand.', 'How much does it cost?', 'Have a good day!'],
        answer: 'I don\'t understand.'
      },

      { type: 'fill-gap', title: 'Choose the right phrase', titleRu: 'Выберите правильную фразу',
        sentence: 'Someone speaks too fast. You say: "___"',
        options: ['Sorry, I\'m late.', 'Can you speak slowly?', 'What does it mean?'],
        answer: 'Can you speak slowly?'
      },

      { type: 'practice', text: 'Practice everyday phrases', textRu: 'Практика — фразы на каждый день', gameId: 'vocabulary', buttonText: 'Play Vocabulary Game' },
    ],
  },

  // ═══════════════ 4. JOBS & ARTICLES (a/an) ═══════════════
  {
    id: 'jobs',
    title: 'Jobs & Articles (a/an)',
    titleRu: 'Профессии и артикли (a/an)',
    icon: '💼',
    slides: [
      { type: 'title', icon: '💼', title: 'Jobs & Articles (a/an)', titleRu: 'Профессии и артикли (a/an)', subtitle: 'Talk about what you do', subtitleRu: 'Говорим о работе' },

      { type: 'vocab', title: 'Common jobs', titleRu: 'Распространённые профессии',
        items: [
          { icon: '👨‍⚕️', english: 'doctor', pronunciation: 'ДО́К-тэр', russian: 'врач' },
          { icon: '👩‍🏫', english: 'teacher', pronunciation: 'ТИ́-чэр', russian: 'учитель' },
          { icon: '👷', english: 'engineer', pronunciation: 'эн-джи-НИ́Р', russian: 'инженер' },
          { icon: '🎓', english: 'student', pronunciation: 'СТЬЮ́-дэнт', russian: 'студент' },
          { icon: '🚗', english: 'driver', pronunciation: 'ДРА́Й-вэр', russian: 'водитель' },
          { icon: '👨‍🍳', english: 'cook', pronunciation: 'ку́к', russian: 'повар' },
          { icon: '👩‍⚕️', english: 'nurse', pronunciation: 'нёрс', russian: 'медсестра' },
          { icon: '👔', english: 'manager', pronunciation: 'МЭ́-ни-джэр', russian: 'менеджер' },
          { icon: '⚖️', english: 'lawyer', pronunciation: 'ЛО́-йэр', russian: 'юрист' },
          { icon: '💻', english: 'programmer', pronunciation: 'ПРО́-грэ-мэр', russian: 'программист' },
          { icon: '🎨', english: 'artist', pronunciation: 'А́Р-тист', russian: 'художник' },
          { icon: '📰', english: 'journalist', pronunciation: 'ДЖЁ́Р-нэ-лист', russian: 'журналист' },
        ]
      },

      { type: 'concept', title: 'Asking about jobs', titleRu: 'Спрашиваем о работе',
        text: 'The question "What do you do?" means "What is your job?" — not "What are you doing right now?"',
        textRu: 'Вопрос «What do you do?» означает «Кем вы работаете?» — а не «Что вы сейчас делаете?»',
        examples: [
          { icon: '❓', english: 'What do you do?', russian: 'Кем вы работаете?' },
          { icon: '🗣️', english: 'I am a doctor.', russian: 'Я врач.' },
          { icon: '🗣️', english: 'I am an engineer.', russian: 'Я инженер.' },
        ]
      },

      { type: 'rule', title: '"a" vs "an"', titleRu: '«a» или «an»',
        formula: 'a + consonant SOUND · an + vowel SOUND',
        explanation: 'Use "a" before consonant sounds and "an" before vowel sounds.',
        explanationRu: 'Используйте «a» перед согласным звуком и «an» перед гласным звуком.',
        rows: [
          { subject: 'a', verb: 'doctor, teacher, nurse, cook', example: 'consonant sound' },
          { subject: 'an', verb: 'engineer, artist, accountant', example: 'vowel sound (a, e, i, o, u)' },
        ],
        warning: 'It\'s about the SOUND, not the letter! "a university" (starts with "yoo" sound)',
        warningRu: 'Важен ЗВУК, а не буква! «a university» (начинается со звука «йу»)'
      },

      { type: 'dialogue', title: 'Example dialogue', titleRu: 'Пример диалога',
        context: 'Two people talking about their jobs',
        lines: [
          { speaker: 'A', text: 'What do you do?', russian: 'Кем вы работаете?' },
          { speaker: 'B', text: 'I\'m a programmer. I work at Yandex.', russian: 'Я программист. Работаю в Яндексе.' },
          { speaker: 'A', text: 'Oh, nice! Where is your office?', russian: 'О, здорово! Где ваш офис?' },
          { speaker: 'B', text: 'I work from home, actually!', russian: 'Я работаю из дома, на самом деле!' },
        ]
      },

      { type: 'fill-gap', title: 'Choose a or an', titleRu: 'Выберите a или an',
        sentence: 'She is ___ artist.',
        options: ['a', 'an'],
        answer: 'an'
      },

      { type: 'fill-gap', title: 'Choose a or an', titleRu: 'Выберите a или an',
        sentence: 'He is ___ doctor.',
        options: ['a', 'an'],
        answer: 'a'
      },

      { type: 'practice', text: 'Practice jobs vocabulary', textRu: 'Практика — профессии', gameId: 'vocabulary', buttonText: 'Play Vocabulary Game' },
    ],
  },

  // ═══════════════ 5. POSSESSIVE ADJECTIVES ═══════════════
  {
    id: 'possessive-adjectives',
    title: 'Possessive Adjectives',
    titleRu: 'Притяжательные прилагательные',
    icon: '🏷️',
    slides: [
      { type: 'title', icon: '🏷️', title: 'Possessive Adjectives', titleRu: 'Притяжательные прилагательные', subtitle: 'my, your, his, her, its, our, their', subtitleRu: 'мой, твой, его, её, его/её, наш, их' },

      { type: 'examples', title: 'Discover the pattern', titleRu: 'Найдите закономерность',
        intro: 'Look at how we show who something belongs to:',
        items: [
          { icon: '👤', english: 'I am Anna. My name is Anna.', russian: 'Я Анна. Моё имя — Анна.' },
          { icon: '👤', english: 'You are a student. Your bag is blue.', russian: 'Ты студент. Твоя сумка синяя.' },
          { icon: '👨', english: 'He is Ivan. His car is new.', russian: 'Он Иван. Его машина новая.' },
          { icon: '👩', english: 'She is Masha. Her phone is red.', russian: 'Она Маша. Её телефон красный.' },
          { icon: '👫', english: 'We are students. Our teacher is kind.', russian: 'Мы студенты. Наш учитель добрый.' },
          { icon: '👥', english: 'They are friends. Their house is big.', russian: 'Они друзья. Их дом большой.' },
        ]
      },

      { type: 'table', title: 'Subject pronouns → Possessive adjectives', titleRu: 'Личные местоимения → Притяжательные',
        rows: [
          { english: 'I → my', pronunciation: 'ай → май', russian: 'я → мой', note: 'my name' },
          { english: 'you → your', pronunciation: 'ю → ёр', russian: 'ты/вы → твой/ваш', note: 'your book' },
          { english: 'he → his', pronunciation: 'хи → хиз', russian: 'он → его', note: 'his car' },
          { english: 'she → her', pronunciation: 'ши → хёр', russian: 'она → её', note: 'her bag' },
          { english: 'it → its', pronunciation: 'ит → итс', russian: 'оно → его/её', note: 'its name' },
          { english: 'we → our', pronunciation: 'уи → а́у-эр', russian: 'мы → наш', note: 'our house' },
          { english: 'they → their', pronunciation: 'зэй → зэр', russian: 'они → их', note: 'their children' },
        ]
      },

      { type: 'tip', icon: '⚠️', title: 'Common mistakes', titleRu: 'Частые ошибки',
        text: 'Don\'t confuse "its" (possessive) with "it\'s" (= it is). And never say "he book" instead of "his book"!',
        textRu: 'Не путайте «its» (притяжательное) и «it\'s» (= it is). И не говорите «he book» вместо «his book»!',
        items: [
          { wrong: 'He name is Ivan.', right: 'His name is Ivan.' },
          { wrong: 'She bag is red.', right: 'Her bag is red.' },
        ]
      },

      { type: 'examples', title: 'In context', titleRu: 'В контексте',
        items: [
          { icon: '📛', english: 'What is your name? — My name is Olga.', russian: 'Как вас зовут? — Меня зовут Ольга.' },
          { icon: '📱', english: 'Is this your phone? — No, it\'s her phone.', russian: 'Это твой телефон? — Нет, это её телефон.' },
          { icon: '🏠', english: 'Their house is near our school.', russian: 'Их дом рядом с нашей школой.' },
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct word', titleRu: 'Выберите правильное слово',
        sentence: 'She is a teacher. ___ students are young.',
        options: ['His', 'Her', 'Its'],
        answer: 'Her'
      },

      { type: 'fill-gap', title: 'Choose the correct word', titleRu: 'Выберите правильное слово',
        sentence: 'We live in Moscow. ___ flat is small.',
        options: ['My', 'Our', 'Their'],
        answer: 'Our'
      },

      { type: 'vocab-match', title: 'Match pronoun to possessive', titleRu: 'Соедините местоимение и притяжательное',
        pairs: [
          { english: 'I', russian: 'my' },
          { english: 'he', russian: 'his' },
          { english: 'she', russian: 'her' },
          { english: 'we', russian: 'our' },
          { english: 'they', russian: 'their' },
        ]
      },

      { type: 'practice', text: 'Practice possessive adjectives', textRu: 'Практика — притяжательные', gameId: 'grammar-quiz', topic: 'possessives', buttonText: 'Play Grammar Quiz' },
    ],
  },

  // ═══════════════ 6. OBJECT PRONOUNS ═══════════════
  {
    id: 'object-pronouns',
    title: 'Object Pronouns',
    titleRu: 'Объектные местоимения',
    icon: '🎯',
    slides: [
      { type: 'title', icon: '🎯', title: 'Object Pronouns', titleRu: 'Объектные местоимения', subtitle: 'me, you, him, her, it, us, them', subtitleRu: 'меня, тебя, его, её, его/её, нас, их' },

      { type: 'examples', title: 'Discover the pattern', titleRu: 'Найдите закономерность',
        intro: 'Subject pronouns go BEFORE the verb. Object pronouns go AFTER:',
        items: [
          { icon: '👤', english: 'I love her. She loves me.', russian: 'Я люблю её. Она любит меня.' },
          { icon: '👨', english: 'He helps us. We help him.', russian: 'Он помогает нам. Мы помогаем ему.' },
          { icon: '👥', english: 'They know you. You know them.', russian: 'Они знают тебя. Ты знаешь их.' },
        ]
      },

      { type: 'comparison', title: 'Subject vs Object', titleRu: 'Субъектные vs Объектные',
        left: {
          title: 'Subject (before verb)',
          titleRu: 'Субъектные (перед глаголом)',
          examples: ['I work.', 'You study.', 'He drives.', 'She cooks.', 'It works.', 'We play.', 'They sing.']
        },
        right: {
          title: 'Object (after verb)',
          titleRu: 'Объектные (после глагола)',
          examples: ['Help me.', 'I see you.', 'Call him.', 'Ask her.', 'Take it.', 'Join us.', 'Tell them.']
        }
      },

      { type: 'table', title: 'All object pronouns', titleRu: 'Все объектные местоимения',
        rows: [
          { english: 'I → me', pronunciation: 'ай → ми', russian: 'я → меня/мне', note: 'Help me!' },
          { english: 'you → you', pronunciation: 'ю → ю', russian: 'ты → тебя/тебе', note: 'I love you.' },
          { english: 'he → him', pronunciation: 'хи → хим', russian: 'он → его/ему', note: 'Call him.' },
          { english: 'she → her', pronunciation: 'ши → хёр', russian: 'она → её/ей', note: 'Ask her.' },
          { english: 'it → it', pronunciation: 'ит → ит', russian: 'оно → его/ему', note: 'Take it.' },
          { english: 'we → us', pronunciation: 'уи → ас', russian: 'мы → нас/нам', note: 'Join us.' },
          { english: 'they → them', pronunciation: 'зэй → зэм', russian: 'они → их/им', note: 'Tell them.' },
        ]
      },

      { type: 'examples', title: 'In everyday speech', titleRu: 'В повседневной речи',
        items: [
          { icon: '📞', english: 'Call me later.', russian: 'Позвони мне позже.' },
          { icon: '📧', english: 'I\'ll email them.', russian: 'Я отправлю им имейл.' },
          { icon: '🎁', english: 'This present is for her.', russian: 'Этот подарок для неё.' },
          { icon: '🤝', english: 'Can you help us?', russian: 'Вы можете нам помочь?' },
          { icon: '❤️', english: 'I love you.', russian: 'Я люблю тебя.' },
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct pronoun', titleRu: 'Выберите правильное местоимение',
        sentence: 'I don\'t know ___. Who is she?',
        options: ['she', 'her', 'him'],
        answer: 'her'
      },

      { type: 'fill-gap', title: 'Choose the correct pronoun', titleRu: 'Выберите правильное местоимение',
        sentence: 'We need help. Can you help ___?',
        options: ['we', 'us', 'them'],
        answer: 'us'
      },

      { type: 'vocab-match', title: 'Match subject to object', titleRu: 'Соедините субъектное с объектным',
        pairs: [
          { english: 'I', russian: 'me' },
          { english: 'he', russian: 'him' },
          { english: 'she', russian: 'her' },
          { english: 'we', russian: 'us' },
          { english: 'they', russian: 'them' },
        ]
      },

      { type: 'practice', text: 'Practice object pronouns', textRu: 'Практика — объектные местоимения', gameId: 'grammar-quiz', topic: 'object-pronouns', buttonText: 'Play Grammar Quiz' },
    ],
  },

  // ═══════════════ 7. PRESENT SIMPLE ═══════════════
  {
    id: 'present-simple',
    title: 'Present Simple',
    titleRu: 'Простое настоящее время',
    icon: '🔄',
    slides: [
      { type: 'title', icon: '🔄', title: 'Present Simple', titleRu: 'Простое настоящее время', subtitle: 'Habits, routines & facts', subtitleRu: 'Привычки, распорядок и факты' },

      { type: 'examples', title: 'Discover the pattern', titleRu: 'Найдите закономерность',
        intro: 'Look at these sentences. What happens to the verb with he/she?',
        items: [
          { icon: '👤', english: 'I work every day.', russian: 'Я работаю каждый день.' },
          { icon: '👥', english: 'They live in Moscow.', russian: 'Они живут в Москве.' },
          { icon: '👩', english: 'She works every day.', russian: 'Она работает каждый день.' },
          { icon: '👨', english: 'He lives in Moscow.', russian: 'Он живёт в Москве.' },
          { icon: '👤', english: 'I drink coffee.', russian: 'Я пью кофе.' },
          { icon: '👩', english: 'She drinks coffee.', russian: 'Она пьёт кофе.' },
        ]
      },

      { type: 'concept', title: 'When to use Present Simple', titleRu: 'Когда использовать',
        text: 'Use Present Simple for things that happen regularly, are always true, or are permanent.',
        textRu: 'Используйте Present Simple для того, что происходит регулярно, всегда верно или постоянно.',
        examples: [
          { icon: '🔁', english: 'I wake up at 7. (routine)', russian: 'Я просыпаюсь в 7. (распорядок)' },
          { icon: '🌍', english: 'Water boils at 100°C. (fact)', russian: 'Вода кипит при 100°C. (факт)' },
          { icon: '🏠', english: 'She lives in Moscow. (permanent)', russian: 'Она живёт в Москве. (постоянно)' },
        ]
      },

      { type: 'rule', title: 'The big rule: he/she/it + S', titleRu: 'Главное правило: he/she/it + S',
        formula: 'I / you / we / they → verb · He / she / it → verb + S',
        explanation: 'With I/you/we/they the verb doesn\'t change. With he/she/it — always add -s!',
        explanationRu: 'С I/you/we/they глагол не меняется. С he/she/it — всегда добавляем -s!',
        rows: [
          { subject: 'I / You', verb: 'work', example: 'I work every day.' },
          { subject: 'We / They', verb: 'live', example: 'They live in London.' },
          { subject: 'He / She', verb: 'works', example: 'She works at a bank.' },
          { subject: 'He / She', verb: 'lives', example: 'He lives in Moscow.' },
        ],
        warning: 'Do NOT forget the -s with he/she/it!',
        warningRu: 'НЕ забывайте -s с he/she/it!'
      },

      { type: 'structure', title: 'Negative & Questions', titleRu: 'Отрицание и Вопросы',
        forms: [
          { type: '+', label: 'Positive', labelRu: 'Утверждение', formula: 'S + verb(s)', examples: ['I work.', 'She works.', 'They live here.'] },
          { type: '-', label: 'Negative', labelRu: 'Отрицание', formula: 'S + don\'t/doesn\'t + verb', examples: ['I don\'t work on Sunday.', 'She doesn\'t smoke.', 'They don\'t live here.'] },
          { type: '?', label: 'Question', labelRu: 'Вопрос', formula: 'Do/Does + S + verb?', examples: ['Do you work? — Yes, I do.', 'Does she smoke? — No, she doesn\'t.'] },
        ]
      },

      { type: 'tip', icon: '⚠️', title: 'After doesn\'t — no S!', titleRu: 'После doesn\'t — без S!',
        text: 'The -s moves to "doesn\'t". The main verb stays plain!',
        textRu: 'Окончание -s переходит к «doesn\'t». Основной глагол остаётся без изменений!',
        items: [
          { wrong: 'She doesn\'t works.', right: 'She doesn\'t work.' },
          { wrong: 'Does she works?', right: 'Does she work?' },
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: 'He ___ coffee every morning.',
        options: ['drink', 'drinks', 'drinking'],
        answer: 'drinks'
      },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: 'She doesn\'t ___ English.',
        options: ['speaks', 'speak', 'speaking'],
        answer: 'speak'
      },

      { type: 'error-correction', title: 'Find and fix the mistakes', titleRu: 'Найдите и исправьте ошибки',
        instruction: 'Each sentence has one mistake. Find the wrong word and correct it.',
        instructionRu: 'В каждом предложении одна ошибка. Найдите неправильное слово и исправьте.',
        items: [
          { sentence: 'She drink coffee every morning.', errorWord: 'drink', correction: 'drinks' },
          { sentence: 'He don\'t like fish.', errorWord: 'don\'t', correction: 'doesn\'t' },
          { sentence: 'Does she likes tea?', errorWord: 'likes', correction: 'like' },
        ]
      },

      { type: 'practice', text: 'Practice Present Simple', textRu: 'Практика — Present Simple', gameId: 'verb-builder', topic: 'present-simple', buttonText: 'Play Verb Builder' },
    ],
  },

  // ═══════════════ 8. ADVERBS OF FREQUENCY ═══════════════
  {
    id: 'frequency',
    title: 'Adverbs of Frequency',
    titleRu: 'Наречия частотности',
    icon: '📊',
    slides: [
      { type: 'title', icon: '📊', title: 'How Often?', titleRu: 'Как часто?', subtitle: 'Frequency adverbs', subtitleRu: 'Наречия частотности' },

      { type: 'frequency', title: 'The frequency scale', titleRu: 'Шкала частотности',
        items: [
          { percent: 100, english: 'always', pronunciation: 'О́Л-уэйз', russian: 'всегда' },
          { percent: 80, english: 'usually', pronunciation: 'Ю́-жу-э-ли', russian: 'обычно' },
          { percent: 60, english: 'often', pronunciation: 'О́-фн', russian: 'часто' },
          { percent: 40, english: 'sometimes', pronunciation: 'СА́М-таймз', russian: 'иногда' },
          { percent: 10, english: 'rarely / seldom', pronunciation: 'РЭ́ЭР-ли', russian: 'редко' },
          { percent: 0, english: 'never', pronunciation: 'НЭ́-вэр', russian: 'никогда' },
        ]
      },

      { type: 'rule', title: 'Word order', titleRu: 'Порядок слов',
        formula: 'Subject + ADVERB + verb',
        explanation: 'The frequency adverb goes BEFORE the main verb but AFTER "to be":',
        explanationRu: 'Наречие частотности ставится ПЕРЕД основным глаголом, но ПОСЛЕ «to be»:',
        rows: [
          { subject: 'Before verb', verb: 'I always drink coffee.', example: 'S + adverb + verb' },
          { subject: 'Before verb', verb: 'She never smokes.', example: 'S + adverb + verb' },
          { subject: 'After "to be"', verb: 'I am always happy.', example: 'S + am/is/are + adverb' },
          { subject: 'After "to be"', verb: 'She is never late.', example: 'S + am/is/are + adverb' },
        ]
      },

      { type: 'tip', icon: '⚠️', title: '"never" = already negative', titleRu: '«never» = уже отрицание',
        text: '"never" already means "not ever" — don\'t add "don\'t"!',
        textRu: '«never» уже означает «не когда-либо» — не добавляйте «don\'t»!',
        items: [
          { wrong: 'I don\'t never smoke.', right: 'I never smoke.' },
          { wrong: 'She doesn\'t never eat meat.', right: 'She never eats meat.' },
        ]
      },

      { type: 'examples', title: 'Examples', titleRu: 'Примеры',
        items: [
          { icon: '☕', english: 'I always drink coffee in the morning.', russian: 'Я всегда пью кофе утром.' },
          { icon: '🏋️', english: 'She usually goes to the gym.', russian: 'Она обычно ходит в зал.' },
          { icon: '🍕', english: 'We sometimes order pizza.', russian: 'Мы иногда заказываем пиццу.' },
          { icon: '🚬', english: 'He never smokes.', russian: 'Он никогда не курит.' },
          { icon: '⏰', english: 'I am rarely late.', russian: 'Я редко опаздываю.' },
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct position', titleRu: 'Выберите правильный порядок',
        sentence: 'She ___ goes to the gym on Monday.',
        options: ['always', 'goes always', 'always she'],
        answer: 'always'
      },

      { type: 'fill-gap', title: 'Choose the correct sentence', titleRu: 'Выберите правильное предложение',
        sentence: 'Which sentence is correct?',
        options: ['He is often tired.', 'He often is tired.', 'Often he is tired.'],
        answer: 'He is often tired.'
      },

      { type: 'practice', text: 'Practice frequency adverbs', textRu: 'Практика — наречия частотности', gameId: 'grammar-quiz', topic: 'frequency', buttonText: 'Play Grammar Quiz' },
    ],
  },

  // ═══════════════ 9. DAILY ROUTINE & TIME ═══════════════
  {
    id: 'daily-routine',
    title: 'Daily Routine & Time',
    titleRu: 'Распорядок дня и время',
    icon: '☀️',
    slides: [
      { type: 'title', icon: '☀️', title: 'Daily Routine & Time', titleRu: 'Распорядок дня и время', subtitle: 'Describe your day from morning to night', subtitleRu: 'Описываем день от утра до ночи' },

      { type: 'vocab', title: 'Morning routine', titleRu: 'Утренний распорядок',
        items: [
          { icon: '⏰', english: 'wake up', pronunciation: 'уэйк ап', russian: 'просыпаться' },
          { icon: '🛏️', english: 'get up', pronunciation: 'гэт ап', russian: 'вставать' },
          { icon: '🚿', english: 'take a shower', pronunciation: 'тэйк э ША́У-эр', russian: 'принимать душ' },
          { icon: '🪥', english: 'brush teeth', pronunciation: 'браш ти́ф', russian: 'чистить зубы' },
          { icon: '👔', english: 'get dressed', pronunciation: 'гэт дрэст', russian: 'одеваться' },
          { icon: '🍳', english: 'have breakfast', pronunciation: 'хэв БРЭ́К-фэст', russian: 'завтракать' },
          { icon: '🚌', english: 'go to work', pronunciation: 'гоу ту уёрк', russian: 'идти на работу' },
        ]
      },

      { type: 'vocab', title: 'Afternoon & evening', titleRu: 'День и вечер',
        items: [
          { icon: '💼', english: 'start work', pronunciation: 'старт уёрк', russian: 'начинать работу' },
          { icon: '🥗', english: 'have lunch', pronunciation: 'хэв ланч', russian: 'обедать' },
          { icon: '🏁', english: 'finish work', pronunciation: 'ФИ́-ниш уёрк', russian: 'заканчивать работу' },
          { icon: '🏠', english: 'come home', pronunciation: 'кам хо́ум', russian: 'приходить домой' },
          { icon: '🍽️', english: 'have dinner', pronunciation: 'хэв ДИ́-нэр', russian: 'ужинать' },
          { icon: '📺', english: 'watch TV', pronunciation: 'уотч ти-ви', russian: 'смотреть ТВ' },
          { icon: '😴', english: 'go to bed', pronunciation: 'гоу ту бэд', russian: 'идти спать' },
        ]
      },

      { type: 'concept', title: 'Telling time: at / in / on', titleRu: 'Предлоги времени: at / in / on',
        text: 'Use "at" for clock times, "in" for parts of the day, and "on" for days of the week.',
        textRu: 'Используйте «at» для часов, «in» для частей дня, «on» для дней недели.',
        examples: [
          { icon: '🕐', english: 'at 7 o\'clock / at noon / at night', russian: 'в 7 часов / в полдень / ночью' },
          { icon: '☀️', english: 'in the morning / in the afternoon', russian: 'утром / днём' },
          { icon: '📅', english: 'on Monday / on weekends', russian: 'в понедельник / по выходным' },
        ]
      },

      { type: 'tip', icon: '💡', title: '"have" for meals', titleRu: '«have» для приёмов пищи',
        text: '"have" appears 3 times: have breakfast / have lunch / have dinner. Learn them as set phrases! Also note: "at night" (not "in the night") is an exception.',
        textRu: '«have» встречается 3 раза: have breakfast / have lunch / have dinner. Учите как устойчивые выражения! Также: «at night» (не «in the night») — это исключение.'
      },

      { type: 'reading', title: 'A day in Maria\'s life', titleRu: 'День из жизни Марии',
        text: '<p><b>Maria</b> is a teacher. She <b>wakes up</b> at 6:30 <b>in the morning</b>. She <b>takes a shower</b> and <b>gets dressed</b>. Then she <b>has breakfast</b> — usually coffee and toast.</p><p>She <b>goes to work</b> at 8 o\'clock. She <b>starts work</b> at 8:30. She teaches English to children. She <b>has lunch</b> at 1 o\'clock <b>in the afternoon</b>.</p><p>Maria <b>finishes work</b> at 4 and <b>comes home</b> at 5. <b>In the evening</b>, she <b>has dinner</b> with her family. After dinner, she <b>reads a book</b> or <b>watches TV</b>. She <b>goes to bed</b> at 11 <b>at night</b>.</p>',
        vocabWords: [
          { word: 'wakes up', meaning: 'stops sleeping', meaningRu: 'просыпается' },
          { word: 'takes a shower', meaning: 'washes in the shower', meaningRu: 'принимает душ' },
          { word: 'has breakfast', meaning: 'eats morning meal', meaningRu: 'завтракает' },
          { word: 'in the morning', meaning: 'morning time', meaningRu: 'утром' },
          { word: 'in the afternoon', meaning: 'afternoon time', meaningRu: 'днём' },
          { word: 'in the evening', meaning: 'evening time', meaningRu: 'вечером' },
          { word: 'at night', meaning: 'night time', meaningRu: 'ночью' },
        ]
      },

      { type: 'comprehension', title: 'Check your understanding', titleRu: 'Проверьте понимание',
        questions: [
          { question: 'Maria wakes up at 7 o\'clock.', questionRu: 'Мария просыпается в 7 часов.', options: ['True', 'False'], answer: 'False' },
          { question: 'She has lunch at 1 o\'clock.', questionRu: 'Она обедает в час.', options: ['True', 'False'], answer: 'True' },
          { question: 'What does Maria do in the evening?', questionRu: 'Что Мария делает вечером?', options: ['She goes to the gym.', 'She has dinner with her family.', 'She goes shopping.'], answer: 'She has dinner with her family.' },
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct preposition', titleRu: 'Выберите правильный предлог',
        sentence: 'I wake up ___ 7 o\'clock.',
        options: ['at', 'in', 'on'],
        answer: 'at'
      },

      { type: 'practice', text: 'Practice daily routine & time', textRu: 'Практика — распорядок дня и время', gameId: 'vocabulary', buttonText: 'Play Vocabulary Game' },
    ],
  },

  // ═══════════════ 10. QUESTION WORDS ═══════════════
  {
    id: 'question-words',
    title: 'Question Words',
    titleRu: 'Вопросительные слова',
    icon: '❓',
    slides: [
      { type: 'title', icon: '❓', title: 'Question Words', titleRu: 'Вопросительные слова', subtitle: 'Ask the right questions', subtitleRu: 'Задаём правильные вопросы' },

      { type: 'vocab', title: 'The 10 question words', titleRu: '10 вопросительных слов',
        items: [
          { icon: '👤', english: 'Who', pronunciation: 'ху́', russian: 'кто' },
          { icon: '📦', english: 'What', pronunciation: 'уо́т', russian: 'что / какой' },
          { icon: '📍', english: 'Where', pronunciation: 'уэ́р', russian: 'где / куда' },
          { icon: '📅', english: 'When', pronunciation: 'уэ́н', russian: 'когда' },
          { icon: '🤔', english: 'Why', pronunciation: 'уа́й', russian: 'почему' },
          { icon: '🔧', english: 'How', pronunciation: 'ха́у', russian: 'как' },
          { icon: '🔢', english: 'How old', pronunciation: 'ха́у о́лд', russian: 'сколько лет' },
          { icon: '🔢', english: 'How many', pronunciation: 'ха́у МЭ́-ни', russian: 'сколько (штук)' },
          { icon: '💰', english: 'How much', pronunciation: 'ха́у мач', russian: 'сколько (цена)' },
          { icon: '👆', english: 'Which', pronunciation: 'уи́ч', russian: 'который / какой' },
        ]
      },

      { type: 'rule', title: 'Question structure', titleRu: 'Структура вопроса',
        formula: 'Question word + auxiliary + subject + verb?',
        explanation: 'Word order in English questions is FIXED — not flexible like Russian.',
        explanationRu: 'Порядок слов в английских вопросах ФИКСИРОВАННЫЙ — не свободный как в русском.',
        rows: [
          { subject: 'With "to be"', verb: 'QW + am/is/are + S', example: 'Where are you from?' },
          { subject: 'With "do"', verb: 'QW + do/does + S + V', example: 'Where do you live?' },
          { subject: 'With "can"', verb: 'QW + can + S + V', example: 'How can I help you?' },
        ]
      },

      { type: 'examples', title: 'Questions with "to be"', titleRu: 'Вопросы с «to be»',
        items: [
          { icon: '👤', english: 'Who is she? — She\'s my sister.', russian: 'Кто она? — Моя сестра.' },
          { icon: '📛', english: 'What is your name? — I\'m Anton.', russian: 'Как вас зовут? — Антон.' },
          { icon: '📍', english: 'Where are you from? — I\'m from Russia.', russian: 'Откуда вы? — Из России.' },
          { icon: '📅', english: 'When is the lesson? — At 6 o\'clock.', russian: 'Когда урок? — В 6 часов.' },
          { icon: '🤔', english: 'Why is he late? — Because of traffic.', russian: 'Почему он опоздал? — Из-за пробок.' },
        ]
      },

      { type: 'examples', title: 'Questions with "do/does"', titleRu: 'Вопросы с «do/does»',
        items: [
          { icon: '💼', english: 'What do you do? — I\'m a teacher.', russian: 'Кем вы работаете? — Учитель.' },
          { icon: '📍', english: 'Where does she live? — In Moscow.', russian: 'Где она живёт? — В Москве.' },
          { icon: '📅', english: 'When do you start work? — At 9.', russian: 'Когда вы начинаете работу? — В 9.' },
          { icon: '🤔', english: 'Why do they study English? — For work.', russian: 'Почему они учат английский? — Для работы.' },
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct question word', titleRu: 'Выберите правильное вопросительное слово',
        sentence: '___ do you live? — In Moscow.',
        options: ['What', 'Where', 'When'],
        answer: 'Where'
      },

      { type: 'fill-gap', title: 'Choose the correct question word', titleRu: 'Выберите правильное вопросительное слово',
        sentence: '___ is your name? — My name is Anton.',
        options: ['Who', 'What', 'Where'],
        answer: 'What'
      },

      { type: 'practice', text: 'Practice question words', textRu: 'Практика — вопросительные слова', gameId: 'grammar-quiz', topic: 'question-words', buttonText: 'Play Grammar Quiz' },
    ],
  },

  // ═══════════════ 11. HAVE GOT / HAS GOT ═══════════════
  {
    id: 'have-got',
    title: 'Have Got / Has Got',
    titleRu: 'У меня есть',
    icon: '🎒',
    slides: [
      { type: 'title', icon: '🎒', title: 'Have Got / Has Got', titleRu: 'У меня есть', subtitle: 'Talk about what you have', subtitleRu: 'Говорим о том, что у вас есть' },

      { type: 'concept', title: 'Russian vs English', titleRu: 'Русский vs Английский',
        text: 'In Russian: "У меня есть" (I have at-me). In English: the person is the subject: "I have got."',
        textRu: 'В русском: «У меня есть» — в английском: человек становится подлежащим: «I have got.»',
        examples: [
          { icon: '🇷🇺', english: 'У меня есть машина.', russian: '"At me there-is car"' },
          { icon: '🇬🇧', english: 'I have got a car. / I\'ve got a car.', russian: 'Я имею машину.' },
        ]
      },

      { type: 'rule', title: 'have got / has got', titleRu: 'have got / has got',
        formula: 'I/You/We/They → have got · He/She/It → has got',
        rows: [
          { subject: 'I', verb: 'have got (\'ve got)', example: 'I\'ve got a car.' },
          { subject: 'You', verb: 'have got (\'ve got)', example: 'You\'ve got a nice bag.' },
          { subject: 'He/She', verb: 'has got (\'s got)', example: 'She\'s got blue eyes.' },
          { subject: 'We/They', verb: 'have got (\'ve got)', example: 'We\'ve got two children.' },
        ]
      },

      { type: 'structure', title: 'All forms (+/−/?)', titleRu: 'Все формы (+/−/?)',
        forms: [
          { type: '+', label: 'Positive', labelRu: 'Утверждение', formula: 'S + have/has got', examples: ['I\'ve got a dog.', 'She\'s got long hair.'] },
          { type: '-', label: 'Negative', labelRu: 'Отрицание', formula: 'S + haven\'t/hasn\'t got', examples: ['I haven\'t got a car.', 'She hasn\'t got a pet.'] },
          { type: '?', label: 'Question', labelRu: 'Вопрос', formula: 'Have/Has + S + got?', examples: ['Have you got a pen?', 'Has she got children?'] },
        ]
      },

      { type: 'examples', title: 'Short answers', titleRu: 'Краткие ответы',
        items: [
          { icon: '✅', english: 'Have you got a car? — Yes, I have.', russian: 'У тебя есть машина? — Да.' },
          { icon: '❌', english: 'Has she got a pet? — No, she hasn\'t.', russian: 'У неё есть питомец? — Нет.' },
          { icon: '✅', english: 'Have they got children? — Yes, they have.', russian: 'У них есть дети? — Да.' },
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: 'She ___ got blue eyes.',
        options: ['have', 'has', 'is'],
        answer: 'has'
      },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: '___ you got a brother?',
        options: ['Have', 'Has', 'Do'],
        answer: 'Have'
      },

      { type: 'practice', text: 'Practice Have Got', textRu: 'Практика — Have Got', gameId: 'grammar-quiz', topic: 'have-got', buttonText: 'Play Grammar Quiz' },
    ],
  },

  // ═══════════════ 12. SOME & ANY ═══════════════
  {
    id: 'some-any',
    title: 'Some & Any',
    titleRu: 'Some и Any',
    icon: '🔢',
    slides: [
      { type: 'title', icon: '🔢', title: 'Some & Any', titleRu: 'Some и Any', subtitle: 'When to use some and any', subtitleRu: 'Когда использовать some и any' },

      { type: 'examples', title: 'Discover the pattern', titleRu: 'Найдите закономерность',
        intro: 'When do we use "some" and when "any"? Look at these sentences:',
        items: [
          { icon: '✅', english: 'I have some milk. (+)', russian: 'У меня есть молоко.' },
          { icon: '✅', english: 'There are some books on the table. (+)', russian: 'На столе есть книги.' },
          { icon: '❌', english: 'I don\'t have any milk. (−)', russian: 'У меня нет молока.' },
          { icon: '❌', english: 'There aren\'t any books here. (−)', russian: 'Здесь нет книг.' },
          { icon: '❓', english: 'Do you have any milk? (?)', russian: 'У тебя есть молоко?' },
          { icon: '❓', english: 'Are there any books? (?)', russian: 'Есть ли книги?' },
        ]
      },

      { type: 'concept', title: 'The rule is simple', titleRu: 'Правило простое',
        text: 'Use SOME in positive sentences (+). Use ANY in negative sentences (−) and questions (?). Both mean "несколько / немного".',
        textRu: 'Используйте SOME в утверждениях (+). Используйте ANY в отрицаниях (−) и вопросах (?). Оба означают «несколько / немного».',
        visual: '✅ SOME (+) · ❌❓ ANY (− ?)'
      },

      { type: 'grammar-table', title: 'Some vs Any — overview', titleRu: 'Some vs Any — обзор',
        headers: ['', 'Positive (+)', 'Negative (−)', 'Question (?)'],
        rows: [
          ['Countable', 'I have some books.', 'I don\'t have any books.', 'Do you have any books?'],
          ['Uncountable', 'There is some water.', 'There isn\'t any water.', 'Is there any water?'],
        ],
        note: 'Exception: use "some" in offers and requests: "Would you like some tea?" "Can I have some water?"',
        noteRu: 'Исключение: используйте «some» в предложениях и просьбах: «Would you like some tea?» «Can I have some water?»'
      },

      { type: 'examples', title: 'More examples', titleRu: 'Больше примеров',
        items: [
          { icon: '🥛', english: 'We\'ve got some milk.', russian: 'У нас есть молоко.' },
          { icon: '🍞', english: 'There isn\'t any bread.', russian: 'Хлеба нет.' },
          { icon: '🍎', english: 'Have you got any apples?', russian: 'У тебя есть яблоки?' },
          { icon: '☕', english: 'Would you like some coffee?', russian: 'Хотите кофе? (предложение)' },
        ]
      },

      { type: 'fill-gap', title: 'Choose some or any', titleRu: 'Выберите some или any',
        sentence: 'I don\'t have ___ money.',
        options: ['some', 'any'],
        answer: 'any'
      },

      { type: 'fill-gap', title: 'Choose some or any', titleRu: 'Выберите some или any',
        sentence: 'There are ___ people in the park.',
        options: ['some', 'any'],
        answer: 'some'
      },

      { type: 'error-correction', title: 'Find and fix the mistakes', titleRu: 'Найдите и исправьте ошибки',
        instruction: 'Each sentence has one mistake with some/any.',
        instructionRu: 'В каждом предложении ошибка с some/any.',
        items: [
          { sentence: 'I don\'t have some friends here.', errorWord: 'some', correction: 'any' },
          { sentence: 'Are there some questions?', errorWord: 'some', correction: 'any' },
          { sentence: 'She has any beautiful dresses.', errorWord: 'any', correction: 'some' },
        ]
      },

      { type: 'practice', text: 'Practice some & any', textRu: 'Практика — some и any', gameId: 'grammar-quiz', topic: 'some-any', buttonText: 'Play Grammar Quiz' },
    ],
  },

  // ═══════════════ 13. COUNTABLE & UNCOUNTABLE ═══════════════
  {
    id: 'countable-uncountable',
    title: 'Countable & Uncountable',
    titleRu: 'Исчисляемые и неисчисляемые',
    icon: '📦',
    slides: [
      { type: 'title', icon: '📦', title: 'Countable & Uncountable', titleRu: 'Исчисляемые и неисчисляемые', subtitle: 'much, many, a lot of', subtitleRu: 'much, many, a lot of' },

      { type: 'concept', title: 'Two types of nouns', titleRu: 'Два типа существительных',
        text: 'Countable nouns can be counted: 1 apple, 2 apples. Uncountable nouns cannot: water, milk, bread (not "2 waters").',
        textRu: 'Исчисляемые можно посчитать: 1 яблоко, 2 яблока. Неисчисляемые нельзя: вода, молоко, хлеб (не «2 воды»).',
        examples: [
          { icon: '🍎', english: 'Countable: apple, book, car, child', russian: 'Исчисляемые: яблоко, книга, машина, ребёнок' },
          { icon: '💧', english: 'Uncountable: water, milk, bread, money', russian: 'Неисчисляемые: вода, молоко, хлеб, деньги' },
        ]
      },

      { type: 'grammar-table', title: 'How much / How many / A lot of', titleRu: 'How much / How many / A lot of',
        headers: ['Word', 'Used with', 'Example'],
        rows: [
          ['many', 'countable (plural)', 'How many books have you got?'],
          ['much', 'uncountable', 'How much water do you need?'],
          ['a lot of', 'both!', 'I have a lot of books / a lot of time.'],
        ],
        note: '"Much" is mostly used in questions and negatives. In positive sentences, prefer "a lot of": "I have a lot of money" (not "I have much money").',
        noteRu: '«Much» в основном используется в вопросах и отрицаниях. В утверждениях лучше «a lot of»: «I have a lot of money» (не «I have much money»).'
      },

      { type: 'examples', title: 'In context', titleRu: 'В контексте',
        items: [
          { icon: '📚', english: 'How many children do you have?', russian: 'Сколько у вас детей?' },
          { icon: '💰', english: 'How much money do you need?', russian: 'Сколько денег тебе нужно?' },
          { icon: '🍎', english: 'I don\'t have many friends here.', russian: 'У меня здесь не много друзей.' },
          { icon: '⏰', english: 'We don\'t have much time.', russian: 'У нас мало времени.' },
          { icon: '📖', english: 'She reads a lot of books.', russian: 'Она читает много книг.' },
        ]
      },

      { type: 'tip', icon: '⚠️', title: 'Common uncountable nouns', titleRu: 'Частые неисчисляемые',
        text: 'These words are UNCOUNTABLE in English (but countable in Russian!): information, advice, news, homework, furniture, bread, money.',
        textRu: 'Эти слова НЕИСЧИСЛЯЕМЫЕ в английском (но исчисляемые в русском!): information, advice, news, homework, furniture, bread, money.'
      },

      { type: 'fill-gap', title: 'Choose much or many', titleRu: 'Выберите much или many',
        sentence: 'How ___ students are in your class?',
        options: ['much', 'many', 'a lot'],
        answer: 'many'
      },

      { type: 'fill-gap', title: 'Choose much or many', titleRu: 'Выберите much или many',
        sentence: 'I don\'t drink ___ coffee.',
        options: ['much', 'many', 'a lot'],
        answer: 'much'
      },

      { type: 'practice', text: 'Practice countable & uncountable', textRu: 'Практика — исчисляемые и неисчисляемые', gameId: 'grammar-quiz', topic: 'countable-uncountable', buttonText: 'Play Grammar Quiz' },
    ],
  },

  // ═══════════════ 14. THERE IS / THERE ARE ═══════════════
  {
    id: 'there-is',
    title: 'There Is / There Are',
    titleRu: 'There is / There are',
    icon: '📍',
    slides: [
      { type: 'title', icon: '📍', title: 'There Is / There Are', titleRu: 'There is / There are', subtitle: 'Say what exists in a place', subtitleRu: 'Говорим, что есть в каком-то месте' },

      { type: 'concept', title: 'What does it mean?', titleRu: 'Что это значит?',
        text: 'Use "there is" for ONE thing, "there are" for MANY things — to say what exists somewhere.',
        textRu: 'Используйте «there is» для ОДНОГО предмета, «there are» для НЕСКОЛЬКИХ — чтобы сказать, что есть где-то.',
        examples: [
          { icon: '1️⃣', english: 'There is a book on the table.', russian: 'На столе есть книга.' },
          { icon: '2️⃣', english: 'There are two chairs in the room.', russian: 'В комнате два стула.' },
        ]
      },

      { type: 'structure', title: 'All forms (+/−/?)', titleRu: 'Все формы (+/−/?)',
        forms: [
          { type: '+', label: 'Positive', labelRu: 'Утверждение', formula: 'There is/are + noun', examples: ['There is a park near here.', 'There are shops on this street.'] },
          { type: '-', label: 'Negative', labelRu: 'Отрицание', formula: 'There isn\'t/aren\'t + noun', examples: ['There isn\'t a bank here.', 'There aren\'t any shops.'] },
          { type: '?', label: 'Question', labelRu: 'Вопрос', formula: 'Is/Are there + noun?', examples: ['Is there a bank near here?', 'Are there any restaurants?'] },
        ]
      },

      { type: 'vocab', title: 'Rooms & Furniture', titleRu: 'Комнаты и мебель',
        items: [
          { icon: '🛋️', english: 'living room', pronunciation: 'ЛИ́-винг рум', russian: 'гостиная' },
          { icon: '🛏️', english: 'bedroom', pronunciation: 'БЭ́Д-рум', russian: 'спальня' },
          { icon: '🍳', english: 'kitchen', pronunciation: 'КИ́-чин', russian: 'кухня' },
          { icon: '🚿', english: 'bathroom', pronunciation: 'БА́Ф-рум', russian: 'ванная' },
          { icon: '🪑', english: 'table / chair', pronunciation: 'тэйбл / чэр', russian: 'стол / стул' },
          { icon: '🛋️', english: 'sofa / bed', pronunciation: 'СО́У-фэ / бэд', russian: 'диван / кровать' },
        ]
      },

      { type: 'dialogue', title: 'Asking about your area', titleRu: 'Спрашиваем о районе',
        context: 'Two people talking about their neighbourhood',
        lines: [
          { speaker: 'A', text: 'Is there a supermarket near your house?', russian: 'Рядом с твоим домом есть супермаркет?' },
          { speaker: 'B', text: 'Yes, there is. And there are two cafes too.', russian: 'Да, есть. И ещё два кафе.' },
          { speaker: 'A', text: 'Are there any parks?', russian: 'А парки есть?' },
          { speaker: 'B', text: 'No, there aren\'t. But there is a library.', russian: 'Нет. Но есть библиотека.' },
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: 'There ___ a big park near my house.',
        options: ['is', 'are', 'isn\'t any'],
        answer: 'is'
      },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: '___ there any shops on your street?',
        options: ['Is', 'Are', 'Do'],
        answer: 'Are'
      },

      { type: 'practice', text: 'Practice there is / there are', textRu: 'Практика — there is / there are', gameId: 'grammar-quiz', topic: 'there-is-are', buttonText: 'Play Grammar Quiz' },
    ],
  },

  // ═══════════════ 15. PREPOSITIONS OF PLACE ═══════════════
  {
    id: 'prepositions-place',
    title: 'Prepositions of Place',
    titleRu: 'Предлоги места',
    icon: '🗺️',
    slides: [
      { type: 'title', icon: '🗺️', title: 'Prepositions of Place', titleRu: 'Предлоги места', subtitle: 'Where things are', subtitleRu: 'Где что находится' },

      { type: 'vocab', title: 'Key prepositions', titleRu: 'Основные предлоги',
        items: [
          { icon: '📦', english: 'in', pronunciation: 'ин', russian: 'в (внутри)', note: 'in the box' },
          { icon: '📋', english: 'on', pronunciation: 'он', russian: 'на (на поверхности)', note: 'on the table' },
          { icon: '⬇️', english: 'under', pronunciation: 'А́Н-дэр', russian: 'под', note: 'under the chair' },
          { icon: '➡️', english: 'next to', pronunciation: 'нэкст ту', russian: 'рядом с', note: 'next to the door' },
          { icon: '↔️', english: 'between', pronunciation: 'би-ТУИ́Н', russian: 'между', note: 'between the chairs' },
          { icon: '🎯', english: 'in front of', pronunciation: 'ин франт ов', russian: 'перед', note: 'in front of the house' },
          { icon: '🔙', english: 'behind', pronunciation: 'би-ХА́ЙНД', russian: 'за / позади', note: 'behind the tree' },
        ]
      },

      { type: 'examples', title: 'Where is the cat?', titleRu: 'Где кошка?',
        intro: 'Prepositions tell us the position of things:',
        items: [
          { icon: '📦', english: 'The cat is in the box.', russian: 'Кошка в коробке.' },
          { icon: '📋', english: 'The cat is on the table.', russian: 'Кошка на столе.' },
          { icon: '⬇️', english: 'The cat is under the bed.', russian: 'Кошка под кроватью.' },
          { icon: '➡️', english: 'The cat is next to the dog.', russian: 'Кошка рядом с собакой.' },
          { icon: '↔️', english: 'The cat is between the pillows.', russian: 'Кошка между подушками.' },
          { icon: '🎯', english: 'The cat is in front of the TV.', russian: 'Кошка перед телевизором.' },
          { icon: '🔙', english: 'The cat is behind the sofa.', russian: 'Кошка за диваном.' },
        ]
      },

      { type: 'tip', icon: '💡', title: '"in" vs "on" vs "at"', titleRu: '«in» vs «on» vs «at»',
        text: '"in" = inside a space (in the room). "on" = touching a surface (on the wall). "at" = a specific point (at the bus stop).',
        textRu: '«in» = внутри пространства (in the room). «on» = на поверхности (on the wall). «at» = в конкретной точке (at the bus stop).'
      },

      { type: 'dialogue', title: 'Where are my keys?', titleRu: 'Где мои ключи?',
        context: 'Looking for something at home',
        lines: [
          { speaker: 'A', text: 'Where are my keys?', russian: 'Где мои ключи?' },
          { speaker: 'B', text: 'Are they on the table?', russian: 'Они на столе?' },
          { speaker: 'A', text: 'No, they aren\'t.', russian: 'Нет.' },
          { speaker: 'B', text: 'Look in your bag.', russian: 'Посмотри в сумке.' },
          { speaker: 'A', text: 'Oh! They\'re under the newspaper!', russian: 'О! Они под газетой!' },
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct preposition', titleRu: 'Выберите правильный предлог',
        sentence: 'The book is ___ the table.',
        options: ['in', 'on', 'under'],
        answer: 'on'
      },

      { type: 'fill-gap', title: 'Choose the correct preposition', titleRu: 'Выберите правильный предлог',
        sentence: 'The shoes are ___ the bed.',
        options: ['on', 'in', 'under'],
        answer: 'under'
      },

      { type: 'vocab-match', title: 'Match preposition to meaning', titleRu: 'Соедините предлог со значением',
        pairs: [
          { english: 'in', russian: 'внутри' },
          { english: 'on', russian: 'на поверхности' },
          { english: 'under', russian: 'под' },
          { english: 'next to', russian: 'рядом с' },
          { english: 'behind', russian: 'позади' },
          { english: 'between', russian: 'между' },
        ]
      },

      { type: 'practice', text: 'Practice prepositions of place', textRu: 'Практика — предлоги места', gameId: 'grammar-quiz', topic: 'prepositions-place', buttonText: 'Play Grammar Quiz' },
    ],
  },

  // ═══════════════ 16. PREPOSITIONS OF TIME ═══════════════
  {
    id: 'prepositions-time',
    title: 'Prepositions of Time',
    titleRu: 'Предлоги времени',
    icon: '🕐',
    slides: [
      { type: 'title', icon: '🕐', title: 'Prepositions of Time', titleRu: 'Предлоги времени', subtitle: 'at, in, on for time', subtitleRu: 'at, in, on для времени' },

      { type: 'concept', title: 'Three prepositions of time', titleRu: 'Три предлога времени',
        text: 'English uses different prepositions for different time expressions. The three key ones are: at, in, on.',
        textRu: 'В английском для времени используются разные предлоги. Три ключевых: at, in, on.',
        visual: '🕐 at · ☀️ in · 📅 on'
      },

      { type: 'rule', title: '"at" — for exact times', titleRu: '«at» — для точного времени',
        formula: 'at + clock time / specific moment',
        rows: [
          { subject: 'at', verb: '7 o\'clock', example: 'I wake up at 7 o\'clock.' },
          { subject: 'at', verb: 'noon', example: 'We have lunch at noon.' },
          { subject: 'at', verb: 'midnight', example: 'The shop closes at midnight.' },
          { subject: 'at', verb: 'night', example: 'I read at night. (exception!)' },
        ]
      },

      { type: 'rule', title: '"in" — for parts of the day & longer periods', titleRu: '«in» — для частей дня и длинных периодов',
        formula: 'in + the morning / afternoon / evening · in + month / year / season',
        rows: [
          { subject: 'in', verb: 'the morning', example: 'I exercise in the morning.' },
          { subject: 'in', verb: 'the afternoon', example: 'She works in the afternoon.' },
          { subject: 'in', verb: 'the evening', example: 'We watch TV in the evening.' },
          { subject: 'in', verb: 'January / 2024 / summer', example: 'My birthday is in March.' },
        ],
        warning: 'BUT: "at night" — not "in the night"! This is an exception.',
        warningRu: 'НО: «at night» — не «in the night»! Это исключение.'
      },

      { type: 'rule', title: '"on" — for days & dates', titleRu: '«on» — для дней и дат',
        formula: 'on + day of the week / specific date',
        rows: [
          { subject: 'on', verb: 'Monday', example: 'I work on Monday.' },
          { subject: 'on', verb: 'Friday', example: 'We go out on Friday.' },
          { subject: 'on', verb: 'weekends', example: 'I rest on weekends.' },
          { subject: 'on', verb: 'March 8th', example: 'Her birthday is on March 8th.' },
        ]
      },

      { type: 'examples', title: 'Put it together', titleRu: 'Соединяем всё вместе',
        items: [
          { icon: '⏰', english: 'I wake up at 7 in the morning.', russian: 'Я просыпаюсь в 7 утра.' },
          { icon: '💼', english: 'I start work at 9 on Monday.', russian: 'Я начинаю работу в 9 в понедельник.' },
          { icon: '📺', english: 'I watch TV in the evening.', russian: 'Я смотрю ТВ вечером.' },
          { icon: '🏋️', english: 'I go to the gym on Wednesday.', russian: 'Я хожу в зал в среду.' },
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct preposition', titleRu: 'Выберите правильный предлог',
        sentence: 'I have English class ___ Wednesday.',
        options: ['at', 'in', 'on'],
        answer: 'on'
      },

      { type: 'fill-gap', title: 'Choose the correct preposition', titleRu: 'Выберите правильный предлог',
        sentence: 'She drinks tea ___ the morning.',
        options: ['at', 'in', 'on'],
        answer: 'in'
      },

      { type: 'practice', text: 'Practice prepositions of time', textRu: 'Практика — предлоги времени', gameId: 'grammar-quiz', topic: 'prepositions-time', buttonText: 'Play Grammar Quiz' },
    ],
  },

  // ═══════════════ 17. CAN & CAN'T ═══════════════
  {
    id: 'can',
    title: 'Can & Can\'t',
    titleRu: 'Can — мочь / уметь',
    icon: '💪',
    slides: [
      { type: 'title', icon: '💪', title: 'Can & Can\'t', titleRu: 'Can — мочь / уметь', subtitle: 'Ability, permission & requests', subtitleRu: 'Способности, разрешение и просьбы' },

      { type: 'concept', title: '"can" is easy!', titleRu: '«can» — это просто!',
        text: '"can" is the same for ALL pronouns. No -s, no do/does, no changes. Just: can + verb.',
        textRu: '«can» одинаковый для ВСЕХ местоимений. Без -s, без do/does, без изменений. Просто: can + глагол.',
        examples: [
          { icon: '🏊', english: 'I can swim.', russian: 'Я умею плавать.' },
          { icon: '🚗', english: 'She can drive.', russian: 'Она умеет водить.' },
          { icon: '🗣️', english: 'They can speak English.', russian: 'Они говорят по-английски.' },
        ]
      },

      { type: 'structure', title: 'All forms (+/−/?)', titleRu: 'Все формы (+/−/?)',
        forms: [
          { type: '+', label: 'Positive', labelRu: 'Утверждение', formula: 'S + can + verb', examples: ['I can swim.', 'She can drive.', 'We can cook.'] },
          { type: '-', label: 'Negative', labelRu: 'Отрицание', formula: 'S + can\'t + verb', examples: ['I can\'t cook.', 'He can\'t drive.', 'They can\'t swim.'] },
          { type: '?', label: 'Question', labelRu: 'Вопрос', formula: 'Can + S + verb?', examples: ['Can you swim?', 'Can she drive?', 'Can they help?'] },
        ]
      },

      { type: 'tip', icon: '🎯', title: 'No changes for anyone!', titleRu: 'Одинаковый для всех!',
        text: '"can" never changes form. No "cans", no "does can", no "to can".',
        textRu: '«can» никогда не меняется. Нет «cans», «does can», «to can».',
        items: [
          { wrong: 'She cans swim.', right: 'She can swim.' },
          { wrong: 'Does she can swim?', right: 'Can she swim?' },
        ]
      },

      { type: 'vocab', title: 'Can for requests & permission', titleRu: 'Can для просьб и разрешений',
        intro: '"Can I...?" and "Can you...?" are very useful in daily life:',
        introRu: '«Can I...?» и «Can you...?» очень полезны в жизни:',
        items: [
          { icon: '☕', english: 'Can I have a coffee, please?', pronunciation: 'кэн ай хэв э КО́-фи, плиз?', russian: 'Можно мне кофе, пожалуйста?' },
          { icon: '💺', english: 'Can I sit here?', pronunciation: 'кэн ай сит хи́р?', russian: 'Можно здесь сесть?' },
          { icon: '🤝', english: 'Can you help me?', pronunciation: 'кэн ю хэлп ми?', russian: 'Вы можете мне помочь?' },
          { icon: '🐢', english: 'Can you speak slowly?', pronunciation: 'кэн ю спик СЛО́У-ли?', russian: 'Говорите медленнее?' },
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: '___ she play the piano?',
        options: ['Can', 'Does can', 'Is can'],
        answer: 'Can'
      },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: 'I ___ speak French very well.',
        options: ['can\'t', 'don\'t can', 'am not can'],
        answer: 'can\'t'
      },

      { type: 'error-correction', title: 'Find and fix the mistakes', titleRu: 'Найдите и исправьте ошибки',
        instruction: 'Each sentence has one mistake with "can".',
        instructionRu: 'В каждом предложении ошибка с «can».',
        items: [
          { sentence: 'She cans swim very well.', errorWord: 'cans', correction: 'can' },
          { sentence: 'Does he can drive?', errorWord: 'Does', correction: 'Can' },
          { sentence: 'I don\'t can cook.', errorWord: 'don\'t can', correction: 'can\'t' },
        ]
      },

      { type: 'practice', text: 'Practice can & can\'t', textRu: 'Практика — can и can\'t', gameId: 'grammar-quiz', topic: 'can', buttonText: 'Play Grammar Quiz' },
    ],
  },

  // ═══════════════ 18. DESCRIBING APPEARANCE ═══════════════
  {
    id: 'appearance',
    title: 'Describing Appearance',
    titleRu: 'Описание внешности',
    icon: '👤',
    slides: [
      { type: 'title', icon: '👤', title: 'Describing Appearance', titleRu: 'Описание внешности', subtitle: 'IS + adjective vs HAS GOT + noun', subtitleRu: 'IS + прилагательное vs HAS GOT + существительное' },

      { type: 'vocab', title: 'Body & Height', titleRu: 'Телосложение и рост',
        items: [
          { icon: '📏', english: 'tall', pronunciation: 'тол', russian: 'высокий' },
          { icon: '📏', english: 'short', pronunciation: 'шорт', russian: 'низкий' },
          { icon: '🏃', english: 'slim', pronunciation: 'слим', russian: 'стройный' },
          { icon: '💪', english: 'strong', pronunciation: 'стронг', russian: 'сильный' },
          { icon: '😊', english: 'young', pronunciation: 'янг', russian: 'молодой' },
          { icon: '👴', english: 'old', pronunciation: 'олд', russian: 'старый' },
          { icon: '✨', english: 'beautiful / handsome', pronunciation: 'БЬЮ́-ти-фул / ХЭ́НД-сам', russian: 'красивая / красивый' },
        ]
      },

      { type: 'vocab', title: 'Hair & Eyes', titleRu: 'Волосы и глаза',
        items: [
          { icon: '💇', english: 'long hair', pronunciation: 'лонг хэр', russian: 'длинные волосы' },
          { icon: '💇', english: 'short hair', pronunciation: 'шорт хэр', russian: 'короткие волосы' },
          { icon: '🖤', english: 'dark hair', pronunciation: 'дарк хэр', russian: 'тёмные волосы' },
          { icon: '🟡', english: 'fair / blonde hair', pronunciation: 'фэр хэр', russian: 'светлые волосы' },
          { icon: '🟤', english: 'curly / straight hair', pronunciation: 'КЁР-ли / стрэйт хэр', russian: 'кудрявые / прямые волосы' },
          { icon: '👁️', english: 'blue / green / brown eyes', pronunciation: 'блу / грин / бра́ун айз', russian: 'голубые / зелёные / карие глаза' },
          { icon: '🧔', english: 'a beard / a moustache', pronunciation: 'э бирд / э мэ-СТА́Ш', russian: 'борода / усы' },
          { icon: '👓', english: 'glasses', pronunciation: 'ГЛА́-сиз', russian: 'очки' },
        ]
      },

      { type: 'comparison', title: 'IS vs HAS GOT', titleRu: 'IS или HAS GOT',
        left: {
          title: 'IS + adjective',
          titleRu: 'IS + прилагательное',
          examples: ['She is tall.', 'He is strong.', 'They are kind.', 'She is beautiful.']
        },
        right: {
          title: 'HAS GOT + noun',
          titleRu: 'HAS GOT + существительное',
          examples: ['She has got long hair.', 'He has got blue eyes.', 'They have got a dog.', 'She has got glasses.']
        }
      },

      { type: 'tip', icon: '⚠️', title: 'Don\'t mix them!', titleRu: 'Не путайте!',
        text: '"is" describes qualities, "has got" describes features you possess.',
        textRu: '«is» описывает качества, «has got» — то, чем обладаете.',
        items: [
          { wrong: 'She has got tall.', right: 'She IS tall.' },
          { wrong: 'She is long hair.', right: 'She HAS GOT long hair.' },
        ]
      },

      { type: 'vocab-match', title: 'Match the vocabulary', titleRu: 'Соедините слова',
        pairs: [
          { english: 'tall', russian: 'высокий' },
          { english: 'short', russian: 'низкий' },
          { english: 'slim', russian: 'стройный' },
          { english: 'curly hair', russian: 'кудрявые волосы' },
          { english: 'glasses', russian: 'очки' },
          { english: 'beard', russian: 'борода' },
        ]
      },

      { type: 'reading', title: 'Meet the family', titleRu: 'Познакомьтесь с семьёй',
        text: '<p>This is a photo of my family. My father\'s name is <b>Dmitri</b>. He is <b>tall</b> and <b>strong</b>. He has got <b>short dark hair</b> and <b>brown eyes</b>. He has got a <b>beard</b>.</p><p>My mother\'s name is <b>Elena</b>. She is <b>slim</b> and <b>beautiful</b>. She has got <b>long blonde hair</b> and <b>green eyes</b>. She has got <b>glasses</b>.</p><p>My sister <b>Katya</b> is <b>young</b> — she is 12. She is <b>short</b> and she has got <b>curly dark hair</b> and <b>blue eyes</b>. She looks like our father.</p>',
        vocabWords: [
          { word: 'tall', meaning: 'high in height', meaningRu: 'высокий' },
          { word: 'slim', meaning: 'thin in an attractive way', meaningRu: 'стройный' },
          { word: 'curly', meaning: 'not straight (hair)', meaningRu: 'кудрявый' },
          { word: 'beard', meaning: 'hair on chin and cheeks', meaningRu: 'борода' },
          { word: 'glasses', meaning: 'you wear them to see better', meaningRu: 'очки' },
        ]
      },

      { type: 'comprehension', title: 'Check your understanding', titleRu: 'Проверьте понимание',
        questions: [
          { question: 'Dmitri has got long hair.', questionRu: 'У Дмитрия длинные волосы.', options: ['True', 'False'], answer: 'False' },
          { question: 'Elena has got glasses.', questionRu: 'У Елены есть очки.', options: ['True', 'False'], answer: 'True' },
          { question: 'Who has got curly hair?', questionRu: 'У кого кудрявые волосы?', options: ['Dmitri', 'Elena', 'Katya'], answer: 'Katya' },
          { question: 'What colour are Elena\'s eyes?', questionRu: 'Какого цвета глаза у Елены?', options: ['Blue', 'Green', 'Brown'], answer: 'Green' },
        ]
      },

      { type: 'practice', text: 'Practice describing appearance', textRu: 'Практика — описание внешности', gameId: 'vocabulary', buttonText: 'Play Vocabulary Game' },
    ],
  },

];

// A1+ placeholder — will be replaced by full content
window.A1PLUS_CONTENT = window.A1PLUS_CONTENT || [];

window.A1PLUS_CONTENT = [

  // ===== UNIT 1: Present Continuous =====
  {
    id: 'a1plus-u1',
    title: 'Present Continuous',
    titleRu: 'Настоящее длительное время',
    level: 'A1+',
    icon: '🔄',
    slides: [
      { type: 'title', html: '<h1>Present Continuous</h1><p class="subtitle">Настоящее длительное время</p><p>What is happening RIGHT NOW?</p><p>Что происходит ПРЯМО СЕЙЧАС?</p>' },

      { type: 'concept', title: 'What is happening now?', titleRu: 'Что происходит сейчас?',
        text: 'Look at these sentences:',
        textRu: 'Посмотрите на эти предложения:',
        examples: [
          { english: 'I <b>am reading</b> a book right now.', russian: 'Я <b>читаю</b> книгу прямо сейчас.' },
          { english: 'She <b>is cooking</b> dinner at the moment.', russian: 'Она <b>готовит</b> ужин в данный момент.' },
          { english: 'They <b>are playing</b> football now.', russian: 'Они <b>играют</b> в футбол сейчас.' },
          { english: 'We <b>are not sleeping</b>. We <b>are studying</b>!', russian: 'Мы <b>не спим</b>. Мы <b>учимся</b>!' }
        ],
        note: 'Pattern: am/is/are + verb-ing. This describes actions happening at this moment.',
        noteRu: 'Схема: am/is/are + глагол-ing. Описывает действия, происходящие в данный момент.'
      },

      { type: 'grammar-table', title: 'Present Continuous Formation', titleRu: 'Образование Present Continuous',
        headers: ['', 'Positive (+)', 'Negative (-)', 'Question (?)'],
        rows: [
          ['I', 'I am (I\'m) working', 'I am not (I\'m not) working', 'Am I working?'],
          ['He/She/It', 'He is (He\'s) working', 'He is not (He isn\'t) working', 'Is he working?'],
          ['We/You/They', 'They are (They\'re) working', 'They are not (They aren\'t) working', 'Are they working?']
        ],
        note: 'Short answers: Yes, I am. / No, I\'m not. | Yes, he is. / No, he isn\'t. | Yes, they are. / No, they aren\'t.',
        noteRu: 'Краткие ответы: Yes, I am. / No, I\'m not. | Yes, he is. / No, he isn\'t. | Yes, they are. / No, they aren\'t.'
      },

      { type: 'rule', title: 'Spelling rules for -ing', titleRu: 'Правила написания -ing',
        rules: [
          { rule: 'Most verbs: add -ing', ruleRu: 'Большинство глаголов: добавляем -ing', example: 'read → reading, eat → eating, play → playing' },
          { rule: 'Verbs ending in -e: drop -e, add -ing', ruleRu: 'Глаголы на -e: убираем -e, добавляем -ing', example: 'make → making, write → writing, come → coming' },
          { rule: 'Short verbs (CVC): double the last consonant', ruleRu: 'Короткие глаголы (согл-гласн-согл): удваиваем последнюю согласную', example: 'sit → sitting, run → running, swim → swimming, stop → stopping' },
          { rule: 'Verbs ending in -ie: change to -ying', ruleRu: 'Глаголы на -ie: меняем на -ying', example: 'die → dying, lie → lying, tie → tying' }
        ]
      },

      { type: 'tip', title: 'Time markers for Present Continuous', titleRu: 'Маркеры времени для Present Continuous',
        text: '<b>now</b> (сейчас) • <b>right now</b> (прямо сейчас) • <b>at the moment</b> (в данный момент) • <b>today</b> (сегодня) • <b>this week</b> (на этой неделе) • <b>Look!</b> (Смотри!) • <b>Listen!</b> (Послушай!)',
        textRu: 'Эти слова-подсказки говорят нам, что нужно использовать Present Continuous.'
      },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: 'She ___ a letter right now.', options: ['writes', 'is writing', 'write', 'writing'], answer: 'is writing' },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: 'Look! The children ___ in the park.', options: ['play', 'plays', 'are playing', 'is playing'], answer: 'are playing' },

      { type: 'error-correction', title: 'Find and fix the mistakes', titleRu: 'Найдите и исправьте ошибки',
        instruction: 'Each sentence has one mistake. Find the wrong word and correct it.',
        instructionRu: 'В каждом предложении одна ошибка. Найдите неправильное слово и исправьте его.',
        items: [
          { sentence: 'He is siting on the chair.', errorWord: 'siting', correction: 'sitting' },
          { sentence: 'They is watching TV now.', errorWord: 'is', correction: 'are' },
          { sentence: 'I am makeing a cake.', errorWord: 'makeing', correction: 'making' },
          { sentence: 'She are reading a book.', errorWord: 'are', correction: 'is' }
        ]
      },

      { type: 'practice', text: 'Practice Present Continuous', textRu: 'Практика — настоящее длительное время', gameId: 'verb-builder', topic: 'present-continuous', buttonText: 'Play Verb Builder' },
    ],
  },

  // ===== UNIT 2: Present Simple vs Continuous =====
  {
    id: 'a1plus-u2',
    title: 'Present Simple vs Continuous',
    titleRu: 'Простое настоящее vs длительное',
    level: 'A1+',
    icon: '⚖️',
    slides: [
      { type: 'title', html: '<h1>Present Simple vs Continuous</h1><p class="subtitle">Простое настоящее vs длительное</p><p>Two present tenses — when to use which?</p><p>Два настоящих времени — когда какое использовать?</p>' },

      { type: 'concept', title: 'Compare these sentences', titleRu: 'Сравните эти предложения',
        text: 'What is the difference?',
        textRu: 'В чём разница?',
        examples: [
          { english: 'I <b>drink</b> coffee every morning. ☕ (habit)', russian: 'Я <b>пью</b> кофе каждое утро. (привычка)' },
          { english: 'I <b>am drinking</b> coffee right now. ☕ (now)', russian: 'Я <b>пью</b> кофе прямо сейчас. (сейчас)' },
          { english: 'She <b>works</b> in a bank. 🏦 (permanent)', russian: 'Она <b>работает</b> в банке. (постоянно)' },
          { english: 'She <b>is working</b> from home today. 🏠 (temporary)', russian: 'Она <b>работает</b> из дома сегодня. (временно)' }
        ],
        note: 'Present Simple = habits, routines, facts. Present Continuous = now, temporary, changing.',
        noteRu: 'Present Simple = привычки, рутина, факты. Present Continuous = сейчас, временно, меняется.'
      },

      { type: 'comparison', title: 'Signal Words Comparison', titleRu: 'Сравнение слов-маркеров',
        left: { label: 'Present Simple', labelRu: 'Простое настоящее',
          items: ['always (всегда)', 'usually (обычно)', 'often (часто)', 'sometimes (иногда)', 'never (никогда)', 'every day/week/year', 'on Mondays (по понедельникам)'] },
        right: { label: 'Present Continuous', labelRu: 'Настоящее длительное',
          items: ['now (сейчас)', 'right now (прямо сейчас)', 'at the moment (в данный момент)', 'today (сегодня)', 'this week (на этой неделе)', 'Look! (Смотри!)', 'Listen! (Послушай!)'] }
      },

      { type: 'rule', title: 'Key differences', titleRu: 'Ключевые различия',
        rules: [
          { rule: 'Present Simple: habits & routines', ruleRu: 'Present Simple: привычки и рутина', example: 'I go to work at 8 a.m. every day.' },
          { rule: 'Present Continuous: happening now', ruleRu: 'Present Continuous: происходит сейчас', example: 'I am going to work now. (I am on my way)' },
          { rule: 'Present Simple: permanent situations', ruleRu: 'Present Simple: постоянные ситуации', example: 'He lives in Moscow.' },
          { rule: 'Present Continuous: temporary situations', ruleRu: 'Present Continuous: временные ситуации', example: 'He is living in a hotel this week.' },
          { rule: 'Some verbs are NOT used in Continuous: like, love, hate, know, want, need, understand, believe, remember', ruleRu: 'Некоторые глаголы НЕ используются в Continuous: like, love, hate, know, want, need, understand, believe, remember', example: 'I know the answer. (NOT: I am knowing)' }
        ]
      },

      { type: 'fill-gap', title: 'Simple or Continuous?', titleRu: 'Простое или длительное?',
        sentence: 'She usually ___ to school by bus.', options: ['goes', 'is going', 'go', 'going'], answer: 'goes' },

      { type: 'fill-gap', title: 'Simple or Continuous?', titleRu: 'Простое или длительное?',
        sentence: 'Be quiet! The baby ___.', options: ['sleeps', 'is sleeping', 'sleep', 'sleeping'], answer: 'is sleeping' },

      { type: 'fill-gap', title: 'Simple or Continuous?', titleRu: 'Простое или длительное?',
        sentence: 'I ___ this song. It\'s beautiful!', options: ['am liking', 'like', 'likes', 'liking'], answer: 'like' },

      { type: 'error-correction', title: 'Fix the mistakes', titleRu: 'Исправьте ошибки',
        instruction: 'Find the incorrect word.',
        instructionRu: 'Найдите неправильное слово.',
        items: [
          { sentence: 'I am knowing the answer.', errorWord: 'knowing', correction: 'know' },
          { sentence: 'She go to school every day.', errorWord: 'go', correction: 'goes' },
          { sentence: 'Look! He runs very fast!', errorWord: 'runs', correction: 'is running' },
          { sentence: 'They usually eats at 7 p.m.', errorWord: 'eats', correction: 'eat' }
        ]
      },

      { type: 'practice', text: 'Practice Simple vs Continuous', textRu: 'Практика — простое vs длительное', gameId: 'verb-builder', topic: 'present-simple', buttonText: 'Play Verb Builder' },
    ],
  },

  // ===== UNIT 3: Past Simple: was/were =====
  {
    id: 'a1plus-u3',
    title: 'Past Simple: was/were',
    titleRu: 'Прошедшее время: was/were',
    level: 'A1+',
    icon: '⏮️',
    slides: [
      { type: 'title', html: '<h1>Past Simple: was/were</h1><p class="subtitle">Прошедшее время: was/were</p><p>The past of "to be"</p><p>Прошедшее время глагола "быть"</p>' },

      { type: 'concept', title: 'Was and Were', titleRu: 'Was и Were',
        text: 'Look at how "am/is/are" change in the past:',
        textRu: 'Посмотрите, как "am/is/are" меняются в прошедшем времени:',
        examples: [
          { english: 'I <b>am</b> tired. → I <b>was</b> tired yesterday.', russian: 'Я устал(а). → Я <b>был(а)</b> уставшим вчера.' },
          { english: 'She <b>is</b> at home. → She <b>was</b> at home last night.', russian: 'Она дома. → Она <b>была</b> дома вчера вечером.' },
          { english: 'They <b>are</b> happy. → They <b>were</b> happy at the party.', russian: 'Они счастливы. → Они <b>были</b> счастливы на вечеринке.' },
          { english: 'We <b>are</b> at school. → We <b>were</b> at school this morning.', russian: 'Мы в школе. → Мы <b>были</b> в школе сегодня утром.' }
        ],
        note: 'I/He/She/It → was | We/You/They → were',
        noteRu: 'I/He/She/It → was | We/You/They → were'
      },

      { type: 'grammar-table', title: 'Was/Were: Full Forms', titleRu: 'Was/Were: Полные формы',
        headers: ['', 'Positive (+)', 'Negative (-)', 'Question (?)'],
        rows: [
          ['I', 'I was happy', 'I was not (wasn\'t) happy', 'Was I happy?'],
          ['He/She/It', 'She was at home', 'She was not (wasn\'t) at home', 'Was she at home?'],
          ['We/You/They', 'They were tired', 'They were not (weren\'t) tired', 'Were they tired?']
        ],
        note: 'Short answers: Yes, I was. / No, I wasn\'t. | Yes, they were. / No, they weren\'t.',
        noteRu: 'Краткие ответы: Yes, I was. / No, I wasn\'t. | Yes, they were. / No, they weren\'t.'
      },

      { type: 'tip', title: 'Time expressions for Past Simple', titleRu: 'Выражения времени для Past Simple',
        text: '<b>yesterday</b> (вчера) • <b>last night / last week / last month / last year</b> (прошлой ночью / на прошлой неделе / в прошлом месяце / в прошлом году) • <b>... ago</b> (... назад): <i>two days ago, a week ago, three years ago</i> • <b>in 2020</b> (в 2020 году) • <b>when I was young</b> (когда я был молодым)',
        textRu: 'Эти выражения показывают, что действие было в прошлом.'
      },

      { type: 'examples', title: 'Was/Were in everyday sentences', titleRu: 'Was/Were в повседневных предложениях',
        items: [
          { english: 'Where <b>were</b> you yesterday?', russian: 'Где ты <b>был</b> вчера?' },
          { english: 'The weather <b>was</b> cold last week.', russian: 'Погода <b>была</b> холодной на прошлой неделе.' },
          { english: '<b>Was</b> the film good? — Yes, it <b>was</b> great!', russian: 'Фильм <b>был</b> хороший? — Да, он <b>был</b> отличный!' },
          { english: 'The shops <b>were</b> closed on Sunday.', russian: 'Магазины <b>были</b> закрыты в воскресенье.' },
          { english: 'I <b>wasn\'t</b> at the party. I <b>was</b> at home.', russian: 'Меня <b>не было</b> на вечеринке. Я <b>был</b> дома.' }
        ]
      },

      { type: 'fill-gap', title: 'Was or Were?', titleRu: 'Was или Were?',
        sentence: 'We ___ at the cinema last Friday.', options: ['was', 'were', 'are', 'is'], answer: 'were' },

      { type: 'fill-gap', title: 'Was or Were?', titleRu: 'Was или Were?',
        sentence: '___ you at school yesterday? — No, I ___.', options: ['Was...wasn\'t', 'Were...wasn\'t', 'Were...weren\'t', 'Was...weren\'t'], answer: 'Were...wasn\'t' },

      { type: 'fill-gap', title: 'Was or Were?', titleRu: 'Was или Were?',
        sentence: 'The children ___ very tired after the long walk.', options: ['was', 'were', 'is', 'are'], answer: 'were' },

      { type: 'practice', text: 'Practice Past Simple: was/were', textRu: 'Практика — was/were', gameId: 'verb-builder', topic: 'past-simple', buttonText: 'Play Verb Builder' },
    ],
  },

  // ===== UNIT 4: Past Simple: Regular Verbs =====
  {
    id: 'a1plus-u4',
    title: 'Past Simple: Regular Verbs',
    titleRu: 'Прошедшее время: правильные глаголы',
    level: 'A1+',
    icon: '📝',
    slides: [
      { type: 'title', html: '<h1>Past Simple: Regular Verbs</h1><p class="subtitle">Прошедшее время: правильные глаголы</p><p>Adding -ed to make the past</p><p>Добавляем -ed для прошедшего времени</p>' },

      { type: 'concept', title: 'How to make past tense', titleRu: 'Как образовать прошедшее время',
        text: 'For regular verbs, add -ed:',
        textRu: 'Для правильных глаголов добавляем -ed:',
        examples: [
          { english: 'I <b>work</b> every day. → Yesterday I <b>worked</b> all day.', russian: 'Я работаю каждый день. → Вчера я <b>работал(а)</b> весь день.' },
          { english: 'She <b>plays</b> tennis. → She <b>played</b> tennis last weekend.', russian: 'Она играет в теннис. → Она <b>играла</b> в теннис на прошлых выходных.' },
          { english: 'They <b>watch</b> TV. → They <b>watched</b> a film last night.', russian: 'Они смотрят ТВ. → Они <b>смотрели</b> фильм вчера вечером.' },
          { english: 'We <b>live</b> in Moscow. → We <b>lived</b> in London before.', russian: 'Мы живём в Москве. → Мы <b>жили</b> в Лондоне раньше.' }
        ],
        note: 'The -ed form is the SAME for all persons: I worked, she worked, they worked.',
        noteRu: 'Форма на -ed ОДИНАКОВАЯ для всех лиц: I worked, she worked, they worked.'
      },

      { type: 'rule', title: 'Spelling rules for -ed', titleRu: 'Правила написания -ed',
        rules: [
          { rule: 'Most verbs: add -ed', ruleRu: 'Большинство глаголов: добавляем -ed', example: 'work → worked, clean → cleaned, start → started' },
          { rule: 'Verbs ending in -e: add -d only', ruleRu: 'Глаголы на -e: добавляем только -d', example: 'live → lived, like → liked, dance → danced' },
          { rule: 'Verbs ending in consonant + y: change y to i, add -ed', ruleRu: 'Глаголы на согласную + y: меняем y на i, добавляем -ed', example: 'study → studied, try → tried, carry → carried' },
          { rule: 'Short verbs (CVC): double the last consonant, add -ed', ruleRu: 'Короткие глаголы (согл-гласн-согл): удваиваем последнюю согласную', example: 'stop → stopped, plan → planned, drop → dropped' }
        ]
      },

      { type: 'grammar-table', title: 'Pronunciation of -ed', titleRu: 'Произношение -ed',
        headers: ['Sound', 'After these sounds', 'Examples'],
        rows: [
          ['/t/ (т)', 'voiceless: k, p, f, s, sh, ch', 'worked (воркт), stopped (стопт), washed (вошт)'],
          ['/d/ (д)', 'voiced: b, g, v, z, l, m, n, r + vowels', 'played (плейд), cleaned (клинд), lived (ливд)'],
          ['/ɪd/ (ид)', 'after t or d', 'wanted (вонтид), needed (нидид), started (стартид)']
        ],
        note: 'The /ɪd/ ending adds an extra syllable: want (1 syllable) → want-ed (2 syllables).',
        noteRu: 'Окончание /ɪd/ добавляет дополнительный слог: want (1 слог) → want-ed (2 слога).'
      },

      { type: 'vocab', title: 'Common regular verbs in past', titleRu: 'Частые правильные глаголы в прошедшем',
        words: [
          { word: 'asked', transcription: '/ɑːskt/', translation: 'спросил(а)', example: 'I asked a question.' },
          { word: 'called', transcription: '/kɔːld/', translation: 'позвонил(а)', example: 'She called me yesterday.' },
          { word: 'finished', transcription: '/ˈfɪnɪʃt/', translation: 'закончил(а)', example: 'We finished the work.' },
          { word: 'happened', transcription: '/ˈhæpənd/', translation: 'произошло', example: 'What happened?' },
          { word: 'listened', transcription: '/ˈlɪsənd/', translation: 'слушал(а)', example: 'I listened to music.' },
          { word: 'opened', transcription: '/ˈəʊpənd/', translation: 'открыл(а)', example: 'He opened the door.' },
          { word: 'walked', transcription: '/wɔːkt/', translation: 'шёл/шла', example: 'They walked to school.' },
          { word: 'wanted', transcription: '/ˈwɒntɪd/', translation: 'хотел(а)', example: 'I wanted to help.' }
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct past form', titleRu: 'Выберите правильную форму прошедшего времени',
        sentence: 'She ___ the piano for two hours yesterday.', options: ['played', 'plaied', 'plaid', 'playing'], answer: 'played' },

      { type: 'fill-gap', title: 'Choose the correct past form', titleRu: 'Выберите правильную форму прошедшего времени',
        sentence: 'We ___ English at school last year.', options: ['studyed', 'studed', 'studied', 'studying'], answer: 'studied' },

      { type: 'error-correction', title: 'Fix the spelling', titleRu: 'Исправьте написание',
        instruction: 'Find the incorrectly spelled past tense form.',
        instructionRu: 'Найдите неправильно написанную форму прошедшего времени.',
        items: [
          { sentence: 'He stoped the car suddenly.', errorWord: 'stoped', correction: 'stopped' },
          { sentence: 'They carryed the boxes upstairs.', errorWord: 'carryed', correction: 'carried' },
          { sentence: 'She danceed all night.', errorWord: 'danceed', correction: 'danced' },
          { sentence: 'I tryed to call you.', errorWord: 'tryed', correction: 'tried' }
        ]
      },

      { type: 'practice', text: 'Practice Past Simple: Regular Verbs', textRu: 'Практика — правильные глаголы', gameId: 'verb-builder', topic: 'past-simple', buttonText: 'Play Verb Builder' },
    ],
  },

  // ===== UNIT 5: Past Simple: Irregular Verbs =====
  {
    id: 'a1plus-u5',
    title: 'Past Simple: Irregular Verbs',
    titleRu: 'Прошедшее время: неправильные глаголы',
    level: 'A1+',
    icon: '🔀',
    slides: [
      { type: 'title', html: '<h1>Past Simple: Irregular Verbs</h1><p class="subtitle">Прошедшее время: неправильные глаголы</p><p>These verbs do NOT follow the -ed rule!</p><p>Эти глаголы НЕ подчиняются правилу -ed!</p>' },

      { type: 'concept', title: 'Irregular verbs are different!', titleRu: 'Неправильные глаголы — особые!',
        text: 'Many common English verbs have a special past form. You must learn them by heart:',
        textRu: 'Многие частые английские глаголы имеют особую форму прошедшего времени. Их нужно выучить наизусть:',
        examples: [
          { english: 'I <b>go</b> to work. → Yesterday I <b>went</b> to work. (NOT goed!)', russian: 'Я хожу на работу. → Вчера я <b>ходил(а)</b> на работу.' },
          { english: 'She <b>eats</b> breakfast. → She <b>ate</b> breakfast an hour ago.', russian: 'Она ест завтрак. → Она <b>съела</b> завтрак час назад.' },
          { english: 'We <b>see</b> our friends. → We <b>saw</b> them last weekend.', russian: 'Мы видим друзей. → Мы <b>видели</b> их на прошлых выходных.' }
        ],
        note: 'Like regular verbs, the irregular past form is the SAME for all persons.',
        noteRu: 'Как и у правильных глаголов, форма прошедшего времени ОДИНАКОВАЯ для всех лиц.'
      },

      { type: 'grammar-table', title: 'Most Common Irregular Verbs', titleRu: 'Самые частые неправильные глаголы',
        headers: ['Base form', 'Past Simple', 'Translation / Перевод'],
        rows: [
          ['be', 'was / were', 'быть — был(а) / были'],
          ['go', 'went', 'идти — шёл/шла (вент)'],
          ['have', 'had', 'иметь — имел(а) (хэд)'],
          ['do', 'did', 'делать — делал(а) (дид)'],
          ['say', 'said', 'сказать — сказал(а) (сэд)'],
          ['get', 'got', 'получить — получил(а) (гот)'],
          ['make', 'made', 'делать — сделал(а) (мэйд)'],
          ['come', 'came', 'приходить — пришёл (кэйм)'],
          ['take', 'took', 'брать — взял(а) (тук)'],
          ['see', 'saw', 'видеть — видел(а) (со)'],
          ['know', 'knew', 'знать — знал(а) (нью)'],
          ['think', 'thought', 'думать — думал(а) (сот)'],
          ['give', 'gave', 'давать — дал(а) (гэйв)'],
          ['find', 'found', 'находить — нашёл (фаунд)'],
          ['tell', 'told', 'рассказать — рассказал(а) (тоулд)'],
          ['buy', 'bought', 'покупать — купил(а) (бот)'],
          ['eat', 'ate', 'есть — ел(а) (эйт)'],
          ['drink', 'drank', 'пить — пил(а) (дрэнк)'],
          ['write', 'wrote', 'писать — писал(а) (роут)'],
          ['read', 'read /red/', 'читать — читал(а) (рэд)'],
          ['put', 'put', 'класть — положил(а) (пут)'],
          ['run', 'ran', 'бежать — бежал(а) (рэн)'],
          ['sit', 'sat', 'сидеть — сидел(а) (сэт)'],
          ['speak', 'spoke', 'говорить — говорил(а) (споук)'],
          ['meet', 'met', 'встречать — встретил(а) (мет)']
        ],
        note: 'Some verbs don\'t change at all: put → put, read → read (but pronunciation changes!), cut → cut.',
        noteRu: 'Некоторые глаголы не меняются: put → put, read → read (но произношение меняется!), cut → cut.'
      },

      { type: 'vocab-match', title: 'Match the past forms', titleRu: 'Соедините формы прошедшего времени',
        pairs: [
          { english: 'went', russian: 'шёл/шла (go)' },
          { english: 'bought', russian: 'купил(а) (buy)' },
          { english: 'ate', russian: 'ел(а) (eat)' },
          { english: 'saw', russian: 'видел(а) (see)' },
          { english: 'thought', russian: 'думал(а) (think)' },
          { english: 'spoke', russian: 'говорил(а) (speak)' },
          { english: 'wrote', russian: 'писал(а) (write)' },
          { english: 'drank', russian: 'пил(а) (drink)' }
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct past form', titleRu: 'Выберите правильную форму',
        sentence: 'She ___ a beautiful song at the concert.', options: ['singed', 'sang', 'sung', 'sing'], answer: 'sang' },

      { type: 'fill-gap', title: 'Choose the correct past form', titleRu: 'Выберите правильную форму',
        sentence: 'We ___ pizza for dinner last night.', options: ['eated', 'eat', 'ate', 'eaten'], answer: 'ate' },

      { type: 'practice', text: 'Practice Irregular Verbs', textRu: 'Практика — неправильные глаголы', gameId: 'vocabulary', buttonText: 'Play Vocabulary Game' },
    ],
  },

  // ===== UNIT 6: Past Simple: Questions & Negatives =====
  {
    id: 'a1plus-u6',
    title: 'Past Simple: Questions & Negatives',
    titleRu: 'Прошедшее время: вопросы и отрицания',
    level: 'A1+',
    icon: '❓',
    slides: [
      { type: 'title', html: '<h1>Past Simple: Questions & Negatives</h1><p class="subtitle">Вопросы и отрицания в прошедшем времени</p><p>Using did / didn\'t</p><p>Использование did / didn\'t</p>' },

      { type: 'concept', title: 'How to make questions and negatives', titleRu: 'Как задавать вопросы и строить отрицания',
        text: 'Compare present and past:',
        textRu: 'Сравните настоящее и прошедшее:',
        examples: [
          { english: 'Do you <b>like</b> coffee? → <b>Did</b> you <b>like</b> the coffee?', russian: 'Ты любишь кофе? → Тебе понравился кофе?' },
          { english: 'She <b>doesn\'t</b> work. → She <b>didn\'t</b> work yesterday.', russian: 'Она не работает. → Она не работала вчера.' },
          { english: 'Where <b>does</b> he live? → Where <b>did</b> he live before?', russian: 'Где он живёт? → Где он жил раньше?' },
          { english: 'I <b>don\'t</b> understand. → I <b>didn\'t</b> understand the lesson.', russian: 'Я не понимаю. → Я не понял(а) урок.' }
        ],
        note: 'IMPORTANT: After did/didn\'t, always use the BASE form of the verb (NOT the past form!).',
        noteRu: 'ВАЖНО: После did/didn\'t всегда используйте БАЗОВУЮ форму глагола (НЕ форму прошедшего времени!).'
      },

      { type: 'structure', title: 'Sentence Structure', titleRu: 'Структура предложений',
        structures: [
          { label: 'Positive', labelRu: 'Утверждение', formula: 'Subject + past form', example: 'She went to the park.' },
          { label: 'Negative', labelRu: 'Отрицание', formula: 'Subject + did not (didn\'t) + base form', example: 'She didn\'t go to the park.' },
          { label: 'Yes/No Question', labelRu: 'Общий вопрос', formula: 'Did + subject + base form?', example: 'Did she go to the park?' },
          { label: 'Wh- Question', labelRu: 'Специальный вопрос', formula: 'Wh- + did + subject + base form?', example: 'Where did she go?' }
        ]
      },

      { type: 'tip', title: 'Common mistake!', titleRu: 'Частая ошибка!',
        text: 'After <b>did</b> / <b>didn\'t</b>, use the <b>base form</b>, not the past form!<br><br>✅ <b>Did</b> you <b>go</b>? (correct)<br>❌ <b>Did</b> you <b>went</b>? (wrong!)<br><br>✅ She <b>didn\'t eat</b> breakfast. (correct)<br>❌ She <b>didn\'t ate</b> breakfast. (wrong!)<br><br>Think of it this way: <b>did</b> already carries the past meaning, so the main verb stays in base form.',
        textRu: 'После <b>did</b> / <b>didn\'t</b> используйте <b>базовую форму</b>, не прошедшее время!<br><br><b>did</b> уже несёт значение прошедшего времени, поэтому основной глагол остаётся в базовой форме.'
      },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: '___ you ___ the film last night?', options: ['Did...watch', 'Did...watched', 'Do...watch', 'Were...watch'], answer: 'Did...watch' },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: 'They ___ to the party because they were tired.', options: ['didn\'t go', 'didn\'t went', 'don\'t go', 'not go'], answer: 'didn\'t go' },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: 'What time ___ the train ___?', options: ['did...arrive', 'did...arrived', 'was...arrive', 'does...arrived'], answer: 'did...arrive' },

      { type: 'error-correction', title: 'Fix the mistakes', titleRu: 'Исправьте ошибки',
        instruction: 'Find the incorrect word in each sentence.',
        instructionRu: 'Найдите неправильное слово в каждом предложении.',
        items: [
          { sentence: 'Did she went to school yesterday?', errorWord: 'went', correction: 'go' },
          { sentence: 'I didn\'t saw the accident.', errorWord: 'saw', correction: 'see' },
          { sentence: 'Where did they bought the tickets?', errorWord: 'bought', correction: 'buy' },
          { sentence: 'He didn\'t ate lunch today.', errorWord: 'ate', correction: 'eat' }
        ]
      },

      { type: 'practice', text: 'Practice Past Simple Q&N', textRu: 'Практика — вопросы и отрицания', gameId: 'verb-builder', topic: 'past-simple', buttonText: 'Play Verb Builder' },
    ],
  },

  // ===== UNIT 7: A Little / A Few / Little / Few =====
  {
    id: 'a1plus-u7',
    title: 'A Little / A Few / Little / Few',
    titleRu: 'A Little / A Few / Little / Few',
    level: 'A1+',
    icon: '📊',
    slides: [
      { type: 'title', html: '<h1>A Little / A Few / Little / Few</h1><p class="subtitle">Немного / Несколько / Мало</p><p>Small quantities — but with a big difference!</p><p>Маленькие количества — но с большой разницей!</p>' },

      { type: 'concept', title: 'Look at the difference', titleRu: 'Посмотрите на разницу',
        text: 'These sentences have different meanings:',
        textRu: 'Эти предложения имеют разные значения:',
        examples: [
          { english: 'I have <b>a few</b> friends in London. 🙂 (= some, enough)', russian: 'У меня есть <b>несколько</b> друзей в Лондоне. (= некоторые, достаточно)' },
          { english: 'I have <b>few</b> friends in London. 😟 (= not many, not enough)', russian: 'У меня <b>мало</b> друзей в Лондоне. (= немного, недостаточно)' },
          { english: 'There is <b>a little</b> milk in the fridge. 🙂 (= some, enough)', russian: 'В холодильнике есть <b>немного</b> молока. (= некоторое количество, достаточно)' },
          { english: 'There is <b>little</b> milk in the fridge. 😟 (= not much, not enough)', russian: 'В холодильнике <b>мало</b> молока. (= немного, недостаточно)' }
        ],
        note: '"A few / A little" = positive (some, it\'s OK). "Few / Little" = negative (not enough, it\'s a problem).',
        noteRu: '"A few / A little" = позитивно (есть немного, всё ОК). "Few / Little" = негативно (недостаточно, проблема).'
      },

      { type: 'grammar-table', title: 'When to use each', titleRu: 'Когда использовать',
        headers: ['', 'Countable (исчисляемые)', 'Uncountable (неисчисляемые)'],
        rows: [
          ['Positive (some ✅)', 'a few books / friends / apples', 'a little water / money / time'],
          ['Negative (not enough ❌)', 'few books / friends / apples', 'little water / money / time']
        ],
        note: 'Countable = things you can count (1 book, 2 books). Uncountable = things you cannot count (water, money, time, information).',
        noteRu: 'Исчисляемые = то, что можно посчитать (1 книга, 2 книги). Неисчисляемые = то, что нельзя посчитать (вода, деньги, время, информация).'
      },

      { type: 'examples', title: 'More examples', titleRu: 'Ещё примеры',
        items: [
          { english: 'I speak <b>a little</b> Russian. (= some, I can communicate)', russian: 'Я говорю <b>немного</b> по-русски. (= немного, могу общаться)' },
          { english: 'He has <b>a few</b> questions. (= some questions, it\'s normal)', russian: 'У него есть <b>несколько</b> вопросов. (= некоторые вопросы, это нормально)' },
          { english: 'We have <b>little</b> time. Hurry up! (= not enough time)', russian: 'У нас <b>мало</b> времени. Поторопись! (= недостаточно времени)' },
          { english: '<b>Few</b> students passed the exam. (= not many, it was hard)', russian: '<b>Мало</b> студентов сдали экзамен. (= немногие, было сложно)' }
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct word', titleRu: 'Выберите правильное слово',
        sentence: 'Can I have ___ sugar in my tea, please?', options: ['a few', 'a little', 'few', 'little'], answer: 'a little' },

      { type: 'fill-gap', title: 'Choose the correct word', titleRu: 'Выберите правильное слово',
        sentence: 'There are ___ eggs in the fridge. We can make an omelette.', options: ['a few', 'a little', 'few', 'little'], answer: 'a few' },

      { type: 'fill-gap', title: 'Choose the correct word', titleRu: 'Выберите правильное слово',
        sentence: 'He has ___ money. He can\'t buy lunch.', options: ['a few', 'a little', 'few', 'little'], answer: 'little' },

      { type: 'fill-gap', title: 'Choose the correct word', titleRu: 'Выберите правильное слово',
        sentence: 'Very ___ people came to the meeting. It was almost empty.', options: ['a few', 'a little', 'few', 'little'], answer: 'few' },

      { type: 'practice', text: 'Practice A Little / A Few', textRu: 'Практика — a little / a few', gameId: 'grammar-quiz', topic: 'countable-uncountable', buttonText: 'Play Grammar Quiz' },
    ],
  },

  // ===== UNIT 8: Comparatives & Superlatives =====
  {
    id: 'a1plus-u8',
    title: 'Comparatives & Superlatives',
    titleRu: 'Сравнительная и превосходная степени',
    level: 'A1+',
    icon: '📏',
    slides: [
      { type: 'title', html: '<h1>Comparatives & Superlatives</h1><p class="subtitle">Сравнительная и превосходная степени</p><p>Bigger, better, the best!</p><p>Больше, лучше, самый лучший!</p>' },

      { type: 'concept', title: 'Comparing things', titleRu: 'Сравнение',
        text: 'Look at how we compare:',
        textRu: 'Посмотрите, как мы сравниваем:',
        examples: [
          { english: 'Moscow is <b>big</b>. Saint Petersburg is <b>bigger</b>... No, Moscow is <b>bigger than</b> Saint Petersburg.', russian: 'Москва — большая. Санкт-Петербург больше... Нет, Москва <b>больше, чем</b> Санкт-Петербург.' },
          { english: 'Moscow is <b>the biggest</b> city in Russia.', russian: 'Москва — <b>самый большой</b> город в России.' },
          { english: 'English is <b>more popular than</b> French in Russia.', russian: 'Английский <b>более популярен, чем</b> французский в России.' },
          { english: 'English is <b>the most popular</b> foreign language.', russian: 'Английский — <b>самый популярный</b> иностранный язык.' }
        ],
        note: 'Comparative = comparing 2 things (bigger THAN). Superlative = THE biggest of all.',
        noteRu: 'Сравнительная = сравниваем 2 вещи (больше, ЧЕМ). Превосходная = САМЫЙ большой из всех.'
      },

      { type: 'grammar-table', title: 'How to form comparatives & superlatives', titleRu: 'Как образовать степени сравнения',
        headers: ['Type', 'Adjective', 'Comparative', 'Superlative'],
        rows: [
          ['Short (1 syllable)', 'tall', 'taller (than)', 'the tallest'],
          ['Short ending -e', 'nice', 'nicer', 'the nicest'],
          ['Short CVC', 'big', 'bigger', 'the biggest'],
          ['Ending -y', 'happy', 'happier', 'the happiest'],
          ['Long (2+ syllables)', 'beautiful', 'more beautiful', 'the most beautiful'],
          ['Long (2+ syllables)', 'expensive', 'more expensive', 'the most expensive']
        ],
        note: 'Short adjectives: add -er / -est. Long adjectives (2+ syllables): use more / the most. Adjectives ending in -y: change y to i, add -er/-est.',
        noteRu: 'Короткие прилагательные: добавляем -er / -est. Длинные (2+ слога): используем more / the most. На -y: меняем y на i, добавляем -er/-est.'
      },

      { type: 'grammar-table', title: 'Irregular comparatives', titleRu: 'Неправильные степени сравнения',
        headers: ['Adjective', 'Comparative', 'Superlative', 'Перевод'],
        rows: [
          ['good', 'better', 'the best', 'хороший — лучше — лучший'],
          ['bad', 'worse', 'the worst', 'плохой — хуже — худший'],
          ['far', 'farther/further', 'the farthest/furthest', 'далёкий — дальше — самый далёкий'],
          ['much/many', 'more', 'the most', 'много — больше — больше всего'],
          ['little', 'less', 'the least', 'мало — меньше — меньше всего']
        ],
        note: 'These are very common — learn them by heart!',
        noteRu: 'Они очень часто используются — выучите их наизусть!'
      },

      { type: 'examples', title: 'Examples in sentences', titleRu: 'Примеры в предложениях',
        items: [
          { english: 'Summer is <b>hotter than</b> spring.', russian: 'Лето <b>жарче, чем</b> весна.' },
          { english: 'This book is <b>more interesting than</b> that one.', russian: 'Эта книга <b>интереснее, чем</b> та.' },
          { english: 'She is <b>the tallest</b> girl in the class.', russian: 'Она <b>самая высокая</b> девочка в классе.' },
          { english: 'My cooking is <b>worse than</b> my mum\'s.', russian: 'Моя готовка <b>хуже, чем</b> у мамы.' },
          { english: 'This is <b>the best</b> day of my life!', russian: 'Это <b>лучший</b> день в моей жизни!' }
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: 'A car is ___ than a bicycle.', options: ['fast', 'faster', 'fastest', 'more fast'], answer: 'faster' },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: 'This is ___ film I have ever seen.', options: ['the worse', 'the worst', 'the baddest', 'worse'], answer: 'the worst' },

      { type: 'error-correction', title: 'Fix the comparison mistakes', titleRu: 'Исправьте ошибки сравнения',
        instruction: 'Find and correct the mistake.',
        instructionRu: 'Найдите и исправьте ошибку.',
        items: [
          { sentence: 'She is more tall than her brother.', errorWord: 'tall', correction: 'taller' },
          { sentence: 'This is the goodest restaurant in town.', errorWord: 'goodest', correction: 'best' },
          { sentence: 'My bag is heavyer than yours.', errorWord: 'heavyer', correction: 'heavier' },
          { sentence: 'He is the most fast runner in the team.', errorWord: 'fast', correction: 'fastest' }
        ]
      },

      { type: 'practice', text: 'Practice Comparatives & Superlatives', textRu: 'Практика — степени сравнения', gameId: 'grammar-quiz', topic: 'comparatives', buttonText: 'Play Grammar Quiz' },
    ],
  },

  // ===== UNIT 9: Be Going To =====
  {
    id: 'a1plus-u9',
    title: 'Be Going To',
    titleRu: 'Конструкция Be Going To',
    level: 'A1+',
    icon: '🔮',
    slides: [
      { type: 'title', html: '<h1>Be Going To</h1><p class="subtitle">Собираться что-то сделать</p><p>Talking about future plans</p><p>Говорим о планах на будущее</p>' },

      { type: 'concept', title: 'Future plans and intentions', titleRu: 'Планы и намерения на будущее',
        text: 'We use "be going to" for plans we have already decided:',
        textRu: 'Мы используем "be going to" для планов, которые мы уже решили:',
        examples: [
          { english: 'I <b>am going to</b> visit my grandmother this weekend.', russian: 'Я <b>собираюсь</b> навестить бабушку на этих выходных.' },
          { english: 'She <b>is going to</b> study medicine at university.', russian: 'Она <b>собирается</b> изучать медицину в университете.' },
          { english: 'We <b>are going to</b> buy a new car next month.', russian: 'Мы <b>собираемся</b> купить новую машину в следующем месяце.' },
          { english: 'Look at those clouds! It <b>is going to</b> rain.', russian: 'Посмотри на те облака! <b>Собирается</b> пойти дождь.' }
        ],
        note: 'Also used for predictions based on what we can see now (evidence).',
        noteRu: 'Также используется для предсказаний, основанных на том, что мы видим сейчас (очевидность).'
      },

      { type: 'grammar-table', title: 'Be Going To: Forms', titleRu: 'Be Going To: Формы',
        headers: ['', 'Positive (+)', 'Negative (-)', 'Question (?)'],
        rows: [
          ['I', 'I\'m going to travel', 'I\'m not going to travel', 'Am I going to travel?'],
          ['He/She/It', 'She\'s going to travel', 'She isn\'t going to travel', 'Is she going to travel?'],
          ['We/You/They', 'They\'re going to travel', 'They aren\'t going to travel', 'Are they going to travel?']
        ],
        note: 'In spoken English, "going to" often sounds like "gonna" (гона): I\'m gonna do it. (informal)',
        noteRu: 'В разговорном английском "going to" часто звучит как "gonna" (гона): I\'m gonna do it. (неформально)'
      },

      { type: 'tip', title: 'Plans vs. Evidence', titleRu: 'Планы vs. Очевидность',
        text: '<b>Plans / Intentions (already decided):</b><br>• I\'m going to learn Chinese next year. (Я собираюсь учить китайский в следующем году.)<br>• We\'re going to move to a bigger flat. (Мы собираемся переехать в квартиру побольше.)<br><br><b>Predictions with evidence (we can see it):</b><br>• She\'s pregnant. She\'s going to have a baby! (Она беременна. У неё будет ребёнок!)<br>• Be careful! You\'re going to fall! (Осторожно! Ты упадёшь!)<br>• The sky is dark. It\'s going to snow. (Небо тёмное. Будет снег.)',
        textRu: 'Два основных использования: (1) планы, которые мы уже решили, и (2) предсказания на основе очевидных признаков.'
      },

      { type: 'examples', title: 'Common uses', titleRu: 'Частые случаи использования',
        items: [
          { english: 'What <b>are</b> you <b>going to do</b> tonight?', russian: 'Что ты <b>собираешься делать</b> сегодня вечером?' },
          { english: 'I\'m <b>not going to</b> eat junk food anymore.', russian: 'Я <b>не собираюсь</b> больше есть фастфуд.' },
          { english: '<b>Are</b> they <b>going to</b> come to the party?', russian: 'Они <b>собираются</b> прийти на вечеринку?' },
          { english: 'He <b>isn\'t going to</b> pass the exam. He didn\'t study.', russian: 'Он <b>не сдаст</b> экзамен. Он не учился.' }
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: 'She ___ a doctor when she grows up.', options: ['is going to be', 'going to be', 'is going be', 'are going to be'], answer: 'is going to be' },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: 'We ___ pizza for dinner tonight.', options: ['going to order', 'are going to order', 'is going to order', 'am going to order'], answer: 'are going to order' },

      { type: 'fill-gap', title: 'Choose the correct form', titleRu: 'Выберите правильную форму',
        sentence: 'Look at that car! It ___ crash!', options: ['is going to', 'are going to', 'going to', 'will to'], answer: 'is going to' },

      { type: 'practice', text: 'Practice Be Going To', textRu: 'Практика — be going to', gameId: 'grammar-quiz', topic: 'be-going-to', buttonText: 'Play Grammar Quiz' },
    ],
  },

  // ===== UNIT 10: Imperatives =====
  {
    id: 'a1plus-u10',
    title: 'Imperatives',
    titleRu: 'Повелительное наклонение',
    level: 'A1+',
    icon: '👆',
    slides: [
      { type: 'title', html: '<h1>Imperatives</h1><p class="subtitle">Повелительное наклонение</p><p>Commands, instructions, and requests</p><p>Команды, инструкции и просьбы</p>' },

      { type: 'concept', title: 'Giving instructions', titleRu: 'Даём инструкции',
        text: 'Imperatives are very simple — just use the base verb:',
        textRu: 'Повелительное наклонение очень простое — просто используйте базовую форму глагола:',
        examples: [
          { english: '<b>Open</b> the door, please.', russian: '<b>Откройте</b> дверь, пожалуйста.' },
          { english: '<b>Sit down</b> and <b>listen</b>.', russian: '<b>Сядьте</b> и <b>слушайте</b>.' },
          { english: '<b>Turn left</b> at the traffic lights.', russian: '<b>Поверните налево</b> на светофоре.' },
          { english: '<b>Don\'t touch</b> that! It\'s hot!', russian: '<b>Не трогайте</b> это! Горячо!' },
          { english: '<b>Don\'t run</b> in the corridor!', russian: '<b>Не бегайте</b> в коридоре!' }
        ],
        note: 'Positive: verb + ... | Negative: Don\'t + verb + ...',
        noteRu: 'Утверждение: глагол + ... | Отрицание: Don\'t + глагол + ...'
      },

      { type: 'rule', title: 'Uses of imperatives', titleRu: 'Использование повелительного наклонения',
        rules: [
          { rule: 'Instructions / Directions', ruleRu: 'Инструкции / Направления', example: 'Turn right. Go straight. Take the second left.' },
          { rule: 'Commands / Orders', ruleRu: 'Команды / Приказы', example: 'Stop! Be quiet! Stand up!' },
          { rule: 'Requests (with please)', ruleRu: 'Просьбы (с please)', example: 'Please sit down. Close the window, please.' },
          { rule: 'Advice / Suggestions', ruleRu: 'Советы / Предложения', example: 'Try the fish — it\'s delicious! Don\'t worry about it.' },
          { rule: 'Warnings', ruleRu: 'Предупреждения', example: 'Be careful! Watch out! Don\'t forget your keys!' },
          { rule: 'Offers / Invitations', ruleRu: 'Предложения / Приглашения', example: 'Come in! Have a seat. Help yourself to some cake.' }
        ]
      },

      { type: 'tip', title: 'Let\'s for suggestions', titleRu: '"Let\'s" для предложений',
        text: 'Use <b>Let\'s</b> (= Let us) to make suggestions for a group:<br><br>• <b>Let\'s go</b> to the cinema! (Пойдём в кино!)<br>• <b>Let\'s eat</b> something. I\'m hungry. (Давай поедим. Я голоден.)<br>• <b>Let\'s not argue</b> about this. (Давайте не будем спорить об этом.)<br><br>Negative: <b>Let\'s not</b> + verb',
        textRu: 'Используйте <b>Let\'s</b> для предложений группе. Отрицание: <b>Let\'s not</b> + глагол.'
      },

      { type: 'examples', title: 'Common imperative phrases', titleRu: 'Частые повелительные фразы',
        items: [
          { english: '<b>Look out!</b> / <b>Watch out!</b>', russian: '<b>Осторожно!</b> / <b>Берегись!</b>' },
          { english: '<b>Hurry up!</b>', russian: '<b>Поторопись!</b>' },
          { english: '<b>Take care!</b>', russian: '<b>Береги себя!</b>' },
          { english: '<b>Have a nice day!</b>', russian: '<b>Хорошего дня!</b>' },
          { english: '<b>Don\'t be late!</b>', russian: '<b>Не опаздывай!</b>' },
          { english: '<b>Help yourself!</b>', russian: '<b>Угощайтесь!</b>' }
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct imperative', titleRu: 'Выберите правильную форму',
        sentence: '___ the window, please. It\'s cold.', options: ['Close', 'Closing', 'You close', 'Closes'], answer: 'Close' },

      { type: 'fill-gap', title: 'Choose the correct imperative', titleRu: 'Выберите правильную форму',
        sentence: '___ run near the swimming pool!', options: ['Don\'t', 'Not', 'No', 'Doesn\'t'], answer: 'Don\'t' },

      { type: 'fill-gap', title: 'Choose the correct imperative', titleRu: 'Выберите правильную форму',
        sentence: '___ go to the park! The weather is beautiful.', options: ['Let\'s', 'Let', 'We', 'Do'], answer: 'Let\'s' },

      { type: 'practice', text: 'Practice Imperatives', textRu: 'Практика — повелительное наклонение', gameId: 'grammar-quiz', topic: 'imperatives', buttonText: 'Play Grammar Quiz' },
    ],
  },

  // ===== UNIT 11: Reading: A Day Out =====
  {
    id: 'a1plus-u11',
    title: 'Reading: A Day Out',
    titleRu: 'Чтение: Выходной день',
    level: 'A1+',
    icon: '🌳',
    slides: [
      { type: 'title', html: '<h1>Reading: A Day Out</h1><p class="subtitle">Чтение: Выходной день</p><p>A weekend trip story in the Past Simple</p><p>История о поездке на выходных в прошедшем времени</p>' },

      { type: 'reading', title: 'A Day at the Lake', titleRu: 'День на озере',
        text: '<p>Last Saturday, my family and I <b>went</b> to Lake Seliger for the day. We <b>got up</b> very early — at six o\'clock in the morning! My mother <b>made</b> sandwiches and my father <b>put</b> everything in the car.</p><p>We <b>drove</b> for about three hours. When we <b>arrived</b>, the weather <b>was</b> beautiful — sunny and warm. First, we <b>walked</b> along the lake and <b>took</b> lots of photographs. The water <b>was</b> so clear!</p><p>Then we <b>found</b> a nice spot under a big tree and <b>had</b> a <b>picnic</b>. We <b>ate</b> the sandwiches and <b>drank</b> lemonade. After lunch, my brother and I <b>swam</b> in the lake. The water <b>was</b> cold at first, but then it <b>felt</b> really nice.</p><p>In the afternoon, we <b>played</b> football on the grass and my father <b>caught</b> two fish! We <b>didn\'t cook</b> them — we <b>put</b> them back in the water.</p><p>We <b>left</b> at about six o\'clock and <b>got</b> home at nine. I <b>was</b> very tired but happy. It <b>was</b> a wonderful day!</p>',
        vocabWords: [
          { word: 'got up', meaning: 'woke up and left bed', meaningRu: 'встал(а), проснулся(-лась)' },
          { word: 'drove', meaning: 'past of "drive" — travelled by car', meaningRu: 'ехал(а) на машине (прошл. от drive)' },
          { word: 'arrived', meaning: 'came to a place', meaningRu: 'прибыл(а), приехал(а)' },
          { word: 'spot', meaning: 'a particular place', meaningRu: 'место, местечко' },
          { word: 'picnic', meaning: 'eating outdoors', meaningRu: 'пикник, еда на свежем воздухе' },
          { word: 'swam', meaning: 'past of "swim"', meaningRu: 'плавал(а) (прошл. от swim)' },
          { word: 'caught', meaning: 'past of "catch" — took from the water', meaningRu: 'поймал(а) (прошл. от catch)' },
          { word: 'wonderful', meaning: 'very good, amazing', meaningRu: 'замечательный, чудесный' }
        ]
      },

      { type: 'comprehension', title: 'Check your understanding', titleRu: 'Проверьте понимание',
        questions: [
          { question: 'Where did the family go?', questionRu: 'Куда поехала семья?', options: ['To the mountains', 'To Lake Seliger', 'To the seaside'], answer: 'To Lake Seliger' },
          { question: 'What time did they get up?', questionRu: 'Во сколько они встали?', options: ['5 a.m.', '6 a.m.', '7 a.m.'], answer: '6 a.m.' },
          { question: 'How long did they drive?', questionRu: 'Сколько они ехали?', options: ['About 2 hours', 'About 3 hours', 'About 4 hours'], answer: 'About 3 hours' },
          { question: 'The weather was rainy.', questionRu: 'Погода была дождливая.', options: ['True', 'False'], answer: 'False' },
          { question: 'They swam in the lake.', questionRu: 'Они плавали в озере.', options: ['True', 'False'], answer: 'True' },
          { question: 'They cooked the fish for dinner.', questionRu: 'Они приготовили рыбу на ужин.', options: ['True', 'False'], answer: 'False' },
          { question: 'What time did they get home?', questionRu: 'Во сколько они приехали домой?', options: ['At 6 p.m.', 'At 8 p.m.', 'At 9 p.m.'], answer: 'At 9 p.m.' }
        ]
      },

      { type: 'vocab-match', title: 'Match the irregular past forms from the text', titleRu: 'Соедините неправильные формы из текста',
        pairs: [
          { english: 'went', russian: 'идти (go)' },
          { english: 'made', russian: 'делать (make)' },
          { english: 'drove', russian: 'ехать (drive)' },
          { english: 'took', russian: 'брать (take)' },
          { english: 'found', russian: 'находить (find)' },
          { english: 'swam', russian: 'плавать (swim)' },
          { english: 'caught', russian: 'ловить (catch)' },
          { english: 'left', russian: 'уехать (leave)' }
        ]
      },

      { type: 'practice', text: 'Practice Past Simple Reading', textRu: 'Практика — чтение в прошедшем времени', gameId: 'vocabulary', buttonText: 'Play Vocabulary Game' },
    ],
  },

  // ===== UNIT 12: Reading: My Neighbourhood =====
  {
    id: 'a1plus-u12',
    title: 'Reading: My Neighbourhood',
    titleRu: 'Чтение: Мой район',
    level: 'A1+',
    icon: '🏘️',
    slides: [
      { type: 'title', html: '<h1>Reading: My Neighbourhood</h1><p class="subtitle">Чтение: Мой район</p><p>There is / There are + prepositions</p><p>There is / There are + предлоги</p>' },

      { type: 'reading', title: 'My Neighbourhood', titleRu: 'Мой район',
        text: '<p>My name is Katya and I live in a <b>neighbourhood</b> called Yasenevo in the south of Moscow. I like it here because there are many nice places <b>near</b> my building.</p><p>There is a big <b>supermarket</b> <b>next to</b> my house — it is very <b>convenient</b>. <b>Opposite</b> the supermarket, there is a small park with a <b>playground</b> for children. There are <b>several</b> benches under the trees where old people like to sit and talk.</p><p>There is a school <b>behind</b> the park. It is my old school! <b>Between</b> the school and the library, there is a small <b>bakery</b> that makes wonderful bread and <b>pastries</b>. I go there every morning.</p><p>There are also two <b>cafes</b> on my street. One is <b>on the corner</b>, and the other is <b>in front of</b> the metro station. There isn\'t a cinema in my neighbourhood, but there is one in the <b>shopping centre</b> about ten minutes away by bus.</p><p>I think my neighbourhood is a great place to live. There are good <b>transport links</b>, friendly people, and everything I need is <b>within walking distance</b>.</p>',
        vocabWords: [
          { word: 'neighbourhood', meaning: 'the area where you live', meaningRu: 'район, окрестности' },
          { word: 'convenient', meaning: 'easy to use, practical', meaningRu: 'удобный, практичный' },
          { word: 'opposite', meaning: 'on the other side of the street', meaningRu: 'напротив' },
          { word: 'playground', meaning: 'area for children to play', meaningRu: 'детская площадка' },
          { word: 'several', meaning: 'more than two, but not very many', meaningRu: 'несколько' },
          { word: 'bakery', meaning: 'shop that sells bread and cakes', meaningRu: 'пекарня, булочная' },
          { word: 'pastries', meaning: 'sweet baked goods', meaningRu: 'выпечка, кондитерские изделия' },
          { word: 'within walking distance', meaning: 'close enough to walk', meaningRu: 'в пешей доступности' }
        ]
      },

      { type: 'comprehension', title: 'Check your understanding', titleRu: 'Проверьте понимание',
        questions: [
          { question: 'Where does Katya live?', questionRu: 'Где живёт Катя?', options: ['In the centre of Moscow', 'In the south of Moscow', 'In Saint Petersburg'], answer: 'In the south of Moscow' },
          { question: 'There is a supermarket next to her house.', questionRu: 'Рядом с её домом есть супермаркет.', options: ['True', 'False'], answer: 'True' },
          { question: 'The park is behind the supermarket.', questionRu: 'Парк находится за супермаркетом.', options: ['True', 'False'], answer: 'False' },
          { question: 'Where is the bakery?', questionRu: 'Где находится пекарня?', options: ['Next to the house', 'Between the school and library', 'In front of the metro'], answer: 'Between the school and library' },
          { question: 'There is a cinema in the neighbourhood.', questionRu: 'В районе есть кинотеатр.', options: ['True', 'False'], answer: 'False' },
          { question: 'How many cafes are on her street?', questionRu: 'Сколько кафе на её улице?', options: ['One', 'Two', 'Three'], answer: 'Two' }
        ]
      },

      { type: 'vocab-match', title: 'Match the prepositions', titleRu: 'Соедините предлоги',
        pairs: [
          { english: 'next to', russian: 'рядом с' },
          { english: 'opposite', russian: 'напротив' },
          { english: 'behind', russian: 'за, позади' },
          { english: 'between', russian: 'между' },
          { english: 'in front of', russian: 'перед' },
          { english: 'on the corner', russian: 'на углу' },
          { english: 'near', russian: 'около, близко' }
        ]
      },

      { type: 'practice', text: 'Practice Neighbourhood Vocabulary', textRu: 'Практика — лексика о районе', gameId: 'vocabulary', buttonText: 'Play Vocabulary Game' },
    ],
  },

  // ===== UNIT 13: At the Airport =====
  {
    id: 'a1plus-u13',
    title: 'At the Airport',
    titleRu: 'В аэропорту',
    level: 'A1+',
    icon: '✈️',
    slides: [
      { type: 'title', html: '<h1>At the Airport</h1><p class="subtitle">В аэропорту</p><p>Travel vocabulary and useful phrases</p><p>Лексика для путешествий и полезные фразы</p>' },

      { type: 'vocab', title: 'Airport vocabulary', titleRu: 'Словарь аэропорта',
        words: [
          { word: 'passport', transcription: '/ˈpɑːspɔːt/', translation: 'паспорт (паспорт)', example: 'Can I see your passport, please?' },
          { word: 'boarding pass', transcription: '/ˈbɔːdɪŋ pɑːs/', translation: 'посадочный талон (бординг пас)', example: 'Here is your boarding pass.' },
          { word: 'luggage / baggage', transcription: '/ˈlʌɡɪdʒ/', translation: 'багаж (лагидж)', example: 'How many pieces of luggage do you have?' },
          { word: 'check-in desk', transcription: '/tʃek ɪn desk/', translation: 'стойка регистрации (чек-ин деск)', example: 'Go to the check-in desk first.' },
          { word: 'departure', transcription: '/dɪˈpɑːtʃə/', translation: 'вылет, отправление (дипарчэ)', example: 'The departure time is 14:30.' },
          { word: 'arrival', transcription: '/əˈraɪvl/', translation: 'прибытие (эрайвл)', example: 'Arrivals are on the ground floor.' },
          { word: 'gate', transcription: '/ɡeɪt/', translation: 'выход (на посадку) (гэйт)', example: 'Your flight leaves from Gate 12.' },
          { word: 'delay', transcription: '/dɪˈleɪ/', translation: 'задержка (дилэй)', example: 'There is a two-hour delay.' },
          { word: 'flight', transcription: '/flaɪt/', translation: 'рейс, полёт (флайт)', example: 'Flight SU123 to London is now boarding.' },
          { word: 'security', transcription: '/sɪˈkjʊərɪti/', translation: 'безопасность, досмотр (секьюрити)', example: 'Please go through security.' }
        ]
      },

      { type: 'dialogue', title: 'At the check-in desk', titleRu: 'На стойке регистрации',
        speakers: ['Agent', 'Passenger'],
        lines: [
          { speaker: 'Agent', text: 'Good morning. Can I see your <b>passport</b> and <b>booking confirmation</b>, please?', textRu: 'Доброе утро. Можно ваш паспорт и подтверждение бронирования, пожалуйста?' },
          { speaker: 'Passenger', text: 'Yes, here you are.', textRu: 'Да, вот, пожалуйста.' },
          { speaker: 'Agent', text: 'How many <b>bags</b> are you checking in?', textRu: 'Сколько сумок вы сдаёте в багаж?' },
          { speaker: 'Passenger', text: 'Just one suitcase, please.', textRu: 'Только один чемодан, пожалуйста.' },
          { speaker: 'Agent', text: 'Would you like a <b>window seat</b> or an <b>aisle seat</b>?', textRu: 'Вы хотите место у окна или у прохода?' },
          { speaker: 'Passenger', text: 'A window seat, please.', textRu: 'У окна, пожалуйста.' },
          { speaker: 'Agent', text: 'Here is your <b>boarding pass</b>. Your flight <b>departs</b> from <b>Gate 15</b>. <b>Boarding</b> begins at 13:45.', textRu: 'Вот ваш посадочный талон. Ваш рейс вылетает из выхода 15. Посадка начинается в 13:45.' },
          { speaker: 'Passenger', text: 'Thank you very much!', textRu: 'Спасибо большое!' }
        ]
      },

      { type: 'tip', title: 'Useful airport phrases', titleRu: 'Полезные фразы в аэропорту',
        text: '<b>Where is the check-in desk?</b> — Где стойка регистрации?<br><b>What time does the plane depart?</b> — Во сколько вылет?<br><b>Is the flight on time?</b> — Рейс вовремя?<br><b>Where is Gate 7?</b> — Где выход 7?<br><b>Can I take this on the plane?</b> — Можно взять это в самолёт?<br><b>How long is the flight?</b> — Сколько длится полёт?<br><b>Is there a delay?</b> — Есть задержка?<br><b>I\'ve lost my boarding pass.</b> — Я потерял(а) посадочный талон.',
        textRu: 'Запомните эти фразы — они помогут вам в любом аэропорту мира.'
      },

      { type: 'structure', title: 'Airport process — step by step', titleRu: 'Процесс в аэропорту — пошагово',
        structures: [
          { label: '1. Check in', labelRu: '1. Регистрация', formula: 'check-in desk or online', example: 'Show passport, get boarding pass.' },
          { label: '2. Drop baggage', labelRu: '2. Сдать багаж', formula: 'baggage drop-off', example: 'Put your suitcase on the belt.' },
          { label: '3. Security', labelRu: '3. Досмотр', formula: 'security checkpoint', example: 'Show boarding pass, go through scanner.' },
          { label: '4. Wait at gate', labelRu: '4. Ждать у выхода', formula: 'departure gate', example: 'Wait until boarding begins.' },
          { label: '5. Board the plane', labelRu: '5. Посадка', formula: 'boarding', example: 'Show boarding pass, find your seat.' }
        ]
      },

      { type: 'fill-gap', title: 'Choose the correct word', titleRu: 'Выберите правильное слово',
        sentence: 'Your flight departs from ___ 12. Please go there now.', options: ['Gate', 'Door', 'Exit', 'Room'], answer: 'Gate' },

      { type: 'fill-gap', title: 'Choose the correct word', titleRu: 'Выберите правильное слово',
        sentence: 'Would you like a window ___ or an aisle ___?', options: ['chair...chair', 'seat...seat', 'place...place', 'sit...sit'], answer: 'seat...seat' },

      { type: 'fill-gap', title: 'Choose the correct word', titleRu: 'Выберите правильное слово',
        sentence: 'How many pieces of ___ do you have?', options: ['luggage', 'luggages', 'bag', 'suitcase'], answer: 'luggage' },

      { type: 'practice', text: 'Practice Airport Vocabulary', textRu: 'Практика — лексика аэропорта', gameId: 'vocabulary', buttonText: 'Play Vocabulary Game' },
    ],
  },

  // ===== UNIT 14: At the Restaurant =====
  {
    id: 'a1plus-u14',
    title: 'At the Restaurant',
    titleRu: 'В ресторане',
    level: 'A1+',
    icon: '🍽️',
    slides: [
      { type: 'title', html: '<h1>At the Restaurant</h1><p class="subtitle">В ресторане</p><p>Ordering food and drinks</p><p>Заказываем еду и напитки</p>' },

      { type: 'vocab', title: 'Restaurant vocabulary', titleRu: 'Словарь ресторана',
        words: [
          { word: 'menu', transcription: '/ˈmenjuː/', translation: 'меню (меню)', example: 'Can I see the menu, please?' },
          { word: 'starter / appetizer', transcription: '/ˈstɑːtə/', translation: 'закуска (стартэ)', example: 'Would you like a starter?' },
          { word: 'main course', transcription: '/meɪn kɔːs/', translation: 'основное блюдо (мэйн кос)', example: 'For the main course, I\'ll have the chicken.' },
          { word: 'dessert', transcription: '/dɪˈzɜːt/', translation: 'десерт (дизёт)', example: 'What desserts do you have?' },
          { word: 'bill', transcription: '/bɪl/', translation: 'счёт (бил)', example: 'Can we have the bill, please?' },
          { word: 'tip', transcription: '/tɪp/', translation: 'чаевые (тип)', example: 'We left a 10% tip.' },
          { word: 'waiter / waitress', transcription: '/ˈweɪtə/', translation: 'официант / официантка (вэйтэ)', example: 'The waiter brought our food.' },
          { word: 'reservation / booking', transcription: '/ˌrezəˈveɪʃn/', translation: 'бронирование (резэвэйшн)', example: 'I have a reservation for two people.' }
        ]
      },

      { type: 'dialogue', title: 'Ordering at a restaurant', titleRu: 'Заказ в ресторане',
        speakers: ['Waiter', 'Customer'],
        lines: [
          { speaker: 'Waiter', text: 'Good evening. Do you have a <b>reservation</b>?', textRu: 'Добрый вечер. У вас есть бронирование?' },
          { speaker: 'Customer', text: 'Yes, a table for two under the name Petrov.', textRu: 'Да, столик на двоих на имя Петров.' },
          { speaker: 'Waiter', text: 'This way, please. Here is the <b>menu</b>.', textRu: 'Проходите, пожалуйста. Вот меню.' },
          { speaker: 'Waiter', text: 'Are you ready to <b>order</b>?', textRu: 'Вы готовы сделать заказ?' },
          { speaker: 'Customer', text: 'Yes. For a <b>starter</b>, I\'d like the soup, please.', textRu: 'Да. На закуску я бы хотел суп, пожалуйста.' },
          { speaker: 'Waiter', text: 'And for the <b>main course</b>?', textRu: 'А на основное блюдо?' },
          { speaker: 'Customer', text: 'I\'ll <b>have</b> the grilled salmon with vegetables.', textRu: 'Я возьму лосось на гриле с овощами.' },
          { speaker: 'Waiter', text: 'Would you like anything to <b>drink</b>?', textRu: 'Что-нибудь будете пить?' },
          { speaker: 'Customer', text: 'A glass of water, please.', textRu: 'Стакан воды, пожалуйста.' },
          { speaker: 'Waiter', text: 'Certainly. I\'ll bring your order shortly.', textRu: 'Конечно. Принесу ваш заказ в ближайшее время.' }
        ]
      },

      { type: 'tip', title: 'Useful restaurant phrases', titleRu: 'Полезные фразы в ресторане',
        text: '<b>Ordering:</b><br>• I\'d like... (Я бы хотел(а)...)<br>• I\'ll have... (Я возьму...)<br>• Can I have... please? (Можно мне... пожалуйста?)<br>• Could I have... please? (more polite) (Могу ли я...?)<br><br><b>Asking:</b><br>• What do you recommend? (Что порекомендуете?)<br>• Is this dish spicy? (Это блюдо острое?)<br>• Does this contain nuts? (Это содержит орехи?)<br>• Can I have the bill, please? (Можно счёт, пожалуйста?)<br><br><b>Problems:</b><br>• Excuse me, this isn\'t what I ordered. (Извините, это не то, что я заказал(а).)<br>• Could I have a clean fork, please? (Можно чистую вилку?)',
        textRu: 'Запомните эти фразы для уверенного общения в ресторане.'
      },

      { type: 'vocab-match', title: 'Match the food vocabulary', titleRu: 'Соедините кулинарную лексику',
        pairs: [
          { english: 'starter', russian: 'закуска' },
          { english: 'main course', russian: 'основное блюдо' },
          { english: 'dessert', russian: 'десерт' },
          { english: 'bill', russian: 'счёт' },
          { english: 'tip', russian: 'чаевые' },
          { english: 'reservation', russian: 'бронирование' },
          { english: 'waiter', russian: 'официант' },
          { english: 'menu', russian: 'меню' }
        ]
      },

      { type: 'fill-gap', title: 'Complete the phrase', titleRu: 'Дополните фразу',
        sentence: 'Excuse me, can we have the ___, please? We\'d like to pay.', options: ['bill', 'menu', 'receipt', 'tip'], answer: 'bill' },

      { type: 'fill-gap', title: 'Complete the phrase', titleRu: 'Дополните фразу',
        sentence: 'I\'d ___ the chicken soup for a starter, please.', options: ['want', 'like', 'have', 'take'], answer: 'like' },

      { type: 'fill-gap', title: 'Complete the phrase', titleRu: 'Дополните фразу',
        sentence: 'Do you have a ___ ? — Yes, a table for four under the name Ivanov.', options: ['booking', 'reservation', 'order', 'Both A and B'], answer: 'Both A and B' },

      { type: 'practice', text: 'Practice Restaurant Vocabulary', textRu: 'Практика — лексика ресторана', gameId: 'vocabulary', buttonText: 'Play Vocabulary Game' },
    ],
  },

  // ===== UNIT 15: Shopping =====
  {
    id: 'a1plus-u15',
    title: 'Shopping',
    titleRu: 'Покупки',
    level: 'A1+',
    icon: '🛒',
    slides: [
      { type: 'title', html: '<h1>Shopping</h1><p class="subtitle">Покупки</p><p>Prices, sizes, and paying</p><p>Цены, размеры и оплата</p>' },

      { type: 'vocab', title: 'Shopping vocabulary', titleRu: 'Словарь покупок',
        words: [
          { word: 'price', transcription: '/praɪs/', translation: 'цена (прайс)', example: 'What\'s the price of this jacket?' },
          { word: 'size', transcription: '/saɪz/', translation: 'размер (сайз)', example: 'What size do you need?' },
          { word: 'sale / discount', transcription: '/seɪl/', translation: 'распродажа / скидка (сэйл)', example: 'There\'s a 20% sale on all shoes.' },
          { word: 'receipt', transcription: '/rɪˈsiːt/', translation: 'чек (рисит)', example: 'Can I have a receipt, please?' },
          { word: 'cash', transcription: '/kæʃ/', translation: 'наличные (кэш)', example: 'Do you want to pay by cash or card?' },
          { word: 'change', transcription: '/tʃeɪndʒ/', translation: 'сдача (чэйндж)', example: 'Here is your change — two pounds fifty.' },
          { word: 'fitting room', transcription: '/ˈfɪtɪŋ ruːm/', translation: 'примерочная (фитинг рум)', example: 'The fitting rooms are over there.' },
          { word: 'try on', transcription: '/traɪ ɒn/', translation: 'примерить (трай он)', example: 'Can I try this on, please?' },
          { word: 'refund', transcription: '/ˈriːfʌnd/', translation: 'возврат денег (рифанд)', example: 'Can I get a refund?' },
          { word: 'too tight / too loose', transcription: '/taɪt/ /luːs/', translation: 'слишком тесно / слишком свободно', example: 'These trousers are too tight.' }
        ]
      },

      { type: 'dialogue', title: 'In a clothes shop', titleRu: 'В магазине одежды',
        speakers: ['Shop assistant', 'Customer'],
        lines: [
          { speaker: 'Shop assistant', text: 'Hello! Can I <b>help</b> you?', textRu: 'Здравствуйте! Могу я вам помочь?' },
          { speaker: 'Customer', text: 'Yes, I\'m looking for a warm <b>jacket</b>.', textRu: 'Да, я ищу тёплую куртку.' },
          { speaker: 'Shop assistant', text: 'What <b>size</b> are you?', textRu: 'Какой у вас размер?' },
          { speaker: 'Customer', text: 'I\'m a <b>medium</b>, I think.', textRu: 'Кажется, средний (M).' },
          { speaker: 'Shop assistant', text: 'How about this one? It\'s on <b>sale</b> — 30% off.', textRu: 'Как насчёт этой? Она со скидкой — 30%.' },
          { speaker: 'Customer', text: 'It\'s nice. Can I <b>try it on</b>?', textRu: 'Красивая. Можно примерить?' },
          { speaker: 'Shop assistant', text: 'Of course. The <b>fitting rooms</b> are at the back.', textRu: 'Конечно. Примерочные в конце зала.' },
          { speaker: 'Customer', text: 'It fits perfectly! <b>How much</b> is it?', textRu: 'Отлично сидит! Сколько стоит?' },
          { speaker: 'Shop assistant', text: 'It\'s £49.99. Would you like to pay by <b>cash or card</b>?', textRu: '49.99 фунтов. Будете платить наличными или картой?' },
          { speaker: 'Customer', text: 'By card, please. Can I have a <b>receipt</b>?', textRu: 'Картой, пожалуйста. Можно чек?' }
        ]
      },

      { type: 'tip', title: 'Useful shopping phrases', titleRu: 'Полезные фразы для покупок',
        text: '<b>Looking for something:</b><br>• I\'m looking for... (Я ищу...)<br>• Do you have this in a different colour/size? (Есть это в другом цвете/размере?)<br>• Have you got this in a smaller/larger size? (Есть поменьше/побольше?)<br><br><b>Asking about price:</b><br>• How much is this? (Сколько это стоит?)<br>• How much are these? (Сколько стоят эти?)<br>• Is there a discount? (Есть скидка?)<br><br><b>Paying:</b><br>• I\'ll take it. (Я беру это.)<br>• Can I pay by card? (Можно картой?)<br>• Do you accept contactless? (Принимаете бесконтактную оплату?)<br><br><b>Returns:</b><br>• I\'d like to return this. (Я хотел(а) бы вернуть это.)<br>• It doesn\'t fit. (Не подходит.)<br>• Can I exchange it? (Можно обменять?)',
        textRu: 'Все эти фразы пригодятся вам при покупках в англоязычных странах.'
      },

      { type: 'grammar-table', title: 'Sizes', titleRu: 'Размеры',
        headers: ['Label', 'Meaning', 'Перевод'],
        rows: [
          ['XS', 'Extra Small', 'Очень маленький'],
          ['S', 'Small', 'Маленький'],
          ['M', 'Medium', 'Средний'],
          ['L', 'Large', 'Большой'],
          ['XL', 'Extra Large', 'Очень большой'],
          ['XXL', 'Double Extra Large', 'Очень-очень большой']
        ],
        note: '"What size are you?" — "I\'m a medium" / "I\'m a size 42" (for shoes).',
        noteRu: '"What size are you?" — "I\'m a medium" / "I\'m a size 42" (для обуви).'
      },

      { type: 'fill-gap', title: 'Complete the phrase', titleRu: 'Дополните фразу',
        sentence: 'Can I ___ this dress ___ ? I want to see if it fits.', options: ['try...on', 'put...on', 'take...on', 'wear...on'], answer: 'try...on' },

      { type: 'fill-gap', title: 'Complete the phrase', titleRu: 'Дополните фразу',
        sentence: '___ is this T-shirt? — It\'s £15.', options: ['How many', 'How much', 'How price', 'What cost'], answer: 'How much' },

      { type: 'fill-gap', title: 'Complete the phrase', titleRu: 'Дополните фразу',
        sentence: 'These shoes are too ___. Do you have a bigger size?', options: ['tight', 'small', 'little', 'short'], answer: 'tight' },

      { type: 'practice', text: 'Practice Shopping Vocabulary', textRu: 'Практика — лексика покупок', gameId: 'vocabulary', buttonText: 'Play Vocabulary Game' },
    ],
  },

];
