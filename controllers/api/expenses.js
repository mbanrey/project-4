const User = require('../../models/user')

async function create(req, res, next) {
    try {
        const user = await User.findOne({ _id: req.user._id }).populate('expenses')
        user.expenses.push(req.body)
        await user.save()
        res.json([user.expenses])
    } catch {
        next()
    }
}

async function show(req, res, next) {
    try {
        const user = await User.findOne({ _id: req.user._id }).populate('expenses')
        res.json(user.expenses)
    } catch {
        next()
    }
}

module.exports = {
    create,
    show
}