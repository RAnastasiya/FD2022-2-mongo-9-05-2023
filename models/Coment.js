const mongoose = require('mongoose');
const { Schema } = mongoose;

const comentSchema = new Schema({
    bodyComent: { 
        type: String, 
        required: [true, 'Body is required'],
    },
    task: {
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }
})

const Comment = mongoose.model('Comment', comentSchema);

module.exports = Comment;