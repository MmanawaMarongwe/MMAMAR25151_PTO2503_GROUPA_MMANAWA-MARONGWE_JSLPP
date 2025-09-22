export const bgColorBtn = document.getElementById("theme-toggle");
const logoEl = document.getElementById("img-logo");

export function changeTheme() {
  if (bgColorBtn.checked) {
    document.documentElement.classList.add("dark"); //
    logoEl.setAttribute("src", "assets/logo-dark.svg");
  } else {
    document.documentElement.classList.remove("dark");
    logoEl.setAttribute("src", "assets/logo-light.svg");
  }
}
