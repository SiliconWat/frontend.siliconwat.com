import { TRILOGY } from '/global.mjs';
import template from './template.mjs';

class SwStudents extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const login = true; // TODO:
        this.style.display = TRILOGY[1] === 'Course' || !login ? 'block' : 'none';
    }
}

customElements.define("sw-students", SwStudents);