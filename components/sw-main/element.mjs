import { HOME, BACKGROUND } from '/global.mjs';

class SwMain extends HTMLElement {
    #github;

    constructor() {
        super();
        window.addEventListener("hashchange", event => this.render());
    }

    async connectedCallback() {
        const { default: template } = await import(`${HOME}/components/sw-main/template.mjs`);
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = `${HOME}/components/sw-main/shadow.css`;
        this.shadowRoot.prepend(link);

        this.style.display = 'block';
        this.dispatchEvent(new CustomEvent("sw-main", { bubbles: true, composed: true, detail: { element: this }}));
    }

    async render(github=this.#github) {
        document.documentElement.style.backgroundImage = "url(background.gif)";
        document.querySelector('main').style.display = 'none';
        this.#github = github;
        this.shadowRoot.querySelector("slot").assignedElements().forEach(element => element.style.display = 'none');
        await this.shadowRoot.querySelector("slot").assignedElements().find(element => element.tagName === this.#hash[0]).render(github, this.#hash[1]);
        document.documentElement.style.backgroundImage = BACKGROUND;
        document.querySelector('main').style.display = 'flex';
        document.body.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
    }

    get #hash() {
        if (window.location.hash) {
            const hash = window.location.hash.substring(1).split("-");
            return ["SW-" + hash[0].toUpperCase(), Number(hash[1].replace("chapter", ""))];
        } return ["SW-HOME", null, null];
    }
}

customElements.define("sw-main", SwMain);