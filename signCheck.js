function signCheck(numOne, numTwo, numThree) {
    let result = '';
    let firstTwo = numOne * numTwo;

    if ((firstTwo >= 0 && numThree >= 0) ||(firstTwo < 0 && numThree < 0)) {
        result = 'Positive';
    } else {
        result = 'Negative'
    }

    console.log(result)
}
  
signCheck(-1, -2, -3)