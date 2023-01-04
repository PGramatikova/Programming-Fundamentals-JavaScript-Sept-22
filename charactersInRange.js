function charactersInRange(charOne,charTwo){
    let arr = [];
    let charOneDec = charOne.charCodeAt();
    let charTwoDec = charTwo.charCodeAt();
    let firstNum = Math.min(charOneDec,charTwoDec);
    let secondNum = Math.max(charOneDec,charTwoDec);
    for(let i = firstNum +1; i < secondNum; i++){
        arr.push(String.fromCharCode(i));
    }

    console.log(arr.join(' '))
}

charactersInRange('#',':')