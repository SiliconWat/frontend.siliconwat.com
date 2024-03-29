import { TRILOGY, getYear, getTerm, getWeeks, getUnit, getWeek, getData, getFile } from '/global.mjs';
import template from './template.mjs';

class SwReview extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(github, c) {
        const y = getYear(github);
        const term = getTerm(github);
        const { cohort, units, weeks, chapters } = await getData('syllabus', y);
        const i = TRILOGY[1] === 'course' ? getUnit(units, c) : getWeek(weeks, c);
        const item = TRILOGY[1] === 'course' ? units[i - 1] : weeks[i - 1];
        const chapter = chapters[c - 1];
        const done = Number(localStorage.getItem(`review-chapter${c}`));

        this.shadowRoot.querySelector('header h1').textContent = TRILOGY[1] === 'course' ? `Unit ${i}: ${item.title}` : `Week ${i}: ${getWeeks(term[1], y, cohort[term[1]][term[2]].start[0], cohort[term[1]][term[2]].start[1], i)}`;
        this.shadowRoot.querySelector('header h2').textContent = `${done ? "✅" : "👩🏼‍💻"} Review: Chapter ${c}`;
        this.shadowRoot.querySelector('header h3').textContent = `${done ? "☑️" : "📋"} ${chapter.title}`;
        
        this.#render();
        this.#renderFlashcard(github, c, done);
        this.#renderSummary(y, c, done);
        this.#renderInterview(chapter, c, done);

        await this.shadowRoot.querySelector('sw-cohort').render(github, 'review', y, c);
        this.style.display = 'block';
    }

    #render() {
        let code, subject;

        switch (TRILOGY[0]) {
            case "frontend":
                code = "HTML, CSS, and especially JavaScript";
                subject = "Frontend Engineering";
                break;
            case "backend":
                code = "Node and Solidity";
                subject = "Backend Engineering";
                break;
            case "ios":
                code = "Swift";
                subject = "iOS Engineering";
                break;
        }

        this.shadowRoot.getElementById('code').textContent = code;
        this.shadowRoot.getElementById('subject').textContent = subject;
    }

    #renderFlashcard(github, c, done) {
        const button = this.shadowRoot.querySelector('.flashcard button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Game ${c}`;
        button.onclick = () => window.open(`https://flashcard.siliconwat.com/${github.student ? "?ref=cohort" : "?ref=course"}#${TRILOGY[0]}-chapter${c}`, '_blank');
    }

    #renderSummary(y, c, done) {
        const button = this.shadowRoot.querySelector('.summary button');
        button.style.textDecorationLine = done ? "line-through" : "none";
        button.firstElementChild.textContent = `Summary ${c}`;
        button.onclick = async () => window.open(await getFile(`https://github.com/SiliconWat/${TRILOGY[0]}.siliconwat.dev/blob/main/${y}/Chapters/${c}/Summary.md`), '_blank');
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