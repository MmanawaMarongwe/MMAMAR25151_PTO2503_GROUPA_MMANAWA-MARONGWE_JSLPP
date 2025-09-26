import { renderTasks } from "./modules/userInterface.js";
import { AddNewTask, addTaskBtn } from "./modules/AddNewTask.js";
import { changeTheme, bgColorBtn } from "./modules/changeTheme.js";
import {
  hideSidebar,
  clsNavBarBtn,
  opnNavBarBtn,
  openSidebar,
} from "./modules/hideSideBar.js";
import {
  OpenEmptyModal,
  newTaskBtnDesk,
  newTaskBtnMobile,
  closeModal,
  modalCloseBtn,
} from "./modules/NewTaskModal.js";
import {
  openMToggle,
  closeNav,
  mToggle,
  openNav,
  clsMToggle,
} from "./modules/openMobToggle.js";

document.documentElement.classList.add("preload");
window.addEventListener("DOMContentLoaded", () =>
  document.documentElement.classList.remove("preload")
);
if (openMToggle) {
  openMToggle.addEventListener("click", () => {
    if (mToggle.classList.contains("nav-open")) closeNav();
    else openNav();
  });
}

if (clsMToggle) {
  clsMToggle.addEventListener("click", closeNav);
}

bgColorBtn.addEventListener("change", changeTheme);
clsNavBarBtn.addEventListener("click", hideSidebar);
opnNavBarBtn.addEventListener("click", openSidebar);

renderTasks();

newTaskBtnMobile.addEventListener("click", OpenEmptyModal);
newTaskBtnDesk.addEventListener("click", OpenEmptyModal);

addTaskBtn.addEventListener("click", AddNewTask);

modalCloseBtn.addEventListener("click", closeModal);
