const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");

function toggleMenu(e) {
  e.stopPropagation(); // stop click from bubbling
  sidebar.classList.toggle("open");
}

// prevent clicks inside sidebar from closing it
sidebar.addEventListener("click", (e) => {
  e.stopPropagation();
});

// click outside closes sidebar
document.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

const overlay = document.getElementById("overlay");

function toggleMenu(e) {
  e.stopPropagation();
  sidebar.classList.toggle("open");
  overlay.classList.toggle("show");
}

overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
});
