import './css/style.css';

const themeSwitcherEl = document.getElementById('theme-switcher-button');

themeSwitcherEl.addEventListener('click', function() {
  const bodyEl = document.getElementsByTagName('body')[0];

  if (bodyEl.classList.contains('light-theme')) {
    bodyEl.classList.remove('light-theme');
  } else {
    bodyEl.classList.add('light-theme');
  }
});
