const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola EDI 2019!');
});

app.get('/prueba', (req, res) => {
    res.send('Hola desde la ruta Prueba!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});