import { TRILOGY } from '/global.mjs';
import template from './template.mjs';

class SwPractice extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(unit, chapter) {
        this.style.display = 'block';
        const done = Number(localStorage.getItem(`practice-unit${unit}-chapter${chapter}`));
        const { UNITS, CHAPTERS } = await import(`${TRILOGY[2]}/data.mjs`);

        this.shadowRoot.querySelector('header h1').textContent = `Unit ${unit}: ${UNITS[unit - 1].title}`;
        this.shadowRoot.querySelector('header h2').textContent = `${done ? "✅" : "💻"} Practice: Chapter ${chapter}`;
        this.shadowRoot.querySelector('header h3').textContent = `${done ? "☑️" : "📋"} ${CHAPTERS[chapter - 1].title}`;
        
        this.#renderCoding(unit, chapter, done);
        this.#renderPair(chapter, done);
        this.#renderProject(chapter, done);
    }

    #renderCoding(unit, chapter, done) {
        const button = this.shadowRoot.querySelector('.coding button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Exercise ${chapter}`;
        button.onclick = () => window.open(`https://code.siliconwat.com/#frontend-unit${unit}-chapter${chapter}`, '_blank');
    }

    #renderPair(chapter, done) {
        const week = 0; // TODO:
        const button = this.shadowRoot.querySelector('.pair button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Challenge ${chapter}`;
        button.onclick = () => window.open(`https://frontend.siliconwat.org/#practice-week${week}-chapter${chapter}`, '_blank');
    }
    
    #renderProject(chapter, done) {
        const week = 0; // TODO:
        const button = this.shadowRoot.querySelector('.project button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Suggestion ${chapter}`;
        button.onclick = () => window.open(`https://frontend.siliconwat.org/#practice-week${week}-chapter${chapter}`, '_blank');
    }
}

customElements.define("sw-practice", SwPractice);