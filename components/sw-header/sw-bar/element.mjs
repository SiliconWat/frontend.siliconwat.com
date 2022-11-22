import { TRILOGY, getYear } from "/global.mjs";
import template from './template.mjs';

class SwBar extends HTMLElement {
    // unit;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.style.display = 'block';
        this.render();
    }

    async render() {
        const syllabus = await fetch(`https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/main/${await getYear()}/Syllabus.json`, { cache: "no-store" });
        const { units, weeks } = await syllabus.json();
        const data = TRILOGY[1] === 'Course' ? units : weeks;

        let sum = 0;
        const item = data[Number(this.getAttribute('id')) - 1] // units[this.unit - 1];
        const total = item.from && item.to ? (item.to - item.from + 1)*3 : 0;

        for (let c = item.from ; c <= item.to; c++) {
            ['learn', 'practice', 'review'].forEach(task => {
                if (Number(localStorage.getItem(`${task}-${TRILOGY[1] === 'Course' ? "unit" : "week"}${this.getAttribute('id')}-chapter${c}`))) sum += 1;
            });
        }

        const percent = item.from && item.to ? Math.round(sum/total*100) : 0;
        this.shadowRoot.getElementById('fraction').textContent = `${sum}/${total}`;
        this.shadowRoot.getElementById('percent').textContent = `${percent}%`;
        this.shadowRoot.getElementById('bar').style.transform = `translateX(-${100 - percent}%)`;
    }
}

customElements.define("sw-bar", SwBar);