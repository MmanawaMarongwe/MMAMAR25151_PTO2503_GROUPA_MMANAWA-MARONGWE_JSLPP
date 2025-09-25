import { displayTaskInModal } from "./updateTaskModal.js";
import { countTasks } from "./taskCounter.js";

/**
 * Creates a task card element for display in the task board.
 *
 * - Builds a container `<div>` with the task title and a colored status ball.
 * - The status ball color reflects the task's priority:
 *   - Red for "high"
 *   - Orange for "medium"
 *   - Green for "low"
 * - Calls `countTasks()` to update task counters.
 * - Attaches a click event listener to open the task in a modal view.
 *
 * @param {Object} task - The task object.
 * @param {string} task.title - The title of the task.
 * @param {string} task.description - The description of the task.
 * @param {string} task.status - The status of the task (e.g., `"todo"`, `"doing"`, `"done"`).
 * @param {("high"|"medium"|"low")} task.priority - The priority level of the task.
 * @returns {HTMLDivElement} The created task card element containing the task title and status indicator.
 */
export function createTask(task) {
  const taskCard = document.createElement("div");
  taskCard.className = "task-name";

  const taskTitle = document.createElement("p");
  taskTitle.className = "task-title";

  const text = document.createElement("span");
  text.className = "task-text";
  text.textContent = task.title;

  const ball = document.createElement("span");
  ball.className = "status-ball";

  switch (task.priority) {
    case "high":
      ball.style.backgroundColor = "red";
      break;
    case "medium":
      ball.style.backgroundColor = "orange";
      break;
    case "low":
      ball.style.backgroundColor = "green";
      break;
  }

  taskTitle.append(text, ball);
  taskCard.appendChild(taskTitle);

  countTasks();

  taskCard.addEventListener("click", () => displayTaskInModal(task));
  return taskCard;
}
