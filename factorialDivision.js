function factorialDivision(firstNum, secondNum) {
    function factorialCalculator(number) {
        let result = 1;
        for (let i = number; i >= 1; i--) {
            result *= i;
        } return result
    }
    let output = (factorialCalculator(firstNum)) / (factorialCalculator(secondNum));
    console.log(output.toFixed(2));

}

factorialDivision(6, 2)