window.GAMES.push({
  id: 'vocabulary',
  icon: '📖',
  title: 'Vocabulary',
  description: 'Learn words with pictures and Russian translations',
  render(container) {
    renderVocabHome(container);
  },
});

function renderVocabHome(container) {
  const categories = Object.values(window.VOCABULARY);

  container.innerHTML = `
    <h2 class="section-heading">Vocabulary</h2>
    <p class="section-sub">Choose a topic to practise.</p>
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
      <span class="tag tag-new">${totalQs} words</span>
    `;
    card.addEventListener('click', () => renderVocabRounds(container, cat));
    grid.appendChild(card);
  });
}

function renderVocabRounds(container, category) {
  const allQuestions = category.rounds.flatMap((r) => r.questions);

  container.innerHTML = `
    <button class="ghost-btn back-inline">← All topics</button>
    <h2 class="section-heading">${category.icon} ${category.title}</h2>
    <p class="section-sub">${category.description}</p>
    <div class="mode-picker">
      <p><strong>Choose a mode:</strong></p>
      <div class="mode-grid"></div>
    </div>
    <div class="round-list"></div>
  `;

  container.querySelector('.back-inline').addEventListener('click', () => renderVocabHome(container));

  const modeGrid = container.querySelector('.mode-grid');
  const modes = [
    { id: 'image', icon: '🖼️', label: 'Image → Word', desc: 'See the picture, pick the word' },
    { id: 'russian', icon: '🇷🇺', label: 'Russian → English', desc: 'See the Russian, pick the English' },
    { id: 'both', icon: '🖼️🇷🇺', label: 'Image + Russian', desc: 'Both image and Russian word' },
  ];

  let selectedMode = 'both';

  modes.forEach((mode) => {
    const btn = document.createElement('button');
    btn.className = 'mode-btn' + (mode.id === selectedMode ? ' active' : '');
    btn.innerHTML = `<span class="mode-icon">${mode.icon}</span><strong>${mode.label}</strong><span>${mode.desc}</span>`;
    btn.addEventListener('click', () => {
      selectedMode = mode.id;
      modeGrid.querySelectorAll('.mode-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    });
    modeGrid.appendChild(btn);
  });

  const list = container.querySelector('.round-list');

  category.rounds.forEach((round, i) => {
    const item = document.createElement('button');
    item.className = 'round-item';
    item.innerHTML = `
      <div class="round-number">${i + 1}</div>
      <div class="round-info">
        <strong>${round.title}</strong>
        <span>${round.questions.length} words</span>
      </div>
      <div class="round-count">${round.questions.length} Qs</div>
    `;
    item.addEventListener('click', () => {
      startVocabQuiz(container, category, round.title, round.questions, selectedMode, `vocab:${category.id}:${i}`, () => renderVocabRounds(container, category));
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
      startVocabQuiz(container, category, 'Mixed Challenge', allQuestions, selectedMode, `vocab:${category.id}:mixed`, () => renderVocabRounds(container, category));
    });
    list.appendChild(challenge);
  }
}

function startVocabQuiz(container, category, roundTitle, questions, mode, storageKey, onExit) {
  const adapted = questions.map((q) => {
    let questionText = '';
    let visual = '';

    if (mode === 'image') {
      visual = q.visual;
      questionText = 'What is this?';
    } else if (mode === 'russian') {
      visual = '';
      questionText = `What is <strong>"${q.russian}"</strong> in English?`;
    } else {
      visual = q.visual;
      questionText = `<span class="russian-label">${q.russian}</span>`;
    }

    return {
      visual: visual,
      question: questionText,
      options: q.options,
      answer: q.english,
    };
  });

  runQuiz(container, {
    title: `${category.title} — ${roundTitle}`,
    questions: adapted,
    storageKey: storageKey,
    onExit: onExit,
    exitLabel: '← Back to rounds',
  });
}
