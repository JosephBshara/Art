document.addEventListener("DOMContentLoaded", function() {
  // Common function to populate gallery
  function populateGallery(galleryClass, imageArray) {
    const gallery = document.querySelector(galleryClass);
    if (!gallery) return;  // Skip if gallery element is not on the page
    
    const popup = document.getElementById("popup");
    const largeImage = document.getElementById("largeImage");

    imageArray.forEach(imgSrc => {
      const imgWrapper = document.createElement("div");

      const img = document.createElement("img");
      img.src = imgSrc;
      img.onclick = function() {
        largeImage.src = imgSrc;
        popup.style.display = "block";
      };

      const textDiv = document.createElement("div");


      imgWrapper.appendChild(img);
      imgWrapper.appendChild(textDiv);

      gallery.appendChild(imgWrapper);
    });

    popup.onclick = function() {
      popup.style.display = "none";
    };
  }

  // Populate different galleries
  populateGallery(".figure-drawings-gallery", ["drawing1.png", "drawing9.jpg", "drawing8.jpg", "drawing7.jpg"]);
  populateGallery(".water-color-gallery", ["drawing2.png", "drawing4.png", "drawing3.png"]);
  populateGallery(".in-progress-gallery", ["drawing11.jpg", "drawing10.jpg"]);
  populateGallery("#gallery", ["drawing5.jpg", "drawing6.jpg", "drawing7.jpg", "drawing8.jpg", "drawing9.jpg", "drawing10.jpg", "drawing11.jpg"]);

  // Code to set the active navigation link
  let links = document.querySelectorAll('.navbar ul li a');
  let currentPage = window.location.pathname.split('/').pop();
  
  links.forEach((link) => {
    let linkPage = link.getAttribute('href');
    if (currentPage === linkPage) {
      link.parentElement.classList.add('active');
    } else {
      link.parentElement.classList.remove('active');
    }
  });
});
