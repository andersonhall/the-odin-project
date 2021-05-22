import { toDate, isToday, isThisWeek, subDays } from 'date-fns';

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setTodos(todos) {
    this.todos = todos;
  }

  getTodos() {
    return this.todos;
  }

  getTodo(todoName) {
    return this.todos.find(todo => todo.getName() === todoName);
  }

  contains(todoName) {
    return this.todo.some(todo => todo.getName() === todoName);
  }

  addTodo(todo) {
    if (this.todos.indexOf(todo) > 0) return;
    this.todos.push(todo);
  }

  deleteTodo(todoName) {
    const todoToDelete = this.todos.find(todo => todo.getName() === todoName);
    this.todos.splice(this.todos.indexOf(todoToDelete), 1);
  }

  getTodosToday() {
    return this.todos.filter(todo => {
      const todoDate = new Date(todo.getDateFormatted());
      return isToday(toDate(todoDate));
    });
  }

  getTodosThisWeek() {
    return this.todos.filter(todo => {
      const todoDate = new Date(todo.getDateFormatted());
      return isThisWeek(subDays(todoDate), 1);
    });
  }
}
