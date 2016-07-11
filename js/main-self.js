$(document).on('ready', function() {
  $(".goto").click(function() {
    $('body,html').animate({
        scrollTop: $("#here").offset().top
      }, 1000);
  });

});

$(document).on('ready', function() {
  $('.variable-width').slick({
  breakpoint: 1024,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  autoplay: false,
  });

  $('.single-item').slick();

});
