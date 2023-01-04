function adAstra(input) {
    let text = input[0];
    let pattern = /([\|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>[0-9]+)\1/g
    let match = pattern.exec(text);
    let totalCalories = 0;
    while (match !== null) {

        let calories = match.groups['calories'];
        totalCalories += Number(calories)

        match = pattern.exec(input);
    }

    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    match = pattern.exec(text);
    while (match !== null) {
        let name = match.groups['name'];
        let date = match.groups['date'];
        let calories = match.groups['calories'];
        totalCalories += Number(calories)
        console.log(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`);

        match = pattern.exec(input);
    }
}
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
)