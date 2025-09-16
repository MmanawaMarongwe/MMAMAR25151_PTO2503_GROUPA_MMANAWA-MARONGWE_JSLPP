export const sidebarBtn = document.getElementById("sidebar-btn");
const navBar = document.getElementById("nav-bar");

export const hideSidebar = () => {
  if (sidebarBtn.classList.contains("hide-sidebar")) {
    sidebarBtn.classList.remove("hide-sidebar");
    sidebarBtn.classList.add("side-bar-hidden");
    sidebarBtn.textContent = "";
  } else {
    sidebarBtn.classList.remove("side-bar-hidden");
    sidebarBtn.classList.add("hide-sidebar");
    sidebarBtn.textContent = "Hide Sidebar";
  }

  if (navBar.classList.contains("navigation-bar")) {
    navBar.style.display = "none";
    console.dir(navBar);
  } else {
    navBar.style.display = "";
  }
};
