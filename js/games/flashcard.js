window.GAMES.push({
  id: 'flashcard',
  icon: '🃏',
  title: 'Flashcard Sprint',
  description: 'Flip cards to reveal translations — sort into Know It and Try Again piles',
  category: 'vocabulary',
  render: function(container) { fcHome(container); },
});

function fcHome(container) {
  var cats = Object.values(window.VOCABULARY);
  container.innerHTML =
    '<h2 class="section-heading">🃏 Flashcard Sprint</h2>' +
    '<p class="section-sub">Flip cards, sort them — keep going until you know them all!</p>' +
    '<div class="game-grid"></div>';
  var grid = container.querySelector('.game-grid');
  cats.forEach(function(cat) {
    var qs = cat.rounds.flatMap(function(r) { return r.questions; });
    var card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML =
      '<div class="icon">' + cat.icon + '</div>' +
      '<h3>' + cat.title + '</h3>' +
      '<p>' + cat.description + '</p>' +
      '<span class="tag tag-new">' + qs.length + ' cards</span>';
    card.addEventListener('click', function() { fcPickDifficulty(container, cat); });
    grid.appendChild(card);
  });
}

function fcPickDifficulty(container, cat) {
  var allQs = cat.rounds.flatMap(function(r) { return r.questions; });
  window.renderDifficultyPicker(
    container,
    cat.icon + ' ' + cat.title,
    'Choose how many cards to go through.',
    { quick: 8, regular: 14, hard: Math.min(25, allQs.length) },
    'cards',
    function(level, count) { fcPlay(container, cat, level, count); },
    function() { fcHome(container); }
  );
}

function fcPlay(container, cat, level, count) {
  var allQs = cat.rounds.flatMap(function(r) { return r.questions; });
  var deck = window.pickForDifficulty(allQs, level, count);
  var known = 0;
  var total = deck.length;
  var flipped = false;

  function renderCard() {
    if (deck.length === 0) { showDone(); return; }
    var q = deck[0];
    flipped = false;
    container.innerHTML =
      '<button class="ghost-btn back-inline">← All topics</button>' +
      '<h2 class="section-heading">' + cat.icon + ' ' + cat.title + '</h2>' +
      '<div class="fc-wrap">' +
        '<div class="fc-progress-row">' +
          '<span>Card ' + (total - deck.length + 1) + ' of ' + total + '</span>' +
          '<div class="fc-counters">' +
            '<span class="fc-know">✓ ' + known + '</span>' +
            '<span class="fc-retry">↺ ' + (deck.length - 1 + (total - known - deck.length + (known > 0 ? 0 : 0))) + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="fc-scene" id="fc-scene">' +
          '<div class="fc-card" id="fc-card">' +
            '<div class="fc-face fc-front">' +
              '<div class="fc-sub">Russian — tap to reveal</div>' +
              '<div class="fc-emoji">' + (q.visual || '🔤') + '</div>' +
              '<div class="fc-word">' + q.russian + '</div>' +
              '<div class="fc-tap">Tap card to flip →</div>' +
            '</div>' +
            '<div class="fc-face fc-back">' +
              '<div class="fc-sub">English</div>' +
              '<div class="fc-emoji">' + (q.visual || '🔤') + '</div>' +
              '<div class="fc-word">' + q.english + '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="fc-btns" id="fc-btns" style="visibility:hidden">' +
          '<button class="fc-btn fc-retry-btn" id="fc-retry">↺ Try Again</button>' +
          '<button class="fc-btn fc-know-btn" id="fc-know">✓ Got It</button>' +
        '</div>' +
        '<button class="fc-done-btn" id="fc-skip-all">See results</button>' +
      '</div>';

    container.querySelector('.back-inline').addEventListener('click', function() {
      fcHome(container);
    });

    var scene = container.querySelector('#fc-scene');
    var cardEl = container.querySelector('#fc-card');
    var btnsEl = container.querySelector('#fc-btns');

    scene.addEventListener('click', function() {
      if (!flipped) {
        flipped = true;
        cardEl.classList.add('flipped');
        btnsEl.style.visibility = 'visible';
      }
    });

    container.querySelector('#fc-retry').addEventListener('click', function() {
      if (!flipped) return;
      var card = deck.shift();
      // put it back at a random position in the remaining deck (not first)
      var pos = Math.floor(Math.random() * Math.max(1, deck.length)) + 1;
      deck.splice(Math.min(pos, deck.length), 0, card);
      renderCard();
    });

    container.querySelector('#fc-know').addEventListener('click', function() {
      if (!flipped) return;
      deck.shift();
      known++;
      renderCard();
    });

    container.querySelector('#fc-skip-all').addEventListener('click', function() {
      known += deck.length;
      deck = [];
      showDone();
    });
  }

  function showDone() {
    container.innerHTML =
      '<button class="ghost-btn back-inline">← All topics</button>' +
      '<h2 class="section-heading">' + cat.icon + ' ' + cat.title + '</h2>' +
      '<div style="text-align:center;padding:2rem 1rem">' +
        '<div style="font-size:3rem;margin-bottom:0.75rem">🎉</div>' +
        '<h3 style="font-size:1.3rem;margin-bottom:0.5rem">Round complete!</h3>' +
        '<p style="color:var(--muted);margin-bottom:1.5rem">You knew <strong>' + known + ' / ' + total + '</strong> cards</p>' +
        '<div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">' +
          '<button class="fc-done-btn" style="max-width:180px" id="fc-again">Play again ↺</button>' +
          '<button class="ghost-btn" id="fc-back">← Topics</button>' +
        '</div>' +
      '</div>';
    container.querySelector('.back-inline').addEventListener('click', function() { fcHome(container); });
    container.querySelector('#fc-again').addEventListener('click', function() { fcPlay(container, cat, level, count); });
    container.querySelector('#fc-back').addEventListener('click', function() { fcHome(container); });
  }

  renderCard();
}
