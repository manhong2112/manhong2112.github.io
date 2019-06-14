
$(window).scroll(function (event) {
   var scroll = $(window).scrollTop();
  if (scroll > 300) {
     $('#back-to-top').addClass('btt-visible');
  } else {
     $('#back-to-top').removeClass('btt-visible');
  }

  var footerOffset = $('.mdl-mini-footer').offset().top;
  var windowHeight = $( window ).height();
  if (scroll > footerOffset - windowHeight + 42) {
     $('#back-to-top').addClass('btt-docked');
  } else {
     $('#back-to-top').removeClass('btt-docked');
  }
});
