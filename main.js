// Add basic interactivity
document.addEventListener("DOMContentLoaded", () => {
    const ctaButtons = document.querySelectorAll(".cta-button");
  
    ctaButtons.forEach(button => {
      button.addEventListener("click", () => {
        alert("Button clicked! Implement more actions here.");
      });
    });
  });

  // Shrink the navbar on scroll
document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.padding = "10px 20px";
    } else {
      navbar.style.padding = "15px 20px";
    }
  });

  // Fade-in animations on scroll
document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );
  
    fadeInElements.forEach((el) => observer.observe(el));
  });
  
  // Smooth scrolling for navbar links
  document.querySelectorAll('.navbar a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50; // Adjust offset to fine-tune detection
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

let counter = 0;
const counterElement = document.getElementById("investment-counter");

function updateCounter() {
  if (counter < 1000) { // Replace 1000 with the target number
    counter++;
    counterElement.textContent = counter.toLocaleString();
  }
}

setInterval(updateCounter, 50); // Adjust interval for speed

