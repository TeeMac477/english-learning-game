window.GAMES.push({
  id: 'fillgap',
  icon: '✏️',
  title: 'Fill the Gap',
  description: 'Complete sentences with the right word — grammar practice from the lessons',
  category: 'grammar',
  render: function(container) { fgPlay(container); },
});

function fgCollect() {
  var slides = [];
  var sources = [];
  if (window.A0_CONTENT) sources = sources.concat(window.A0_CONTENT);
  if (window.A1_CONTENT) sources = sources.concat(window.A1_CONTENT);
  if (window.A1PLUS_CONTENT) sources = sources.concat(window.A1PLUS_CONTENT);
  sources.forEach(function(unit) {
    if (!unit.slides) return;
    unit.slides.forEach(function(slide) {
      if (slide.type === 'fill-gap' && slide.sentence && slide.options && slide.answer) {
        slides.push({
          unit: unit.title || '',
          sentence: slide.sentence,
          options: slide.options,
          answer: slide.answer,
        });
      }
    });
  });
  return slides;
}

function fgPlay(container) {
  var all = fgCollect();
  if (all.length === 0) {
    container.innerHTML =
      '<h2 class="section-heading">✏️ Fill the Gap</h2>' +
      '<p style="color:var(--muted);margin-top:1rem">No fill-gap exercises found in lessons yet.</p>';
    return;
  }
  var questions = all.slice().sort(function() { return Math.random() - 0.5; });
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
      '<h2 class="section-heading">✏️ Fill the Gap</h2>' +
      '<p class="section-sub">' + (q.unit ? 'From: ' + q.unit : '') + '</p>' +
      '<div style="background:white;border-radius:var(--radius);padding:1.5rem;box-shadow:0 2px 12px rgba(0,0,0,0.06);margin-bottom:1rem">' +
        '<div style="font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--muted);margin-bottom:0.5rem">Question ' + (idx + 1) + ' / ' + questions.length + ' · Score: ' + score + '</div>' +
        '<div class="fg-sentence" id="fg-sentence">' + sentenceHtml + '</div>' +
        '<div id="fg-opts" style="display:flex;flex-direction:column;gap:0.5rem"></div>' +
        '<div id="fg-fb" style="min-height:1.5rem;text-align:center;font-weight:600;margin-top:0.75rem"></div>' +
      '</div>' +
      '<div style="text-align:center"><button class="ghost-btn" id="fg-next" style="display:none">Next →</button></div>';

    var optsDiv = container.querySelector('#fg-opts');
    var fbDiv = container.querySelector('#fg-fb');
    var nextBtn = container.querySelector('#fg-next');
    var sentenceDiv = container.querySelector('#fg-sentence');

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
          // highlight correct
          optsDiv.querySelectorAll('button').forEach(function(b) {
            if (b.textContent === q.answer) {
              b.style.borderColor = '#10b981';
              b.style.background = '#d1fae5';
            }
          });
        }
        // fill in the blank
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
    container.innerHTML =
      '<h2 class="section-heading">✏️ Fill the Gap</h2>' +
      '<div style="text-align:center;padding:2rem 1rem">' +
        '<div style="font-size:3rem;margin-bottom:0.75rem">' + (pct === 100 ? '🏆' : pct >= 70 ? '⭐' : '📚') + '</div>' +
        '<h3 style="font-size:1.3rem;margin-bottom:0.5rem">' + (pct === 100 ? 'Perfect!' : pct >= 70 ? 'Great work!' : 'Keep practising!') + '</h3>' +
        '<p style="color:var(--muted);margin-bottom:1.5rem">You scored <strong>' + score + ' / ' + questions.length + '</strong> (' + pct + '%)</p>' +
        '<div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">' +
          '<button class="ti-submit" style="max-width:180px" id="fg-again">Play again ↺</button>' +
        '</div>' +
      '</div>';
    container.querySelector('#fg-again').addEventListener('click', function() { fgPlay(container); });
  }

  renderQ();
}
