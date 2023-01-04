function train(input) {
    let wagons = input
        .shift()
        .split(' ')
        .map(Number);
    let maxPassengers = input.shift()

    for (let i = 0; i < input.length; i++) {
        let [command, num] = input[i].split(' ');
        num = Number(num);

        if (command === 'Add') {
            wagons.push(num);
        } else {
            let passangers = Number(command);
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + passangers <= maxPassengers) {
                    wagons[j] += passangers;
                    break;
                }
            }
        }

    }
    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)