import Project from './Project';
import Todo from './Todo';
import TodoList from './TodoList';
import Storage from './Storage';

export default class UI {
  static currentProject = 'My Todos';

  static loadHome = () => {
    UI.loadProjects();
    UI.initProjects();
    UI.loadTodos(UI.currentProject);
  };

  static loadProjects() {
    const projects = document.querySelector('.projects');
    projects.textContent = '';
    const todoList = Storage.getTodoList();
    todoList.getProjects().forEach(project => {
      UI.createProject(project.name);
    });
  }

  static initProjects() {
    const btn = document.querySelector('.btn-project-form');
    btn.addEventListener('click', UI.toggleAddProjectForm);

    const deleteBtns = document.querySelectorAll('.btn-delete-project');
    deleteBtns.forEach(btn =>
      btn.addEventListener('click', e => {
        const elementToRemove = e.target.parentElement.parentElement;
        UI.deleteProject(elementToRemove);
      })
    );

    const addBtn = document.querySelector('.btn-add');
    addBtn.addEventListener('click', e => {
      e.preventDefault();
      UI.addProject();
    });

    const btnCancel = document.querySelector('.btn-cancel');
    btnCancel.addEventListener('click', e => {
      e.preventDefault();
      UI.toggleAddProjectForm();
    });

    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
      project.addEventListener('click', e => {
        if (!e.target.classList.contains('btn-delete-project')) {
          UI.activateProject(project.dataset.name);
        }
      });
    });
  }

  static loadTodos(projectName) {
    const currentProjectTitle = document.querySelector(
      '.current-project-title'
    );
    const todos = document.querySelector('.todos');
    todos.textContent = '';
    currentProjectTitle.textContent = projectName;
    const todoList = Storage.getTodoList();
    todoList
      .getProject(projectName)
      .getTodos()
      .forEach(todo => {
        UI.createTodo(todo);
      });
  }

  static toggleAddProjectForm() {
    const form = document.querySelector('.form-add-project');
    form.classList.toggle('show');
  }

  static createProject = name => {
    const projects = document.querySelector('.projects');
    projects.innerHTML += `
      <li class='project ${
        UI.currentProject === name ? 'active-project' : ''
      }' data-name='${name}'>
        <div>
         <i class='fas fa-folder${
           UI.currentProject === name ? '-open' : ''
         }'></i>
          <span>${name}</span>
        </div>
        <div>
          <i class='far fa-trash-alt btn-delete-project' data-name='${name}'></i>
          </div>
          </li>
          `;
  };

  static addProject() {
    const input = document.querySelector('#project-name');
    const projectName = input.value;
    input.value = '';
    UI.toggleAddProjectForm();
    Storage.addProject(new Project(projectName));
    UI.activateProject(projectName);
  }

  static deleteProject(elementToRemove) {
    Storage.deleteProject(elementToRemove.dataset.name);
    elementToRemove.remove();
    UI.loadHome();
  }

  static activateProject(projectName) {
    UI.currentProject = projectName;
    UI.loadHome();
  }

  static createTodo(todo) {
    const todoList = document.querySelector('.todos');
    todoList.innerHTML += `
    <tr class="todo" style='border-left: 5px solid ${
      todo.priority === 'high'
        ? 'red'
        : todo.priority === 'med'
        ? 'yellow'
        : 'green'
    }'>
      <td>
        <i class='far fa-${todo.isDone ? 'check-circle' : 'circle'}'></i>
      </td>
      <td>
      <span class='todo-title' ${
        todo.isDone
          ? 'style="text-decoration: line-through; font-style: italic"'
          : ''
      }>${todo.title}</span>
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

// @todo
// figure out why the event listeners fire too many times
