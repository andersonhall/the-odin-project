import Project from './Project';
import Todo from './Todo';
import TodoList from './TodoList';

export default class UI {
  static loadHome = () => {
    const todoList = new TodoList();
    console.log(todoList.getProjects());
    todoList.getProjects().forEach(project => {
      UI.createProject(project.name);
    });
  };

  static createProject = name => {
    const projects = document.querySelector('.projects');
    projects.innerHTML += `
      <li class='project'>
        <i class='fas fa-tasks'></i>
        <span>${name}</span>
      </li>
    `;
  };
}
