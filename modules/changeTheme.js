export const bgColorBtn = document.getElementById("theme-toggle");
const logoEl = document.getElementById("img-logo");

// Apply saved theme
const saved = localStorage.getItem("theme") || "light";
document.documentElement.classList.toggle("dark", saved === "dark");
logoEl.src =
  saved === "dark" ? "assets/logo-dark.svg" : "assets/logo-light.svg";
bgColorBtn.checked = saved === "dark";

// Function to change theme
export function changeTheme() {
  const theme = bgColorBtn.checked ? "dark" : "light";

  document.documentElement.classList.toggle("dark", theme === "dark");
  logoEl.src =
    theme === "dark" ? "assets/logo-dark.svg" : "assets/logo-light.svg";

  localStorage.setItem("theme", theme);
}
