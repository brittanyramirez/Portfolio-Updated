document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('backToTop');

  if (!button) return; // safety check

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  });

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
