window.GAMES.push({
  id: 'grammar-quiz',
  icon: '📐',
  title: 'Grammar Practice',
  description: 'Dedicated quizzes for every grammar topic — to be, some/any, articles & more',
  category: 'grammar',
  render: function(container) { gqHome(container); },
});

function gqHome(container) {
  var topics = Object.values(window.GRAMMAR_TOPICS);
  container.innerHTML =
    '<h2 class="section-heading">📐 Grammar Practice</h2>' +
    '<p class="section-sub">Pick a grammar topic to practise. Fill in the gaps!</p>' +
    '<div class="game-grid"></div>';
  var grid = container.querySelector('.game-grid');
  topics.forEach(function(topic) {
    var card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML =
      '<div class="icon">' + topic.icon + '</div>' +
      '<h3>' + topic.title + '</h3>' +
      '<p>' + topic.description + '</p>' +
      '<span class="tag tag-new">' + topic.questions.length + ' questions</span>';
    card.addEventListener('click', function() { gqPlay(container, topic); });
    grid.appendChild(card);
  });
}

function gqPlay(container, topic) {
  var questions = topic.questions.slice().sort(function() { return Math.random() - 0.5; });
  var idx = 0;
  var score = 0;
  var answered = false;

  function renderQ() {
    if (idx >= questions.length) { showResults(); return; }
    var q = questions[idx];
    answered = false;

    var parts = q.sentence.split('___');
    var sentenceHtml = parts[0] + '<span class="fg-blank">&nbsp;&nbsp;&nbsp;&nbsp;</span>' + (parts[1] || '');

    container.innerHTML =
      '<button class="ghost-btn back-inline">← All topics</button>' +
      '<h2 class="section-heading">' + topic.icon + ' ' + topic.title + '</h2>' +
      '<div style="background:white;border-radius:var(--radius);padding:1.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1rem">' +
        '<div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--muted);margin-bottom:0.5rem">Question ' + (idx + 1) + ' / ' + questions.length + ' · Score: ' + score + '</div>' +
        '<div class="fg-sentence" id="gq-sentence">' + sentenceHtml + '</div>' +
        '<div id="gq-opts" style="display:flex;flex-direction:column;gap:0.5rem"></div>' +
        '<div id="gq-fb" style="min-height:1.5rem;text-align:center;font-weight:600;margin-top:0.75rem"></div>' +
      '</div>' +
      '<div style="text-align:center"><button class="ghost-btn" id="gq-next" style="display:none">Next →</button></div>';

    container.querySelector('.back-inline').addEventListener('click', function() { gqHome(container); });

    var optsDiv = container.querySelector('#gq-opts');
    var fbDiv = container.querySelector('#gq-fb');
    var nextBtn = container.querySelector('#gq-next');
    var sentenceDiv = container.querySelector('#gq-sentence');

    q.options.forEach(function(opt) {
      var btn = document.createElement('button');
      btn.className = 'round-item';
      btn.style.textAlign = 'center';
      btn.textContent = opt;
      btn.addEventListener('click', function() {
        if (answered) return;
        answered = true;
        var isCorrect = opt === q.answer;
        if (isCorrect) {
          score++;
          btn.style.borderColor = '#10b981';
          btn.style.background = '#d1fae5';
          fbDiv.textContent = '✓ Correct!';
          fbDiv.style.color = '#059669';
        } else {
          btn.style.borderColor = '#ef4444';
          btn.style.background = '#fee2e2';
          fbDiv.innerHTML = '✗ The answer is <strong>' + q.answer + '</strong>';
          fbDiv.style.color = '#dc2626';
          optsDiv.querySelectorAll('button').forEach(function(b) {
            if (b.textContent === q.answer) {
              b.style.borderColor = '#10b981';
              b.style.background = '#d1fae5';
            }
          });
        }
        sentenceDiv.innerHTML = parts[0] + '<span class="fg-blank" style="color:' + (isCorrect ? '#059669' : '#dc2626') + ';background:' + (isCorrect ? '#d1fae5' : '#fee2e2') + '">' + q.answer + '</span>' + (parts[1] || '');
        optsDiv.querySelectorAll('button').forEach(function(b) { b.disabled = true; });
        nextBtn.style.display = 'inline-block';
      });
      optsDiv.appendChild(btn);
    });

    nextBtn.addEventListener('click', function() { idx++; renderQ(); });
  }

  function showResults() {
    var pct = Math.round((score / questions.length) * 100);
    var best = localStorage.getItem('gq:' + topic.id + ':best');
    if (!best || score > parseInt(best)) {
      localStorage.setItem('gq:' + topic.id + ':best', score);
    }
    container.innerHTML =
      '<button class="ghost-btn back-inline">← All topics</button>' +
      '<h2 class="section-heading">' + topic.icon + ' ' + topic.title + '</h2>' +
      '<div style="text-align:center;padding:2rem 1rem">' +
        '<div style="font-size:3rem;margin-bottom:0.75rem">' + (pct === 100 ? '🏆' : pct >= 70 ? '⭐' : pct >= 40 ? '👍' : '📚') + '</div>' +
        '<h3 style="font-size:1.3rem;margin-bottom:0.5rem">' + (pct === 100 ? 'Perfect!' : pct >= 70 ? 'Great work!' : pct >= 40 ? 'Good try!' : 'Keep practising!') + '</h3>' +
        '<p style="color:var(--muted);margin-bottom:1.5rem">You scored <strong>' + score + ' / ' + questions.length + '</strong> (' + pct + '%)</p>' +
        '<div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">' +
          '<button class="ti-submit" style="max-width:180px" id="gq-again">Play again ↺</button>' +
          '<button class="ghost-btn" id="gq-back">← Topics</button>' +
        '</div>' +
      '</div>';
    container.querySelector('.back-inline').addEventListener('click', function() { gqHome(container); });
    container.querySelector('#gq-again').addEventListener('click', function() { gqPlay(container, topic); });
    container.querySelector('#gq-back').addEventListener('click', function() { gqHome(container); });
  }

  renderQ();
}
