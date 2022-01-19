const navbarCollapse = document.querySelector('.navbar-collapse');
const navlink = document.querySelectorAll('.nav-link');

function navClose() {
  navbarCollapse.classList.remove('show');
}
navlink.forEach(n => n.addEventListener('click', navClose));