const path =  require('path');

class HomeController{
    display(req, res){
        res.sendFile(path.join(__dirname, '../../../src/views/home.html'))
    }
}   

module.exports = new HomeController();