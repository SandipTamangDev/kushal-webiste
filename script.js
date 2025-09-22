// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");

// Toggle on click
menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");
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


// Project Section Functionality
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

const cardContainer = document.querySelector('.card-container');
const viewMoreBtn = document.querySelector('.view-more-button');

let projectsToShow = 2;
let projectsIncrement = 2;

const createProjectCard = (project) => {
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
        mediaElement.setAttribute('playsinline', '');
        mediaElement.setAttribute('preload', 'auto');

        const source = document.createElement('source');
        source.src = project.media.src;
        source.type = "video/mp4";
        mediaElement.appendChild(source);

        mediaElement.addEventListener('loadedmetadata', () => {
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

const renderProjects = (numToRender) => {
    cardContainer.innerHTML = '';
    for (let i = 0; i < numToRender && i < projects.length; i++) {
        const newCard = createProjectCard(projects[i]);
        cardContainer.appendChild(newCard);
    }
};

const handleViewMoreClick = () => {
    projectsToShow += projectsIncrement;
    renderProjects(projectsToShow);

    if (projectsToShow >= projects.length) {
        viewMoreBtn.style.display = 'none';
    }
};

renderProjects(projectsToShow);
viewMoreBtn.addEventListener('click', handleViewMoreClick);


// Desktop Navigation Active State
const sections = document.querySelectorAll('section[id]');
const desktopNavLinks = document.querySelectorAll('.desktop-nav-links a');

function activateNavLink() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 60;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            desktopNavLinks.forEach(link => link.classList.remove('active'));
            const matchingLink = document.querySelector(`.desktop-nav-links a[href*='${sectionId}']`);
            if (matchingLink) {
                matchingLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLink);
document.addEventListener('DOMContentLoaded', activateNavLink);