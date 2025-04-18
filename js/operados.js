document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburguesa");
    const navLinks = document.querySelector(".nav-links");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });
  