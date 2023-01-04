function maxSequence(arr) {
    let longArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currArr = [];
        if (arr[i] === arr[i + 1]) {
            currArr.push(arr[i]);

        }
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                currArr.push(arr[j]);
                if (arr[j] != arr[j + 1]) {
                    break;
                }
            }
        }

        if (currArr.length > longArr.length) {
            longArr = currArr
        }
    }

    console.log(longArr.join(' '));
}

maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])