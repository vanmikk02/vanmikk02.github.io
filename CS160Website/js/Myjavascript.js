document.addEventListener("DOMContentLoaded", () => {
const button = document.getElementById("addImageButton");
const targetDiv = document.getElementById("mydiv100");


button.addEventListener("click", () => {
const img = document.createElement("img");
img.src = "https://picsum.photos/300?random=" + Math.random();
img.alt = "Random Image";
targetDiv.appendChild(img);
});
});