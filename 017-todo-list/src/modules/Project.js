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

  deleteTodo = todoName => {
    const todoToDelete = this.todos.find(todo => todo.getName() == todoName);
    this.todos.splice(this.todos.indexOf(todoToDelete), 1);
  };
}
