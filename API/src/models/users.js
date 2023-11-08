const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    fullName:{type:String, require:true},
    username:{type:String, require:true},
    email:{type:String, require:true},
    password:{type:String, require:true}
});

module.exports = model('usuarios', userSchema);