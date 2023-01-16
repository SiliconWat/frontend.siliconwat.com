import { DEVICE } from '/global.mjs';
import template from './template.mjs';

class SwDownload extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const img = document.createElement('img');
        this.shadowRoot.querySelector('footer').prepend(img);
        img.src = DEVICE[2].image;
        img.title = DEVICE[2].description;
        this.style.display = 'block';
    }
}

customElements.define("sw-download", SwDownload);