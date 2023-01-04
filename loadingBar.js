function loadingBar(num) {

    let completed = '%'.repeat(num / 10);
    let incompleted = '.'.repeat(10 - completed.length);
    let output = completed + incompleted;
    
    if (num === 100) {
        console.log(`100% Complete!`);
        console.log(`[${output}]`);
    } else {
        console.log(`${num}% [${output}]`);
        console.log(`Still loading...`);
    }

}

loadingBar(30)