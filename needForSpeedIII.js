function needForSpeed(input) {
    let cars = {};

    let n = input.shift()

    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let [car, mileage, fuel] = line.split('|');
        cars[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel),
        }
    }

    let command = input.shift();

    while (command !== 'Stop') {
        let [commandName, carName, p1, p2] = command.split(' : ');
        p1 = Number(p1);
        p2 = Number(p2);
        switch (commandName) {
            case 'Drive':
                if (cars[carName].fuel < p2) {
                    console.log(`Not enough fuel to make that ride`);
                } else {
                    cars[carName].mileage += p1;
                    cars[carName].fuel -= p2;
                    console.log(`${carName} driven for ${p1} kilometers. ${p2} liters of fuel consumed.`);
                }
                if (cars[carName].mileage >= 100000) {
                    delete cars[carName];
                    console.log(`Time to sell the ${carName}!`);
                }
                break;
            case 'Refuel':
                let currentFuel = cars[carName].fuel
                if (cars[carName].fuel + p1 <= 75) {
                    cars[carName].fuel += p1;
                    console.log(`${carName} refueled with ${p1} liters`);
                } else {
                    cars[carName].fuel = 75;
                    console.log(`${carName} refueled with ${(75 - currentFuel)} liters`);
                }
                break;
               case 'Revert':
                cars[carName].mileage -= p1;
                if (cars[carName].mileage >= 10000) {
                    console.log(`${ carName } mileage decreased by ${ p1 } kilometers`);
                } else {
                    cars[carName].mileage = 10000;
                }

                break;
        }
        command = input.shift();
    }
    for (let [car, carProperty] of Object.entries(cars)) {
        console.log(`${ car } -> Mileage: ${ carProperty.mileage } kms, Fuel in the tank: ${ carProperty.fuel } lt.`);
    }

}


needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  
])