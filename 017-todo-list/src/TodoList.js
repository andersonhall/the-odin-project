import { compareAsc, toDate } from 'date-fns';
import Project from './Project';
import Todo from './Todo';

export default class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project('Inbox'));
    this.projects.push(new Project('Today'));
    this.projects.push(new Project('This week'));
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.projects.find(project => project.getName() === projectName);
  }

  contains(projectName) {
    return this.projects.some(project => project.getName() === projectName);
  }

  addProject(project) {
    if (this.projects.indexOf(project) > 0) return;
    this.projects.push(project);
  }

  deleteProject(projectName) {
    const projectToDelete = this.projects.find(project => project.getName() === projectName);
    this.projects.splice(this.projects.indexOf(projectToDelete), 1);
  }

  updateTodayProject() {
    this.getProject('Today').todos = [];

    this.projects.forEach(project => {
      if (project.getName() === 'Today' || project.getName() === 'This week') return;

      const todayTodos = project.getTodosToday();
      todayTodos.forEach(todo => {
        const todoName = `${todo.getName()} (${project.getName})`;
        this.getProject('Today').addTodo(new Todo(todoName, todo.getDate()));
      });
    });
  }

  updateWeekProject() {
    this.getProject('This week').todos = [];

    this.projects.forEach(project => {
      if (project.getName() === 'Today' || project.getName() === 'This week') return;

      const weekTodos = project.getTodosThisWeek();
      weekTodos.forEach(todo => {
        const todoName = `${todo.getName()} (${project.getName()})`;
      });
    });

    this.getProject('This week').setTodos(
      this.getProject('This week')
        .getTodos()
        .sort((a, b) =>
          compareAsc(toDate(new Date(a.getDateFormatted())), toDate(new Date(b.getDateFormatted())))
        )
    );
  }
}
