function houseParty(arr) {
    let list = [];

    for (let el of arr) {
        let command = el.split(' ');
        let name = command[0];

        if (command.length === 3) {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`)
            } else {
                list.push(name);
            }

        } else {
            if (!list.includes(name)) {
                console.log(`${name} is not in the list!`)
            } else {
                let index = list.indexOf(name);
                list.splice(index, 1)
            }
        }
    }
    console.log(list.join('\n'));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

)