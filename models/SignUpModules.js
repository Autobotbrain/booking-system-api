const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    nic:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
    },
})

module.exports = mongoose.model('staffmember',signUpTemplate)