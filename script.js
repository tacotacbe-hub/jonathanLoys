// script.js - basic interactivity for Jonathan Loys DJ site

// Mobile menu toggle (if you add a burger icon later)
const navLinks = document.querySelector('.nav-links');
if (navLinks) {
  const toggleMenu = () => {
    navLinks.classList.toggle('active');
  };
  // Example: you could attach this to a button with id="menu-toggle"
  const menuBtn = document.getElementById('menu-toggle');
  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
  }
}

// Smooth scroll is handled by CSS (scroll-behavior: smooth), but you can enhance link behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
