document.addEventListener('DOMContentLoaded', function () {

  const images = document.querySelectorAll('.post-content article img');

  images.forEach(function (image) {

    image.addEventListener('click', function () {
      console.log('Image cliquée !');
    });

  });

});