
  let hero = setInterval(function () {
  heroSlides();
  }, 3000);

  function heroSlides() {
      let elements = $('.hero__img');

      for (let i = 0; i < elements.length; i++) {
          if (i < 3) {
              if (elements[i].classList.contains('img-show')) {
                  elements[i].classList.remove('img-show');
                  elements[i + 1].classList.add('img-show');
                  break;
              }
          } else {
              elements[i].classList.remove('img-show');
              elements[0].classList.add('img-show');
              break;
          }
      }
  }

  $(".contact-slider").slick({
  infinite: true,
  dots: false,
  autoplay: false,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slideToRight: true,
  slideToScroll: 1
});

$(function() {
	
	//BEGIN
	$(".accordion__title").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("accordion-active")) {
			$(".accordion__content").slideUp(400);
			$(".accordion__title").removeClass("accordion-active");
			$('.accordion__arrow').removeClass('accordion__rotate');
		}

		$this.toggleClass("accordion-active");
		$this.next().slideToggle();
		$('.accordion__arrow',this).toggleClass('accordion__rotate');
	});
	//END
	
});
$('.tab-title>a').click(function(e){
    e.preventDefault();
    var index = $(this).parent().index();
    $(this).parent().addClass('active')
         .siblings().removeClass('active')
         .parent('ul.tabs').siblings('.tabs-content').children('.content').removeClass('active')
         .eq(index).addClass('active');
  });