$(function() {
	
	//BEGIN
	$(".accordion-row").on("click", function(e) {

		//e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("accordion-active")) {
			$(".accordion__content").hide(200);
			$(".accordion__title").removeClass("accordion-active");
			$('.accordion__btn').removeClass('accordion__rotate');
		}

		$this.toggleClass("accordion-active");
		$this.next().slideToggle();
		$('.accordion__btn',this).toggleClass('accordion__rotate');
	});
    $(".accordion__close").on("click", function(e) {
        $(".accordion-row").toggleClass("accordion-active");
        $(".accordion__content").hide(200);
			$(".accordion__title").removeClass("accordion-active");
			$('.accordion__btn').removeClass('accordion__rotate');
    });
	//END
	
});