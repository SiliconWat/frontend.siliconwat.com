const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-music/shadow.css">
    <svg viewBox="0 0 10 10">
        <defs>
            <radialGradient id="gradient">
            <stop offset="80%" stop-color="yellow" />
            <stop offset="100%" stop-color="white" />
            </radialGradient>
        </defs>
        <circle cx="5" cy="5" r="5" fill="url('#gradient')" />
        <text x="5" y="6.5" text-anchor="middle">🎵</text>
    </svg>
    <span>Coding Music Podcast (coming soon)</span>
`;

export default template;