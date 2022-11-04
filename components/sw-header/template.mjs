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
        <nav>
            <ul>
                <li>
                    <h3>Unit 1</h3>
                    <div>
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
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Unit 2</h3>
                    <div>
                        <a href="#Backend.SiliconWat.org"><button class="cohort">Join: Remote Cohort Backend Program</button></a>
                        <h4>Learn</h4>
                        <menu>
                            <li><a>Watch Videos on Udemy</a></li>
                            <li><a>Read Textbook on Medium</a></li>
                            <li><a>Take Quizzes to Check Understanding</a></li>
                        </menu>
                        <h4>Practice</h4>
                        <menu>
                            <li><a>Podcast: Motivation & Coding Music</a></li>
                            <li><a>Interactive Coding Exercises</a></li>
                            <li class="cohort"><a>Remote Pair Programming on Discord</a></li>
                            <li class="cohort"><a>Students' Solo Projects on Replit</a></li>
                        </menu>
                        <h4>Review</h4>
                        <menu>
                            <li><a>Live Demo: Music Apps</a></li>
                            <li><a>Syntax Flashcards</a></li>
                            <li class="cohort"><a>Group Chat & Discussion Boards</a></li>
                            <li class="cohort"><a>Students' Writings on Medium</a></li>
                            <li class="cohort"><a>Mock Interviews on YouTube</a></li>
                        </menu>
                        <h4>Bonus: Advanced Lessons</h4>
                        <menu>
                            <li><a>Quantum Physics & Computing</a></li>
                            <li><a>Kiitos Programming Language</a></li>
                        </menu>
                        <br>
                        <a href="#Backend.SiliconWat.com"><button>eLearn: Backend Blockchain Course</button></a>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Unit 3</h3>
                    <div>
                        <a href="#iOS.SiliconWat.org"><button class="cohort">Join: Remote Cohort iOS Program</button></a>
                        <h4>Learn</h4>
                        <menu>
                            <li><a>Watch Videos on Udemy</a></li>
                            <li><a>Read Textbook on Medium</a></li>
                            <li><a>Take Quizzes to Check Understanding</a></li>
                        </menu>
                        <h4>Practice</h4>
                        <menu>
                            <li><a>Podcast: Motivation & Coding Music</a></li>
                            <li><a>Interactive Coding Exercises</a></li>
                            <li class="cohort"><a>Remote Pair Programming on Discord</a></li>
                            <li class="cohort"><a>Students' Solo Projects on GitHub</a></li>
                        </menu>
                        <h4>Review</h4>
                        <menu>
                            <li><a>Live Demo: Music Apps</a></li>
                            <li><a>Syntax Flashcards</a></li>
                            <li class="cohort"><a>Group Chat & Discussion Boards</a></li>
                            <li class="cohort"><a>Students' Writings on Medium</a></li>
                            <li class="cohort"><a>Mock Interviews on YouTube</a></li>
                        </menu>
                        <h4>Bonus: Advanced Lessons</h4>
                        <menu>
                            <li><a>React Native</a></li>
                            <li><a>3D Animations</a></li>
                            <li><a>Deep Learning</a></li>
                        </menu>
                        <br>
                        <a href="#iOS.SiliconWat.com"><button>eLearn: iOS Metaverse Course</button></a>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Unit 4</h3>
                    <div>
                        <a><button>Earn SW Coins</button></a>
                        <h4>Awards</h4>
                        <menu>
                            <li class="cohort"><a>Course Completion Certification</a></li>
                            <li class="cohort"><a>Graduation Diploma</a></li>
                        </menu>
                        <h4>Rewards</h4>
                        <menu>
                            <li class="cohort"><a>Committment Deposit Refund</a></li>
                            <li class="cohort"><a>Course Completion Bonus</a></li>
                            <li class="cohort"><a>Graduation Mega Bonus</a></li>
                        </menu>
                        <h4>Benefits</h4>
                        <menu>
                            <li class="cohort"><a>Mock Technical Interviews</a></li>
                            <li class="cohort"><a>Campus Apprenticeship Program</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Unit 5</h3>
                    <div>
                        <a><button>Apply for Discounts</button></a>
                        <h4>Inclusion & Diversity</h4>
                        <menu>
                            <li><a>Women & Minorities</a></li>
                            <li><a>Ukrainian Refugees</a></li>
                            <li><a>Cambodian Genocide</a></li>
                        </menu>
                        <h4>Campuses</h4>
                        <menu>
                            <li><a>Cambodia</a></li>
                            <li><a>Ukraine</a></li>
                            <li><a>United States</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Bonus Unit 6</h3>
                    <div>
                        <a><button>Apply for Discounts</button></a>
                        <h4>Inclusion & Diversity</h4>
                        <menu>
                            <li><a>Women & Minorities</a></li>
                            <li><a>Ukrainian Refugees</a></li>
                            <li><a>Cambodian Genocide</a></li>
                        </menu>
                        <h4>Campuses</h4>
                        <menu>
                            <li><a>Cambodia</a></li>
                            <li><a>Ukraine</a></li>
                            <li><a>United States</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Bonus Unit 7</h3>
                    <div>
                        <a><button>Apply for Discounts</button></a>
                        <h4>Inclusion & Diversity</h4>
                        <menu>
                            <li><a>Women & Minorities</a></li>
                            <li><a>Ukrainian Refugees</a></li>
                            <li><a>Cambodian Genocide</a></li>
                        </menu>
                        <h4>Campuses</h4>
                        <menu>
                            <li><a>Cambodia</a></li>
                            <li><a>Ukraine</a></li>
                            <li><a>United States</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
        </nav>
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