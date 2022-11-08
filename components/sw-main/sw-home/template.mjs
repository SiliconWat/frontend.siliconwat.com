import "./sw-card/element.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-home/shadow.css">
    <header>
        <h1></h1>
        <h2></h2>
    </header>
    <main>
        <sw-card></sw-card>
        <sw-card></sw-card>
        <sw-card></sw-card>
    </main>
`;

export default template;