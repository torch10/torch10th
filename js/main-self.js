$( document ).ready(function() {
  $(".goto>a").click(function(e) {
    e.preventDefault();
    $("body").animate({
        scrollTop: $("#here").offset().top
      }, 1000);
  });
});
