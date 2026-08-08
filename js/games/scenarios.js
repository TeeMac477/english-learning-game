window.GAMES.push({
  id: 'scenarios',
  icon: '💬',
  title: 'Real-World Conversations',
  description: 'Airport, restaurant, shopping — pick the right thing to say as the conversation continues',
  category: 'scenario',
  render: function(container) { scnHome(container); },
});

var SCN_LEVELS = [
  { id: 'beginner', icon: '⚡', label: 'Beginner', desc: 'Short, direct exchanges' },
  { id: 'intermediate', icon: '📗', label: 'Intermediate', desc: 'More natural phrasing' },
  { id: 'advanced', icon: '🔥', label: 'Advanced', desc: 'Fast, idiomatic, tricky distractors' },
];

function scnHome(container) {
  var scenarios = Object.values(window.SCENARIOS);
  container.innerHTML =
    '<h2 class="section-heading">💬 Real-World Conversations</h2>' +
    '<p class="section-sub">Pick a scenario, choose your level, and hold the conversation!</p>' +
    '<div class="game-grid"></div>';
  var grid = container.querySelector('.game-grid');
  scenarios.forEach(function(scn) {
    var card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML =
      '<div class="icon">' + scn.icon + '</div>' +
      '<h3>' + scn.title + '</h3>' +
      '<p>' + scn.description + '</p>';
    card.addEventListener('click', function() { scnLevelPicker(container, scn); });
    grid.appendChild(card);
  });
}

function scnLevelPicker(container, scn) {
  container.innerHTML =
    '<button class="ghost-btn back-inline">← All scenarios</button>' +
    '<h2 class="section-heading">' + scn.icon + ' ' + scn.title + '</h2>' +
    '<p class="section-sub">Choose a level — each one is harder than the last.</p>' +
    '<div class="diff-grid"></div>';
  container.querySelector('.back-inline').addEventListener('click', function() { scnHome(container); });
  var grid = container.querySelector('.diff-grid');
  SCN_LEVELS.forEach(function(lvl) {
    var turns = scn.levels[lvl.id].length;
    var card = document.createElement('button');
    card.className = 'diff-card diff-' + (lvl.id === 'beginner' ? 'quick' : lvl.id === 'intermediate' ? 'regular' : 'hard');
    card.innerHTML =
      '<div class="diff-icon">' + lvl.icon + '</div>' +
      '<h3>' + lvl.label + '</h3>' +
      '<p>' + lvl.desc + '</p>' +
      '<span class="diff-count">' + turns + ' turns</span>';
    card.addEventListener('click', function() { scnPlay(container, scn, lvl); });
    grid.appendChild(card);
  });
}

function scnPlay(container, scn, level) {
  var turns = scn.levels[level.id];
  var idx = 0;
  var score = 0;
  var transcript = []; // { speaker, text, mine }
  var answered = false;

  function render() {
    if (idx >= turns.length) { showResults(); return; }
    var turn = turns[idx];
    answered = false;

    var html =
      '<button class="ghost-btn back-inline">← Levels</button>' +
      '<h2 class="section-heading">' + scn.icon + ' ' + scn.title + ' <span class="story-level-badge">' + level.label + '</span></h2>' +
      '<div class="scn-progress">Turn ' + (idx + 1) + ' / ' + turns.length + ' · Score: ' + score + '</div>' +
      '<div class="scn-chat" id="scn-chat">';

    transcript.forEach(function(t) {
      html += '<div class="scn-bubble ' + (t.mine ? 'scn-bubble-mine' : 'scn-bubble-npc') + '">' +
        (t.speaker ? '<span class="scn-speaker">' + t.speaker + '</span>' : '') +
        '<span class="scn-bubble-text">' + t.text + '</span>' +
      '</div>';
    });

    if (turn.type === 'respond') {
      html += '<div class="scn-bubble scn-bubble-npc scn-current">' +
        '<span class="scn-speaker">' + turn.speaker + '</span>' +
        '<span class="scn-bubble-text">' + turn.prompt + '</span>' +
      '</div>';
    } else {
      html += '<div class="scn-ru-prompt"><span class="scn-ru-icon">🗣️</span>' + turn.situation + '</div>';
    }

    html += '</div>' +
      '<div class="scn-sub">' + (turn.type === 'respond' ? 'What do you say?' : 'Choose the right phrase') + '</div>' +
      '<div id="scn-opts" class="vb-options"></div>' +
      '<div id="scn-fb" style="min-height:2rem;margin-top:0.75rem;font-weight:600;text-align:center"></div>';

    container.innerHTML = html;
    container.querySelector('.back-inline').addEventListener('click', function() { scnLevelPicker(container, scn); });

    var optsDiv = container.querySelector('#scn-opts');
    var fbDiv = container.querySelector('#scn-fb');
    var shuffled = turn.options.slice().sort(function() { return Math.random() - 0.5; });

    shuffled.forEach(function(opt) {
      var btn = document.createElement('button');
      btn.className = 'vb-opt-btn';
      btn.textContent = opt;
      btn.addEventListener('click', function() {
        if (answered) return;
        answered = true;
        var isCorrect = opt === turn.answer;
        optsDiv.querySelectorAll('button').forEach(function(b) { b.disabled = true; });
        if (isCorrect) {
          score++;
          btn.classList.add('vb-correct');
          fbDiv.innerHTML = '<span style="color:#059669">✓ Correct!</span>';
        } else {
          btn.classList.add('vb-wrong');
          optsDiv.querySelectorAll('button').forEach(function(b) {
            if (b.textContent === turn.answer) b.classList.add('vb-correct');
          });
          fbDiv.innerHTML = '<span style="color:#dc2626">The best answer: "' + turn.answer + '"</span>';
        }

        transcript.push(
          turn.type === 'respond'
            ? { speaker: turn.speaker, text: turn.prompt, mine: false }
            : { speaker: null, text: '🗣️ ' + turn.situation, mine: false, ru: true }
        );
        transcript.push({ speaker: 'You', text: turn.answer, mine: true });

        var nextBtn = document.createElement('button');
        nextBtn.className = 'ti-submit';
        nextBtn.style.marginTop = '0.75rem';
        nextBtn.textContent = idx + 1 < turns.length ? 'Continue →' : 'See results →';
        nextBtn.addEventListener('click', function() { idx++; render(); });
        fbDiv.appendChild(document.createElement('br'));
        fbDiv.appendChild(nextBtn);

        var chat = container.querySelector('#scn-chat');
        if (chat) chat.scrollTop = chat.scrollHeight;
      });
      optsDiv.appendChild(btn);
    });
  }

  function showResults() {
    var pct = Math.round((score / turns.length) * 100);
    container.innerHTML =
      '<button class="ghost-btn back-inline">← Levels</button>' +
      '<h2 class="section-heading">' + scn.icon + ' ' + scn.title + '</h2>' +
      '<div style="text-align:center;padding:2rem 1rem">' +
        '<div style="font-size:3rem;margin-bottom:0.75rem">' + (pct === 100 ? '🏆' : pct >= 70 ? '⭐' : pct >= 40 ? '👍' : '📚') + '</div>' +
        '<h3 style="font-size:1.3rem;margin-bottom:0.5rem">' + (pct === 100 ? 'Perfect conversation!' : pct >= 70 ? 'Great job!' : pct >= 40 ? 'Good try!' : 'Keep practising!') + '</h3>' +
        '<p style="color:var(--muted);margin-bottom:1.5rem">You got <strong>' + score + ' / ' + turns.length + '</strong> right (' + pct + '%) at <strong>' + level.label + '</strong> level</p>' +
        '<div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">' +
          '<button class="ti-submit" style="max-width:200px" id="scn-again">Play again ↺</button>' +
          '<button class="ghost-btn" id="scn-levels">← Levels</button>' +
        '</div>' +
      '</div>';
    container.querySelector('.back-inline').addEventListener('click', function() { scnLevelPicker(container, scn); });
    container.querySelector('#scn-again').addEventListener('click', function() { scnPlay(container, scn, level); });
    container.querySelector('#scn-levels').addEventListener('click', function() { scnLevelPicker(container, scn); });
  }

  render();
}
