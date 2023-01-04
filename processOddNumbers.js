function processOddNumbers(numbers){
    let result = numbers
    .filter((num, i) => i % 2 !== 0)
    .map(x => 2 * x)
    .reverse()

    console.log(result.join(' '));
    
}

processOddNumbers([10, 15, 20, 25])