
/*スマホ :hover 対策*/
$('body')[0].setAttribute('ontouchstart', '');
  
/*ハンバーガーメニュー 処理*/
const MenuContainer = document.querySelector('.hamburger');

MenuContainer.addEventListener('click', () => {
  $(".hamburger").toggleClass('active');
  $(".nav").toggleClass('active');
});

$(window).scroll(function () {
  PageTopAnime();
});

$(window).on('load', function () {
  PageTopAnime();
});
