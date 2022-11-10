const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-home/shadow.css">
    <main>
        <header>
            <h1><a href="https://medium.com/siliconwat/a-complete-frontend-developer-textbook-for-beginners-3be48c1f07?sk=351a90e15ab63ee815dda3f3a395f843">A Complete Frontend Developer Course for Beginners<br/>(2023 Edition)</a></h1>
        </header>
        <section>
            <h2>Learn</h2>
            <span>📖</span>
            <ul>
                <li>You can watch <strong>Lecture Videos</strong> with <em>subtitles</em> at 6 different <em>speeds</em></li>
                <li>You can read corresponding <strong>Textbook Chapters</strong> with helpful <em>diagrams</em> and <em>side notes</em></li>
                <li>You can take corresponding <strong>Quizzes</strong> to check your <em>understanding</em></li>
            </ul>
        </section>
        <section>
            <h2>Practice</h2>
            <span>💻</span>
        </section>
        <section>
            <h2>Review</h2>
            <span>👩🏼‍💻</span>
        </section>
        <footer>
            <p>From here, you can read the entire course textbook on Medium for <strong>free!</strong></p>
            <p>If you like Medium and use our <a href="https://medium.com/@thonly/membership">referral link</a> to join, we will give you a special coupon to get ALL our <a href="https://siliconwat.com">Udemy courses</a> for <strong>90% OFF</strong> for Life!</p>
            <p>If you’re already a Medium member or don't like it, please consider donating to <a href="https://github.com/sponsors/SiliconWat">@SiliconWat</a> to receive the same discount!</p>
        </footer>
    </main>
`;

export default template;