import "./sw-bar/element.mjs";
const origin = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5500" : "https://thonly.org";

const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${origin}/components/tl-header/shadow.css">
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="https://siliconwat.com"><img src="siliconwat.png"></a>
            <a href="#"><h1>Frontend Music Course</h1></a>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <ul></ul>
        <aside>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="es" disabled>Spanish</option>
                <option value="ru" disabled>Russian</option>
                <option value="zh" disabled>Chinese</option>
            </select>
        </aside>
    </header>
`;

export default template;