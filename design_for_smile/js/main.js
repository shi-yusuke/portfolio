
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


function PageTopAnime() {
  
	var target = $(".header-trigger");
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
