import {tmpl} from './template.js';
import {ToDoTask} from '../todo-task/todoTask.js';

const template = document.createElement('template');
template.innerHTML = tmpl;

export class ToDoList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  renderList(tasks) {
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    tasks.forEach(element => {
      const task = this.shadowRoot
        .querySelector('.task-list')
        .appendChild(new ToDoTask());
      task.shadowRoot.querySelector('#task').textContent = element.task;

      this.taskDoneCheck(task, element.done);

      const doneBtn = task.shadowRoot.querySelector('.tasks #done');
      const deleteBtn = task.shadowRoot.querySelector('.tasks #delete');

      deleteBtn.addEventListener('click', () => {
        this.dispatchEvent(
          new CustomEvent('delete', {detail: {id: element.id}})
        );
      });

      doneBtn.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('done', {detail: {id: element.id}}));
      });
    });
  }

  taskDoneCheck(task, done) {
    const toggleTask = task.shadowRoot.querySelector('.tasks #task');

    if (done) {
      toggleTask.classList.add('strike');
    } else {
      toggleTask.classList.remove('strike');
    }
  }
}

window.customElements.define('todo-list', ToDoList);
