function imitationGame(input) {
    let message = input.shift();
    while (input[0] !== 'Decode') {
        let [command, p1, p2] = input.shift().split('|');
        switch (command) {
            case 'Move':

                let first = message.slice(0, p1);
                let second = message.slice(p1)
                message = second + first;
                break;
            case 'Insert':
                let left = message.slice(0, p1);

                let right = message.slice(p1);
                message = (`${left}${p2}${right}`)
                break;
            case 'ChangeAll':
                message = message.split(p1).join(p2)

                break;
        }
    }

    console.log(`The decrypted message is: ${message}`);
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]
)