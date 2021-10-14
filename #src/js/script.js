
$(document).ready(function() {


    // Remove no-js class
    $('html').removeClass('no-js');

	$('#toggleMenu').on('click', function() {

        if ( $(this).hasClass('js-open') ) {

            $('#nav > ul > li:not(#toggleMenu)').removeClass('js-showElement');
            $(this).removeClass('js-open');

            $(this).attr('aria-expanded', false);

        } else {

            $('#nav > ul > li:not(#toggleMenu)').addClass('js-showElement');
            $(this).addClass('js-open');

            $(this).attr('aria-expanded', true);

        }

		return false; 
	});

    // Add plus mark to li that have a sub menu
    $('li:has("ul") > a').append('<span class="plusMark">></span>');




    // sub menu
	// ------------------------

    // When interacting with a li that has a sub menu
    $('li:has("ul")').on('mouseover keyup click mouseleave', function(e) {

    	// If either -
    		// tabbing into the li that has a sub menu
    		// hovering over the li that has a sub menu
    	if ( e.keyCode === 9 | e.type === 'mouseover' ) {

    		// Show sub menu
    		$(this).children('ul').removeClass('js-hideElement');
            $(this).children('ul').addClass('js-showElement');
    	}

		// If mouse leaves li that has sub menu
		if ( e.type === 'mouseleave' ) {

			// hide sub menu
			$(this).children('ul').removeClass('js-showElement');
            $(this).children('ul').addClass('js-hideElement');
		}


		// If clicking on li that has a sub menu
		if ( e.type === 'click' ) {

			// If sub menu is already open
			if ( $(this).children('a').hasClass('js-openSubMenu') ) {

                // remove Open class
				$(this).children('a').removeClass('js-openSubMenu');

				// Hide sub menu
	    		$(this).children('ul').removeClass('js-showElement');
	            $(this).children('ul').addClass('js-hideElement');


			// If sub menu is closed
			} else {

                // add Open class
				$(this).children('a').addClass('js-openSubMenu');

				// Show sub menu
	    		$(this).children('ul').removeClass('js-hideElement');
	            $(this).children('ul').addClass('js-showElement');

			}

			return false;

		} // end click event

    });


    // Tabbing through Levels of sub menu
	// ------------------------

    // If key is pressed while on the last link in a sub menu
    $('li > ul > li:last-child > a').on('keydown', function(e) {


    	// If tabbing out of the last link in a sub menu AND not tabbing into another sub menu
    	if ( (e.keyCode == 9) && $(this).parent('li').children('ul').length == 0 ) {

				// Close this sub menu
        		$(this).parent('li').parent('ul').removeClass('js-showElement');
                $(this).parent('li').parent('ul').addClass('js-hideElement');


    		// If tabbing out of a third level sub menu and there are no other links in the parent (level 2) sub menu
    		if ( $(this).parent('li').parent('ul').parent('li').parent('ul').parent('li').children('ul').length > 0 
    			 && $(this).parent('li').parent('ul').parent('li').is(':last-child') ) {

    				// Close the parent sub menu (level 2) as well
    				$(this).parent('li').parent('ul').parent('li').parent('ul').removeClass('js-showElement');
                    $(this).parent('li').parent('ul').parent('li').parent('ul').addClass('js-hideElement');
    		}

    	}

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
  autoplaySpeed: 1000,

  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
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


});
