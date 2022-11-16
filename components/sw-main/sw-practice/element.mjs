import { TRILOGY } from '/global.mjs';
import template from './template.mjs';

class SwPractice extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(i, c) {
        this.style.display = 'block';
        const done = Number(localStorage.getItem(`learn-${TRILOGY[1] === 'Course' ? 'unit' : 'week'}${i}-chapter${c}`));
        const { YEAR, UNITS, WEEKS, CHAPTERS } = await import(`${TRILOGY[2]}/data.mjs`);
        const item = TRILOGY[1] === 'Course' ? UNITS[i - 1] : WEEKS[i - 1];
        const chapter = CHAPTERS[c - 1];

        this.shadowRoot.querySelector('header h1').textContent = `${TRILOGY[1] === 'Course' ? 'Unit' : 'Week'} ${i}: ${item.title}`;
        this.shadowRoot.querySelector('header h2').textContent = `${done ? "✅" : "💻"} Practice: Chapter ${c}`;
        this.shadowRoot.querySelector('header h3').textContent = `${done ? "☑️" : "📋"} ${chapter.title}`;
        
        this.#render();
        this.#renderCoding(UNITS, i, c, done);
        this.#renderPair(WEEKS, YEAR, i, c, done);
        this.#renderProject(WEEKS, YEAR, i, c, done);
    }

    #render() {
        let editor, project;

        switch (TRILOGY[0]) {
            case "Frontend":
                editor = "Codepen";
                project = "Codepen Project";
                break;
            case "Backend":
                editor = "Replit";
                project = "Replit Project";
                break;
            case "iOS":
                editor = "Replit";
                project = "XCode Project";
                break;
        }

        this.shadowRoot.getElementById('editor').textContent = editor;
        this.shadowRoot.querySelectorAll('.app').forEach(element => element.textContent = project);
    }

    #renderCoding(units, i, c, done) {
        const button = this.shadowRoot.querySelector('.coding button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Exercise ${c}`;
        button.onclick = () => window.open(`https://code.siliconwat.com/#${TRILOGY[0].toLowerCase()}-${this.#getUnit(units, i, c)}-chapter${c}`, '_blank');
    }

    #renderPair(weeks, y, i, c, done) {
        const button = this.shadowRoot.querySelector('.pair button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Challenge ${c}`;
        button.onclick = () => window.open(`https://github.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/blob/main/${y}/Weeks/${this.#getWeek(weeks, i, c)}/Chapters/${c}/Challenge.md`, '_blank');
    }
    
    #renderProject(weeks, y, i, c, done) {
        const button = this.shadowRoot.querySelector('.project button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Suggestion ${c}`;
        button.onclick = () => window.open(`https://github.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/blob/main/${y}/Weeks/${this.#getWeek(weeks, i, c)}/Chapters/${c}/Suggestion.md`, '_blank');
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

customElements.define("sw-practice", SwPractice);