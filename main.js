let x;
let y;
let z;

// Hide the result labels initially
document.getElementById("xlabel").style.display = "none";
document.getElementById("ylabel").style.display = "none";
document.getElementById("zlabel").style.display = "none";

document.getElementById("startBtn").onclick = function() {
  // random numbers
  x = Math.floor(Math.random() * 6) + 1;
  y = Math.floor(Math.random() * 6) + 1;
  z = Math.floor(Math.random() * 6) + 1;

  // Update the result labels
  document.getElementById("xlabel").textContent = x;
  document.getElementById("ylabel").textContent = y;
  document.getElementById("zlabel").textContent = z;

  // Show the result labels
  document.getElementById("xlabel").style.display = "block";
  document.getElementById("ylabel").style.display = "block";
  document.getElementById("zlabel").style.display = "block";

  // Array of image URLs
  const imageUrls = [
    "img/image-1.png",
    "img/image-2.png",
    "img/image-3.png",
    "img/image-4.png",
    "img/image-5.png",
    "img/image-6.png",
  ];

  // Select the corresponding image based on the random numbers
  const xImageSrc = imageUrls[x - 1];
  const yImageSrc = imageUrls[y - 1];
  const zImageSrc = imageUrls[z - 1];

  // Remove existing images
  const imgResult = document.querySelector(".imgResult");
  imgResult.textContent = "";

  // Create image elements and set their sources
  const xImg = document.createElement("img");
  xImg.src = xImageSrc;

  imgResult.appendChild(xImg);

  const yImg = document.createElement("img");
  yImg.src = yImageSrc;
  imgResult.appendChild(yImg);

  const zImg = document.createElement("img");
  zImg.src = zImageSrc;
  imgResult.appendChild(zImg);
};