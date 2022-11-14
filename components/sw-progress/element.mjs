import { UNITS } from "/data.mjs";
import template from './template.mjs';

class SwProgress extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async connectedCallback() {
        this.style.display = 'block';

        this.getAttribute('course');
        this.getAttribute('type'); // course or cohort

        const origin = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5531" : "https://frontend.siliconwat.com";
        const { UNITS } = await import(`${origin}/data.mjs`);

        this.render(UNITS);
    }

    render(units) {
        let sum = 0;
        let total = 0;

        units.forEach((unit, u) => {
            if (unit.from && unit.to) {
                for (let c = unit.from - 1; c < unit.to; c++) {
                    total += 1;
                    ['learn', 'practice', 'review'].forEach(task => {
                        if (Number(localStorage.getItem(`${task}-unit${u + 1}-chapter${c}`))) sum += 1;
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