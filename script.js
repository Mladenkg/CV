// Adds dark mode and back to top functionality

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');
  const backToTop = document.getElementById('backToTop');

  if (toggle) {
    toggle.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      toggle.textContent = document.body.classList.contains('dark-mode')
        ? 'Light Mode'
        : 'Dark Mode';
    });
  }

  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
