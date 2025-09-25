/**
 * Fetches tasks from the Kanban API, enhances them, and stores them locally.
 *
 * Steps performed:
 * - Displays a temporary alert that tasks are loading.
 * - Sends a `fetch` request to the Kanban API.
 * - Throws an error if the response is not OK.
 * - Parses the JSON response and adds a default `priority` property to each task, default low.
 * - Saves the updated task array into `localStorage`.
 * - Returns the task array for further use.
 * - If the request fails, shows an error alert and logs the error in the console.
 *
 * @returns {Promise<object[]|undefined>} A promise resolving to an array of task objects with `priority` added,
 * or `undefined` if the request fails.
 */
export async function getData() {
  const url = "https://jsl-kanban-api.vercel.app";
  try {
    showTempAlert("Loading tasks…");
    const response = await fetch(url);
    if (!response.ok) {
      const erMsg = "API failed to fetch";
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();
    console.log("API data:", data);

    data = data.map((task) => ({
      ...task,
      priority: "low",
    }));
    localStorage.setItem("tasks", JSON.stringify(data));

    return data;
  } catch (error) {
    showTempAlert("Failed to load tasks. Please check your connection.", 5000);
    console.error("Failed to fetch tasks:", error);
  }
}

/**
 * Displays a temporary message on the screen.
 *
 * Creates a floating `div` element positioned at the top center of the viewport,
 * styled with a background color, padding, and rounded corners. The element
 * automatically disappears after the specified duration.
 *
 * @param {string} msg - The message text to display.
 * @param {number} [duration=1000] - Duration in milliseconds before the alert disappears.
 * Defaults to 1000 ms (1 second).
 * @returns {void} Does not return a value.
 */
function showTempAlert(msg, duration = 1000) {
  const el = document.createElement("div");
  el.textContent = msg;
  el.style.position = "fixed";
  el.style.top = "60px";
  el.style.left = "50%";
  el.style.transform = "translateX(-50%)";
  el.style.background = "#828fa3";
  el.style.color = "#fff";
  el.style.padding = "20px 20px";
  el.style.borderRadius = "5px";
  el.style.zIndex = 1000;
  document.body.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, duration);
}
