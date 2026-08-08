// Grammar Stories: short stories per grammar/tense topic, heavily
// featuring that structure, shown with English + a glossary of just the
// key verbs/phrasal verbs (not a full sentence-by-sentence translation).

var STORY_TENSE_IDS = ['present-simple', 'past-simple', 'present-continuous', 'past-continuous'];

function storiesTopicMeta(topicId) {
  var g = window.GRAMMAR_TOPICS && window.GRAMMAR_TOPICS[topicId];
  if (g) return { icon: g.icon, title: g.title, description: g.description };
  var v = window.VERB_BUILDER && window.VERB_BUILDER[topicId];
  if (v) return { icon: v.icon, title: v.title, description: v.description };
  return { icon: '📖', title: topicId, description: '' };
}

function renderStoriesHome(container, onBack) {
  var allIds = Object.keys(window.GRAMMAR_STORIES || {});
  var tenseIds = STORY_TENSE_IDS.filter(function (id) { return allIds.indexOf(id) >= 0; });
  var grammarIds = allIds.filter(function (id) { return tenseIds.indexOf(id) < 0; });

  var html =
    '<div class="learn-home">' +
    '<button class="ghost-btn back-inline stories-back-home">← Back</button>' +
    '<h2 class="learn-main-title">📖 Grammar Stories</h2>' +
    '<p class="learn-main-sub">Читайте истории — каждая посвящена одной теме грамматики</p>';

  function section(title, sub, ids) {
    var s = '<div class="level-section">' +
      '<div class="level-header" style="border-left:4px solid var(--primary)">' +
      '<h3>' + title + '</h3><span class="level-sub">' + sub + '</span></div>' +
      '<div class="unit-grid">';
    ids.forEach(function (id) {
      var meta = storiesTopicMeta(id);
      var count = window.GRAMMAR_STORIES[id].length;
      s += '<button class="unit-card story-topic-card" data-topic="' + id + '">' +
        '<span class="unit-icon">' + meta.icon + '</span>' +
        '<span class="unit-info">' +
        '<strong>' + meta.title + '</strong>' +
        '<span class="unit-ru">' + count + ' stories</span>' +
        '</span></button>';
    });
    s += '</div></div>';
    return s;
  }

  html += section('⏳ Tenses', 'Время глагола · ' + tenseIds.length + ' topics', tenseIds);
  html += section('📐 Grammar Topics', 'Темы грамматики · ' + grammarIds.length + ' topics', grammarIds);
  html += '</div>';
  container.innerHTML = html;

  container.querySelector('.stories-back-home').addEventListener('click', onBack);
  container.querySelectorAll('.story-topic-card').forEach(function (btn) {
    btn.addEventListener('click', function () {
      renderStoryList(container, btn.dataset.topic, onBack);
    });
  });
}

function renderStoryList(container, topicId, onBackHome) {
  var meta = storiesTopicMeta(topicId);
  var stories = window.GRAMMAR_STORIES[topicId];
  var hasLevels = stories.some(function (s) { return s.level; });

  var html =
    '<button class="ghost-btn back-inline story-back-topics">← All topics</button>' +
    '<h2 class="learn-main-title">' + meta.icon + ' ' + meta.title + '</h2>' +
    '<p class="learn-main-sub">' + meta.description + '</p>' +
    '<div class="unit-grid">';

  stories.forEach(function (story, i) {
    html +=
      '<button class="unit-card story-card" data-idx="' + i + '">' +
      '<span class="unit-num">' + (i + 1) + '</span>' +
      '<span class="unit-info">' +
      '<strong>' + story.title + (hasLevels && story.level ? ' <span class="story-level-badge">' + story.level + '</span>' : '') + '</strong>' +
      '<span class="unit-ru">' + story.titleRu + '</span>' +
      '</span>' +
      '</button>';
  });

  html += '</div>';
  container.innerHTML = html;

  container.querySelector('.story-back-topics').addEventListener('click', function () {
    renderStoriesHome(container, onBackHome);
  });
  container.querySelectorAll('.story-card').forEach(function (btn) {
    btn.addEventListener('click', function () {
      renderStoryReader(container, topicId, parseInt(btn.dataset.idx, 10), onBackHome);
    });
  });
}

function renderStoryReader(container, topicId, idx, onBackHome) {
  var meta = storiesTopicMeta(topicId);
  var story = window.GRAMMAR_STORIES[topicId][idx];
  var showGlossary = true;

  function render() {
    var html =
      '<button class="ghost-btn back-inline story-back-list">← ' + meta.title + '</button>' +
      '<h2 class="learn-main-title">' + story.title +
        (story.level ? ' <span class="story-level-badge">' + story.level + '</span>' : '') + '</h2>' +
      '<p class="learn-main-sub">' + story.titleRu + '</p>';

    if (story.glossary) {
      html += '<button class="ghost-btn story-toggle-ru" style="margin-bottom:1rem">' +
        (showGlossary ? 'Hide word list' : 'Show word list') +
      '</button>';
    }

    html += '<div class="story-lines">';

    if (story.paragraphs) {
      story.paragraphs.forEach(function (p) {
        html +=
          '<div class="story-line story-paragraph">' +
          '<p class="story-en">' + escAllow(p.en) + '</p>' +
          (p.ru ? '<p class="story-ru">' + escAllow(p.ru) + '</p>' : '') +
          '</div>';
      });
    } else {
      story.lines.forEach(function (line) {
        html +=
          '<div class="story-line">' +
          '<p class="story-en">' + escAllow(line.en) + '</p>' +
          '<p class="story-ru">' + escAllow(line.ru) + '</p>' +
          '</div>';
      });
    }

    html += '</div>';

    if (story.glossary && showGlossary) {
      html += '<div class="story-glossary">' +
        '<h4>🔑 Key words</h4><div class="story-glossary-grid">';
      story.glossary.forEach(function (g) {
        html += '<div class="story-glossary-item"><b>' + escAllow(g.en) + '</b><span>' + escAllow(g.ru) + '</span></div>';
      });
      html += '</div></div>';
    }

    container.innerHTML = html;

    container.querySelector('.story-back-list').addEventListener('click', function () {
      renderStoryList(container, topicId, onBackHome);
    });
    var toggleBtn = container.querySelector('.story-toggle-ru');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        showGlossary = !showGlossary;
        render();
      });
    }
  }

  render();
}
