import Project from './Project';
import Todo from './Todo';
import TodoList from './TodoList';

export default class UI {
  static loadHome = () => {
    UI.loadProjects();
    UI.loadTodos('My Todos');
  };

  static loadProjects() {
    const todoList = new TodoList();
    todoList.getProjects().forEach(project => {
      UI.createProject(project.name);
    });
  }

  static loadTodos(projectName) {
    const todoList = new TodoList();
    todoList.getProject(projectName).getTodos().forEach(todo => {
      UI.createTodo(todo);
    })
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

  static createTodo(todo) {
    const todoList = document.querySelector('.todos');
    todoList.innerHTML += `
    <li class='todo'>
    <i class='fas fa-circle'></i>
    <span>${todo.title}</span>
  </li>
    `;
  }
}
