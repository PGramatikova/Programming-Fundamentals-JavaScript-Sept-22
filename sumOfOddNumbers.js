function solve(n) {
    let sum = 0;
    let oddNum = 1;
    for (let i = 0; i < n; i++) {

        console.log(oddNum);
        sum += oddNum;
        oddNum += 2;

    }
    console.log(`Sum: ${sum}`)
}
solve(5)