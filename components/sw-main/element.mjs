import template from './template.mjs';

class SwMain extends HTMLElement {
    #github;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        window.addEventListener("hashchange", event => this.render());
    }

    connectedCallback() {
        this.style.display = 'block';
    }

    async render(github=this.#github) {
        document.documentElement.style.backgroundImage = "url(background.gif)";
        document.querySelector('main').style.display = 'none';
        this.#github = github;
        this.shadowRoot.querySelector("slot").assignedElements().forEach(element => element.style.display = 'none');
        await this.shadowRoot.querySelector("slot").assignedElements().find(element => element.tagName === this.#hash[0]).render(github, this.#hash[1]);
        document.documentElement.style.backgroundImage = "linear-gradient(90deg, rgba(5,117,230,1) 0%, rgba(2,27,121,1) 100%)";
        document.querySelector('main').style.display = 'flex';
        this.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
    }

    get #hash() {
        if (window.location.hash) {
            const hash = window.location.hash.substring(1).split("-");
            return ["SW-" + hash[0].toUpperCase(), Number(hash[1].replace("chapter", ""))];
        } return ["SW-HOME", null, null];
    }
}

customElements.define("sw-main", SwMain);