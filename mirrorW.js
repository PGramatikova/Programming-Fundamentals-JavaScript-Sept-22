function solve(input) {
    let text = input[0];
    let pattern = /(@|#)(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/g;
    let match = pattern.exec(text);
    let validPairs = [];
    let count = 0;
    while (match !== null) {
        count++ ;
        let firstWord = match.groups.first;
        let secondWord = match.groups.second;
        let reversed = secondWord.split('').reverse().join('');
        if (firstWord === reversed) {
            validPairs.push(` ${firstWord} <=> ${secondWord}`)
        }

        match = pattern.exec(input);
    }
    if (count > 0) {
        console.log(`${count} word pairs found!`);

    } else {
        console.log(`No word pairs found!`);
    }
    if (validPairs.length > 0) {
        console.log(`The mirror words are:`);
        console.log(`${validPairs}`);
    } else {
        console.log(`No mirror words!`);
    }

}

solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
)