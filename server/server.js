const express = require('express');
const bodyParser = require('body-parser');
const cC = require('./coffee-controller')
const app = express();
app.use(bodyParser.json());

app.get('/api/coffees', cC.getCoffee);
app.post('/api/coffees', cC.createCoffee);
app.delete('/api/coffees/:id', cC.deleteCoffee);
app.put('/api/coffees/:id', cC.updateCoffee);

const port = 4000;
app.listen(port, () => {
    console.log(`Server is listenin on port ${port} 💎`)
})