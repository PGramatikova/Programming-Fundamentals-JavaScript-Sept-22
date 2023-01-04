function race(input) {
    let racers = input.shift();
    let letters = /[A-Za-z]+/g;
    let digits = /\d/g;
    let raceObj = {};
    let line = input.shift()
    while (line !== 'end of race') {

        let sum = 0;
        let matchDigits = line.match(digits)
        for (let digit of matchDigits) {
            sum += Number(digit);
        }
        
        let name = line.match(letters).join('');
      
        if (raceObj.hasOwnProperty(name)) {

            sum = sum + raceObj[name]
        }
        raceObj[name] = sum;

        if (!racers.includes(name)) {
            raceObj[name] = 0;
        }

        line = input.shift();
    }

let sorted = Object.entries(raceObj);
sorted.sort((a,b)=> b[1] - a[1]);

console.log(`1st place: ${sorted[0][0]}`);
console.log(`2nd place: ${sorted[1][0]}`);
console.log(`3rd place: ${sorted[2][0]}`);

}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)