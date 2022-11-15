import { TRILOGY } from '/global.mjs';
import template from './template.mjs';

class SwReview extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(u, c) {
        this.style.display = 'block';
        const done = Number(localStorage.getItem(`review-unit${u}-chapter${c}`));
        const { UNITS, CHAPTERS } = await import(`${TRILOGY[2]}/data.mjs`);
        const unit = UNITS[u - 1];
        const chapter = CHAPTERS[c - 1];

        this.shadowRoot.querySelector('header h1').textContent = `Unit ${u}: ${unit.title}`;
        this.shadowRoot.querySelector('header h2').textContent = `${done ? "✅" : "👩🏼‍💻"} Review: Chapter ${c}`;
        this.shadowRoot.querySelector('header h3').textContent = `${done ? "☑️" : "📋"} ${chapter.title}`;
        
        this.#render();
        this.#renderFlashcard(u, c, done);
        this.#renderSummary(c, done);
        this.#renderInterview(c, done);
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

    #renderFlashcard(u, c, done) {
        const button = this.shadowRoot.querySelector('.flashcard button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Game ${c}`;
        button.onclick = () => window.open(`https://flashcard.siliconwat.com/#${TRILOGY[0].toLowerCase()}-unit${u}-chapter${c}`, '_blank');
    }

    #renderSummary(c, done) {
        const button = this.shadowRoot.querySelector('.summary button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Summary ${c}`;
        button.onclick = async () => window.open(`https://${TRILOGY[0].toLowerCase()}.siliconwat.org/#review-week${await this.#getWeek(c)}-chapter${c}`, '_blank');
    }
    
    #renderInterview(c, done) {
        const button = this.shadowRoot.querySelector('.interview button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Interview ${c}`;
        button.onclick = async () => window.open(`https://${TRILOGY[0].toLowerCase()}.siliconwat.org/#review-week${await this.#getWeek(c)}-chapter${c}`, '_blank');
    }

    async #getWeek(c) {
        const { WEEKS } = await import(`${TRILOGY[2]}/data.mjs`);
        for (let w = 0; w < WEEKS.length; w++) {
            if (WEEKS[w].from <= c && c <= WEEKS[w].to) return w + 1;
        }
    }
}

customElements.define("sw-review", SwReview);