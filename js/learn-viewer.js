// Slide-based learning viewer.
// Each unit is a series of slides the student clicks through one at a time.

function renderLearnHome(container, onOpenUnit, onBack) {
  var levels = [
    { id: 'a0', title: 'A0 — Complete Beginner', titleRu: 'Полный новичок', color: '#10b981', data: window.A0_CONTENT, desc: 'Greetings, numbers, family, self-intro' },
    { id: 'a1', title: 'A1 — Elementary', titleRu: 'Элементарный', color: '#6366f1', data: window.A1_CONTENT, desc: 'Grammar, vocabulary, reading & exercises' },
    { id: 'a1plus', title: 'A1+ — Pre-Intermediate', titleRu: 'Ниже среднего', color: '#f59e0b', data: window.A1PLUS_CONTENT || [], desc: 'Past tense, comparatives, reading & situations' },
  ];

  var html = '<div class="learn-home">';
  html += '<button class="ghost-btn back-inline learn-back-home">← Back</button>';
  html += '<h2 class="learn-main-title">Learning Path</h2>';
  html += '<p class="learn-main-sub">Путь обучения · A0 → A1+</p>';

  levels.forEach(function (level) {
    html += '<div class="level-section">';
    html += '<div class="level-header" style="border-left:4px solid ' + level.color + '">';
    html += '<h3>' + level.title + '</h3>';
    html += '<span class="level-sub">' + level.titleRu + ' · ' + level.data.length + ' units</span>';
    html += '</div>';
    html += '<div class="unit-grid">';
    level.data.forEach(function (unit, i) {
      var done = localStorage.getItem('elg:read:' + level.id + ':' + unit.id);
      html += '<button class="unit-card' + (done ? ' unit-done' : '') + '" data-level="' + level.id + '" data-unit="' + unit.id + '">';
      html += '<span class="unit-num">' + (i + 1) + '</span>';
      html += '<span class="unit-icon">' + unit.icon + '</span>';
      html += '<span class="unit-info">';
      html += '<strong>' + unit.title + '</strong>';
      html += '<span class="unit-ru">' + unit.titleRu + '</span>';
      html += '</span>';
      if (done) html += '<span class="unit-check">✓</span>';
      html += '</button>';
    });
    html += '</div></div>';
  });
  html += '</div>';
  container.innerHTML = html;

  container.querySelector('.learn-back-home').addEventListener('click', onBack);
  container.querySelectorAll('.unit-card').forEach(function (card) {
    card.addEventListener('click', function () {
      var levelId = card.dataset.level;
      var unitId = card.dataset.unit;
      var allData = { a0: window.A0_CONTENT, a1: window.A1_CONTENT, a1plus: window.A1PLUS_CONTENT };
      var unit = allData[levelId].find(function (u) { return u.id === unitId; });
      if (unit) onOpenUnit(levelId, unit);
    });
  });
}

function renderUnit(container, levelId, unit, onBack) {
  var slides = unit.slides;
  var current = 0;
  var total = slides.length;

  function render() {
    var s = slides[current];
    var html = '<div class="slide-wrap">';

    // top bar
    html += '<div class="slide-topbar">';
    html += '<button class="ghost-btn back-inline slide-exit">← Back</button>';
    html += '<span class="slide-counter">' + (current + 1) + ' / ' + total + '</span>';
    html += '</div>';
    html += '<div class="slide-progress"><div class="slide-progress-fill" style="width:' + ((current + 1) / total * 100) + '%"></div></div>';

    // slide content
    html += '<div class="slide" key="' + current + '">';
    html += renderSlide(s);
    html += '</div>';

    // navigation
    html += '<div class="slide-nav">';
    if (current > 0) {
      html += '<button class="ghost-btn slide-prev">← Previous</button>';
    } else {
      html += '<span></span>';
    }
    if (current < total - 1) {
      html += '<button class="next-btn slide-next">Next →</button>';
    } else {
      html += '<button class="next-btn slide-finish">Finish ✓</button>';
    }
    html += '</div>';
    html += '</div>';

    container.innerHTML = html;

    container.querySelector('.slide-exit').addEventListener('click', onBack);
    var prev = container.querySelector('.slide-prev');
    if (prev) prev.addEventListener('click', function () { current--; render(); });
    var next = container.querySelector('.slide-next');
    if (next) next.addEventListener('click', function () { current++; render(); scrollTop(); });
    var finish = container.querySelector('.slide-finish');
    if (finish) finish.addEventListener('click', function () {
      localStorage.setItem('elg:read:' + levelId + ':' + unit.id, '1');
      onBack();
    });

    container.querySelectorAll('.practice-game-link').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (window.openGameById) window.openGameById(btn.dataset.game);
      });
    });

    container.querySelectorAll('.slide-view-all').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = container.querySelector('.slide-expandable');
        if (target) target.classList.toggle('expanded');
        btn.textContent = target && target.classList.contains('expanded') ? 'Show less' : 'Show all';
      });
    });

    // fill-gap interactions
    container.querySelectorAll('.sl-fg-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.dataset.id;
        var wrap = document.getElementById(id);
        if (wrap.classList.contains('sl-answered')) return;
        var correct = btn.dataset.answer === btn.dataset.correct;
        var blank = wrap.querySelector('.sl-fg-blank');
        var fb = wrap.querySelector('.sl-fg-feedback');
        if (correct) {
          wrap.classList.add('sl-answered');
          btn.classList.add('sl-fg-correct');
          blank.textContent = btn.dataset.answer;
          blank.classList.add('sl-fg-filled');
          fb.innerHTML = '<span class="sl-fb-ok">✅ Correct!</span>';
        } else {
          btn.classList.add('sl-fg-wrong');
          fb.innerHTML = '<span class="sl-fb-err">❌ Try again / Попробуйте ещё</span>';
          setTimeout(function () { btn.classList.remove('sl-fg-wrong'); fb.innerHTML = ''; }, 1200);
        }
      });
    });

    // comprehension interactions
    container.querySelectorAll('.sl-cmp-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var qid = btn.dataset.qid;
        var qWrap = container.querySelector('[data-qid="' + qid + '"].sl-cmp-question');
        if (qWrap.classList.contains('sl-answered')) return;
        var correct = btn.dataset.answer === btn.dataset.correct;
        var fb = qWrap.querySelector('.sl-cmp-feedback');
        if (correct) {
          qWrap.classList.add('sl-answered');
          btn.classList.add('sl-cmp-correct');
          fb.innerHTML = '<span class="sl-fb-ok">✅ Correct!</span>';
        } else {
          btn.classList.add('sl-cmp-wrong');
          fb.innerHTML = '<span class="sl-fb-err">❌ Try again / Попробуйте ещё</span>';
          setTimeout(function () { btn.classList.remove('sl-cmp-wrong'); fb.innerHTML = ''; }, 1200);
        }
      });
    });

    // vocab-match interactions
    container.querySelectorAll('.sl-vocab-match').forEach(function (wrap) {
      var selected = null;
      wrap.querySelectorAll('.sl-vm-item').forEach(function (item) {
        item.addEventListener('click', function () {
          if (item.classList.contains('sl-vm-matched')) return;
          if (!selected) {
            selected = item;
            item.classList.add('sl-vm-selected');
          } else if (selected === item) {
            selected.classList.remove('sl-vm-selected');
            selected = null;
          } else {
            var idx1 = selected.dataset.idx;
            var idx2 = item.dataset.idx;
            if (idx1 === idx2) {
              selected.classList.remove('sl-vm-selected');
              selected.classList.add('sl-vm-matched');
              item.classList.add('sl-vm-matched');
              selected = null;
              var allMatched = wrap.querySelectorAll('.sl-vm-item:not(.sl-vm-matched)').length === 0;
              if (allMatched) {
                var fb = wrap.querySelector('.sl-vm-feedback');
                fb.innerHTML = '<span class="sl-fb-ok">✅ All matched! / Всё правильно!</span>';
              }
            } else {
              selected.classList.add('sl-vm-shake');
              item.classList.add('sl-vm-shake');
              var s1 = selected;
              setTimeout(function () {
                s1.classList.remove('sl-vm-selected', 'sl-vm-shake');
                item.classList.remove('sl-vm-shake');
              }, 600);
              selected = null;
            }
          }
        });
      });
    });

    // error-correction interactions
    container.querySelectorAll('.sl-ec-word').forEach(function (word) {
      word.addEventListener('click', function () {
        var eid = word.dataset.eid;
        var itemWrap = container.querySelector('[data-eid="' + eid + '"].sl-ec-item');
        if (itemWrap.classList.contains('sl-answered')) return;
        var fb = itemWrap.querySelector('.sl-ec-feedback');
        if (word.dataset.word === word.dataset.error) {
          itemWrap.classList.add('sl-answered');
          word.classList.add('sl-ec-found');
          word.innerHTML = '<s>' + esc(word.dataset.error) + '</s> <strong>' + esc(word.dataset.correction) + '</strong>';
          fb.innerHTML = '<span class="sl-fb-ok">✅ ' + esc(word.dataset.correction) + '</span>';
        } else {
          word.classList.add('sl-ec-miss');
          fb.innerHTML = '<span class="sl-fb-err">❌ Not this word / Не это слово</span>';
          setTimeout(function () { word.classList.remove('sl-ec-miss'); fb.innerHTML = ''; }, 1000);
        }
      });
    });
  }

  function scrollTop() {
    var el = container.closest('main') || container;
    el.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render();
}

function renderSlide(s) {
  var h = '';
  switch (s.type) {

    case 'title':
      h += '<div class="sl-title">';
      if (s.html) {
        // legacy html format — extract and re-render cleanly
        var titleMatch = s.html.match(/<h1>(.*?)<\/h1>/);
        var subMatch = s.html.match(/<p class="subtitle">(.*?)<\/p>/);
        var bodyParts = s.html.replace(/<h1>.*?<\/h1>/, '').replace(/<p class="subtitle">.*?<\/p>/, '').match(/<p>(.*?)<\/p>/g) || [];
        h += '<span class="sl-title-icon">' + (s.icon || '') + '</span>';
        if (titleMatch) h += '<h2>' + titleMatch[1] + '</h2>';
        if (subMatch) h += '<p class="sl-title-ru">' + subMatch[1] + '</p>';
        bodyParts.forEach(function(p, i) {
          var txt = p.replace(/<\/?p>/g, '');
          h += i === 0 ? '<p class="sl-subtitle">' + txt + '</p>' : '<p class="sl-subtitle-ru">' + txt + '</p>';
        });
      } else {
        h += '<span class="sl-title-icon">' + (s.icon || '') + '</span>';
        h += '<h2>' + s.title + '</h2>';
        h += '<p class="sl-title-ru">' + s.titleRu + '</p>';
        if (s.subtitle) h += '<p class="sl-subtitle">' + s.subtitle + '</p>';
        if (s.subtitleRu) h += '<p class="sl-subtitle-ru">' + s.subtitleRu + '</p>';
      }
      h += '</div>';
      break;

    case 'concept':
      h += '<div class="sl-concept">';
      if (s.title) h += '<h3>' + s.title + '</h3>';
      if (s.titleRu) h += '<p class="sl-ru">' + s.titleRu + '</p>';
      h += '<div class="sl-concept-body">';
      h += '<p>' + s.text + '</p>';
      if (s.textRu) h += '<p class="sl-ru">' + s.textRu + '</p>';
      h += '</div>';
      if (s.visual) h += '<div class="sl-visual">' + s.visual + '</div>';
      if (s.examples) {
        h += '<div class="sl-examples">';
        s.examples.forEach(function (ex) {
          h += '<div class="sl-example-card">';
          if (ex.icon) h += '<span class="sl-ex-icon">' + ex.icon + '</span>';
          h += '<div>';
          h += '<p class="sl-ex-en">' + escAllow(ex.english || '') + '</p>';
          var exRu = ex.russian || ex.textRu;
          if (exRu) h += '<p class="sl-ex-ru">' + escAllow(exRu) + '</p>';
          h += '</div></div>';
        });
        h += '</div>';
      }
      if (s.note) h += '<p class="sl-explanation" style="font-style:italic;">' + esc(s.note) + '</p>';
      if (s.noteRu) h += '<p class="sl-ru">' + esc(s.noteRu) + '</p>';
      break;

    case 'rule':
      h += '<div class="sl-rule">';
      if (s.title) h += '<h3>' + s.title + '</h3>';
      if (s.titleRu) h += '<p class="sl-ru">' + s.titleRu + '</p>';
      if (s.formula) h += '<div class="sl-formula">' + s.formula + '</div>';
      if (s.formulaNeg) h += '<div class="sl-formula sl-formula-neg">' + s.formulaNeg + '</div>';
      if (s.formulaQ) h += '<div class="sl-formula sl-formula-q">' + s.formulaQ + '</div>';
      if (s.explanation) h += '<p class="sl-explanation">' + s.explanation + '</p>';
      if (s.explanationRu) h += '<p class="sl-ru">' + s.explanationRu + '</p>';
      if (s.rows) {
        h += '<div class="sl-rule-table">';
        s.rows.forEach(function (row) {
          h += '<div class="sl-rule-row">';
          h += '<span class="sl-rule-subj">' + row.subject + '</span>';
          h += '<span class="sl-rule-verb">' + escAllow(row.verb) + '</span>';
          if (row.example) h += '<span class="sl-rule-ex">' + escAllow(row.example) + '</span>';
          h += '</div>';
        });
        h += '</div>';
      }
      // legacy A1+ format: rules array [{rule, ruleRu, example}]
      if (s.rules) {
        h += '<div class="sl-rule-table">';
        s.rules.forEach(function (r) {
          h += '<div class="sl-rule-row" style="flex-direction:column;gap:0.15rem;">';
          h += '<span style="font-weight:700;font-size:0.9rem;">' + escAllow(r.rule) + '</span>';
          if (r.ruleRu) h += '<span class="sl-ru" style="margin:0;">' + escAllow(r.ruleRu) + '</span>';
          if (r.example) h += '<span class="sl-rule-ex" style="font-style:italic;">' + escAllow(r.example) + '</span>';
          h += '</div>';
        });
        h += '</div>';
      }
      if (s.warning) h += '<div class="sl-warning">⚠️ ' + s.warning + '</div>';
      if (s.warningRu) h += '<p class="sl-ru sl-warning-ru">' + s.warningRu + '</p>';
      h += '</div>';
      break;

    case 'examples':
      h += '<div class="sl-examples-slide">';
      if (s.title) h += '<h3>' + s.title + '</h3>';
      if (s.titleRu) h += '<p class="sl-ru">' + s.titleRu + '</p>';
      if (s.intro) h += '<p class="sl-intro">' + s.intro + '</p>';
      h += '<div class="sl-sent-list">';
      s.items.forEach(function (item) {
        h += '<div class="sl-sent">';
        if (item.icon) h += '<span class="sl-sent-icon">' + item.icon + '</span>';
        h += '<div>';
        h += '<p class="sl-sent-en">' + escAllow(item.english) + '</p>';
        h += '<p class="sl-sent-ru">' + escAllow(item.russian) + '</p>';
        h += '</div></div>';
      });
      h += '</div></div>';
      break;

    case 'vocab':
      h += '<div class="sl-vocab">';
      if (s.title) h += '<h3>' + s.title + '</h3>';
      if (s.titleRu) h += '<p class="sl-ru">' + s.titleRu + '</p>';
      if (s.intro) h += '<p class="sl-intro">' + s.intro + '</p>';
      if (s.introRu) h += '<p class="sl-ru">' + s.introRu + '</p>';
      var showAll = s.items && s.items.length > 8;
      h += '<div class="sl-vocab-grid' + (showAll ? ' sl-expandable' : '') + '">';
      s.items.forEach(function (item) {
        h += '<div class="sl-vocab-card">';
        if (item.icon) h += '<span class="sl-vocab-icon">' + item.icon + '</span>';
        h += '<strong>' + escAllow(item.english) + '</strong>';
        if (item.pronunciation) h += '<span class="sl-pron">' + item.pronunciation + '</span>';
        h += '<span class="sl-vocab-ru">' + escAllow(item.russian) + '</span>';
        if (item.note) h += '<span class="sl-vocab-note">' + item.note + '</span>';
        h += '</div>';
      });
      h += '</div>';
      if (showAll) h += '<button class="ghost-btn slide-view-all">Show all</button>';
      h += '</div>';
      break;

    case 'table':
      h += '<div class="sl-table-slide">';
      if (s.title) h += '<h3>' + s.title + '</h3>';
      if (s.titleRu) h += '<p class="sl-ru">' + s.titleRu + '</p>';
      h += '<div class="sl-table">';
      s.rows.forEach(function (row) {
        h += '<div class="sl-table-row">';
        h += '<div class="sl-table-en">' + escAllow(row.english) + '</div>';
        if (row.pronunciation) h += '<div class="sl-table-pron">' + row.pronunciation + '</div>';
        h += '<div class="sl-table-ru">' + escAllow(row.russian) + '</div>';
        if (row.note) h += '<div class="sl-table-note">' + row.note + '</div>';
        h += '</div>';
      });
      h += '</div></div>';
      break;

    case 'dialogue':
      h += '<div class="sl-dialogue">';
      if (s.title) h += '<h3>' + s.title + '</h3>';
      if (s.titleRu) h += '<p class="sl-ru">' + s.titleRu + '</p>';
      if (s.context) h += '<p class="sl-context">' + s.context + '</p>';
      h += '<div class="sl-chat">';
      s.lines.forEach(function (line) {
        var cls = line.speaker === 'A' || line.speaker === 'You' ? 'sl-chat-right' : 'sl-chat-left';
        h += '<div class="sl-chat-line ' + cls + '">';
        h += '<span class="sl-chat-speaker">' + line.speaker + '</span>';
        h += '<div class="sl-chat-bubble">';
        h += '<p>' + escAllow(line.text) + '</p>';
        if (line.pronunciation) h += '<p class="sl-pron">' + line.pronunciation + '</p>';
        var lineRu = line.russian || line.textRu;
        if (lineRu) h += '<p class="sl-ru">' + lineRu + '</p>';
        h += '</div></div>';
      });
      h += '</div></div>';
      break;

    case 'tip':
      h += '<div class="sl-tip-slide">';
      h += '<span class="sl-tip-big-icon">' + (s.icon || '💡') + '</span>';
      h += '<h3>' + s.title + '</h3>';
      if (s.titleRu) h += '<p class="sl-ru">' + s.titleRu + '</p>';
      h += '<div class="sl-tip-body">';
      h += '<p>' + s.text + '</p>';
      if (s.textRu) h += '<p class="sl-ru">' + s.textRu + '</p>';
      h += '</div>';
      if (s.items) {
        h += '<div class="sl-tip-items">';
        s.items.forEach(function (item) {
          h += '<div class="sl-tip-item">';
          h += '<span class="sl-tip-wrong">❌ ' + escAllow(item.wrong) + '</span>';
          h += '<span class="sl-tip-right">✅ ' + escAllow(item.right) + '</span>';
          h += '</div>';
        });
        h += '</div>';
      }
      h += '</div>';
      break;

    case 'structure':
      h += '<div class="sl-structure">';
      if (s.title) h += '<h3>' + s.title + '</h3>';
      if (s.titleRu) h += '<p class="sl-ru">' + s.titleRu + '</p>';
      h += '<div class="sl-struct-forms">';
      var formItems = s.forms || s.structures || [];
      formItems.forEach(function (f, fi) {
        var cls = f.type === '+' ? 'sl-form-pos' : f.type === '-' ? 'sl-form-neg' : f.type === '?' ? 'sl-form-q' : ['sl-form-pos','sl-form-neg','sl-form-q','sl-form-pos'][fi % 4];
        h += '<div class="sl-form-card ' + cls + '">';
        if (f.type) h += '<span class="sl-form-badge">' + f.type + '</span>';
        h += '<div class="sl-form-label">' + (f.label || '') + '</div>';
        if (f.labelRu) h += '<div class="sl-ru">' + f.labelRu + '</div>';
        if (f.formula) h += '<div class="sl-form-formula">' + f.formula + '</div>';
        h += '<div class="sl-form-examples">';
        var exArr = f.examples || (f.example ? [f.example] : []);
        exArr.forEach(function (ex) { h += '<p class="sl-form-ex">' + escAllow(ex) + '</p>'; });
        h += '</div></div>';
      });
      h += '</div></div>';
      break;

    case 'practice':
      h += '<div class="sl-practice">';
      h += '<span class="sl-practice-icon">🎮</span>';
      h += '<h3>Time to practise!</h3>';
      h += '<p class="sl-ru">Время попрактиковаться!</p>';
      if (s.text) h += '<p>' + s.text + '</p>';
      if (s.textRu) h += '<p class="sl-ru">' + s.textRu + '</p>';
      if (s.gameId) {
        h += '<button class="next-btn practice-game-link" data-game="' + s.gameId + '">';
        h += '🎮 ' + (s.buttonText || 'Play now');
        h += '</button>';
      }
      h += '</div>';
      break;

    case 'number-grid':
      h += '<div class="sl-numbers">';
      if (s.title) h += '<h3>' + s.title + '</h3>';
      if (s.titleRu) h += '<p class="sl-ru">' + s.titleRu + '</p>';
      h += '<div class="sl-num-grid">';
      s.items.forEach(function (item) {
        h += '<div class="sl-num-cell">';
        h += '<span class="sl-num-digit">' + item.number + '</span>';
        h += '<span class="sl-num-word">' + item.english + '</span>';
        h += '<span class="sl-pron">' + item.pronunciation + '</span>';
        h += '</div>';
      });
      h += '</div></div>';
      break;

    case 'comparison':
      h += '<div class="sl-comparison">';
      if (s.title) h += '<h3>' + s.title + '</h3>';
      if (s.titleRu) h += '<p class="sl-ru">' + s.titleRu + '</p>';
      h += '<div class="sl-comp-cols">';
      h += '<div class="sl-comp-col sl-comp-left">';
      h += '<h4>' + (s.left.title || s.left.label || '') + '</h4>';
      if (s.left.titleRu || s.left.labelRu) h += '<p class="sl-ru">' + (s.left.titleRu || s.left.labelRu) + '</p>';
      (s.left.examples || s.left.items || []).forEach(function (ex) { h += '<p class="sl-comp-ex">' + escAllow(ex) + '</p>'; });
      h += '</div>';
      h += '<div class="sl-comp-col sl-comp-right">';
      h += '<h4>' + (s.right.title || s.right.label || '') + '</h4>';
      if (s.right.titleRu || s.right.labelRu) h += '<p class="sl-ru">' + (s.right.titleRu || s.right.labelRu) + '</p>';
      (s.right.examples || s.right.items || []).forEach(function (ex) { h += '<p class="sl-comp-ex">' + escAllow(ex) + '</p>'; });
      h += '</div></div></div>';
      break;

    case 'frequency':
      h += '<div class="sl-frequency">';
      if (s.title) h += '<h3>' + s.title + '</h3>';
      if (s.titleRu) h += '<p class="sl-ru">' + s.titleRu + '</p>';
      h += '<div class="sl-freq-bars">';
      s.items.forEach(function (item) {
        h += '<div class="sl-freq-row">';
        h += '<div class="sl-freq-bar-bg"><div class="sl-freq-bar-fill" style="width:' + item.percent + '%"></div></div>';
        h += '<span class="sl-freq-en">' + item.english + '</span>';
        h += '<span class="sl-pron">' + item.pronunciation + '</span>';
        h += '<span class="sl-freq-ru">' + item.russian + '</span>';
        h += '</div>';
      });
      h += '</div></div>';
      break;

    case 'fill-gap':
      var fgId = 'fg-' + Math.random().toString(36).substr(2, 6);
      h += '<div class="sl-fill-gap" id="' + fgId + '">';
      if (s.title) h += '<h3>' + s.title + '</h3>';
      if (s.titleRu) h += '<p class="sl-ru">' + s.titleRu + '</p>';
      var parts = s.sentence.split('___');
      h += '<p class="sl-fg-sentence">' + escAllow(parts[0]) + '<span class="sl-fg-blank" data-id="' + fgId + '">___</span>' + escAllow(parts[1] || '') + '</p>';
      h += '<div class="sl-fg-options">';
      s.options.forEach(function (opt) {
        h += '<button class="sl-fg-btn" data-answer="' + esc(opt) + '" data-correct="' + esc(s.answer) + '" data-id="' + fgId + '">' + esc(opt) + '</button>';
      });
      h += '</div>';
      h += '<div class="sl-fg-feedback" data-id="' + fgId + '"></div>';
      h += '</div>';
      break;

    case 'reading':
      h += '<div class="sl-reading">';
      if (s.title) h += '<h3>' + s.title + '</h3>';
      if (s.titleRu) h += '<p class="sl-ru">' + s.titleRu + '</p>';
      h += '<div class="sl-reading-text">' + s.text + '</div>';
      if (s.vocabWords && s.vocabWords.length) {
        h += '<div class="sl-reading-vocab">';
        h += '<h4>Key Vocabulary / Ключевые слова</h4>';
        s.vocabWords.forEach(function (w) {
          h += '<div class="sl-rv-word">';
          h += '<strong>' + esc(w.word) + '</strong>';
          h += '<span> — ' + esc(w.meaning) + '</span>';
          if (w.meaningRu) h += '<span class="sl-ru"> · ' + esc(w.meaningRu) + '</span>';
          h += '</div>';
        });
        h += '</div>';
      }
      h += '</div>';
      break;

    case 'comprehension':
      var cmpId = 'cmp-' + Math.random().toString(36).substr(2, 6);
      h += '<div class="sl-comprehension" id="' + cmpId + '">';
      if (s.title) h += '<h3>' + s.title + '</h3>';
      if (s.titleRu) h += '<p class="sl-ru">' + s.titleRu + '</p>';
      s.questions.forEach(function (q, qi) {
        var qid = cmpId + '-q' + qi;
        h += '<div class="sl-cmp-question" data-qid="' + qid + '">';
        h += '<p class="sl-cmp-q-text"><strong>' + (qi + 1) + '.</strong> ' + esc(q.question) + '</p>';
        if (q.questionRu) h += '<p class="sl-ru sl-cmp-q-ru">' + esc(q.questionRu) + '</p>';
        h += '<div class="sl-cmp-options">';
        q.options.forEach(function (opt) {
          h += '<button class="sl-cmp-btn" data-answer="' + esc(opt) + '" data-correct="' + esc(q.answer) + '" data-qid="' + qid + '">' + esc(opt) + '</button>';
        });
        h += '</div>';
        h += '<div class="sl-cmp-feedback" data-qid="' + qid + '"></div>';
        h += '</div>';
      });
      h += '</div>';
      break;

    case 'vocab-match':
      var vmId = 'vm-' + Math.random().toString(36).substr(2, 6);
      h += '<div class="sl-vocab-match" id="' + vmId + '">';
      if (s.title) h += '<h3>' + s.title + '</h3>';
      if (s.titleRu) h += '<p class="sl-ru">' + s.titleRu + '</p>';
      var shuffled = s.pairs.slice().sort(function () { return Math.random() - 0.5; });
      h += '<div class="sl-vm-cols">';
      h += '<div class="sl-vm-col">';
      s.pairs.forEach(function (p, i) {
        h += '<button class="sl-vm-item sl-vm-left" data-idx="' + i + '" data-id="' + vmId + '">' + esc(p.english) + '</button>';
      });
      h += '</div>';
      h += '<div class="sl-vm-col">';
      shuffled.forEach(function (p) {
        var origIdx = s.pairs.indexOf(p);
        h += '<button class="sl-vm-item sl-vm-right" data-idx="' + origIdx + '" data-id="' + vmId + '">' + esc(p.russian) + '</button>';
      });
      h += '</div>';
      h += '</div>';
      h += '<div class="sl-vm-feedback" data-id="' + vmId + '"></div>';
      h += '</div>';
      break;

    case 'error-correction':
      var ecId = 'ec-' + Math.random().toString(36).substr(2, 6);
      h += '<div class="sl-error-correction" id="' + ecId + '">';
      if (s.title) h += '<h3>' + s.title + '</h3>';
      if (s.titleRu) h += '<p class="sl-ru">' + s.titleRu + '</p>';
      if (s.instruction) h += '<p class="sl-ec-instr">' + s.instruction + '</p>';
      if (s.instructionRu) h += '<p class="sl-ru">' + s.instructionRu + '</p>';
      h += '<div class="sl-ec-sentences">';
      s.items.forEach(function (item, i) {
        var eid = ecId + '-e' + i;
        h += '<div class="sl-ec-item" data-eid="' + eid + '">';
        h += '<p class="sl-ec-sentence">';
        var words = item.sentence.split(' ');
        words.forEach(function (w, wi) {
          h += '<span class="sl-ec-word" data-word="' + esc(w) + '" data-error="' + esc(item.errorWord) + '" data-correction="' + esc(item.correction) + '" data-eid="' + eid + '">' + esc(w) + '</span> ';
        });
        h += '</p>';
        h += '<div class="sl-ec-feedback" data-eid="' + eid + '"></div>';
        h += '</div>';
      });
      h += '</div></div>';
      break;

    case 'grammar-table':
      h += '<div class="sl-grammar-table">';
      if (s.title) h += '<h3>' + s.title + '</h3>';
      if (s.titleRu) h += '<p class="sl-ru">' + s.titleRu + '</p>';
      h += '<div class="sl-gt-wrap"><table class="sl-gt">';
      if (s.headers) {
        h += '<thead><tr>';
        s.headers.forEach(function (hd) { h += '<th>' + hd + '</th>'; });
        h += '</tr></thead>';
      }
      h += '<tbody>';
      s.rows.forEach(function (row) {
        h += '<tr>';
        row.forEach(function (cell) {
          h += '<td>' + cell + '</td>';
        });
        h += '</tr>';
      });
      h += '</tbody></table></div>';
      if (s.note) h += '<p class="sl-gt-note">' + s.note + '</p>';
      if (s.noteRu) h += '<p class="sl-ru">' + s.noteRu + '</p>';
      h += '</div>';
      break;
  }
  return h;
}

function esc(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escAllow(str) {
  if (!str) return '';
  var safe = esc(str);
  return safe
    .replace(/&lt;b&gt;/g, '<b>')
    .replace(/&lt;\/b&gt;/g, '</b>')
    .replace(/&lt;strong&gt;/g, '<strong>')
    .replace(/&lt;\/strong&gt;/g, '</strong>')
    .replace(/&lt;i&gt;/g, '<i>')
    .replace(/&lt;\/i&gt;/g, '</i>')
    .replace(/&lt;em&gt;/g, '<em>')
    .replace(/&lt;\/em&gt;/g, '</em>')
    .replace(/&lt;s&gt;/g, '<s>')
    .replace(/&lt;\/s&gt;/g, '</s>');
}
