export const bgColorBtn = document.getElementById("theme-toggle");

export function changeTheme() {
  if (bgColorBtn.checked) {
    document.documentElement.classList.add("dark"); //
  } else {
    document.documentElement.classList.remove("dark");
  }
}
