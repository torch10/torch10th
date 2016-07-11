$( document ).ready(function() {
  $(".goto").click(function(e) {
    e.preventdefault();
    $(".wrapper").animate({
        scrollTop: $("#here").offset().top
      }, 1000);
  });
});
