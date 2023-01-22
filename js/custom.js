
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
      "images/slide/slide3.png"
    ],  {duration: 2000, fade: 750});
    
  })(window.jQuery);


 //--------voorbeelden----
 const images = document.querySelectorAll('.image');
 const popup = document.getElementById('image-popup');
 const popupImage = document.getElementById('popup-image');
 
 images.forEach(image => {
   image.addEventListener('click', e => {
     popupImage.src = e.target.src;
     popup.style.display = 'block';
   });
 });
 
 popup.addEventListener('click', e => {
   if (e.target === popup) {
     popup.style.display = 'none';
   }
 });
 

 //---------------------------
 $(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var formData = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "submit.php",
      data: formData,
      success: function(response){
        console.log(response);
        alert("Thank you for contact us. We will contact you soon!");
      },
      error: function(){
        alert("An error occurred. Please try again later.");
      }
    });
  });
});












  

