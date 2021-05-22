export default class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  getName = () => this.name;
  setName = name => (this.name = name);

  getTodos = () => this.todos;
  setTodos = todos => (this.todos = todos);

  addTodo = todo => this.todos.push(todo);

  deleteTodo = todo => {
    const todoToDelete = this.todos.find(todo => todo.getName() === todo);
    this.todos.splice(this.todos.indexOf(todoToDelete), 1);
  };
}
