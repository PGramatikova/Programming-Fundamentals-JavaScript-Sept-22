function softUniBar(input) {
    let pattern = /%(?<name>[A-Z][a-z]*)%.*?<(?<product>\w+)>.*?\|(?<count>\d+)\|.*?(?<price>-?\d+(?:\.\d+)?)\$/;
    
    let totalIncome = 0;
    while (input[0] !== 'end of shift') {
        let line = input.shift();
        let match = pattern.exec(line);

        if (match !==null) {
            let name = match.groups['name'];
            let product = match.groups['product'];
            let count = match.groups['count'];
            let price = match.groups['price'];

            let totalPrice = Number(count) * Number(price);

            totalIncome += totalPrice;

            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
        }

    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBar(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
)