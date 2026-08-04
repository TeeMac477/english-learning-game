window.GAMES.push({
  id: 'hangman',
  icon: '🪢',
  title: 'Hangman',
  description: 'Guess letters to spell out English words — wrong guesses draw the hangman!',
  category: 'vocabulary',
  render: function(container) { hmHome(container); },
});

function hmHome(container) {
  var cats = Object.values(window.VOCABULARY);
  container.innerHTML =
    '<h2 class="section-heading">🪢 Hangman</h2>' +
    '<p class="section-sub">Pick a topic, then guess the English word letter by letter!</p>' +
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
      '<span class="tag tag-new">' + qs.length + ' words</span>';
    card.addEventListener('click', function() { hmPickDifficulty(container, cat); });
    grid.appendChild(card);
  });
}

function hmPickDifficulty(container, cat) {
  var allQs = cat.rounds.flatMap(function(r) { return r.questions; });
  window.renderDifficultyPicker(
    container,
    cat.icon + ' ' + cat.title,
    'Choose how many words to guess. Hard mode gives fewer wrong guesses!',
    { quick: 5, regular: 10, hard: Math.min(15, allQs.length) },
    'words',
    function(level, count) { hmPlay(container, cat, level, count); },
    function() { hmHome(container); }
  );
}

function hmDrawSvg(wrong) {
  var parts = [
    '<line x1="20" y1="150" x2="80" y2="150" stroke="#1e293b" stroke-width="3"/>',
    '<line x1="50" y1="150" x2="50" y2="30" stroke="#1e293b" stroke-width="3"/>',
    '<line x1="50" y1="30" x2="110" y2="30" stroke="#1e293b" stroke-width="3"/>',
    '<line x1="110" y1="30" x2="110" y2="45" stroke="#1e293b" stroke-width="2"/>',
    '<circle cx="110" cy="58" r="13" fill="none" stroke="#1e293b" stroke-width="2.5"/>',
    '<line x1="110" y1="71" x2="110" y2="105" stroke="#1e293b" stroke-width="2.5"/>',
    '<line x1="110" y1="80" x2="92" y2="95" stroke="#1e293b" stroke-width="2.5"/>',
    '<line x1="110" y1="80" x2="128" y2="95" stroke="#1e293b" stroke-width="2.5"/>',
    '<line x1="110" y1="105" x2="92" y2="125" stroke="#1e293b" stroke-width="2.5"/>',
    '<line x1="110" y1="105" x2="128" y2="125" stroke="#1e293b" stroke-width="2.5"/>',
  ];
  var svg = '<svg viewBox="0 0 150 160" style="width:150px;height:160px;display:block;margin:0 auto">';
  for (var i = 0; i < Math.min(wrong, parts.length); i++) {
    svg += parts[i];
  }
  svg += '</svg>';
  return svg;
}

function hmPlay(container, cat, level, count) {
  var allQs = cat.rounds.flatMap(function(r) { return r.questions; });
  var pool = window.pickForDifficulty(allQs, level, count);
  var wordIdx = 0;
  var score = 0;
  var MAX_WRONG = level === 'hard' ? 7 : level === 'quick' ? 12 : 10;

  function playWord() {
    if (wordIdx >= pool.length) { showResults(); return; }
    var q = pool[wordIdx];
    var word = q.english.toUpperCase();
    var guessed = {};
    var wrong = 0;

    var vowels = 'AEIOU'.split('');
    var consonants = 'BCDFGHJKLMNPQRSTVWXYZ'.split('');

    function getDisplay() {
      return word.split('').map(function(ch) {
        if (ch === ' ') return '&nbsp;';
        if (ch === '-') return '-';
        return guessed[ch] ? ch : '_';
      }).join(' ');
    }

    function isWon() {
      return word.split('').every(function(ch) { return ch === ' ' || ch === '-' || guessed[ch]; });
    }

    function render() {
      container.innerHTML =
        '<button class="ghost-btn back-inline">← All topics</button>' +
        '<h2 class="section-heading">' + cat.icon + ' ' + cat.title + '</h2>' +
        '<div style="text-align:center">' +
          '<div style="font-size:0.8rem;color:var(--muted);margin-bottom:0.5rem">Word ' + (wordIdx + 1) + ' / ' + pool.length + ' · Score: ' + score + '</div>' +
          '<div id="hm-svg">' + hmDrawSvg(wrong) + '</div>' +
          '<div style="margin:0.75rem 0">' +
            '<span style="font-size:2.5rem">' + (q.visual || '❓') + '</span>' +
          '</div>' +
          '<div style="font-size:0.9rem;color:var(--muted);margin-bottom:0.25rem">Russian: <strong>' + q.russian + '</strong></div>' +
          '<div id="hm-word" style="font-size:1.6rem;font-weight:700;letter-spacing:0.3rem;font-family:monospace;margin:0.75rem 0">' + getDisplay() + '</div>' +
          '<div style="font-size:0.8rem;color:var(--error);min-height:1.2rem" id="hm-wrong">' + wrong + ' / ' + MAX_WRONG + ' wrong</div>' +
          '<div style="margin-top:0.75rem">' +
            '<div style="font-size:0.7rem;color:var(--muted);margin-bottom:0.25rem">Vowels</div>' +
            '<div id="hm-vowels" style="display:flex;flex-wrap:wrap;gap:0.3rem;justify-content:center;margin-bottom:0.5rem"></div>' +
            '<div style="font-size:0.7rem;color:var(--muted);margin-bottom:0.25rem">Consonants</div>' +
            '<div id="hm-consonants" style="display:flex;flex-wrap:wrap;gap:0.3rem;justify-content:center"></div>' +
          '</div>' +
          '<div id="hm-fb" style="min-height:2rem;margin-top:0.5rem;font-weight:600"></div>' +
        '</div>';

      container.querySelector('.back-inline').addEventListener('click', function() { hmHome(container); });

      function addLetters(letters, parentId) {
        var parent = container.querySelector('#' + parentId);
        letters.forEach(function(letter) {
          var btn = document.createElement('button');
          btn.textContent = letter;
          btn.style.cssText = 'width:36px;height:36px;border-radius:8px;border:2px solid #e2e8f0;background:white;font-size:0.9rem;font-weight:700;cursor:pointer;font-family:inherit;transition:all 0.15s;';
          if (guessed[letter]) {
            btn.disabled = true;
            btn.style.opacity = '0.3';
            btn.style.cursor = 'default';
          }
          btn.addEventListener('click', function() {
            if (guessed[letter]) return;
            guessed[letter] = true;
            if (word.indexOf(letter) >= 0) {
              btn.style.borderColor = '#10b981';
              btn.style.background = '#d1fae5';
              btn.style.color = '#065f46';
            } else {
              wrong++;
              btn.style.borderColor = '#ef4444';
              btn.style.background = '#fee2e2';
              btn.style.color = '#991b1b';
            }
            btn.disabled = true;
            btn.style.opacity = '0.4';

            container.querySelector('#hm-word').innerHTML = getDisplay();
            container.querySelector('#hm-svg').innerHTML = hmDrawSvg(wrong);
            container.querySelector('#hm-wrong').textContent = wrong + ' / ' + MAX_WRONG + ' wrong';

            if (isWon()) {
              score++;
              container.querySelector('#hm-fb').innerHTML = '<span style="color:#059669">✓ Correct! <strong>' + q.english + '</strong></span>';
              disableAll();
              showNext();
            } else if (wrong >= MAX_WRONG) {
              container.querySelector('#hm-fb').innerHTML = '<span style="color:#dc2626">✗ The word was <strong>' + q.english + '</strong></span>';
              container.querySelector('#hm-word').innerHTML = word.split('').join(' ');
              disableAll();
              showNext();
            }
          });
          parent.appendChild(btn);
        });
      }

      function disableAll() {
        container.querySelectorAll('#hm-vowels button, #hm-consonants button').forEach(function(b) {
          b.disabled = true;
          b.style.cursor = 'default';
        });
      }

      function showNext() {
        var nextBtn = document.createElement('button');
        nextBtn.className = 'ti-submit';
        nextBtn.style.marginTop = '0.75rem';
        nextBtn.textContent = wordIdx + 1 < pool.length ? 'Next word →' : 'See results →';
        nextBtn.addEventListener('click', function() { wordIdx++; playWord(); });
        container.querySelector('#hm-fb').appendChild(document.createElement('br'));
        container.querySelector('#hm-fb').appendChild(nextBtn);
      }

      addLetters(vowels, 'hm-vowels');
      addLetters(consonants, 'hm-consonants');
    }

    render();
  }

  function showResults() {
    var pct = Math.round((score / pool.length) * 100);
    container.innerHTML =
      '<button class="ghost-btn back-inline">← All topics</button>' +
      '<h2 class="section-heading">🪢 Hangman</h2>' +
      '<div style="text-align:center;padding:2rem 1rem">' +
        '<div style="font-size:3rem;margin-bottom:0.75rem">' + (pct >= 80 ? '🏆' : pct >= 50 ? '⭐' : '📚') + '</div>' +
        '<h3 style="font-size:1.3rem;margin-bottom:0.5rem">' + (pct >= 80 ? 'Amazing!' : pct >= 50 ? 'Good job!' : 'Keep practising!') + '</h3>' +
        '<p style="color:var(--muted);margin-bottom:1.5rem">You guessed <strong>' + score + ' / ' + pool.length + '</strong> words (' + pct + '%)</p>' +
        '<div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">' +
          '<button class="ti-submit" style="max-width:180px" id="hm-again">Play again ↺</button>' +
          '<button class="ghost-btn" id="hm-back">← Topics</button>' +
        '</div>' +
      '</div>';
    container.querySelector('.back-inline').addEventListener('click', function() { hmHome(container); });
    container.querySelector('#hm-again').addEventListener('click', function() { hmPlay(container, cat, level, count); });
    container.querySelector('#hm-back').addEventListener('click', function() { hmHome(container); });
  }

  playWord();
}
