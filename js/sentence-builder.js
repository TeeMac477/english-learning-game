// Sentence rearranging game engine.
// Players click words in order to build the correct sentence.
function runSentenceBuilder(container, options) {
  const { title, questions, hint = '', storageKey = '', onExit = null, exitLabel = 'Back' } = options;

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

  function renderQuestion() {
    const q = pool[index];
    const shuffledWords = shuffle(q.words);
    const correctWords = q.correct.split(' ');

    container.innerHTML = `
      <div class="game-panel">
        <div class="progress">
          <span>${title}</span>
          <span>Question ${index + 1} of ${pool.length} · Score: ${score}</span>
        </div>
        <div class="progress-bar"><div class="progress-bar-fill" style="width:${(index / pool.length) * 100}%"></div></div>
        ${hint ? `<div class="hint">💡 ${hint}</div>` : ''}
        <p class="sb-instruction">Tap the words in the correct order to build the sentence.</p>
        <div class="sb-answer-area"></div>
        <div class="sb-word-bank"></div>
        <div class="sb-controls"></div>
        <div class="feedback"></div>
      </div>
    `;

    const answerArea = container.querySelector('.sb-answer-area');
    const wordBank = container.querySelector('.sb-word-bank');
    const controls = container.querySelector('.sb-controls');
    const feedbackEl = container.querySelector('.feedback');

    let selectedWords = [];
    let wordButtons = [];

    shuffledWords.forEach((word, i) => {
      const btn = document.createElement('button');
      btn.className = 'sb-word';
      btn.textContent = word;
      btn.addEventListener('click', () => {
        if (btn.classList.contains('sb-used')) return;
        btn.classList.add('sb-used');
        selectedWords.push({ word, index: i });
        updateAnswer();
      });
      wordBank.appendChild(btn);
      wordButtons.push(btn);
    });

    function updateAnswer() {
      answerArea.innerHTML = '';
      selectedWords.forEach((item, si) => {
        const chip = document.createElement('span');
        chip.className = 'sb-chip';
        chip.textContent = item.word;
        chip.addEventListener('click', () => {
          wordButtons[item.index].classList.remove('sb-used');
          selectedWords.splice(si, 1);
          updateAnswer();
        });
        answerArea.appendChild(chip);
      });

      controls.innerHTML = '';
      if (selectedWords.length > 0) {
        const clearBtn = document.createElement('button');
        clearBtn.className = 'ghost-btn';
        clearBtn.textContent = 'Clear';
        clearBtn.addEventListener('click', () => {
          selectedWords = [];
          wordButtons.forEach((b) => b.classList.remove('sb-used'));
          updateAnswer();
        });
        controls.appendChild(clearBtn);
      }

      if (selectedWords.length === shuffledWords.length) {
        const checkBtn = document.createElement('button');
        checkBtn.className = 'next-btn';
        checkBtn.textContent = 'Check';
        checkBtn.addEventListener('click', checkAnswer);
        controls.appendChild(checkBtn);
      }
    }

    function checkAnswer() {
      const attempt = selectedWords.map((s) => s.word).join(' ');
      const isCorrect = attempt === q.correct;

      if (isCorrect) score++;
      else missed.push(q);

      wordBank.querySelectorAll('.sb-word').forEach((b) => (b.disabled = true));
      answerArea.querySelectorAll('.sb-chip').forEach((c) => (c.style.pointerEvents = 'none'));

      if (isCorrect) {
        answerArea.classList.add('sb-correct');
        feedbackEl.textContent = 'Correct!';
        feedbackEl.className = 'feedback correct';
      } else {
        answerArea.classList.add('sb-incorrect');
        feedbackEl.innerHTML = `Not quite. The correct sentence is:<br><strong>${q.correct}</strong>`;
        feedbackEl.className = 'feedback incorrect';
      }

      controls.innerHTML = '';
      const nextBtn = document.createElement('button');
      nextBtn.className = 'next-btn';
      nextBtn.textContent = index + 1 < pool.length ? 'Next' : 'See results';
      nextBtn.addEventListener('click', () => {
        index++;
        if (index < pool.length) renderQuestion();
        else renderResults();
      });
      controls.appendChild(nextBtn);
      nextBtn.focus();
    }
  }

  function renderResults() {
    const total = pool.length;
    const pct = Math.round((score / total) * 100);

    if (storageKey) {
      const best = localStorage.getItem(`elg:best:${storageKey}`);
      if (best === null || score > Number(best)) {
        localStorage.setItem(`elg:best:${storageKey}`, String(score));
      }
    }

    const bestRaw = storageKey ? localStorage.getItem(`elg:best:${storageKey}`) : null;
    let message = 'Keep practising!';
    if (pct === 100) message = 'Perfect! 🎉';
    else if (pct >= 80) message = 'Great work! 🌟';
    else if (pct >= 50) message = 'Good effort! 👍';

    container.innerHTML = `
      <div class="game-panel score-screen">
        <h2>${title}</h2>
        <div class="big-score">${score} / ${total}</div>
        <p class="score-message">${message}</p>
        ${bestRaw !== null ? `<p class="best-score">Best: ${bestRaw} / ${total}</p>` : ''}
        <div class="result-actions">
          ${missed.length ? '<button class="next-btn review-btn">Review ' + missed.length + ' missed</button>' : ''}
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
