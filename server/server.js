const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors({origin: ['http://localhost:5173', 'https://chess-hero-client.vercel.app']}));

app.get('/', (req, res) => {
    res.json({roomId: randomInInterval(1000, 10000)});
});

const randomInInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));