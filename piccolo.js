function piccolo(input) {
    let carsList = input.map(el => el.split(', '));
    let parkingLot = {};

    for (let [direction, carNumber] of carsList) {
        if (direction === 'IN') {
            parkingLot[carNumber] = 1;
        }
        if (direction === 'OUT') {
            delete parkingLot[carNumber]
        }
    }

    let result = Object.entries(parkingLot);
    result.sort((a, b) => a[0].localeCompare(b[0]))
    if (result.length === 0) {
        console.log('Parking Lot is Empty');
    }
    for (let car of result) {
        console.log(car[0]);
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)