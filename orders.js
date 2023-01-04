function orders(product, count) {
    let priceOne = 0;

    switch (product) {
        case 'coffee':
            priceOne = 1.50;
            break;
        case 'water':
            priceOne = 1.00;
            break;
        case 'coke':
            priceOne = 1.40;
            break;
        case 'snacks':
            priceOne = 2.00;
            break;
    }

    let totalPrice = priceOne * count;

    console.log(totalPrice.toFixed(2));

}

orders('coffee',2)
