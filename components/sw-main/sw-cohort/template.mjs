import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-cohort/shadow.css">
    <aside>
        <section>
            <figure>
                <h3>Discussion: <span></span></h3>
                <h3>Challenge: <span></span></h3>
                <h3>Summary: <span></span></h3>
                <h3>Suggestion: <span></span></h3>
            </figure>
            <figure>
                <h3>Discussion Total Passed: <span></span></h3>
                <h3>Challenge: <span></span></h3>
                <h3>Summary: <span></span></h3>
                <h3>Suggestion: <span></span></h3>
            </figure>
        </section>
        <section>
            <h3>Total Students: <span></span></h3>
            <h3>Successfully Passed: <span></span></h3>
        </section>
    </aside>
`;

export default template;