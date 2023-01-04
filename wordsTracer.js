function wordsTracer(input) {
    let chekedWords = input.shift().split(' ');
    let result = {};

    for (let word of chekedWords) {
        result[word] = 0;
    }
    for (let word of input) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }

    let sortedResult = Object.entries(result)
    sortedResult.sort((a, b) => b[1] - a[1]);

    for (let kvp of sortedResult) {
        console.log(`${kvp[0]} - ${kvp[1]}`);

    }

}

wordsTracer([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)