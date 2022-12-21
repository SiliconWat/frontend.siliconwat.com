import "../sw-cohort/element.mjs";
import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-home/shadow.css">
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-review/shadow.css">
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
            <p>Play my <strong>Flashcard Games</strong> to help you <em>remember</em> the <strong>code syntaxes</strong> of <span id="code"></span>.</p>
            <p>There are <em>three</em> levels: <strong>Junior</strong>, <strong>Mid</strong>, and <strong>Senior</strong>. The <em>more difficult</em> the level, the <em>less time</em> you have.</p>
            <p>Also, the <em>more difficult</em> the level, the <strong>more SW Coins</strong> you will earn!</p>
            <p class="free"><em>The <strong>Flashcard Games</strong> are FREE to play to earn <strong>SW Coins</strong>.</em></p>
            <br>
            <button><span></span></button>
        </section>
        <section class="summary">
            <h2><span>#2</span> Medium Summary</h2>
            <figure>📄</figure>
            <p>The <em>best</em> way to <em>reinforce</em> what you have learned is to <strong>summarize it</strong> in <strong><em>your own words</em></strong> and <strong>share it <em>with others</em></strong>. You can sign up for a FREE <strong>Medium account</strong> for this purpose.</p>
            <p>As students in the <strong>Cohort Program</strong>, you are required to <strong><em>read each other's</em> Medium Summaries</strong> and <strong><em>leave at least one</em> positive comment</strong>. This is to <em>increase your understanding</em> of <strong>other perspectives</strong>.</p>
            <p>Additionally, to <em>pass</em> the <strong>Cohort Program</strong>, your classmates need to give your <strong>Medium Summaries</strong> a <em>passing grade</em>.</p>
            <p><em class="free">It is FREE to create a <strong>Medium account</strong> to write summaries,</em> <em class="pay">but to have yours <strong>graded</strong> and <strong>commented</strong>, you need to join the <strong>Cohort Program</strong>.</em></p>
            <br>
            <button><span></span></button>
        </section>
        <section class="interview">
            <h2><span>#3</span> Mock Interview</h2>
            <figure>👩🏼‍🏫👨🏼‍🏫</figure>
            <p>After you <em>pass</em> the <strong>Cohort Program</strong>, you can sign up for <em>one</em> <strong>Mock Technical Interview</strong> with me <em>provided you allow me to <strong>record it</strong> for future students to watch</em>.</p>
            <p>The <em>interview topics</em> are <strong>Data Structures</strong> and <strong>Algorithms</strong> that are popular in <em id="subject"></em>, which are <em>very similar</em> to the ones you practiced with your Programming Partner.</p>
            <p>In the meantime, you can watch <strong>past recordings</strong> located at my <strong>YouTube Channel</strong> for FREE. As you watch, <em>imagine</em> how you would answer instead.</p>
            <p><em class="free">It is FREE to watch <strong>past recordings</strong>,</em> <em class="pay">but to sign up for a <strong>Mock Interview</strong> with me, you need to firstly <strong>pass</strong> the <strong>Cohort Program</strong>.</em></p>
            <br>
            <button><span></span></button>
        </section>
        <footer>
            <sw-cohort></sw-cohort>
        </footer>
    </main>
`;

export default template;