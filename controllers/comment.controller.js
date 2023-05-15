const createHTTPError = require('http-errors');
const Comment = require('../models/Comment');
const Task = require('../models/Task');

module.exports.createComment = async (req, res, next) => {
    try {
        const { params: {idTask}, body } = req;
        const comment = await Comment.create({...body, task: idTask});
        const task = await Task.findById(idTask)
        await Task.findByIdAndUpdate(idTask, {comments: [...task.comments.map(comment => comment._id), comment._id]})
        if (!comment) next(createHTTPError(400, 'Bad request!'));
        res.status(201).send({ data: comment });
    } catch (error) {
        next(error)
    }
};

module.exports.findAllComments = async (req, res, next) => {
    try {
        const comments = await Comment.find().populate('task');
        if (comments.length === 0) next(createHTTPError(404, 'Comment not found!'))
        res.status(200).send({ data: comments });
    } catch (error) {
        next(error)
    }
};