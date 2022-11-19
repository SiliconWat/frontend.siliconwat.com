import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/sw-students/shadow.css">
    TODO: student body stats: number enrolled, number passed?
`;

export default template;