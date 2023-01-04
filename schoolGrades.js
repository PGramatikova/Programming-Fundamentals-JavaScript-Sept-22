function schoolGrades(input) {
    let list = {};

    for (let line of input) {
        let currLine = line.split(' ');
        let name = currLine.shift();
        let grades = currLine.map(x => Number(x));

        if (!list[name]) {
            list[name] = [];
        } 
            list[name] = list[name].concat(grades);
        
    }
    let sortedStudents = Object.entries(list);
    sortedStudents.sort((a, b) => a[0].localeCompare(b[0]))

    for (let [name, grades] of sortedStudents) {
        let sum = 0;
        for (let grade of grades) {
            sum += grade;
        }
        let averageGrade = sum / grades.length;

        console.log(`${name}: ${averageGrade.toFixed(2)}`);

    }

}




schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3',
]
)