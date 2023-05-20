import { render } from "./renderProject";

const LOCAL_STORAGE_PROJECT_KEY = "task.myProjects";
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = "task.selectedProjectId";
let myProjects =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
let selectedProjectId = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
);

function save() {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(myProjects));
  localStorage.setItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
    selectedProjectId
  );
}

function saveAndRender() {
  save();
  render();
}

export { myProjects };
export { LOCAL_STORAGE_PROJECT_KEY };
export { LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY };
export { saveAndRender };
export { selectedProjectId };
