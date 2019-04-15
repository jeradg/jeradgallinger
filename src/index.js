import './css/style.css';
import './favicon.ico';

/*
 * (Recursively) simulate the user typing a command in
 * the terminal by revealing the characters one by
 * one with a slight delay.
 */
function revealCharacters(el, chars, callback) {
  if (!el || !chars || !callback) throw new Error('Missing a required argument for revealCharacters');
  if (!chars.length) return callback();

  el.textContent += chars[0];

  return setTimeout(function() {
    revealCharacters(el, chars.slice(1), callback);
  }, 70)
}

/*
 * When all characters have been revealed, simulate
 * pressing "Enter" and reveal the rest of the page.
 */
function onComplete() {
  return setTimeout(function() {
    document.getElementById('terminal-loading-line').classList.remove('terminal-line-active');
    document.getElementsByTagName('body')[0].classList.remove('loading');
  }, 70)
}

window.onload = function() {
  const loadingLineEl = document.getElementById('terminal-loading-line');
  const loadingCommandEl = document.getElementById('terminal-loading-command');
  const loadingCommandText = loadingCommandEl.textContent;
  const chars = loadingCommandText.split('');

  loadingCommandEl.textContent = '';
  loadingCommandEl.classList.remove('hidden');

  loadingLineEl.classList.add('terminal-line-active')

  revealCharacters(loadingCommandEl, chars, onComplete);
};
