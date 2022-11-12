const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-home/shadow.css">
    <link rel="stylesheet" href="components/sw-main/sw-learn/shadow.css">
    <main>
        <header>
            <h1></h1>
            <br>
            <aside>
                <h2></h2>
                <h3></h3>
            </aside>
        </header>
        <section class="video">
            <h2>Watch Video</h2>
            <figure>🖥</figure>
            <p></p>
            <button>Watch <span></span></button>
        </section>
        <section class="textbook">
            <h2>Read Textbook</h2>
            <figure>📚</figure>
            <p></p>
            <button>Read <span></span></button>
        </section>
        <section class="quiz">
            <h2>Take Quiz</h2>
            <figure>📄</figure>
            <p></p>
            <button>Take <span></span></button>
        </section>
        <section class="group">
            <h2>Join Study Group</h2>
            <figure>🧑🏻‍💻</figure>
            <p></p>
            <button>Join <span></span></button>
        </section>
        <footer></footer>
    </main>
`;

export default template;