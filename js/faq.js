const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    items.forEach(i => {
      i.classList.remove('active');
      i.querySelector('.icon').textContent = '+';
    });

    if (!isActive) {
      item.classList.add('active');
      item.querySelector('.icon').textContent = '−';
    }
  });
});