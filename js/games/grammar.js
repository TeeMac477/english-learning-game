window.GAMES.push({
  id: 'grammar',
  icon: '✍️',
  title: 'Grammar Lessons',
  description: 'Learn verbs → practise grammar → build sentences',
  render(container) {
    renderGrammarHome(container);
  },
});

function renderGrammarHome(container) {
  const tenses = Object.values(window.LESSONS);

  container.innerHTML = `
    <h2 class="section-heading">Grammar Lessons</h2>
    <p class="section-sub">Each lesson has 3 phases: learn new verbs, practise grammar, build sentences.</p>
    <div class="game-grid"></div>
  `;

  const grid = container.querySelector('.game-grid');
  tenses.forEach((tense) => {
    const totalItems = tense.lessons.reduce((sum, l) => sum + l.verbs.length + l.grammarQuestions.length + l.sentences.length, 0);
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
      <div class="icon">${tense.icon}</div>
      <h3>${tense.title}</h3>
      <p>${tense.description}</p>
      <span class="tag tag-popular">${tense.lessons.length} lessons · ${totalItems} items</span>
    `;
    card.addEventListener('click', () => renderLessonList(container, tense));
    grid.appendChild(card);
  });
}

function renderLessonList(container, tense) {
  container.innerHTML = `
    <button class="ghost-btn back-inline">← All tenses</button>
    <h2 class="section-heading">${tense.icon} ${tense.title}</h2>
    <p class="section-sub">${tense.description}</p>
    <div class="round-list"></div>
  `;

  container.querySelector('.back-inline').addEventListener('click', () => renderGrammarHome(container));

  const list = container.querySelector('.round-list');

  tense.lessons.forEach((lesson, i) => {
    const totalItems = lesson.verbs.length + lesson.grammarQuestions.length + lesson.sentences.length;
    const item = document.createElement('button');
    item.className = 'round-item';
    item.innerHTML = `
      <div class="round-number">${i + 1}</div>
      <div class="round-info">
        <strong>${lesson.title}</strong>
        <span>📚 ${lesson.verbs.length} verbs · 📝 ${lesson.grammarQuestions.length} grammar Qs · 🧩 ${lesson.sentences.length} sentences</span>
      </div>
      <div class="round-count">${totalItems} items</div>
    `;
    item.addEventListener('click', () => {
      runLesson(container, {
        title: `${tense.title} — ${lesson.title}`,
        lesson: lesson,
        storageKey: `lesson:${tense.id}:${i}`,
        onExit: () => renderLessonList(container, tense),
        exitLabel: '← Back to lessons',
      });
    });
    list.appendChild(item);
  });
}
