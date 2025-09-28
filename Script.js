function addToCart(productName) {
  alert(`${productName} has been added to your cart!`);
}

function searchProducts() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {
    const productName = card.dataset.name.toLowerCase();
    if (productName.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
  if (index >= totalSlides) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = totalSlides - 1;
  } else {
    slideIndex = index;
  }

  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(step) {
  showSlide(slideIndex + step);
}

// Auto-slide every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 5000);

// Show the first slide initially
showSlide(slideIndex);
