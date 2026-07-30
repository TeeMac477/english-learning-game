// A1 — Elementary learning content (slide-based)
// Order: To Be → Everyday Phrases → Jobs → Daily Routine → Time → Present Simple → Frequency → Questions → Have Got → Appearance → Can → There Is/Are
window.A1_CONTENT = [

  // ═══════════════ 1. THE VERB "TO BE" ═══════════════
  {
    id: 'to-be',
    title: 'The Verb "to be"',
    titleRu: 'Глагол «to be»',
    icon: '🔤',
    slides: [
      { type: 'title', icon: '🔤', title: 'The Verb "to be"', titleRu: 'Глагол «to be»', subtitle: 'The most important verb in English', subtitleRu: 'Самый важный глагол в английском' },

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

      { type: 'examples', title: 'Short answers', titleRu: 'Краткие ответы',
        intro: 'In English, you don\'t answer with just "yes" or "no" — add the verb:',
        items: [
          { icon: '✅', english: 'Are you a student? — Yes, I am.', russian: 'Ты студент? — Да.' },
          { icon: '❌', english: 'Is she from Spain? — No, she isn\'t.', russian: 'Она из Испании? — Нет.' },
          { icon: '✅', english: 'Are they ready? — Yes, they are.', russian: 'Они готовы? — Да.' },
        ]
      },

      { type: 'practice', text: 'Practice "to be" in games', textRu: 'Практика — глагол «to be»', gameId: 'grammar', buttonText: 'Play Grammar Game' },
    ],
  },

  // ═══════════════ 2. EVERYDAY PHRASES ═══════════════
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

      { type: 'tip', icon: '🎯', title: 'Top 2 phrases', titleRu: 'Топ-2 фразы',
        text: 'The two most useful phrases: "I don\'t understand" and "Can you repeat, please?" Learn these first — they\'ll keep any conversation going!',
        textRu: 'Две самые полезные: «I don\'t understand» и «Can you repeat, please?» Выучите их первыми — они спасут любой разговор!'
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
    ],
  },

  // ═══════════════ 3. JOBS & OCCUPATIONS ═══════════════
  {
    id: 'jobs',
    title: 'Jobs & Occupations',
    titleRu: 'Профессии',
    icon: '💼',
    slides: [
      { type: 'title', icon: '💼', title: 'Jobs & Occupations', titleRu: 'Профессии', subtitle: 'Talk about what you do', subtitleRu: 'Говорим о работе' },

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

      { type: 'vocab', title: 'Where do you work?', titleRu: 'Где вы работаете?',
        intro: 'Use "at" for specific places, "in" for types of places:',
        introRu: 'Используйте «at» для конкретных мест, «in» для типов мест:',
        items: [
          { icon: '🏢', english: 'I work in an office.', pronunciation: 'ай уёрк ин эн О́-фис', russian: 'Я работаю в офисе.', note: 'in + type' },
          { icon: '🏥', english: 'I work in a hospital.', pronunciation: 'ай уёрк ин э ХО́С-пи-тл', russian: 'Я работаю в больнице.', note: 'in + type' },
          { icon: '🏭', english: 'I work at Google.', pronunciation: 'ай уёрк эт ГУ́-гл', russian: 'Я работаю в Google.', note: 'at + name' },
          { icon: '🏠', english: 'I work from home.', pronunciation: 'ай уёрк фром хо́ум', russian: 'Я работаю из дома.', note: 'from home' },
        ]
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

      { type: 'practice', text: 'Practice jobs vocabulary', textRu: 'Практика — профессии', gameId: 'vocabulary', buttonText: 'Play Vocabulary Game' },
    ],
  },

  // ═══════════════ 4. DAILY ROUTINE ═══════════════
  {
    id: 'daily-routine',
    title: 'Daily Routine',
    titleRu: 'Распорядок дня',
    icon: '☀️',
    slides: [
      { type: 'title', icon: '☀️', title: 'Daily Routine', titleRu: 'Распорядок дня', subtitle: 'Describe your day from morning to night', subtitleRu: 'Описываем день от утра до ночи' },

      { type: 'vocab', title: 'Morning routine', titleRu: 'Утренний распорядок',
        items: [
          { icon: '⏰', english: 'wake up', pronunciation: 'уэйк ап', russian: 'просыпаться' },
          { icon: '🛏️', english: 'get up', pronunciation: 'гэт ап', russian: 'вставать' },
          { icon: '🚿', english: 'take a shower', pronunciation: 'тэйк э ША́У-эр', russian: 'принимать душ' },
          { icon: '🪥', english: 'brush teeth', pronunciation: 'браш ти́ф', russian: 'чистить зубы' },
          { icon: '👔', english: 'get dressed', pronunciation: 'гэт дрэст', russian: 'одеваться' },
          { icon: '🍳', english: 'have breakfast', pronunciation: 'хэв БРЭ́К-фэст', russian: 'завтракать' },
          { icon: '☕', english: 'drink coffee', pronunciation: 'дринк КО́-фи', russian: 'пить кофе' },
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
          { icon: '📖', english: 'read a book', pronunciation: 'рид э бук', russian: 'читать книгу' },
          { icon: '😴', english: 'go to bed', pronunciation: 'гоу ту бэд', russian: 'идти спать' },
        ]
      },

      { type: 'tip', icon: '💡', title: '"have" for meals', titleRu: '«have» для приёмов пищи',
        text: '"have" appears 3 times: have breakfast / have lunch / have dinner. Learn them as set phrases!',
        textRu: '«have» встречается 3 раза: have breakfast / have lunch / have dinner. Учите как устойчивые выражения!'
      },

      { type: 'examples', title: 'My typical day', titleRu: 'Мой типичный день',
        intro: 'Read this example of someone describing their day:',
        items: [
          { icon: '⏰', english: 'I wake up at 7 o\'clock.', russian: 'Я просыпаюсь в 7 часов.' },
          { icon: '🚿', english: 'I take a shower and get dressed.', russian: 'Я принимаю душ и одеваюсь.' },
          { icon: '☕', english: 'I have breakfast and drink coffee.', russian: 'Я завтракаю и пью кофе.' },
          { icon: '💼', english: 'I go to work at 8:30.', russian: 'Я иду на работу в 8:30.' },
          { icon: '🏠', english: 'I come home at 6 and have dinner.', russian: 'Я прихожу домой в 6 и ужинаю.' },
          { icon: '😴', english: 'I go to bed at 11.', russian: 'Я ложусь спать в 11.' },
        ]
      },

      { type: 'practice', text: 'Practice daily routine verbs', textRu: 'Практика — глаголы дня', gameId: 'vocabulary', buttonText: 'Play Vocabulary Game' },
    ],
  },

  // ═══════════════ 5. TIME EXPRESSIONS ═══════════════
  {
    id: 'time',
    title: 'Time Expressions',
    titleRu: 'Выражения времени',
    icon: '🕐',
    slides: [
      { type: 'title', icon: '🕐', title: 'Time Expressions', titleRu: 'Выражения времени', subtitle: 'Say when you do things', subtitleRu: 'Говорим, когда что-то делаем' },

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

      { type: 'rule', title: '"in" — for parts of the day', titleRu: '«in» — для частей дня',
        formula: 'in + the morning / afternoon / evening',
        rows: [
          { subject: 'in', verb: 'the morning', example: 'I exercise in the morning.' },
          { subject: 'in', verb: 'the afternoon', example: 'She works in the afternoon.' },
          { subject: 'in', verb: 'the evening', example: 'We watch TV in the evening.' },
        ],
        warning: 'BUT: "at night" — not "in the night"! This is an exception.',
        warningRu: 'НО: «at night» — не «in the night»! Это исключение.'
      },

      { type: 'rule', title: '"on" — for days', titleRu: '«on» — для дней',
        formula: 'on + day of the week',
        rows: [
          { subject: 'on', verb: 'Monday', example: 'I work on Monday.' },
          { subject: 'on', verb: 'Friday', example: 'We go out on Friday.' },
          { subject: 'on', verb: 'weekends', example: 'I rest on weekends.' },
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

      { type: 'practice', text: 'Practice prepositions of time', textRu: 'Практика — предлоги времени', gameId: 'prepositions', buttonText: 'Play Prepositions Game' },
    ],
  },

  // ═══════════════ 6. PRESENT SIMPLE ═══════════════
  {
    id: 'present-simple',
    title: 'Present Simple',
    titleRu: 'Простое настоящее время',
    icon: '🔄',
    slides: [
      { type: 'title', icon: '🔄', title: 'Present Simple', titleRu: 'Простое настоящее время', subtitle: 'Habits, routines & facts', subtitleRu: 'Привычки, распорядок и факты' },

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

      { type: 'rule', title: 'Spelling rules for -s', titleRu: 'Правила написания -s',
        explanation: 'Most verbs just add -s, but some need -es or change spelling:',
        explanationRu: 'Большинство глаголов просто добавляют -s, но некоторым нужно -es:',
        rows: [
          { subject: 'Usually', verb: '+ s', example: 'work→works, read→reads, live→lives' },
          { subject: '-ch/-sh/-ss/-x/-o', verb: '+ es', example: 'watch→watches, go→goes, do→does' },
          { subject: 'consonant + y', verb: 'y → ies', example: 'study→studies, try→tries' },
          { subject: 'Special', verb: 'have → has', example: 'I have a car. She HAS a car.' },
        ]
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

      { type: 'examples', title: 'Everyday examples', titleRu: 'Примеры из жизни',
        items: [
          { icon: '☕', english: 'I drink coffee every morning.', russian: 'Я пью кофе каждое утро.' },
          { icon: '🏫', english: 'She teaches English.', russian: 'Она преподаёт английский.' },
          { icon: '❌', english: 'We don\'t eat meat.', russian: 'Мы не едим мясо.' },
          { icon: '❓', english: 'Do you speak Russian?', russian: 'Вы говорите по-русски?' },
          { icon: '❓', english: 'Does he live in London?', russian: 'Он живёт в Лондоне?' },
        ]
      },

      { type: 'practice', text: 'Practice Present Simple', textRu: 'Практика — Present Simple', gameId: 'grammar', buttonText: 'Play Grammar Game' },
    ],
  },

  // ═══════════════ 7. FREQUENCY ADVERBS ═══════════════
  {
    id: 'frequency',
    title: 'How Often — Frequency',
    titleRu: 'Как часто — Частотность',
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
    ],
  },

  // ═══════════════ 8. QUESTION WORDS ═══════════════
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

      { type: 'practice', text: 'Practice question words', textRu: 'Практика — вопросительные слова', gameId: 'grammar', buttonText: 'Play Grammar Game' },
    ],
  },

  // ═══════════════ 9. HAVE GOT / HAS GOT ═══════════════
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

      { type: 'practice', text: 'Practice Have Got', textRu: 'Практика — Have Got', gameId: 'grammar', buttonText: 'Play Grammar Game' },
    ],
  },

  // ═══════════════ 10. DESCRIBING APPEARANCE ═══════════════
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
        ]
      },

      { type: 'vocab', title: 'Hair & Eyes', titleRu: 'Волосы и глаза',
        items: [
          { icon: '💇', english: 'long hair', pronunciation: 'лонг хэр', russian: 'длинные волосы' },
          { icon: '💇', english: 'short hair', pronunciation: 'шорт хэр', russian: 'короткие волосы' },
          { icon: '🖤', english: 'dark hair', pronunciation: 'дарк хэр', russian: 'тёмные волосы' },
          { icon: '🟡', english: 'fair / blonde hair', pronunciation: 'фэр хэр', russian: 'светлые волосы' },
          { icon: '⬜', english: 'grey hair', pronunciation: 'грэй хэр', russian: 'седые волосы' },
          { icon: '👁️', english: 'blue / green / brown eyes', pronunciation: '', russian: 'голубые / зелёные / карие глаза' },
          { icon: '🧔', english: 'a beard', pronunciation: 'э бирд', russian: 'борода' },
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

      { type: 'examples', title: 'Describing someone', titleRu: 'Описываем человека',
        intro: 'Combine IS and HAS GOT to describe people:',
        items: [
          { icon: '👩', english: 'Anna is tall and slim. She has got long dark hair and green eyes.', russian: 'Анна высокая и стройная. У неё длинные тёмные волосы и зелёные глаза.' },
          { icon: '👨', english: 'Ivan is strong. He has got short hair and a beard.', russian: 'Иван сильный. У него короткие волосы и борода.' },
          { icon: '👴', english: 'My grandfather is kind. He has got grey hair and glasses.', russian: 'Мой дедушка добрый. У него седые волосы и очки.' },
        ]
      },
    ],
  },

  // ═══════════════ 11. CAN & CAN'T ═══════════════
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
          { icon: '☕', english: 'Can I have a coffee, please?', pronunciation: '', russian: 'Можно мне кофе, пожалуйста?' },
          { icon: '💺', english: 'Can I sit here?', pronunciation: '', russian: 'Можно здесь сесть?' },
          { icon: '🤝', english: 'Can you help me?', pronunciation: '', russian: 'Вы можете мне помочь?' },
          { icon: '🐢', english: 'Can you speak slowly?', pronunciation: '', russian: 'Говорите медленнее?' },
        ]
      },

      { type: 'practice', text: 'Practice can & can\'t', textRu: 'Практика — can и can\'t', gameId: 'grammar', buttonText: 'Play Grammar Game' },
    ],
  },

  // ═══════════════ 12. THERE IS / THERE ARE ═══════════════
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
          { icon: '🛋️', english: 'living room', pronunciation: '', russian: 'гостиная' },
          { icon: '🛏️', english: 'bedroom', pronunciation: '', russian: 'спальня' },
          { icon: '🍳', english: 'kitchen', pronunciation: '', russian: 'кухня' },
          { icon: '🚿', english: 'bathroom', pronunciation: '', russian: 'ванная' },
          { icon: '🪑', english: 'table / chair', pronunciation: '', russian: 'стол / стул' },
          { icon: '🛋️', english: 'sofa / bed', pronunciation: '', russian: 'диван / кровать' },
          { icon: '🧊', english: 'fridge', pronunciation: '', russian: 'холодильник' },
          { icon: '🗄️', english: 'wardrobe', pronunciation: '', russian: 'шкаф' },
        ]
      },

      { type: 'vocab', title: 'Places in town', titleRu: 'Места в городе',
        items: [
          { icon: '🏪', english: 'supermarket', pronunciation: '', russian: 'супермаркет' },
          { icon: '💊', english: 'pharmacy', pronunciation: '', russian: 'аптека' },
          { icon: '🎬', english: 'cinema', pronunciation: '', russian: 'кинотеатр' },
          { icon: '🌳', english: 'park', pronunciation: '', russian: 'парк' },
          { icon: '📚', english: 'library', pronunciation: '', russian: 'библиотека' },
          { icon: '🚏', english: 'bus stop', pronunciation: '', russian: 'автобусная остановка' },
          { icon: '🚂', english: 'train station', pronunciation: '', russian: 'вокзал' },
          { icon: '✈️', english: 'airport', pronunciation: '', russian: 'аэропорт' },
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

      { type: 'practice', text: 'Practice prepositions of place', textRu: 'Практика — предлоги места', gameId: 'prepositions', buttonText: 'Play Prepositions Game' },
    ],
  },
];

// ═══════════════ A1+ — SITUATIONAL PHRASES ═══════════════
window.A1PLUS_CONTENT = [

  // ═══════════════ 1. AT THE AIRPORT ═══════════════
  {
    id: 'airport',
    title: 'At the Airport',
    titleRu: 'В аэропорту',
    icon: '✈️',
    slides: [
      { type: 'title', icon: '✈️', title: 'At the Airport', titleRu: 'В аэропорту', subtitle: 'Essential travel vocabulary', subtitleRu: 'Необходимая лексика для путешествий' },

      { type: 'vocab', title: 'Airport vocabulary', titleRu: 'Лексика аэропорта',
        items: [
          { icon: '🛂', english: 'passport', pronunciation: '', russian: 'паспорт' },
          { icon: '🎫', english: 'boarding pass', pronunciation: '', russian: 'посадочный талон' },
          { icon: '🧳', english: 'luggage / baggage', pronunciation: '', russian: 'багаж' },
          { icon: '🏢', english: 'check-in desk', pronunciation: '', russian: 'стойка регистрации' },
          { icon: '🔒', english: 'security', pronunciation: '', russian: 'досмотр' },
          { icon: '🚪', english: 'departure gate', pronunciation: '', russian: 'выход на посадку' },
          { icon: '✈️', english: 'flight', pronunciation: '', russian: 'рейс' },
          { icon: '⏰', english: 'delay', pronunciation: '', russian: 'задержка' },
          { icon: '🪟', english: 'window seat', pronunciation: '', russian: 'место у окна' },
          { icon: '🚶', english: 'aisle seat', pronunciation: '', russian: 'место у прохода' },
        ]
      },

      { type: 'vocab', title: 'Useful phrases', titleRu: 'Полезные фразы',
        items: [
          { icon: '❓', english: 'Where is the check-in desk?', pronunciation: '', russian: 'Где стойка регистрации?' },
          { icon: '🪟', english: 'Can I have a window seat, please?', pronunciation: '', russian: 'Можно место у окна?' },
          { icon: '🧳', english: 'How much luggage can I take?', pronunciation: '', russian: 'Сколько багажа можно взять?' },
          { icon: '🚪', english: 'Where is gate 5?', pronunciation: '', russian: 'Где выход 5?' },
          { icon: '⏰', english: 'Is the flight on time?', pronunciation: '', russian: 'Рейс вовремя?' },
          { icon: '😟', english: 'My luggage is lost.', pronunciation: '', russian: 'Мой багаж потерялся.' },
        ]
      },

      { type: 'dialogue', title: 'At check-in', titleRu: 'На регистрации',
        context: 'Checking in for a flight',
        lines: [
          { speaker: 'Staff', text: 'Passport and boarding pass, please.', russian: 'Паспорт и посадочный, пожалуйста.' },
          { speaker: 'You', text: 'Here you are.', russian: 'Вот, пожалуйста.' },
          { speaker: 'Staff', text: 'Window or aisle?', russian: 'У окна или у прохода?' },
          { speaker: 'You', text: 'Window seat, please.', russian: 'У окна, пожалуйста.' },
          { speaker: 'Staff', text: 'Your gate is B7. Boarding at 14:30.', russian: 'Ваш выход B7. Посадка в 14:30.' },
          { speaker: 'You', text: 'Thank you!', russian: 'Спасибо!' },
        ]
      },
    ],
  },

  // ═══════════════ 2. AT THE RESTAURANT ═══════════════
  {
    id: 'restaurant',
    title: 'At the Restaurant',
    titleRu: 'В ресторане',
    icon: '🍽️',
    slides: [
      { type: 'title', icon: '🍽️', title: 'At the Restaurant', titleRu: 'В ресторане', subtitle: 'Order food & pay the bill', subtitleRu: 'Заказываем и платим' },

      { type: 'vocab', title: 'Restaurant vocabulary', titleRu: 'Лексика ресторана',
        items: [
          { icon: '📋', english: 'menu', pronunciation: '', russian: 'меню' },
          { icon: '🧑‍🍳', english: 'waiter / waitress', pronunciation: '', russian: 'официант / официантка' },
          { icon: '🥗', english: 'starter', pronunciation: '', russian: 'закуска' },
          { icon: '🍖', english: 'main course', pronunciation: '', russian: 'основное блюдо' },
          { icon: '🍰', english: 'dessert', pronunciation: '', russian: 'десерт' },
          { icon: '🧾', english: 'bill / check', pronunciation: '', russian: 'счёт' },
          { icon: '💰', english: 'tip', pronunciation: '', russian: 'чаевые' },
        ]
      },

      { type: 'vocab', title: 'Key phrases', titleRu: 'Ключевые фразы',
        items: [
          { icon: '🪑', english: 'A table for two, please.', pronunciation: '', russian: 'Столик на двоих, пожалуйста.' },
          { icon: '📋', english: 'Can I see the menu?', pronunciation: '', russian: 'Можно посмотреть меню?' },
          { icon: '🍗', english: 'I\'d like the chicken, please.', pronunciation: '', russian: 'Мне курицу, пожалуйста.' },
          { icon: '🧾', english: 'Can I have the bill?', pronunciation: '', russian: 'Можно счёт?' },
          { icon: '💳', english: 'Can I pay by card?', pronunciation: '', russian: 'Можно оплатить картой?' },
          { icon: '❓', english: 'Is service included?', pronunciation: '', russian: 'Обслуживание включено?' },
        ]
      },

      { type: 'dialogue', title: 'Ordering food', titleRu: 'Заказываем еду',
        context: 'At a restaurant',
        lines: [
          { speaker: 'Waiter', text: 'Good evening! A table for two?', russian: 'Добрый вечер! Столик на двоих?' },
          { speaker: 'You', text: 'Yes, please.', russian: 'Да, пожалуйста.' },
          { speaker: 'Waiter', text: 'Here is the menu. Can I get you a drink?', russian: 'Вот меню. Что-нибудь выпить?' },
          { speaker: 'You', text: 'I\'d like a glass of water, please.', russian: 'Стакан воды, пожалуйста.' },
          { speaker: 'Waiter', text: 'Are you ready to order?', russian: 'Готовы заказать?' },
          { speaker: 'You', text: 'Yes, I\'d like the fish, please.', russian: 'Да, мне рыбу, пожалуйста.' },
        ]
      },

      { type: 'tip', icon: '💡', title: '"I\'d like" = polite order', titleRu: '«I\'d like» = вежливый заказ',
        text: '"I\'d like" (= I would like) is more polite than "I want". Use it for ordering!',
        textRu: '«I\'d like» (= I would like) вежливее, чем «I want». Используйте при заказе!'
      },
    ],
  },

  // ═══════════════ 3. SHOPPING ═══════════════
  {
    id: 'shopping',
    title: 'Shopping',
    titleRu: 'Покупки',
    icon: '🛍️',
    slides: [
      { type: 'title', icon: '🛍️', title: 'Shopping', titleRu: 'Покупки', subtitle: 'Prices, sizes & paying', subtitleRu: 'Цены, размеры и оплата' },

      { type: 'vocab', title: 'Shopping phrases', titleRu: 'Фразы для покупок',
        items: [
          { icon: '💰', english: 'How much is this?', pronunciation: '', russian: 'Сколько это стоит?' },
          { icon: '💰', english: 'How much are these?', pronunciation: '', russian: 'Сколько стоят эти?' },
          { icon: '💲', english: 'It costs ___', pronunciation: '', russian: 'Это стоит ___' },
          { icon: '👗', english: 'Can I try this on?', pronunciation: '', russian: 'Можно примерить?' },
          { icon: '📏', english: 'What size is this?', pronunciation: '', russian: 'Какой это размер?' },
          { icon: '📏', english: 'Do you have a bigger/smaller size?', pronunciation: '', russian: 'У вас есть больше / меньше?' },
        ]
      },

      { type: 'vocab', title: 'Buying & browsing', titleRu: 'Покупаем и просто смотрим',
        items: [
          { icon: '✅', english: 'I\'ll take it.', pronunciation: '', russian: 'Я это возьму.' },
          { icon: '🙅', english: 'No, thank you. Just looking.', pronunciation: '', russian: 'Нет, спасибо. Просто смотрю.' },
          { icon: '💳', english: 'Can I pay by card?', pronunciation: '', russian: 'Можно оплатить картой?' },
          { icon: '🧾', english: 'Can I have a receipt?', pronunciation: '', russian: 'Можно чек?' },
        ]
      },

      { type: 'dialogue', title: 'In a clothes shop', titleRu: 'В магазине одежды',
        context: 'Shopping for clothes',
        lines: [
          { speaker: 'Shop', text: 'Can I help you?', russian: 'Могу я вам помочь?' },
          { speaker: 'You', text: 'Yes, how much is this jacket?', russian: 'Да, сколько стоит эта куртка?' },
          { speaker: 'Shop', text: 'It\'s forty-five pounds.', russian: 'Сорок пять фунтов.' },
          { speaker: 'You', text: 'Can I try it on?', russian: 'Можно примерить?' },
          { speaker: 'Shop', text: 'Of course! The fitting room is over there.', russian: 'Конечно! Примерочная вон там.' },
          { speaker: 'You', text: 'I\'ll take it. Can I pay by card?', russian: 'Я возьму. Можно картой?' },
        ]
      },
    ],
  },
];
