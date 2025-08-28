const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Cierra el menú al hacer clic en un enlace
const links = menu.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});
