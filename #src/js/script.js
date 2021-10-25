$(document).ready(function(){
  //the trigger on hover when cursor directed to this class
    $(".core-menu li").hover(
    function(){
      //i used the parent ul to show submenu
        $(this).children('ul').slideDown('slow');
    }, 
      //when the cursor away 
    function () {
        $('ul', this).slideUp('slow');
    });
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

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
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
  dots: false,
  autoplay: false,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slideToScroll: 1
  
});

});

