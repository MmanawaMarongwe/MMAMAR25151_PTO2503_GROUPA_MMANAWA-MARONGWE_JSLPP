import { displayTaskInModal } from "./ExistingTaskModal.js";
import { countTasks } from "./taskCounter.js";

/**
 * Creates a task card element containing the task title
 * and sets up an event listener to display the task in a modal.
 *
 * @param {object} task -
 *   The task object containing a title, description and status.
 * @returns {HTMLDivElement} The created task card element with the title inside a <p>.
 */
export function createTask(task) {
  const taskCard = document.createElement("div");
  taskCard.className = "task-name";
  const taskTitle = document.createElement("p");
  taskTitle.textContent = task.title;
  taskCard.appendChild(taskTitle);
  countTasks();
  taskCard.addEventListener("click", () => displayTaskInModal(task));
  return taskCard;
}
