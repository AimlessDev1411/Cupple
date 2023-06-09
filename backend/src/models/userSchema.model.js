const mongodb = require('mongoose')
const { Schema } = require('mongoose')
const { v4: uuidv4 } = require('uuid');

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    created_date: {
        type: String,
        required: true
    },
    date_user: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
}) 

module.exports = mongodb.model('user', userSchema)