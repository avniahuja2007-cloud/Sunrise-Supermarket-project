// Product category filter
const filterBtns = document.querySelectorAll('.filter-btn');
const prodCards = document.querySelectorAll('.prod-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cat = btn.dataset.cat;

    prodCards.forEach(card => {
      if (cat === 'all' || card.dataset.cat === cat) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Handle URL hash filtering on page load
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const matchBtn = document.querySelector(`.filter-btn[data-cat="${hash}"]`);
    if (matchBtn) matchBtn.click();
  }
});
