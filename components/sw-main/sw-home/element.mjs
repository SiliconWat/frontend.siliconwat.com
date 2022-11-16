import { TRILOGY } from "/global.mjs";
import template from './template.mjs';

class SwHome extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render() {
        const { COURSE } = await import(`${TRILOGY[2]}/data.mjs`);
        
        this.shadowRoot.getElementById('title').textContent = COURSE.title;
        this.shadowRoot.getElementById('subtitle').textContent = COURSE.subtitle;
        this.shadowRoot.getElementById('udemy').href = COURSE.udemy;
        this.shadowRoot.getElementById('quiz').href = `https://quiz.siliconwat.com/#${TRILOGY[0].toLowerCase()}`;
        this.shadowRoot.getElementById('code').href = `https://code.siliconwat.com/#${TRILOGY[0].toLowerCase()}`;
        this.shadowRoot.getElementById('flashcard').href = `https://flashcard.siliconwat.com/#${TRILOGY[0].toLowerCase()}`;
        
        this.shadowRoot.querySelectorAll('.medium').forEach(a => a.href = COURSE.medium);
        this.shadowRoot.querySelectorAll('.program').forEach(span => span.textContent = TRILOGY[1] === 'Course' ? "If" : "When");
        this.shadowRoot.querySelectorAll('button').forEach(button => button.style.display = TRILOGY[1] === 'Cohort' ? "block" : "none");

        this.shadowRoot.querySelectorAll('.cohort').forEach(a => {
            a.textContent = "Remote Cohort Program";
            if (TRILOGY[1] === 'Course') a.href = `https://${TRILOGY[0].toLowerCase()}.siliconwat.org`;
            if (TRILOGY[1] === 'Cohort') a.style.fontWeight = "bold";
        });

        this.#render();
        this.style.display = 'block';
    }

    #render() {
        let project;

        switch (TRILOGY[0]) {
            case "Frontend":
                project = "Codepen Project";
                break;
            case "Backend":
                project = "Replit Project";
                break;
            case "iOS":
                project = "XCode Project";
                break;
        }

        this.shadowRoot.getElementById('project').textContent = project;
    }
}

customElements.define("sw-home", SwHome);