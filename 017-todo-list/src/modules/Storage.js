import Project from './Project';
import Todo from './Todo';
import TodoList from './TodoList';

export default class Storage {
  static saveTodoList(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
  }

  static getTodoList() {
    const todoList = Object.assign(new TodoList(), JSON.parse(localStorage.getItem('todoList')));
    todoList.setProjects(
      todoList.getProjects().map(project => Object.assign(new Project(), project))
    );
    todoList
      .getProjects()
      .forEach(project =>
        project.setTodos(project.getTodos().map(todo => Object.assign(new Todo(), todo)))
      );
    return todoList;
  }

  static addProject(project) {
    const todoList = Storage.getTodoList();
    todoList.addProject(project);
    Storage.saveTodoList(todoList);
  }

  static deleteProject(project) {
    const todoList = Storage.getTodoList();
    todoList.deleteProject(project);
    Storage.saveTodoList(todoList);
  }

  static toggleTodoIsDone(projectToEdit, todoName) {
    const todoList = Storage.getTodoList();
    const project = todoList.getProject(projectToEdit);
    const todoToToggle = project.getTodos().filter(todo => todo.getTitle() === todoName)[0];
    todoToToggle.setIsDone(!todoToToggle.getIsDone());
    Storage.saveTodoList(todoList);
  }

  static deleteTodo(projectToEdit, todo) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectToEdit).deleteTodo(todo);
    Storage.saveTodoList(todoList);
  }

  static saveTodoForm(project, todoTitle, title, priority, dueDate, description) {
    const todoList = Storage.getTodoList();
    const todo = todoList.getProject(project).getTodo(todoTitle);
    console.log(todo);
    if (!title) {
      return alert('must provide a title');
    }
    if (!dueDate) {
      dueDate = 'No due date';
    }
    todo.setTitle(title);
    todo.setPriority(priority);
    todo.setDueDate(dueDate);
    todo.setDescription(description);
    Storage.saveTodoList(todoList);
  }
}
