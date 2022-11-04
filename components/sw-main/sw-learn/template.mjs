import "./sw-udemy/element.mjs";
import "./sw-medium/element.mjs";
import "./sw-quiz/element.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-learn/shadow.css">
    <h1></h1>
    <main>
        <article>
            <h2>Todo #1. Watch Video on Udemy</h2>
            <sw-udemy></sw-udemy>
        </article>
        <article>
            <h2>Todo #2. Read Textbook on Medium</h2>
            <sw-medium></sw-medium>
        </article>
        <article>
            <h2>Todo #3. Take Quiz to Check Understanding</h2>
            <sw-quiz></sw-quiz>
        </article>
    </main>
`;

export default template;