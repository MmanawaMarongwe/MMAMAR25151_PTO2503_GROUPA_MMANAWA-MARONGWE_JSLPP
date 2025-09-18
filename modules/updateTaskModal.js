import { getTasks, renderTasks } from "./userInterface.js";
const modal = document.getElementsByClassName("overlay")[0];
const modalCloseBtn = document.getElementsByClassName("modal-close")[0];
const modalTitle = document.getElementById("task-name-field");
const modalDesc = document.getElementById("task-description");
const modalStatus = document.getElementById("task-status");
const saveBtn = document.getElementById("update-task-btn");

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
  modal.style.display = "flex";

  saveBtn.addEventListener("click", saveTaskChanges);
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
  };

  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(tasks);
  modal.style.display = "none";
  renderTasks();
}

/*get id from modal.dataset.id
    load tasks array from localStorage
    find the task in tasks array with matching id
    
    update that task’s title = value from title input
    update that task’s description = value from description textarea
    update that task’s status = value from status dropdown

    save updated tasks array back to localStorage
    re-render the task board
    hide the modal overlay*/
