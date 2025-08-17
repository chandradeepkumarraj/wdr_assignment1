// Load tasks on page load
document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (taskText === '') return;

  createTaskElement(taskText, false);
  input.value = '';
  saveTasks();
}

// This function add new task 

function createTaskElement(text, completed) {
  const taskItem = document.createElement('li');
  taskItem.className = 'list-group-item d-flex justify-content-between align-items-center task-item';
  if (completed) taskItem.classList.add('completed');

  const textNode = document.createElement('div');
  textNode.className = 'form-check overflow-x-auto text-break';
  textNode.innerHTML = `
    <input class="form-check-input rounded-5 ms-1 fs-5 text-center" id="taskCheckbox" type="checkbox" ${completed ? 'checked' : ''} onchange="toggleComplete(this)">
  `;
  const label = document.createElement('label');
  label.className = 'form-check-label task-text fs-5 ms-2';
  label.textContent = text;
  textNode.appendChild(label);
  taskItem.appendChild(textNode);

  const removeButton = document.createElement('button');
  removeButton.className = 'btn btn-sm btn-danger';
  removeButton.innerHTML = '<i class="bi bi-trash"></i>';
  removeButton.onclick = () => removeTask(removeButton);
  taskItem.appendChild(removeButton);


  document.getElementById('taskList').appendChild(taskItem);
}

// task checkbox tick function

function toggleComplete(checkbox) {
  const taskItem = checkbox.closest('.task-item');
  taskItem.classList.toggle('completed');
  saveTasks();
}

// task remove function
function removeTask(button) {
  const taskItem = button.closest('.task-item');
  taskItem.remove();
  saveTasks();
}

// task save function offline

function saveTasks() {
  const tasks = [];
  document.querySelectorAll('#taskList .task-item').forEach(item => {
    const label = item.querySelector('.task-text');
    const checkbox = item.querySelector('input[type="checkbox"]');
    tasks.push({
      text: label?.textContent,
      completed: checkbox?.checked
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const stored = localStorage.getItem('tasks');
  if (!stored) return;

  const tasks = JSON.parse(stored);
  tasks.forEach(task => {
    createTaskElement(task.text, task.completed);
  });
}
