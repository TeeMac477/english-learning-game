// Sentence rearranging game data.
// Each question: correct = the correct sentence, words = shuffled pieces.
window.SENTENCES = {
  presentSimple: {
    id: 'sentPresentSimple',
    icon: '🧩',
    title: 'Present Simple Sentences',
    description: 'Put the words in the correct order',
    rounds: [
      {
        title: 'Round 1 — Positive Sentences',
        hint: 'Word order: Subject + Verb (+ Object)',
        questions: [
          { correct: 'She likes chocolate.', words: ['chocolate.', 'She', 'likes'] },
          { correct: 'I play football every Saturday.', words: ['Saturday.', 'football', 'I', 'every', 'play'] },
          { correct: 'He works in a hospital.', words: ['in', 'works', 'a', 'He', 'hospital.'] },
          { correct: 'They live in London.', words: ['London.', 'in', 'They', 'live'] },
          { correct: 'The cat sleeps on the sofa.', words: ['sofa.', 'on', 'cat', 'sleeps', 'The', 'the'] },
          { correct: 'We eat lunch at noon.', words: ['noon.', 'We', 'at', 'eat', 'lunch'] },
          { correct: 'My brother studies English.', words: ['studies', 'brother', 'My', 'English.'] },
          { correct: 'She drinks tea every morning.', words: ['morning.', 'She', 'tea', 'every', 'drinks'] },
        ],
      },
      {
        title: 'Round 2 — Negative & Questions',
        hint: 'Negative: Subject + don\'t/doesn\'t + verb · Question: Do/Does + subject + verb?',
        questions: [
          { correct: 'I don\'t like spiders.', words: ['like', 'I', 'spiders.', 'don\'t'] },
          { correct: 'She doesn\'t eat meat.', words: ['doesn\'t', 'meat.', 'She', 'eat'] },
          { correct: 'Do you speak French?', words: ['speak', 'you', 'Do', 'French?'] },
          { correct: 'Does he play tennis?', words: ['tennis?', 'he', 'Does', 'play'] },
          { correct: 'They don\'t watch TV.', words: ['don\'t', 'They', 'TV.', 'watch'] },
          { correct: 'We don\'t live here.', words: ['live', 'don\'t', 'We', 'here.'] },
          { correct: 'Does she work on Sundays?', words: ['work', 'she', 'Does', 'Sundays?', 'on'] },
          { correct: 'He doesn\'t drink coffee.', words: ['doesn\'t', 'He', 'coffee.', 'drink'] },
        ],
      },
    ],
  },

  pastSimple: {
    id: 'sentPastSimple',
    icon: '🧩',
    title: 'Past Simple Sentences',
    description: 'Arrange past tense sentences correctly',
    rounds: [
      {
        title: 'Round 1 — Positive & Negative',
        hint: 'Positive: Subject + past verb · Negative: Subject + didn\'t + base verb',
        questions: [
          { correct: 'I went to the cinema yesterday.', words: ['yesterday.', 'to', 'went', 'I', 'the', 'cinema'] },
          { correct: 'She cooked dinner last night.', words: ['dinner', 'She', 'night.', 'last', 'cooked'] },
          { correct: 'They didn\'t come to the party.', words: ['to', 'come', 'didn\'t', 'They', 'party.', 'the'] },
          { correct: 'We visited our grandparents.', words: ['visited', 'We', 'grandparents.', 'our'] },
          { correct: 'He didn\'t finish his homework.', words: ['finish', 'didn\'t', 'He', 'homework.', 'his'] },
          { correct: 'The train arrived on time.', words: ['on', 'arrived', 'train', 'The', 'time.'] },
          { correct: 'I bought a new phone.', words: ['phone.', 'new', 'a', 'I', 'bought'] },
          { correct: 'She didn\'t see the message.', words: ['see', 'didn\'t', 'the', 'She', 'message.'] },
        ],
      },
      {
        title: 'Round 2 — Questions',
        hint: 'Questions: Did + subject + base verb (+ object)?',
        questions: [
          { correct: 'Did you enjoy the film?', words: ['enjoy', 'you', 'film?', 'Did', 'the'] },
          { correct: 'Where did she go yesterday?', words: ['go', 'she', 'did', 'Where', 'yesterday?'] },
          { correct: 'What did you eat for lunch?', words: ['eat', 'did', 'What', 'lunch?', 'you', 'for'] },
          { correct: 'Did they arrive on time?', words: ['on', 'arrive', 'they', 'Did', 'time?'] },
          { correct: 'When did he leave the office?', words: ['leave', 'did', 'the', 'When', 'he', 'office?'] },
          { correct: 'Did she call you last night?', words: ['call', 'she', 'Did', 'night?', 'you', 'last'] },
          { correct: 'How did you get here?', words: ['get', 'did', 'How', 'here?', 'you'] },
          { correct: 'Why did they leave early?', words: ['leave', 'did', 'Why', 'early?', 'they'] },
        ],
      },
    ],
  },

  continuous: {
    id: 'sentContinuous',
    icon: '🧩',
    title: 'Continuous Sentences',
    description: 'Build present and past continuous sentences',
    rounds: [
      {
        title: 'Round 1 — Present Continuous',
        hint: 'Subject + am/is/are + verb-ing',
        questions: [
          { correct: 'I am reading a book.', words: ['reading', 'am', 'I', 'book.', 'a'] },
          { correct: 'She is cooking dinner.', words: ['cooking', 'She', 'dinner.', 'is'] },
          { correct: 'They are playing football.', words: ['playing', 'are', 'They', 'football.'] },
          { correct: 'He is watching TV.', words: ['watching', 'He', 'is', 'TV.'] },
          { correct: 'We are learning English.', words: ['learning', 'are', 'We', 'English.'] },
          { correct: 'The children are sleeping.', words: ['sleeping.', 'are', 'children', 'The'] },
          { correct: 'Is she coming to the party?', words: ['coming', 'she', 'Is', 'party?', 'to', 'the'] },
          { correct: 'Are you listening to me?', words: ['listening', 'you', 'Are', 'me?', 'to'] },
        ],
      },
      {
        title: 'Round 2 — Past Continuous',
        hint: 'Subject + was/were + verb-ing',
        questions: [
          { correct: 'I was watching TV when she called.', words: ['watching', 'was', 'I', 'called.', 'TV', 'when', 'she'] },
          { correct: 'They were playing outside.', words: ['playing', 'were', 'They', 'outside.'] },
          { correct: 'She was reading while he was cooking.', words: ['reading', 'was', 'She', 'cooking.', 'while', 'he', 'was'] },
          { correct: 'It was raining all morning.', words: ['raining', 'was', 'It', 'morning.', 'all'] },
          { correct: 'We were waiting for the bus.', words: ['waiting', 'were', 'We', 'bus.', 'for', 'the'] },
          { correct: 'He was working when I arrived.', words: ['working', 'was', 'He', 'arrived.', 'when', 'I'] },
          { correct: 'Were you sleeping at midnight?', words: ['sleeping', 'you', 'Were', 'midnight?', 'at'] },
          { correct: 'The dog was barking all night.', words: ['barking', 'was', 'dog', 'The', 'night.', 'all'] },
        ],
      },
    ],
  },
};
