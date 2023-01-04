function cardGame(input) {
    let players = {};
    let powerCard = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '1': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    }
    let typeCard = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    for (let line of input) {
        let [person, cards] = line.split(': ');
        cards = cards.split(', ');

        if (!players[person]) {
            players[person] = new Set();
        }
        for (let card of cards) {
            players[person].add(card);
        }

    }
    for (let [person,cards] of Object.entries(players)) {
        let sumCards = 0;
        for (let card of cards) {
            let power = powerCard[card[0]];
            let type = typeCard[card.slice(-1)];

            sumCards += power * type;
        }
    
    console.log(`${person}: ${sumCards}`);
}
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)