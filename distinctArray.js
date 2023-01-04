function distinct(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        if (newArr.includes(currentNum)) {
            newArr.splice(i, 1)

        } else {
            newArr.push(currentNum)
        }

    }
    console.log(newArr.join(' '));

}
distinct([20, 8, 12, 13, 4, 4, 8, 5])