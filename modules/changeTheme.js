export const bgColorBtn = document.getElementById("theme-toggle");
const pageBody = document.getElementsByClassName("main-grid")[0];
const taskGrid = document.getElementsByClassName("task-grid")[0];
const logoEl = document.querySelector("img");
const headerEl = document.getElementById("grid-header");
const themeToggleEl = document.getElementsByClassName("toggle-label")[0];
const allButtons = document.querySelectorAll("button");

export const changeTheme = () => {
  if (pageBody.style.backgroundColor === "rgb(43, 44, 55)") {
    pageBody.style.backgroundColor = "#ffffff"; // light
  } else {
    pageBody.style.backgroundColor = "rgb(43, 44, 55)"; // dark
  }

  if (taskGrid.style.backgroundColor == "rgb(32, 33, 44)") {
    taskGrid.style.backgroundColor = "#f4f7fd";
  } else {
    taskGrid.style.backgroundColor = "rgb(32, 33, 44)";
  }

  if (logoEl.getAttribute("src") === "assets/logo-light.svg") {
    logoEl.setAttribute("src", "assets/logo-dark.svg");
    logoEl.style.width = "150px";
  } else {
    logoEl.setAttribute("src", "assets/logo-light.svg");
  }

  if (headerEl.style.color === "rgb(255, 255, 255)") {
    headerEl.style.color = "rgb(0, 0, 0)";
  } else {
    headerEl.style.color = "rgb(255, 255, 255)";
  }

  if (themeToggleEl.style.backgroundColor === "rgb(99, 95, 199)") {
    themeToggleEl.style.backgroundColor = "rgb(228, 235, 250)";
  } else {
    themeToggleEl.style.backgroundColor = "rgb(99, 95, 199)";
  }
  allButtons.forEach((btn) => {
    if (btn.style.border === "1px solid rgb(99, 95, 199)") {
      btn.style.border = "1px solid rgb(255, 255, 255)";
    } else {
      btn.style.border = "1px solid rgb(99, 95, 199)";
    }
  });
};
