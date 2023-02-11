const images = document.querySelectorAll(".gallery img");
const lightBox = document.querySelector(".lightBox");
const lightBoxImage = document.querySelector(".lightBox img");

const closeBtn = document.querySelector(".close-btn");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightBox.classList.add("show");
    lightBoxImage.src = e.target.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightBox.classList.remove("show");
});

lightBox.addEventListener("click", (e) => {
  if (e.target === lightBox) {
    lightBox.classList.remove("show");
  }
});
