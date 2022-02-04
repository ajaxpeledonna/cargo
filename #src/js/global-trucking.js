$(function() {
	
	//BEGIN
	$(".accordion-row").on("click", function(e) {
        
		e.preventDefault();
		var $this = $(this);
        
		if (!$this.hasClass("accordion-active")) {
            $(".accordion__content").slideUp(400);
			$(".accordion-row").removeClass("accordion-active");
		}
        $this.find(".accordion__content").slideToggle(400);
		$this.toggleClass("accordion-active");
		
	});

	//END
	
});