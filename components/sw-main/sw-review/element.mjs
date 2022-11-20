import { TRILOGY, getWeek } from '/global.mjs';
import template from './template.mjs';

class SwReview extends HTMLElement {
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
        this.shadowRoot.querySelector('header h2').textContent = `${done ? "✅" : "👩🏼‍💻"} Review: Chapter ${c}`;
        this.shadowRoot.querySelector('header h3').textContent = `${done ? "☑️" : "📋"} ${chapter.title}`;
        
        this.#render();
        this.#renderFlashcard(UNITS, i, c, done);
        this.#renderSummary(WEEKS, YEAR, i, c, done);
        this.#renderInterview(chapter, c, done);
    }

    #render() {
        let code, subject;

        switch (TRILOGY[0]) {
            case "Frontend":
                code = "HTML, CSS, and especially JavaScript";
                subject = "Frontend Engineering";
                break;
            case "Backend":
                code = "Node and Solidity";
                project = "Backend Engineering";
                break;
            case "iOS":
                code = "Swift";
                subject = "iOS Engineering";
                break;
        }

        this.shadowRoot.getElementById('code').textContent = code;
        this.shadowRoot.getElementById('subject').textContent = subject;
    }

    #renderFlashcard(units, i, c, done) {
        const button = this.shadowRoot.querySelector('.flashcard button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Game ${c}`;
        button.onclick = () => window.open(`https://flashcard.siliconwat.com/#${TRILOGY[0].toLowerCase()}-${this.#getUnit(units, i, c)}-chapter${c}`, '_blank');
    }

    #renderSummary(weeks, y, i, c, done) {
        const button = this.shadowRoot.querySelector('.summary button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Summary ${c}`;
        button.onclick = () => window.open(`https://github.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/blob/main/${y}/Assignments/Weeks/${this.#getWeek(weeks, i, c)}/Chapters/${c}/Summary.md`, '_blank');
    }
    
    #renderInterview(chapter, c, done) {
        const button = this.shadowRoot.querySelector('.interview button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Interview ${c}`;
        button.onclick = () => window.open(chapter.youtube, '_blank');
        button.disabled = !Boolean(chapter.youtube);
        if (!Boolean(chapter.youtube)) button.style.opacity = "0.2";
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

customElements.define("sw-review", SwReview);