function furniture(input) {
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<quantity>\d+)/g;

    let match = pattern.exec(input);
    let totalMoney = 0;
    console.log(`Bought furniture:`);
    while (match !== null) {
        if (match === 'Purchase') {
            break;
        }
        let name = match.groups['name'];
        let price = match.groups['price'];
        let quantity = match.groups['quantity'];
        totalMoney += Number(price) * Number(quantity);
        console.log(`${name}`);

        match = pattern.exec(input);
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
)