particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 2 },
    move: { enable: true, speed: 2 },
  },
});


// NAVBAR-JS

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

// hamburger.addEventListener("click", () => {
//   menu.classList.toggle("active");
// });

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");

  hamburger.innerHTML = menu.classList.contains("active")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

// Scroll Behavior

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});