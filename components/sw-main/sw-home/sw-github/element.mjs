import { TRILOGY, getData } from '/global.mjs';
import template from './template.mjs';

class SwGitHub extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async render(github, y) {
        if (TRILOGY[1] === 'Course') {
            this.shadowRoot.getElementById('course').style.display = 'block';
        } else {
            if (github.login) await this.#render(github, y)
            else this.shadowRoot.querySelector('aside').style.display = 'block';
            this.shadowRoot.getElementById('cohort').style.display = 'block';
        }
        this.style.display = 'block';
    }

    async #render(github, y) {
        const a = this.shadowRoot.querySelector('a');
        a.href = github.html_url;
        a.firstElementChild.src = github.avatar_url;
        a.lastElementChild.textContent = "@" + github.login;
        this.shadowRoot.querySelector('a').style.display = 'block';

        const { chapters } = await getData('syllabus', y);
        if (github.student) this.#renderStudent(chapters);
        else this.#renderStudents(chapters);
        this.shadowRoot.querySelector('table').style.display = 'block';
    }

    #renderStudent(chapters) {
        const fragment = document.createDocumentFragment();

        chapters.forEach((chapter, c) => {
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.textContent = c + 1;
            tr.append(td);
            fragment.append(tr);
        });

        this.shadowRoot.querySelector('tbody').replaceChildren(fragment);
    }

    #renderStudents(chapters) {

    }
}

customElements.define("sw-github", SwGitHub);