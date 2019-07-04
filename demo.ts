import { Request, Response } from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hola EDI 2019!');
});

app.get('/prueba', (req: Request, res: Response) => {
    res.send('Hola desde la ruta Prueba!');
});

app.listen(port, () => {
    console.log(`Servidor de ejemplo escuchando en puerto ${port}!`);
});
