export async function getData() {
  const url = "https://jsl-kanban-api.vercel.app";
  try {
    showTempAlert("Loading tasks…");
    const response = await fetch(url);
    if (!response.ok) {
      const erMsg = "API failed to fetch";
      alert(erMsg);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();
    console.log("API data:", data);

    data = data.map((task) => ({
      ...task,
      priority: "low", // <-- your extra key
    }));
    localStorage.setItem("tasks", JSON.stringify(data));

    return data;
  } catch (error) {
    showTempAlert("Failed to load tasks. Please check your connection.", 5000);
    console.error("Failed to fetch tasks:", error);
  }
}

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
