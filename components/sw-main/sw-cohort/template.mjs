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
            <caption>assignemnts vs students</caption>
            <thead>
                <tr>
                    <th scope="col">Student</th>
                    <th scope="col">Discussion</th>
                    <th scope="col">Challenge</th>
                    <th scope="col">Suggestion</th>
                    <th scope="col">Summary</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
        <table>
            <caption>assignemnts vs graders</caption>
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
                    <th scope="row">Score</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </tfoot>
        </table>
        <table>
            <caption>assignemnts vs group members</caption>
            <thead>
                <tr>
                    <th scope="col">Group</th>
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