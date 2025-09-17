window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const fadeStart = 0;
  const fadeEnd = window.innerHeight * 0.8;

  let opacity;
  if (scrolled <= fadeStart) {
    opacity = 1;
  } else if (scrolled >= fadeEnd) {
    opacity = 0.1;
  } else {
    const fadeProgress = (scrolled - fadeStart) / (fadeEnd - fadeStart);
    opacity = 1 - fadeProgress * 0.9;
  }

  const goBoardContainer = document.getElementById("goBoardContainer");
  goBoardContainer.style.opacity = opacity;
});

// Smooth scrolling
document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.style.scrollBehavior = "smooth";

  const scrollIndicator = document.querySelector(".scroll-indicator");
  scrollIndicator.addEventListener("click", function () {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });
});
