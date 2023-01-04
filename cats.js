function catsInfo(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    let cats = [];
    for (let i = 0; i < arr.length; i++) {
        let catData = arr[i].split(' ');

        let catName = catData[0];
        let catAge = catData[1];

        let myCat = new Cat(catName, catAge)

        cats.push(myCat)
    }
    for (let showCat of cats) {
       showCat.meow()
    }

}

catsInfo(['Candy 1', 'Poppy 3', 'Nyx 2'])