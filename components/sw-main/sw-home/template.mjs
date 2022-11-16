import { FRONTEND } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${FRONTEND}/components/sw-main/sw-home/shadow.css">
    <main>
        <header>
            <h1><a class="medium"><span id="title"></span><div id="subtitle"></div></a></h1>
        </header>
        <section>
            <h2>Learn</h2>
            <figure>📖</figure>
            <ul>
                <li>If you purchase my <a id="udemy">Udemy Course</a>, you can watch my <strong>Lecture Videos</strong> with <em>subtitles</em> at 7 different <em>speeds</em> (from &half; to 2x).</li>
                <li>You can read my corresponding <a class="medium">Textbook Chapters</a> with <em>helpful diagrams</em> and <strong>side notes</strong> on Medium for FREE.</li>
                <li>You can take my corresponding <a id="quiz">Quizzes</a> for FREE to check your <em>understanding</em> and earn <strong>SW Coins</strong>!</li>
                <li><span class="program"></span> you join my <a class="cohort"></a>, you can form <strong>Study Groups</strong> with your <em>classmates</em> on Discord.</li>
            </ul>
            <br>
            <button><span>Join Cohort</span></button>
        </section>
        <section>
            <h2>Practice</h2>
            <figure>💻</figure>
            <ul>
                <li>You can play my <em>interactive</em> <a id="code">Code Exercises</a> for FREE to test your <em>coding skills</em> and earn <strong>SW Coins</strong>!</li>
                <li><span class="program"></span> you join my <a class="cohort"></a>, you can <strong>Pair Program</strong> with your <em>classmates</em> on Discord.</li>
                <li><span class="program"></span> you join my <a class="cohort"></a>, you can submit your <strong id="project"></strong> for <em>grading</em> and <em>ranking</em> by your classmates.</li>
            </ul>
            <br>
            <button><span>Sign In</span></button>
        </section>
        <section>
            <h2>Review</h2>
            <figure>👩🏼‍💻</figure>
            <ul>
                <li>You can play my <a id="flashcard">Flashcard Games</a> for FREE to remember <em>code syntaxes</em> and earn <strong>SW Coins</strong>!</li>
                <li><span class="program"></span> you join my <a class="cohort"></a>, you can submit your <strong>Medium Summaries</strong> for <em>grading</em> and <em>comments</em> by your classmates.</li>
                <li>After you successfully finish my <a class="cohort"></a>, you can sign up for a <strong>Mock Coding Interview</strong> with me about <em>Data Structures</em> and <em>Algorithms</em> on Discord.</li>
            </ul>
            <br>
            <button><span>Private Discord</span></button>
        </section>
        <footer></footer>
    </main>
`;

export default template;