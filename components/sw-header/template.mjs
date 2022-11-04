import "./sw-bar/element.mjs";

const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="/"><img src="siliconwat.png"></a>
            <a href="/"><h1>Frontend Music Course</h1></a>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <ul>
            <li>
                <h3>Unit 1</h3>
                <nav>
                    <h2>HTML/CSS/JS Orchestra</h2>
                    <sw-bar></sw-bar>
                    <h4>Chapter 1: Hello World</h4>
                    <menu>
                        <li class="learn">
                            <input id="learn-chapter1" type="checkbox" oninput="checkMark(this)">
                            <a href="#learn-chapter1">Learn</a>
                        </li>
                        <li class="practice">
                            <input id="practice-chapter1" type="checkbox" oninput="checkMark(this)">
                            <a href="#practice-chapter1">Practice</a>
                        </li>
                        <li class="review">
                            <input id="review-chapter1" type="checkbox" oninput="checkMark(this)">
                            <a href="#review-chapter1">Review</a>
                        </li>
                    </menu>
                    <h4>Chapter 2: JavaScript Console</h4>
                    <menu>
                        <li class="learn">
                            <input id="learn-chapter2" type="checkbox" oninput="checkMark(this)">
                            <a href="#learn-chapter2">Learn</a>
                        </li>
                        <li class="practice">
                            <input id="practice-chapter2" type="checkbox" oninput="checkMark(this)">
                            <a href="#practice-chapter2">Practice</a>
                        </li>
                        <li class="review">
                            <input id="review-chapter2" type="checkbox" oninput="checkMark(this)">
                            <a href="#review-chapter2">Review</a>
                        </li>
                    </menu>
                    <h4>Chapter 3: Tree Structures in HTML, CSS and JavaScript</h4>
                    <menu>
                        <li class="learn">
                            <input id="learn-chapter3" type="checkbox" oninput="checkMark(this)">
                            <a href="#learn-chapter3">Learn</a>
                        </li>
                        <li class="practice">
                            <input id="practice-chapter3" type="checkbox" oninput="checkMark(this)">
                            <a href="#practice-chapter3">Practice</a>
                        </li>
                        <li class="review">
                            <input id="review-chapter3" type="checkbox" oninput="checkMark(this)">
                            <a href="#review-chapter3">Review</a>
                        </li>
                    </menu>
                    <h4>Chapter 4: Importing CSS Code</h4>
                    <menu>
                        <li class="learn">
                            <input id="learn-chapter4" type="checkbox" oninput="checkMark(this)">
                            <a href="#learn-chapter4">Learn</a>
                        </li>
                        <li class="practice">
                            <input id="practice-chapter4" type="checkbox" oninput="checkMark(this)">
                            <a href="#practice-chapter4">Practice</a>
                        </li>
                        <li class="review">
                            <input id="review-chapter4" type="checkbox" oninput="checkMark(this)">
                            <a href="#review-chapter4">Review</a>
                        </li>
                    </menu>
                    <h4>Chapter 5: Importing JavaScript Code</h4>
                    <menu>
                        <li class="learn">
                            <input id="learn-chapter5" type="checkbox" oninput="checkMark(this)">
                            <a href="#learn-chapter5">Learn</a>
                        </li>
                        <li class="practice">
                            <input id="practice-chapter5" type="checkbox" oninput="checkMark(this)">
                            <a href="#practice-chapter5">Practice</a>
                        </li>
                        <li class="review">
                            <input id="review-chapter5" type="checkbox" oninput="checkMark(this)">
                            <a href="#review-chapter5">Review</a>
                        </li>
                    </menu>
                </nav>
            </li>
        </ul>
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