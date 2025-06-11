function toggleWorkshopDetails() {
  const details = document.getElementById('workshop-details');
  if (details) {
    details.classList.toggle('hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const workshopBox = document.getElementById('workshops');
  if (workshopBox) {
    workshopBox.addEventListener('click', toggleWorkshopDetails);
  }
});
