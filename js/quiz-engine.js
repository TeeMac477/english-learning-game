// Reusable multiple-choice quiz engine shared by all quiz-style games.
//
// runQuiz(container, {
//   title,        // shown in the progress bar
//   questions,    // [{ question, options, answer, visual?, explanation? }]
//   hint,         // optional teaching note shown above the question
//   storageKey,   // optional key for saving the best score
//   onExit,       // optional callback for the "back" button on the results screen
//   exitLabel,
// })
function runQuiz(container, options) {
  const {
    title,
    questions,
    hint = '',
    storageKey = '',
    onExit = null,
    exitLabel = 'Back',
    getQuestionText = (q) => q.question,
    correctFeedback = 'Correct!',
    wrongFeedback = 'Not quite.',
  } = options;

  let pool = shuffle(questions);
  let index = 0;
  let score = 0;
  let missed = [];

  function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function loadBest() {
    if (!storageKey) return null;
    const raw = localStorage.getItem(`elg:best:${storageKey}`);
    return raw === null ? null : Number(raw);
  }

  function saveBest(value) {
    if (!storageKey) return;
    const best = loadBest();
    if (best === null || value > best) {
      localStorage.setItem(`elg:best:${storageKey}`, String(value));
    }
  }

  function renderQuestion() {
    const q = pool[index];
    const opts = shuffle(q.options);

    container.innerHTML = `
      <div class="game-panel">
        <div class="progress">
          <span>${title}</span>
          <span>Question ${index + 1} of ${pool.length} · Score: ${score}</span>
        </div>
        <div class="progress-bar"><div class="progress-bar-fill" style="width:${(index / pool.length) * 100}%"></div></div>
        ${hint ? `<div class="hint">💡 ${hint}</div>` : ''}
        ${q.visual ? `<div class="visual">${q.visual}</div>` : ''}
        <div class="question-text">${getQuestionText(q)}</div>
        <div class="options"></div>
        <div class="feedback"></div>
      </div>
    `;

    const optionsEl = container.querySelector('.options');
    const feedbackEl = container.querySelector('.feedback');

    opts.forEach((opt) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => selectAnswer(opt, q, optionsEl, feedbackEl));
      optionsEl.appendChild(btn);
    });
  }

  function selectAnswer(chosen, q, optionsEl, feedbackEl) {
    const buttons = optionsEl.querySelectorAll('.option-btn');
    const isCorrect = chosen === q.answer;

    if (isCorrect) score++;
    else missed.push(q);

    buttons.forEach((btn) => {
      btn.disabled = true;
      if (btn.textContent === q.answer) btn.classList.add('correct');
      else if (btn.textContent === chosen) btn.classList.add('incorrect');
    });

    const detail = q.explanation ? ` ${q.explanation}` : '';
    feedbackEl.innerHTML = isCorrect
      ? `${correctFeedback}${detail}`
      : `${wrongFeedback} The answer is <strong>${q.answer}</strong>.${detail}`;
    feedbackEl.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;

    const nextBtn = document.createElement('button');
    nextBtn.className = 'next-btn';
    nextBtn.textContent = index + 1 < pool.length ? 'Next question' : 'See results';
    nextBtn.addEventListener('click', () => {
      index++;
      if (index < pool.length) renderQuestion();
      else renderResults();
    });
    container.querySelector('.game-panel').appendChild(nextBtn);
    nextBtn.focus();
  }

  function renderResults() {
    const total = pool.length;
    const pct = Math.round((score / total) * 100);
    saveBest(score);
    const best = loadBest();

    let message = 'Keep practising!';
    if (pct === 100) message = 'Perfect score! 🎉';
    else if (pct >= 80) message = 'Great work! 🌟';
    else if (pct >= 50) message = 'Good effort! 👍';

    container.innerHTML = `
      <div class="game-panel score-screen">
        <h2>${title}</h2>
        <div class="big-score">${score} / ${total}</div>
        <p class="score-message">${message}</p>
        ${best !== null ? `<p class="best-score">Best score: ${best} / ${total}</p>` : ''}
        <div class="result-actions">
          ${missed.length ? '<button class="next-btn review-btn">Review the ' + missed.length + ' I missed</button>' : ''}
          <button class="restart-btn">Play again</button>
          ${onExit ? `<button class="ghost-btn">${exitLabel}</button>` : ''}
        </div>
      </div>
    `;

    const reviewBtn = container.querySelector('.review-btn');
    if (reviewBtn) {
      reviewBtn.addEventListener('click', () => {
        pool = shuffle(missed);
        missed = [];
        index = 0;
        score = 0;
        renderQuestion();
      });
    }

    container.querySelector('.restart-btn').addEventListener('click', () => {
      pool = shuffle(questions);
      missed = [];
      index = 0;
      score = 0;
      renderQuestion();
    });

    const exitBtn = container.querySelector('.ghost-btn');
    if (exitBtn) exitBtn.addEventListener('click', onExit);
  }

  renderQuestion();
}
