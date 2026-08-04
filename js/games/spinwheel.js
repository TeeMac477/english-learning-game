window.GAMES.push({
  id: 'spinwheel',
  icon: '🎡',
  title: 'Spin the Wheel',
  description: 'Spin the wheel to land on a random vocabulary topic — then answer 5 quick questions',
  category: 'vocabulary',
  render: function(container) { swRender(container); },
});

var SW_COLORS = ['#ef4444','#f97316','#eab308','#22c55e','#06b6d4','#6366f1','#ec4899','#84cc16','#14b8a6','#a855f7','#f43f5e','#3b82f6'];

function swBuildSvg(segments) {
  var n = segments.length;
  var r = 130;
  var cx = 140, cy = 140;
  var anglePerSeg = 360 / n;
  var paths = '';

  segments.forEach(function(seg, i) {
    var startDeg = i * anglePerSeg - 90;
    var endDeg = startDeg + anglePerSeg;
    var startRad = startDeg * Math.PI / 180;
    var endRad = endDeg * Math.PI / 180;
    var x1 = cx + r * Math.cos(startRad);
    var y1 = cy + r * Math.sin(startRad);
    var x2 = cx + r * Math.cos(endRad);
    var y2 = cy + r * Math.sin(endRad);
    var largeArc = anglePerSeg > 180 ? 1 : 0;
    var color = SW_COLORS[i % SW_COLORS.length];
    var midDeg = startDeg + anglePerSeg / 2;
    var midRad = midDeg * Math.PI / 180;
    var tx = cx + r * 0.62 * Math.cos(midRad);
    var ty = cy + r * 0.62 * Math.sin(midRad);
    var rotDeg = midDeg + 90;

    paths +=
      '<path d="M ' + cx + ' ' + cy + ' L ' + x1.toFixed(2) + ' ' + y1.toFixed(2) +
      ' A ' + r + ' ' + r + ' 0 ' + largeArc + ' 1 ' + x2.toFixed(2) + ' ' + y2.toFixed(2) + ' Z"' +
      ' fill="' + color + '" stroke="white" stroke-width="2"/>' +
      '<text x="' + tx.toFixed(2) + '" y="' + ty.toFixed(2) + '" text-anchor="middle" dominant-baseline="middle"' +
      ' font-size="18" transform="rotate(' + rotDeg.toFixed(1) + ',' + tx.toFixed(2) + ',' + ty.toFixed(2) + ')">' +
      seg.icon + '</text>';
  });

  return '<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" style="width:280px;height:280px">' +
    paths +
    '<circle cx="140" cy="140" r="18" fill="white" stroke="#e2e8f0" stroke-width="3"/>' +
    '<text x="140" y="140" text-anchor="middle" dominant-baseline="middle" font-size="13" font-weight="700" fill="#1e293b">GO</text>' +
    '</svg>';
}

function swRender(container) {
  var cats = Object.values(window.VOCABULARY);
  var segments = cats.slice(0, 12);
  var totalDeg = 0;
  var spinning = false;
  var swCounts = { quick: 3, regular: 5, hard: 8 };
  var selectedLevel = 'regular';

  container.innerHTML =
    '<h2 class="section-heading">🎡 Spin the Wheel</h2>' +
    '<p class="section-sub" style="margin-bottom:0.5rem">Spin to get a random topic — then answer some questions!</p>' +
    '<div class="sw-level-row" id="sw-level-row"></div>' +
    '<div class="sw-wrap">' +
      '<div class="sw-pointer"></div>' +
      '<div class="sw-wheel-outer">' +
        '<div class="sw-wheel-svg" id="sw-wheel">' + swBuildSvg(segments) + '</div>' +
      '</div>' +
      '<div class="sw-land" id="sw-land"></div>' +
      '<div class="sw-rounds" id="sw-rounds"></div>' +
      '<button class="sw-spin-btn" id="sw-spin">Spin!</button>' +
    '</div>';

  var levelRow = container.querySelector('#sw-level-row');
  window.DIFFICULTY_LEVELS.forEach(function(lvl) {
    var btn = document.createElement('button');
    btn.className = 'sw-level-btn' + (lvl.id === selectedLevel ? ' active' : '');
    btn.textContent = lvl.icon + ' ' + lvl.label + ' (' + swCounts[lvl.id] + ')';
    btn.addEventListener('click', function() {
      selectedLevel = lvl.id;
      levelRow.querySelectorAll('.sw-level-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
    });
    levelRow.appendChild(btn);
  });

  var wheelEl = container.querySelector('#sw-wheel');
  var spinBtn = container.querySelector('#sw-spin');
  var landEl = container.querySelector('#sw-land');
  var roundsEl = container.querySelector('#sw-rounds');

  spinBtn.addEventListener('click', function() {
    if (spinning) return;
    spinning = true;
    spinBtn.disabled = true;
    landEl.textContent = '';
    roundsEl.textContent = '';

    var extraSpins = (Math.floor(Math.random() * 5) + 5) * 360;
    var anglePerSeg = 360 / segments.length;
    var segIdx = Math.floor(Math.random() * segments.length);
    // pointer is at top (270 deg from standard 0). Segment centers are at -(90) + i*angle + angle/2
    // We want segIdx's center to land at top, so we need the wheel to rotate such that that segment is at top
    var targetSegCenter = segIdx * anglePerSeg + anglePerSeg / 2;
    var targetDeg = 360 - targetSegCenter;
    // small random offset within segment
    var offset = (Math.random() - 0.5) * anglePerSeg * 0.6;
    totalDeg += extraSpins + targetDeg + offset;

    wheelEl.style.transform = 'rotate(' + totalDeg + 'deg)';

    setTimeout(function() {
      spinning = false;
      var cat = segments[segIdx];
      landEl.innerHTML = cat.icon + ' <strong>' + cat.title + '</strong>';
      roundsEl.textContent = 'Get ready for ' + swCounts[selectedLevel] + ' questions!';
      spinBtn.disabled = false;
      spinBtn.textContent = 'Spin again';
      // auto-start quiz after short pause
      setTimeout(function() {
        swRunQuiz(container, cat, selectedLevel, swCounts[selectedLevel]);
      }, 1200);
    }, 4100);
  });
}

function swRunQuiz(container, cat, level, count) {
  var allQs = cat.rounds.flatMap(function(r) { return r.questions; });
  var pool = window.pickForDifficulty(allQs, level, count || 5);
  var adapted = pool.map(function(q) {
    return {
      visual: q.visual,
      question: '<span class="russian-label">' + q.russian + '</span>',
      options: q.options,
      answer: q.english,
    };
  });

  runQuiz(container, {
    title: cat.icon + ' ' + cat.title + ' — Spin Quiz',
    questions: adapted,
    storageKey: 'spinwheel:' + cat.id,
    onExit: function() { swRender(container); },
    exitLabel: '↺ Spin again',
  });
}
