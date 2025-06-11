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

function togglePeer_ContactsDetails() {
  const details = document.getElementById('peer_contacts-details');
  if (details) {
    details.classList.toggle('hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const workshopBox = document.getElementById('workshops');
  const tutoringBox = document.getElementById('tutoring');
  const peer_contactBox = document.getElementById('peer_contacts');

  if (workshopBox) {
    workshopBox.addEventListener('click', toggleWorkshopDetails);
  }

  if (tutoringBox) {
    tutoringBox.addEventListener('click', toggleTutoringDetails);
  }

  if (peer_contactBox) {
    peer_contactBox.addEventListener('click', togglePeer_ContactsDetails);
  }
});

