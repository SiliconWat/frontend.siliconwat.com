import { CHAPTERS } from '/data.mjs';
import template from './template.mjs';

class SwUdemy extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    render(chapter) {
        const a = this.shadowRoot.querySelector('a');
        a.textContent = CHAPTERS[chapter - 1].title;
        if (CHAPTERS[chapter - 1].udemy) a.href = CHAPTERS[chapter - 1].udemy;
    }
}

customElements.define("sw-udemy", SwUdemy);