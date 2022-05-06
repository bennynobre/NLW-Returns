import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

// GET, POST, PUT, PATCH, DELETE

// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizar informações de uma entidade
// PATCH = Atualizar uma informação única de uma entidade
// DELETE = Deletar uma informação

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333, () => {
    console.log('Server started on port 3333');
});