import { displayTaskInModal } from "./updateTaskModal.js";
import { countTasks } from "./taskCounter.js";
import { prioritizeTasks } from "./taskPriority.js";

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
