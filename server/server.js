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
        res.status(200).send("Put Move");
    } else {
        res.status(404).send('Not Found');
    }
})

app.get('/room/:id/moves', (req, res) => {
    res.json(rooms.get(req.params.id).moves);
})

const randomInInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));