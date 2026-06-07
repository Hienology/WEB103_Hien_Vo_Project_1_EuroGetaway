const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.destination-card');

if (searchInput && cards.length > 0) {
  searchInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();

    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? '' : 'none';
    });
  });
}
