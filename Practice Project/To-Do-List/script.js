// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Create a task item
function createTaskItem(text) {
  const li = document.createElement("li");
  li.textContent = text;

  // Toggle completed on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Double-click to remove with fade animation
  li.addEventListener("dblclick", () => {
    if (li.classList.contains("removing")) return;
    li.classList.add("removing");
    li.addEventListener(
      "animationend",
      () => {
        if (li.parentElement) li.parentElement.removeChild(li);
      },
      { once: true }
    );
  });

  return li;
}

// Add task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
  const li = createTaskItem(taskText);
  taskList.insertBefore(li, taskList.firstChild);
  taskInput.value = "";
});

// Press Enter to add task
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTaskBtn.click();
});
