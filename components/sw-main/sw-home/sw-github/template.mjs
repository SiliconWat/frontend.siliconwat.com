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
            <caption>students vs chapters</caption>
            <thead>
                <tr>
                    <th scope="col">Chapter</th>
                    <th scope="col">@thonly</th>
                    <th scope="col">AVG</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>
                    <th scope="row">AVG</th>
                    <th scope="col">100%</th>
                    <th scope="row">Cohort Score</th>
                </tr>
            </tfoot>
        </table>
        <aside>
            <a id="avatar"><img></a>
            <div>
                <h2><a id="username"></a></h2>
                <h3>Score: <span id="score">Not Enrolled</span></h3>
                <h3>Grade: <span id="grade">70% to Pass</span></h3>
            </div>
        </aside>    
        <table>
            <caption>assignemnts vs chapters</caption>
            <thead>
                <tr>
                    <th scope="col">Chapter</th>
                    <th scope="col">Discussion</th>
                    <th scope="col">Summary</th>
                    <th scope="col">Challenge</th>
                    <th scope="col">Suggestion</th>
                    <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>
                    <th scope="row">Score</th>
                    <th scope="col">N/A</th>
                    <th scope="col">N/A</th>
                    <th scope="col">N/A</th>
                    <th scope="col">N/A</th>
                    <th scope="row">Not Enrolled</th>
                </tr>
            </tfoot>
        </table>
    </section> 
`;

export default template;