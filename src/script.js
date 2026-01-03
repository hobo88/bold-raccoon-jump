// Function to reveal the main content and hide the "Open Me" card
function revealContent() {
  const openMeCard = document.getElementById('open-me-card');
  const mainContent = document.getElementById('main-content');

  if (openMeCard && mainContent) {
    openMeCard.style.opacity = '0';
    setTimeout(() => {
      openMeCard.classList.add('hidden');
      mainContent.classList.remove('hidden');
      setTimeout(() => {
        mainContent.style.opacity = '1';
      }, 50); // Small delay to ensure display:block is applied before opacity transition
    }, 1000); // Matches the transition duration
  }
}

// Function to open the image modal
function openModal(imageSrc) {
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');

  if (modal && modalImage) {
    modalImage.src = imageSrc;
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.style.opacity = '1';
    }, 50); // Small delay for fade-in effect
  }
}

// Function to close the image modal
function closeModal() {
  const modal = document.getElementById('image-modal');
  if (modal) {
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300); // Matches the transition duration
  }
}

// Add a simple animation for the gift icon on load
document.addEventListener('DOMContentLoaded', () => {
  const giftIcon = document.querySelector('.lucide-gift');
  if (giftIcon) {
    giftIcon.classList.add('animate-bounce-slow');
  }
});