import { TRILOGY } from '/global.mjs';
import template from './template.mjs';

class SwReview extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(unit, chapter) {
        this.style.display = 'block';
        const done = Number(localStorage.getItem(`review-unit${unit}-chapter${chapter}`));
        const { UNITS, CHAPTERS } = await import(`${TRILOGY[2]}/data.mjs`);

        this.shadowRoot.querySelector('header h1').textContent = `Unit ${unit}: ${UNITS[unit - 1].title}`;
        this.shadowRoot.querySelector('header h2').textContent = `${done ? "✅" : "👩🏼‍💻"} Review: Chapter ${chapter}`;
        this.shadowRoot.querySelector('header h3').textContent = `${done ? "☑️" : "📋"} ${CHAPTERS[chapter - 1].title}`;
        
        this.#renderFlashcard(unit, chapter, done);
        this.#renderSummary(chapter, done);
        this.#renderInterview(chapter, done);
    }

    #renderFlashcard(unit, chapter, done) {
        const button = this.shadowRoot.querySelector('.flashcard button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Game ${chapter}`;
        button.onclick = () => window.open(`https://flashcard.siliconwat.com/#frontend-unit${unit}-chapter${chapter}`, '_blank');
    }

    #renderSummary(chapter, done) {
        const week = 0; // TODO:
        const button = this.shadowRoot.querySelector('.summary button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Summary ${chapter}`;
        button.onclick = () => window.open(`https://frontend.siliconwat.org/#review-week${week}-chapter${chapter}`, '_blank');
    }
    
    #renderInterview(chapter, done) {
        const week = 0; // TODO:
        const button = this.shadowRoot.querySelector('.interview button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Interview ${chapter}`;
        button.onclick = () => window.open(`https://frontend.siliconwat.org/#review-week${week}-chapter${chapter}`, '_blank');
    }
}

customElements.define("sw-review", SwReview);