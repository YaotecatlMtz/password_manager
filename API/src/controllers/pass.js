const path = require('path');

class passController{
    show(req, res){
        res.sendFile(path.join(__dirname, '../../../src/views/login.html'));
    }
}

module.exports = new passController();