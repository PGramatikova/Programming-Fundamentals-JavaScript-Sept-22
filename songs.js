function songs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time
        }
    }

    let numberOfSongs = arr.shift();
    let typeSong = arr.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let songData = arr[i].split('_');
        let type = songData[0];
        let name = songData[1];
        let time = songData[2];
        let mySong = new Song(type, name, time);

        if (typeSong === 'all') {
            console.log(name);

        }
        if (typeSong === type) {
            console.log(name)
        }
    }

}

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']

)
