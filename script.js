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

// CounterUp JS
$('.counter').counterUp({
  time: 1000
});

//Messenger Chat Plugin
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "110159741559451");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function() {
  FB.init({
    xfbml            : true,
    version          : 'v12.0'
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));