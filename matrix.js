function matrix(number) {

    let rowGenerator = () => {
        let singleRow = '';
        for (let i = 0; i < number; i++) {
            singleRow += `${number} `;
        }
        return singleRow;
    }

    for (let j = 0; j < number; j++) {
        console.log(rowGenerator());
    }
}

matrix(3)