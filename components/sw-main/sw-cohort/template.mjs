import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-cohort/shadow.css">
    <section id="course">
        <p>However, if you prefer more structure, consider joining my Remote Cohort Program to study alongside other students!</p>
        <p>It costs just $100 but also requires a commitment loan of 100 SW Coins to attract only the most serious students.</p>
        <p>And to motivate you and your classmates to finish the entire course, 200 SW Coins will be rewarded upon completion!</p>
    </section>
    <section id="cohort">
        <table>
            <caption></caption>
            <thead>
                <tr>
                    <th scope="col">Grader</th>
                    <th scope="col">Discussion</th>
                    <th scope="col">Challenge</th>
                    <th scope="col">Suggestion</th>
                    <th scope="col">Summary</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>
                    <th score="row">Score</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th score="row">Grade</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
        <table>
            <caption></caption>
            <thead>
                <tr>
                    <th scope="col">Grade</th>
                    <th scope="col">Discussion</th>
                    <th scope="col">Challenge</th>
                    <th scope="col">Suggestion</th>
                    <th scope="col">Summary</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>
                    <th score="row">Score</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th score="row">Grade</th>
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