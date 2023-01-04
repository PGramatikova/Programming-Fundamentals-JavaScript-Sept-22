function phoneNumber(text){
 let pattern = /(?<!\d)\+359( |-)2\1\d{3}\1\d{4}\b/g ;

 let match = pattern.exec(text);
 let result = [];
 while (match !== null) {
     result.push(match[0])

     match = pattern.exec(text);
 }
 console.log(result.join(', '));

}

phoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])