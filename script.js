// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");

// Toggle on click
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active"); // animate bars
  navbar.classList.toggle("active");     // toggle nav links
});

// screen light blur when menu is active
menuToggle.addEventListener("click", () => {
  if (navbar.classList.contains("active")) {
    document.body.classList.add("blurred");
  } else {
    document.body.classList.remove("blurred");
  }
});

// Auto-close on resize above 768px
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menuToggle.classList.remove("active");
    navbar.classList.remove("active");
  }
});

// Auto-close on scroll
window.addEventListener("scroll", () => {
  menuToggle.classList.remove("active");
  navbar.classList.remove("active");
});

// Close on link click
mobileNavLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navbar.classList.remove("active");
  });
});

//close on clicking outside the menu
document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
    menuToggle.classList.remove("active");
    navbar.classList.remove("active");
  }
});

// Header Scroll Effect
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// Intersection Observer for Timeline Sections

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


// A simple array of objects to store your project data
const projects = [
  {
    title: "Calculator",
    description: "A simple calculator built with HTML, CSS, and JavaScript.",
    techStack: "HTML, CSS, JavaScript",
    media: {
      type: "video",
      src: "assets/video/video_1.mp4"
    },
    githubLink: "https://github.com/yourusername/calculator"
  },
  {
    title: "Weather App",
    description: "A weather app that fetches data from an API to display current weather details of different locations.",
    techStack: "HTML, CSS, JavaScript, API",
    media: {
      type: "video",
      src: "assets/video/video_1.mp4"
    },
    githubLink: "https://github.com/yourusername/weather-app"
  },
  // Add more projects here
  {
    title: "Project 3",
    description: "Description for Project 3.",
    techStack: "HTML, CSS, JavaScript, React",
    media: {
      type: "video",
      src: "assets/video/video_1.mp4"
    },
    githubLink: "https://github.com/yourusername/project3"
  }
];

// Get the container element where cards will be placed
const cardContainer = document.querySelector('.card-container');

// A function to create the HTML for a single project card
const createProjectCard = (project) => {
  // Create the main card div
  const card = document.createElement('div');
  card.classList.add('project-card');

  // Create the media container (video or image)
  const mediaContainer = document.createElement('div');
  mediaContainer.classList.add('project-card__image');

  // Check the media type and create the appropriate element
  let mediaElement;
  if (project.media.type === 'video') {
    mediaElement = document.createElement('video');
    mediaElement.autoplay = true;
    mediaElement.loop = true;
    mediaElement.muted = true;
    mediaElement.playsinline = true;
    const source = document.createElement('source');
    source.src = project.media.src;
    source.type = "video/mp4";
    mediaElement.appendChild(source);

    // Add the event listener to handle iOS playback
    mediaElement.addEventListener('loadeddata', () => {
      mediaElement.play().catch(error => {
        // Log the error but don't let it break the script
        console.log('Autoplay prevented:', error);
      });
    });

  } else {
    mediaElement = document.createElement('img');
    mediaElement.src = project.media.src;
    mediaElement.alt = project.title + " app";
  }
  
  mediaContainer.appendChild(mediaElement);

  // Create the content container
  const content = document.createElement('div');
  content.classList.add('project-card__content');

  // Create and add the title
  const title = document.createElement('h3');
  title.classList.add('project-card__title');
  title.textContent = project.title;
  content.appendChild(title);

  // Create and add the description
  const description = document.createElement('p');
  description.classList.add('project-card__description');
  description.textContent = project.description;
  content.appendChild(description);

  // Create and add the tech stack
  const techStack = document.createElement('p');
  techStack.classList.add('project-card__techs');
  techStack.innerHTML = `<strong>Tech Stack:</strong> ${project.techStack}`;
  content.appendChild(techStack);

  // Create and add the links section
  const links = document.createElement('div');
  links.classList.add('project-card__links');
  
  // Create and add the GitHub link
  const githubLink = document.createElement('a');
  githubLink.classList.add('link', 'code-link');
  githubLink.href = project.githubLink;
  githubLink.target = "_blank";
  
  const githubIcon = document.createElement('img');
  githubIcon.src = "assets/icons/akar-icons_github-fill.svg";
  githubIcon.alt = "GitHub Icon";
  
  githubLink.appendChild(githubIcon);
  githubLink.innerHTML += " View Code";
  
  links.appendChild(githubLink);
  content.appendChild(links);

  // Append all parts to the main card
  card.appendChild(mediaContainer);
  card.appendChild(content);

  return card;
};

// Loop through the projects array and append each card to the container
projects.forEach(project => {
  const newCard = createProjectCard(project);
  cardContainer.appendChild(newCard);
});





// Get all the sections with an ID
const sections = document.querySelectorAll('section[id]');
// Get all the desktop navigation links
const desktopNavLinks = document.querySelectorAll('.desktop-nav-links a');

// Function to handle the active state
function activateNavLink() {
    // Get the current scroll position
    const scrollY = window.pageYOffset;

    // Loop through each section
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 60; // Adjust for the fixed header height
        const sectionId = current.getAttribute('id');

        // Check if the current scroll position is within a section
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            // Remove 'active' class from all links
            desktopNavLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the link that matches the current section's ID
            document.querySelector('.desktop-nav-links a[href*=' + sectionId + ']').classList.add('active');
        }
    });
}

// Attach the function to the scroll event
window.addEventListener('scroll', activateNavLink);

// Run the function on page load to set the initial active link
document.addEventListener('DOMContentLoaded', activateNavLink);