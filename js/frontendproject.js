jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})
(document).ready(function($){
var slider = $('.bxslider').bxSlider({
    mode: 'fade'
  });
  
  $('#slider-next').click(function(){
    slider.goToNextSlide();
    return false;
  });
  
  $('#slider-count').click(function(){
    var count = slider.getSlideCount();
    alert('Slide count: ' + count);
    return false;
  });
})