import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-auth/shadow.css">
    <aside>
        <iframe width="0" height="0" frameborder="0"></iframe>
    </aside>
`;

export default template;