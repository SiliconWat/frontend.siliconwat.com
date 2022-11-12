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
            <p>Put your newfound <em>coding skills</em> to the test by solving my <strong>Coding Exercises</strong>.</p>
            <p>They are <em>interactive</em> like <strong>Codepen</strong> so you can <em>see the <strong>results</strong> as you code</em> and <em>check if your <strong>solutions</strong> are correct</em>.</p>
            <p><strong><em>Step-by-step</em> video explanations</strong> of the solutions are available inside my <strong>Udemy Course</strong>.</p>
            <p><em class="free">The <strong>Coding Exercises</strong> are FREE to play,</em> <em class="pay">but the <strong>video explanations</strong> require purchasing the <strong>Udemy Course</strong>.</em></p>
            <br>
            <button><span></span></button>
        </section>
        <section class="pair">
            <h2><span>#2</span> Pair Program</h2>
            <figure>👩🏻‍💻👨🏼‍💻</figure>
            <p></p>
            <br>
            <button><span></span></button>
        </section>
        <section class="project">
            <h2><span>#3</span> Codepen Project</h2>
            <figure>📑</figure>
            <p></p>
            <br>
            <button><span></span></button>
        </section>
        <footer></footer>
    </main>
`;

export default template;