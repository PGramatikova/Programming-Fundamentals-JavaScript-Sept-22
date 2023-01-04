function sorting(numbers) {
    let biggest = numbers.sort((a, b) => b - a);
let result = [];
    while( numbers.length >0) {
       let firstNum = biggest.shift()
       let secondNum = biggest.pop();
       result.push(firstNum);
       result.push(secondNum);
       
    }
    console.log(result.join(' '));
}

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])