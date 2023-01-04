function countString(text, searchW) {
    let words = text.split(' ');
    let counter = 0;
    for (let word of words) {
        if (word === searchW) {
            counter++;
        }
    }
    console.log(counter);
}


