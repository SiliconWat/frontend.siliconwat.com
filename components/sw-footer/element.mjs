import { CAMPUS } from '/global.mjs';
import template from './template.mjs';

class SwFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async connectedCallback() {
        await import(`${CAMPUS}/components/sw-footer/sw-donors/element.mjs`);
        this.style.display = 'block';
    }
}

customElements.define("sw-footer", SwFooter);