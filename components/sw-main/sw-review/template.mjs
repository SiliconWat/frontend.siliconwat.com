import "./sw-flashcard/element.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-review/shadow.css">
    <h1></h1>
    <main>
        <article>
            <h2>Todo #5. Syntax Flashcards</h2>
            <sw-flashcard></sw-flashcard>
        </article>
    </main>
`;

export default template;