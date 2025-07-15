const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".mobile-nav-links a");

// Toggle on click
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active"); // animate bars
  navbar.classList.toggle("active");     // toggle nav links
});

// Auto-close on resize above 768px
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menuToggle.classList.remove("active");
    navbar.classList.remove("active");
  }
});

// Close on link click
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navbar.classList.remove("active");
  });
});
