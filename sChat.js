function solve(input){
    let message = input.shift();
    while (input[0] !== 'Reveal') {
        let [command, p1, p2] = input.shift().split(':|:');
        switch (command) {

            case 'InsertSpace':
                if (message[p1] !== undefined) {
                    let left = message.slice(0, Number(p1));
                    let right = message.slice(Number(p1));
                    message = left + ' ' + right;
                }
                console.log(message);   
            
                break;
            case 'Reverse':
               if(message.includes(p1)){
                let index = message.indexOf(p1);
                let firstPart = message.slice(0,index);
                let lastPart = message.slice(index + Number(p1.length));
                let cutedPart = message.slice(index,index + Number(p1.length));
                let reversed = cutedPart.split('').reverse().join('');
                message = firstPart + lastPart + reversed ;
                console.log(message);
               } else{
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

solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  )