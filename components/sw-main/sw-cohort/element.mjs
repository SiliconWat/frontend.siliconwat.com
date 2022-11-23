import { TRILOGY, getTerm, getData } from '/global.mjs';
import template from './template.mjs';

class SwCohort extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(github, y, c) {
        if (TRILOGY[1] === 'Course') {
            await this.#render();
        } else {
            if (github.login) {
                const term = getTerm(github);
                const gradebook = await getData('gradebook', y, { system: term[1], season: term[2], c });
                if (github.student) this.#renderStudent(gradebook[github.login])
                else this.#renderStudents(gradebook);
                this.shadowRoot.querySelector('section:first-child').style.display = 'block';
            } else {
                await this.#render();
            }
        }
        this.style.display = 'block';
    }

    async #render() {
        const section = this.shadowRoot.querySelector('section:last-child');
        const students = await getData('students');

        section.firstElementChild.lastElementChild.textContent = Object.keys(students).length;
        section.style.display = 'block';
    }

    #renderStudent(grade) {
        const figure = this.shadowRoot.querySelector('figure:first-child');
        figure.lastElementChild.lastElementChild.textContent = JSON.stringify(grade.suggestion);
        figure.style.display = 'block';
    }

    #renderStudents(gradebook) {
        const figure = this.shadowRoot.querySelector('figure:last-child');
        
        figure.style.display = 'block';
    }
}

customElements.define("sw-cohort", SwCohort);