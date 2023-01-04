function companyUsers(input) {
    let list = {};

    for (let line of input) {
        let [company, id] = line.split(' -> ');
        if (!list[company]) {
            list[company] = [];
        }
        if (!list[company].includes(id)) {
            list[company] = list[company].concat(id);
        }
    }
    let sorted = Object.entries(list);
    sorted.sort((a, b) => a[0].localeCompare(b[0]))

    for (let [company, id] of sorted) {

        console.log(company);
        console.log(`-- ${id.join('\n-- ')}`);
    }

}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    
]
)