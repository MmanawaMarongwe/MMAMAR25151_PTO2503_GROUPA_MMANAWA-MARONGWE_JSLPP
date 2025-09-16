export const clsNavBarBtn = document.getElementById("sidebar-btn");
const navBar = document.getElementById("nav-bar");
const opnNavBarBtn = document.getElementById("open-sidebar-btn");

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
    console.dir(navBar);
  } else {
    navBar.style.display = "";
  }

  if (opnNavBarBtn.classList.contains("button-hidden")) {
    opnNavBarBtn.classList.remove("button-hidden");
    opnNavBarBtn.classList.add("open-sidebar");
    console.dir(opnNavBarBtn);
  } /* else {
    opnNavBarBtn.classList.remove("open-sidebar");
    opnNavBarBtn.classList.add("button-hidden");
  }*/
};
