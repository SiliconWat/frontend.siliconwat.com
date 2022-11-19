import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-cohort/shadow.css">
    <aside>
        <section>
            TODO: student body stats: number enrolled, number passed?
        </section>
        <section>
            TODO: grades and overall grade per student
        </section>
    </aside>
`;

export default template;