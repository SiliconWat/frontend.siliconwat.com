import { TRILOGY } from "/global.mjs";
import { YEAR, DISCORD } from "/data.mjs";
import template from './template.mjs';

class SwHome extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render() {
        const { YEAR, COURSE } = await import(`${TRILOGY[2]}/data.mjs`);
        
        this.shadowRoot.getElementById('title').textContent = COURSE.title;
        this.shadowRoot.getElementById('subtitle').textContent = TRILOGY[1] === 'Course' ? COURSE.subtitle : `Academic Year ${YEAR}`;
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

        this.shadowRoot.getElementById('course').style.display = TRILOGY[1] === 'Course' ? "block" : "none";
        this.shadowRoot.getElementById('cohort').style.display = TRILOGY[1] === 'Cohort' ? "block" : "none";

        this.#render();
        this.#renderButtons();
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

    #renderButtons() {
        this.shadowRoot.getElementById('join').onclick = () => document.querySelector('sw-login').show();
        this.shadowRoot.getElementById('join').onclick = () => window.open(`https://github.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort`, '_blank');

        this.shadowRoot.getElementById('discord').onclick = async () => {
            const student = await this.#getStudent();
            window.open(student ? DISCORD[student.term][student.season] : DISCORD.university, '_blank');
        }
    }

    //TODO:
    async #getStudent() {
        const data = await fetch(`https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/main/${YEAR}/Students.json`);
        const students = await data.json();
        return students.panhiathao;
    }
}

customElements.define("sw-home", SwHome);