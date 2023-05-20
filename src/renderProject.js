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
  } else {
    taskDisplayContainer.style.display = "";
    addTaskBtn.style.display = "";
    listTitleElement.innerText = selectedProject.name;
    renderTaskCount(selectedProject);
    clearElement(tasksContainer);
    renderTasks(selectedProject);
  }
}
//WORK ON THIS NEXT
function renderTasks(selectedProject) {
  selectedProject.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.contentEditable, true);
    const checkbox = taskElement.querySelector(".checkbox");
    checkbox.id = task.id;
    checkbox.checked = task.complete;
    const title = taskElement.querySelector(".title");
    const description = taskElement.querySelector(".description");
    const project = taskElement.querySelector(".projectName");
    const dueDate = taskElement.querySelector(".dueDate");
    const priority = taskElement.querySelector(".priority");
    const icons = taskElement.querySelector(".icons");
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
