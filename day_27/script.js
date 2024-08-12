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
    taskItem.className = "task-item";

    taskItem.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <small>Due Date: ${task.dueDate}</small>
        `;
    taskList.appendChild(taskItem);
  });
}

document
  .getElementById("task-form")
  .addEventListener("submit", handleFormSubmit);
