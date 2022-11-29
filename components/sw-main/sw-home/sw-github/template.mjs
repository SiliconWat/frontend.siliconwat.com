import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-home/sw-github/shadow.css">
    <section id="course">
        <p>This course can be self-paced for self-motivated students.</p>
        <p>However, if you prefer more structure, consider joining my Remote Cohort Program to study alongside other students!</p>
        <p>It costs just $100 but also requires a commitment loan of 100 SW Coins to attract only the most serious students.</p>
        <p>And to motivate you and your classmates to finish the entire course, 200 SW Coins will be rewarded upon completion!</p>
    </section>
    <section id="cohort">
        <table>
            <caption>Students vs Chapters</caption>
            <colgroup>
                <col span="1">
                <col span="1">
                <col span="1">
            </colgroup>
            <thead>
                <tr>
                    <th scope="col">CHAPTER</th>
                    <th scope="col">@thonly</th>
                    <th scope="col">AVG</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>
                    <th scope="row">SCORE</th>
                    <th scope="col">100%</th>
                    <th scope="row">Overall Cohort Score</th>
                </tr>
            </tfoot>
        </table>
        <aside>
            <a id="avatar"><img></a>
            <div>
                <a><h1 id="username"></h1></a>
                <h2>Score: <span id="score">Not Enrolled</span></h2>
                <h2>Grade: <span id="grade">Pass / No Pass</span></h2>
            </div>
        </aside>    
        <table>
            <caption>Assignments vs Chapters</caption>
            <colgroup>
                <col span="1">
                <col span="1">
                <col span="1">
                <col span="1">
                <col span="1">
                <col span="1">
            </colgroup>
            <thead>
                <tr>
                    <th scope="col">CHAPTER</th>
                    <th scope="col">Discussion</th>
                    <th scope="col">Summary</th>
                    <th scope="col">Challenge</th>
                    <th scope="col">Suggestion</th>
                    <th scope="col">AVG</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>
                    <th scope="row">SCORE</th>
                    <th scope="col" title="Total Discussion Score: N/A">N/A</th>
                    <th scope="col" title="Total Summary Score: N/A">N/A</th>
                    <th scope="col" title="Total Challenge Score: N/A">N/A</th>
                    <th scope="col" title="Total Suggestion Score: N/A">N/A</th>
                    <th scope="row" title="Overall Score: Not Enrolled">Not Enrolled</th>
                </tr>
            </tfoot>
        </table>
    </section> 
    <footer>
        <p>Get a 50% Discount for being the first student to enroll!</p>
    </footer>
`;

export default template;