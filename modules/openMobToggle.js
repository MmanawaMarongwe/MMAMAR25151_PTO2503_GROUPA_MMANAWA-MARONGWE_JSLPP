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
