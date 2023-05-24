const navbarToggle = document.getElementById('navbar-toggle');
const navMenu = document.getElementById('nav-menu');

navbarToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});