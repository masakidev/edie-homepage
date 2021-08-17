const $navbarToggle = document.getElementById('navbar__toggle');
const $navbar = document.getElementById('navbar');

$navbarToggle.addEventListener('click', () => {
  $navbar.classList.toggle('navbar__is-active')
})