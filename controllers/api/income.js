const User = require('../../models/user')

async function create(req, res, next) {
    try {
        const user = await User.findOne({ _id: req.user._id })
        user.income.push(req.body)
        await user.save()
        res.json(user.income)
    } catch {
        next()
    }
}

async function show(req, res, next) {
    try {
        const user = await User.findOne({ _id: req.user._id })
        res.json(user.income)
    } catch {
        next()
    }
}

async function deleteIncome(req, res, next) {
    try {
        const incomeId = req.params.incomeId
        const user = await User.findOne({ _id: req.user._id })
        await user.income.remove(incomeId)
        await user.save()
        res.json(user.income)
    } catch {
        next()
    }
}

async function update(req, res, next) {
    try {
        const incomeId = req.params.incomeId
        const user = await User.findOneAndUpdate(
            { _id: req.user._id, "income._id": incomeId },
            {"$set": {"income.$": req.body}},
            {"new": true}
            )
        await user.save()
        res.json(user.income)
    } catch {
        next()
    }
}



module.exports = {
    create,
    show,
    deleteIncome,
    update
}