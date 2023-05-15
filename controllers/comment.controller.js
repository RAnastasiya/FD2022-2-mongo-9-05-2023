const createHTTPError = require('http-errors');
const Comment = require('../models/Comment');

module.exports.createComment = async (req, res, next) => {
    try {
        const { params: {idTask}, body } = req;
        const comment = await Comment.create({...body, task: idTask});
        if (!comment) next(createHTTPError(400, 'Bad request!'));
        res.status(201).send({ data: comment });
    } catch (error) {
        next(error)
    }
};