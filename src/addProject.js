import { Project } from "./projectCreate";
import { render, renderTaskCount, tasksContainer } from "./renderProject";
import {
  LOCAL_STORAGE_PROJECT_KEY,
  saveAndRender,
  myProjects,
  selectedProjectId,
  save,
} from "./localStorage";

const newProjectForm = document.querySelector("[data-new-project-form]");
const newProjectInput = document.querySelector("[data-new-project-input]");
const deleteProjectButton = document.querySelector(
  "[data-delete-project-button]"
);
const newTaskForm = document.querySelector("[data-new-task-form]");
const newTaskTitleInput = document.querySelector("[data-new-task-title-input]");
const newTaskDescriptionInput = document.querySelector(
  "[data-new-task-description-input]"
);
const newTaskDueDateInput = document.querySelector(
  "[data-new-task-dueDate-input]"
);
const newTaskPriorityInput = document.querySelector(
  "[data-new-task-priority-input]"
);
const clearCompleteTasksButton = document.querySelector(
  "[data-clear-complete-tasks-button]"
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
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
  };
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

function addTaskToList() {
  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskName = newTaskTitleInput.value;
    const taskDescription = newTaskDescriptionInput.value;
    const taskDueDate = newTaskDueDateInput.value;
    const taskPriority = newTaskPriorityInput.value;
    const templateTaskDiv = document.querySelector("#templateTaskDiv");
    if (
      taskName == null ||
      taskName === "" ||
      taskDescription == null ||
      taskDescription === "" ||
      taskDueDate == null ||
      taskDueDate === "" ||
      taskPriority == null ||
      taskPriority === ""
    ) {
      return;
    }

    const task = createTask(
      taskName,
      taskDescription,
      taskDueDate,
      taskPriority
    );
    newTaskTitleInput.value = null;
    newTaskDescriptionInput.value = null;
    newTaskDueDateInput.value = null;
    newTaskPriorityInput.value = null;
    const selectedProject = myProjects.find(
      (project) => project.id === selectedProjectId
    );
    selectedProject.tasks.push(task);
    saveAndRender();
  });
}

function createTask(name, description, dueDate, priority) {
  return {
    id: Date.now().toString(),
    name: name,
    description: description,
    dueDate: dueDate,
    priority: priority,
    complete: false,
  };
}

function updateTaskCount() {
  tasksContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "input") {
      const selectedProject = myProjects.find(
        (project) => project.id === selectedProjectId
      );
      const selectedTask = selectedProject.tasks.find(
        (task) => task.id === e.target.id
      );
      selectedTask.complete = e.target.checked;
      save();
      renderTaskCount(selectedProject);
    }
  });
}

function clearCompletedTasks() {
  clearCompleteTasksButton.addEventListener("click", (e) => {
    const selectedProject = myProjects.find(
      (project) => project.id === selectedProjectId
    );
    selectedProject.tasks = selectedProject.tasks.filter(
      (task) => !task.complete
    );
    saveAndRender();
  });
}

export { createProject };
export { addProjectToList };
export { deleteProject };
export { addTaskToList };
export { updateTaskCount };
export { clearCompletedTasks };
