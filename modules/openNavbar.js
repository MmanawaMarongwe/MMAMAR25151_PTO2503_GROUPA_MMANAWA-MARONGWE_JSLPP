// Elements you already have
export const mToggle = document.getElementById("nav-bar");
export const openMToggle = document.getElementById("nav-bar-open");
export const clsMToggle = document.getElementById("close-mobile-toggle");
const overlay = document.getElementById("nav-menu-overlay");

export function openNav() {
  if (mToggle.classList.contains("nav-open")) return;

  // Mark nav as open
  mToggle.classList.add("nav-open");
  overlay.classList.add("is-open");
}

export function closeNav() {
  mToggle.classList.remove("nav-open");
  overlay.classList.remove("is-open");
}
