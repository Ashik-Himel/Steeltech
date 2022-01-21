// Navigation Menu
const navbarCollapse = document.querySelector('.navbar-collapse');
const navlink = document.querySelectorAll('.nav-link');

function navClose() {
  navbarCollapse.classList.remove('show');
}
navlink.forEach(n => n.addEventListener('click', navClose));

// Isotope JS
$('.tab').isotope({
  itemSelector: '.tab-item',
  masonry: {}
});
$('.tab-titles span').click(function(){
  $('.tab-titles span').removeClass('active');
  $(this).addClass('active');

  var selector = $(this).attr('data-filter');
  $('.tab').isotope({
      filter:selector
  });
  return false;
});

