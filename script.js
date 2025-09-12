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

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});













// card
  // const buttons = document.querySelectorAll('.read-more-btn');

  // buttons.forEach(button => {
  //   button.addEventListener('click', () => {
  //     const desc = button.previousElementSibling; // the description <p>
  //     desc.classList.toggle('expanded');
  //     button.textContent = desc.classList.contains('expanded') ? 'Show Less' : 'Read More';
  //   });
  // });



