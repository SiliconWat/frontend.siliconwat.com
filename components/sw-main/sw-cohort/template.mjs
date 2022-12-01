import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-cohort/shadow.css">
    <section id="course">
        <p>When you join my <a id="program">Remote Cohort Program</a>, you will be able to have your <strong>Chapter Assignments</strong> <em>graded by your classmates</em>.</p>
        <p>The <strong>grading system</strong> is a simple <strong>Pass / No Pass</strong>.</p>
        <p>You just need to pass at least <strong id="percent"></strong> of all the class assignments to successfully complete the Cohort Program.</p>
        <p>Note that <strong>exact scores</strong> will be publicly <em>recorded</em> and <em>ranked</em> in order to reward <strong>SW Coins</strong> <em>proportionately</em>.</p>
    </section>
    <section id="cohort">
        <table>
            <caption>Assignments vs Students</caption>
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
                    <th scope="col">STUDENT</th>
                    <th scope="col">Discussion</th>
                    <th scope="col">Challenge</th>
                    <th scope="col">Suggestion</th>
                    <th scope="col">Summary</th>
                    <th scope="col">AVG</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>
                    <th scope="row">AVG</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">Overall AVG</th>
                </tr>
            </tfoot>
        </table>
        <table>
            <caption>Assignments vs Graders</caption>
            <colgroup>
                <col span="1">
                <col span="1">
                <col span="1">
                <col span="1">
                <col span="1">
            </colgroup>
            <thead>
                <tr>
                    <th scope="col">GRADER</th>
                    <th scope="col">Discussion</th>
                    <th scope="col">Challenge</th>
                    <th scope="col">Suggestion</th>
                    <th scope="col">Summary</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>
                    <th scope="row">SCORE</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </tfoot>
        </table>
        <table>
            <caption>Assignments vs Group Members</caption>
            <colgroup>
                <col span="1">
                <col span="1">
                <col span="1">
                <col span="1">
                <col span="1">
            </colgroup>
            <thead>
                <tr>
                    <th scope="col">GROUP</th>
                    <th scope="col">Discussion</th>
                    <th scope="col">Challenge</th>
                    <th scope="col">Suggestion</th>
                    <th scope="col">Summary</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </section>
`;

export default template;