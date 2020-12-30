const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followSchema = new Schema({
    following: {type: mongoose.Schema.Types.ObjectId,
        ref: "User"},
    followed: {type: mongoose.Schema.Types.ObjectId,
        ref: "User"},
})

export default mongoose.model('Follow', followSchema)