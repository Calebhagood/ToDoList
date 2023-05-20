import { Task } from "./taskCreate";
import { renderTasks } from "./renderTasks";

let myTasks = [
  {
    title: "History Paper",
    description: "1000 word paper about FDR",
    project: "School",
    dueDate: "2023-06-03",
    priority: "Low",
  },
];

function addTaskToList() {
  let title = document.querySelector("#taskTitle").value;
  let description = document.querySelector("#taskDescription").value;
  let project = document.querySelector("#taskProject").value;
  let dueDate = document.querySelector("#taskDueDate").value;
  let priority = document.querySelector("#taskPriority").value;

  let newTask = new Task(title, description, project, dueDate, priority);
  myTasks.push(newTask);
  console.log(myTasks);

  //import render function that displays created tasks
  renderTasks();
}

function addTaskToListBtn() {
  let addTaskForm = document.querySelector("#addTaskForm");
  const addTaskBtn = document.querySelector("#addTaskBtn");
  addTaskBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addTaskToList();
    addTaskForm.reset();
  });
}

export { myTasks };
export { addTaskToList };
export { addTaskToListBtn };
