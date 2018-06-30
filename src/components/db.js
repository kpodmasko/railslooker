const db = {
    "trains" : [
        {
            "number" : 1,
            "name" : "КрымскийГруз",
            "type" : 1,
            "allCarriage" : 100,
            "fullCarriage" : 100,
            "freightOptions" : {
                "cargo" : "Смола",
                "cargoWeight" : 5000,
                "cargoUnit" : 1
            },
            "status" : false,
            "curCoordinates" : [15.15, 15.15],
            "dep" : {
                "place": "Адлер",
                "coordinates": [
                    13.13,
                    13.13
                ],
                "date": "01.01.2001 57:48"
            },
            "arr" : {
                "place": "Москва",
                "coordinates": [
                    17.17,
                    17.17
                ],
                "date": "-"
            }
        },
        {
            "number" : 2,
            "name" : "КрымскийПас",
            "type" : 2,
            "allCarriage" : 100,
            "fullCarriage" : 100,
            "freightOptions" : null,
            "status" : false,
            "curCoordinates" : [15.15, 15.15],
            "dep" : {
                "place": "Адлер",
                "coordinates": [
                    13.13,
                    13.13
                ],
                "date": "01.01.2001 57:48"
            },
            "arr" : {
                "place": "Москва",
                "coordinates": [
                    17.17,
                    17.17
                ],
                "date": "-"
            }
        }
    ]
};

export default db.trains.map(train => {
    train.number = train.number + "";
    train.type = (train.type === 1) ? "Грузовой" : "Пассажирский";
    train.route = train.dep.place + "-" + train.arr.place;
    train.status = (train.status) ? "Прибыл": "В пути";

    return train;
});