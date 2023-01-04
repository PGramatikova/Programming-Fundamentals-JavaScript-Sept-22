function solve(input) {
    let n = input.shift();
    let pattern = /\@\#+([A-Z][A-Za-z0-9]{4,}[A-Z])\@\#+/g;
    let digitsRegEx = /\d/g;
    for (let i = 0; i < n; i++) {
        let currBarCode = input[i];
        let matchBarcode = currBarCode.match(pattern)
        if (matchBarcode !== null) {
            let digits = currBarCode.match(digitsRegEx);
            let productGroup = '';
            if (digits !== null) {
                productGroup = digits.join('');
            } else {
                productGroup = '00';
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log(`Invalid barcode`);
        }
    }

}

solve(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
