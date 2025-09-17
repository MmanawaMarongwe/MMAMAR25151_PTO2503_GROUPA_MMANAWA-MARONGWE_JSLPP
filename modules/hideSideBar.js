export const clsNavBarBtn = document.getElementById("sidebar-btn");
const navBar = document.getElementById("nav-bar");
export const opnNavBarBtn = document.getElementById("open-sidebar-btn");
const mainGrid = document.getElementById("main-container");

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

export function openSidebar() {
  if (navBar.classList.contains("navigation-bar")) {
    mainGrid.style.gridTemplateColumns = "repeat(5, 1fr)";
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
