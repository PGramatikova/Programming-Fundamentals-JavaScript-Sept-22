function mergeArrays(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        let newElement = 0
        if (i % 2 === 0) {
            newElement = Number(arr1[i]) + Number(arr2[i]);
        } else {
            newElement = arr1[i] + arr2[i];
        }
        arr3.push(newElement);

    }
    console.log(arr3.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)