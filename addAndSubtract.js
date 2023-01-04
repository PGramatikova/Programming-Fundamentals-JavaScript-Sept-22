function addAndSubtract(firstNum, secondNum, thirdNum) {
    function sum(num1, num2) {
        return num1 + num2
    }
    let add = sum(firstNum, secondNum);
    function subtract(sumOfTwo, num3) {
        return sumOfTwo - num3;
    }
    let result = subtract(add, thirdNum);
    console.log(result)
}

addAndSubtract(23, 6, 10)