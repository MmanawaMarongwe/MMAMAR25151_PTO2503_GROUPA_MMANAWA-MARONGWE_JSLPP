export const newTaskBtnMobile = document.getElementById("add-task");
export const newTaskBtnDesk = document.getElementById("add-task-desktop");
const modal = document.getElementById("empty-modal");
export const modalCloseBtn = document.getElementsByClassName("modal-close")[1];

export function OpenEmptyModal() {
  modal.style.display = "flex";
}

export function closeModal() {
  modal.style.display = "none";
}
