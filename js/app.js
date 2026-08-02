// App controller with Learn/Practice tabs and game registry.
(function () {
  var homeScreen = document.getElementById('home-screen');
  var gameScreen = document.getElementById('game-screen');
  var gameGrid = document.getElementById('game-grid');
  var gameContainer = document.getElementById('game-container');
  var backBtn = document.getElementById('back-btn');
  var learnTab = document.getElementById('tab-learn');
  var practiceTab = document.getElementById('tab-practice');
  var learnSection = document.getElementById('learn-section');
  var practiceSection = document.getElementById('practice-section');
  var currentTab = 'learn';

  function switchTab(tab) {
    currentTab = tab;
    if (tab === 'learn') {
      learnTab.classList.add('active');
      practiceTab.classList.remove('active');
      learnSection.classList.remove('hidden');
      practiceSection.classList.add('hidden');
      gameScreen.classList.add('hidden');
      showLearnHome();
    } else {
      practiceTab.classList.add('active');
      learnTab.classList.remove('active');
      practiceSection.classList.remove('hidden');
      learnSection.classList.add('hidden');
      gameScreen.classList.add('hidden');
      renderHome();
    }
  }

  learnTab.addEventListener('click', function () { switchTab('learn'); });
  practiceTab.addEventListener('click', function () { switchTab('practice'); });

  function showLearnHome() {
    renderLearnHome(
      learnSection,
      function onOpenUnit(levelId, unit) {
        renderUnit(learnSection, levelId, unit, function () {
          showLearnHome();
        });
      },
      function onBack() {
        switchTab('learn');
      }
    );
  }

  function renderHome() {
    gameGrid.innerHTML = '';
    var sections = [
      { key: 'classic', label: '🎯 Classic Games', games: window.GAMES.filter(function(g) { return !g.section || g.section === 'classic'; }) },
      { key: 'arcade',  label: '🕹️ Arcade Games',  games: window.GAMES.filter(function(g) { return g.section === 'arcade'; }) },
    ];
    sections.forEach(function(section) {
      if (!section.games.length) return;
      var header = document.createElement('div');
      header.className = 'game-section-header';
      header.textContent = section.label;
      gameGrid.appendChild(header);
      section.games.forEach(function(game) {
        var card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML =
          '<div class="icon">' + game.icon + '</div>' +
          '<h3>' + game.title + '</h3>' +
          '<p>' + game.description + '</p>';
        card.addEventListener('click', function() { openGame(game); });
        gameGrid.appendChild(card);
      });
    });
  }

  function openGame(game) {
    homeScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    gameContainer.innerHTML = '';
    game.render(gameContainer);
  }

  window.openGameById = function (id) {
    var game = window.GAMES.find(function (g) { return g.id === id; });
    if (game) {
      switchTab('practice');
      setTimeout(function () { openGame(game); }, 50);
    }
  };

  function goHome() {
    gameScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
    gameContainer.innerHTML = '';
  }

  backBtn.addEventListener('click', goHome);

  switchTab('learn');
})();
