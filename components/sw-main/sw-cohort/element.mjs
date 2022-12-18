import { PASSING, TRILOGY, getTerm, getWeek, getData } from '/global.mjs';
import template from './template.mjs';

class SwCohort extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(github, task, y, c) {
        if (TRILOGY[1] === 'course') {
            this.shadowRoot.getElementById('percent').textContent = (PASSING*100).toFixed(0) + "%";
            this.shadowRoot.getElementById('program').href = `https://${TRILOGY[0]}.siliconwat.org`;
            this.shadowRoot.getElementById('course').style.display = 'block';
        } else {
            const term = getTerm(github);
            const gradebook = await getData('gradebook', y, { system: term[1], season: term[2], c });
            if (github.student) await this.#renderStudent(github, task, gradebook, y, term, c)
            else this.#renderStudents(task, gradebook);
            this.shadowRoot.getElementById('cohort').style.display = 'flex';
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

        // student tbody

        if (group) group.members.sort().filter(member => member !== github.login).forEach(member => {
            const tr = document.createElement('tr');
            const td = document.createElement('th');
            td.textContent = `@${member}`;
            td.style.cursor = "pointer";
            td.title = `https://github.com/${member}`;
            td.onclick = () => document.location = td.title;
            tr.append(td);
            fragmentStudent.append(tr);

            this.#assignments.forEach(assignment => {
                const td = document.createElement('td');
                if (gradebook[github.login]) {
                    for (let grader in gradebook[github.login][assignment]) {
                        if (grader === member) {
                            td.textContent = gradebook[github.login][assignment][grader].grade === 'pass' ? "👍🏼" : "👎🏼";
                            break;
                        }
                    }
                    td.textContent = td.textContent || "TBD";
                } else {
                    td.textContent = "TBD";
                }
                tr.append(td);
            });
        }) 
        else {
            const tr = document.createElement('tr');
            const td = document.createElement('th');
            td.textContent = "TBA";
            td.style.fontStyle = "italic";
            tr.append(td);
            fragmentStudent.append(tr);

            this.#assignments.forEach(assignment => {
                const td = document.createElement('td');
                td.textContent = "n/a";
                tr.append(td);
            });
        }

        // student tfoot

        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.scope = "row"
        th.textContent = "SCORE";
        tr.append(th);
        fragmentFoot.append(tr);

        this.#assignments.forEach(assignment => {
            let total = 0, score = 0;
            const th = document.createElement('th');
            if (gradebook[github.login]) {
                for (let grader in gradebook[github.login][assignment]) {
                    total += 1;
                    score += gradebook[github.login][assignment][grader].grade === 'pass' ? 1 : 0;
                }
            }
            th.textContent = total > 0 ? (score / total * 100).toFixed(0) + "%" : "TBD";
            tr.append(th);
        });

        // group tbody

        if (group) group.members.sort().filter(member => member !== github.login).forEach(member => {
            const tr = document.createElement('tr');
            const td = document.createElement('th');
            td.textContent = `@${member}`;
            td.style.cursor = "pointer";
            td.title = `https://github.com/${member}`;
            td.onclick = () => document.location = td.title;
            tr.append(td);
            fragmentGroup.append(tr);

            this.#assignments.forEach(assignment => {
                const td = document.createElement('td');
                td.textContent = gradebook[member] && gradebook[member][assignment][github.login] ? (gradebook[member][assignment][github.login].grade  ? "👍🏼" : "👎🏼") : "TBD";
                tr.append(td);
            });
        })
        else {
            const tr = document.createElement('tr');
            const td = document.createElement('th');
            td.textContent = "TBA";
            td.style.fontStyle = "italic";
            tr.append(td);
            fragmentGroup.append(tr);

            this.#assignments.forEach(assignment => {
                const td = document.createElement('td');
                td.textContent = "n/a";
                tr.append(td);
            });
        }

        this.shadowRoot.querySelector('table:nth-child(2) tbody').replaceChildren(fragmentStudent);
        this.shadowRoot.querySelector('table:nth-child(2) tfoot').replaceChildren(fragmentFoot);
        this.shadowRoot.querySelector('table:last-child tbody').replaceChildren(fragmentGroup);
        this.shadowRoot.querySelector('table:nth-child(2)').style.display = 'block';
        this.shadowRoot.querySelector('table:last-child').style.display = 'block';
        this.shadowRoot.querySelector('table:first-child').style.display = 'none';
        this.#highlight(task);
        this.shadowRoot.getElementById('cohort').style.display = 'flex';
    }

    #renderStudents(task, gradebook) {
        const students = Object.keys(gradebook).sort();
        const tbody = document.createDocumentFragment();
        const tfoot = document.createDocumentFragment();

        // tbody

        for (const student of students) {
            const tr = document.createElement('tr');
            const td = document.createElement('th');
            td.textContent = `@${student}`;
            td.style.cursor = "pointer";
            td.title = `https://github.com/${student}`;
            td.onclick = () => document.location = td.title;
            tr.append(td);
            tbody.append(tr);

            let Total = 0, Score = 0;
            this.#assignments.forEach(assignment => {
                let total = 0, score = 0;
                const td = document.createElement('td');
                if (gradebook[student]) {
                    for (let grader in gradebook[student][assignment]) {
                        total += 1;
                        score += gradebook[student][assignment][grader].grade === 'pass' ? 1 : 0;
                    }
                }
                td.textContent = total > 0 ? (score / total * 100).toFixed(0) + "%" : "TBD";
                tr.append(td);
                Total += total;
                Score += score;
            });

            const th = document.createElement('th');
            th.scope = "col"
            th.textContent = Total > 0 ? (Score / Total * 100).toFixed(0) + "%" : "TBD";
            tr.append(th);
        }

        if (students.length === 0) {
            const tr = document.createElement('tr');
            const td = document.createElement('th');
            td.textContent = "No Students";
            td.style.fontStyle = "italic";
            tr.append(td);
            tbody.append(tr);

            this.#assignments.forEach(assignment => {
                const td = document.createElement('td');
                td.textContent = "n/a";
                tr.append(td);
            });

            const th = document.createElement('th');
            th.scope = "col"
            th.textContent = "No Students";
            th.style.fontStyle = "italic";
            tr.append(th);
        }

        // tfoot

        const tr = document.createElement('tr');
        const fth = document.createElement('th');
        fth.scope = "row"
        fth.textContent = "AVG";
        tr.append(fth);
        tfoot.append(tr);

        let Total = 0, Score = 0;
        this.#assignments.forEach(assignment => {
            let total = 0, score = 0;
            for (const student of Object.keys(gradebook)) {
                if (gradebook[student]) {
                    for (let grader in gradebook[student][assignment]) {
                        total += 1;
                        score += gradebook[student][assignment][grader].grade === 'pass' ? 1 : 0;
                    }
                }
            }
            const th = document.createElement('th');
            th.textContent = total > 0 ? (score / total * 100).toFixed(0) + "%" : "TBD";
            tr.append(th);
            Total += total;
            Score += score;
        });

        const th = document.createElement('th');
        th.scope = "col"
        th.textContent = Total > 0 ? (Score / Total * 100).toFixed(0) + "%" : "TBD";
        th.style.color = "orange";
        tr.append(th);

        this.shadowRoot.querySelector('table:first-child tbody').replaceChildren(tbody);
        this.shadowRoot.querySelector('table:first-child tfoot').replaceChildren(tfoot);
        this.shadowRoot.querySelector('table:nth-child(2)').style.display = 'none';
        this.shadowRoot.querySelector('table:last-child').style.display = 'none';
        this.shadowRoot.querySelector('table:first-child').style.display = 'block';
        this.#highlight(task);
    }

    #highlight(task) {
        this.shadowRoot.querySelectorAll('col').forEach(element => element.classList.remove('highlight'));
        switch (task) {
            case "learn":
                this.shadowRoot.querySelectorAll('col:nth-child(2)').forEach(element => element.classList.add('highlight'));
                break;
            case "practice":
                this.shadowRoot.querySelectorAll('col:nth-child(3), col:nth-child(4)').forEach(element => element.classList.add('highlight'));
                break;
            case "review":
                this.shadowRoot.querySelectorAll('col:nth-child(5)').forEach(element => element.classList.add('highlight'));
                break;
        }
    }
}

customElements.define("sw-cohort", SwCohort);