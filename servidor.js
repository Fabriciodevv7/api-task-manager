const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const listaDeTarefas = ["Estudar Node.js", "Criar primeira API", "Dominar o back-end"];

app.get('/', (req, res) => {
    res.send('API do Task Manager no ar!');
});

app.post('/tarefas', (req, res) => {
    const { tarefa } = req.body;
    listaDeTarefas.push(tarefa);
    res.status(201).send({ mensagem: 'Tarefa adicionada com sucesso!', tarefas: listaDeTarefas });
});

app.delete('/tarefas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    listaDeTarefas.splice(id, 1);
    res.send({ mensagem: 'Tarefa removida com sucesso!', tarefas: listaDeTarefas });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${3000}`);
});