$(window).on('scroll', function(){

  if($(document).scrollTop() > 50){
    
    $("nav").addClass('navShrink')
    $('nav').removeClass('navGrow');
  } else {
    $("nav").addClass('navGrow');
    $("nav").removeClass('navShrink');
  }
  // } else {
  //     $("nav").data('size', 'big')
  //     $("nav").stop().animate({
  //       height: '100px'
  //     }, 300)
    
  // }
})