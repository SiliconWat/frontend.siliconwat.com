import { TRILOGY, getYear, getData } from "/global.mjs";
import template from './template.mjs';

class SwProgress extends HTMLElement {
    #github;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(github=this.#github) {
        this.#github = github;
        const y = getYear(github);
        const { units, weeks } = await getData('syllabus', y);
        const data = TRILOGY[1] === 'course' ? units : weeks;

        let sum = 0;
        let total = 0;

        data.forEach((item, i) => {
            if (item.from && item.to) {
                for (let c = item.from - 1; c < item.to; c++) {
                    total += 1;
                    ['learn', 'practice', 'review'].forEach(task => {
                        if (Number(localStorage.getItem(`${task}-chapter${c}`))) sum += 1;
                    });
                }
            }
        });

        this.shadowRoot.getElementById('fraction').textContent = `${sum}/${total*3}`;
        this.shadowRoot.getElementById('percent').textContent = `${Math.round(sum/(total*3)*100)}%`;
        this.shadowRoot.getElementById('ring').style.strokeDashoffset = sum/(total*3)*100;
        this.style.display = 'block';
    }
}

customElements.define("sw-progress", SwProgress);