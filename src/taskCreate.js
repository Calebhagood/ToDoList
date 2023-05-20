function Task(title, description, project, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.project = project;
  this.dueDate = dueDate;
  this.priority = priority;
  console.log(this.title);
}

export { Task };
