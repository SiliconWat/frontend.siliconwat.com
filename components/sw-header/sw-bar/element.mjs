import { UNITS } from "/data.mjs";
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

    render() {
        let sum = 0;
        const unit = UNITS[Number(this.getAttribute('id')) - 1] // UNITS[this.unit - 1];
        const total = unit.from && unit.to ? (unit.to - unit.from + 1)*3 : 0;

        for (let c = unit.from ; c <= unit.to; c++) {
            ['learn', 'practice', 'review'].forEach(task => {
                if (Number(localStorage.getItem(`unit${this.getAttribute('id')}-chapter${c}-${task}`))) sum += 1;
            });
        }

        const percent = unit.from && unit.to ? Math.round(sum/total*100) : 0;
        this.shadowRoot.getElementById('fraction').textContent = `${sum}/${total}`;
        this.shadowRoot.getElementById('percent').textContent = `${percent}%`;
        this.shadowRoot.getElementById('bar').style.transform = `translateX(-${100 - percent}%)`;
    }
}

customElements.define("sw-bar", SwBar);