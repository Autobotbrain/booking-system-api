const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
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
    Date:{
        type:Date,
        default:Date.now
    },
})

module.exports = mongoose.model('mytable',signUpTemplate)