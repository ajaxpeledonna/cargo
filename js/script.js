$(document).ready(function(){
  // //the trigger on hover when cursor directed to this class
  //   $(".core-menu li").hover(
  //   function(){
  //     //i used the parent ul to show submenu
  //       $(this).children('ul').slideToggle('fast');
  //   }, 
  //     //when the cursor away 
  //   // function () {
  //   //     $('ul', this).slideUp('slow');
  //   // }
  //   );
  // //this feature only show on 600px device width
  //   $(".hamburger-menu").click(function(){
  //     $(".burger-1, .burger-2, .burger-3").toggleClass("open");
  //       $(".core-menu").slideToggle("slow");
  //   });


$('.info__content-toggle').on("click", function(e){
    e.preventDefault();
    $('.hide').slideToggle('slow');
    $(this).text( $(this).text() == 'Скрыть' ? "Показать больше" : "Скрыть");
    $('.info__content-toggle').toggleClass('rotate', 1000);
    if ($('.info__content-toggle').hasClass('rotate')) {
      $('.info__arrow').css('transform','rotate(0deg)');
      $('.info__arrow').css('margin','0 0 -8px 4px');
		} else {
      $('.info__arrow').css('transform','rotate(180deg)');
      $('.info__arrow').css('margin','-7px 0 0 4px');
		} 
});



	$('.docs__content-toggle').on("click", function(){
		$('.docs__wrap').toggleClass('hide-docs', 2000);	
		if ($('.docs__wrap').hasClass('hide-docs')) {
			$('.docs__content-toggle').html('Показать больше');
      $('.docs__arrow').css('transform','rotate(180deg)');
      $('.docs__arrow').css('margin','-8px 0 0 4px');
		} else {
			$('.docs__content-toggle').html('Скрыть');
      $('.docs__arrow').css('transform','rotate(0deg)','margin','0 0 -4px 4px');
      $('.docs__arrow').css('margin','0 0 -10px 4px');
		}		
		return false;
	});	


  // $('.info__content-toggle').click(function(){
	// 	$('.info__wrap').toggleClass('hide');	
	// 	if ($('.info__wrap').hasClass('hide')) {
	// 		$('.info__content-toggle').html('Показать больше');
	// 	} else {
	// 		$('.info__content-toggle').html('Скрыть');
	// 	}		
	// 	return false;
	// });	
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

$(".table-slider").slick({

  // normal options...
  infinite: false,
  dots: true,
  autoplay: false,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slideToScroll: 1,
  
  responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }

    }]
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
  slideToScroll: 1,
  responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }

    }]
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

jQuery(document).ready(function($){
    //open/close mega-navigation
    $('.cd-dropdown-trigger').on('click', function(event){
      event.preventDefault();
      toggleNav();
    });
    
    //close meganavigation
    $('.cd-dropdown .cd-close').on('click', function(event){
      event.preventDefault();
      toggleNav();
    });
    
    //on mobile - open submenu
    $('.has-children').children('a').on('click', function(event){
      //prevent default clicking on direct children of .has-children 
      event.preventDefault();
      var selected = $(this);
      selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
    });
    
    // //on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
    // var submenuDirection = ( !$('.cd-dropdown-wrapper').hasClass('open-to-left') ) ? 'right' : 'left';
    // $('.cd-dropdown-content').menuAim({
    //       activate: function(row) {
    //         $(row).children().addClass('is-active').removeClass('fade-out');
    //         if( $('.cd-dropdown-content .fade-in').length == 0 ) $(row).children('ul').addClass('fade-in');
    //       },
    //       deactivate: function(row) {
    //         $(row).children().removeClass('is-active');
    //         if( $('li.has-children:hover').length == 0 || $('li.has-children:hover').is($(row)) ) {
    //           $('.cd-dropdown-content').find('.fade-in').removeClass('fade-in');
    //           $(row).children('ul').addClass('fade-out')
    //         }
    //       },
    //       exitMenu: function() {
    //         $('.cd-dropdown-content').find('.is-active').removeClass('is-active');
    //         return true;
    //       },
    //       submenuDirection: submenuDirection,
    //   });
    
    //submenu items - go back link
    $('.go-back').on('click', function(){
      var selected = $(this),
        visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
      selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
    }); 
    
    function toggleNav(){
      var navIsVisible = ( !$('.cd-dropdown').hasClass('dropdown-is-active') ) ? true : false;
      $('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
      $('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
      if( !navIsVisible ) {
        $('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
          $('.has-children ul').addClass('is-hidden');
          $('.move-out').removeClass('move-out');
          $('.is-active').removeClass('is-active');
        });	
      }
    }
    
    //IE9 placeholder fallback
    //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
    // if(!Modernizr.input.placeholder){
    //   $('[placeholder]').focus(function() {
    //     var input = $(this);
    //     if (input.val() == input.attr('placeholder')) {
    //       input.val('');
    //       }
    //   }).blur(function() {
    //      var input = $(this);
    //       if (input.val() == '' || input.val() == input.attr('placeholder')) {
    //       input.val(input.attr('placeholder'));
    //       }
    //   }).blur();
    //   $('[placeholder]').parents('form').submit(function() {
    //       $(this).find('[placeholder]').each(function() {
    //       var input = $(this);
    //       if (input.val() == input.attr('placeholder')) {
    //          input.val('');
    //       }
    //       })
    //   });
    // }
    });

