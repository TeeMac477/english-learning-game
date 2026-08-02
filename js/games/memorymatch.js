window.GAMES.push({
  id: 'memory-match',
  icon: '🧠',
  title: 'Memory Match',
  description: 'Flip cards to find matching English–Russian pairs — train your memory!',
  section: 'arcade',
  render: function(container) { mmHome(container); },
});

function mmHome(container) {
  var cats = Object.values(window.VOCABULARY);
  container.innerHTML =
    '<h2 class="section-heading">🧠 Memory Match</h2>' +
    '<p class="section-sub">Pick a topic, then find matching pairs!</p>' +
    '<div class="game-grid"></div>';
  var grid = container.querySelector('.game-grid');
  cats.forEach(function(cat) {
    var qs = cat.rounds.flatMap(function(r) { return r.questions; });
    if (qs.length < 6) return;
    var card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML =
      '<div class="icon">' + cat.icon + '</div>' +
      '<h3>' + cat.title + '</h3>' +
      '<p>' + cat.description + '</p>' +
      '<span class="tag tag-new">' + qs.length + ' words</span>';
    card.addEventListener('click', function() { mmPlay(container, cat); });
    grid.appendChild(card);
  });
}

function mmPlay(container, cat) {
  var allQs = cat.rounds.flatMap(function(r) { return r.questions; });
  var pool = allQs.slice().sort(function() { return Math.random() - 0.5; }).slice(0, 6);
  var cards = [];
  pool.forEach(function(q) {
    cards.push({ id: q.english + '-en', pairId: q.english, text: q.english, visual: q.visual || '', type: 'en' });
    cards.push({ id: q.english + '-ru', pairId: q.english, text: q.russian, visual: '', type: 'ru' });
  });
  cards.sort(function() { return Math.random() - 0.5; });

  var flipped = [];
  var matched = {};
  var moves = 0;
  var matchCount = 0;
  var locked = false;

  function render() {
    container.innerHTML =
      '<button class="ghost-btn back-inline">← All topics</button>' +
      '<h2 class="section-heading">' + cat.icon + ' ' + cat.title + '</h2>' +
      '<div style="text-align:center">' +
        '<div style="font-size:0.8rem;color:var(--muted);margin-bottom:0.75rem">Moves: <strong id="mm-moves">' + moves + '</strong> · Pairs: <strong id="mm-pairs">' + matchCount + ' / ' + pool.length + '</strong></div>' +
        '<div class="mm-grid" id="mm-grid"></div>' +
      '</div>';

    container.querySelector('.back-inline').addEventListener('click', function() { mmHome(container); });
    var grid = container.querySelector('#mm-grid');

    cards.forEach(function(card, i) {
      var el = document.createElement('div');
      el.className = 'mm-card' + (matched[card.pairId] ? ' mm-matched' : '');
      el.dataset.index = i;
      el.innerHTML =
        '<div class="mm-card-inner">' +
          '<div class="mm-card-front">?</div>' +
          '<div class="mm-card-back">' +
            (card.visual ? '<span style="font-size:1.2rem">' + card.visual + '</span> ' : '') +
            '<span style="font-size:' + (card.text.length > 10 ? '0.7rem' : '0.85rem') + '">' + card.text + '</span>' +
            '<div style="font-size:0.6rem;color:var(--muted);margin-top:2px">' + (card.type === 'en' ? 'English' : 'Русский') + '</div>' +
          '</div>' +
        '</div>';

      if (!matched[card.pairId]) {
        el.addEventListener('click', function() { flipCard(i, el); });
      }
      grid.appendChild(el);
    });
  }

  function flipCard(index, el) {
    if (locked) return;
    if (flipped.length >= 2) return;
    if (flipped.some(function(f) { return f.index === index; })) return;
    if (matched[cards[index].pairId]) return;

    el.classList.add('mm-flipped');
    flipped.push({ index: index, el: el });

    if (flipped.length === 2) {
      moves++;
      container.querySelector('#mm-moves').textContent = moves;
      locked = true;

      var c1 = cards[flipped[0].index];
      var c2 = cards[flipped[1].index];

      if (c1.pairId === c2.pairId && c1.type !== c2.type) {
        matched[c1.pairId] = true;
        matchCount++;
        container.querySelector('#mm-pairs').textContent = matchCount + ' / ' + pool.length;
        setTimeout(function() {
          flipped[0].el.classList.add('mm-matched');
          flipped[1].el.classList.add('mm-matched');
          flipped = [];
          locked = false;
          if (matchCount === pool.length) showResults();
        }, 500);
      } else {
        setTimeout(function() {
          flipped[0].el.classList.remove('mm-flipped');
          flipped[1].el.classList.remove('mm-flipped');
          flipped = [];
          locked = false;
        }, 800);
      }
    }
  }

  function showResults() {
    var stars = moves <= pool.length + 2 ? 3 : moves <= pool.length * 2 ? 2 : 1;
    var starStr = '';
    for (var i = 0; i < 3; i++) starStr += i < stars ? '⭐' : '☆';
    container.innerHTML =
      '<button class="ghost-btn back-inline">← All topics</button>' +
      '<h2 class="section-heading">🧠 Memory Match</h2>' +
      '<div style="text-align:center;padding:2rem 1rem">' +
        '<div style="font-size:2.5rem;margin-bottom:0.5rem">' + starStr + '</div>' +
        '<h3 style="font-size:1.3rem;margin-bottom:0.5rem">' + (stars === 3 ? 'Perfect Memory!' : stars === 2 ? 'Great job!' : 'Keep practising!') + '</h3>' +
        '<p style="color:var(--muted);margin-bottom:1.5rem">You found all <strong>' + pool.length + '</strong> pairs in <strong>' + moves + '</strong> moves</p>' +
        '<div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">' +
          '<button class="ti-submit" style="max-width:180px" id="mm-again">Play again ↺</button>' +
          '<button class="ghost-btn" id="mm-back">← Topics</button>' +
        '</div>' +
      '</div>';
    container.querySelector('.back-inline').addEventListener('click', function() { mmHome(container); });
    container.querySelector('#mm-again').addEventListener('click', function() { mmPlay(container, cat); });
    container.querySelector('#mm-back').addEventListener('click', function() { mmHome(container); });
  }

  render();
}
