const {model, Schema} = require('mongoose');

const passModel = new Schema({
    id:{type:Number, require:true},
    email:{type:String, require:true},
    password:{type:String, require:true}
});

module.exports = model('passwords', passModel);