
const form = document.querySelector(".subscribe-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData
  })
    .then((res) => {
      if (res.ok) {
        alert("✅ Thanks for subscribing!");
        form.reset();
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    })
    .catch(() => alert("⚠️ Network error!"));
});


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
