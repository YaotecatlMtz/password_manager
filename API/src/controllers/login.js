const path = require('path');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const key = process.env.key;


class loginController{
    display(req, res){
        res.sendFile(path.join(__dirname, '../../../src/views/login.html'));
    }

    singIn(req, res){
        const { username, password } = req.body;
        console.log('answer ', req.body);
        User.findOne({username, password})
        .then(response=>{
            console.log(response);
            let token = jwt.sign({ 
                email:response.email,
                username:response.username
            }, key);
            res.send(token);
            // res.sendFile(path.join(__dirname, '../../../src/views/home.html'));
        }).catch(err=>{
            console.log('An error has occurred', err);
            res.sendStatus(500);
        });
    }
}


module.exports = new loginController();