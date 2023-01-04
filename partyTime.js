function partyTime(input) {
    let vipGuest = [];
    let regularGuest = []
    let guest = input.shift();
    while (guest !== 'PARTY') {
        let isVip = !isNaN(guest[0]);
        if (isVip) {
            vipGuest.push(guest)
        } else {
            regularGuest.push(guest)
        }
        guest = input.shift()
    }
    let invited = vipGuest.concat(regularGuest);

    for (let guest of input) {

        invited.splice(invited.indexOf(guest), 1);
    }
    console.log(invited.length);

    invited.forEach(guest =>
        console.log(guest)
    )
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
)