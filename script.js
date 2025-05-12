<script>
// =======================
// RSVP Form
// =======================
const form = document.getElementById('rsvp-form');
const rsvpList = document.getElementById('rsvp-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = form.querySelector('input').value;
  const message = form.querySelector('textarea').value;

  const entry = document.createElement('div');
  entry.innerHTML = `<strong>${name}:</strong> ${message}`;
  rsvpList.appendChild(entry);

  form.reset();
});

// =======================
// Auto Set Music Volume
// =======================
const music = document.getElementById('background-music');
music.volume = 0.5;

// =======================
// Play Music Button
// =======================
const playBtn = document.getElementById('play-music-btn');
if (playBtn) {
  playBtn.addEventListener('click', () => {
    music.play()
      .then(() => {
        playBtn.style.display = 'none';
      })
      .catch((error) => {
        console.error("Gagal memutar musik:", error);
        alert("Klik ulang untuk memutar musik.");
      });
  });
}

// =======================
// Lightbox Gallery
// =======================
const galleryImages = document.querySelectorAll('.gallery-photos img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    if (lightbox && lightboxImg) {
      lightbox.style.display = 'block';
      lightboxImg.src = img.src;
    }
  });
});

if (closeBtn && lightbox) {
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
}
</script>
