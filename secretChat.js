function secretChat(input) {
    let message = input.shift();
    while (input[0] !== 'Reveal') {
        let [command, p1, p2] = input.shift().split(':|:');
        switch (command) {

            case 'InsertSpace':
                let left = message.slice(0, p1);
                let right = message.slice(p1);
                message = (`${left}${` `}${right}`);

                console.log(message);
                break;
            case 'Reverse':
                if (message.includes(p1)) {
                    let index = message.indexOf(p1);
                    let left = message.slice(0, index);
                    let right = message.slice(index + Number(p1.length));
                    let reversed = message.slice(index, index + Number(p1.length))
                
                    reversed = reversed.split('').reverse().join('')
                    message = left + right + reversed;
                    console.log(message);

                } else {
                    console.log('error');
                }

                break;
            case 'ChangeAll':
                message = message.split(p1).join(p2)
                console.log(message);
                break;
        }
    }

    console.log(`You have a new text message: ${message}`);
}




secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]
)