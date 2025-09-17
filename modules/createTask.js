import { displayTaskInModal } from "./updateTaskModal.js";
import { countTasks } from "./taskCounter.js";
import { bgColorBtn } from "./changeTheme.js";

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
  bgColorBtn.addEventListener("change", () => {
    if (taskCard.style.backgroundColor == "rgb(44, 44, 55)") {
      taskCard.style.backgroundColor = "rgb(255, 255, 255)";
      taskCard.style.color = "rgb(44, 44, 55)";
    } else {
      taskCard.style.backgroundColor = "rgb(44, 44, 55)";
      taskCard.style.color = "rgb(255, 255, 255)";
      taskCard.style.boxShadow = "none";
    }
  });
  return taskCard;
}
