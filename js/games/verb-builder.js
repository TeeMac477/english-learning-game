window.GAMES.push({
  id: 'verb-builder',
  icon: '🏗️',
  title: 'Verb Builder',
  description: 'See an action, pick the subject & correct verb form — build full sentences!',
  section: 'arcade',
  render: function(container) { vbHome(container); },
});

function vbHome(container) {
  var tenses = Object.values(window.VERB_BUILDER);
  container.innerHTML =
    '<h2 class="section-heading">🏗️ Verb Builder</h2>' +
    '<p class="section-sub">Pick a tense, then build sentences step by step!</p>' +
    '<div class="game-grid"></div>';
  var grid = container.querySelector('.game-grid');
  tenses.forEach(function(tense) {
    var card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML =
      '<div class="icon">' + tense.icon + '</div>' +
      '<h3>' + tense.title + '</h3>' +
      '<p>' + tense.description + '</p>' +
      '<span class="tag tag-new">' + tense.verbs.length + ' verbs</span>';
    card.addEventListener('click', function() { vbPlay(container, tense); });
    grid.appendChild(card);
  });
}

function vbPlay(container, tense) {
  var verbs = tense.verbs.slice().sort(function() { return Math.random() - 0.5; }).slice(0, 10);
  var idx = 0;
  var score = 0;

  function nextRound() {
    if (idx >= verbs.length) { showResults(); return; }
    var verb = verbs[idx];
    var subjects = tense.subjects.slice();
    var subj = subjects[Math.floor(Math.random() * subjects.length)];
    var isNegative = tense.id === 'present-simple' && Math.random() < 0.3;

    var correctForm;
    if (tense.id === 'present-simple') {
      correctForm = isNegative ? verb.neg[subj] : verb.forms[subj];
    } else if (tense.id === 'past-simple') {
      correctForm = verb.past;
    } else if (tense.id === 'present-continuous') {
      correctForm = verb.forms[subj];
    }

    var step = 0; // 0=pick subject, 1=pick verb form
    var chosenSubj = null;

    function buildOptions() {
      var opts = [];
      if (tense.id === 'present-simple') {
        opts.push(verb.forms['I']);
        opts.push(verb.forms['He']);
        if (isNegative) {
          opts.push(verb.neg['I']);
          opts.push(verb.neg['He']);
        }
      } else if (tense.id === 'past-simple') {
        opts.push(verb.base);
        opts.push(verb.past);
        opts.push(verb.base + 's');
        opts.push(verb.base + 'ed');
      } else if (tense.id === 'present-continuous') {
        var be = subj === 'I' ? 'am' : (['He','She','It'].indexOf(subj) >= 0 ? 'is' : 'are');
        opts.push(be + ' ' + verb.ing);
        opts.push((be === 'am' ? 'is' : 'am') + ' ' + verb.ing);
        opts.push(be + ' ' + verb.base);
        opts.push(verb.ing);
      }
      // deduplicate
      var unique = [];
      opts.forEach(function(o) { if (unique.indexOf(o) < 0) unique.push(o); });
      // ensure correct is in there
      if (unique.indexOf(correctForm) < 0) unique.push(correctForm);
      // shuffle
      unique.sort(function() { return Math.random() - 0.5; });
      return unique;
    }

    function render() {
      var sentence = '';
      if (step === 0) {
        sentence = '<span class="vb-blank">???</span> ' + (isNegative ? '(negative) ' : '') + '<span class="vb-base">' + verb.base + '</span> ...';
      } else if (step === 1) {
        sentence = '<span class="vb-filled">' + chosenSubj + '</span> <span class="vb-blank">???</span>';
      }

      container.innerHTML =
        '<button class="ghost-btn back-inline">← Tenses</button>' +
        '<h2 class="section-heading">' + tense.icon + ' ' + tense.title + '</h2>' +
        '<div style="text-align:center">' +
          '<div style="font-size:0.8rem;color:var(--muted);margin-bottom:0.5rem">Round ' + (idx + 1) + ' / ' + verbs.length + ' · Score: ' + score + '</div>' +
          '<div style="font-size:4rem;margin:0.5rem 0">' + verb.visual + '</div>' +
          '<div style="font-size:0.85rem;color:var(--muted);margin-bottom:0.25rem">' + verb.russian + '</div>' +
          '<div class="vb-sentence" id="vb-sentence">' + sentence + '</div>' +
          '<div style="font-size:0.8rem;font-weight:600;color:var(--primary);margin-bottom:0.75rem">' +
            (step === 0 ? 'Step 1: Pick the subject' : 'Step 2: Pick the correct verb form' + (isNegative ? ' (negative!)' : '')) +
          '</div>' +
          '<div id="vb-opts" class="vb-options"></div>' +
          '<div id="vb-fb" style="min-height:2rem;margin-top:0.75rem;font-weight:600"></div>' +
        '</div>';

      container.querySelector('.back-inline').addEventListener('click', function() { vbHome(container); });
      var optsDiv = container.querySelector('#vb-opts');
      var fbDiv = container.querySelector('#vb-fb');

      if (step === 0) {
        // pick subject - show all subjects, correct is the random one we chose
        var subjectOpts = subjects.slice().sort(function() { return Math.random() - 0.5; });
        subjectOpts.forEach(function(s) {
          var btn = document.createElement('button');
          btn.className = 'vb-opt-btn';
          btn.textContent = s;
          btn.addEventListener('click', function() {
            chosenSubj = s;
            if (s === subj) {
              btn.classList.add('vb-correct');
              fbDiv.innerHTML = '<span style="color:#059669">✓ Correct!</span>';
            } else {
              // recalculate correct form for chosen subject
              if (tense.id === 'present-simple') {
                correctForm = isNegative ? verb.neg[s] : verb.forms[s];
              } else if (tense.id === 'present-continuous') {
                correctForm = verb.forms[s];
              }
              subj = s;
              btn.classList.add('vb-correct');
              fbDiv.innerHTML = '<span style="color:#059669">OK!</span>';
            }
            optsDiv.querySelectorAll('button').forEach(function(b) { b.disabled = true; });
            setTimeout(function() { step = 1; render(); }, 600);
          });
          optsDiv.appendChild(btn);
        });
      } else {
        // pick verb form
        var formOpts = buildOptions();
        formOpts.forEach(function(f) {
          var btn = document.createElement('button');
          btn.className = 'vb-opt-btn';
          btn.textContent = f;
          btn.addEventListener('click', function() {
            optsDiv.querySelectorAll('button').forEach(function(b) { b.disabled = true; });
            var isCorrect = f === correctForm;
            if (isCorrect) {
              score++;
              btn.classList.add('vb-correct');
              fbDiv.innerHTML = '<span style="color:#059669">✓ ' + chosenSubj + ' ' + correctForm + '</span>';
            } else {
              btn.classList.add('vb-wrong');
              optsDiv.querySelectorAll('button').forEach(function(b) {
                if (b.textContent === correctForm) b.classList.add('vb-correct');
              });
              fbDiv.innerHTML = '<span style="color:#dc2626">✗ Correct: ' + chosenSubj + ' ' + correctForm + '</span>';
            }
            container.querySelector('#vb-sentence').innerHTML =
              '<span class="vb-filled">' + chosenSubj + '</span> ' +
              '<span class="' + (isCorrect ? 'vb-filled' : 'vb-wrong-text') + '">' + correctForm + '</span>';

            var nextBtn = document.createElement('button');
            nextBtn.className = 'ti-submit';
            nextBtn.style.marginTop = '0.75rem';
            nextBtn.textContent = idx + 1 < verbs.length ? 'Next →' : 'See results →';
            nextBtn.addEventListener('click', function() { idx++; nextRound(); });
            fbDiv.appendChild(document.createElement('br'));
            fbDiv.appendChild(nextBtn);
          });
          optsDiv.appendChild(btn);
        });
      }
    }

    render();
  }

  function showResults() {
    var pct = Math.round((score / verbs.length) * 100);
    container.innerHTML =
      '<button class="ghost-btn back-inline">← Tenses</button>' +
      '<h2 class="section-heading">🏗️ Verb Builder</h2>' +
      '<div style="text-align:center;padding:2rem 1rem">' +
        '<div style="font-size:3rem;margin-bottom:0.75rem">' + (pct >= 80 ? '🏆' : pct >= 50 ? '⭐' : '📚') + '</div>' +
        '<h3 style="font-size:1.3rem;margin-bottom:0.5rem">' + (pct >= 80 ? 'Excellent!' : pct >= 50 ? 'Good job!' : 'Keep practising!') + '</h3>' +
        '<p style="color:var(--muted);margin-bottom:1.5rem">You got <strong>' + score + ' / ' + verbs.length + '</strong> verb forms right (' + pct + '%)</p>' +
        '<div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">' +
          '<button class="ti-submit" style="max-width:180px" id="vb-again">Play again ↺</button>' +
          '<button class="ghost-btn" id="vb-back">← Tenses</button>' +
        '</div>' +
      '</div>';
    container.querySelector('.back-inline').addEventListener('click', function() { vbHome(container); });
    container.querySelector('#vb-again').addEventListener('click', function() { vbPlay(container, tense); });
    container.querySelector('#vb-back').addEventListener('click', function() { vbHome(container); });
  }

  nextRound();
}
