const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    status: Boolean,
    gender: String,
    date: {
        type: Date,
        default: Date.now
    }
})

const UserDb = mongoose.model(process.env.MONGO_INITDB_DATABASE, schema)

module.exports = UserDb
