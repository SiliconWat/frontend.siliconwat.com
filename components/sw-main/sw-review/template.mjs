import "./sw-flashcard/element.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-review/shadow.css">
    <header>
        <h1></h1>
        <h2></h2>
    </header>
    <main>
        <article>
            <h3>Todo #5. Syntax Flashcards</h3>
            <sw-flashcard></sw-flashcard>
        </article>
    </main>
`;

export default template;