import { showAddProjectForm, showAddTaskForm } from "./showForms";
// // import { Task } from "./taskCreate";
// import { myTasks, addTaskToList, addTaskToListBtn } from "./addTask";
// import { renderTasks } from "./renderTasks";
import { addProjectToList, createProject, deleteProject } from "./addProject";
import { renderProjects, render } from "./renderProject";
import { myProjects } from "./localStorage";
// import { removeTask } from "./removeTask";

// window.onload = renderTasks();

showAddProjectForm();
showAddTaskForm();
// // addTaskToList();
// addTaskToListBtn();
// renderTasks();

// addProjectToListBtn();
addProjectToList();
deleteProject();
render();
