$(document).ready(function(){
  // Add class on parent which 'li' children has submenu
  $('ul.submenu').parents('li').addClass('megamenu');
  
  //Menu ICon Append prepend for responsive
  $(window).on('resize', function(){
    if ($(window).width() < 1024) {
      if(!$('#menu_trigger').length){
        $('#mainmenu').prepend('<a href="#" id="menu_trigger" class="menulines-button"><span class="menulines"></span></a>');
      }
      if(!$('.navtrigger').length){
        $('.megamenu > a').append('<span class="navtrigger"></span>');
      }
      if(!$('.mobile-menu').length){
        $('.menu').wrap('<div class="mobile-menu"></div>');
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
  }).resize();
  
  
  // Mobile menu on click open
  $(document).on('click',"#menu_trigger", function(){
    if($('.megamenu').hasClass("sub-open")){
      $('.megamenu ').removeClass('sub-open');
      $('.mobile-menu').delay(350).slideToggle();
      $(this).toggleClass('menuopen');
    } else {
      $(this).toggleClass('menuopen');
      $(this).next('.mobile-menu').slideToggle();
    }
    return false;
  });
  
  // While open submenu add class
  $(document).on('click', '.navtrigger', function(){
    $(this).parents('li').addClass('sub-open');
    return false;
  });
  
  // Back to menu in mobile
  $(document).on('click', '.back-trigger', function(){
    $(this).closest('li').removeClass('sub-open');
    return false;
  });
  
  
});