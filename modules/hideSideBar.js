export const clsNavBarBtn = document.getElementById("sidebar-btn");
const navBar = document.getElementById("nav-bar");
export const opnNavBarBtn = document.getElementById("open-sidebar-btn");
const mainGrid = document.getElementById("main-container");

/**
 * Toggles the sidebar to hidden state.
 *
 * - Updates `clsNavBarBtn` classes to indicate the sidebar is hidden.
 * - Hides the `navBar` and adjusts `mainGrid` layout.
 * - Ensures the open-sidebar button (`opnNavBarBtn`) becomes visible.
 *
 * @returns {void} Does not return a value.
 */
export const hideSidebar = () => {
  if (clsNavBarBtn.classList.contains("hide-sidebar")) {
    clsNavBarBtn.classList.remove("hide-sidebar");
    clsNavBarBtn.classList.add("side-bar-hidden");
  } else {
    clsNavBarBtn.classList.remove("side-bar-hidden");
    clsNavBarBtn.classList.add("hide-sidebar");
    clsNavBarBtn.textContent = "Hide Sidebar";
  }

  if (navBar.classList.contains("navigation-bar")) {
    navBar.style.display = "none";
    mainGrid.style.gridTemplateColumns = "1fr";
    console.dir(navBar);
  } else {
    navBar.style.display = "";
  }

  if (opnNavBarBtn.classList.contains("button-hidden")) {
    opnNavBarBtn.classList.remove("button-hidden");
    opnNavBarBtn.classList.add("open-sidebar");
  }
};

/**
 * Toggles the sidebar to visible state.
 *
 * - Updates `clsNavBarBtn` classes to indicate the sidebar is visible.
 * - Displays the `navBar` and expands `mainGrid` layout.
 * - Hides the open-sidebar button (`opnNavBarBtn`).
 *
 * @returns {void} Does not return a value.
 */
export function openSidebar() {
  if (navBar.classList.contains("navigation-bar")) {
    mainGrid.style.gridTemplateColumns = "repeat(8, 1fr)";
    navBar.style.display = "inline-block";
    console.dir(navBar);
  } else {
    navBar.style.display = "none";
  }

  if (clsNavBarBtn.classList.contains("side-bar-hidden")) {
    clsNavBarBtn.classList.remove("side-bar-hidden");
    clsNavBarBtn.classList.add("hide-sidebar");
  } else {
    clsNavBarBtn.classList.remove("hide-sidebar");
    clsNavBarBtn.classList.add("side-bar-hidden");
    clsNavBarBtn.textContent = "Hide Sidebar";
  }
  if (opnNavBarBtn.classList.contains("open-sidebar")) {
    opnNavBarBtn.classList.remove("open-sidebar");
    opnNavBarBtn.classList.add("button-hidden");
  }
}
