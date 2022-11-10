import template from './template.mjs';

class SwMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        window.addEventListener("hashchange", event => this.#render(this.#hash));
    }

    connectedCallback() {
        this.style.display = 'block';
        this.#render(this.#hash);
    }

    #render(hash) {
        this.shadowRoot.querySelector("slot").assignedElements().forEach(element => element.style.display = 'none');
        this.shadowRoot.querySelector("slot").assignedElements().find(element => element.tagName === hash[0]).render(hash[1], hash[2]);
    }

    get #hash() {
        if (window.location.hash) {
            const hash = window.location.hash.substring(1).split("-");
            return ["SW-" + hash[0].toUpperCase(), Number(hash[1].replace("unit", "")), Number(hash[2].replace("chapter", ""))];
        } return ["SW-HOME", null, null];
    }
}

customElements.define("sw-main", SwMain);