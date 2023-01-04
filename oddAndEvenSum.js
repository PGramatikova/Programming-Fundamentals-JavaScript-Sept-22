function oddAndEvenSum(num) {
    let oddSum = 0;
    let evenSum = 0;
    let numberAsString = num.toString();
    let numberAsStringLength = numberAsString.length;
    for (let i = 0; i < numberAsStringLength; i++) {
        let currentNum = Number(numberAsString[i]);
        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(3495892137259234)