import { ORIGIN, THONLY } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-footer/shadow.css">
    <link rel="stylesheet" href="${ORIGIN}/components/sw-footer/shadow.css">
    <nav>
        <main>
            <section>
                <sw-donors></sw-donors>
            </section>
            <section>
                <div>
                    <h5>Thank</h5>
                    <ul>
                        <li><a href="https://dear.kiitos.earth/#SiliconWat">Kiitos</a></li>
                    </ul> 
                </div>
                <div>
                    <h5>Donate</h5>
                    <ul>
                        <li><a href="https://heartbank.fund/#SiliconWat">HeartBank</a></li>
                        <li><a href="https://github.com/sponsors/SiliconWat">GitHub</a></li>
                        <li><a href="https://medium.com/@thonly/membership">Medium</a></li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h5>Live Demos</h5>
                    <ul id="frontend">
                        <li><a href="https://music.siliconwat.dev">Music PWA</a></li>
                        <li><a href="https://music.siliconwat.org">Music School</a></li>
                        <!--<li><a href="https://music.siliconwat.com">Coding Music</a></li>-->
                    </ul>
                    <ul id="backend">
                        <li><a>Blockchain Wallet</a></li>
                    </ul>
                    <ul id="ios">
                        <li><a>3D AI NPC</a></li>
                    </ul> 
                </div>
                <div>
                    <h5>Remote Jobs</h5>
                    <ul>
                        <li><a href="https://alumni.siliconwat.org">Volunteer Tutor</a></li>
                        <li><a href="https://siliconwat.dev/#earn">Paid Freelancer</a></li>
                        <li><a href="https://calendar.thonly.org/#interview">Apply for Interview</a></li>
                    </ul>
                </div>
            </section>
        </main>
        <footer>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="ru" disabled>Russian</option>
                <!--<option value="es" disabled>Spanish</option>
                <option value="zh" disabled>Chinese</option>-->
            </select>
            <small><a href="https://siliconwat.com">Silicon Wat University</a> &copy; 2023</small>
        </footer>
    </nav>
`;

export default template;