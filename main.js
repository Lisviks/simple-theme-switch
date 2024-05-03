const themeBtn = document.querySelector('#theme-btn');
const body = document.querySelector('body');

themeBtn.addEventListener('click', (e) => {
  if (body.classList.contains('light')) {
    body.classList.remove('light');
    body.classList.add('dark');
  } else if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
  }
});
