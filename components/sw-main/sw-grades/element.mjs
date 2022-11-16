import { TRILOGY } from '/global.mjs';
import template from './template.mjs';

class SwGrades extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const login = true; // TODO:
        this.style.display = login && TRILOGY[1] === 'Cohort' ? 'block' : 'none';
    }
}

customElements.define("sw-grades", SwGrades);