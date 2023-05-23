import {
  myProjects,
  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
  saveAndRender,
  selectedProjectId,
} from "./localStorage";

const taskDisplayContainer = document.querySelector(
  "[data-task-display-container]"
);
const listTitleElement = document.querySelector("[data-list-title]");
const listCountElement = document.querySelector("[data-list-count]");
const tasksContainer = document.querySelector("[data-tasks]");
const addTaskBtn = document.querySelector("[data-add-task-button]");
const clearTasksBtn = document.querySelector(
  "[data-clear-complete-tasks-button"
);
const taskTemplate = document.getElementById("task-template");
let projectListElement = document.querySelector("#createdProjects");

function render() {
  clearElement(projectListElement);
  renderProjects();
  const selectedProject = myProjects.find(
    (project) => project.id === selectedProjectId
  );

  if (selectedProjectId == null) {
    //come back and change to show all tasks
    taskDisplayContainer.style.display = "none";
    addTaskBtn.style.display = "none";
    clearTasksBtn.style.display = "none";
  } else {
    taskDisplayContainer.style.display = "";
    addTaskBtn.style.display = "";
    clearTasksBtn.style.display = "";
    listTitleElement.innerText = selectedProject.name;
    renderTaskCount(selectedProject);
    clearElement(tasksContainer);
    renderTasks(selectedProject);
  }
}

function renderTasks(selectedProject) {
  selectedProject.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const templateTaskDiv = taskElement.querySelector("#templateTaskDiv");
    const checkbox = taskElement.querySelector(".checkbox");
    checkbox.id = task.id;
    checkbox.checked = task.complete;

    const title = taskElement.querySelector(".title");
    title.append(task.name);
    const description = taskElement.querySelector(".description");
    description.append(task.description);
    const dueDate = taskElement.querySelector(".dueDate");
    dueDate.append(task.dueDate);
    const priority = taskElement.querySelector(".priority");
    priority.append(task.priority);
    if (task.priority === "Low") {
      templateTaskDiv.classList.add("Low");
    } else if (task.priority === "Medium") {
      templateTaskDiv.classList.add("Medium");
    } else if (task.priority === "High") {
      templateTaskDiv.classList.add("High");
    }
    tasksContainer.appendChild(taskElement);
  });
}

function renderTaskCount(selectedProject) {
  const incompleteTaskCount = selectedProject.tasks.filter(
    (task) => !task.complete
  ).length;
  const taskString = incompleteTaskCount === 1 ? "task" : "tasks";
  listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
}

function renderProjects() {
  myProjects.forEach((project) => {
    const projectElement = document.createElement("li");
    projectElement.dataset.projectId = project.id;
    projectElement.setAttribute("class", "projectItem");
    projectElement.innerText = project.name;
    if (project.id === selectedProjectId) {
      projectElement.classList.add("selected");
    }
    projectListElement.appendChild(projectElement);
  });

  projectListElement.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "li") {
      selectedProjectId = e.target.dataset.projectId;
      saveAndRender();
    }
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export { clearElement };
export { renderProjects };
export { render };
export { tasksContainer };
export { renderTaskCount };
