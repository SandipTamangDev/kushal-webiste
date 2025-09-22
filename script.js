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

        // Add this check to prevent the error
        if (sidebarItem && entry.isIntersecting) {
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
  {
    title: "Project 3",
    description: "Description for Project 3.",
    techStack: "HTML, CSS, JavaScript, React",
    media: {
      type: "video",
      src: "assets/video/video_1.mp4"
    },
    githubLink: "https://github.com/yourusername/project3"
  },
  {
    title: "Project 4",
    description: "Description for Project 4.",
    techStack: "HTML, CSS, JavaScript, React",
    media: {
      type: "video",
      src: "assets/video/video_1.mp4"
    },
    githubLink: "https://github.com/yourusername/project4"
  },
  {
    title: "Project 5",
    description: "Description for Project 5.",
    techStack: "HTML, CSS, JavaScript, React",
    media: {
      type: "video",
      src: "assets/video/video_1.mp4"
    },
    githubLink: "https://github.com/yourusername/project5"
  }
];

// Get the container and button elements
const cardContainer = document.querySelector('.card-container');
const viewMoreBtn = document.querySelector('.view-more-button');

let projectsToShow = 2; // The initial number of projects to display
let projectsIncrement = 2; // How many projects to add with each click

// A function to create the HTML for a single project card
const createProjectCard = (project) => {
  // Your existing createProjectCard function remains the same
  const card = document.createElement('div');
  card.classList.add('project-card');

  const mediaContainer = document.createElement('div');
  mediaContainer.classList.add('project-card__image');

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

    mediaElement.addEventListener('loadeddata', () => {
      mediaElement.play().catch(error => {
        console.log('Autoplay prevented:', error);
      });
    });
  } else {
    mediaElement = document.createElement('img');
    mediaElement.src = project.media.src;
    mediaElement.alt = project.title + " app";
  }

  mediaContainer.appendChild(mediaElement);
  const content = document.createElement('div');
  content.classList.add('project-card__content');

  const title = document.createElement('h3');
  title.classList.add('project-card__title');
  title.textContent = project.title;
  content.appendChild(title);

  const description = document.createElement('p');
  description.classList.add('project-card__description');
  description.textContent = project.description;
  content.appendChild(description);

  const techStack = document.createElement('p');
  techStack.classList.add('project-card__techs');
  techStack.innerHTML = `<strong>Tech Stack:</strong> ${project.techStack}`;
  content.appendChild(techStack);

  const links = document.createElement('div');
  links.classList.add('project-card__links');

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

  card.appendChild(mediaContainer);
  card.appendChild(content);

  return card;
};

// A function to render a specified number of projects
const renderProjects = (numToRender) => {
  // Clear any existing projects before rendering
  cardContainer.innerHTML = '';
  // Loop through the projects array up to the specified number
  for (let i = 0; i < numToRender && i < projects.length; i++) {
    const newCard = createProjectCard(projects[i]);
    cardContainer.appendChild(newCard);
  }
};

// A function to handle the "View More" button click
const handleViewMoreClick = () => {
  projectsToShow += projectsIncrement; // Increase the number of projects to show
  renderProjects(projectsToShow); // Re-render the projects

  // Hide the button if all projects have been shown
  if (projectsToShow >= projects.length) {
    viewMoreBtn.style.display = 'none';
  }
};

// Initial rendering of the first 2 projects
renderProjects(projectsToShow);

// Add the event listener to the "View More" button
viewMoreBtn.addEventListener('click', handleViewMoreClick);





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