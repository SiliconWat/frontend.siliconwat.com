import template from './template.mjs';

class SwQuiz extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    render(chapter) {
        this.shadowRoot.querySelector('iframe').src = "https://quiz.siliconwat.com/?embed=1#frontend-chapter" + chapter; 
        this.shadowRoot.querySelector('a').href = "https://quiz.siliconwat.com/#frontend-chapter" + chapter;
    }
}

customElements.define("sw-quiz", SwQuiz);