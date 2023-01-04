function oddOccurrences(input) {
    let result = {};
    let elements = input
        .split(' ')
        .map(word => word.toLowerCase());

    for (let word of elements) {
        if (!result[word]) {
            result[word] = 0;
        }
        result[word]++;
    }

    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
    let finalRes = '';

    for (let kvp of sorted) {
        if (kvp[1] % 2 === 1) {
            finalRes += (`${kvp[0]} `);
        }
    }

    console.log(finalRes);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')