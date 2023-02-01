
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".navbar").addClass("sticky-nav");
        } else {
            $(".navbar").removeClass("sticky-nav");
        }
    });

    // BACKSTRETCH SLIDESHOW
    $('#section_1').backstretch([
      "images/slide/slide1.png", 
      "images/slide/slide2.png",
      "images/slide/slide3.png",
      "images/slide/slide4.png",
      "images/slide/slide5.png",
      "images/slide/slide6.png",
    ],  {duration: 1000, fade: 750});
    
  })(window.jQuery);





  

