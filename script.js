document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");
    const popup = document.getElementById("popup");
    const largeImage = document.getElementById("largeImage");
  
    // Sample image data. Replace with your actual image URLs.
    const images = ["drawing1.jpg", "drawing2.jpg", "drawing3.jpg", "drawing4.jpg", "drawing5.jpg", "drawing6.jpg","drawing7.jpg","drawing8.jpg","drawing9.jpg","drawing10.jpg","drawing11.jpg"];
  
    images.forEach(imgSrc => {
      const img = document.createElement("img");
      img.src = imgSrc;
      img.onclick = function() {
        largeImage.src = imgSrc;
        popup.style.display = "block";
          
      };
      gallery.appendChild(img);
    });
  
    popup.onclick = function() {
      popup.style.display = "none";
    };
  });
  
