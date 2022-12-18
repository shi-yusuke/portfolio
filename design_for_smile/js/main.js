
/*スマホ :hover 対策*/
$('body')[0].setAttribute('ontouchstart', '');
  
/*ハンバーガーメニュー 処理*/
const MenuContainer = document.querySelector('.hamburger-trigger');    
	MenuContainer.addEventListener('click', () => {
    $(".hamburger").toggleClass('active');
    $(".header-nav").toggleClass('active');
	});

/*スライドショー (フェードイン・アウト) 処理*/
const slider = $("#js-slider").find("img");
const slideLength = slider.length;

let now = 0;
let next = 1;

const fade = 3000;
const show = 6000;

slider.hide();
slider.eq(0).show();

const slideshow = () => {

  slider.eq(now % slideLength).fadeOut(fade).removeClass("zoom");
  slider.eq(next % slideLength).fadeIn(fade).addClass("zoom");

  now++;
  next++;
};

setInterval(slideshow, show);

/*ヘッダー表示切り替え アニメーション処理*/
function PageTopAnime() {
  
	var target = $(".js-header-trigger");
	var header = $(".header");
  var HEADER_HEIGHT = 96;
	var el = target.offset().top - HEADER_HEIGHT;
  var scroll = $(this).scrollTop();

		if (scroll > el) {
			header.addClass("active");
		}else{
      header.removeClass("active");
    }
}

$(window).scroll(function () {
  PageTopAnime();
});

$(window).on('load', function () {
  PageTopAnime();
});
