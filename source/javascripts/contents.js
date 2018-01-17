$(function(){
  // drw-btn
  var state = false;
  var scrollpos;
  $("#drw-btn, #drw-layer").click(function(){
    if(state == false) {
      scrollpos = $(window).scrollTop();
      $('body').addClass('fixed').css({'top': -scrollpos});
      $("#drw-btn").addClass('open');
      state = true;
    } else {
      $('body').removeClass('fixed').css({'top': 0});
      window.scrollTo( 0 , scrollpos );
      $("#drw-btn").removeClass('open');
      state = false;
    }
    // $(this).toggleClass('open');
    $("#contents-header-nav").toggleClass('slide-in');
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

  $('#menu-contents .tab-menu[id != "shinonome-menu"]').hide();

    // タブをクリックすると
    $("a").click(function(){
        // 一度全てのコンテンツを非表示にする
        $("#menu-contents  .tab-menu").hide();

        // 次に選択されたコンテンツを再表示する
        $($(this).attr("href")).show();

        // 現在のcurrentクラスを削除
        $(".current").removeClass("current");

        // 選択されたタブ（自分自身）にcurrentクラスを追加
        $(this).addClass("current");


        return false;
    });
});
