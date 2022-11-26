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
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>
                    <th scope="row">Score</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Grade</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
        <aside>
            <a>
                <img>
                <h2></h2>
            </a> 
            todo: final score + final grade
        </aside>    
        <table>
            <caption>assignemnts vs chapters</caption>
            <thead>
                <tr>
                    <th scope="col">Chapter</th>
                    <th scope="col">Discussion</th>
                    <th scope="col">Challenge</th>
                    <th scope="col">Suggestion</th>
                    <th scope="col">Summary</th>
                    <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>
                    <th scope="row">Score</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    </section> 
`;

export default template;