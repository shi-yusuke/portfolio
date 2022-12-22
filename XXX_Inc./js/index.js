// トリガー アニメーション処理
$(window).ready(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_up,.scroll_left,.scroll_right');
	console.log(scrollAnimationElm);
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 75;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});

// ハンバーガーボタン
$(document).on('click', '.hamburger', function(){
$(this).toggleClass('active');
$('.header-nav__list').toggleClass('active');
});
