const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next)=>{
    const token = req.body.headers;
    console.log('ostras chaval');
    next();
}

module.exports = authMiddleware; 