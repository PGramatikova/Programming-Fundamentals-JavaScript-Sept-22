function fancyBarcodes(input) {
    let nBarcodes = input.shift();
    let validBarcodeRegEx = /\@\#+[A-Z][A-Za-z0-9]{4,}[A-Z]\@\#+/g;
    let digitsRegEx = /\d/g;

    for (let i = 0; i < nBarcodes; i++) {
        let currLine = input[i];
        let matchBarcode = currLine.match(validBarcodeRegEx);
        if (matchBarcode !== null) {
            let digits = currLine.match(digitsRegEx);
            if (digits !== null) {
                console.log(`Product group: ${digits.join('')}`);
            } else {
                console.log(`Product group: 00`);
            }
        }
        else {
            console.log(`Invalid barcode`);
        }
    }
}
    fancyBarcodes((["3",
        "@#FreshFisH@#",
        "@###Brea0D@###",
        "@##Che4s6E@##"])
    )