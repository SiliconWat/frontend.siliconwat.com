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