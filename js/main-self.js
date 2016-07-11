$(document).on('ready', function() {
  $('.multiple-items').slick({
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
