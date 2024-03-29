import { BACKGROUND, YEAR_BEGAN, YEAR, TERM, TRILOGY, getEmoji, getTerm, getYear, getData } from "/global.mjs";
import template from './template.mjs';

class SwHome extends HTMLElement {
    #github;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(github=this.#github) {
        this.#github = github;
        const y = getYear(github);
        const { course, cohort } = await getData('syllabus', y);

        this.#renderCards(course);
        this.#renderButtons(github, course, cohort);
        await this.#renderSelects(github, y);
        await this.shadowRoot.querySelector('sw-github').render(github, y);
        this.style.display = 'block';
    }

    #renderCards(course) {
        this.shadowRoot.getElementById('title').textContent = course.title;
        this.shadowRoot.getElementById('subtitle').textContent = TRILOGY[1] === 'course' ? course.subtitle : "";
        this.shadowRoot.getElementById('udemy').href = course.udemy || "#";
        this.shadowRoot.getElementById('quiz').href = `https://quiz.siliconwat.com/#${TRILOGY[0]}`;
        this.shadowRoot.getElementById('code').href = `https://code.siliconwat.com/#${TRILOGY[0]}`;
        this.shadowRoot.getElementById('flashcard').href = `https://flashcard.siliconwat.com/#${TRILOGY[0]}`;
        
        this.shadowRoot.querySelectorAll('.medium').forEach(a => a.href = course.medium || "#");
        this.shadowRoot.querySelectorAll('.program').forEach(span => span.textContent = TRILOGY[1] === 'course' ? "If" : "When");
        this.shadowRoot.querySelectorAll('button').forEach(button => button.style.display = TRILOGY[1] === 'cohort' ? "block" : "none");

        this.shadowRoot.querySelectorAll('.cohort').forEach(a => {
            a.textContent = "Remote Cohort Program";
            if (TRILOGY[1] === 'course') a.href = `https://${TRILOGY[0]}.siliconwat.org`;
            if (TRILOGY[1] === 'cohort') a.style.fontWeight = "bold";
        });

        this.#render();
    }

    #render() {
        let project;

        switch (TRILOGY[0]) {
            case "frontend":
                project = "Codepen Project";
                break;
            case "backend":
                project = "Codespace Project";
                break;
            case "ios":
                project = "Replit Project";
                break;
        }

        this.shadowRoot.getElementById('project').textContent = project;
    }

    async #renderSelects(github, y) {
        const students = await getData('students');
        this.#renderSelectYear(github, students, y);
        this.#renderSelectTerm(github, students, y);
    }

    #renderSelectYear(github, students, year) {
        const fragment = document.createDocumentFragment();
        for (let y = YEAR_BEGAN; y <= YEAR+1; y++) {
            const option = document.createElement('option');
            option.setAttribute('value', y);
            option.textContent = `Academic Year ${y} - ${this.#getYearTotal(students, y)}`;
            //option.disabled = y === YEAR + 1;
            //option.style.color = y === YEAR ? "green" : "black"; // not supported in Safari
            if (y === YEAR) option.textContent = option.textContent.toUpperCase();
            fragment.append(option);
        }

        if (github.student) {
            github.student.cohorts.reverse().forEach(cohort => {
                const option = fragment.querySelector(`option[value="${cohort.year}"]`);
                if (option) option.textContent = getEmoji(cohort) + option.textContent;
            });
        }

        const select = this.shadowRoot.getElementById('year');
        select.replaceChildren(fragment);
        select.value = year;
        //select.disabled = github.student;
        select.style.display = TRILOGY[1] === 'cohort' ? 'block' : 'none';
    }

    #getYearTotal(people, y) {
        let tutors = 0
        let students = 0;

        for (let person in people) {
            people[person].cohorts.filter(cohort => cohort.year === y).forEach(cohort => {
                if (cohort.type === 'tutor') tutors += 1
                else students += 1;
            });
        }

        return `${this.#getEmoji('tutor')} ${tutors > 6 ? tutors : 6} ${this.#getEmoji('student')} ${students}`;
    }

    #getEmoji(type) {
        switch (type) {
            case "tutor":
                return "🧑🏻‍🏫";
            case "student":
                return "👩🏻‍💻"
        }
    }

    #renderSelectTerm(github, students, y) {
        const semesters = document.createDocumentFragment();
        const quarters = document.createDocumentFragment();
        this.#createTermOptions(semesters, ["semester-winter", "semester-summer"], students, y);
        this.#createTermOptions(quarters, ["quarter-winter", "quarter-spring", "quarter-summer", "quarter-fall"], students, y);

        const select = this.shadowRoot.getElementById('term');
        select.firstElementChild.replaceChildren(semesters);
        select.lastElementChild.replaceChildren(quarters);

        if (github.student) {
            github.student.cohorts.forEach(cohort => {
                if (cohort.year === y) {
                    const option = select.querySelector(`option[value="${cohort.system}-${cohort.season}"]`);
                    if (option) option.textContent = getEmoji(cohort) + option.textContent;
                }
            });
        }

        if (y === YEAR) {
            const option = select.querySelector(`[value=${TERM}]`);
            option.textContent = option.textContent.toUpperCase();
        }

        select.value = getTerm(github)[0];
        //select.disabled = github.student;
        select.style.display = TRILOGY[1] === 'cohort' ? 'block' : 'none';
    }

    #createTermOptions(fragment, array, students, y) {
        array.forEach(cycle => {
            const term = cycle.split('-');
            const option = document.createElement('option');
            option.value = cycle;
            option.textContent = `${term[1].capitalize()} ${term[0].capitalize()} - ${this.#getTermTotal(students, y, term[0], term[1])}`;
            fragment.append(option);
        });
    }

    #getTermTotal(people, y, system, season) {
        let tutors = 0;
        let students = 0;

        for (let person in people) {
            people[person].cohorts.filter(cohort => cohort.year === y && cohort.system === system && cohort.season === season).forEach(cohort => {
                if (cohort.type === 'tutor') tutors += 1
                else students += 1;
            });
        }

        return `${this.#getEmoji('tutor')} ${tutors || 1} ${this.#getEmoji('student')} ${students}`;
    }

    async #renderButtons(github, course, cohort) {
        this.shadowRoot.getElementById('join').onclick = () => window.open(`https://github.com/SiliconWat/${TRILOGY[0]}.siliconwat.dev`, '_blank');
        
        const auth = this.shadowRoot.getElementById('auth');
        auth.firstElementChild.textContent = github.login ? "Log Out" : "Log In";
        auth.onclick = () => github.login ? document.querySelector('sw-auth').logout() : document.querySelector('sw-auth').show();

        const discord = this.shadowRoot.getElementById('discord');
        if (github.student) {
            discord.firstElementChild.textContent = "Private Discord";
            discord.onclick = () => window.open(cohort[github.student.system][github.student.season].discord || course.discord, '_blank');
        } else if (github.login) {
            const term = getTerm(github);
            discord.firstElementChild.textContent = "Visitor Discord";
            discord.onclick = () => window.open(cohort[term[1]][term[2]].discord || course.discord, '_blank');
        } else {
            discord.firstElementChild.textContent = "Public Discord";
            discord.onclick = () => window.open(course.discord, '_blank');
        }
    }

    async changeYearTerm(event) {
        document.body.style.display = 'none';
        document.documentElement.style.backgroundImage = "url(background.gif)";
        localStorage.setItem(event.target.id, event.target.value);
        await this.render();
        document.documentElement.style.backgroundImage = BACKGROUND;
        document.body.style.display = 'flex';
        await document.querySelector('sw-header').render();
        // await document.querySelector('sw-progress').render();
    }
}

customElements.define("sw-home", SwHome);