function worldTour(input) {
    let list = input.shift();
    while (input[0] !== 'Travel') {
        let [command, p1, p2] = input.shift().split(':');
        switch (command) {

            case 'Add Stop':
                if (list[p1] !== undefined) {
                    let left = list.slice(0, Number(p1));
                    let right = list.slice(Number(p1));
                    list = (`${left}${p2}${right}`)
                }
                console.log(list);
                break;
            case 'Remove Stop':
                if (list[p1] && list[p2]) {
                  let left = list.slice(0,Number(p1)) ;
                  let right = list.slice(Number(p2)+1);

                  list = left + right;  
                }
                console.log(list);
                break;
            case 'Switch':
                if (list.includes(p1)) {
                    list = list.replace(p1,p2)
                }
                console.log(list);
                break;
        }
    }

    console.log(`Ready for world tour! Planned stops: ${list}`);
}



worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
)