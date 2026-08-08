// Grammar Stories: 2 short stories per grammar/tense topic, heavily
// featuring that structure, shown with English + toggleable Russian.

function storiesTopicMeta(topicId) {
  var g = window.GRAMMAR_TOPICS && window.GRAMMAR_TOPICS[topicId];
  if (g) return { icon: g.icon, title: g.title, description: g.description };
  var v = window.VERB_BUILDER && window.VERB_BUILDER[topicId];
  if (v) return { icon: v.icon, title: v.title, description: v.description };
  return { icon: '📖', title: topicId, description: '' };
}

function renderStoriesHome(container, onBack) {
  var topicIds = Object.keys(window.GRAMMAR_STORIES || {});
  var html =
    '<div class="learn-home">' +
    '<button class="ghost-btn back-inline stories-back-home">← Back</button>' +
    '<h2 class="learn-main-title">📖 Grammar Stories</h2>' +
    '<p class="learn-main-sub">Читайте истории — каждая посвящена одной теме грамматики</p>' +
    '<div class="unit-grid">';

  topicIds.forEach(function (id) {
    var meta = storiesTopicMeta(id);
    var count = window.GRAMMAR_STORIES[id].length;
    html +=
      '<button class="unit-card story-topic-card" data-topic="' + id + '">' +
      '<span class="unit-icon">' + meta.icon + '</span>' +
      '<span class="unit-info">' +
      '<strong>' + meta.title + '</strong>' +
      '<span class="unit-ru">' + count + ' stories</span>' +
      '</span>' +
      '</button>';
  });

  html += '</div></div>';
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
      '<strong>' + story.title + '</strong>' +
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
  var showRu = true;

  function render() {
    var html =
      '<button class="ghost-btn back-inline story-back-list">← ' + meta.title + '</button>' +
      '<h2 class="learn-main-title">' + story.title + '</h2>' +
      '<p class="learn-main-sub">' + story.titleRu + '</p>' +
      '<button class="ghost-btn story-toggle-ru" style="margin-bottom:1rem">' +
        (showRu ? 'Hide Russian' : 'Show Russian') +
      '</button>' +
      '<div class="story-lines">';

    story.lines.forEach(function (line) {
      html +=
        '<div class="story-line">' +
        '<p class="story-en">' + escAllow(line.en) + '</p>' +
        (showRu ? '<p class="story-ru">' + escAllow(line.ru) + '</p>' : '') +
        '</div>';
    });

    html += '</div>';
    container.innerHTML = html;

    container.querySelector('.story-back-list').addEventListener('click', function () {
      renderStoryList(container, topicId, onBackHome);
    });
    container.querySelector('.story-toggle-ru').addEventListener('click', function () {
      showRu = !showRu;
      render();
    });
  }

  render();
}
