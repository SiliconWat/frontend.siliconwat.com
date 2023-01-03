import "./components/sw-header/element.mjs";

import "./components/sw-main/sw-learn/element.mjs";
import "./components/sw-main/sw-practice/element.mjs";
import "./components/sw-main/sw-review/element.mjs";
import "./components/sw-main/sw-home/element.mjs";

import "./components/sw-footer/element.mjs";
import "./components/sw-progress/element.mjs";
import "./components/sw-music/element.mjs";

import "./components/sw-main/element.mjs";

import { BACKGROUND, getGitHub } from "/global.mjs";
document.querySelector('sw-main').addEventListener("sw-main", async event => {
    if (!window.TESTING) window.clearCache();
    const github = await getGitHub();

    await event.detail.element.render(github);
    document.documentElement.style.backgroundImage = BACKGROUND;
    document.body.style.display = 'flex';
    await document.querySelector('sw-header').render(github);
    await document.querySelector('sw-progress').render(github);
    document.querySelector('sw-footer').render();
});

// window.onload = async () => {
//     if (!window.TESTING) window.clearCache();
//     const github = await getGitHub();
    
//     await document.querySelector('sw-main').render(github);
//     document.documentElement.style.backgroundImage = BACKGROUND;
//     document.body.style.display = 'flex';
//     await document.querySelector('sw-header').render(github);
//     await document.querySelector('sw-progress').render(github);
//     document.querySelector('sw-footer').render();
// };

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-ZGWZ1ZWQKX');