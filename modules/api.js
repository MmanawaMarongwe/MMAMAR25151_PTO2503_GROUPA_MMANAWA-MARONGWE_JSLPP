// api.js
export async function getData() {
  const url = "https://jsl-kanban-api.vercel.app";
  const response = await fetch(url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API data:", data);
    // Save to localStorage
    localStorage.setItem("tasks", JSON.stringify(data));

    console.log("Tasks saved to localStorage:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
  }
}
