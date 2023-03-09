const mongoose = require('mongoose')
const Schema = mongoose.Schema

const incomeSchema = new Schema({
    category: {
        type: String,
        required: true 
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

module.exports = incomeSchema