function toggleWorkshopDetails() {
  const details = document.getElementById('workshop-details');
  if (details) {
    details.classList.toggle('hidden');
  }
}

function toggleTutoringDetails() {
  const details = document.getElementById('tutoring-details');
  if (details) {
    details.classList.toggle('hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const workshopBox = document.getElementById('workshops');
  const tutoringBox = document.getElementById('tutoring');

  if (workshopBox) {
    workshopBox.addEventListener('click', toggleWorkshopDetails);
  }

  if (tutoringBox) {
    tutoringBox.addEventListener('click', toggleTutoringDetails);
  }
});

