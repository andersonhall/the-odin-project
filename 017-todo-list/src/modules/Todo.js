export default class Todo {
  constructor(title, description = '', dueDate = 'No due date', priority = null, isDone = false) {
    this.title = title;
    (this.title = description), (this.dueDate = dueDate);
    this.priority = priority;
    this.isDone = isDone;
  }

  getTitle = () => this.title;
  setTitle = title => (this.title = title);

  getDescription = () => this.description;
  setDescription = description => (this.description = description);

  getDueDate = () => this.dueDate;
  setDueDate = dueDate => (this.dueDate = dueDate);

  setPriority = priority => (this.priority = priority);
  getPriority = () => this.priority;

  setIsDone = isDone => (this.isDone = isDone);
  getIsDone = () => this.isDone;
}
