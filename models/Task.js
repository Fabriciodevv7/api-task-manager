const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },
    concluida: {
        type: Boolean,
        default: false
    },
    dono: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;