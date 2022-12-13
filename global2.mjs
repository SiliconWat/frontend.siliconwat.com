import { YEAR_BEGAN, YEAR, TERM } from "/global.mjs";
export { YEAR_BEGAN, YEAR, TERM };

export function getYear() {
    const searchParams = new URLSearchParams(window.location.search);
    return Number(localStorage.getItem('year')) || searchParams.get('year') || YEAR;
}

export function getTerm() {
    const searchParams = new URLSearchParams(window.location.search);
    const term = localStorage.getItem('term') || searchParams.get('year') || TERM;
    return [term, ...term.split('-')];
}

export async function getData(url) {
    let cache = localStorage.getItem(url);
    if (cache) {
        return JSON.parse(cache);
    } else {
        try {
            cache = await (await fetch(url, { cache: "no-store" })).json();
        } catch(error) {
            cache = {};
        }
        localStorage.setItem(url, JSON.stringify(cache))
        return cache;
    }  
}