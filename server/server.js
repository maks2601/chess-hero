const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors({origin: ['http://localhost:5173', 'https://chess-hero-client.vercel.app']}));
app.use(express.json());

const rooms = new Map();

app.get('/:id', (req, res) => {
    const roomData = rooms.get(req.params.id);
    if (roomData) {
        res.json(roomData);
    } else {
        res.status(404).send('Not Found');
    }
});

app.post('/', (req, res) => {
    const roomId = randomInInterval(1000, 10000).toString();
    rooms.set(roomId, req.body);
    res.json({roomId: roomId});
});

const randomInInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));