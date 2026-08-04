window.GAMES.push({
  id: 'sentences',
  icon: '🧩',
  title: 'Sentence Builder',
  description: 'Rearrange words to build correct sentences',
  category: 'sentence',
  render(container) {
    renderSentenceHome(container);
  },
});

function renderSentenceHome(container) {
  const categories = Object.values(window.SENTENCES);

  container.innerHTML = `
    <h2 class="section-heading">Sentence Builder</h2>
    <p class="section-sub">Put the words in the right order to make sentences.</p>
    <div class="game-grid"></div>
  `;

  const grid = container.querySelector('.game-grid');
  categories.forEach((cat) => {
    const totalQs = cat.rounds.reduce((sum, r) => sum + r.questions.length, 0);
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
      <div class="icon">${cat.icon}</div>
      <h3>${cat.title}</h3>
      <p>${cat.description}</p>
      <span class="tag tag-new">${totalQs} sentences</span>
    `;
    card.addEventListener('click', () => renderSentenceRounds(container, cat));
    grid.appendChild(card);
  });
}

function renderSentenceRounds(container, category) {
  const allQuestions = category.rounds.flatMap((r) => r.questions);

  container.innerHTML = `
    <button class="ghost-btn back-inline">← All categories</button>
    <h2 class="section-heading">${category.icon} ${category.title}</h2>
    <p class="section-sub">${category.description}</p>
    <div class="round-list"></div>
  `;

  container.querySelector('.back-inline').addEventListener('click', () => renderSentenceHome(container));

  const list = container.querySelector('.round-list');

  category.rounds.forEach((round, i) => {
    const item = document.createElement('button');
    item.className = 'round-item';
    item.innerHTML = `
      <div class="round-number">${i + 1}</div>
      <div class="round-info">
        <strong>${round.title}</strong>
        <span>${round.hint || ''}</span>
      </div>
      <div class="round-count">${round.questions.length} Qs</div>
    `;
    item.addEventListener('click', () => {
      runSentenceBuilder(container, {
        title: `${category.title} — ${round.title}`,
        questions: round.questions,
        hint: round.hint,
        storageKey: `sentences:${category.id}:${i}`,
        onExit: () => renderSentenceRounds(container, category),
        exitLabel: '← Back to rounds',
      });
    });
    list.appendChild(item);
  });

  if (category.rounds.length > 1) {
    const challenge = document.createElement('button');
    challenge.className = 'round-item challenge';
    challenge.innerHTML = `
      <div class="round-number">🏆</div>
      <div class="round-info">
        <strong>Mixed Challenge</strong>
        <span>All rounds together</span>
      </div>
      <div class="round-count">${allQuestions.length} Qs</div>
    `;
    challenge.addEventListener('click', () => {
      runSentenceBuilder(container, {
        title: `${category.title} — Mixed`,
        questions: allQuestions,
        storageKey: `sentences:${category.id}:mixed`,
        onExit: () => renderSentenceRounds(container, category),
        exitLabel: '← Back to rounds',
      });
    });
    list.appendChild(challenge);
  }
}
