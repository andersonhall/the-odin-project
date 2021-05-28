import Project from './Project';
import Storage from './Storage';

export default class UI {
  static currentProject = 'My Todos';

  static loadHome = () => {
    UI.initProjectForm();
    UI.loadProjects();
    UI.initProjects();
    UI.loadTodos(UI.currentProject);
    UI.initTodos();
  };

  static initProjectForm() {
    const btn = document.querySelector('.btn-project-form');
    btn.addEventListener('click', UI.toggleAddProjectForm);
    const btnCancel = document.querySelector('.btn-cancel');
    btnCancel.addEventListener('click', UI.toggleAddProjectForm);
    const addBtn = document.querySelector('.btn-add');
    addBtn.addEventListener('click', e => UI.addProject(e));
  }

  static loadProjects() {
    const projects = document.querySelector('.projects');
    projects.innerHTML = '';
    const todoList = Storage.getTodoList();
    todoList.getProjects().forEach(project => {
      UI.createProject(project.name);
    });
  }

  static initProjects() {
    const deleteBtns = document.querySelectorAll('.btn-delete-project');
    deleteBtns.forEach(btn =>
      btn.addEventListener('click', e => {
        const { name } = e.target.dataset;
        Storage.deleteProject(name);
        UI.reloadProjects();
      })
    );

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
    const currentProjectTitle = document.querySelector('.current-project-title');
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

  static initTodos() {
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('click', e => {
        const todo = e.target.parentElement.nextElementSibling.children[0].textContent;
        Storage.toggleTodoIsDone(UI.currentProject, todo);
        UI.reloadTodos();
      });
    });

    const deleteBtns = document.querySelectorAll('.delete-todo');
    deleteBtns.forEach(btn =>
      btn.addEventListener('click', e => {
        const todoName = e.target.dataset.name;
        Storage.deleteTodo(UI.currentProject, todoName);
        UI.reloadTodos();
      })
    );
  }

  static toggleAddProjectForm() {
    const form = document.querySelector('.form-add-project');
    form.classList.toggle('show');
  }

  static createProject = name => {
    const projects = document.querySelector('.projects');
    projects.innerHTML += `
      <li class='project ${UI.currentProject === name ? 'active-project' : ''}' data-name='${name}'>
        <div>
          <i class='fas fa-folder${UI.currentProject === name ? '-open' : ''}'></i>
          <span>${name}</span>
        </div>
        <div>
          <i class='far fa-trash-alt btn-delete-project' data-name='${name}'></i>
        </div>
      </li>
          `;
  };

  static reloadProjects() {
    UI.loadProjects();
    UI.initProjects();
  }

  static reloadTodos() {
    UI.loadTodos(UI.currentProject);
    UI.initTodos();
  }

  static addProject(e) {
    e.preventDefault();
    const input = document.querySelector('#project-name');
    const projectName = input.value;
    input.value = '';
    UI.toggleAddProjectForm();
    if (Storage.getTodoList().getProject(projectName)) {
      alert('Project with that name already exists');
      return;
    } else {
      Storage.addProject(new Project(projectName));
      UI.activateProject(projectName);
    }
  }

  static activateProject(projectName) {
    UI.currentProject = projectName;
    UI.reloadProjects();
    UI.reloadTodos();
  }

  static createTodo(todo) {
    const todoList = document.querySelector('.todos');
    todoList.innerHTML += `
    <tr class="todo" style='border-left: 5px solid ${
      todo.priority === 'high' ? 'red' : todo.priority === 'med' ? 'yellow' : 'green'
    }'>
      <td>
        <i class='far fa-${todo.isDone ? 'check-circle' : 'circle'} checkbox'></i>
      </td>
      <td>
      <span class='todo-title' ${
        todo.isDone ? 'style="text-decoration: line-through; font-style: italic"' : ''
      }>${todo.title}</span>
      </td>
      <td>
        <span class='todo-dueDate'>${todo.dueDate}</span>
      </td>
      <td>
        <i class='fas fa-trash-alt delete-todo' data-name='${todo.title}'></i>
      </td>
    </tr>
    `;
  }
}

// delete todos -- only works after 1st click???

// add todos
// show todo description
// edit todo description
// edit due date
// display due dates better
// make alerts look better
