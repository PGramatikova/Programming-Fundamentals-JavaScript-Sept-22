function phoneBook(input){
    let book = {};
    for (let line of input) {
       let personLine = line.split(' ');
       let name = personLine[0] ;
       let number = personLine[1];
       book[name] = number;
    }

    for (let name in book) {
        console.log(`${name} -> ${book[name]}`);
        
    }

}

phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
)