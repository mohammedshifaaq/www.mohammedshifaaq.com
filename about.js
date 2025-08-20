
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



const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#59B2F4"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#59B2F4",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    }
  },
  "retina_detect": true
});



// ✅ Wait until DOM is fully loaded

//=========================oneline.s================================///

const slider = document.getElementById("slider");
const scrollLeftBtn = document.getElementById("scrollLeftBtn");
const scrollRightBtn = document.getElementById("scrollRightBtn");

// Calculate scroll step dynamically from card width + margin-right
const firstCard = slider.querySelector('.service-card');
const cardStyle = getComputedStyle(firstCard);
const cardWidth = firstCard.offsetWidth + parseInt(cardStyle.marginRight);

scrollLeftBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
});

scrollRightBtn.addEventListener("click", () => {
  slider.scrollBy({ left: cardWidth, behavior: "smooth" });
});

function toggleReadMore(el) {
  const extra = el.previousElementSibling;
  if (extra.style.display === "inline") {
    extra.style.display = "none";
    el.textContent = "Read more ⤵";
  } else {
    extra.style.display = "inline";
    el.textContent = "Read less ⤴";
  }
}

// Auto scroll
let autoScroll = setInterval(() => {
  slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
    slider.scrollTo({ left: 0, behavior: "smooth" });
  }
}, 3000);

// Pause on hover
slider.addEventListener("mouseover", () => clearInterval(autoScroll));
slider.addEventListener("mouseout", () => {
  autoScroll = setInterval(() => {
    slider.scrollBy({ left: cardWidth, behavior: "smooth" });
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 3000);
});



//=======Coding skill ======//

window.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle");

  circles.forEach(circle => {
    const progress = circle.querySelector("svg circle:last-child");
    const number = circle.querySelector(".number");
    const percent = +circle.getAttribute("data-percent");
    const offset = 283 - (283 * percent) / 100;

    progress.style.strokeDashoffset = offset;
    if (number) number.textContent = percent + "%";
  });
});

//==================Languages====================///

window.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".circle-box-2");

  boxes.forEach(box => {
    const percent = parseInt(box.getAttribute("data-percent"));
    const offset = 283 - (283 * percent) / 100;
    const progressCircle = box.querySelector("svg circle:last-child");
    const numberText = box.querySelector(".number");

    progressCircle.style.strokeDashoffset = offset;
    numberText.textContent = percent + "%";
  });
});


//=====================My Portfolio Btn================================//

const sliderTrack = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slides.length;

function showSlide(index) {
  sliderTrack.style.transform = `translateX(-${index * 100}%)`;
}

function slideNext() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function slidePrev() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

let autoSlide = setInterval(slideNext, 3000);

const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseover', () => clearInterval(autoSlide));
sliderContainer.addEventListener('mouseout', () => {
  autoSlide = setInterval(slideNext, 3000);
});



//===========================form=================================//

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Optional: Close menu on mobile when a nav link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});



