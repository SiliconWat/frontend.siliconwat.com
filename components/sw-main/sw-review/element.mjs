import { CHAPTERS } from '/data.mjs';
import template from './template.mjs';

class SwReview extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    render(chapter) {
        this.style.display = 'block';
        this.shadowRoot.querySelector('h1').textContent = `Review Chapter ${chapter}`;
        this.shadowRoot.querySelector('h2').textContent = `${CHAPTERS[chapter - 1].title}`;
        this.shadowRoot.querySelector('sw-flashcard').render(chapter);
    }
}

customElements.define("sw-review", SwReview);