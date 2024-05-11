$(function() {

  // 一定数スクロールしたらpagetopを表示
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 300) {
      $(".pagetop").fadeIn("fast");
    } else {
      $(".pagetop").fadeOut("fast");
    }

    // フッター上でpagetop,ご予約,お問い合わせボタンを固定
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();

    if ( scrollHeight - scrollPosition  <= footHeight ) {
      $(".btn-reserve, .btn-contact, .pagetop").css({
        "position":"absolute",
      });
    } else {
      $(".btn-reserve, .btn-contact, .pagetop").css({
        "position":"fixed",
      });
    }
  });


  // スムーススクロール
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

});

//ドロワーメニュー
$(document).ready(function() {
  $('.drawer').drawer();
});