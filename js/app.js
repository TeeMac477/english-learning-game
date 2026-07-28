// Simple game registry so new games can be added by pushing to window.GAMES
// (initialized in index.html, before game modules load) and providing a
// render(container) function.
(function () {
  const homeScreen = document.getElementById('home-screen');
  const gameScreen = document.getElementById('game-screen');
  const gameGrid = document.getElementById('game-grid');
  const gameContainer = document.getElementById('game-container');
  const backBtn = document.getElementById('back-btn');

  function renderHome() {
    gameGrid.innerHTML = '';
    window.GAMES.forEach((game) => {
      const card = document.createElement('div');
      card.className = 'game-card';
      card.innerHTML = `
        <div class="icon">${game.icon}</div>
        <h3>${game.title}</h3>
        <p>${game.description}</p>
      `;
      card.addEventListener('click', () => openGame(game));
      gameGrid.appendChild(card);
    });
  }

  function openGame(game) {
    homeScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    gameContainer.innerHTML = '';
    game.render(gameContainer);
  }

  function goHome() {
    gameScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
    gameContainer.innerHTML = '';
  }

  backBtn.addEventListener('click', goHome);

  renderHome();
})();
