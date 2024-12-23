$(document).ready(function(){
    // $('.slider').bxSlider({
    //     auto: true,
    //     autoControls: true,
    //     stopAutoOnClick: true,
    //     pager: true,
    //     slideWidth: 600
    //   });
    // $('.slider').bxSlider({
    //     infiniteLoop: false,
    //     hideControlOnEnd: true,
    //     slideWidth: 600
    //   });
    // $('.slider').bxSlider({
    //     adaptiveHeight: true,
    //     slideWidth: 600
    //   });
    $('.slider').bxSlider({
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: 'Onward →',
        prevText: '← Go back'
      });
  });