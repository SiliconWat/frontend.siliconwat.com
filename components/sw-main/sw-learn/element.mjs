import { UNITS, CHAPTERS } from '/data.mjs';
import template from './template.mjs';

class SwLearn extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    render(unit, chapter) {
        this.style.display = 'block';
        const done = Number(localStorage.getItem(`learn-unit${unit}-chapter${chapter}`));

        this.shadowRoot.querySelector('header h1').textContent = `Unit ${unit}: ${UNITS[unit - 1].title}`;
        this.shadowRoot.querySelector('header h2').textContent = `${done ? "✅" : "📖"} Learn: Chapter ${chapter}`;
        this.shadowRoot.querySelector('header h3').textContent = `${done ? "☑️" : "📋"} ${CHAPTERS[chapter - 1].title}`;
        
        this.#renderVideo(chapter, done);
        this.#renderTextbook(chapter, done);
        this.#renderQuiz(unit, chapter, done);
        this.#renderGroup(chapter, done);
    }

    #renderVideo(chapter, done) {
        const button = this.shadowRoot.querySelector('.video button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Lecture ${chapter}`;
        if (CHAPTERS[chapter - 1].udemy) button.onclick = () => window.open(CHAPTERS[chapter - 1].udemy, '_blank');
    }

    #renderTextbook(chapter, done) {
        const button = this.shadowRoot.querySelector('.textbook button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Chapter ${chapter}`;
        button.onclick = () => window.open(CHAPTERS[chapter - 1].medium, '_blank');
    }
    
    #renderQuiz(unit, chapter, done) {
        const button = this.shadowRoot.querySelector('.quiz button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Quiz ${chapter}`;
        button.onclick = () => window.open(`https://quiz.siliconwat.com/#frontend-unit${unit}-chapter${chapter}`, '_blank');
    }

    #renderGroup(chapter, done) {
        const week = 0; // TODO:
        const button = this.shadowRoot.querySelector('.group button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Discussion ${chapter}`;
        button.onclick = () => window.open(`https://frontend.siliconwat.org/#learn-week${week}-chapter${chapter}`, '_blank');
    }
}

customElements.define("sw-learn", SwLearn);