const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({roomId: randomInInterval(1000, 10000)});
});

const randomInInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

app.listen(port, () => console.log(`Server started on port ${port}`));