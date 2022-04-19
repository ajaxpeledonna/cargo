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

  $(".docs-slider").slick({

  // normal options...
  infinite: true,
  dots: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  // the magic
  responsive: [{

      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        infinite: true
      }

    }, {

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        dots: true
      }

    }, {

      breakpoint: 500,
      settings: {
        dots: false
      }

    },
    {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
});
