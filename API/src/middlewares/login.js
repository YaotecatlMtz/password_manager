const jwt = require('jsonwebtoken');
const key = process.env.SECRET_KEY;

module.exports = (req, res, next)=>{
    const token = req.headers.authorization;
    jwt.verify(token, key, (err, decode)=>{
        if (err){
            res.status(401).send({msg:'Acceso denegado'});
        }else{
            req.user = decode; 
            next();
        }
    });
}