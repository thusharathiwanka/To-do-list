//Selecting elements form HTML document
const taskInput = document.querySelector(".task-input");
const addBtn = document.querySelector(".add-btn");
const taskList = document.querySelector(".task-list");
const filterOption = document.querySelector(".filter-task");

//Adding event listeners
addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", taskDeleteCheck);
filterOption.addEventListener("click", filterTask);

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

//Creating function for delete and check task
function taskDeleteCheck(element) {
  const clickElement = element.target;

  if (clickElement.classList[0] === "remove-btn") {
    clickElement.parentElement.classList.add("deleted");
    /* Setting timeout for calling remove or
    add event listener of transition end */
    setTimeout(() => {
      clickElement.parentElement.remove();
    }, 500);
  }

  if (clickElement.classList[0] === "complete-btn") {
    clickElement.parentElement.classList.toggle("completed");
  }
}

//Creating function for filtering
function filterTask(element) {
  //Selecting all divs
  const tasks = taskList.querySelectorAll("div");
  //Checking each div and adding styles according to class name
  tasks.forEach((task) => {
    if (element.target.value === "all") {
      task.style.display = "flex";
      return;
    }
    //Checking if select menu name equals to completed
    if (element.target.value === "completed") {
      //Checking for elements with completed class name
      if (task.classList.contains("completed")) {
        task.style.display = "flex";
        return;
      } else {
        task.style.display = "none";
        return;
      }
    }
    if (element.target.value !== "completed") {
      if (!task.classList.contains("completed")) {
        task.style.display = "flex";
        return;
      } else {
        task.style.display = "none";
        return;
      }
    }
  });
}
