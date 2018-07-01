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

io.on('connection', socket => {
    console.log('user connected');

    const trains = db.get("trains").value();
    trains.forEach((train, i) => {
        let depDate = new Date();
        db.get("trains[" + i + "].dep")
            .assign({ date: depDate.getDay() + "." +
                depDate.getMonth() + "." +
                depDate.getFullYear() + ". " +
                depDate.getHours() + ":" +
                depDate.getMinutes() + ":" +
                depDate.getSeconds()
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
                    console.log("new step");
                    if (paths.length-1 === ip &&
                        db.get("trains[" + i + "].curCoordinates").value().join(",") === path.join(",")) {
                        db.get("trains[" + i + "]")
                            .assign({ status: true })
                            .write();
                        let arrDate = new Date();
                        db.get("trains[" + i + "].arr")
                            .assign({ date: arrDate.getDay() + "." +
                                arrDate.getMonth() + "." +
                                arrDate.getFullYear() + ". " +
                                arrDate.getHours() + ":" +
                                arrDate.getMinutes() + ":" +
                                arrDate.getSeconds()
                            })
                            .write();
                        console.log("arrive");
                    }
                    socket.emit("db", JSON.stringify(db.get("trains")));
                }, (1000 * ip) + 2000);
            });
        },0);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    })
});

server.listen(port, () => console.log(`Listening on port ${port}`));

