import { renderTasks } from "./modules/userInterface.js";
import { AddNewTask, addTaskBtn } from "./modules/AddNewTask.js";
import {
  OpenEmptyModal,
  newTaskBtnDesk,
  newTaskBtnMobile,
  closeModal,
  modalCloseBtn,
} from "./modules/NewTaskModal.js";

renderTasks();

newTaskBtnMobile.addEventListener("click", OpenEmptyModal);
newTaskBtnDesk.addEventListener("click", OpenEmptyModal);

addTaskBtn.addEventListener("click", AddNewTask);

modalCloseBtn.addEventListener("click", closeModal);
