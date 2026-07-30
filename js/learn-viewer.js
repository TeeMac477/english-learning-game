// Slide-based learning viewer.
// Each unit is a series of slides the student clicks through one at a time.

function renderLearnHome(container, onOpenUnit, onBack) {
  var levels = [
    { id: 'a0', title: 'A0 — Complete Beginner', titleRu: 'Полный новичок', color: '#10b981', data: window.A0_CONTENT, desc: 'Greetings, numbers, family, self-intro' },
    { id: 'a1', title: 'A1 — Elementary', titleRu: 'Элементарный', color: '#6366f1', data: window.A1_CONTENT, desc: 'To be, present simple, jobs, questions' },
    { id: 'a1plus', title: 'A1+ — Pre-Intermediate', titleRu: 'Ниже среднего', color: '#f59e0b', data: window.A1PLUS_CONTENT, desc: 'Airport, restaurant, shopping' },
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
      h += '<span class="sl-title-icon">' + (s.icon || '') + '</span>';
      h += '<h2>' + s.title + '</h2>';
      h += '<p class="sl-title-ru">' + s.titleRu + '</p>';
      if (s.subtitle) h += '<p class="sl-subtitle">' + s.subtitle + '</p>';
      if (s.subtitleRu) h += '<p class="sl-subtitle-ru">' + s.subtitleRu + '</p>';
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
          h += '<p class="sl-ex-en">' + esc(ex.english) + '</p>';
          if (ex.russian) h += '<p class="sl-ex-ru">' + esc(ex.russian) + '</p>';
          h += '</div></div>';
        });
        h += '</div>';
      }
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
          h += '<span class="sl-rule-verb">' + esc(row.verb) + '</span>';
          if (row.example) h += '<span class="sl-rule-ex">' + esc(row.example) + '</span>';
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
        h += '<p class="sl-sent-en">' + esc(item.english) + '</p>';
        h += '<p class="sl-sent-ru">' + esc(item.russian) + '</p>';
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
        h += '<strong>' + esc(item.english) + '</strong>';
        if (item.pronunciation) h += '<span class="sl-pron">' + item.pronunciation + '</span>';
        h += '<span class="sl-vocab-ru">' + esc(item.russian) + '</span>';
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
        h += '<div class="sl-table-en">' + esc(row.english) + '</div>';
        if (row.pronunciation) h += '<div class="sl-table-pron">' + row.pronunciation + '</div>';
        h += '<div class="sl-table-ru">' + esc(row.russian) + '</div>';
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
        h += '<p>' + esc(line.text) + '</p>';
        if (line.pronunciation) h += '<p class="sl-pron">' + line.pronunciation + '</p>';
        if (line.russian) h += '<p class="sl-ru">' + line.russian + '</p>';
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
          h += '<span class="sl-tip-wrong">❌ ' + esc(item.wrong) + '</span>';
          h += '<span class="sl-tip-right">✅ ' + esc(item.right) + '</span>';
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
      s.forms.forEach(function (f) {
        var cls = f.type === '+' ? 'sl-form-pos' : f.type === '-' ? 'sl-form-neg' : 'sl-form-q';
        h += '<div class="sl-form-card ' + cls + '">';
        h += '<span class="sl-form-badge">' + f.type + '</span>';
        h += '<div class="sl-form-label">' + f.label + '</div>';
        if (f.labelRu) h += '<div class="sl-ru">' + f.labelRu + '</div>';
        h += '<div class="sl-form-formula">' + f.formula + '</div>';
        h += '<div class="sl-form-examples">';
        f.examples.forEach(function (ex) {
          h += '<p class="sl-form-ex">' + esc(ex) + '</p>';
        });
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
      h += '<h4>' + s.left.title + '</h4>';
      if (s.left.titleRu) h += '<p class="sl-ru">' + s.left.titleRu + '</p>';
      s.left.examples.forEach(function (ex) { h += '<p class="sl-comp-ex">' + esc(ex) + '</p>'; });
      h += '</div>';
      h += '<div class="sl-comp-col sl-comp-right">';
      h += '<h4>' + s.right.title + '</h4>';
      if (s.right.titleRu) h += '<p class="sl-ru">' + s.right.titleRu + '</p>';
      s.right.examples.forEach(function (ex) { h += '<p class="sl-comp-ex">' + esc(ex) + '</p>'; });
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
  }
  return h;
}

function esc(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
