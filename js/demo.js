function counter() {
    var oTop;
    if ($('.counterUp').length !== 0) {
        oTop = $('.counterUp').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
        $('.counterUp').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 1000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
        });
    }
}
counter();
$(document).ready(function(){
    $('.bxslider').bxSlider({
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: 'Onward →',
        prevText: '← Go back'
      });
  });
