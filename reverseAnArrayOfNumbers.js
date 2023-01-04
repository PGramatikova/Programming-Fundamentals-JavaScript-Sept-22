function reverseNumbersArray(count, numbersArr) {
    let reverseArr = [];
    for (let i = 0; i < count; i++) {
        reverseArr[i] = numbersArr[count - 1 - i];
    }
    let result = '';
    for (let i = 0; i < reverseArr.length; i++) {
        result += reverseArr[i];
        if (i < reverseArr.length) {
            result += ' ';
        }
    }

    console.log(result)
}
reverseNumbersArray(3, [10, 20, 30, 40, 50])