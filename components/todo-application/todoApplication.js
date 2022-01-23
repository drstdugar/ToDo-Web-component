import {tmpl} from './template.js';
import {ToDoInput} from '../todo-input/todoInput.js';
import {ToDoList} from '../todo-list/todoList.js';

const template = document.createElement('template');
template.innerHTML = tmpl;

class ToDoApplication extends HTMLElement {
  constructor() {
    super();

    this.tasks = [{id: 1, task: 'Go Shopping', done: false}];

    this.addTask = this.shadowRoot
      .querySelector('todo-input')
      .shadowRoot.querySelector('#add-task');

    this.taskInput = this.shadowRoot
      .querySelector('todo-input')
      .shadowRoot.querySelector('#enter-task');

    this.todoList = new ToDoList();

    this.attachShadow({mode: 'open'});

    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(new ToDoInput());
    this.shadowRoot.appendChild(this.todoList);

    this.todoList.renderList(this.tasks);

    this.actions();
  }

  actions() {
    this.addTask.addEventListener('click', () => this.submitTask());
    this.todoList.addEventListener('done', e => this.doneTask(e.detail.id));
    this.todoList.addEventListener('delete', e => this.deleteTask(e.detail.id));
    this.taskInput.addEventListener('keypress', e => {
      if (e.code === 'Enter') this.submitTask();
    });
  }

  submitTask() {
    let id = this.tasks.length ? this.tasks[0].id + 1 : 1;

    const task = {id: id, task: this.taskInput.value, done: false};

    this.tasks = [task, ...this.tasks];

    this.taskInput.value = '';

    this.todoList.renderList(this.tasks);
  }

  doneTask(id) {
    this.tasks.forEach(task => {
      if (task.id === id) task.done = !task.done;
    });

    this.todoList.renderList(this.tasks);
  }

  deleteTask(id) {
    this.tasks.forEach((task, index) => {
      if (task.id === id) this.tasks.splice(index, 1);
    });

    this.todoList.renderList(this.tasks);
  }
}

window.customElements.define('todo-application', ToDoApplication);
