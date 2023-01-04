function palindromeIntegers(arrayNum) {
  for (let i = 0; i < arrayNum.length; i++) {

    let numToString = arrayNum[i].toString();
    let reversedNumToString = numToString.split('').reverse().join('');

    if (numToString === reversedNumToString) {
      console.log('true');
    } else {
      console.log('false');
    }
  }
}




palindromeIntegers([123, 323, 421, 121])