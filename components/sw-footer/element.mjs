import { CAMPUS, TRILOGY } from '/global.mjs';
import template from './template.mjs';

class SwFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async connectedCallback() {
        await import(`${CAMPUS}/components/sw-footer/sw-donors/element.mjs`);
        this.shadowRoot.getElementById(TRILOGY[0].toLowerCase()).style.display = 'block';
        this.style.display = 'block';
    }
}

customElements.define("sw-footer", SwFooter);