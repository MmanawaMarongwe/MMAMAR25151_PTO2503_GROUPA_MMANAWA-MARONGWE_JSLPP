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
 * Displays task details inside the modal for viewing or editing.
 *
 * - Sets the modal dataset ID to the task's `id`.
 * - Populates modal fields (`title`, `description`, `status`, `priority`) with task data.
 * - Defaults missing fields to safe fallback values.
 * - Shows the modal by setting its display style to `flex`.
 * - Attaches click event listeners for saving and deleting the task.
 *
 * @param {Object} task - The task object to display.
 * @param {number} task.id - The unique ID of the task.
 * @param {string} task.title - The task title.
 * @param {string} task.description - The task description.
 * @param {"todo"|"doing"|"done"} task.status - The current task status.
 * @param {"high"|"medium"|"low"} task.priority - The task priority level.
 * @returns {void} Does not return a value.
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

/**
 * Saves changes made to a task from the modal back into storage.
 *
 * - Retrieves the task ID from the modal dataset.
 * - Finds the matching task in the stored tasks array.
 * - Updates the task's fields (title, description, status, priority)
 *   with the current modal input values.
 * - Persists the updated task list to `localStorage`.
 * - Hides the modal and re-renders the task list in the UI.
 * - If the task cannot be found, exits without changes.
 *
 * @returns {void} Does not return a value.
 */
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
  document.getElementById("todo-list").innerHTML = "";
  document.getElementById("doing-list").innerHTML = "";
  document.getElementById("done-list").innerHTML = "";
  renderTasks();
}

/**
 * Deletes a task from storage and updates the UI.
 *
 * - Retrieves the task ID from the modal dataset.
 * - Locates the matching task in the stored tasks array.
 * - Prompts the user with a confirmation dialog.
 *   - If not confirmed, closes the modal without changes.
 * - If confirmed:
 *   - Removes the task from the array.
 *   - Persists the updated tasks array to `localStorage`.
 *   - Re-renders the task list in the UI.
 *   - Hides the modal after completion.
 * - If the task is not found, exits without making changes.
 *
 * @returns {void} Does not return a value.
 */
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
  document.getElementById("todo-list").innerHTML = "";
  document.getElementById("doing-list").innerHTML = "";
  document.getElementById("done-list").innerHTML = "";
  renderTasks();
  console.log(tasks);
  modal.style.display = "none";
}
