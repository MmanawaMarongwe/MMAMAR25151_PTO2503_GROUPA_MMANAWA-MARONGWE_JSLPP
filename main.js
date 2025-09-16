import { renderTasks } from "./modules/userInterface.js";
import { AddNewTask, addTaskBtn } from "./modules/AddNewTask.js";
import { changeTheme, bgColorBtn } from "./modules/changeTheme.js";
import { hideSidebar, sidebarBtn } from "./modules/hideSideBar.js";
import {
  OpenEmptyModal,
  newTaskBtnDesk,
  newTaskBtnMobile,
  closeModal,
  modalCloseBtn,
} from "./modules/NewTaskModal.js";

bgColorBtn.addEventListener("change", changeTheme);
sidebarBtn.addEventListener("click", hideSidebar);

renderTasks();

newTaskBtnMobile.addEventListener("click", OpenEmptyModal);
newTaskBtnDesk.addEventListener("click", OpenEmptyModal);

addTaskBtn.addEventListener("click", AddNewTask);

modalCloseBtn.addEventListener("click", closeModal);
