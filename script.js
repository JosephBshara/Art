document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.getElementById("gallery");
  const popup = document.getElementById("popup");
  const largeImage = document.getElementById("largeImage");

  // Sample image data. Replace with your actual image URLs.
  const images = ["drawing1.png", "drawing2.png", "drawing3.png", "drawing4.png", "drawing5.jpg", "drawing6.jpg", "drawing7.jpg", "drawing8.jpg", "drawing9.jpg", "drawing10.jpg", "drawing11.jpg"];

  images.forEach(imgSrc => {
    const imgWrapper = document.createElement("div");

    const img = document.createElement("img");
    img.src = imgSrc;
    img.onclick = function() {
      largeImage.src = imgSrc;
      popup.style.display = "block";
    };

    const textDiv = document.createElement("div");
    textDiv.className = 'drawing-name';
    textDiv.innerHTML = "Drawing Name";  // Placeholder name, you can change it later

    imgWrapper.appendChild(img);
    imgWrapper.appendChild(textDiv);
    
    gallery.appendChild(imgWrapper);
  });

  popup.onclick = function() {
    popup.style.display = "none";
  };
});

