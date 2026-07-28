// Prepositions section: three categories, each with three rounds of six questions.
// `visual` is an emoji placeholder — swap for real illustrations later.
// To extend: add a round object, or add questions to an existing round.
window.PREPOSITIONS = {
  time: {
    id: 'time',
    icon: '🕐',
    title: 'Prepositions of Time',
    description: 'When something happens: at, on, in, since, for, before, after…',
    rounds: [
      {
        title: 'Round 1 — at, on, in',
        hint: 'at = clock times · on = days and dates · in = months, years, seasons',
        questions: [
          { visual: '🕒', question: 'The meeting starts ___ 3 o\'clock.', options: ['at', 'on', 'in', 'for'], answer: 'at' },
          { visual: '🌸', question: 'I was born ___ May.', options: ['in', 'at', 'on', 'since'], answer: 'in' },
          { visual: '📅', question: 'We have a test ___ Monday.', options: ['on', 'at', 'in', 'by'], answer: 'on' },
          { visual: '⏰', question: 'She wakes up ___ 7:30 every day.', options: ['at', 'in', 'on', 'during'], answer: 'at' },
          { visual: '🎂', question: 'My birthday is ___ December 25th.', options: ['on', 'in', 'at', 'for'], answer: 'on' },
          { visual: '❄️', question: 'It gets very cold ___ winter.', options: ['in', 'on', 'at', 'until'], answer: 'in' },
        ],
      },
      {
        title: 'Round 2 — since, for, ago, during',
        hint: 'since = a starting point · for = a length of time · ago = back from now',
        questions: [
          { visual: '🏠', question: 'I have lived here ___ 2019.', options: ['since', 'for', 'ago', 'during'], answer: 'since' },
          { visual: '⌛', question: 'We waited ___ two hours.', options: ['for', 'since', 'during', 'by'], answer: 'for' },
          { visual: '👋', question: 'She left three days ___.', options: ['ago', 'since', 'before', 'for'], answer: 'ago' },
          { visual: '🎬', question: 'He fell asleep ___ the movie.', options: ['during', 'for', 'since', 'until'], answer: 'during' },
          { visual: '💍', question: 'They have been married ___ ten years.', options: ['for', 'since', 'ago', 'in'], answer: 'for' },
          { visual: '☀️', question: 'I haven\'t seen him ___ last summer.', options: ['since', 'for', 'during', 'ago'], answer: 'since' },
        ],
      },
      {
        title: 'Round 3 — before, after, until, by, from, in',
        hint: 'until = up to that moment · by = not later than · in = after a period from now',
        questions: [
          { visual: '📚', question: 'Finish your homework ___ dinner.', options: ['before', 'until', 'by', 'since'], answer: 'before' },
          { visual: '🌧️', question: 'We\'ll stay inside ___ the rain stops.', options: ['until', 'by', 'before', 'for'], answer: 'until' },
          { visual: '🏪', question: 'The shop is open ___ 9am to 6pm.', options: ['from', 'at', 'since', 'by'], answer: 'from' },
          { visual: '📝', question: 'Please submit the form ___ Friday at the latest.', options: ['by', 'until', 'from', 'during'], answer: 'by' },
          { visual: '🚶', question: 'Let\'s go for a walk ___ lunch.', options: ['after', 'until', 'since', 'by'], answer: 'after' },
          { visual: '🚆', question: 'The train leaves ___ ten minutes.', options: ['in', 'on', 'at', 'for'], answer: 'in' },
        ],
      },
    ],
  },

  place: {
    id: 'place',
    icon: '📍',
    title: 'Prepositions of Place',
    description: 'Where something is: in, on, at, under, between, behind…',
    rounds: [
      {
        title: 'Round 1 — at, on, in',
        hint: 'in = inside something · on = touching a surface · at = a specific point',
        questions: [
          { visual: '🔑', question: 'The keys are ___ the table.', options: ['on', 'in', 'at', 'under'], answer: 'on' },
          { visual: '🗼', question: 'She lives ___ Paris.', options: ['in', 'at', 'on', 'near'], answer: 'in' },
          { visual: '🚏', question: 'I\'ll meet you ___ the bus stop.', options: ['at', 'in', 'on', 'over'], answer: 'at' },
          { visual: '🥛', question: 'The milk is ___ the fridge.', options: ['in', 'on', 'at', 'above'], answer: 'in' },
          { visual: '🖼️', question: 'There\'s a picture ___ the wall.', options: ['on', 'in', 'at', 'under'], answer: 'on' },
          { visual: '🏡', question: 'He is ___ home right now.', options: ['at', 'in', 'on', 'by'], answer: 'at' },
        ],
      },
      {
        title: 'Round 2 — under, over, above, below, between, among',
        hint: 'between = two things · among = many things · above/below = higher/lower',
        questions: [
          { visual: '🐱', question: 'The cat is sleeping ___ the bed.', options: ['under', 'over', 'on', 'between'], answer: 'under' },
          { visual: '💡', question: 'The lamp hangs ___ the table.', options: ['above', 'under', 'between', 'among'], answer: 'above' },
          { visual: '🏦', question: 'The bank is ___ the shop and the café.', options: ['between', 'among', 'under', 'above'], answer: 'between' },
          { visual: '✍️', question: 'Write your name ___ the line.', options: ['below', 'above', 'among', 'over'], answer: 'below' },
          { visual: '👥', question: 'She stood ___ a crowd of people.', options: ['among', 'between', 'above', 'under'], answer: 'among' },
          { visual: '✈️', question: 'A plane flew ___ the city.', options: ['over', 'under', 'below', 'among'], answer: 'over' },
        ],
      },
      {
        title: 'Round 3 — behind, in front of, next to, near, opposite, inside',
        hint: 'opposite = facing, on the other side · next to = beside · near = close to',
        questions: [
          { visual: '🌳', question: 'The garden is ___ the house.', options: ['behind', 'in front of', 'opposite', 'inside'], answer: 'behind' },
          { visual: '🚗', question: 'He parked ___ the door, blocking the way in.', options: ['in front of', 'behind', 'inside', 'near'], answer: 'in front of' },
          { visual: '🪑', question: 'Sit ___ me — there\'s a free chair here.', options: ['next to', 'opposite', 'behind', 'inside'], answer: 'next to' },
          { visual: '🏨', question: 'The hotel is ___ the airport, only five minutes away.', options: ['near', 'inside', 'opposite', 'behind'], answer: 'near' },
          { visual: '💊', question: 'The pharmacy is ___ the bank, on the other side of the street.', options: ['opposite', 'next to', 'inside', 'behind'], answer: 'opposite' },
          { visual: '🚙', question: 'Stay ___ the car until it stops raining.', options: ['inside', 'outside', 'near', 'in front of'], answer: 'inside' },
        ],
      },
    ],
  },

  movement: {
    id: 'movement',
    icon: '🏃',
    title: 'Prepositions of Movement',
    description: 'How something moves: to, into, across, through, up, down…',
    rounds: [
      {
        title: 'Round 1 — to, into, onto, out of',
        hint: 'to = towards a destination · into = entering · out of = leaving',
        questions: [
          { visual: '🏖️', question: 'We are going ___ the beach.', options: ['to', 'into', 'onto', 'at'], answer: 'to' },
          { visual: '🚪', question: 'She walked ___ the room and sat down.', options: ['into', 'to', 'onto', 'out of'], answer: 'into' },
          { visual: '📱', question: 'He took his phone ___ his pocket.', options: ['out of', 'into', 'off', 'from'], answer: 'out of' },
          { visual: '🐈', question: 'The cat jumped ___ the table.', options: ['onto', 'into', 'out of', 'to'], answer: 'onto' },
          { visual: '🚘', question: 'I\'m driving ___ London tomorrow.', options: ['to', 'into', 'at', 'onto'], answer: 'to' },
          { visual: '🚕', question: 'Please get ___ the car — we\'re leaving now.', options: ['into', 'onto', 'out of', 'to'], answer: 'into' },
        ],
      },
      {
        title: 'Round 2 — across, through, along, around',
        hint: 'across = one side to the other · through = in and out the far end · along = following a line',
        questions: [
          { visual: '🏊', question: 'They swam ___ the river to the other side.', options: ['across', 'through', 'along', 'around'], answer: 'across' },
          { visual: '🚇', question: 'The train went ___ a long tunnel.', options: ['through', 'across', 'along', 'over'], answer: 'through' },
          { visual: '🏝️', question: 'We walked ___ the beach for an hour.', options: ['along', 'across', 'through', 'around'], answer: 'along' },
          { visual: '🌍', question: 'The Earth moves ___ the Sun.', options: ['around', 'across', 'along', 'through'], answer: 'around' },
          { visual: '🌲', question: 'She ran ___ the forest to escape.', options: ['through', 'across', 'along', 'onto'], answer: 'through' },
          { visual: '🏃‍♂️', question: 'The children ran ___ the corner and disappeared.', options: ['around', 'along', 'across', 'through'], answer: 'around' },
        ],
      },
      {
        title: 'Round 3 — up, down, off, past, towards, over',
        hint: 'past = going by without stopping · towards = in the direction of · off = away from a surface',
        questions: [
          { visual: '🌴', question: 'The cat climbed ___ the tree.', options: ['up', 'down', 'over', 'past'], answer: 'up' },
          { visual: '🪜', question: 'Be careful going ___ the stairs.', options: ['down', 'up', 'off', 'through'], answer: 'down' },
          { visual: '🚲', question: 'He fell ___ his bicycle.', options: ['off', 'out of', 'down', 'over'], answer: 'off' },
          { visual: '🏫', question: 'We drove ___ the school on the way home.', options: ['past', 'through', 'towards', 'off'], answer: 'past' },
          { visual: '😊', question: 'She walked ___ me with a big smile.', options: ['towards', 'past', 'off', 'across'], answer: 'towards' },
          { visual: '🐴', question: 'The horse jumped ___ the fence.', options: ['over', 'under', 'through', 'off'], answer: 'over' },
        ],
      },
    ],
  },
};
