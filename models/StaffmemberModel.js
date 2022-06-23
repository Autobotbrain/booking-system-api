const mongoose = require('mongoose')

const Staffmember = new mongoose.Schema({
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
    nic:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    company:{
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
    tag:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('staffmembers',Staffmember)