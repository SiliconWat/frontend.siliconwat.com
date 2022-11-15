import { TRILOGY } from "/global.mjs";
import template from './template.mjs';

class SwProgress extends HTMLElement {
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
        const { UNITS, WEEKS } = await import(`${TRILOGY[2]}/data.mjs`);
        const data = TRILOGY[1] === 'Course' ? UNITS : WEEKS;

        let sum = 0;
        let total = 0;

        data.forEach((item, i) => {
            if (item.from && item.to) {
                for (let c = item.from - 1; c < item.to; c++) {
                    total += 1;
                    ['learn', 'practice', 'review'].forEach(task => {
                        if (Number(localStorage.getItem(`${task}-${TRILOGY[1] === 'Course' ? "unit" : "week"}${i + 1}-chapter${c}`))) sum += 1;
                    });
                }
            }
        });

        this.shadowRoot.getElementById('fraction').textContent = `${sum}/${total*3}`;
        this.shadowRoot.getElementById('percent').textContent = `${Math.round(sum/(total*3)*100)}%`;
        this.shadowRoot.getElementById('ring').style.strokeDashoffset = sum/(total*3)*100;
    }
}

customElements.define("sw-progress", SwProgress);