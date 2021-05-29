import Project from './Project';
// for testing import Todo
import Todo from './Todo';
//
export default class TodoList {
  constructor() {
    // for testing set up some todos
    const defaultProject = new Project('My Todos');
    this.projects = [];
    this.projects.push(defaultProject);
  }

  getProjects = () => this.projects;
  setProjects = projects => (this.projects = projects);

  getProject = projectName => this.projects.find(project => project.getName() === projectName);

  addProject = project => this.projects.push(project);

  deleteProject = projectName => {
    const projectToDelete = this.projects.find(project => project.getName() === projectName);
    this.projects.splice(this.projects.indexOf(projectToDelete), 1);
  };
}
