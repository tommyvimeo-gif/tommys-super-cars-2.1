// Mobile menu toggle
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .car-card, .brand-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Smooth navbar background on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(0,0,0,0.95)';
  } else {
    nav.style.background = 'rgba(0,0,0,0.8)';
  }
});
