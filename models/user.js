const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const expenseSchema = require('./expense')
const incomeSchema = require('./income')

const SALT_ROUNDS = 6

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 5,
        required: true
    },
    income: [{
        type: incomeSchema
    }],
    expenses: [{
        type: expenseSchema
    }],
    lastLogin: {
        type: Date
    },
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, user) {
            delete user.password
            user.lastLogin = Date.now()
            return user
        }
    }
})

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
    return next()
})

module.exports = mongoose.model('User', userSchema)