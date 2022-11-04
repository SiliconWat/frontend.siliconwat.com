import template from './template.mjs';

class SwStealth extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    render() {
        this.style.display = 'block';
    }
}

customElements.define("sw-stealth", SwStealth);