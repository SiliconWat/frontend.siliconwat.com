import { AUTH } from '/global.mjs';
import template from './template.mjs';

class SwAuth extends HTMLElement {
    #iframe;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.#iframe = this.shadowRoot.querySelector('iframe');
        this.#iframe.src = `${AUTH}/?embed`;

        window.addEventListener("message", event => {
            if (event.origin === AUTH) {
                const github = JSON.parse(event.data);
                if (!localStorage.getItem('github') && github.login) {
                    localStorage.setItem('github', event.data);
                    window.location.reload();
                } else if (localStorage.getItem('github') && !github.login) {
                    localStorage.removeItem('github');
                    window.location.reload();
                }
            }
        });
    }

    show() {
        this.style.display = 'block';
    }

    hide() {
        this.style.display = 'none';
    }

    logout() {
        this.#iframe.contentWindow.postMessage("logout", AUTH);
    }
}

customElements.define("sw-auth", SwAuth);