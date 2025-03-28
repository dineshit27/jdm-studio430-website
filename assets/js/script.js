'use strict';

/**
 * Navbar toggle functionality
 */
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleElements = [navCloseBtn, overlay, navOpenBtn];

toggleElements.forEach((element) => {
  element.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

/**
 * Close navbar when clicking a navbar link
 */
const navbarLinks = document.querySelectorAll("[data-navbar-link]");

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
});

/**
 * Header & "Go to Top" button activation on scroll
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * Portfolio hover effects
 */
document.querySelectorAll('.portfolio-item').forEach((item) => {
  const overlay = item.querySelector('.portfolio-overlay');
  const image = item.querySelector('.portfolio-image');

  item.addEventListener('mouseenter', () => {
    overlay.style.opacity = '1';
    image.style.transform = 'scale(1.1)';
  });

  item.addEventListener('mouseleave', () => {
    overlay.style.opacity = '0';
    image.style.transform = 'scale(1)';
  });
});

/**
 * Lightbox effect for full-screen image viewing
 */
document.addEventListener("DOMContentLoaded", function () {
  const portfolioLinks = document.querySelectorAll(".portfolio-link");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeLightbox = document.querySelector(".close-lightbox");

  portfolioLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const imageUrl = link.getAttribute("data-lightbox");
      lightboxImg.src = imageUrl;
      lightbox.classList.add("active");
    });
  });

  closeLightbox.addEventListener("click", () => lightbox.classList.remove("active"));

  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      lightbox.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("active");
    }
  });
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".testimonials-list");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const testimonials = document.querySelectorAll(".testimonial-card");
  let currentIndex = 0;

  function updateSlider() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
  }

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = testimonials.length - 1;
    }
    updateSlider();
  });

  nextBtn.addEventListener("click", function () {
    if (currentIndex < testimonials.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  });
});

/**
 * Number animation in About section (Triggered when visible)
 */
function animateNumbers(element, start, end, duration) {
  let startTime = null;

  function updateNumber(currentTime) {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);

    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    } else {
      element.textContent = end; // Ensure final number is correct
    }
  }

  requestAnimationFrame(updateNumber);
}

// Observe when stats come into view
const statElements = document.querySelectorAll(".stats-title");
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const stat = entry.target;
        const endValue = parseInt(stat.getAttribute("data-number"), 10);
        stat.textContent = "0"; // Reset to 0
        animateNumbers(stat, 0, endValue, 2000);
        observer.unobserve(stat); // Stop observing after animation runs
      }
    });
  },
  { threshold: 0.5 }
);

// Apply observer to each stat element
statElements.forEach((stat) => {
  const endValue = parseInt(stat.textContent, 10);
  stat.setAttribute("data-number", endValue); // Store the number
  stat.textContent = "0"; // Start from 0
  observer.observe(stat);
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const pricingCards = document.querySelectorAll(".pricing-card");

  pricingCards.forEach((card) => {
    const selectButton = card.querySelector(".btn");

    
  });
});

function scrollToPricing() {
  const pricingSection = document.querySelector("#pricing");
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the pricing section
  }
}

function scrollToFooter() {
  const footer = document.querySelector("#footer");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the footer
  }
}

