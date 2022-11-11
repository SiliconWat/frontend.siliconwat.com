const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-home/shadow.css">
    <main>
        <header>
            <h1><a href="https://medium.com/siliconwat/a-complete-frontend-developer-textbook-for-beginners-3be48c1f07?sk=351a90e15ab63ee815dda3f3a395f843">A Complete Frontend Developer Course for Beginners<br/>(2023 Edition)</a></h1>
        </header>
        <section>
            <h2>Learn</h2>
            <span>📖</span>
            <ul>
                <li>If you purchase our <a href="https://siliconwat.com">Udemy Course</a>, you can watch <strong>Lecture Videos</strong> with <em>subtitles</em> at 6 different <em>speeds</em>.</li>
                <li>You can read corresponding <a href="https://medium.com/siliconwat/a-complete-frontend-developer-textbook-for-beginners-3be48c1f07?sk=351a90e15ab63ee815dda3f3a395f843">Textbook Chapters</a> with helpful <em>diagrams</em> and <strong>side notes</strong> on Medium for FREE.</li>
                <li>You can take corresponding <a href="https://quiz.siliconwat.com">Quizzes</a> for FREE to check your <em>understanding</em> and earn <strong>SW Coins</strong>!</li>
                <li>If you join our <a href="https://frontend.siliconwat.org">Cohort Program</a>, you can form <strong>Study Groups</strong> with your <em>classmates</em> on Discord.</li>
            </ul>
        </section>
        <section>
            <h2>Practice</h2>
            <span>💻</span>
            <ul>
                <li>You can play with our <em>interactive</em> <a href="https://code.siliconwat.com">Code Exercises</a> for FREE to test your <em>coding skills</em> and earn <strong>SW Coins</strong>!</li>
                <li>If you join our <a href="https://frontend.siliconwat.org">Cohort Program</a>, you can <strong>Pair Program</strong> with your <em>classmates</em> on Discord.</li>
                <li>If you join our <a href="https://frontend.siliconwat.org">Cohort Program</a>, you can submit your <strong>Codepen Project</strong> for <em>grading</em> and <em>ranking</em> by your classmates.</li>
            </ul>
        </section>
        <section>
            <h2>Review</h2>
            <span>👩🏼‍💻</span>
            <ul>
                <li>You can use our <a href="https://flashcard.siliconwat.com">Flashcards</a> for FREE to remember <em>code syntaxes</em> and earn <strong>SW Coins</strong>!</li>
                <li>If you join our <a href="https://frontend.siliconwat.org">Cohort Program</a>, you can submit your <strong>Medium Summaries</strong> for <em>grading</em> and <em>comments</em> by your classmates.</li>
                <li>If you join our <a href="https://frontend.siliconwat.org">Cohort Program</a>, you can mock <strong>Coding Interviews</strong> about <em>Data Structures</em> and <em>Algorithms</em> with your classmates on Discord.</li>
            </ul>
        </section>
        <footer>
            <p>From here, you can read the entire course textbook on Medium for <strong>free!</strong></p>
            <p>If you like Medium and use our <a href="https://medium.com/@thonly/membership">referral link</a> to join, we will give you a special coupon to get ALL our <a href="https://siliconwat.com">Udemy courses</a> for <strong>90% OFF</strong> for Life!</p>
            <p>If you’re already a Medium member or don't like Medium, please consider donating to <a href="https://github.com/sponsors/SiliconWat">@SiliconWat</a> to receive the same discount!</p>
        </footer>
    </main>
`;

export default template;