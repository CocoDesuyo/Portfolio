// Auto year update
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Smooth scroll for nav links
  const links = document.querySelectorAll('nav a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
  });
});

// ========== MODAL (Must be global!) ==========
const modal = document.getElementById("hireModal");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

const historyModal = document.getElementById("historyModal");

function openHistory() {
  historyModal.style.display = "flex";
}

function closeHistory() {
  historyModal.style.display = "none";
}

window.addEventListener("click", (e) => {
  if (e.target === historyModal) closeHistory();
});

const imageModal = document.getElementById("imageModal");
const fullImage = document.getElementById("fullImage");

function openImage(src) {
  fullImage.src = src;
  imageModal.style.display = "flex";
}

function closeImage() {
  imageModal.style.display = "none";
  fullImage.src = "";
}
