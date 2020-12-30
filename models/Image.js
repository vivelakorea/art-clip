const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    name: String,
    description: String,
    tag: [String],
    classification: [String],
    date: Date,
    likes: Number,
    dislikes: Number,
    report: Number,
    private: Boolean,
    artist: {type: mongoose.Schema.Types.ObjectId,
            ref: "User"}
})

export default mongoose.model('Image', imageSchema)