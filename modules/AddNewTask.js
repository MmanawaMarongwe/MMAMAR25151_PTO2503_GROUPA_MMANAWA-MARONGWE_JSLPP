import { renderTasks, getTasks } from "./userInterface.js";

const modalTitle = document.getElementById("new-task");
const modalDesc = document.getElementById("new-task-description");
const modalStatus = document.getElementById("new-task-status");
const modalPriority = document.getElementById("new-task-priority");
export const addTaskBtn = document.getElementById("create-btn");
const tasks = getTasks();
/**
 * Generates the next unique task ID.
 *
 * This function finds the last task in the `initialTasks` array,
 * retrieves its ID, and returns the next incremental value.
 *
 * @returns {number} The ID value for the next task to be added.
 */
function getNextId() {
  const lastObject = tasks[tasks.length - 1];
  const lastId = lastObject.id;
  const nextId = lastId + 1;
  return nextId;
}

/**
 * Creates and adds a new task from modal input fields.
 *
 * Steps performed:
 * - Reads task details (title, description, status, and priority) from modal inputs.
 * - Generates a new unique `id` using  getNextId function.
 * - Builds a new task object and pushes it to the global `tasks` array.
 * - Persists the updated task list in `localStorage`.
 * - Calls `renderTasks()` to refresh the UI.
 * - Clears modal input fields for future use.
 * @returns {void} This function does not return a value.
 */
export function AddNewTask() {
  let newTaskTitle = modalTitle.value;
  let newTaskDesc = modalDesc.value;
  let newTaskStatus = modalStatus.value;
  let newTaskPriority = modalPriority.value;

  let newTask = {
    id: getNextId(),
    title: newTaskTitle,
    description: newTaskDesc,
    priority: newTaskPriority,
    status: newTaskStatus,
  };

  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  document.getElementById("todo-list").innerHTML = "";
  document.getElementById("doing-list").innerHTML = "";
  document.getElementById("done-list").innerHTML = "";
  renderTasks();

  modalTitle.value = "";
  modalDesc.value = "";
  modalStatus.value = "todo";
  modalPriority = "medium";
}
