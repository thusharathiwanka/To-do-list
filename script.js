//Selecting elements form HTML document
const taskInput = document.querySelector(".task-input");
const addBtn = document.querySelector(".add-btn");
const taskList = document.querySelector(".task-list");

//Adding event listeners
addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", taskDeleteCheck);

//Creating function for add tasks
function addTask(event) {
  //Prevent form from submitting
  event.preventDefault();
  if (taskInput.value.length !== 0) {
    //Creating div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    //Creating li
    const newTask = document.createElement("li");
    newTask.innerText = taskInput.value;
    newTask.classList.add("task-item");
    taskDiv.appendChild(newTask);

    //Adding check button
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.innerHTML = "<li class='fas fa-check'></li>";
    taskDiv.appendChild(completeBtn);

    //Adding remove button
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.innerHTML = "<li class='fas fa-trash'></li>";
    taskDiv.appendChild(removeBtn);

    //Append div to list
    taskList.appendChild(taskDiv);

    //Clearing input value
    taskInput.value = "";
  }
}

//Creating function for delete task
function taskDeleteCheck(element) {
  const clickElement = element.target;

  if (clickElement.classList[0] === "remove-btn") {
    clickElement.parentElement.remove();
  }

  if (clickElement.classList[0] === "complete-btn") {
    clickElement.parentElement.classList.toggle("completed");
  }
}
