$(document).ready(function () {

  // Select
  $('.select').niceSelect();

  // Show menu mobail
  $('.open-nav-mob').on('click', function () {
    $('.nav').addClass('nav--open');
  });

  $('.nav__close').on('click', function () {
    $('.nav').removeClass('nav--open');
  });

  $('body').mouseup(function (e) {
    let modalContent = $(".nav");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $('.nav').removeClass('nav--open');
    }
  });

  // Tabs login
  $('.tabs__item').not(':first').hide();
  $('.tabs__nav-item').click(function() {
    $('.tabs__nav-item').removeClass('active').eq($(this).index()).addClass('active');
    $('.tabs__item').hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass('active');

});