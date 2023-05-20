const showAddProjectForm = () => {
  let addProjectBtn = document.querySelector("#showAddProjectFormBtn");
  let addProjectForm = document.querySelector("#addProjectFormContainer");
  let cancelProjectBtn = document.querySelector("#projectFormCancelBtn");
  addProjectBtn.addEventListener("click", () => {
    addProjectForm.classList.remove("hidden");
  });
  cancelProjectBtn.addEventListener("click", () => {
    addProjectForm.classList.add("hidden");
  });
};

const showAddTaskForm = () => {
  let addTaskBtn = document.querySelector("#showAddTaskFormBtn");
  let addTaskForm = document.querySelector("#addTaskFormContainer");
  let cancelTaskBtn = document.querySelector("#taskFormCancelBtn");
  addTaskBtn.addEventListener("click", () => {
    addTaskForm.classList.remove("hidden");
  });
  cancelTaskBtn.addEventListener("click", () => {
    addTaskForm.classList.add("hidden");
  });
};

export { showAddProjectForm };
export { showAddTaskForm };
