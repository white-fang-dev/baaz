const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeBtn = document.querySelector('.close-btn');
const backDrop = document.querySelector('.backdrop');

hamburgerBtn.addEventListener('click', function () {
  hamburgerMenu.classList.add('open');
  backDrop.classList.add('backdrop-open');
});

function close() {
  hamburgerMenu.classList.remove('open');
  backDrop.classList.remove('backdrop-open');
}

closeBtn.addEventListener('click', close);
backDrop.addEventListener('click', close);
