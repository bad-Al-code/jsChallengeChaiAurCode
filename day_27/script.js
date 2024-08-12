const tasks = [];

function handleFormSubmit(event) {
  event.preventDefault();

  const title = document.getElementById("task-title").value;
  const description = document.getElementById("task-desc").value;
  const dueDate = document.getElementById("task-due-date").value;

  const newTask = {
    title,
    description,
    dueDate,
    id: Date.now(),
  };

  tasks.push(newTask);

  displayTasks();

  document.getElementById("task-form").reset();
}

function displayTasks() {
  const taskList = document.getElementById("tasks");
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.textContent = `${task.title} - ${task.description} (Due: ${task.dueDate})`;
    taskList.appendChild(taskItem);
  });
}

document
  .getElementById("task-form")
  .addEventListener("submit", handleFormSubmit);
