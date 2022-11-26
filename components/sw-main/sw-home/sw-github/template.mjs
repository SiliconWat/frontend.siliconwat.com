import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-home/sw-github/shadow.css">
    <section id="course">
        <p>This course can be self-paced for self-motivated students.</p>
    </section>
    <section id="cohort">
        <aside>
            <p>grades are pass / no pass only</p>
            <p>chapter assignemnts = 70% to pass</p>
            <p>exact score and rank will be recorded and rewarded proportinaly </p>
        </aside>
        <a>
            <img>
            <h2></h2>
        </a>        
        <table>
            <caption>student's grades per chapter</caption>
            <thead>
                <tr>
                    <th scope="col">Chapter</th>
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