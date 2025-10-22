const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },
    concluida: {
        type: Boolean,
        default: false
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;