export const bgColorBtn = document.getElementById("theme-toggle");
const logoEl = document.getElementById("img-logo");

const saved = localStorage.getItem("theme") || "light";
document.documentElement.classList.toggle("dark", saved === "dark");
logoEl.src =
  saved === "dark" ? "assets/logo-dark.svg" : "assets/logo-light.svg";
bgColorBtn.checked = saved === "dark";

/**
 * Toggles the application theme between light and dark mode.
 *
 * - Checks the state of the `bgColorBtn` toggle input to determine the theme.
 * - Applies or removes the `dark` class on the `<html>` element.
 * - Updates the logo source (`logoEl`) to match the current theme.
 * - Persists the selected theme in `localStorage` for future sessions.
 *
 * @returns {void} Does not return a value.
 */
export function changeTheme() {
  const theme = bgColorBtn.checked ? "dark" : "light";

  document.documentElement.classList.toggle("dark", theme === "dark");
  logoEl.src =
    theme === "dark" ? "assets/logo-dark.svg" : "assets/logo-light.svg";

  localStorage.setItem("theme", theme);
}

// Elements you already have
export const mToggle = document.getElementById("nav-bar");
export const openMToggle = document.getElementById("nav-bar-open");
export const clsMToggle = document.getElementById("close-mobile-toggle");
const overlay = document.getElementById("nav-menu-overlay");

/**
 * Opens the mobile navigation menu.
 *
 * - Adds the `nav-open` class to `mToggle`.
 * - Adds the `is-open` class to the `overlay`.
 * - If already open, does nothing.
 *
 * @returns {void}
 */
export function openNav() {
  if (mToggle.classList.contains("nav-open")) return;
  mToggle.classList.add("nav-open");
  overlay.classList.add("is-open");
}

/**
 * Closes the mobile navigation menu.
 *
 * - Removes the `nav-open` class from `mToggle`.
 * - Removes the `is-open` class from the `overlay`.
 *
 * @returns {void}
 */
export function closeNav() {
  mToggle.classList.remove("nav-open");
  overlay.classList.remove("is-open");
}
