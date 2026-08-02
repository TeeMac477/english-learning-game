window.VERB_BUILDER = {
  'present-simple': {
    id: 'present-simple',
    title: 'Present Simple',
    icon: '🔄',
    description: 'I play, he plays, they don\'t play...',
    subjects: ['I', 'You', 'He', 'She', 'It', 'We', 'They'],
    verbs: [
      { base: 'play', s: 'plays', visual: '⚽', russian: 'играть',
        forms: { 'I': 'play', 'You': 'play', 'He': 'plays', 'She': 'plays', 'It': 'plays', 'We': 'play', 'They': 'play' },
        neg: { 'I': "don't play", 'You': "don't play", 'He': "doesn't play", 'She': "doesn't play", 'It': "doesn't play", 'We': "don't play", 'They': "don't play" }
      },
      { base: 'eat', s: 'eats', visual: '🍽️', russian: 'есть/кушать',
        forms: { 'I': 'eat', 'You': 'eat', 'He': 'eats', 'She': 'eats', 'It': 'eats', 'We': 'eat', 'They': 'eat' },
        neg: { 'I': "don't eat", 'You': "don't eat", 'He': "doesn't eat", 'She': "doesn't eat", 'It': "doesn't eat", 'We': "don't eat", 'They': "don't eat" }
      },
      { base: 'read', s: 'reads', visual: '📖', russian: 'читать',
        forms: { 'I': 'read', 'You': 'read', 'He': 'reads', 'She': 'reads', 'It': 'reads', 'We': 'read', 'They': 'read' },
        neg: { 'I': "don't read", 'You': "don't read", 'He': "doesn't read", 'She': "doesn't read", 'It': "doesn't read", 'We': "don't read", 'They': "don't read" }
      },
      { base: 'cook', s: 'cooks', visual: '👨‍🍳', russian: 'готовить',
        forms: { 'I': 'cook', 'You': 'cook', 'He': 'cooks', 'She': 'cooks', 'It': 'cooks', 'We': 'cook', 'They': 'cook' },
        neg: { 'I': "don't cook", 'You': "don't cook", 'He': "doesn't cook", 'She': "doesn't cook", 'It': "doesn't cook", 'We': "don't cook", 'They': "don't cook" }
      },
      { base: 'run', s: 'runs', visual: '🏃', russian: 'бегать',
        forms: { 'I': 'run', 'You': 'run', 'He': 'runs', 'She': 'runs', 'It': 'runs', 'We': 'run', 'They': 'run' },
        neg: { 'I': "don't run", 'You': "don't run", 'He': "doesn't run", 'She': "doesn't run", 'It': "doesn't run", 'We': "don't run", 'They': "don't run" }
      },
      { base: 'sleep', s: 'sleeps', visual: '😴', russian: 'спать',
        forms: { 'I': 'sleep', 'You': 'sleep', 'He': 'sleeps', 'She': 'sleeps', 'It': 'sleeps', 'We': 'sleep', 'They': 'sleep' },
        neg: { 'I': "don't sleep", 'You': "don't sleep", 'He': "doesn't sleep", 'She': "doesn't sleep", 'It': "doesn't sleep", 'We': "don't sleep", 'They': "don't sleep" }
      },
      { base: 'drink', s: 'drinks', visual: '🥤', russian: 'пить',
        forms: { 'I': 'drink', 'You': 'drink', 'He': 'drinks', 'She': 'drinks', 'It': 'drinks', 'We': 'drink', 'They': 'drink' },
        neg: { 'I': "don't drink", 'You': "don't drink", 'He': "doesn't drink", 'She': "doesn't drink", 'It': "doesn't drink", 'We': "don't drink", 'They': "don't drink" }
      },
      { base: 'drive', s: 'drives', visual: '🚗', russian: 'водить',
        forms: { 'I': 'drive', 'You': 'drive', 'He': 'drives', 'She': 'drives', 'It': 'drives', 'We': 'drive', 'They': 'drive' },
        neg: { 'I': "don't drive", 'You': "don't drive", 'He': "doesn't drive", 'She': "doesn't drive", 'It': "doesn't drive", 'We': "don't drive", 'They': "don't drive" }
      },
      { base: 'write', s: 'writes', visual: '✍️', russian: 'писать',
        forms: { 'I': 'write', 'You': 'write', 'He': 'writes', 'She': 'writes', 'It': 'writes', 'We': 'write', 'They': 'write' },
        neg: { 'I': "don't write", 'You': "don't write", 'He': "doesn't write", 'She': "doesn't write", 'It': "doesn't write", 'We': "don't write", 'They': "don't write" }
      },
      { base: 'swim', s: 'swims', visual: '🏊', russian: 'плавать',
        forms: { 'I': 'swim', 'You': 'swim', 'He': 'swims', 'She': 'swims', 'It': 'swims', 'We': 'swim', 'They': 'swim' },
        neg: { 'I': "don't swim", 'You': "don't swim", 'He': "doesn't swim", 'She': "doesn't swim", 'It': "doesn't swim", 'We': "don't swim", 'They': "don't swim" }
      },
      { base: 'sing', s: 'sings', visual: '🎤', russian: 'петь',
        forms: { 'I': 'sing', 'You': 'sing', 'He': 'sings', 'She': 'sings', 'It': 'sings', 'We': 'sing', 'They': 'sing' },
        neg: { 'I': "don't sing", 'You': "don't sing", 'He': "doesn't sing", 'She': "doesn't sing", 'It': "doesn't sing", 'We': "don't sing", 'They': "don't sing" }
      },
      { base: 'dance', s: 'dances', visual: '💃', russian: 'танцевать',
        forms: { 'I': 'dance', 'You': 'dance', 'He': 'dances', 'She': 'dances', 'It': 'dances', 'We': 'dance', 'They': 'dance' },
        neg: { 'I': "don't dance", 'You': "don't dance", 'He': "doesn't dance", 'She': "doesn't dance", 'It': "doesn't dance", 'We': "don't dance", 'They': "don't dance" }
      },
      { base: 'work', s: 'works', visual: '💼', russian: 'работать',
        forms: { 'I': 'work', 'You': 'work', 'He': 'works', 'She': 'works', 'It': 'works', 'We': 'work', 'They': 'work' },
        neg: { 'I': "don't work", 'You': "don't work", 'He': "doesn't work", 'She': "doesn't work", 'It': "doesn't work", 'We': "don't work", 'They': "don't work" }
      },
      { base: 'study', s: 'studies', visual: '📚', russian: 'учиться',
        forms: { 'I': 'study', 'You': 'study', 'He': 'studies', 'She': 'studies', 'It': 'studies', 'We': 'study', 'They': 'study' },
        neg: { 'I': "don't study", 'You': "don't study", 'He': "doesn't study", 'She': "doesn't study", 'It': "doesn't study", 'We': "don't study", 'They': "don't study" }
      },
      { base: 'walk', s: 'walks', visual: '🚶', russian: 'гулять',
        forms: { 'I': 'walk', 'You': 'walk', 'He': 'walks', 'She': 'walks', 'It': 'walks', 'We': 'walk', 'They': 'walk' },
        neg: { 'I': "don't walk", 'You': "don't walk", 'He': "doesn't walk", 'She': "doesn't walk", 'It': "doesn't walk", 'We': "don't walk", 'They': "don't walk" }
      },
      { base: 'watch', s: 'watches', visual: '📺', russian: 'смотреть',
        forms: { 'I': 'watch', 'You': 'watch', 'He': 'watches', 'She': 'watches', 'It': 'watches', 'We': 'watch', 'They': 'watch' },
        neg: { 'I': "don't watch", 'You': "don't watch", 'He': "doesn't watch", 'She': "doesn't watch", 'It': "doesn't watch", 'We': "don't watch", 'They': "don't watch" }
      },
    ],
  },
  'past-simple': {
    id: 'past-simple',
    title: 'Past Simple',
    icon: '⏪',
    description: 'I played, she ate, they didn\'t run...',
    subjects: ['I', 'You', 'He', 'She', 'It', 'We', 'They'],
    verbs: [
      { base: 'play', past: 'played', visual: '⚽', russian: 'играть' },
      { base: 'eat', past: 'ate', visual: '🍽️', russian: 'есть/кушать' },
      { base: 'read', past: 'read', visual: '📖', russian: 'читать' },
      { base: 'cook', past: 'cooked', visual: '👨‍🍳', russian: 'готовить' },
      { base: 'run', past: 'ran', visual: '🏃', russian: 'бегать' },
      { base: 'sleep', past: 'slept', visual: '😴', russian: 'спать' },
      { base: 'drink', past: 'drank', visual: '🥤', russian: 'пить' },
      { base: 'drive', past: 'drove', visual: '🚗', russian: 'водить' },
      { base: 'write', past: 'wrote', visual: '✍️', russian: 'писать' },
      { base: 'swim', past: 'swam', visual: '🏊', russian: 'плавать' },
      { base: 'sing', past: 'sang', visual: '🎤', russian: 'петь' },
      { base: 'dance', past: 'danced', visual: '💃', russian: 'танцевать' },
      { base: 'work', past: 'worked', visual: '💼', russian: 'работать' },
      { base: 'study', past: 'studied', visual: '📚', russian: 'учиться' },
      { base: 'walk', past: 'walked', visual: '🚶', russian: 'гулять' },
      { base: 'go', past: 'went', visual: '🚶‍♂️', russian: 'идти/ходить' },
      { base: 'buy', past: 'bought', visual: '🛒', russian: 'покупать' },
      { base: 'make', past: 'made', visual: '🔨', russian: 'делать' },
      { base: 'see', past: 'saw', visual: '👀', russian: 'видеть' },
      { base: 'come', past: 'came', visual: '👋', russian: 'приходить' },
    ],
  },
  'present-continuous': {
    id: 'present-continuous',
    title: 'Present Continuous',
    icon: '🔃',
    description: 'I am playing, she is eating, they are running...',
    subjects: ['I', 'You', 'He', 'She', 'It', 'We', 'They'],
    verbs: [
      { base: 'play', ing: 'playing', visual: '⚽', russian: 'играть',
        forms: { 'I': 'am playing', 'You': 'are playing', 'He': 'is playing', 'She': 'is playing', 'It': 'is playing', 'We': 'are playing', 'They': 'are playing' }
      },
      { base: 'eat', ing: 'eating', visual: '🍽️', russian: 'есть/кушать',
        forms: { 'I': 'am eating', 'You': 'are eating', 'He': 'is eating', 'She': 'is eating', 'It': 'is eating', 'We': 'are eating', 'They': 'are eating' }
      },
      { base: 'read', ing: 'reading', visual: '📖', russian: 'читать',
        forms: { 'I': 'am reading', 'You': 'are reading', 'He': 'is reading', 'She': 'is reading', 'It': 'is reading', 'We': 'are reading', 'They': 'are reading' }
      },
      { base: 'cook', ing: 'cooking', visual: '👨‍🍳', russian: 'готовить',
        forms: { 'I': 'am cooking', 'You': 'are cooking', 'He': 'is cooking', 'She': 'is cooking', 'It': 'is cooking', 'We': 'are cooking', 'They': 'are cooking' }
      },
      { base: 'run', ing: 'running', visual: '🏃', russian: 'бегать',
        forms: { 'I': 'am running', 'You': 'are running', 'He': 'is running', 'She': 'is running', 'It': 'is running', 'We': 'are running', 'They': 'are running' }
      },
      { base: 'sleep', ing: 'sleeping', visual: '😴', russian: 'спать',
        forms: { 'I': 'am sleeping', 'You': 'are sleeping', 'He': 'is sleeping', 'She': 'is sleeping', 'It': 'is sleeping', 'We': 'are sleeping', 'They': 'are sleeping' }
      },
      { base: 'drink', ing: 'drinking', visual: '🥤', russian: 'пить',
        forms: { 'I': 'am drinking', 'You': 'are drinking', 'He': 'is drinking', 'She': 'is drinking', 'It': 'is drinking', 'We': 'are drinking', 'They': 'are drinking' }
      },
      { base: 'drive', ing: 'driving', visual: '🚗', russian: 'водить',
        forms: { 'I': 'am driving', 'You': 'are driving', 'He': 'is driving', 'She': 'is driving', 'It': 'is driving', 'We': 'are driving', 'They': 'are driving' }
      },
      { base: 'write', ing: 'writing', visual: '✍️', russian: 'писать',
        forms: { 'I': 'am writing', 'You': 'are writing', 'He': 'is writing', 'She': 'is writing', 'It': 'is writing', 'We': 'are writing', 'They': 'are writing' }
      },
      { base: 'swim', ing: 'swimming', visual: '🏊', russian: 'плавать',
        forms: { 'I': 'am swimming', 'You': 'are swimming', 'He': 'is swimming', 'She': 'is swimming', 'It': 'is swimming', 'We': 'are swimming', 'They': 'are swimming' }
      },
      { base: 'sing', ing: 'singing', visual: '🎤', russian: 'петь',
        forms: { 'I': 'am singing', 'You': 'are singing', 'He': 'is singing', 'She': 'is singing', 'It': 'is singing', 'We': 'are singing', 'They': 'are singing' }
      },
      { base: 'dance', ing: 'dancing', visual: '💃', russian: 'танцевать',
        forms: { 'I': 'am dancing', 'You': 'are dancing', 'He': 'is dancing', 'She': 'is dancing', 'It': 'is dancing', 'We': 'are dancing', 'They': 'are dancing' }
      },
    ],
  },
};
