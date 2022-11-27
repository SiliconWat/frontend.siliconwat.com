import { TRILOGY, getTerm, getWeek, getData } from '/global.mjs';
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
            if (github.student) await this.#renderStudent(github, task, gradebook, y, term, c)
            else this.#renderStudents(task, gradebook);
            this.shadowRoot.getElementById('cohort').style.display = 'block';
        }
        this.style.display = 'block';
    }

    #assignments = ['discussion', 'challenge', 'suggestion', 'summary'];

    async #renderStudent(github, task, gradebook, y, term, c) {
        const { weeks } = await getData('syllabus', y);
        const groups = await getData('groups', y, {system: term[1], season: term[2], w: getWeek(weeks, c)});
        const group = groups.find(group => group.members.includes(github.login));

        const fragmentStudent = document.createDocumentFragment();
        const fragmentFoot = document.createDocumentFragment();
        const fragmentGroup = document.createDocumentFragment();

        group.members.filter(member => member !== github.login).forEach(member => {
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.textContent = `@${member}`;
            tr.append(td);
            fragmentStudent.append(tr);
            this.#assignments.forEach(assignment => {
                const td = document.createElement('td');
                if (gradebook[github.login]) {
                    for (let grader in gradebook[github.login][assignment]) {
                        if (grader === member) {
                            td.textContent = gradebook[github.login][assignment][grader].grade;
                            break;
                        }
                    }
                    td.textContent = td.textContent || "TBD";
                } else {
                    td.textContent = "TBD";
                }
                tr.append(td);
            });
        });

        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.scope = "row"
        th.textContent = "Score";
        tr.append(th);
        fragmentFoot.append(tr);
        this.#assignments.forEach(assignment => {
            let total = 0;
            let score = 0;
            const td = document.createElement('td');
            if (gradebook[github.login]) {
                for (let grader in gradebook[github.login][assignment]) {
                    total += 1;
                    score += gradebook[github.login][assignment][grader].grade === 'pass' ? 1 : 0;
                }
            }
            td.textContent = total > 0 ? (score / total * 100).toFixed(0) + "%" : "TBD";
            tr.append(td);
        });

        group.members.filter(member => member !== github.login).forEach(member => {
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.textContent = `@${member}`;
            tr.append(td);
            fragmentGroup.append(tr);
            this.#assignments.forEach(assignment => {
                const td = document.createElement('td');
                td.textContent = gradebook[member] && gradebook[member][assignment][github.login] ? gradebook[member][assignment][github.login].grade : "TBD";
                tr.append(td);
            });
        });

        this.shadowRoot.querySelector('table:nth-child(2) tbody').replaceChildren(fragmentStudent);
        this.shadowRoot.querySelector('table:nth-child(2) tfoot').replaceChildren(fragmentFoot);
        this.shadowRoot.querySelector('table:last-child tbody').replaceChildren(fragmentGroup);
        this.shadowRoot.querySelector('table:nth-child(2)').style.display = 'block';
        this.shadowRoot.querySelector('table:last-child').style.display = 'block';
        this.shadowRoot.querySelector('table:first-child').style.display = 'none';
        this.#highlight(task);
    }

    #renderStudents(task, gradebook) {
        const students = document.createDocumentFragment();

        for (const student of Object.keys(gradebook).sort()) {
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.textContent = `@${student}`;
            tr.append(td);
            students.append(tr);
            this.#assignments.forEach(assignment => {
                let total = 0;
                let score = 0;
                const td = document.createElement('td');
                if (gradebook[student]) {
                    for (let grader in gradebook[student][assignment]) {
                        total += 1;
                        score += gradebook[student][assignment][grader].grade === 'pass' ? 1 : 0;
                    }
                }
                td.textContent = total > 0 ? (score / total * 100).toFixed(0) + "%" : "TBD";
                tr.append(td);
            });
        }

        this.shadowRoot.querySelector('table:first-child tbody').replaceChildren(students);
        this.shadowRoot.querySelector('table:nth-child(2)').style.display = 'none';
        this.shadowRoot.querySelector('table:last-child').style.display = 'none';
        this.shadowRoot.querySelector('table:first-child').style.display = 'block';
        this.#highlight(task);
    }

    #highlight(task) {
        this.shadowRoot.querySelectorAll('tr th, tr td').forEach(element => element.style.backgroundColor = 'none');
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
}

customElements.define("sw-cohort", SwCohort);