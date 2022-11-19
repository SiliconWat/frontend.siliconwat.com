import "../sw-students/element.mjs";
import "../sw-grades/element.mjs";
import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-home/shadow.css">
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-practice/shadow.css">
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
            <p>They are <em>interactive</em> like <strong id="editor"></strong> so you can <em>see the <strong>results</strong> as you code</em> and <em>check if your <strong>solutions</strong> are correct</em>.</p>
            <p><strong><em>Step-by-step</em> video explanations</strong> of the solutions are available inside my <strong>Udemy Course</strong>.</p>
            <p><em class="free">The <strong>Coding Exercises</strong> are FREE to play to earn <strong>SW Coins</strong>,</em> <em class="pay">but the <strong>video explanations</strong> require purchasing the <strong>Udemy Course</strong>.</em></p>
            <br>
            <button><span></span></button>
        </section>
        <section class="pair">
            <h2><span>#2</span> Pair Program</h2>
            <figure>👩🏻‍💻👨🏼‍💻</figure>
            <p>Every week, a <strong>new classmate</strong> from your <em>Study Group</em> is assigned to be your <strong>Programming Partner</strong>.</p>
            <p>You <em>take turns</em> acting like the <strong>Technical Lead</strong> to practice your <em>technical communication skills</em>.</p>
            <p>As the Technical Lead, your only task is to <em>explain how to solve</em> a <strong>Mock Interview Question</strong> while your partner <em>performs the actual coding</em>.</p>
            <p class="pay"><em>To get a <strong>Programming Partner</strong>, you need to join the <strong>Cohort Program</strong>.</em></p>
            <br>
            <button><span></span></button>
        </section>
        <section class="project">
            <h2><span>#3</span> <b class="app"></b></h2>
            <figure>📑</figure>
            <p>The <em>best</em> and <em>funnest</em> way to <strong>master coding</strong> is to apply your newfound <em>knowledge</em> to a <strong>real project <em>of your choosing</em></strong>. You can create <em>one</em> <strong class="app"></strong> for FREE for this purpose.</p>
            <p>To <em>pass</em> the <strong>Cohort Program</strong>, your classmates need to give your <strong class="app"></strong> a <strong><em>passing grade</em></strong>.</p>
            <p>For additional motivation, <strong><span class="app"></span>s</strong> will be <strong><em>publicly ranked</em></strong> based on the <strong>Best Idea</strong>, the <strong>Best Code</strong>, and the <strong>Best Overall</strong> by you and your classmates.</p>
            <p><em class="free">It is FREE to create a <strong class="app"></strong>,</em> <em class="pay">but to have yours <strong>graded</strong> and <strong>ranked</strong>, you need to sign up for the <strong>Cohort Program</strong>.</em></p>
            <br>
            <button><span></span></button>
        </section>
        <footer>
            <sw-students></sw-students>
            <sw-grades></sw-grades>
        </footer>
    </main>
`;

export default template;