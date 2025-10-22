require('dotenv').config();

const Task = require('./models/Task');
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI; // Pegando a chave do .env

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso!');
  })

  .catch((error) => {
    console.log('Erro ao conectar ao MongoDB:', error);
  });

app.get('/tarefas', async (req, res) => {
    try{
        const tarefas = await Task.find();
        res.status(200).json(tarefas);
    } catch (error){
        res.status(500).json({ message: error.message });
    }
});

app.post('/tarefas', async (req, res) => {
    try {
        const {descricao} = req.body;
        if (!descricao) {
          return res.status(400).json({ message: 'A descrição da tarefa é obrigatória.' });
        }

        const novaTarefa = await Task.create({ descricao });
        res.status(201).json(novaTarefa);
    
    } catch (error) {
        res.status(500).json({ message: 'Ocorreu um erro ao criar a tarefa', error: error.message });
        }
  });

app.put('/tarefas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { descricao, concluida } = req.body;
        const tarefaAtualizada = await Task.findByIdAndUpdate(
            id,
            { descricao, concluida },
            { new: true }
        );
        if (!tarefaAtualizada) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }
        return res.status(200).json(tarefaAtualizada);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao atualizar a tarefa', error: error.message });
    }
});

app.delete('/tarefas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const tarefaDeletada = await Task.findByIdAndDelete(id);

        if (!tarefaDeletada) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }

        return res.status(200).json({ message: 'Tarefa deletada com sucesso', tarefa: tarefaDeletada });
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao deletar a tarefa', error: error.message });
    }
}); 

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${3000}`);
});