function garages(input){
let garageList = {};
for(let line of input){
   let[garageNumber,propery] = line.split(' - ');
   if(!garageList[garageNumber]){
    garageList[garageNumber] = [];
   }
   garageList[garageNumber].push(propery);
}
let output = '';
let entriesObj =Object.entries(garageList)
for(let[garage,cars] of entriesObj){
output += `Garage № ${garage}\n` ;
for (let currCar of cars) {
    while (currCar.includes(': ')){
      currCar = currCar.replace(': ',' - ') ; 
    }
   output += `--- ${currCar}\n` ;
}
}
console.log(output);
}

garages(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])