import { TRILOGY, getYear, getWeeks, getUnit, getWeek } from '/global.mjs';
import template from './template.mjs';

class SwLearn extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(c) {
        const y = await getYear();
        const syllabus = await fetch(`https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/main/${y}/Syllabus.json`, { cache: "no-store" });
        const { cohort, units, weeks, chapters } = await syllabus.json();
        const i = TRILOGY[1] === 'Course' ? getUnit(units, c) : getWeek(weeks, c);
        const item = TRILOGY[1] === 'Course' ? units[i - 1] : weeks[i - 1];
        const chapter = chapters[c - 1];
        const done = Number(localStorage.getItem(`learn-chapter${c}`));

        this.shadowRoot.querySelector('header h1').textContent = TRILOGY[1] === 'Course' ? `Unit ${i}: ${item.title}` : `Week ${i}: ${await getWeeks(cohort, i)}`;
        this.shadowRoot.querySelector('header h2').textContent = `${done ? "✅" : "📖"} Learn: Chapter ${c}`;
        this.shadowRoot.querySelector('header h3').textContent = `${done ? "☑️" : "📋"} ${chapter.title}`;
        
        this.#render();
        this.#renderVideo(chapter, c, done);
        this.#renderTextbook(chapter, c, done);
        this.#renderQuiz(c, done);
        this.#renderGroup(y, c, done);

        this.shadowRoot.querySelector('sw-cohort').render(y, c);
        this.style.display = 'block';
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
        button.onclick = () => window.open(chapter.udemy, '_blank');
        button.disabled = !Boolean(chapter.udemy);
        if (!Boolean(chapter.udemy)) button.style.opacity = "0.2";
    }

    #renderTextbook(chapter, c, done) {
        const button = this.shadowRoot.querySelector('.textbook button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Chapter ${c}`;
        button.onclick = () => window.open(chapter.medium, '_blank');
    }
    
    #renderQuiz(c, done) {
        const button = this.shadowRoot.querySelector('.quiz button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Quiz ${c}`;
        button.onclick = () => window.open(`https://quiz.siliconwat.com/#${TRILOGY[0].toLowerCase()}-chapter${c}`, '_blank');
    }

    #renderGroup(y, c, done) {
        const button = this.shadowRoot.querySelector('.group button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Discussion ${c}`;
        button.onclick = () => window.open(`https://github.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/blob/main/${y}/Chapters/${c}/Discussion.md`, '_blank');
    }
}

customElements.define("sw-learn", SwLearn);