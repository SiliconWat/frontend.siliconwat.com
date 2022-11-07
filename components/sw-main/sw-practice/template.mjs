import "./sw-code/element.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-practice/shadow.css">
    <header>
        <h1></h1>
        <h2></h2>
    </header>
    <main>
        <article>
            <h3>Todo #4. Interactive Coding Exercises</h3>
            <sw-code></sw-code>
        </article>
    </main>
`;

export default template;