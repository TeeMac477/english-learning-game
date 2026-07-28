// Reusable multiple-choice quiz engine shared by all quiz-style games.
function runQuiz(container, { title, questions, getQuestionText, correctFeedback = 'Correct!', wrongFeedback = 'Not quite.' }) {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  let index = 0;
  let score = 0;

  function shuffleOptions(options) {
    return [...options].sort(() => Math.random() - 0.5);
  }

  function renderQuestion() {
    const q = shuffled[index];
    const options = shuffleOptions(q.options);

    container.innerHTML = `
      <div class="game-panel">
        <div class="progress">${title} — Question ${index + 1} of ${shuffled.length} · Score: ${score}</div>
        <div class="question-text">${getQuestionText(q)}</div>
        <div class="options"></div>
        <div class="feedback"></div>
      </div>
    `;

    const optionsEl = container.querySelector('.options');
    const feedbackEl = container.querySelector('.feedback');

    options.forEach((opt) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => selectAnswer(opt, q.answer, optionsEl, feedbackEl));
      optionsEl.appendChild(btn);
    });
  }

  function selectAnswer(chosen, correctAnswer, optionsEl, feedbackEl) {
    const buttons = optionsEl.querySelectorAll('.option-btn');
    const isCorrect = chosen === correctAnswer;
    if (isCorrect) score++;

    buttons.forEach((btn) => {
      btn.disabled = true;
      if (btn.textContent === correctAnswer) btn.classList.add('correct');
      else if (btn.textContent === chosen) btn.classList.add('incorrect');
    });

    feedbackEl.textContent = isCorrect ? correctFeedback : `${wrongFeedback} The correct answer was "${correctAnswer}".`;
    feedbackEl.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;

    const nextBtn = document.createElement('button');
    nextBtn.className = 'next-btn';
    nextBtn.textContent = index + 1 < shuffled.length ? 'Next question' : 'See results';
    nextBtn.addEventListener('click', () => {
      index++;
      if (index < shuffled.length) renderQuestion();
      else renderResults();
    });
    container.querySelector('.game-panel').appendChild(nextBtn);
  }

  function renderResults() {
    container.innerHTML = `
      <div class="game-panel score-screen">
        <h2>${title} complete!</h2>
        <div class="big-score">${score} / ${shuffled.length}</div>
        <button class="restart-btn">Play again</button>
      </div>
    `;
    container.querySelector('.restart-btn').addEventListener('click', () => {
      index = 0;
      score = 0;
      renderQuestion();
    });
  }

  renderQuestion();
}
