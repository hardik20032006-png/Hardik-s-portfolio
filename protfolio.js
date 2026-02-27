// Remove hash scroll jump on reload
if (window.location.hash) {
  window.scrollTo(0, 0);
  history.replaceState(null, null, window.location.pathname);
}

// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  {
    threshold: 0.1,
  }
);

reveals.forEach((el) => observer.observe(el));


// Vanta Background
VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x00ff9c,
  backgroundColor: 0x0b0f0e,
  points: 12.00,       // dense
  maxDistance: 12.00,  // reduce long stretching lines
  spacing: 12.00       // tighter grouping
});


