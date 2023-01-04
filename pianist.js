function solve(input) {
    let count = Number(input.shift());
    let list = {};

    for (let i = 0; i < count; i++) {
        let line = input.shift();
        let [p1, p2, p3] = line.split('|');

        list[p1] = {
            composer: p2,
            key: p3,
        };
    }
    let command = input.shift();

    while (command !== 'Stop') {

        let [commandName, p1, p2, p3] = command.split('|');
        switch (commandName) {
            case 'Add':
if(!list[p1]){
    list[p1] = {
        composer: p2,
        key: p3,
    };
    console.log(`${p1} by ${p2} in ${p3} added to the collection!`);
}else{
    console.log(`${p1} is already in the collection!`);
}
                break;
            case 'Remove':
if(list[p1]){
    delete list[p1];
    console.log(`Successfully removed ${p1}!`);
}else{
    console.log(`Invalid operation! ${p1} does not exist in the collection.`);
}
                break;
            case 'ChangeKey':
if(list[p1]){
    list[p1].key = p2;
    console.log(`Changed the key of ${p1} to ${p2}!`);
}else{
    console.log(`Invalid operation! ${p1} does not exist in the collection.`);
}
                break;
        }

        command = input.shift();
    }
    let listEntries = Object.entries(list);

    for (let line of listEntries) {
        let piece = line[0];
        let property = line[1];
        console.log(`${piece} -> Composer: ${property.composer}, Key: ${property.key}`);
    }
}


solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]	
  )