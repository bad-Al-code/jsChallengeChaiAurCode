const tasks = [];

function handleFormSubmit(event) {
  event.preventDefault();

  const title = document.getElementById("task-title").value;
  const description = document.getElementById("task-desc").value;
  const dueDate = document.getElementById("task-due-date").value;

  const editingTaskId = document
    .getElementById("task-form")
    .getAttribute("data-editing-task-id");

  if (editingTaskId) {
    updateTask(editingTaskId, { title, description, dueDate });
    document
      .getElementById("task-form")
      .removeAttribute("data-editing-task-id");
  } else {
    const newTask = {
      title,
      description,
      dueDate,
      id: Date.now(),
    };

    tasks.push(newTask);
  }
  displayTasks();

  document.getElementById("task-form").reset();
}

function updateTask(taskId, updatedDetails) {
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(taskId));

  if (taskIndex > -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedDetails };
  }
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
            <div class="button-container">
                <button class="edit-task" onclick="editTask(${task.id})">Edit</button>
                <button class="delete-task" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
    taskList.appendChild(taskItem);
  });
}

function editTask(taskId) {
  const taskToEdit = tasks.find((task) => task.id === taskId);

  if (taskToEdit) {
    document.getElementById("task-title").value = taskToEdit.title;
    document.getElementById("task-desc").value = taskToEdit.description;
    document.getElementById("task-due-date").value = taskToEdit.dueDate;

    document
      .getElementById("task-form")
      .setAttribute("data-editing-task-id", taskId);
  }
}

function deleteTask(taskId) {
  const confirmation = window.confirm(
    "Are you sure you want to delete this task?",
  );

  if (confirmation) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex > -1) {
      tasks.splice(taskIndex, 1);
      displayTasks();
    }
  }
}

document
  .getElementById("task-form")
  .addEventListener("submit", handleFormSubmit);
