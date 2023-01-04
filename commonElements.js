function commonElements(arr1, arr2) {
    for (let firstArrElement of arr1) {
        for (let i = 0; i < arr2.length; i++) {
            if (arr2[i] === firstArrElement) {
                console.log(firstArrElement);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
)