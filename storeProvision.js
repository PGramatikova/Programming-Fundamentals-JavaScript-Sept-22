function storeProvision(stock, order) {
    let productsList = {};

    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        productsList[product] = Number(stock[i + 1]);

    }
    for (let i = 0; i < order.length; i += 2) {
        let product = order[i];

        if (!productsList.hasOwnProperty(product)) {
            productsList[product] = 0;
        } 
            productsList[product] += Number(order[i + 1])
        
    }
       for (const product in productsList) {
        
    console.log(`${product} -> ${productsList[product]} `);
    
}
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)