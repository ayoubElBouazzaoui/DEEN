
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

 // Create an array of image objects
const images = [
  { src: "images/al-oemma.png", alt: "image 1" },
  { src: "images/Youssef_El_Yaghmouri.png", alt: "image 2" },
  { src: "images/Youssef_DOel_Bereikt.png", alt: "image 3" },
  { src: "images/Lluka_menu_flyer.png", alt: "image 4" },
  { src: "images/ijs.png", alt: "image 5" }
];

// Get the container element where the images will be added
const imageGrid = document.querySelector(".image-grid");

// Loop through the images array
images.forEach((image) => {
  // Create an image element
  const img = document.createElement("img");
  // Set the src and alt attributes
  img.src = image.src;
  img.alt = image.alt;
  // Add the class to the image
  img.classList.add("image");
  // Add the image to the container
  imageGrid.appendChild(img);
});


const imagesInGrid = document.querySelectorAll('.image');
const popupImage = document.querySelector('#popup-image');
const imagePopup = document.querySelector('#image-popup');

imagesInGrid.forEach(img => {
    img.addEventListener('click', (e) => {
        imagePopup.style.display = 'block';
        popupImage.src = e.target.src;
    });
});


imagePopup.addEventListener('click', (e) => {
  imagePopup.style.display = 'none';
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


//------------Wallpapers--------------------


let wallpapers = document.querySelectorAll('.wallpaper');

wallpapers.forEach(wallpaper => {
  let downloadButton = document.createElement('a');
  downloadButton.innerText = 'Download';
  downloadButton.classList.add('download-button');
  downloadButton.href = wallpaper.dataset.downloadUrl;
  downloadButton.download = true;

  wallpaper.parentNode.appendChild(downloadButton);
});





  

