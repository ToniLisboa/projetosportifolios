document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Cadastro realizado com sucesso!");
});
const container = document.querySelector(".carousel-container");
const images = document.querySelectorAll(".carousel-container img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
const totalImages = images.length;

nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalImages;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    container.style.transform = `translateX(-${index * 100}%)`;
}
