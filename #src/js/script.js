$(document).ready(function(){
  //the trigger on hover when cursor directed to this class
    $(".core-menu li").hover(
    function(){
      //i used the parent ul to show submenu
        $(this).children('ul').slideToggle('fast');
    }, 
      //when the cursor away 
    // function () {
    //     $('ul', this).slideUp('slow');
    // }
    );
  //this feature only show on 600px device width
    $(".hamburger-menu").click(function(){
      $(".burger-1, .burger-2, .burger-3").toggleClass("open");
        $(".core-menu").slideToggle("slow");
    });


	// Accordion  //

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

$(window).scroll(function(e) {
   if($(window).scrollTop()>=900) {
     $('.calc-btn').fadeIn(200);
   } else {
     $('.calc-btn').fadeOut(200);
   }
});

$(".slider").slick({

  // normal options...
  infinite: true,
  dots: true,
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

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
});

$(".table-slider").slick({

  // normal options...
  infinite: false,
  dots: true,
  autoplay: false,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slideToScroll: 1
  
});

$(".service-mob-slider").slick({
  infinite: false,
  dots: true,
  arrows: false,
  autoplay: false,
  slidesToShow: 1,
  slideToScroll: 1
});

$(".main-slider").slick({
  infinite: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 0,
  arrows: true,
  fade: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  slidesToShow: 1,
  slideToScroll: 1
});


$(".route-slider").slick({
  infinite: true,
  dots: true,
  autoplay: false,
  autoplaySpeed: 3000,
  speed: 0,
  arrows: true,
  slidesToShow: 1,
  slideToScroll: 1
});

$(".contact-slider").slick({
  infinite: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slideToRight: true,
  slideToScroll: 1
});

});

