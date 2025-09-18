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



const aboutContainer = document.getElementById('about-section');
        const timelineSections = document.querySelectorAll('.timeline-section');
        const sidebarItems = document.querySelectorAll('.sidebar-item');

        const options = {
            root: null, // use the viewport as the root
            rootMargin: '0px',
            threshold: 0.5 // trigger when 50% of the item is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                const sidebarItem = document.querySelector(`.sidebar-item[data-section="${id}"]`);

                if (entry.isIntersecting) {
                    // Remove 'active' class from all sidebar items
                    sidebarItems.forEach(item => item.classList.remove('active'));
                    // Add 'active' class to the current one
                    sidebarItem.classList.add('active');
                }
            });
        }, options);

        timelineSections.forEach(section => {
            observer.observe(section);
        });

        // Optional: Smooth scroll on sidebar item click
        sidebarItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const targetId = e.currentTarget.getAttribute('data-section');
                const targetSection = document.getElementById(targetId);
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        });