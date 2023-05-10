const express = require('express');
const TaskController = require('./controllers/task.controller');

const app = express();

app.use(express.json());

app.get('/tasks', TaskController.findAllTasks)
app.post('/tasks', TaskController.createTask)

module.exports = app;
