function maxNumber(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let isBigger = true;
        let currNum = arr[i];
       for(let k = i + 1; k < arr.length; k++){
            if (currNum <= arr[k]) {
                isBigger = false;
            }
        }
        if (isBigger == true){
            newArr.push(arr[i]);
        }
    }
     
    console.log(newArr.join(' '));
}

maxNumber([1, 4, 3, 2])