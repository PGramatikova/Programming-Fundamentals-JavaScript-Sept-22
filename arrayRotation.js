function rotation(arr,rotationNum){
    
    for (let i = 0; i < rotationNum; i++){
        let numToMove = arr.shift();
        arr.push(numToMove);
    }
    console.log(arr.join(' '));

}

rotation([2,4,15,31],5)