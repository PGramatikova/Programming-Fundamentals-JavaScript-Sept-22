function login(input) {
    let username = input[0];
    let count = 0;
    for (let index = 1; index < input.length; index++) {

        let reversString = input[index];
        reversString = reversString.split('');
        reversString = reversString.reverse();
        reversString = reversString.join('');

        if (count === 3 && reversString !== username) {
            console.log(`User ${username} blocked!`);
            break;
        }
        if (reversString == username) {
            console.log(`User ${username} logged in.`); break;
        }
        else {
            console.log(`Incorrect password. Try again.`);
        }

        count++;
    }
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])

//login(['Acer', 'login', 'go', 'let me in', 'recA'])