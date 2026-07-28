window.GAMES.push({
  id: 'prepositions',
  icon: '📍',
  title: 'Prepositions',
  description: 'Time, place and movement — 9 rounds',
  render(container) {
    renderCategories(container);
  },
});

function renderCategories(container) {
  const categories = Object.values(window.PREPOSITIONS);

  container.innerHTML = `
    <h2 class="section-heading">Prepositions</h2>
    <p class="section-sub">Choose a category to practise.</p>
    <div class="game-grid"></div>
  `;

  const grid = container.querySelector('.game-grid');
  categories.forEach((cat) => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
      <div class="icon">${cat.icon}</div>
      <h3>${cat.title}</h3>
      <p>${cat.description}</p>
    `;
    card.addEventListener('click', () => renderRounds(container, cat));
    grid.appendChild(card);
  });
}

function renderRounds(container, category) {
  const allQuestions = category.rounds.flatMap((r) => r.questions);

  container.innerHTML = `
    <button class="ghost-btn back-inline">← All prepositions</button>
    <h2 class="section-heading">${category.icon} ${category.title}</h2>
    <p class="section-sub">${category.description}</p>
    <div class="round-list"></div>
  `;

  container.querySelector('.back-inline').addEventListener('click', () => renderCategories(container));

  const list = container.querySelector('.round-list');

  category.rounds.forEach((round, i) => {
    const item = document.createElement('button');
    item.className = 'round-item';
    item.innerHTML = `
      <div class="round-number">${i + 1}</div>
      <div class="round-info">
        <strong>${round.title}</strong>
        <span>${round.hint}</span>
      </div>
      <div class="round-count">${round.questions.length} Qs</div>
    `;
    item.addEventListener('click', () => {
      runQuiz(container, {
        title: `${category.title} — ${round.title}`,
        questions: round.questions,
        hint: round.hint,
        storageKey: `prepositions:${category.id}:${i}`,
        onExit: () => renderRounds(container, category),
        exitLabel: '← Back to rounds',
      });
    });
    list.appendChild(item);
  });

  const challenge = document.createElement('button');
  challenge.className = 'round-item challenge';
  challenge.innerHTML = `
    <div class="round-number">🏆</div>
    <div class="round-info">
      <strong>Mixed Challenge</strong>
      <span>All rounds together, in random order</span>
    </div>
    <div class="round-count">${allQuestions.length} Qs</div>
  `;
  challenge.addEventListener('click', () => {
    runQuiz(container, {
      title: `${category.title} — Mixed Challenge`,
      questions: allQuestions,
      storageKey: `prepositions:${category.id}:mixed`,
      onExit: () => renderRounds(container, category),
      exitLabel: '← Back to rounds',
    });
  });
  list.appendChild(challenge);
}
