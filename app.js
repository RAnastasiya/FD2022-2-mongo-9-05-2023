const express = require('express');
const TaskController = require('./controllers/task.controller');
const CommentController = require('./controllers/comment.controller');
const {errorHandle} = require('./middlewares/error.handle.mw')
const app = express();

app.use(express.json());

app.get('/tasks', TaskController.findAllTasks);
app.get('/tasks/:idTask', TaskController.findTask);
app.post('/tasks', TaskController.createTask);
app.put('/tasks/:idTask', TaskController.updateTask);
app.delete('/tasks/:idTask', TaskController.deleteTask);
app.post('/tasks/:idTask/coments', CommentController.createComment);

app.use(errorHandle);

module.exports = app;
