import { arrangeTask } from "./arrangeTask.js";
import { createTask } from "./createTask.js";
import { getData } from "./api.js";

const priorityOrder = {
  high: 1,
  medium: 2,
  low: 3,
};

if (!localStorage.getItem("tasks")) {
  await getData();
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
 * Renders all tasks onto the page in their respective columns.
 *
 * - Retrieves the task list from storage using `getTasks()`.
 * - Sorts tasks by priority (high → medium → low).
 * - Clears the existing content in the `todo`, `doing`, and `done` lists.
 * - Creates a task card for each task using {@link createTask}.
 * - Places each card in the correct column using `arrangeTask`.
 *
 * @function
 * @returns {HTMLDivElement} taskCard - The created task card
 */
export function renderTasks() {
  const tasks = getTasks();
  tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  tasks.forEach((task) => {
    const taskCard = createTask(task);
    arrangeTask(task, taskCard);
  });
}
