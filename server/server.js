const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const data = "Message to future self";

app.get('/data', (req, res) => {
    res.status(200).json(data)
})

const port = 4000;
app.listen(port, () => {
    console.log(`Server is listenin on port ${port} 💎`)
})