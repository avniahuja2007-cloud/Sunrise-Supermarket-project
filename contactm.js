// Contact form handler
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in your name, email, and message.');
    return;
  }

  // Simulate form submission
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    successMsg.style.display = 'block';
    form.reset();
    btn.textContent = 'Send Message ✉️';
    btn.disabled = false;

    // Hide success after 6s
    setTimeout(() => { successMsg.style.display = 'none'; }, 6000);
  }, 1200);
});
