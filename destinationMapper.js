function destinationMapper(input) {

    let placesRegex = /(\=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/g;

    let match = placesRegex.exec(input);
    let places = [];
    let points = 0;
    while (match !== null) {
        places.push(match.groups.location)
        points += match.groups.location.length
        match = placesRegex.exec(input);
    }

    console.log(`Destinations: ${places.join(', ')}`);
    console.log(`Travel Points: ${points}`)

}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")