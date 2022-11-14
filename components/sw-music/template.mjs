const template = document.createElement("template");
const origin = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5531" : "https://frontend.siliconwat.com";

template.innerHTML = `
    <link rel="stylesheet" href="${origin}/components/sw-music/shadow.css">
    <aside>
        <svg viewBox="0 0 10 10" width="0">
            <defs>
                <radialGradient id="gradient">
                    <stop offset="80%" stop-color="yellow" />
                    <stop offset="100%" stop-color="white" />
                </radialGradient>
            </defs>
            <circle cx="5" cy="5" r="5" fill="url('#gradient')" />
            <text x="5" y="7" text-anchor="middle">♫</text>
        </svg>
        <iframe src="https://music.thonly.org/?embed=1" width="0" height="0" frameborder="0"></iframe>
    </aside>
`;

export default template;