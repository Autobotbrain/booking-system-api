const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var DriverSchema = new Schema({
        firstname:{type:String,required:true},
        lastname:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        //ConfirmPassword:{type:String,required:true},
        phone_number:{type:Number,required:true},
        nic_number:{type:String,required:true},
        driving_licence_id:{type:String,required:true},
        address:{type:String,required:true},
        tag:{type:String,required:true}
        
});

module.exports = mongoose.model('DriverSignup',DriverSchema);