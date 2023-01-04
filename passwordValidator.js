function passwordValidator(password) {
    let isValid = false
    let digitsCounter = 0;

    for (let i = 0; i < password.length; i++) {
        let currentChar = password[i].charCodeAt();

        let isDigits = currentChar >= 48 && currentChar <= 57;
        let isBigLetters = currentChar >= 65 && currentChar <= 90;
        let isSmallLetters = currentChar >= 97 && currentChar <= 122;

        if (isDigits) {
            digitsCounter++;
        }

        if (!isDigits && !isBigLetters && !isSmallLetters) {
            isValid = true;
        }

    }
    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (isValid) {
        console.log('Password must consist only of letters and digits');
    }
    if (digitsCounter < 2) {
        console.log('Password must have at least 2 digits');
    }

    if ((password.length >= 6 || password.length <= 10) && !isValid && digitsCounter >= 2) {
        console.log('Password is valid');
    }

}

passwordValidator('logIn')