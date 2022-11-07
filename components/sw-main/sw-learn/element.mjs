import { CHAPTERS } from '/data.mjs';
import template from './template.mjs';

class SwLearn extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    render(chapter) {
        this.style.display = 'block';
        this.shadowRoot.querySelector('h1').textContent = `Learn Chapter ${chapter}`;
        this.shadowRoot.querySelector('h2').textContent = `${CHAPTERS[chapter - 1].title}`;
        this.shadowRoot.querySelector('sw-udemy').render(chapter);
        this.shadowRoot.querySelector('sw-medium').render(chapter);
        this.shadowRoot.querySelector('sw-quiz').render(chapter);
    }
}

customElements.define("sw-learn", SwLearn);