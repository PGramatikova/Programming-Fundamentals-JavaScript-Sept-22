function solve(number,precision){
    if(precision >15){
        precision = 15 ;
    }
    let outputNum = number.toFixed(precision);
    console.log(parseFloat(outputNum));
}
solve(10.5,3)