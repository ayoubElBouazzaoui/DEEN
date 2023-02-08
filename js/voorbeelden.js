//--------voorbeelden----

 // Create an array of image objects
 const images = [
    { src: "images/voorbeeld1.png", alt: "image 1" },
    { src: "images/voorbeeld2.png", alt: "image 2" },
    { src: "images/voorbeeld3.png", alt: "image 3" },
    { src: "images/voorbeeld4.jpg", alt: "image 4" },
    { src: "images/voorbeeld5.png", alt: "image 5" },
    { src: "images/voorbeeld6.png", alt: "image 6" }
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
  
  
  