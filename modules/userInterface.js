import { arrangeTask } from "./arrangeTask.js";
import { createTask } from "./createTask.js";
import { getData } from "./api.js";

if (!localStorage.getItem("tasks")) {
  await getData();
}

const priorityOrder = {
  high: 1,
  medium: 2,
  low: 3,
};

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
  const tasks = getTasks();
  tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  document.getElementById("todo-list").innerHTML = "";
  document.getElementById("doing-list").innerHTML = "";
  document.getElementById("done-list").innerHTML = "";
  tasks.forEach((task) => {
    const taskCard = createTask(task);
    arrangeTask(task, taskCard);
    return taskCard;
  });
}
