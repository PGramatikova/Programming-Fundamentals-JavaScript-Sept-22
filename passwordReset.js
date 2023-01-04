function solve(input) {
    let text = input.shift();

    while (input[0] !== 'Done') {
        let [command, p1, p2] = input.shift().split(' ');
        switch (command) {

            case 'TakeOdd':
                let oddText = '';
                for (let i = 1; i < text.length; i += 2) {
                    oddText += text[i];
                }
                text = oddText;
                console.log(text);
                break;
            case 'Cut':
                let index = Number(p1);
                let length =  Number(p2);
                let left = text.slice(0, index);
                let right = text.slice(index + length);
                text = left + right;
                console.log(text);
                break;
            case 'Substitute':
                if (text.includes(p1)) {
                    text = text.split(p1).join(p2);
                    console.log(text);
                } else {
                    console.log(`Nothing to replace!`);
                }
                break;
        }

    }
    console.log(`Your password is: ${text}`);
}

solve(['Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'])
