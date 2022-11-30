import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-cohort/shadow.css">
    <section id="course">
        <p>grades are pass / no pass only</p>
        <p>chapter assignemnts = 70% to pass</p>
        <p>exact score and rank will be recorded and rewarded proportinaly </p>
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