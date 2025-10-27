// Step 1: Select elements
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const thumbnails = document.getElementById("thumbnails");

const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modalOverlay");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");

// Step 2: Images array (same order as thumbnails)
const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg"
];

let currentIndex = 0;

// Utility: update slider image and active thumbnail
function showImage(index) {
  currentIndex = (index + images.length) % images.length; // normalize
  slider.src = images[currentIndex];
  modalImage.src = images[currentIndex];

  // update thumbnails active state
  document.querySelectorAll(".thumb").forEach((t) => t.classList.remove("active"));
  const activeThumb = document.querySelector(`.thumb[data-index="${currentIndex}"]`);
  if (activeThumb) activeThumb.classList.add("active");
}

// Step 3: Prev / Next for main slider
nextBtn.addEventListener("click", () => showImage(currentIndex + 1));
prevBtn.addEventListener("click", () => showImage(currentIndex - 1));

// Step 4: Click thumbnail to jump to image
thumbnails.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.matches(".thumb")) {
    const idx = Number(target.dataset.index);
    showImage(idx);
  }
});

// Step 5: Click main image to open modal
slider.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
});

// Step 6: Modal controls
closeModal.addEventListener("click", closeModalFn);
modalOverlay.addEventListener("click", closeModalFn);

function closeModalFn() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

modalNext.addEventListener("click", () => showImage(currentIndex + 1));
modalPrev.addEventListener("click", () => showImage(currentIndex - 1));

// Step 7: Keyboard support (Esc to close, arrows to navigate)
document.addEventListener("keydown", (e) => {
  if (modal.classList.contains("hidden") === false) {
    if (e.key === "Escape") closeModalFn();
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
  }
});

// initial render
showImage(0);
