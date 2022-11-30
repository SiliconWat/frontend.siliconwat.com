import { PASSING, TRILOGY, getTerm, getData, getEmoji } from '/global.mjs';
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
            this.shadowRoot.getElementById('cohort').style.display = 'flex';
        }
        this.style.display = 'block';
    }

    async #render(github, chapters, y, term) {
        const avatar = this.shadowRoot.getElementById('avatar');
        const username = this.shadowRoot.getElementById('username');
        avatar.href = github.html_url;
        username.parentElement.href = github.html_url;
        avatar.firstElementChild.src = github.avatar_url;
        username.textContent = "@" + github.login + this.#getEmoji(github, y, term);
        this.shadowRoot.querySelector('aside').style.display = 'flex';

        if (github.student) await this.#renderStudent(github, chapters, y, term)
        else this.#renderStudents(chapters);
        this.shadowRoot.querySelector('table:last-child').style.display = 'block';
    }

    #getEmoji(github, y, term) {
        if (github.student) {
            const cohort = github.student.cohorts.find(cohort => cohort.year === y && cohort.system === term[1] && cohort.season === term[2]);
            return cohort ? " " + getEmoji(cohort) : "";
        } return "";
    }

    #assignments = ['discussion', 'summary', 'challenge', 'suggestion'];

    async #renderStudent(github, chapters, y, term) {
        const tbody = document.createDocumentFragment();
        const tfoot = document.createDocumentFragment();

        for (let c = 0; c < chapters.length; c++) {
            // const chapter = chapters[c];
            const gradebook = await getData('gradebook', y, { system: term[1], season: term[2], c: c + 1 });

            const tr = document.createElement('tr');
            const td = document.createElement('th');
            td.textContent = c + 1;
            tr.append(td);
            tbody.append(tr);

            let Total = 0, Score = 0;
            this.#assignments.forEach(assignment => {
                let total = 0, score = 0;
                const td = document.createElement('td');
                if (gradebook[github.login]) {
                    for (let grader in gradebook[github.login][assignment]) {
                        total += 1;
                        score += gradebook[github.login][assignment][grader].grade === 'pass' ? 1 : 0;
                    }
                }
                td.textContent = total > 0 ? (score / total * 100).toFixed(0) + "%" : "tbd";
                td.title = `Chapter ${c + 1} ${assignment.capitalize()}: ${td.textContent}`;
                this.#highlight(td);
                tr.append(td);
                Total += total;
                Score += score;
            });

            const th = document.createElement('th');
            th.scope = "row"
            th.textContent = Total > 0 ? (Score / Total * 100).toFixed(0) + "%" : "TBD";
            th.title = `Chapter ${c + 1} Average: ${th.textContent}`;
            tr.append(th);
        }

        ///// tfoot

        const tr = document.createElement('tr');
        const fth = document.createElement('th');
        fth.scope = "row"
        fth.textContent = "SCORE";
        tr.append(fth);
        tfoot.append(tr);
        
        let Total = 0, Score = 0;
        for (const assignment of this.#assignments) {
            let total = 0, score = 0;
            const th = document.createElement('th');
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
            th.title = `Total ${assignment.capitalize()} Score: ${th.textContent}`;
            th.scope = "col";
            this.#highlight(th);
            tr.append(th);
            Total += total;
            Score += score;
        }
        
        const th = document.createElement('th');
        th.scope = "row"
        th.textContent = Total > 0 ? (Score / Total * 100).toFixed(0) + "%" : "TBD";
        th.title = `Overall Score: ${th.textContent}`;
        tr.append(th);

        this.shadowRoot.querySelectorAll('table:last-child thead th').forEach(element => this.#highlight(element));
        this.shadowRoot.querySelector('table:last-child tbody').replaceChildren(tbody);
        this.shadowRoot.querySelector('table:last-child tfoot').replaceChildren(tfoot);
        this.#renderFinalGrade(Score, Total);
    }

    #renderFinalGrade(score, total) {
        this.shadowRoot.getElementById('score').textContent = total > 0 ? (score / total * 100).toFixed(2) + "%" : "TBD";
        this.shadowRoot.getElementById('grade').textContent = total > 0 ? (score / total >= PASSING ? "Pass 🎓" : "No Pass 🆘") : "TBD";
        this.shadowRoot.getElementById('grade').style.color = total > 0 ? (score / total >= PASSING ? "blue" : "red") : "orange";
    }

    #renderStudents(chapters) {
        const tbody = document.createDocumentFragment();

        for (let c = 0; c < chapters.length; c++) {
            const tr = document.createElement('tr');
            const td = document.createElement('th');
            td.textContent = c + 1;
            tr.append(td);
            tbody.append(tr);

            this.#assignments.forEach(assignment => {
                const td = document.createElement('td');
                td.textContent = "n/a";
                td.title = `Chapter ${c + 1} ${assignment.capitalize()}: ${td.textContent}`;
                this.#highlight(td);
                tr.append(td);
            });

            const th = document.createElement('th');
            th.scope = "row"
            th.textContent = "N/A";
            th.title = `Chapter ${c + 1} Total Score: ${th.textContent}`;
            tr.append(th);
        }

        this.shadowRoot.querySelectorAll('table:last-child thead th').forEach(element => this.#highlight(element));
        this.shadowRoot.querySelector('table:last-child tbody').replaceChildren(tbody);
        this.shadowRoot.querySelectorAll('table:last-child tfoot th').forEach(element => this.#highlight(element));
    }

    async #renderAll(chapters, y, term) { 
        const students = await this.#getStudents(y, term);
        const colgroup = document.createDocumentFragment();
        const thead = document.createDocumentFragment();
        const tbody = document.createDocumentFragment();
        const tfoot = document.createDocumentFragment();

        // colgroup

        for (let i = 0; i < students.length + 2; i++) {
            const col = document.createElement('col');
            col.span = 1;
            colgroup.append(col);
        }

        // thead
        
        const tr = document.createElement('tr');
        const hth = document.createElement('th');
        hth.scope = "col"
        hth.textContent = "CHAPTER";
        tr.append(hth);
        thead.append(tr);

        for (const student of students) {
            const th = document.createElement('th');
            th.scope = "col"
            th.textContent = `@${student}`;
            th.style.cursor = "pointer";
            th.title = `https://github.com/${student}`;
            th.onclick = () => document.location = th.title;
            this.#highlight(th);
            tr.append(th)
        }

        if (students.length === 0) {
            const th = document.createElement('th');
            th.textContent = "There are currently no students.";
            th.style.fontStyle = "italic";
            tr.append(th);
        }

        const th = document.createElement('th');
        th.scope = "col"
        th.textContent = "AVG";
        tr.append(th)

        // tbody

        for (let c = 0; c < chapters.length; c++) {
            const gradebook = await getData('gradebook', y, { system: term[1], season: term[2], c: c + 1 });
            const tr = document.createElement('tr');
            const td = document.createElement('th');
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
                    td.title += `${assignment.capitalize()}: ${total > 0 ? (score / total * 100).toFixed(0) + "%" : "tbd"} || `;
                    Total += total;
                    Score += score;
                });
                td.textContent = Total > 0 ? (Score / Total * 100).toFixed(0) + "%" : "tbd";
                this.#highlight(td);
                tr.append(td);
                TOTAL += Total;
                SCORE += Score;
            }

            if (students.length === 0) {
                const td = document.createElement('td');
                td.textContent = "n/a";
                tr.append(td);
            }

            const th = document.createElement('th');
            th.scope = "row"
            th.textContent = TOTAL > 0 ? (SCORE / TOTAL * 100).toFixed(0) + "%" : "TBD";
            th.title = `Chapter ${c + 1} Average: ${th.textContent}`;
            tr.append(th);
        }

        // tfoot

        const ftr = document.createElement('tr');
        const fth = document.createElement('th');
        fth.scope = "row"
        fth.textContent = "SCORE";
        ftr.append(fth);
        tfoot.append(ftr);

        let TOTAL = 0, SCORE = 0;
        for (const student of students) {
            let Total = 0, Score = 0;
            const th = document.createElement('th');
            th.scope = "col";
            th.title = "|| ";
            for (const assignment of this.#assignments) {
                let total = 0, score = 0;
                for (let c = 0; c < chapters.length; c++) {
                    const gradebook = await getData('gradebook', y, { system: term[1], season: term[2], c: c + 1 });
                    if (gradebook[student]) {
                        for (let grader in gradebook[student][assignment]) {
                            total += 1;
                            score += gradebook[student][assignment][grader].grade === 'pass' ? 1 : 0;
                        }
                    }
                }
                th.title += `${assignment.capitalize()}: ${total > 0 ? (score / total * 100).toFixed(0) + "%" : "TBD"} || `;
                Total += total;
                Score += score;
            }
            th.textContent = Total > 0 ? (Score / Total * 100).toFixed(0) + "%" : "TBD";
            th.title = `@${student} Overall Score: ${th.textContent}`;
            this.#highlight(th);
            ftr.append(th);
            TOTAL += Total;
            SCORE += Score;
        }

        if (students.length === 0) {
            const th = document.createElement('th');
            th.textContent = "Get a 50% DISCOUNT for being the first to enroll!";
            th.style.fontStyle = "italic";
            ftr.append(th);
        }

        const th2 = document.createElement('th');
        th2.scope = "row"
        th2.textContent = TOTAL > 0 ? (SCORE / TOTAL * 100).toFixed(0) + "%" : "TBD";
        th2.title = `Overall Cohort Score: ${th2.textContent}`;
        ftr.append(th2);

        this.shadowRoot.querySelector('table:first-child colgroup').replaceChildren(colgroup);
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

    #highlight(element) {
        element.onmouseenter = this.#highlightColumn.bind(this, true);
        element.onmouseleave = this.#highlightColumn.bind(this, false);
    }

    #highlightColumn(hover, event) {
        const table = event.target.parentElement.parentElement.parentElement;
        const index = Array.prototype.indexOf.call(event.target.parentElement.children, event.target);
        const col = table.querySelector(`col:nth-child(${index + 1})`);
        if (hover) col.classList.add('highlight')
        else col.classList.remove('highlight');
    }
}

customElements.define("sw-github", SwGitHub);