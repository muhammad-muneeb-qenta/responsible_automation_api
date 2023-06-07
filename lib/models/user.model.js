const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true},
    Password:{type:String,required:true},
    Created_at:{type:Date,default:Date.now()}
})

var UserModel = mongoose.model("User",UserSchema)

module.exports = UserModel