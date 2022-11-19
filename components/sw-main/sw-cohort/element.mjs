import { TRILOGY, getGitHub } from '/global.mjs';
import template from './template.mjs';

class SwCohort extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async connectedCallback() {
        if (TRILOGY[1] === 'Course') {
            this.shadowRoot.querySelector('section:first-child').style.display = 'block';
        } else {
            const github = await getGitHub();
            if (github) {
                if (github.student) {
                    
                } else {

                }
                this.shadowRoot.querySelector('section:last-child').style.display = 'block';
            } else {
                this.shadowRoot.querySelector('section:first-child').style.display = 'block';
            }
        }

        this.style.display = 'block';
    }
}

customElements.define("sw-cohort", SwCohort);