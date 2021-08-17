const $header = document.getElementById('header');
const $logo = document.getElementById('logo');
const $navbar = document.getElementById('navbar');
const $navbarToggle = document.getElementById('navbar__toggle');

$navbarToggle.addEventListener('click', () => {
  const setToggle = $navbar.classList.toggle('navbar--is-active');
  $header.classList.toggle('header--is-active');
  $logo.classList.toggle('logo--is-active');
  $navbarToggle.classList.toggle('navbar__toggle--is-active');
  if (setToggle) {
    $navbarToggle.textContent = 'close';
  } else {
    $navbarToggle.textContent = 'menu';
  }
})