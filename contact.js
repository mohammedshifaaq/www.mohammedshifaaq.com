
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



//=============================cotact navbat======================================//

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("navLinks");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("fa-xmark");
  menuIcon.classList.toggle("fa-bars");
};

// Optional: close menu when clicking a link (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  });
});
