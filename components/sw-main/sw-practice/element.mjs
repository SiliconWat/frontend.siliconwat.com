import { TRILOGY, getYear, getWeeks, getUnit, getWeek } from '/global.mjs';
import template from './template.mjs';

class SwPractice extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(github, c) {
        const y = await getYear();
        const syllabus = await fetch(`https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/main/${y}/Syllabus.json`, { cache: "no-store" });
        const { cohort, units, weeks, chapters } = await syllabus.json();
        const i = TRILOGY[1] === 'Course' ? getUnit(units, c) : getWeek(weeks, c);
        const item = TRILOGY[1] === 'Course' ? units[i - 1] : weeks[i - 1];
        const chapter = chapters[c - 1];
        const done = Number(localStorage.getItem(`practice-chapter${c}`));

        this.shadowRoot.querySelector('header h1').textContent = TRILOGY[1] === 'Course' ? `Unit ${i}: ${item.title}` : `Week ${i}: ${await getWeeks(cohort, i)}`;
        this.shadowRoot.querySelector('header h2').textContent = `${done ? "✅" : "💻"} Practice: Chapter ${c}`;
        this.shadowRoot.querySelector('header h3').textContent = `${done ? "☑️" : "📋"} ${chapter.title}`;
        
        this.#render();
        this.#renderCoding(c, done);
        this.#renderPair(y, c, done);
        this.#renderProject(y, c, done);

        this.shadowRoot.querySelector('sw-cohort').render(y, c);
        this.style.display = 'block';
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

    #renderCoding(c, done) {
        const button = this.shadowRoot.querySelector('.coding button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Exercise ${c}`;
        button.onclick = () => window.open(`https://code.siliconwat.com/#${TRILOGY[0].toLowerCase()}-chapter${c}`, '_blank');
    }

    #renderPair(y, c, done) {
        const button = this.shadowRoot.querySelector('.pair button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Challenge ${c}`;
        button.onclick = () => window.open(`https://github.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/blob/main/${y}/Chapters/${c}/Challenge.md`, '_blank');
    }
    
    #renderProject(y, c, done) {
        const button = this.shadowRoot.querySelector('.project button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Suggestion ${c}`;
        button.onclick = () => window.open(`https://github.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/blob/main/${y}/Chapters/${c}/Suggestion.md`, '_blank');
    }
}

customElements.define("sw-practice", SwPractice);