import Project from './Project';
import Todo from './Todo';
import TodoList from './TodoList';

export default class UI {
  currentProject = null;

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
    const currentProjectTitle = document.querySelector('.current-project-title');
    currentProjectTitle.textContent = projectName;
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
    <tr class="todo" style='border-left: 5px solid ${todo.priority === 'high' ? 'red' : todo.priority === 'med' ? 'yellow' : 'green'}'>
      <td>
        <i class='far fa-${todo.isDone ? 'check-circle' : 'circle'}'></i>
      </td>
      <td>
      <span class='todo-title' ${todo.isDone ? 'style="text-decoration: line-through; font-style: italic"' : ''}>${todo.title}</span>
      </td>
      <td>
        <span class='todo-dueDate'>${todo.dueDate}</span>
      </td>
      <td>
        <i class='fas fa-trash-alt'></i>
      </td>
    </tr>
    `;
  }
}
