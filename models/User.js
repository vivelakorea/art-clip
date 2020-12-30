const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    key: String,
    description: String
    //프로필사진 ref로 연결, 작품리스트 연결
})

export default mongoose.model('User', userSchema)