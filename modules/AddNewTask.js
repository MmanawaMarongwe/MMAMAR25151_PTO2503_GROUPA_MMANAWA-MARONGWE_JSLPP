import { initialTasks } from "./initialData.js";
import { renderTasks, tasks } from "./userInterface.js";

const modalTitle = document.getElementById("new-task");
const modalDesc = document.getElementById("new-task-description");
const modalStatus = document.getElementById("new-task-status");
export const addTaskBtn = document.getElementById("create-btn");

/**
 * Generates the next unique task ID.
 *
 * This function finds the last task in the `initialTasks` array,
 * retrieves its ID, and returns the next incremental value.
 *
 * @returns {number} The ID value for the next task to be added.
 */
function getNextId() {
  //get the last object in the array and use it to get the next id
  const lastObject = initialTasks[initialTasks.length - 1];
  const lastId = lastObject.id;
  const nextId = lastId + 1;

  //return the next id so it can be used for the next object
  return nextId;
}

/**
 * Creates a new task from modal input fields and adds it to the tasks list.
 *
 * The function:
 * - Reads the task title, description, and status from modal input fields.
 * - Generates a new unique task ID using `getNextId()`.
 * - Pushes the new task object into the global `tasks` array.
 * - Saves the updated tasks array to `localStorage`.
 * - Re-renders the task list in the UI using `renderTasks()`.
 * - Clears the modal input fields after submission.
 *
 * @returns {void} Does not return a value.
 */
export function AddNewTask() {
  let newTaskTitle = modalTitle.value;
  let newTaskDesc = modalDesc.value;
  let newTaskStatus = modalStatus.value;

  let newTask = {
    id: getNextId(),
    title: newTaskTitle,
    description: newTaskDesc,
    status: newTaskStatus,
  };

  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();

  modalTitle.value = "";
  modalDesc.value = "";
  modalStatus.value = "";
}
