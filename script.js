document.getElementById("year").textContent = new Date().getFullYear();

const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let index = 0;
const totalSlides = track.children.length;

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

setInterval(() => {
    index = (index + 1) % totalSlides;
    updateCarousel();
}, 5000);

const sessionTypeSelect = document.getElementById('session-type');
const additionalInfoDiv = document.getElementById('additional-info');

sessionTypeSelect.addEventListener('change', function () {
  additionalInfoDiv.innerHTML = '';

  const selectedSessionType = sessionTypeSelect.value;

  if (selectedSessionType === 'portrait') {
    additionalInfoDiv.innerHTML = `
      <label for="portrait-theme">Portrait Theme:</label>
      <input type="text" id="portrait-theme" name="portrait-theme" placeholder="e.g., Natural Light, Outdoor, etc." required />
    `;
  } else if (selectedSessionType === 'couple') {
    additionalInfoDiv.innerHTML = `
      <label for="couple-theme">Couple Session Theme:</label>
      <input type="text" id="couple-theme" name="couple-theme" placeholder="e.g., Romantic, Adventure, etc." required />
    `;
  } else if (selectedSessionType === 'headshot') {
    additionalInfoDiv.innerHTML = `
      <label for="headshot-location">Headshot Location:</label>
      <input type="text" id="headshot-location" name="headshot-location" placeholder="e.g., Studio, Office, etc." required />
    `;
  } else if (selectedSessionType === 'family') {
    additionalInfoDiv.innerHTML = `
      <label for="family-members">Number of Family Members:</label>
      <input type="number" id="family-members" name="family-members" min="1" required />
    `;
  }
});

document.getElementById('booking-form').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Your booking has been submitted!');
});
