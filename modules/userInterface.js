import { initialTasks } from "./initialData.js";
import { arrangeTask } from "./arrangeTask.js";
import { createTask } from "./createTask.js";
if (!localStorage.getItem("tasks")) {
  localStorage.setItem("tasks", JSON.stringify(initialTasks));
}

/**
 * Retrieves the list of tasks from localStorage.
 * If no tasks are found, returns an empty array.
 *
 * @function
 * @returns {array} An array of task objects stored in localStorage,
 *   or an empty array if none exist.
 */
export function getTasks() {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [];
}

export const tasks = getTasks();

/**
 * Loops through all task objects in the array and renders them on the page
 * @returns {HTMLDivElement} - The created task card
 */
export function renderTasks() {
  document.getElementById("todo-list").innerHTML = "";
  document.getElementById("doing-list").innerHTML = "";
  document.getElementById("done-list").innerHTML = "";
  tasks.forEach((task) => {
    const taskCard = createTask(task);
    arrangeTask(task, taskCard);
    return taskCard;
  });
}
