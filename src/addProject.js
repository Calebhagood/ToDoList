import { Project } from "./projectCreate";
import { render } from "./renderProject";
import {
  LOCAL_STORAGE_PROJECT_KEY,
  saveAndRender,
  myProjects,
  selectedProjectId,
} from "./localStorage";

const newProjectForm = document.querySelector("[data-new-project-form]");
const newProjectInput = document.querySelector("[data-new-project-input]");
const deleteProjectButton = document.querySelector(
  "[data-delete-project-button]"
);

function addProjectToList() {
  newProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const projectName = newProjectInput.value;
    if (projectName == null || projectName === "") return;
    const project = createProject(projectName);
    newProjectInput.value = null;
    myProjects.push(project);
    saveAndRender();
  });
}

function createProject(name) {
  return { id: Date.now().toString(), name: name, tasks: [] };
}

function deleteProject() {
  deleteProjectButton.addEventListener("click", (e) => {
    myProjects = myProjects.filter(
      (project) => project.id !== selectedProjectId
    );
    selectedProjectId = null;
    saveAndRender();
  });
}

export { createProject };
export { addProjectToList };
export { deleteProject };
