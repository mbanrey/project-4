const jwt = require('jsonwebtoken')

function checkToken(req, res, next) {
    // get the token from the header or as a query parameter
    let token = req.get('Authorization') || req.query.token
    if(token) {
        // remove 'Bearer '
        token = token.replace('Bearer ', '')
        // check if the token is valid and not expired
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            // If token is valid, decoded will be token's entire payload
            // If token is invalid, err wil set
            if(err) {
                req.user = null
            } else {
                req.user = decoded.user
                req.exp = new Date(decoded.exp * 1000)
            }
        })
    } else {
        req.user = null
    }
    next()
}

module.exports = checkToken