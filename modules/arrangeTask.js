const todoTasks = document.getElementById("todo-list");
const doingTasks = document.getElementById("doing-list");
const doneTasks = document.getElementById("done-list");

/**
 * Appends the task element into the correct container according to their status (todo/doing/done)
 *
 * @param {{status: string}} task - The task object with status property
 * @param {HTMLDivElement} taskCard - The created task card
 * @returns {void}
 */
export function arrangeTask(task, taskCard) {
  if (task.status === "done") {
    doneTasks.appendChild(taskCard);
  }
  if (task.status === "todo") {
    todoTasks.appendChild(taskCard);
  }
  if (task.status === "doing") {
    doingTasks.appendChild(taskCard);
  }
}
