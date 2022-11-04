const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-music/shadow.css">
    <aside>
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
        <iframe src="https://music.thonly.org/?embed=1"></iframe>
    </aside>
`;

export default template;