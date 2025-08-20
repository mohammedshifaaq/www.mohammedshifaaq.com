//=============loding js===================================//

const loader = document.getElementById("loader");
const main = document.getElementById("main-content");
const percentText = document.getElementById("percent");
const loadingText = document.querySelector(".loading-text");

let current = 1;

const interval = setInterval(() => {
  percentText.textContent = `${current}%`;
  current++;

  if (current > 100) {
    clearInterval(interval);

    // Change to success message
    loadingText.innerHTML = " Successful ✅";

    // Wait, then fade out loader
    setTimeout(() => {
      loader.classList.add("fade-out");
      setTimeout(() => {
        loader.style.display = "none";
        main.style.display = "block";
      }, 1000);
    }, 1000);
  }
}, 30); // 100ms x 100 = 10 seconds



// ======================= Toggle Icon Navbar =======================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};

// ======================= Scroll Section Link =======================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {            
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      document
        .querySelector(`header nav a[href*="${id}"]`)
        .classList.add('active');
    }
  });

  // ======================= Sticky Navbar =======================
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // ======================= Remove Toggle on Scroll =======================
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};

// ======================= scroll reveal =======================
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.contact-info p, .contact h2, iframe', { origin: 'right' });
ScrollReveal().reveal('.coding-skills, .knowledge-section', { origin: 'right' });




// ======================= typed js =======================

const typed = new Typed('.multiple-text', {
  strings: ['Full Stack Developer', 'Web Designer', 'Graphic Designer'],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});

document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

//====================== scroll teveal ==================

scroll({
  distanse: '80px',
  duration: 2000,
  delay: 200,
});

