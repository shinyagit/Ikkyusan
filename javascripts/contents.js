$(function(){var e,s=!1;$("#drw-btn, #drw-layer").click(function(){0==s?(e=$(window).scrollTop(),$("body").addClass("fixed").css({top:-e}),$("#drw-btn").addClass("open"),s=!0):($("body").removeClass("fixed").css({top:0}),window.scrollTo(0,e),$("#drw-btn").removeClass("open"),s=!1),$("#contents-header-nav").toggleClass("slide-in"),$("#drw-layer").toggleClass("cover")});var o=$("#header-bar").height(),n=0;$(window).scroll(function(){var e=$(this).scrollTop();e>n?$(window).scrollTop()>=200&&$("#header-bar").css("top","-"+o+"px"):$("#header-bar").css("top","0px"),n=e}),$('#menu-contents .tab-menu[id != "shinonome-menu"]').hide(),$("a").click(function(){return $("#menu-contents  .tab-menu").hide(),$($(this).attr("href")).show(),$(".current").removeClass("current"),$(this).addClass("current"),!1})});