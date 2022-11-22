import { TRILOGY, getGitHub, getTerm } from '/global.mjs';
import template from './template.mjs';

class SwCohort extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(y, c) {
        if (TRILOGY[1] === 'Course') {
            await this.#render();
        } else {
            const github = await getGitHub();
            if (github.login) {
                if (github.student) {
                    const data = await fetch(`https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/main/${y}/${github.student.term === 'semester' ? "Semesters" : "Quarters"}/${github.student.season.charAt(0).toUpperCase() + github.student.season.slice(1)}/Chapters/${c}/Gradebook.json`, { cache: "no-store" });
                    const gradebook = await data.json()
                    this.#renderStudent(gradebook[github.login]);
                } else {
                    const term = getTerm(github);
                    const data = await fetch(`https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/main/${y}/${term[1] === 'semester' ? "Semesters" : "Quarters"}/${term[2].charAt(0).toUpperCase() + term[2].slice(1)}/Chapters/${c}/Gradebook.json`, { cache: "no-store" });
                    this.#renderStudents(await data.json());
                }
                this.shadowRoot.querySelector('section:first-child').style.display = 'block';
            } else {
                await this.#render();
            }
        }
        this.style.display = 'block';
    }

    async #render() {
        const section = this.shadowRoot.querySelector('section:last-child');
        const data = await fetch(`https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/main/Students.json`, { cache: "no-store" });
        const students = await data.json();

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