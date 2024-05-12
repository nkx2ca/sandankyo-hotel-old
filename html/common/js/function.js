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


// Modal Window for Renewal
const sessionKey = "accessed";
const sessionValue = true;
/*
const modal = `
<div id="modal" class="modal-container active">
<div class="modal-body">
    <div class="modal-close">×</div>
    <div class="modal-content">
        <h1>ホテルリニューアルに伴う休業のお知らせ</h1>
        <div>
            <p class="p1">
                いつも三段峡ホテルをご利用頂き誠にありがとうございます。<br>
                誠に勝手ながら改装工事のため2024年3月より一時休業とさせていただきます。<br>
                営業再開日についてはまた改めてご案内します。<br>
                お客様には大変ご不便をお掛けいたしますが、ご了承下さいますようお願い申し上げます。<br>
                改装後も、引き続きご愛顧の程よろしくお願いいたします。
            </p>
            <p class="p2">
              お問い合わせは、下記メールアドレスまでお願いいたします。
            </p>
            <p class="contact-email">contact@sandankyo.co.jp</p>
        </div>
    </div>
</div>
`;
*/
const modal = `
<div id="modal" class="modal-container active">
    <div class="modal-body">
        <div class="modal-close">×</div>
        <div class="modal-content">
            <div class="tabs">
                <input id="all" type="radio" name="tab_item" checked>
                <label class="tab_item" for="all">日本語</label>
                <input id="english" type="radio" name="tab_item">
                <label class="tab_item" for="english">English</label>
                <div class="tab_content" id="all_content">
                    <div class="tab_content_description">
                        <h1>ホテルリニューアルに伴う休業のお知らせ</h1>
                        <div>
                            <p class="p1">
                                いつも三段峡ホテルをご利用頂き誠にありがとうございます。<br>
                                誠に勝手ながら改装工事のため2024年3月より一時休業とさせていただきます。<br>
                                営業再開日についてはまた改めてご案内します。<br>
                                お客様には大変ご不便をお掛けいたしますが、ご了承下さいますようお願い申し上げます。<br>
                                改装後も、引き続きご愛顧の程よろしくお願いいたします。
                            </p>
                            <p class="p2">
                            お問い合わせは、下記メールアドレスまでお願いいたします。
                            </p>
                            <p class="contact-email">contact@sandankyo.co.jp</p>
                        </div>
                    </div>
                </div>
                <div class="tab_content" id="english_content">
                    <div class="tab_content_description">
                        <h1>Notice Regarding the Closure of the Sandankyo Hotel due to Renewal</h1>
                        <div>
                            <p class="p1">
                              Dear valued guests,<br>
                              <br>
                              We greatly appreciate your ongoing patronage.<br>
                              Unfortunately, we have been temporarily closed for renovations from March 2024.<br>
                              We will inform you again about the date of reopening.<br>
                              We apologize for any inconvenience this may cause you, and we appreciate your understanding.<br>
                              We look forward to your continued patronage even after the renovations.<br>
                              <br>
                              Please contact us via the below e-mail if you have anything.<br>
                              <br>
                              Sincerely,<br>
                              General Manager 
                            </p>
                            <p class="contact-email">contact@sandankyo.co.jp</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

$(document).ready(function() {
  sessionStorage.clear();

  if (!sessionStorage.getItem(sessionKey)) {
    $('body').append(modal);
    sessionStorage.setItem(sessionKey, sessionValue);
    var close = $('.modal-close');
    var container = $('.modal-container');
    // Close window if the close button of the window was clicked.
	close.on('click',function(){	
		container.removeClass('active');
	});
    // Close window if the outside of the window was clicked.
	$(document).on('click',function(e) {
		if(!$(e.target).closest('.modal-body').length) {
			container.removeClass('active');
		}
	});
  } else {
    var container = $('.modal-container');
    if (container) {
        container.removeClass('active');
    }
  }
});