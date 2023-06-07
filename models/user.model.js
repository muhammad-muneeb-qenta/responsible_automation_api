const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    Type:{type:Number,required:true},
    First_name:{type:String,required:true},
    Last_name:{type:String},
    Email:{type:String,required:true},
    Gender:{type:String},
    Password:{type:String,required:true},
    Hex:{type:String,required:true},
    TwoFAEnabled:{type:Boolean,required:true},
    Created_at:{type:Date,default:Date.now()}
})

var UserModel = mongoose.model("User",UserSchema)

module.exports = UserModel