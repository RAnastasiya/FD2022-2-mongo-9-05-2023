const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    content: String,
    isDone: { type: Boolean, default: false },
    dateAt: {
        type: Date, 
        default: Date.now
    },
    author: {
        name: String,
        age: Number
    }
})
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;