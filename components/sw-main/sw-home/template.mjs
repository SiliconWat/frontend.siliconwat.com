import "../sw-hero/element.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-home/shadow.css">
    <sw-hero>
        <a slot="h1" href="https://medium.com/siliconwat/a-complete-frontend-developer-textbook-for-beginners-3be48c1f07?sk=351a90e15ab63ee815dda3f3a395f843">A Complete Frontend Developer Course for Beginners<br/>(2023 Edition)</a>
        <li slot="learn">If you purchase our <a href="https://siliconwat.com">Udemy Course</a>, you can watch <strong>Lecture Videos</strong> with <em>subtitles</em> at 7 different <em>speeds</em> (from &half; to 2x).</li>
        <li slot="learn">You can read corresponding <a href="https://medium.com/siliconwat/a-complete-frontend-developer-textbook-for-beginners-3be48c1f07?sk=351a90e15ab63ee815dda3f3a395f843">Textbook Chapters</a> with helpful <em>diagrams</em> and <strong>side notes</strong> on Medium for FREE.</li>
        <li slot="learn">You can take corresponding <a href="https://quiz.siliconwat.com">Quizzes</a> for FREE to check your <em>understanding</em> and earn <strong>SW Coins</strong>!</li>
        <li slot="learn">If you join our <a href="https://frontend.siliconwat.org">Remote Cohort</a>, you can form <strong>Study Groups</strong> with your <em>classmates</em> on Discord.</li>
        <li slot="practice">You can play our <em>interactive</em> <a href="https://code.siliconwat.com">Code Exercises</a> for FREE to test your <em>coding skills</em> and earn <strong>SW Coins</strong>!</li>
        <li slot="practice">If you join our <a href="https://frontend.siliconwat.org">Remote Cohort</a>, you can <strong>Pair Program</strong> with your <em>classmates</em> on Discord.</li>
        <li slot="practice">If you join our <a href="https://frontend.siliconwat.org">Remote Cohort</a>, you can submit your <strong>Codepen Project</strong> for <em>grading</em> and <em>ranking</em> by your classmates.</li>
        <li slot="review">You can play our <a href="https://flashcard.siliconwat.com">Flashcard Games</a> for FREE to remember <em>code syntaxes</em> and earn <strong>SW Coins</strong>!</li>
        <li slot="review">If you join our <a href="https://frontend.siliconwat.org">Remote Cohort</a>, you can submit your <strong>Medium Summaries</strong> for <em>grading</em> and <em>comments</em> by your classmates.</li>
        <li slot="review">If you join our <a href="https://frontend.siliconwat.org">Remote Cohort</a>, you can mock <strong>Coding Interviews</strong> with your classmates on Discord about <em>Data Structures</em> and <em>Algorithms</em>.</li>
    </sw-hero>
`;

export default template;