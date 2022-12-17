import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-cohort/table.css">
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-home/sw-github/shadow.css">
    <section id="course">
        <p>This course can be <strong><em>self-paced</em></strong> for <strong>self-motivated students</strong>.</p>
        <p>However, if you prefer more <strong>structure</strong>, consider joining my <a id="program">Remote Cohort Program</a> to study alongside <em>other students</em>!</p>
        <p>It costs just <strong>$100</strong> but also requires a <strong>commitment loan</strong> of <strong>100 SW Coins</strong> to attract only the most <em>serious students</em>.</p>
        <p>And to motivate you and your classmates to finish the entire course, <strong>200 SW Coins</strong> will be <em>rewarded upon completion</em>!</p>
        <p>After you successfully complete the Cohort Program, you will have the opportunity to come back and <strong>tutor <em>future students</em></strong>.</p>
        <p><strong>Helping to <em>teach</em> the course materials</strong> will help you to <strong>completely <em>master</em> them</strong>, plus you will also be able to earn even more <strong>SW Coins</strong>!</p>
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
`;

export default template;