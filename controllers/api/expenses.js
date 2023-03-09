const User = require('../../models/user')

async function create(req, res, next) {
    try {
        const user = await User.findOne({ _id: req.user._id })
        user.expenses.push(req.body)
        await user.save()
        res.json(user.expenses)
    } catch {
        next()
    }
}

async function show(req, res, next) {
    try {
        const user = await User.findOne({ _id: req.user._id })
        res.json(user.expenses)
    } catch {
        next()
    }
}

async function deleteExpense(req, res, next) {
    try {
        const expenseId = req.params.expenseId
        const user = await User.findOne({ _id: req.user._id })
        await user.expenses.remove(expenseId)
        await user.save()
        res.json(user.expenses)
    } catch {
        next()
    }
}

async function update(req, res, next) {
    try {
        const expenseId = req.params.expenseId
        const user = await User.findOneAndUpdate(
            { _id: req.user._id, "expenses._id": expenseId },
            {"$set": {"expenses.$": req.body}},
            {"new": true}
            )
        await user.save()
        res.json(user.expenses)
    } catch {
        next()
    }
}



module.exports = {
    create,
    show,
    deleteExpense,
    update
}