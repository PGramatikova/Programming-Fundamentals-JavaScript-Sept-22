function aMinerTask(input) {
    let list = {};
    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        if (!list[resource]) {
            list[resource] = 0;
        }
        list[resource] += Number(input[i + 1]);
    }
    for (let kvp of Object.entries(list)) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

aMinerTask(['gold',
'155',
'silver',
'10',
'copper',
'17',
'gold',
'15'

    
]
)