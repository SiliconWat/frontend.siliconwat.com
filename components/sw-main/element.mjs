import { TRILOGY } from '/global.mjs';
import template from './template.mjs';

class SwMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        window.addEventListener("hashchange", event => this.render());
    }

    connectedCallback() {
        this.style.display = 'block';
        this.render();
    }

    render() {
        this.shadowRoot.querySelector("slot").assignedElements().forEach(element => element.style.display = 'none');
        this.shadowRoot.querySelector("slot").assignedElements().find(element => element.tagName === this.#hash[0]).render(this.#hash[1], this.#hash[2]);
        this.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
    }

    get #hash() {
        if (window.location.hash) {
            const hash = window.location.hash.substring(1).split("-");
            return ["SW-" + hash[0].toUpperCase(), Number(hash[1].replace(TRILOGY[1] === 'Course' ? 'unit' : 'week', "")), Number(hash[2].replace("chapter", ""))];
        } return ["SW-HOME", null, null];
    }
}

customElements.define("sw-main", SwMain);