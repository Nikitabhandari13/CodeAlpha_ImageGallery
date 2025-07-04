// Lightbox Functionality
    function openLightbox(imgElement) {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      lightboxImg.src = imgElement.src;
      lightbox.style.display = 'flex';
    }

    function closeLightbox() {
      document.getElementById('lightbox').style.display = 'none';
    }

    // Filter Functionality
    function filterImages(category) {
      const images = document.querySelectorAll('.image');
      images.forEach(image => {
        if (category === 'all' || image.classList.contains(category)) {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    }

    // Main Functionality (Like + Save)
  document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.actions');

  cards.forEach(card => {
    const likeBtn = card.querySelector('.like-btn');
    const saveBtn = card.querySelector('.save-btn');
    const likeCount = card.querySelector('.like-count');

    // Step 1: Find the image element just before the actions
const image = card.closest('.image').querySelector('img');

    // Like Button Functionality
    likeBtn.addEventListener('click', () => {
      let currentLikes = parseInt(likeCount.textContent);
      likeCount.textContent = currentLikes + 1;
      likeBtn.disabled = true;
    });

    // Save Button Functionality
    saveBtn.addEventListener('click', () => {
      let savedGallery = JSON.parse(localStorage.getItem('userGallery')) || [];

      if (!savedGallery.includes(image.src)) {
        savedGallery.push(image.src);
        localStorage.setItem('userGallery', JSON.stringify(savedGallery));
        alert('Image saved to your gallery!');
        displaySavedGallery();
      } else {
        alert('Image already in your gallery.');
      }
    });
  });

  // Load saved images when page loads
  displaySavedGallery();
});

// Function to display saved images
function displaySavedGallery() {
  const galleryContainer = document.getElementById('my-gallery');
  const savedGallery = JSON.parse(localStorage.getItem('userGallery')) || [];

  // Clear existing content
  galleryContainer.innerHTML = '<h2>My Gallery (Saved Images)</h2>';

  // Append saved images
  savedGallery.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Saved Image";
    img.style.width = "150px";
    img.style.margin = "10px";
    galleryContainer.appendChild(img);
  });
}

