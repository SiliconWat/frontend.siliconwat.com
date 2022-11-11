const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/sw-hero/shadow.css">
    <main>
        <header>
            <h1><slot name="h1"></slot></h1>
            <h2><slot name="h2"></slot></h2>
        </header>
        <section>
            <h2>Learn</h2>
            <span>📖</span>
            <ul>
                <slot name="learn"></slot>
            </ul>
            <button>Done</button>
        </section>
        <section>
            <h2>Practice</h2>
            <span>💻</span>
            <ul>
               <slot name="practice"></slot> 
            </ul>
            <button>Done</button>
        </section>
        <section>
            <h2>Review</h2>
            <span>👩🏼‍💻</span>
            <ul>
               <slot name="review"></slot> 
            </ul>
            <button>Done</button>
        </section>
        <footer>
            <p>From here, you can read the entire course textbook on Medium for <strong>free!</strong></p>
            <p>If you like Medium and use our <a href="https://medium.com/@thonly/membership">referral link</a> to join, we will give you a special coupon to get ALL our <a href="https://siliconwat.com">Udemy courses</a> for <strong>90% OFF</strong> for Life!</p>
            <p>If you’re already a Medium member or don't like Medium, please consider donating to <a href="https://github.com/sponsors/SiliconWat">@SiliconWat</a> to receive the same discount!</p>
        </footer>
    </main>
`;

export default template;