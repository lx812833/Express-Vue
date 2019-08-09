const mongoose = require("mongoose")
const Schema = mongoose.Schema

let objectId = Schema.Types.ObjectId

// 创建 Schema
const UserSchema = new Schema({
    userId: {
        type: objectId  // 主键
    },
    name: {
        type: String,
        unique: true,  // 用户名唯一
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    identity: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Users = mongoose.model("users", UserSchema)