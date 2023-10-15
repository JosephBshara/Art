
document.addEventListener("DOMContentLoaded", function() {
    // Initialize navbar and main content for mobile view
    if (window.innerWidth <= 768) {
      const navbar = document.querySelector('.navbar');
      const mainContent = document.querySelector('.main-content');
      navbar.style.height = "15vw";
      mainContent.style.paddingTop = "8vw";
    }
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

// Toggle menu items' visibility and navbar size
document.querySelector('.art-circle').addEventListener('click', function() {
  if (window.innerWidth <= 768) {
  const menuItems = document.querySelectorAll('.navbar ul li');
  const navbar = document.querySelector('.navbar');
  const mainContent = document.querySelector('.main-content');
  const artCircle = document.querySelector('.art-circle');
  
  if (navbar.style.height === "15vw") {
    navbar.style.setProperty('height', '7vw', 'important');  
    mainContent.style.setProperty('padding-top', '0.5vw', 'important');
    artCircle.style.setProperty('width', '8vw', 'important');  // Change size
    artCircle.style.setProperty('height', '8vw', 'important');  // Change size
    artCircle.style.setProperty('left', '10vw', 'important');  // Push it up

    artCircle.style.setProperty('font-size', '3.5vw', 'important');  // Change font size
    artCircle.style.setProperty('line-height', '8vw', 'important');  // Change line height

    menuItems.forEach(item => {
      item.style.display = "none";
    });
  } else {
    navbar.style.setProperty('height', '15vw', 'important');  
    mainContent.style.setProperty('padding-top', '8vw', 'important');
    artCircle.style.setProperty('width', '11.75vw', 'important');  // Restore size
      artCircle.style.setProperty('height', '11.75vw', 'important');  // Restore size
      artCircle.style.setProperty('font-size', '5.8754vw', 'important');  // Restore font size
      artCircle.style.setProperty('line-height', '11.75vw', 'important');  // Restore line height
      artCircle.style.setProperty('top', '50%', 'important');  // Reset to middle


    menuItems.forEach(item => {
      item.style.display = "block";
    });
  }
  }
});

