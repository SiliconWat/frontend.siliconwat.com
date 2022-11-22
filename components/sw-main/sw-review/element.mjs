import { TRILOGY, getYear, getWeek, getUnit } from '/global.mjs';
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
        
        const y = await getYear();
        const syllabus = await fetch(`https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/main/${y}/Syllabus.json`, { cache: "no-store" });
        const { cohort, units, weeks, chapters } = await syllabus.json();
        const item = TRILOGY[1] === 'Course' ? units[i - 1] : weeks[i - 1];
        const chapter = chapters[c - 1];

        this.shadowRoot.querySelector('header h1').textContent = TRILOGY[1] === 'Course' ? `Unit ${i}: ${item.title}` : `Week ${i}: ${await getWeek(cohort, i)}`;
        this.shadowRoot.querySelector('header h2').textContent = `${done ? "✅" : "👩🏼‍💻"} Review: Chapter ${c}`;
        this.shadowRoot.querySelector('header h3').textContent = `${done ? "☑️" : "📋"} ${chapter.title}`;
        
        this.#render();
        this.#renderFlashcard(units, i, c, done);
        this.#renderSummary(weeks, y, i, c, done);
        this.#renderInterview(chapter, c, done);

        this.shadowRoot.querySelector('sw-cohort').render(y, c);
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
        button.onclick = () => window.open(`https://flashcard.siliconwat.com/#${TRILOGY[0].toLowerCase()}-${getUnit(units, i, c)}-chapter${c}`, '_blank');
    }

    #renderSummary(weeks, y, i, c, done) {
        const button = this.shadowRoot.querySelector('.summary button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Summary ${c}`;
        button.onclick = () => window.open(`https://github.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/blob/main/${y}/Chapters/${c}/Summary.md`, '_blank');
    }
    
    #renderInterview(chapter, c, done) {
        const button = this.shadowRoot.querySelector('.interview button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Interview ${c}`;
        button.onclick = () => window.open(chapter.youtube, '_blank');
        button.disabled = !Boolean(chapter.youtube);
        if (!Boolean(chapter.youtube)) button.style.opacity = "0.2";
    }
}

customElements.define("sw-review", SwReview);