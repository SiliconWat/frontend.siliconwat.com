import { TRILOGY, getWeek } from '/global.mjs';
import template from './template.mjs';

class SwLearn extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(i, c) {
        this.style.display = 'block';
        const done = Number(localStorage.getItem(`learn-${TRILOGY[1] === 'Course' ? 'unit' : 'week'}${i}-chapter${c}`));
        const { YEAR, COHORT, UNITS, WEEKS, CHAPTERS } = await import(`${TRILOGY[2]}/data.mjs`);
        const item = TRILOGY[1] === 'Course' ? UNITS[i - 1] : WEEKS[i - 1];
        const chapter = CHAPTERS[c - 1];

        this.shadowRoot.querySelector('header h1').textContent = TRILOGY[1] === 'Course' ? `Unit ${i}: ${item.title}` : `Week ${i}: ${getWeek(COHORT, i)}`;
        this.shadowRoot.querySelector('header h2').textContent = `${done ? "✅" : "📖"} Learn: Chapter ${c}`;
        this.shadowRoot.querySelector('header h3').textContent = `${done ? "☑️" : "📋"} ${chapter.title}`;
        
        this.#render();
        this.#renderVideo(chapter, c, done);
        this.#renderTextbook(chapter, c, done);
        this.#renderQuiz(UNITS, i, c, done);
        this.#renderGroup(WEEKS, YEAR, i, c, done);
    }

    #render() {
        let editor;

        switch (TRILOGY[0]) {
            case "Frontend":
                editor = "Codepen";
                break;
            case "Backend":
                editor = "Replit";
                break;
            case "iOS":
                editor = "Replit";
                break;
        }

        this.shadowRoot.getElementById('editor').textContent = editor;
    }

    #renderVideo(chapter, c, done) {
        const button = this.shadowRoot.querySelector('.video button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Lecture ${c}`;
        button.onclick = () => window.open(chapter.udemy, '_blank');
        button.disabled = !Boolean(chapter.udemy);
        if (!Boolean(chapter.udemy)) button.style.opacity = "0.2";
    }

    #renderTextbook(chapter, c, done) {
        const button = this.shadowRoot.querySelector('.textbook button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Chapter ${c}`;
        button.onclick = () => window.open(chapter.medium, '_blank');
    }
    
    #renderQuiz(units, i, c, done) {
        const button = this.shadowRoot.querySelector('.quiz button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Quiz ${c}`;
        button.onclick = () => window.open(`https://quiz.siliconwat.com/#${TRILOGY[0].toLowerCase()}-${this.#getUnit(units, i, c)}-chapter${c}`, '_blank');
    }

    #renderGroup(weeks, y, i, c, done) {
        const button = this.shadowRoot.querySelector('.group button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Discussion ${c}`;
        button.onclick = () => window.open(`https://github.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/blob/main/${y}/Assignments/Weeks/${this.#getWeek(weeks, i, c)}/Chapters/${c}/Discussion.md`, '_blank');
    }

    #getUnit(units, i, c) {
        if (TRILOGY[1] === 'Course') {
            return "unit" + i;
        } else {
            for (let u = 0; u < units.length; u++) {
                if (units[u].from <= c && c <= units[u].to) return "unit" + (u + 1);
            }
        }
    }

    #getWeek(weeks, i, c) {
        if (TRILOGY[1] === 'Cohort') {
            return i;
        } else {
            for (let w = 0; w < weeks.length; w++) {
                if (weeks[w].from <= c && c <= weeks[w].to) return w + 1;
            }
        }
    }
}

customElements.define("sw-learn", SwLearn);