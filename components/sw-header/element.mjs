import { UNITS, CHAPTERS } from "/data.mjs";
import template from './template.mjs';

class SwHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.#render();
    }

    #render() {
        const fragment = document.createDocumentFragment();

        UNITS.forEach((unit, n) => {
            const li = document.createElement('li');
            const h3 = document.createElement('h3');
            const nav = document.createElement('nav');
            const h2 = document.createElement('h2');
            const bar = document.createElement('sw-bar');

            h3.textContent = `${unit.bonus ? "Bonus " : ""}Unit ${n + 1}`;
            h2.textContent = unit.title;

            fragment.append(li);
            li.append(h3, nav);
            nav.append(h2, bar);

            CHAPTERS.forEach((chapter, c) => {
                const h4 = document.createElement('h4');
                const menu = document.createElement('menu');

                h4.textContent = `Chapter ${c + 1}: ${chapter.title}`;

                li.append(nav);
                nav.append(h4, menu);

                ['Learn', 'Practice', 'Review'].forEach(task => {
                    const taskLowerCase = task.toLowerCase();
                    const li = document.createElement('li');
                    const input = document.createElement('input');
                    const a = document.createElement('a');

                    li.classList.add(taskLowerCase);
                    input.id = `${taskLowerCase}-chapter${c + 1}`;
                    input.type = 'checkbox';
                    input.oninput = this.#checkMark.bind(this);
                    a.href = `#${taskLowerCase}-chapter${c + 1}`;
                    a.textContent = task;

                    menu.append(li);
                    li.append(input, " ", a);
                });
            });
        });

        this.shadowRoot.querySelector('ul').replaceChildren(fragment);
    }

    #checkMark(event) {

    }

    changeLanguage(event) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set("lang", event.target.value);
        window.location.search = searchParams.toString();
        //TODO: change base url to include language
    }
}

customElements.define("sw-header", SwHeader);