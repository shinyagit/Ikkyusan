$(function(){
  $("#header-wrapper").vegas({
    slides: [
      { src: "/images/shinonome1.jpg" },
      { src: "/images/shinonome2.jpg" },
      { src: "/images/ujina1.jpg" },
      { src: "/images/ujina2.jpg" },
    ],
    overlay: '/javascripts/lib/vegas/overlays/01.png',
  });


  // drw-btn
  var state = false;
  var scrollpos;
  $("#drw-btn, #drw-layer").click(function(){
    if(state == false) {
      scrollpos = $(window).scrollTop();
      $('body').addClass('fixed').css({'top': -scrollpos});
      $("#drw-btn").addClass('open color');
      state = true;
    } else {
      $('body').removeClass('fixed').css({'top': 0});
      window.scrollTo( 0 , scrollpos );
      $("#drw-btn").removeClass('open color');
      state = false;
    }
    // $(this).toggleClass('open');
    $("#header-nav").toggleClass('slide-in');
    $("#drw-layer").toggleClass('cover');
  });


  var menuHeight = $("#header-bar").height();
var startPos = 0;
$(window).scroll(function(){
  var currentPos = $(this).scrollTop();
  if (currentPos > startPos) {
    if($(window).scrollTop() >= 200) {
      $("#header-bar").css("top", "-" + menuHeight + "px");
    }
  } else {
    $("#header-bar").css("top", 0 + "px");
  }
  startPos = currentPos;
});
});
