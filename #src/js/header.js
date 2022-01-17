$(document).ready(function(){
  // Add class on parent which 'li' children has submenu
  $('ul.submenu').parents('li').addClass('megamenu');
  
  //Menu ICon Append prepend for responsive
  if ($(window).width() < 1180) {
      if(!$('#menu_trigger').length){
        $('#mainmenu').prepend('<div id="menu_trigger" class="menulines-button hamburger-menu"><div class="bar"></div></div>');
      }
      if(!$('.navtrigger').length){
        $('.megamenu > a').append('<span class="navtrigger"></span>')
      }
      if(!$('.mobile-menu').length){
        $('.mob-wrapper').wrap('<div class="mobile-menu"></div>')
      }
      if(!$('.submenu > .backmenu-row').length){
        $('.submenu').each(function(){
          var subvalue = $(this).prev('a').text();
          //$(this).prepend('<a href="#" class="back-trigger">'+subvalue+'</a>');
          $(this).prepend('<div class="backmenu-row"><a href="#" class="back-trigger"></a><em>'+subvalue+'</em></div>');
        });
      }
    } else {
      $("#menu_trigger").remove();
      $('.navtrigger').remove();
      $('.menu').unwrap('.mobile-menu');
      $('.back-trigger').remove();
      $('.back-trigger').remove();
    }
  
  
  // Mobile menu on click open
  $(document).on('click',"#menu_trigger", function(){
    if($('.megamenu').hasClass("sub-open")){
      $('.megamenu ').removeClass('sub-open');
      $('.mobile-menu').delay(350).slideToggle();
      $('#menu_trigger .bar').toggleClass('animate');
      $(this).toggleClass('menuopen');
    } else {
      $(this).toggleClass('menuopen');
      $('#menu_trigger .bar').toggleClass('animate');
      $(this).next('.mobile-menu').slideToggle();
    }
    return false;
  });

  // While open submenu add class
  $(document).on('click', '.navtrigger', function(){
    $(this).parents('li').addClass('sub-open');
    return false;
  })
  
  // Back to menu in mobile
  $(document).on('click', '.backmenu-row', function(){
    $(this).closest('li').removeClass('sub-open');
    return false;
  })
  

  if ($(window).width() > 767) {
  $(window).scroll(function(e) {
   if($(window).scrollTop()>=900) {
     $('.calc-btn').fadeIn(200);
   } else {
     $('.calc-btn').fadeOut(200);
   }
});
}


  
})

