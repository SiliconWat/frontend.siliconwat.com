// current
const YEAR = 2023;
const TERM = "semester-summer";

export const ORIGIN = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5531" : "https://frontend.siliconwat.com";
export const THONLY = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5500" : "https://thonly.org";
export const AUTH = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5599" : "https://auth.siliconwat.com";
export const CAMPUS = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5540" : "https://siliconwat.org";

export const TRILOGY = (() => {
    if (window.location.port === "5531" || window.location.hostname === "frontend.siliconwat.com") return ['Frontend', 'Course', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5531" : "https://frontend.siliconwat.com"];
    if (window.location.port === "5532" || window.location.hostname === "backend.siliconwat.com") return ['Backend', 'Course', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5532" : "https://backend.siliconwat.com"];
    if (window.location.port === "5533" || window.location.hostname === "ios.siliconwat.com") return ['iOS', 'Course', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5533" : "https://ios.siliconwat.com"];

    if (window.location.port === "5541" || window.location.hostname === "frontend.siliconwat.org") return ['Frontend', 'Cohort', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5531" : "https://frontend.siliconwat.com"];
    if (window.location.port === "5542" || window.location.hostname === "backend.siliconwat.org") return ['Backend', 'Cohort', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5532" : "https://backend.siliconwat.com"];
    if (window.location.port === "5543" || window.location.hostname === "ios.siliconwat.org") return ['iOS', 'Cohort', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5533" : "https://ios.siliconwat.com"];
})(); 

export async function getGitHub() {
    const github = JSON.parse(localStorage.getItem('github')) || {};
    if (github.login) {
        const data = await fetch(`https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/main/Students.json`, { cache: "no-store" });
        const students = await data.json();
        github.student = students[github.login];
    } 
    return github;
}

export async function getYear() {
    const github = await getGitHub();
    return localStorage.getItem('year') || github.student ? github.student.cohorts[0].year : YEAR;
}

export function getTerm(github) {
    const term = localStorage.getItem('term') || github.student ? `${github.student.cohorts[0].term}-${github.student.cohorts[0].season}` : TERM;
    return [term, ...term.split('-')];
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export async function getWeeks(cohort, w) {
    const term = getTerm(await getGitHub());
    const date = new Date(await getYear(), cohort[term[1]][term[2]].start[0], cohort[term[1]][term[2]].start[1]);

    const start = new Date(date);
    if (term[0] === 'quarter') start.setDate(date.getDate() + 7*(w-1))
    else start.setDate(date.getDate() + 7*(w-1)*2);

    const end = new Date(start);
    if (term[0] === 'quarter') end.setDate(start.getDate() + 6)
    else end.setDate(start.getDate() + 7*2 - 1);

    return `${months[start.getMonth()]} ${start.getDate()} - ${months[end.getMonth()]} ${end.getDate()}`;
}

export function getUnit(units, c) {
    for (let u = 0; u < units.length; u++) {
        if (units[u].from <= c && c <= units[u].to) return u + 1;
    }
}

export function getWeek(weeks, c) { 
    for (let w = 0; w < weeks.length; w++) {
        if (weeks[w].from <= c && c <= weeks[w].to) return w + 1;
    }
}

// admin only
window.admin = username => {
    const github = JSON.parse(localStorage.getItem('github')) || {};
    if (github.login) {
        github.login = username;
        localStorage.setItem('github', JSON.stringify(github));
        window.location.reload();
    } 
}