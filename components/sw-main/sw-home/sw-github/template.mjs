import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-home/sw-github/shadow.css">
    <aside>
        <section>
            <p>This course can be self-paced for self-motivated students.</p>
            <p>However, if you prefer more structure, consider joining my Remote Cohort Program to study alongside other students!</p>
            <p>It costs just $50 but also requires a commitment loan of 100 SW Coins to attract only the most serious students.</p>
            <p>And to motivate you and your classmates to finish the entire course, 50 SW Coins will be rewarded upon completion!</p>
        </section>
        <section>
            <a>
                <img>
                <h2></h2>
            </a>
        </section>
    </aside>
`;

export default template;