function solve(input) {
    let heroes = {};
    let n = input.shift()
    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let [hero, HP, MP] = line.split(' ');
        if (!heroes[hero]) {
            heroes[hero] = {}
        }
        if(HP > 100 ){
            heroes[hero].HP = Number(100);
        }else{
            heroes[hero].HP = Number(HP);
        }
        if(MP > 200){
            heroes[hero].MP = Number(200);
        }else{
            heroes[hero].MP = Number(MP);
    }}
    let command = input.shift();
    while (command !== 'End') {
        let [commandName, heroName, p1, p2] = command.split(' - ');
        switch (commandName) {
            case 'CastSpell':
                let neededMP = Number(p1);
                let spellName = p2;
                if (heroes[heroName].MP >= neededMP) {
                    heroes[heroName].MP -= neededMP;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].MP} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;
            case 'TakeDamage':
                let damage = Number(p1);
                let attacker = p2;
                heroes[heroName].HP -= damage;
                if (heroes[heroName].HP > 0) {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].HP} HP left!`);
                } else {
                    console.log(`${heroName} has been killed by ${attacker}!`);
                    delete heroes[heroName];
                }
                break;
            case 'Recharge':
                let amount = Number(p1);
                
                if (amount + heroes[heroName].MP > 200){
                    console.log(`${heroName} recharged for ${200 - heroes[heroName].MP } MP!`);
                    heroes[heroName].MP = 200;
                }else {
                    heroes[heroName].MP += amount;
                    console.log(`${heroName} recharged for ${amount} MP!`);
                }
              
                break;
            case 'Heal':
                let amountHP = Number(p1);
                if (heroes[heroName].HP + amountHP > 100){
                    console.log(`${heroName} healed for ${100 -heroes[heroName].HP} HP!`);
                    heroes[heroName].HP = 100;
                } else{
                    heroes[heroName].HP += amountHP;
                    console.log(`${heroName} healed for ${amountHP} HP!`);
                }
                
                break;
        }

        command = input.shift();
    }
    for (let [heroName, property] of Object.entries(heroes)) {
        console.log(`${heroName}`);
        console.log(`HP: ${property.HP}`);
        console.log(`MP: ${property.MP}`);
    }
}

solve(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
    
])