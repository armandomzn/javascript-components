/*** DOM Elements ***/
let alertTimeout;
const task = document.getElementById("task");
const taskForm = document.querySelector(".task-form");
const taskList = document.querySelector(".task-list");
const taskContainer = document.querySelector(".task-container");
const alert = document.querySelector(".alert");
const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");

/*** Variables ***/
let editID = null;
let editFlag = false;
let editTaskValue = "";

/*** Listeners ***/
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = task.value.trim();
  if (!value) {
    showAlert("please provide task name", "red");
    return;
  }
  if (editFlag) {
    editTaskValue.innerHTML = value;
    editLocalStorage(
      editID,
      value,
      editTaskValue.previousElementSibling.checked
    );
    showAlert("task updated", "info");
    setToDefault();
  } else {
    const id = crypto.randomUUID();
    createTask(id, value);
    showAlert("item added to the list", "success");
    taskContainer.classList.add("show-container");
    setToDefault();
    addToLocalStorage(id, value);
  }
});
clearBtn.addEventListener("click", clearItems);
window.addEventListener("DOMContentLoaded", (e) => {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createTask(item.id, item.value, item.completed);
    });
    taskContainer.classList.add("show-container");
  }
});
/*** Functions ***/
function showAlert(text, type) {
  // we clean the current alert timeout if exist to avoid side effects in alert on the dom
  if (alertTimeout) {
    clearTimeout(alertTimeout);
  }
  alert.textContent = text;
  //   alert.classList.add(`alert-${type}`);
  alert.className = `alert alert-${type}`;
  alert.classList.remove("invisible");

  alertTimeout = setTimeout(() => {
    alert.textContent = "";
    alert.classList.add("invisible");
    alert.classList.remove(`alert-${type}`);
    alertTimeout = undefined;
  }, 2000);
}

function createTask(id, value, completed = false) {
  const taskElement = document.createElement("article");
  taskElement.classList.add("task-item");
  taskElement.setAttribute("data-id", id);
  taskElement.innerHTML = `
    <input type="checkbox" ${completed ? "checked" : ""} />
    <p ${completed ? `class="completed"` : ""}>
    ${value}
    </p>
    <div class="btn-container">
    <span class="edit-btn">
        <i class="fa-solid fa-pen-to-square"></i
    ></span>
    <span class="delete-btn">
        <i class="fa-solid fa-trash"></i
    ></span>
    </div>
    `;
  const editBtn = taskElement.querySelector(".edit-btn");
  editBtn.addEventListener("click", editTask);
  const deleteBtn = taskElement.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteTask);
  const completedElement = taskElement.querySelector("input[type='checkbox']");
  completedElement.addEventListener("click", completedTask);
  taskList.appendChild(taskElement);
}

function setToDefault() {
  editID = null;
  editTaskValue = "";
  editFlag = false;
  task.value = "";
  submitBtn.value = "submit";
}

function editTask(e) {
  editID = e.currentTarget.parentElement.parentElement.dataset.id;
  editFlag = true;
  editTaskValue = e.currentTarget.parentElement.previousElementSibling;
  task.value = editTaskValue.textContent.trim();
  task.focus();
  submitBtn.value = "edit";
}

function deleteTask(e) {
  const id = e.currentTarget.parentElement.parentElement.dataset.id;
  const element = e.currentTarget.parentElement.parentElement;
  taskList.removeChild(element);
  if (taskList.children.length === 0) {
    taskContainer.classList.remove("show-container");
  }
  showAlert("task removed", "red");
  setToDefault();
  removeFromLocalStorage(id);
}

function completedTask(e) {
  const state = e.currentTarget.checked;
  const paragraph = e.currentTarget.nextElementSibling;
  if (!state) {
    e.currentTarget.removeAttribute("checked");
    paragraph.classList.remove("completed");
  } else {
    paragraph.classList.add("completed");
  }
  const id = e.currentTarget.parentElement.dataset.id;
  editLocalStorage(id, e.currentTarget.nextElementSibling.textContent, state);
}

/*** LocalStorage ***/
function getLocalStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function addToLocalStorage(id, value) {
  const item = { id, value, completed: false };
  let items = getLocalStorage();
  items = [...items, item];
  localStorage.setItem("tasks", JSON.stringify(items));
}

function editLocalStorage(id, value, completed) {
  let items = getLocalStorage();
  items = items.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        value,
        completed,
      };
    }
    return item;
  });
  localStorage.setItem("tasks", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter((item) => {
    return item.id !== id;
  });
  localStorage.setItem("tasks", JSON.stringify(items));
}

function clearItems(e) {
  let items = document.querySelectorAll(".task-item");
  items.forEach((item) => {
    taskList.removeChild(item);
  });
  taskContainer.classList.remove("show-container");
  showAlert("items deleted successfully", "red");
  setToDefault();
  localStorage.removeItem("tasks");
}
