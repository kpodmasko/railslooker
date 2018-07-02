const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./db.json");
const db = low(adapter);

const port = 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const addZeroOrNot = digit => {
    if (parseInt(digit) < 10) {
        return '0' + digit
    }

    return digit;
};

io.on("connection", socket => {
    console.log("connect");

    const trains = db.get("trains").value();
    trains.forEach((train, i) => {
        let depDate = new Date();
        db.get("trains[" + i + "].dep")
            .assign({ date: addZeroOrNot(depDate.getDay()) + "." +
                addZeroOrNot(depDate.getMonth()) + "." +
                addZeroOrNot(depDate.getFullYear()) + ". " +
                addZeroOrNot(depDate.getHours()) + ":" +
                addZeroOrNot(depDate.getMinutes()) + ":" +
                addZeroOrNot(depDate.getSeconds())
            })
            .write();
        db.get("trains[" + i + "]")
            .assign({ status: false })
            .write();
        db.get("trains[" + i + "].arr")
            .assign({ date: "-" })
            .write();
        db.get("trains[" + i + "].curCoordinates")
            .assign(db.get("trains[" + i + "].path").value()[0])
            .write();
    });

    socket.emit("db", JSON.stringify(db.get("trains")));

    trains.forEach((train, i) => {
        setTimeout(() => {
            train.path.forEach((path, ip, paths) => {
                setTimeout(() => {
                    db.get("trains[" + i + "].curCoordinates")
                        .assign(path)
                        .write();
                    console.log(i + ": new step");
                    if (paths.length-1 === ip &&
                        db.get("trains[" + i + "].curCoordinates").value().join(",") === path.join(",")) {
                        db.get("trains[" + i + "]")
                            .assign({ status: true })
                            .write();
                        let arrDate = new Date();
                        db.get("trains[" + i + "].arr")
                            .assign({ date: addZeroOrNot(arrDate.getDay()) + "." +
                                addZeroOrNot(arrDate.getMonth()) + "." +
                                addZeroOrNot(arrDate.getFullYear()) + ". " +
                                addZeroOrNot(arrDate.getHours()) + ":" +
                                addZeroOrNot(arrDate.getMinutes()) + ":" +
                                addZeroOrNot(arrDate.getSeconds())
                            })
                            .write();
                        console.log(i + ": arrive");
                    }
                    socket.emit("db", JSON.stringify(db.get("trains")));
                }, (10000 * ip) + 2000);
            });
        },0);
    });

    socket.on("disconnect", () => {
        console.log("disconnect");
    })
});

server.listen(port, () => console.log(`Listening on port ${port}`));

