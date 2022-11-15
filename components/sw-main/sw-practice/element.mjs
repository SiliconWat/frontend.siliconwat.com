import { TRILOGY } from '/global.mjs';
import template from './template.mjs';

class SwPractice extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(u, c) {
        this.style.display = 'block';
        const done = Number(localStorage.getItem(`practice-unit${u}-chapter${c}`));
        const { UNITS, CHAPTERS } = await import(`${TRILOGY[2]}/data.mjs`);
        const unit = UNITS[u - 1];
        const chapter = CHAPTERS[c - 1];

        this.shadowRoot.querySelector('header h1').textContent = `Unit ${u}: ${unit.title}`;
        this.shadowRoot.querySelector('header h2').textContent = `${done ? "✅" : "💻"} Practice: Chapter ${c}`;
        this.shadowRoot.querySelector('header h3').textContent = `${done ? "☑️" : "📋"} ${chapter.title}`;
        
        this.#render();
        this.#renderCoding(u, c, done);
        this.#renderPair(c, done);
        this.#renderProject(c, done);
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

    #renderCoding(u, c, done) {
        const button = this.shadowRoot.querySelector('.coding button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Exercise ${c}`;
        button.onclick = () => window.open(`https://code.siliconwat.com/#${TRILOGY[0].toLowerCase()}-unit${u}-chapter${c}`, '_blank');
    }

    #renderPair(c, done) {
        const button = this.shadowRoot.querySelector('.pair button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Challenge ${c}`;
        button.onclick = async () => window.open(`https://${TRILOGY[0].toLowerCase()}.siliconwat.org/#practice-week${await this.#getWeek(c)}-chapter${c}`, '_blank');
    }
    
    #renderProject(c, done) {
        const button = this.shadowRoot.querySelector('.project button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Suggestion ${c}`;
        button.onclick = async () => window.open(`https://${TRILOGY[0].toLowerCase()}.siliconwat.org/#practice-week${await this.#getWeek(c)}-chapter${c}`, '_blank');
    }

    async #getWeek(c) {
        const { WEEKS } = await import(`${TRILOGY[2]}/data.mjs`);
        for (let w = 0; w < WEEKS.length; w++) {
            if (WEEKS[w].from <= c && c <= WEEKS[w].to) return w + 1;
        }
    }
}

customElements.define("sw-practice", SwPractice);