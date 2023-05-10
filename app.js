const express = require('express');
const TaskController = require('./controllers/task.controller');

const app = express();

app.use(express.json());

app.get('/tasks', TaskController.findAllTasks)
app.post('/tasks', TaskController.createTask);

app.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    const message = err.message || 'Server error';
    res.status(status).send(message);
})

module.exports = app;
