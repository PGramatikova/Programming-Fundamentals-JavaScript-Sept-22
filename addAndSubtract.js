function addAndSubtract(arr) {
    let newArr = [];
    let arrSum = 0;
    let newArrSum = 0;
    
    for (let index = 0; index < arr.length ; index++) {
        arrSum += arr[index];

        if (arr[index] % 2 === 0) {
            arr[index] = arr[index] + index;
        } else {
            arr[index] = arr[index] - index;
        }
        newArr.push(arr[index]);
        newArrSum += arr[index];
    }
    console.log(newArr);
    console.log(arrSum);
    console.log(newArrSum);
}

addAndSubtract([5, 15, 23, 56, 35])