$(window).on("scroll", function(){
  var $scroll = $(window).scrollTop();
  if ($scroll >= 744) {
    $(".navbar-fixed-top .navbar-brand .img-fluid").css("height", "0");
  } else {
    $(".navbar-fixed-top .navbar-brand .img-fluid").css("height", "39");
  }
});
