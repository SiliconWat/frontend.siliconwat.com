const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-home/shadow.css">
    <link rel="stylesheet" href="components/sw-main/sw-practice/shadow.css">
    <main>
        <header>
            <h1></h1>
            <br>
            <aside>
                <h2></h2>
                <h3></h3>
            </aside>
        </header>
        <section class="coding">
            <h2><span>#1</span> Coding Exercise</h2>
            <figure>⌨️</figure>
            <p></p>
            <button><span></span></button>
        </section>
        <section class="pair">
            <h2><span>#2</span> Pair Program</h2>
            <figure>👩🏻‍💻👨🏼‍💻</figure>
            <p></p>
            <button><span></span></button>
        </section>
        <section class="project">
            <h2><span>#3</span> Codepen Project</h2>
            <figure>📑</figure>
            <p></p>
            <button><span></span></button>
        </section>
        <footer></footer>
    </main>
`;

export default template;