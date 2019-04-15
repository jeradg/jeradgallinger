import './css/style.css';
import './favicon.ico';

const loadingCommandEl = document.getElementById('terminal-loading-command');
const loadingCommandText = loadingCommandEl.textContent;

loadingCommandEl.textContent = '';

const chars = loadingCommandText.split('');

function onLoaded() {
  return setTimeout(function() {
    document.getElementById('terminal-loading-line').classList.remove('terminal-line-active');
    document.getElementsByTagName('body')[0].classList.remove('loading');
  }, 70)
}

function revealCharacters(el, chars, callback) {
  if (!chars.length && callback) return callback();

  const char = chars[0];
  el.textContent += char;

  return setTimeout(function() {
    revealCharacters(el, chars.slice(1), callback);
  }, 70)
}

loadingCommandEl.classList.remove('hidden');

revealCharacters(loadingCommandEl, chars, onLoaded);
