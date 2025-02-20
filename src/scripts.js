// This file contains JavaScript code for smooth scrolling to sections of the case study project.

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

let slideIndex = {};

function showSlides(n, slideshowId) {
    console.log(n);
    console.log(slideshowId);
  let i;
  let slides = document.querySelectorAll(`#${slideshowId} .mySlides`);
  if (!slideIndex[slideshowId]) {
    slideIndex[slideshowId] = 1;
  }
  if (n > slides.length) {
    slideIndex[slideshowId] = 1;
  }
  if (n < 1) {
    slideIndex[slideshowId] = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex[slideshowId] - 1].style.display = "block";
}

function changeSlide(n, slideshowId) {
  showSlides(slideIndex[slideshowId] += n, slideshowId);
}

// Initialize slideshows
document.addEventListener("DOMContentLoaded", function() {
  showSlides(1, 'slideshow0');
  showSlides(1, 'slideshow1');
  showSlides(1, 'slideshow2');
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#sidebar ul li a");

    function activateSection() {
        let scrollPosition = window.scrollY + 100; // Offset for header height

        sections.forEach((section) => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", activateSection);
});
