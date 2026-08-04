window.GAMES.push({
  id: 'wordwall',
  icon: '🧱',
  title: 'Word Wall',
  description: 'Match English words with their Russian translations before time runs out',
  category: 'vocabulary',
  render: function(container) { wwHome(container); },
});

function wwHome(container) {
  var cats = Object.values(window.VOCABULARY);
  container.innerHTML =
    '<h2 class="section-heading">🧱 Word Wall</h2>' +
    '<p class="section-sub">Pick a topic — match all pairs as fast as you can!</p>' +
    '<div class="game-grid"></div>';
  var grid = container.querySelector('.game-grid');
  cats.forEach(function(cat) {
    var qs = cat.rounds.flatMap(function(r) { return r.questions; });
    if (qs.length < 4) return;
    var card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML =
      '<div class="icon">' + cat.icon + '</div>' +
      '<h3>' + cat.title + '</h3>' +
      '<p>' + cat.description + '</p>' +
      '<span class="tag tag-new">' + qs.length + ' pairs</span>';
    card.addEventListener('click', function() { wwPlay(container, cat); });
    grid.appendChild(card);
  });
}

function wwPlay(container, cat) {
  var allQs = cat.rounds.flatMap(function(r) { return r.questions; });
  // pick up to 8 pairs, shuffled
  var pool = allQs.slice().sort(function() { return Math.random() - 0.5; }).slice(0, 8);
  var pairs = pool.map(function(q) { return { english: q.english, russian: q.russian }; });

  var errors = 0;
  var matched = 0;
  var total = pairs.length;
  var selectedEn = null;
  var selectedRu = null;
  var startTime = Date.now();
  var timerInterval = null;

  var enWords = pairs.map(function(p) { return p.english; }).sort(function() { return Math.random() - 0.5; });
  var ruWords = pairs.map(function(p) { return p.russian; }).sort(function() { return Math.random() - 0.5; });

  function render() {
    container.innerHTML =
      '<button class="ghost-btn back-inline">← All topics</button>' +
      '<h2 class="section-heading">' + cat.icon + ' ' + cat.title + '</h2>' +
      '<div class="ww-header">' +
        '<div><span id="ww-matched">' + matched + '</span>/<span>' + total + '</span> matched<span class="ww-errors" id="ww-errors">' + (errors ? '✗ ' + errors + ' wrong' : '') + '</span></div>' +
        '<div class="ww-timer" id="ww-timer">0:00</div>' +
      '</div>' +
      '<div class="ww-grid">' +
        '<div class="ww-col" id="ww-en"></div>' +
        '<div class="ww-col" id="ww-ru"></div>' +
      '</div>';

    container.querySelector('.back-inline').addEventListener('click', function() {
      clearInterval(timerInterval);
      wwHome(container);
    });

    var enCol = container.querySelector('#ww-en');
    var ruCol = container.querySelector('#ww-ru');

    enWords.forEach(function(word) {
      var btn = document.createElement('button');
      btn.className = 'ww-word';
      btn.dataset.word = word;
      btn.dataset.side = 'en';
      btn.textContent = word;
      btn.addEventListener('click', function() { handleClick(btn, 'en', word); });
      enCol.appendChild(btn);
    });

    ruWords.forEach(function(word) {
      var btn = document.createElement('button');
      btn.className = 'ww-word';
      btn.dataset.word = word;
      btn.dataset.side = 'ru';
      btn.textContent = word;
      btn.addEventListener('click', function() { handleClick(btn, 'ru', word); });
      ruCol.appendChild(btn);
    });

    timerInterval = setInterval(function() {
      var el = container.querySelector('#ww-timer');
      if (!el) { clearInterval(timerInterval); return; }
      var secs = Math.floor((Date.now() - startTime) / 1000);
      el.textContent = Math.floor(secs / 60) + ':' + ('0' + (secs % 60)).slice(-2);
    }, 500);
  }

  function handleClick(btn, side, word) {
    if (btn.classList.contains('matched') || btn.classList.contains('selected')) return;

    if (side === 'en') {
      if (selectedEn) {
        container.querySelectorAll('.ww-word[data-side="en"]').forEach(function(b) {
          b.classList.remove('selected');
        });
      }
      selectedEn = word;
      btn.classList.add('selected');
    } else {
      if (selectedRu) {
        container.querySelectorAll('.ww-word[data-side="ru"]').forEach(function(b) {
          b.classList.remove('selected');
        });
      }
      selectedRu = word;
      btn.classList.add('selected');
    }

    if (selectedEn && selectedRu) {
      var pair = pairs.find(function(p) { return p.english === selectedEn; });
      if (pair && pair.russian === selectedRu) {
        // correct match
        container.querySelectorAll('.ww-word').forEach(function(b) {
          if (b.dataset.word === selectedEn || b.dataset.word === selectedRu) {
            b.classList.remove('selected');
            b.classList.add('matched');
            b.disabled = true;
          }
        });
        matched++;
        var mEl = container.querySelector('#ww-matched');
        if (mEl) mEl.textContent = matched;
        selectedEn = null;
        selectedRu = null;
        if (matched === total) { clearInterval(timerInterval); showComplete(); }
      } else {
        // wrong
        errors++;
        var errEl = container.querySelector('#ww-errors');
        if (errEl) errEl.textContent = '✗ ' + errors + ' wrong';
        container.querySelectorAll('.ww-word.selected').forEach(function(b) {
          b.classList.add('wrong');
        });
        setTimeout(function() {
          container.querySelectorAll('.ww-word.wrong').forEach(function(b) {
            b.classList.remove('wrong', 'selected');
          });
        }, 500);
        selectedEn = null;
        selectedRu = null;
      }
    }
  }

  function showComplete() {
    var secs = Math.floor((Date.now() - startTime) / 1000);
    var timeStr = Math.floor(secs / 60) + ':' + ('0' + (secs % 60)).slice(-2);
    var msg = container.querySelector('.ww-complete-msg');
    if (!msg) {
      var div = document.createElement('div');
      div.className = 'ww-complete-msg';
      div.innerHTML =
        '🎉 Done in <strong>' + timeStr + '</strong>!' +
        (errors ? ' (' + errors + ' mistake' + (errors > 1 ? 's' : '') + ')' : ' Perfect!') +
        '<br><button class="mode-btn" style="margin-top:0.75rem" id="ww-play-again">Play again ↺</button>' +
        ' <button class="ghost-btn" style="margin-top:0.75rem" id="ww-back">← Topics</button>';
      container.querySelector('.ww-grid').insertAdjacentElement('beforebegin', div);
      div.querySelector('#ww-play-again').addEventListener('click', function() { wwPlay(container, cat); });
      div.querySelector('#ww-back').addEventListener('click', function() { wwHome(container); });
    }
  }

  render();
}
