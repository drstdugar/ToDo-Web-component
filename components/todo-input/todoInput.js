import {tmpl} from './template.js';

const template = document.createElement('template');
template.innerHTML = tmpl;

export class ToDoInput extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('todo-input', ToDoInput);
