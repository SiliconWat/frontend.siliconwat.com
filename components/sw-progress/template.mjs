const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-progress/shadow.css">
    <svg viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="54" fill="none" stroke="blue" stroke-width="12"/>
        <circle class="percent" cx="60" cy="60" r="54" fill="none" stroke="white" stroke-width="12" pathLength="100"/>
        <text text-anchor="middle" x="60" y="70" fill="white" transform="rotate(90, 60, 60)" font-size="25" font-weight="bold">90%</text>
    </svg>
`;

export default template;