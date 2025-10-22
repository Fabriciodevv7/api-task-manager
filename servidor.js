
require('dotenv').config();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Task = require('./models/Task');
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Conectado ao MongoDB com sucesso!');
    })
    .catch((error) => {
        console.log('Erro ao conectar ao MongoDB:', error);
    });

app.post('/registrar', async (req, res) => {
    try {
        const senhaCriptografada = await bcrypt.hash(req.body.senha, 10);
        const usuario = new User({
            email: req.body.email,
            senha: senhaCriptografada,
        });

        await usuario.save();
        res.status(201).send('Usuário registrado com sucesso!');
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).send('Erro: Este email já está em uso.');
        }
        res.status(500).send('Erro ao registrar o usuário: ' + error.message);
    }
});

app.post('/login', async (req, res) => {
    try {
        const usuario = await User.findOne({ email: req.body.email });
        if (!usuario) {
            return res.status(404).send('Usuário não encontrado');
        }
        const senhaValida = await bcrypt.compare(req.body.senha, usuario.senha);
        if (!senhaValida) {
            return res.status(401).send('Senha incorreta');
        }
        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).send('Erro ao fazer login: ' + error.message);
    }
});

function autenticarToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).send('Acesso negado. Token não fornecido.');
    }

    const partes = authHeader.split(' ');
    if (partes.length !== 2 || partes[0] !== 'Bearer') {
        return res.status(401).send('Formato de token inválido.');
    }

    const token = partes[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch (error) {
        res.status(400).send('Token inválido.');
    }
}

app.get('/tarefas', autenticarToken, async (req, res) => {

    try {
        const tarefas = await Task.find({ dono: req.usuario.id });
        res.status(200).json(tarefas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/tarefas', autenticarToken, async (req, res) => {

    try {
        const { descricao } = req.body;
        if (!descricao) {
            return res.status(400).json({ message: 'A descrição da tarefa é obrigatória.' });
        }

        const novaTarefa = await Task.create({ descricao, dono: req.usuario.id });
        res.status(201).json(novaTarefa);
    } catch (error) {
        res.status(500).json({ message: 'Ocorreu um erro ao criar a tarefa', error: error.message });
    }
});

app.put('/tarefas/:id', autenticarToken, async (req, res) => {

    try {
        const { id } = req.params;
        const { descricao, concluida } = req.body;
        const tarefaAtualizada = await Task.findOneAndUpdate({ _id: id, dono: req.usuario.id },
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

app.delete('/tarefas/:id', autenticarToken, async (req, res) => {
    try {
        const { id } = req.params;
        const tarefaDeletada = await Task.findOneAndDelete({ _id: id, dono: req.usuario.id });

        if (!tarefaDeletada) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }

        return res.status(200).json({ message: 'Tarefa deletada com sucesso', tarefa: tarefaDeletada });
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao deletar a tarefa', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});