import "./sw-udemy/element.mjs";
import "./sw-medium/element.mjs";
import "./sw-quiz/element.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-learn/shadow.css">
    <header>
        <h1></h1>
        <h2></h2>
    </header>
    <main>
        <article>
            <h3>Todo #1. Watch Video on Udemy</h2>
            <sw-udemy></sw-udemy>
        </article>
        <article>
            <h3>Todo #2. Read Textbook on Medium</h3>
            <sw-medium></sw-medium>
        </article>
        <article>
            <h3>Todo #3. Take Quiz to Check Understanding</h3>
            <sw-quiz></sw-quiz>
        </article>
    </main>
`;

export default template;