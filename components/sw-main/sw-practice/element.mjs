import { UNITS, CHAPTERS } from '/data.mjs';
import template from './template.mjs';

class SwPractice extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    render(unit, chapter) {
        this.style.display = 'block';
        this.shadowRoot.querySelector('h1').title = `Unit ${unit}: ${UNITS[unit - 1].title}`;
        this.shadowRoot.querySelector('h1').textContent = `Practice: Chapter ${chapter}`;
        this.shadowRoot.querySelector('h2').textContent = `${CHAPTERS[chapter - 1].title}`;
        this.shadowRoot.querySelector('sw-code').render(chapter);
    }
}

customElements.define("sw-practice", SwPractice);