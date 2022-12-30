import { THONLY, AUTH, FRONTEND_COURSE, CAMPUS, TRILOGY, HOME } from "https://thonly.org/global.mjs";
export { THONLY, AUTH, FRONTEND_COURSE as ORIGIN, CAMPUS, TRILOGY, HOME };

// current
export const YEAR_BEGAN = 2022;
export const YEAR = 2023;
export const TERM = "semester-summer";
export const PASSING = 0.70;

export const BACKGROUND = (() => {
    switch(TRILOGY[0]) {
        case "frontend":
            return "linear-gradient(90deg, rgba(5,117,230,1) 0%, rgba(2,27,121,1) 100%)";
        case "backend":
            return "linear-gradient(to left, #2E5339, #495F41)";
        case "ios":
            return "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))";
    }
})();

export async function getGitHub() {
    const github = JSON.parse(localStorage.getItem('github')) || {};
    if (github.login) {
        const students = await getData('students');
        github.student = students[github.login];
    } 
    return github;
}

export function getEmoji(cohort) {
    switch (cohort.type) {
        case "student":
            switch (cohort.status) {
                case "current":
                    return "✏️ ";
                case "pass":
                    return "🎓 ";
                case "fail":
                    return "🆘 ";
            }
        case "tutor":
            return "🧑🏻‍🏫 ";
    }
}

export function getYear(github) {
    return Number(localStorage.getItem('year')) || (github.student ? github.student.cohorts[0].year : YEAR);
}

export function getTerm(github) {
    const term = localStorage.getItem('term') || (github.student ? `${github.student.cohorts[0].system}-${github.student.cohorts[0].season}` : TERM);
    return [term, ...term.split('-')];
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function getWeeks(system, y, m, d, w) {
    const date = new Date(y, m, d);

    const start = new Date(date);
    if (system === 'quarter') start.setDate(date.getDate() + 7*(w-1))
    else start.setDate(date.getDate() + 7*(w-1)*2);

    const end = new Date(start);
    if (system === 'quarter') end.setDate(start.getDate() + 6)
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

export async function getData(filename, y=null, options={}) {
    let url, system, season, c, w;

    switch (filename) {
        case "students":
            url = `https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0]}-cohort/main/Students.json`;
            break;
        case "syllabus":
            url = `https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0]}-cohort/main/${y}/Syllabus.json`;
            break;
        case "groups":
            ({ system, season, w } = options);
            url = `https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0]}-cohort/main/${y}/${system === 'semester' ? "Semesters" : "Quarters"}/${season.capitalize()}/Weeks/${w}/Groups.json`;
            break;
        case "gradebook":
            ({ system, season, c } = options);
            url = `https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0]}-cohort/main/${y}/${system === 'semester' ? "Semesters" : "Quarters"}/${season.capitalize()}/Chapters/${c}/Gradebook.json`;
            break;
    }

    let cache = localStorage.getItem(url);
    if (cache) {
        return JSON.parse(cache);
    } else {
        try {
            cache = await (await fetch(url, { cache: "no-store" })).json();
        } catch(error) {
            cache = await getBackup(filename, y);
        }
        localStorage.setItem(url, JSON.stringify(cache))
        return cache;
    }  
}

async function getBackup(filename, y) {
    let backup;
    switch (filename) {
        case "students": // deprecated
            backup = y === YEAR + 1 ? {} : `/docs/students.mjs`;
            break;
        case "syllabus":
            backup = (await fetch(`https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0]}-cohort/main/${YEAR_BEGAN}/Syllabus.json`, { cache: "no-store" })).json(); // `${TRILOGY[2]}/docs/syllabus.mjs`;
            break;
        case "groups":
            backup = []; // "/docs/groups.mjs";
            break;
        case "gradebook":
            backup = {}; // "/docs/gradebook.mjs";
            break;
    }
    return typeof backup === 'string' ? (await import(backup)).default : backup;
}

export async function getFile(url) {
    try {
        await fetch(url);
        return url;
    } catch(error) {
        return `https://github.com/SiliconWat/${TRILOGY[0]}-cohort/blob/main/404.md`;
    }
}

// admin only
import "/admin.mjs";