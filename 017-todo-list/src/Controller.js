import Project from './Project';
import Todo from './Todo';
import TodoList from './TodoList';

export default class Controller {
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
    const todoList = Controller.getTodoList();
    todoList.addProject(project);
    Controller.saveTodoList(todoList);
  }

  static deleteProject(projectName) {
    const todoList = Controller.getTodoList();
    todoList.deleteProject(projectName);
    Controller.saveTodoList(todoList);
  }

  static addTodo(projectName, todo) {
    const todoList = Controller.getTodoList();
    todoList.getProject(projectName).addTodo(todo);
    Controller.saveTodoList(todoList);
  }

  static deleteTodo(projectName, todoName) {
    const todoList = Controller.getTodoList();
    todoList.getProject(projectName).deleteTodo(todoName);
    Controller.saveTodoList(todoList);
  }

  static renameTodo(projectName, todoName, newTodoName) {
    const todoList = Controller.getTodoList();
    todoList.getProject(projectName).getTodo(todoName).setName(newTodoName);
    Controller.saveTodoList(todoList);
  }

  static setTodoDate(projectName, todoName, newDueDate) {
    const todoList = Controller.getTodoList();
    todoList.getProject(projectName).getTodo(todoName).setDate(newDueDate);
    Controller.saveTodoList(todoList);
  }

  static updateTodayProject() {
    const todoList = Controller.getTodoList();
    todoList.updateTodayProject();
    Controller.saveTodoList(todoList);
  }

  static updateWeekProject() {
    const todoList = Controller.getTodoList();
    todoList.updateWeekProject();
    Controller.saveTodoList(todoList);
  }
}
