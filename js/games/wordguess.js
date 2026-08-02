window.GAMES.push({
  id: 'wordguess',
  icon: '🔍',
  title: 'Word Guess',
  description: 'Reveal clues one by one and guess the English word — fewer clues = more points',
  section: 'arcade',
  render: function(container) { wgHome(container); },
});

function wgHome(container) {
  var cats = Object.values(window.VOCABULARY);
  container.innerHTML =
    '<h2 class="section-heading">🔍 Word Guess</h2>' +
    '<p class="section-sub">Reveal clues one at a time — guess early for bonus points!</p>' +
    '<div class="game-grid"></div>';
  var grid = container.querySelector('.game-grid');
  cats.forEach(function(cat) {
    var qs = cat.rounds.flatMap(function(r) { return r.questions; });
    if (qs.length < 3) return;
    var card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML =
      '<div class="icon">' + cat.icon + '</div>' +
      '<h3>' + cat.title + '</h3>' +
      '<p>' + cat.description + '</p>' +
      '<span class="tag tag-new">' + qs.length + ' words</span>';
    card.addEventListener('click', function() { wgPlay(container, cat); });
    grid.appendChild(card);
  });
}

function wgPlay(container, cat) {
  var allQs = cat.rounds.flatMap(function(r) { return r.questions; });
  var questions = allQs.slice().sort(function() { return Math.random() - 0.5; }).slice(0, 10);
  var idx = 0;
  var totalScore = 0;
  var ROUND_COUNT = questions.length;

  function makeLetterHint(word) {
    var letters = word.split('');
    return letters.map(function(ch, i) {
      return i === 0 ? ch.toUpperCase() : (ch === ' ' ? ' ' : '_');
    }).join(' ');
  }

  function getDecoys(correct, allWords) {
    var decoys = allWords.filter(function(w) { return w.english !== correct.english; });
    decoys = decoys.sort(function() { return Math.random() - 0.5; }).slice(0, 3);
    var opts = [correct].concat(decoys).sort(function() { return Math.random() - 0.5; });
    return opts;
  }

  function renderRound() {
    if (idx >= questions.length) { showResults(); return; }
    var q = questions[idx];
    var opts = getDecoys(q, allQs);
    var cluesRevealed = 1;
    var maxPts = 3;
    var answered = false;

    function render() {
      var clues = [
        { label: 'Letters', text: makeLetterHint(q.english), pts: 3 },
        { label: 'Visual', text: q.visual || '❓', pts: 2 },
        { label: 'Russian', text: q.russian, pts: 1 },
      ];

      container.innerHTML =
        '<button class="ghost-btn back-inline">← All topics</button>' +
        '<div class="wg-header">' +
          '<div class="wg-score">Score: ' + totalScore + '</div>' +
          '<div class="wg-round">Round ' + (idx + 1) + ' / ' + ROUND_COUNT + '</div>' +
        '</div>' +
        '<div class="wg-clues" id="wg-clues"></div>' +
        '<div id="wg-reveal-wrap"></div>' +
        '<div id="wg-opts" style="display:flex;flex-direction:column;gap:0.4rem;margin-bottom:1rem"></div>' +
        '<div id="wg-fb" style="text-align:center;font-weight:600;min-height:1.5rem;font-size:0.95rem"></div>';

      container.querySelector('.back-inline').addEventListener('click', function() { wgHome(container); });

      var cluesDiv = container.querySelector('#wg-clues');
      clues.forEach(function(cl, i) {
        var div = document.createElement('div');
        div.className = 'wg-clue' + (i >= cluesRevealed ? ' hidden-clue' : '');
        div.innerHTML =
          '<div class="wg-clue-num">' + (i + 1) + '</div>' +
          '<div class="wg-clue-body">' +
            '<div class="wg-clue-label">' + cl.label + '</div>' +
            '<div class="wg-clue-text">' + cl.text + '</div>' +
          '</div>' +
          '<span class="wg-pts">+' + cl.pts + '</span>';
        cluesDiv.appendChild(div);
      });

      var revealWrap = container.querySelector('#wg-reveal-wrap');
      if (cluesRevealed < clues.length && !answered) {
        var revBtn = document.createElement('button');
        revBtn.className = 'wg-reveal-btn';
        revBtn.textContent = 'Reveal next clue (−1 point)';
        revBtn.addEventListener('click', function() {
          cluesRevealed++;
          maxPts--;
          render();
        });
        revealWrap.appendChild(revBtn);
      }

      var optsDiv = container.querySelector('#wg-opts');
      var fbDiv = container.querySelector('#wg-fb');
      opts.forEach(function(opt) {
        var btn = document.createElement('button');
        btn.className = 'round-item';
        btn.style.textAlign = 'center';
        btn.textContent = opt.english;
        btn.addEventListener('click', function() {
          if (answered) return;
          answered = true;
          var isCorrect = opt.english === q.english;
          if (isCorrect) {
            totalScore += maxPts;
            btn.style.borderColor = '#10b981';
            btn.style.background = '#d1fae5';
            fbDiv.textContent = '✓ Correct! +' + maxPts + ' points';
            fbDiv.style.color = '#059669';
          } else {
            btn.style.borderColor = '#ef4444';
            btn.style.background = '#fee2e2';
            fbDiv.innerHTML = '✗ Answer: <strong>' + q.english + '</strong>';
            fbDiv.style.color = '#dc2626';
            optsDiv.querySelectorAll('button').forEach(function(b) {
              if (b.textContent === q.english) { b.style.borderColor = '#10b981'; b.style.background = '#d1fae5'; }
            });
          }
          optsDiv.querySelectorAll('button').forEach(function(b) { b.disabled = true; });
          revealWrap.innerHTML = '';
          // show next button
          var nextBtn = document.createElement('button');
          nextBtn.className = 'ti-submit';
          nextBtn.style.marginTop = '0.75rem';
          nextBtn.textContent = idx + 1 < ROUND_COUNT ? 'Next word →' : 'See results →';
          nextBtn.addEventListener('click', function() { idx++; renderRound(); });
          container.querySelector('#wg-fb').insertAdjacentElement('afterend', nextBtn);
        });
        optsDiv.appendChild(btn);
      });
    }

    render();
  }

  function showResults() {
    var maxPossible = ROUND_COUNT * 3;
    var pct = Math.round((totalScore / maxPossible) * 100);
    container.innerHTML =
      '<button class="ghost-btn back-inline">← All topics</button>' +
      '<h2 class="section-heading">🔍 Word Guess</h2>' +
      '<div style="text-align:center;padding:2rem 1rem">' +
        '<div style="font-size:3rem;margin-bottom:0.75rem">' + (pct >= 80 ? '🏆' : pct >= 50 ? '⭐' : '📚') + '</div>' +
        '<h3 style="font-size:1.3rem;margin-bottom:0.5rem">Game over!</h3>' +
        '<p style="color:var(--muted);margin-bottom:0.5rem">Score: <strong>' + totalScore + ' / ' + maxPossible + '</strong> points (' + pct + '%)</p>' +
        '<p style="font-size:0.85rem;color:var(--muted);margin-bottom:1.5rem">Maximum 3 pts per word if you guess on clue 1</p>' +
        '<div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">' +
          '<button class="ti-submit" style="max-width:180px" id="wg-again">Play again ↺</button>' +
          '<button class="ghost-btn" id="wg-back">← Topics</button>' +
        '</div>' +
      '</div>';
    container.querySelector('.back-inline').addEventListener('click', function() { wgHome(container); });
    container.querySelector('#wg-again').addEventListener('click', function() { wgPlay(container, cat); });
    container.querySelector('#wg-back').addEventListener('click', function() { wgHome(container); });
  }

  renderRound();
}
