import { TRILOGY } from '/global.mjs';
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
        const { UNITS, WEEKS, CHAPTERS } = await import(`${TRILOGY[2]}/data.mjs`);
        const item = TRILOGY[1] === 'Course' ? UNITS[i - 1] : WEEKS[i - 1];
        const chapter = CHAPTERS[c - 1];

        this.shadowRoot.querySelector('header h1').textContent = `${TRILOGY[1] === 'Course' ? 'Unit' : 'Week'} ${i}: ${item.title}`;
        this.shadowRoot.querySelector('header h2').textContent = `${done ? "✅" : "📖"} Learn: Chapter ${c}`;
        this.shadowRoot.querySelector('header h3').textContent = `${done ? "☑️" : "📋"} ${chapter.title}`;
        
        this.#render();
        this.#renderVideo(chapter, c, done);
        this.#renderTextbook(chapter, c, done);
        this.#renderQuiz(i, c, done);
        this.#renderGroup(c, done);
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
        if (chapter.udemy) button.onclick = () => window.open(chapter.udemy, '_blank');
    }

    #renderTextbook(chapter, c, done) {
        const button = this.shadowRoot.querySelector('.textbook button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Chapter ${c}`;
        button.onclick = () => window.open(chapter.medium, '_blank');
    }
    
    #renderQuiz(i, c, done) {
        const button = this.shadowRoot.querySelector('.quiz button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Quiz ${c}`;
        button.onclick = () => window.open(`https://quiz.siliconwat.com/#${TRILOGY[0].toLowerCase()}-${TRILOGY[1] === 'Course' ? 'unit' : 'week'}${i}-chapter${c}`, '_blank');
    }

    #renderGroup(i, c, done) {
        const button = this.shadowRoot.querySelector('.group button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Discussion ${c}`;
        button.onclick = async () => window.open(`https://${TRILOGY[0].toLowerCase()}.siliconwat.org/#learn-week${await this.#getWeek(c)}-chapter${c}`, '_blank');
    }

    async #getWeek(i, c) {
        if (TRILOGY[1] === 'Cohort') {
            return i;
        } else {
            const { WEEKS } = await import(`${TRILOGY[2]}/data.mjs`);
            for (let w = 0; w < WEEKS.length; w++) {
                if (WEEKS[w].from <= c && c <= WEEKS[w].to) return w + 1;
            }
        }
    }
}

customElements.define("sw-learn", SwLearn);