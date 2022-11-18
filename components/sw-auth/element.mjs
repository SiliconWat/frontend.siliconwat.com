import { AUTH } from '/global.mjs';
import template from './template.mjs';

class SwAuth extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        
    }

    show() {
        const iframe = this.shadowRoot.querySelector('iframe');
        iframe.src = `${AUTH}/?embed`;
        this.style.display = 'block';
    }

    hide() {
        this.style.display = 'none';
    }
}

customElements.define("sw-auth", SwAuth);