const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-home/shadow.css">
    <link rel="stylesheet" href="components/sw-main/sw-review/shadow.css">
    <main>
        <header>
            <h1></h1>
            <br>
            <aside>
                <h2></h2>
                <h3></h3>
            </aside>
        </header>
        <section class="flashcard">
            <h2><span>#1</span> Syntax Flashcards</h2>
            <figure>🗒</figure>
            <p></p>
            <button><span></span></button>
        </section>
        <section class="summary">
            <h2><span>#2</span> Medium Summary</h2>
            <figure>📄</figure>
            <p></p>
            <button><span></span></button>
        </section>
        <section class="interview">
            <h2><span>#3</span> Mock Interview</h2>
            <figure>👩🏼‍🏫👨🏼‍🏫</figure>
            <p></p>
            <button><span></span></button>
        </section>
        <footer></footer>
    </main>
`;

export default template;