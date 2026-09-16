// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Sticky nav shadow
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.boxShadow = window.scrollY > 10 ? '0 2px 16px rgba(0,0,0,0.08)' : 'none';
});

// Form handler (demo)
function handleForm(e) {
  e.preventDefault();
  e.target.reset();
}
