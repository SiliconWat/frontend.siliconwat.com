import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-home/sw-github/shadow.css">
    <aside>
        <section>
            <div>
                <p>This course can be self-paced for self-motivated students.</p>
                <p>However, if you prefer more structure, consider joining my Remote Cohort Program to study alongside other students!</p>
                <p>It costs just $100 but also requires a commitment loan of 100 SW Coins to attract only the most serious students.</p>
                <p>And to motivate you and your classmates to finish the entire course, 200 SW Coins will be rewarded upon completion!</p>
            </div>
            <figure>
                <h3>Total Students: <span></span></h3>
                <h3>Successfully Passed: <span></span></h3>
                grades are pass / no pass only
                chapter assignemnts = 70% to pass
                exact scores will be recorded
            </figure>
        </section>
        <section>
            <a>
                <img>
                <h2></h2>
            </a>
            <table>student's grades per chapter</table>
            <table>stduents' grades per chapter</table>
        </section>
    </aside>
`;

export default template;