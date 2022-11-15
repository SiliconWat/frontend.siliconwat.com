export const ORIGIN = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5500" : "https://thonly.org";
export const FRONTEND = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5531" : "https://frontend.siliconwat.com";

export const TRILOGY = (() => {
    if (window.location.port === "5531" || window.location.hostname === "frontend.siliconwat.com") return ['Frontend', 'Course', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5531" : "https://frontend.siliconwat.com"];
    if (window.location.port === "5532" || window.location.hostname === "backend.siliconwat.com") return ['Backend', 'Course', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5532" : "https://backend.siliconwat.com"];
    if (window.location.port === "5533" || window.location.hostname === "ios.siliconwat.com") return ['iOS', 'Course', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5533" : "https://ios.siliconwat.com"];

    if (window.location.port === "5541" || window.location.hostname === "frontend.siliconwat.org") return ['Frontend', 'Cohort', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5531" : "https://frontend.siliconwat.com"];
    if (window.location.port === "5542" || window.location.hostname === "backend.siliconwat.org") return ['Backend', 'Cohort', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5532" : "https://backend.siliconwat.com"];
    if (window.location.port === "5543" || window.location.hostname === "ios.siliconwat.org") return ['iOS', 'Cohort', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5533" : "https://ios.siliconwat.com"];
})();