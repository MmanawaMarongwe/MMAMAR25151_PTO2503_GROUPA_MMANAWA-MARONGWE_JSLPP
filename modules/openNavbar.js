// Elements you already have
export const navBar = document.getElementById("nav-bar");
const overlay = document.getElementById("nav-menu-overlay");

export function openNav() {
  if (navBar.classList.contains("nav-open")) return;

  // Mark nav as open
  navBar.classList.add("nav-open");
  overlay.classList.add("is-open");
}

export function closeNav() {
  navBar.classList.remove("nav-open");
  overlay.classList.remove("is-open");
}
