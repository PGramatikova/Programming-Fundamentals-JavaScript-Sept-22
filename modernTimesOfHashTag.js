function modernTimes(sentence) {
    let sentenceArray = sentence.split(' ');
    for (let word of sentenceArray) {
        let isValidWord = word.startsWith('#') && word.length > 1;
        if (isValidWord) {
            let isLetter = true;
            let wordCopy = '';
            for (let index = 1; index < word.length; index++) {
                let char = word[index].toLowerCase();
                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isLetter = false;
                    break;
                } else {
                    wordCopy += word[index];
                }

            }
            if (isLetter) {
                console.log(wordCopy);
            }
        }
    }
}

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')