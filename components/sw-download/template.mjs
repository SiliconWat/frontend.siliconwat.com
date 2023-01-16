import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-download/shadow.css">
    <footer>
        <p>To teach you only the most <strong>up-to-date</strong> information, this course is <strong>remastered</strong> every three years.</p>
		<p><a href="https://twitter.com/siliconwat">Follow me on Twitter</a> for real-time updates!</p>
    </footer>
`;

export default template;