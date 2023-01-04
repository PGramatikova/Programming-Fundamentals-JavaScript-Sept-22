function bombNumbers(nums, special) {
    let bombNum = special[0];
    let power = special[1];

    let indexBomb = nums.indexOf(bombNum);
    while (indexBomb !== -1) {
        let startIndexBomb = Math.max(0,(indexBomb - power));
        let bombRadius = (power * 2) + 1
        nums.splice(startIndexBomb, bombRadius);
        indexBomb = nums.indexOf(bombNum)
    }
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }

    console.log(sum);
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])

