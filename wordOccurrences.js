function wordOccurrences(input) {
    let list = {};
    for (let word of input) {

        if (!list[word]) {
            list[word] = 0;
        }
        list[word] ++;
    }
    let sortedWords = Object.entries(list);
    sortedWords.sort((a,b) => b[1] -a[1]);

    for (let [word,count] of sortedWords) {

        console.log(`${word} -> ${count} times`);
        
    }

}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])