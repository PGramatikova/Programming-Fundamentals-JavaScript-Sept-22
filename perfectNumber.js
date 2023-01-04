function perfectNumber(number) {
    let sumOfDivisor = 0;
    for (let i = 1; i < number; i++) {
        let currentNum = number;
        if (currentNum % i === 0) {
            sumOfDivisor += i;
        }
    }
    if (sumOfDivisor === number) {
        console.log('We have a perfect number!')
    } else {
        console.log('It\'s not so perfect.');
    }

}

perfectNumber(28)