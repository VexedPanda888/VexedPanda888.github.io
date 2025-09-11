// Scroll effect for go board fade
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const fadeStart = 0;
  const fadeEnd = window.innerHeight * 0.8; // Fade completes at 80% of viewport height

  let opacity;
  if (scrolled <= fadeStart) {
    opacity = 1;
  } else if (scrolled >= fadeEnd) {
    opacity = 0.1; // Minimum opacity of 10%
  } else {
    // Linear interpolation between 1 and 0.1
    const fadeProgress = (scrolled - fadeStart) / (fadeEnd - fadeStart);
    opacity = 1 - fadeProgress * 0.9; // Fade from 1 to 0.1 (difference of 0.9)
  }

  const goBoardContainer = document.getElementById("goBoardContainer");
  if (goBoardContainer) {
    goBoardContainer.style.opacity = opacity;
  }
});

// Smooth scrolling for any anchor links
document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = "smooth";

  // Optional: Add scroll indicator click handler
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", function () {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    });
  }
});
