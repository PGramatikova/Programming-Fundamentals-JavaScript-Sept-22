function searchForANumber(nums, specialNums) {
    let takenNums = specialNums[0];
    let deleteNums = specialNums[1];
    let uniqueNum = specialNums[2];

    let newArr = nums.splice(0, takenNums);
    newArr.splice(0, deleteNums);

    let count = 0;
    for (let num of newArr) {
        if (num === uniqueNum) {
            count++;
        }
    }

    console.log(`Number ${uniqueNum} occurs ${count} times.`);

}

searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    
)