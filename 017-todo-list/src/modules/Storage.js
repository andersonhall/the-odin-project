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
}
