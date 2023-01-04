function adrressBook(input) {
    let book = {};

    for (let line of input) {
        let [name, address] = line.split(':');
        book[name] = address;
    }

    let bookEntries = Object.entries(book);
    bookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (let [name, address] of bookEntries) {

        console.log(`${name} -> ${address}`);
    }

}

adrressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])