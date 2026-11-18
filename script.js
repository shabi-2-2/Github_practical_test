const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "Close" : "Menu";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "Menu";
  });
});
