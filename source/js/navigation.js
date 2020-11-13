const navMain = document.querySelector('.main-nav');
const button = document.querySelector('.header__nav-button');
const Y_SIZE = 1050;

button.classList.remove('visually-hidden');
navMain.classList.add('main-nav--hidden');

button.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--hidden');
  button.classList.toggle('header__nav-button--close');
  button.classList.toggle('header__nav-button--opened');
});
