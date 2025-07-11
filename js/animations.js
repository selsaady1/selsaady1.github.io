// ===== ANIMATIONS JS FOR SCROLL EFFECTS =====

document.addEventListener('DOMContentLoaded', function() {
  const animatedEls = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .section-title');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatedEls.forEach(el => {
    observer.observe(el);
  });
}); 