import { PASSING, TRILOGY, getTerm, getData } from '/global.mjs';
import template from './template.mjs';

class SwGitHub extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(github, y) {
        if (TRILOGY[1] === 'Course') {
            this.shadowRoot.getElementById('course').style.display = 'block';
        } else {
            const term = getTerm(github);
            const { chapters } = await getData('syllabus', y);
            if (github.login) await this.#render(github, chapters, y, term)
            else await this.#renderAll(chapters, y, term);
            this.shadowRoot.getElementById('cohort').style.display = 'block';
        }
        this.style.display = 'block';
    }

    async #render(github, chapters, y, term) {
        const a = this.shadowRoot.querySelector('a');
        a.href = github.html_url;
        a.firstElementChild.src = github.avatar_url;
        a.lastElementChild.textContent = "@" + github.login;
        this.shadowRoot.querySelector('aside').style.display = 'block';

        if (github.student) await this.#renderStudent(github, chapters, y, term)
        else this.#renderStudents(chapters);
        this.shadowRoot.querySelector('table:last-child').style.display = 'block';
    }

    #assignments = ['discussion', 'summary', 'challenge', 'suggestion'];

    async #renderStudent(github, chapters, y, term) {
        const tbody = document.createDocumentFragment();
        const tfoot = document.createDocumentFragment();

        for (let c = 0; c < chapters.length; c++) {
            // const chapter = chapters[c];
            const gradebook = await getData('gradebook', y, { system: term[1], season: term[2], c: c + 1 });

            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.textContent = c + 1;
            tr.append(td);
            tbody.append(tr);

            let Total = 0;
            let Score = 0;
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
                Total += total;
                Score += score;
            });
            const th = document.createElement('th');
            th.scope = "row"
            th.textContent = Total > 0 ? (Score / Total * 100).toFixed(0) + "%" : "TBD";
            tr.append(th);
        }

        ///// tfoot

        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.scope = "row"
        th.textContent = "Score";
        tr.append(th);
        tfoot.append(tr);
        
        let Total = 0, Score = 0;
        for (const assignment of this.#assignments) {
            let total = 0, score = 0;
            const th = document.createElement('td');
            for (let c = 0; c < chapters.length; c++) {
                const gradebook = await getData('gradebook', y, { system: term[1], season: term[2], c: c + 1 });
                if (gradebook[github.login]) {
                    for (let grader in gradebook[github.login][assignment]) {
                        total += 1;
                        score += gradebook[github.login][assignment][grader].grade === 'pass' ? 1 : 0;
                    }
                }
            }
            th.textContent = total > 0 ? (score / total * 100).toFixed(0) + "%" : "TBD";
            th.scope = "col";
            tr.append(th);
            Total += total;
            Score += score;
        }
        const th2 = document.createElement('th');
        th2.scope = "row"
        th2.textContent = Total > 0 ? (Score / Total * 100).toFixed(0) + "%" : "TBD";
        tr.append(th2);

        this.shadowRoot.querySelector('table:last-child tbody').replaceChildren(tbody);
        this.shadowRoot.querySelector('table:last-child tfoot').replaceChildren(tfoot);
        this.#renderFinalGrade(Score, Total);
    }

    #renderFinalGrade(score, total) {
        this.shadowRoot.getElementById('score').textContent = total > 0 ? (score / total * 100).toFixed(2) + "%" : "TBD";
        this.shadowRoot.getElementById('grade').textContent = total > 0 ? (score / total >= PASSING ? "Pass" : "Fail") : "TBD";
    }

    #renderStudents(chapters) {
        const tbody = document.createDocumentFragment();

        for (let c = 0; c < chapters.length; c++) {
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.textContent = c + 1;
            tr.append(td);
            tbody.append(tr);

            this.#assignments.forEach(assignment => {
                const td = document.createElement('td');
                td.textContent = "n/a";
                tr.append(td);
            });

            const th = document.createElement('th');
            th.scope = "row"
            th.textContent = "N/A";
            tr.append(th);
        }

        this.shadowRoot.querySelector('table:last-child tbody').replaceChildren(tbody);
    }

    async #renderAll(chapters, y, term) { 
        const thead = document.createDocumentFragment();
        const tbody = document.createDocumentFragment();
        const tfoot = document.createDocumentFragment();

        // thead

        const students = await this.#getStudents(y, term);
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.scope = "col"
        th.textContent = "Chapter";
        tr.append(th);
        thead.append(tr);

        for (const student of students) {
            const th = document.createElement('th');
            th.scope = "col"
            th.textContent = `@${student}`;
            tr.append(th)
        }

        const th2 = document.createElement('th');
        th2.scope = "col"
        th2.textContent = "AVG";
        tr.append(th2)

        // tbody

        for (let c = 0; c < chapters.length; c++) {
            const gradebook = await getData('gradebook', y, { system: term[1], season: term[2], c: c + 1 });
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.textContent = c + 1;
            tr.append(td);
            tbody.append(tr);

            let TOTAL = 0, SCORE = 0;
            for (const student of students) {
                let Total = 0, Score = 0;
                const td = document.createElement('td');
                td.title = "|| ";
                this.#assignments.forEach(assignment => {
                    let total = 0, score = 0;
                    if (gradebook[student]) {
                        for (let grader in gradebook[student][assignment]) {
                            total += 1;
                            score += gradebook[student][assignment][grader].grade === 'pass' ? 1 : 0;
                        }
                    }
                    td.title += `${assignment.capitalize()}: ${total > 0 ? (score / total * 100).toFixed(0) + "%" : "TBD"} || `;
                    Total += total;
                    Score += score;
                });
                td.textContent = Total > 0 ? (Score / Total * 100).toFixed(0) + "%" : "TBD";
                tr.append(td);
                TOTAL += Total;
                SCORE += Score;
            }
            const th = document.createElement('th');
            th.scope = "row"
            th.textContent = TOTAL > 0 ? (SCORE / TOTAL * 100).toFixed(0) + "%" : "TBD";
            tr.append(th);
        }

        // tfoot

        this.shadowRoot.querySelector('table:first-child thead').replaceChildren(thead);
        this.shadowRoot.querySelector('table:first-child tbody').replaceChildren(tbody);
        this.shadowRoot.querySelector('table:first-child tfoot').replaceChildren(tfoot);
        this.shadowRoot.querySelector('table:first-child').style.display = 'block';
    }

    async #getStudents(y, term) {
        const Students = await getData('students');
        const students = [];
        
        for (let student in Students) {
            if (Students[student].cohorts.some(cohort => cohort.year === y && cohort.system === term[1] && cohort.season === term[2]))
                students.push(student);
        }

        return students.sort();
    }
}

customElements.define("sw-github", SwGitHub);