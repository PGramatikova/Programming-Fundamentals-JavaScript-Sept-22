function meetings(input) {
    let list = {};
    for (let line of input) {
        let currLine = line.split(' ');
        let day = currLine[0];
        let name = currLine[1];

        if (list.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            list[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let [day, name] of Object.entries(list)) {
        console.log(`${day} -> ${name}`);

    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)