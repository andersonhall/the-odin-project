import Project from './Project';
import Todo from './Todo';
import TodoList from './TodoList';

export default class UI {
  static loadHome = () => {
    UI.loadProjects();
  };

  static loadProjects() {
    const todoList = new TodoList();
    console.log(todoList.getProjects());
    todoList.getProjects().forEach(project => {
      UI.createProject(project.name);
    });
  }

  static loadTodos(projectName) {
    // load todos for a specific project
  }

  static createProject = name => {
    const projects = document.querySelector('.projects');
    projects.innerHTML += `
      <li class='project'>
        <i class='fas fa-folder'></i>
        <span>${name}</span>
      </li>
    `;
  };

  static createTodo(title, description, dueDate, priority, isDone) {
    const todoList = document.querySelector('.todos');
    todoList.innerHTML += `
    <li class='todo'>
    <i class='fas fa-circle'></i>
    <span>${title}</span>
  </li>
    `;
  }
}
