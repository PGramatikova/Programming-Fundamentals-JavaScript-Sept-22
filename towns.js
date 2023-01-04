function townInfo(list) {
    let townList = {};

    list.forEach(element => {

        let [townName, latitude, longitude] = element.split(' | ');

        townList.town = townName;
        townList.latitude = Number(latitude).toFixed(2);
        townList.longitude = Number(longitude).toFixed(2);

        console.log(townList);

    });
}

townInfo(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)