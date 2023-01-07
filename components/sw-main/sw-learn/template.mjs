import "../sw-cohort/element.mjs";
import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-home/shadow.css">
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-learn/shadow.css">
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
            <h2><span>#1</span> Watch Video</h2>
            <figure>🖥</figure>
            <p>A great study strategy is to watch my lecture <em>first</em> for a <strong>general overview</strong> then a <em>second</em> time for the <strong>details</strong>.</p>
            <p>Don't just watch me code. Have <strong id="editor"></strong> open and <strong>code along with me!</strong> This will <em>increase your retention</em>.</p>
            <p>You can <strong>pause</strong>, <strong>slow down</strong> or <strong>speed up</strong> the video.</p>
            <p>You can turn on the <strong>English subtitle</strong> to catch my every word.</p>
            <p><em>Subtitles in other languages coming soon.</em></p>
            <p class="pay"><em>Purchase of my <strong>Udemy Course</strong> is required.</em></p>
            <br>
            <button>Watch <span></span></button>
        </section>
        <section class="textbook">
            <h2><span>#2</span> Read Textbook</h2>
            <figure>📚</figure>
            <p>My Course Textbook is a <em>transcript</em> of my lecture videos <em>plus</em> <strong>helpful diagrams</strong> and <strong>side notes</strong>.</p>
            <p><strong>Highly recommended</strong> that you <strong><em>read</em> this textbook version</strong> to <em>carefully review</em> what you have watched.</p>
            <p>This guarantees that you did not miss anything <strong>important</strong>.</p>
            <p class="free"><em>The Course Textbook is written as <strong>Medium articles</strong> and are FREE to read from here.</em></p>
            <!--<p>From here, you can read the entire course textbook on Medium for <strong>free!</strong></p>-->
            <p class="pay"><em>If you like Medium and use my <a href="https://medium.com/@thonly/membership">referral link</a> to join, I will give you a <strong>special coupon</strong> to get ALL my <a href="https://siliconwat.com">Udemy courses</a> for <strong>90% OFF</strong> for Life!</em></p>
            <p><em>If you’re already a Medium member or don't like Medium, please consider <strong>donating</strong> to <a href="https://github.com/sponsors/SiliconWat">@SiliconWat</a> to receive the same <strong>Udemy discounts</strong>!</em></p>
            <br>
            <button>Read <span></span></button>
        </section>
        <section class="quiz">
            <h2><span>#3</span> Take Quiz</h2>
            <figure>📈</figure>
            <p>Taking my <strong>Interactive Quiz</strong> will expose <em>any areas</em> you are still <em>weak at</em>.</p>
            <p>For any <strong>quiz questions</strong> that are <em>difficult</em>, go back to <strong>re-watch</strong> and <strong>re-read</strong> as <em>many times</em> as necessary.</p>
            <p>All the <strong>correct answers</strong> can be found <em>within the lectures</em>. There are no surprises or trick questions.</p>
            <p class="free"><em>Quizzes are FREE to take. Plus, for every correct answer you will earn <strong>SW Coins</strong>!</em></p>
            <br>
            <button>Take <span></span></button>
        </section>
        <section class="group">
            <h2><span>#4</span> Join Study Group</h2>
            <figure>🧑🏻‍💻</figure>
            <p>Every week, <strong>new classmates</strong> are <em>randomly</em> assigned to your <strong>Study Group</strong> to maximize your <strong><em>learning experience</em></strong>.</p>
            <p>Go to the <strong>Discussion Board</strong> to <em>post any questions</em> you may have, or <em>read the responses</em> of your classmates. You may gain a <em>new</em> and <em>better</em> <strong>perspective</strong>.</p>
            <p>For your convenience, you can use the <strong>Group Live Chat</strong> to ask your classmates <em>questions</em> and give <em>answers</em> in <strong><em>real-time</em></strong>.</p>
            <p class="pay"><em>To join a Study Group, you need to sign up for the <strong>Cohort Program</strong>.</em></p>
            <br>
            <button>Join <span></span></button>
        </section>
        <footer>
            <sw-cohort></sw-cohort>
        </footer>
    </main>
`;

export default template;