import { TRILOGY, getGitHub, getTerm, getYear } from "/global.mjs";
import template from './template.mjs';

class SwHome extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render() {
        const { COURSE, COHORT } = await import(`${TRILOGY[2]}/data.mjs`);
        
        this.shadowRoot.getElementById('title').textContent = COURSE.title;
        this.shadowRoot.getElementById('subtitle').textContent = TRILOGY[1] === 'Course' ? COURSE.subtitle : "Academic Year";
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

        const github = await getGitHub();
        this.#render();
        this.#renderSelects(github);
        this.#renderButtons(github, COURSE, COHORT);
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

    async #renderSelects(github) {
        const year = this.shadowRoot.getElementById('year');
        year.value = await getYear();
        year.disabled = github.student;
        year.style.display = TRILOGY[1] === 'Cohort' ? 'block' : 'none';

        const term = this.shadowRoot.getElementById('term');
        term.value = getTerm(github)[0];
        term.disabled = github.student;
        term.style.display = TRILOGY[1] === 'Cohort' ? 'block' : 'none';
    }

    async #renderButtons(github, course, cohort) {
        this.shadowRoot.getElementById('join').onclick = () => window.open(`https://github.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort`, '_blank');
        
        const auth = this.shadowRoot.getElementById('auth');
        auth.firstElementChild.textContent = github.login ? "Log Out" : "Log In";
        auth.onclick = () => github.login ? document.querySelector('sw-auth').logout() : document.querySelector('sw-auth').show();

        const discord = this.shadowRoot.getElementById('discord');
        if (github.student) {
            discord.firstElementChild.textContent = "Private Discord";
            discord.onclick = () => window.open(cohort[github.student.term][github.student.season].discord, '_blank');
        } else if (github.login) {
            const term = getTerm(github);
            discord.firstElementChild.textContent = "Visitor Discord";
            discord.onclick = () => window.open(cohort[term[1]][term[2]].discord, '_blank');
        } else {
            discord.firstElementChild.textContent = "Public Discord";
            discord.onclick = () => window.open(course.discord, '_blank');
        }
    }

    changeYearTerm(event) {
        localStorage.setItem(event.target.id, event.target.value);
        this.render();
        document.querySelector('sw-header').render();
    }
}

customElements.define("sw-home", SwHome);