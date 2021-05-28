import Project from './Project';
// for testing import Todo
import Todo from './Todo';
//
export default class TodoList {
  constructor() {
    // for testing set up some todos
    const project1 = new Project('My Todos');
    const todo = new Todo(
      'take out the garbage',
      'longer description of a todo',
      '2021-05-29',
      'high',
      false
    );
    const todo2 = new Todo('work on projects', 'desc2', 'No due date', 'low', true);
    project1.setTodos([todo, todo2]);
    //
    this.projects = [];
    this.projects.push(project1);
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
