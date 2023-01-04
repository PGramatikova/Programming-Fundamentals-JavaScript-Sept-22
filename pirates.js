function pirates(input) {
    let cities = {};
    let command = input.shift();
    while (command !== 'Sail') {
        let [town, townPopulation, townGold] = command.split('||');
        if (!cities[town]) {
            cities[town] = {
                population: 0,
                gold: 0,
            }
        }
        cities[town].population += Number(townPopulation);
        cities[town].gold += Number(townGold)

        command = input.shift();
    }
    while (command !== 'End') {
        let [commandName, townName, p1, p2] = command.split('=>');
        p1 = Number(p1);
        p2 = Number(p2);
        switch (commandName) {
            case 'Plunder':

                cities[townName].population -= p1;
                cities[townName].gold -= p2;
                console.log(`${townName} plundered! ${p2} gold stolen, ${p1} citizens killed.`);

                if (cities[townName].population <= 0 || cities[townName].gold <= 0) {
                    console.log(`${townName} has been wiped off the map!`);
                    delete cities[townName];
                }
                break;
            case 'Prosper':
                if (p1 < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                    
                } else {
                    cities[townName].gold += p1;
                    console.log(`${p1} gold added to the city treasury. ${townName} now has ${cities[townName].gold} gold.`);
                }

                break;
        }
        command = input.shift();
    }
    let towns = Object.entries(cities);
    

    if (towns.length == 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);

    } else {
        
        console.log(`Ahoy, Captain! There are ${towns.length} wealthy settlements to go to:`);
        towns.sort((a , b)=> b[1].gold - a[1].gold || a[0].localeCompare(b[0]));
        for (let currentTown of towns) {
            let currentTownName = currentTown[0];
            let currentTownProperty = currentTown[1];

            console.log(`${currentTownName} -> Population: ${currentTownProperty.population} citizens, Gold: ${currentTownProperty.gold} kg`);
        }
    }
}

pirates((["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])
)