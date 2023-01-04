function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currElement = Number(arr[i]);
        if (currElement % 2 == 0) {
            sum += currElement;
        }
    }
    console.log(sum);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6'])