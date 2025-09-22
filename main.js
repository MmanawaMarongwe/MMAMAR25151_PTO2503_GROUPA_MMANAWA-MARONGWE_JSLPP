import { renderTasks } from "./modules/userInterface.js";
import { changeTheme, bgColorBtn } from "./modules/changeTheme.js";
import { AddNewTask, addTaskBtn } from "./modules/AddNewTask.js";
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

bgColorBtn.addEventListener("change", changeTheme);

renderTasks();

clsNavBarBtn.addEventListener("click", hideSidebar);
opnNavBarBtn.addEventListener("click", openSidebar);

newTaskBtnMobile.addEventListener("click", OpenEmptyModal);
newTaskBtnDesk.addEventListener("click", OpenEmptyModal);

addTaskBtn.addEventListener("click", AddNewTask);

modalCloseBtn.addEventListener("click", closeModal);
