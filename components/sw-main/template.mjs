import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

// Reference: https://codepen.io/xenohawk/pen/yLBpoRe

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/sw-main/shadow.css">
    <svg viewBox="0 0 730 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="background-illustration">
        <path id="Vector" opacity="0.07" d="M729.7 452.537C717 445.137 707.8 444.937 702.1 451.937C696.4 458.837 693.6 470.537 693.6 487.037V575.937C693.6 592.837 692 606.837 688.9 617.937C685.8 629.437 680.5 637.637 673.2 642.437C666.1 647.337 656.5 648.637 644.3 646.337C632.4 644.137 617.5 637.937 599.7 627.637L591.2 622.737V552.737L601.8 558.837C614.5 566.237 623 567.137 627.3 561.737C631.8 556.537 634.1 545.637 634.1 529.137V450.837C634.1 430.437 636.1 414.337 640.1 402.437C644.1 390.537 652 383.037 663.9 379.637C652 362.537 644.1 345.837 640.1 329.437C636.1 313.037 634.2 294.637 634.2 274.237V195.937C634.2 179.437 631.9 166.037 627.4 155.537C623.2 145.237 614.7 136.437 601.9 129.037L591.3 122.937V52.9371L599.8 57.8371C617.6 68.1371 632.5 79.0371 644.4 90.6371C656.6 102.337 666.2 114.837 673.3 127.937C680.7 141.237 685.9 155.437 689 170.537C692.1 185.237 693.7 201.137 693.7 217.937V306.837C693.7 323.337 696.5 338.337 702.2 351.737C707.9 365.237 717.1 375.637 729.8 382.937L729.7 452.537Z" fill="url(#paint0_linear)"/>
        <path id="Vector_2" opacity="0.07" d="M407.2 195.037C419.9 202.437 429.1 202.637 434.8 195.637C440.5 188.737 443.3 177.037 443.3 160.537V71.6371C443.3 54.7371 444.9 40.7371 448 29.6371C451.1 18.1371 456.2 9.83714 463.3 4.93714C470.7 0.137143 480.3 -1.16286 492.2 1.03714C504.4 3.33714 519.4 9.63714 537.2 19.9371L545.7 24.8371V94.8371L535.1 88.7371C522.4 81.3371 513.7 80.3371 509.2 85.5371C505 90.9371 502.8 101.837 502.8 118.337V196.637C502.8 217.037 500.8 233.137 496.8 245.037C492.8 256.837 484.9 264.437 473 267.837C484.9 284.937 492.8 301.637 496.8 318.037C500.8 334.437 502.7 352.837 502.7 373.237V451.537C502.7 468.037 504.8 481.437 509.1 491.737C513.6 502.237 522.3 511.137 535 518.437L545.6 524.537V594.537L537.1 589.637C519.3 579.337 504.3 568.337 492.1 556.637C480.2 545.037 470.6 532.637 463.2 519.337C456.1 506.237 451 492.137 447.9 476.937C444.8 462.237 443.2 446.337 443.2 429.537V340.637C443.2 324.137 440.4 309.137 434.7 295.737C429 282.237 419.8 271.837 407.1 264.537L407.2 195.037Z" fill="url(#paint1_linear)"/>
        <path id="Vector_3" opacity="0.4" d="M689.7 482.537C677 475.137 667.8 474.937 662.1 481.937C656.4 488.837 653.6 500.537 653.6 517.037V605.937C653.6 622.837 652 636.837 648.9 647.937C645.8 659.437 640.5 667.637 633.2 672.437C626.1 677.337 616.5 678.637 604.3 676.337C592.4 674.137 577.5 667.937 559.7 657.637L551.2 652.737V582.737L561.8 588.837C574.5 596.237 583 597.137 587.3 591.737C591.8 586.537 594.1 575.637 594.1 559.137V480.837C594.1 460.437 596.1 444.337 600.1 432.437C604.1 420.537 612 413.037 623.9 409.637C612 392.537 604.1 375.837 600.1 359.437C596.1 343.037 594.2 324.637 594.2 304.237V225.937C594.2 209.437 591.9 196.037 587.4 185.537C583.2 175.237 574.7 166.437 561.9 159.037L551.3 152.937V82.9371L559.8 87.8371C577.6 98.1371 592.5 109.037 604.4 120.637C616.6 132.337 626.2 144.837 633.3 157.937C640.7 171.237 645.9 185.437 649 200.537C652.1 215.237 653.7 231.137 653.7 247.937V336.837C653.7 353.337 656.5 368.337 662.2 381.737C667.9 395.237 677.1 405.637 689.8 412.937L689.7 482.537Z" fill="url(#paint2_linear)"/>
        <path id="Vector_4" opacity="0.4" d="M367.2 225.037C379.9 232.437 389.1 232.637 394.8 225.637C400.5 218.737 403.3 207.037 403.3 190.537V101.637C403.3 84.7371 404.9 70.7371 408 59.6371C411.1 48.1371 416.2 39.8371 423.3 34.9371C430.7 30.1371 440.3 28.8371 452.2 31.0371C464.4 33.3371 479.4 39.6371 497.2 49.9371L505.7 54.8371V124.837L495.1 118.737C482.4 111.337 473.7 110.337 469.2 115.537C465 120.937 462.8 131.837 462.8 148.337V226.637C462.8 247.037 460.8 263.137 456.8 275.037C452.8 286.837 444.9 294.437 433 297.837C444.9 314.937 452.8 331.637 456.8 348.037C460.8 364.437 462.7 382.837 462.7 403.237V481.537C462.7 498.037 464.8 511.437 469.1 521.737C473.6 532.237 482.3 541.137 495 548.437L505.6 554.537V624.537L497.1 619.637C479.3 609.337 464.3 598.337 452.1 586.637C440.2 575.037 430.6 562.637 423.2 549.337C416.1 536.237 411 522.137 407.9 506.937C404.8 492.237 403.2 476.337 403.2 459.537V370.637C403.2 354.137 400.4 339.137 394.7 325.737C389 312.237 379.8 301.837 367.1 294.537L367.2 225.037Z" fill="url(#paint3_linear)"/>
        <path id="Vector_5" opacity="0.15" d="M145.2 12.2372L316.1 110.937L316 520.237L145.1 421.537L145.2 12.2372Z" fill="url(#paint4_linear)"/>
        <path id="BtnLeft" d="M113.1 75.1372L249 153.637V191.337L113.1 112.837V75.1372Z" fill="#F2C94C"/>
        <path id="Vector_6" opacity="0.15" d="M166.3 238.737L296.9 314.137V372.737L166.3 297.337V238.737Z" fill="white"/>
        <path id="Vector_7" opacity="0.15" d="M166.2 167.837L297 243.337V256.937L166.2 181.537V167.837Z" fill="white"/>
        <path id="Vector_8" opacity="0.15" d="M166.2 194.437L279.3 259.737V273.337L166.2 208.037V194.437Z" fill="white"/>
        <path id="Vector_9" opacity="0.2" d="M145.2 12.2372L316.1 110.937V165.837L145.2 67.1372V12.2372Z" fill="url(#paint5_linear)"/>
        <path id="Vector_10" opacity="0.2" d="M187.9 64.6372C187.9 72.9372 183 76.8372 177 73.4372C171 69.9372 166.2 60.4372 166.2 52.1372C166.2 43.8372 171.1 39.9372 177.1 43.3372C183 46.8372 187.9 56.3372 187.9 64.6372Z" fill="white"/>
        <path id="Vector_11" opacity="0.15" d="M355.2 391.737L526.1 490.437L526 899.737L355.1 801.037L355.2 391.737Z" fill="url(#paint6_linear)"/>
        <path id="BtnRight" d="M420.3 510.837L556.2 589.237V626.837L420.2 548.437L420.3 510.837Z" fill="#F2994A"/>
        <path id="Vector_12" opacity="0.15" d="M376.3 549.737L507 625.237V683.737L376.3 608.237V549.737Z" fill="white"/>
        <path id="Vector_13" opacity="0.15" d="M376.1 633.337L506.9 708.837V722.437L376.1 647.037V633.337Z" fill="white"/>
        <path id="Vector_14" opacity="0.15" d="M376.1 657.937L489.2 723.237V736.837L376.1 671.537V657.937Z" fill="white"/>
        <path id="Vector_15" opacity="0.2" d="M355.2 391.737L526.1 490.437V545.337L355.2 446.637V391.737Z" fill="url(#paint7_linear)"/>
        <path id="Vector_16" opacity="0.2" d="M397.9 444.237C397.9 452.537 393 456.437 387 453.037C381 449.537 376.2 440.037 376.2 431.737C376.2 423.437 381.1 419.537 387.1 422.937C393 426.337 397.9 435.937 397.9 444.237Z" fill="white"/>
        <g id="Msg">
        <path id="Vector_17" opacity="0.3" d="M325.6 448.437L28.1001 276.737L28.2001 431.837L299.5 588.437L325.8 627.337L325.6 448.437Z" fill="url(#paint8_linear)"/>
        <path id="Vector_18" opacity="0.15" d="M249.1 442.037L183.9 404.437V418.037L249.1 455.637V442.037Z" fill="white"/>
        <path id="Vector_19" opacity="0.15" d="M249.1 469.337L87.7002 376.137V389.737L249.2 482.937L249.1 469.337Z" fill="white"/>
        <path id="Vector_20" opacity="0.15" d="M249.2 496.637L54.3003 384.137V397.737L249.2 510.237V496.637Z" fill="white"/>
        <path id="Vector_21" d="M265.2 465.537C265.2 478.337 272.8 493.037 282.1 498.437C291.4 503.837 299 497.837 299 485.037C299 472.237 291.4 457.537 282.1 452.137C272.7 446.737 265.2 452.737 265.2 465.537Z" fill="#F2994A"/>
        </g>
        <path id="Vector_22" opacity="0.15" d="M57.5001 167.837L18.1001 145.037V131.737L57.5001 154.537C60.7001 156.437 65.4001 160.137 69.4001 165.937C73.7001 172.137 76.8001 179.937 76.8001 188.437C76.8001 197.837 74.4001 203.137 69.9001 204.737C65.6001 206.137 60.6001 203.737 57.5001 201.937L41.3001 192.537L41.2001 192.437C39.8001 191.637 37.6001 190.837 35.9001 191.337C34.5001 191.737 32.8001 193.237 32.8001 198.437C32.8001 203.637 34.4001 206.837 35.8001 208.737C37.5001 211.137 39.7001 212.837 41.1001 213.537L41.3001 213.637L90.9001 242.237V255.537L41.6001 227.037C38.2001 225.237 33.3001 221.537 29.1001 215.637C24.5001 209.137 21.3001 200.937 21.3001 191.737C21.3001 182.637 24.5001 177.937 29.0001 176.637C33.2001 175.437 38.1001 177.237 41.5001 179.237L57.6001 188.537C59.9001 189.837 61.7001 190.437 62.8001 190.037C63.7001 189.737 65.3001 188.437 65.3001 181.737C65.3001 177.337 63.9001 174.537 62.5001 172.537C60.9001 170.337 58.8001 168.537 57.5001 167.837Z" fill="white"/>
        <path id="Vector_23" d="M29.8 146.437C29.8 157.837 23.1 163.137 14.9 158.437C6.7 153.737 0 140.637 0 129.237C0 117.837 6.7 112.537 14.9 117.237C23.1 122.037 29.8 135.137 29.8 146.437Z" fill="#F2C94C"/>
        <path id="Vector_24" d="M108.8 256.437C108.8 267.837 102.1 273.137 93.9 268.437C85.7 263.737 79 250.637 79 239.237C79 227.837 85.7 222.537 93.9 227.237C102.1 232.037 108.8 245.137 108.8 256.437Z" fill="#F2C94C"/>
        <path id="Plus" opacity="0.2" d="M215.1 604.137C221.1 607.637 225.9 615.937 225.9 622.937V653.437L246.1 665.037C252.1 668.537 256.9 676.837 256.9 683.837C256.9 690.737 252 693.537 246.1 690.137L225.9 678.537V709.037C225.9 715.937 221 718.737 215.1 715.337C209.1 711.837 204.3 703.537 204.3 696.537V666.037L184.1 654.437C178.1 650.937 173.3 642.637 173.3 635.637C173.3 628.737 178.2 625.937 184.1 629.337L204.3 640.937V610.437C204.3 603.437 209.1 600.637 215.1 604.137Z" fill="url(#paint9_linear)"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear" x1="792.614" y1="73.1556" x2="545.984" y2="500.603" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="674.027" y1="2.88395" x2="427.396" y2="430.332" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint2_linear" x1="752.614" y1="103.156" x2="505.984" y2="530.603" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint3_linear" x1="634.026" y1="32.8838" x2="387.396" y2="460.332" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint4_linear" x1="319.201" y1="112.69" x2="155.933" y2="395.554" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint5_linear" x1="203.837" y1="13.0729" x2="255.85" y2="160.55" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint6_linear" x1="529.193" y1="492.215" x2="365.925" y2="775.079" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint7_linear" x1="413.829" y1="392.598" x2="465.842" y2="540.075" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint8_linear" x1="260.732" y1="386.369" x2="107.081" y2="506.673" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="paint9_linear" x1="235.959" y1="643.1" x2="183.587" y2="684.405" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        </defs>
    </svg>
    <slot></slot>
    <footer>
        <p>If you’re already a Medium member or don't like Medium, please consider <strong>donating</strong> to <a href="https://github.com/sponsors/SiliconWat">@SiliconWat</a> to receive the same <strong>Udemy discount</strong>!</p>
    </footer>
`;

export default template;