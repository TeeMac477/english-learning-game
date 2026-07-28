// Runs a full lesson: three phases (Learn Verbs → Grammar → Sentences).
// Each phase uses the existing engines (runQuiz, runSentenceBuilder).
function runLesson(container, options) {
  const { title, lesson, storageKey = '', onExit = null, exitLabel = 'Back' } = options;

  const phases = [
    { id: 'learn', icon: '📚', label: 'Phase 1 — Learn Verbs', subtitle: 'Match the picture with the correct English word.' },
    { id: 'grammar', icon: '📝', label: 'Phase 2 — Grammar', subtitle: 'Choose the correct verb form for each sentence.' },
    { id: 'build', icon: '🧩', label: 'Phase 3 — Build Sentences', subtitle: 'Put the words in the correct order.' },
  ];

  let currentPhase = 0;
  const scores = [0, 0, 0];
  const totals = [lesson.verbs.length, lesson.grammarQuestions.length, lesson.sentences.length];

  function renderTracker() {
    return `
      <div class="phase-tracker">
        ${phases.map((p, i) => `
          <div class="phase-step ${i === currentPhase ? 'active' : (i < currentPhase ? 'done' : '')}">
            <span class="phase-icon">${i < currentPhase ? '✓' : p.icon}</span>
            <span>Phase ${i + 1}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderIntro() {
    const phase = phases[currentPhase];
    container.innerHTML = `
      ${renderTracker()}
      <div class="game-panel phase-intro">
        <div class="phase-icon-big">${phase.icon}</div>
        <h2>${phase.label}</h2>
        <p>${phase.subtitle}</p>
        <button class="next-btn start-phase">Start Phase ${currentPhase + 1}</button>
      </div>
    `;
    container.querySelector('.start-phase').addEventListener('click', startPhase);
  }

  function startPhase() {
    const phaseContainer = document.createElement('div');
    container.innerHTML = '';
    container.appendChild(makeTrackerNode());
    container.appendChild(phaseContainer);

    if (currentPhase === 0) {
      const questions = lesson.verbs.map((v) => {
        const others = lesson.verbs.filter((x) => x.english !== v.english);
        const distractors = shuffle(others).slice(0, 3).map((x) => x.english);
        return {
          visual: v.visual,
          question: `<span class="russian-label">${v.russian}</span>`,
          options: shuffle([v.english, ...distractors]),
          answer: v.english,
        };
      });
      runQuiz(phaseContainer, {
        title: `${title} · Phase 1 — Learn Verbs`,
        questions: questions,
        storageKey: `${storageKey}:phase1`,
        onExit: nextPhase,
        exitLabel: 'Continue to Phase 2 →',
      });
    } else if (currentPhase === 1) {
      runQuiz(phaseContainer, {
        title: `${title} · Phase 2 — Grammar`,
        questions: lesson.grammarQuestions,
        hint: lesson.hint,
        storageKey: `${storageKey}:phase2`,
        onExit: nextPhase,
        exitLabel: 'Continue to Phase 3 →',
      });
    } else {
      runSentenceBuilder(phaseContainer, {
        title: `${title} · Phase 3 — Build Sentences`,
        questions: lesson.sentences,
        hint: lesson.hint,
        storageKey: `${storageKey}:phase3`,
        onExit: showFinalResults,
        exitLabel: 'See lesson results →',
      });
    }
  }

  function makeTrackerNode() {
    const div = document.createElement('div');
    div.innerHTML = renderTracker();
    return div.firstElementChild;
  }

  function nextPhase() {
    currentPhase++;
    if (currentPhase < phases.length) renderIntro();
    else showFinalResults();
  }

  function showFinalResults() {
    container.innerHTML = `
      <div class="game-panel score-screen">
        <div class="phase-icon-big">🎓</div>
        <h2>Lesson Complete!</h2>
        <p class="score-message">You finished all three phases!</p>
        <div class="result-actions">
          <button class="restart-btn">Restart lesson</button>
          ${onExit ? `<button class="ghost-btn">${exitLabel}</button>` : ''}
        </div>
      </div>
    `;
    container.querySelector('.restart-btn').addEventListener('click', () => {
      currentPhase = 0;
      renderIntro();
    });
    const exitBtn = container.querySelector('.ghost-btn');
    if (exitBtn) exitBtn.addEventListener('click', onExit);
  }

  function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  renderIntro();
}
