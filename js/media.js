// Visual + audio helpers shared across games.
//
// IMAGES: vocab/story items currently use an emoji `visual` field. To
// switch a word to a real generated image later, just add an `image`
// field (a URL/path) alongside `visual` on that question object —
// window.visualHtml() below already prefers `image` over `visual` and
// falls back to the emoji automatically, so no game code needs to change.
window.visualHtml = function (item, sizeClass) {
  sizeClass = sizeClass || '';
  if (item && item.image) {
    return '<img class="vocab-image ' + sizeClass + '" src="' + item.image + '" alt="' + (item.english || '') + '">';
  }
  return '<span class="vocab-emoji ' + sizeClass + '">' + ((item && item.visual) || '❓') + '</span>';
};

// LISTENING: uses the browser's built-in speech synthesis, so no audio
// files need to be generated or hosted. Works offline-free in any
// modern browser; silently does nothing if unsupported.
window.speakText = function (text) {
  if (!('speechSynthesis' in window) || !text) return;
  try {
    var clean = text.replace(/<[^>]+>/g, '');
    var utter = new SpeechSynthesisUtterance(clean);
    utter.lang = 'en-GB';
    utter.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  } catch (e) { /* speech synthesis not available */ }
};

// Renders a small speaker button. Pass the exact text to speak.
window.speakButtonHtml = function (text, extraClass) {
  return '<button type="button" class="speak-btn ' + (extraClass || '') + '" data-speak="' + String(text).replace(/"/g, '&quot;') + '">🔊</button>';
};

// Call after inserting HTML that contains speak-button markup, or
// data-speak attributes on any element, to wire up click-to-listen.
window.attachSpeakButtons = function (container) {
  if (!container) return;
  container.querySelectorAll('[data-speak]').forEach(function (btn) {
    if (btn.__speakBound) return;
    btn.__speakBound = true;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      window.speakText(btn.getAttribute('data-speak'));
    });
  });
};
