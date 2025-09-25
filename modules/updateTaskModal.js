import { getTasks, renderTasks } from "./userInterface.js";
const modal = document.getElementsByClassName("overlay")[0];
const modalCloseBtn = document.getElementsByClassName("modal-close")[0];
const modalTitle = document.getElementById("task-name-field");
const modalDesc = document.getElementById("task-description");
const modalStatus = document.getElementById("task-status");
const modalPriority = document.getElementById("task-priority");
const saveBtn = document.getElementById("update-task-btn");
const dltBtn = document.getElementById("delete-task");

/**
 * Shows the task data inside the modal
 *
 * @param {{ title: string, description: string, status: string }} task
 *  The task object (status is one of "todo", "doing", "done")
 * @returns {void}
 */
export function displayTaskInModal(task) {
  modal.dataset.id = task.id;
  console.log(modal.dataset.id);
  modalTitle.value = task.title || "";
  modalDesc.value = task.description || "";
  modalStatus.value = task.status.toLowerCase() || "todo";
  modalPriority.value = task.priority.toLowerCase() || "medium";
  modal.style.display = "flex";

  saveBtn.addEventListener("click", saveTaskChanges);
  dltBtn.addEventListener("click", deleteTask);
}

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

function saveTaskChanges() {
  const id = Number(modal.dataset.id);
  const tasks = getTasks();
  const i = tasks.findIndex((task) => task.id === id);
  if (i === -1) return; // task not found, bail

  // update fields
  tasks[i] = {
    ...tasks[i],
    title: modalTitle.value.trim(),
    description: modalDesc.value.trim(),
    status: modalStatus.value,
    priority: modalPriority.value,
  };

  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(tasks);
  modal.style.display = "none";
  renderTasks();
}

function deleteTask() {
  const id = Number(modal.dataset.id);
  let tasks = getTasks();
  const i = tasks.findIndex((task) => task.id === id);
  if (i === -1) return; // task not found, bail

  const confirmed = confirm("Are you sure you want to delete this task?");

  if (!confirmed) {
    modal.style.display = "none";
    return;
  }

  tasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  console.log(tasks);
  modal.style.display = "none";
}
