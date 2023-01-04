function traveTime(input) {
    let countryList = {};

    for (let line of input) {
        let [country, town, price] = line.split(' > ');
        price = Number(price);
        if (!countryList[country]) {
            countryList[country] = {};
        }
        if (!countryList[country].hasOwnProperty(town)) {
            countryList[country][town] = price;
        }
        if (countryList[country][town] > price) {
            countryList[country][town] = price;
        }
    }
    let contries = Object.keys(countryList);
    contries.sort((a, b) => a.localeCompare(b));

    for(let item of contries){
        let sortedTowns = Object.entries(countryList[item]);
        sortedTowns.sort((a,b) => a[1]- b[1]);

        let result = [];
        for(let town of sortedTowns){
            result.push(town.join(' -> '))
        }

        console.log(`${item} -> ${result.join(' ')}`);
    }
}

traveTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)