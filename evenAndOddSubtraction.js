function evenAndOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currNum = Number(arr[i]);
        if (currNum % 2 == 0) {
            evenSum += currNum;
        } else {
            oddSum += currNum;
        }
    }
    let result = evenSum - oddSum;
    console.log(result);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6])