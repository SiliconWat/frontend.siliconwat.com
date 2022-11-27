import { getYear, getData } from '/global.mjs';
import template from './template.mjs';

class SwHeader extends HTMLElement {
    #github;

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(github=this.#github) {
        this.#github = github;
        const y = getYear(github);
        const { units, chapters } = await getData('syllabus', y);
        this.#render(github, units, chapters);
        this.style.opacity = 1;
    }

    #render(github, units, chapters) {
        const fragment = document.createDocumentFragment();

        units.forEach((unit, u) => {
            const li = document.createElement('li');
            const h3 = document.createElement('h3');
            const nav = document.createElement('nav');
            const h2 = document.createElement('h2');
            const bar = document.createElement('sw-bar');

            h3.textContent = `${unit.bonus ? "Bonus " : ""}Unit ${u + 1}`;
            h2.textContent = unit.title;
            bar.setAttribute("id", u + 1);
            // bar.unit = u + 1;
            bar.render(github);

            fragment.append(li);
            li.append(h3, nav);
            nav.append(h2, bar);

            if (unit.from && unit.to) {
                for (let c = unit.from - 1; c < unit.to; c++) {
                    const chapter = chapters[c];
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
                        input.setAttribute('data-unit', u + 1);
                        input.type = 'checkbox';
                        input.checked = Boolean(Number(localStorage.getItem(input.id)));
                        input.oninput = this.#checkMark.bind(this);
                        a.href = `#${input.id}`;
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
        this.shadowRoot.getElementById(event.target.dataset.unit).render();
        document.querySelector('sw-progress').render();
        if (event.target.id === window.location.hash.substring(1)) document.querySelector('sw-main').render();
    }

    changeLanguage(event) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set("lang", event.target.value);
        window.location.search = searchParams.toString();
        //TODO: change base url to include language
    }
}

customElements.define("sw-header", SwHeader);