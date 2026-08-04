// Shared difficulty system used by every game: Quick / Regular / Hard.
// Each game defines its own item counts per level (a "hard" round of
// Hangman means more words; a "hard" round of Word Wall means more pairs
// on screen) — this module only standardises the picker UI and the
// hard-mode "pick tougher items" heuristic.
window.DIFFICULTY_LEVELS = [
  { id: 'quick',   icon: '⚡', label: 'Quick',   desc: 'Fewer questions, fast round' },
  { id: 'regular', icon: '📗', label: 'Regular', desc: 'Standard round' },
  { id: 'hard',    icon: '🔥', label: 'Hard',    desc: 'More rounds, tougher words' },
];

// Renders a 3-card difficulty picker into container and calls onSelect(levelId) on click.
// counts: { quick: N, regular: N, hard: N } — how many items each level plays, shown on the card.
window.renderDifficultyPicker = function (container, title, subtitle, counts, unitLabel, onSelect, onBack) {
  container.innerHTML =
    (onBack ? '<button class="ghost-btn back-inline">← Back</button>' : '') +
    '<h2 class="section-heading">' + title + '</h2>' +
    (subtitle ? '<p class="section-sub">' + subtitle + '</p>' : '') +
    '<div class="diff-grid"></div>';
  if (onBack) container.querySelector('.back-inline').addEventListener('click', onBack);
  var grid = container.querySelector('.diff-grid');
  window.DIFFICULTY_LEVELS.forEach(function (level) {
    var count = counts[level.id];
    var card = document.createElement('button');
    card.className = 'diff-card diff-' + level.id;
    card.innerHTML =
      '<div class="diff-icon">' + level.icon + '</div>' +
      '<h3>' + level.label + '</h3>' +
      '<p>' + level.desc + '</p>' +
      '<span class="diff-count">' + count + ' ' + (unitLabel || 'items') + '</span>';
    card.addEventListener('click', function () { onSelect(level.id, count); });
    grid.appendChild(card);
  });
};

// Picks `count` items from a pool for the given difficulty level.
// Hard mode favours longer / more complex words (a reasonable proxy for
// difficulty since word lists aren't hand-tagged by CEFR level) and pulls
// more items; quick/regular shuffle and take a smaller slice.
window.pickForDifficulty = function (pool, levelId, count, keyFn) {
  count = Math.min(count, pool.length);
  var getKey = keyFn || function (item) { return (item.english || item.sentence || item.base || '').length; };
  if (levelId === 'hard') {
    var sorted = pool.slice().sort(function (a, b) { return getKey(b) - getKey(a); });
    var hardPool = sorted.slice(0, Math.max(count * 2, count));
    return hardPool.sort(function () { return Math.random() - 0.5; }).slice(0, count);
  }
  return pool.slice().sort(function () { return Math.random() - 0.5; }).slice(0, count);
};
