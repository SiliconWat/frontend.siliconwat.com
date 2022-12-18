import { TRILOGY, getYear, getData } from "/global.mjs";
import template from './template.mjs';

class SwBar extends HTMLElement {
    #github; // unit;

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
        const item = data[Number(this.getAttribute('id')) - 1] // units[this.unit - 1];
        const total = item.from && item.to ? (item.to - item.from + 1)*3 : 0;

        for (let c = item.from ; c <= item.to; c++) {
            ['learn', 'practice', 'review'].forEach(task => {
                if (Number(localStorage.getItem(`${task}-chapter${c}`))) sum += 1;
            });
        }

        const percent = item.from && item.to ? Math.round(sum/total*100) : 0;
        this.shadowRoot.getElementById('fraction').textContent = `${sum}/${total}`;
        this.shadowRoot.getElementById('percent').textContent = `${percent}%`;
        this.shadowRoot.getElementById('bar').style.transform = `translateX(-${100 - percent}%)`;
        this.style.display = 'block';
    }
}

customElements.define("sw-bar", SwBar);