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
import { openNav, closeNav, navBar } from "./modules/openNavbar.js";

const openBtn = document.getElementById("logo"); // your mobile logo container

if (openBtn) {
  openBtn.addEventListener("click", () => {
    if (navBar.classList.contains("nav-open")) closeNav();
    else openNav();
  });
}

bgColorBtn.addEventListener("change", changeTheme);
clsNavBarBtn.addEventListener("click", hideSidebar);
opnNavBarBtn.addEventListener("click", openSidebar);

renderTasks();

newTaskBtnMobile.addEventListener("click", OpenEmptyModal);
newTaskBtnDesk.addEventListener("click", OpenEmptyModal);

addTaskBtn.addEventListener("click", AddNewTask);

modalCloseBtn.addEventListener("click", closeModal);
