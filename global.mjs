// current
export const YEAR_BEGAN = 2022;
export const YEAR = 2023;
export const TERM = "semester-summer";
export const PASSING = 0.70;

export const ORIGIN = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5531" : "https://frontend.siliconwat.com";
export const THONLY = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5500" : "https://thonly.org";
export const AUTH = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5599" : "https://auth.siliconwat.com";
export const CAMPUS = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5540" : "https://siliconwat.org";

export const TRILOGY = (() => {
    if (window.location.port === "5531" || window.location.hostname === "frontend.siliconwat.com") return ['Frontend', 'Course', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5531" : "https://frontend.siliconwat.com"];
    if (window.location.port === "5532" || window.location.hostname === "backend.siliconwat.com") return ['Backend', 'Course', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5532" : "https://backend.siliconwat.com"];
    if (window.location.port === "5533" || window.location.hostname === "ios.siliconwat.com") return ['iOS', 'Course', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5533" : "https://ios.siliconwat.com"];

    if (window.location.port === "5541" || window.location.hostname === "frontend.siliconwat.org") return ['Frontend', 'Cohort', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5541" : "https://frontend.siliconwat.org"];
    if (window.location.port === "5542" || window.location.hostname === "backend.siliconwat.org") return ['Backend', 'Cohort', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5542" : "https://backend.siliconwat.org"];
    if (window.location.port === "5543" || window.location.hostname === "ios.siliconwat.org") return ['iOS', 'Cohort', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5543" : "https://ios.siliconwat.org"];
})();

export const HOME = (() => {
    switch(TRILOGY[0]) {
        case "Frontend":
            return window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5531" : "https://frontend.siliconwat.com";
        case "Backend":
            return window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5532" : "https://backend.siliconwat.com";
        case "iOS":
            return window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5533" : "https://ios.siliconwat.com";
    }
})();

export const BACKGROUND = (() => {
    switch(TRILOGY[0]) {
        case "Frontend":
            return "linear-gradient(90deg, rgba(5,117,230,1) 0%, rgba(2,27,121,1) 100%)";
        case "Backend":
            return "linear-gradient(to left, #2E5339, #495F41)";
        case "iOS":
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
            url = `https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/main/Students.json`;
            break;
        case "syllabus":
            url = `https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/main/${y}/Syllabus.json`;
            break;
        case "groups":
            ({ system, season, w } = options);
            url = `https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/main/${y}/${system === 'semester' ? "Semesters" : "Quarters"}/${season.capitalize()}/Weeks/${w}/Groups.json`;
            break;
        case "gradebook":
            ({ system, season, c } = options);
            url = `https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/main/${y}/${system === 'semester' ? "Semesters" : "Quarters"}/${season.capitalize()}/Chapters/${c}/Gradebook.json`;
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
            backup = (await fetch(`https://raw.githubusercontent.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/main/${YEAR_BEGAN}/Syllabus.json`, { cache: "no-store" })).json(); // `${TRILOGY[2]}/docs/syllabus.mjs`;
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
        return `https://github.com/SiliconWat/${TRILOGY[0].toLowerCase()}-cohort/blob/main/404.md`;
    }
}

// admin only

window.TESTING = window.location.hostname === '127.0.0.1';

window.clearCache = () => {
    for (let item in localStorage) if (item.includes('https')) localStorage.removeItem(item);
}

window.switchStudent = username => {
    const github = JSON.parse(localStorage.getItem('github')) || {};
    if (github.login) {
        github.login = username;
        localStorage.setItem('github', JSON.stringify(github));
        window.location.reload();
    } 
}

window.getStudents = async () => {
    const students = await getData('students');
    const year = await getYear();
    const github = await getGitHub();
    const term = getTerm(github);

    const Students = [];

    for (let student in students) {
        if (students[student].cohorts.some(cohort => cohort.year === year && cohort.system === term[1] && cohort.season === term[2]))
            Students.push(student);
    }

    console.info(Students);
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};