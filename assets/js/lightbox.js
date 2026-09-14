document.addEventListener('DOMContentLoaded', function () {

  const images = document.querySelectorAll('.post-content article img');

  images.forEach(function (image) {

    image.addEventListener('click', function () {

      // Create the lightbox
      const lightbox = document.createElement('div');
      lightbox.classList.add('lightbox');

      // Create the enlarged image
      const enlargedImage = document.createElement('img');
      enlargedImage.src = image.src;

      // Add the image to the lightbox
      lightbox.appendChild(enlargedImage);

      // Add the lightbox to the page
      document.body.appendChild(lightbox);

      // Close the lightbox when clicking on the background
      lightbox.addEventListener('click', function () {
        lightbox.remove();
      });

    });

  });

});