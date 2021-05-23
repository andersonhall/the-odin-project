import Project from './Project';

export default class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project('My Todos'));
    this.projects.push(new Project('Art Lesson for 5/25'));
    this.projects.push(new Project('Tuesday class'));
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
