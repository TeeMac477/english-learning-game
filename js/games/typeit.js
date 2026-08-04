window.GAMES.push({
  id: 'typeit',
  icon: '⌨️',
  title: 'Type It',
  description: 'See the Russian word and type the English translation — spelling counts!',
  category: 'vocabulary',
  render: function(container) { tiHome(container); },
});

function tiHome(container) {
  var cats = Object.values(window.VOCABULARY);
  container.innerHTML =
    '<h2 class="section-heading">⌨️ Type It</h2>' +
    '<p class="section-sub">See Russian, type English. Close enough counts!</p>' +
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
      '<span class="tag tag-new">' + qs.length + ' words</span>';
    card.addEventListener('click', function() { tiPlay(container, cat); });
    grid.appendChild(card);
  });
}

function tiLevenshtein(a, b) {
  var m = a.length, n = b.length;
  var dp = [];
  for (var i = 0; i <= m; i++) {
    dp[i] = [i];
    for (var j = 1; j <= n; j++) {
      dp[i][j] = i === 0 ? j : Math.min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1));
    }
  }
  return dp[m][n];
}

function tiPlay(container, cat) {
  var allQs = cat.rounds.flatMap(function(r) { return r.questions; });
  var questions = allQs.slice().sort(function() { return Math.random() - 0.5; });
  var idx = 0;
  var correct = 0;
  var answered = false;

  function renderQ() {
    if (idx >= questions.length) { showResults(); return; }
    var q = questions[idx];
    answered = false;

    container.innerHTML =
      '<button class="ghost-btn back-inline">← All topics</button>' +
      '<h2 class="section-heading">' + cat.icon + ' ' + cat.title + '</h2>' +
      '<div class="ti-card">' +
        '<div class="ti-progress">Question ' + (idx + 1) + ' of ' + questions.length + ' · Score: ' + correct + '</div>' +
        '<div class="ti-emoji">' + (q.visual || '🔤') + '</div>' +
        '<div class="ti-russian">' + q.russian + '</div>' +
        '<div class="ti-sub">Type the English word</div>' +
        '<input class="ti-input" id="ti-input" type="text" placeholder="Type here..." autocomplete="off" autocorrect="off" spellcheck="false">' +
        '<div class="ti-feedback" id="ti-feedback"></div>' +
        '<button class="ti-submit" id="ti-submit">Check ↵</button>' +
        '<div style="text-align:center;margin-top:0.5rem"><button class="ti-skip" id="ti-skip">Skip this one</button></div>' +
      '</div>';

    container.querySelector('.back-inline').addEventListener('click', function() { tiHome(container); });

    var input = container.querySelector('#ti-input');
    var feedback = container.querySelector('#ti-feedback');
    var submitBtn = container.querySelector('#ti-submit');

    input.focus();

    function check() {
      if (answered) { idx++; renderQ(); return; }
      var typed = input.value.trim().toLowerCase();
      if (!typed) return;
      var target = q.english.toLowerCase();
      var dist = tiLevenshtein(typed, target);
      var isCorrect = dist <= 1;
      answered = true;
      if (isCorrect) {
        correct++;
        input.classList.add('ti-correct');
        feedback.textContent = typed === target ? '✓ Perfect!' : '✓ Close enough! (' + q.english + ')';
        feedback.className = 'ti-feedback ti-correct';
      } else {
        input.classList.add('ti-wrong');
        feedback.innerHTML = '✗ The answer is <strong>' + q.english + '</strong>';
        feedback.className = 'ti-feedback ti-wrong';
      }
      submitBtn.textContent = 'Next →';
      input.disabled = true;
    }

    submitBtn.addEventListener('click', check);
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') check();
    });

    container.querySelector('#ti-skip').addEventListener('click', function() {
      if (answered) return;
      answered = true;
      input.classList.add('ti-wrong');
      feedback.innerHTML = 'Skipped. Answer: <strong>' + q.english + '</strong>';
      feedback.className = 'ti-feedback ti-wrong';
      submitBtn.textContent = 'Next →';
      input.disabled = true;
    });
  }

  function showResults() {
    var pct = Math.round((correct / questions.length) * 100);
    var msg = pct === 100 ? '🏆 Perfect score!' : pct >= 70 ? '⭐ Great job!' : pct >= 40 ? '👍 Keep practising!' : '📚 Keep going!';
    container.innerHTML =
      '<button class="ghost-btn back-inline">← All topics</button>' +
      '<h2 class="section-heading">' + cat.icon + ' ' + cat.title + '</h2>' +
      '<div style="text-align:center;padding:2rem 1rem">' +
        '<div style="font-size:3rem;margin-bottom:0.75rem">' + msg.split(' ')[0] + '</div>' +
        '<h3 style="font-size:1.3rem;margin-bottom:0.5rem">' + msg.slice(2) + '</h3>' +
        '<p style="color:var(--muted);margin-bottom:1.5rem">You typed <strong>' + correct + ' / ' + questions.length + '</strong> correctly (' + pct + '%)</p>' +
        '<div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">' +
          '<button class="ti-submit" style="max-width:180px" id="ti-again">Play again ↺</button>' +
          '<button class="ghost-btn" id="ti-back">← Topics</button>' +
        '</div>' +
      '</div>';
    container.querySelector('.back-inline').addEventListener('click', function() { tiHome(container); });
    container.querySelector('#ti-again').addEventListener('click', function() { tiPlay(container, cat); });
    container.querySelector('#ti-back').addEventListener('click', function() { tiHome(container); });
  }

  renderQ();
}
