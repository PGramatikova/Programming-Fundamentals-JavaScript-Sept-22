function plantDiscovery(input) {
    let plants = {};

    let n = input.shift();

    for (let i = 0; i < n; i++) {
        let plant = input.shift();
        let [plantName, rarity] = plant.split('<->');
        plants[plantName] = {
            rarity: Number(rarity),
            ratings: []
        }
    }
    let command = input.shift();

    while (command !== 'Exhibition') {

        let [commandName, args] = command.split(': ');
        let [plantName, argument] = args.split(' - ');
        if (plants[plantName]) {
            switch (commandName) {
                case 'Rate':
                    let rating = Number(argument)
                    plants[plantName].ratings.push(rating);
                    break;
                case 'Update':
                    plants[plantName].rarity = Number(argument);
                    break;
                case 'Reset':
                    plants[plantName].ratings = [];
                    break;

            }
        } else {
            console.log(`error`);
        }

        command = input.shift();
    }
    let plantEntries = Object.entries(plants)
  //  plantEntries.sort((a, b) => b[1].rarity - a[1].rarity)
    console.log('Plants for the exhibition:');

    for (let [plantName, plant] of plantEntries) {
        let sum = 0;
        let ratingCount = plant.ratings.length;
        for (let rating of plant.ratings) {
            sum += rating;
        }
        let averageRating = sum / ratingCount;
        if (!averageRating) {
            averageRating = 0;
        }
        console.log(`- ${plantName}; Rarity: ${plant.rarity}; Rating: ${averageRating.toFixed(2)}`);
    }

}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
