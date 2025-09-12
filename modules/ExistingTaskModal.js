const modal = document.getElementsByClassName("overlay")[0];
const modalCloseBtn = document.getElementsByClassName("modal-close")[0];

const modalTitle = document.getElementById("task-name-field");
const modalDesc = document.getElementById("task-description");
const modalStatus = document.getElementById("task-status");

/**
 * Shows the task data inside the modal
 *
 * @param {{ title: string, description: string, status: string }} task
 *  The task object (status is one of "todo", "doing", "done")
 * @returns {void}
 */
export function displayTaskInModal(task) {
  modalTitle.value = task.title;
  modalDesc.value = task.description;
  modalStatus.value = task.status.toLowerCase();
  modal.style.display = "flex";
}

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
