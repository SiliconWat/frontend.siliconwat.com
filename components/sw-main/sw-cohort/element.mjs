import { TRILOGY, getTerm, getData } from '/global.mjs';
import template from './template.mjs';

class SwCohort extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(github, task, y, c) {
        if (TRILOGY[1] === 'Course') {
            this.shadowRoot.getElementById('course').style.display = 'block';
        } else {
            const term = getTerm(github);
            const gradebook = await getData('gradebook', y, { system: term[1], season: term[2], c });
            this.shadowRoot.querySelectorAll('tr th, tr td').forEach(element => element.style.backgroundColor = 'none');
            if (github.student) this.#renderStudent(task, gradebook[github.login])
            else this.#renderStudents(task, gradebook);
            this.shadowRoot.getElementById('cohort').style.display = 'block';
        }
        this.style.display = 'block';
    }

    #renderStudent(task, grade) {
        this.#getGraders(grade);
        switch (task) {
            case "learn":
                this.shadowRoot.querySelectorAll('tr th:nth-child(2), tr td:nth-child(2)').forEach(element => element.style.backgroundColor = 'yellow');
                break;
            case "practice":
                this.shadowRoot.querySelectorAll('tr th:nth-child(3), tr td:nth-child(3), tr th:nth-child(4), tr td:nth-child(4)').forEach(element => element.style.backgroundColor = 'yellow');
                break;
            case "review":
                this.shadowRoot.querySelectorAll('tr th:nth-child(5), tr td:nth-child(5)').forEach(element => element.style.backgroundColor = 'yellow');
                break;
        }
    }

    #getGraders(grade) {
        const fragment = document.createDocumentFragment();

        ['discussion', 'challenge', 'suggestion', 'summary'].forEach(assignment => {
            for (let grader in grade[assignment]) {
                const tr = document.createElement('tr');
                const td = document.createElement('td');
                const td2 = document.createElement('td');
                td.textContent = `@${grader}`;
                td2.textContent = grade[assignment][grader].grade;
                tr.append(td, td2);
                fragment.append(tr);
            }
        });

        this.shadowRoot.querySelector('table:first-child tbody').replaceChildren(fragment);
    }

    #renderStudents(task, gradebook) {
        switch (task) {
            case "learn":
                break;
            case "practice":
                break;
            case "review":
                break;
        }
    }
}

customElements.define("sw-cohort", SwCohort);