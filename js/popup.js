
//Попап
$('.calc-btn').click(function (event) {
	$('.popup').fadeIn(400);
	$('body').addClass('lock');
	$('.popup__form').show();
	$('.popup-form-success').hide();
});
$('.popup__close-btn').on('click', function (event) {
	event.preventDefault();
	$('.popup').fadeOut(400);
	$('body').removeClass('lock');
	$('[required]').removeClass('error');
});
 
jQuery.validator.addMethod("checkMaskPhone", function(value, element) {
    return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
});

jQuery.validator.addMethod("checkMaskEmail", function(value, element) {
  return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test( value );
});

	var valid = $('#popup-form').validate({
		errorPlacement(error, element) {
			return true;
		},
		rules: {
			tel: {
				required: true,
				checkMaskPhone: true
			},
			name: {
				required: true,
			},
			email: {
				required: true,
                email: true
			}

		},
        
        // messages: {
        //     tel: {
        //         required: "Неправильно указан тел"
        //     }
        // },

		submitHandler(form) {
			var th = $(form);
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: th.serialize()
			}).done(function () {
				$('.popup__form').hide();
				$('.popup-form-success').fadeIn(400);
				setTimeout(function () {
					// Done Functions
					th.trigger("reset");
				}, 1000);
			});
			valid.resetForm();
			return false;
		}

	});


 $('#tel').inputmask("+7(999)999-9999");