(()=>{"use strict";class t{constructor(t){this.name=t,this.todos=[]}getName=()=>this.name;setName=t=>this.name=t;getTodos=()=>this.todos;setTodos=t=>this.todos=t;addTodo=t=>this.todos.push(t);deleteTodo=t=>{const s=this.todos.find((t=>t.getName()===t));this.todos.splice(this.todos.indexOf(s),1)}}class s{constructor(){this.projects=[],this.projects.push(new t("My Todos"))}getProjects=()=>this.projects;setProjects=t=>this.projects=t;getProject=t=>this.projects.find((s=>s.getName()===t));addProject=t=>this.projects.push(t);deleteProject=t=>{const s=this.projects.find((s=>s.getName()===t));this.projects.splice(this.projects.indexOf(s),1)}}class e{static loadHome=()=>{const t=new s;console.log(t.getProjects()),t.getProjects().forEach((t=>{e.createProject(t.name)}))};static createProject=t=>{document.querySelector(".projects").innerHTML+=`\n      <li class='project'>\n        <i class='fas fa-tasks'></i>\n        <span>${t}</span>\n      </li>\n    `}}document.body.addEventListener("DOMContentLoaded",e.loadHome())})();