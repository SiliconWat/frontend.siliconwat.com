import { YEAR, TERM } from "./data.mjs";

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
        const data = await fetch(`https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/main/${YEAR}/Students.json`, { cache: "no-store" });
        const students = await data.json();
        github.student = students[github.login];
        return github;
    } else {
        return null;
    }   
}

getGitHub().then(github => localStorage.setItem('term', github && github.student ? `${github.student.term}-${github.student.season}` : localStorage.getItem('term') || TERM));

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function getWeek(cohort, w) {
    const term = localStorage.getItem('term').split('-');
    const date = cohort[term[0]][term[1]].start;

    const start = new Date(date);
    if (term[0] === 'quarter') start.setDate(date.getDate() + 7*(w-1))
    else start.setDate(date.getDate() + 7*(w-1)*2);

    const end = new Date(start);
    if (term[0] === 'quarter') end.setDate(start.getDate() + 6)
    else end.setDate(start.getDate() + 7*2 - 1);

    return `${months[start.getMonth()]} ${start.getDate()} - ${months[end.getMonth()]} ${end.getDate()}`;
}