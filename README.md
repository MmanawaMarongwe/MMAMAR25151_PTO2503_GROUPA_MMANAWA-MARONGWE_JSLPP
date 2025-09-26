# 📌 Kanban App  

## 🚀 Overview  
This Kanban app is a **task management tool** built with HTML, CSS, and JavaScript. It supports **task creation, editing, deletion, sidebar interaction, theme toggling (light/dark mode), and persistent storage**. The app is deployed on **Netlify** and designed to be responsive across devices, ensuring smooth use on desktop and mobile.  

## 🔗 Live Demo  
👉 [View the deployed app](https://kanbantaskboardmanagement.netlify.app/)  
👉 [Watch project presentation](https://docs.google.com/videos/d/1yfHVcnrfJqRpz9F3LIE6qj7rCz7Ky7n8HadFhpXD3Do/edit?usp=sharing))  

## ✨ Features  
- **Dynamic Task Management**: Create, edit, and delete tasks directly from the board.  
- **Local Storage Persistence**: Tasks remain saved after refreshing or closing the browser.  
- **API Integration**: Tasks are fetched from [jsl-kanban-api](https://jsl-kanban-api.vercel.app/) to ensure up-to-date data.  
- **Loading & Error States**: Displays feedback while fetching tasks or when an error occurs.  
- **Sidebar Interaction**: Toggleable sidebar with mobile and desktop versions.  
- **Theme Toggle**: Seamlessly switch between light and dark mode.  
- **Priority Sorting (Optional)**: Tasks can be given priority levels (High, Medium, Low), and are automatically ordered.  

## 🛠️ Tech Stack  
- **HTML5**  
- **CSS3** (responsive, mobile-first design)  
- **JavaScript (ES6+)**  
- **LocalStorage API**  
- **Netlify** (deployment & hosting)  

## 📖 How to Use  
1. Visit the [Live Demo](https://kanbantaskboardmanagement.netlify.app/).  
2. Add new tasks using the **New Task** button.  
3. Click a task to **edit details** or **delete it**.  
4. Use the **sidebar toggle** (desktop) or **menu icon** (mobile) to show/hide the sidebar.  
5. Switch between **dark and light mode** with the theme toggle.  
6. Tasks are automatically saved to **local storage** and reloaded on refresh.  

## 🧪 Code Quality
- Modular structure with dedicated JS files for different features.
- Documented with JSDoc comments.
- Clean, semantic HTML and reusable CSS variables.

##  🎯 Future Improvements
- Drag & drop functionality for tasks.
- User authentication (multi-user boards).
- Cloud-based data storage instead of localStorage.
