function inventory(arr){
let heroList = [];
arr.forEach(line => {
    let[heroName,heroLevel,items] = line.split(' / ');
let currentHero ={
    name : heroName,
    level : Number(heroLevel),
   items : items
}
heroList.push(currentHero)
});
heroList.sort((a,b)=> a.level - b.level);

heroList.forEach(hero =>{
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
})
}

inventory([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]
)