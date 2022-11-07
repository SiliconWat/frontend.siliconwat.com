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

        UNITS.forEach((unit, u) => {
            const li = document.createElement('li');
            const h3 = document.createElement('h3');
            const nav = document.createElement('nav');
            const h2 = document.createElement('h2');
            const bar = document.createElement('sw-bar');

            h3.textContent = `${unit.bonus ? "Bonus " : ""}Unit ${u + 1}`;
            h2.textContent = unit.title;
            bar.setAttribute("id", u + 1);
            // bar.unit = u + 1;

            fragment.append(li);
            li.append(h3, nav);
            nav.append(h2, bar);

            if (unit.from && unit.to) {
                for (let c = unit.from - 1; c < unit.to; c++) {
                    const chapter = CHAPTERS[c];
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
                        input.id = `unit${u + 1}-chapter${c + 1}-${taskLowerCase}`;
                        input.type = 'checkbox';
                        input.checked = Boolean(Number(localStorage.getItem(input.id)));
                        input.oninput = this.#checkMark.bind(this);
                        a.href = `#${taskLowerCase}-chapter${c + 1}`;
                        a.textContent = task;

                        menu.append(li);
                        li.append(input, " ", a);
                    });
                }
            }
        });

        this.shadowRoot.querySelector('ul').replaceChildren(fragment);
    }

    #checkMark(event) {
        localStorage.setItem(event.target.id, Number(event.target.checked));
        const unit = event.target.id.split('-')[0].replace('unit', "");
        this.shadowRoot.getElementById(unit).render();
    }

    changeLanguage(event) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set("lang", event.target.value);
        window.location.search = searchParams.toString();
        //TODO: change base url to include language
    }
}

customElements.define("sw-header", SwHeader);