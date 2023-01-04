function emojiDetector(input) {
    let text = input[0];
    let emojiRegEx = /(\:\:|\*\*)([A-Z][a-z]{2,})\1/g
    let digitsRegEx = /\d/g;
    let digits = text.match(digitsRegEx)
    let threshold = 1;
    for (let digit of digits) {
        threshold *= Number(digit)
    }
    console.log(`Cool threshold: ${threshold}`);

    let validEmoji;
    let emojis = []

    while (validEmoji = emojiRegEx.exec(text)) {
        emojis.push(validEmoji);

    }
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);

    for (let emoji of emojis) {
        let emojiText = emoji[2];
        let fullEmoji = emoji[0];
        let coolnes = 0;
        for (let letter of emojiText) {
            letter = letter.charCodeAt();
            coolnes += Number(letter);
        }
        if (coolnes > threshold) {
            console.log(`${fullEmoji}`);
        }
    }

}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])