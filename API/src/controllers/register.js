const path = require('path');

class RegisterController{
    display(req, res){
        res.sendFile(path.join(__dirname, '../../../src/views/register.html'));
    }
}   

module.exports = new RegisterController();