import "./sw-code/element.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-practice/shadow.css">
    <h1></h1>
    <h2>Todo #4. Interactive Coding Exercises</h2>
    <sw-code></sw-code>
`;

export default template;