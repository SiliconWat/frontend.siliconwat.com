import { FRONTEND } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${FRONTEND}/components/sw-header/sw-bar/shadow.css">
    <svg viewBox="0 0 100 8">
        <!-- Bottom Layer -->
        <rect x="0" y="0" width="100" height="8" fill="#e0e5ee" stroke="#e0e5ee" stroke-width="2"/>
        <!-- Middle Layer -->
        <rect id="bar" x="0" y="0" width="100" height="8" fill="#f2b134"/> <!-- transform="translate(-80, 0)" -->
        <!-- Top Layer -->
        <rect x="0" y="0" width="100" height="8" fill="transparent" stroke="grey" stroke-width="2" stroke-opacity="0.3"/>
        <text id="fraction" text-anchor="middle" x="8" y="5.5" fill="black" opacity="0.5" font-size="3.5" font-weight="normal"></text>
        <text id="percent" text-anchor="middle" x="93" y="5.5" fill="black" opacity="0.5" font-size="3.5" font-weight="bold"></text>
    </svg>
`;

export default template;