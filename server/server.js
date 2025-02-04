const express = require('express');
const cors = require('cors');
const Emitter = require('events');
const {RoomData} = require("./RoomData");

const app = express();
const PORT = 3000;
const emitter = new Emitter();

app.use(cors({origin: ['http://localhost:5173', 'https://chess-hero-client.vercel.app']}));
app.use(express.json());

const rooms = new Map();
let clients = [];

app.get('/room/:id', (req, res) => {
    const roomData = rooms.get(req.params.id);
    if (roomData) {
        res.json(roomData);
    } else {
        res.status(404).send('Not Found');
    }
});

app.post('/room', (req, res) => {
    const roomId = randomInInterval(1000, 10000).toString();
    rooms.set(roomId, new RoomData(req.body.board, req.body.showHints));
    res.json({roomId: roomId});
});

app.put('/room/:id/moves', (req, res) => {
    const roomData = rooms.get(req.params.id);
    if (roomData) {
        roomData.addMove(req.body);
        clients.forEach((client) => {
            client.write(`data:${JSON.stringify(roomData.moves)}\n\n`);
        });
        res.status(200).send("move sent to clients");
    } else {
        res.status(404).send('Not Found');
    }
})

app.get("/room/:id/moves", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("Content-Encoding", "none");

    const moves = rooms.get(req.params.id).moves;
    res.write(`data:${JSON.stringify(moves)}\n\n`);

    clients.push(res); // Store the response object to send future updates

    req.on("close", () => {
        clients = clients.filter(client => client !== res);
    });
});

const randomInInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));