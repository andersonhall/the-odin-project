import Project from "./Project";
import Todo from "./Todo";
import TodoList from "./TodoList";
import Storage from "./Storage";

export default class UI {
  static loadHome = () => {
    UI.loadProjects();
    UI.initProjects();
    UI.loadTodos("My Todos");
  };

  static loadProjects() {
    const projects = document.querySelector('.projects');
    projects.textContent = '';
    const todoList = Storage.getTodoList();
    todoList.getProjects().forEach((project) => {
      UI.createProject(project.name);
    });
  }

  static initProjects() {
    const btn = document.querySelector(".btn-project-form");
    btn.addEventListener("click", UI.toggleAddProjectForm);

    const deleteBtns = document.querySelectorAll('.btn-delete-project');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        UI.deleteProject(e.target);
        Storage.deleteProject(e.target.parentElement.parentElement.dataset.name)
      });
    })

    const input = document.querySelector("#project-name");
    const btnAdd = document.querySelector(".form-add-project .btn-add");
    btnAdd.addEventListener("click", (e) => {
      const projectName = input.value;
      e.preventDefault();
      Storage.addProject(new Project(projectName));
      UI.createProject(projectName);
      UI.toggleAddProjectForm();
    });
    const btnCancel = document.querySelector(".form-add-project .btn-cancel");
    btnCancel.addEventListener("click", (e) => {
      e.preventDefault();
      UI.toggleAddProjectForm();
    });
  }

  static loadTodos(projectName) {
    const currentProjectTitle = document.querySelector(
      ".current-project-title"
    );
    currentProjectTitle.textContent = projectName;
    const todoList = new TodoList();
    todoList
      .getProject(projectName)
      .getTodos()
      .forEach((todo) => {
        UI.createTodo(todo);
      });
  }

  static toggleAddProjectForm() {
    const form = document.querySelector(".form-add-project");
    form.classList.toggle("show");
  }

  static createProject = name => {
    const projects = document.querySelector(".projects");
    projects.innerHTML += `
      <li class='project' data-name='${name}'>
        <div>
         <i class='fas fa-folder'></i>
          <span>${name}</span>
        </div>
        <div>
          <i class='far fa-trash-alt btn-delete-project' data-name='${name}'></i>
          </div>
          </li>
          `;
  };

  static deleteProject(target) {
    target.parentElement.parentElement.remove();
  }

  static createTodo(todo) {
    const todoList = document.querySelector(".todos");
    todoList.innerHTML += `
    <tr class="todo" style='border-left: 5px solid ${
      todo.priority === "high"
        ? "red"
        : todo.priority === "med"
        ? "yellow"
        : "green"
    }'>
      <td>
        <i class='far fa-${todo.isDone ? "check-circle" : "circle"}'></i>
      </td>
      <td>
      <span class='todo-title' ${
        todo.isDone
          ? 'style="text-decoration: line-through; font-style: italic"'
          : ""
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
