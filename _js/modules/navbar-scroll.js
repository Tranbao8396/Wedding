$(window).on("scroll", function(){
  var $scroll = $(window).scrollTop();
  if ($scroll >= 744) {
    $(".navbar-fixed-top .container-fluid").css("flex-direction", "row");
  } else {
    $(".navbar-fixed-top .container-fluid").css("flex-direction", "column");
  }
});
