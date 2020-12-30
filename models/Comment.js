const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: String,
    date: Date,
    likes: Number,
    dislikes: Number,
    report: Number,
    writer: {type: mongoose.Schema.Types.ObjectId,
            ref: "User"}
})

export default mongoose.model('Comment', commentSchema)