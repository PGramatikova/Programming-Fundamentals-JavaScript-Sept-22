function solve(input){
    let stops = input.shift();
    while (input[0] !== 'Travel') {
        let [command, p1, p2] = input.shift().split(':');
        switch (command) {

            case 'Add Stop':
                let index = Number(p1);
             let insString = p2;
           if(stops[index] !== undefined){
            let left = stops.slice(0,index);
            let right = stops.slice(index);
            stops = left + insString +right;}
            console.log(stops);
                break;
            case 'Remove Stop':
                let startIndex = Number(p1);
                let endIndex = Number(p2);
                if(stops[startIndex] && stops[endIndex]){
                    let firstPart = stops.slice(0,startIndex);
                    let lastPart = stops.slice(endIndex+1);
                    stops = firstPart + lastPart
                }
                console.log(stops);
                break;
            case 'Switch':
                if(stops.includes(p1)){
                    stops = stops.replace(p1,p2)
                }
                console.log(stops);
                break;
        }
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

solve((["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
)